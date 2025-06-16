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
  description: "The standing committee on public health - Kenyatta University (SCOPH-KU) website serves as the official digital platform for the SCOPH local office under the Medical Students Association of Kenya (MSAKE) and the International Federation of Medical Students' Associations (IFMSA). SCOPH-KU is a dynamic community of passionate medical students in Kenyatta University committed to raising awareness, initiating impactful health campaigns, and fostering a culture of proactive public health advocacy within and beyond Kenyatta University. Through innovative collaborations, educational outreach, and global networking, the committee addresses key public health concerns including communicable diseases, non-communicable diseases, mental health, and health equity.",
  
  metadataBase: new URL("https://scoph.vercel.app"),
  
  // Icons Configuration (using existing logo)
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/logo.png",
    }
  },

  // Enhanced Keywords
  keywords: [
    "SCOPH-KU",
    "Kenyatta University",
    "Public Health",
    "Medical Students Association of Kenya",
    "MSAKE",
    "IFMSA",
    "International Federation of Medical Students Associations",
    "Health Campaigns",
    "Health Advocacy",
    "Global Health",
    "Student Involvement",
    "Capacity Building",
    "Medical Students Kenya",
    "Health Education",
    "Community Health",
    "Preventive Medicine",
    "Health Promotion",
    "Medical Training",
    "Healthcare Leadership",
    "Public Health Initiatives",
    "Health Awareness",
    "Medical Research",
    "Healthcare Policy",
    "Health Equity",
    "Communicable Diseases",
    "Non-communicable Diseases",
    "Mental Health",
    "HIV/AIDS Awareness",
    "Malaria Prevention",
    "Breast Cancer Awareness",
    "Health Partnerships",
    "Medical Education",
    "Healthcare Innovation",
    "Student Organizations",
    "Health Outreach",
    "Medical Volunteering"
  ],

  // Authors and Creator Information
  authors: [
    {
      name: "SCOPH-KU Team",
      url: "https://scoph.vercel.app/about",
    },
    {
      name: "Medical Students Association of Kenya",
      url: "https://scoph.vercel.app",
    }
  ],
  creator: "SCOPH-KU | Ulrich Consolidated",
  publisher: "Standing Committee on Public Health - Kenyatta University",

  // Open Graph Configuration (using existing logo)
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["en_KE", "sw_KE"], // English Kenya and Swahili Kenya
    title: "SCOPH-KU | Standing Committee on Public Health - Kenyatta University",
    description: "Join SCOPH-KU, a dynamic community of medical students at Kenyatta University committed to public health advocacy, health campaigns, and global health initiatives. Part of MSAKE and IFMSA networks.",
    url: "https://scoph.vercel.app",
    siteName: "SCOPH-KU",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "SCOPH-KU - Standing Committee on Public Health at Kenyatta University. Medical students committed to health advocacy and global health initiatives.",
      }
    ],
    countryName: "Kenya",
  },

  // Twitter/X Card Configuration (using existing logo)
  twitter: {
    card: "summary_large_image",
    site: "@SCOPHKU", // Replace with actual Twitter handle
    creator: "@SCOPHKU", // Replace with actual Twitter handle
    title: "SCOPH-KU | Public Health Advocacy at Kenyatta University",
    description: "Dynamic community of medical students committed to health campaigns, global health initiatives, and public health advocacy. Join SCOPH-KU today! 🏥✨",
    images: ["/logo.png"],
  },

  // Additional Platform-Specific Meta Tags
  other: {
    // LinkedIn
    "linkedin:owner": "SCOPH-KU",
    
    // WhatsApp (using existing logo)
    "whatsapp:title": "SCOPH-KU | Public Health at Kenyatta University",
    "whatsapp:description": "Join medical students committed to health advocacy and global health initiatives 🏥",
    "whatsapp:image": "/logo.png",
    
    // Telegram (using existing logo)
    "telegram:channel": "@scophku", // Replace with actual Telegram channel
    "telegram:title": "SCOPH-KU Updates",
    "telegram:description": "Latest updates from Standing Committee on Public Health - Kenyatta University",
    "telegram:image": "/logo.png",
    
    // Pinterest (using existing logo)
    "pinterest:title": "SCOPH-KU Health Campaigns",
    "pinterest:description": "Inspiring public health initiatives by medical students at Kenyatta University",
    "pinterest:image": "/logo.png",
    "pinterest:id": "scophku", // Replace with actual Pinterest username
    
    // Instagram (using existing logo)
    "instagram:title": "SCOPH-KU | Health Advocacy",
    "instagram:description": "Medical students making a difference in public health 🏥✨ #PublicHealth #MedicalStudents #KenyattaUniversity",
    "instagram:image": "/logo.png",
    
    // TikTok (using existing logo)
    "tiktok:title": "SCOPH-KU Health Campaigns",
    "tiktok:description": "Medical students at Kenyatta University leading health advocacy initiatives 🏥",
    "tiktok:image": "/logo.png",
    
    // YouTube (using existing logo)
    "youtube:title": "SCOPH-KU Channel",
    "youtube:description": "Educational content and health campaigns by SCOPH-KU medical students",
    "youtube:image": "/logo.png",
    
    // Discord (using existing logo)
    "discord:title": "SCOPH-KU Community",
    "discord:description": "Join our Discord community for public health discussions and updates",
    "discord:image": "/logo.png",
    
    // WeChat (using existing logo)
    "wechat:title": "SCOPH-KU公共卫生委员会",
    "wechat:description": "肯雅塔大学医学生公共卫生倡导社区",
    "wechat:image": "/logo.png",
    
    // Apple-specific
    "apple-mobile-web-app-title": "SCOPH-KU",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    
    // Microsoft-specific (using existing logo)
    "msapplication-TileColor": "#ea580c",
    "msapplication-TileImage": "/logo.png",
    "msapplication-navbutton-color": "#ea580c",
    "msapplication-starturl": "/",
    "msapplication-window": "width=1024;height=768",
    
    // Theme colors for different platforms
    "theme-color": "#ea580c",
    
    // Geo-tagging
    "geo.region": "KE-30", // Nairobi County, Kenya
    "geo.placename": "Nairobi, Kenya",
    "geo.position": "-1.2921;36.8219", // Nairobi coordinates
    "ICBM": "-1.2921, 36.8219",
    
    // Language and locale
    "language": "en-KE",
    "content-language": "en-KE",
    
    // RSS/Atom feeds
    "alternate": "application/rss+xml",
    "rss": "/feed.xml",
    
    // Schema.org structured data reference
    "structured-data": "Organization, EducationalOrganization, MedicalOrganization",
    
    // Rating and content classification
    "rating": "General",
    "distribution": "Global",
    "revisit-after": "7 days",
    "expires": "never",
    
    // Copyright and ownership
    "copyright": "© 2025 SCOPH-KU, Kenyatta University",
    "owner": "Standing Committee on Public Health - Kenyatta University",
    
    // Contact information
    "contact": "info@scoph.vercel.app", // Replace with actual contact email
    "reply-to": "info@scoph.vercel.app",
    
    // Mobile optimization
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "mobile-web-app-status-bar-style": "default",
    
    // Security and privacy
    "referrer": "origin-when-cross-origin",
    "permissions-policy": "camera=(), microphone=(), geolocation=()",
    
    // Performance hints
    "dns-prefetch": "//fonts.googleapis.com",
    "preconnect": "//fonts.gstatic.com",
  },

  // Robots configuration
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

  // Canonical URL
  alternates: {
    canonical: "https://scoph.vercel.app",
    languages: {
      "en-US": "https://scoph.vercel.app/en",
      "en-KE": "https://scoph.vercel.app/en-ke",
    },
  },

  // Archive and historical versions
  archives: ["https://scoph.vercel.app/archive"],

  // Category classification
  category: "Health, Education, Medical, Student Organization",

  // App-specific configurations
  appLinks: {
    web: {
      url: "https://scoph.vercel.app",
      should_fallback: true,
    },
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
