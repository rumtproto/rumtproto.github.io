---
title: "PeerSettings"
original: "https://core.telegram.org/type/PeerSettings"
section: ref
description: "List of actions that are possible when interacting with this user, to be shown as suggested actions in the chat bar"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"PeerSettings","url":"/type/PeerSettings/"}]
layout: layout.njk
---

# PeerSettings

List of actions that are possible when interacting with this user, to be shown as suggested actions in the chat bar

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/peerSettings/">peerSettings</a>#f47741f7 flags:<a href="/type/%23/">#</a> report_spam:flags.0?true add_contact:flags.1?true block_contact:flags.2?true share_contact:flags.3?true need_contacts_exception:flags.4?true report_geo:flags.5?true autoarchived:flags.7?true invite_members:flags.8?true request_chat_broadcast:flags.10?true business_bot_paused:flags.11?true business_bot_can_reply:flags.12?true geo_distance:flags.6?<a href="/type/int/">int</a> request_chat_title:flags.9?<a href="/type/string/">string</a> request_chat_date:flags.9?<a href="/type/int/">int</a> business_bot_id:flags.13?<a href="/type/long/">long</a> business_bot_manage_url:flags.13?<a href="/type/string/">string</a> charge_paid_message_stars:flags.14?<a href="/type/long/">long</a> registration_month:flags.15?<a href="/type/string/">string</a> phone_country:flags.16?<a href="/type/string/">string</a> name_change_date:flags.17?<a href="/type/int/">int</a> photo_change_date:flags.18?<a href="/type/int/">int</a> = <a href="/type/PeerSettings/" class="current_page_link">PeerSettings</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/peerSettings/">peerSettings</a></td><td>List of actions that are possible when interacting with this user, to be shown as suggested actions in the <a href="/api/action-bar/">chat action bar »</a>, see <a href="/api/action-bar/">here »</a> for more info.</td></tr></tbody></table>
