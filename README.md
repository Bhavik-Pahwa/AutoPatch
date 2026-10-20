# AutoPatch

A client-only interactive concept prototype for resilient browser automation.

## Run

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. No account, backend, or API keys are needed.

```sh
npm run build          # TypeScript + production build
npm run preview        # Preview production build
npm test               # Playback and shared-state integrity tests
node scripts/smoke.mjs # Browser journey tests; requires dev server on port 5173
```

For browser checks, install Chromium with `npx playwright install chromium` if needed. Screenshots are written to `artifacts/`.

## Demonstration

1. Enter Mission Control from the overview.
2. Inspect Product Price Monitor and run the selector-failure simulation.
3. Inspect failure to enter the Healing Center.
4. Play or step through the recovery lifecycle, then inspect repair evidence.
5. Switch to **Validation Failed** to see a rejected candidate preserve the original version.
6. Review Architecture for implementation status and unresolved research.

All nine PRD routes are supported. Workflow creation, registry search, status filters, interactive React Flow canvases, repair diffs, version history, execution drawers, keyboard search (`Ctrl/Cmd K`), and mobile navigation are implemented.

## Integrity and state

- Zustand holds shared workflow, repair, and execution records.
- LocalStorage (`autopatch-demo-v1`) persists created workflows, completed simulation history, and sidebar preferences.
- One deterministic reducer controls recovery playback; timer cleanup prevents stale events after pause, reset, scenario change, or navigation.
- Failed validation retains original code and version. Completed sessions are idempotent, and historical replays cannot downgrade newer local versions.
- **Reset demo data** restores all initial fixtures.
- Chart totals derive from execution records. All targets use reserved `example.com` domains.

## Prototype boundaries

There is no TinyFish integration, real browser execution, AI diagnosis, repair generation, compiler, authentication, or backend. Code previews are fixed illustrative examples, not compiler output. Playwright is used only for developer UI tests, never as the product's automation runtime.

## UI foundation

React, TypeScript, Vite, Tailwind CSS, shadcn/ui (Radix), React Router, React Flow, Motion, Recharts, Prism, Zustand, Lucide, and locally bundled fonts.

Figma library discovery was attempted for Sidebar, Card, and Tabs components; those searches returned no matching assets. The application uses a custom visual system with shadcn primitives instead of claiming a sourced Figma template.
