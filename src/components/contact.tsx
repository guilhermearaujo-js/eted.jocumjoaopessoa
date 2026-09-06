"use client";

import { CheckCircle2, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/reveal";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn, EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_DISPLAY, whatsappUrl } from "@/lib/utils";

type Status = "idle" | "sent";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [whatsappHref, setWhatsappHref] = useState(whatsappUrl());

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nome = String(data.get("nome") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const telefone = String(data.get("telefone") ?? "").trim();
    const mensagem = String(data.get("mensagem") ?? "").trim();

    if (nome.length < 2 || !email.includes("@") || telefone.length < 8 || mensagem.length < 8) {
      setError("Preencha nome, e-mail, telefone e uma mensagem com pelo menos algumas linhas.");
      return;
    }

    const payload = { nome, email, telefone, mensagem, at: new Date().toISOString() };
    try {
      const previous = JSON.parse(localStorage.getItem("eted-preinscricoes") ?? "[]") as unknown[];
      localStorage.setItem("eted-preinscricoes", JSON.stringify([...previous, payload]));
    } catch {
      /* ignore quota */
    }

    const text = [
      "Olá! Quero fazer a pré-inscrição da ETED JOCUM João Pessoa.",
      `Nome: ${nome}`,
      `E-mail: ${email}`,
      `Telefone: ${telefone}`,
      `Mensagem: ${mensagem}`,
    ].join("\n");

    setWhatsappHref(whatsappUrl(text));
    setError("");
    setStatus("sent");
    event.currentTarget.reset();
  }

  return (
    <section id="contato" className="bg-foam">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[0.9fr_1.1fr] md:py-28">
        <Reveal>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-gold">
            Contato
          </p>
          <div className="gold-rule mt-3" />
          <h2 className="mt-5 text-4xl text-ocean md:text-5xl">Vamos conversar sobre o seu chamado</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Envie sua pré-inscrição. A equipe responde pelo WhatsApp com os próximos passos,
            formulários e datas confirmadas.
          </p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <a
                href={whatsappUrl("Olá! Vim pelo site da ETED e gostaria de mais informações.")}
                className="flex min-h-11 items-center gap-3 text-ocean hover:text-ocean-mid"
                target="_blank"
                rel="noreferrer"
              >
                <span className="grid size-11 place-items-center rounded-md bg-sky">
                  <Phone className="size-4" />
                </span>
                <span>
                  <span className="block text-[0.68rem] uppercase tracking-[0.16em] text-muted">
                    WhatsApp
                  </span>
                  {WHATSAPP_DISPLAY}
                </span>
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="flex min-h-11 items-center gap-3 text-ocean hover:text-ocean-mid">
                <span className="grid size-11 place-items-center rounded-md bg-sky">
                  <Mail className="size-4" />
                </span>
                <span>
                  <span className="block text-[0.68rem] uppercase tracking-[0.16em] text-muted">
                    E-mail
                  </span>
                  {EMAIL}
                </span>
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                className="flex min-h-11 items-center gap-3 text-ocean hover:text-ocean-mid"
                target="_blank"
                rel="noreferrer"
              >
                <span className="grid size-11 place-items-center rounded-md bg-sky">
                  <Instagram className="size-4" />
                </span>
                <span>
                  <span className="block text-[0.68rem] uppercase tracking-[0.16em] text-muted">
                    Instagram
                  </span>
                  {INSTAGRAM_HANDLE}
                </span>
              </a>
            </li>
            <li className="flex items-start gap-3 text-ocean">
              <span className="grid size-11 place-items-center rounded-md bg-sky">
                <MapPin className="size-4" />
              </span>
              <span>
                <span className="block text-[0.68rem] uppercase tracking-[0.16em] text-muted">
                  Base
                </span>
                Rua Paulino dos Santos Coelho, 402 — Jardim Cidade Universitária,
                João Pessoa-PB. Confirme o endereço atual pelo WhatsApp.
              </span>
            </li>
          </ul>
        </Reveal>

        <Reveal delayMs={80}>
          <div className="relative z-40 rounded-xl bg-paper p-6 shadow-[var(--shadow-soft)] md:p-8">
            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <CheckCircle2 className="size-10 text-leaf-deep" />
                <h3 className="mt-4 font-display text-2xl text-ocean">Pré-inscrição registrada</h3>
                <p className="mt-2 max-w-sm text-sm text-muted">
                  Agora envie a mensagem pelo WhatsApp para a equipe confirmar as datas,
                  vagas e os próximos passos.
                </p>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(buttonVariants({ variant: "ocean", size: "lg" }), "mt-6")}
                >
                  Continuar no WhatsApp
                </a>
                <Button type="button" variant="outline" className="mt-3" onClick={() => setStatus("idle")}>
                  Enviar outra mensagem
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-4">
                <h3 className="font-display text-2xl text-ocean">Formulário de pré-inscrição</h3>
                <label className="grid gap-1.5 text-sm font-medium text-ocean">
                  Nome
                  <input
                    name="nome"
                    required
                    autoComplete="name"
                    className="h-11 rounded-md bg-foam px-3 font-normal text-ink shadow-input outline-none transition-[box-shadow] focus:shadow-input-focus"
                  />
                </label>
                <label className="grid gap-1.5 text-sm font-medium text-ocean">
                  E-mail
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="h-11 rounded-md bg-foam px-3 font-normal text-ink shadow-input outline-none transition-[box-shadow] focus:shadow-input-focus"
                  />
                </label>
                <label className="grid gap-1.5 text-sm font-medium text-ocean">
                  Telefone
                  <input
                    name="telefone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="(83) 99999-0000"
                    className="h-11 rounded-md bg-foam px-3 font-normal text-ink shadow-input outline-none transition-[box-shadow] placeholder:text-muted/70 focus:shadow-input-focus"
                  />
                </label>
                <label className="grid gap-1.5 text-sm font-medium text-ocean">
                  Mensagem
                  <textarea
                    name="mensagem"
                    required
                    rows={4}
                    placeholder="Conte um pouco do seu interesse na ETED..."
                    className="rounded-md bg-foam px-3 py-3 font-normal text-ink shadow-input outline-none transition-[box-shadow] placeholder:text-muted/70 focus:shadow-input-focus"
                  />
                </label>
                {error ? <p className="text-sm text-danger">{error}</p> : null}
                <Button type="submit" variant="ocean" size="lg">
                  Enviar pré-inscrição
                </Button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
