import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: 'Metadata Homework - Modern Next.js Application',
    template: '%s | Metadata Homework'
  },
  description: 'A modern Next.js application showcasing best practices in metadata management, SEO optimization, and beautiful user interfaces. Built with React, TypeScript, and Tailwind CSS.',
  keywords: 'Next.js, React, TypeScript, SEO, metadata, web development, modern UI, Tailwind CSS',
  authors: [{ name: 'Metadata Homework Team' }],
  creator: 'Metadata Homework',
  publisher: 'Metadata Homework',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://khmer-calendar-homework-2-95eh-git-master-somalyleuks-projects.vercel.app/',
    siteName: 'Metadata Homework',
    title: 'Metadata Homework - Modern Next.js Application',
    description: 'A modern Next.js application showcasing best practices in metadata management, SEO optimization, and beautiful user interfaces. Built with React, TypeScript, and Tailwind CSS.',
    images: [
      {
        url: 'https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png',
        width: 1200,
        height: 630,
        alt: 'Metadata Homework - Modern Next.js Application with Beautiful UI',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Metadata Homework - Modern Next.js Application',
    description: 'A modern Next.js application showcasing best practices in metadata management, SEO optimization, and beautiful user interfaces. Built with React, TypeScript, and Tailwind CSS.',
    images: ['https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png'],
    creator: '@metadatahomework',
    site: '@metadatahomework',
  },
  alternates: {
    canonical: 'https://khmer-calendar-homework-2-95eh-git-master-somalyleuks-projects.vercel.app/',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'technology',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Home | Metadata Homework</title>
        <meta name="description" content="Welcome to Metadata Homework - A modern Next.js application showcasing best practices in metadata management, SEO optimization, and beautiful user interfaces. Built with React, TypeScript, and Tailwind CSS." />

        <meta property="og:url" content="https://khmer-calendar-homework-2-95eh-git-master-somalyleuks-projects.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home | Metadata Homework" />
        <meta property="og:description" content="Welcome to Metadata Homework - A modern Next.js application showcasing best practices in metadata management, SEO optimization, and beautiful user interfaces. Built with React, TypeScript, and Tailwind CSS." />
        <meta property="og:image" content="https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="khmer-calendar-homework-2-95eh-git-master-somalyleuks-projects.vercel.app" />
        <meta property="twitter:url" content="https://khmer-calendar-homework-2-95eh-git-master-somalyleuks-projects.vercel.app/" />
        <meta name="twitter:title" content="Home | Metadata Homework" />
        <meta name="twitter:description" content="Welcome to Metadata Homework - A modern Next.js application showcasing best practices in metadata management, SEO optimization, and beautiful user interfaces. Built with React, TypeScript, and Tailwind CSS." />
        <meta name="twitter:image" content="https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
