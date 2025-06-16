import { Suspense } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Poppins } from "next/font/google";
import "./globals.css";
import { NavigationProvider } from "@/components";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
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

const siteConfig = {
  name: "SCOPH-KU",
  title: "SCOPH-KU - Standing Committee on Public Health | Kenyatta University",
  description: "Official website of SCOPH-KU — a vibrant community of Kenyatta University medical students driving public health awareness, global health campaigns, and advocacy. Affiliated with MSAKE & IFMSA.",
  url: "https://scoph.vercel.app",
  ogImage: "https://scoph.vercel.app/og-image.png",
  logo: "https://scoph.vercel.app/logo.png",
  twitterHandle: "@SCOPHKU",
  themeColor: "#ea580c",
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  
  // Basic metadata
  applicationName: siteConfig.name,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  category: "Healthcare",
  classification: "Public Health Organization",

  // Keywords (enhanced)
  keywords: [
    "SCOPH-KU", "Kenyatta University", "Public Health", "Medical Students", "MSAKE", "IFMSA",
    "Global Health", "Health Campaigns", "Student Leadership", "Health Education",
    "Mental Health", "Communicable Diseases", "Non-communicable Diseases",
    "Health Equity", "Advocacy", "Kenya Medical Students", "Medical Outreach", "SCOPH",
    "Kenya Health", "Medical Student Association", "Public Health Advocacy",
    "Health Awareness", "Community Health", "Student Organizations Kenya"
  ],

  // Authors & Attribution
  authors: [
    {
      name: "SCOPH-KU Team",
      url: `${siteConfig.url}/about`,
    },
    {
      name: "Medical Students Association of Kenya (MSAKE)",
      url: "https://msake.org",
    },
  ],
  creator: "SCOPH-KU | Ulrich Consolidated",
  publisher: "Standing Committee on Public Health - Kenyatta University",

  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons (enhanced)
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: siteConfig.logo, sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: siteConfig.logo, sizes: "152x152", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: siteConfig.logo,
      },
    ],
  },

  // Manifest
  manifest: "/site.webmanifest",

  // Canonical and alternates
  alternates: {
    canonical: siteConfig.url,
    languages: {
      "en-US": `${siteConfig.url}/en`,
      "en-KE": `${siteConfig.url}/en-ke`,
    },
    types: {
      "application/rss+xml": `${siteConfig.url}/feed.xml`,
    },
  },

  // Open Graph (Enhanced)
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "SCOPH-KU: Standing Committee on Public Health at Kenyatta University",
        type: "image/png",
      },
      {
        url: `${siteConfig.url}/logo.png`,
        width: 1080,
        height: 1080,
        alt: "SCOPH-KU Logo",
        type: "image/png",
      },
    ],
    emails: ["info@scoph.vercel.app"],
    phoneNumbers: ["+254-113-885711"], // Add your actual phone number
    countryName: "Kenya",
  },

  // Twitter/X Card (Enhanced)
  twitter: {
    card: "summary_large_image",
    site: siteConfig.twitterHandle,
    creator: siteConfig.twitterHandle,
    title: "SCOPH-KU | Public Health Advocacy at Kenyatta University",
    description: "Medical students at Kenyatta University leading impactful public health campaigns and initiatives. Partnered with MSAKE & IFMSA.",
    images: {
      url: siteConfig.ogImage,
      alt: "SCOPH-KU: Public Health at Kenyatta University",
    },
  },

  // Format detection
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Additional metadata
  other: {
    // Apple specific
    "apple-mobile-web-app-title": siteConfig.name,
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",

    // Microsoft specific
    "msapplication-TileColor": siteConfig.themeColor,
    "msapplication-TileImage": siteConfig.logo,
    "msapplication-config": "/browserconfig.xml",

    // Theme and mobile optimization
    "theme-color": siteConfig.themeColor,
    "color-scheme": "light dark",
    "mobile-web-app-capable": "yes",

    // SEO enhancers
    "revisit-after": "7 days",
    "distribution": "Global",
    "rating": "General",
    "language": "English",
    "coverage": "Worldwide",
    "target": "all",

    // Social media specific metadata
    //"fb:app_id": "YOUR_FACEBOOK_APP_ID", // Replace with actual Facebook App ID
    //"fb:admins": "YOUR_FACEBOOK_ADMIN_ID", // Replace with actual Facebook Admin ID
    
    // LinkedIn specific
    "linkedin:owner": "SCOPH-KU",
    
    // Additional structured data hints
    "article:publisher": siteConfig.url,
    "article:author": "SCOPH-KU Team",
    
    // Geographic metadata
    "geo.region": "KE-30", // Kenya, Nairobi
    "geo.placename": "Nairobi, Kenya",
    "geo.position": "-1.2921;36.8219", // Coordinates for Nairobi
    "ICBM": "-1.2921, 36.8219",

    // Organization schema hints
    "organization": siteConfig.name,
    "organization:url": siteConfig.url,
    "organization:logo": siteConfig.logo,
    "organization:email": "info@scoph.vercel.app",
    "organization:phone": "+254-113-885711", // Add your actual phone number
    "organization:address": "Kenyatta University, Nairobi, Kenya",
  },

  // Verification (uncomment and add actual verification codes)
  // verification: {
  //   google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION",
  //   bing: "YOUR_BING_WEBMASTER_VERIFICATION",
  //   yahoo: "YOUR_YAHOO_SITE_EXPLORER_VERIFICATION",
  //   yandex: "YOUR_YANDEX_WEBMASTER_VERIFICATION",
  //   me: ["mailto:info@scoph.vercel.app", siteConfig.url],
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": siteConfig.name,
              "alternateName": "Standing Committee on Public Health - Kenyatta University",
              "url": siteConfig.url,
              "logo": siteConfig.logo,
              "description": siteConfig.description,
              "email": "info@scoph.vercel.app",
              "telephone": "+254-113-885711", // Add your actual phone number
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Kenyatta University",
                "addressLocality": "Nairobi",
                "addressCountry": "KE",
                "addressRegion": "Nairobi County"
              },
              "areaServed": "Kenya",
              "knowsAbout": [
                "Public Health",
                "Medical Education",
                "Health Advocacy",
                "Community Health",
                "Global Health"
              ],
              "memberOf": [
                {
                  "@type": "Organization",
                  "name": "Medical Students Association of Kenya",
                  "url": "https://msake.org"
                },
                {
                  "@type": "Organization", 
                  "name": "International Federation of Medical Students' Associations",
                  "url": "https://ifmsa.org"
                }
              ],
              "sameAs": [
                "https://twitter.com/SCOPHKU",
                "https://facebook.com/SCOPHKU",
                "https://instagram.com/SCOPHKU",
                "https://linkedin.com/company/scoph-ku"
              ]
            })
          }}
        />
        
        {/* Additional meta tags for better social sharing */}
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/geist-sans.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${poppins.variable} antialiased`}
        suppressHydrationWarning
      >
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
          </div>
        }>
            {children}
        </Suspense>
      </body>
    </html>
  );
}
