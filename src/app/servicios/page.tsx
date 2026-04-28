import type { Metadata } from "next";
import ServiciosClient from "@/components/ServiciosClient";

export const metadata: Metadata = {
  title: "Servicios | Asesoría Energética León",
  description:
    "Optimización de luz, gas y energía solar para hogares y pymes en España. Estudio gratuito.",
};

export default function ServiciosPage() {
  return <ServiciosClient />;
}
