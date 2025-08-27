import { Inter, Lusitana } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

/* subsetting: en vez de cargar toda la fuente con cientos de caracteres que probablemente no uses, solo cargas lo necesario, reduciendo peso y mejorando la velocidad de carga. */

export const lusitana = Lusitana({
    weight: ["400", "700"],
    subsets: ["latin"],
});
