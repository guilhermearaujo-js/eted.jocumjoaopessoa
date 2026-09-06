import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_E164 = "5583999183853";
export const WHATSAPP_DISPLAY = "(83) 99918-3853";
export const EMAIL = "contato@jocumjoaopessoa.org.br";
export const INSTAGRAM_URL = "https://www.instagram.com/jocumjoaopessoa/";
export const INSTAGRAM_HANDLE = "@jocumjoaopessoa";

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${WHATSAPP_E164}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const NAV = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre a ETED" },
  { href: "#historia", label: "História JOCUM" },
  { href: "#eventos-anteriores", label: "Eventos Anteriores" },
  { href: "#proximos-eventos", label: "Próximos Eventos" },
  { href: "#contato", label: "Contato" },
] as const;
