import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Benefits } from "@/components/landing/Benefits";
import { Curriculum } from "@/components/landing/Curriculum";
import { Audience } from "@/components/landing/Audience";
import { Instructor } from "@/components/landing/Instructor";
import { EmailCapture } from "@/components/landing/EmailCapture";
import { Pricing } from "@/components/landing/Pricing";
import { Testimonials } from "@/components/landing/Testimonials";
import { Faq } from "@/components/landing/Faq";
import { Footer } from "@/components/landing/Footer";
import { AiAssistant } from "@/components/landing/AiAssistant";

const title = "Patentia Academy — Formación online sobre patentes";
const description =
  "Aprende a proteger tu invención: proceso de patente, búsqueda de anterioridades, costes y estrategia. Formación práctica para emprendedores, inventores y equipos de innovación.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "Formación en patentes — Patentia Academy",
          description,
          inLanguage: "es",
          provider: { "@type": "Organization", name: "Patentia Academy" },
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
        <Benefits />
        <Curriculum />
        <Audience />
        <Instructor />
        {/* Captura de email antes del bloque de precio */}
        <EmailCapture />
        <Pricing />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
      <AiAssistant />
    </div>
  );
}
