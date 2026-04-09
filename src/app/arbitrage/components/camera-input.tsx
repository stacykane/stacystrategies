"use client";

import { useRef, useState, useCallback, useEffect } from "react";

interface CameraInputProps {
  onCapture: (base64: string, mediaType: string) => void;
}

export default function CameraInput({ onCapture }: CameraInputProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const galleryRef = useRef<HTMLInputElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [cameraOpen, setCameraOpen] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);

  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
    setCameraOpen(false);
  }, []);

  const openCamera = useCallback(async () => {
    setCameraError(null);
    setCameraOpen(true);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment", width: { ideal: 1920 }, height: { ideal: 1080 } },
        audio: false,
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
    } catch {
      setCameraError("Camera access denied. Please allow camera access in your browser settings and try again.");
      setCameraOpen(false);
    }
  }, []);

  // Clean up stream on unmount
  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
      }
    };
  }, []);

  const takePhoto = useCallback(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const MAX_SIZE = 1024;
    let width = video.videoWidth;
    let height = video.videoHeight;

    if (width > MAX_SIZE || height > MAX_SIZE) {
      if (width > height) {
        height = (height / width) * MAX_SIZE;
        width = MAX_SIZE;
      } else {
        width = (width / height) * MAX_SIZE;
        height = MAX_SIZE;
      }
    }

    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.drawImage(video, 0, 0, width, height);
    const dataUrl = canvas.toDataURL("image/jpeg", 0.8);
    const base64 = dataUrl.split(",")[1];

    stopCamera();
    onCapture(base64, "image/jpeg");
  }, [onCapture, stopCamera]);

  const handleGalleryFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const { base64, mediaType } = await compressImage(file);
      onCapture(base64, mediaType);
    } catch (err) {
      console.error("Image processing error:", err);
    }
    e.target.value = "";
  };

  // Live camera view
  if (cameraOpen) {
    return (
      <div className="fixed inset-0 z-50 bg-black flex flex-col">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="flex-1 object-cover w-full"
        />
        <canvas ref={canvasRef} className="hidden" />

        <div className="absolute bottom-0 left-0 right-0 pb-10 pt-6 px-6 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent">
          <button
            onClick={stopCamera}
            className="text-white text-lg font-medium px-4 py-2"
          >
            Cancel
          </button>

          {/* Big shutter button */}
          <button
            onClick={takePhoto}
            className="w-20 h-20 rounded-full border-4 border-white flex items-center justify-center active:scale-95 transition-transform"
          >
            <div className="w-16 h-16 rounded-full bg-white" />
          </button>

          <div className="w-16" /> {/* Spacer for centering */}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <input
        ref={galleryRef}
        type="file"
        accept="image/*"
        onChange={handleGalleryFile}
        className="hidden"
      />

      {cameraError && (
        <div className="w-full max-w-sm bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-400 rounded-xl p-4 text-sm text-center">
          {cameraError}
        </div>
      )}

      {/* Main scan button */}
      <button
        onClick={openCamera}
        className="w-full max-w-sm h-40 rounded-2xl bg-green-600 hover:bg-green-700 active:bg-green-800 text-white flex flex-col items-center justify-center gap-3 transition-colors shadow-lg shadow-green-600/20"
      >
        <svg className="w-14 h-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
        </svg>
        <span className="text-xl font-bold">Scan Items</span>
        <span className="text-sm text-green-100">Point at items and tap to scan</span>
      </button>

      {/* Secondary: choose from gallery */}
      <button
        onClick={() => galleryRef.current?.click()}
        className="text-green-700 dark:text-green-400 text-base font-medium py-3 px-6 rounded-xl hover:bg-green-50 dark:hover:bg-green-950/30 active:bg-green-100 transition-colors"
      >
        Choose from Photos
      </button>
    </div>
  );
}

function compressImage(file: File): Promise<{ base64: string; mediaType: string }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const MAX_SIZE = 1024;
        let { width, height } = img;

        if (width > MAX_SIZE || height > MAX_SIZE) {
          if (width > height) {
            height = (height / width) * MAX_SIZE;
            width = MAX_SIZE;
          } else {
            width = (width / height) * MAX_SIZE;
            height = MAX_SIZE;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("Could not get canvas context"));
          return;
        }
        ctx.drawImage(img, 0, 0, width, height);

        const dataUrl = canvas.toDataURL("image/jpeg", 0.8);
        const base64 = dataUrl.split(",")[1];
        resolve({ base64, mediaType: "image/jpeg" });
      };
      img.onerror = () => reject(new Error("Failed to load image"));
      img.src = e.target?.result as string;
    };
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsDataURL(file);
  });
}
