---
title: "account.getUniqueGiftChatThemes"
original: "https://core.telegram.org/method/account.getUniqueGiftChatThemes"
section: ref
description: "Obtain all chat themes » associated to owned or hosted collectible gifts »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.getUniqueGiftChatThemes","url":"/method/account.getUniqueGiftChatThemes/"}]
layout: layout.njk
---

# account.getUniqueGiftChatThemes

Obtain all [chat themes »](/api/themes/#chat-themes) associated to owned or [hosted collectible gifts »](/api/gifts/#hosted-collectible-gifts).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.chatThemesNotModified/">account.chatThemesNotModified</a>#e011e1c4 = <a href="/type/account.ChatThemes/">account.ChatThemes</a>;
<a href="/constructor/account.chatThemes/">account.chatThemes</a>#be098173 flags:<a href="/type/%23/">#</a> hash:<a href="/type/long/">long</a> themes:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ChatTheme/">ChatTheme</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; next_offset:flags.0?<a href="/type/string/">string</a> = <a href="/type/account.ChatThemes/">account.ChatThemes</a>;
---functions---
<a href="/method/account.getUniqueGiftChatThemes/" class="current_page_link">account.getUniqueGiftChatThemes</a>#e42ce9c9 offset:<a href="/type/string/">string</a> limit:<a href="/type/int/">int</a> hash:<a href="/type/long/">long</a> = <a href="/type/account.ChatThemes/">account.ChatThemes</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Offset for <a href="/api/offsets/">pagination</a>, intially an empty string, then equal the value of the last returned <a href="/constructor/account.chatThemes/">account.chatThemes</a>.<code>next_offset</code> (if set).</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Maximum number of results to return, <a href="/api/offsets/">see pagination</a>. Note that the server may return less than <code>limit</code> results, even if the actual number of remaining results is <code>&gt;= limit</code>, paginate to fetch them all.</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Hash from a previously returned <a href="/constructor/account.chatThemes/">account.chatThemes</a> constructor, to avoid returning any result if the theme list hasn't changed.</td></tr></tbody></table>

### Result

[account.ChatThemes](/type/account.ChatThemes/)

### Only users can use this method

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [account.chatThemes](/constructor/account.chatThemes/)

Available [chat themes](/api/themes/#chat-themes)

#### [Telegram themes](/api/themes/)

Telegram apps support generating, sharing and synchronizing app themes.

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
