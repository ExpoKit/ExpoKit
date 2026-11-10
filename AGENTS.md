# Agents working in this repository

This is the **public** ExpoKit mirror: free `registry/` items, `@expokit/cli`, and `expo-charts` only.

## Before you edit

- Read [CONTRIBUTING.md](CONTRIBUTING.md) — fork PRs are not merged here.
- Pro registry items, the website, and admin tools are **not** in this tree.

## Layout

| Path | What |
| --- | --- |
| `registry/ui`, `registry/charts`, `registry/lib`, … | Free copy-paste sources and `item.json` metadata |
| `packages/cli` | CLI published as `@expokit/cli` |
| `packages/charts` | `expo-charts` on npm |
| `skills/`, `.claude-plugin/`, `.mcp.json` | Agent integration |

## Checks

```bash
npm ci && npm test && npm run typecheck
```

## Adding or changing a component

Follow [docs/adding-a-free-component.md](docs/adding-a-free-component.md). Themes come from
`registry/lib/kit` (`useKit`, `KitProvider`).

## More context for agents

See [docs/AI.md](docs/AI.md) for MCP, skills and `llms.txt`.
