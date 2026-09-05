# Vida Vaquera del Norte

Medio editorial de vida vaquera para Baja California y San Diego. Next.js App Router, React y TypeScript; preparado para GitHub y Vercel.

## Ejecutar

Requiere Node.js 20.9 o posterior.

```sh
npm ci
npm run dev
npm run typecheck
npm run build
```

## Publicar en Vercel

Importar `ozcarprez/vida-vaquera-norte` y conservar el preset Next.js, con la raíz del repositorio como Root Directory. No requiere variables de entorno.

## Contenido y comportamiento

- `app/content.ts`: ciudades, agenda y guías.
- `app/page.tsx`: homepage, filtros de agenda, guías desplegables y propuestas comerciales.
- `app/globals.css`: diseño adaptable a escritorio y móvil.
- La agenda filtra por ciudad y por fechas; la fecha se evalúa en la zona America/Tijuana. Las fechas vencidas no aparecen en próximas fechas después de cargar el cliente. La edición histórica de septiembre de 2026 queda consultable.
- Los datos de eventos se tomaron de https://ferianacionaldetijuana.com/lineup/ y se consultaron el 4 de septiembre de 2026. No hay sincronización automática: actualizar y comprobar cada registro antes de promocionarlo.
- Las experiencias enlazan a Rancho Casian y el directorio a Cuadra. No se presentan como socios ni patrocinadores. Horarios, precios y disponibilidad se consultan directamente con los proveedores.
- Las guías tienen redacción propia y enlaces de referencia. Las imágenes son conceptuales generadas con IA y no documentan eventos ni establecimientos reales.
- No hay formularios, pagos, reservas internas, cuentas sociales ficticias, videos sin permiso ni cifras de audiencia inventadas. La propuesta comercial se descarga como texto; falta definir un contacto comercial antes de activar captación de interesados.
- Google Fonts se carga con alternativas del sistema. El sitio funciona sin esas fuentes, aunque cambia la tipografía.

## Próxima etapa

Ampliar fuentes por ciudad, implementar actualización editorial con revisión de fechas, definir contacto comercial y añadir videos propios o autorizados cuando existan. Los logotipos de prospectos de patrocinio no se publican como alianzas confirmadas.

