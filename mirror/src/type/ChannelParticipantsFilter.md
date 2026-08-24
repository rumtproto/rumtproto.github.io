---
title: "ChannelParticipantsFilter"
original: "https://core.telegram.org/type/ChannelParticipantsFilter"
section: ref
description: "Filter for fetching channel participants"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"ChannelParticipantsFilter","url":"/type/ChannelParticipantsFilter/"}]
layout: layout.njk
---

# ChannelParticipantsFilter

Filter for fetching channel participants

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/channelParticipantsRecent/">channelParticipantsRecent</a>#de3f3c79 = <a href="/type/ChannelParticipantsFilter/" class="current_page_link">ChannelParticipantsFilter</a>;
<a href="/constructor/channelParticipantsAdmins/">channelParticipantsAdmins</a>#b4608969 = <a href="/type/ChannelParticipantsFilter/" class="current_page_link">ChannelParticipantsFilter</a>;
<a href="/constructor/channelParticipantsKicked/">channelParticipantsKicked</a>#a3b54985 q:<a href="/type/string/">string</a> = <a href="/type/ChannelParticipantsFilter/" class="current_page_link">ChannelParticipantsFilter</a>;
<a href="/constructor/channelParticipantsBots/">channelParticipantsBots</a>#b0d1865b = <a href="/type/ChannelParticipantsFilter/" class="current_page_link">ChannelParticipantsFilter</a>;
<a href="/constructor/channelParticipantsBanned/">channelParticipantsBanned</a>#1427a5e1 q:<a href="/type/string/">string</a> = <a href="/type/ChannelParticipantsFilter/" class="current_page_link">ChannelParticipantsFilter</a>;
<a href="/constructor/channelParticipantsSearch/">channelParticipantsSearch</a>#656ac4b q:<a href="/type/string/">string</a> = <a href="/type/ChannelParticipantsFilter/" class="current_page_link">ChannelParticipantsFilter</a>;
<a href="/constructor/channelParticipantsContacts/">channelParticipantsContacts</a>#bb6ae88d q:<a href="/type/string/">string</a> = <a href="/type/ChannelParticipantsFilter/" class="current_page_link">ChannelParticipantsFilter</a>;
<a href="/constructor/channelParticipantsMentions/">channelParticipantsMentions</a>#e04b5ceb flags:<a href="/type/%23/">#</a> q:flags.0?<a href="/type/string/">string</a> top_msg_id:flags.1?<a href="/type/int/">int</a> = <a href="/type/ChannelParticipantsFilter/" class="current_page_link">ChannelParticipantsFilter</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/channelParticipantsRecent/">channelParticipantsRecent</a></td><td>Fetch only recent participants</td></tr><tr><td><a href="/constructor/channelParticipantsAdmins/">channelParticipantsAdmins</a></td><td>Fetch only admin participants</td></tr><tr><td><a href="/constructor/channelParticipantsKicked/">channelParticipantsKicked</a></td><td>Fetch only kicked participants</td></tr><tr><td><a href="/constructor/channelParticipantsBots/">channelParticipantsBots</a></td><td>Fetch only bot participants</td></tr><tr><td><a href="/constructor/channelParticipantsBanned/">channelParticipantsBanned</a></td><td>Fetch only banned participants</td></tr><tr><td><a href="/constructor/channelParticipantsSearch/">channelParticipantsSearch</a></td><td>Query participants by name</td></tr><tr><td><a href="/constructor/channelParticipantsContacts/">channelParticipantsContacts</a></td><td>Fetch only participants that are also contacts</td></tr><tr><td><a href="/constructor/channelParticipantsMentions/">channelParticipantsMentions</a></td><td>This filter is used when looking for supergroup members to mention.<br>This filter will automatically remove anonymous admins, and return even non-participant users that replied to a specific <a href="/api/threads/">thread</a> through the <a href="/api/threads/#channel-comments">comment section</a> of a channel.</td></tr></tbody></table>
