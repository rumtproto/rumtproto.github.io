---
title: "sponsoredMessage"
original: "https://core.telegram.org/constructor/sponsoredMessage"
section: ref
description: "How clients should fetch, display and interact with sponsored messages."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"sponsoredMessage","url":"/constructor/sponsoredMessage/"}]
layout: layout.njk
---

# sponsoredMessage

A [sponsored message](/api/sponsored-messages/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/sponsoredMessage/" class="current_page_link">sponsoredMessage</a>#7dbf8673 flags:<a href="/type/%23/">#</a> recommended:flags.5?true can_report:flags.12?true random_id:<a href="/type/bytes/">bytes</a> url:<a href="/type/string/">string</a> title:<a href="/type/string/">string</a> message:<a href="/type/string/">string</a> entities:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; photo:flags.6?<a href="/type/Photo/">Photo</a> media:flags.14?<a href="/type/MessageMedia/">MessageMedia</a> color:flags.13?<a href="/type/PeerColor/">PeerColor</a> button_text:<a href="/type/string/">string</a> sponsor_info:flags.7?<a href="/type/string/">string</a> additional_info:flags.8?<a href="/type/string/">string</a> min_display_duration:flags.15?<a href="/type/int/">int</a> max_display_duration:flags.15?<a href="/type/int/">int</a> = <a href="/type/SponsoredMessage/">SponsoredMessage</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>recommended</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/constructor/true/">true</a></td><td>Whether the message needs to be labeled as "recommended" instead of "sponsored"</td></tr><tr><td><strong>can_report</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.12?<a href="/constructor/true/">true</a></td><td>Whether this message can be <a href="/api/sponsored-messages/#reporting-sponsored-messages">reported as specified here »</a>.</td></tr><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Message ID. See <a href="/api/updates/#updatemessageid-updates">here »</a> for more info on random ID deduplication and updateMessageID mapping.</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Contains the URL to open when the user clicks on the sponsored message.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Contains the title of the sponsored message.</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Sponsored message</td></tr><tr><td><strong>entities</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt;</td><td><a href="/api/entities/">Message entities for styled text</a> in <code>message</code>.</td></tr><tr><td><strong>photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/type/Photo/">Photo</a></td><td>If set, contains a custom profile photo bubble that should be displayed for the sponsored message, like for messages sent in groups.</td></tr><tr><td><strong>media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.14?<a href="/type/MessageMedia/">MessageMedia</a></td><td>If set, contains some media.</td></tr><tr><td><strong>color</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.13?<a href="/type/PeerColor/">PeerColor</a></td><td>If set, the sponsored message should use the <a href="/api/colors/">message accent color »</a> specified in <code>color</code>.</td></tr><tr><td><strong>button_text</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Label of the sponsored message button.</td></tr><tr><td><strong>sponsor_info</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.7?<a href="/type/string/">string</a></td><td>If set, contains additional information about the sponsor to be shown along with the message.</td></tr><tr><td><strong>additional_info</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.8?<a href="/type/string/">string</a></td><td>If set, contains additional information about the sponsored message to be shown along with the message.</td></tr><tr><td><strong>min_display_duration</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.15?<a href="/type/int/">int</a></td><td>For <a href="/api/sponsored-messages/#getting-sponsored-video-advertisements">sponsored messages to show on channel videos »</a>, allow the user to hide the ad only after the specified amount of seconds.</td></tr><tr><td><strong>max_display_duration</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.15?<a href="/type/int/">int</a></td><td>For <a href="/api/sponsored-messages/#getting-sponsored-video-advertisements">sponsored messages to show on channel videos »</a>, autohide the ad after after the specified amount of seconds.</td></tr></tbody></table>

### Type

[SponsoredMessage](/type/SponsoredMessage/)

### Related pages

#### [Sponsored messages](/api/sponsored-messages/)

How clients should fetch, display and interact with sponsored messages.

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities

#### [Accent colors](/api/colors/)

Telegram users and channels can change the accent color and background pattern of their profile page and their messages!
