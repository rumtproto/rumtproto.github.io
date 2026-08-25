---
title: "botInfo"
original: "https://core.telegram.org/constructor/botInfo"
section: ref
description: "Info about bots (available bot commands, etc)"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"botInfo","url":"/constructor/botInfo/"}]
layout: layout.njk
---

# botInfo

Info about bots (available bot commands, etc)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/botInfo/" class="current_page_link">botInfo</a>#4d8a0299 flags:<a href="/type/%23/">#</a> has_preview_medias:flags.6?true user_id:flags.0?<a href="/type/long/">long</a> description:flags.1?<a href="/type/string/">string</a> description_photo:flags.4?<a href="/type/Photo/">Photo</a> description_document:flags.5?<a href="/type/Document/">Document</a> commands:flags.2?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/BotCommand/">BotCommand</a>&gt; menu_button:flags.3?<a href="/type/BotMenuButton/">BotMenuButton</a> privacy_policy_url:flags.7?<a href="/type/string/">string</a> app_settings:flags.8?<a href="/type/BotAppSettings/">BotAppSettings</a> verifier_settings:flags.9?<a href="/type/BotVerifierSettings/">BotVerifierSettings</a> = <a href="/type/BotInfo/">BotInfo</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>has_preview_medias</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/constructor/true/">true</a></td><td>If set, the bot has some <a href="/api/bots/webapps/#main-mini-app-previews">preview medias for the configured Main Mini App, see here »</a> for more info on Main Mini App preview medias.</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/long/">long</a></td><td>ID of the bot</td></tr><tr><td><strong>description</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>Description of the bot</td></tr><tr><td><strong>description_photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/Photo/">Photo</a></td><td>Description photo</td></tr><tr><td><strong>description_document</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/type/Document/">Document</a></td><td>Description animation in MPEG4 format</td></tr><tr><td><strong>commands</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/BotCommand/">BotCommand</a>&gt;</td><td>Bot commands that can be used in the chat</td></tr><tr><td><strong>menu_button</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/BotMenuButton/">BotMenuButton</a></td><td>Indicates the action to execute when pressing the in-UI menu button for bots</td></tr><tr><td><strong>privacy_policy_url</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.7?<a href="/type/string/">string</a></td><td>The HTTP link to the privacy policy of the bot. If not set, then the <code>/privacy</code> command must be used, if supported by the bot (i.e. if it's present in the <code>commands</code> vector). If it isn't supported, then <a href="/privacy-tpa/">https://telegram.org/privacy-tpa</a> must be opened, instead.</td></tr><tr><td><strong>app_settings</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.8?<a href="/type/BotAppSettings/">BotAppSettings</a></td><td><a href="/api/bots/webapps/">Mini app »</a> settings<br></td></tr><tr><td><strong>verifier_settings</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.9?<a href="/type/BotVerifierSettings/">BotVerifierSettings</a></td><td>This bot can <a href="/api/bots/verification/">verify peers</a>: this field contains more info about the verification the bot can assign to peers.</td></tr></tbody></table>

### Type

[BotInfo](/type/BotInfo/)

### Related pages

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.

#### [Third-party verification](/api/bots/verification/)

To further improve transparency on Telegram, official third-party services are able to assign extra verification icons to user accounts and chats — in order to prevent scams and reduce misinformation.
