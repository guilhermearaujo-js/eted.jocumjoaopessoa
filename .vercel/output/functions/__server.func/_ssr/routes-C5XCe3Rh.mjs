import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as MapPin, c as HeartHandshake, d as CalendarDays, f as BookOpen, i as Menu, l as Compass, o as Mail, p as ArrowRight, r as Phone, s as Instagram, t as X, u as CircleCheck } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C5XCe3Rh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var WHATSAPP_E164 = "5583999183853";
var WHATSAPP_DISPLAY = "(83) 99918-3853";
var EMAIL = "contato@jocumjoaopessoa.org.br";
var INSTAGRAM_URL = "https://www.instagram.com/jocumjoaopessoa/";
var INSTAGRAM_HANDLE = "@jocumjoaopessoa";
function whatsappUrl(message) {
	const base = `https://wa.me/${WHATSAPP_E164}`;
	if (!message) return base;
	return `${base}?text=${encodeURIComponent(message)}`;
}
var NAV = [
	{
		href: "#inicio",
		label: "Início"
	},
	{
		href: "#sobre",
		label: "Sobre a ETED"
	},
	{
		href: "#historia",
		label: "História JOCUM"
	},
	{
		href: "#eventos-anteriores",
		label: "Eventos Anteriores"
	},
	{
		href: "#proximos-eventos",
		label: "Próximos Eventos"
	},
	{
		href: "#contato",
		label: "Contato"
	}
];
function Reveal({ children, className, delayMs = 0 }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			el.classList.add("is-visible");
			return;
		}
		const observer = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting) {
				el.classList.add("is-visible");
				observer.disconnect();
			}
		}, {
			threshold: .14,
			rootMargin: "0px 0px -8% 0px"
		});
		observer.observe(el);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn("reveal", className),
		style: { transitionDelay: `${delayMs}ms` },
		children
	});
}
var pillars = [
	{
		icon: HeartHandshake,
		title: "Discipulado",
		text: "Viver em comunidade, ser formado no caráter de Cristo e aprender a seguir Jesus no cotidiano."
	},
	{
		icon: BookOpen,
		title: "Palavra e oração",
		text: "Imersão nas Escrituras, intimidade com Deus e um altar de intercessão pela cidade e pelas nações."
	},
	{
		icon: Compass,
		title: "Prática missionária",
		text: "Dois meses de campo — Sertão, povos menos alcançados e o chamado de levar o evangelho até onde Ele enviar."
	}
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "sobre",
		className: "relative bg-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2 md:items-center md:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/about-circle.jpg",
				alt: "Jovens em discipulado com Bíblias abertas em uma varanda à beira-mar",
				className: "aspect-[4/3] w-full rounded-xl object-cover shadow-[var(--shadow-soft)]"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-gold",
					children: "Sobre a ETED"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mt-3" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 text-4xl text-ocean md:text-5xl",
					children: "Uma escola que forma discípulos"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-[1.05rem] leading-relaxed text-muted",
					children: "A Escola de Treinamento e Discipulado é o primeiro curso da Universidade das Nações e o pré-requisito para se tornar obreiro da JOCUM. Durante cinco meses você vive o chamado: três meses teóricos na base, em João Pessoa, e dois meses de campo missionário."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 leading-relaxed text-muted",
					children: "Aqui o foco não é apenas informação. É encontro com Deus, raízes na Palavra e pés no chão — do litoral paraibano ao Sertão e além."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4",
				children: pillars.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delayMs: 80 * (index + 1),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "flex gap-4 rounded-lg bg-foam p-4 shadow-[var(--shadow-soft)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-11 shrink-0 place-items-center rounded-md bg-sky text-ocean",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg text-ocean",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm leading-relaxed text-muted",
							children: item.text
						})] })]
					})
				}, item.title))
			})] })]
		})
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-[transform,background-color,color,box-shadow,opacity] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			gold: "bg-gold text-ocean-deep shadow-[0_8px_24px_rgb(196_163_90/0.28)] hover:bg-gold-soft",
			ocean: "bg-ocean text-foam hover:bg-ocean-mid",
			outline: "bg-transparent text-ocean shadow-[inset_0_0_0_1px_rgb(10_77_104/0.22)] hover:bg-sky",
			ghost: "bg-transparent text-foam hover:bg-foam/12",
			light: "bg-foam text-ocean hover:bg-paper"
		},
		size: {
			md: "h-11 rounded-md px-5 text-sm",
			lg: "h-12 rounded-lg px-6 text-[0.95rem]"
		}
	},
	defaultVariants: {
		variant: "gold",
		size: "md"
	}
});
function Button({ className, variant, size, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function Contact() {
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [error, setError] = (0, import_react.useState)("");
	const [whatsappHref, setWhatsappHref] = (0, import_react.useState)(whatsappUrl());
	function onSubmit(event) {
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
		const payload = {
			nome,
			email,
			telefone,
			mensagem,
			at: (/* @__PURE__ */ new Date()).toISOString()
		};
		try {
			const previous = JSON.parse(localStorage.getItem("eted-preinscricoes") ?? "[]");
			localStorage.setItem("eted-preinscricoes", JSON.stringify([...previous, payload]));
		} catch {}
		const text = [
			"Olá! Quero fazer a pré-inscrição da ETED JOCUM João Pessoa.",
			`Nome: ${nome}`,
			`E-mail: ${email}`,
			`Telefone: ${telefone}`,
			`Mensagem: ${mensagem}`
		].join("\n");
		setWhatsappHref(whatsappUrl(text));
		setError("");
		setStatus("sent");
		event.currentTarget.reset();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contato",
		className: "bg-foam",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[0.9fr_1.1fr] md:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-gold",
					children: "Contato"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mt-3" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 text-4xl text-ocean md:text-5xl",
					children: "Vamos conversar sobre o seu chamado"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 leading-relaxed text-muted",
					children: "Envie sua pré-inscrição. A equipe responde pelo WhatsApp com os próximos passos, formulários e datas confirmadas."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-8 space-y-4 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: whatsappUrl("Olá! Vim pelo site da ETED e gostaria de mais informações."),
							className: "flex min-h-11 items-center gap-3 text-ocean hover:text-ocean-mid",
							target: "_blank",
							rel: "noreferrer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-11 place-items-center rounded-md bg-sky",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[0.68rem] uppercase tracking-[0.16em] text-muted",
								children: "WhatsApp"
							}), WHATSAPP_DISPLAY] })]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `mailto:${EMAIL}`,
							className: "flex min-h-11 items-center gap-3 text-ocean hover:text-ocean-mid",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-11 place-items-center rounded-md bg-sky",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[0.68rem] uppercase tracking-[0.16em] text-muted",
								children: "E-mail"
							}), EMAIL] })]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: INSTAGRAM_URL,
							className: "flex min-h-11 items-center gap-3 text-ocean hover:text-ocean-mid",
							target: "_blank",
							rel: "noreferrer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-11 place-items-center rounded-md bg-sky",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[0.68rem] uppercase tracking-[0.16em] text-muted",
								children: "Instagram"
							}), INSTAGRAM_HANDLE] })]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3 text-ocean",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-11 place-items-center rounded-md bg-sky",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[0.68rem] uppercase tracking-[0.16em] text-muted",
								children: "Base"
							}), "Rua Paulino dos Santos Coelho, 402 — Jardim Cidade Universitária, João Pessoa-PB. Confirme o endereço atual pelo WhatsApp."] })]
						})
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delayMs: 80,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative z-40 rounded-xl bg-paper p-6 shadow-[var(--shadow-soft)] md:p-8",
					children: status === "sent" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center justify-center py-8 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-10 text-leaf-deep" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display text-2xl text-ocean",
								children: "Pré-inscrição registrada"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-sm text-sm text-muted",
								children: "Agora envie a mensagem pelo WhatsApp para a equipe confirmar as datas, vagas e os próximos passos."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: whatsappHref,
								target: "_blank",
								rel: "noreferrer",
								className: cn(buttonVariants({
									variant: "ocean",
									size: "lg"
								}), "mt-6"),
								children: "Continuar no WhatsApp"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "outline",
								className: "mt-3",
								onClick: () => setStatus("idle"),
								children: "Enviar outra mensagem"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						className: "grid gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl text-ocean",
								children: "Formulário de pré-inscrição"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "grid gap-1.5 text-sm font-medium text-ocean",
								children: ["Nome", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									name: "nome",
									required: true,
									autoComplete: "name",
									className: "h-11 rounded-md bg-foam px-3 font-normal text-ink shadow-input outline-none transition-[box-shadow] focus:shadow-input-focus"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "grid gap-1.5 text-sm font-medium text-ocean",
								children: ["E-mail", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									name: "email",
									type: "email",
									required: true,
									autoComplete: "email",
									className: "h-11 rounded-md bg-foam px-3 font-normal text-ink shadow-input outline-none transition-[box-shadow] focus:shadow-input-focus"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "grid gap-1.5 text-sm font-medium text-ocean",
								children: ["Telefone", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									name: "telefone",
									type: "tel",
									required: true,
									autoComplete: "tel",
									placeholder: "(83) 99999-0000",
									className: "h-11 rounded-md bg-foam px-3 font-normal text-ink shadow-input outline-none transition-[box-shadow] placeholder:text-muted/70 focus:shadow-input-focus"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "grid gap-1.5 text-sm font-medium text-ocean",
								children: ["Mensagem", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									name: "mensagem",
									required: true,
									rows: 4,
									placeholder: "Conte um pouco do seu interesse na ETED...",
									className: "rounded-md bg-foam px-3 py-3 font-normal text-ink shadow-input outline-none transition-[box-shadow] placeholder:text-muted/70 focus:shadow-input-focus"
								})]
							}),
							error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-danger",
								children: error
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								variant: "ocean",
								size: "lg",
								children: "Enviar pré-inscrição"
							})
						]
					})
				})
			})]
		})
	});
}
var others = [
	{
		title: "Encontros de oração da base",
		when: "Mensais • 2026",
		text: "Altar aberto para a cidade, o Sertão e as nações. Confirme as datas no Instagram."
	},
	{
		title: "Imersão no Sertão",
		when: "Campo curto • em breve",
		text: "Fins de semana e missões relâmpago entre comunidades sertanejas e povos menos alcançados."
	},
	{
		title: "ETED 2027.1",
		when: "Fevereiro a junho de 2027",
		text: "Próximo ciclo completo. Entre na lista de interesse e receba o formulário quando abrir."
	}
];
function Events() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "proximos-eventos",
		className: "bg-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-20 md:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-gold",
							children: "Próximos eventos"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mt-3" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 text-4xl text-ocean md:text-5xl",
							children: "O próximo sim pode ser o seu"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "mt-12 overflow-hidden rounded-xl bg-ocean text-foam shadow-[var(--shadow-lift)] md:grid md:grid-cols-[1.15fr_0.85fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-7 md:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold-soft",
								children: "Destaque"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-3xl md:text-4xl",
								children: "ETED 2026 — Raízes profundas, novos frutos"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex flex-col gap-2 text-sm text-sky",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-4 text-gold" }), "Período previsto: julho a novembro de 2026"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 text-gold" }), "Base JOCUM João Pessoa • 3 meses teóricos + 2 de campo"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 leading-relaxed text-sky",
								children: "A turma do segundo semestre vive o tema do ano: profundidade nas Escrituras e frutos para a cidade e as nações. Datas e vagas restantes são confirmadas diretamente com a equipe — o calendário público ainda pode ser ajustado."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 grid gap-3 sm:grid-cols-3",
								children: [
									["Inscrição", "a partir de R$ 300"],
									["Fase teórica", "cerca de R$ 4.300"],
									["Campo", "conforme destino"]
								].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-md bg-ocean-deep/50 p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[0.68rem] uppercase tracking-[0.16em] text-gold-soft",
										children: label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm",
										children: value
									})]
								}, label))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-xs text-sky/80",
								children: "Valores de referência com base em turmas anteriores. Confirme o investimento atual pelo WhatsApp antes de planejar sua vinda."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#contato",
								className: cn(buttonVariants({
									variant: "gold",
									size: "lg"
								}), "mt-7"),
								children: ["Quero me pré-inscrever", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/lighthouse.jpg",
						alt: "Farol do Cabo Branco ao entardecer em João Pessoa",
						className: "hidden h-full min-h-72 w-full object-cover outline-none md:block"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 md:grid-cols-3",
					children: others.map((event, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delayMs: index * 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "h-full rounded-lg bg-foam p-6 shadow-[var(--shadow-soft)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-leaf-deep",
									children: event.when
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 font-display text-xl text-ocean",
									children: event.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted",
									children: event.text
								})
							]
						})
					}, event.title))
				})
			]
		})
	});
}
function Logo({ inverted = false, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: "#inicio",
		className: cn("flex items-center gap-3", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("grid size-11 place-items-center rounded-md", inverted ? "bg-foam/12 text-gold" : "bg-ocean text-gold"),
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 32 32",
				className: "size-7",
				fill: "none",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M8 14c3 4 5-4 8 0s5-4 8 0",
						stroke: "currentColor",
						strokeWidth: "1.6",
						strokeLinecap: "round"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M6 19c3.5 4 6-4 10 0s6.5-4 10 0",
						stroke: "currentColor",
						strokeWidth: "1.6",
						strokeLinecap: "round",
						opacity: "0.7"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M16 7v5M14 9h4",
						stroke: "currentColor",
						strokeWidth: "1.6",
						strokeLinecap: "round"
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "leading-tight",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("block text-[0.68rem] font-semibold uppercase tracking-[0.2em]", inverted ? "text-gold-soft" : "text-gold"),
				children: "JOCUM João Pessoa"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("font-display text-[1.35rem] font-semibold tracking-tight", inverted ? "text-foam" : "text-ocean"),
				children: "ETED"
			})]
		})]
	});
}
function WaveDivider({ className, flip = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pointer-events-none leading-none", className),
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 1440 88",
			preserveAspectRatio: "none",
			className: cn("block h-12 w-full md:h-16", flip && "rotate-180"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "currentColor",
				d: "M0 44c160 36 320-36 480 0s320-36 480 0 320-36 480 0v44H0z"
			})
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative bg-ocean-deep text-sky",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WaveDivider, { className: "absolute inset-x-0 -top-10 text-ocean-deep md:-top-14" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { inverted: true }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-sm font-display text-xl text-foam",
							children: "Conhecer a Deus e fazê-lo conhecido."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm",
							children: "Raízes profundas, novos frutos • João Pessoa, 2026."
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold-soft",
						children: "Navegação"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2 text-sm",
						children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: item.href,
							className: "hover:text-foam",
							children: item.label
						}) }, item.href))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold-soft",
						children: "Redes e contato"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-3 space-y-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: whatsappUrl(),
								className: "hover:text-foam",
								target: "_blank",
								rel: "noreferrer",
								children: ["WhatsApp ", WHATSAPP_DISPLAY]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${EMAIL}`,
								className: "hover:text-foam",
								children: EMAIL
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: INSTAGRAM_URL,
								className: "inline-flex items-center gap-2 hover:text-foam",
								target: "_blank",
								rel: "noreferrer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "size-4" }), "@jocumjoaopessoa"]
							}) })
						]
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-foam/10 px-5 py-5 text-center text-xs text-sky/70",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" JOCUM João Pessoa — Jovens Com Uma Missão. Todos os direitos reservados."
				]
			})
		]
	});
}
var photos = [
	{
		src: "/images/gallery-rhema.jpg",
		title: "Rhema",
		caption: "A Palavra que transforma — estudo, silêncio e revelação."
	},
	{
		src: "/images/gallery-worship.jpg",
		title: "Dá-lhe Ouvidos",
		caption: "Ouvir a voz de Deus e responder com a vida inteira."
	},
	{
		src: "/images/gallery-sertao.jpg",
		title: "Oasis",
		caption: "Água viva no chão seco do Sertão."
	},
	{
		src: "/images/gallery-field.jpg",
		title: "Campo",
		caption: "Pés no pó, evangelho nas mãos, chamado nas nações."
	},
	{
		src: "/images/gallery-community.jpg",
		title: "Comunhão",
		caption: "A mesa que forma família e fortalece o envio."
	},
	{
		src: "/images/gallery-prayer.jpg",
		title: "Litoral",
		caption: "Onde as ondas de João Pessoa encontram o chamado."
	}
];
function Gallery() {
	const [open, setOpen] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (open === null) return;
		const onKey = (event) => {
			if (event.key === "Escape") setOpen(null);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "eventos-anteriores",
		className: "bg-foam",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-20 md:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-gold",
						children: "Eventos anteriores"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mt-3" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 text-4xl text-ocean md:text-5xl",
						children: "Memórias que preparam o próximo sim"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-[1.05rem] leading-relaxed text-muted",
						children: "Veja como foram os eventos anteriores e prepare-se para viver o seu. Rhema, Dá-lhe Ouvidos, Oasis e tantos outros tempos de treinamento, campo e comunhão."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: photos.map((photo, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delayMs: index * 70,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setOpen(index),
						className: "group w-full overflow-hidden rounded-lg bg-paper text-left shadow-[var(--shadow-soft)] transition-[transform,box-shadow] duration-200 hover:shadow-[var(--shadow-lift)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: photo.src,
							alt: photo.caption,
							className: "aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]",
							loading: "lazy"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-gold",
								children: photo.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: photo.caption
							})]
						})]
					})
				}, photo.title))
			})]
		}), open !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fixed inset-0 z-50 grid place-items-center bg-ocean-deep/88 p-4",
			onClick: () => setOpen(null),
			role: "dialog",
			"aria-modal": "true",
			"aria-label": photos[open].title,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "absolute right-4 top-4 grid size-11 place-items-center rounded-md text-foam",
				"aria-label": "Fechar",
				onClick: () => setOpen(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-6" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "max-h-[90svh] max-w-4xl",
				onClick: (event) => event.stopPropagation(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: photos[open].src,
					alt: photos[open].caption,
					className: "max-h-[78svh] w-full rounded-lg object-contain"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
					className: "mt-3 text-center text-sm text-sky",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
							className: "text-foam",
							children: [photos[open].title, "."]
						}),
						" ",
						photos[open].caption
					]
				})]
			})]
		}) : null]
	});
}
function Header() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("#inicio");
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		const ids = NAV.map((item) => item.href.slice(1));
		const observer = new IntersectionObserver((entries) => {
			const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (visible?.target.id) setActive(`#${visible.target.id}`);
		}, {
			rootMargin: "-30% 0px -55% 0px",
			threshold: [
				.1,
				.3,
				.6
			]
		});
		for (const id of ids) {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		}
		return () => observer.disconnect();
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	const inverted = !scrolled && !open;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,backdrop-filter] duration-200", scrolled || open ? "bg-foam/92 shadow-[0_1px_0_rgb(10_77_104/0.08)] backdrop-blur-md" : "bg-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-5 md:h-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { inverted }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 lg:flex",
					"aria-label": "Principal",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: cn("rounded-md px-3 py-2 text-[0.82rem] font-medium transition-colors duration-150", inverted ? active === item.href ? "text-gold" : "text-foam/80 hover:text-foam" : active === item.href ? "text-ocean" : "text-muted hover:text-ocean"),
						children: item.label
					}, item.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#contato",
					className: cn(buttonVariants({
						variant: inverted ? "gold" : "ocean",
						size: "md"
					}), "hidden lg:inline-flex"),
					children: "Pré-inscrição"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: cn("grid size-11 place-items-center rounded-md lg:hidden", inverted ? "text-foam" : "text-ocean"),
					"aria-expanded": open,
					"aria-controls": "menu-mobile",
					"aria-label": open ? "Fechar menu" : "Abrir menu",
					onClick: () => setOpen((value) => !value),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-6" })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "menu-mobile",
			className: cn("overflow-hidden border-t border-ocean/8 bg-foam transition-[max-height,opacity] duration-200 ease-out lg:hidden", open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col px-5 py-4",
				"aria-label": "Mobile",
				children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: item.href,
					onClick: () => setOpen(false),
					className: "flex min-h-11 items-center border-b border-ocean/8 font-display text-xl text-ocean last:border-0",
					children: item.label
				}, item.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#contato",
					onClick: () => setOpen(false),
					className: cn(buttonVariants({
						variant: "ocean",
						size: "lg"
					}), "mt-4"),
					children: "Faça sua pré-inscrição"
				})]
			})
		})]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "inicio",
		className: "relative isolate min-h-svh overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/hero-coast.jpg",
				alt: "Praia de Cabo Branco, João Pessoa, com ondas do Atlântico ao pôr do sol",
				className: "hero-kenburns absolute inset-0 size-full object-cover outline-none",
				fetchPriority: "high"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,rgb(6_52_69/0.55)_0%,rgb(6_52_69/0.35)_38%,rgb(6_52_69/0.72)_100%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgb(6_52_69/0.28)_100%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto flex min-h-svh max-w-6xl flex-col justify-end px-5 pb-24 pt-32 md:justify-center md:pb-20 md:pt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "reveal is-visible mb-5 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold-soft",
						children: "Escola de Treinamento e Discipulado"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "max-w-3xl font-display text-[2.65rem] font-semibold text-foam sm:text-6xl md:text-7xl",
						children: "ETED JOCUM João Pessoa"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl font-display text-xl text-sky md:text-2xl",
						children: "Conhecer a Deus e fazê-lo conhecido"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm font-medium tracking-[0.08em] text-gold-soft md:text-base",
						children: "Raízes profundas, novos frutos • 2026"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-9 flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#contato",
							className: cn(buttonVariants({
								variant: "gold",
								size: "lg"
							})),
							children: ["Faça sua pré-inscrição", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#sobre",
							className: cn(buttonVariants({
								variant: "ghost",
								size: "lg"
							})),
							children: "Conhecer a escola"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WaveDivider, { className: "absolute inset-x-0 bottom-0 z-10 text-paper" })
		]
	});
}
function History() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "historia",
		className: "bg-ocean-deep text-foam",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/history-waves.jpg",
						alt: "Ondas do Atlântico vistas de cima, símbolo da visão da JOCUM",
						className: "h-64 w-full object-cover outline-none md:h-80"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,rgb(6_52_69/0.15),rgb(6_52_69/0.92))]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-5 pb-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-gold-soft",
							children: "Origem e história"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 max-w-2xl font-display text-4xl md:text-5xl",
							children: "Ondas de jovens cobrindo a terra"
						})] })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:gap-16 md:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl text-gold-soft",
						children: "JOCUM no mundo"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 leading-relaxed text-sky",
						children: "A JOCUM — Jovens Com Uma Missão, conhecida internacionalmente como YWAM — nasceu em 1960, a partir da visão que Deus deu a Loren Cunningham: ondas de jovens cobrindo todos os continentes com o evangelho de Jesus."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 leading-relaxed text-sky",
						children: [
							"O lema permanece o mesmo: ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "conhecer a Deus e fazê-lo conhecido" }),
							". Hoje a família JOCUM está presente em mais de 180 nações, com bases, escolas e voluntários que doam vida, talentos e profissões ao Reino."
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delayMs: 120,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl text-gold-soft",
							children: "JOCUM João Pessoa"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 leading-relaxed text-sky",
							children: "No litoral paraibano, a base é um canal: o mar nos inspira, o Sertão nos chama. João Pessoa — Porta do Sol — carrega uma vocação especial para os sertanejos e para os povos menos alcançados do Nordeste."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 leading-relaxed text-sky",
							children: [
								"Depois de um tempo de silêncio, a JOCUM João Pessoa está de volta em 2026, sob a liderança de Alcir e Simone, com o tema ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Raízes profundas, novos frutos" }),
								". Não voltamos apenas para reabrir um prédio — voltamos para reativar um altar de missões."
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WaveDivider, { className: "text-foam" })
		]
	});
}
function WhatsappFloat() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: whatsappUrl("Olá! Vim pelo site da ETED JOCUM João Pessoa e gostaria de mais informações."),
		target: "_blank",
		rel: "noreferrer",
		"aria-label": `Falar no WhatsApp ${WHATSAPP_DISPLAY}`,
		className: "fixed bottom-5 right-5 z-20 grid size-14 place-items-center rounded-full bg-whatsapp text-foam shadow-[0_12px_30px_rgb(31_138_76/0.35)] transition-transform duration-150 hover:scale-[1.04] active:scale-[0.96]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			className: "size-7",
			fill: "currentColor",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.02Zm-7.01 15.24h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.55-3.7 8.22-8.23 8.22Zm4.51-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.8-.79.97-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.17-.48-.29Z" })
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#sobre",
			className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-foam focus:px-4 focus:py-2 focus:text-ocean",
			children: "Pular para o conteúdo"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(History, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Events, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappFloat, {})
	] });
}
//#endregion
export { Home as component };
