# mirrortproto.github.io

Enhanced mirror of the documentation sections of [core.telegram.org](https://core.telegram.org):
the **Telegram API**, the **Bot API**, the **MTProto protocol** and the **TL schema** — together
with the pages they link to: the **blog**, every **FAQ** and the rest, from core.telegram.org and
telegram.org alike.
The site is built with [Eleventy](https://www.11ty.dev/) and published via GitHub Pages.

**Дата копии оригинального сайта / content snapshot date: `2026-08-23`** (3465 страниц / pages).

Каждая страница зеркала содержит ссылку на оригинал.

**Зеркало замкнуто по ссылкам:** ни одна его страница не ссылается на страницу core.telegram.org
или telegram.org, которой в зеркале нет. Всё, что осталось снаружи, перечислено с причиной в
`manifest.json` (`not_mirrored`) — формы входа на my.telegram.org, витрины магазинов приложений,
удалённые из оригинала посты, переводы, заглушки — плюс дерево Doxygen `/tdlib/docs/`, главные
страницы самих оригиналов и адреса-версии с query (`?setln=`, `?offset=`). Проверяется командой
`npm run extlinks` — она пишет `external-links.md` со всеми внешними адресами и страницами,
которые на них ссылаются.

## Возможности / Features

- **Eleven sections**: Telegram API (130), Bot API (18), MTProto (23), Schema (10 + 3 022 reference
  pages), Blog, FAQ (9), Apps & Clients (3), Contests (29), Developer Tools (22), Policies (21) and
  Other (14). The same complete section list is shown on every page; each section has its own landing
  page at the top of its sidebar group and its own search filter. The header always stays on one row,
  switching section labels to icons and then to one compact menu when space is limited. The blog is the
  **whole archive** of telegram.org: `tools/list-blog.ts`
  pages through the upstream archive and records every post. `/blog/` is rebuilt as a semantic,
  year-grouped archive of all 178 posts; the sidebar stays usable by showing the archive plus the 12
  newest posts instead of injecting all 179 pages into every article. One legacy post whose original
  provides no date is explicitly listed under “Date unavailable”. The FAQ holds every FAQ of both hosts
  (the user FAQ, the technical one, the bot FAQ,
  Premium, channels, spam, the Persian CDN one).
- **What is deliberately left out**, with the reason recorded in `manifest.json` → `not_mirrored`:
  media (images, video and archives keep pointing at the original), interactive forms whose static
  copy would be nothing but field labels (`/support`, `/dsa-report`), login screens on
  my.telegram.org, app-store fronts, the Doxygen dump of `/tdlib/docs/`, translations, and the
  addresses the original answers with a stand-in page. Telegram's remote TGS response has no
  `Access-Control-Allow-Origin`, so `/blog/stories/` uses Telegram's own remote PNG fallback instead
  of storing the animation in the mirror.
- **Full-text search** over all pages (articles + constructor/method/type names) — a dedicated [search page](https://mirrortproto.github.io/search/) powered by [Pagefind](https://pagefind.app/) with a filter by section; runs entirely in the browser. Hotkey `/` focuses the search box.
- **Anchors on every paragraph and heading** — hover a paragraph for the ¶ link, hover a heading for #.
- **Consistent navigation** with all 11 sections in both the top menu and sidebar on every page; the current section starts expanded, and every page has breadcrumbs.
- **Three color themes**: system (default), light, dark — switcher in the header, choice persisted.
- **SEO & machine-readable**: `sitemap.xml`, `robots.txt`, canonical/OG/Twitter meta and JSON-LD
  breadcrumbs generated from the original page data; web manifest + SVG/PNG icons.
- **Accessibility**: semantic landmarks, skip-link, `aria-current`, `scope` on table headers,
  visible focus, `prefers-reduced-motion`, WCAG-AA link contrast.
- **Self-check**: `npm run check` validates every local link *and* every in-site anchor —
  markdown and raw HTML alike; absolute, document-relative (resolved the way a browser would,
  against the directory URL of the page carrying it) and same-page `#fragment` links alike, with
  markdown code spans and fenced blocks masked out so that an `<a href="#target">` *shown as an
  example* is not mistaken for a link. Plus h1/skip-link/canonical/URL-encoding on every page, the
  sitemap, robots, and — byte for byte against the backup — the TL-schema listings and the JSON
  documents.
- **Every internal link is absolute**: the original writes some of them document-relative
  (`href="TL"` on `/mtproto/TL-formal`), which only works while the page URL carries no trailing
  slash; here every page is a directory, so `tools/extract.ts` resolves such links against the
  original URL and rewrites them from the site root (`/mtproto/TL/`).
- **A link to a mirrored page stays in the mirror, however the original spells it.** The same page
  is written upstream in half a dozen shapes, and each one is recognised:
  `https://core.telegram.org/api`, `http://core.telegram.org/techfaq` (the old pages still use plain
  http), the protocol-relative `//core.telegram.org/api` of telegram.org's FAQ, the site-relative
  `/api`, and the document-relative `TL`. The closure is keyed by **host**, not by path alone —
  `telegram.org/faq` is mirrored while `core.telegram.org/faq` does not exist, and the two must not
  be confused. `?layer=N` — the "Switch »" of the layer selector and the *Layer N* headings of
  `/api/layers` — names a *version* of a page rather than another page: upstream it merely sets the
  `stel_dev_layer` cookie and redirects back to the same path, so the mirror keeps the path and
  drops the parameter. An anchor that names nothing in the mirror (`#test-phone-numbers`,
  `#q-how-are-voice-calls-authenticated` — sections the original has since renamed, so the fragment
  is dead upstream too) is dropped while the link stays local; `npm run extract` lists every such
  case instead of hiding it.
- **Complete TL schema reference**: constructors, methods, types, methods by category, machine-readable JSON dumps.
- **Pages added by the mirror are labelled as such**: the schema indexes (`/constructor/`, `/method/`,
  `/type/`), the search page, the 404 page and the home page have no upstream counterpart, so they
  carry `generated: true` in their front matter; `layout.njk` turns that into a note — "generated by
  the mirror for convenience" — and the source line below it reads *Closest original* instead of
  *Original*.
- **Clickable TL-schema listings**: as on the original, every type, constructor and method inside a
  schema block links to its own reference page (11 607 links on `/schema/`, 431 on
  `/schema/end-to-end/`, plus the definition line on each of the 2 990 reference pages), and each
  listing states the layer it belongs to.
- **Readable JSON dumps**: the five machine-readable endpoints (`/schema/json/`, `/schema/mtproto-json/`,
  `/schema/end-to-end-json/`, `/api/config.json/`, `/api/errors.json/`) are served upstream as a single
  endless line and are re-indented here with [Prettier](https://prettier.io/). Only whitespace is
  added: key order, number literals and string escapes are those of the original document.

## Требования / Requirements

- Node.js ≥ 20
- npm

## Локальная сборка / Local build

```bash
npm ci               # точные версии из package-lock.json
npm run generate     # создать disposable crawled/ без сети
npm run build        # создать и полностью проверить disposable docs/
```

`crawled/` и `docs/` намеренно находятся в `.gitignore`: первый каталог полностью восстанавливается
из `backup/` и `site/`, второй — из `crawled/`. Для локальной разработки:

```bash
npm run serve        # генерация + Eleventy dev server → http://localhost:8080/
npm run check        # format + typecheck + сборка + verify + quality score ≥ 9.5/10
npm run quality      # 20 объективных архитектурных gates; порог 9.5/10
npm run reproducible # две чистые сборки и побайтовое сравнение всех результатов
```

## Бэкап оригинала и конвейер / Backup & pipeline

Проект хранит полную копию скачанных страниц оригинала с датой снятия; **весь контент для сборки
извлекается только из бэкапа — сборка не обращается к сети**. Мета-описания и OG-теги страниц
генерируются из текста оригинала (первый абзац страницы), без добавления своего текста.

Бэкап собирается из двух источников: разделы документации core.telegram.org обходятся по ссылкам от
корней `/api`, `/mtproto`, `/schema`, а страницы вне этих разделов — Bot API, блог, FAQ и прочее с
обоих хостов — перечислены в `tools/extra-pages.json` и качаются **листьями**: их собственные ссылки
не обходятся, иначе один пост блога утащил бы половину telegram.org. Повторный запуск краулера с той
же датой **дополняет** существующий бэкап: уже скачанные файлы не трогаются, качаются только
недостающие, а страница, пропавшая из нового прогона, останавливает запись манифеста с ошибкой —
удалить её можно только явно, назвав причину в `not_mirrored`.
Отдельно в манифесте хранятся `redirects` (URL, который оригинал отдаёт редиректом на другую
страницу зеркала — `/widgets/login` → `/bots/telegram-login`, `/dl` → `/apps`) и `not_mirrored`
(ссылки, которые страницами зеркала быть не могут, с причиной). Оба списка переиспользуются
следующим прогоном, поэтому уже выясненный адрес не запрашивается снова.

Ни один из хостов не отвечает на несуществующий путь кодом 404 — telegram.org отдаёт свою главную
со статусом 200. Поэтому краулер один раз спрашивает у каждого хоста заведомо несуществующий адрес,
запоминает заголовок этой заглушки и не берёт страницу, которая пришла с тем же заголовком: иначе
кривая ссылка оригинала (`t.me/username` без схемы, фрагмент `#3-3-5-paid-posts` как путь)
зеркалировалась бы как отдельная копия главной. По той же причине не берутся переводы: адрес,
оканчивающийся кодом языка из переключателя самого сайта (`/privacy/de`), и страница, чей текст
оказался не английским.

### Замыкание по ссылкам

```bash
npm run list-blog              # весь архив блога (разово, при обновлении бэкапа)
npm run extlinks               # какие страницы зеркало упоминает, но не содержит
npm run expand-extra           # добавить их в tools/extra-pages.json
npm run backup -- 2026-08-23   # докачать только их (бэкап дополняется)
npm run build                  # пересобрать и проверить сайт
```

Повторять, пока `npm run expand-extra` не скажет `queued 0 new page(s)`. Каждый круг добавляет страницы,
на которые ссылаются страницы прошлого круга, поэтому кругов нужно несколько: на текущем бэкапе —
шесть, от 103 страниц в первом до нуля в последнем.

telegram.org отдаёт страницы на языке по геолокации — с IPv4 этой машины `/tos` уводит на немецкий
`/tos/de`, с IPv6 на английский `/tos/eu`. Краулер просит IPv6 (`ipv6first`), затем перепроверяет
язык: если адрес приземлился на код языка из переключателя самой страницы или текст не похож на
английский, страница перезапрашивается через `?setln=en`; фактический URL копии записывается в
`final_url` и именно он попадает в ссылку «Original».

### Полная перегенерация сайта с нуля

```bash
npm run backup -- 2026-12-31 # единственный сетевой шаг; создаёт backup/<дата>/
npm run icons                # при необходимости обновить PNG-иконки
npm run build                # backup/ + site/ → crawled/ → docs/ → Pagefind → verify
npm run print-structure      # обновить список страниц для README
```

Старые бэкапы не удаляются; сборка всегда берёт последний по дате. `npm run generate` доступен
отдельно для пользователей, которым нужен только удобный для чтения Markdown-каталог `crawled/`.

### Что делает каждый инструмент

Весь собственный JavaScript переведён на TypeScript. `tsc` компилирует Node-инструменты во
временный `.build/`, а esbuild собирает браузерные `client/*.ts` в `crawled/js/`.

| Скрипт | Назначение | Сеть |
|---|---|---|
| `tools/crawl.ts` | создаёт/дополняет датированный backup с SHA-256, редиректами и причинами пропуска | да |
| `tools/extract.ts` | пересоздаёт `crawled/` из `site/` и backup, локализует ссылки и извлекает Markdown/TL/JSON | нет |
| `tools/gennav.ts`, `tools/genrefindexes.ts` | создают меню, метаданные и TL-индексы | нет |
| `tools/build-client.ts` | детерминированно собирает браузерный TypeScript | нет |
| `tools/html-sanitizer.ts` | parser-based allowlist для недоверенного HTML оригинала; удаляет исполняемую и интерактивную разметку | нет |
| `tools/canonicalize-pagefind.ts` | сортирует недетерминированный CBOR-фильтр Pagefind и стабилизирует его content-hash имена | нет |
| `tools/verify.ts` | проверяет SHA-256 бэкапа, ссылки, якоря, HTML ids, CSP, JSON-LD, отсутствие unsafe/inline JS, Pagefind, sitemap, TL и JSON | нет |
| `tools/reproducibility.ts` | выполняет две чистые сборки и сравнивает SHA-256 каждого файла `crawled/` и `docs/` | нет |
| `tools/extlinks.ts`, `tools/expand-extra.ts`, `tools/list-blog.ts` | обслуживают замыкание зеркала по ссылкам | частично |
| `tools/make_icons.py` | генерирует PNG-иконки | нет |

Pagefind 1.5.2 записывает значения одного и того же фильтра в случайном порядке. Содержимое поиска
при этом одинаково, но меняются CBOR-байты, хеши в именах файлов и вся метацепочка. Канонизатор
сортирует значения и заменяет content-hash имена стабильными после индексации. Он намеренно привязан
к Pagefind 1.5.2, проверяет magic header и структуру, повторно декодирует записанные файлы и завершает
сборку ошибкой при несовместимом обновлении вместо тихой порчи индекса.

## Публикация / GitHub Pages

`.github/workflows/pages.yml` запускается для pull request и `main`: устанавливает только версии из
lock-файла, проверяет зависимости, TypeScript и две идентичные чистые сборки. Для `main` проверенный
`docs/` загружается как Pages artifact и публикуется через GitHub Actions. Генерируемые файлы
никогда не коммитятся. В Settings → Pages источником должен быть выбран **GitHub Actions**.

Сайт доступен на [https://mirrortproto.github.io](https://mirrortproto.github.io).

## Структура репозитория / Repository layout

```
mirrortproto.github.io/
├── .github/                   # CI, Pages deployment, Dependabot
├── backup/                    # immutable исходные снимки и SHA-256 manifest
├── site/                      # единственные authored шаблоны, стили и статические страницы
├── client/                    # authored browser TypeScript
├── tools/                     # Node TypeScript и данные краулера
├── crawled/                   # generated Markdown + data + browser bundle (gitignored)
├── docs/                      # generated production site + Pagefind (gitignored)
├── .build/                    # generated Node JavaScript from TypeScript (gitignored)
├── eleventy.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## Полная структура сайта / Complete site structure

- **MTProto Protocol** — 23 pages:
  - `/mtproto_v1/` — MTProto Mobile Protocol v.1.0 (DEPRECATED)
  - `/mtproto/` — MTProto Mobile Protocol
  - `/mtproto/auth_key/` — Creating an Authorization Key
  - `/mtproto/description_v1/` — Mobile Protocol: Detailed Description (v.1.0, DEPRECATED)
  - `/mtproto/description/` — Mobile Protocol: Detailed Description
  - `/mtproto/mtproto-transports/` — MTProto transports
  - `/mtproto/samples-auth_key/` — Auth key generation example
  - `/mtproto/security_guidelines_v1/` — Security Guidelines for Client Developers (v.1.0, DEPRECATED)
  - `/mtproto/security_guidelines/` — Security Guidelines for Client Developers
  - `/mtproto/serialize/` — Binary Data Serialization
  - `/mtproto/service_messages_about_messages/` — Service Messages about Messages
  - `/mtproto/service_messages/` — Service Messages
  - `/mtproto/TL-abstract-types/` — Binary serialization and abstract TL types
  - `/mtproto/TL-combinators/` — Formal description of TL combinators
  - `/mtproto/TL-dependent/` — TL dependent types
  - `/mtproto/TL-formal/` — Formal TL declaration
  - `/mtproto/TL-optargs/` — Optional combinator parameters and their values
  - `/mtproto/TL-patterns/` — TL template types
  - `/mtproto/TL-polymorph/` — Polymorphism in TL
  - `/mtproto/TL-tl/` — TL schema for serialization of TL schemas
  - `/mtproto/TL-types/` — Type serialization
  - `/mtproto/TL/` — TL Language
  - `/mtproto/transports/` — Transport protocols
- **Telegram API** — 130 pages:
  - `/api/` — Telegram APIs
  - `/api/account-deletion/` — Account deletion
  - `/api/action-bar/` — Action bar
  - `/api/age-verification/` — Age verification
  - `/api/ai/` — AI features
  - `/api/animated-emojis/` — Animated Emojis
  - `/api/antispam/` — Native antispam system
  - `/api/auctions/` — Collectible gift auctions
  - `/api/auth/` — User Authorization
  - `/api/block/` — Blocked users
  - `/api/boost/` — Channel and supergroup boosts
  - `/api/bots/` — Working with bots
  - `/api/bots/ai/` — AI features for bots
  - `/api/bots/attach/` — Bot attachment menu and side menu entries
  - `/api/bots/bot-to-bot/` — Bot-to-bot communication
  - `/api/bots/buttons/` — Bot buttons
  - `/api/bots/commands/` — Bot commands
  - `/api/bots/connected-business-bots/` — Connected business bots
  - `/api/bots/games/` — HTML5 games
  - `/api/bots/guest-mode/` — Guest mode for bots
  - `/api/bots/ids/` — Bot API dialog IDs
  - `/api/bots/info/` — Edit bot information
  - `/api/bots/inline/` — Inline queries
  - `/api/bots/managed-bots/` — Managed bots
  - `/api/bots/menu/` — Bot menu button
  - `/api/bots/referrals/` — Affiliate programs
  - `/api/bots/verification/` — Third-party verification
  - `/api/bots/webapps/` — Mini Apps on Telegram
  - `/api/business/` — Telegram Business
  - `/api/calls/` — Phone calls
  - `/api/channel/` — Channels, supergroups, gigagroups and basic groups
  - `/api/colors/` — Accent colors
  - `/api/config.json/` — config.json
  - `/api/config/` — Client configuration
  - `/api/contacts/` — Contact list
  - `/api/content-protection/` — Content protection
  - `/api/custom-emoji/` — Custom emojis
  - `/api/datacenter/` — Working with Different Data Centers
  - `/api/dice/` — Animated dice
  - `/api/discussion/` — Discussion groups
  - `/api/drafts/` — Message drafts
  - `/api/effects/` — Animated message effects
  - `/api/emoji-categories/` — Emoji categories
  - `/api/emoji-status/` — Emoji status
  - `/api/end-to-end_v1/` — Secret chats, end-to-end encryption (v. 1.0, DEPRECATED)
  - `/api/end-to-end/` — End-to-End Encryption, Secret Chats
  - `/api/end-to-end/group-calls/` — E2E Group Calls
  - `/api/end-to-end/pfs/` — Perfect Forward Secrecy
  - `/api/end-to-end/seq_no/` — Sequence numbers in Secret Chats
  - `/api/end-to-end/video-calls/` — End-to-End Encrypted Voice and Video Calls
  - `/api/end-to-end/voice-calls/` — End-to-End Encrypted Voice Calls
  - `/api/entities/` — Styled text with message entities
  - `/api/errors.json/` — errors.json
  - `/api/errors/` — Error handling
  - `/api/factcheck/` — Fact checks
  - `/api/file-reference-generator/` — File reference generator
  - `/api/file-references/` — File references
  - `/api/file-references/db-schema/` — DB schema
  - `/api/file-references/incoming-traversers/` — Incoming file reference traversers
  - `/api/file-references/map-schema/` — File reference map file schema
  - `/api/file-references/outgoing-traversers/` — Outgoing file reference traversers
  - `/api/file-references/refresh-actions/` — Refresh actions
  - `/api/file-references/sources/` — File reference sources
  - `/api/files/` — Uploading and Downloading Files
  - `/api/folders/` — Dialog folders
  - `/api/forum/` — Forum topics
  - `/api/fragment/` — Fragment collectibles
  - `/api/gifs/` — Working with GIFs
  - `/api/gifts/` — Telegram Gifts
  - `/api/giveaways/` — Giveaways and gifts
  - `/api/group-calls/` — Group calls
  - `/api/import/` — Imported messages
  - `/api/invites/` — Invite links
  - `/api/invoking/` — Calling API Methods
  - `/api/layers/` — Layer changelog
  - `/api/links/` — Deep links
  - `/api/live-location/` — Live geolocation
  - `/api/mentions/` — Mentions and replies
  - `/api/min/` — Min constructors
  - `/api/monoforum/` — Direct messages to channels
  - `/api/nearby/` — Nearby users&chats
  - `/api/obtaining_api_id/` — Creating your Telegram Application
  - `/api/offsets/` — Pagination in the API
  - `/api/optimisation/` — Client-Side Optimization
  - `/api/paid-media/` — Paid media
  - `/api/paid-messages/` — Paid messages
  - `/api/passkeys/` — Passkey login
  - `/api/passport/` — Telegram passport
  - `/api/pattern/` — Pattern matching
  - `/api/payments/` — Payments API
  - `/api/peers/` — Peer database
  - `/api/pfs/` — Perfect Forward Secrecy
  - `/api/pin/` — Pinned messages
  - `/api/poll/` — Polls and quizzes
  - `/api/premium/` — Telegram Premium
  - `/api/privacy/` — Privacy settings
  - `/api/profile/` — User profiles
  - `/api/push-updates/` — Handling PUSH-notifications
  - `/api/qr-login/` — Login via QR code
  - `/api/rank/` — Rank
  - `/api/reactions/` — Message reactions
  - `/api/recent-actions/` — Admin log
  - `/api/recommend/` — Similar channels and bots
  - `/api/revenue/` — Channel and bot ad revenue
  - `/api/rights/` — Admin, banned, default rights
  - `/api/ringtones/` — Notification sounds
  - `/api/saved-messages/` — Saved messages
  - `/api/scheduled-messages/` — Scheduled messages
  - `/api/search/` — Search and filters
  - `/api/sponsored-messages/` — Sponsored messages
  - `/api/srp/` — Two-factor authentication
  - `/api/stars/` — Telegram Stars
  - `/api/stats/` — Channel statistics
  - `/api/stickers/` — Stickers and masks
  - `/api/stories/` — Telegram Stories
  - `/api/subscriptions/` — Star subscriptions
  - `/api/suggested-posts/` — Suggested posts
  - `/api/takeout/` — Takeout API
  - `/api/terms/` — Telegram API Terms of Service
  - `/api/themes/` — Telegram themes
  - `/api/threads/` — Message threads
  - `/api/todo/` — Checklists and to-do lists
  - `/api/top-rating/` — Top peer rating
  - `/api/transcribe/` — Voice message transcription
  - `/api/translation/` — Message translation
  - `/api/updates/` — Working with Updates
  - `/api/url-authorization/` — Seamless Telegram Login
  - `/api/views/` — Views and read metrics
  - `/api/wallpapers/` — Chat wallpapers
  - `/api/web-events/` — Web events
- **Bot API** — 18 pages:
  - `/bots/` — Bots: An introduction for developers
  - `/bots/2-0-intro/` — Introducing Bot API 2.0
  - `/bots/api-changelog/` — Bot API changelog
  - `/bots/api/` — Telegram Bot API
  - `/bots/blockchain-guidelines/` — Blockchain Guidelines
  - `/bots/features/` — Telegram Bot Features
  - `/bots/games/` — Gaming Platform
  - `/bots/inline/` — Inline Bots
  - `/bots/payments-stars/` — Bot Payments API for Digital Goods and Services
  - `/bots/payments/` — Bot Payments API
  - `/bots/payments/currencies.json/` — currencies.json
  - `/bots/samples/` — Bot API Library Examples
  - `/bots/samples/hellobot/` — Hellobot
  - `/bots/self-signed/` — Using self-signed certificates
  - `/bots/telegram-login/` — Log In With Telegram
  - `/bots/tutorial/` — From BotFather to 'Hello World'
  - `/bots/webapps/` — Telegram Mini Apps
  - `/bots/webhooks/` — Marvin's Marvellous Guide to All Things Webhook
- **Schema (overview & indexes)** — 10 pages:
  - `/constructor/` — Constructors — TL schema reference
  - `/method/` — Methods — TL schema reference
  - `/methods/` — Available methods
  - `/schema/` — Schema
  - `/schema/end-to-end-json/` — End-to-end TL-Schema in JSON
  - `/schema/end-to-end/` — Current end-to-end TL-schema
  - `/schema/json/` — TL-Schema in JSON
  - `/schema/mtproto-json/` — MTProto TL-Schema in JSON
  - `/schema/mtproto/` — Current MTProto TL-schema
  - `/type/` — Types — TL schema reference
- **Schema reference** — 3022 pages: 1615 constructors (`/constructor/<name>/`), 787 methods (`/method/<name>/`), 620 types (`/type/<name>/`).
- **FAQ** — 9 pages:
  - `/bots/faq/` — Bots FAQ
  - `/cdn/faq_ir/` — شبکه‌های تحویل محتوا (CDN) رمزنگاری شده
  - `/cdn/faq_ir/durov/` — توضيحات CDNهاى رمزنگارى شده
  - `/faq_channels/` — Channels FAQ
  - `/faq_premium/` — Telegram Premium FAQ
  - `/faq_spam/` — Spam FAQ
  - `/faq/` — Telegram FAQ
  - `/techfaq/` — FAQ for the Technically Inclined
  - `/techfaq/mtproto_v1/` — FAQ for the Technically Inclined (MTProto v.1.0)
- **Blog** — 179 pages:
  - `/blog/` — Telegram Blog
  - `/blog/10-billion/` — 10 Billion Telegrams Delivered Daily
  - `/blog/100-million/` — 100,000,000 Monthly Active Users
  - `/blog/15-billion/` — 15 Billion Telegrams Delivered Daily
  - `/blog/15million-reuters/` — Keep Calm and Send Telegrams&#33;
  - `/blog/2-billion/` — Telegram Hits 2 Billion Messages Sent Daily
  - `/blog/200-million/` — 200,000,000 Monthly Active Users
  - `/blog/400-million/` — 400 Million Users, 20,000 Stickers, Quizzes 2.0 and €400K for Creators of Educational Tests
  - `/blog/6-years/` — Celebrating 6 Years of Telegram
  - `/blog/700-million-and-premium/` — 700 Million Users and Telegram Premium
  - `/blog/admin-revolution/` — Supergroups 10,000: Admin Tools & More
  - `/blog/affiliate-programs-ai-sticker-search/` — Affiliate Programs, AI-Powered Sticker Search, Collages, and More
  - `/blog/ai-bot-revolution-11-new-features/` — Guest AI Bots, Bot-to-Bot Chats, Chat Automation, Custom AI Styles, 100M+ Emoji & Sticker Search and Much More
  - `/blog/ai-editor-mighty-polls-and-more/` — AI Editor, Mighty Polls, Live Photos, Bots Managed by Bots, and More
  - `/blog/AI-sticker-search-video-improvements/` — AI-Powered Sticker Search, Improved Videos and More
  - `/blog/albums-saved-messages/` — Albums, Saved Messages and Better Search
  - `/blog/android-2-0/` — Telegram 2.0 for Android: Material Design
  - `/blog/android-gif/` — GIF and Image Search on Android
  - `/blog/android-streaming/` — Streaming and Auto-Night Mode on Android
  - `/blog/android-themes/` — Custom Themes
  - `/blog/android-wear-2-0/` — Telegram for Android Wear 2.0
  - `/blog/animated-backgrounds/` — Animated Backgrounds
  - `/blog/animated-stickers/` — Animated Stickers Done Right
  - `/blog/apple-watch/` — Telegram on Apple Watch
  - `/blog/archive-and-new-design/` — Archived Chats, a New Design and More
  - `/blog/autodelete-inv2/` — Auto-Delete, Widgets and Expiring Invite Links
  - `/blog/autoplay/` — Autoplaying Videos, Automatic Downloads and Multiple Accounts
  - `/blog/backgrounds-2-0/` — Chat Backgrounds 2.0: Make Your Own
  - `/blog/bb-contest-extension/` — &#036;50,000 Blackberry Contest Extended
  - `/blog/bb-results/` — BlackBerry Contest Results
  - `/blog/billion/` — Telegram Reaches 1 Billion Daily Messages
  - `/blog/blackberry-contest/` — A &#036;50,000 Contest For Blackberry Engineers
  - `/blog/bot-revolution/` — Telegram Bot Platform
  - `/blog/botprize/` — &#036;1,000,000 to Bot Developers. For free.
  - `/blog/botprize1/` — First BotPrize Winners Get &#036;200,000
  - `/blog/bots-2-0/` — Bot Platform 2.0
  - `/blog/cache-and-stickers/` — Clearing Cache and Reordering Stickers
  - `/blog/calls-and-bots/` — Colorful Calls, Thanos Snap Effect, and an Epic Update for Bots
  - `/blog/calls/` — Voice Calls: Secure, Crystal-Clear, AI-Powered
  - `/blog/captions-places/` — Places, Captions and more
  - `/blog/channel-stories/` — Stories in Channels, View-Once Media and More
  - `/blog/channels-2-0/` — Channels 2.0 and More
  - `/blog/channels/` — Channels: Broadcasting Done Right
  - `/blog/chat-themes-interactive-emoji-read-receipts/` — Chat Themes, Interactive Emoji, Read Receipts in Groups and Live Stream Recording
  - `/blog/checklists-suggested-posts/` — Checklists, Suggested Posts and More Monetization Options for Channels
  - `/blog/collectible-gifts-and-more/` — Collectible Gifts, Message Search Filters and More
  - `/blog/comments-in-video-chats-threads-for-bots/` — Comments in Group Calls, Notes for Contacts, Suggested Birthdays and More
  - `/blog/communities-editor-invisible-messages/` — Rich Text Editor, Communities, Ephemeral Messages in Groups, 350 Million GIFs
  - `/blog/contacts-local-groups/` — Location-Based Chats, Adding Contacts Without Phone Numbers and More
  - `/blog/coronavirus/` — Coronavirus News and Verified Channels
  - `/blog/crafting-android-design-and-more/` — Android Redesign, Group Ownership Transfer, Gift Crafting, Colored Bot Buttons
  - `/blog/crowdsourcing-a-more-secure-future/` — Crowdsourcing a More Secure Future
  - `/blog/cryptocontest-ends/` — Crypto Contest Ends
  - `/blog/cryptocontest/` — &#036;300,000 for Cracking Telegram Encryption
  - `/blog/custom-emoji/` — Telegram Emoji Platform, Custom Animated Emoji Packs, Gifting Telegram Premium, and More
  - `/blog/ddos/` — A DDoS in Asia Pacific
  - `/blog/desktop-1-0/` — Telegram Desktop reaches version 1.0 – and it's BEAUTIFUL
  - `/blog/desktop-compact/` — Telegram Desktop Adds Compact Mode
  - `/blog/direct-to-channel-trim-voice-and-more/` — Direct Messages for Channels, Voice Trimming, Topic Tabs and HD Photos
  - `/blog/discover-stickers-and-more/` — Sticker Search, Multiple Photos, and More
  - `/blog/downloads-attachments-streaming/` — Download Manager, New Attachment Menu, Live Streaming With Other Apps and More
  - `/blog/drafts/` — Drafts, Picture-in-Picture, and More
  - `/blog/dynamic-video-quality-and-more/` — Improved Videos and Much More
  - `/blog/edit/` — Edit Messages, New Mentions and More
  - `/blog/encrypted-cdns/` — More Speed and Security&#33;
  - `/blog/export-and-more/` — Chat Export Tool, Better Notifications and More
  - `/blog/february2024/` — Stories for Groups and 8 More Features
  - `/blog/files-on-steroids/` — Sending Files On Steroids — And More
  - `/blog/filters-anonymous-admins-comments/` — Search Filters, Anonymous Admins, Channel Comments and More
  - `/blog/first-IV-contest/` — Instant View Now Available for 2274 Websites
  - `/blog/folders/` — Chat Folders, Archive, Channel Stats and More
  - `/blog/fullscreen-miniapps-and-more/` — Mini Apps 2.0: Full-Screen Mode, Home Screen Icons, Geolocation and 10 more features
  - `/blog/games/` — Gaming Platform 1.0
  - `/blog/gif-revolution/` — GIF Revolution
  - `/blog/gifs/` — GIF Search and More
  - `/blog/gift-marketplace-and-more/` — Gift Marketplace, Posting Several Stories at Once, Auto-Translate For Channels
  - `/blog/gifts-verification-platform/` — Gifts, Verification Platform and More
  - `/blog/giveaways/` — Giveaways in Channels and Free Premium
  - `/blog/group-calls-made-easy/` — Extra-Secure Group Calls, Automated Accounts, and More
  - `/blog/group-video-calls/` — Group Video Calls
  - `/blog/growing-telegram-together/` — Growing Telegram Together
  - `/blog/hidden-media-zero-storage-profile-pics/` — Hidden Media, Zero Storage Usage, New Drawing Tools, Profile Pictures for Your Contacts, and More
  - `/blog/infinite-reactions-statuses/` — Infinite Reactions, Emoji Statuses and Much More
  - `/blog/inline-bots/` — Introducing Inline Bots
  - `/blog/instant-camera/` — Instant Camera and More 3D Touch
  - `/blog/instant-view-contest-200K/` — Instant Views for Everyone & a &#036;200K Contest
  - `/blog/instant-view/` — Instant View, Telegraph, and Other Goodies
  - `/blog/invite-links/` — Migrating Existing Group Chats to Telegram
  - `/blog/link-preview/` — Link Previews
  - `/blog/live-locations/` — Live Locations, Media Player and Languages
  - `/blog/live-stories-gift-auctions/` — Live Stories, Repeated Messages, Auctions for Gifts and More
  - `/blog/live-streams-forwarding-next-channel/` — Live Streams, Flexible Forwarding, Jump to Next Channel, Trending Stickers and More
  - `/blog/login/` — Telegram Login for Websites
  - `/blog/masks/` — Photo Editor 2.0, Masks and Homemade GIFs
  - `/blog/member-tags-disable-sharing-and-more/` — Member Tags, Login with Telegram, Disable Sharing, GIF Editing, Date Formatting, Voting Timestamps
  - `/blog/message-effects-and-more/` — Message Effects, Hashtag Search, and More
  - `/blog/mini-app-bar-paid-media-and-more/` — Mini App Bar, Paid Media, Story Search & More
  - `/blog/moar-stickers/` — MOAR Stickers&#33;
  - `/blog/monetization-for-channels/` — Sharing Revenue with Channel Owners
  - `/blog/move-history/` — Moving Chat History from Other Apps
  - `/blog/my-profile-and-15-more/` — My Profile, Recommended Channels and 15 More Features
  - `/blog/new-design-ai-summaries/` — AI Summaries, New Design and More
  - `/blog/new-profiles-people-nearby/` — New Profiles, Fast Media Viewer and People Nearby 2.0
  - `/blog/new-saved-messages-and-9-more/` — Saved Messages 2.0, One-Time Voice Messages and 8 More Features
  - `/blog/notifications-bots/` — Notification Sounds, Bot Revolution and More
  - `/blog/now-you-see-me/` — Disappearing Media, Your Bio & More Speed
  - `/blog/passkeys-and-gift-offers/` — Passkeys, Gift Purchase Offers and More
  - `/blog/passport/` — Introducing Telegram Passport
  - `/blog/payments-2-0-scheduled-voice-chats/` — Payments 2.0, Scheduled Voice Chats, New Web Versions
  - `/blog/payments/` — Payments for Bots
  - `/blog/permissions-groups-undo/` — Group Permissions, Undo Delete and More
  - `/blog/photo-editor-and-passcodes/` — Photo Editor and Passcode Lock
  - `/blog/pin-and-ifttt/` — Pinned Chats and IFTTT Integrations
  - `/blog/pinned-messages-locations-playlists/` — Pinned Messages 2.0, Improved Live Locations, Playlists and More
  - `/blog/pinned-messages-locations-playlists/world/` — Pinned Messages 2.0, Improved Live Locations, Playlists and More
  - `/blog/polls-2-0-vmq/` — Polls 2.0: Visible Votes, Multiple Answers, and Quiz Mode
  - `/blog/polls/` — Polls: Bringing Choice to Communities
  - `/blog/post-search-story-albums-and-more/` — Public Post Search, Story Albums, Gift Collections and More
  - `/blog/posts-in-stories-and-more/` — Channel Appearance, Posts in Stories and More
  - `/blog/power-saving/` — Power Saving Mode and More
  - `/blog/privacy-discussions-web-bots/` — Focused Privacy, Discussion Groups, Seamless Web Bots and More
  - `/blog/privacy-revolution/` — Hiding Last Seen Time - Done Right
  - `/blog/profile-music-gift-themes/` — Music on Profiles, Stickers Mini App, New Profiles, and More
  - `/blog/profile-pics-emoji-translations/` — Profile Photo Maker, Translating Entire Chats, Emoji Categories and More
  - `/blog/profile-videos-people-nearby-and-more/` — Profile Videos, 2 GB File Sharing, Group Stats, Improved People Nearby and More
  - `/blog/protected-content-delete-by-date-and-more/` — Protected Content, Delete by Date, Device Management and More
  - `/blog/reactions-spoilers-translations/` — Reactions, Spoilers, Translation and QR Codes
  - `/blog/replies-mentions-hashtags/` — Reinventing Group Chats: Replies, Mentions, Hashtags and More
  - `/blog/replies-mentions-stickers/` — Better Replies, Stickers & Invitations
  - `/blog/reply-revolution/` — Replies 2.0, Adjustable Link Previews, Name Colors and More
  - `/blog/scheduled-reminders-themes/` — Scheduled Messages, Reminders, Custom Cloud Themes and More Privacy
  - `/blog/search-and-media/` — In-App Media Playback and Search in Chats
  - `/blog/sessions-and-2-step-verification/` — Active Sessions and Two-Step Verification
  - `/blog/share-preview/` — Sharing and Previews
  - `/blog/shareable-folders-custom-wallpapers/` — Shareable Chat Folders, Custom Wallpapers and More
  - `/blog/shared-files/` — Shared Files and Fast Mute
  - `/blog/shared-links/` — Shared Links and Recent Searches
  - `/blog/shared-media-scrolling-calendar-join-requests-and-more/` — Hyper-Speed Scrolling and Calendar View for Shared Media, Join Requests, Global Chat Themes on iOS and More
  - `/blog/silent-messages-slow-mode/` — Silent Messages, Slow Mode, Admin Titles and More
  - `/blog/similar-channels/` — Similar Channels, Reposting Stories, and 9 More Features
  - `/blog/star-giveaways-iv-in-browser/` — Star Giveaways and More
  - `/blog/star-messages-gateway-2-0-and-more/` — Star Messages, Pinned Gifts, Verification Platform 2.0, and More
  - `/blog/sticker-maker/` — Sticker Editor — Create Your Own Stickers
  - `/blog/stickers-meet-art-and-history/` — When Stickers Meet Art And History
  - `/blog/stickers-revolution/` — Custom Sticker Sets
  - `/blog/stickers/` — Stickers Done Right
  - `/blog/stories/` — Stories and 10 Years of Telegram
  - `/blog/superchannels-star-reactions-subscriptions/` — Super Channels, Star Reactions and Subscriptions
  - `/blog/supergroups/` — Admins, Supergroups and More
  - `/blog/supergroups5k/` — Supergroups 5000: Public Groups, Pinned Posts
  - `/blog/tdlib/` — TDLib – Build Your Own Telegram
  - `/blog/telegram-5-ios/` — Introducing Telegram 5.0 for iOS
  - `/blog/telegram-business/` — Introducing Telegram Business
  - `/blog/telegram-me-change-number-and-pfs/` — Telegram.me, Changing Numbers and PFS
  - `/blog/telegram-stars/` — Telegram Stars: Pay for Digital Goods and More
  - `/blog/telegram-x/` — Telegram X: Progress through Competition
  - `/blog/telegraph/` — Meet the Telegraph API for Logins and Stats
  - `/blog/themes-accounts/` — Themes, Multiple Accounts and More
  - `/blog/topics-in-groups-collectible-usernames/` — Topics in Groups, Collectible Usernames, Voice-to-Text for Video Messages and More
  - `/blog/translations-iv2/` — Custom Languages, Instant View 2.0 and More
  - `/blog/trending-stickers/` — Trending Stickers, Storage and More
  - `/blog/ultimate-privacy-topics-2-0/` — No-SIM Signup, Auto-Delete All Chats, Topics 2.0 and More
  - `/blog/unread-replace-2x/` — Replace Media, Share vCards, Mark as Unread, 2X Voice Messages, and More
  - `/blog/unsend-and-usage/` — Unsend Messages, Network Usage, and More
  - `/blog/unsend-privacy-emoji/` — Taking Back Our Right to Privacy
  - `/blog/usernames-and-secret-chats-v2/` — Usernames and Secret Chats 2.0
  - `/blog/verifiable-apps-and-more/` — Verifiable Builds, New Theme Editor, Send When Online and So Much More
  - `/blog/video-1000/` — Video Calls with up to 1000 Viewers, Video Messages 2.0, Video Playback Speed and More
  - `/blog/video-calls/` — Video Calls and Seven Years of Telegram
  - `/blog/video-editor-gifs/` — Video Editor, Animated Photos, Better GIFs and More
  - `/blog/video-messages-and-telescope/` — Video Messages and Telescope
  - `/blog/video-stickers-better-reactions/` — Video Stickers, Better Reactions and More
  - `/blog/voice-2-secret-3/` — Voice Messages 2.0, Secret Chats 3.0 and...
  - `/blog/voice-chats-on-steroids/` — Voice Chats 2.0: Channels, Millions of Listeners, Recorded Chats, Admin Tools
  - `/blog/voice-chats/` — Voice Chats Done Right
  - `/blog/w3-browser-mini-app-store/` — Telegram Browser, Gifting Stars and More
  - `/blog/watch-apps-and-more/` — Smartwatch Apps, Rich Text for Bots, AI Guardians for Groups, and Much More
  - `/blog/wear-gifts-blockchain-and-more/` — Wear Collectible Gifts, Move Gifts to the Blockchain, Send Gifts to Channels, and More
  - `/blog/winter-contest-ends/` — Winter Contest Ends
- **Apps & Clients** — 3 pages:
  - `/android/` — Telegram for Android
  - `/apps/` — Telegram Applications
  - `/evolution/` — The Evolution of Telegram
- **Contests** — 29 pages (contest posts remain at their canonical `/blog/…` URLs):
  - `/contests/` — Telegram Contests index
  - `/contest300K/` — Telegram Cracking Contest Description
  - `/blog/cryptocontest/` — $300,000 for Cracking Telegram Encryption
  - `/blog/cryptocontest-ends/` — Crypto Contest Ends
  - `/blog/blackberry-contest/` — A $50,000 Contest For Blackberry Engineers
  - `/blog/bb-contest-extension/` — $50,000 Blackberry Contest Extended
  - `/blog/bb-results/` — BlackBerry Contest Results
  - `/blog/botprize/` — $1,000,000 to Bot Developers
  - `/blog/botprize1/` — First BotPrize Winners Get $200,000
  - `/blog/instant-view-contest-200K/` — Instant Views for Everyone & a $200K Contest
  - `/blog/first-IV-contest/` — Instant View Now Available for 2274 Websites
  - `/blog/telegram-x/` — Telegram X: Progress through Competition
  - `/blog/winter-contest-ends/` — Winter Contest Ends
  - `/blackberry/` — Blackberry 10 Dev Contest
  - `/blackberry/chat-edit/` — Editing Messages
  - `/blackberry/chat-emoji/` — Choosing Emoji
  - `/blackberry/chat-media-send/` — Sending Media
  - `/blackberry/chat-media-view/` — Viewing Media
  - `/blackberry/chat-send/` — Sending Messages
  - `/blackberry/chat-voice/` — Sending Voice Messages
  - `/blackberry/chat/` — Chat screens
  - `/blackberry/chats/` — Chats
  - `/blackberry/contacts/` — Сontacts
  - `/blackberry/group-info/` — Group Chat Info
  - `/blackberry/intro/` — Intro
  - `/blackberry/login/` — Login
  - `/blackberry/newmessage/` — New Message
  - `/blackberry/secretchats/` — Secret Chats
  - `/blackberry/settings/` — Settings
- **Developer Tools** — 22 pages:
  - `/gateway/` — Telegram Gateway – Fast, Affordable, and Secure User Verification
  - `/gateway/api/` — Telegram Gateway API
  - `/gateway/verification-tutorial/` — Authorization via Telegram Gateway: Quick-start Guide
  - `/import-stickers/` — Importing Stickers to Telegram
  - `/passport/` — Telegram Passport Manual
  - `/passport/encryption/` — Telegram Passport Encryption Details
  - `/passport/example/` — Passport example
  - `/passport/sdk-android/` — Android SDK
  - `/passport/sdk-ios-mac/` — iOS & macOS SDK
  - `/passport/sdk-javascript/` — Javascript SDK
  - `/stickers/` — Telegram Stickers
  - `/stickers/webm-vp9-encoding/` — Encoding Video Stickers and Emoji with .WEBM and VP9
  - `/tdlib/` — Telegram Database Library
  - `/tdlib/getting-started/` — Getting started with TDLib
  - `/tdlib/notification-api/` — Notification API
  - `/tdlib/options/` — TDLib options
  - `/themes/` — Creating Custom Cloud Themes
  - `/widgets/` — Telegram Widgets
  - `/widgets/discussion/` — Discussion Widget
  - `/widgets/login-legacy/` — Telegram Login Widget
  - `/widgets/posts/` — Post Widget
  - `/widgets/share/` — Sharing Button
- **Policies** — 21 pages:
  - `/apple_privacy/` — Apple Privacy Labels Explained
  - `/moderation/` — Telegram Safety Overview
  - `/privacy-tpa/` — Standard Bot Privacy Policy
  - `/privacy/` — Telegram Privacy Policy
  - `/tos/` — Terms of Service
  - `/tos/bot-developers/` — Telegram Bot Platform Developer Terms of Service
  - `/tos/bots/` — Terms of Service for Bots
  - `/tos/business/` — Terms of Service for Telegram Business
  - `/tos/content-creator-rewards/` — Terms of Service for Content Creators
  - `/tos/content-licensing/` — Terms of Service for Content Licensing
  - `/tos/eu-dsa/` — User guidance for the EU Digital Services Act
  - `/tos/eu-dsa/transparency-2025/` — Telegram’s DSA Transparency Report
  - `/tos/eu/` — Terms of Service
  - `/tos/eu/t.me/EURegulation/` — Terms of Service
  - `/tos/eu/t.me/ISISwatch/` — Terms of Service
  - `/tos/eu/transparency-tco/` — Telegram's Transparency Reports under the TCO Regulation
  - `/tos/gateway/` — Terms of Service for Telegram Gateway
  - `/tos/mini-apps/` — Terms of Service for Mini Apps
  - `/tos/stars/` — Terms of Service for Telegram Stars
  - `/tos/third-party-payments/` — Third-Party Payments and Authorized Resellers
  - `/verify/` — Page Verification Guidelines
- **Other** — 14 pages:
  - `/other/` — Other Telegram Resources index
  - `/articles/DH_Hash_Collision/` — Hash Collisions for Diffie-Hellman Keys
  - `/bug-bounty/` — Telegram Bug Bounty Program
  - `/cdn/` — Encrypted CDNs for Speed and Security
  - `/jobs/` — Jobs
  - `/press/` — Telegram Press Info
  - `/reproducible-builds/` — Reproducible Builds for iOS and Android
  - `/tour/affiliate-programs/` — Affiliate Programs
  - `/tour/channels/` — Telegram Channels
  - `/tour/chat-folders/` — Shareable Chat Folders
  - `/tour/groups/` — Group Chats on Telegram
  - `/tour/quizbot/` — Quizzes
  - `/tour/screenshots/` — Telegram Logos and App Screenshots
  - `/tour/stories/` — Telegram Stories
- **Pages of the mirror itself** — 3 pages:
  - `/` — Telegram API Documentation Mirror
  - `/404/` — Page not found
  - `/search/` — Search

## Права

Оригинальные тексты и схема принадлежат Telegram (core.telegram.org); каждая страница зеркала
ссылается на первоисточник. Машинные копии страниц хранятся в `backup/` с датой снятия и
контрольными суммами.
