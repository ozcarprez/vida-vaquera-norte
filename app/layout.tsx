import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vida Vaquera del Norte | Baja California y San Diego',
  description: 'Planes, caballos, música y estilo vaquero. Descubre la agenda y las experiencias de Baja California para nuestra comunidad a ambos lados de la frontera.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
