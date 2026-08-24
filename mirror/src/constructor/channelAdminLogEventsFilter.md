---
title: "channelAdminLogEventsFilter"
original: "https://core.telegram.org/constructor/channelAdminLogEventsFilter"
section: ref
description: "Filter only certain admin log events"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"channelAdminLogEventsFilter","url":"/constructor/channelAdminLogEventsFilter/"}]
layout: layout.njk
---

# channelAdminLogEventsFilter

Filter only certain admin log events

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/channelAdminLogEventsFilter/" class="current_page_link">channelAdminLogEventsFilter</a>#ea107ae4 flags:<a href="/type/%23/">#</a> join:flags.0?true leave:flags.1?true invite:flags.2?true ban:flags.3?true unban:flags.4?true kick:flags.5?true unkick:flags.6?true promote:flags.7?true demote:flags.8?true info:flags.9?true settings:flags.10?true pinned:flags.11?true edit:flags.12?true delete:flags.13?true group_call:flags.14?true invites:flags.15?true send:flags.16?true forums:flags.17?true sub_extend:flags.18?true edit_rank:flags.19?true = <a href="/type/ChannelAdminLogEventsFilter/">ChannelAdminLogEventsFilter</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>join</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td><a href="/constructor/channelAdminLogEventActionParticipantJoin/">Join events</a>, including <a href="/constructor/channelAdminLogEventActionParticipantJoinByInvite/">joins using invite links</a> and <a href="/constructor/channelAdminLogEventActionParticipantJoinByRequest/">join requests</a>.</td></tr><tr><td><strong>leave</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td><a href="/constructor/channelAdminLogEventActionParticipantLeave/">Leave events</a></td></tr><tr><td><strong>invite</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td><a href="/constructor/channelAdminLogEventActionParticipantInvite/">Invite events</a></td></tr><tr><td><strong>ban</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td><a href="/constructor/channelAdminLogEventActionParticipantToggleBan/">Ban events</a></td></tr><tr><td><strong>unban</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/constructor/true/">true</a></td><td><a href="/constructor/channelAdminLogEventActionParticipantToggleBan/">Unban events</a></td></tr><tr><td><strong>kick</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/constructor/true/">true</a></td><td><a href="/constructor/channelAdminLogEventActionParticipantToggleBan/">Kick events</a></td></tr><tr><td><strong>unkick</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/constructor/true/">true</a></td><td><a href="/constructor/channelAdminLogEventActionParticipantToggleBan/">Unkick events</a></td></tr><tr><td><strong>promote</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.7?<a href="/constructor/true/">true</a></td><td><a href="/constructor/channelAdminLogEventActionParticipantToggleAdmin/">Admin promotion events</a></td></tr><tr><td><strong>demote</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.8?<a href="/constructor/true/">true</a></td><td><a href="/constructor/channelAdminLogEventActionParticipantToggleAdmin/">Admin demotion events</a></td></tr><tr><td><strong>info</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.9?<a href="/constructor/true/">true</a></td><td>Info change events (when <a href="/constructor/channelAdminLogEventActionChangeAbout/">about</a>, <a href="/constructor/channelAdminLogEventActionChangeLinkedChat/">linked chat</a>, <a href="/constructor/channelAdminLogEventActionChangeLocation/">location</a>, <a href="/constructor/channelAdminLogEventActionChangePhoto/">photo</a>, <a href="/constructor/channelAdminLogEventActionChangeStickerSet/">stickerset</a>, <a href="/constructor/channelAdminLogEventActionChangeTitle/">title</a> or <a href="/constructor/channelAdminLogEventActionChangeUsername/">username</a>, <a href="/constructor/channelAdminLogEventActionToggleSlowMode/">slowmode</a>, <a href="/constructor/channelAdminLogEventActionChangeHistoryTTL/">history TTL</a> settings of a channel gets modified)</td></tr><tr><td><strong>settings</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.10?<a href="/constructor/true/">true</a></td><td>Settings change events (<a href="/constructor/channelAdminLogEventActionToggleInvites/">invites</a>, <a href="/constructor/channelAdminLogEventActionTogglePreHistoryHidden/">hidden prehistory</a>, <a href="/constructor/channelAdminLogEventActionToggleSignatures/">signatures</a>, <a href="/constructor/channelAdminLogEventActionDefaultBannedRights/">default banned rights</a>, <a href="/constructor/channelAdminLogEventActionToggleForum/">forum toggle events</a>)</td></tr><tr><td><strong>pinned</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.11?<a href="/constructor/true/">true</a></td><td><a href="/constructor/channelAdminLogEventActionUpdatePinned/">Message pin events</a></td></tr><tr><td><strong>edit</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.12?<a href="/constructor/true/">true</a></td><td><a href="/constructor/channelAdminLogEventActionEditMessage/">Message edit events</a></td></tr><tr><td><strong>delete</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.13?<a href="/constructor/true/">true</a></td><td><a href="/constructor/channelAdminLogEventActionDeleteMessage/">Message deletion events</a></td></tr><tr><td><strong>group_call</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.14?<a href="/constructor/true/">true</a></td><td>Group call events</td></tr><tr><td><strong>invites</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.15?<a href="/constructor/true/">true</a></td><td>Invite events</td></tr><tr><td><strong>send</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.16?<a href="/constructor/true/">true</a></td><td>A message was posted in a channel</td></tr><tr><td><strong>forums</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.17?<a href="/constructor/true/">true</a></td><td><a href="/api/forum/">Forum</a>-related events</td></tr><tr><td><strong>sub_extend</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.18?<a href="/constructor/true/">true</a></td><td><a href="/constructor/channelAdminLogEventActionParticipantSubExtend/">Telegram Star subscription extension events »</a></td></tr><tr><td><strong>edit_rank</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.19?<a href="/constructor/true/">true</a></td><td>Events where a participant's custom <a href="/api/rank/">tag (rank) »</a> was changed (<a href="/constructor/channelAdminLogEventActionParticipantEditRank/">channelAdminLogEventActionParticipantEditRank</a>).</td></tr></tbody></table>

