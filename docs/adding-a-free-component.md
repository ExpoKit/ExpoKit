# Adding a free component

This guide applies to **free** registry items that ship in this repository. Pro-only items are not accepted
here.

## Folder layout

```
registry/ui/<name>/
  item.json
  demo.tsx
  src/components/ui/<name>.tsx
```

| File | Purpose |
| --- | --- |
| `item.json` | Slug, title, `tier: "free"`, category, description, props, dependencies |
| `demo.tsx` | Each `export function VariantName()` is one docs preview variant |
| `src/.../<name>.tsx` | Source the CLI copies into the user's app |

Example `item.json`:

```json
{
  "name": "rating",
  "title": "Rating",
  "tier": "free",
  "category": "Selection",
  "description": "Short summary of behaviour and motion.",
  "dependencies": [],
  "registryDependencies": ["kit"],
  "props": [["value", "number", "0", "Current rating."]]
}
```

- `dependencies` — npm packages (`react-native-svg`, `expo-haptics`, or the Reanimated stack for drag overlays).
- `registryDependencies` — always includes `"kit"`; add other ExpoKit components you import.

## Rules (summary)

1. **Expo Go, no custom native modules** — RN `Animated` + SVG; Reanimated + gesture handler only for
   finger-driven overlays (sheets, toasts).
2. **Theme via `useKit()`** — no hard-coded greys; accept `className` / root `style` where applicable.
3. **Springs, no gimmicky bounce** — use kit `motion` presets.
4. **Controlled + uncontrolled** patterns where it fits inputs.
5. **Accessibility** — roles, labels, 44pt targets, Reduce Motion and Dynamic Type (see existing components).
6. **Demos** — self-contained, realistic copy, theme-based colours (no random hex in demo chrome).

## Verify in this repo

```bash
npm ci
npm run typecheck
```

## Full docs

Props tables, live previews and installation: **[expokit.in/docs/components](https://expokit.in/docs/components)**.
