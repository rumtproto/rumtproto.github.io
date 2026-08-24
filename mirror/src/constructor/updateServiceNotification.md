---
title: "updateServiceNotification"
original: "https://core.telegram.org/constructor/updateServiceNotification"
section: ref
description: "A service message for the user."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateServiceNotification","url":"/constructor/updateServiceNotification/"}]
layout: layout.njk
---

# updateServiceNotification

A service message for the user.

The app must show the message to the user upon receiving this update. In case the **popup** parameter was passed, the text message must be displayed in a popup alert immediately upon receipt. It is recommended to handle the text as you would an ordinary message in terms of highlighting links, etc. The message must also be stored locally as part of the message history with the user id `777000` (Telegram Notifications).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateServiceNotification/" class="current_page_link">updateServiceNotification</a>#ebe46819 flags:<a href="/type/%23/">#</a> popup:flags.0?true invert_media:flags.2?true inbox_date:flags.1?<a href="/type/int/">int</a> type:<a href="/type/string/">string</a> message:<a href="/type/string/">string</a> media:<a href="/type/MessageMedia/">MessageMedia</a> entities:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>popup</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>If set, the message must be displayed in a popup.</td></tr><tr><td><strong>invert_media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>If set, any eventual webpage preview will be shown on top of the message instead of at the bottom.</td></tr><tr><td><strong>inbox_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td>When was the notification received<br>The message must also be stored locally as part of the message history with the user id <code>777000</code> (Telegram Notifications).</td></tr><tr><td><strong>type</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>String, identical in format and contents to the <a href="/api/errors/#error-type"><strong>type</strong></a> field in API errors. Describes type of service message. It is acceptable to ignore repeated messages of the same <strong>type</strong> within a short period of time (15 minutes).</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Message text</td></tr><tr><td><strong>media</strong></td><td style="text-align: center;"><a href="/type/MessageMedia/">MessageMedia</a></td><td>Media content (optional)</td></tr><tr><td><strong>entities</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt;</td><td><a href="/api/entities/">Message entities for styled text</a></td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Error handling](/api/errors/)

How to handle API return errors correctly.

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities
