import { Reveal } from "@/components/reveal";
import { WaveDivider } from "@/components/wave-divider";

export function History() {
  return (
    <section id="historia" className="bg-ocean-deep text-foam">
      <div className="relative">
        <img
          src="/images/history-waves.jpg"
          alt="Ondas do Atlântico vistas de cima, símbolo da visão da JOCUM"
          className="h-64 w-full object-cover outline-none md:h-80"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(6_52_69/0.15),rgb(6_52_69/0.92))]" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-5 pb-10">
          <Reveal>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-gold-soft">
              Origem e história
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl md:text-5xl">
              Ondas de jovens cobrindo a terra
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:gap-16 md:py-24">
        <Reveal>
          <h3 className="font-display text-2xl text-gold-soft">JOCUM no mundo</h3>
          <p className="mt-4 leading-relaxed text-sky">
            A JOCUM — Jovens Com Uma Missão, conhecida internacionalmente como YWAM —
            nasceu em 1960, a partir da visão que Deus deu a Loren Cunningham: ondas de
            jovens cobrindo todos os continentes com o evangelho de Jesus.
          </p>
          <p className="mt-4 leading-relaxed text-sky">
            O lema permanece o mesmo: <em>conhecer a Deus e fazê-lo conhecido</em>. Hoje a
            família JOCUM está presente em mais de 180 nações, com bases, escolas e
            voluntários que doam vida, talentos e profissões ao Reino.
          </p>
        </Reveal>
        <Reveal delayMs={120}>
          <h3 className="font-display text-2xl text-gold-soft">JOCUM João Pessoa</h3>
          <p className="mt-4 leading-relaxed text-sky">
            No litoral paraibano, a base é um canal: o mar nos inspira, o Sertão nos chama.
            João Pessoa — Porta do Sol — carrega uma vocação especial para os sertanejos e
            para os povos menos alcançados do Nordeste.
          </p>
          <p className="mt-4 leading-relaxed text-sky">
            Depois de um tempo de silêncio, a JOCUM João Pessoa está de volta em 2026, sob
            a liderança de Alcir e Simone, com o tema <strong>Raízes profundas, novos
            frutos</strong>. Não voltamos apenas para reabrir um prédio — voltamos para
            reativar um altar de missões.
          </p>
        </Reveal>
      </div>
      <WaveDivider className="text-foam" />
    </section>
  );
}
