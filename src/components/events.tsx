import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const others = [
  {
    title: "Encontros de oração da base",
    when: "Mensais • 2026",
    text: "Altar aberto para a cidade, o Sertão e as nações. Confirme as datas no Instagram.",
  },
  {
    title: "Imersão no Sertão",
    when: "Campo curto • em breve",
    text: "Fins de semana e missões relâmpago entre comunidades sertanejas e povos menos alcançados.",
  },
  {
    title: "ETED 2027.1",
    when: "Fevereiro a junho de 2027",
    text: "Próximo ciclo completo. Entre na lista de interesse e receba o formulário quando abrir.",
  },
];

export function Events() {
  return (
    <section id="proximos-eventos" className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <Reveal className="max-w-2xl">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-gold">
            Próximos eventos
          </p>
          <div className="gold-rule mt-3" />
          <h2 className="mt-5 text-4xl text-ocean md:text-5xl">O próximo sim pode ser o seu</h2>
        </Reveal>

        <Reveal className="mt-12 overflow-hidden rounded-xl bg-ocean text-foam shadow-[var(--shadow-lift)] md:grid md:grid-cols-[1.15fr_0.85fr]">
          <div className="p-7 md:p-10">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold-soft">
              Destaque
            </p>
            <h3 className="mt-3 font-display text-3xl md:text-4xl">
              ETED 2026 — Raízes profundas, novos frutos
            </h3>
            <div className="mt-5 flex flex-col gap-2 text-sm text-sky">
              <p className="flex items-center gap-2">
                <CalendarDays className="size-4 text-gold" />
                Período previsto: julho a novembro de 2026
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="size-4 text-gold" />
                Base JOCUM João Pessoa • 3 meses teóricos + 2 de campo
              </p>
            </div>
            <p className="mt-5 leading-relaxed text-sky">
              A turma do segundo semestre vive o tema do ano: profundidade nas Escrituras e
              frutos para a cidade e as nações. Datas e vagas restantes são confirmadas
              diretamente com a equipe — o calendário público ainda pode ser ajustado.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                ["Inscrição", "a partir de R$ 300"],
                ["Fase teórica", "cerca de R$ 4.300"],
                ["Campo", "conforme destino"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-md bg-ocean-deep/50 p-3">
                  <p className="text-[0.68rem] uppercase tracking-[0.16em] text-gold-soft">{label}</p>
                  <p className="mt-1 text-sm">{value}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-sky/80">
              Valores de referência com base em turmas anteriores. Confirme o investimento
              atual pelo WhatsApp antes de planejar sua vinda.
            </p>
            <a href="#contato" className={cn(buttonVariants({ variant: "gold", size: "lg" }), "mt-7")}>
              Quero me pré-inscrever
              <ArrowRight className="size-4" />
            </a>
          </div>
          <img
            src="/images/lighthouse.jpg"
            alt="Farol do Cabo Branco ao entardecer em João Pessoa"
            className="hidden h-full min-h-72 w-full object-cover outline-none md:block"
          />
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {others.map((event, index) => (
            <Reveal key={event.title} delayMs={index * 80}>
              <article className="h-full rounded-lg bg-foam p-6 shadow-[var(--shadow-soft)]">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-leaf-deep">
                  {event.when}
                </p>
                <h3 className="mt-3 font-display text-xl text-ocean">{event.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{event.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
