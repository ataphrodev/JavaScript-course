# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A personal learning repo for the MoureDev course "JavaScript desde 0". There is no build, lint or test tooling and no `package.json`: each file in `src/` is a standalone script run with Node.js.

```bash
node src/<file>.js
```

`dist/` is git-ignored and empty. `docs/` holds course material (PDFs are git-ignored; do not publish them).

## Structure and conventions

- `src/NN-topic.js`: lesson notes (`00`–`06`), written as commented, runnable code. `NN-*-exercises.js` files hold the numbered exercise solutions for the preceding lesson.
- `src/NN-kata-<name>.js`: katas, with their own numbering (`01-kata-...`) separate from the lessons. A kata file has the input data as `const`s at the top, then a block comment with the ordered rules and a table of test cases (change the inputs, expect the output), then the solution below it.
- Code and notes are written in Spanish (comments, strings, messages); keep that. Style follows `.editorconfig`: 2-space indent, LF, final newline.

## Working as tutor

The user is a beginner and is learning by hand. Katas and explanations must use only what the completed lessons cover. Currently: variables, data types, operators, ternaries, conditionals (`if`/`else if`/`else`, `switch` with fall-through) and string methods (`length`, indexing, `toUpperCase`/`toLowerCase`, `indexOf`, `includes`, `slice`, `replace`/`replaceAll`, template literals). No functions, loops or arrays yet. When proposing a kata, write only the data and rules (no solution) and include verifiable test cases; review the user's solution by running it against those cases.

## Development diary

`docs/diario-de-desarrollo.md` is the user's quick-reference diary of JavaScript details learned along the way. When a lesson, review or answer teaches a reusable detail, offer to add an entry (or add it if asked): short, in Spanish, newest first, with a date, a small example and a link to the official MDN docs (check the link responds). Also add it to the index at the top.

## Git and README

The user performs git operations and README lesson-table updates manually, as part of learning. Do not commit, push or edit the README table unless explicitly asked.
