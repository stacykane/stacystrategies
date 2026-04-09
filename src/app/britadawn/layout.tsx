import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brita Dawn Coaching | Trust Yourself. Live Your Life from Freedom.",
  description:
    "Brita Dawn is a certified coach helping people access deeper solutions for freedom and effectiveness through body awareness, self-trust, and courageous action.",
};

export default function BritaDawnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
