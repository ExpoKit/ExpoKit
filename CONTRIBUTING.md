# Contributing to ExpoKit

Thanks for helping improve ExpoKit. This repository is a **read-only mirror** of the free, MIT-licensed
part of the project — it syncs from the maintainer's private monorepo. You cannot merge a pull request
here directly; changes land after review upstream and the next sync.

## Quick links

- **Docs & live previews:** [expokit.in/docs](https://expokit.in/docs)
- **Pro components, billing, account:** [expokit.in/support](https://expokit.in/support) (not GitHub issues)
- **Security:** [SECURITY.md](SECURITY.md)

## Report a bug

Use the [bug report](https://github.com/ExpoKit/ExpoKit/issues/new?template=bug_report.yml) template for a
**free** component, the CLI (`@expokit/cli`) or `expo-charts`. Include platform, Expo SDK version and a
minimal repro.

## Suggest a component

Use the [component request](https://github.com/ExpoKit/ExpoKit/issues/new?template=component_request.yml)
template. Describe what it should do and where you have seen it in the wild.

## Submit a code change

1. Open a [patch submission](https://github.com/ExpoKit/ExpoKit/issues/new?template=submit_patch.yml) issue
   **or** comment on an existing bug with your fix.
2. Paste a **unified diff**, link a **gist**, or link a **branch on your fork** (PRs from forks are closed
   automatically with instructions — that is expected).
3. Only **free** `registry/` items belong in this repo. Do not send Pro-only source; Pro items are sold
   separately at [expokit.in/pricing](https://expokit.in/pricing).

The maintainer applies accepted patches upstream, runs CI, then exports here. You will be credited in the
issue or release notes when you ask.

## Write a new free component (maintainers & invited contributors)

See [docs/adding-a-free-component.md](docs/adding-a-free-component.md) for layout, `item.json`, motion and
accessibility rules.

In this clone you can verify your work with:

```bash
npm ci
npm test
npm run typecheck
```

## Commits on this repository

Commit messages are generated from the **diff** when the mirror syncs (not copied from private history).
Subjects are short and vary (`Button — new prop`, `className on Button, Toast (+9)`, `Refresh lockfile`) — not all the same template.

For wording you like better, add `Public: your subject here` in a **private** repo commit before sync —
that line becomes the only commit subject on this repo (recommended for big releases).

## Code of conduct

Be respectful. See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).
