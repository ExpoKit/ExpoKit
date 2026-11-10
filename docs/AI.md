# AI assistants and ExpoKit

ExpoKit is designed to work with coding agents.

## MCP server

This repository ships a Claude plugin (`.claude-plugin/`) and [`.mcp.json`](.mcp.json) that point at the
ExpoKit MCP server. Connect it in Cursor or Claude Code so the agent can `search_items` and `view_item`
without guessing import paths.

## Skill

[`skills/expokit/SKILL.md`](../skills/expokit/SKILL.md) — add this skill to your agent so it follows the
CLI workflow (`npx @expokit/cli@latest init` / `add`) and never invents a fake `expokit` npm package.

## Docs index for chat apps

For tools without MCP, use the live index:

- **[https://expokit.in/llms.txt](https://expokit.in/llms.txt)** — every docs page and free item
- Per-item Markdown: `https://expokit.in/docs/components/<name>.md` (and similar for charts)

Example prompt:

```text
Read https://expokit.in/llms.txt and add the ExpoKit OTP Input component to my Expo app with npx @expokit/cli@latest add otp-input.
```

## Pro items

Items marked Pro on the website need [ExpoKit Pro](https://expokit.in/pricing) and `expo-kit login`.
Their source is not in this repository.
