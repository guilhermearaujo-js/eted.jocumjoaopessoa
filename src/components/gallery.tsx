"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/reveal";

const photos = [
  {
    src: "/images/gallery-rhema.jpg",
    title: "Rhema",
    caption: "A Palavra que transforma — estudo, silêncio e revelação.",
  },
  {
    src: "/images/gallery-worship.jpg",
    title: "Dá-lhe Ouvidos",
    caption: "Ouvir a voz de Deus e responder com a vida inteira.",
  },
  {
    src: "/images/gallery-sertao.jpg",
    title: "Oasis",
    caption: "Água viva no chão seco do Sertão.",
  },
  {
    src: "/images/gallery-field.jpg",
    title: "Campo",
    caption: "Pés no pó, evangelho nas mãos, chamado nas nações.",
  },
  {
    src: "/images/gallery-community.jpg",
    title: "Comunhão",
    caption: "A mesa que forma família e fortalece o envio.",
  },
  {
    src: "/images/gallery-prayer.jpg",
    title: "Litoral",
    caption: "Onde as ondas de João Pessoa encontram o chamado.",
  },
];

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <section id="eventos-anteriores" className="bg-foam">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <Reveal className="max-w-2xl">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-gold">
            Eventos anteriores
          </p>
          <div className="gold-rule mt-3" />
          <h2 className="mt-5 text-4xl text-ocean md:text-5xl">Memórias que preparam o próximo sim</h2>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-muted">
            Veja como foram os eventos anteriores e prepare-se para viver o seu. Rhema,
            Dá-lhe Ouvidos, Oasis e tantos outros tempos de treinamento, campo e comunhão.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <Reveal key={photo.title} delayMs={index * 70}>
              <button
                type="button"
                onClick={() => setOpen(index)}
                className="group w-full overflow-hidden rounded-lg bg-paper text-left shadow-[var(--shadow-soft)] transition-[transform,box-shadow] duration-200 hover:shadow-[var(--shadow-lift)]"
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="p-4">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-gold">
                    {photo.title}
                  </p>
                  <p className="mt-1 text-sm text-muted">{photo.caption}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {open !== null ? (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-ocean-deep/88 p-4"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
          aria-label={photos[open].title}
        >
          <button
            type="button"
            className="absolute right-4 top-4 grid size-11 place-items-center rounded-md text-foam"
            aria-label="Fechar"
            onClick={() => setOpen(null)}
          >
            <X className="size-6" />
          </button>
          <figure
            className="max-h-[90svh] max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={photos[open].src}
              alt={photos[open].caption}
              className="max-h-[78svh] w-full rounded-lg object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-sky">
              <strong className="text-foam">{photos[open].title}.</strong> {photos[open].caption}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </section>
  );
}
