---
title: "messageFwdHeader"
original: "https://core.telegram.org/constructor/messageFwdHeader"
section: ref
description: "Info about a forwarded message"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageFwdHeader","url":"/constructor/messageFwdHeader/"}]
layout: layout.njk
---

# messageFwdHeader

Info about a forwarded message

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageFwdHeader/" class="current_page_link">messageFwdHeader</a>#4e4df4bb flags:<a href="/type/%23/">#</a> imported:flags.7?true saved_out:flags.11?true from_id:flags.0?<a href="/type/Peer/">Peer</a> from_name:flags.5?<a href="/type/string/">string</a> date:<a href="/type/int/">int</a> channel_post:flags.2?<a href="/type/int/">int</a> post_author:flags.3?<a href="/type/string/">string</a> saved_from_peer:flags.4?<a href="/type/Peer/">Peer</a> saved_from_msg_id:flags.4?<a href="/type/int/">int</a> saved_from_id:flags.8?<a href="/type/Peer/">Peer</a> saved_from_name:flags.9?<a href="/type/string/">string</a> saved_date:flags.10?<a href="/type/int/">int</a> psa_type:flags.6?<a href="/type/string/">string</a> = <a href="/type/MessageFwdHeader/">MessageFwdHeader</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>imported</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.7?<a href="/constructor/true/">true</a></td><td>Whether this message was <a href="/api/import/">imported from a foreign chat service, click here for more info »</a></td></tr><tr><td><strong>saved_out</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.11?<a href="/constructor/true/">true</a></td><td>Only for messages forwarded to <a href="/api/saved-messages/">saved messages »</a>, set if the original message was outgoing (though the message may have been originally outgoing even if this flag is not set, if <code>from_id</code> points to the current user).</td></tr><tr><td><strong>from_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/Peer/">Peer</a></td><td>The ID of the user that originally sent the message</td></tr><tr><td><strong>from_name</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/type/string/">string</a></td><td>The name of the user that originally sent the message</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>When was the message originally sent</td></tr><tr><td><strong>channel_post</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/int/">int</a></td><td>ID of the channel message that was forwarded</td></tr><tr><td><strong>post_author</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/string/">string</a></td><td>For channels and if signatures are enabled, author of the channel message</td></tr><tr><td><strong>saved_from_peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/Peer/">Peer</a></td><td>Only for messages forwarded to <a href="/api/saved-messages/">saved messages »</a>, contains the dialog where the message was originally sent.</td></tr><tr><td><strong>saved_from_msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/int/">int</a></td><td>Only for messages forwarded to <a href="/api/saved-messages/">saved messages »</a>, contains the original ID of the message in <code>saved_from_peer</code>.</td></tr><tr><td><strong>saved_from_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.8?<a href="/type/Peer/">Peer</a></td><td>Only for forwarded messages reforwarded to <a href="/api/saved-messages/">saved messages »</a>, contains the sender of the original message (i.e. if user A sends a message, then user B forwards it somewhere, then user C saves it to saved messages, this field will contain the ID of user B and <code>from_id</code> will contain the ID of user A).</td></tr><tr><td><strong>saved_from_name</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.9?<a href="/type/string/">string</a></td><td>Only for forwarded messages from users with forward privacy enabled, sent by users with forward privacy enabled, reforwarded to <a href="/api/saved-messages/">saved messages »</a>, contains the sender of the original message (i.e. if user A (fwd privacy enabled) sends a message, then user B (fwd privacy enabled) forwards it somewhere, then user C saves it to saved messages, this field will contain the name of user B and <code>from_name</code> will contain the name of user A).</td></tr><tr><td><strong>saved_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.10?<a href="/type/int/">int</a></td><td>Only for forwarded messages reforwarded to <a href="/api/saved-messages/">saved messages »</a>, indicates when was the original message sent (i.e. if user A sends a message @ unixtime 1, then user B forwards it somewhere @ unixtime 2, then user C saves it to saved messages @ unixtime 3, this field will contain 2, <code>date</code> will contain 1 and the <code>date</code> of the containing <a href="/constructor/message/">message</a> will contain 3).</td></tr><tr><td><strong>psa_type</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/type/string/">string</a></td><td>PSA type</td></tr></tbody></table>

### Type

[MessageFwdHeader](/type/MessageFwdHeader/)

### Related pages

#### [Imported messages](/api/import/)

Telegram allows importing messages and media from foreign chat apps.

#### [Saved messages](/api/saved-messages/)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.

#### [message](/constructor/message/)

A message
