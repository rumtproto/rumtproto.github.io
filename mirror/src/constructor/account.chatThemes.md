---
title: "account.chatThemes"
original: "https://core.telegram.org/constructor/account.chatThemes"
section: ref
description: "Telegram apps support generating, sharing and synchronizing app themes."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.chatThemes","url":"/constructor/account.chatThemes/"}]
layout: layout.njk
---

# account.chatThemes

Available [chat themes](/api/themes/#chat-themes)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.chatThemes/" class="current_page_link">account.chatThemes</a>#be098173 flags:<a href="/type/%23/">#</a> hash:<a href="/type/long/">long</a> themes:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ChatTheme/">ChatTheme</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; next_offset:flags.0?<a href="/type/string/">string</a> = <a href="/type/account.ChatThemes/">account.ChatThemes</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Hash to pass to the method that returned this constructor, to avoid refetching the result if it hasn't changed.</td></tr><tr><td><strong>themes</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ChatTheme/">ChatTheme</a>&gt;</td><td>Themes.</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt;</td><td>Chats mentioned in the <code>themes</code> field.</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Users mentioned in the <code>themes</code> field.</td></tr><tr><td><strong>next_offset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>Next offset for pagination.</td></tr></tbody></table>

### Type

[account.ChatThemes](/type/account.ChatThemes/)

### Related pages

#### [Telegram themes](/api/themes/)

Telegram apps support generating, sharing and synchronizing app themes.
