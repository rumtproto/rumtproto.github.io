---
title: "Help.RecentMeUrls"
original: "https://core.telegram.org/type/help.RecentMeUrls"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Help.RecentMeUrls","url":"/type/help.RecentMeUrls/"}]
layout: layout.njk
---

# Help.RecentMeUrls

Recent t.me URLs

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/help.recentMeUrls/">help.recentMeUrls</a>#e0310d7 urls:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/RecentMeUrl/">RecentMeUrl</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/help.RecentMeUrls/" class="current_page_link">help.RecentMeUrls</a>;

---functions---

<a href="/method/help.getRecentMeUrls/">help.getRecentMeUrls</a>#3dc0f114 referer:<a href="/type/string/">string</a> = <a href="/type/help.RecentMeUrls/" class="current_page_link">help.RecentMeUrls</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/help.recentMeUrls/">help.recentMeUrls</a></td><td>Recent t.me URLs</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/help.getRecentMeUrls/">help.getRecentMeUrls</a></td><td>Get recently used <code>t.me</code> links.<br><br>When installing official applications from "Download Telegram" buttons present in <a href="https://t.me">t.me</a> pages, a referral parameter is passed to applications after installation.<br>If, after downloading the application, the user creates a new account (instead of logging into an existing one), the referral parameter should be imported using this method, which returns the <a href="https://t.me">t.me</a> pages the user recently opened, before installing Telegram.</td></tr></tbody></table>
