import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home',
  description: 'This is the landing page of the application',
  keywords: ['home', 'page', 'landing', 'application'],
};

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <span className="text-5xl">Hola mundo</span>
      </main>
    </div>
  );
}
