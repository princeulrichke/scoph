import { Suspense } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Poppins } from "next/font/google";
import "./globals.css";
import { NavigationProvider } from "@/components";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  // variable: "--font-poppins",
  subsets: ["latin"],
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SCOPH-KU - Standing Committee on Public Health | Kenyatta University",
  description: "Official website of SCOPH-KU — a vibrant community of Kenyatta University medical students driving public health awareness, global health campaigns, and advocacy. Affiliated with MSAKE and IFMSA.",
  metadataBase: new URL("https://scoph.vercel.app"),

  // Icons
  icons: {
    icon: "https://scoph.vercel.app/logo.png",
    shortcut: "https://scoph.vercel.app/logo.png",
    apple: "https://scoph.vercel.app/logo.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "https://scoph.vercel.app/logo.png",
    },
  },

  // Keywords
  keywords: [
    "SCOPH-KU", "Kenyatta University", "Public Health", "Medical Students", "MSAKE", "IFMSA",
    "Global Health", "Health Campaigns", "Student Leadership", "Health Education",
    "Mental Health", "Communicable Diseases", "Non-communicable Diseases",
    "Health Equity", "Advocacy", "Kenya Medical Students", "Medical Outreach", "SCOPH"
  ],

  // Authors & Attribution
  authors: [
    {
      name: "SCOPH-KU Team",
      url: "https://scoph.vercel.app/about",
    },
    {
      name: "Medical Students Association of Kenya (MSAKE)",
      url: "https://msake.org",
    },
  ],
  creator: "SCOPH-KU | Ulrich Consolidated",
  publisher: "Standing Committee on Public Health - Kenyatta University",

  // Canonical
  alternates: {
    canonical: "https://scoph.vercel.app",
    languages: {
      "en-US": "https://scoph.vercel.app/en",
      "en-KE": "https://scoph.vercel.app/en-ke",
    },
  },

  // Open Graph (Facebook, WhatsApp, LinkedIn)
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://scoph.vercel.app",
    title: "SCOPH-KU | Standing Committee on Public Health - Kenyatta University",
    description: "Join SCOPH-KU, a dynamic community of medical students at Kenyatta University dedicated to public health advocacy, campaigns, and global health collaboration.",
    siteName: "SCOPH-KU",
    images: [
      {
        url: "https://scoph.vercel.app/og-image.png", // Use a banner-like image (recommended: 1200x630px)
        width: 1200,
        height: 630,
        alt: "SCOPH-KU: Standing Committee on Public Health at Kenyatta University",
      },
    ],
  },

  // Twitter/X Card
  twitter: {
    card: "summary_large_image",
    site: "@SCOPHKU",
    creator: "@SCOPHKU",
    title: "SCOPH-KU | Public Health Advocacy at Kenyatta University",
    description: "Medical students at Kenyatta University leading impactful public health campaigns and initiatives. Partnered with MSAKE & IFMSA.",
    images: ["https://scoph.vercel.app/og-image.png"],
  },

  // Platform-specific meta tags
  other: {
    // WhatsApp (uses Open Graph fallback)
    "whatsapp:title": "SCOPH-KU | Public Health at Kenyatta University",
    "whatsapp:description": "Kenyatta University medical students advancing global health and local awareness.",
    "whatsapp:image": "https://scoph.vercel.app/og-image.png",

    // Telegram
    "telegram:title": "SCOPH-KU - Public Health Initiatives",
    "telegram:description": "Join SCOPH-KU for impactful medical student-led campaigns and health advocacy.",
    "telegram:image": "https://scoph.vercel.app/og-image.png",

    // LinkedIn
    "linkedin:title": "SCOPH-KU | Public Health Committee",
    "linkedin:description": "Official page of SCOPH-KU - Educating and engaging in community health at Kenyatta University.",
    "linkedin:image": "https://scoph.vercel.app/og-image.png",

    // Instagram (fallback, not officially supported)
    "instagram:title": "SCOPH-KU | Health Advocacy",
    "instagram:description": "Follow SCOPH-KU for updates on public health campaigns and student initiatives.",
    "instagram:image": "https://scoph.vercel.app/og-image.png",

    // Pinterest
    "pinterest:title": "SCOPH-KU Health Campaigns",
    "pinterest:description": "Promoting public health with student-led initiatives at Kenyatta University.",
    "pinterest:image": "https://scoph.vercel.app/og-image.png",

    // TikTok
    "tiktok:title": "SCOPH-KU | Health Awareness",
    "tiktok:description": "Medical students leading health awareness and education campaigns.",
    "tiktok:image": "https://scoph.vercel.app/og-image.png",

    // YouTube
    "youtube:title": "SCOPH-KU Channel",
    "youtube:description": "Watch SCOPH-KU’s health outreach and educational content.",
    "youtube:image": "https://scoph.vercel.app/og-image.png",

    // Discord
    "discord:title": "SCOPH-KU Community",
    "discord:description": "Connect with fellow students passionate about public health and medicine.",
    "discord:image": "https://scoph.vercel.app/og-image.png",

    // Apple
    "apple-mobile-web-app-title": "SCOPH-KU",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",

    // Microsoft
    "msapplication-TileColor": "#ea580c",
    "msapplication-TileImage": "https://scoph.vercel.app/logo.png",

    // Mobile optimization
    "theme-color": "#ea580c",
    "format-detection": "telephone=no",

    // SEO Enhancers
    "robots": "index, follow",
    "googlebot": "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    "referrer": "origin-when-cross-origin",
    "rating": "General",
    "revisit-after": "7 days",
    "distribution": "Global",
  },
  // Verification and analytics (commented out until you have actual verification codes)
  // verification: {
  //   google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION",
  //   bing: "YOUR_BING_WEBMASTER_VERIFICATION",
  //   yahoo: "YOUR_YAHOO_SITE_EXPLORER_VERIFICATION",
  //   yandex: "YOUR_YANDEX_WEBMASTER_VERIFICATION",
  //   me: ["mailto:info@scoph.vercel.app", "https://scoph.vercel.app"],
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${poppins} antialiased`}
      >
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
        </div>}>
          <NavigationProvider>
            {children}
          </NavigationProvider>
        </Suspense>
      </body>
    </html>
  );
}
