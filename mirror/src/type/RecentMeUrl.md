---
title: "RecentMeUrl"
original: "https://core.telegram.org/type/RecentMeUrl"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"RecentMeUrl","url":"/type/RecentMeUrl/"}]
layout: layout.njk
---

# RecentMeUrl

Recent t.me urls

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/recentMeUrlUnknown/">recentMeUrlUnknown</a>#46e1d13d url:<a href="/type/string/">string</a> = <a href="/type/RecentMeUrl/" class="current_page_link">RecentMeUrl</a>;
<a href="/constructor/recentMeUrlUser/">recentMeUrlUser</a>#b92c09e2 url:<a href="/type/string/">string</a> user_id:<a href="/type/long/">long</a> = <a href="/type/RecentMeUrl/" class="current_page_link">RecentMeUrl</a>;
<a href="/constructor/recentMeUrlChat/">recentMeUrlChat</a>#b2da71d2 url:<a href="/type/string/">string</a> chat_id:<a href="/type/long/">long</a> = <a href="/type/RecentMeUrl/" class="current_page_link">RecentMeUrl</a>;
<a href="/constructor/recentMeUrlChatInvite/">recentMeUrlChatInvite</a>#eb49081d url:<a href="/type/string/">string</a> chat_invite:<a href="/type/ChatInvite/">ChatInvite</a> = <a href="/type/RecentMeUrl/" class="current_page_link">RecentMeUrl</a>;
<a href="/constructor/recentMeUrlStickerSet/">recentMeUrlStickerSet</a>#bc0a57dc url:<a href="/type/string/">string</a> set:<a href="/type/StickerSetCovered/">StickerSetCovered</a> = <a href="/type/RecentMeUrl/" class="current_page_link">RecentMeUrl</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/recentMeUrlUnknown/">recentMeUrlUnknown</a></td><td>Unknown t.me url</td></tr><tr><td><a href="/constructor/recentMeUrlUser/">recentMeUrlUser</a></td><td>Recent t.me link to a user</td></tr><tr><td><a href="/constructor/recentMeUrlChat/">recentMeUrlChat</a></td><td>Recent t.me link to a chat</td></tr><tr><td><a href="/constructor/recentMeUrlChatInvite/">recentMeUrlChatInvite</a></td><td>Recent t.me invite link to a chat</td></tr><tr><td><a href="/constructor/recentMeUrlStickerSet/">recentMeUrlStickerSet</a></td><td>Recent t.me stickerset installation URL</td></tr></tbody></table>
