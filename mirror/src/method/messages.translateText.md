---
title: "messages.translateText"
original: "https://core.telegram.org/method/messages.translateText"
section: ref
description: "Styled text entities will only be preserved for Telegram Premium users."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.translateText","url":"/method/messages.translateText/"}]
layout: layout.njk
---

# messages.translateText

Translate a given text.

[Styled text entities](/api/entities/) will only be preserved for [Telegram Premium](/api/premium/) users.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.translateResult/">messages.translateResult</a>#33db32f8 result:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/TextWithEntities/">TextWithEntities</a>&gt; = <a href="/type/messages.TranslatedText/">messages.TranslatedText</a>;
---functions---
<a href="/method/messages.translateText/" class="current_page_link">messages.translateText</a>#63183030 flags:<a href="/type/%23/">#</a> peer:flags.0?<a href="/type/InputPeer/">InputPeer</a> id:flags.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; text:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/TextWithEntities/">TextWithEntities</a>&gt; to_lang:<a href="/type/string/">string</a> = <a href="/type/messages.TranslatedText/">messages.TranslatedText</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/InputPeer/">InputPeer</a></td><td>If the text is a chat message, the peer ID</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt;</td><td>A list of message IDs to translate</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/TextWithEntities/">TextWithEntities</a>&gt;</td><td>A list of styled messages to translate</td></tr><tr><td><strong>to_lang</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Two-letter ISO 639-1 language code of the language to which the message is translated</td></tr><tr><td><strong>tone</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/string/">string</a></td><td>If set, rephrases the translation using the specified <a href="/api/ai/#ai-compose-tones">AI composer tone »</a> (pass the tone identifier)</td></tr></tbody></table>

### Result

[messages.TranslatedText](/type/messages.TranslatedText/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>INPUT_TEXT_EMPTY</td><td>The specified text is empty.</td></tr><tr><td>400</td><td>INPUT_TEXT_TOO_LONG</td><td>The specified text is too long.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>TO_LANG_INVALID</td><td>The specified destination language is invalid.</td></tr><tr><td>500</td><td>TRANSLATE_REQ_FAILED</td><td>Translation failed, please try again later.</td></tr><tr><td>400</td><td>TRANSLATE_REQ_QUOTA_EXCEEDED</td><td>Translation is currently unavailable due to a temporary server-side lack of resources.</td></tr><tr><td>406</td><td>TRANSLATIONS_DISABLED</td><td>Translations are unavailable, a detailed and localized description for the error will be emitted via an <a href="/api/errors/#406-not-acceptable">updateServiceNotification as specified here&nbsp;»</a>.</td></tr><tr><td>500</td><td>TRANSLATION_TIMEOUT</td><td>A timeout occurred while translating the specified text.</td></tr></tbody></table>

### Related pages

#### [AI features](/api/ai/)

Telegram offers many AI features powered by Cocoon — a decentralized network designed to maximize privacy.

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities

#### [Telegram Premium](/api/premium/)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [Error handling](/api/errors/)

How to handle API return errors correctly.
