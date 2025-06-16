import { Portfolio } from "@/components";
import { PortfolioItems } from "@/constants";
import type { Metadata } from "next";

// Do NOT use PageProps anywhere in your codebase!

export async function generateMetadata(
  { searchParams }: { searchParams: Record<string, string | string[] | undefined> }
): Promise<Metadata> {
  const id = searchParams?.id;
  let item = null;

  const itemId = Array.isArray(id) ? id[0] : id;
  if (itemId) {
    item = PortfolioItems.find(
      (itm: any) => String(itm.id) === String(itemId)
    );
  }

  if (!item) {
    return {
      title: "Our Portfolio",
      description:
        "Explore our past events, campaigns, and activities that showcase our commitment to public health.",
      openGraph: {
        title: "Our Portfolio",
        description:
          "Explore our past events, campaigns, and activities that showcase our commitment to public health.",
        url: "https://scoph.vercel.app/portfolio",
        images: [
          {
            url: "https://scoph.vercel.app/og-default.png",
            width: 1200,
            height: 630,
            alt: "Our Portfolio",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "Our Portfolio",
        description:
          "Explore our past events, campaigns, and activities that showcase our commitment to public health.",
        images: ["https://scoph.vercel.app/og-default.png"],
      },
    };
  }

  // Image logic: supports string or StaticImageData
  let image: string = "https://scoph.vercel.app/og-default.png";
  if (Array.isArray(item.images) && item.images.length > 0) {
    const img = item.images[0];
    if (typeof img === "string") {
      image = img.startsWith("http")
        ? img
        : `https://scoph.vercel.app${img}`;
    } else if (typeof img === "object" && img?.src) {
      image = img.src.startsWith("http")
        ? img.src
        : `https://scoph.vercel.app${img.src}`;
    }
  }

  return {
    title: item.title,
    description: item.description,
    openGraph: {
      title: item.title,
      description: item.description,
      url: `https://scoph.vercel.app/portfolio?id=${item.id}`,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: item.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: item.title,
      description: item.description,
      images: [image],
    },
  };
}

export default function Page() {
  return (
    <>
      <section className="relative flex items-center justify-center overflow-hidden mx-auto px-4 py-8">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="backdrop-blur-lg bg-orange-500 p-8 md:p-12 rounded-xl w-full shadow-xl border border-orange-400/20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
              Our Portfolio
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in-delay-2">
              Explore our past events, campaigns, and activities that showcase our commitment to public health.
            </p>
          </div>
        </div>
      </section>
      <Portfolio />
    </>
  );
}
