# MedicoShield Frontend

Doctor-facing dashboard for AI-powered medical documentation, pre-discharge audit, and consent capture. Built for Indian ER doctors who need information-dense, fast-to-scan interfaces in a medical-legal context.

## Tech Stack

- **Next.js 16** with React 19 and App Router
- **TailwindCSS v4** with PostCSS plugin
- **ShadCN/ui** (16 components: sidebar, button, card, badge, input, label, select, checkbox, table, skeleton, alert, separator, sheet, tooltip, avatar, dropdown-menu)
- **Lucide React** for icons
- **TypeScript** with strict mode
- Static export (`output: "export"`) — no SSR

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000. The dev server uses Turbopack.

To build for production:

```bash
npm run build
```

Outputs static files to `out/` — deploy to Vercel, Netlify, or any static host.

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Dashboard | Stats overview, patient search, quick actions, recent activity |
| `/documentation` | Documentation | Patient form + sparse notes input, AI-augmented discharge summary output |
| `/audit` | Risk Audit | Pre-discharge documentation gap analysis with risk score ring and findings |
| `/consent` | Consent | Patient/signatory form, acknowledgments, digital signature canvas |

## Project Structure

```
app/
  layout.tsx              # Root layout — fonts (Inter + IBM Plex Mono), metadata
  globals.css             # Theme tokens, brand colors, custom utilities
  page.tsx                # Dashboard
  documentation/page.tsx  # Documentation augmentation
  audit/page.tsx          # Pre-discharge audit
  consent/page.tsx        # Consent capture

components/
  layout/
    app-shell.tsx         # SidebarProvider + SidebarInset wrapper (client)
    app-sidebar.tsx       # Dark instrument-panel sidebar with LED indicators
    app-header.tsx        # Header with live clock, notifications, status chip
  dashboard/
    stats-cards.tsx       # 4 stat cards (discharges, consents, alerts, risk score)
    patient-search.tsx    # UHID/mobile search
    quick-actions.tsx     # New Discharge, New Consent, Run Audit
    recent-activity.tsx   # Activity table with status badges
  documentation/
    patient-form.tsx      # Patient name, age/gender, condition template select
    notes-input.tsx       # Sparse clinical notes textarea with char count
    augmented-output.tsx  # AI-augmented discharge summary display
  audit/
    doc-preview.tsx       # Monospaced documentation preview
    risk-score.tsx        # SVG ring with dynamic risk score
    findings-list.tsx     # Severity-grouped findings with legal citations
  consent/
    consent-form.tsx      # Patient details, signatory, acknowledgments
    signature-canvas.tsx  # HTML5 canvas for digital signature (mouse + touch)
    consent-success.tsx   # Success confirmation with summary
  ui/                     # ShadCN/ui primitives (do not edit directly)

types/index.ts            # TypeScript interfaces (Patient, Physician, Audit, Consent)
lib/api.ts                # API client (base URL from NEXT_PUBLIC_API_URL)
lib/utils.ts              # cn() utility (clsx + tailwind-merge)
hooks/use-mobile.ts       # Mobile detection hook
```

## Design System

**Aesthetic**: "Command Center meets Clinical Instrument" — dense, information-rich, premium feel for a serious medical-legal tool.

### Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Primary | `#1e3a5f` | Headers, sidebar, primary actions |
| Secondary | `#2d5a87` | Hover states, focus rings |
| Success | `#059669` | Consent module, positive states |
| Warning | `#d97706` | Alerts, LAMA indicators |
| Error | `#dc2626` | Critical findings, risk indicators |
| Background | `#f5f7fa` | Page background |

### Typography

- **Sans**: Inter (body text, UI elements)
- **Mono**: IBM Plex Mono (data readouts, IDs, medical notes)

### Custom CSS Utilities

| Class | Purpose |
|-------|---------|
| `.card-instrument` | Content cards with refined borders and hover shadow |
| `.section-label` | Uppercase 10px label with letter-spacing |
| `.mono-readout` | Monospaced 11px data display |
| `.sidebar-panel` | Dark sidebar with radial gradient + noise texture |

### Key UI Patterns

- Dark sidebar with LED-style active indicators (glowing blue bar)
- Live clock in header with system status chip
- SVG risk score ring with severity-based coloring on audit page
- Emerald accent throughout consent module
- LAMA cases highlighted with amber styling

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `NEXT_PUBLIC_API_URL` | `http://localhost:8000/api/v1` | Backend API base URL |

## Backend API

The frontend expects a FastAPI backend at the configured API URL with these endpoints:

- `POST /documentation/augment` — Transform sparse notes into augmented documentation
- `POST /audit/pre-discharge` — Run documentation gap analysis
- `POST /consent/capture` — Capture digital consent with signature
- `GET /templates/` — List condition templates

Currently all data is mock/hardcoded in the frontend components. Wire up by replacing mock state with calls to `lib/api.ts`.

## Deployment

Static export deploys to any CDN/static host. For Vercel:

```bash
npx vercel
```

The `next.config.ts` is already configured with `output: "export"` and `images.unoptimized: true`.
