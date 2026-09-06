import { BookOpen, Compass, HeartHandshake } from "lucide-react";
import { Reveal } from "@/components/reveal";

const pillars = [
  {
    icon: HeartHandshake,
    title: "Discipulado",
    text: "Viver em comunidade, ser formado no caráter de Cristo e aprender a seguir Jesus no cotidiano.",
  },
  {
    icon: BookOpen,
    title: "Palavra e oração",
    text: "Imersão nas Escrituras, intimidade com Deus e um altar de intercessão pela cidade e pelas nações.",
  },
  {
    icon: Compass,
    title: "Prática missionária",
    text: "Dois meses de campo — Sertão, povos menos alcançados e o chamado de levar o evangelho até onde Ele enviar.",
  },
];

export function About() {
  return (
    <section id="sobre" className="relative bg-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2 md:items-center md:py-28">
        <Reveal>
          <img
            src="/images/about-circle.jpg"
            alt="Jovens em discipulado com Bíblias abertas em uma varanda à beira-mar"
            className="aspect-[4/3] w-full rounded-xl object-cover shadow-[var(--shadow-soft)]"
          />
        </Reveal>
        <div>
          <Reveal>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-gold">
              Sobre a ETED
            </p>
            <div className="gold-rule mt-3" />
            <h2 className="mt-5 text-4xl text-ocean md:text-5xl">Uma escola que forma discípulos</h2>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-muted">
              A Escola de Treinamento e Discipulado é o primeiro curso da Universidade das
              Nações e o pré-requisito para se tornar obreiro da JOCUM. Durante cinco meses
              você vive o chamado: três meses teóricos na base, em João Pessoa, e dois meses
              de campo missionário.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Aqui o foco não é apenas informação. É encontro com Deus, raízes na Palavra e
              pés no chão — do litoral paraibano ao Sertão e além.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4">
            {pillars.map((item, index) => (
              <Reveal key={item.title} delayMs={80 * (index + 1)}>
                <article className="flex gap-4 rounded-lg bg-foam p-4 shadow-[var(--shadow-soft)]">
                  <span className="grid size-11 shrink-0 place-items-center rounded-md bg-sky text-ocean">
                    <item.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg text-ocean">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{item.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
