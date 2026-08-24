---
title: "InputChatTheme"
original: "https://core.telegram.org/type/InputChatTheme"
section: ref
description: "Specifies a chat theme »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputChatTheme","url":"/type/InputChatTheme/"}]
layout: layout.njk
---

# InputChatTheme

Specifies a [chat theme »](/api/themes/#chat-themes).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputChatThemeEmpty/">inputChatThemeEmpty</a>#83268483 = <a href="/type/InputChatTheme/" class="current_page_link">InputChatTheme</a>;
<a href="/constructor/inputChatTheme/">inputChatTheme</a>#c93de95c emoticon:<a href="/type/string/">string</a> = <a href="/type/InputChatTheme/" class="current_page_link">InputChatTheme</a>;
<a href="/constructor/inputChatThemeUniqueGift/">inputChatThemeUniqueGift</a>#87e5dfe4 slug:<a href="/type/string/">string</a> = <a href="/type/InputChatTheme/" class="current_page_link">InputChatTheme</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputChatThemeEmpty/">inputChatThemeEmpty</a></td><td>Remove any currently configured theme.</td></tr><tr><td><a href="/constructor/inputChatTheme/">inputChatTheme</a></td><td>Set an emoji-based chat theme, returned by <a href="/method/account.getChatThemes/">account.getChatThemes</a>.</td></tr><tr><td><a href="/constructor/inputChatThemeUniqueGift/">inputChatThemeUniqueGift</a></td><td>Set a theme based on an owned or <a href="/api/gifts/#hosted-collectible-gifts">hosted collectible gift »</a>, returned by <a href="/method/account.getUniqueGiftChatThemes/">account.getUniqueGiftChatThemes</a>.</td></tr></tbody></table>

### Related pages

#### [Telegram themes](/api/themes/)

Telegram apps support generating, sharing and synchronizing app themes.
