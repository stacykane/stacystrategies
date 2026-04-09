import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic();

const SYSTEM_PROMPT = `You are an expert appraiser, antiques dealer, and resale pricing analyst with deep knowledge of:
- eBay completed/sold listings and current market values
- Amazon marketplace pricing
- Specialty marketplaces: Chairish (furniture/decor), Reverb (music gear), 1stDibs (high-end antiques/art), Poshmark (clothing/accessories), Mercari (general goods), Etsy (vintage/handmade), Ruby Lane (antiques/collectibles), Invaluable (fine art/auction), Heritage Auctions (coins/stamps/memorabilia), AbeBooks (rare books), Discogs (vinyl/music), COMC (trading cards), Catawiki (collectibles), Swappa (electronics), ThredUp (clothing), Grailed (streetwear/designer), StockX (sneakers/streetwear), Whatnot (collectibles/live auctions)
- Coin, stamp, book, art, and memorabilia collecting markets
- American history artifact values
- Vintage and antique furniture, jewelry, and clothing values
- Platform fee structures

TASK: Analyze the photo. Identify every distinct sellable item visible. For each item, provide:
1. What it is (specific identification - brand, era, maker if identifiable)
2. Category (Books, Art, Jewelry, Electronics, Furniture, Clothing, Coins, Games, Music, Collectibles, Vintage, Kitchenware, Sports, Toys, Other)
3. Estimated condition (Excellent, Very Good, Good, Fair, Poor)
4. Brief description (what makes it valuable or not)
5. Estimated purchase price at a thrift store or estate sale
6. Resale prices on relevant marketplaces (always include eBay; include Amazon if applicable; include the single BEST niche marketplace for this specific item)
7. Platform fees for each marketplace
8. Net price after fees
9. A one-line actionable selling tip

IMPORTANT RULES:
- Be specific about item identification. "Blue ceramic vase" is bad. "Mid-century modern ceramic vase, likely Haeger or similar American pottery, c.1960s" is good.
- Be realistic about prices. Use your knowledge of actual sold listings.
- Focus on items with real resale value. Skip generic mass-produced items worth under $5 unless they're part of a valuable set.
- If you can identify a brand, maker, or specific edition, ALWAYS mention it.
- For collections (coins, stamps, cards), estimate the collection as a whole AND call out any individual standout pieces.
- Sort items by margin (highest profit first).
- If no sellable items are visible, return an empty items array.

RESPOND WITH ONLY VALID JSON matching this exact schema (no markdown, no code fences, no explanation):

{
  "items": [
    {
      "name": "string - specific item name",
      "category": "string - one of the categories listed above",
      "condition": "Excellent | Very Good | Good | Fair | Poor",
      "description": "string - what it is and why it has value",
      "estimatedPurchasePrice": number,
      "marketplaces": [
        {
          "name": "string - marketplace name",
          "estimatedPrice": number,
          "feePct": number,
          "netPrice": number
        }
      ],
      "bestMarketplace": "string - name of highest net price marketplace",
      "bestNetPrice": number,
      "margin": number,
      "marginPct": number,
      "quickTip": "string - one actionable selling tip"
    }
  ],
  "summary": {
    "totalItems": number,
    "totalEstimatedMargin": number,
    "topPick": "string - name of highest margin item"
  }
}`;

export async function POST(request: NextRequest) {
  try {
    const { image, mediaType } = await request.json();

    if (!image || !mediaType) {
      return NextResponse.json(
        { error: "Missing image or mediaType" },
        { status: 400 }
      );
    }

    const response = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 4096,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "image",
              source: {
                type: "base64",
                media_type: mediaType,
                data: image,
              },
            },
            {
              type: "text",
              text: "Analyze this image for resale opportunities. Identify every sellable item and provide pricing estimates.",
            },
          ],
        },
      ],
      system: SYSTEM_PROMPT,
    });

    const textBlock = response.content.find((block) => block.type === "text");
    if (!textBlock || textBlock.type !== "text") {
      return NextResponse.json(
        { error: "No response from AI" },
        { status: 500 }
      );
    }

    let parsed;
    try {
      parsed = JSON.parse(textBlock.text);
    } catch {
      // Try to extract JSON from the response if it has extra text
      const jsonMatch = textBlock.text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        parsed = JSON.parse(jsonMatch[0]);
      } else {
        return NextResponse.json(
          { error: "Failed to parse AI response" },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(parsed);
  } catch (error: unknown) {
    console.error("Arbitrage analyze error:", error);
    const message =
      error instanceof Error ? error.message : "Analysis failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
