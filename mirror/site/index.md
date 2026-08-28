---
title: "Telegram API Documentation Mirror"
original: "https://core.telegram.org"
section: site
description: "An enhanced mirror of the Telegram API, MTProto protocol and TL schema documentation from core.telegram.org, with full-text search, anchors and a structured menu."
generated: true
layout: layout.njk
---

# Telegram API Documentation Mirror

An enhanced mirror of the documentation sections of [core.telegram.org](https://core.telegram.org): the **Telegram API**, the **MTProto protocol**, and the **TL schema**. The content is a snapshot of the original site (see the snapshot date in the footer and in `README.md`); every page links back to its original.

What this mirror adds over the original:

- **Full-text search** over all pages (including constructor/method/type names) — see the [search page](/search/): results can be limited to any documentation section.
- **Anchors on every paragraph and heading** — hover a paragraph to see the ¶ link, hover a heading for #.
- **A structured sidebar menu** with all articles grouped by section, plus breadcrumbs on every page.
- **A complete TL schema reference**: [constructors](/constructor/), [methods](/method/), [types](/type/) and [methods by category](/methods/).

## Sections

### [Telegram API](/api/)

The application-level API: authorization, updates, files, secret chats, calls, payments, bots, channels, stories and every other feature area. Start at the [API index](/api/); the [methods reference](/method/) lists all available calls.

### [MTProto Protocol](/mtproto/)

The transport/crypto layer beneath the API: message format, `auth_key` generation, serialization, service messages, transports and security guidelines. Start at the [protocol overview](/mtproto/).

### [Schema](/schema/)

The TL schema: all [constructors](/constructor/), [methods](/method/), [types](/type/), the [MTProto layer schema](/schema/mtproto/), the [end-to-end layer schema](/schema/end-to-end/) and machine-readable JSON dumps.

### [FAQ](/faq/) and [Blog](/blog/)

The general and technical FAQs, including the deprecated MTProto 1.0 guide, plus the complete Telegram announcement archive.

### Additional documentation sections

- [Apps & Clients](/apps/) — official applications, downloads and client history.
- [Contests](/contests/) — Telegram competitions and results, including the complete BlackBerry 10 development guide.
- [Developer Tools](/tdlib/) — TDLib, Passport, Gateway, stickers, themes and widgets.
- [Policies](/privacy/) — privacy, safety, Terms of Service and transparency documents.
- [Other](/other/) — security articles, company information, reproducible builds and feature tours.

## About this site

The site is built from the current backup of the original pages in `backup/latest/`; the build pipeline reads only from that backup. Found an error or an outdated page? [Open an issue](https://github.com/mirrortproto/mirrortproto.github.io/issues).