### Type

[ChannelAdminLogEventsFilter](/type/ChannelAdminLogEventsFilter/)

### Related pages

#### [channelAdminLogEventActionParticipantJoin](/constructor/channelAdminLogEventActionParticipantJoin/)

A user has joined the group (in the case of big groups, info of the user that has joined isn't shown)

#### [channelAdminLogEventActionParticipantJoinByInvite](/constructor/channelAdminLogEventActionParticipantJoinByInvite/)

A user joined the [supergroup/channel](/api/channel/) using a specific invite link

#### [channelAdminLogEventActionParticipantJoinByRequest](/constructor/channelAdminLogEventActionParticipantJoinByRequest/)

A new member was accepted to the chat by an admin

#### [channelAdminLogEventActionParticipantLeave](/constructor/channelAdminLogEventActionParticipantLeave/)

A user left the channel/supergroup (in the case of big groups, info of the user that has joined isn't shown)

#### [channelAdminLogEventActionParticipantInvite](/constructor/channelAdminLogEventActionParticipantInvite/)

A user was invited to the group

#### [channelAdminLogEventActionParticipantToggleBan](/constructor/channelAdminLogEventActionParticipantToggleBan/)

The banned [rights](/api/rights/) of a user were changed

#### [channelAdminLogEventActionParticipantToggleAdmin](/constructor/channelAdminLogEventActionParticipantToggleAdmin/)

The admin [rights](/api/rights/) of a user were changed

#### [channelAdminLogEventActionChangeAbout](/constructor/channelAdminLogEventActionChangeAbout/)

The description was changed

#### [channelAdminLogEventActionChangeLinkedChat](/constructor/channelAdminLogEventActionChangeLinkedChat/)

The linked chat was changed

#### [channelAdminLogEventActionChangeLocation](/constructor/channelAdminLogEventActionChangeLocation/)

The geogroup location was changed

#### [channelAdminLogEventActionChangePhoto](/constructor/channelAdminLogEventActionChangePhoto/)

The channel/supergroup's picture was changed

#### [channelAdminLogEventActionChangeStickerSet](/constructor/channelAdminLogEventActionChangeStickerSet/)

The supergroup's stickerset was changed

#### [channelAdminLogEventActionChangeTitle](/constructor/channelAdminLogEventActionChangeTitle/)

Channel/supergroup title was changed

#### [channelAdminLogEventActionChangeUsername](/constructor/channelAdminLogEventActionChangeUsername/)

Channel/supergroup username was changed

#### [channelAdminLogEventActionToggleSlowMode](/constructor/channelAdminLogEventActionToggleSlowMode/)

[Slow mode setting for supergroups was changed](/method/channels.toggleSlowMode/)

#### [channelAdminLogEventActionChangeHistoryTTL](/constructor/channelAdminLogEventActionChangeHistoryTTL/)

The Time-To-Live of messages in this chat was changed

#### [channelAdminLogEventActionToggleInvites](/constructor/channelAdminLogEventActionToggleInvites/)

Invites were enabled/disabled

#### [channelAdminLogEventActionTogglePreHistoryHidden](/constructor/channelAdminLogEventActionTogglePreHistoryHidden/)

The hidden prehistory setting was [changed](/method/channels.togglePreHistoryHidden/)

#### [channelAdminLogEventActionToggleSignatures](/constructor/channelAdminLogEventActionToggleSignatures/)

Channel signatures were enabled/disabled

#### [channelAdminLogEventActionDefaultBannedRights](/constructor/channelAdminLogEventActionDefaultBannedRights/)

The default banned rights were modified

#### [channelAdminLogEventActionToggleForum](/constructor/channelAdminLogEventActionToggleForum/)

[Forum](/api/forum/) functionality was enabled or disabled.

#### [channelAdminLogEventActionUpdatePinned](/constructor/channelAdminLogEventActionUpdatePinned/)

A message was pinned

#### [channelAdminLogEventActionEditMessage](/constructor/channelAdminLogEventActionEditMessage/)

A message was edited

#### [channelAdminLogEventActionDeleteMessage](/constructor/channelAdminLogEventActionDeleteMessage/)

A message was deleted

#### [Forum topics](/api/forum/)

Telegram allows creating forums with multiple distinct topics.

#### [channelAdminLogEventActionParticipantSubExtend](/constructor/channelAdminLogEventActionParticipantSubExtend/)

A paid subscriber has extended their [Telegram Star subscription »](/api/stars/#star-subscriptions).

#### [Group participant tags](/api/rank/)

Members in group chats (both basic groups and supergroups) can add a tag next to their name — to show their role at work, what they study in school, and more.

#### [channelAdminLogEventActionParticipantEditRank](/constructor/channelAdminLogEventActionParticipantEditRank/)

A participant's [tag »](/api/rank/) was changed.
