---
title: "messages.AffectedHistory"
original: "https://core.telegram.org/type/messages.AffectedHistory"
section: ref
description: "Object contains info on affected part of communication history with the user or in a chat."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.AffectedHistory","url":"/type/messages.AffectedHistory/"}]
layout: layout.njk
---

# messages.AffectedHistory

Object contains info on affected part of communication history with the user or in a chat.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.affectedHistory/">messages.affectedHistory</a>#b45c69d1 pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> offset:<a href="/type/int/">int</a> = <a href="/type/messages.AffectedHistory/" class="current_page_link">messages.AffectedHistory</a>;

---functions---

<a href="/method/messages.deleteHistory/">messages.deleteHistory</a>#b08f922a flags:<a href="/type/%23/">#</a> just_clear:flags.0?true revoke:flags.1?true peer:<a href="/type/InputPeer/">InputPeer</a> max_id:<a href="/type/int/">int</a> min_date:flags.2?<a href="/type/int/">int</a> max_date:flags.3?<a href="/type/int/">int</a> = <a href="/type/messages.AffectedHistory/" class="current_page_link">messages.AffectedHistory</a>;
<a href="/method/messages.readMentions/">messages.readMentions</a>#36e5bf4d flags:<a href="/type/%23/">#</a> peer:<a href="/type/InputPeer/">InputPeer</a> top_msg_id:flags.0?<a href="/type/int/">int</a> = <a href="/type/messages.AffectedHistory/" class="current_page_link">messages.AffectedHistory</a>;
<a href="/method/messages.unpinAllMessages/">messages.unpinAllMessages</a>#62dd747 flags:<a href="/type/%23/">#</a> peer:<a href="/type/InputPeer/">InputPeer</a> top_msg_id:flags.0?<a href="/type/int/">int</a> saved_peer_id:flags.1?<a href="/type/InputPeer/">InputPeer</a> = <a href="/type/messages.AffectedHistory/" class="current_page_link">messages.AffectedHistory</a>;
<a href="/method/messages.readReactions/">messages.readReactions</a>#9ec44f93 flags:<a href="/type/%23/">#</a> peer:<a href="/type/InputPeer/">InputPeer</a> top_msg_id:flags.0?<a href="/type/int/">int</a> saved_peer_id:flags.1?<a href="/type/InputPeer/">InputPeer</a> = <a href="/type/messages.AffectedHistory/" class="current_page_link">messages.AffectedHistory</a>;
<a href="/method/messages.deleteSavedHistory/">messages.deleteSavedHistory</a>#4dc5085f flags:<a href="/type/%23/">#</a> parent_peer:flags.0?<a href="/type/InputPeer/">InputPeer</a> peer:<a href="/type/InputPeer/">InputPeer</a> max_id:<a href="/type/int/">int</a> min_date:flags.2?<a href="/type/int/">int</a> max_date:flags.3?<a href="/type/int/">int</a> = <a href="/type/messages.AffectedHistory/" class="current_page_link">messages.AffectedHistory</a>;
<a href="/method/messages.deleteTopicHistory/">messages.deleteTopicHistory</a>#d2816f10 peer:<a href="/type/InputPeer/">InputPeer</a> top_msg_id:<a href="/type/int/">int</a> = <a href="/type/messages.AffectedHistory/" class="current_page_link">messages.AffectedHistory</a>;

<a href="/method/channels.deleteParticipantHistory/">channels.deleteParticipantHistory</a>#367544db channel:<a href="/type/InputChannel/">InputChannel</a> participant:<a href="/type/InputPeer/">InputPeer</a> = <a href="/type/messages.AffectedHistory/" class="current_page_link">messages.AffectedHistory</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.affectedHistory/">messages.affectedHistory</a></td><td>Affected part of communication history with the user or in a chat.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.deleteHistory/">messages.deleteHistory</a></td><td>Deletes communication history.</td></tr><tr><td><a href="/method/messages.readMentions/">messages.readMentions</a></td><td>Mark mentions as read; can be used in <a href="/api/forum/">forums</a> but <strong>cannot</strong> be used in <a href="/api/monoforum/">monoforums</a>.</td></tr><tr><td><a href="/method/messages.unpinAllMessages/">messages.unpinAllMessages</a></td><td><a href="/api/pin/">Unpin</a> all pinned messages</td></tr><tr><td><a href="/method/messages.readReactions/">messages.readReactions</a></td><td>Mark <a href="/api/reactions/">message reactions »</a> as read</td></tr><tr><td><a href="/method/messages.deleteSavedHistory/">messages.deleteSavedHistory</a></td><td>Deletes messages from a <a href="/api/monoforum/">monoforum topic »</a>, or deletes messages forwarded from a specific peer to <a href="/api/saved-messages/">saved messages »</a>.</td></tr><tr><td><a href="/method/messages.deleteTopicHistory/">messages.deleteTopicHistory</a></td><td>Delete message history of a <a href="/api/forum/">forum topic</a></td></tr><tr><td><a href="/method/messages.readPollVotes/">messages.readPollVotes</a></td><td>Mark all <a href="/api/poll/#unread-poll-votes">unread poll votes »</a> in a chat as read</td></tr><tr><td><a href="/method/channels.deleteParticipantHistory/">channels.deleteParticipantHistory</a></td><td>Delete all messages sent by a specific participant of a given supergroup</td></tr></tbody></table>
