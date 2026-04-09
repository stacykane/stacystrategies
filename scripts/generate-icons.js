#!/usr/bin/env node
/**
 * Generate PWA icons for the Arbitrage app.
 * Creates valid PNG files with a green background and white "$" symbol.
 * No external dependencies required - uses raw PNG binary encoding.
 */

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

function createPNG(width, height, roundedCorners = false) {
  const green = [22, 163, 74]; // #16a34a
  const white = [255, 255, 255];
  const transparent = [0, 0, 0, 0];

  // Create raw pixel data (RGBA)
  const pixels = Buffer.alloc(width * height * 4);

  const cx = width / 2;
  const cy = height / 2;
  const cornerRadius = roundedCorners ? Math.floor(width * 0.15) : 0;

  // Helper: check if point is within rounded rect
  function inRoundedRect(x, y) {
    if (cornerRadius === 0) return true;
    // Check corners
    const corners = [
      { cx: cornerRadius, cy: cornerRadius },
      { cx: width - cornerRadius - 1, cy: cornerRadius },
      { cx: cornerRadius, cy: height - cornerRadius - 1 },
      { cx: width - cornerRadius - 1, cy: height - cornerRadius - 1 },
    ];
    for (const c of corners) {
      const inCornerRegion =
        (x < cornerRadius && y < cornerRadius && c.cx === cornerRadius && c.cy === cornerRadius) ||
        (x >= width - cornerRadius && y < cornerRadius && c.cx === width - cornerRadius - 1 && c.cy === cornerRadius) ||
        (x < cornerRadius && y >= height - cornerRadius && c.cx === cornerRadius && c.cy === height - cornerRadius - 1) ||
        (x >= width - cornerRadius && y >= height - cornerRadius && c.cx === width - cornerRadius - 1 && c.cy === height - cornerRadius - 1);
      if (inCornerRegion) {
        const dx = x - c.cx;
        const dy = y - c.cy;
        if (dx * dx + dy * dy > cornerRadius * cornerRadius) return false;
      }
    }
    return true;
  }

  // Helper: check if point is part of the "$" glyph
  function inDollarSign(x, y) {
    const size = Math.min(width, height);
    // Normalize coordinates to 0-1 range centered
    const nx = (x - cx) / (size * 0.35);
    const ny = (y - cy) / (size * 0.35);

    const lineWidth = 0.12;

    // Vertical bar
    if (Math.abs(nx) < lineWidth && ny > -1.0 && ny < 1.0) return true;

    // Top curve (backwards C shape) - arc from top-center curving left
    const topCenterY = -0.45;
    const topRadius = 0.38;
    const topDx = nx;
    const topDy = ny - topCenterY;
    const topDist = Math.sqrt(topDx * topDx + topDy * topDy);
    if (topDist > topRadius - lineWidth && topDist < topRadius + lineWidth) {
      // Top half of S: open on the right side
      if (ny < topCenterY + topRadius * 0.5 && ny > topCenterY - topRadius) {
        if (!(nx > 0.15 && ny > topCenterY)) return true; // open right-bottom
      }
    }

    // Bottom curve (C shape) - arc from bottom-center curving right
    const botCenterY = 0.45;
    const botRadius = 0.38;
    const botDx = nx;
    const botDy = ny - botCenterY;
    const botDist = Math.sqrt(botDx * botDx + botDy * botDy);
    if (botDist > botRadius - lineWidth && botDist < botRadius + lineWidth) {
      if (ny > botCenterY - botRadius * 0.5 && ny < botCenterY + botRadius) {
        if (!(nx < -0.15 && ny < botCenterY)) return true; // open left-top
      }
    }

    return false;
  }

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      if (!inRoundedRect(x, y)) {
        pixels[idx] = 0;
        pixels[idx + 1] = 0;
        pixels[idx + 2] = 0;
        pixels[idx + 3] = 0;
      } else if (inDollarSign(x, y)) {
        pixels[idx] = white[0];
        pixels[idx + 1] = white[1];
        pixels[idx + 2] = white[2];
        pixels[idx + 3] = 255;
      } else {
        pixels[idx] = green[0];
        pixels[idx + 1] = green[1];
        pixels[idx + 2] = green[2];
        pixels[idx + 3] = 255;
      }
    }
  }

  // Encode as PNG
  // PNG filter: prepend 0 (None filter) to each row
  const rawData = Buffer.alloc(height * (1 + width * 4));
  for (let y = 0; y < height; y++) {
    rawData[y * (1 + width * 4)] = 0; // filter byte
    pixels.copy(rawData, y * (1 + width * 4) + 1, y * width * 4, (y + 1) * width * 4);
  }

  const compressed = zlib.deflateSync(rawData);

  // Build PNG file
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  function crc32(buf) {
    let crc = 0xFFFFFFFF;
    const table = [];
    for (let n = 0; n < 256; n++) {
      let c = n;
      for (let k = 0; k < 8; k++) {
        if (c & 1) c = 0xEDB88320 ^ (c >>> 1);
        else c = c >>> 1;
      }
      table[n] = c;
    }
    for (let i = 0; i < buf.length; i++) {
      crc = table[(crc ^ buf[i]) & 0xFF] ^ (crc >>> 8);
    }
    return (crc ^ 0xFFFFFFFF) >>> 0;
  }

  function makeChunk(type, data) {
    const typeBytes = Buffer.from(type, 'ascii');
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length);
    const crcInput = Buffer.concat([typeBytes, data]);
    const crcVal = Buffer.alloc(4);
    crcVal.writeUInt32BE(crc32(crcInput));
    return Buffer.concat([len, typeBytes, data, crcVal]);
  }

  // IHDR
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // color type: RGBA
  ihdr[10] = 0; // compression
  ihdr[11] = 0; // filter
  ihdr[12] = 0; // interlace

  const ihdrChunk = makeChunk('IHDR', ihdr);
  const idatChunk = makeChunk('IDAT', compressed);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

const outDir = path.join(__dirname, '..', 'public', 'arbitrage');

const icons = [
  { name: 'icon-192.png', size: 192, rounded: false },
  { name: 'icon-512.png', size: 512, rounded: true },
  { name: 'apple-touch-icon.png', size: 180, rounded: false },
];

for (const icon of icons) {
  console.log(`Generating ${icon.name} (${icon.size}x${icon.size})...`);
  const png = createPNG(icon.size, icon.size, icon.rounded);
  fs.writeFileSync(path.join(outDir, icon.name), png);
  console.log(`  Written: ${path.join(outDir, icon.name)} (${png.length} bytes)`);
}

console.log('Done!');
