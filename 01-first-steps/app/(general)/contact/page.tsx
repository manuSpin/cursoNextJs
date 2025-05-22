import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact Page',
  description: 'This is where all the contact information is stored',
  keywords: ['contact', 'page', 'information'],
};

export default function ContactPage() {
  return (
    <span className="text-7xl">Contact Page</span>
  );
}
