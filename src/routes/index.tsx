import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Events } from "@/components/events";
import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { History } from "@/components/history";
import { WhatsappFloat } from "@/components/whatsapp-float";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <>
      <a
        href="#sobre"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-foam focus:px-4 focus:py-2 focus:text-ocean"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main>
        <Hero />
        <About />
        <History />
        <Gallery />
        <Events />
        <Contact />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
