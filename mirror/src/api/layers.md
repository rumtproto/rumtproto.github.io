---
title: "Layer changelog"
original: "https://core.telegram.org/api/layers"
section: api
description: "Below you will find information on schema changes. For more details on the use of layers, see Invoking API methods."
crumbs: [{"title":"API","url":"/api/"},{"title":"Layer changelog","url":"/api/layers/"}]
layout: layout.njk
---

# Layer changelog

Below you will find information on schema changes. For more details on the use of layers, see [Invoking API methods](/api/invoking/#layers).

### [Layer 225](https://core.telegram.org/schema?layer=225)

To view all changes since the last documentation refresh, start reading at [layer 215](#layer-215).

This documentation release includes the following new and substantially overhauled articles, documenting pre-existing features:

-   [Group calls, video chats, live stories, conferences and livestreams »](/api/group-calls/)
-   [One-to-one calls »](/api/calls/)
-   [Completely overhauled the E2E conference documentation »](/api/end-to-end/group-calls/)
-   [Completely overhauled the file reference database schema, making it significantly easier to autogenerate the file reference database »](/api/file-references/)
-   [Applying basic group updates »](/api/peers/#basic-group-updates)
-   [Applying group call updates »](/api/end-to-end/group-calls/#handling-updates)
-   [Message ID sequences »](/api/updates/#message-id-sequences)
-   [More detailed instructions for update gap handling (also considering gaps beyond the max message box size) »](/api/updates/#recovering-gaps-for-very-old-messages)
-   [Parallel sessions »](/api/datacenter/#parallel-sessions)
-   [updateMessageID handling »](/api/updates/#updatemessageid-updates)
-   [Documented rate limits for live drafts »](/api/bots/ai/#live-response-streaming)
-   [Content protection »](/api/content-protection/)
-   [Message views »](/api/views/)
-   [Sending messages on behalf of owned channels and groups »](/api/channel/#sending-messages-on-behalf-of-owned-channels-and-groups)
-   [Working with basic group participants »](/api/channel/#basic-group-participants)
-   [Leaving groups/channels (full flow) »](/api/channel/#leaving-groups-channels)
-   [Added the layer number to the RPC error DB »](/api/errors/)
-   [Improved the takeout documentation »](/api/takeout/)
-   Documented the [`navigationBarColor` »](/api/web-events/#navigationbarcolor), [`actionBarColor` »](/api/web-events/#actionbarcolor), [`allowScroll` »](/api/web-events/#allowscroll), [`siteName` »](/api/web-events/#sitename) event types
-   [`whitelisted_bots` »](/api/config/#whitelisted-bots)
-   Detailed changelogs for API configuration keys, web events, limits, suggested actions and other API constants will now be automatically listed in the appropriate layer changelog, instead of the latest layer.
-   Published an aggregated, machine-readable index of all [API constants and push updates »](/api/config/#machine-readable-configuration-index) at the new [/api/config.json »](/api/config.json/) permalink.
-   The [RPC error database »](/api/errors/#error-database) is now also published as a machine-readable [/api/errors.json »](/api/errors.json/) permalink, replacing the previous embedded file link.
-   Multiple other improvements and fixes across the board.

And documenting the following new features (a brief overview of features introduced since [layer 215](#layer-215)):

-   AI features: [message composition »](/api/ai/#compose-messages), [AI compose tones »](/api/ai/#ai-compose-tones) and [message summarization »](/api/ai/#summarize-messages)
-   Bot AI features: [live drafts »](/api/bots/ai/#live-response-streaming)
-   [Bot forums »](/api/forum/#bot-forums)
-   [Managed bots »](/api/bots/managed-bots/)
-   [Improved styled text entities »](/api/entities/)
-   [Guest mode for bots »](/api/bots/guest-mode/)
-   [Gift auctions »](/api/auctions/)
-   [Passkeys »](/api/passkeys/)
-   [Live stories »](/api/group-calls/#live-stories), [in-call messages »](/api/group-calls/#in-call-messages), [paid live story comments »](/api/group-calls/#paid-live-story-comments) and [paid live story donations »](/api/group-calls/#paid-live-story-donations)
-   [Recent story summaries »](/api/stories/#recent-story-summaries)
-   [Repeating scheduled messages »](/api/scheduled-messages/#repeating-scheduled-messages)
-   [Message views »](/api/views/#view-counters) and [read metrics »](/api/views/#read-metrics)
-   [Open-answer polls »](/api/poll/#open-answer-polls), [unread poll votes »](/api/poll/#unread-poll-votes), [poll answer media attachments »](/api/poll/#sending-a-poll), [replies to poll options »](/api/poll/#replying-to-poll-options), [poll search »](/api/poll/#searching-for-polls) and [poll statistics »](/api/stats/#poll-statistics)
-   [Group member/admin tags »](/api/rank/)
-   [Group/channel ownership transfer »](/api/channel/#transferring-ownership-of-a-group-channel) and [leave handoff flows »](/api/channel/#leaving-groups-channels)
-   [Date styled text entities »](/api/entities/#date-entities) and [diff styled text entities »](/api/entities/#diff-entities)
-   [Collectible gifts »](/api/gifts/#collectible-gifts): [crafting »](/api/gifts/#crafting-collectible-gifts), [purchase offers »](/api/gifts/#collectible-gift-purchase-offers), [hosted gifts »](/api/gifts/#hosted-collectible-gifts), [collectible message palettes »](/api/colors/#collectible-message-palettes) and [collectible profile palettes »](/api/colors/#collectible-profile-palettes).
-   [Private contact notes »](/api/contacts/#private-notes-for-contacts)
-   [Birthdays »](/api/profile/#birthday), [music profile tab »](/api/profile/#music), [managed bot manager info »](/api/profile/#managed-bot-manager), [personal channels »](/api/profile/#personal-channel) and [unofficial client warnings »](/api/profile/#unofficial-client-warning)
-   [Private chat content protection »](/api/content-protection/#for-users)
-   [Button styles »](/api/bots/buttons/#button-styles)
-   [Peer requests for Mini Apps »](/api/bots/buttons/#requesting-peers-via-mini-apps)
-   [Anonymous group admins »](/api/rights/#anonymous-admins) can now [toggle checklist items »](/api/todo/#mark-items-as-completed)
-   [Removing participant reactions »](/api/reactions/#removing-participant-reactions)
-   [Message effects »](/api/effects/) support for forwarded messages
-   [Login email setup suggestions »](/api/auth/#email-verification) and [passkey setup suggestions »](/api/config/#setup-passkey)
-   [OAuth login »](/api/url-authorization/)
-   [`blur_enabled` in `fullscreen_changed` events »](/api/bots/webapps/#fullscreen-changed)
-   New [deep link »](/api/links/) types:
    -   [Parameterized settings deep links, with support for opening a specific settings page or subsection »](/api/links/#settings-links)
    -   [Contact list deep links »](/api/links/#contacts-links)
    -   [Chat creation deep links »](/api/links/#new-chat-links)
    -   [Chat list deep links »](/api/links/#chat-list-links)
    -   [Live story deep links »](/api/links/#live-story-links)
    -   [Story composer deep links »](/api/links/#post-story-links)
    -   [Timestamp links »](/api/links/#timestamp-links)
    -   [Highlighting of a specific checklist task or poll option in message deep links »](/api/links/#message-links)

This layer introduces the following features:

-   [Custom AI compose tones »](/api/ai/#ai-compose-tones)
-   [Guest mode for bots »](/api/bots/guest-mode/)
-   [Poll statistics »](/api/stats/#poll-statistics)
-   [Participant reaction moderation »](/api/reactions/#removing-participant-reactions)
-   [Allowed bots to fetch the history of the personal channel of any user »](/api/profile/#personal-channel)

#### API constants

##### Premium limits

[Telegram Premium limit identifiers »](/api/premium/#double-limits).

-   Added [`double_limits__aicompose_tone_saved` »](/api/premium/#double-limits-aicompose-tone-saved)

##### Web page type values

Web page type values from the [webPage](/constructor/webPage/) constructor.

-   Added `telegram_aicomposetone` - Preview of an [AI compose tone link »](/api/links/#ai-compose-tone-links), shared when previewing a [custom AI composer tone »](/api/ai/#ai-compose-tones). The `attributes` field contains a [webPageAttributeAiComposeTone](/constructor/webPageAttributeAiComposeTone/) with the [custom emoji »](/api/custom-emoji/) representing the tone; clients render a button that applies the shared tone.

#### [Schema](/schema/) changes

##### New Methods

-   Added [messages.setBotGuestChatResult](/method/messages.setBotGuestChatResult/) - Bots may use this method to answer a [guest mode »](/api/bots/guest-mode/) query received via an [updateBotGuestChatQuery](/constructor/updateBotGuestChatQuery/) update, providing the message to post into the chat as a guest, see [here »](/api/bots/guest-mode/#handling-guest-queries-bot-side) for more info.
-   Added [messages.deleteParticipantReactions](/method/messages.deleteParticipantReactions/) - As an admin, remove all of a specific participant's [reactions](/api/reactions/) from every message in a group or channel.
-   Added [messages.deleteParticipantReaction](/method/messages.deleteParticipantReaction/) - As an admin, remove all of a specific participant's [reactions](/api/reactions/) from a single message.
-   Added [messages.getPersonalChannelHistory](/method/messages.getPersonalChannelHistory/) - Fetch the message history of a user's [personal channel »](/api/profile/#personal-channel).
-   Added [bots.getAccessSettings](/method/bots.getAccessSettings/) - Get the [access restriction settings »](/api/bots/managed-bots/#managing-a-managed-bot) of a managed bot; can only be called by the manager bot.
-   Added [bots.editAccessSettings](/method/bots.editAccessSettings/) - Edit the [access restriction settings »](/api/bots/managed-bots/#managing-a-managed-bot) of a managed bot; can only be called by the manager bot.
-   Added [stats.getPollStats](/method/stats.getPollStats/) - Get [statistics](/api/stats/#poll-statistics) for a poll sent in a message.
-   Added [aicompose.createTone](/method/aicompose.createTone/) - Create a new custom [AI composer tone »](/api/ai/#ai-compose-tones).
-   Added [aicompose.updateTone](/method/aicompose.updateTone/) - Edit a custom [AI composer tone »](/api/ai/#ai-compose-tones) previously created by the current user. Only the fields whose flag is set will be modified.
-   Added [aicompose.saveTone](/method/aicompose.saveTone/) - Install or uninstall an [AI composer tone »](/api/ai/#ai-compose-tones), adding it to or removing it from the list of saved tones of the current user.
-   Added [aicompose.deleteTone](/method/aicompose.deleteTone/) - Permanently delete a custom [AI composer tone »](/api/ai/#ai-compose-tones) created by the current user.
-   Added [aicompose.getTone](/method/aicompose.getTone/) - Fetch information about a single [AI composer tone »](/api/ai/#ai-compose-tones), for example to resolve a shared tone deep link.
-   Added [aicompose.getTones](/method/aicompose.getTones/) - Fetch the list of saved [AI composer tones »](/api/ai/#ai-compose-tones) of the current user.
-   Added [aicompose.getToneExample](/method/aicompose.getToneExample/) - Fetch an example showing how an [AI composer tone »](/api/ai/#ai-compose-tones) rephrases a sample message, used as a preview in the tone picker.

##### Changed Methods

-   Added **bots\_guestchat** parameter in [contacts.getTopPeers](/method/contacts.getTopPeers/)
-   Added **tone** parameter, removed **change\_tone** parameter in [messages.composeMessageWithAI](/method/messages.composeMessageWithAI/)

##### New Constructors

-   Added [updateBotGuestChatQuery](/constructor/updateBotGuestChatQuery/) - Sent to [guest bots »](/api/bots/guest-mode/) when a user invokes the bot as a guest in a chat. The bot should reply by invoking [messages.setBotGuestChatResult](/method/messages.setBotGuestChatResult/), see [here »](/api/bots/guest-mode/#handling-guest-queries-bot-side) for more info.
-   Added [updateAiComposeTones](/constructor/updateAiComposeTones/) - The list of saved [AI composer tones »](/api/ai/#ai-compose-tones) of the current user has changed, and should be refetched using [aicompose.getTones](/method/aicompose.getTones/).
-   Added [topPeerCategoryBotsGuestChat](/constructor/topPeerCategoryBotsGuestChat/) - Top [guest bots »](/api/bots/guest-mode/), i.e. bots most frequently invoked as guests in chats.
-   Added [webPageAttributeAiComposeTone](/constructor/webPageAttributeAiComposeTone/) - [Webpage attribute](/type/WebPageAttribute/) attached to a [webPage](/constructor/webPage/) of type `telegram_aicomposetone`, generated when previewing a shared [AI composer tone »](/api/ai/#ai-compose-tones) via an [AI compose tone link »](/api/links/#ai-compose-tone-links).
-   Added [stats.pollStats](/constructor/stats.pollStats/) - [Statistics](/api/stats/#poll-statistics) for a poll sent in a message.
-   Added [inputAiComposeToneDefault](/constructor/inputAiComposeToneDefault/) - References a built-in, default [AI composer tone »](/api/ai/#ai-compose-tones) by its string identifier.
-   Added [inputAiComposeToneID](/constructor/inputAiComposeToneID/) - References a custom [AI composer tone »](/api/ai/#ai-compose-tones) by its ID and access hash.
-   Added [inputAiComposeToneSlug](/constructor/inputAiComposeToneSlug/) - References a custom [AI composer tone »](/api/ai/#ai-compose-tones) by its public slug, used when opening an [AI compose tone link »](/api/links/#ai-compose-tone-links).
-   Added [aiComposeTone](/constructor/aiComposeTone/) - A custom [AI composer tone »](/api/ai/#ai-compose-tones), used to rephrase messages in a specific style with the [AI message composer](/api/ai/#compose-messages).
-   Added [aiComposeToneDefault](/constructor/aiComposeToneDefault/) - A built-in, default [AI composer tone »](/api/ai/#ai-compose-tones), identified by a string identifier rather than by a numeric ID.
-   Added [aicompose.tonesNotModified](/constructor/aicompose.tonesNotModified/) - The list of saved [AI composer tones »](/api/ai/#ai-compose-tones) hasn't changed since the last time it was fetched (i.e. the `hash` passed to [aicompose.getTones](/method/aicompose.getTones/) is still valid).
-   Added [aicompose.tones](/constructor/aicompose.tones/) - The list of saved [AI composer tones »](/api/ai/#ai-compose-tones) of the current user.
-   Added [aiComposeToneExample](/constructor/aiComposeToneExample/) - An example showing how an [AI composer tone »](/api/ai/#ai-compose-tones) rephrases a message, used as a preview in the tone picker.
-   Added [bots.accessSettings](/constructor/bots.accessSettings/) - Access restriction settings for a [managed bot »](/api/bots/managed-bots/#managing-a-managed-bot).

##### Changed Constructors

-   Added **bot\_guestchat** parameter in [user](/constructor/user/)
-   Added **guestchat\_via\_from** parameter in [message](/constructor/message/)
-   Added **premium\_days** parameter in [auth.sentCodePaymentRequired](/constructor/auth.sentCodePaymentRequired/)
-   Added **subscribers\_only**, **countries\_iso2** parameters in [poll](/constructor/poll/)
-   Added **can\_view\_stats** parameter in [pollResults](/constructor/pollResults/)
-   Added **send\_reactions** parameter in [chatBannedRights](/constructor/chatBannedRights/)
-   Added **premium\_days** parameter in [inputStorePaymentAuthCode](/constructor/inputStorePaymentAuthCode/)

#### [Changes in the file reference database map file »](/api/file-references/)

##### New traversers incoming

-   Added
    
    ```
    traverseIncomingConstructor{predicate: updateBotGuestChatQuery, params: [message, reference_messages], type: Update}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.getPersonalChannelHistory}
    ```
    

##### New traversers outgoing

-   Added
    
    ```
    traverseMethodCall{name: messages.setBotGuestChatResult, params: [result]}
    ```
    

#### [Schema](/schema/)

```
user#31774388 flags:# self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true fake:flags.26?true bot_attach_menu:flags.27?true premium:flags.28?true attach_menu_enabled:flags.29?true flags2:# bot_can_edit:flags2.1?true close_friend:flags2.2?true stories_hidden:flags2.3?true stories_unavailable:flags2.4?true contact_require_premium:flags2.10?true bot_business:flags2.11?true bot_has_main_app:flags2.13?true bot_forum_view:flags2.16?true bot_forum_can_manage_topics:flags2.17?true bot_can_manage_bots:flags2.18?true bot_guestchat:flags2.19?true id:long access_hash:flags.0?long first_name:flags.1?string last_name:flags.2?string username:flags.3?string phone:flags.4?string photo:flags.5?UserProfilePhoto status:flags.6?UserStatus bot_info_version:flags.14?int restriction_reason:flags.18?Vector<RestrictionReason> bot_inline_placeholder:flags.19?string lang_code:flags.22?string emoji_status:flags.30?EmojiStatus usernames:flags2.0?Vector<Username> stories_max_id:flags2.5?RecentStory color:flags2.8?PeerColor profile_color:flags2.9?PeerColor bot_active_users:flags2.12?int bot_verification_icon:flags2.14?long send_paid_messages_stars:flags2.15?long = User;
message#95ef6f2b flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true post:flags.14?true from_scheduled:flags.18?true legacy:flags.19?true edit_hide:flags.21?true pinned:flags.24?true noforwards:flags.26?true invert_media:flags.27?true flags2:# offline:flags2.1?true video_processing_pending:flags2.4?true paid_suggested_post_stars:flags2.8?true paid_suggested_post_ton:flags2.9?true id:int from_id:flags.8?Peer from_boosts_applied:flags.29?int from_rank:flags2.12?string peer_id:Peer saved_peer_id:flags.28?Peer fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long via_business_bot_id:flags2.0?long guestchat_via_from:flags2.19?Peer reply_to:flags.3?MessageReplyHeader date:int message:string media:flags.9?MessageMedia reply_markup:flags.6?ReplyMarkup entities:flags.7?Vector<MessageEntity> views:flags.10?int forwards:flags.10?int replies:flags.23?MessageReplies edit_date:flags.15?int post_author:flags.16?string grouped_id:flags.17?long reactions:flags.20?MessageReactions restriction_reason:flags.22?Vector<RestrictionReason> ttl_period:flags.25?int quick_reply_shortcut_id:flags.30?int effect:flags2.2?long factcheck:flags2.3?FactCheck report_delivery_until_date:flags2.5?int paid_message_stars:flags2.6?long suggested_post:flags2.7?SuggestedPost schedule_repeat_period:flags2.10?int summary_from_language:flags2.11?string = Message;
auth.sentCodePaymentRequired#f8827ebf store_product:string phone_code_hash:string support_email_address:string support_email_subject:string premium_days:int currency:string amount:long = auth.SentCode;
updateBotGuestChatQuery#cdd4093d flags:# query_id:long message:Message reference_messages:flags.0?Vector<Message> qts:int = Update;
updateAiComposeTones#8c0f91fb = Update;
topPeerCategoryBotsGuestChat#6c24f3dd = TopPeerCategory;
poll#966e2dbf id:long flags:# closed:flags.0?true public_voters:flags.1?true multiple_choice:flags.2?true quiz:flags.3?true open_answers:flags.6?true revoting_disabled:flags.7?true shuffle_answers:flags.8?true hide_results_until_close:flags.9?true creator:flags.10?true subscribers_only:flags.11?true question:TextWithEntities answers:Vector<PollAnswer> close_period:flags.4?int close_date:flags.5?int countries_iso2:flags.12?Vector<string> hash:long = Poll;
pollResults#ba7bb15e flags:# min:flags.0?true has_unread_votes:flags.6?true can_view_stats:flags.7?true results:flags.1?Vector<PollAnswerVoters> total_voters:flags.2?int recent_voters:flags.3?Vector<Peer> solution:flags.4?string solution_entities:flags.4?Vector<MessageEntity> solution_media:flags.5?MessageMedia = PollResults;
chatBannedRights#9f120418 flags:# view_messages:flags.0?true send_messages:flags.1?true send_media:flags.2?true send_stickers:flags.3?true send_gifs:flags.4?true send_games:flags.5?true send_inline:flags.6?true embed_links:flags.7?true send_polls:flags.8?true change_info:flags.10?true invite_users:flags.15?true pin_messages:flags.17?true manage_topics:flags.18?true send_photos:flags.19?true send_videos:flags.20?true send_roundvideos:flags.21?true send_audios:flags.22?true send_voices:flags.23?true send_docs:flags.24?true send_plain:flags.25?true edit_rank:flags.26?true send_reactions:flags.27?true until_date:int = ChatBannedRights;
webPageAttributeAiComposeTone#7781fe18 emoji_id:long = WebPageAttribute;
inputStorePaymentAuthCode#3fc18057 flags:# restore:flags.0?true phone_number:string phone_code_hash:string premium_days:int currency:string amount:long = InputStorePaymentPurpose;
stats.pollStats#2999beed votes_graph:StatsGraph = stats.PollStats;
inputAiComposeToneDefault#1fe9a9bf tone:string = InputAiComposeTone;
inputAiComposeToneID#0773c080 id:long access_hash:long = InputAiComposeTone;
inputAiComposeToneSlug#1fa01357 slug:string = InputAiComposeTone;
aiComposeTone#cff63ea9 flags:# creator:flags.0?true id:long access_hash:long slug:string title:string emoji_id:flags.1?long prompt:flags.4?string installs_count:flags.2?int author_id:flags.3?long example_english:flags.5?AiComposeToneExample = AiComposeTone;
aiComposeToneDefault#9bad6414 tone:string emoji_id:long title:string = AiComposeTone;
aicompose.tonesNotModified#c1f46103 = aicompose.Tones;
aicompose.tones#6c9d0efe hash:long tones:Vector<AiComposeTone> users:Vector<User> = aicompose.Tones;
aiComposeToneExample#f1d628ec from:TextWithEntities to:TextWithEntities = AiComposeToneExample;
bots.accessSettings#dd1fbf93 flags:# restricted:flags.0?true add_users:flags.1?Vector<User> = bots.AccessSettings;
---functions---
contacts.getTopPeers#973478b6 flags:# correspondents:flags.0?true bots_pm:flags.1?true bots_inline:flags.2?true phone_calls:flags.3?true forward_users:flags.4?true forward_chats:flags.5?true groups:flags.10?true channels:flags.15?true bots_app:flags.16?true bots_guestchat:flags.17?true offset:int limit:int hash:long = contacts.TopPeers;
messages.composeMessageWithAI#daecc589 flags:# proofread:flags.0?true emojify:flags.3?true text:TextWithEntities translate_to_lang:flags.1?string tone:flags.2?InputAiComposeTone = messages.ComposedMessageWithAI;
messages.setBotGuestChatResult#b8f106e3 query_id:long result:InputBotInlineResult = InputBotInlineMessageID;
messages.deleteParticipantReactions#a0b80cf8 peer:InputPeer participant:InputPeer = Bool;
messages.deleteParticipantReaction#e3b7f82c peer:InputPeer msg_id:int participant:InputPeer = Updates;
messages.getPersonalChannelHistory#55fb0996 user_id:InputUser limit:int max_id:int min_id:int hash:long = messages.Messages;
bots.getAccessSettings#213853a3 bot:InputUser = bots.AccessSettings;
bots.editAccessSettings#31813cd8 flags:# restricted:flags.0?true bot:InputUser add_users:flags.1?Vector<InputUser> = Bool;
stats.getPollStats#c27dfa68 flags:# dark:flags.0?true peer:InputPeer msg_id:int = stats.PollStats;
aicompose.createTone#4aa83913 flags:# display_author:flags.0?true emoji_id:long title:string prompt:string = AiComposeTone;
aicompose.updateTone#903bcf59 flags:# tone:InputAiComposeTone display_author:flags.0?Bool emoji_id:flags.1?long title:flags.2?string prompt:flags.3?string = AiComposeTone;
aicompose.saveTone#1782cbb1 tone:InputAiComposeTone unsave:Bool = Bool;
aicompose.deleteTone#dd39316a tone:InputAiComposeTone = Bool;
aicompose.getTone#b2e8ba03 tone:InputAiComposeTone = aicompose.Tones;
aicompose.getTones#abd59201 hash:long = aicompose.Tones;
aicompose.getToneExample#d1b4ab14 tone:InputAiComposeTone num:int = AiComposeToneExample;
```

### [Layer 224](https://core.telegram.org/schema?layer=224)

This layer introduces the following features:

-   [AI message editor »](/api/ai/#compose-messages)
-   [Diff styled text entities »](/api/entities/#diff-entities)
-   [Message views and read metrics »](/api/views/)
-   [Managed bots »](/api/bots/managed-bots/)
-   [Managed bot manager info »](/api/profile/#managed-bot-manager)
-   [Peer requests for mini apps »](/api/bots/buttons/#requesting-peers-via-mini-apps)
-   [Detailed message metrics »](/api/views/#read-metrics)
-   [Open-answer polls »](/api/poll/#open-answer-polls)
-   [Unread poll votes »](/api/poll/#unread-poll-votes)
-   [Poll answer media attachments »](/api/poll/#sending-a-poll)
-   [Replies to poll options »](/api/poll/#replying-to-poll-options)
-   [Search for poll messages »](/api/poll/#searching-for-polls)
-   [Unofficial client warning »](/api/profile/#unofficial-client-warning)

#### API constants

##### Incoming web events

Incoming web events documented [here »](/api/web-events/#event-types).

-   Added [`web_app_request_chat` »](/api/web-events/#web-app-request-chat)

##### Mini app outgoing events

Outgoing mini app events documented [here »](/api/bots/webapps/#incoming-events-client-to-mini-app).

-   Added [`requested_chat_failed` »](/api/bots/webapps/#requested-chat-failed)
-   Added [`requested_chat_sent` »](/api/bots/webapps/#requested-chat-sent)

##### Premium features

[Telegram Premium feature identifiers »](/api/premium/#telegram-premium-features).

-   Added [`ai_compose` »](/api/premium/#ai-compose)

##### Premium limits

[Telegram Premium limit identifiers »](/api/premium/#double-limits).

-   Added [`double_limits__bots_create` »](/api/premium/#double-limits-bots-create)

##### Web page type values

Web page type values from the [webPage](/constructor/webPage/) constructor.

-   Added `telegram_newbot`

#### [Schema](/schema/) changes

##### New Methods

-   Added [messages.composeMessageWithAI](/method/messages.composeMessageWithAI/) - Invokes telegram's AI Editor that can translate, transform, fixup and/or emojify your message in a number of different ways, privately powered by [Cocoon](https://cocoon.org), see [here »](/api/ai/#compose-messages) for more info!
-   Added [messages.reportReadMetrics](/method/messages.reportReadMetrics/) - Report viewport read metrics for visible messages, indicating how long each message stayed in the chat viewport, see [here »](/api/views/#read-metrics) for more info on the full flow.
-   Added [messages.reportMusicListen](/method/messages.reportMusicListen/) - Report the listening duration of a music track (audio document without the `voice` flag), see [here »](/api/views/#music-listens) for more info on the full flow.
-   Added [messages.addPollAnswer](/method/messages.addPollAnswer/) - Add an answer option to an [open-answer poll »](/api/poll/#open-answer-polls)
-   Added [messages.deletePollAnswer](/method/messages.deletePollAnswer/) - Remove an answer option from an [open-answer poll »](/api/poll/#open-answer-polls)
-   Added [messages.getUnreadPollVotes](/method/messages.getUnreadPollVotes/) - Get messages containing polls with [unread votes »](/api/poll/#unread-poll-votes)
-   Added [messages.readPollVotes](/method/messages.readPollVotes/) - Mark all [unread poll votes »](/api/poll/#unread-poll-votes) in a chat as read
-   Added [bots.checkUsername](/method/bots.checkUsername/) - Check whether a username is available and valid for use when [creating a managed bot »](/api/bots/managed-bots/#creating-a-managed-bot).
-   Added [bots.createBot](/method/bots.createBot/) - Create a [managed bot »](/api/bots/managed-bots/#creating-a-managed-bot) owned by the current user and controlled by the specified manager bot.
-   Added [bots.exportBotToken](/method/bots.exportBotToken/) - Export the bot token of a [managed bot »](/api/bots/managed-bots/#managing-a-managed-bot); can only be called by the manager bot.
-   Added [bots.requestWebViewButton](/method/bots.requestWebViewButton/) - Bots may use this method to prepare a peer request button for a [Mini App](/api/bots/webapps/), see [here »](/api/bots/buttons/#requesting-peers-via-mini-apps) for more info.
-   Added [bots.getRequestedWebViewButton](/method/bots.getRequestedWebViewButton/) - Fetch the peer request button a bot prepared for a [Mini App](/api/bots/webapps/) with [bots.requestWebViewButton](/method/bots.requestWebViewButton/), invoked when the Mini App emits a [`web_app_request_chat`](/api/web-events/#web-app-request-chat) event, see [here »](/api/bots/buttons/#requesting-peers-via-mini-apps) for more info.

##### Changed Methods

-   Added **poll\_hash** parameter in [messages.getPollResults](/method/messages.getPollResults/)
-   Added **tone** parameter in [messages.translateText](/method/messages.translateText/)
-   Added **flags**, **webapp\_req\_id** parameters, changed type of **msg\_id** from **int** to **flags.0?int** in [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/)
-   Added **tone** parameter in [messages.summarizeText](/method/messages.summarizeText/)
-   Added **music** parameter in [stories.sendStory](/method/stories.sendStory/)
-   Added **music** parameter in [stories.editStory](/method/stories.editStory/)

##### New Constructors

-   Added [messageActionPollAppendAnswer](/constructor/messageActionPollAppendAnswer/) - A new answer option was added to an [open-answer poll »](/api/poll/#open-answer-polls)
-   Added [messageActionPollDeleteAnswer](/constructor/messageActionPollDeleteAnswer/) - An answer option was removed from an [open-answer poll »](/api/poll/#open-answer-polls)
-   Added [messageActionManagedBotCreated](/constructor/messageActionManagedBotCreated/) - Service message sent by a user to a manager bot when a new [managed bot »](/api/bots/managed-bots/) is created through it, by invoking [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/) with a [requestPeerTypeCreateBot](/constructor/requestPeerTypeCreateBot/), see [here »](/api/bots/buttons/#requesting-a-managed-bot) for more info.
-   Added [inputMessagesFilterPoll](/constructor/inputMessagesFilterPoll/) - Filter for poll messages, see [searching for polls »](/api/poll/#searching-for-polls)
-   Added [updateManagedBot](/constructor/updateManagedBot/) - [Manager bots](/api/bots/managed-bots/) only: a bot managed by the currently logged in bot was created or updated.
-   Added [messageEntityDiffInsert](/constructor/messageEntityDiffInsert/) - Represents an diff addition: render it by simply underlining the specified section and coloring it in green, see [here »](/api/entities/#diff-entities) for more info on how to render diff entities.
-   Added [messageEntityDiffReplace](/constructor/messageEntityDiffReplace/) - Represents an diff replacement, render it as follows:
-   Added [messageEntityDiffDelete](/constructor/messageEntityDiffDelete/) - Represents an diff deletion: render it by simply underlining the specified section and coloring it in red, see [here »](/api/entities/#diff-entities) for more info on how to render diff entities.
-   Added [inputPollAnswer](/constructor/inputPollAnswer/) - An answer option to add to an [open-answer poll »](/api/poll/#open-answer-polls)
-   Added [requestPeerTypeCreateBot](/constructor/requestPeerTypeCreateBot/) - Used in a [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/) by a [manager bot](/api/bots/managed-bots/) to ask a user to create a new [managed bot »](/api/bots/managed-bots/), see [here »](/api/bots/buttons/#requesting-a-managed-bot) for more info.
-   Added [inputMessageReadMetric](/constructor/inputMessageReadMetric/) - Read metric for a single message exposure, describing how long the message was visible in the chat viewport.
-   Added [bots.exportedBotToken](/constructor/bots.exportedBotToken/) - The bot token of a [managed bot »](/api/bots/managed-bots/#managing-a-managed-bot), exported by the manager bot.
-   Added [bots.requestedButton](/constructor/bots.requestedButton/) - Contains the request ID a bot should pass to a [Mini App](/api/bots/webapps/) after preparing a peer request button with [bots.requestWebViewButton](/method/bots.requestWebViewButton/), see [here »](/api/bots/buttons/#requesting-peers-via-mini-apps) for more info.
-   Added [messages.composedMessageWithAI](/constructor/messages.composedMessageWithAI/) - Represents a message modified by AI.

##### Changed Constructors

-   Added **live\_photo**, **video** parameters in [inputMediaUploadedPhoto](/constructor/inputMediaUploadedPhoto/)
-   Added **live\_photo**, **video** parameters in [inputMediaPhoto](/constructor/inputMediaPhoto/)
-   Added **attached\_media**, **solution\_media** parameters, changed type of **correct\_answers** from **flags.0?Vector&lt;bytes>** to **flags.0?Vector&lt;int>** in [inputMediaPoll](/constructor/inputMediaPoll/)
-   Added **bot\_can\_manage\_bots** parameter in [user](/constructor/user/)
-   Added **live\_photo**, **video** parameters in [messageMediaPhoto](/constructor/messageMediaPhoto/)
-   Added **flags**, **attached\_media** parameters in [messageMediaPoll](/constructor/messageMediaPoll/)
-   Added **unread\_poll\_votes\_count** parameter in [dialog](/constructor/dialog/)
-   Added **unofficial\_security\_risk**, **bot\_manager\_id** parameters in [userFull](/constructor/userFull/)
-   Added **peer**, **msg\_id**, **top\_msg\_id** parameters in [updateMessagePoll](/constructor/updateMessagePoll/)
-   Added **positions** parameter in [updateMessagePollVote](/constructor/updateMessagePollVote/)
-   Added **flags**, **media**, **added\_by**, **date** parameters in [pollAnswer](/constructor/pollAnswer/)
-   Added **open\_answers**, **revoting\_disabled**, **shuffle\_answers**, **hide\_results\_until\_close**, **creator**, **hash** parameters in [poll](/constructor/poll/)
-   Added **recent\_voters** parameter, changed type of **voters** from **int** to **flags.2?int** in [pollAnswerVoters](/constructor/pollAnswerVoters/)
-   Added **has\_unread\_votes**, **solution\_media** parameters in [pollResults](/constructor/pollResults/)
-   Added **is\_app**, **verified\_app\_name** parameters in [urlAuthResultRequest](/constructor/urlAuthResultRequest/)
-   Added **poll\_option** parameter in [messageReplyHeader](/constructor/messageReplyHeader/)
-   Added **unread\_poll\_votes\_count** parameter in [forumTopic](/constructor/forumTopic/)
-   Added **music** parameter in [storyItem](/constructor/storyItem/)
-   Added **poll\_option** parameter in [inputReplyToMessage](/constructor/inputReplyToMessage/)
-   Added **poll\_votes\_notify\_from** parameter in [reactionsNotifySettings](/constructor/reactionsNotifySettings/)

#### [Changes in the file reference database map file »](/api/file-references/)

##### New sources

-   Added [updateMessagePoll](/constructor/updateMessagePoll/) -
    
    ```
    (unless messages.getScheduledMessages, updateNewScheduledMessage) fileSourceMessage{peer: extractPeerIdFromPeerAndStore(updateMessagePoll.peer?abort_if_empty), id: updateMessagePoll.msg_id?abort_if_empty, quick_reply_shortcut_id: false}
    ```
    

##### New traversers incoming

-   Added
    
    ```
    traverseIncomingConstructor{predicate: messageActionPollAppendAnswer, params: [answer], type: MessageAction}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messageActionPollDeleteAnswer, params: [answer], type: MessageAction}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messageMediaPoll, params: [poll, results, attached_media], type: MessageMedia}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: poll, params: [answers], type: Poll}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: pollAnswer, params: [media], type: PollAnswer}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: pollResults, params: [solution_media], type: PollResults}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: updateMessagePoll, params: [poll, results], push_sources: [fileSourceMessage (unless messages.getScheduledMessages, updateNewScheduledMessage)], type: Update}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.getUnreadPollVotes}
    ```
    

##### Changed traversers incoming

-   Changed messageMediaPhoto traverseIncomingConstructor from
    
    ```
    traverseIncomingConstructor{predicate: messageMediaPhoto, params: [photo], type: MessageMedia}
    ```
    
    to
    
    ```
    traverseIncomingConstructor{predicate: messageMediaPhoto, params: [photo, video], type: MessageMedia}
    ```
    
-   Changed storyItem traverseIncomingConstructor from
    
    ```
    traverseIncomingConstructor{predicate: storyItem, params: [media], push_sources: [fileSourceStory (needs stories.getPinnedStories), fileSourceStory (needs stories.getStoriesArchive), fileSourceStory (needs stories.getStoriesByID), fileSourceStory (needs stories.getAlbumStories), fileSourceStory (needs peerStories), fileSourceStory], type: StoryItem}
    ```
    
    to
    
    ```
    traverseIncomingConstructor{predicate: storyItem, params: [media, music], push_sources: [fileSourceStory (needs stories.getPinnedStories), fileSourceStory (needs stories.getStoriesArchive), fileSourceStory (needs stories.getStoriesByID), fileSourceStory (needs stories.getAlbumStories), fileSourceStory (needs peerStories), fileSourceStory], type: StoryItem}
    ```
    

##### New traversers outgoing

-   Added
    
    ```
    traverseMethodCall{name: messages.addPollAnswer, params: [answer]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: messages.reportMusicListen, params: [id]}
    ```
    
-   Added
    
    ```
    traverseOutgoingConstructor{predicate: inputMediaPoll, params: [attached_media, solution_media], type: InputMedia}
    ```
    
-   Added
    
    ```
    traverseOutgoingConstructor{predicate: inputPollAnswer, params: [media], type: PollAnswer}
    ```
    

##### Changed traversers outgoing

-   Changed stories.editStory traverseMethodCall from
    
    ```
    traverseMethodCall{name: stories.editStory, params: [media]}
    ```
    
    to
    
    ```
    traverseMethodCall{name: stories.editStory, params: [media, music]}
    ```
    
-   Changed stories.sendStory traverseMethodCall from
    
    ```
    traverseMethodCall{name: stories.sendStory, params: [media]}
    ```
    
    to
    
    ```
    traverseMethodCall{name: stories.sendStory, params: [media, music]}
    ```
    
-   Changed inputMediaPhoto traverseOutgoingConstructor from
    
    ```
    traverseOutgoingConstructor{predicate: inputMediaPhoto, params: [id], type: InputMedia}
    ```
    
    to
    
    ```
    traverseOutgoingConstructor{predicate: inputMediaPhoto, params: [id, video], type: InputMedia}
    ```
    
-   Changed inputMediaUploadedPhoto traverseOutgoingConstructor from
    
    ```
    traverseOutgoingConstructor{predicate: inputMediaUploadedPhoto, params: [file, stickers], type: InputMedia}
    ```
    
    to
    
    ```
    traverseOutgoingConstructor{predicate: inputMediaUploadedPhoto, params: [file, stickers, video], type: InputMedia}
    ```
    

#### [Schema](/schema/)

```
inputMediaUploadedPhoto#7d8375da flags:# spoiler:flags.2?true live_photo:flags.3?true file:InputFile stickers:flags.0?Vector<InputDocument> ttl_seconds:flags.1?int video:flags.3?InputDocument = InputMedia;
inputMediaPhoto#e3af4434 flags:# spoiler:flags.1?true live_photo:flags.2?true id:InputPhoto ttl_seconds:flags.0?int video:flags.2?InputDocument = InputMedia;
inputMediaPoll#883a4108 flags:# poll:Poll correct_answers:flags.0?Vector<int> attached_media:flags.3?InputMedia solution:flags.1?string solution_entities:flags.1?Vector<MessageEntity> solution_media:flags.2?InputMedia = InputMedia;
user#31774388 flags:# self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true fake:flags.26?true bot_attach_menu:flags.27?true premium:flags.28?true attach_menu_enabled:flags.29?true flags2:# bot_can_edit:flags2.1?true close_friend:flags2.2?true stories_hidden:flags2.3?true stories_unavailable:flags2.4?true contact_require_premium:flags2.10?true bot_business:flags2.11?true bot_has_main_app:flags2.13?true bot_forum_view:flags2.16?true bot_forum_can_manage_topics:flags2.17?true bot_can_manage_bots:flags2.18?true id:long access_hash:flags.0?long first_name:flags.1?string last_name:flags.2?string username:flags.3?string phone:flags.4?string photo:flags.5?UserProfilePhoto status:flags.6?UserStatus bot_info_version:flags.14?int restriction_reason:flags.18?Vector<RestrictionReason> bot_inline_placeholder:flags.19?string lang_code:flags.22?string emoji_status:flags.30?EmojiStatus usernames:flags2.0?Vector<Username> stories_max_id:flags2.5?RecentStory color:flags2.8?PeerColor profile_color:flags2.9?PeerColor bot_active_users:flags2.12?int bot_verification_icon:flags2.14?long send_paid_messages_stars:flags2.15?long = User;
messageMediaPhoto#e216eb63 flags:# spoiler:flags.3?true live_photo:flags.4?true photo:flags.0?Photo ttl_seconds:flags.2?int video:flags.4?Document = MessageMedia;
messageMediaPoll#773f4e66 flags:# poll:Poll results:PollResults attached_media:flags.0?MessageMedia = MessageMedia;
messageActionPollAppendAnswer#9da1cd6c answer:PollAnswer = MessageAction;
messageActionPollDeleteAnswer#399674dc answer:PollAnswer = MessageAction;
messageActionManagedBotCreated#16605e3e bot_id:long = MessageAction;
dialog#fc89f7f3 flags:# pinned:flags.2?true unread_mark:flags.3?true view_forum_as_messages:flags.6?true peer:Peer top_message:int read_inbox_max_id:int read_outbox_max_id:int unread_count:int unread_mentions_count:int unread_reactions_count:int unread_poll_votes_count:int notify_settings:PeerNotifySettings pts:flags.0?int draft:flags.1?DraftMessage folder_id:flags.4?int ttl_period:flags.5?int = Dialog;
userFull#06cbe645 flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true contact_require_premium:flags.29?true read_dates_private:flags.30?true flags2:# sponsored_enabled:flags2.7?true can_view_revenue:flags2.9?true bot_can_manage_emoji_status:flags2.10?true display_gifts_button:flags2.16?true noforwards_my_enabled:flags2.23?true noforwards_peer_enabled:flags2.24?true unofficial_security_risk:flags2.26?true id:long about:flags.1?string settings:PeerSettings personal_photo:flags.21?Photo profile_photo:flags.2?Photo fallback_photo:flags.22?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int ttl_period:flags.14?int theme:flags.15?ChatTheme private_forward_name:flags.16?string bot_group_admin_rights:flags.17?ChatAdminRights bot_broadcast_admin_rights:flags.18?ChatAdminRights wallpaper:flags.24?WallPaper stories:flags.25?PeerStories business_work_hours:flags2.0?BusinessWorkHours business_location:flags2.1?BusinessLocation business_greeting_message:flags2.2?BusinessGreetingMessage business_away_message:flags2.3?BusinessAwayMessage business_intro:flags2.4?BusinessIntro birthday:flags2.5?Birthday personal_channel_id:flags2.6?long personal_channel_message:flags2.6?int stargifts_count:flags2.8?int starref_program:flags2.11?StarRefProgram bot_verification:flags2.12?BotVerification send_paid_messages_stars:flags2.14?long disallowed_gifts:flags2.15?DisallowedGiftsSettings stars_rating:flags2.17?StarsRating stars_my_pending_rating:flags2.18?StarsRating stars_my_pending_rating_date:flags2.18?int main_tab:flags2.20?ProfileTab saved_music:flags2.21?Document note:flags2.22?TextWithEntities bot_manager_id:flags2.25?long = UserFull;
inputMessagesFilterPoll#fa2bc90a = MessagesFilter;
updateMessagePoll#d64c522b flags:# peer:flags.1?Peer msg_id:flags.1?int top_msg_id:flags.2?int poll_id:long poll:flags.0?Poll results:PollResults = Update;
updateMessagePollVote#7699f014 poll_id:long peer:Peer options:Vector<bytes> positions:Vector<int> qts:int = Update;
updateManagedBot#4880ed9a user_id:long bot_id:long qts:int = Update;
messageEntityDiffInsert#71777116 offset:int length:int = MessageEntity;
messageEntityDiffReplace#c6c1e5a7 offset:int length:int old_text:string = MessageEntity;
messageEntityDiffDelete#0652c1c5 offset:int length:int = MessageEntity;
pollAnswer#4b7d786a flags:# text:TextWithEntities option:bytes media:flags.0?MessageMedia added_by:flags.1?Peer date:flags.1?int = PollAnswer;
inputPollAnswer#199fed96 flags:# text:TextWithEntities media:flags.0?InputMedia = PollAnswer;
poll#b8425be9 id:long flags:# closed:flags.0?true public_voters:flags.1?true multiple_choice:flags.2?true quiz:flags.3?true open_answers:flags.6?true revoting_disabled:flags.7?true shuffle_answers:flags.8?true hide_results_until_close:flags.9?true creator:flags.10?true question:TextWithEntities answers:Vector<PollAnswer> close_period:flags.4?int close_date:flags.5?int hash:long = Poll;
pollAnswerVoters#3645230a flags:# chosen:flags.0?true correct:flags.1?true option:bytes voters:flags.2?int recent_voters:flags.2?Vector<Peer> = PollAnswerVoters;
pollResults#ba7bb15e flags:# min:flags.0?true has_unread_votes:flags.6?true results:flags.1?Vector<PollAnswerVoters> total_voters:flags.2?int recent_voters:flags.3?Vector<Peer> solution:flags.4?string solution_entities:flags.4?Vector<MessageEntity> solution_media:flags.5?MessageMedia = PollResults;
urlAuthResultRequest#3cd623ec flags:# request_write_access:flags.0?true request_phone_number:flags.1?true match_codes_first:flags.5?true is_app:flags.6?true bot:User domain:string browser:flags.2?string platform:flags.2?string ip:flags.2?string region:flags.2?string match_codes:flags.3?Vector<string> user_id_hint:flags.4?long verified_app_name:flags.7?string = UrlAuthResult;
messageReplyHeader#1b97dd66 flags:# reply_to_scheduled:flags.2?true forum_topic:flags.3?true quote:flags.9?true reply_to_msg_id:flags.4?int reply_to_peer_id:flags.0?Peer reply_from:flags.5?MessageFwdHeader reply_media:flags.8?MessageMedia reply_to_top_id:flags.1?int quote_text:flags.6?string quote_entities:flags.7?Vector<MessageEntity> quote_offset:flags.10?int todo_item_id:flags.11?int poll_option:flags.12?bytes = MessageReplyHeader;
forumTopic#fcdad815 flags:# my:flags.1?true closed:flags.2?true pinned:flags.3?true short:flags.5?true hidden:flags.6?true title_missing:flags.7?true id:int date:int peer:Peer title:string icon_color:int icon_emoji_id:flags.0?long top_message:int read_inbox_max_id:int read_outbox_max_id:int unread_count:int unread_mentions_count:int unread_reactions_count:int unread_poll_votes_count:int from_id:Peer notify_settings:PeerNotifySettings draft:flags.4?DraftMessage = ForumTopic;
requestPeerTypeCreateBot#3e81e078 flags:# bot_managed:flags.0?true suggested_name:flags.1?string suggested_username:flags.2?string = RequestPeerType;
storyItem#16a4b93c flags:# pinned:flags.5?true public:flags.7?true close_friends:flags.8?true min:flags.9?true noforwards:flags.10?true edited:flags.11?true contacts:flags.12?true selected_contacts:flags.13?true out:flags.16?true id:int date:int from_id:flags.18?Peer fwd_from:flags.17?StoryFwdHeader expire_date:int caption:flags.0?string entities:flags.1?Vector<MessageEntity> media:MessageMedia media_areas:flags.14?Vector<MediaArea> privacy:flags.2?Vector<PrivacyRule> views:flags.3?StoryViews sent_reaction:flags.15?Reaction albums:flags.19?Vector<int> music:flags.20?Document = StoryItem;
inputReplyToMessage#3bd4b7c2 flags:# reply_to_msg_id:int top_msg_id:flags.0?int reply_to_peer_id:flags.1?InputPeer quote_text:flags.2?string quote_entities:flags.3?Vector<MessageEntity> quote_offset:flags.4?int monoforum_peer_id:flags.5?InputPeer todo_item_id:flags.6?int poll_option:flags.7?bytes = InputReplyTo;
reactionsNotifySettings#71e4ea58 flags:# messages_notify_from:flags.0?ReactionNotificationsFrom stories_notify_from:flags.1?ReactionNotificationsFrom poll_votes_notify_from:flags.2?ReactionNotificationsFrom sound:NotificationSound show_previews:Bool = ReactionsNotifySettings;
inputMessageReadMetric#402b4495 msg_id:int view_id:long time_in_view_ms:int active_time_in_view_ms:int height_to_viewport_ratio_permille:int seen_range_ratio_permille:int = InputMessageReadMetric;
bots.exportedBotToken#3c60b621 token:string = bots.ExportedBotToken;
bots.requestedButton#f13bbcd7 webapp_req_id:string = bots.RequestedButton;
messages.composedMessageWithAI#90d7adfa flags:# result_text:TextWithEntities diff_text:flags.0?TextWithEntities = messages.ComposedMessageWithAI;
---functions---
messages.getPollResults#eda3e33b peer:InputPeer msg_id:int poll_hash:long = Updates;
messages.translateText#a5eec345 flags:# peer:flags.0?InputPeer id:flags.0?Vector<int> text:flags.1?Vector<TextWithEntities> to_lang:string tone:flags.2?string = messages.TranslatedText;
messages.sendBotRequestedPeer#6c5cf2a7 flags:# peer:InputPeer msg_id:flags.0?int webapp_req_id:flags.1?string button_id:int requested_peers:Vector<InputPeer> = Updates;
messages.summarizeText#abbbd346 flags:# peer:InputPeer id:int to_lang:flags.0?string tone:flags.2?string = TextWithEntities;
messages.composeMessageWithAI#fd426afe flags:# proofread:flags.0?true emojify:flags.3?true text:TextWithEntities translate_to_lang:flags.1?string change_tone:flags.2?string = messages.ComposedMessageWithAI;
messages.reportReadMetrics#4067c5e6 peer:InputPeer metrics:Vector<InputMessageReadMetric> = Bool;
messages.reportMusicListen#ddbcd819 id:InputDocument listened_duration:int = Bool;
messages.addPollAnswer#19bc4b6d peer:InputPeer msg_id:int answer:PollAnswer = Updates;
messages.deletePollAnswer#ac8505a5 peer:InputPeer msg_id:int option:bytes = Updates;
messages.getUnreadPollVotes#43286cf2 flags:# peer:InputPeer top_msg_id:flags.0?int offset_id:int add_offset:int limit:int max_id:int min_id:int = messages.Messages;
messages.readPollVotes#1720b4d8 flags:# peer:InputPeer top_msg_id:flags.0?int = messages.AffectedHistory;
bots.checkUsername#87f2219b username:string = Bool;
bots.createBot#e5b17f2b flags:# via_deeplink:flags.0?true name:string username:string manager_id:InputUser = User;
bots.exportBotToken#bd0d99eb bot:InputUser revoke:Bool = bots.ExportedBotToken;
bots.requestWebViewButton#31a2a35e user_id:InputUser button:KeyboardButton = bots.RequestedButton;
bots.getRequestedWebViewButton#bf25b7f3 bot:InputUser webapp_req_id:string = KeyboardButton;
stories.sendStory#8f9e6898 flags:# pinned:flags.2?true noforwards:flags.4?true fwd_modified:flags.7?true peer:InputPeer media:InputMedia media_areas:flags.5?Vector<MediaArea> caption:flags.0?string entities:flags.1?Vector<MessageEntity> privacy_rules:Vector<InputPrivacyRule> random_id:long period:flags.3?int fwd_from_id:flags.6?InputPeer fwd_from_story:flags.6?int albums:flags.8?Vector<int> music:flags.9?InputDocument = Updates;
stories.editStory#2c63a72b flags:# peer:InputPeer id:int media:flags.0?InputMedia media_areas:flags.3?Vector<MediaArea> caption:flags.1?string entities:flags.1?Vector<MessageEntity> privacy_rules:flags.2?Vector<InputPrivacyRule> music:flags.4?InputDocument = Updates;
```

### [Layer 223](https://core.telegram.org/schema?layer=223)

This layer introduces:

-   [Login with Telegram via OAuth »](/api/url-authorization/#oauth-authorization)
-   [Content protection for private chats »](/api/content-protection/#for-users)
-   [Group member tags for all users, not just admins »](/api/rank/)
-   [Date styled text entities »](/api/entities/#date-entities)
-   [A new flow to obtain info about the admin that will become the owner of a basic group/supergroup/channel if the original owner leaves »](/api/channel/#leaving-groups-channels)
-   [Ownership transfer for basic groups (along with supergroups and channels) »](/api/channel/#transferring-ownership-of-a-group-channel)
-   [A new filter to return only resale gifts that can be bought using stars](/method/payments.getResaleStarGifts/)

#### API constants

##### Incoming web events

Incoming web events documented [here »](/api/web-events/#event-types).

-   Added [`oauth_request` »](/api/web-events/#oauth-request)

##### Mini app outgoing events

Outgoing mini app events documented [here »](/api/bots/webapps/#incoming-events-client-to-mini-app).

-   Added [`oauth_supported` »](/api/bots/webapps/#oauth-supported)
-   Added [`oauth_result_confirmed` »](/api/bots/webapps/#oauth-result-confirmed)
-   Added [`oauth_result_failed` »](/api/bots/webapps/#oauth-result-failed)

##### Premium features

[Telegram Premium feature identifiers »](/api/premium/#telegram-premium-features).

-   Added [`pm_noforwards` »](/api/premium/#pm-noforwards)

#### [Schema](/schema/) changes

##### New Methods

-   Added [messages.editChatCreator](/method/messages.editChatCreator/) - Transfer the ownership of a basic group, supergroup or channel to another user, see [here »](/api/channel/#transferring-ownership-of-a-group-channel) for the full flow.
-   Added [messages.getFutureChatCreatorAfterLeave](/method/messages.getFutureChatCreatorAfterLeave/) - Group/channel owners only: returns the ID of the user that will become the new owner of the group if we decide to leave the group, see [here »](/api/channel/#leaving-groups-channels) for more info on the full flow.
-   Added [messages.editChatParticipantRank](/method/messages.editChatParticipantRank/) - Edit a group participant's [tag »](/api/rank/).
-   Added [messages.declineUrlAuth](/method/messages.declineUrlAuth/) - Decline an incoming [OAuth authorization request »](/api/url-authorization/#oauth-authorization), notifying the server that the user refused the login request.
-   Added [messages.checkUrlAuthMatchCode](/method/messages.checkUrlAuthMatchCode/) - Validate the match code selected by the user against the code shown on the login page, as part of the [OAuth authorization flow »](/api/url-authorization/#oauth-authorization).

##### Changed Methods

-   Added **flags** parameter, changed type of **rank** from **string** to **flags.0?string** in [channels.editAdmin](/method/channels.editAdmin/)
-   Added **in\_app\_origin** parameter in [messages.requestUrlAuth](/method/messages.requestUrlAuth/)
-   Added **share\_phone\_number**, **match\_code** parameters in [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/)
-   Added **flags**, **request\_msg\_id** parameters in [messages.toggleNoForwards](/method/messages.toggleNoForwards/)
-   Added **stars\_only** parameter in [payments.getResaleStarGifts](/method/payments.getResaleStarGifts/)

##### Deleted Methods

-   Removed channels.editCreator
-   Removed channels.getFutureCreatorAfterLeave

##### New Constructors

-   Added [messageEntityFormattedDate](/constructor/messageEntityFormattedDate/) - Represents a specific point in time, rendered as specified [here »](/api/entities/#date-entities)
-   Added [updateChatParticipantRank](/constructor/updateChatParticipantRank/) - The [tag »](/api/rank/) of a participant of a [basic group »](/api/channel/#basic-groups) has changed.
-   Added [messageActionNoForwardsToggle](/constructor/messageActionNoForwardsToggle/) - Emitted only in private chats when enabling or disabling [content protection »](/api/content-protection/#for-users).
-   Added [messageActionNoForwardsRequest](/constructor/messageActionNoForwardsRequest/) - Emitted only in private chats if the other side requested to disable [content protection »](/api/content-protection/#for-users).
-   Added [channelAdminLogEventActionParticipantEditRank](/constructor/channelAdminLogEventActionParticipantEditRank/) - A participant's [tag »](/api/rank/) was changed.

##### Changed Constructors

-   Added **flags**, **rank** parameters in [chatParticipant](/constructor/chatParticipant/)
-   Added **from\_rank** parameter in [message](/constructor/message/)
-   Added **noforwards\_my\_enabled**, **noforwards\_peer\_enabled** parameters in [userFull](/constructor/userFull/)
-   Added **rank** parameter in [channelParticipant](/constructor/channelParticipant/)
-   Added **rank** parameter in [channelParticipantSelf](/constructor/channelParticipantSelf/)
-   Added **flags**, **rank** parameters in [chatParticipantCreator](/constructor/chatParticipantCreator/)
-   Added **flags**, **rank** parameters in [chatParticipantAdmin](/constructor/chatParticipantAdmin/)
-   Added **rank** parameter in [channelParticipantBanned](/constructor/channelParticipantBanned/)
-   Added **edit\_rank** parameter in [channelAdminLogEventsFilter](/constructor/channelAdminLogEventsFilter/)
-   Added **manage\_ranks** parameter in [chatAdminRights](/constructor/chatAdminRights/)
-   Added **edit\_rank** parameter in [chatBannedRights](/constructor/chatBannedRights/)
-   Added **match\_codes\_first**, **match\_codes**, **user\_id\_hint** parameters in [urlAuthResultRequest](/constructor/urlAuthResultRequest/)

#### PUSH notification changes

##### New PUSH notifications

-   Added [OAUTH\_REQUEST](/api/push-updates/#oauth-request) - `Login request for {1} from {2}`

#### [Schema](/schema/)

```
chatParticipant#38e79fde flags:# user_id:long inviter_id:long date:int rank:flags.0?string = ChatParticipant;
message#3ae56482 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true post:flags.14?true from_scheduled:flags.18?true legacy:flags.19?true edit_hide:flags.21?true pinned:flags.24?true noforwards:flags.26?true invert_media:flags.27?true flags2:# offline:flags2.1?true video_processing_pending:flags2.4?true paid_suggested_post_stars:flags2.8?true paid_suggested_post_ton:flags2.9?true id:int from_id:flags.8?Peer from_boosts_applied:flags.29?int from_rank:flags2.12?string peer_id:Peer saved_peer_id:flags.28?Peer fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long via_business_bot_id:flags2.0?long reply_to:flags.3?MessageReplyHeader date:int message:string media:flags.9?MessageMedia reply_markup:flags.6?ReplyMarkup entities:flags.7?Vector<MessageEntity> views:flags.10?int forwards:flags.10?int replies:flags.23?MessageReplies edit_date:flags.15?int post_author:flags.16?string grouped_id:flags.17?long reactions:flags.20?MessageReactions restriction_reason:flags.22?Vector<RestrictionReason> ttl_period:flags.25?int quick_reply_shortcut_id:flags.30?int effect:flags2.2?long factcheck:flags2.3?FactCheck report_delivery_until_date:flags2.5?int paid_message_stars:flags2.6?long suggested_post:flags2.7?SuggestedPost schedule_repeat_period:flags2.10?int summary_from_language:flags2.11?string = Message;
userFull#a02bc13e flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true contact_require_premium:flags.29?true read_dates_private:flags.30?true flags2:# sponsored_enabled:flags2.7?true can_view_revenue:flags2.9?true bot_can_manage_emoji_status:flags2.10?true display_gifts_button:flags2.16?true noforwards_my_enabled:flags2.23?true noforwards_peer_enabled:flags2.24?true id:long about:flags.1?string settings:PeerSettings personal_photo:flags.21?Photo profile_photo:flags.2?Photo fallback_photo:flags.22?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int ttl_period:flags.14?int theme:flags.15?ChatTheme private_forward_name:flags.16?string bot_group_admin_rights:flags.17?ChatAdminRights bot_broadcast_admin_rights:flags.18?ChatAdminRights wallpaper:flags.24?WallPaper stories:flags.25?PeerStories business_work_hours:flags2.0?BusinessWorkHours business_location:flags2.1?BusinessLocation business_greeting_message:flags2.2?BusinessGreetingMessage business_away_message:flags2.3?BusinessAwayMessage business_intro:flags2.4?BusinessIntro birthday:flags2.5?Birthday personal_channel_id:flags2.6?long personal_channel_message:flags2.6?int stargifts_count:flags2.8?int starref_program:flags2.11?StarRefProgram bot_verification:flags2.12?BotVerification send_paid_messages_stars:flags2.14?long disallowed_gifts:flags2.15?DisallowedGiftsSettings stars_rating:flags2.17?StarsRating stars_my_pending_rating:flags2.18?StarsRating stars_my_pending_rating_date:flags2.18?int main_tab:flags2.20?ProfileTab saved_music:flags2.21?Document note:flags2.22?TextWithEntities = UserFull;
channelParticipant#1bd54456 flags:# user_id:long date:int subscription_until_date:flags.0?int rank:flags.2?string = ChannelParticipant;
channelParticipantSelf#a9478a1a flags:# via_request:flags.0?true user_id:long inviter_id:long date:int subscription_until_date:flags.1?int rank:flags.2?string = ChannelParticipant;
chatParticipantCreator#e1f867b8 flags:# user_id:long rank:flags.0?string = ChatParticipant;
chatParticipantAdmin#0360d5d2 flags:# user_id:long inviter_id:long date:int rank:flags.0?string = ChatParticipant;
channelParticipantBanned#d5f0ad91 flags:# left:flags.0?true peer:Peer kicked_by:long date:int banned_rights:ChatBannedRights rank:flags.2?string = ChannelParticipant;
channelAdminLogEventsFilter#ea107ae4 flags:# join:flags.0?true leave:flags.1?true invite:flags.2?true ban:flags.3?true unban:flags.4?true kick:flags.5?true unkick:flags.6?true promote:flags.7?true demote:flags.8?true info:flags.9?true settings:flags.10?true pinned:flags.11?true edit:flags.12?true delete:flags.13?true group_call:flags.14?true invites:flags.15?true send:flags.16?true forums:flags.17?true sub_extend:flags.18?true edit_rank:flags.19?true = ChannelAdminLogEventsFilter;
chatAdminRights#5fb224d5 flags:# change_info:flags.0?true post_messages:flags.1?true edit_messages:flags.2?true delete_messages:flags.3?true ban_users:flags.4?true invite_users:flags.5?true pin_messages:flags.7?true add_admins:flags.9?true anonymous:flags.10?true manage_call:flags.11?true other:flags.12?true manage_topics:flags.13?true post_stories:flags.14?true edit_stories:flags.15?true delete_stories:flags.16?true manage_direct_messages:flags.17?true manage_ranks:flags.18?true = ChatAdminRights;
chatBannedRights#9f120418 flags:# view_messages:flags.0?true send_messages:flags.1?true send_media:flags.2?true send_stickers:flags.3?true send_gifs:flags.4?true send_games:flags.5?true send_inline:flags.6?true embed_links:flags.7?true send_polls:flags.8?true change_info:flags.10?true invite_users:flags.15?true pin_messages:flags.17?true manage_topics:flags.18?true send_photos:flags.19?true send_videos:flags.20?true send_roundvideos:flags.21?true send_audios:flags.22?true send_voices:flags.23?true send_docs:flags.24?true send_plain:flags.25?true edit_rank:flags.26?true until_date:int = ChatBannedRights;
urlAuthResultRequest#f8f8eb1e flags:# request_write_access:flags.0?true request_phone_number:flags.1?true match_codes_first:flags.5?true bot:User domain:string browser:flags.2?string platform:flags.2?string ip:flags.2?string region:flags.2?string match_codes:flags.3?Vector<string> user_id_hint:flags.4?long = UrlAuthResult;
messageEntityFormattedDate#904ac7c7 flags:# relative:flags.0?true short_time:flags.1?true long_time:flags.2?true short_date:flags.3?true long_date:flags.4?true day_of_week:flags.5?true offset:int length:int date:int = MessageEntity;
updateChatParticipantRank#bd8367b9 chat_id:long user_id:long rank:string version:int = Update;
messageActionNoForwardsToggle#bf7d6572 prev_value:Bool new_value:Bool = MessageAction;
messageActionNoForwardsRequest#3e2793ba flags:# expired:flags.0?true prev_value:Bool new_value:Bool = MessageAction;
channelAdminLogEventActionParticipantEditRank#5806b4ec user_id:long prev_rank:string new_rank:string = ChannelAdminLogEventAction;
---functions---
channels.editAdmin#9a98ad68 flags:# channel:InputChannel user_id:InputUser admin_rights:ChatAdminRights rank:flags.0?string = Updates;
messages.requestUrlAuth#894cc99c flags:# peer:flags.1?InputPeer msg_id:flags.1?int button_id:flags.1?int url:flags.2?string in_app_origin:flags.3?string = UrlAuthResult;
messages.acceptUrlAuth#67a3f0de flags:# write_allowed:flags.0?true share_phone_number:flags.3?true peer:flags.1?InputPeer msg_id:flags.1?int button_id:flags.1?int url:flags.2?string match_code:flags.4?string = UrlAuthResult;
messages.toggleNoForwards#b2081a35 flags:# peer:InputPeer enabled:Bool request_msg_id:flags.0?int = Updates;
payments.getResaleStarGifts#7a5fa236 flags:# sort_by_price:flags.1?true sort_by_num:flags.2?true for_craft:flags.4?true stars_only:flags.5?true attributes_hash:flags.0?long gift_id:long attributes:flags.3?Vector<StarGiftAttributeId> offset:string limit:int = payments.ResaleStarGifts;
messages.editChatCreator#f743b857 peer:InputPeer user_id:InputUser password:InputCheckPasswordSRP = Updates;
messages.getFutureChatCreatorAfterLeave#3b7d0ea6 peer:InputPeer = User;
messages.editChatParticipantRank#a00f32b0 peer:InputPeer participant:InputPeer rank:string = Updates;
messages.declineUrlAuth#35436bbc url:string = Bool;
messages.checkUrlAuthMatchCode#c9a47b0b url:string match_code:string = Bool;
```

### [Layer 222](https://core.telegram.org/schema?layer=222)

This layer introduces the following features:

-   [Custom keyboard button backgrounds and custom emoji button labels »](/api/bots/buttons/#button-styles)
-   [AI message summarizer »](/api/ai/#summarize-messages)
-   [Gift crafting »](/api/gifts/#crafting-collectible-gifts)
-   [A new flow to obtain info about the admin that will become the owner of a supergroup/channel if the original owner leaves »](/api/channel/#leaving-groups-channels)

#### API constants

##### Post story content types

Story content types accepted by [post story deep links »](/api/links/#post-story-links).

-   Added `photo`
-   Added `video`
-   Added `live`

#### [Schema](/schema/) changes

##### New Methods

-   Added [messages.getEmojiGameInfo](/method/messages.getEmojiGameInfo/) - Fetch dice game information.
-   Added [messages.summarizeText](/method/messages.summarizeText/) - Summarize the contents of a message with AI, see [here »](/api/ai/#summarize-messages) for more info.
-   Added [payments.getCraftStarGifts](/method/payments.getCraftStarGifts/) - Obtain owned [collectible gifts »](/api/gifts/#collectible-gifts) of a specific type that can be used for [crafting »](/api/gifts/#crafting-collectible-gifts).
-   Added [payments.craftStarGift](/method/payments.craftStarGift/) - Craft a new [collectible gift »](/api/gifts/#collectible-gifts) by combining 1 to 4 owned collectible gifts of the same base gift type.
-   Added [channels.getFutureCreatorAfterLeave](/method/channels.getFutureCreatorAfterLeave/)

##### Changed Methods

-   Added **for\_craft** parameter in [payments.getResaleStarGifts](/method/payments.getResaleStarGifts/)

##### New Constructors

-   Added [messages.emojiGameOutcome](/constructor/messages.emojiGameOutcome/) - Dice game outcome.
-   Added [inputMediaStakeDice](/constructor/inputMediaStakeDice/) - Dice game media.
-   Added [messages.emojiGameUnavailable](/constructor/messages.emojiGameUnavailable/) - Dice game information.
-   Added [messages.emojiGameDiceInfo](/constructor/messages.emojiGameDiceInfo/) - Dice game information.
-   Added [updateEmojiGameInfo](/constructor/updateEmojiGameInfo/) - Dice game update.
-   Added [inputPasskeyCredentialFirebasePNV](/constructor/inputPasskeyCredentialFirebasePNV/) - Alternative [passkey](/api/passkeys/) credential that proves ownership of the account's phone number through a Firebase Phone Number Verification (PNV) token, used on official apps where a full WebAuthn [public-key passkey](/constructor/inputPasskeyCredentialPublicKey/) cannot be created, in a way similar to [Firebase SMS authentication »](/api/auth/).
-   Added [starGiftAttributeRarity](/constructor/starGiftAttributeRarity/) - Exact rarity value for a collectible gift attribute.
-   Added [starGiftAttributeRarityUncommon](/constructor/starGiftAttributeRarityUncommon/) - Represents uncommon collectible gift attribute rarity.
-   Added [starGiftAttributeRarityRare](/constructor/starGiftAttributeRarityRare/) - Represents rare collectible gift attribute rarity.
-   Added [starGiftAttributeRarityEpic](/constructor/starGiftAttributeRarityEpic/) - Represents epic collectible gift attribute rarity.
-   Added [starGiftAttributeRarityLegendary](/constructor/starGiftAttributeRarityLegendary/) - Represents legendary collectible gift attribute rarity.
-   Added [updateStarGiftCraftFail](/constructor/updateStarGiftCraftFail/) - Indicates that a [crafting »](/api/gifts/#crafting-collectible-gifts) attempt did not produce a new collectible gift.
-   Added [keyboardButtonStyle](/constructor/keyboardButtonStyle/) - This constructor allows setting a custom background color and custom emoji label for a button, see [here »](/api/bots/buttons/#button-styles) for more info.
-   Added [messageActionNewCreatorPending](/constructor/messageActionNewCreatorPending/) - Service message: emitted to a supergroup when the [group/channel creator leaves the group »](/api/channel/#leaving-groups-channels), indicating that ownership transfer is pending. The `new_creator_id` user will become the new owner after 7 days if the old owner does not rejoin.
-   Added [messageActionChangeCreator](/constructor/messageActionChangeCreator/) - Service message: emitted to a supergroup when [ownership transfer completes after the old owner left the group »](/api/channel/#leaving-groups-channels) (7 days after the old owner left without rejoining), indicating that ownership has been transferred to a new owner.

##### Changed Constructors

-   Added **summary\_from\_language** parameter in [message](/constructor/message/)
-   Removed **legacy\_ios** parameter in [messageService](/constructor/messageService/)
-   Added **bot\_forum\_can\_manage\_topics** parameter in [user](/constructor/user/)
-   Added **flags**, **style** parameters in [keyboardButton](/constructor/keyboardButton/)
-   Added **monoforum** parameter in [channelForbidden](/constructor/channelForbidden/)
-   Added **flags**, **style** parameters in [keyboardButtonUrl](/constructor/keyboardButtonUrl/)
-   Added **style** parameter in [keyboardButtonCallback](/constructor/keyboardButtonCallback/)
-   Added **flags**, **style** parameters in [keyboardButtonRequestPhone](/constructor/keyboardButtonRequestPhone/)
-   Added **flags**, **style** parameters in [keyboardButtonRequestGeoLocation](/constructor/keyboardButtonRequestGeoLocation/)
-   Added **style** parameter in [keyboardButtonSwitchInline](/constructor/keyboardButtonSwitchInline/)
-   Added **flags**, **style** parameters in [keyboardButtonGame](/constructor/keyboardButtonGame/)
-   Added **flags**, **style** parameters in [keyboardButtonBuy](/constructor/keyboardButtonBuy/)
-   Added **style** parameter in [keyboardButtonUrlAuth](/constructor/keyboardButtonUrlAuth/)
-   Added **style** parameter in [inputKeyboardButtonUrlAuth](/constructor/inputKeyboardButtonUrlAuth/)
-   Added **request\_phone\_number**, **browser**, **platform**, **ip**, **region** parameters in [urlAuthResultRequest](/constructor/urlAuthResultRequest/)
-   Added **flags** parameter, changed type of **url** from **string** to **flags.0?string** in [urlAuthResultAccepted](/constructor/urlAuthResultAccepted/)
-   Added **style** parameter in [keyboardButtonRequestPoll](/constructor/keyboardButtonRequestPoll/)
-   Added **flags**, **game\_outcome** parameters in [messageMediaDice](/constructor/messageMediaDice/)
-   Added **flags**, **style** parameters in [inputKeyboardButtonUserProfile](/constructor/inputKeyboardButtonUserProfile/)
-   Added **flags**, **style** parameters in [keyboardButtonUserProfile](/constructor/keyboardButtonUserProfile/)
-   Added **flags**, **style** parameters in [keyboardButtonWebView](/constructor/keyboardButtonWebView/)
-   Added **flags**, **style** parameters in [keyboardButtonSimpleWebView](/constructor/keyboardButtonSimpleWebView/)
-   Added **flags**, **style** parameters in [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/)
-   Added **style** parameter in [inputKeyboardButtonRequestPeer](/constructor/inputKeyboardButtonRequestPeer/)
-   Added **flags**, **style** parameters in [keyboardButtonCopy](/constructor/keyboardButtonCopy/)
-   Added **flags**, **crafted**, **rarity** parameters, removed **rarity\_permille** parameter in [starGiftAttributeModel](/constructor/starGiftAttributeModel/)
-   Added **rarity** parameter, removed **rarity\_permille** parameter in [starGiftAttributePattern](/constructor/starGiftAttributePattern/)
-   Added **rarity** parameter, removed **rarity\_permille** parameter in [starGiftAttributeBackdrop](/constructor/starGiftAttributeBackdrop/)
-   Added **burned**, **crafted**, **craft\_chance\_permille** parameters in [starGiftUnique](/constructor/starGiftUnique/)
-   Added **craft**, **can\_craft\_at** parameters in [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/)
-   Added **can\_craft\_at** parameter in [savedStarGift](/constructor/savedStarGift/)

#### PUSH notification changes

##### New PUSH notifications

-   Added [STORY\_LIVE](/api/push-updates/#story-live) - `started a live stream!`

#### [Changes in the file reference database map file »](/api/file-references/)

##### New traversers incoming

-   Added
    
    ```
    traverseMethodResult{name: payments.getCraftStarGifts}
    ```
    

#### [Schema](/schema/)

```
message#9cb490e9 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true post:flags.14?true from_scheduled:flags.18?true legacy:flags.19?true edit_hide:flags.21?true pinned:flags.24?true noforwards:flags.26?true invert_media:flags.27?true flags2:# offline:flags2.1?true video_processing_pending:flags2.4?true paid_suggested_post_stars:flags2.8?true paid_suggested_post_ton:flags2.9?true id:int from_id:flags.8?Peer from_boosts_applied:flags.29?int peer_id:Peer saved_peer_id:flags.28?Peer fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long via_business_bot_id:flags2.0?long reply_to:flags.3?MessageReplyHeader date:int message:string media:flags.9?MessageMedia reply_markup:flags.6?ReplyMarkup entities:flags.7?Vector<MessageEntity> views:flags.10?int forwards:flags.10?int replies:flags.23?MessageReplies edit_date:flags.15?int post_author:flags.16?string grouped_id:flags.17?long reactions:flags.20?MessageReactions restriction_reason:flags.22?Vector<RestrictionReason> ttl_period:flags.25?int quick_reply_shortcut_id:flags.30?int effect:flags2.2?long factcheck:flags2.3?FactCheck report_delivery_until_date:flags2.5?int paid_message_stars:flags2.6?long suggested_post:flags2.7?SuggestedPost schedule_repeat_period:flags2.10?int summary_from_language:flags2.11?string = Message;
messageService#7a800e0a flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true reactions_are_possible:flags.9?true silent:flags.13?true post:flags.14?true legacy:flags.19?true id:int from_id:flags.8?Peer peer_id:Peer saved_peer_id:flags.28?Peer reply_to:flags.3?MessageReplyHeader date:int action:MessageAction reactions:flags.20?MessageReactions ttl_period:flags.25?int = Message;
user#31774388 flags:# self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true fake:flags.26?true bot_attach_menu:flags.27?true premium:flags.28?true attach_menu_enabled:flags.29?true flags2:# bot_can_edit:flags2.1?true close_friend:flags2.2?true stories_hidden:flags2.3?true stories_unavailable:flags2.4?true contact_require_premium:flags2.10?true bot_business:flags2.11?true bot_has_main_app:flags2.13?true bot_forum_view:flags2.16?true bot_forum_can_manage_topics:flags2.17?true id:long access_hash:flags.0?long first_name:flags.1?string last_name:flags.2?string username:flags.3?string phone:flags.4?string photo:flags.5?UserProfilePhoto status:flags.6?UserStatus bot_info_version:flags.14?int restriction_reason:flags.18?Vector<RestrictionReason> bot_inline_placeholder:flags.19?string lang_code:flags.22?string emoji_status:flags.30?EmojiStatus usernames:flags2.0?Vector<Username> stories_max_id:flags2.5?RecentStory color:flags2.8?PeerColor profile_color:flags2.9?PeerColor bot_active_users:flags2.12?int bot_verification_icon:flags2.14?long send_paid_messages_stars:flags2.15?long = User;
keyboardButton#7d170cff flags:# style:flags.10?KeyboardButtonStyle text:string = KeyboardButton;
channelForbidden#17d493d5 flags:# broadcast:flags.5?true megagroup:flags.8?true monoforum:flags.10?true id:long access_hash:long title:string until_date:flags.16?int = Chat;
keyboardButtonUrl#d80c25ec flags:# style:flags.10?KeyboardButtonStyle text:string url:string = KeyboardButton;
keyboardButtonCallback#e62bc960 flags:# requires_password:flags.0?true style:flags.10?KeyboardButtonStyle text:string data:bytes = KeyboardButton;
keyboardButtonRequestPhone#417efd8f flags:# style:flags.10?KeyboardButtonStyle text:string = KeyboardButton;
keyboardButtonRequestGeoLocation#aa40f94d flags:# style:flags.10?KeyboardButtonStyle text:string = KeyboardButton;
keyboardButtonSwitchInline#991399fc flags:# same_peer:flags.0?true style:flags.10?KeyboardButtonStyle text:string query:string peer_types:flags.1?Vector<InlineQueryPeerType> = KeyboardButton;
keyboardButtonGame#89c590f9 flags:# style:flags.10?KeyboardButtonStyle text:string = KeyboardButton;
keyboardButtonBuy#3fa53905 flags:# style:flags.10?KeyboardButtonStyle text:string = KeyboardButton;
keyboardButtonUrlAuth#f51006f9 flags:# style:flags.10?KeyboardButtonStyle text:string fwd_text:flags.0?string url:string button_id:int = KeyboardButton;
inputKeyboardButtonUrlAuth#68013e72 flags:# request_write_access:flags.0?true style:flags.10?KeyboardButtonStyle text:string fwd_text:flags.1?string url:string bot:InputUser = KeyboardButton;
urlAuthResultRequest#32fabf1a flags:# request_write_access:flags.0?true request_phone_number:flags.1?true bot:User domain:string browser:flags.2?string platform:flags.2?string ip:flags.2?string region:flags.2?string = UrlAuthResult;
urlAuthResultAccepted#623a8fa0 flags:# url:flags.0?string = UrlAuthResult;
keyboardButtonRequestPoll#7a11d782 flags:# style:flags.10?KeyboardButtonStyle quiz:flags.0?Bool text:string = KeyboardButton;
messageMediaDice#08cbec07 flags:# value:int emoticon:string game_outcome:flags.0?messages.EmojiGameOutcome = MessageMedia;
inputKeyboardButtonUserProfile#7d5e07c7 flags:# style:flags.10?KeyboardButtonStyle text:string user_id:InputUser = KeyboardButton;
keyboardButtonUserProfile#c0fd5d09 flags:# style:flags.10?KeyboardButtonStyle text:string user_id:long = KeyboardButton;
keyboardButtonWebView#e846b1a0 flags:# style:flags.10?KeyboardButtonStyle text:string url:string = KeyboardButton;
keyboardButtonSimpleWebView#e15c4370 flags:# style:flags.10?KeyboardButtonStyle text:string url:string = KeyboardButton;
keyboardButtonRequestPeer#5b0f15f5 flags:# style:flags.10?KeyboardButtonStyle text:string button_id:int peer_type:RequestPeerType max_quantity:int = KeyboardButton;
inputKeyboardButtonRequestPeer#02b78156 flags:# name_requested:flags.0?true username_requested:flags.1?true photo_requested:flags.2?true style:flags.10?KeyboardButtonStyle text:string button_id:int peer_type:RequestPeerType max_quantity:int = KeyboardButton;
keyboardButtonCopy#bcc4af10 flags:# style:flags.10?KeyboardButtonStyle text:string copy_text:string = KeyboardButton;
starGiftAttributeModel#565251e2 flags:# crafted:flags.0?true name:string document:Document rarity:StarGiftAttributeRarity = StarGiftAttribute;
starGiftAttributePattern#4e7085ea name:string document:Document rarity:StarGiftAttributeRarity = StarGiftAttribute;
starGiftAttributeBackdrop#9f2504e4 name:string backdrop_id:int center_color:int edge_color:int pattern_color:int text_color:int rarity:StarGiftAttributeRarity = StarGiftAttribute;
starGiftUnique#85f0a9cd flags:# require_premium:flags.6?true resale_ton_only:flags.7?true theme_available:flags.9?true burned:flags.14?true crafted:flags.15?true id:long gift_id:long title:string slug:string num:int owner_id:flags.0?Peer owner_name:flags.1?string owner_address:flags.2?string attributes:Vector<StarGiftAttribute> availability_issued:int availability_total:int gift_address:flags.3?string resell_amount:flags.4?Vector<StarsAmount> released_by:flags.5?Peer value_amount:flags.8?long value_currency:flags.8?string value_usd_amount:flags.8?long theme_peer:flags.10?Peer peer_color:flags.11?PeerColor host_id:flags.12?Peer offer_min_stars:flags.13?int craft_chance_permille:flags.16?int = StarGift;
messageActionStarGiftUnique#e6c31522 flags:# upgrade:flags.0?true transferred:flags.1?true saved:flags.2?true refunded:flags.5?true prepaid_upgrade:flags.11?true assigned:flags.13?true from_offer:flags.14?true craft:flags.16?true gift:StarGift can_export_at:flags.3?int transfer_stars:flags.4?long from_id:flags.6?Peer peer:flags.7?Peer saved_id:flags.7?long resale_amount:flags.8?StarsAmount can_transfer_at:flags.9?int can_resell_at:flags.10?int drop_original_details_stars:flags.12?long can_craft_at:flags.15?int = MessageAction;
savedStarGift#41df43fc flags:# name_hidden:flags.0?true unsaved:flags.5?true refunded:flags.9?true can_upgrade:flags.10?true pinned_to_top:flags.12?true upgrade_separate:flags.17?true from_id:flags.1?Peer date:int gift:StarGift message:flags.2?TextWithEntities msg_id:flags.3?int saved_id:flags.11?long convert_stars:flags.4?long upgrade_stars:flags.6?long can_export_at:flags.7?int transfer_stars:flags.8?long can_transfer_at:flags.13?int can_resell_at:flags.14?int collection_id:flags.15?Vector<int> prepaid_upgrade_hash:flags.16?string drop_original_details_stars:flags.18?long gift_num:flags.19?int can_craft_at:flags.20?int = SavedStarGift;
messages.emojiGameOutcome#da2ad647 seed:bytes stake_ton_amount:long ton_amount:long = messages.EmojiGameOutcome;
inputMediaStakeDice#f3a9244a game_hash:string ton_amount:long client_seed:bytes = InputMedia;
messages.emojiGameUnavailable#59e65335 = messages.EmojiGameInfo;
messages.emojiGameDiceInfo#44e56023 flags:# game_hash:string prev_stake:long current_streak:int params:Vector<int> plays_left:flags.0?int = messages.EmojiGameInfo;
updateEmojiGameInfo#fb9c547a info:messages.EmojiGameInfo = Update;
inputPasskeyCredentialFirebasePNV#5b1ccb28 pnv_token:string = InputPasskeyCredential;
starGiftAttributeRarity#36437737 permille:int = StarGiftAttributeRarity;
starGiftAttributeRarityUncommon#dbce6389 = StarGiftAttributeRarity;
starGiftAttributeRarityRare#f08d516b = StarGiftAttributeRarity;
starGiftAttributeRarityEpic#78fbf3a8 = StarGiftAttributeRarity;
starGiftAttributeRarityLegendary#cef7e7a8 = StarGiftAttributeRarity;
updateStarGiftCraftFail#ac072444 = Update;
keyboardButtonStyle#4fdd3430 flags:# bg_primary:flags.0?true bg_danger:flags.1?true bg_success:flags.2?true icon:flags.3?long = KeyboardButtonStyle;
messageActionNewCreatorPending#b07ed085 new_creator_id:long = MessageAction;
messageActionChangeCreator#e188503b new_creator_id:long = MessageAction;
---functions---
payments.getResaleStarGifts#7a5fa236 flags:# sort_by_price:flags.1?true sort_by_num:flags.2?true for_craft:flags.4?true attributes_hash:flags.0?long gift_id:long attributes:flags.3?Vector<StarGiftAttributeId> offset:string limit:int = payments.ResaleStarGifts;
messages.getEmojiGameInfo#fb7e8ca7 = messages.EmojiGameInfo;
messages.summarizeText#9d4104e2 flags:# peer:InputPeer id:int to_lang:flags.0?string = TextWithEntities;
payments.getCraftStarGifts#fd05dd00 gift_id:long offset:string limit:int = payments.SavedStarGifts;
payments.craftStarGift#b0f9684f stargift:Vector<InputSavedStarGift> = Updates;
channels.getFutureCreatorAfterLeave#a00918af channel:InputChannel = User;
```

### [Layer 220](https://core.telegram.org/schema?layer=220)

This layer introduces the following features:

-   [Added a new suggestion to setup a passkey »](/api/config/#setup-passkey)
-   Added a new premium feature identifier for [paid private messages »](/api/paid-messages/)
-   Some improvements for [auctions »](/api/auctions/):
    -   Added a detailed description of all auction rounds as [StarGiftAuctionRound](/type/StarGiftAuctionRound/)s
    -   Added `last_gift_num` to [allow computing the user's approximated position »](/api/auctions/#auction-flow)
    -   Added fields to lookup auction gifts currently on resale, see [here »](/api/auctions/) for more info.
-   Added [payments.getStarGiftUpgradeAttributes](/method/payments.getStarGiftUpgradeAttributes/) to obtain the **full** list of just the collectible attributes that may appear for a gift type once it's upgraded to a [collectible gift »](/api/gifts/#collectible-gifts).
-   Moved some auction-related fields to [starGift](/constructor/starGift/)
-   Added a new [starGiftBackground](/constructor/starGiftBackground/) constructor to represent the background palette of gift cards and auctions
-   [Collectible gift purchase offers »](/api/gifts/#collectible-gift-purchase-offers)

#### API constants

##### Premium features

[Telegram Premium feature identifiers »](/api/premium/#telegram-premium-features).

-   Added [`paid_messages` »](/api/premium/#paid-messages)

##### Suggested actions

[Basic suggestion identifiers »](/api/config/#basic-suggestions)

-   Added [`SETUP_PASSKEY` »](/api/config/#setup-passkey)

#### [Schema](/schema/) changes

##### New Methods

-   Added [payments.resolveStarGiftOffer](/method/payments.resolveStarGiftOffer/) - Accept or decline a previously received [collectible gift purchase offer »](/api/gifts/#collectible-gift-purchase-offers), see [here »](/api/gifts/#collectible-gift-purchase-offers) for the full flow.
-   Added [payments.sendStarGiftOffer](/method/payments.sendStarGiftOffer/) - Send an offer to purchase a [collectible gift »](/api/gifts/#collectible-gift-purchase-offers), see [here »](/api/gifts/#collectible-gift-purchase-offers) for the full flow.
-   Added [payments.getStarGiftUpgradeAttributes](/method/payments.getStarGiftUpgradeAttributes/) - Obtains the **full** list of just the collectible attributes that may appear for a gift type once it's upgraded to a [collectible gift »](/api/gifts/#collectible-gifts).

##### New Constructors

-   Added [messageActionStarGiftPurchaseOffer](/constructor/messageActionStarGiftPurchaseOffer/) - Contains an offer to purchase a [collectible gift »](/api/gifts/#collectible-gift-purchase-offers), see [here »](/api/gifts/#collectible-gift-purchase-offers) for the full flow.
-   Added [messageActionStarGiftPurchaseOfferDeclined](/constructor/messageActionStarGiftPurchaseOfferDeclined/) - A [collectible gift purchase offer »](/api/gifts/#collectible-gift-purchase-offers) was declined, or the offer expired, see [here »](/api/gifts/#collectible-gift-purchase-offers) for the full flow.
-   Added [starGiftBackground](/constructor/starGiftBackground/) - Contains the default background palette of a [gift type »](/api/gifts/#listing-all-possible-collectible-variants).
-   Added [starGiftAuctionRound](/constructor/starGiftAuctionRound/) - Describes one or more [collectible gift auction rounds »](/api/auctions/).
-   Added [starGiftAuctionRoundExtendable](/constructor/starGiftAuctionRoundExtendable/) - Describes one or more extendable [collectible gift auction rounds »](/api/auctions/).
-   Added [payments.starGiftUpgradeAttributes](/constructor/payments.starGiftUpgradeAttributes/) - List of just the collectible attributes that may appear for a gift type once it's upgraded to a [collectible gift »](/api/gifts/#collectible-gifts).

##### Changed Constructors

-   Added **legacy\_ios** parameter in [messageService](/constructor/messageService/)
-   Added **auction\_start\_date**, **upgrade\_variants**, **background** parameters in [starGift](/constructor/starGift/)
-   Added **gift\_num** parameter in [messageActionStarGift](/constructor/messageActionStarGift/)
-   Added **value\_usd\_amount**, **offer\_min\_stars** parameters in [starGiftUnique](/constructor/starGiftUnique/)
-   Added **from\_offer** parameter in [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/)
-   Added **gift\_num** parameter in [savedStarGift](/constructor/savedStarGift/)
-   Added **last\_gift\_num**, **rounds** parameters in [starGiftAuctionState](/constructor/starGiftAuctionState/)
-   Added **flags**, **listed\_count**, **fragment\_listed\_count**, **fragment\_listed\_url** parameters in [starGiftAuctionStateFinished](/constructor/starGiftAuctionStateFinished/)
-   Added **chats** parameter in [payments.starGiftAuctionState](/constructor/payments.starGiftAuctionState/)
-   Added **gift\_num** parameter in [starGiftAuctionAcquiredGift](/constructor/starGiftAuctionAcquiredGift/)
-   Added **chats** parameter in [payments.starGiftActiveAuctions](/constructor/payments.starGiftActiveAuctions/)
-   Removed **center\_color**, **edge\_color**, **text\_color** parameters in [webPageAttributeStarGiftAuction](/constructor/webPageAttributeStarGiftAuction/)

#### [Changes in the file reference database map file »](/api/file-references/)

##### New skipped incoming sources

-   Added [payments.starGiftUpgradeAttributes](/constructor/payments.starGiftUpgradeAttributes/) - Contexts for star gifts are not yet implemented

##### New traversers incoming

-   Added
    
    ```
    traverseIncomingConstructor{predicate: messageActionStarGiftPurchaseOffer, params: [gift], type: MessageAction}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messageActionStarGiftPurchaseOfferDeclined, params: [gift], type: MessageAction}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: payments.starGiftUpgradeAttributes, params: [attributes], type: payments.StarGiftUpgradeAttributes}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: payments.getStarGiftUpgradeAttributes}
    ```
    

#### [Schema](/schema/)

```
messageService#7a800e0a flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true reactions_are_possible:flags.9?true silent:flags.13?true post:flags.14?true legacy_ios:flags.17?true legacy:flags.19?true id:int from_id:flags.8?Peer peer_id:Peer saved_peer_id:flags.28?Peer reply_to:flags.3?MessageReplyHeader date:int action:MessageAction reactions:flags.20?MessageReactions ttl_period:flags.25?int = Message;
starGift#313a9547 flags:# limited:flags.0?true sold_out:flags.1?true birthday:flags.2?true require_premium:flags.7?true limited_per_user:flags.8?true peer_color_available:flags.10?true auction:flags.11?true id:long sticker:Document stars:long availability_remains:flags.0?int availability_total:flags.0?int availability_resale:flags.4?long convert_stars:long first_sale_date:flags.1?int last_sale_date:flags.1?int upgrade_stars:flags.3?long resell_min_stars:flags.4?long title:flags.5?string released_by:flags.6?Peer per_user_total:flags.8?int per_user_remains:flags.8?int locked_until_date:flags.9?int auction_slug:flags.11?string gifts_per_round:flags.11?int auction_start_date:flags.11?int upgrade_variants:flags.12?int background:flags.13?StarGiftBackground = StarGift;
messageActionStarGift#ea2c31d3 flags:# name_hidden:flags.0?true saved:flags.2?true converted:flags.3?true upgraded:flags.5?true refunded:flags.9?true can_upgrade:flags.10?true prepaid_upgrade:flags.13?true upgrade_separate:flags.16?true auction_acquired:flags.17?true gift:StarGift message:flags.1?TextWithEntities convert_stars:flags.4?long upgrade_msg_id:flags.5?int upgrade_stars:flags.8?long from_id:flags.11?Peer peer:flags.12?Peer saved_id:flags.12?long prepaid_upgrade_hash:flags.14?string gift_msg_id:flags.15?int to_id:flags.18?Peer gift_num:flags.19?int = MessageAction;
starGiftUnique#569d64c9 flags:# require_premium:flags.6?true resale_ton_only:flags.7?true theme_available:flags.9?true id:long gift_id:long title:string slug:string num:int owner_id:flags.0?Peer owner_name:flags.1?string owner_address:flags.2?string attributes:Vector<StarGiftAttribute> availability_issued:int availability_total:int gift_address:flags.3?string resell_amount:flags.4?Vector<StarsAmount> released_by:flags.5?Peer value_amount:flags.8?long value_currency:flags.8?string value_usd_amount:flags.8?long theme_peer:flags.10?Peer peer_color:flags.11?PeerColor host_id:flags.12?Peer offer_min_stars:flags.13?int = StarGift;
messageActionStarGiftUnique#95728543 flags:# upgrade:flags.0?true transferred:flags.1?true saved:flags.2?true refunded:flags.5?true prepaid_upgrade:flags.11?true assigned:flags.13?true from_offer:flags.14?true gift:StarGift can_export_at:flags.3?int transfer_stars:flags.4?long from_id:flags.6?Peer peer:flags.7?Peer saved_id:flags.7?long resale_amount:flags.8?StarsAmount can_transfer_at:flags.9?int can_resell_at:flags.10?int drop_original_details_stars:flags.12?long = MessageAction;
savedStarGift#ead6805e flags:# name_hidden:flags.0?true unsaved:flags.5?true refunded:flags.9?true can_upgrade:flags.10?true pinned_to_top:flags.12?true upgrade_separate:flags.17?true from_id:flags.1?Peer date:int gift:StarGift message:flags.2?TextWithEntities msg_id:flags.3?int saved_id:flags.11?long convert_stars:flags.4?long upgrade_stars:flags.6?long can_export_at:flags.7?int transfer_stars:flags.8?long can_transfer_at:flags.13?int can_resell_at:flags.14?int collection_id:flags.15?Vector<int> prepaid_upgrade_hash:flags.16?string drop_original_details_stars:flags.18?long gift_num:flags.19?int = SavedStarGift;
starGiftAuctionState#771a4e66 version:int start_date:int end_date:int min_bid_amount:long bid_levels:Vector<AuctionBidLevel> top_bidders:Vector<long> next_round_at:int last_gift_num:int gifts_left:int current_round:int total_rounds:int rounds:Vector<StarGiftAuctionRound> = StarGiftAuctionState;
starGiftAuctionStateFinished#972dabbf flags:# start_date:int end_date:int average_price:long listed_count:flags.0?int fragment_listed_count:flags.1?int fragment_listed_url:flags.1?string = StarGiftAuctionState;
payments.starGiftAuctionState#6b39f4ec gift:StarGift state:StarGiftAuctionState user_state:StarGiftAuctionUserState timeout:int users:Vector<User> chats:Vector<Chat> = payments.StarGiftAuctionState;
starGiftAuctionAcquiredGift#42b00348 flags:# name_hidden:flags.0?true peer:Peer date:int bid_amount:long round:int pos:int message:flags.1?TextWithEntities gift_num:flags.2?int = StarGiftAuctionAcquiredGift;
payments.starGiftActiveAuctions#aef6abbc auctions:Vector<StarGiftActiveAuctionState> users:Vector<User> chats:Vector<Chat> = payments.StarGiftActiveAuctions;
webPageAttributeStarGiftAuction#01c641c2 gift:StarGift end_date:int = WebPageAttribute;
messageActionStarGiftPurchaseOffer#774278d4 flags:# accepted:flags.0?true declined:flags.1?true gift:StarGift price:StarsAmount expires_at:int = MessageAction;
messageActionStarGiftPurchaseOfferDeclined#73ada76b flags:# expired:flags.0?true gift:StarGift price:StarsAmount = MessageAction;
starGiftBackground#aff56398 center_color:int edge_color:int text_color:int = StarGiftBackground;
starGiftAuctionRound#3aae0528 num:int duration:int = StarGiftAuctionRound;
starGiftAuctionRoundExtendable#0aa021e5 num:int duration:int extend_top:int extend_window:int = StarGiftAuctionRound;
payments.starGiftUpgradeAttributes#46c6e36f attributes:Vector<StarGiftAttribute> = payments.StarGiftUpgradeAttributes;
---functions---
payments.resolveStarGiftOffer#e9ce781c flags:# decline:flags.0?true offer_msg_id:int = Updates;
payments.sendStarGiftOffer#8fb86b41 flags:# peer:InputPeer slug:string price:StarsAmount duration:int random_id:long allow_paid_stars:flags.0?long = Updates;
payments.getStarGiftUpgradeAttributes#6d038b58 gift_id:long = payments.StarGiftUpgradeAttributes;
```

### [Layer 219](https://core.telegram.org/schema?layer=219)

This layer introduces the following features:

-   [Passkeys »](/api/passkeys/)
-   [Message effects »](/api/effects/) support for [messages.forwardMessages](/method/messages.forwardMessages/).

#### [Schema](/schema/) changes

##### New Methods

-   Added [account.initPasskeyRegistration](/method/account.initPasskeyRegistration/) - Initialize passkey registration for the current account, see [here »](/api/passkeys/#creating-a-passkey) for more info on the full flow.
-   Added [account.registerPasskey](/method/account.registerPasskey/) - Complete passkey registration for the current account, see [here »](/api/passkeys/#creating-a-passkey) for more info on the full flow.
-   Added [account.getPasskeys](/method/account.getPasskeys/) - List the passkeys associated to the current account that can be used to log in, see [here »](/api/passkeys/#list-passkeys) for more info on passkeys.
-   Added [account.deletePasskey](/method/account.deletePasskey/) - Delete a passkey associated to the current account, see [here »](/api/passkeys/#delete-passkeys) for more info.
-   Added [auth.initPasskeyLogin](/method/auth.initPasskeyLogin/) - Initialize login with a passkey over an unauthenticated connection, see [here »](/api/passkeys/#logging-in-with-a-passkey) for more info.
-   Added [auth.finishPasskeyLogin](/method/auth.finishPasskeyLogin/) - Complete login with a passkey over an unauthenticated connection, see [here »](/api/passkeys/#logging-in-with-a-passkey) for more info.

##### Changed Methods

-   Added **effect** parameter in [messages.forwardMessages](/method/messages.forwardMessages/)

##### New Constructors

-   Added [passkey](/constructor/passkey/) - Human-readable info about a passkey associated to an account, returned when [creating a passkey »](/api/passkeys/#creating-a-passkey) or [listing passkeys »](/api/passkeys/#list-passkeys).
-   Added [account.passkeys](/constructor/account.passkeys/) - List of [passkeys »](/api/passkeys/#list-passkeys) associated to the current account.
-   Added [account.passkeyRegistrationOptions](/constructor/account.passkeyRegistrationOptions/) - Passkey registration options, see [here »](/api/passkeys/#creating-a-passkey) for more info on the full flow.
-   Added [auth.passkeyLoginOptions](/constructor/auth.passkeyLoginOptions/) - Passkey login options, see [here »](/api/passkeys/#logging-in-with-a-passkey) for more info on the full flow.
-   Added [inputPasskeyResponseRegister](/constructor/inputPasskeyResponseRegister/) - WebAuthn registration response used when registering a new passkey, see [here »](/api/passkeys/#creating-a-passkey) for more info on the full flow.
-   Added [inputPasskeyResponseLogin](/constructor/inputPasskeyResponseLogin/) - WebAuthn authentication response used when logging in with a passkey, see [here »](/api/passkeys/#logging-in-with-a-passkey) for more info on the full flow.
-   Added [inputPasskeyCredentialPublicKey](/constructor/inputPasskeyCredentialPublicKey/) - Public-key passkey credential used both for registration and for login, see [creating a passkey »](/api/passkeys/#creating-a-passkey) and [logging in with a passkey »](/api/passkeys/#logging-in-with-a-passkey) for the full flows.

##### Changed Constructors

-   Added **offer** parameter in [starsTransaction](/constructor/starsTransaction/)

#### [Schema](/schema/)

```
starsTransaction#13659eb0 flags:# refund:flags.3?true pending:flags.4?true failed:flags.6?true gift:flags.10?true reaction:flags.11?true stargift_upgrade:flags.18?true business_transfer:flags.21?true stargift_resale:flags.22?true posts_search:flags.24?true stargift_prepaid_upgrade:flags.25?true stargift_drop_original_details:flags.26?true phonegroup_message:flags.27?true stargift_auction_bid:flags.28?true offer:flags.29?true id:string amount:StarsAmount date:int peer:StarsTransactionPeer title:flags.0?string description:flags.1?string photo:flags.2?WebDocument transaction_date:flags.5?int transaction_url:flags.5?string bot_payload:flags.7?bytes msg_id:flags.8?int extended_media:flags.9?Vector<MessageMedia> subscription_period:flags.12?int giveaway_post_id:flags.13?int stargift:flags.14?StarGift floodskip_number:flags.15?int starref_commission_permille:flags.16?int starref_peer:flags.17?Peer starref_amount:flags.17?StarsAmount paid_messages:flags.19?int premium_gift_months:flags.20?int ads_proceeds_from_date:flags.23?int ads_proceeds_to_date:flags.23?int = StarsTransaction;
passkey#98613ebf flags:# id:string name:string date:int software_emoji_id:flags.0?long last_usage_date:flags.1?int = Passkey;
account.passkeys#f8e0aa1c passkeys:Vector<Passkey> = account.Passkeys;
account.passkeyRegistrationOptions#e16b5ce1 options:DataJSON = account.PasskeyRegistrationOptions;
auth.passkeyLoginOptions#e2037789 options:DataJSON = auth.PasskeyLoginOptions;
inputPasskeyResponseRegister#3e63935c client_data:DataJSON attestation_data:bytes = InputPasskeyResponse;
inputPasskeyResponseLogin#c31fc14a client_data:DataJSON authenticator_data:bytes signature:bytes user_handle:string = InputPasskeyResponse;
inputPasskeyCredentialPublicKey#3c27b78f id:string raw_id:string response:InputPasskeyResponse = InputPasskeyCredential;
---functions---
messages.forwardMessages#13704a7c flags:# silent:flags.5?true background:flags.6?true with_my_score:flags.8?true drop_author:flags.11?true drop_media_captions:flags.12?true noforwards:flags.14?true allow_paid_floodskip:flags.19?true from_peer:InputPeer id:Vector<int> random_id:Vector<long> to_peer:InputPeer top_msg_id:flags.9?int reply_to:flags.22?InputReplyTo schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long video_timestamp:flags.20?int allow_paid_stars:flags.21?long suggested_post:flags.23?SuggestedPost = Updates;
account.initPasskeyRegistration#429547e8 = account.PasskeyRegistrationOptions;
account.registerPasskey#55b41fd6 credential:InputPasskeyCredential = Passkey;
account.getPasskeys#ea1f0c52 = account.Passkeys;
account.deletePasskey#f5b5563f id:string = Bool;
auth.initPasskeyLogin#518ad0b7 api_id:int api_hash:string = auth.PasskeyLoginOptions;
auth.finishPasskeyLogin#9857ad07 flags:# credential:InputPasskeyCredential from_dc_id:flags.0?int from_auth_key_id:flags.0?long = auth.Authorization;
```

### [Layer 218](https://core.telegram.org/schema?layer=218)

This layer introduces the following features:

-   [Collectible gift auctions »](/api/auctions/)

#### API constants

##### Web page type values

Web page type values from the [webPage](/constructor/webPage/) constructor.

-   Added `telegram_auction`

#### [Schema](/schema/) changes

##### New Methods

-   Added [payments.getStarGiftAuctionState](/method/payments.getStarGiftAuctionState/) - Returns info about a [collectible gift auction »](/api/auctions/); also subscribes the user to auction updates, see [here »](/api/auctions/) for more info on the full flow.
-   Added [payments.getStarGiftAuctionAcquiredGifts](/method/payments.getStarGiftAuctionAcquiredGifts/) - Fetches all the gifts that the current user won in an [auction](/api/auctions/).
-   Added [payments.getStarGiftActiveAuctions](/method/payments.getStarGiftActiveAuctions/) - Fetches all currently active [gift auctions](/api/auctions/) **the user has ever bid on** (including auctions where the user was outbid and their bid was returned), as long as the auction hasn't ended yet.

##### New Constructors

-   Added [inputInvoiceStarGiftAuctionBid](/constructor/inputInvoiceStarGiftAuctionBid/) - Used to place a bid in a [collectible gift auction »](/api/auctions/).
-   Added [auctionBidLevel](/constructor/auctionBidLevel/) - Describes a bid in an [auction](/api/auctions/).
-   Added [starGiftAuctionStateNotModified](/constructor/starGiftAuctionStateNotModified/) - Returned only by auction methods (never by updates) if the passed `version` is equal to the remote [auction »](/api/auctions/).`version`, meaning auction information hasn't changed over the locally cached version.
-   Added [starGiftAuctionState](/constructor/starGiftAuctionState/) - Represents an active or pending [auction »](/api/auctions/).
-   Added [starGiftAuctionStateFinished](/constructor/starGiftAuctionStateFinished/) - Represents a finished [auction »](/api/auctions/).
-   Added [starGiftAuctionUserState](/constructor/starGiftAuctionUserState/) - Contains information about the current user's state in an [auction »](/api/auctions/).
-   Added [updateStarGiftAuctionState](/constructor/updateStarGiftAuctionState/) - Contains updates to [auction state, see here »](/api/auctions/) for more info on how to enable these updates.
-   Added [updateStarGiftAuctionUserState](/constructor/updateStarGiftAuctionUserState/) - Contains updates to [auction state related to the current user, see here »](/api/auctions/) for more info on how to enable these updates.
-   Added [payments.starGiftAuctionState](/constructor/payments.starGiftAuctionState/) - Describes a [collectible gift auction »](/api/auctions/).
-   Added [starGiftAuctionAcquiredGift](/constructor/starGiftAuctionAcquiredGift/) - Describes a gift that the current user won in an auction.
-   Added [payments.starGiftAuctionAcquiredGifts](/constructor/payments.starGiftAuctionAcquiredGifts/) - Describes all the gifts that the current user won in an [auction](/api/auctions/).
-   Added [starGiftActiveAuctionState](/constructor/starGiftActiveAuctionState/) - Contains info about [an auction where the user has placed a bid »](/api/auctions/).
-   Added [payments.starGiftActiveAuctionsNotModified](/constructor/payments.starGiftActiveAuctionsNotModified/) - The list of currently active [gift auctions](/api/auctions/) **where the user has placed a bid** hasn't changed.
-   Added [payments.starGiftActiveAuctions](/constructor/payments.starGiftActiveAuctions/) - Describes all currently active [gift auctions](/api/auctions/) **where the user has placed a bid**.
-   Added [inputStarGiftAuction](/constructor/inputStarGiftAuction/) - Used to fetch [auctions](/api/auctions/) using the ID of the linked [collectible gift](/api/gifts/#collectible-gifts).
-   Added [inputStarGiftAuctionSlug](/constructor/inputStarGiftAuctionSlug/) - Used to fetch [auctions](/api/auctions/) using the [slug of an auction deep link »](/api/links/#auction-links).
-   Added [webPageAttributeStarGiftAuction](/constructor/webPageAttributeStarGiftAuction/) - Contains info about a [collectible gift auction »](/api/auctions/) for a [webPage](/constructor/webPage/) preview of an [auction »](/api/auctions/) (the [webPage](/constructor/webPage/) will have a `type` of `telegram_auction`).

##### Changed Constructors

-   Added **stargift\_auction\_bid** parameter in [starsTransaction](/constructor/starsTransaction/)
-   Added **auction**, **auction\_slug**, **gifts\_per\_round** parameters in [starGift](/constructor/starGift/)
-   Added **auction\_acquired**, **to\_id** parameters in [messageActionStarGift](/constructor/messageActionStarGift/)

#### [Changes in the file reference database map file »](/api/file-references/)

##### New traversers incoming

-   Added
    
    ```
    traverseIncomingConstructor{predicate: payments.starGiftActiveAuctions, params: [auctions], type: payments.StarGiftActiveAuctions}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: payments.starGiftAuctionState, params: [gift], type: payments.StarGiftAuctionState}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: starGiftActiveAuctionState, params: [gift], type: StarGiftActiveAuctionState}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: webPageAttributeStarGiftAuction, params: [gift], type: WebPageAttribute}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: payments.getStarGiftActiveAuctions}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: payments.getStarGiftAuctionState}
    ```
    

#### [Schema](/schema/)

```
starsTransaction#13659eb0 flags:# refund:flags.3?true pending:flags.4?true failed:flags.6?true gift:flags.10?true reaction:flags.11?true stargift_upgrade:flags.18?true business_transfer:flags.21?true stargift_resale:flags.22?true posts_search:flags.24?true stargift_prepaid_upgrade:flags.25?true stargift_drop_original_details:flags.26?true phonegroup_message:flags.27?true stargift_auction_bid:flags.28?true id:string amount:StarsAmount date:int peer:StarsTransactionPeer title:flags.0?string description:flags.1?string photo:flags.2?WebDocument transaction_date:flags.5?int transaction_url:flags.5?string bot_payload:flags.7?bytes msg_id:flags.8?int extended_media:flags.9?Vector<MessageMedia> subscription_period:flags.12?int giveaway_post_id:flags.13?int stargift:flags.14?StarGift floodskip_number:flags.15?int starref_commission_permille:flags.16?int starref_peer:flags.17?Peer starref_amount:flags.17?StarsAmount paid_messages:flags.19?int premium_gift_months:flags.20?int ads_proceeds_from_date:flags.23?int ads_proceeds_to_date:flags.23?int = StarsTransaction;
starGift#1b9a4d7f flags:# limited:flags.0?true sold_out:flags.1?true birthday:flags.2?true require_premium:flags.7?true limited_per_user:flags.8?true peer_color_available:flags.10?true auction:flags.11?true id:long sticker:Document stars:long availability_remains:flags.0?int availability_total:flags.0?int availability_resale:flags.4?long convert_stars:long first_sale_date:flags.1?int last_sale_date:flags.1?int upgrade_stars:flags.3?long resell_min_stars:flags.4?long title:flags.5?string released_by:flags.6?Peer per_user_total:flags.8?int per_user_remains:flags.8?int locked_until_date:flags.9?int auction_slug:flags.11?string gifts_per_round:flags.11?int = StarGift;
messageActionStarGift#db596550 flags:# name_hidden:flags.0?true saved:flags.2?true converted:flags.3?true upgraded:flags.5?true refunded:flags.9?true can_upgrade:flags.10?true prepaid_upgrade:flags.13?true upgrade_separate:flags.16?true auction_acquired:flags.17?true gift:StarGift message:flags.1?TextWithEntities convert_stars:flags.4?long upgrade_msg_id:flags.5?int upgrade_stars:flags.8?long from_id:flags.11?Peer peer:flags.12?Peer saved_id:flags.12?long prepaid_upgrade_hash:flags.14?string gift_msg_id:flags.15?int to_id:flags.18?Peer = MessageAction;
inputInvoiceStarGiftAuctionBid#1ecafa10 flags:# hide_name:flags.0?true update_bid:flags.2?true peer:flags.3?InputPeer gift_id:long bid_amount:long message:flags.1?TextWithEntities = InputInvoice;
auctionBidLevel#310240cc pos:int amount:long date:int = AuctionBidLevel;
starGiftAuctionStateNotModified#fe333952 = StarGiftAuctionState;
starGiftAuctionState#5db04f4b version:int start_date:int end_date:int min_bid_amount:long bid_levels:Vector<AuctionBidLevel> top_bidders:Vector<long> next_round_at:int gifts_left:int current_round:int total_rounds:int = StarGiftAuctionState;
starGiftAuctionStateFinished#7d967c3a start_date:int end_date:int average_price:long = StarGiftAuctionState;
starGiftAuctionUserState#2eeed1c4 flags:# returned:flags.1?true bid_amount:flags.0?long bid_date:flags.0?int min_bid_amount:flags.0?long bid_peer:flags.0?Peer acquired_count:int = StarGiftAuctionUserState;
updateStarGiftAuctionState#48e246c2 gift_id:long state:StarGiftAuctionState = Update;
updateStarGiftAuctionUserState#dc58f31e gift_id:long user_state:StarGiftAuctionUserState = Update;
payments.starGiftAuctionState#0e98e474 gift:StarGift state:StarGiftAuctionState user_state:StarGiftAuctionUserState timeout:int users:Vector<User> = payments.StarGiftAuctionState;
starGiftAuctionAcquiredGift#ab60e20b flags:# name_hidden:flags.0?true peer:Peer date:int bid_amount:long round:int pos:int message:flags.1?TextWithEntities = StarGiftAuctionAcquiredGift;
payments.starGiftAuctionAcquiredGifts#7d5bd1f0 gifts:Vector<StarGiftAuctionAcquiredGift> users:Vector<User> chats:Vector<Chat> = payments.StarGiftAuctionAcquiredGifts;
starGiftActiveAuctionState#d31bc45d gift:StarGift state:StarGiftAuctionState user_state:StarGiftAuctionUserState = StarGiftActiveAuctionState;
payments.starGiftActiveAuctionsNotModified#db33dad0 = payments.StarGiftActiveAuctions;
payments.starGiftActiveAuctions#97f187d8 auctions:Vector<StarGiftActiveAuctionState> users:Vector<User> = payments.StarGiftActiveAuctions;
inputStarGiftAuction#02e16c98 gift_id:long = InputStarGiftAuction;
inputStarGiftAuctionSlug#7ab58308 slug:string = InputStarGiftAuction;
webPageAttributeStarGiftAuction#034986ab gift:StarGift end_date:int center_color:int edge_color:int text_color:int = WebPageAttribute;
---functions---
payments.getStarGiftAuctionState#5c9ff4d6 auction:InputStarGiftAuction version:int = payments.StarGiftAuctionState;
payments.getStarGiftAuctionAcquiredGifts#6ba2cbec gift_id:long = payments.StarGiftAuctionAcquiredGifts;
payments.getStarGiftActiveAuctions#a5d0514d hash:long = payments.StarGiftActiveAuctions;
```

### [Layer 217](https://core.telegram.org/schema?layer=217)

This layer introduces:

-   [Live stories »](/api/group-calls/#live-stories)
-   [Recent story summaries »](/api/stories/#recent-story-summaries)
-   [Methods to delete group call messages and live story comments »](/api/group-calls/#in-call-messages)
-   [Repeating scheduled messages »](/api/scheduled-messages/#repeating-scheduled-messages)
-   [Privacy settings for the music tab on profiles »](/api/profile/#music)
-   [Anonymous group admins »](/api/rights/#anonymous-admins) can now [toggle items in checklists »](/api/todo/#mark-items-as-completed)
-   [Suggestions to setup a login email »](/api/auth/#email-verification)

#### API constants

##### Suggested actions

[Basic suggestion identifiers »](/api/config/#basic-suggestions)

-   Added [`SETUP_LOGIN_EMAIL` »](/api/config/#setup-login-email)
-   Added [`SETUP_LOGIN_EMAIL_NOSKIP` »](/api/config/#setup-login-email-noskip)

#### [Schema](/schema/) changes

##### New Methods

-   Added [stories.startLive](/method/stories.startLive/) - Start a live story, optionally using RTMP livestream mode, see [here »](/api/group-calls/#live-stories) for the full flow.
-   Added [phone.deleteGroupCallMessages](/method/phone.deleteGroupCallMessages/) - Delete specific messages from the [in-call message overlay »](/api/group-calls/#in-call-messages) of a video chat/livestream or live story, including in RTMP mode.
-   Added [phone.deleteGroupCallParticipantMessages](/method/phone.deleteGroupCallParticipantMessages/) - As an admin, delete all messages from a specific participant in the [in-call message overlay »](/api/group-calls/#in-call-messages) of a video chat/livestream or live story, including in RTMP mode.
-   Added [phone.getGroupCallStars](/method/phone.getGroupCallStars/) - Fetch a live story's total donations and top donors, see [paid live story donations »](/api/group-calls/#paid-live-story-donations).
-   Added [phone.saveDefaultSendAs](/method/phone.saveDefaultSendAs/) - Save the default peer displayed as the author of live story comments and reactions, see [in-call messages »](/api/group-calls/#in-call-messages).

##### Changed Methods

-   Added **schedule\_repeat\_period** parameter in [messages.sendMessage](/method/messages.sendMessage/)
-   Added **schedule\_repeat\_period** parameter in [messages.sendMedia](/method/messages.sendMedia/)
-   Added **schedule\_repeat\_period** parameter in [messages.forwardMessages](/method/messages.forwardMessages/)
-   Added **schedule\_repeat\_period** parameter in [messages.editMessage](/method/messages.editMessage/)
-   Added **send\_paid\_messages\_stars** parameter in [phone.toggleGroupCallSettings](/method/phone.toggleGroupCallSettings/)
-   Added **for\_live\_stories** parameter in [channels.getSendAs](/method/channels.getSendAs/)
-   Added **flags**, **live\_story** parameters in [phone.getGroupCallStreamRtmpUrl](/method/phone.getGroupCallStreamRtmpUrl/)
-   Changed type of [stories.getPeerMaxIDs](/method/stories.getPeerMaxIDs/) from **Vector&lt;int>** to **Vector&lt;RecentStory>**
-   Changed type of [phone.sendGroupCallMessage](/method/phone.sendGroupCallMessage/) from **Bool** to **Updates**
-   Added **flags**, **allow\_paid\_stars**, **send\_as** parameters in [phone.sendGroupCallMessage](/method/phone.sendGroupCallMessage/)

##### New Constructors

-   Added [messageMediaVideoStream](/constructor/messageMediaVideoStream/) - Identifies the active group call associated with a [live story »](/api/group-calls/#live-stories).
-   Added [updateDeleteGroupCallMessages](/constructor/updateDeleteGroupCallMessages/) - Indicates that messages were deleted from the [in-call message overlay »](/api/group-calls/#in-call-messages) of a video chat/livestream or live story, including in RTMP mode.
-   Added [groupCallMessage](/constructor/groupCallMessage/) - Represents an [in-call message »](/api/group-calls/#in-call-messages), emoji reaction, paid live story comment or standalone paid live story donation.
-   Added [inputPrivacyKeySavedMusic](/constructor/inputPrivacyKeySavedMusic/) - Whether the user can see the [songs we pinned to our profile »](/api/profile/#music).
-   Added [privacyKeySavedMusic](/constructor/privacyKeySavedMusic/) - Whether the user can see the [songs we pinned to our profile »](/api/profile/#music).
-   Added [groupCallDonor](/constructor/groupCallDonor/) - Describes a live story donor in the [donation leaderboard »](/api/group-calls/#paid-live-story-donations).
-   Added [phone.groupCallStars](/constructor/phone.groupCallStars/) - Contains a live story's total donations and top donors, see [paid live story donations »](/api/group-calls/#paid-live-story-donations).
-   Added [recentStory](/constructor/recentStory/) - Summary of a peer's [active stories »](/api/stories/#recent-story-summaries), embedded in [user](/constructor/user/).`stories_max_id` and [channel](/constructor/channel/).`stories_max_id` and returned by [stories.getPeerMaxIDs](/method/stories.getPeerMaxIDs/).

##### Changed Constructors

-   Added **schedule\_repeat\_period** parameter in [message](/constructor/message/)
-   Changed type of **stories\_max\_id** from **flags2.5?int** to **flags2.5?RecentStory** in [user](/constructor/user/)
-   Changed type of **stories\_max\_id** from **flags2.4?int** to **flags2.4?RecentStory** in [channel](/constructor/channel/)
-   Added **send\_paid\_messages\_stars**, **default\_send\_as** parameters in [groupCall](/constructor/groupCall/)
-   Added **paid\_stars\_total** parameter in [groupCallParticipant](/constructor/groupCallParticipant/)
-   Added **live\_story**, **peer** parameters, removed **chat\_id** parameter in [updateGroupCall](/constructor/updateGroupCall/)
-   Added **days** parameter, removed **months** parameter in [messageActionGiftPremium](/constructor/messageActionGiftPremium/)
-   Added **live** parameter in [storyItemSkipped](/constructor/storyItemSkipped/)
-   Added **days** parameter, removed **months** parameter in [payments.checkedGiftCode](/constructor/payments.checkedGiftCode/)
-   Added **days** parameter, removed **months** parameter in [messageActionGiftCode](/constructor/messageActionGiftCode/)
-   Added **phonegroup\_message** parameter in [starsTransaction](/constructor/starsTransaction/)
-   Added **disallow\_stargifts\_from\_channels** parameter in [disallowedGiftsSettings](/constructor/disallowedGiftsSettings/)
-   Changed type of **completed\_by** from **long** to **Peer** in [todoCompletion](/constructor/todoCompletion/)
-   Removed **from\_id**, **random\_id** parameters, changed type of **message** from **TextWithEntities** to **GroupCallMessage** in [updateGroupCallMessage](/constructor/updateGroupCallMessage/)

#### [Schema](/schema/)

```
message#b92f76cf flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true post:flags.14?true from_scheduled:flags.18?true legacy:flags.19?true edit_hide:flags.21?true pinned:flags.24?true noforwards:flags.26?true invert_media:flags.27?true flags2:# offline:flags2.1?true video_processing_pending:flags2.4?true paid_suggested_post_stars:flags2.8?true paid_suggested_post_ton:flags2.9?true id:int from_id:flags.8?Peer from_boosts_applied:flags.29?int peer_id:Peer saved_peer_id:flags.28?Peer fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long via_business_bot_id:flags2.0?long reply_to:flags.3?MessageReplyHeader date:int message:string media:flags.9?MessageMedia reply_markup:flags.6?ReplyMarkup entities:flags.7?Vector<MessageEntity> views:flags.10?int forwards:flags.10?int replies:flags.23?MessageReplies edit_date:flags.15?int post_author:flags.16?string grouped_id:flags.17?long reactions:flags.20?MessageReactions restriction_reason:flags.22?Vector<RestrictionReason> ttl_period:flags.25?int quick_reply_shortcut_id:flags.30?int effect:flags2.2?long factcheck:flags2.3?FactCheck report_delivery_until_date:flags2.5?int paid_message_stars:flags2.6?long suggested_post:flags2.7?SuggestedPost schedule_repeat_period:flags2.10?int = Message;
user#31774388 flags:# self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true fake:flags.26?true bot_attach_menu:flags.27?true premium:flags.28?true attach_menu_enabled:flags.29?true flags2:# bot_can_edit:flags2.1?true close_friend:flags2.2?true stories_hidden:flags2.3?true stories_unavailable:flags2.4?true contact_require_premium:flags2.10?true bot_business:flags2.11?true bot_has_main_app:flags2.13?true bot_forum_view:flags2.16?true id:long access_hash:flags.0?long first_name:flags.1?string last_name:flags.2?string username:flags.3?string phone:flags.4?string photo:flags.5?UserProfilePhoto status:flags.6?UserStatus bot_info_version:flags.14?int restriction_reason:flags.18?Vector<RestrictionReason> bot_inline_placeholder:flags.19?string lang_code:flags.22?string emoji_status:flags.30?EmojiStatus usernames:flags2.0?Vector<Username> stories_max_id:flags2.5?RecentStory color:flags2.8?PeerColor profile_color:flags2.9?PeerColor bot_active_users:flags2.12?int bot_verification_icon:flags2.14?long send_paid_messages_stars:flags2.15?long = User;
channel#1c32b11c flags:# creator:flags.0?true left:flags.2?true broadcast:flags.5?true verified:flags.7?true megagroup:flags.8?true restricted:flags.9?true signatures:flags.11?true min:flags.12?true scam:flags.19?true has_link:flags.20?true has_geo:flags.21?true slowmode_enabled:flags.22?true call_active:flags.23?true call_not_empty:flags.24?true fake:flags.25?true gigagroup:flags.26?true noforwards:flags.27?true join_to_send:flags.28?true join_request:flags.29?true forum:flags.30?true flags2:# stories_hidden:flags2.1?true stories_hidden_min:flags2.2?true stories_unavailable:flags2.3?true signature_profiles:flags2.12?true autotranslation:flags2.15?true broadcast_messages_allowed:flags2.16?true monoforum:flags2.17?true forum_tabs:flags2.19?true id:long access_hash:flags.13?long title:string username:flags.6?string photo:ChatPhoto date:int restriction_reason:flags.9?Vector<RestrictionReason> admin_rights:flags.14?ChatAdminRights banned_rights:flags.15?ChatBannedRights default_banned_rights:flags.18?ChatBannedRights participants_count:flags.17?int usernames:flags2.0?Vector<Username> stories_max_id:flags2.4?RecentStory color:flags2.7?PeerColor profile_color:flags2.8?PeerColor emoji_status:flags2.9?EmojiStatus level:flags2.10?int subscription_until_date:flags2.11?int bot_verification_icon:flags2.13?long send_paid_messages_stars:flags2.14?long linked_monoforum_id:flags2.18?long = Chat;
groupCall#efb2b617 flags:# join_muted:flags.1?true can_change_join_muted:flags.2?true join_date_asc:flags.6?true schedule_start_subscribed:flags.8?true can_start_video:flags.9?true record_video_active:flags.11?true rtmp_stream:flags.12?true listeners_hidden:flags.13?true conference:flags.14?true creator:flags.15?true messages_enabled:flags.17?true can_change_messages_enabled:flags.18?true min:flags.19?true id:long access_hash:long participants_count:int title:flags.3?string stream_dc_id:flags.4?int record_start_date:flags.5?int schedule_date:flags.7?int unmuted_video_count:flags.10?int unmuted_video_limit:int version:int invite_link:flags.16?string send_paid_messages_stars:flags.20?long default_send_as:flags.21?Peer = GroupCall;
groupCallParticipant#2a3dc7ac flags:# muted:flags.0?true left:flags.1?true can_self_unmute:flags.2?true just_joined:flags.4?true versioned:flags.5?true min:flags.8?true muted_by_you:flags.9?true volume_by_admin:flags.10?true self:flags.12?true video_joined:flags.15?true peer:Peer date:int active_date:flags.3?int source:int volume:flags.7?int about:flags.11?string raise_hand_rating:flags.13?long video:flags.6?GroupCallParticipantVideo presentation:flags.14?GroupCallParticipantVideo paid_stars_total:flags.16?long = GroupCallParticipant;
updateGroupCall#9d2216e0 flags:# live_story:flags.2?true peer:flags.1?Peer call:GroupCall = Update;
messageActionGiftPremium#48e91302 flags:# currency:string amount:long days:int crypto_currency:flags.0?string crypto_amount:flags.0?long message:flags.1?TextWithEntities = MessageAction;
storyItemSkipped#ffadc913 flags:# close_friends:flags.8?true live:flags.9?true id:int date:int expire_date:int = StoryItem;
payments.checkedGiftCode#eb983f8f flags:# via_giveaway:flags.2?true from_id:flags.4?Peer giveaway_msg_id:flags.3?int to_id:flags.0?long date:int days:int used_date:flags.1?int chats:Vector<Chat> users:Vector<User> = payments.CheckedGiftCode;
messageActionGiftCode#31c48347 flags:# via_giveaway:flags.0?true unclaimed:flags.5?true boost_peer:flags.1?Peer days:int slug:string currency:flags.2?string amount:flags.2?long crypto_currency:flags.3?string crypto_amount:flags.3?long message:flags.4?TextWithEntities = MessageAction;
starsTransaction#13659eb0 flags:# refund:flags.3?true pending:flags.4?true failed:flags.6?true gift:flags.10?true reaction:flags.11?true stargift_upgrade:flags.18?true business_transfer:flags.21?true stargift_resale:flags.22?true posts_search:flags.24?true stargift_prepaid_upgrade:flags.25?true stargift_drop_original_details:flags.26?true phonegroup_message:flags.27?true id:string amount:StarsAmount date:int peer:StarsTransactionPeer title:flags.0?string description:flags.1?string photo:flags.2?WebDocument transaction_date:flags.5?int transaction_url:flags.5?string bot_payload:flags.7?bytes msg_id:flags.8?int extended_media:flags.9?Vector<MessageMedia> subscription_period:flags.12?int giveaway_post_id:flags.13?int stargift:flags.14?StarGift floodskip_number:flags.15?int starref_commission_permille:flags.16?int starref_peer:flags.17?Peer starref_amount:flags.17?StarsAmount paid_messages:flags.19?int premium_gift_months:flags.20?int ads_proceeds_from_date:flags.23?int ads_proceeds_to_date:flags.23?int = StarsTransaction;
disallowedGiftsSettings#71f276c4 flags:# disallow_unlimited_stargifts:flags.0?true disallow_limited_stargifts:flags.1?true disallow_unique_stargifts:flags.2?true disallow_premium_gifts:flags.3?true disallow_stargifts_from_channels:flags.4?true = DisallowedGiftsSettings;
todoCompletion#221bb5e4 id:int completed_by:Peer date:int = TodoCompletion;
updateGroupCallMessage#d8326f0d call:InputGroupCall message:GroupCallMessage = Update;
messageMediaVideoStream#ca5cab89 flags:# rtmp_stream:flags.0?true call:InputGroupCall = MessageMedia;
updateDeleteGroupCallMessages#3e85e92c call:InputGroupCall messages:Vector<int> = Update;
groupCallMessage#1a8afc7e flags:# from_admin:flags.1?true id:int from_id:Peer date:int message:TextWithEntities paid_message_stars:flags.0?long = GroupCallMessage;
inputPrivacyKeySavedMusic#4dbe9226 = InputPrivacyKey;
privacyKeySavedMusic#ff7a571b = PrivacyKey;
groupCallDonor#ee430c85 flags:# top:flags.0?true my:flags.1?true peer_id:flags.3?Peer stars:long = GroupCallDonor;
phone.groupCallStars#9d1dbd26 total_stars:long top_donors:Vector<GroupCallDonor> chats:Vector<Chat> users:Vector<User> = phone.GroupCallStars;
recentStory#711d692d flags:# live:flags.0?true max_id:flags.1?int = RecentStory;
---functions---
messages.sendMessage#545cd15a flags:# no_webpage:flags.1?true silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;
messages.sendMedia#0330e77f flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo media:InputMedia message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;
messages.forwardMessages#41d41ade flags:# silent:flags.5?true background:flags.6?true with_my_score:flags.8?true drop_author:flags.11?true drop_media_captions:flags.12?true noforwards:flags.14?true allow_paid_floodskip:flags.19?true from_peer:InputPeer id:Vector<int> random_id:Vector<long> to_peer:InputPeer top_msg_id:flags.9?int reply_to:flags.22?InputReplyTo schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut video_timestamp:flags.20?int allow_paid_stars:flags.21?long suggested_post:flags.23?SuggestedPost = Updates;
messages.editMessage#51e842e1 flags:# no_webpage:flags.1?true invert_media:flags.16?true peer:InputPeer id:int message:flags.11?string media:flags.14?InputMedia reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.15?int schedule_repeat_period:flags.18?int quick_reply_shortcut_id:flags.17?int = Updates;
phone.toggleGroupCallSettings#974392f2 flags:# reset_invite_hash:flags.1?true call:InputGroupCall join_muted:flags.0?Bool messages_enabled:flags.2?Bool send_paid_messages_stars:flags.3?long = Updates;
channels.getSendAs#e785a43f flags:# for_paid_reactions:flags.0?true for_live_stories:flags.1?true peer:InputPeer = channels.SendAsPeers;
phone.getGroupCallStreamRtmpUrl#5af4c73a flags:# live_story:flags.0?true peer:InputPeer revoke:Bool = phone.GroupCallStreamRtmpUrl;
stories.getPeerMaxIDs#78499170 id:Vector<InputPeer> = Vector<RecentStory>;
phone.sendGroupCallMessage#b1d11410 flags:# call:InputGroupCall random_id:long message:TextWithEntities allow_paid_stars:flags.0?long send_as:flags.1?InputPeer = Updates;
stories.startLive#d069ccde flags:# pinned:flags.2?true noforwards:flags.4?true rtmp_stream:flags.5?true peer:InputPeer caption:flags.0?string entities:flags.1?Vector<MessageEntity> privacy_rules:Vector<InputPrivacyRule> random_id:long messages_enabled:flags.6?Bool send_paid_messages_stars:flags.7?long = Updates;
phone.deleteGroupCallMessages#f64f54f7 flags:# report_spam:flags.0?true call:InputGroupCall messages:Vector<int> = Updates;
phone.deleteGroupCallParticipantMessages#1dbfeca0 flags:# report_spam:flags.0?true call:InputGroupCall participant:InputPeer = Updates;
phone.getGroupCallStars#6f636302 call:InputGroupCall = phone.GroupCallStars;
phone.saveDefaultSendAs#4167add1 call:InputGroupCall send_as:InputPeer = Bool;
```

### [Layer 216](https://core.telegram.org/schema?layer=216)

This layer introduces the following new features:

-   [Bot forums »](/api/forum/#bot-forums)
-   [Private contact notes »](/api/contacts/#private-notes-for-contacts)
-   [Suggested birthdays »](/api/profile/#birthday)
-   [Collectible gifts can now have associated message color palettes »](/api/colors/#collectible-message-palettes)
-   [Live bot response streaming »](/api/bots/ai/#live-response-streaming).
-   [Hosted collectible gifts: linking a collectible gift on the TON blockchain to a Telegram profile »](/api/gifts/#hosted-collectible-gifts)

#### API constants

##### Client configs

[Client configuration keys »](/api/config/#client-configuration).

-   Added [`contact_note_length_limit` »](/api/config/#contact-note-length-limit)
-   Added [`group_call_message_length_limit` »](/api/config/#group-call-message-length-limit)
-   Added [`group_call_message_ttl` »](/api/config/#group-call-message-ttl)
-   Added [`message_typing_draft_ttl` »](/api/config/#message-typing-draft-ttl)

#### [Schema](/schema/) changes

##### New Methods

-   Added [messages.getForumTopics](/method/messages.getForumTopics/) - Get [topics of a forum](/api/forum/)
-   Added [messages.getForumTopicsByID](/method/messages.getForumTopicsByID/) - Get forum topics by their ID
-   Added [messages.editForumTopic](/method/messages.editForumTopic/) - Edit [forum topic](/api/forum/).
-   Added [messages.updatePinnedForumTopic](/method/messages.updatePinnedForumTopic/) - Pin or unpin [forum topics](/api/forum/)
-   Added [messages.reorderPinnedForumTopics](/method/messages.reorderPinnedForumTopics/) - Reorder pinned forum topics
-   Added [messages.createForumTopic](/method/messages.createForumTopic/) - Create a [forum topic](/api/forum/).
-   Added [messages.deleteTopicHistory](/method/messages.deleteTopicHistory/) - Delete message history of a [forum topic](/api/forum/)
-   Added [phone.sendGroupCallMessage](/method/phone.sendGroupCallMessage/) - Send an in-call message to all participants of a video chat/livestream or live story, including in RTMP mode, see [here »](/api/group-calls/#in-call-messages) for more info.
-   Added [phone.sendGroupCallEncryptedMessage](/method/phone.sendGroupCallEncryptedMessage/) - Send an E2E-encrypted message or emoji reaction to all participants of a conference call. This method can only be used with conferences; see [here »](/api/end-to-end/group-calls/#conference-in-call-messages) for the serialization and encryption process.
-   Added [contacts.updateContactNote](/method/contacts.updateContactNote/) - Update the private note associated to a contact; see [here »](/api/contacts/#private-notes-for-contacts) for more info.
-   Added [users.suggestBirthday](/method/users.suggestBirthday/) - Suggest a birthday to another user, see [here »](/api/profile/#birthday) for more info on birthdays in the API.

##### Changed Methods

-   Added **note** parameter in [contacts.addContact](/method/contacts.addContact/)
-   Added **messages\_enabled** parameter in [phone.toggleGroupCallSettings](/method/phone.toggleGroupCallSettings/)
-   Removed **background\_emoji\_id** parameter, changed type of **color** from **flags.2?int** to **flags.2?PeerColor** in [account.updateColor](/method/account.updateColor/)
-   Added **peer\_color\_available**, **exclude\_hosted** parameters in [payments.getSavedStarGifts](/method/payments.getSavedStarGifts/)

##### Deleted Methods

-   Removed channels.createForumTopic
-   Removed channels.getForumTopics
-   Removed channels.getForumTopicsByID
-   Removed channels.editForumTopic
-   Removed channels.updatePinnedForumTopic
-   Removed channels.deleteTopicHistory
-   Removed channels.reorderPinnedForumTopics

##### New Constructors

-   Added [sendMessageTextDraftAction](/constructor/sendMessageTextDraftAction/) - Used by bots to implement [live message streaming »](/api/bots/ai/#live-response-streaming).
-   Added [updateGroupCallMessage](/constructor/updateGroupCallMessage/) - A new message, reaction, paid comment or donation was received through the [in-call message overlay »](/api/group-calls/#in-call-messages).
-   Added [updateGroupCallEncryptedMessage](/constructor/updateGroupCallEncryptedMessage/) - A new E2E-encrypted message or emoji reaction was received in a conference call, see [here »](/api/end-to-end/group-calls/#receiving-and-decrypting-a-message) for the decryption process.
-   Added [updatePinnedForumTopic](/constructor/updatePinnedForumTopic/) - A [forum topic »](/api/forum/#forum-topics) was pinned or unpinned.
-   Added [updatePinnedForumTopics](/constructor/updatePinnedForumTopics/) - The [pinned topics](/api/forum/#forum-topics) of a forum have changed.
-   Added [peerColorCollectible](/constructor/peerColorCollectible/) - Represents a [color palette »](/api/colors/) associated to a [collectible gift »](/api/gifts/#collectible-gifts), see [here »](/api/colors/#collectible-gift-palettes) for more info.
-   Added [inputPeerColorCollectible](/constructor/inputPeerColorCollectible/) - Represents a [color palette »](/api/colors/) associated to a [collectible gift »](/api/gifts/#collectible-gifts), see [here »](/api/colors/#collectible-gift-palettes) for more info.
-   Added [messageActionSuggestBirthday](/constructor/messageActionSuggestBirthday/) - A new birthday was suggested using [users.suggestBirthday](/method/users.suggestBirthday/), see [here »](/api/profile/#birthday) for more info on birthdays in the API.

##### Changed Constructors

-   Added **flags**, **note** parameters in [inputPhoneContact](/constructor/inputPhoneContact/)
-   Added **note** parameter in [userFull](/constructor/userFull/)
-   Added **topics** parameter in [messages.messages](/constructor/messages.messages/)
-   Added **topics** parameter in [messages.messagesSlice](/constructor/messages.messagesSlice/)
-   Added **flags**, **top\_msg\_id** parameters in [updateUserTyping](/constructor/updateUserTyping/)
-   Added **top\_msg\_id** parameter in [updateReadHistoryInbox](/constructor/updateReadHistoryInbox/)
-   Added **bot\_forum\_view** parameter in [user](/constructor/user/)
-   Added **messages\_enabled**, **can\_change\_messages\_enabled**, **min** parameters in [groupCall](/constructor/groupCall/)
-   Added **title\_missing**, **peer** parameters in [forumTopic](/constructor/forumTopic/)
-   Added **title\_missing** parameter in [messageActionTopicCreate](/constructor/messageActionTopicCreate/)
-   Added **peer\_color\_available** parameter in [starGift](/constructor/starGift/)
-   Added **peer\_color**, **host\_id** parameters in [starGiftUnique](/constructor/starGiftUnique/)
-   Added **assigned** parameter in [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/)

##### Deleted Constructors

-   Removed updateChannelPinnedTopic
-   Removed updateChannelPinnedTopics

#### PUSH notification changes

##### New PUSH notifications

-   Added [MESSAGE\_SUGGEST\_BIRTHDAY](/api/push-updates/#message-suggest-birthday) - `{1} suggested you your birthday`

#### [Changes in the file reference database map file »](/api/file-references/)

##### New traversers incoming

-   Added
    
    ```
    traverseMethodResult{name: messages.getForumTopics}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.getForumTopicsByID}
    ```
    

##### Deleted Traversers incoming

-   Removed
    
    ```
    traverseMethodResult{name: channels.getForumTopics}
    ```
    
-   Removed
    
    ```
    traverseMethodResult{name: channels.getForumTopicsByID}
    ```
    

#### [End-to-end schema](/schema/end-to-end/) changes

##### New Constructors

-   Added [jsonObjectValue](/constructor/jsonObjectValue/) - JSON key: value pair
-   Added [jsonNull](/constructor/jsonNull/) - null JSON value
-   Added [jsonBool](/constructor/jsonBool/) - JSON boolean value
-   Added [jsonNumber](/constructor/jsonNumber/) - JSON numeric value
-   Added [jsonString](/constructor/jsonString/) - JSON string
-   Added [jsonArray](/constructor/jsonArray/) - JSON array
-   Added [jsonObject](/constructor/jsonObject/) - JSON object value
-   Added [textWithEntities](/constructor/textWithEntities/) - Styled text with [message entities](/api/entities/)
-   Added [groupCallMessage](/constructor/groupCallMessage/) - Represents an [in-call message »](/api/group-calls/#in-call-messages), emoji reaction, paid live story comment or standalone paid live story donation.

#### [End-to-end schema](/schema/end-to-end/)

```
===216===
jsonObjectValue#c0de1bd9 key:string value:JSONValue = JSONObjectValue;
jsonNull#3f6d7b68 = JSONValue;
jsonBool#c7345e6a value:Bool = JSONValue;
jsonNumber#2be0dfa4 value:double = JSONValue;
jsonString#b71e767a value:string = JSONValue;
jsonArray#f7444763 value:Vector<JSONValue> = JSONValue;
jsonObject#99c1d49d value:Vector<JSONObjectValue> = JSONValue;
textWithEntities#751f3146 text:string entities:Vector<MessageEntity> = TextWithEntities;
groupCallMessage#907ce88e random_id:long message:TextWithEntities = GroupCallMessage;
```

#### [Schema](/schema/)

```
inputPhoneContact#6a1dc4be flags:# client_id:long phone:string first_name:string last_name:string note:flags.0?TextWithEntities = InputContact;
userFull#a02bc13e flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true contact_require_premium:flags.29?true read_dates_private:flags.30?true flags2:# sponsored_enabled:flags2.7?true can_view_revenue:flags2.9?true bot_can_manage_emoji_status:flags2.10?true display_gifts_button:flags2.16?true id:long about:flags.1?string settings:PeerSettings personal_photo:flags.21?Photo profile_photo:flags.2?Photo fallback_photo:flags.22?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int ttl_period:flags.14?int theme:flags.15?ChatTheme private_forward_name:flags.16?string bot_group_admin_rights:flags.17?ChatAdminRights bot_broadcast_admin_rights:flags.18?ChatAdminRights wallpaper:flags.24?WallPaper stories:flags.25?PeerStories business_work_hours:flags2.0?BusinessWorkHours business_location:flags2.1?BusinessLocation business_greeting_message:flags2.2?BusinessGreetingMessage business_away_message:flags2.3?BusinessAwayMessage business_intro:flags2.4?BusinessIntro birthday:flags2.5?Birthday personal_channel_id:flags2.6?long personal_channel_message:flags2.6?int stargifts_count:flags2.8?int starref_program:flags2.11?StarRefProgram bot_verification:flags2.12?BotVerification send_paid_messages_stars:flags2.14?long disallowed_gifts:flags2.15?DisallowedGiftsSettings stars_rating:flags2.17?StarsRating stars_my_pending_rating:flags2.18?StarsRating stars_my_pending_rating_date:flags2.18?int main_tab:flags2.20?ProfileTab saved_music:flags2.21?Document note:flags2.22?TextWithEntities = UserFull;
messages.messages#1d73e7ea messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
messages.messagesSlice#5f206716 flags:# inexact:flags.1?true count:int next_rate:flags.0?int offset_id_offset:flags.2?int search_flood:flags.3?SearchPostsFlood messages:Vector<Message> topics:Vector<ForumTopic> chats:Vector<Chat> users:Vector<User> = messages.Messages;
updateUserTyping#2a17bf5c flags:# user_id:long top_msg_id:flags.0?int action:SendMessageAction = Update;
updateReadHistoryInbox#9e84bc99 flags:# folder_id:flags.0?int peer:Peer top_msg_id:flags.1?int max_id:int still_unread_count:int pts:int pts_count:int = Update;
user#020b1422 flags:# self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true fake:flags.26?true bot_attach_menu:flags.27?true premium:flags.28?true attach_menu_enabled:flags.29?true flags2:# bot_can_edit:flags2.1?true close_friend:flags2.2?true stories_hidden:flags2.3?true stories_unavailable:flags2.4?true contact_require_premium:flags2.10?true bot_business:flags2.11?true bot_has_main_app:flags2.13?true bot_forum_view:flags2.16?true id:long access_hash:flags.0?long first_name:flags.1?string last_name:flags.2?string username:flags.3?string phone:flags.4?string photo:flags.5?UserProfilePhoto status:flags.6?UserStatus bot_info_version:flags.14?int restriction_reason:flags.18?Vector<RestrictionReason> bot_inline_placeholder:flags.19?string lang_code:flags.22?string emoji_status:flags.30?EmojiStatus usernames:flags2.0?Vector<Username> stories_max_id:flags2.5?int color:flags2.8?PeerColor profile_color:flags2.9?PeerColor bot_active_users:flags2.12?int bot_verification_icon:flags2.14?long send_paid_messages_stars:flags2.15?long = User;
groupCall#553b0ba1 flags:# join_muted:flags.1?true can_change_join_muted:flags.2?true join_date_asc:flags.6?true schedule_start_subscribed:flags.8?true can_start_video:flags.9?true record_video_active:flags.11?true rtmp_stream:flags.12?true listeners_hidden:flags.13?true conference:flags.14?true creator:flags.15?true messages_enabled:flags.17?true can_change_messages_enabled:flags.18?true min:flags.19?true id:long access_hash:long participants_count:int title:flags.3?string stream_dc_id:flags.4?int record_start_date:flags.5?int schedule_date:flags.7?int unmuted_video_count:flags.10?int unmuted_video_limit:int version:int invite_link:flags.16?string = GroupCall;
forumTopic#cdff0eca flags:# my:flags.1?true closed:flags.2?true pinned:flags.3?true short:flags.5?true hidden:flags.6?true title_missing:flags.7?true id:int date:int peer:Peer title:string icon_color:int icon_emoji_id:flags.0?long top_message:int read_inbox_max_id:int read_outbox_max_id:int unread_count:int unread_mentions_count:int unread_reactions_count:int from_id:Peer notify_settings:PeerNotifySettings draft:flags.4?DraftMessage = ForumTopic;
messageActionTopicCreate#0d999256 flags:# title_missing:flags.1?true title:string icon_color:int icon_emoji_id:flags.0?long = MessageAction;
starGift#80ac53c3 flags:# limited:flags.0?true sold_out:flags.1?true birthday:flags.2?true require_premium:flags.7?true limited_per_user:flags.8?true peer_color_available:flags.10?true id:long sticker:Document stars:long availability_remains:flags.0?int availability_total:flags.0?int availability_resale:flags.4?long convert_stars:long first_sale_date:flags.1?int last_sale_date:flags.1?int upgrade_stars:flags.3?long resell_min_stars:flags.4?long title:flags.5?string released_by:flags.6?Peer per_user_total:flags.8?int per_user_remains:flags.8?int locked_until_date:flags.9?int = StarGift;
starGiftUnique#b0bf741b flags:# require_premium:flags.6?true resale_ton_only:flags.7?true theme_available:flags.9?true id:long gift_id:long title:string slug:string num:int owner_id:flags.0?Peer owner_name:flags.1?string owner_address:flags.2?string attributes:Vector<StarGiftAttribute> availability_issued:int availability_total:int gift_address:flags.3?string resell_amount:flags.4?Vector<StarsAmount> released_by:flags.5?Peer value_amount:flags.8?long value_currency:flags.8?string theme_peer:flags.10?Peer peer_color:flags.11?PeerColor host_id:flags.12?Peer = StarGift;
messageActionStarGiftUnique#95728543 flags:# upgrade:flags.0?true transferred:flags.1?true saved:flags.2?true refunded:flags.5?true prepaid_upgrade:flags.11?true assigned:flags.13?true gift:StarGift can_export_at:flags.3?int transfer_stars:flags.4?long from_id:flags.6?Peer peer:flags.7?Peer saved_id:flags.7?long resale_amount:flags.8?StarsAmount can_transfer_at:flags.9?int can_resell_at:flags.10?int drop_original_details_stars:flags.12?long = MessageAction;
sendMessageTextDraftAction#376d975c random_id:long text:TextWithEntities = SendMessageAction;
updateGroupCallMessage#78c314e0 call:InputGroupCall from_id:Peer random_id:long message:TextWithEntities = Update;
updateGroupCallEncryptedMessage#c957a766 call:InputGroupCall from_id:Peer encrypted_message:bytes = Update;
updatePinnedForumTopic#683b2c52 flags:# pinned:flags.0?true peer:Peer topic_id:int = Update;
updatePinnedForumTopics#def143d0 flags:# peer:Peer order:flags.0?Vector<int> = Update;
peerColorCollectible#b9c0639a flags:# collectible_id:long gift_emoji_id:long background_emoji_id:long accent_color:int colors:Vector<int> dark_accent_color:flags.0?int dark_colors:flags.1?Vector<int> = PeerColor;
inputPeerColorCollectible#b8ea86a9 collectible_id:long = PeerColor;
messageActionSuggestBirthday#2c8f2a25 birthday:Birthday = MessageAction;
---functions---
contacts.addContact#d9ba2e54 flags:# add_phone_privacy_exception:flags.0?true id:InputUser first_name:string last_name:string phone:string note:flags.1?TextWithEntities = Updates;
phone.toggleGroupCallSettings#e9723804 flags:# reset_invite_hash:flags.1?true call:InputGroupCall join_muted:flags.0?Bool messages_enabled:flags.2?Bool = Updates;
account.updateColor#684d214e flags:# for_profile:flags.1?true color:flags.2?PeerColor = Bool;
payments.getSavedStarGifts#a319e569 flags:# exclude_unsaved:flags.0?true exclude_saved:flags.1?true exclude_unlimited:flags.2?true exclude_unique:flags.4?true sort_by_value:flags.5?true exclude_upgradable:flags.7?true exclude_unupgradable:flags.8?true peer_color_available:flags.9?true exclude_hosted:flags.10?true peer:InputPeer collection_id:flags.6?int offset:string limit:int = payments.SavedStarGifts;
messages.getForumTopics#3ba47bff flags:# peer:InputPeer q:flags.0?string offset_date:int offset_id:int offset_topic:int limit:int = messages.ForumTopics;
messages.getForumTopicsByID#af0a4a08 peer:InputPeer topics:Vector<int> = messages.ForumTopics;
messages.editForumTopic#cecc1134 flags:# peer:InputPeer topic_id:int title:flags.0?string icon_emoji_id:flags.1?long closed:flags.2?Bool hidden:flags.3?Bool = Updates;
messages.updatePinnedForumTopic#175df251 peer:InputPeer topic_id:int pinned:Bool = Updates;
messages.reorderPinnedForumTopics#0e7841f0 flags:# force:flags.0?true peer:InputPeer order:Vector<int> = Updates;
messages.createForumTopic#2f98c3d5 flags:# title_missing:flags.4?true peer:InputPeer title:string icon_color:flags.0?int icon_emoji_id:flags.3?long random_id:long send_as:flags.2?InputPeer = Updates;
messages.deleteTopicHistory#d2816f10 peer:InputPeer top_msg_id:int = messages.AffectedHistory;
phone.sendGroupCallMessage#87893014 call:InputGroupCall random_id:long message:TextWithEntities = Bool;
phone.sendGroupCallEncryptedMessage#e5afa56d call:InputGroupCall encrypted_message:bytes = Bool;
contacts.updateContactNote#139f63fb id:InputUser note:TextWithEntities = Bool;
users.suggestBirthday#fc533372 id:InputUser birthday:Birthday = Updates;
```

### [Layer 215](https://core.telegram.org/schema?layer=215)

This layer introduces the following new features and improvements:

-   [Allow removing the starGiftAttributeOriginalDetails from an owned gift »](/api/gifts/#dropping-the-original-details-of-an-upgraded-gift).
-   [payments.starGiftUpgradePreview](/constructor/payments.starGiftUpgradePreview/) now returns a list of future [gift upgrade](/api/gifts/#collectible-gifts) prices in **prices** and **next\_prices**.
-   Improved pagination for [account.getUniqueGiftChatThemes](/method/account.getUniqueGiftChatThemes/), also added a note indicating that the method may return less than `limit` results, even if the actual number of remaining results is `>= limit`, pagination should be used to fetch them all.

#### [Schema](/schema/) changes

##### New Methods

-   Added [auth.checkPaidAuth](/method/auth.checkPaidAuth/) - Checks the status of a [login payment](/api/auth/#paid-auth).

##### Changed Methods

-   Changed type of **offset** from **int** to **string** in [account.getUniqueGiftChatThemes](/method/account.getUniqueGiftChatThemes/)

##### New Constructors

-   Added [inputInvoicePremiumAuthCode](/constructor/inputInvoicePremiumAuthCode/) - Used to pay for login codes, in case of high cost of SMS verification codes for the user's country/provider, see [here »](/api/auth/#paid-auth) for more info.
-   Added [inputInvoiceStarGiftDropOriginalDetails](/constructor/inputInvoiceStarGiftDropOriginalDetails/) - Used to pay for for the removal of the [starGiftAttributeOriginalDetails](/constructor/starGiftAttributeOriginalDetails/) attribute from a collectible gift, see [here »](/api/gifts/#dropping-the-original-details-of-an-upgraded-gift) for the full flow.
-   Added [starGiftUpgradePrice](/constructor/starGiftUpgradePrice/) - Indicates the price for a [gift upgrade »](/api/gifts/#collectible-gifts) starting from a specific point in time.

##### Changed Constructors

-   Changed type of **next\_offset** from **flags.0?int** to **flags.0?string** in [account.chatThemes](/constructor/account.chatThemes/)
-   Added **stargift\_drop\_original\_details** parameter in [starsTransaction](/constructor/starsTransaction/)
-   Added **drop\_original\_details\_stars** parameter in [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/)
-   Added **prices**, **next\_prices** parameters in [payments.starGiftUpgradePreview](/constructor/payments.starGiftUpgradePreview/)
-   Added **drop\_original\_details\_stars** parameter in [savedStarGift](/constructor/savedStarGift/)
-   Added **currency**, **amount** parameters in [auth.sentCodePaymentRequired](/constructor/auth.sentCodePaymentRequired/)

#### [Schema](/schema/)

```
account.chatThemes#be098173 flags:# hash:long themes:Vector<ChatTheme> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?string = account.ChatThemes;
starsTransaction#13659eb0 flags:# refund:flags.3?true pending:flags.4?true failed:flags.6?true gift:flags.10?true reaction:flags.11?true stargift_upgrade:flags.18?true business_transfer:flags.21?true stargift_resale:flags.22?true posts_search:flags.24?true stargift_prepaid_upgrade:flags.25?true stargift_drop_original_details:flags.26?true id:string amount:StarsAmount date:int peer:StarsTransactionPeer title:flags.0?string description:flags.1?string photo:flags.2?WebDocument transaction_date:flags.5?int transaction_url:flags.5?string bot_payload:flags.7?bytes msg_id:flags.8?int extended_media:flags.9?Vector<MessageMedia> subscription_period:flags.12?int giveaway_post_id:flags.13?int stargift:flags.14?StarGift floodskip_number:flags.15?int starref_commission_permille:flags.16?int starref_peer:flags.17?Peer starref_amount:flags.17?StarsAmount paid_messages:flags.19?int premium_gift_months:flags.20?int ads_proceeds_from_date:flags.23?int ads_proceeds_to_date:flags.23?int = StarsTransaction;
messageActionStarGiftUnique#95728543 flags:# upgrade:flags.0?true transferred:flags.1?true saved:flags.2?true refunded:flags.5?true prepaid_upgrade:flags.11?true gift:StarGift can_export_at:flags.3?int transfer_stars:flags.4?long from_id:flags.6?Peer peer:flags.7?Peer saved_id:flags.7?long resale_amount:flags.8?StarsAmount can_transfer_at:flags.9?int can_resell_at:flags.10?int drop_original_details_stars:flags.12?long = MessageAction;
payments.starGiftUpgradePreview#3de1dfed sample_attributes:Vector<StarGiftAttribute> prices:Vector<StarGiftUpgradePrice> next_prices:Vector<StarGiftUpgradePrice> = payments.StarGiftUpgradePreview;
savedStarGift#8983a452 flags:# name_hidden:flags.0?true unsaved:flags.5?true refunded:flags.9?true can_upgrade:flags.10?true pinned_to_top:flags.12?true upgrade_separate:flags.17?true from_id:flags.1?Peer date:int gift:StarGift message:flags.2?TextWithEntities msg_id:flags.3?int saved_id:flags.11?long convert_stars:flags.4?long upgrade_stars:flags.6?long can_export_at:flags.7?int transfer_stars:flags.8?long can_transfer_at:flags.13?int can_resell_at:flags.14?int collection_id:flags.15?Vector<int> prepaid_upgrade_hash:flags.16?string drop_original_details_stars:flags.18?long = SavedStarGift;
auth.sentCodePaymentRequired#e0955a3c store_product:string phone_code_hash:string support_email_address:string support_email_subject:string currency:string amount:long = auth.SentCode;
inputInvoicePremiumAuthCode#3e77f614 purpose:InputStorePaymentPurpose = InputInvoice;
inputInvoiceStarGiftDropOriginalDetails#0923d8d1 stargift:InputSavedStarGift = InputInvoice;
starGiftUpgradePrice#99ea331d date:int upgrade_stars:long = StarGiftUpgradePrice;
---functions---
account.getUniqueGiftChatThemes#e42ce9c9 offset:string limit:int hash:long = account.ChatThemes;
auth.checkPaidAuth#56e59f9c phone_number:string phone_code_hash:string form_id:long = auth.SentCode;
```

### [Layer 214](https://core.telegram.org/schema?layer=214)

To view all changes since the last documentation refresh, start reading at [layer 196](#layer-196). This documentation refresh _also_ brings the following changes:

-   [A brand new file reference database map file »](/api/file-references/): can be used to automatically codegen a fully functional file reference database, see [here »](/api/file-references/) for more info.
    
    -   The map file generator is open source, and is specifically designed to be easy to run on newer, even experimental layers, see [here for more info »](/api/file-reference-generator/).
    -   Layer diffs will now list changes to the file reference map file as well.
-   [The RPC error database was updated »](/api/errors/), and it now has the following extra fields:
    
    -   `business_supported` - Contains the full list of methods that can be used by bots over a [business connection with invokeWithBusinessConnection](/api/bots/connected-business-bots/).
    -   `unauthed_allowed` - Contains the full list of methods that can be used by not yet logged in connections.
-   All methods in the documentation now explicitly state if they can be used by bots, users or both, and if they can be used over a business connection or over an unauthorized connection.
    
-   Updated the list of methods that can be used over a [business connection](/api/bots/connected-business-bots/)
    
    -   [stories.sendStory](/method/stories.sendStory/) and [stories.editStory](/method/stories.editStory/) can also be used to post and edit stories on behalf of a connected business account: in this case, simply pass the business account's peer in `peer`, _without_ wrapping the request in an [invokeWithBusinessConnection »](/method/invokeWithBusinessConnection/) query.  
        Note that [stories.editStory](/method/stories.editStory/) can only be used to edit stories posted by the same business bot on behalf of the user.
-   Updated the list of methods that can be used over an [unauthed connection](/api/auth/#we-are-authorized)
    
-   The [documentation for the profile page was also reorganized, to include the full list of profile tabs to show, along with instructions on how to populate them »](/api/profile/).
    
-   [Corrected hash generation instructions for messages.getScheduledHistory, the correct order is id, edit\_date, date; not id, date, edit\_date »](/method/messages.getScheduledHistory/)
    
-   Added documentation on [frozen accounts »](/api/auth/#frozen-accounts)
    
-   [Added a new client configuration key for the maximum number of allowed quiz poll answers](/api/config/#poll-answers-max)
    
-   [Added a new client configuration key for the maximum amount of Telegram Stars that can be withdrawn from a channel or bot's balance »](/api/config/#stars-revenue-withdrawal-max)
    
-   [Added support for age verification, if required by the current country's legislation »](/api/age-verification/).
    
-   Added device storage and secure storage APIs for [mini apps](/api/bots/webapps/), using the following events:
    
    -   [web\_app\_device\_storage\_save\_key](/api/web-events/#web-app-device-storage-save-key) - Save or remove a value from the device's local storage associated with this user and mini app
    -   [web\_app\_device\_storage\_get\_key](/api/web-events/#web-app-device-storage-get-key) - Get a value from the device's local storage associated with this user and mini app
    -   [web\_app\_device\_storage\_clear](/api/web-events/#web-app-device-storage-clear) - Clear the device's local storage associated with this user and mini app
    -   [web\_app\_secure\_storage\_save\_key](/api/web-events/#web-app-secure-storage-save-key) - Save or remove a value from the device's secure storage associated with this user and mini app
    -   [web\_app\_secure\_storage\_get\_key](/api/web-events/#web-app-secure-storage-get-key) - Get a value from the device's secure storage associated with this user and mini app
    -   [web\_app\_secure\_storage\_restore\_key](/api/web-events/#web-app-secure-storage-restore-key) - Restore a value to the device's secure storage associated with this user and mini app
    -   [web\_app\_secure\_storage\_clear](/api/web-events/#web-app-secure-storage-clear) - Clear the device's secure storage associated with this user and mini app
-   Add support for the new `manage_direct_messages` [admin right](/constructor/chatAdminRights/) in [group/channel bot links](/api/links/#group-channel-bot-links).
    
-   Updated the documentation for bot API dialog IDs to include support for the new monoforum ID range, see [here »](/api/bots/ids/#monoforum-ids) for more info.
    
    -   Specifically, the bot API dialog ID new ranges from `-4000000000000` to `1099511627775` (previously the range was `-2002147483648` to `1099511627775`).
    -   The transformed range for bot API monoforum dialog IDs is `-2002147483649` to `-4000000000000` inclusively.
-   Push notifications can now have a custom `report_delivery_until_date` parameter for [Telegram Gateway verification messages](https://telegram.org/blog/star-messages-gateway-2-0-and-more#save-even-more-on-user-verification): if set, the message is a Telegram Gateway verification code, and [messages.reportMessagesDelivery](/method/messages.reportMessagesDelivery/) should be invoked with the `push` flag set.
    
-   Added a correction to the [paid reactions documentation »](/api/reactions/#paid-reactions): the `random_id` argument of [messages.sendPaidReaction](/method/messages.sendPaidReaction/) **must** be composed of a 64-bit integer where the lower 32 bits are random, and the higher 32 bits **are equal to the current unixtime**, i.e. `uint64_t random_id = (time() << 32) | ((uint64_t)random_uint32_t())`: this differs from the `random_id` format of all other methods in the API, which just take 64 random bits.
    
-   Clarified that adding a new recent reaction should trigger modification of the cached list and regeneration of the hash with a custom algorithm, see [here »](/api/reactions/#recent-reactions) for more info.
    
-   Clarified that modifying saved message tags should trigger modification of the cached list and regeneration of the hash with a custom algorithm, see [here »](/api/saved-messages/#tags) for more info.
    
-   The [webpage type list »](/constructor/webPage/) was updated.
    
-   [Clarified](/api/invoking/) that in some cases such as updates from big channels, the API may return constructors from older layers, different from the connection's current layer.  
    Clients should treat this as a `500` server error, and handle it by closing and reopening the TCP socket, re-reinitializing the session with [initConnection](/method/initConnection/) and invoking [getDifference](/api/updates/).
    
-   A whole bunch of new features and articles, [start reading at layer 196](#layer-196) to view them all. And here are the changes in this layer:
    
-   [Set a collectible gift as chat theme »](/api/themes/#chat-themes)
    
-   Allow sending an email to Telegram's support team when getting [auth.sentCodePaymentRequired](/constructor/auth.sentCodePaymentRequired/) during login (official clients only).
    

#### [Schema](/schema/) changes

##### New Methods

-   Added [account.getUniqueGiftChatThemes](/method/account.getUniqueGiftChatThemes/) - Obtain all [chat themes »](/api/themes/#chat-themes) associated to owned or [hosted collectible gifts »](/api/gifts/#hosted-collectible-gifts).

##### Changed Methods

-   Added **theme** parameter, removed **emoticon** parameter in [messages.setChatTheme](/method/messages.setChatTheme/)

##### New Constructors

-   Added [chatTheme](/constructor/chatTheme/) - A chat theme
-   Added [chatThemeUniqueGift](/constructor/chatThemeUniqueGift/) - A chat theme based on a [collectible gift »](/api/gifts/#collectible-gifts).
-   Added [account.chatThemesNotModified](/constructor/account.chatThemesNotModified/) - The available chat themes were not modified
-   Added [account.chatThemes](/constructor/account.chatThemes/) - Available [chat themes](/api/themes/#chat-themes)
-   Added [inputChatThemeEmpty](/constructor/inputChatThemeEmpty/) - Remove any currently configured theme.
-   Added [inputChatTheme](/constructor/inputChatTheme/) - Set an emoji-based chat theme, returned by [account.getChatThemes](/method/account.getChatThemes/).
-   Added [inputChatThemeUniqueGift](/constructor/inputChatThemeUniqueGift/) - Set a theme based on an owned or [hosted collectible gift »](/api/gifts/#hosted-collectible-gifts), returned by [account.getUniqueGiftChatThemes](/method/account.getUniqueGiftChatThemes/).

##### Changed Constructors

-   Added **theme** parameter, removed **emoticon** parameter in [messageActionSetChatTheme](/constructor/messageActionSetChatTheme/)
-   Added **support\_email\_address**, **support\_email\_subject** parameters in [auth.sentCodePaymentRequired](/constructor/auth.sentCodePaymentRequired/)
-   Added **theme** parameter, removed **theme\_emoticon** parameter in [userFull](/constructor/userFull/)
-   Added **theme\_available**, **theme\_peer** parameters in [starGiftUnique](/constructor/starGiftUnique/)

#### PUSH notification changes

##### New PUSH notifications

-   Added [MESSAGE\_STARGIFT\_UNPACK\_UPGRADE](/api/push-updates/#message-stargift-unpack-upgrade) - `{1} unpacked the Gift that you helped upgrade`

#### [File reference map file schema »](/api/file-references/) changes

##### New Constructors

-   Added boolFalse - Constructor may be interpreted as a **boolean**`false` value.
-   Added boolTrue - The constructor can be interpreted as a **boolean**`true` value.
-   Added true - See [predefined identifiers](/mtproto/TL-formal/#predefined-identifiers).
-   Added vector - A universal vector constructor.
-   Added fileReferenceMap
-   Added traverseParam
-   Added traverseMethodResult
-   Added traverseIncomingConstructor
-   Added traverseCommitSourceLocation
-   Added predicate
-   Added source
-   Added traverseOutgoingConstructor
-   Added traverseSwapLocation
-   Added traverseMethodCall
-   Added skippedSource
-   Added refreshAction
-   Added paramNotFlag
-   Added paramIsFlagAbortIfEmpty
-   Added paramIsFlagFallback
-   Added paramIsFlagPassthrough
-   Added pathPart
-   Added path
-   Added pathParent
-   Added extractAndStore
-   Added extractInputStickerSetFromDocumentAttributesAndStore
-   Added extractInputStickerSetFromStickerSetAndStore
-   Added extractPeerIdFromPeerAndStore
-   Added extractPeerIdFromInputPeerAndStore
-   Added extractChannelIdFromChannelAndStore
-   Added extractChannelIdFromInputChannelAndStore
-   Added extractUserIdFromUserAndStore
-   Added extractUserIdFromInputUserAndStore
-   Added callOp
-   Added getMessageOp
-   Added typedOpArg
-   Added typedOp
-   Added copyOp
-   Added getInputChannelByIdOp
-   Added getInputUserByIdOp
-   Added getInputPeerByIdOp
-   Added constructorOp
-   Added vectorOp
-   Added intLiteralOp
-   Added longLiteralOp
-   Added stringLiteralOp
-   Added bytesLiteralOp
-   Added boolLiteralOp
-   Added doubleLiteralOp
-   Added themeFormatLiteralOp

#### [File reference map file schema »](/api/file-references/)

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
true#3fedd339 = True;
vector#1cb5c415 {t:Type} # [ t ] = Vector t;
fileReferenceMap#72a99250 layer:int db_schema:string db_schema_json:string traversers_incoming:Vector<TraverserIncoming> traversers_outgoing:Vector<TraverserOutgoing> refresh_actions:Vector<RefreshAction> skipped_incoming_sources:Vector<SkippedSource> = FileReferenceMap;
traverseParam#62161b67 flags:# name:string is_flag:flags.0?true is_vector:flags.1?true type:string = TraverseParam;
traverseMethodResult#fda9f236 name:string push_sources:Vector<Source> is_needed_parent:Bool = TraverserIncoming;
traverseIncomingConstructor#6e4d00b6 type:string predicate:string params:Vector<TraverseParam> push_sources:Vector<Source> is_needed_parent:Bool = TraverserIncoming;
traverseCommitSourceLocation#94cc59c5 type:string predicate:string push_sources:Vector<Source> stored_constructor:string = TraverserIncoming;
predicate#de3bc05a predicate:string is_constructor:Bool = Predicate;
source#4ec4751a flags:# predicate:Predicate stored_constructor:string stored_params:Vector<FieldExtractor> skipped_flags:Vector<string> needs_parent:flags.3?Predicate needs_not_parents:Vector<Predicate> = Source;
traverseOutgoingConstructor#3fc5026d type:string predicate:string params:Vector<TraverseParam> = TraverserOutgoing;
traverseSwapLocation#032bf95d type:string predicate:string stored_constructor:string = TraverserOutgoing;
traverseMethodCall#9244f5bb name:string params:Vector<TraverseParam> = TraverserOutgoing;
skippedSource#2b543f6f predicate:Predicate why:string = SkippedSource;
refreshAction#d4e15689 stored_constructor:string action:ActionOp = RefreshAction;
paramNotFlag#acd9d5cf = ParamFlag;
paramIsFlagAbortIfEmpty#f8fe9fee = ParamFlag;
paramIsFlagFallback#202b77a1 fallback:TypedOp = ParamFlag;
paramIsFlagPassthrough#1dc6e17d = ParamFlag;
pathPart#19a10fbf type:string constructor:string param:string param_type:string flag:ParamFlag = PathPart;
path#0c3586a2 parts:Vector<PathPart> = Path;
pathParent#58f13684 parts:Vector<PathPart> = Path;
extractAndStore#72069549 from:Path to:string = FieldExtractor;
extractInputStickerSetFromDocumentAttributesAndStore#369d8d14 from:Path to:string = FieldExtractor;
extractInputStickerSetFromStickerSetAndStore#c167d470 from:Path to:string = FieldExtractor;
extractPeerIdFromPeerAndStore#7d33019c from:Path to:string = FieldExtractor;
extractPeerIdFromInputPeerAndStore#a51acfb4 from:Path to:string = FieldExtractor;
extractChannelIdFromChannelAndStore#5675bc97 from:Path to:string = FieldExtractor;
extractChannelIdFromInputChannelAndStore#b662660e from:Path to:string = FieldExtractor;
extractUserIdFromUserAndStore#4778ec63 from:Path to:string = FieldExtractor;
extractUserIdFromInputUserAndStore#7720aa2e from:Path to:string = FieldExtractor;
callOp#c2ff3383 method:string args:Vector<TypedOpArg> = ActionOp;
getMessageOp#8da4c2ae peer:TypedOp id:TypedOp quick_reply_shortcut_id:TypedOp = ActionOp;
typedOpArg#3a2930c2 key:string value:TypedOp = TypedOpArg;
typedOp#705b10ec type:string op:TypedOpOp = TypedOp;
copyOp#f48f418f from:string = TypedOpOp;
getInputChannelByIdOp#3cb47531 from:string = TypedOpOp;
getInputUserByIdOp#c0ee4326 from:string = TypedOpOp;
getInputPeerByIdOp#19813750 from:string = TypedOpOp;
constructorOp#107f8d8a constructor:string args:Vector<TypedOpArg> = TypedOpOp;
vectorOp#f8fb8f72 values:Vector<TypedOp> = TypedOpOp;
intLiteralOp#cbfabe7c value:int = TypedOpOp;
longLiteralOp#d08b8d3a value:long = TypedOpOp;
stringLiteralOp#2b56ea8e value:string = TypedOpOp;
bytesLiteralOp#fdb395a4 value:bytes = TypedOpOp;
boolLiteralOp#37e07911 value:Bool = TypedOpOp;
doubleLiteralOp#3651e3bf value:double = TypedOpOp;
themeFormatLiteralOp#8e4f9208 = TypedOpOp;
```

#### [File reference database schema »](/api/file-references/) changes

##### New Constructors

-   Added boolFalse - Constructor may be interpreted as a **boolean**`false` value.
-   Added boolTrue - The constructor can be interpreted as a **boolean**`true` value.
-   Added true - See [predefined identifiers](/mtproto/TL-formal/#predefined-identifiers).
-   Added vector - A universal vector constructor.
-   Added fileIdPhoto
-   Added fileIdDocument
-   Added fileSourceMessage
-   Added fileSourceStarsTransaction
-   Added fileSourceScheduledMessage
-   Added fileSourceStory
-   Added fileSourceWebPage
-   Added fileSourceBotApp
-   Added fileSourceUserFull
-   Added fileSourceAdminLog
-   Added fileSourceStoryAlbum
-   Added fileSourceBotPreviewMedia
-   Added fileSourceBotPreviewInfo
-   Added fileSourcePaidMedia
-   Added fileSourceSavedMusic
-   Added fileSourceChatFull
-   Added fileSourceChannelFull
-   Added fileSourcePremiumPromo
-   Added fileSourceAttachMenuBot
-   Added fileSourceTheme
-   Added fileSourceWallPaper
-   Added fileSourceStickerSet
-   Added fileSourceSavedGifs
-   Added fileSourceSavedRingtones
-   Added fileSourceAvailableEffects
-   Added fileSourceAvailableReactions
-   Added fileSourceUserProfilePhoto
-   Added fileSourceDocumentByHash

#### [File reference database schema »](/api/file-references/)

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
true#3fedd339 = True;
vector#1cb5c415 {t:Type} # [ t ] = Vector t;
fileIdPhoto#47a0bd49 id:long = FileId;
fileIdDocument#461b1d89 id:long = FileId;
fileSourceMessage#b19f4c78 flags:# quick_reply_shortcut_id:flags.0?int peer:long id:int = FileSource;
fileSourceStarsTransaction#c1bac8c7 flags:# peer:long id:string refund:flags.0?true ton:flags.1?true = FileSource;
fileSourceScheduledMessage#9dc1f5f7 peer:long id:int = FileSource;
fileSourceStory#c820e3eb id:int peer:long = FileSource;
fileSourceWebPage#9e5b749c url:string = FileSource;
fileSourceBotApp#01cf8b7a id:long access_hash:long = FileSource;
fileSourceUserFull#70fdb7b0 id:long = FileSource;
fileSourceAdminLog#4797f959 channel:long max_id:long = FileSource;
fileSourceStoryAlbum#5e01f223 peer:long = FileSource;
fileSourceBotPreviewMedia#0aa91441 bot:long = FileSource;
fileSourceBotPreviewInfo#f9d2d6fc bot:long lang_code:string = FileSource;
fileSourcePaidMedia#b18d9042 id:int peer:long = FileSource;
fileSourceSavedMusic#dd1a7664 user_id:long id:long access_hash:long = FileSource;
fileSourceChatFull#9de75fde chat_id:long = FileSource;
fileSourceChannelFull#6fe19339 channel:long = FileSource;
fileSourcePremiumPromo#c907a44f = FileSource;
fileSourceAttachMenuBot#c3002694 bot:long = FileSource;
fileSourceTheme#92d05e0c id:long access_hash:long = FileSource;
fileSourceWallPaper#50dbf2f7 id:long access_hash:long = FileSource;
fileSourceStickerSet#34c73709 stickerset:InputStickerSet = FileSource;
fileSourceSavedGifs#13e78e07 = FileSource;
fileSourceSavedRingtones#2b25ef1b = FileSource;
fileSourceAvailableEffects#eb8578f0 = FileSource;
fileSourceAvailableReactions#0e432388 = FileSource;
fileSourceUserProfilePhoto#e39ee274 user_id:long max_id:long = FileSource;
fileSourceDocumentByHash#0f151e0f sha256:bytes size:long mime_type:string = FileSource;
```

#### [Changes in the file reference database map file »](/api/file-references/)

##### New incoming locations

-   Added
    
    ```
    traverseCommitSourceLocation{predicate: document, stored_constructor: fileIdDocument, push_sources: [fileSourceStickerSet, fileSourceSavedMusic (needs users.getSavedMusic), fileSourceSavedMusic (needs users.getSavedMusicByID)], type: Document}
    ```
    
-   Added
    
    ```
    traverseCommitSourceLocation{predicate: photo, stored_constructor: fileIdPhoto, push_sources: [fileSourceUserProfilePhoto (needs photos.getUserPhotos)], type: Photo}
    ```
    

##### New outgoing locations

-   Added
    
    ```
    traverseSwapLocation{predicate: inputPhoto, stored_constructor: fileIdPhoto, type: InputPhoto}
    ```
    
-   Added
    
    ```
    traverseSwapLocation{predicate: inputDocument, stored_constructor: fileIdDocument, type: InputDocument}
    ```
    
-   Added
    
    ```
    traverseSwapLocation{predicate: inputDocumentFileLocation, stored_constructor: fileIdDocument, type: InputFileLocation}
    ```
    
-   Added
    
    ```
    traverseSwapLocation{predicate: inputPhotoFileLocation, stored_constructor: fileIdPhoto, type: InputFileLocation}
    ```
    

##### New sources

-   Added (1) [document](/constructor/document/) -
    
    ```
    fileSourceStickerSet{stickerset: extractInputStickerSetFromDocumentAttributesAndStore(document.attributes)}
    ```
    
-   Added (2) [document](/constructor/document/) -
    
    ```
    (needs users.getSavedMusic) fileSourceSavedMusic{user_id: extractUserIdFromInputUserAndStore(users.getSavedMusic.id), id: document.id, access_hash: document.access_hash}
    ```
    
-   Added (3) [document](/constructor/document/) -
    
    ```
    (needs users.getSavedMusicByID) fileSourceSavedMusic{user_id: extractUserIdFromInputUserAndStore(users.getSavedMusicByID.id), id: document.id, access_hash: document.access_hash}
    ```
    
-   Added [photo](/constructor/photo/) -
    
    ```
    (needs photos.getUserPhotos) fileSourceUserProfilePhoto{user_id: extractUserIdFromInputUserAndStore(photos.getUserPhotos.user_id), max_id: photo.id}
    ```
    
-   Added [account.savedRingtoneConverted](/constructor/account.savedRingtoneConverted/) -
    
    ```
    fileSourceSavedRingtones{}
    ```
    
-   Added [account.savedRingtones](/constructor/account.savedRingtones/) -
    
    ```
    fileSourceSavedRingtones{}
    ```
    
-   Added [attachMenuBot](/constructor/attachMenuBot/) -
    
    ```
    fileSourceAttachMenuBot{bot: attachMenuBot.bot_id}
    ```
    
-   Added [botApp](/constructor/botApp/) -
    
    ```
    fileSourceBotApp{id: botApp.id, access_hash: botApp.access_hash}
    ```
    
-   Added [botInfo](/constructor/botInfo/) -
    
    ```
    fileSourceUserFull{id: botInfo.user_id?abort_if_empty}
    ```
    
-   Added [channelAdminLogEvent](/constructor/channelAdminLogEvent/) -
    
    ```
    (needs channels.getAdminLog) fileSourceAdminLog{channel: extractChannelIdFromInputChannelAndStore(channels.getAdminLog.channel), max_id: channelAdminLogEvent.id}
    ```
    
-   Added [channelFull](/constructor/channelFull/) -
    
    ```
    fileSourceChannelFull{channel: channelFull.id}
    ```
    
-   Added [chatFull](/constructor/chatFull/) -
    
    ```
    fileSourceChatFull{chat_id: chatFull.id}
    ```
    
-   Added [foundStory](/constructor/foundStory/) -
    
    ```
    fileSourceStory{id: foundStory.story.storyItem.id, peer: extractPeerIdFromPeerAndStore(foundStory.peer)}
    ```
    
-   Added (1) [message](/constructor/message/) -
    
    ```
    (unless messages.getScheduledMessages, updateNewScheduledMessage) fileSourceMessage{quick_reply_shortcut_id: message.quick_reply_shortcut_id?passthrough, peer: extractPeerIdFromPeerAndStore(message.peer_id), id: message.id}
    ```
    
-   Added (2) [message](/constructor/message/) -
    
    ```
    (needs messages.getScheduledMessages) fileSourceScheduledMessage{peer: extractPeerIdFromInputPeerAndStore(messages.getScheduledMessages.peer), id: message.id}
    ```
    
-   Added (3) [message](/constructor/message/) -
    
    ```
    (needs updateNewScheduledMessage) fileSourceScheduledMessage{peer: extractPeerIdFromPeerAndStore(updateNewScheduledMessage.message.message.peer_id), id: message.id}
    ```
    
-   Added [messageMediaStory](/constructor/messageMediaStory/) -
    
    ```
    fileSourceStory{id: messageMediaStory.story?abort_if_empty.storyItem.id, peer: extractPeerIdFromPeerAndStore(messageMediaStory.peer)}
    ```
    
-   Added [messageService](/constructor/messageService/) -
    
    ```
    (unless messages.getScheduledMessages, updateNewScheduledMessage) fileSourceMessage{peer: extractPeerIdFromPeerAndStore(messageService.peer_id), id: messageService.id, quick_reply_shortcut_id: false}
    ```
    
-   Added [messages.availableEffects](/constructor/messages.availableEffects/) -
    
    ```
    fileSourceAvailableEffects{}
    ```
    
-   Added [messages.availableReactions](/constructor/messages.availableReactions/) -
    
    ```
    fileSourceAvailableReactions{}
    ```
    
-   Added [messages.savedGifs](/constructor/messages.savedGifs/) -
    
    ```
    fileSourceSavedGifs{}
    ```
    
-   Added [messages.stickerSet](/constructor/messages.stickerSet/) -
    
    ```
    fileSourceStickerSet{stickerset: extractInputStickerSetFromStickerSetAndStore(messages.stickerSet.set)}
    ```
    
-   Added [publicForwardStory](/constructor/publicForwardStory/) -
    
    ```
    fileSourceStory{id: publicForwardStory.story.storyItem.id, peer: extractPeerIdFromPeerAndStore(publicForwardStory.peer)}
    ```
    
-   Added (1) [starsTransaction](/constructor/starsTransaction/) -
    
    ```
    (needs payments.getStarsStatus) fileSourceStarsTransaction{peer: extractPeerIdFromInputPeerAndStore(payments.getStarsStatus.peer), ton: payments.getStarsStatus.ton?passthrough, id: starsTransaction.id, refund: starsTransaction.refund?passthrough}
    ```
    
-   Added (2) [starsTransaction](/constructor/starsTransaction/) -
    
    ```
    (needs payments.getStarsTransactions) fileSourceStarsTransaction{peer: extractPeerIdFromInputPeerAndStore(payments.getStarsTransactions.peer), ton: payments.getStarsTransactions.ton?passthrough, id: starsTransaction.id, refund: starsTransaction.refund?passthrough}
    ```
    
-   Added (3) [starsTransaction](/constructor/starsTransaction/) -
    
    ```
    (needs payments.getStarsTransactionsByID) fileSourceStarsTransaction{peer: extractPeerIdFromInputPeerAndStore(payments.getStarsTransactionsByID.peer), ton: payments.getStarsTransactionsByID.ton?passthrough, id: starsTransaction.id, refund: starsTransaction.refund?passthrough}
    ```
    
-   Added (4) [starsTransaction](/constructor/starsTransaction/) -
    
    ```
    (needs payments.getStarsSubscriptions) fileSourceStarsTransaction{peer: extractPeerIdFromInputPeerAndStore(payments.getStarsSubscriptions.peer), id: starsTransaction.id, refund: starsTransaction.refund?passthrough, ton: false}
    ```
    
-   Added [stickerSetFullCovered](/constructor/stickerSetFullCovered/) -
    
    ```
    fileSourceStickerSet{stickerset: extractInputStickerSetFromStickerSetAndStore(stickerSetFullCovered.set)}
    ```
    
-   Added [stickerSetMultiCovered](/constructor/stickerSetMultiCovered/) -
    
    ```
    fileSourceStickerSet{stickerset: extractInputStickerSetFromStickerSetAndStore(stickerSetMultiCovered.set)}
    ```
    
-   Added (1) [storyItem](/constructor/storyItem/) -
    
    ```
    (needs stories.getPinnedStories) fileSourceStory{id: storyItem.id, peer: extractPeerIdFromInputPeerAndStore(stories.getPinnedStories.peer)}
    ```
    
-   Added (2) [storyItem](/constructor/storyItem/) -
    
    ```
    (needs stories.getStoriesArchive) fileSourceStory{id: storyItem.id, peer: extractPeerIdFromInputPeerAndStore(stories.getStoriesArchive.peer)}
    ```
    
-   Added (3) [storyItem](/constructor/storyItem/) -
    
    ```
    (needs stories.getStoriesByID) fileSourceStory{id: storyItem.id, peer: extractPeerIdFromInputPeerAndStore(stories.getStoriesByID.peer)}
    ```
    
-   Added (4) [storyItem](/constructor/storyItem/) -
    
    ```
    (needs stories.getAlbumStories) fileSourceStory{id: storyItem.id, peer: extractPeerIdFromInputPeerAndStore(stories.getAlbumStories.peer)}
    ```
    
-   Added (5) [storyItem](/constructor/storyItem/) -
    
    ```
    (needs peerStories) fileSourceStory{id: storyItem.id, peer: extractPeerIdFromPeerAndStore(peerStories.peer)}
    ```
    
-   Added (6) [storyItem](/constructor/storyItem/) -
    
    ```
    fileSourceStory{id: storyItem.id, peer: extractPeerIdFromPeerAndStore(storyItem.from_id?abort_if_empty)}
    ```
    
-   Added [storyReactionPublicRepost](/constructor/storyReactionPublicRepost/) -
    
    ```
    fileSourceStory{id: storyReactionPublicRepost.story.storyItem.id, peer: extractPeerIdFromPeerAndStore(storyReactionPublicRepost.peer_id)}
    ```
    
-   Added [storyViewPublicRepost](/constructor/storyViewPublicRepost/) -
    
    ```
    fileSourceStory{id: storyViewPublicRepost.story.storyItem.id, peer: extractPeerIdFromPeerAndStore(storyViewPublicRepost.peer_id)}
    ```
    
-   Added [theme](/constructor/theme/) -
    
    ```
    fileSourceTheme{id: theme.id, access_hash: theme.access_hash}
    ```
    
-   Added [updateMessageExtendedMedia](/constructor/updateMessageExtendedMedia/) -
    
    ```
    fileSourcePaidMedia{id: updateMessageExtendedMedia.msg_id, peer: extractPeerIdFromPeerAndStore(updateMessageExtendedMedia.peer)}
    ```
    
-   Added (1) [userFull](/constructor/userFull/) -
    
    ```
    fileSourceUserFull{id: userFull.id}
    ```
    
-   Added (2) [userFull](/constructor/userFull/) -
    
    ```
    fileSourceSavedMusic{user_id: userFull.id, id: userFull.saved_music?abort_if_empty.document.id, access_hash: userFull.saved_music?abort_if_empty.document.access_hash}
    ```
    
-   Added [wallPaper](/constructor/wallPaper/) -
    
    ```
    fileSourceWallPaper{id: wallPaper.id, access_hash: wallPaper.access_hash}
    ```
    
-   Added [webPage](/constructor/webPage/) -
    
    ```
    fileSourceWebPage{url: webPage.url}
    ```
    
-   Added [webPageAttributeStory](/constructor/webPageAttributeStory/) -
    
    ```
    fileSourceStory{id: webPageAttributeStory.story?abort_if_empty.storyItem.id, peer: extractPeerIdFromPeerAndStore(webPageAttributeStory.peer)}
    ```
    
-   Added [account.uploadRingtone](/method/account.uploadRingtone/) -
    
    ```
    fileSourceSavedRingtones{}
    ```
    
-   Added [bots.addPreviewMedia](/method/bots.addPreviewMedia/) -
    
    ```
    fileSourceBotPreviewInfo{bot: extractUserIdFromInputUserAndStore(bots.addPreviewMedia.bot), lang_code: bots.addPreviewMedia.lang_code}
    ```
    
-   Added [bots.editPreviewMedia](/method/bots.editPreviewMedia/) -
    
    ```
    fileSourceBotPreviewInfo{bot: extractUserIdFromInputUserAndStore(bots.editPreviewMedia.bot), lang_code: bots.editPreviewMedia.lang_code}
    ```
    
-   Added [bots.getPreviewInfo](/method/bots.getPreviewInfo/) -
    
    ```
    fileSourceBotPreviewInfo{bot: extractUserIdFromInputUserAndStore(bots.getPreviewInfo.bot), lang_code: bots.getPreviewInfo.lang_code}
    ```
    
-   Added [bots.getPreviewMedias](/method/bots.getPreviewMedias/) -
    
    ```
    fileSourceBotPreviewMedia{bot: extractUserIdFromInputUserAndStore(bots.getPreviewMedias.bot)}
    ```
    
-   Added [help.getPremiumPromo](/method/help.getPremiumPromo/) -
    
    ```
    fileSourcePremiumPromo{}
    ```
    
-   Added [messages.getDocumentByHash](/method/messages.getDocumentByHash/) -
    
    ```
    fileSourceDocumentByHash{sha256: messages.getDocumentByHash.sha256, size: messages.getDocumentByHash.size, mime_type: messages.getDocumentByHash.mime_type}
    ```
    
-   Added [photos.updateProfilePhoto](/method/photos.updateProfilePhoto/) -
    
    ```
    fileSourceUserProfilePhoto{user_id: extractUserIdFromInputUserAndStore(photos.updateProfilePhoto.bot?fallback(inputUserSelf{})), max_id: photos.updateProfilePhoto.(return value).photos.photo.photo.photo.id}
    ```
    
-   Added [photos.uploadContactProfilePhoto](/method/photos.uploadContactProfilePhoto/) -
    
    ```
    fileSourceUserProfilePhoto{user_id: extractUserIdFromInputUserAndStore(photos.uploadContactProfilePhoto.user_id), max_id: photos.uploadContactProfilePhoto.(return value).photos.photo.photo.photo.id}
    ```
    
-   Added [photos.uploadProfilePhoto](/method/photos.uploadProfilePhoto/) -
    
    ```
    fileSourceUserProfilePhoto{user_id: extractUserIdFromInputUserAndStore(photos.uploadProfilePhoto.bot?fallback(inputUserSelf{})), max_id: photos.uploadProfilePhoto.(return value).photos.photo.photo.photo.id}
    ```
    
-   Added [stories.createAlbum](/method/stories.createAlbum/) -
    
    ```
    fileSourceStoryAlbum{peer: extractPeerIdFromInputPeerAndStore(stories.createAlbum.peer)}
    ```
    
-   Added [stories.getAlbums](/method/stories.getAlbums/) -
    
    ```
    fileSourceStoryAlbum{peer: extractPeerIdFromInputPeerAndStore(stories.getAlbums.peer)}
    ```
    
-   Added [stories.updateAlbum](/method/stories.updateAlbum/) -
    
    ```
    fileSourceStoryAlbum{peer: extractPeerIdFromInputPeerAndStore(stories.updateAlbum.peer)}
    ```
    

##### New skipped incoming sources

-   Added [messages.getSponsoredMessages](/method/messages.getSponsoredMessages/) - Do not store file references from sponsored messages
-   Added [help.getAppUpdate](/method/help.getAppUpdate/) - Don't handle file references from ephemeral app update info
-   Added [help.getRecentMeUrls](/method/help.getRecentMeUrls/) - Don't handle file references from recent t.me URLs
-   Added [recentMeUrlChatInvite](/constructor/recentMeUrlChatInvite/) - Do not store references based on chat invite links
-   Added [messages.checkChatInvite](/method/messages.checkChatInvite/) - Do not store references based on chat invite links
-   Added [messages.getInlineBotResults](/method/messages.getInlineBotResults/) - Inline bot results are ephemeral
-   Added [messages.getPreparedInlineMessage](/method/messages.getPreparedInlineMessage/) - Inline bot results are ephemeral
-   Added [messages.uploadMedia](/method/messages.uploadMedia/) - A freshly uploaded media file will obtain a context only once it is sent to a chat
-   Added [messages.uploadImportedMedia](/method/messages.uploadImportedMedia/) - A freshly uploaded media file will obtain a context only once it is sent to a chat
-   Added [updateServiceNotification](/constructor/updateServiceNotification/) - Cannot refetch service notifications
-   Added [messages.getWebPagePreview](/method/messages.getWebPagePreview/) - No locations are added for the method call, as it doesn't use persistent IDs as input; the location is instead extracted from the persistent IDs in the returned WebPage object
-   Added [payments.resaleStarGifts](/constructor/payments.resaleStarGifts/) - Contexts for star gifts are not yet implemented
-   Added [payments.starGiftUpgradePreview](/constructor/payments.starGiftUpgradePreview/) - Contexts for star gifts are not yet implemented
-   Added [starGift](/constructor/starGift/) - Contexts for star gifts are not yet implemented
-   Added [starGiftUnique](/constructor/starGiftUnique/) - Contexts for star gifts are not yet implemented
-   Added [starGiftCollection](/constructor/starGiftCollection/) - Contexts for star gifts are not yet implemented
-   Added [payments.starGiftCollections](/constructor/payments.starGiftCollections/) - Contexts for star gifts are not yet implemented
-   Added [messages.getCustomEmojiDocuments](/method/messages.getCustomEmojiDocuments/) - Do not store file references in this context
-   Added [account.uploadTheme](/method/account.uploadTheme/) - A freshly uploaded theme file will obtain a context only once it is created via account.createTheme

##### New refresh actions

-   Added fileSourceMessage -
    
    ```
    getMessageOp(peer: getInputPeerByIdOp(peer), id: copyOp(id), quick_reply_shortcut_id: copyOp(quick_reply_shortcut_id))
    ```
    
-   Added fileSourceScheduledMessage -
    
    ```
    messages.getScheduledMessages(peer: getInputPeerByIdOp(peer), id: [copyOp(id)])
    ```
    
-   Added fileSourceStory -
    
    ```
    stories.getStoriesByID(id: [copyOp(id)], peer: getInputPeerByIdOp(peer))
    ```
    
-   Added fileSourceWebPage -
    
    ```
    messages.getWebPage(url: copyOp(url), hash: 0)
    ```
    
-   Added fileSourceBotApp -
    
    ```
    messages.getBotApp(app: inputBotAppID{id: copyOp(id), access_hash: copyOp(access_hash)}, hash: 0)
    ```
    
-   Added fileSourceUserFull -
    
    ```
    users.getFullUser(id: getInputUserByIdOp(id))
    ```
    
-   Added fileSourceAdminLog -
    
    ```
    channels.getAdminLog(channel: getInputChannelByIdOp(channel), max_id: copyOp(max_id), min_id: copyOp(max_id), limit: 1, q: "")
    ```
    
-   Added fileSourceStoryAlbum -
    
    ```
    stories.getAlbums(peer: getInputPeerByIdOp(peer), hash: 0)
    ```
    
-   Added fileSourceBotPreviewMedia -
    
    ```
    bots.getPreviewMedias(bot: getInputUserByIdOp(bot))
    ```
    
-   Added fileSourceBotPreviewInfo -
    
    ```
    bots.getPreviewInfo(bot: getInputUserByIdOp(bot), lang_code: copyOp(lang_code))
    ```
    
-   Added fileSourcePaidMedia -
    
    ```
    messages.getExtendedMedia(id: [copyOp(id)], peer: getInputPeerByIdOp(peer))
    ```
    
-   Added fileSourceSavedMusic -
    
    ```
    users.getSavedMusicByID(id: getInputUserByIdOp(user_id), documents: [inputDocument{id: copyOp(id), access_hash: copyOp(access_hash), file_reference: base64_decode("")}])
    ```
    
-   Added fileSourceChatFull -
    
    ```
    messages.getFullChat(chat_id: copyOp(chat_id))
    ```
    
-   Added fileSourceChannelFull -
    
    ```
    channels.getFullChannel(channel: getInputChannelByIdOp(channel))
    ```
    
-   Added fileSourcePremiumPromo -
    
    ```
    help.getPremiumPromo()
    ```
    
-   Added fileSourceStarsTransaction -
    
    ```
    payments.getStarsTransactionsByID(peer: getInputPeerByIdOp(peer), ton: copyOp(ton), id: [inputStarsTransaction{id: copyOp(id), refund: copyOp(refund)}])
    ```
    
-   Added fileSourceAttachMenuBot -
    
    ```
    messages.getAttachMenuBot(bot: getInputUserByIdOp(bot))
    ```
    
-   Added fileSourceTheme -
    
    ```
    account.getTheme(theme: inputTheme{id: copyOp(id), access_hash: copyOp(access_hash)}, format: $themeFormat)
    ```
    
-   Added fileSourceWallPaper -
    
    ```
    account.getWallPaper(wallpaper: inputWallPaper{id: copyOp(id), access_hash: copyOp(access_hash)})
    ```
    
-   Added fileSourceStickerSet -
    
    ```
    messages.getStickerSet(stickerset: copyOp(stickerset), hash: 0)
    ```
    
-   Added fileSourceSavedGifs -
    
    ```
    messages.getSavedGifs(hash: 0)
    ```
    
-   Added fileSourceSavedRingtones -
    
    ```
    account.getSavedRingtones(hash: 0)
    ```
    
-   Added fileSourceAvailableEffects -
    
    ```
    messages.getAvailableEffects(hash: 0)
    ```
    
-   Added fileSourceAvailableReactions -
    
    ```
    messages.getAvailableReactions(hash: 0)
    ```
    
-   Added fileSourceUserProfilePhoto -
    
    ```
    photos.getUserPhotos(user_id: getInputUserByIdOp(user_id), offset: -1, max_id: copyOp(max_id), limit: 1)
    ```
    
-   Added fileSourceDocumentByHash -
    
    ```
    messages.getDocumentByHash(sha256: copyOp(sha256), size: copyOp(size), mime_type: copyOp(mime_type))
    ```
    

##### New traversers incoming

-   Added
    
    ```
    traverseCommitSourceLocation{predicate: document, stored_constructor: fileIdDocument, push_sources: [fileSourceStickerSet, fileSourceSavedMusic (needs users.getSavedMusic), fileSourceSavedMusic (needs users.getSavedMusicByID)], type: Document}
    ```
    
-   Added
    
    ```
    traverseCommitSourceLocation{predicate: photo, stored_constructor: fileIdPhoto, push_sources: [fileSourceUserProfilePhoto (needs photos.getUserPhotos)], type: Photo}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: account.chatThemes, params: [themes], type: account.ChatThemes}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: account.savedRingtoneConverted, params: [document], push_sources: [fileSourceSavedRingtones], type: account.SavedRingtone}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: account.savedRingtones, params: [ringtones], push_sources: [fileSourceSavedRingtones], type: account.SavedRingtones}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: account.themes, params: [themes], type: account.Themes}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: account.wallPapers, params: [wallpapers], type: account.WallPapers}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: attachMenuBot, params: [icons], push_sources: [fileSourceAttachMenuBot], type: AttachMenuBot}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: attachMenuBotIcon, params: [icon], type: AttachMenuBotIcon}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: attachMenuBots, params: [bots], type: AttachMenuBots}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: attachMenuBotsBot, params: [bot], type: AttachMenuBotsBot}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: availableReaction, params: [static_icon, appear_animation, select_animation, activate_animation, effect_animation, around_animation, center_icon], type: AvailableReaction}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: botApp, params: [photo, document], push_sources: [fileSourceBotApp], type: BotApp}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: botInfo, params: [description_photo, description_document], push_sources: [fileSourceUserFull], type: BotInfo}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: botInlineMediaResult, params: [document], type: BotInlineResult}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: botPreviewMedia, params: [media], type: BotPreviewMedia}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: bots.previewInfo, params: [media], type: bots.PreviewInfo}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: businessIntro, params: [sticker], type: BusinessIntro}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: channelAdminLogEvent, params: [action], push_sources: [fileSourceAdminLog (needs channels.getAdminLog)], type: ChannelAdminLogEvent}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: channelAdminLogEventActionChangePhoto, params: [prev_photo, new_photo], type: ChannelAdminLogEventAction}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: channelAdminLogEventActionChangeWallpaper, params: [prev_value, new_value], type: ChannelAdminLogEventAction}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: channelAdminLogEventActionDeleteMessage, params: [message], type: ChannelAdminLogEventAction}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: channelAdminLogEventActionEditMessage, params: [prev_message, new_message], type: ChannelAdminLogEventAction}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: channelAdminLogEventActionSendMessage, params: [message], type: ChannelAdminLogEventAction}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: channelAdminLogEventActionStopPoll, params: [message], type: ChannelAdminLogEventAction}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: channelAdminLogEventActionUpdatePinned, params: [message], type: ChannelAdminLogEventAction}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: channelFull, params: [chat_photo, bot_info, stories, wallpaper], push_sources: [fileSourceChannelFull], type: ChatFull}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: channels.adminLogResults, params: [events], type: channels.AdminLogResults}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: chatFull, params: [chat_photo, bot_info], push_sources: [fileSourceChatFull], type: ChatFull}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: chatThemeUniqueGift, params: [gift, theme_settings], type: ChatTheme}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: foundStory, params: [story], push_sources: [fileSourceStory], type: FoundStory}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: game, params: [photo, document], type: Game}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: help.appUpdate, params: [document, sticker], type: help.AppUpdate}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: help.premiumPromo, params: [videos], type: help.PremiumPromo}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: help.recentMeUrls, params: [urls], type: help.RecentMeUrls}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: message, params: [reply_to, media], push_sources: [fileSourceMessage (unless messages.getScheduledMessages, updateNewScheduledMessage), fileSourceScheduledMessage (needs messages.getScheduledMessages), fileSourceScheduledMessage (needs updateNewScheduledMessage)], type: Message}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messageActionBotAllowed, params: [app], type: MessageAction}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messageActionChatEditPhoto, params: [photo], type: MessageAction}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messageActionRequestedPeerSentMe, params: [peers], type: MessageAction}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messageActionSetChatTheme, params: [theme], type: MessageAction}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messageActionSetChatWallPaper, params: [wallpaper], type: MessageAction}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messageActionStarGift, params: [gift], type: MessageAction}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messageActionStarGiftUnique, params: [gift], type: MessageAction}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messageActionSuggestProfilePhoto, params: [photo], type: MessageAction}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messageExtendedMedia, params: [media], type: MessageExtendedMedia}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messageMediaDocument, params: [document, alt_documents, video_cover], type: MessageMedia}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messageMediaGame, params: [game], type: MessageMedia}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messageMediaInvoice, params: [extended_media], type: MessageMedia}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messageMediaPaidMedia, params: [extended_media], type: MessageMedia}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messageMediaPhoto, params: [photo], type: MessageMedia}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messageMediaStory, params: [story], push_sources: [fileSourceStory], type: MessageMedia}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messageMediaWebPage, params: [webpage], type: MessageMedia}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messageReplyHeader, params: [reply_media], type: MessageReplyHeader}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messageService, params: [reply_to, action], push_sources: [fileSourceMessage (unless messages.getScheduledMessages, updateNewScheduledMessage)], type: Message}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messages.archivedStickers, params: [sets], type: messages.ArchivedStickers}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messages.availableEffects, params: [documents], push_sources: [fileSourceAvailableEffects], type: messages.AvailableEffects}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messages.availableReactions, params: [reactions], push_sources: [fileSourceAvailableReactions], type: messages.AvailableReactions}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messages.botApp, params: [app], type: messages.BotApp}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messages.botResults, params: [results], type: messages.BotResults}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messages.channelMessages, params: [messages], type: messages.Messages}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messages.chatFull, params: [full_chat], type: messages.ChatFull}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messages.dialogs, params: [messages], type: messages.Dialogs}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messages.dialogsSlice, params: [messages], type: messages.Dialogs}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messages.discussionMessage, params: [messages], type: messages.DiscussionMessage}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messages.favedStickers, params: [stickers], type: messages.FavedStickers}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messages.featuredStickers, params: [sets], type: messages.FeaturedStickers}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messages.forumTopics, params: [messages], type: messages.ForumTopics}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messages.foundStickerSets, params: [sets], type: messages.FoundStickerSets}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messages.foundStickers, params: [stickers], type: messages.FoundStickers}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messages.messages, params: [messages], type: messages.Messages}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messages.messagesSlice, params: [messages], type: messages.Messages}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messages.myStickers, params: [sets], type: messages.MyStickers}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messages.peerDialogs, params: [messages], type: messages.PeerDialogs}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messages.preparedInlineMessage, params: [result], type: messages.PreparedInlineMessage}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messages.quickReplies, params: [messages], type: messages.QuickReplies}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messages.recentStickers, params: [stickers], type: messages.RecentStickers}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messages.savedDialogs, params: [messages], type: messages.SavedDialogs}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messages.savedDialogsSlice, params: [messages], type: messages.SavedDialogs}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messages.savedGifs, params: [gifs], push_sources: [fileSourceSavedGifs], type: messages.SavedGifs}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messages.searchResultsCalendar, params: [messages], type: messages.SearchResultsCalendar}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messages.sponsoredMessages, params: [messages], type: messages.SponsoredMessages}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messages.stickerSet, params: [documents], push_sources: [fileSourceStickerSet], type: messages.StickerSet}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messages.stickerSetInstallResultArchive, params: [sets], type: messages.StickerSetInstallResult}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messages.stickers, params: [stickers], type: messages.Stickers}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messages.webPage, params: [webpage], type: messages.WebPage}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: messages.webPagePreview, params: [media], type: messages.WebPagePreview}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: page, params: [photos, documents], type: Page}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: payments.resaleStarGifts, params: [gifts, attributes], type: payments.ResaleStarGifts}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: payments.savedStarGifts, params: [gifts], type: payments.SavedStarGifts}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: payments.starGiftCollections, params: [collections], type: payments.StarGiftCollections}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: payments.starGiftUpgradePreview, params: [sample_attributes], type: payments.StarGiftUpgradePreview}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: payments.starGifts, params: [gifts], type: payments.StarGifts}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: payments.starsStatus, params: [history], type: payments.StarsStatus}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: payments.uniqueStarGift, params: [gift], type: payments.UniqueStarGift}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: peerStories, params: [stories], is_needed_parent: true, type: PeerStories}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: photos.photo, params: [photo], type: photos.Photo}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: photos.photos, params: [photos], type: photos.Photos}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: photos.photosSlice, params: [photos], type: photos.Photos}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: publicForwardMessage, params: [message], type: PublicForward}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: publicForwardStory, params: [story], push_sources: [fileSourceStory], type: PublicForward}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: recentMeUrlStickerSet, params: [set], type: RecentMeUrl}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: requestedPeerChannel, params: [photo], type: RequestedPeer}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: requestedPeerChat, params: [photo], type: RequestedPeer}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: requestedPeerUser, params: [photo], type: RequestedPeer}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: savedStarGift, params: [gift], type: SavedStarGift}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: sponsoredMessage, params: [media], type: SponsoredMessage}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: starGift, params: [sticker], type: StarGift}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: starGiftAttributeModel, params: [document], type: StarGiftAttribute}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: starGiftAttributePattern, params: [document], type: StarGiftAttribute}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: starGiftCollection, params: [icon], type: StarGiftCollection}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: starGiftUnique, params: [attributes], type: StarGift}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: starsTransaction, params: [extended_media, stargift], push_sources: [fileSourceStarsTransaction (needs payments.getStarsStatus), fileSourceStarsTransaction (needs payments.getStarsTransactions), fileSourceStarsTransaction (needs payments.getStarsTransactionsByID), fileSourceStarsTransaction (needs payments.getStarsSubscriptions)], type: StarsTransaction}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: stats.publicForwards, params: [forwards], type: stats.PublicForwards}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: stickerSetCovered, params: [cover], type: StickerSetCovered}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: stickerSetFullCovered, params: [documents], push_sources: [fileSourceStickerSet], type: StickerSetCovered}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: stickerSetMultiCovered, params: [covers], push_sources: [fileSourceStickerSet], type: StickerSetCovered}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: stories.albums, params: [albums], type: stories.Albums}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: stories.allStories, params: [peer_stories], type: stories.AllStories}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: stories.foundStories, params: [stories], type: stories.FoundStories}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: stories.peerStories, params: [stories], type: stories.PeerStories}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: stories.stories, params: [stories], type: stories.Stories}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: stories.storyReactionsList, params: [reactions], type: stories.StoryReactionsList}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: stories.storyViewsList, params: [views], type: stories.StoryViewsList}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: storyAlbum, params: [icon_photo, icon_video], type: StoryAlbum}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: storyItem, params: [media], push_sources: [fileSourceStory (needs stories.getPinnedStories), fileSourceStory (needs stories.getStoriesArchive), fileSourceStory (needs stories.getStoriesByID), fileSourceStory (needs stories.getAlbumStories), fileSourceStory (needs peerStories), fileSourceStory], type: StoryItem}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: storyReactionPublicForward, params: [message], type: StoryReaction}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: storyReactionPublicRepost, params: [story], push_sources: [fileSourceStory], type: StoryReaction}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: storyViewPublicForward, params: [message], type: StoryView}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: storyViewPublicRepost, params: [story], push_sources: [fileSourceStory], type: StoryView}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: theme, params: [document, settings], push_sources: [fileSourceTheme], type: Theme}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: themeSettings, params: [wallpaper], type: ThemeSettings}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: updateBotEditBusinessMessage, params: [message, reply_to_message], type: Update}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: updateBotNewBusinessMessage, params: [message, reply_to_message], type: Update}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: updateBusinessBotCallbackQuery, params: [message, reply_to_message], type: Update}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: updateChannelWebPage, params: [webpage], type: Update}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: updateEditChannelMessage, params: [message], type: Update}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: updateEditMessage, params: [message], type: Update}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: updateMessageExtendedMedia, params: [extended_media], push_sources: [fileSourcePaidMedia], type: Update}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: updateNewChannelMessage, params: [message], type: Update}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: updateNewMessage, params: [message], type: Update}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: updateNewScheduledMessage, params: [message], is_needed_parent: true, type: Update}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: updateNewStickerSet, params: [stickerset], type: Update}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: updatePeerWallpaper, params: [wallpaper], type: Update}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: updateQuickReplyMessage, params: [message], type: Update}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: updateServiceNotification, params: [media], type: Update}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: updateStory, params: [story], type: Update}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: updateTheme, params: [theme], type: Update}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: updateWebPage, params: [webpage], type: Update}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: updates.channelDifference, params: [new_messages], type: updates.ChannelDifference}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: updates.channelDifferenceTooLong, params: [messages], type: updates.ChannelDifference}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: updates.difference, params: [new_messages], type: updates.Difference}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: updates.differenceSlice, params: [new_messages], type: updates.Difference}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: userFull, params: [personal_photo, profile_photo, fallback_photo, bot_info, theme, wallpaper, stories, business_intro, saved_music], push_sources: [fileSourceUserFull, fileSourceSavedMusic], type: UserFull}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: users.savedMusic, params: [documents], type: users.SavedMusic}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: users.userFull, params: [full_user], type: users.UserFull}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: wallPaper, params: [document], push_sources: [fileSourceWallPaper], type: WallPaper}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: webPage, params: [photo, document, cached_page, attributes], push_sources: [fileSourceWebPage], type: WebPage}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: webPageAttributeStarGiftCollection, params: [icons], type: WebPageAttribute}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: webPageAttributeStickerSet, params: [stickers], type: WebPageAttribute}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: webPageAttributeStory, params: [story], push_sources: [fileSourceStory], type: WebPageAttribute}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: webPageAttributeTheme, params: [documents, settings], type: WebPageAttribute}
    ```
    
-   Added
    
    ```
    traverseIncomingConstructor{predicate: webPageAttributeUniqueStarGift, params: [gift], type: WebPageAttribute}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: account.createTheme}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: account.getChatThemes}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: account.getMultiWallPapers}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: account.getSavedRingtones}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: account.getTheme}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: account.getThemes}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: account.getUniqueGiftChatThemes}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: account.getWallPaper}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: account.getWallPapers}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: account.saveRingtone}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: account.updateTheme}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: account.uploadRingtone, push_sources: [fileSourceSavedRingtones]}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: account.uploadTheme}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: account.uploadWallPaper}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: bots.addPreviewMedia, push_sources: [fileSourceBotPreviewInfo]}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: bots.editPreviewMedia, push_sources: [fileSourceBotPreviewInfo]}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: bots.getPreviewInfo, push_sources: [fileSourceBotPreviewInfo]}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: bots.getPreviewMedias, push_sources: [fileSourceBotPreviewMedia]}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: channels.getAdminLog, is_needed_parent: true}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: channels.getForumTopics}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: channels.getForumTopicsByID}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: channels.getFullChannel}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: channels.getMessages}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: channels.searchPosts}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: help.getAppUpdate}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: help.getPremiumPromo, push_sources: [fileSourcePremiumPromo]}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: help.getRecentMeUrls}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.getArchivedStickers}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.getAttachMenuBot}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.getAttachMenuBots}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.getAttachedStickers}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.getAvailableEffects}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.getAvailableReactions}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.getBotApp}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.getCustomEmojiDocuments}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.getDialogs}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.getDiscussionMessage}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.getDocumentByHash, push_sources: [fileSourceDocumentByHash]}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.getFavedStickers}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.getFeaturedEmojiStickers}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.getFeaturedStickers}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.getFullChat}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.getHistory}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.getInlineBotResults}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.getMessages}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.getMyStickers}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.getOldFeaturedStickers}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.getPeerDialogs}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.getPinnedDialogs}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.getPinnedSavedDialogs}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.getPreparedInlineMessage}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.getQuickReplies}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.getQuickReplyMessages}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.getRecentLocations}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.getRecentStickers}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.getReplies}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.getSavedDialogs}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.getSavedDialogsByID}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.getSavedGifs}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.getSavedHistory}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.getScheduledHistory}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.getScheduledMessages, is_needed_parent: true}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.getSearchResultsCalendar}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.getSponsoredMessages}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.getStickerSet}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.getStickers}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.getUnreadMentions}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.getUnreadReactions}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.getWebPage}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.getWebPagePreview}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.installStickerSet}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.search}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.searchEmojiStickerSets}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.searchGlobal}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.searchSentMedia}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.searchStickerSets}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.searchStickers}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.uploadImportedMedia}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: messages.uploadMedia}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: payments.createStarGiftCollection}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: payments.getResaleStarGifts}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: payments.getSavedStarGift}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: payments.getSavedStarGifts}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: payments.getStarGiftCollections}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: payments.getStarGiftUpgradePreview}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: payments.getStarGifts}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: payments.getStarsStatus, is_needed_parent: true}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: payments.getStarsSubscriptions, is_needed_parent: true}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: payments.getStarsTransactions, is_needed_parent: true}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: payments.getStarsTransactionsByID, is_needed_parent: true}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: payments.getUniqueStarGift}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: payments.updateStarGiftCollection}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: photos.getUserPhotos, is_needed_parent: true}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: photos.updateProfilePhoto, push_sources: [fileSourceUserProfilePhoto]}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: photos.uploadContactProfilePhoto, push_sources: [fileSourceUserProfilePhoto]}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: photos.uploadProfilePhoto, push_sources: [fileSourceUserProfilePhoto]}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: stats.getMessagePublicForwards}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: stats.getStoryPublicForwards}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: stickers.addStickerToSet}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: stickers.changeSticker}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: stickers.changeStickerPosition}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: stickers.createStickerSet}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: stickers.removeStickerFromSet}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: stickers.renameStickerSet}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: stickers.replaceSticker}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: stickers.setStickerSetThumb}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: stories.createAlbum, push_sources: [fileSourceStoryAlbum]}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: stories.getAlbumStories, is_needed_parent: true}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: stories.getAlbums, push_sources: [fileSourceStoryAlbum]}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: stories.getAllStories}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: stories.getPeerStories}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: stories.getPinnedStories, is_needed_parent: true}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: stories.getStoriesArchive, is_needed_parent: true}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: stories.getStoriesByID, is_needed_parent: true}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: stories.getStoryReactionsList}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: stories.getStoryViewsList}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: stories.searchPosts}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: stories.updateAlbum, push_sources: [fileSourceStoryAlbum]}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: updates.getChannelDifference}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: updates.getDifference}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: users.getFullUser}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: users.getSavedMusic, is_needed_parent: true}
    ```
    
-   Added
    
    ```
    traverseMethodResult{name: users.getSavedMusicByID, is_needed_parent: true}
    ```
    

##### New traversers outgoing

-   Added
    
    ```
    traverseMethodCall{name: account.createTheme, params: [document]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: account.reportProfilePhoto, params: [photo_id]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: account.saveMusic, params: [id, after_id]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: account.saveRingtone, params: [id]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: account.updateBusinessIntro, params: [intro]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: account.updateTheme, params: [document]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: account.uploadRingtone, params: [file]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: account.uploadTheme, params: [file, thumb]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: account.uploadWallPaper, params: [file]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: bots.addPreviewMedia, params: [media]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: bots.deletePreviewMedia, params: [media]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: bots.editPreviewMedia, params: [media, new_media]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: bots.reorderPreviewMedias, params: [order]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: channels.editPhoto, params: [photo]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: messages.editChatPhoto, params: [photo]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: messages.editInlineBotMessage, params: [media]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: messages.editMessage, params: [media]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: messages.faveSticker, params: [id]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: messages.getAttachedStickers, params: [media]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: messages.initHistoryImport, params: [file]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: messages.saveDraft, params: [media]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: messages.saveGif, params: [id]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: messages.savePreparedInlineMessage, params: [result]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: messages.saveRecentSticker, params: [id]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: messages.sendMedia, params: [media]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: messages.sendMultiMedia, params: [multi_media]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: messages.sendWebViewResultMessage, params: [result]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: messages.setInlineBotResults, params: [results]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: messages.uploadImportedMedia, params: [media]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: messages.uploadMedia, params: [media]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: payments.exportInvoice, params: [invoice_media]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: phone.saveCallLog, params: [file]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: photos.deletePhotos, params: [id]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: photos.updateProfilePhoto, params: [id]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: photos.uploadContactProfilePhoto, params: [file, video]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: photos.uploadProfilePhoto, params: [file, video]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: stickers.addStickerToSet, params: [sticker]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: stickers.changeSticker, params: [sticker]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: stickers.changeStickerPosition, params: [sticker]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: stickers.createStickerSet, params: [thumb, stickers]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: stickers.removeStickerFromSet, params: [sticker]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: stickers.replaceSticker, params: [sticker, new_sticker]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: stickers.setStickerSetThumb, params: [thumb]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: stories.editStory, params: [media]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: stories.sendStory, params: [media]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: upload.getFile, params: [location]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: upload.getFileHashes, params: [location]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: upload.getWebFile, params: [location]}
    ```
    
-   Added
    
    ```
    traverseMethodCall{name: users.getSavedMusicByID, params: [documents]}
    ```
    
-   Added
    
    ```
    traverseOutgoingConstructor{predicate: inputBotInlineResultDocument, params: [document], type: InputBotInlineResult}
    ```
    
-   Added
    
    ```
    traverseOutgoingConstructor{predicate: inputBotInlineResultPhoto, params: [photo], type: InputBotInlineResult}
    ```
    
-   Added
    
    ```
    traverseOutgoingConstructor{predicate: inputBusinessIntro, params: [sticker], type: InputBusinessIntro}
    ```
    
-   Added
    
    ```
    traverseOutgoingConstructor{predicate: inputChatPhoto, params: [id], type: InputChatPhoto}
    ```
    
-   Added
    
    ```
    traverseOutgoingConstructor{predicate: inputChatUploadedPhoto, params: [file, video], type: InputChatPhoto}
    ```
    
-   Added
    
    ```
    traverseOutgoingConstructor{predicate: inputFileStoryDocument, params: [id], type: InputFile}
    ```
    
-   Added
    
    ```
    traverseOutgoingConstructor{predicate: inputMediaDocument, params: [id, video_cover], type: InputMedia}
    ```
    
-   Added
    
    ```
    traverseOutgoingConstructor{predicate: inputMediaDocumentExternal, params: [video_cover], type: InputMedia}
    ```
    
-   Added
    
    ```
    traverseOutgoingConstructor{predicate: inputMediaInvoice, params: [extended_media], type: InputMedia}
    ```
    
-   Added
    
    ```
    traverseOutgoingConstructor{predicate: inputMediaPaidMedia, params: [extended_media], type: InputMedia}
    ```
    
-   Added
    
    ```
    traverseOutgoingConstructor{predicate: inputMediaPhoto, params: [id], type: InputMedia}
    ```
    
-   Added
    
    ```
    traverseOutgoingConstructor{predicate: inputMediaUploadedDocument, params: [file, thumb, stickers, video_cover], type: InputMedia}
    ```
    
-   Added
    
    ```
    traverseOutgoingConstructor{predicate: inputMediaUploadedPhoto, params: [file, stickers], type: InputMedia}
    ```
    
-   Added
    
    ```
    traverseOutgoingConstructor{predicate: inputSingleMedia, params: [media], type: InputSingleMedia}
    ```
    
-   Added
    
    ```
    traverseOutgoingConstructor{predicate: inputStickerSetItem, params: [document], type: InputStickerSetItem}
    ```
    
-   Added
    
    ```
    traverseOutgoingConstructor{predicate: inputStickeredMediaDocument, params: [id], type: InputStickeredMedia}
    ```
    
-   Added
    
    ```
    traverseOutgoingConstructor{predicate: inputStickeredMediaPhoto, params: [id], type: InputStickeredMedia}
    ```
    
-   Added
    
    ```
    traverseOutgoingConstructor{predicate: inputWebFileAudioAlbumThumbLocation, params: [document], type: InputWebFileLocation}
    ```
    
-   Added
    
    ```
    traverseSwapLocation{predicate: inputDocument, stored_constructor: fileIdDocument, type: InputDocument}
    ```
    
-   Added
    
    ```
    traverseSwapLocation{predicate: inputDocumentFileLocation, stored_constructor: fileIdDocument, type: InputFileLocation}
    ```
    
-   Added
    
    ```
    traverseSwapLocation{predicate: inputPhoto, stored_constructor: fileIdPhoto, type: InputPhoto}
    ```
    
-   Added
    
    ```
    traverseSwapLocation{predicate: inputPhotoFileLocation, stored_constructor: fileIdPhoto, type: InputFileLocation}
    ```
    

#### [Schema](/schema/)

```
messageActionSetChatTheme#b91bbd3a theme:ChatTheme = MessageAction;
auth.sentCodePaymentRequired#d7a2fcf9 store_product:string phone_code_hash:string support_email_address:string support_email_subject:string = auth.SentCode;
userFull#c577b5ad flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true contact_require_premium:flags.29?true read_dates_private:flags.30?true flags2:# sponsored_enabled:flags2.7?true can_view_revenue:flags2.9?true bot_can_manage_emoji_status:flags2.10?true display_gifts_button:flags2.16?true id:long about:flags.1?string settings:PeerSettings personal_photo:flags.21?Photo profile_photo:flags.2?Photo fallback_photo:flags.22?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int ttl_period:flags.14?int theme:flags.15?ChatTheme private_forward_name:flags.16?string bot_group_admin_rights:flags.17?ChatAdminRights bot_broadcast_admin_rights:flags.18?ChatAdminRights wallpaper:flags.24?WallPaper stories:flags.25?PeerStories business_work_hours:flags2.0?BusinessWorkHours business_location:flags2.1?BusinessLocation business_greeting_message:flags2.2?BusinessGreetingMessage business_away_message:flags2.3?BusinessAwayMessage business_intro:flags2.4?BusinessIntro birthday:flags2.5?Birthday personal_channel_id:flags2.6?long personal_channel_message:flags2.6?int stargifts_count:flags2.8?int starref_program:flags2.11?StarRefProgram bot_verification:flags2.12?BotVerification send_paid_messages_stars:flags2.14?long disallowed_gifts:flags2.15?DisallowedGiftsSettings stars_rating:flags2.17?StarsRating stars_my_pending_rating:flags2.18?StarsRating stars_my_pending_rating_date:flags2.18?int main_tab:flags2.20?ProfileTab saved_music:flags2.21?Document = UserFull;
chatTheme#c3dffc04 emoticon:string = ChatTheme;
chatThemeUniqueGift#3458f9c8 gift:StarGift theme_settings:Vector<ThemeSettings> = ChatTheme;
account.chatThemesNotModified#e011e1c4 = account.ChatThemes;
account.chatThemes#16484857 flags:# hash:long themes:Vector<ChatTheme> chats:Vector<Chat> users:Vector<User> next_offset:flags.0?int = account.ChatThemes;
starGiftUnique#1befe865 flags:# require_premium:flags.6?true resale_ton_only:flags.7?true theme_available:flags.9?true id:long gift_id:long title:string slug:string num:int owner_id:flags.0?Peer owner_name:flags.1?string owner_address:flags.2?string attributes:Vector<StarGiftAttribute> availability_issued:int availability_total:int gift_address:flags.3?string resell_amount:flags.4?Vector<StarsAmount> released_by:flags.5?Peer value_amount:flags.8?long value_currency:flags.8?string theme_peer:flags.10?Peer = StarGift;
inputChatThemeEmpty#83268483 = InputChatTheme;
inputChatTheme#c93de95c emoticon:string = InputChatTheme;
inputChatThemeUniqueGift#87e5dfe4 slug:string = InputChatTheme;
---functions---
account.getUniqueGiftChatThemes#fe74ef9f offset:int limit:int hash:long = account.ChatThemes;
messages.setChatTheme#081202c9 peer:InputPeer theme:InputChatTheme = Updates;
```

### [Layer 213](https://core.telegram.org/schema?layer=213)

This layer introduces the following new features:

-   [Changing the default profile tab »](/api/profile/#tabs)
-   [Saving music to the profile »](/api/profile/#music)
-   [Added a `locked_until_date` flag to starGift, for locked gifts that cannot be sent until the specified date](/constructor/starGift/).
-   [Added the payments.checkCanSendGift method, to check if a non-locked gift can't be sent yet for other reasons](/method/payments.checkCanSendGift/).
-   [Added an optional `spend_purpose_peer` flag to inputStorePaymentStarsTopup, that should be populated with the peer where the topup process was initiated due to low funds (i.e. a bot for bot payments, a channel for paid media/reactions, etc) »](/constructor/inputStorePaymentStarsTopup/)[Documentation for the profile page was also reorganized, to include the full list of tabs to show, along with instructions on how to populate them »](/api/profile/).

#### [Schema](/schema/) changes

##### New Methods

-   Added [account.setMainProfileTab](/method/account.setMainProfileTab/) - Changes the main profile tab of the current user, see [here »](/api/profile/#tabs) for more info.
-   Added [account.saveMusic](/method/account.saveMusic/) - Adds or removes a song from the current user's profile [see here »](/api/profile/#music) for more info on the music tab of the profile page.
-   Added [account.getSavedMusicIds](/method/account.getSavedMusicIds/) - Fetch the full list of only the IDs of [songs currently added to the profile, see here »](/api/profile/#music) for more info.
-   Added [users.getSavedMusic](/method/users.getSavedMusic/) - Get songs [pinned to the user's profile, see here »](/api/profile/#music) for more info.
-   Added [users.getSavedMusicByID](/method/users.getSavedMusicByID/) - Check if the passed songs are still pinned to the user's profile, or refresh the file references of songs pinned on a user's profile [see here »](/api/profile/#music) for more info.
-   Added [channels.setMainProfileTab](/method/channels.setMainProfileTab/) - Changes the main profile tab of a channel, see [here »](/api/profile/#tabs) for more info.
-   Added [payments.checkCanSendGift](/method/payments.checkCanSendGift/) - Check if the specified [gift »](/api/gifts/) can be sent.

##### New Constructors

-   Added [profileTabPosts](/constructor/profileTabPosts/) - Represents the [stories](/api/stories/) tab of a profile page.
-   Added [profileTabGifts](/constructor/profileTabGifts/) - Represents the [gifts](/api/gifts/) tab of a profile page.
-   Added [profileTabMedia](/constructor/profileTabMedia/) - Represents the media tab of a profile page.
-   Added [profileTabFiles](/constructor/profileTabFiles/) - Represents the shared files tab of a profile.
-   Added [profileTabMusic](/constructor/profileTabMusic/) - Represents the [music](/api/profile/#music) tab of a profile page.
-   Added [profileTabVoice](/constructor/profileTabVoice/) - Represents the voice messages tab of a profile page.
-   Added [profileTabLinks](/constructor/profileTabLinks/) - Represents the shared links tab of a profile page.
-   Added [profileTabGifs](/constructor/profileTabGifs/) - Represents the gifs tab of a profile page.
-   Added [users.savedMusicNotModified](/constructor/users.savedMusicNotModified/) - This subset of the songs currently pinned on a user's profile hasn't changed, see [here »](/api/profile/#music) for more info.
-   Added [users.savedMusic](/constructor/users.savedMusic/) - List of songs currently pinned on a user's profile, see [here »](/api/profile/#music) for more info.
-   Added [account.savedMusicIdsNotModified](/constructor/account.savedMusicIdsNotModified/) - The list of IDs of songs ([document](/constructor/document/).`id`s) currently pinned on our profile hasn't changed.
-   Added [account.savedMusicIds](/constructor/account.savedMusicIds/) - List of IDs of songs ([document](/constructor/document/).`id`s) currently pinned on our profile, see [here »](/api/profile/#music) for more info.
-   Added [payments.checkCanSendGiftResultOk](/constructor/payments.checkCanSendGiftResultOk/) - The specified gift can be sent.
-   Added [payments.checkCanSendGiftResultFail](/constructor/payments.checkCanSendGiftResultFail/) - The specified gift cannot be sent yet for the specified reason.

##### Changed Constructors

-   Added **main\_tab** parameter in [channelFull](/constructor/channelFull/)
-   Added **upgrade\_separate** parameter in [messageActionStarGift](/constructor/messageActionStarGift/)
-   Added **main\_tab**, **saved\_music** parameters in [userFull](/constructor/userFull/)
-   Added **flags**, **spend\_purpose\_peer** parameters in [inputStorePaymentStarsTopup](/constructor/inputStorePaymentStarsTopup/)
-   Added **locked\_until\_date** parameter in [starGift](/constructor/starGift/)
-   Added **chats** parameter in [payments.uniqueStarGift](/constructor/payments.uniqueStarGift/)
-   Added **chats** parameter in [messages.webPagePreview](/constructor/messages.webPagePreview/)
-   Added **upgrade\_separate** parameter in [savedStarGift](/constructor/savedStarGift/)

#### [Schema](/schema/)

```
channelFull#e4e0b29d flags:# can_view_participants:flags.3?true can_set_username:flags.6?true can_set_stickers:flags.7?true hidden_prehistory:flags.10?true can_set_location:flags.16?true has_scheduled:flags.19?true can_view_stats:flags.20?true blocked:flags.22?true flags2:# can_delete_channel:flags2.0?true antispam:flags2.1?true participants_hidden:flags2.2?true translations_disabled:flags2.3?true stories_pinned_available:flags2.5?true view_forum_as_messages:flags2.6?true restricted_sponsored:flags2.11?true can_view_revenue:flags2.12?true paid_media_allowed:flags2.14?true can_view_stars_revenue:flags2.15?true paid_reactions_available:flags2.16?true stargifts_available:flags2.19?true paid_messages_available:flags2.20?true id:long about:string participants_count:flags.0?int admins_count:flags.1?int kicked_count:flags.2?int banned_count:flags.2?int online_count:flags.13?int read_inbox_max_id:int read_outbox_max_id:int unread_count:int chat_photo:Photo notify_settings:PeerNotifySettings exported_invite:flags.23?ExportedChatInvite bot_info:Vector<BotInfo> migrated_from_chat_id:flags.4?long migrated_from_max_id:flags.4?int pinned_msg_id:flags.5?int stickerset:flags.8?StickerSet available_min_id:flags.9?int folder_id:flags.11?int linked_chat_id:flags.14?long location:flags.15?ChannelLocation slowmode_seconds:flags.17?int slowmode_next_send_date:flags.18?int stats_dc:flags.12?int pts:int call:flags.21?InputGroupCall ttl_period:flags.24?int pending_suggestions:flags.25?Vector<string> groupcall_default_join_as:flags.26?Peer theme_emoticon:flags.27?string requests_pending:flags.28?int recent_requesters:flags.28?Vector<long> default_send_as:flags.29?Peer available_reactions:flags.30?ChatReactions reactions_limit:flags2.13?int stories:flags2.4?PeerStories wallpaper:flags2.7?WallPaper boosts_applied:flags2.8?int boosts_unrestrict:flags2.9?int emojiset:flags2.10?StickerSet bot_verification:flags2.17?BotVerification stargifts_count:flags2.18?int send_paid_messages_stars:flags2.21?long main_tab:flags2.22?ProfileTab = ChatFull;
messageActionStarGift#f24de7fa flags:# name_hidden:flags.0?true saved:flags.2?true converted:flags.3?true upgraded:flags.5?true refunded:flags.9?true can_upgrade:flags.10?true prepaid_upgrade:flags.13?true upgrade_separate:flags.16?true gift:StarGift message:flags.1?TextWithEntities convert_stars:flags.4?long upgrade_msg_id:flags.5?int upgrade_stars:flags.8?long from_id:flags.11?Peer peer:flags.12?Peer saved_id:flags.12?long prepaid_upgrade_hash:flags.14?string gift_msg_id:flags.15?int = MessageAction;
userFull#3fd81e28 flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true contact_require_premium:flags.29?true read_dates_private:flags.30?true flags2:# sponsored_enabled:flags2.7?true can_view_revenue:flags2.9?true bot_can_manage_emoji_status:flags2.10?true display_gifts_button:flags2.16?true id:long about:flags.1?string settings:PeerSettings personal_photo:flags.21?Photo profile_photo:flags.2?Photo fallback_photo:flags.22?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int ttl_period:flags.14?int theme_emoticon:flags.15?string private_forward_name:flags.16?string bot_group_admin_rights:flags.17?ChatAdminRights bot_broadcast_admin_rights:flags.18?ChatAdminRights wallpaper:flags.24?WallPaper stories:flags.25?PeerStories business_work_hours:flags2.0?BusinessWorkHours business_location:flags2.1?BusinessLocation business_greeting_message:flags2.2?BusinessGreetingMessage business_away_message:flags2.3?BusinessAwayMessage business_intro:flags2.4?BusinessIntro birthday:flags2.5?Birthday personal_channel_id:flags2.6?long personal_channel_message:flags2.6?int stargifts_count:flags2.8?int starref_program:flags2.11?StarRefProgram bot_verification:flags2.12?BotVerification send_paid_messages_stars:flags2.14?long disallowed_gifts:flags2.15?DisallowedGiftsSettings stars_rating:flags2.17?StarsRating stars_my_pending_rating:flags2.18?StarsRating stars_my_pending_rating_date:flags2.18?int main_tab:flags2.20?ProfileTab saved_music:flags2.21?Document = UserFull;
inputStorePaymentStarsTopup#f9a2a6cb flags:# stars:long currency:string amount:long spend_purpose_peer:flags.0?InputPeer = InputStorePaymentPurpose;
starGift#80ac53c3 flags:# limited:flags.0?true sold_out:flags.1?true birthday:flags.2?true require_premium:flags.7?true limited_per_user:flags.8?true id:long sticker:Document stars:long availability_remains:flags.0?int availability_total:flags.0?int availability_resale:flags.4?long convert_stars:long first_sale_date:flags.1?int last_sale_date:flags.1?int upgrade_stars:flags.3?long resell_min_stars:flags.4?long title:flags.5?string released_by:flags.6?Peer per_user_total:flags.8?int per_user_remains:flags.8?int locked_until_date:flags.9?int = StarGift;
payments.uniqueStarGift#416c56e8 gift:StarGift chats:Vector<Chat> users:Vector<User> = payments.UniqueStarGift;
messages.webPagePreview#8c9a88ac media:MessageMedia chats:Vector<Chat> users:Vector<User> = messages.WebPagePreview;
savedStarGift#19a9b572 flags:# name_hidden:flags.0?true unsaved:flags.5?true refunded:flags.9?true can_upgrade:flags.10?true pinned_to_top:flags.12?true upgrade_separate:flags.17?true from_id:flags.1?Peer date:int gift:StarGift message:flags.2?TextWithEntities msg_id:flags.3?int saved_id:flags.11?long convert_stars:flags.4?long upgrade_stars:flags.6?long can_export_at:flags.7?int transfer_stars:flags.8?long can_transfer_at:flags.13?int can_resell_at:flags.14?int collection_id:flags.15?Vector<int> prepaid_upgrade_hash:flags.16?string = SavedStarGift;
profileTabPosts#b98cd696 = ProfileTab;
profileTabGifts#4d4bd46a = ProfileTab;
profileTabMedia#72c64955 = ProfileTab;
profileTabFiles#ab339c00 = ProfileTab;
profileTabMusic#9f27d26e = ProfileTab;
profileTabVoice#e477092e = ProfileTab;
profileTabLinks#d3656499 = ProfileTab;
profileTabGifs#a2c0f695 = ProfileTab;
users.savedMusicNotModified#e3878aa4 count:int = users.SavedMusic;
users.savedMusic#34a2f297 count:int documents:Vector<Document> = users.SavedMusic;
account.savedMusicIdsNotModified#4fc81d6e = account.SavedMusicIds;
account.savedMusicIds#998d6636 ids:Vector<long> = account.SavedMusicIds;
payments.checkCanSendGiftResultOk#374fa7ad = payments.CheckCanSendGiftResult;
payments.checkCanSendGiftResultFail#d5e58274 reason:TextWithEntities = payments.CheckCanSendGiftResult;
---functions---
account.setMainProfileTab#5dee78b0 tab:ProfileTab = Bool;
account.saveMusic#b26732a9 flags:# unsave:flags.0?true id:InputDocument after_id:flags.1?InputDocument = Bool;
account.getSavedMusicIds#e09d5faf hash:long = account.SavedMusicIds;
users.getSavedMusic#788d7fe3 id:InputUser offset:int limit:int hash:long = users.SavedMusic;
users.getSavedMusicByID#7573a4e9 id:InputUser documents:Vector<InputDocument> = users.SavedMusic;
channels.setMainProfileTab#3583fcb1 channel:InputChannel tab:ProfileTab = Bool;
payments.checkCanSendGift#c0c4edc9 gift_id:long = payments.CheckCanSendGiftResult;
```

### [Layer 212](https://core.telegram.org/schema?layer=212)

This layer introduces the following features:

-   [Separately prepay for the upgrade of a gift »](/api/gifts/#prepaying-for-someone-else-s-upgrade).
-   [Get info about the value of a collectible gift »](/method/payments.getUniqueStarGiftValueInfo/)

#### [Schema](/schema/) changes

##### New Methods

-   Added [payments.getUniqueStarGiftValueInfo](/method/payments.getUniqueStarGiftValueInfo/) - Get information about the value of a [collectible gift »](/api/gifts/#collectible-gifts).

##### Changed Methods

-   Added **exclude\_upgradable**, **exclude\_unupgradable** parameters, removed **exclude\_limited** parameter in [payments.getSavedStarGifts](/method/payments.getSavedStarGifts/)

##### New Constructors

-   Added [inputInvoiceStarGiftPrepaidUpgrade](/constructor/inputInvoiceStarGiftPrepaidUpgrade/) - [Separately prepay for the upgrade of a gift »](/api/gifts/#prepaying-for-someone-else-s-upgrade).
-   Added [payments.uniqueStarGiftValueInfo](/constructor/payments.uniqueStarGiftValueInfo/) - Information about the value of a [collectible gift »](/api/gifts/#collectible-gifts).

##### Changed Constructors

-   Added **prepaid\_upgrade**, **prepaid\_upgrade\_hash**, **gift\_msg\_id** parameters in [messageActionStarGift](/constructor/messageActionStarGift/)
-   Added **prepaid\_upgrade** parameter in [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/)
-   Added **posts\_search**, **stargift\_prepaid\_upgrade** parameters in [starsTransaction](/constructor/starsTransaction/)
-   Added **gift\_id**, **value\_amount**, **value\_currency** parameters in [starGiftUnique](/constructor/starGiftUnique/)
-   Added **prepaid\_upgrade\_hash** parameter in [savedStarGift](/constructor/savedStarGift/)

#### [End-to-end group call schema »](/api/end-to-end/group-calls/) changes

##### New Constructors

-   Added [e2e.chain.groupBroadcastNonceCommit](/constructor/e2e.chain.groupBroadcastNonceCommit/) - Commit message for the [E2E conference call emoji verification protocol](/api/end-to-end/group-calls/#commit-reveal-protocol-workflow).
-   Added [e2e.chain.groupBroadcastNonceReveal](/constructor/e2e.chain.groupBroadcastNonceReveal/) - Reveal message for the [E2E conference call emoji verification protocol](/api/end-to-end/group-calls/#commit-reveal-protocol-workflow).
-   Added [e2e.chain.groupParticipant](/constructor/e2e.chain.groupParticipant/) - A participant and their permissions in an [E2E conference call group state »](/api/end-to-end/group-calls/#participants-and-permissions).
-   Added [e2e.chain.groupState](/constructor/e2e.chain.groupState/) - The participant list and external permission mask for an [E2E conference call blockchain state »](/api/end-to-end/group-calls/#participants-and-permissions).
-   Added [e2e.chain.sharedKey](/constructor/e2e.chain.sharedKey/) - Encrypted [shared group key material](/api/end-to-end/group-calls/#shared-key-encryption) for an E2E conference call.
-   Added [e2e.chain.changeNoop](/constructor/e2e.chain.changeNoop/) - A no-operation [E2E conference call blockchain change](/api/end-to-end/group-calls/#change-types-for-group-calls), potentially used only to randomize the resulting block hash.
-   Added [e2e.chain.changeSetValue](/constructor/e2e.chain.changeSetValue/) - Updates the [key-value trie state for an E2E conference call blockchain](/api/end-to-end/group-calls/#change-types-for-group-calls).
-   Added [e2e.chain.changeSetGroupState](/constructor/e2e.chain.changeSetGroupState/) - Updates the [E2E conference call participant list and permissions](/api/end-to-end/group-calls/#change-types-for-group-calls), clearing the current shared key state.
-   Added [e2e.chain.changeSetSharedKey](/constructor/e2e.chain.changeSetSharedKey/) - Establishes a new shared encryption key for an E2E conference call, see [change types for group calls »](/api/end-to-end/group-calls/#change-types-for-group-calls).
-   Added [e2e.chain.stateProof](/constructor/e2e.chain.stateProof/) - Proof of the [E2E conference call blockchain state](/api/end-to-end/group-calls/#block-application-process) after a block has been applied.
-   Added [e2e.chain.block](/constructor/e2e.chain.block/) - A block in the [main E2E conference call blockchain](/api/end-to-end/group-calls/#block-structure), containing state changes for the call and the resulting state proof.
-   Added [e2e.callPacket](/constructor/e2e.callPacket/) - Marker constructor whose CRC32 constructor ID is used when deriving and authenticating [encrypted group call packets](/api/end-to-end/group-calls/#packet-encryption).
-   Added [e2e.callPacketLargeMsgId](/constructor/e2e.callPacketLargeMsgId/) - Marker constructor whose CRC32 constructor ID is used when signing the large message ID produced while encrypting [group call packets](/api/end-to-end/group-calls/#packet-encryption).

#### [End-to-end group call schema »](/api/end-to-end/group-calls/)

```
e2e.chain.groupBroadcastNonceCommit#d1512ae7 signature:int512 user_id:int64 chain_height:int32 chain_hash:int256 nonce_hash:int256 = e2e.chain.GroupBroadcast;
e2e.chain.groupBroadcastNonceReveal#83f4f9d8 signature:int512 user_id:int64 chain_height:int32 chain_hash:int256 nonce:int256 = e2e.chain.GroupBroadcast;
e2e.chain.groupParticipant#28852f20 user_id:long public_key:int256 flags:# add_users:flags.0?true remove_users:flags.1?true set_value:flags.2?true version:int = e2e.chain.GroupParticipant;
e2e.chain.groupState#1ddc7584 participants:Vector<e2e.chain.GroupParticipant> external_permissions:int = e2e.chain.GroupState;
e2e.chain.sharedKey#8a847e7f ek:int256 encrypted_shared_key:string dest_user_id:Vector<long> dest_header:Vector<bytes> = e2e.chain.SharedKey;
e2e.chain.changeNoop#deb4a41b nonce:int256 = e2e.chain.Change;
e2e.chain.changeSetValue#7c4f9bfa key:bytes value:bytes = e2e.chain.Change;
e2e.chain.changeSetGroupState#2cf17146 group_state:e2e.chain.GroupState = e2e.chain.Change;
e2e.chain.changeSetSharedKey#987a2158 shared_key:e2e.chain.SharedKey = e2e.chain.Change;
e2e.chain.stateProof#d6b679e6 flags:# kv_hash:int256 group_state:flags.0?e2e.chain.GroupState shared_key:flags.1?e2e.chain.SharedKey = e2e.chain.StateProof;
e2e.chain.block#639a3db6 signature:int512 flags:# prev_block_hash:int256 changes:Vector<e2e.chain.Change> height:int state_proof:e2e.chain.StateProof signature_public_key:flags.0?int256 = e2e.chain.Block;
e2e.callPacket#40a6bee9 = e2e.CallPacket;
e2e.callPacketLargeMsgId#1ce56c2d = e2e.CallPacketLargeMsgId;
```

#### [Schema](/schema/)

```
messageActionStarGift#f24de7fa flags:# name_hidden:flags.0?true saved:flags.2?true converted:flags.3?true upgraded:flags.5?true refunded:flags.9?true can_upgrade:flags.10?true prepaid_upgrade:flags.13?true gift:StarGift message:flags.1?TextWithEntities convert_stars:flags.4?long upgrade_msg_id:flags.5?int upgrade_stars:flags.8?long from_id:flags.11?Peer peer:flags.12?Peer saved_id:flags.12?long prepaid_upgrade_hash:flags.14?string gift_msg_id:flags.15?int = MessageAction;
messageActionStarGiftUnique#34f762f3 flags:# upgrade:flags.0?true transferred:flags.1?true saved:flags.2?true refunded:flags.5?true prepaid_upgrade:flags.11?true gift:StarGift can_export_at:flags.3?int transfer_stars:flags.4?long from_id:flags.6?Peer peer:flags.7?Peer saved_id:flags.7?long resale_amount:flags.8?StarsAmount can_transfer_at:flags.9?int can_resell_at:flags.10?int = MessageAction;
inputInvoiceStarGiftPrepaidUpgrade#9a0b48b8 peer:InputPeer hash:string = InputInvoice;
starsTransaction#13659eb0 flags:# refund:flags.3?true pending:flags.4?true failed:flags.6?true gift:flags.10?true reaction:flags.11?true stargift_upgrade:flags.18?true business_transfer:flags.21?true stargift_resale:flags.22?true posts_search:flags.24?true stargift_prepaid_upgrade:flags.25?true id:string amount:StarsAmount date:int peer:StarsTransactionPeer title:flags.0?string description:flags.1?string photo:flags.2?WebDocument transaction_date:flags.5?int transaction_url:flags.5?string bot_payload:flags.7?bytes msg_id:flags.8?int extended_media:flags.9?Vector<MessageMedia> subscription_period:flags.12?int giveaway_post_id:flags.13?int stargift:flags.14?StarGift floodskip_number:flags.15?int starref_commission_permille:flags.16?int starref_peer:flags.17?Peer starref_amount:flags.17?StarsAmount paid_messages:flags.19?int premium_gift_months:flags.20?int ads_proceeds_from_date:flags.23?int ads_proceeds_to_date:flags.23?int = StarsTransaction;
starGiftUnique#26a5553e flags:# require_premium:flags.6?true resale_ton_only:flags.7?true id:long gift_id:long title:string slug:string num:int owner_id:flags.0?Peer owner_name:flags.1?string owner_address:flags.2?string attributes:Vector<StarGiftAttribute> availability_issued:int availability_total:int gift_address:flags.3?string resell_amount:flags.4?Vector<StarsAmount> released_by:flags.5?Peer value_amount:flags.8?long value_currency:flags.8?string = StarGift;
savedStarGift#19a9b572 flags:# name_hidden:flags.0?true unsaved:flags.5?true refunded:flags.9?true can_upgrade:flags.10?true pinned_to_top:flags.12?true from_id:flags.1?Peer date:int gift:StarGift message:flags.2?TextWithEntities msg_id:flags.3?int saved_id:flags.11?long convert_stars:flags.4?long upgrade_stars:flags.6?long can_export_at:flags.7?int transfer_stars:flags.8?long can_transfer_at:flags.13?int can_resell_at:flags.14?int collection_id:flags.15?Vector<int> prepaid_upgrade_hash:flags.16?string = SavedStarGift;
payments.uniqueStarGiftValueInfo#512fe446 flags:# last_sale_on_fragment:flags.1?true value_is_average:flags.6?true currency:string value:long initial_sale_date:int initial_sale_stars:long initial_sale_price:long last_sale_date:flags.0?int last_sale_price:flags.0?long floor_price:flags.2?long average_price:flags.3?long listed_count:flags.4?int fragment_listed_count:flags.5?int fragment_listed_url:flags.5?string = payments.UniqueStarGiftValueInfo;
---functions---
payments.getSavedStarGifts#a319e569 flags:# exclude_unsaved:flags.0?true exclude_saved:flags.1?true exclude_unlimited:flags.2?true exclude_unique:flags.4?true sort_by_value:flags.5?true exclude_upgradable:flags.7?true exclude_unupgradable:flags.8?true peer:InputPeer collection_id:flags.6?int offset:string limit:int = payments.SavedStarGifts;
payments.getUniqueStarGiftValueInfo#4365af6b slug:string = payments.UniqueStarGiftValueInfo;
```

### [Layer 211](https://core.telegram.org/schema?layer=211)

This layer introduces:

-   [Story albums »](/api/stories/#story-albums)
-   [Star gift collection link previews »](/constructor/webPageAttributeStarGiftCollection/)
-   [Full text global channel post search »](/api/search/#posts-tab)
-   [Allow specification of the resale price of a collectible gift in TON »](/constructor/messageActionStarGiftUnique/)
-   [Pending star ratings »](/api/stars/#star-rating)

#### [Schema](/schema/) changes

##### New Methods

-   Added [channels.checkSearchPostsFlood](/method/channels.checkSearchPostsFlood/) - Check if the specified [global post search »](/api/search/#posts-tab) requires payment.
-   Added [stories.createAlbum](/method/stories.createAlbum/) - Creates a [story album](/api/stories/#story-albums).
-   Added [stories.updateAlbum](/method/stories.updateAlbum/) - Rename a [story albums »](/api/stories/#story-albums), or add, delete or reorder stories in it.
-   Added [stories.reorderAlbums](/method/stories.reorderAlbums/) - Reorder [story albums on a profile »](/api/stories/#story-albums).
-   Added [stories.deleteAlbum](/method/stories.deleteAlbum/) - Delete a [story album](/api/stories/#story-albums).
-   Added [stories.getAlbums](/method/stories.getAlbums/) - Get [story albums](/api/stories/#story-albums) created by a peer.
-   Added [stories.getAlbumStories](/method/stories.getAlbumStories/) - Get stories in a [story album »](/api/stories/#story-albums).

##### Changed Methods

-   Added **flags**, **query**, **allow\_paid\_stars** parameters, changed type of **hashtag** from **string** to **flags.0?string** in [channels.searchPosts](/method/channels.searchPosts/)
-   Added **resell\_amount** parameter, removed **resell\_stars** parameter in [payments.updateStarGiftPrice](/method/payments.updateStarGiftPrice/)
-   Added **albums** parameter in [stories.sendStory](/method/stories.sendStory/)

##### New Constructors

-   Added [webPageAttributeStarGiftCollection](/constructor/webPageAttributeStarGiftCollection/) - Contains info about a [gift collection »](/api/gifts/#gift-collections) for a [webPage](/constructor/webPage/) preview of a [gift collection »](/api/gifts/#gift-collections) (the [webPage](/constructor/webPage/) will have a `type` of `telegram_collection`).
-   Added [storyAlbum](/constructor/storyAlbum/) - Represents a [story album »](/api/stories/#story-albums).
-   Added [stories.albumsNotModified](/constructor/stories.albumsNotModified/) - The [story album list »](/api/stories/#story-albums) hasn't changed.
-   Added [stories.albums](/constructor/stories.albums/) - [Story albums »](/api/stories/#story-albums).
-   Added [searchPostsFlood](/constructor/searchPostsFlood/) - Indicates if the specified [global post search »](/api/search/#posts-tab) requires payment.

##### Changed Constructors

-   Added **resale\_amount** parameter, removed **resale\_stars** parameter in [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/)
-   Added **stars\_my\_pending\_rating**, **stars\_my\_pending\_rating\_date** parameters in [userFull](/constructor/userFull/)
-   Added **search\_flood** parameter in [messages.messagesSlice](/constructor/messages.messagesSlice/)
-   Added **flags**, **ton** parameters in [inputInvoiceStarGiftResale](/constructor/inputInvoiceStarGiftResale/)
-   Added **albums** parameter in [storyItem](/constructor/storyItem/)
-   Added **resale\_ton\_only**, **resell\_amount** parameters, removed **resell\_stars** parameter in [starGiftUnique](/constructor/starGiftUnique/)

#### [Schema](/schema/)

```
messageActionStarGiftUnique#34f762f3 flags:# upgrade:flags.0?true transferred:flags.1?true saved:flags.2?true refunded:flags.5?true gift:StarGift can_export_at:flags.3?int transfer_stars:flags.4?long from_id:flags.6?Peer peer:flags.7?Peer saved_id:flags.7?long resale_amount:flags.8?StarsAmount can_transfer_at:flags.9?int can_resell_at:flags.10?int = MessageAction;
userFull#7e63ce1f flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true contact_require_premium:flags.29?true read_dates_private:flags.30?true flags2:# sponsored_enabled:flags2.7?true can_view_revenue:flags2.9?true bot_can_manage_emoji_status:flags2.10?true display_gifts_button:flags2.16?true id:long about:flags.1?string settings:PeerSettings personal_photo:flags.21?Photo profile_photo:flags.2?Photo fallback_photo:flags.22?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int ttl_period:flags.14?int theme_emoticon:flags.15?string private_forward_name:flags.16?string bot_group_admin_rights:flags.17?ChatAdminRights bot_broadcast_admin_rights:flags.18?ChatAdminRights wallpaper:flags.24?WallPaper stories:flags.25?PeerStories business_work_hours:flags2.0?BusinessWorkHours business_location:flags2.1?BusinessLocation business_greeting_message:flags2.2?BusinessGreetingMessage business_away_message:flags2.3?BusinessAwayMessage business_intro:flags2.4?BusinessIntro birthday:flags2.5?Birthday personal_channel_id:flags2.6?long personal_channel_message:flags2.6?int stargifts_count:flags2.8?int starref_program:flags2.11?StarRefProgram bot_verification:flags2.12?BotVerification send_paid_messages_stars:flags2.14?long disallowed_gifts:flags2.15?DisallowedGiftsSettings stars_rating:flags2.17?StarsRating stars_my_pending_rating:flags2.18?StarsRating stars_my_pending_rating_date:flags2.18?int = UserFull;
messages.messagesSlice#762b263d flags:# inexact:flags.1?true count:int next_rate:flags.0?int offset_id_offset:flags.2?int search_flood:flags.3?SearchPostsFlood messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.Messages;
webPageAttributeStarGiftCollection#31cad303 icons:Vector<Document> = WebPageAttribute;
inputInvoiceStarGiftResale#c39f5324 flags:# ton:flags.0?true slug:string to_id:InputPeer = InputInvoice;
storyItem#edf164f1 flags:# pinned:flags.5?true public:flags.7?true close_friends:flags.8?true min:flags.9?true noforwards:flags.10?true edited:flags.11?true contacts:flags.12?true selected_contacts:flags.13?true out:flags.16?true id:int date:int from_id:flags.18?Peer fwd_from:flags.17?StoryFwdHeader expire_date:int caption:flags.0?string entities:flags.1?Vector<MessageEntity> media:MessageMedia media_areas:flags.14?Vector<MediaArea> privacy:flags.2?Vector<PrivacyRule> views:flags.3?StoryViews sent_reaction:flags.15?Reaction albums:flags.19?Vector<int> = StoryItem;
starGiftUnique#3a274d50 flags:# require_premium:flags.6?true resale_ton_only:flags.7?true id:long title:string slug:string num:int owner_id:flags.0?Peer owner_name:flags.1?string owner_address:flags.2?string attributes:Vector<StarGiftAttribute> availability_issued:int availability_total:int gift_address:flags.3?string resell_amount:flags.4?Vector<StarsAmount> released_by:flags.5?Peer = StarGift;
storyAlbum#9325705a flags:# album_id:int title:string icon_photo:flags.0?Photo icon_video:flags.1?Document = StoryAlbum;
stories.albumsNotModified#564edaeb = stories.Albums;
stories.albums#c3987a3a hash:long albums:Vector<StoryAlbum> = stories.Albums;
searchPostsFlood#3e0b5b6a flags:# query_is_free:flags.0?true total_daily:int remains:int wait_till:flags.1?int stars_amount:long = SearchPostsFlood;
---functions---
channels.searchPosts#f2c4f24d flags:# hashtag:flags.0?string query:flags.1?string offset_rate:int offset_peer:InputPeer offset_id:int limit:int allow_paid_stars:flags.2?long = messages.Messages;
channels.checkSearchPostsFlood#22567115 flags:# query:flags.0?string = SearchPostsFlood;
payments.updateStarGiftPrice#edbe6ccb stargift:InputSavedStarGift resell_amount:StarsAmount = Updates;
stories.sendStory#737fc2ec flags:# pinned:flags.2?true noforwards:flags.4?true fwd_modified:flags.7?true peer:InputPeer media:InputMedia media_areas:flags.5?Vector<MediaArea> caption:flags.0?string entities:flags.1?Vector<MessageEntity> privacy_rules:Vector<InputPrivacyRule> random_id:long period:flags.3?int fwd_from_id:flags.6?InputPeer fwd_from_story:flags.6?int albums:flags.8?Vector<int> = Updates;
stories.createAlbum#a36396e5 peer:InputPeer title:string stories:Vector<int> = StoryAlbum;
stories.updateAlbum#5e5259b6 flags:# peer:InputPeer album_id:int title:flags.0?string delete_stories:flags.1?Vector<int> add_stories:flags.2?Vector<int> order:flags.3?Vector<int> = StoryAlbum;
stories.reorderAlbums#8535fbd9 peer:InputPeer order:Vector<int> = Bool;
stories.deleteAlbum#8d3456d0 peer:InputPeer album_id:int = Bool;
stories.getAlbums#25b3eac7 peer:InputPeer hash:long = stories.Albums;
stories.getAlbumStories#ac806d61 peer:InputPeer album_id:int offset:int limit:int = stories.Stories;
```

### [Layer 210](https://core.telegram.org/schema?layer=210)

This layer introduces:

-   [Star gift collections »](/api/gifts/#gift-collections)
-   Premium-only gifts (`require_premium`) and per-user gift limits for certain gift types (`per_user_total`, `per_user_remains`).
-   [Star ratings »](/api/stars/#star-rating)

#### [Schema](/schema/) changes

##### New Methods

-   Added [payments.createStarGiftCollection](/method/payments.createStarGiftCollection/) - Create a [star gift collection »](/api/gifts/#gift-collections).
-   Added [payments.updateStarGiftCollection](/method/payments.updateStarGiftCollection/) - Add or remove gifts from a [star gift collection »](/api/gifts/#gift-collections), or rename the collection.
-   Added [payments.reorderStarGiftCollections](/method/payments.reorderStarGiftCollections/) - Reorder the [star gift collections »](/api/gifts/#gift-collections) on an owned peer's profile.
-   Added [payments.deleteStarGiftCollection](/method/payments.deleteStarGiftCollection/) - Delete a [star gift collection »](/api/gifts/#gift-collections).
-   Added [payments.getStarGiftCollections](/method/payments.getStarGiftCollections/) - Fetches all [star gift collections »](/api/gifts/#gift-collections) of a peer.

##### Changed Methods

-   Added **collection\_id** parameter in [payments.getSavedStarGifts](/method/payments.getSavedStarGifts/)

##### New Constructors

-   Added [starsRating](/constructor/starsRating/) - Represents the profile's [star rating, see here »](/api/stars/#star-rating) for more info.
-   Added [starGiftCollection](/constructor/starGiftCollection/) - Represents a [star gift collection »](/api/gifts/#gift-collections).
-   Added [payments.starGiftCollectionsNotModified](/constructor/payments.starGiftCollectionsNotModified/) - The list of [star gift collections »](/api/gifts/#gift-collections) hasn't changed.
-   Added [payments.starGiftCollections](/constructor/payments.starGiftCollections/) - Represents a list of [star gift collections »](/api/gifts/#gift-collections).

##### Changed Constructors

-   Added **stars\_rating** parameter in [userFull](/constructor/userFull/)
-   Added **require\_premium**, **limited\_per\_user**, **per\_user\_total**, **per\_user\_remains** parameters in [starGift](/constructor/starGift/)
-   Added **require\_premium** parameter in [starGiftUnique](/constructor/starGiftUnique/)
-   Added **collection\_id** parameter in [savedStarGift](/constructor/savedStarGift/)

#### [Schema](/schema/)

```
userFull#29de80be flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true contact_require_premium:flags.29?true read_dates_private:flags.30?true flags2:# sponsored_enabled:flags2.7?true can_view_revenue:flags2.9?true bot_can_manage_emoji_status:flags2.10?true display_gifts_button:flags2.16?true id:long about:flags.1?string settings:PeerSettings personal_photo:flags.21?Photo profile_photo:flags.2?Photo fallback_photo:flags.22?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int ttl_period:flags.14?int theme_emoticon:flags.15?string private_forward_name:flags.16?string bot_group_admin_rights:flags.17?ChatAdminRights bot_broadcast_admin_rights:flags.18?ChatAdminRights wallpaper:flags.24?WallPaper stories:flags.25?PeerStories business_work_hours:flags2.0?BusinessWorkHours business_location:flags2.1?BusinessLocation business_greeting_message:flags2.2?BusinessGreetingMessage business_away_message:flags2.3?BusinessAwayMessage business_intro:flags2.4?BusinessIntro birthday:flags2.5?Birthday personal_channel_id:flags2.6?long personal_channel_message:flags2.6?int stargifts_count:flags2.8?int starref_program:flags2.11?StarRefProgram bot_verification:flags2.12?BotVerification send_paid_messages_stars:flags2.14?long disallowed_gifts:flags2.15?DisallowedGiftsSettings stars_rating:flags2.17?StarsRating = UserFull;
starGift#00bcff5b flags:# limited:flags.0?true sold_out:flags.1?true birthday:flags.2?true require_premium:flags.7?true limited_per_user:flags.8?true id:long sticker:Document stars:long availability_remains:flags.0?int availability_total:flags.0?int availability_resale:flags.4?long convert_stars:long first_sale_date:flags.1?int last_sale_date:flags.1?int upgrade_stars:flags.3?long resell_min_stars:flags.4?long title:flags.5?string released_by:flags.6?Peer per_user_total:flags.8?int per_user_remains:flags.8?int = StarGift;
starGiftUnique#f63778ae flags:# require_premium:flags.6?true id:long title:string slug:string num:int owner_id:flags.0?Peer owner_name:flags.1?string owner_address:flags.2?string attributes:Vector<StarGiftAttribute> availability_issued:int availability_total:int gift_address:flags.3?string resell_stars:flags.4?long released_by:flags.5?Peer = StarGift;
savedStarGift#1ea646df flags:# name_hidden:flags.0?true unsaved:flags.5?true refunded:flags.9?true can_upgrade:flags.10?true pinned_to_top:flags.12?true from_id:flags.1?Peer date:int gift:StarGift message:flags.2?TextWithEntities msg_id:flags.3?int saved_id:flags.11?long convert_stars:flags.4?long upgrade_stars:flags.6?long can_export_at:flags.7?int transfer_stars:flags.8?long can_transfer_at:flags.13?int can_resell_at:flags.14?int collection_id:flags.15?Vector<int> = SavedStarGift;
starsRating#1b0e4f07 flags:# level:int current_level_stars:long stars:long next_level_stars:flags.0?long = StarsRating;
starGiftCollection#9d6b13b0 flags:# collection_id:int title:string icon:flags.0?Document gifts_count:int hash:long = StarGiftCollection;
payments.starGiftCollectionsNotModified#a0ba4f17 = payments.StarGiftCollections;
payments.starGiftCollections#8a2932f3 collections:Vector<StarGiftCollection> = payments.StarGiftCollections;
---functions---
payments.getSavedStarGifts#a319e569 flags:# exclude_unsaved:flags.0?true exclude_saved:flags.1?true exclude_unlimited:flags.2?true exclude_limited:flags.3?true exclude_unique:flags.4?true sort_by_value:flags.5?true peer:InputPeer collection_id:flags.6?int offset:string limit:int = payments.SavedStarGifts;
payments.createStarGiftCollection#1f4a0e87 peer:InputPeer title:string stargift:Vector<InputSavedStarGift> = StarGiftCollection;
payments.updateStarGiftCollection#4fddbee7 flags:# peer:InputPeer collection_id:int title:flags.0?string delete_stargift:flags.1?Vector<InputSavedStarGift> add_stargift:flags.2?Vector<InputSavedStarGift> order:flags.3?Vector<InputSavedStarGift> = StarGiftCollection;
payments.reorderStarGiftCollections#c32af4cc peer:InputPeer order:Vector<int> = Bool;
payments.deleteStarGiftCollection#ad5648e8 peer:InputPeer collection_id:int = Bool;
payments.getStarGiftCollections#981b91dd peer:InputPeer hash:long = payments.StarGiftCollections;
```

### [Layer 208](https://core.telegram.org/schema?layer=208)

This layer introduces:

-   [Suggested channel posts »](/api/suggested-posts/)
-   Add a new `manage_direct_messages` [admin right](/constructor/chatAdminRights/)
-   Add support for the new `manage_direct_messages` [admin right](/constructor/chatAdminRights/) in [group/channel bot links](/api/links/#group-channel-bot-links)
-   [Allow replying to specific todo tasks »](/api/todo/)
-   Unify channel revenue statistics and withdrawal methods with the equivalent ones used for stars, by simply adding a `ton` flag and the missing parameters:
    -   [Balance and transaction history »](/api/stars/#balance-and-transaction-history)
    -   [Revenue statistics »](/api/stars/#revenue-statistics)
    -   [Withdrawing revenue »](/api/stars/#withdrawing-revenue)
-   In some places in the API, it's possible to use Grams instead of Stars, see [here »](/api/stars/#gram) for more info.

#### [Schema](/schema/) changes

##### Changed Constructors

-   Added **todo\_item\_id** parameter in [messageReplyHeader](/constructor/messageReplyHeader/)
-   Added **todo\_item\_id** parameter in [inputReplyToMessage](/constructor/inputReplyToMessage/)
-   Removed **posts\_search** parameter in [starsTransaction](/constructor/starsTransaction/)

#### [Schema](/schema/)

```
messageReplyHeader#6917560b flags:# reply_to_scheduled:flags.2?true forum_topic:flags.3?true quote:flags.9?true reply_to_msg_id:flags.4?int reply_to_peer_id:flags.0?Peer reply_from:flags.5?MessageFwdHeader reply_media:flags.8?MessageMedia reply_to_top_id:flags.1?int quote_text:flags.6?string quote_entities:flags.7?Vector<MessageEntity> quote_offset:flags.10?int todo_item_id:flags.11?int = MessageReplyHeader;
inputReplyToMessage#869fbe10 flags:# reply_to_msg_id:int top_msg_id:flags.0?int reply_to_peer_id:flags.1?InputPeer quote_text:flags.2?string quote_entities:flags.3?Vector<MessageEntity> quote_offset:flags.4?int monoforum_peer_id:flags.5?InputPeer todo_item_id:flags.6?int = InputReplyTo;
starsTransaction#13659eb0 flags:# refund:flags.3?true pending:flags.4?true failed:flags.6?true gift:flags.10?true reaction:flags.11?true stargift_upgrade:flags.18?true business_transfer:flags.21?true stargift_resale:flags.22?true id:string amount:StarsAmount date:int peer:StarsTransactionPeer title:flags.0?string description:flags.1?string photo:flags.2?WebDocument transaction_date:flags.5?int transaction_url:flags.5?string bot_payload:flags.7?bytes msg_id:flags.8?int extended_media:flags.9?Vector<MessageMedia> subscription_period:flags.12?int giveaway_post_id:flags.13?int stargift:flags.14?StarGift floodskip_number:flags.15?int starref_commission_permille:flags.16?int starref_peer:flags.17?Peer starref_amount:flags.17?StarsAmount paid_messages:flags.19?int premium_gift_months:flags.20?int ads_proceeds_from_date:flags.23?int ads_proceeds_to_date:flags.23?int = StarsTransaction;
```

### [Layer 207](https://core.telegram.org/schema?layer=207)

This layer introduces:

-   [Suggested posts »](/api/suggested-posts/), letting users propose paid posts to channels, with approval, success and refund [service messages](/constructor/messageActionSuggestedPostApproval/)
-   A new `manage_direct_messages` [admin right](/constructor/chatAdminRights/)
-   The ability to gift, hold and withdraw [Gram »](/api/stars/#gram) alongside Telegram Stars: TON balances and transactions in the stars status/transaction/revenue methods, TON gifts ([messageActionGiftTon](/constructor/messageActionGiftTon/), [starsTonAmount](/constructor/starsTonAmount/)), and the unification of channel revenue statistics and withdrawals with the equivalent Stars methods
-   [Global post search »](/api/search/#posts-tab)

#### [Schema](/schema/) changes

##### New Methods

-   Added [messages.toggleSuggestedPostApproval](/method/messages.toggleSuggestedPostApproval/) - Approve or reject a [suggested post »](/api/suggested-posts/).

##### Changed Methods

-   Added **suggested\_post** parameter in [messages.sendMessage](/method/messages.sendMessage/)
-   Added **suggested\_post** parameter in [messages.sendMedia](/method/messages.sendMedia/)
-   Added **suggested\_post** parameter in [messages.forwardMessages](/method/messages.forwardMessages/)
-   Added **suggested\_post** parameter in [messages.saveDraft](/method/messages.saveDraft/)
-   Added **flags**, **ton** parameters in [payments.getStarsStatus](/method/payments.getStarsStatus/)
-   Added **ton** parameter in [payments.getStarsTransactions](/method/payments.getStarsTransactions/)
-   Added **ton** parameter in [payments.getStarsRevenueStats](/method/payments.getStarsRevenueStats/)
-   Added **flags**, **ton**, **amount** parameters, removed **stars** parameter in [payments.getStarsRevenueWithdrawalUrl](/method/payments.getStarsRevenueWithdrawalUrl/)
-   Added **flags**, **ton** parameters in [payments.getStarsTransactionsByID](/method/payments.getStarsTransactionsByID/)

##### Deleted Methods

-   Removed stats.getBroadcastRevenueStats
-   Removed stats.getBroadcastRevenueWithdrawalUrl
-   Removed stats.getBroadcastRevenueTransactions

##### New Constructors

-   Added [suggestedPost](/constructor/suggestedPost/) - Contains info about a [suggested post »](/api/suggested-posts/).
-   Added [messageActionSuggestedPostApproval](/constructor/messageActionSuggestedPostApproval/) - A [suggested post »](/api/suggested-posts/) was approved or rejected.
-   Added [messageActionSuggestedPostSuccess](/constructor/messageActionSuggestedPostSuccess/) - A [suggested post »](/api/suggested-posts/) was successfully posted, and payment for it was successfully received.
-   Added [messageActionSuggestedPostRefund](/constructor/messageActionSuggestedPostRefund/) - A [suggested post »](/api/suggested-posts/) was accepted and posted or scheduled, but either the channel deleted the posted/scheduled post before [stars\_suggested\_post\_age\_min](/api/config/#stars-suggested-post-age-min) seconds have elapsed, or the user refunded the payment for the stars used to pay for the suggested post.
-   Added [starsTonAmount](/constructor/starsTonAmount/) - Describes an amount of Gram in nanograms (i.e. `1/1_000_000_000` of a Gram).
-   Added [messageActionGiftTon](/constructor/messageActionGiftTon/) - You were gifted some Grams.
-   Added [inputStickerSetTonGifts](/constructor/inputStickerSetTonGifts/) - TON gifts stickerset.

##### Changed Constructors

-   Added **paid\_suggested\_post\_stars**, **paid\_suggested\_post\_ton**, **suggested\_post** parameters in [message](/constructor/message/)
-   Added **suggested\_post** parameter in [draftMessage](/constructor/draftMessage/)
-   Added **manage\_direct\_messages** parameter in [chatAdminRights](/constructor/chatAdminRights/)
-   Added **posts\_search**, **amount**, **ads\_proceeds\_from\_date**, **ads\_proceeds\_to\_date** parameters, removed **stars** parameter in [starsTransaction](/constructor/starsTransaction/)
-   Added **flags**, **top\_hours\_graph** parameters in [payments.starsRevenueStats](/constructor/payments.starsRevenueStats/)
-   Added **released\_by** parameter in [starGift](/constructor/starGift/)
-   Added **chats**, **users** parameters in [payments.starGifts](/constructor/payments.starGifts/)
-   Added **released\_by** parameter in [starGiftUnique](/constructor/starGiftUnique/)

##### Deleted Constructors

-   Removed stats.broadcastRevenueStats
-   Removed stats.broadcastRevenueWithdrawalUrl
-   Removed broadcastRevenueTransactionProceeds
-   Removed broadcastRevenueTransactionWithdrawal
-   Removed broadcastRevenueTransactionRefund
-   Removed stats.broadcastRevenueTransactions
-   Removed broadcastRevenueBalances
-   Removed updateBroadcastRevenueTransactions

#### [Schema](/schema/)

```
message#9815cec8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true post:flags.14?true from_scheduled:flags.18?true legacy:flags.19?true edit_hide:flags.21?true pinned:flags.24?true noforwards:flags.26?true invert_media:flags.27?true flags2:# offline:flags2.1?true video_processing_pending:flags2.4?true paid_suggested_post_stars:flags2.8?true paid_suggested_post_ton:flags2.9?true id:int from_id:flags.8?Peer from_boosts_applied:flags.29?int peer_id:Peer saved_peer_id:flags.28?Peer fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long via_business_bot_id:flags2.0?long reply_to:flags.3?MessageReplyHeader date:int message:string media:flags.9?MessageMedia reply_markup:flags.6?ReplyMarkup entities:flags.7?Vector<MessageEntity> views:flags.10?int forwards:flags.10?int replies:flags.23?MessageReplies edit_date:flags.15?int post_author:flags.16?string grouped_id:flags.17?long reactions:flags.20?MessageReactions restriction_reason:flags.22?Vector<RestrictionReason> ttl_period:flags.25?int quick_reply_shortcut_id:flags.30?int effect:flags2.2?long factcheck:flags2.3?FactCheck report_delivery_until_date:flags2.5?int paid_message_stars:flags2.6?long suggested_post:flags2.7?SuggestedPost = Message;
draftMessage#96eaa5eb flags:# no_webpage:flags.1?true invert_media:flags.6?true reply_to:flags.4?InputReplyTo message:string entities:flags.3?Vector<MessageEntity> media:flags.5?InputMedia date:int effect:flags.7?long suggested_post:flags.8?SuggestedPost = DraftMessage;
chatAdminRights#5fb224d5 flags:# change_info:flags.0?true post_messages:flags.1?true edit_messages:flags.2?true delete_messages:flags.3?true ban_users:flags.4?true invite_users:flags.5?true pin_messages:flags.7?true add_admins:flags.9?true anonymous:flags.10?true manage_call:flags.11?true other:flags.12?true manage_topics:flags.13?true post_stories:flags.14?true edit_stories:flags.15?true delete_stories:flags.16?true manage_direct_messages:flags.17?true = ChatAdminRights;
starsTransaction#13659eb0 flags:# refund:flags.3?true pending:flags.4?true failed:flags.6?true gift:flags.10?true reaction:flags.11?true stargift_upgrade:flags.18?true business_transfer:flags.21?true stargift_resale:flags.22?true posts_search:flags.24?true id:string amount:StarsAmount date:int peer:StarsTransactionPeer title:flags.0?string description:flags.1?string photo:flags.2?WebDocument transaction_date:flags.5?int transaction_url:flags.5?string bot_payload:flags.7?bytes msg_id:flags.8?int extended_media:flags.9?Vector<MessageMedia> subscription_period:flags.12?int giveaway_post_id:flags.13?int stargift:flags.14?StarGift floodskip_number:flags.15?int starref_commission_permille:flags.16?int starref_peer:flags.17?Peer starref_amount:flags.17?StarsAmount paid_messages:flags.19?int premium_gift_months:flags.20?int ads_proceeds_from_date:flags.23?int ads_proceeds_to_date:flags.23?int = StarsTransaction;
payments.starsRevenueStats#6c207376 flags:# top_hours_graph:flags.0?StatsGraph revenue_graph:StatsGraph status:StarsRevenueStatus usd_rate:double = payments.StarsRevenueStats;
starGift#7f853c12 flags:# limited:flags.0?true sold_out:flags.1?true birthday:flags.2?true id:long sticker:Document stars:long availability_remains:flags.0?int availability_total:flags.0?int availability_resale:flags.4?long convert_stars:long first_sale_date:flags.1?int last_sale_date:flags.1?int upgrade_stars:flags.3?long resell_min_stars:flags.4?long title:flags.5?string released_by:flags.6?Peer = StarGift;
payments.starGifts#2ed82995 hash:int gifts:Vector<StarGift> chats:Vector<Chat> users:Vector<User> = payments.StarGifts;
starGiftUnique#f63778ae flags:# id:long title:string slug:string num:int owner_id:flags.0?Peer owner_name:flags.1?string owner_address:flags.2?string attributes:Vector<StarGiftAttribute> availability_issued:int availability_total:int gift_address:flags.3?string resell_stars:flags.4?long released_by:flags.5?Peer = StarGift;
suggestedPost#0e8e37e5 flags:# accepted:flags.1?true rejected:flags.2?true price:flags.3?StarsAmount schedule_date:flags.0?int = SuggestedPost;
messageActionSuggestedPostApproval#ee7a1596 flags:# rejected:flags.0?true balance_too_low:flags.1?true reject_comment:flags.2?string schedule_date:flags.3?int price:flags.4?StarsAmount = MessageAction;
messageActionSuggestedPostSuccess#95ddcf69 price:StarsAmount = MessageAction;
messageActionSuggestedPostRefund#69f916f8 flags:# payer_initiated:flags.0?true = MessageAction;
starsTonAmount#74aee3e0 amount:long = StarsAmount;
messageActionGiftTon#a8a3c699 flags:# currency:string amount:long crypto_currency:string crypto_amount:long transaction_id:flags.0?string = MessageAction;
inputStickerSetTonGifts#1cf671a0 = InputStickerSet;
---functions---
messages.sendMessage#fe05dc9a flags:# no_webpage:flags.1?true silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;
messages.sendMedia#ac55d9c1 flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo media:InputMedia message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;
messages.forwardMessages#978928ca flags:# silent:flags.5?true background:flags.6?true with_my_score:flags.8?true drop_author:flags.11?true drop_media_captions:flags.12?true noforwards:flags.14?true allow_paid_floodskip:flags.19?true from_peer:InputPeer id:Vector<int> random_id:Vector<long> to_peer:InputPeer top_msg_id:flags.9?int reply_to:flags.22?InputReplyTo schedule_date:flags.10?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut video_timestamp:flags.20?int allow_paid_stars:flags.21?long suggested_post:flags.23?SuggestedPost = Updates;
messages.saveDraft#54ae308e flags:# no_webpage:flags.1?true invert_media:flags.6?true reply_to:flags.4?InputReplyTo peer:InputPeer message:string entities:flags.3?Vector<MessageEntity> media:flags.5?InputMedia effect:flags.7?long suggested_post:flags.8?SuggestedPost = Bool;
payments.getStarsStatus#4ea9b3bf flags:# ton:flags.0?true peer:InputPeer = payments.StarsStatus;
payments.getStarsTransactions#69da4557 flags:# inbound:flags.0?true outbound:flags.1?true ascending:flags.2?true ton:flags.4?true subscription_id:flags.3?string peer:InputPeer offset:string limit:int = payments.StarsStatus;
payments.getStarsRevenueStats#d91ffad6 flags:# dark:flags.0?true ton:flags.1?true peer:InputPeer = payments.StarsRevenueStats;
payments.getStarsRevenueWithdrawalUrl#2433dc92 flags:# ton:flags.0?true peer:InputPeer amount:flags.1?long password:InputCheckPasswordSRP = payments.StarsRevenueWithdrawalUrl;
payments.getStarsTransactionsByID#2dca16b8 flags:# ton:flags.0?true peer:InputPeer id:Vector<InputStarsTransaction> = payments.StarsStatus;
messages.toggleSuggestedPostApproval#8107455c flags:# reject:flags.1?true peer:InputPeer msg_id:int schedule_date:flags.0?int reject_comment:flags.2?string = Updates;
```

### [Layer 205](https://core.telegram.org/schema?layer=205)

This layer introduces:

-   [Sponsored messages to show on channel videos »](/api/sponsored-messages/#getting-sponsored-video-advertisements)
-   [To-do lists »](/api/todo/)
-   [Rename account.addNoPaidMessagesException to account.toggleNoPaidMessagesException, and add a `require_payment` flag to refund all Stars transferred to us by a peer with paid messages »](/method/account.toggleNoPaidMessagesException/)
-   Allow invoking [account.toggleNoPaidMessagesException](/method/account.toggleNoPaidMessagesException/) for monoforum topics, and add a new [updateMonoForumNoPaidException](/constructor/updateMonoForumNoPaidException/) to signal changes to [monoForumDialog](/constructor/monoForumDialog/).`nopaid_messages_exception` to other admins and to other currently logged in sessions of the current monoforum admin.

#### [Schema](/schema/) changes

##### New Methods

-   Added [messages.toggleTodoCompleted](/method/messages.toggleTodoCompleted/) - Mark one or more items of a [todo list »](/api/todo/) as completed or not completed.
-   Added [messages.appendTodoList](/method/messages.appendTodoList/) - Appends one or more items to a [todo list »](/api/todo/).
-   Added [account.toggleNoPaidMessagesException](/method/account.toggleNoPaidMessagesException/) - Allow a user to send us messages without paying if [paid messages »](/api/paid-messages/) are enabled.

##### Changed Methods

-   Added **flags**, **msg\_id** parameters in [messages.getSponsoredMessages](/method/messages.getSponsoredMessages/)
-   Added **flags**, **parent\_peer** parameters in [account.getPaidMessagesRevenue](/method/account.getPaidMessagesRevenue/)

##### Deleted Methods

-   Removed account.addNoPaidMessagesException

##### New Constructors

-   Added [todoItem](/constructor/todoItem/) - An item of a [todo list »](/api/todo/).
-   Added [todoList](/constructor/todoList/) - Represents a [todo list »](/api/todo/).
-   Added [todoCompletion](/constructor/todoCompletion/) - A completed [todo list »](/api/todo/) item.
-   Added [inputMediaTodo](/constructor/inputMediaTodo/) - Creates a [todo list »](/api/todo/).
-   Added [messageMediaToDo](/constructor/messageMediaToDo/) - Represents a [todo list »](/api/todo/).
-   Added [messageActionTodoCompletions](/constructor/messageActionTodoCompletions/) - Items were marked as completed or not completed in a [todo list »](/api/todo/).
-   Added [messageActionTodoAppendTasks](/constructor/messageActionTodoAppendTasks/) - Items were appended to the [todo list »](/api/todo/).
-   Added [updateMonoForumNoPaidException](/constructor/updateMonoForumNoPaidException/) - An admin has (un)exempted this [monoforum topic »](/api/monoforum/) from payment to send messages using [account.toggleNoPaidMessagesException](/method/account.toggleNoPaidMessagesException/).

##### Changed Constructors

-   Added **saved\_peer\_id** parameter in [messageService](/constructor/messageService/)
-   Added **send\_paid\_messages\_stars** parameter in [channelFull](/constructor/channelFull/)
-   Added **min\_display\_duration**, **max\_display\_duration** parameters in [sponsoredMessage](/constructor/sponsoredMessage/)
-   Added **start\_delay**, **between\_delay** parameters in [messages.sponsoredMessages](/constructor/messages.sponsoredMessages/)
-   Added **nopaid\_messages\_exception** parameter in [monoForumDialog](/constructor/monoForumDialog/)

#### PUSH notification changes

##### New PUSH notifications

-   Added [CHANNEL\_MESSAGE\_TODO](/api/push-updates/#channel-message-todo) - `{1} posted a checklist {2}`
-   Added [CHANNEL\_MESSAGE\_TODO\_APPEND](/api/push-updates/#channel-message-todo-append) - `{1} added {2} tasks`
-   Added [CHANNEL\_MESSAGE\_TODO\_DONE](/api/push-updates/#channel-message-todo-done) - `{1} toggled {2} tasks`
-   Added [CHAT\_MESSAGE\_TODO](/api/push-updates/#chat-message-todo) - `{1} sent a checklist {3} to the group {2}`
-   Added [CHAT\_MESSAGE\_TODO\_APPEND](/api/push-updates/#chat-message-todo-append) - `{1} added {3} tasks in the group {2}`
-   Added [CHAT\_MESSAGE\_TODO\_DONE](/api/push-updates/#chat-message-todo-done) - `{1} toggled {3} tasks in the group {2}`
-   Added [CHAT\_REACT\_TODO](/api/push-updates/#chat-react-todo) - `{1}: {3} to your checklist {4} in {2}`
-   Added [MESSAGE\_TODO](/api/push-updates/#message-todo) - `{1} sent you a checklist {2}`
-   Added [PINNED\_TODO](/api/push-updates/#pinned-todo) - `{1} pinned a checklist {2}`
-   Added [REACT\_TODO](/api/push-updates/#react-todo) - `{1}: {2} to your checklist {3}`

#### [Schema](/schema/)

```
messageService#7a800e0a flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true reactions_are_possible:flags.9?true silent:flags.13?true post:flags.14?true legacy:flags.19?true id:int from_id:flags.8?Peer peer_id:Peer saved_peer_id:flags.28?Peer reply_to:flags.3?MessageReplyHeader date:int action:MessageAction reactions:flags.20?MessageReactions ttl_period:flags.25?int = Message;
channelFull#e07429de flags:# can_view_participants:flags.3?true can_set_username:flags.6?true can_set_stickers:flags.7?true hidden_prehistory:flags.10?true can_set_location:flags.16?true has_scheduled:flags.19?true can_view_stats:flags.20?true blocked:flags.22?true flags2:# can_delete_channel:flags2.0?true antispam:flags2.1?true participants_hidden:flags2.2?true translations_disabled:flags2.3?true stories_pinned_available:flags2.5?true view_forum_as_messages:flags2.6?true restricted_sponsored:flags2.11?true can_view_revenue:flags2.12?true paid_media_allowed:flags2.14?true can_view_stars_revenue:flags2.15?true paid_reactions_available:flags2.16?true stargifts_available:flags2.19?true paid_messages_available:flags2.20?true id:long about:string participants_count:flags.0?int admins_count:flags.1?int kicked_count:flags.2?int banned_count:flags.2?int online_count:flags.13?int read_inbox_max_id:int read_outbox_max_id:int unread_count:int chat_photo:Photo notify_settings:PeerNotifySettings exported_invite:flags.23?ExportedChatInvite bot_info:Vector<BotInfo> migrated_from_chat_id:flags.4?long migrated_from_max_id:flags.4?int pinned_msg_id:flags.5?int stickerset:flags.8?StickerSet available_min_id:flags.9?int folder_id:flags.11?int linked_chat_id:flags.14?long location:flags.15?ChannelLocation slowmode_seconds:flags.17?int slowmode_next_send_date:flags.18?int stats_dc:flags.12?int pts:int call:flags.21?InputGroupCall ttl_period:flags.24?int pending_suggestions:flags.25?Vector<string> groupcall_default_join_as:flags.26?Peer theme_emoticon:flags.27?string requests_pending:flags.28?int recent_requesters:flags.28?Vector<long> default_send_as:flags.29?Peer available_reactions:flags.30?ChatReactions reactions_limit:flags2.13?int stories:flags2.4?PeerStories wallpaper:flags2.7?WallPaper boosts_applied:flags2.8?int boosts_unrestrict:flags2.9?int emojiset:flags2.10?StickerSet bot_verification:flags2.17?BotVerification stargifts_count:flags2.18?int send_paid_messages_stars:flags2.21?long = ChatFull;
sponsoredMessage#7dbf8673 flags:# recommended:flags.5?true can_report:flags.12?true random_id:bytes url:string title:string message:string entities:flags.1?Vector<MessageEntity> photo:flags.6?Photo media:flags.14?MessageMedia color:flags.13?PeerColor button_text:string sponsor_info:flags.7?string additional_info:flags.8?string min_display_duration:flags.15?int max_display_duration:flags.15?int = SponsoredMessage;
messages.sponsoredMessages#ffda656d flags:# posts_between:flags.0?int start_delay:flags.1?int between_delay:flags.2?int messages:Vector<SponsoredMessage> chats:Vector<Chat> users:Vector<User> = messages.SponsoredMessages;
monoForumDialog#64407ea7 flags:# unread_mark:flags.3?true nopaid_messages_exception:flags.4?true peer:Peer top_message:int read_inbox_max_id:int read_outbox_max_id:int unread_count:int unread_reactions_count:int draft:flags.1?DraftMessage = SavedDialog;
todoItem#cba9a52f id:int title:TextWithEntities = TodoItem;
todoList#49b92a26 flags:# others_can_append:flags.0?true others_can_complete:flags.1?true title:TextWithEntities list:Vector<TodoItem> = TodoList;
todoCompletion#4cc120b7 id:int completed_by:long date:int = TodoCompletion;
inputMediaTodo#9fc55fde todo:TodoList = InputMedia;
messageMediaToDo#8a53b014 flags:# todo:TodoList completions:flags.0?Vector<TodoCompletion> = MessageMedia;
messageActionTodoCompletions#cc7c5c89 completed:Vector<int> incompleted:Vector<int> = MessageAction;
messageActionTodoAppendTasks#c7edbc83 list:Vector<TodoItem> = MessageAction;
updateMonoForumNoPaidException#9f812b08 flags:# exception:flags.0?true channel_id:long saved_peer_id:Peer = Update;
---functions---
messages.getSponsoredMessages#3d6ce850 flags:# peer:InputPeer msg_id:flags.0?int = messages.SponsoredMessages;
account.getPaidMessagesRevenue#19ba4a67 flags:# parent_peer:flags.0?InputPeer user_id:InputUser = account.PaidMessagesRevenue;
messages.toggleTodoCompleted#d3e03124 peer:InputPeer msg_id:int completed:Vector<int> incompleted:Vector<int> = Updates;
messages.appendTodoList#21a61057 peer:InputPeer msg_id:int list:Vector<TodoItem> = Updates;
account.toggleNoPaidMessagesException#fe2eda76 flags:# refund_charged:flags.0?true require_payment:flags.2?true parent_peer:flags.1?InputPeer user_id:InputUser = Bool;
```

### [Layer 204](https://core.telegram.org/schema?layer=204)

This layer introduces:

-   [Monoforums »](/api/monoforum/)
-   [Bot API monoforum IDs »](/api/bots/ids/#monoforum-ids)
-   [Tabbed forum UI »](/api/forum/#tabbed-or-list-based-forum-ui)
-   All flags added to [channel](/constructor/channel/) (listed below) are valid `min` flags, meaning they must be applied over the locally stored version even if the `min` flag of the incoming [channel](/constructor/channel/) is set.

#### [Schema](/schema/) changes

##### New Methods

-   Added [messages.getSavedDialogsByID](/method/messages.getSavedDialogsByID/) - Obtain information about specific [saved message dialogs »](/api/saved-messages/#saved-message-dialogs) or [monoforum topics »](/api/monoforum/).
-   Added [messages.readSavedHistory](/method/messages.readSavedHistory/) - Mark messages as read in a [monoforum topic »](/api/monoforum/).
-   Added [channels.getMessageAuthor](/method/channels.getMessageAuthor/) - Can only be invoked by non-bot admins of a [monoforum »](/api/monoforum/), obtains the original sender of a message sent by other monoforum admins to the monoforum, on behalf of the channel associated to the monoforum.

##### Changed Methods

-   Added **reply\_to** parameter in [messages.forwardMessages](/method/messages.forwardMessages/)
-   Added **parent\_peer** parameter in [messages.markDialogUnread](/method/messages.markDialogUnread/)
-   Added **flags**, **parent\_peer** parameters in [messages.getDialogUnreadMarks](/method/messages.getDialogUnreadMarks/)
-   Added **saved\_peer\_id** parameter in [messages.unpinAllMessages](/method/messages.unpinAllMessages/)
-   Added **saved\_peer\_id** parameter in [messages.getUnreadReactions](/method/messages.getUnreadReactions/)
-   Added **saved\_peer\_id** parameter in [messages.readReactions](/method/messages.readReactions/)
-   Added **tabs** parameter in [channels.toggleForum](/method/channels.toggleForum/)
-   Added **parent\_peer** parameter in [messages.getSavedDialogs](/method/messages.getSavedDialogs/)
-   Added **flags**, **parent\_peer** parameters in [messages.getSavedHistory](/method/messages.getSavedHistory/)
-   Added **parent\_peer** parameter in [messages.deleteSavedHistory](/method/messages.deleteSavedHistory/)
-   Added **flags**, **broadcast\_messages\_allowed** parameters in [channels.updatePaidMessagesPrice](/method/channels.updatePaidMessagesPrice/)

##### New Constructors

-   Added [inputReplyToMonoForum](/constructor/inputReplyToMonoForum/) - Used to send messages to a [monoforum topic](/api/monoforum/).
-   Added [monoForumDialog](/constructor/monoForumDialog/) - Represents a [monoforum topic »](/api/monoforum/).
-   Added [updateReadMonoForumInbox](/constructor/updateReadMonoForumInbox/) - Incoming messages in a [monoforum topic](/api/monoforum/) were read
-   Added [updateReadMonoForumOutbox](/constructor/updateReadMonoForumOutbox/) - Outgoing messages in a [monoforum](/api/monoforum/) were read.

##### Changed Constructors

-   Added **broadcast\_messages\_allowed**, **monoforum**, **forum\_tabs**, **linked\_monoforum\_id** parameters in [channel](/constructor/channel/)
-   Added **saved\_peer\_id** parameter in [updateDraftMessage](/constructor/updateDraftMessage/)
-   Added **saved\_peer\_id** parameter in [updateChannelReadMessagesContents](/constructor/updateChannelReadMessagesContents/)
-   Added **saved\_peer\_id** parameter in [updateDialogUnreadMark](/constructor/updateDialogUnreadMark/)
-   Added **saved\_peer\_id** parameter in [updateMessageReactions](/constructor/updateMessageReactions/)
-   Added **monoforum\_peer\_id** parameter in [inputReplyToMessage](/constructor/inputReplyToMessage/)
-   Added **flags**, **broadcast\_messages\_allowed** parameters in [messageActionPaidMessagesPrice](/constructor/messageActionPaidMessagesPrice/)

#### [Schema](/schema/)

```
channel#fe685355 flags:# creator:flags.0?true left:flags.2?true broadcast:flags.5?true verified:flags.7?true megagroup:flags.8?true restricted:flags.9?true signatures:flags.11?true min:flags.12?true scam:flags.19?true has_link:flags.20?true has_geo:flags.21?true slowmode_enabled:flags.22?true call_active:flags.23?true call_not_empty:flags.24?true fake:flags.25?true gigagroup:flags.26?true noforwards:flags.27?true join_to_send:flags.28?true join_request:flags.29?true forum:flags.30?true flags2:# stories_hidden:flags2.1?true stories_hidden_min:flags2.2?true stories_unavailable:flags2.3?true signature_profiles:flags2.12?true autotranslation:flags2.15?true broadcast_messages_allowed:flags2.16?true monoforum:flags2.17?true forum_tabs:flags2.19?true id:long access_hash:flags.13?long title:string username:flags.6?string photo:ChatPhoto date:int restriction_reason:flags.9?Vector<RestrictionReason> admin_rights:flags.14?ChatAdminRights banned_rights:flags.15?ChatBannedRights default_banned_rights:flags.18?ChatBannedRights participants_count:flags.17?int usernames:flags2.0?Vector<Username> stories_max_id:flags2.4?int color:flags2.7?PeerColor profile_color:flags2.8?PeerColor emoji_status:flags2.9?EmojiStatus level:flags2.10?int subscription_until_date:flags2.11?int bot_verification_icon:flags2.13?long send_paid_messages_stars:flags2.14?long linked_monoforum_id:flags2.18?long = Chat;
updateDraftMessage#edfc111e flags:# peer:Peer top_msg_id:flags.0?int saved_peer_id:flags.1?Peer draft:DraftMessage = Update;
updateChannelReadMessagesContents#25f324f7 flags:# channel_id:long top_msg_id:flags.0?int saved_peer_id:flags.1?Peer messages:Vector<int> = Update;
updateDialogUnreadMark#b658f23e flags:# unread:flags.0?true peer:DialogPeer saved_peer_id:flags.1?Peer = Update;
updateMessageReactions#1e297bfa flags:# peer:Peer msg_id:int top_msg_id:flags.0?int saved_peer_id:flags.1?Peer reactions:MessageReactions = Update;
inputReplyToMessage#b07038b0 flags:# reply_to_msg_id:int top_msg_id:flags.0?int reply_to_peer_id:flags.1?InputPeer quote_text:flags.2?string quote_entities:flags.3?Vector<MessageEntity> quote_offset:flags.4?int monoforum_peer_id:flags.5?InputPeer = InputReplyTo;
messageActionPaidMessagesPrice#84b88578 flags:# broadcast_messages_allowed:flags.0?true stars:long = MessageAction;
inputReplyToMonoForum#69d66c45 monoforum_peer_id:InputPeer = InputReplyTo;
monoForumDialog#64407ea7 flags:# unread_mark:flags.3?true peer:Peer top_message:int read_inbox_max_id:int read_outbox_max_id:int unread_count:int unread_reactions_count:int draft:flags.1?DraftMessage = SavedDialog;
updateReadMonoForumInbox#77b0e372 channel_id:long saved_peer_id:Peer read_max_id:int = Update;
updateReadMonoForumOutbox#a4a79376 channel_id:long saved_peer_id:Peer read_max_id:int = Update;
---functions---
messages.forwardMessages#38f0188c flags:# silent:flags.5?true background:flags.6?true with_my_score:flags.8?true drop_author:flags.11?true drop_media_captions:flags.12?true noforwards:flags.14?true allow_paid_floodskip:flags.19?true from_peer:InputPeer id:Vector<int> random_id:Vector<long> to_peer:InputPeer top_msg_id:flags.9?int reply_to:flags.22?InputReplyTo schedule_date:flags.10?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut video_timestamp:flags.20?int allow_paid_stars:flags.21?long = Updates;
messages.markDialogUnread#8c5006f8 flags:# unread:flags.0?true parent_peer:flags.1?InputPeer peer:InputDialogPeer = Bool;
messages.getDialogUnreadMarks#21202222 flags:# parent_peer:flags.0?InputPeer = Vector<DialogPeer>;
messages.unpinAllMessages#062dd747 flags:# peer:InputPeer top_msg_id:flags.0?int saved_peer_id:flags.1?InputPeer = messages.AffectedHistory;
messages.getUnreadReactions#bd7f90ac flags:# peer:InputPeer top_msg_id:flags.0?int saved_peer_id:flags.1?InputPeer offset_id:int add_offset:int limit:int max_id:int min_id:int = messages.Messages;
messages.readReactions#9ec44f93 flags:# peer:InputPeer top_msg_id:flags.0?int saved_peer_id:flags.1?InputPeer = messages.AffectedHistory;
channels.toggleForum#3ff75734 channel:InputChannel enabled:Bool tabs:Bool = Updates;
messages.getSavedDialogs#1e91fc99 flags:# exclude_pinned:flags.0?true parent_peer:flags.1?InputPeer offset_date:int offset_id:int offset_peer:InputPeer limit:int hash:long = messages.SavedDialogs;
messages.getSavedHistory#998ab009 flags:# parent_peer:flags.0?InputPeer peer:InputPeer offset_id:int offset_date:int add_offset:int limit:int max_id:int min_id:int hash:long = messages.Messages;
messages.deleteSavedHistory#4dc5085f flags:# parent_peer:flags.0?InputPeer peer:InputPeer max_id:int min_date:flags.2?int max_date:flags.3?int = messages.AffectedHistory;
channels.updatePaidMessagesPrice#4b12327b flags:# broadcast_messages_allowed:flags.0?true channel:InputChannel send_paid_messages_stars:long = Updates;
messages.getSavedDialogsByID#6f6f9c96 flags:# parent_peer:flags.1?InputPeer ids:Vector<InputPeer> = messages.SavedDialogs;
messages.readSavedHistory#ba4a3b5b parent_peer:InputPeer peer:InputPeer max_id:int = Bool;
channels.getMessageAuthor#ece2a0e6 channel:InputChannel id:int = User;
```

### [Layer 203](https://core.telegram.org/schema?layer=203)

This layer introduces:

-   [Methods to resell collectible gifts »](/api/gifts/#reselling-collectible-gifts)
-   [Autotranslation for all users of a channel »](/api/translation/#autotranslation-for-channels)
-   [stories.canSendStory now returns the number of available active story slots »](/method/stories.canSendStory/)
-   [Collectible gift links »](/api/links/#collectible-gift-link)
-   [Custom suggestions »](/api/config/#custom-suggestions)
-   [All suggestion fields were moved from the client configuration object to help.getPromoData »](/api/config/#suggestions)
-   All flags added to [channel](/constructor/channel/) (listed below) are valid `min` flags, meaning they must be applied over the locally stored version even if the `min` flag of the incoming [channel](/constructor/channel/) is set.

#### [Schema](/schema/) changes

##### New Methods

-   Added [payments.getResaleStarGifts](/method/payments.getResaleStarGifts/) - Get [collectible gifts](/api/gifts/#collectible-gifts) of a specific type currently on resale, see [here »](/api/gifts/#reselling-collectible-gifts) for more info.
-   Added [payments.updateStarGiftPrice](/method/payments.updateStarGiftPrice/) - A [collectible gift we own »](/api/gifts/#collectible-gifts) can be put up for sale on the [gift marketplace »](https://telegram.org/blog/gift-marketplace-and-more) with this method, see [here »](/api/gifts/#reselling-collectible-gifts) for more info.
-   Added [channels.toggleAutotranslation](/method/channels.toggleAutotranslation/) - Toggle autotranslation in a channel, for all users: see [here »](/api/translation/#autotranslation-for-channels) for more info.

##### Changed Methods

-   Changed type of [stories.canSendStory](/method/stories.canSendStory/) from **Bool** to **stories.CanSendStoryCount**

##### New Constructors

-   Added [inputSavedStarGiftSlug](/constructor/inputSavedStarGiftSlug/) - Points to a [collectible gift obtained from a collectible gift link »](/api/links/#collectible-gift-link).
-   Added [starGiftAttributeIdModel](/constructor/starGiftAttributeIdModel/) - The ID of a model of a [collectible gift »](/api/gifts/#collectible-gifts).
-   Added [starGiftAttributeIdPattern](/constructor/starGiftAttributeIdPattern/) - The ID of a pattern of a [collectible gift »](/api/gifts/#collectible-gifts).
-   Added [starGiftAttributeIdBackdrop](/constructor/starGiftAttributeIdBackdrop/) - The ID of a backdrop of a [collectible gift »](/api/gifts/#collectible-gifts).
-   Added [starGiftAttributeCounter](/constructor/starGiftAttributeCounter/) - Indicates the total number of gifts that have the specified attribute.
-   Added [payments.resaleStarGifts](/constructor/payments.resaleStarGifts/) - List of gifts currently on [resale »](/api/gifts/#reselling-collectible-gifts).
-   Added [inputInvoiceStarGiftResale](/constructor/inputInvoiceStarGiftResale/) - Used to buy a [collectible gift](/api/gifts/#collectible-gifts) currently up on resale, see [here](/api/gifts/#reselling-collectible-gifts) for more info on the full flow.
-   Added [channelAdminLogEventActionToggleAutotranslation](/constructor/channelAdminLogEventActionToggleAutotranslation/) - [Channel autotranslation was toggled »](/api/translation/#autotranslation-for-channels).
-   Added [stories.canSendStoryCount](/constructor/stories.canSendStoryCount/) - Contains the number of available active story slots (equal to the value of the [`story_expiring_limit_*` client configuration parameter](/api/config/#story-expiring-limit-default) minus the number of currently active stories).
-   Added [pendingSuggestion](/constructor/pendingSuggestion/) - Represents a [custom pending suggestion »](/api/config/#custom-suggestions).

##### Changed Constructors

-   Added **autotranslation** parameter in [channel](/constructor/channel/)
-   Added **pending\_suggestions**, **dismissed\_suggestions**, **custom\_pending\_suggestion** parameters, changed type of **peer** from **Peer** to **flags.3?Peer** in [help.promoData](/constructor/help.promoData/)
-   Added **availability\_resale**, **resell\_min\_stars**, **title** parameters in [starGift](/constructor/starGift/)
-   Added **backdrop\_id** parameter in [starGiftAttributeBackdrop](/constructor/starGiftAttributeBackdrop/)
-   Added **resell\_stars** parameter in [starGiftUnique](/constructor/starGiftUnique/)
-   Added **resale\_stars**, **can\_transfer\_at**, **can\_resell\_at** parameters in [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/)
-   Added **can\_transfer\_at**, **can\_resell\_at** parameters in [savedStarGift](/constructor/savedStarGift/)

#### [Schema](/schema/)

```
channel#7482147e flags:# creator:flags.0?true left:flags.2?true broadcast:flags.5?true verified:flags.7?true megagroup:flags.8?true restricted:flags.9?true signatures:flags.11?true min:flags.12?true scam:flags.19?true has_link:flags.20?true has_geo:flags.21?true slowmode_enabled:flags.22?true call_active:flags.23?true call_not_empty:flags.24?true fake:flags.25?true gigagroup:flags.26?true noforwards:flags.27?true join_to_send:flags.28?true join_request:flags.29?true forum:flags.30?true flags2:# stories_hidden:flags2.1?true stories_hidden_min:flags2.2?true stories_unavailable:flags2.3?true signature_profiles:flags2.12?true autotranslation:flags2.15?true id:long access_hash:flags.13?long title:string username:flags.6?string photo:ChatPhoto date:int restriction_reason:flags.9?Vector<RestrictionReason> admin_rights:flags.14?ChatAdminRights banned_rights:flags.15?ChatBannedRights default_banned_rights:flags.18?ChatBannedRights participants_count:flags.17?int usernames:flags2.0?Vector<Username> stories_max_id:flags2.4?int color:flags2.7?PeerColor profile_color:flags2.8?PeerColor emoji_status:flags2.9?EmojiStatus level:flags2.10?int subscription_until_date:flags2.11?int bot_verification_icon:flags2.13?long send_paid_messages_stars:flags2.14?long = Chat;
help.promoData#08a4d87a flags:# proxy:flags.0?true expires:int peer:flags.3?Peer psa_type:flags.1?string psa_message:flags.2?string pending_suggestions:Vector<string> dismissed_suggestions:Vector<string> custom_pending_suggestion:flags.4?PendingSuggestion chats:Vector<Chat> users:Vector<User> = help.PromoData;
starGift#c62aca28 flags:# limited:flags.0?true sold_out:flags.1?true birthday:flags.2?true id:long sticker:Document stars:long availability_remains:flags.0?int availability_total:flags.0?int availability_resale:flags.4?long convert_stars:long first_sale_date:flags.1?int last_sale_date:flags.1?int upgrade_stars:flags.3?long resell_min_stars:flags.4?long title:flags.5?string = StarGift;
starGiftAttributeBackdrop#d93d859c name:string backdrop_id:int center_color:int edge_color:int pattern_color:int text_color:int rarity_permille:int = StarGiftAttribute;
starGiftUnique#6411db89 flags:# id:long title:string slug:string num:int owner_id:flags.0?Peer owner_name:flags.1?string owner_address:flags.2?string attributes:Vector<StarGiftAttribute> availability_issued:int availability_total:int gift_address:flags.3?string resell_stars:flags.4?long = StarGift;
messageActionStarGiftUnique#2e3ae60e flags:# upgrade:flags.0?true transferred:flags.1?true saved:flags.2?true refunded:flags.5?true gift:StarGift can_export_at:flags.3?int transfer_stars:flags.4?long from_id:flags.6?Peer peer:flags.7?Peer saved_id:flags.7?long resale_stars:flags.8?long can_transfer_at:flags.9?int can_resell_at:flags.10?int = MessageAction;
savedStarGift#dfda0499 flags:# name_hidden:flags.0?true unsaved:flags.5?true refunded:flags.9?true can_upgrade:flags.10?true pinned_to_top:flags.12?true from_id:flags.1?Peer date:int gift:StarGift message:flags.2?TextWithEntities msg_id:flags.3?int saved_id:flags.11?long convert_stars:flags.4?long upgrade_stars:flags.6?long can_export_at:flags.7?int transfer_stars:flags.8?long can_transfer_at:flags.13?int can_resell_at:flags.14?int = SavedStarGift;
inputSavedStarGiftSlug#2085c238 slug:string = InputSavedStarGift;
starGiftAttributeIdModel#48aaae3c document_id:long = StarGiftAttributeId;
starGiftAttributeIdPattern#4a162433 document_id:long = StarGiftAttributeId;
starGiftAttributeIdBackdrop#1f01c757 backdrop_id:int = StarGiftAttributeId;
starGiftAttributeCounter#2eb1b658 attribute:StarGiftAttributeId count:int = StarGiftAttributeCounter;
payments.resaleStarGifts#947a12df flags:# count:int gifts:Vector<StarGift> next_offset:flags.0?string attributes:flags.1?Vector<StarGiftAttribute> attributes_hash:flags.1?long chats:Vector<Chat> counters:flags.2?Vector<StarGiftAttributeCounter> users:Vector<User> = payments.ResaleStarGifts;
inputInvoiceStarGiftResale#63cbc38c slug:string to_id:InputPeer = InputInvoice;
channelAdminLogEventActionToggleAutotranslation#c517f77e new_value:Bool = ChannelAdminLogEventAction;
stories.canSendStoryCount#c387c04e count_remains:int = stories.CanSendStoryCount;
pendingSuggestion#e7e82e12 suggestion:string title:TextWithEntities description:TextWithEntities url:string = PendingSuggestion;
---functions---
stories.canSendStory#30eb63f0 peer:InputPeer = stories.CanSendStoryCount;
payments.getResaleStarGifts#7a5fa236 flags:# sort_by_price:flags.1?true sort_by_num:flags.2?true attributes_hash:flags.0?long gift_id:long attributes:flags.3?Vector<StarGiftAttributeId> offset:string limit:int = payments.ResaleStarGifts;
payments.updateStarGiftPrice#3baea4e1 stargift:InputSavedStarGift resell_stars:long = Updates;
channels.toggleAutotranslation#167fc0a1 channel:InputChannel enabled:Bool = Updates;
```

### [Layer 202](https://core.telegram.org/schema?layer=202)

This layer introduces:

-   [End-to-end group calls »](/api/end-to-end/group-calls/)
    -   [Conference deep links »](/api/links/#conference-links)
-   [Service messages for paid message refunds »](/constructor/messageActionPaidMessagesRefunded/)
-   [Service messages for paid message price changes »](/constructor/messageActionPaidMessagesPrice/)
-   Gift privacy settings:
    -   [globalPrivacySettings](/constructor/globalPrivacySettings/).`disallowed_gifts`/[userFull](/constructor/userFull/).`disallowed_gifts`: [Disallow the reception of specific gift types »](/constructor/disallowedGiftsSettings/)
    -   [globalPrivacySettings](/constructor/globalPrivacySettings/).`display_gifts_button`/[userFull](/constructor/userFull/).`display_gifts_button`: show or hide the gift button in the text field of private chats.
-   [Transferring stars from a business account to the business bot »](/api/stars/#transferring-stars-from-a-business-account-to-the-business-bot)
-   [Sponsored peer search results »](/api/sponsored-messages/#getting-sponsored-search-results)
-   [Business bot rights »](/constructor/businessBotRights/)
-   [Sponsored message methods now don't require specification of the `peer` where the sponsored message is visible »](/api/sponsored-messages/)
-   [Renamed the method used by official apps to check whether an in-store purchase is possible »](/method/payments.canPurchaseStore/)
-   [Paid auth codes for official apps](/constructor/auth.sentCodePaymentRequired/)

#### [Schema](/schema/) changes

##### New Methods

-   Added [payments.canPurchaseStore](/method/payments.canPurchaseStore/) - Checks whether a purchase is possible. Must be called before in-store purchase, official apps only.
-   Added [contacts.getSponsoredPeers](/method/contacts.getSponsoredPeers/) - Obtain a list of sponsored peer search results for a given query
-   Added [phone.deleteConferenceCallParticipants](/method/phone.deleteConferenceCallParticipants/) - Remove participants from a [conference call »](/api/end-to-end/group-calls/#removing-a-participant).
-   Added [phone.sendConferenceCallBroadcast](/method/phone.sendConferenceCallBroadcast/) - Submit a verification message to conference call subchain `1`, see [subchains »](/api/end-to-end/group-calls/#subchains).
-   Added [phone.inviteConferenceCallParticipant](/method/phone.inviteConferenceCallParticipant/) - Invite a user to a [conference call](/api/group-calls/#conference-calls).
-   Added [phone.declineConferenceCallInvite](/method/phone.declineConferenceCallInvite/) - Decline a [conference call](/api/group-calls/#conference-calls) invite.
-   Added [phone.getGroupCallChainBlocks](/method/phone.getGroupCallChainBlocks/) - Fetch blocks from a conference call [subchain »](/api/end-to-end/group-calls/#subchains); handle the returned [updateGroupCallChainBlocks](/constructor/updateGroupCallChainBlocks/) as [specified here »](/api/end-to-end/group-calls/#handling-updates).

##### Changed Methods

-   Removed **conference\_call** parameter in [phone.requestCall](/method/phone.requestCall/)
-   Added **public\_key**, **block** parameters, removed **key\_fingerprint** parameter in [phone.joinGroupCall](/method/phone.joinGroupCall/)
-   Added **rights** parameter, removed **can\_reply** parameter in [account.updateConnectedBot](/method/account.updateConnectedBot/)
-   Removed **peer** parameter in [messages.viewSponsoredMessage](/method/messages.viewSponsoredMessage/)
-   Removed **peer** parameter in [messages.clickSponsoredMessage](/method/messages.clickSponsoredMessage/)
-   Removed **peer** parameter in [messages.reportSponsoredMessage](/method/messages.reportSponsoredMessage/)
-   Changed type of [phone.createConferenceCall](/method/phone.createConferenceCall/) from **phone.PhoneCall** to **Updates**
-   Added **flags**, **muted**, **video\_stopped**, **join**, **random\_id**, **public\_key**, **block**, **params** parameters, removed **peer**, **key\_fingerprint** parameters in [phone.createConferenceCall](/method/phone.createConferenceCall/)

##### Deleted Methods

-   Removed payments.canPurchasePremium

##### New Constructors

-   Added [auth.sentCodePaymentRequired](/constructor/auth.sentCodePaymentRequired/) - Official apps may receive this constructor, indicating that due to the high cost of SMS verification codes for the user's country/provider, the user must purchase a [Telegram Premium](/api/premium/) subscription in order to proceed with the login/signup, see [here »](/api/auth/#paid-auth) for more info.
-   Added [inputStorePaymentAuthCode](/constructor/inputStorePaymentAuthCode/) - Indicates payment for a login code.
-   Added [updateSentPhoneCode](/constructor/updateSentPhoneCode/) - A paid login SMS code was successfully sent.
-   Added [businessBotRights](/constructor/businessBotRights/) - [Business bot rights](/api/bots/connected-business-bots/).
-   Added [messageActionPaidMessagesRefunded](/constructor/messageActionPaidMessagesRefunded/) - Sent from peer A to B, indicates that A refunded all [stars](/api/stars/) B previously paid to send messages to A, see [here »](/api/paid-messages/) for more info on paid messages.
-   Added [messageActionPaidMessagesPrice](/constructor/messageActionPaidMessagesPrice/) - The price of [paid messages »](/api/paid-messages/) in this chat was changed.
-   Added [disallowedGiftsSettings](/constructor/disallowedGiftsSettings/) - Disallow the reception of specific [gift](/api/gifts/) types.
-   Added [sponsoredPeer](/constructor/sponsoredPeer/) - A sponsored peer.
-   Added [contacts.sponsoredPeersEmpty](/constructor/contacts.sponsoredPeersEmpty/) - There are no sponsored peers for this query.
-   Added [contacts.sponsoredPeers](/constructor/contacts.sponsoredPeers/) - Sponsored peers.
-   Added [inputInvoiceBusinessBotTransferStars](/constructor/inputInvoiceBusinessBotTransferStars/) - Transfer stars from the balance of a user account [connected to a business bot](/api/bots/connected-business-bots/), to the balance of the [business bot](/api/bots/connected-business-bots/), see [here »](/api/stars/#transferring-stars-from-a-business-account-to-the-business-bot) for more info on the full flow.
-   Added [inputGroupCallSlug](/constructor/inputGroupCallSlug/) - Identify a [conference call »](/api/group-calls/#conference-calls) using the slug from its invitation link.
-   Added [inputGroupCallInviteMessage](/constructor/inputGroupCallInviteMessage/) - Identifies a [conference call »](/api/group-calls/#conference-calls) using its [messageActionConferenceCall](/constructor/messageActionConferenceCall/) invitation service message.
-   Added [updateGroupCallChainBlocks](/constructor/updateGroupCallChainBlocks/) - Contains conference call blockchain blocks, see [handling E2E group call updates »](/api/end-to-end/group-calls/#handling-updates).
-   Added [messageActionConferenceCall](/constructor/messageActionConferenceCall/) - Represents a [conference call »](/api/group-calls/#conference-calls), or an invitation to one if neither the `missed` nor `active` flags are set.
-   Added [phoneCallDiscardReasonMigrateConferenceCall](/constructor/phoneCallDiscardReasonMigrateConferenceCall/) - This phone call was migrated to a [conference call](/api/end-to-end/group-calls/).

##### Changed Constructors

-   Added **display\_gifts\_button**, **disallowed\_gifts** parameters in [userFull](/constructor/userFull/)
-   Removed **conference\_call** parameter in [phoneCallWaiting](/constructor/phoneCallWaiting/)
-   Removed **conference\_call** parameter in [phoneCallRequested](/constructor/phoneCallRequested/)
-   Removed **conference\_call** parameter in [phoneCallAccepted](/constructor/phoneCallAccepted/)
-   Added **conference\_supported** parameter, removed **conference\_call** parameter in [phoneCall](/constructor/phoneCall/)
-   Removed **conference\_call** parameter in [phoneCallDiscarded](/constructor/phoneCallDiscarded/)
-   Added **display\_gifts\_button**, **disallowed\_gifts** parameters in [globalPrivacySettings](/constructor/globalPrivacySettings/)
-   Added **conference**, **creator**, **invite\_link** parameters, removed **conference\_from\_call** parameter in [groupCall](/constructor/groupCall/)
-   Added **rights** parameter, removed **can\_reply** parameter in [connectedBot](/constructor/connectedBot/)
-   Added **rights** parameter, removed **can\_reply** parameter in [botBusinessConnection](/constructor/botBusinessConnection/)

#### PUSH notification changes

##### New PUSH notifications

-   Added [CONF\_CALL\_MISSED](/api/push-updates/#conf-call-missed) - `You missed a call from {1}`

#### [Schema](/schema/)

```
userFull#99e78045 flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true contact_require_premium:flags.29?true read_dates_private:flags.30?true flags2:# sponsored_enabled:flags2.7?true can_view_revenue:flags2.9?true bot_can_manage_emoji_status:flags2.10?true display_gifts_button:flags2.16?true id:long about:flags.1?string settings:PeerSettings personal_photo:flags.21?Photo profile_photo:flags.2?Photo fallback_photo:flags.22?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int ttl_period:flags.14?int theme_emoticon:flags.15?string private_forward_name:flags.16?string bot_group_admin_rights:flags.17?ChatAdminRights bot_broadcast_admin_rights:flags.18?ChatAdminRights wallpaper:flags.24?WallPaper stories:flags.25?PeerStories business_work_hours:flags2.0?BusinessWorkHours business_location:flags2.1?BusinessLocation business_greeting_message:flags2.2?BusinessGreetingMessage business_away_message:flags2.3?BusinessAwayMessage business_intro:flags2.4?BusinessIntro birthday:flags2.5?Birthday personal_channel_id:flags2.6?long personal_channel_message:flags2.6?int stargifts_count:flags2.8?int starref_program:flags2.11?StarRefProgram bot_verification:flags2.12?BotVerification send_paid_messages_stars:flags2.14?long disallowed_gifts:flags2.15?DisallowedGiftsSettings = UserFull;
phoneCallWaiting#c5226f17 flags:# video:flags.6?true id:long access_hash:long date:int admin_id:long participant_id:long protocol:PhoneCallProtocol receive_date:flags.0?int = PhoneCall;
phoneCallRequested#14b0ed0c flags:# video:flags.6?true id:long access_hash:long date:int admin_id:long participant_id:long g_a_hash:bytes protocol:PhoneCallProtocol = PhoneCall;
phoneCallAccepted#3660c311 flags:# video:flags.6?true id:long access_hash:long date:int admin_id:long participant_id:long g_b:bytes protocol:PhoneCallProtocol = PhoneCall;
phoneCall#30535af5 flags:# p2p_allowed:flags.5?true video:flags.6?true conference_supported:flags.8?true id:long access_hash:long date:int admin_id:long participant_id:long g_a_or_b:bytes key_fingerprint:long protocol:PhoneCallProtocol connections:Vector<PhoneConnection> start_date:int custom_parameters:flags.7?DataJSON = PhoneCall;
phoneCallDiscarded#50ca4de1 flags:# need_rating:flags.2?true need_debug:flags.3?true video:flags.6?true id:long reason:flags.0?PhoneCallDiscardReason duration:flags.1?int = PhoneCall;
globalPrivacySettings#fe41b34f flags:# archive_and_mute_new_noncontact_peers:flags.0?true keep_archived_unmuted:flags.1?true keep_archived_folders:flags.2?true hide_read_marks:flags.3?true new_noncontact_peers_require_premium:flags.4?true display_gifts_button:flags.7?true noncontact_peers_paid_stars:flags.5?long disallowed_gifts:flags.6?DisallowedGiftsSettings = GlobalPrivacySettings;
groupCall#553b0ba1 flags:# join_muted:flags.1?true can_change_join_muted:flags.2?true join_date_asc:flags.6?true schedule_start_subscribed:flags.8?true can_start_video:flags.9?true record_video_active:flags.11?true rtmp_stream:flags.12?true listeners_hidden:flags.13?true conference:flags.14?true creator:flags.15?true id:long access_hash:long participants_count:int title:flags.3?string stream_dc_id:flags.4?int record_start_date:flags.5?int schedule_date:flags.7?int unmuted_video_count:flags.10?int unmuted_video_limit:int version:int invite_link:flags.16?string = GroupCall;
connectedBot#cd64636c flags:# bot_id:long recipients:BusinessBotRecipients rights:BusinessBotRights = ConnectedBot;
botBusinessConnection#8f34b2f5 flags:# disabled:flags.1?true connection_id:string user_id:long dc_id:int date:int rights:flags.2?BusinessBotRights = BotBusinessConnection;
auth.sentCodePaymentRequired#d7cef980 store_product:string phone_code_hash:string = auth.SentCode;
inputStorePaymentAuthCode#9bb2636d flags:# restore:flags.0?true phone_number:string phone_code_hash:string currency:string amount:long = InputStorePaymentPurpose;
updateSentPhoneCode#504aa18f sent_code:auth.SentCode = Update;
businessBotRights#a0624cf7 flags:# reply:flags.0?true read_messages:flags.1?true delete_sent_messages:flags.2?true delete_received_messages:flags.3?true edit_name:flags.4?true edit_bio:flags.5?true edit_profile_photo:flags.6?true edit_username:flags.7?true view_gifts:flags.8?true sell_gifts:flags.9?true change_gift_settings:flags.10?true transfer_and_upgrade_gifts:flags.11?true transfer_stars:flags.12?true manage_stories:flags.13?true = BusinessBotRights;
messageActionPaidMessagesRefunded#ac1f1fcd count:int stars:long = MessageAction;
messageActionPaidMessagesPrice#bcd71419 stars:long = MessageAction;
disallowedGiftsSettings#71f276c4 flags:# disallow_unlimited_stargifts:flags.0?true disallow_limited_stargifts:flags.1?true disallow_unique_stargifts:flags.2?true disallow_premium_gifts:flags.3?true = DisallowedGiftsSettings;
sponsoredPeer#c69708d3 flags:# random_id:bytes peer:Peer sponsor_info:flags.0?string additional_info:flags.1?string = SponsoredPeer;
contacts.sponsoredPeersEmpty#ea32b4b1 = contacts.SponsoredPeers;
contacts.sponsoredPeers#eb032884 peers:Vector<SponsoredPeer> chats:Vector<Chat> users:Vector<User> = contacts.SponsoredPeers;
inputInvoiceBusinessBotTransferStars#f4997e42 bot:InputUser stars:long = InputInvoice;
inputGroupCallSlug#fe06823f slug:string = InputGroupCall;
inputGroupCallInviteMessage#8c10603f msg_id:int = InputGroupCall;
updateGroupCallChainBlocks#a477288f call:InputGroupCall sub_chain_id:int blocks:Vector<bytes> next_offset:int = Update;
messageActionConferenceCall#2ffe2f7a flags:# missed:flags.0?true active:flags.1?true video:flags.4?true call_id:long duration:flags.2?int other_participants:flags.3?Vector<Peer> = MessageAction;
phoneCallDiscardReasonMigrateConferenceCall#9fbbf1f7 slug:string = PhoneCallDiscardReason;
---functions---
phone.requestCall#42ff96ed flags:# video:flags.0?true user_id:InputUser random_id:int g_a_hash:bytes protocol:PhoneCallProtocol = phone.PhoneCall;
phone.joinGroupCall#8fb53057 flags:# muted:flags.0?true video_stopped:flags.2?true call:InputGroupCall join_as:InputPeer invite_hash:flags.1?string public_key:flags.3?int256 block:flags.3?bytes params:DataJSON = Updates;
account.updateConnectedBot#66a08c7e flags:# deleted:flags.1?true rights:flags.0?BusinessBotRights bot:InputUser recipients:InputBusinessBotRecipients = Updates;
messages.viewSponsoredMessage#269e3643 random_id:bytes = Bool;
messages.clickSponsoredMessage#8235057e flags:# media:flags.0?true fullscreen:flags.1?true random_id:bytes = Bool;
messages.reportSponsoredMessage#12cbf0c4 random_id:bytes option:bytes = channels.SponsoredMessageReportResult;
phone.createConferenceCall#7d0444bb flags:# muted:flags.0?true video_stopped:flags.2?true join:flags.3?true random_id:int public_key:flags.3?int256 block:flags.3?bytes params:flags.3?DataJSON = Updates;
payments.canPurchaseStore#4fdc5ea7 purpose:InputStorePaymentPurpose = Bool;
contacts.getSponsoredPeers#b6c8c393 q:string = contacts.SponsoredPeers;
phone.deleteConferenceCallParticipants#8ca60525 flags:# only_left:flags.0?true kick:flags.1?true call:InputGroupCall ids:Vector<long> block:bytes = Updates;
phone.sendConferenceCallBroadcast#c6701900 call:InputGroupCall block:bytes = Updates;
phone.inviteConferenceCallParticipant#bcf22685 flags:# video:flags.0?true call:InputGroupCall user_id:InputUser = Updates;
phone.declineConferenceCallInvite#3c479971 msg_id:int = Updates;
phone.getGroupCallChainBlocks#ee9f88a6 call:InputGroupCall sub_chain_id:int offset:int limit:int = Updates;
```

### [Layer 200](https://core.telegram.org/schema?layer=200)

This layer introduces:

-   [Detailed account information for new private chats »](/api/action-bar/#account-information)
-   [Paid messages »](/api/paid-messages/)
-   [Pinning a specific received gift to the profile »](/api/gifts/#pinning-a-received-gift)
-   [Sending paid reactions as a channel »](/api/reactions/#paid-reaction-privacy)
-   [Added a `paid_messages_available` flag to channelFull, indicating whether paid messages can be enabled in this supergroup](/constructor/channelFull/)
-   [Gift a Telegram Premium subscription, paying with Telegram Stars »](/api/premium/#gifting-telegram-premium)  
    This change also simplifies the Telegram Premium gift flow, fully replacing the [userFull](/constructor/userFull/).`premium_gifts` flag with [payments.getPremiumGiftCodeOptions](/method/payments.getPremiumGiftCodeOptions/).
-   [Blockchain addresses for collectible gifts moved to the TON blockchain as NFTs »](/api/gifts/#withdraw-a-collectible-gift-to-the-ton-blockchain)
-   All flags added to [channel](/constructor/channel/) (listed below) are valid `min` flags, meaning they must be applied over the locally stored version even if the `min` flag of the incoming [channel](/constructor/channel/) is set.
-   All flags added to [user](/constructor/user/) (listed below) are valid `min` flags, meaning they must be applied over the locally stored version even if the `min` flag of the incoming [user](/constructor/user/) is set.

#### [Schema](/schema/) changes

##### New Methods

-   Added [invokeWithReCaptcha](/method/invokeWithReCaptcha/) - Official clients only: re-execute a method call that required reCAPTCHA verification via a `RECAPTCHA_CHECK_%s__%s`, where the first placeholder is the `action`, and the second one is the reCAPTCHA key ID.
-   Added [account.addNoPaidMessagesException](/method/account.addNoPaidMessagesException/)
-   Added [account.getPaidMessagesRevenue](/method/account.getPaidMessagesRevenue/) - Get the number of stars we have received from the specified user thanks to [paid messages »](/api/paid-messages/); the received amount will be equal to the sent amount multiplied by [stars\_paid\_message\_commission\_permille](/api/config/#stars-paid-message-commission-permille) divided by 1000.
-   Added [channels.updatePaidMessagesPrice](/method/channels.updatePaidMessagesPrice/) - Enable or disable [paid messages »](/api/paid-messages/) in this [supergroup](/api/channel/) or [monoforum](/api/monoforum/).
-   Added [users.getRequirementsToContact](/method/users.getRequirementsToContact/) - Check whether we can write to the specified users, used to implement bulk checks for [Premium-only messages »](/api/privacy/#require-premium-for-new-non-contact-users) and [paid messages »](/api/paid-messages/).
-   Added [payments.toggleStarGiftsPinnedToTop](/method/payments.toggleStarGiftsPinnedToTop/) - Pins a received gift on top of the profile of the user or owned channels by using [payments.toggleStarGiftsPinnedToTop](/method/payments.toggleStarGiftsPinnedToTop/).

##### Changed Methods

-   Added **allow\_paid\_stars** parameter in [messages.sendMessage](/method/messages.sendMessage/)
-   Added **allow\_paid\_stars** parameter in [messages.sendMedia](/method/messages.sendMedia/)
-   Added **allow\_paid\_stars** parameter in [messages.forwardMessages](/method/messages.forwardMessages/)
-   Added **allow\_paid\_stars** parameter in [messages.sendInlineBotResult](/method/messages.sendInlineBotResult/)
-   Added **allow\_paid\_stars** parameter in [messages.sendMultiMedia](/method/messages.sendMultiMedia/)
-   Added **flags**, **for\_paid\_reactions** parameters in [channels.getSendAs](/method/channels.getSendAs/)
-   Changed type of **private** from **flags.0?Bool** to **flags.0?PaidReactionPrivacy** in [messages.sendPaidReaction](/method/messages.sendPaidReaction/)
-   Changed type of **private** from **Bool** to **PaidReactionPrivacy** in [messages.togglePaidReactionPrivacy](/method/messages.togglePaidReactionPrivacy/)

##### Deleted Methods

-   Removed users.getIsPremiumRequiredToContact

##### New Constructors

-   Added [paidReactionPrivacyDefault](/constructor/paidReactionPrivacyDefault/) - Uses the default reaction privacy, set using [messages.togglePaidReactionPrivacy](/method/messages.togglePaidReactionPrivacy/).
-   Added [paidReactionPrivacyAnonymous](/constructor/paidReactionPrivacyAnonymous/) - Send paid reactions anonymously.
-   Added [paidReactionPrivacyPeer](/constructor/paidReactionPrivacyPeer/) - Send paid reactions as the specified peer, fetched using [channels.getSendAs](/method/channels.getSendAs/) with the `for_paid_reactions` flag set.
-   Added [inputPrivacyKeyNoPaidMessages](/constructor/inputPrivacyKeyNoPaidMessages/) - Who can send you messages without paying, if [paid messages »](/api/paid-messages/) are enabled.
-   Added [privacyKeyNoPaidMessages](/constructor/privacyKeyNoPaidMessages/) - Who can send you messages without paying, if [paid messages »](/api/paid-messages/) are enabled.
-   Added [account.paidMessagesRevenue](/constructor/account.paidMessagesRevenue/) - Total number of non-refunded [Telegram Stars](/api/stars/) a user has spent on sending us messages either directly or through a channel, see [here »](/api/paid-messages/) for more info on paid messages.
-   Added [requirementToContactEmpty](/constructor/requirementToContactEmpty/) - This user can be freely contacted.
-   Added [requirementToContactPremium](/constructor/requirementToContactPremium/) - This user requires us to buy a [Premium](/api/premium/) subscription in order to contact them.
-   Added [requirementToContactPaidMessages](/constructor/requirementToContactPaidMessages/) - This user requires us to pay the specified amount of [Telegram Stars](/api/stars/) to send them a message, see [here »](/api/paid-messages/) for the full flow.
-   Added [inputInvoicePremiumGiftStars](/constructor/inputInvoicePremiumGiftStars/) - Used to gift a [Telegram Premium](/api/premium/) subscription to another user, paying with [Telegram Stars](/api/stars/).

##### Changed Constructors

-   Added **paid\_message\_stars** parameter in [message](/constructor/message/)
-   Added **charge\_paid\_message\_stars**, **registration\_month**, **phone\_country**, **name\_change\_date**, **photo\_change\_date** parameters in [peerSettings](/constructor/peerSettings/)
-   Added **send\_paid\_messages\_stars** parameter, removed **premium\_gifts** parameter in [userFull](/constructor/userFull/)
-   Added **send\_paid\_messages\_stars** parameter in [user](/constructor/user/)
-   Added **send\_paid\_messages\_stars** parameter in [channel](/constructor/channel/)
-   Added **paid\_messages\_available** parameter in [channelFull](/constructor/channelFull/)
-   Added **noncontact\_peers\_paid\_stars** parameter in [globalPrivacySettings](/constructor/globalPrivacySettings/)
-   Added **business\_transfer**, **stargift\_resale**, **paid\_messages**, **premium\_gift\_months** parameters in [starsTransaction](/constructor/starsTransaction/)
-   Changed type of **private** from **Bool** to **PaidReactionPrivacy** in [updatePaidReactionPrivacy](/constructor/updatePaidReactionPrivacy/)
-   Added **gift\_address** parameter in [starGiftUnique](/constructor/starGiftUnique/)

##### Deleted Constructors

-   Removed premiumGiftOption

#### [Schema](/schema/)

```
message#eabcdd4d flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true post:flags.14?true from_scheduled:flags.18?true legacy:flags.19?true edit_hide:flags.21?true pinned:flags.24?true noforwards:flags.26?true invert_media:flags.27?true flags2:# offline:flags2.1?true video_processing_pending:flags2.4?true id:int from_id:flags.8?Peer from_boosts_applied:flags.29?int peer_id:Peer saved_peer_id:flags.28?Peer fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long via_business_bot_id:flags2.0?long reply_to:flags.3?MessageReplyHeader date:int message:string media:flags.9?MessageMedia reply_markup:flags.6?ReplyMarkup entities:flags.7?Vector<MessageEntity> views:flags.10?int forwards:flags.10?int replies:flags.23?MessageReplies edit_date:flags.15?int post_author:flags.16?string grouped_id:flags.17?long reactions:flags.20?MessageReactions restriction_reason:flags.22?Vector<RestrictionReason> ttl_period:flags.25?int quick_reply_shortcut_id:flags.30?int effect:flags2.2?long factcheck:flags2.3?FactCheck report_delivery_until_date:flags2.5?int paid_message_stars:flags2.6?long = Message;
peerSettings#f47741f7 flags:# report_spam:flags.0?true add_contact:flags.1?true block_contact:flags.2?true share_contact:flags.3?true need_contacts_exception:flags.4?true report_geo:flags.5?true autoarchived:flags.7?true invite_members:flags.8?true request_chat_broadcast:flags.10?true business_bot_paused:flags.11?true business_bot_can_reply:flags.12?true geo_distance:flags.6?int request_chat_title:flags.9?string request_chat_date:flags.9?int business_bot_id:flags.13?long business_bot_manage_url:flags.13?string charge_paid_message_stars:flags.14?long registration_month:flags.15?string phone_country:flags.16?string name_change_date:flags.17?int photo_change_date:flags.18?int = PeerSettings;
userFull#d2234ea0 flags:# blocked:flags.0?true phone_calls_available:flags.4?true phone_calls_private:flags.5?true can_pin_message:flags.7?true has_scheduled:flags.12?true video_calls_available:flags.13?true voice_messages_forbidden:flags.20?true translations_disabled:flags.23?true stories_pinned_available:flags.26?true blocked_my_stories_from:flags.27?true wallpaper_overridden:flags.28?true contact_require_premium:flags.29?true read_dates_private:flags.30?true flags2:# sponsored_enabled:flags2.7?true can_view_revenue:flags2.9?true bot_can_manage_emoji_status:flags2.10?true id:long about:flags.1?string settings:PeerSettings personal_photo:flags.21?Photo profile_photo:flags.2?Photo fallback_photo:flags.22?Photo notify_settings:PeerNotifySettings bot_info:flags.3?BotInfo pinned_msg_id:flags.6?int common_chats_count:int folder_id:flags.11?int ttl_period:flags.14?int theme_emoticon:flags.15?string private_forward_name:flags.16?string bot_group_admin_rights:flags.17?ChatAdminRights bot_broadcast_admin_rights:flags.18?ChatAdminRights wallpaper:flags.24?WallPaper stories:flags.25?PeerStories business_work_hours:flags2.0?BusinessWorkHours business_location:flags2.1?BusinessLocation business_greeting_message:flags2.2?BusinessGreetingMessage business_away_message:flags2.3?BusinessAwayMessage business_intro:flags2.4?BusinessIntro birthday:flags2.5?Birthday personal_channel_id:flags2.6?long personal_channel_message:flags2.6?int stargifts_count:flags2.8?int starref_program:flags2.11?StarRefProgram bot_verification:flags2.12?BotVerification send_paid_messages_stars:flags2.14?long = UserFull;
user#020b1422 flags:# self:flags.10?true contact:flags.11?true mutual_contact:flags.12?true deleted:flags.13?true bot:flags.14?true bot_chat_history:flags.15?true bot_nochats:flags.16?true verified:flags.17?true restricted:flags.18?true min:flags.20?true bot_inline_geo:flags.21?true support:flags.23?true scam:flags.24?true apply_min_photo:flags.25?true fake:flags.26?true bot_attach_menu:flags.27?true premium:flags.28?true attach_menu_enabled:flags.29?true flags2:# bot_can_edit:flags2.1?true close_friend:flags2.2?true stories_hidden:flags2.3?true stories_unavailable:flags2.4?true contact_require_premium:flags2.10?true bot_business:flags2.11?true bot_has_main_app:flags2.13?true id:long access_hash:flags.0?long first_name:flags.1?string last_name:flags.2?string username:flags.3?string phone:flags.4?string photo:flags.5?UserProfilePhoto status:flags.6?UserStatus bot_info_version:flags.14?int restriction_reason:flags.18?Vector<RestrictionReason> bot_inline_placeholder:flags.19?string lang_code:flags.22?string emoji_status:flags.30?EmojiStatus usernames:flags2.0?Vector<Username> stories_max_id:flags2.5?int color:flags2.8?PeerColor profile_color:flags2.9?PeerColor bot_active_users:flags2.12?int bot_verification_icon:flags2.14?long send_paid_messages_stars:flags2.15?long = User;
channel#7482147e flags:# creator:flags.0?true left:flags.2?true broadcast:flags.5?true verified:flags.7?true megagroup:flags.8?true restricted:flags.9?true signatures:flags.11?true min:flags.12?true scam:flags.19?true has_link:flags.20?true has_geo:flags.21?true slowmode_enabled:flags.22?true call_active:flags.23?true call_not_empty:flags.24?true fake:flags.25?true gigagroup:flags.26?true noforwards:flags.27?true join_to_send:flags.28?true join_request:flags.29?true forum:flags.30?true flags2:# stories_hidden:flags2.1?true stories_hidden_min:flags2.2?true stories_unavailable:flags2.3?true signature_profiles:flags2.12?true id:long access_hash:flags.13?long title:string username:flags.6?string photo:ChatPhoto date:int restriction_reason:flags.9?Vector<RestrictionReason> admin_rights:flags.14?ChatAdminRights banned_rights:flags.15?ChatBannedRights default_banned_rights:flags.18?ChatBannedRights participants_count:flags.17?int usernames:flags2.0?Vector<Username> stories_max_id:flags2.4?int color:flags2.7?PeerColor profile_color:flags2.8?PeerColor emoji_status:flags2.9?EmojiStatus level:flags2.10?int subscription_until_date:flags2.11?int bot_verification_icon:flags2.13?long send_paid_messages_stars:flags2.14?long = Chat;
channelFull#52d6806b flags:# can_view_participants:flags.3?true can_set_username:flags.6?true can_set_stickers:flags.7?true hidden_prehistory:flags.10?true can_set_location:flags.16?true has_scheduled:flags.19?true can_view_stats:flags.20?true blocked:flags.22?true flags2:# can_delete_channel:flags2.0?true antispam:flags2.1?true participants_hidden:flags2.2?true translations_disabled:flags2.3?true stories_pinned_available:flags2.5?true view_forum_as_messages:flags2.6?true restricted_sponsored:flags2.11?true can_view_revenue:flags2.12?true paid_media_allowed:flags2.14?true can_view_stars_revenue:flags2.15?true paid_reactions_available:flags2.16?true stargifts_available:flags2.19?true paid_messages_available:flags2.20?true id:long about:string participants_count:flags.0?int admins_count:flags.1?int kicked_count:flags.2?int banned_count:flags.2?int online_count:flags.13?int read_inbox_max_id:int read_outbox_max_id:int unread_count:int chat_photo:Photo notify_settings:PeerNotifySettings exported_invite:flags.23?ExportedChatInvite bot_info:Vector<BotInfo> migrated_from_chat_id:flags.4?long migrated_from_max_id:flags.4?int pinned_msg_id:flags.5?int stickerset:flags.8?StickerSet available_min_id:flags.9?int folder_id:flags.11?int linked_chat_id:flags.14?long location:flags.15?ChannelLocation slowmode_seconds:flags.17?int slowmode_next_send_date:flags.18?int stats_dc:flags.12?int pts:int call:flags.21?InputGroupCall ttl_period:flags.24?int pending_suggestions:flags.25?Vector<string> groupcall_default_join_as:flags.26?Peer theme_emoticon:flags.27?string requests_pending:flags.28?int recent_requesters:flags.28?Vector<long> default_send_as:flags.29?Peer available_reactions:flags.30?ChatReactions reactions_limit:flags2.13?int stories:flags2.4?PeerStories wallpaper:flags2.7?WallPaper boosts_applied:flags2.8?int boosts_unrestrict:flags2.9?int emojiset:flags2.10?StickerSet bot_verification:flags2.17?BotVerification stargifts_count:flags2.18?int = ChatFull;
globalPrivacySettings#c9d8df1c flags:# archive_and_mute_new_noncontact_peers:flags.0?true keep_archived_unmuted:flags.1?true keep_archived_folders:flags.2?true hide_read_marks:flags.3?true new_noncontact_peers_require_premium:flags.4?true noncontact_peers_paid_stars:flags.5?long = GlobalPrivacySettings;
starsTransaction#a39fd94a flags:# refund:flags.3?true pending:flags.4?true failed:flags.6?true gift:flags.10?true reaction:flags.11?true stargift_upgrade:flags.18?true business_transfer:flags.21?true stargift_resale:flags.22?true id:string stars:StarsAmount date:int peer:StarsTransactionPeer title:flags.0?string description:flags.1?string photo:flags.2?WebDocument transaction_date:flags.5?int transaction_url:flags.5?string bot_payload:flags.7?bytes msg_id:flags.8?int extended_media:flags.9?Vector<MessageMedia> subscription_period:flags.12?int giveaway_post_id:flags.13?int stargift:flags.14?StarGift floodskip_number:flags.15?int starref_commission_permille:flags.16?int starref_peer:flags.17?Peer starref_amount:flags.17?StarsAmount paid_messages:flags.19?int premium_gift_months:flags.20?int = StarsTransaction;
updatePaidReactionPrivacy#8b725fce private:PaidReactionPrivacy = Update;
starGiftUnique#5c62d151 flags:# id:long title:string slug:string num:int owner_id:flags.0?Peer owner_name:flags.1?string owner_address:flags.2?string attributes:Vector<StarGiftAttribute> availability_issued:int availability_total:int gift_address:flags.3?string = StarGift;
paidReactionPrivacyDefault#206ad49e = PaidReactionPrivacy;
paidReactionPrivacyAnonymous#1f0c1ad9 = PaidReactionPrivacy;
paidReactionPrivacyPeer#dc6cfcf0 peer:InputPeer = PaidReactionPrivacy;
inputPrivacyKeyNoPaidMessages#bdc597b4 = InputPrivacyKey;
privacyKeyNoPaidMessages#17d348d2 = PrivacyKey;
account.paidMessagesRevenue#1e109708 stars_amount:long = account.PaidMessagesRevenue;
requirementToContactEmpty#050a9839 = RequirementToContact;
requirementToContactPremium#e581e4e9 = RequirementToContact;
requirementToContactPaidMessages#b4f67e93 stars_amount:long = RequirementToContact;
inputInvoicePremiumGiftStars#dabab2ef flags:# user_id:InputUser months:int message:flags.0?TextWithEntities = InputInvoice;
---functions---
messages.sendMessage#fbf2340a flags:# no_webpage:flags.1?true silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long = Updates;
messages.sendMedia#a550cd78 flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo media:InputMedia message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long = Updates;
messages.forwardMessages#bb9fa475 flags:# silent:flags.5?true background:flags.6?true with_my_score:flags.8?true drop_author:flags.11?true drop_media_captions:flags.12?true noforwards:flags.14?true allow_paid_floodskip:flags.19?true from_peer:InputPeer id:Vector<int> random_id:Vector<long> to_peer:InputPeer top_msg_id:flags.9?int schedule_date:flags.10?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut video_timestamp:flags.20?int allow_paid_stars:flags.21?long = Updates;
messages.sendInlineBotResult#c0cf7646 flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true hide_via:flags.11?true peer:InputPeer reply_to:flags.0?InputReplyTo random_id:long query_id:long id:string schedule_date:flags.10?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut allow_paid_stars:flags.21?long = Updates;
messages.sendMultiMedia#1bf89d74 flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo multi_media:Vector<InputSingleMedia> schedule_date:flags.10?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long = Updates;
channels.getSendAs#e785a43f flags:# for_paid_reactions:flags.0?true peer:InputPeer = channels.SendAsPeers;
messages.sendPaidReaction#58bbcb50 flags:# peer:InputPeer msg_id:int count:int random_id:long private:flags.0?PaidReactionPrivacy = Updates;
messages.togglePaidReactionPrivacy#435885b5 peer:InputPeer msg_id:int private:PaidReactionPrivacy = Bool;
invokeWithReCaptcha#adbb0f94 {X:Type} token:string query:!X = X;
account.addNoPaidMessagesException#6f688aa7 flags:# refund_charged:flags.0?true user_id:InputUser = Bool;
account.getPaidMessagesRevenue#f1266f38 user_id:InputUser = account.PaidMessagesRevenue;
channels.updatePaidMessagesPrice#fc84653f channel:InputChannel send_paid_messages_stars:long = Updates;
users.getRequirementsToContact#d89a83a3 id:Vector<InputUser> = Vector<RequirementToContact>;
payments.toggleStarGiftsPinnedToTop#1513e7b0 peer:InputPeer stargift:Vector<InputSavedStarGift> = Bool;
```

### [Layer 198](https://core.telegram.org/schema?layer=198)

This layer introduces:

-   [Collectibles as emoji statuses (and minor tweaks to the emoji status API) »](/api/emoji-status/#collectibles-as-emoji-statuses)
-   Send gifts to channels
-   [Notifications for gifts received by channels »](/api/gifts/#notifications-for-received-channel-gifts)
-   [Get all gifts received by a peer »](/api/gifts/#list-all-received-gifts)
-   [Fetch info about specific gifts owned by a peer we control »](/api/gifts/#list-specific-owned-gifts)
-   [Withdraw a collectible gift to the TON blockchain »](/api/gifts/#withdraw-a-collectible-gift-to-the-ton-blockchain)
-   [Custom video covers »](/api/files/#video-covers)
-   [Custom starting timestamps for videos »](/api/files/#start-video-at-timestamp)

#### [Schema](/schema/) changes

##### New Methods

-   Added [account.getCollectibleEmojiStatuses](/method/account.getCollectibleEmojiStatuses/) - Obtain a list of [emoji statuses »](/api/emoji-status/) for owned or [hosted collectible gifts »](/api/gifts/#hosted-collectible-gifts).
-   Added [payments.getSavedStarGifts](/method/payments.getSavedStarGifts/) - Fetch the full list of [gifts »](/api/gifts/#list-all-received-gifts) owned, received or [hosted »](/api/gifts/#hosted-collectible-gifts) by a peer.
-   Added [payments.getSavedStarGift](/method/payments.getSavedStarGift/) - Fetch info about specific [gifts](/api/gifts/) owned by a peer we control.
-   Added [payments.getStarGiftWithdrawalUrl](/method/payments.getStarGiftWithdrawalUrl/) - Convert a [collectible gift »](/api/gifts/) to an NFT on the TON blockchain.
-   Added [payments.toggleChatStarGiftNotifications](/method/payments.toggleChatStarGiftNotifications/) - Enables or disables the reception of notifications every time a [gift »](/api/gifts/) is received by the specified channel, can only be invoked by admins with `post_messages` [admin rights](/constructor/chatAdminRights/).

##### Changed Methods

-   Added **video\_timestamp** parameter in [messages.forwardMessages](/method/messages.forwardMessages/)
-   Added **stargift** parameter, removed **msg\_id** parameter in [payments.saveStarGift](/method/payments.saveStarGift/)
-   Added **stargift** parameter, removed **msg\_id** parameter in [payments.convertStarGift](/method/payments.convertStarGift/)
-   Added **stargift** parameter, removed **msg\_id** parameter in [payments.upgradeStarGift](/method/payments.upgradeStarGift/)
-   Added **stargift** parameter, removed **msg\_id** parameter, changed type of **to\_id** from **InputUser** to **InputPeer** in [payments.transferStarGift](/method/payments.transferStarGift/)

##### Deleted Methods

-   Removed payments.getUserStarGifts
-   Removed payments.getUserStarGift

##### New Constructors

-   Added [emojiStatusCollectible](/constructor/emojiStatusCollectible/) - An owned or [hosted collectible gift »](/api/gifts/#hosted-collectible-gifts) as emoji status.
-   Added [inputEmojiStatusCollectible](/constructor/inputEmojiStatusCollectible/) - An owned or [hosted collectible gift »](/api/gifts/#hosted-collectible-gifts) as emoji status: can only be used in [account.updateEmojiStatus](/method/account.updateEmojiStatus/), is never returned by the API.
-   Added [savedStarGift](/constructor/savedStarGift/) - Represents a [gift](/api/gifts/) owned by a peer.
-   Added [payments.savedStarGifts](/constructor/payments.savedStarGifts/) - Represents a list of [gifts](/api/gifts/).
-   Added [inputSavedStarGiftUser](/constructor/inputSavedStarGiftUser/) - A gift received in a private chat with another user.
-   Added [inputSavedStarGiftChat](/constructor/inputSavedStarGiftChat/) - A gift received by a channel we own.
-   Added [payments.starGiftWithdrawalUrl](/constructor/payments.starGiftWithdrawalUrl/) - A URL that can be used to import the exported NFT on Fragment.

##### Changed Constructors

-   Added **video\_cover**, **video\_timestamp** parameters in [inputMediaUploadedDocument](/constructor/inputMediaUploadedDocument/)
-   Added **video\_cover**, **video\_timestamp** parameters in [inputMediaDocument](/constructor/inputMediaDocument/)
-   Added **video\_cover**, **video\_timestamp** parameters in [messageMediaDocument](/constructor/messageMediaDocument/)
-   Added **stargifts\_available**, **stargifts\_count** parameters in [channelFull](/constructor/channelFull/)
-   Added **video\_cover**, **video\_timestamp** parameters in [inputMediaDocumentExternal](/constructor/inputMediaDocumentExternal/)
-   Added **flags**, **until** parameters in [emojiStatus](/constructor/emojiStatus/)
-   Added **peer** parameter, removed **user\_id** parameter in [inputInvoiceStarGift](/constructor/inputInvoiceStarGift/)
-   Added **from\_id**, **peer**, **saved\_id** parameters in [messageActionStarGift](/constructor/messageActionStarGift/)
-   Changed type of **sender\_id** from **flags.0?long** to **flags.0?Peer**, **recipient\_id** from **long** to **Peer** in [starGiftAttributeOriginalDetails](/constructor/starGiftAttributeOriginalDetails/)
-   Added **owner\_address** parameter, changed type of **owner\_id** from **flags.0?long** to **flags.0?Peer** in [starGiftUnique](/constructor/starGiftUnique/)
-   Added **from\_id**, **peer**, **saved\_id** parameters in [messageActionStarGiftUnique](/constructor/messageActionStarGiftUnique/)
-   Added **stargift** parameter, removed **msg\_id** parameter in [inputInvoiceStarGiftUpgrade](/constructor/inputInvoiceStarGiftUpgrade/)
-   Added **stargift** parameter, removed **msg\_id** parameter, changed type of **to\_id** from **InputUser** to **InputPeer** in [inputInvoiceStarGiftTransfer](/constructor/inputInvoiceStarGiftTransfer/)

##### Deleted Constructors

-   Removed emojiStatusUntil
-   Removed userStarGift
-   Removed payments.userStarGifts

#### [Schema](/schema/)

```
inputMediaUploadedDocument#037c9330 flags:# nosound_video:flags.3?true force_file:flags.4?true spoiler:flags.5?true file:InputFile thumb:flags.2?InputFile mime_type:string attributes:Vector<DocumentAttribute> stickers:flags.0?Vector<InputDocument> video_cover:flags.6?InputPhoto video_timestamp:flags.7?int ttl_seconds:flags.1?int = InputMedia;
inputMediaDocument#a8763ab5 flags:# spoiler:flags.2?true id:InputDocument video_cover:flags.3?InputPhoto video_timestamp:flags.4?int ttl_seconds:flags.0?int query:flags.1?string = InputMedia;
messageMediaDocument#52d8ccd9 flags:# nopremium:flags.3?true spoiler:flags.4?true video:flags.6?true round:flags.7?true voice:flags.8?true document:flags.0?Document alt_documents:flags.5?Vector<Document> video_cover:flags.9?Photo video_timestamp:flags.10?int ttl_seconds:flags.2?int = MessageMedia;
channelFull#52d6806b flags:# can_view_participants:flags.3?true can_set_username:flags.6?true can_set_stickers:flags.7?true hidden_prehistory:flags.10?true can_set_location:flags.16?true has_scheduled:flags.19?true can_view_stats:flags.20?true blocked:flags.22?true flags2:# can_delete_channel:flags2.0?true antispam:flags2.1?true participants_hidden:flags2.2?true translations_disabled:flags2.3?true stories_pinned_available:flags2.5?true view_forum_as_messages:flags2.6?true restricted_sponsored:flags2.11?true can_view_revenue:flags2.12?true paid_media_allowed:flags2.14?true can_view_stars_revenue:flags2.15?true paid_reactions_available:flags2.16?true stargifts_available:flags2.19?true id:long about:string participants_count:flags.0?int admins_count:flags.1?int kicked_count:flags.2?int banned_count:flags.2?int online_count:flags.13?int read_inbox_max_id:int read_outbox_max_id:int unread_count:int chat_photo:Photo notify_settings:PeerNotifySettings exported_invite:flags.23?ExportedChatInvite bot_info:Vector<BotInfo> migrated_from_chat_id:flags.4?long migrated_from_max_id:flags.4?int pinned_msg_id:flags.5?int stickerset:flags.8?StickerSet available_min_id:flags.9?int folder_id:flags.11?int linked_chat_id:flags.14?long location:flags.15?ChannelLocation slowmode_seconds:flags.17?int slowmode_next_send_date:flags.18?int stats_dc:flags.12?int pts:int call:flags.21?InputGroupCall ttl_period:flags.24?int pending_suggestions:flags.25?Vector<string> groupcall_default_join_as:flags.26?Peer theme_emoticon:flags.27?string requests_pending:flags.28?int recent_requesters:flags.28?Vector<long> default_send_as:flags.29?Peer available_reactions:flags.30?ChatReactions reactions_limit:flags2.13?int stories:flags2.4?PeerStories wallpaper:flags2.7?WallPaper boosts_applied:flags2.8?int boosts_unrestrict:flags2.9?int emojiset:flags2.10?StickerSet bot_verification:flags2.17?BotVerification stargifts_count:flags2.18?int = ChatFull;
inputMediaDocumentExternal#779600f9 flags:# spoiler:flags.1?true url:string ttl_seconds:flags.0?int video_cover:flags.2?InputPhoto video_timestamp:flags.3?int = InputMedia;
emojiStatus#e7ff068a flags:# document_id:long until:flags.0?int = EmojiStatus;
inputInvoiceStarGift#e8625e92 flags:# hide_name:flags.0?true include_upgrade:flags.2?true peer:InputPeer gift_id:long message:flags.1?TextWithEntities = InputInvoice;
messageActionStarGift#4717e8a4 flags:# name_hidden:flags.0?true saved:flags.2?true converted:flags.3?true upgraded:flags.5?true refunded:flags.9?true can_upgrade:flags.10?true gift:StarGift message:flags.1?TextWithEntities convert_stars:flags.4?long upgrade_msg_id:flags.5?int upgrade_stars:flags.8?long from_id:flags.11?Peer peer:flags.12?Peer saved_id:flags.12?long = MessageAction;
starGiftAttributeOriginalDetails#e0bff26c flags:# sender_id:flags.0?Peer recipient_id:Peer date:int message:flags.1?TextWithEntities = StarGiftAttribute;
starGiftUnique#f2fe7e4a flags:# id:long title:string slug:string num:int owner_id:flags.0?Peer owner_name:flags.1?string owner_address:flags.2?string attributes:Vector<StarGiftAttribute> availability_issued:int availability_total:int = StarGift;
messageActionStarGiftUnique#acdfcb81 flags:# upgrade:flags.0?true transferred:flags.1?true saved:flags.2?true refunded:flags.5?true gift:StarGift can_export_at:flags.3?int transfer_stars:flags.4?long from_id:flags.6?Peer peer:flags.7?Peer saved_id:flags.7?long = MessageAction;
inputInvoiceStarGiftUpgrade#4d818d5d flags:# keep_original_details:flags.0?true stargift:InputSavedStarGift = InputInvoice;
inputInvoiceStarGiftTransfer#4a5f5bd9 stargift:InputSavedStarGift to_id:InputPeer = InputInvoice;
emojiStatusCollectible#7184603b flags:# collectible_id:long document_id:long title:string slug:string pattern_document_id:long center_color:int edge_color:int pattern_color:int text_color:int until:flags.0?int = EmojiStatus;
inputEmojiStatusCollectible#07141dbf flags:# collectible_id:long until:flags.0?int = EmojiStatus;
savedStarGift#6056dba5 flags:# name_hidden:flags.0?true unsaved:flags.5?true refunded:flags.9?true can_upgrade:flags.10?true pinned_to_top:flags.12?true from_id:flags.1?Peer date:int gift:StarGift message:flags.2?TextWithEntities msg_id:flags.3?int saved_id:flags.11?long convert_stars:flags.4?long upgrade_stars:flags.6?long can_export_at:flags.7?int transfer_stars:flags.8?long = SavedStarGift;
payments.savedStarGifts#95f389b1 flags:# count:int chat_notifications_enabled:flags.1?Bool gifts:Vector<SavedStarGift> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = payments.SavedStarGifts;
inputSavedStarGiftUser#69279795 msg_id:int = InputSavedStarGift;
inputSavedStarGiftChat#f101aa7f peer:InputPeer saved_id:long = InputSavedStarGift;
payments.starGiftWithdrawalUrl#84aa3a9c url:string = payments.StarGiftWithdrawalUrl;
---functions---
messages.forwardMessages#6d74da08 flags:# silent:flags.5?true background:flags.6?true with_my_score:flags.8?true drop_author:flags.11?true drop_media_captions:flags.12?true noforwards:flags.14?true allow_paid_floodskip:flags.19?true from_peer:InputPeer id:Vector<int> random_id:Vector<long> to_peer:InputPeer top_msg_id:flags.9?int schedule_date:flags.10?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut video_timestamp:flags.20?int = Updates;
payments.saveStarGift#2a2a697c flags:# unsave:flags.0?true stargift:InputSavedStarGift = Bool;
payments.convertStarGift#74bf076b stargift:InputSavedStarGift = Bool;
payments.upgradeStarGift#aed6e4f5 flags:# keep_original_details:flags.0?true stargift:InputSavedStarGift = Updates;
payments.transferStarGift#7f18176a stargift:InputSavedStarGift to_id:InputPeer = Updates;
account.getCollectibleEmojiStatuses#2e7b4543 hash:long = account.EmojiStatuses;
payments.getSavedStarGifts#23830de9 flags:# exclude_unsaved:flags.0?true exclude_saved:flags.1?true exclude_unlimited:flags.2?true exclude_limited:flags.3?true exclude_unique:flags.4?true sort_by_value:flags.5?true peer:InputPeer offset:string limit:int = payments.SavedStarGifts;
payments.getSavedStarGift#b455a106 stargift:Vector<InputSavedStarGift> = payments.SavedStarGifts;
payments.getStarGiftWithdrawalUrl#d06e93a8 stargift:InputSavedStarGift password:InputCheckPasswordSRP = payments.StarGiftWithdrawalUrl;
payments.toggleChatStarGiftNotifications#60eaefa1 flags:# enabled:flags.0?true peer:InputPeer = Bool;
```

### [Layer 197](https://core.telegram.org/schema?layer=197)

This layer introduces:

-   [Collectible gift links »](/api/links/#collectible-gift-link)
-   [Collectible gift story media areas »](/api/stories/#collectible-gifts)
-   [Collectible webpage previews »](/constructor/webPageAttributeUniqueStarGift/)
-   [Similar bot recommendations »](/api/recommend/#similar-bots)

#### [Schema](/schema/) changes

##### New Methods

-   Added [bots.getBotRecommendations](/method/bots.getBotRecommendations/) - Obtain a list of similarly themed bots, selected based on similarities in their subscriber bases, see [here »](/api/recommend/) for more info.
-   Added [payments.getUniqueStarGift](/method/payments.getUniqueStarGift/) - Obtain info about a [collectible gift »](/api/gifts/#collectible-gifts) using a slug obtained from a [collectible gift link »](/api/links/#collectible-gift-link).

##### Changed Methods

-   Changed type of [messages.getWebPagePreview](/method/messages.getWebPagePreview/) from **MessageMedia** to **messages.WebPagePreview**

##### New Constructors

-   Added [users.users](/constructor/users.users/) - Describes a list of users (or bots).
-   Added [users.usersSlice](/constructor/users.usersSlice/) - Describes a partial list of users.
-   Added [payments.uniqueStarGift](/constructor/payments.uniqueStarGift/) - Represents a [collectible gift »](/api/gifts/#collectible-gifts).
-   Added [webPageAttributeUniqueStarGift](/constructor/webPageAttributeUniqueStarGift/) - Contains info about [collectible gift »](/api/gifts/#collectible-gifts) for a [webPage](/constructor/webPage/) preview of a [collectible gift »](/api/gifts/#collectible-gifts) (the [webPage](/constructor/webPage/) will have a `type` of `telegram_nft`).
-   Added [mediaAreaStarGift](/constructor/mediaAreaStarGift/) - Represents a [collectible gift »](/api/gifts/#collectible-gifts).
-   Added [messages.webPagePreview](/constructor/messages.webPagePreview/) - Represents a webpage preview.

##### Changed Constructors

-   Added **flags**, **slug**, **owner\_name** parameters, changed type of **owner\_id** from **long** to **flags.0?long** in [starGiftUnique](/constructor/starGiftUnique/)

#### [Schema](/schema/)

```
starGiftUnique#3482f322 flags:# id:long title:string slug:string num:int owner_id:flags.0?long owner_name:flags.1?string attributes:Vector<StarGiftAttribute> availability_issued:int availability_total:int = StarGift;
users.users#62d706b8 users:Vector<User> = users.Users;
users.usersSlice#315a4974 count:int users:Vector<User> = users.Users;
payments.uniqueStarGift#caa2f60b gift:StarGift users:Vector<User> = payments.UniqueStarGift;
webPageAttributeUniqueStarGift#cf6f6db8 gift:StarGift = WebPageAttribute;
mediaAreaStarGift#5787686d coordinates:MediaAreaCoordinates slug:string = MediaArea;
messages.webPagePreview#b53e8b21 media:MessageMedia users:Vector<User> = messages.WebPagePreview;
---functions---
messages.getWebPagePreview#570d6f6f flags:# message:string entities:flags.3?Vector<MessageEntity> = messages.WebPagePreview;
bots.getBotRecommendations#a1b70815 bot:InputUser = users.Users;
payments.getUniqueStarGift#a1974d72 slug:string = payments.UniqueStarGift;
```

### [Layer 196](https://core.telegram.org/schema?layer=196)

This layer introduces:

-   [Extra secure group calls »](https://telegram.org/blog/group-calls-made-easy)
-   [Explicit delivery acknowledgement for Telegram Gateway verification messages »](/method/messages.reportMessagesDelivery/).
-   [Third-party verification »](/api/bots/verification/)
-   [Reactions for service messages »](/api/reactions/)
-   [Collectible gifts »](/api/gifts/#collectible-gifts)
-   Add support for entities in folder titles, and a new `title_noanimate` flag to optionally freeze animated emoji entities in the title.
-   All flags added to [channel](/constructor/channel/) (listed below) are valid `min` flags, meaning they must be applied over the locally stored version even if the `min` flag of the incoming [channel](/constructor/channel/) is set.
-   All flags added to [user](/constructor/user/) (listed below) are valid `min` flags, meaning they must be applied over the locally stored version even if the `min` flag of the incoming [user](/constructor/user/) is set.

#### PUSH notification changes

##### New PUSH notifications

-   Added [MESSAGE\_STARGIFT\_UPGRADE](/api/push-updates/#message-stargift-upgrade) - `{1} upgraded your Gift`
-   Added [MESSAGE\_UNIQUE\_STARGIFT](/api/push-updates/#message-unique-stargift) - `{1} transferred you a Gift!`
