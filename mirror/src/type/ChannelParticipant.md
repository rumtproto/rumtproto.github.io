---
title: "ChannelParticipant"
original: "https://core.telegram.org/type/ChannelParticipant"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"ChannelParticipant","url":"/type/ChannelParticipant/"}]
layout: layout.njk
---

# ChannelParticipant

Channel participant

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/channelParticipant/">channelParticipant</a>#1bd54456 flags:<a href="/type/%23/">#</a> user_id:<a href="/type/long/">long</a> date:<a href="/type/int/">int</a> subscription_until_date:flags.0?<a href="/type/int/">int</a> rank:flags.2?<a href="/type/string/">string</a> = <a href="/type/ChannelParticipant/" class="current_page_link">ChannelParticipant</a>;
<a href="/constructor/channelParticipantSelf/">channelParticipantSelf</a>#a9478a1a flags:<a href="/type/%23/">#</a> via_request:flags.0?true user_id:<a href="/type/long/">long</a> inviter_id:<a href="/type/long/">long</a> date:<a href="/type/int/">int</a> subscription_until_date:flags.1?<a href="/type/int/">int</a> rank:flags.2?<a href="/type/string/">string</a> = <a href="/type/ChannelParticipant/" class="current_page_link">ChannelParticipant</a>;
<a href="/constructor/channelParticipantCreator/">channelParticipantCreator</a>#2fe601d3 flags:<a href="/type/%23/">#</a> user_id:<a href="/type/long/">long</a> admin_rights:<a href="/type/ChatAdminRights/">ChatAdminRights</a> rank:flags.0?<a href="/type/string/">string</a> = <a href="/type/ChannelParticipant/" class="current_page_link">ChannelParticipant</a>;
<a href="/constructor/channelParticipantAdmin/">channelParticipantAdmin</a>#34c3bb53 flags:<a href="/type/%23/">#</a> can_edit:flags.0?true self:flags.1?true user_id:<a href="/type/long/">long</a> inviter_id:flags.1?<a href="/type/long/">long</a> promoted_by:<a href="/type/long/">long</a> date:<a href="/type/int/">int</a> admin_rights:<a href="/type/ChatAdminRights/">ChatAdminRights</a> rank:flags.2?<a href="/type/string/">string</a> = <a href="/type/ChannelParticipant/" class="current_page_link">ChannelParticipant</a>;
<a href="/constructor/channelParticipantBanned/">channelParticipantBanned</a>#d5f0ad91 flags:<a href="/type/%23/">#</a> left:flags.0?true peer:<a href="/type/Peer/">Peer</a> kicked_by:<a href="/type/long/">long</a> date:<a href="/type/int/">int</a> banned_rights:<a href="/type/ChatBannedRights/">ChatBannedRights</a> rank:flags.2?<a href="/type/string/">string</a> = <a href="/type/ChannelParticipant/" class="current_page_link">ChannelParticipant</a>;
<a href="/constructor/channelParticipantLeft/">channelParticipantLeft</a>#1b03f006 peer:<a href="/type/Peer/">Peer</a> = <a href="/type/ChannelParticipant/" class="current_page_link">ChannelParticipant</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/channelParticipant/">channelParticipant</a></td><td>Channel/supergroup participant</td></tr><tr><td><a href="/constructor/channelParticipantSelf/">channelParticipantSelf</a></td><td>Myself</td></tr><tr><td><a href="/constructor/channelParticipantCreator/">channelParticipantCreator</a></td><td>Channel/supergroup creator</td></tr><tr><td><a href="/constructor/channelParticipantAdmin/">channelParticipantAdmin</a></td><td>Admin</td></tr><tr><td><a href="/constructor/channelParticipantBanned/">channelParticipantBanned</a></td><td>Banned/kicked user</td></tr><tr><td><a href="/constructor/channelParticipantLeft/">channelParticipantLeft</a></td><td>A participant that left the channel/supergroup</td></tr></tbody></table>
