import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pricing Page',
  description: 'This is the pricing page of the application',
  keywords: ['pricing', 'page', 'application'],
};

export default function PricingPage() {
  return (
    <span className="text-7xl" > Pricing Page</span >
  );
}
