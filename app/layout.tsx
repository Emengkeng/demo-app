import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { EventopProvider } from '../components/eventop-provider';
import { Nav } from '../components/nav';
import { TourStatusBar } from '../components/TourStatusBar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title:       'Eventop Demo',
  description: 'AI-powered guided tours for any React app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <EventopProvider>
          <div className="app">
            <Nav />
            <TourStatusBar />
            <main className="main">{children}</main>
          </div>
        </EventopProvider>
      </body>
    </html>
  );
}