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
  title: "SCOPH-KU",
  description: "The standing committee on public health - Kenyatta University (SCOPH-KU) website serves as the official digital platform for the SCOPH local office under the Medical Students Association of Kenya (MSAKE) and the International Federation of Medical Students' Associations (IFMSA). SCOPH-KU is a dynamic community of passionate medical students in Kenyatta University committed to raising awareness, initiating impactful health campaigns, and fostering a culture of proactive public health advocacy within and beyond Kenyatta University. Through innovative collaborations, educational outreach, and global networking, the committee addresses key public health concerns including communicable diseases, non-communicable diseases, mental health, and health equity. The website provides a vibrant and interactive space for showcasing past and ongoing health campaigns (Malaria, Breast Cancer, HIV/AIDS, etc.), introducing the local committee members behind SCOPH-KU's initiatives, sharing opportunities for student involvement, capacity building, and professional exchange, hosting a regularly updated blog to inform, educate, and engage students and the community on health-related topics, allowing students to sign up and become members of a global network of future public health champions. Designed with a modern aesthetic that blends bright-to-deep orange gradients with white, glassmorphic effects, animations, and interactive UI, the website reflects SCOPH's energy, professionalism, and forward-looking mission. Whether you're a medical student looking to contribute, a partner organization seeking collaboration, or simply someone passionate about public health, the SCOPH-KU website is your gateway to meaningful engagement, impactful projects, and lifelong learning in health leadership.",
  metadataBase: new URL("https://scoph.vercel.app"),
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/logo.png",
    }
  },
  keywords: [
    "SCOPH-KU",
    "Kenyatta University",
    "Public Health",
    "Medical Students Association of Kenya",
    "IFMSA",
    "Health Campaigns",
    "Health Advocacy",
    "Global Health",
    "Student Involvement",
    "Capacity Building",
  ],
  authors: [
    {
      name: "SCOPH-KU",
      url: "https://scoph.vercel.app",
    },
  ],
  creator: "Ulrich Consolidated",
  openGraph: {
    title: "SCOPH-KU",
    description:
      "The standing committee on public health - Kenyatta University (SCOPH-KU) website serves as the official digital platform for the SCOPH local office under the Medical Students Association of Kenya (MSAKE) and the International Federation of Medical Students' Associations (IFMSA).",
    url: "https://scoph.vercel.app",
    siteName: "SCOPH-KU",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "SCOPH-KU Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SCOPH-KU",
    description: "Standing Committee on Public Health - Kenyatta University. A dynamic community of medical students committed to public health advocacy.",
    images: ["/logo.png"],
  },
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
