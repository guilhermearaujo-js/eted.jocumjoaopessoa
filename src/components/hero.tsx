import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { WaveDivider } from "@/components/wave-divider";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section id="inicio" className="relative isolate min-h-svh overflow-hidden">
      <img
        src="/images/hero-coast.jpg"
        alt="Praia de Cabo Branco, João Pessoa, com ondas do Atlântico ao pôr do sol"
        className="hero-kenburns absolute inset-0 size-full object-cover outline-none"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(6_52_69/0.55)_0%,rgb(6_52_69/0.35)_38%,rgb(6_52_69/0.72)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgb(6_52_69/0.28)_100%)]" />

      <div className="relative mx-auto flex min-h-svh max-w-6xl flex-col justify-end px-5 pb-24 pt-32 md:justify-center md:pb-20 md:pt-24">
        <p className="reveal is-visible mb-5 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold-soft">
          Escola de Treinamento e Discipulado
        </p>
        <h1 className="max-w-3xl font-display text-[2.65rem] font-semibold text-foam sm:text-6xl md:text-7xl">
          ETED JOCUM João Pessoa
        </h1>
        <p className="mt-5 max-w-xl font-display text-xl text-sky md:text-2xl">
          Conhecer a Deus e fazê-lo conhecido
        </p>
        <p className="mt-4 text-sm font-medium tracking-[0.08em] text-gold-soft md:text-base">
          Raízes profundas, novos frutos • 2026
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a href="#contato" className={cn(buttonVariants({ variant: "gold", size: "lg" }))}>
            Faça sua pré-inscrição
            <ArrowRight className="size-4" />
          </a>
          <a href="#sobre" className={cn(buttonVariants({ variant: "ghost", size: "lg" }))}>
            Conhecer a escola
          </a>
        </div>
      </div>

      <WaveDivider className="absolute inset-x-0 bottom-0 z-10 text-paper" />
    </section>
  );
}
