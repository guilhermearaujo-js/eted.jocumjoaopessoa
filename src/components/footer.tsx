import { Instagram } from "lucide-react";
import { Logo } from "@/components/logo";
import { WaveDivider } from "@/components/wave-divider";
import { EMAIL, INSTAGRAM_URL, NAV, WHATSAPP_DISPLAY, whatsappUrl } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="relative bg-ocean-deep text-sky">
      <WaveDivider className="absolute inset-x-0 -top-10 text-ocean-deep md:-top-14" />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Logo inverted />
          <p className="mt-4 max-w-sm font-display text-xl text-foam">
            Conhecer a Deus e fazê-lo conhecido.
          </p>
          <p className="mt-2 text-sm">Raízes profundas, novos frutos • João Pessoa, 2026.</p>
        </div>
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold-soft">
            Navegação
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-foam">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold-soft">
            Redes e contato
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={whatsappUrl()} className="hover:text-foam" target="_blank" rel="noreferrer">
                WhatsApp {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="hover:text-foam">
                {EMAIL}
              </a>
            </li>
            <li>
              <a href={INSTAGRAM_URL} className="inline-flex items-center gap-2 hover:text-foam" target="_blank" rel="noreferrer">
                <Instagram className="size-4" />
                @jocumjoaopessoa
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-foam/10 px-5 py-5 text-center text-xs text-sky/70">
        © {new Date().getFullYear()} JOCUM João Pessoa — Jovens Com Uma Missão. Todos os direitos reservados.
      </div>
    </footer>
  );
}
