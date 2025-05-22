import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About Page',
  description: 'This is the about page of the application',
  keywords: ['about', 'page', 'application'],
};

export default function AboutPage() {
  return (
    <span className="text-7xl">About Page</span>
  );
}
