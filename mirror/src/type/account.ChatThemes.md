---
title: "account.ChatThemes"
original: "https://core.telegram.org/type/account.ChatThemes"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.ChatThemes","url":"/type/account.ChatThemes/"}]
layout: layout.njk
---

# account.ChatThemes

Available chat themes

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.chatThemesNotModified/">account.chatThemesNotModified</a>#e011e1c4 = <a href="/type/account.ChatThemes/" class="current_page_link">account.ChatThemes</a>;
<a href="/constructor/account.chatThemes/">account.chatThemes</a>#be098173 flags:<a href="/type/%23/">#</a> hash:<a href="/type/long/">long</a> themes:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ChatTheme/">ChatTheme</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; next_offset:flags.0?<a href="/type/string/">string</a> = <a href="/type/account.ChatThemes/" class="current_page_link">account.ChatThemes</a>;

---functions---

<a href="/method/account.getUniqueGiftChatThemes/">account.getUniqueGiftChatThemes</a>#e42ce9c9 offset:<a href="/type/string/">string</a> limit:<a href="/type/int/">int</a> hash:<a href="/type/long/">long</a> = <a href="/type/account.ChatThemes/" class="current_page_link">account.ChatThemes</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/account.chatThemesNotModified/">account.chatThemesNotModified</a></td><td>The available chat themes were not modified</td></tr><tr><td><a href="/constructor/account.chatThemes/">account.chatThemes</a></td><td>Available <a href="/api/themes/#chat-themes">chat themes</a></td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.getUniqueGiftChatThemes/">account.getUniqueGiftChatThemes</a></td><td>Obtain all <a href="/api/themes/#chat-themes">chat themes »</a> associated to owned or <a href="/api/gifts/#hosted-collectible-gifts">hosted collectible gifts »</a>.</td></tr></tbody></table>
