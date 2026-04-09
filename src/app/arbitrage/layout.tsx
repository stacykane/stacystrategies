import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Arbitrage - Instant Resale Pricing",
  description:
    "Snap a photo, get instant resale prices. Find hidden treasure at thrift stores, estate sales, and consignment shops.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Arbitrage",
  },
  manifest: "/arbitrage/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#16a34a",
};

export default function ArbitrageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-stone-50 dark:bg-stone-950">
      {children}
    </div>
  );
}
