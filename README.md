# Salazar & Reyes Abogados

Landing page demo para un bufete de abogados en Medellín, Antioquia. Construida con [Astro](https://astro.build).

## Requisitos

- Node.js >= 22.12.0
- pnpm

## Comandos

| Comando         | Acción                                      |
| :--------------- | :------------------------------------------- |
| `pnpm install`    | Instala las dependencias                     |
| `pnpm dev`        | Inicia el servidor local en `localhost:4321` |
| `pnpm build`      | Genera el sitio de producción en `./dist/`   |
| `pnpm preview`    | Previsualiza el build antes de desplegar     |

## Configuración

Copia `.env.example` a `.env` y completa las variables:

```sh
cp .env.example .env
```

- `PUBLIC_WEB3FORMS_ACCESS_KEY` — access key gratuita de [Web3Forms](https://web3forms.com), usada por el formulario de contacto.
- `PUBLIC_CALENDLY_URL` — link de tu evento en [Calendly](https://calendly.com), usado por los botones "Agenda tu consulta".

## Estructura

```text
src/
├── components/   # Header, Hero, Benefits, Services, Testimonials, ContactForm, Footer, CalendlyModal
├── layouts/       # Layout.astro (fuentes, paleta de color, animaciones globales)
├── lib/           # Helpers (calendly.ts)
└── pages/
    └── index.astro
```
