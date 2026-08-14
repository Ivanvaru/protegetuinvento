import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import {
  Hero,
  TrustStrip,
  Problem,
  Resources,
  Roadmap,
  Outcomes,
  ForWhom,
  Samples,
  PriceBlock,
  Faq,
  FinalCta,
  Independence,
  Footer,
} from "@/components/landing/Sections";
import { PRICE_AMOUNT, brand } from "@/config/site";

const title = "Patentes y modelos de utilidad en España — Formación práctica";
const description =
  "Formación práctica e independiente para entender el proceso de patentes y modelos de utilidad en España: itinerario, cuaderno de trabajo y guías. Acceso por 9,99 €.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: brand.productName,
          description,
          brand: { "@type": "Brand", name: brand.name },
          offers: {
            "@type": "Offer",
            price: PRICE_AMOUNT,
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
          },
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Problem />
        <Resources />
        <Roadmap />
        <Outcomes />
        <ForWhom />
        <Samples />
        <PriceBlock />
        <Faq />
        <FinalCta />
        <Independence />
      </main>
      <Footer />
    </div>
  );
}
