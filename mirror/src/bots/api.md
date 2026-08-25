---
title: "Telegram Bot API"
original: "https://core.telegram.org/bots/api"
section: bots
description: "Each bot is given a unique authentication token when it is created. The token looks something like 123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11, but we'll use simply &lt;token> in…"
crumbs: [{"title":"Telegram Bots","url":"/bots/"},{"title":"Telegram Bot API","url":"/bots/api/"}]
layout: layout.njk
---

# Telegram Bot API

> The Bot API is an HTTP-based interface created for developers keen on building bots for Telegram.  
> To learn how to create and set up a bot, please consult our [**Introduction to Bots**](/bots/) and [**Bot FAQ**](/bots/faq/).

### Recent changes

> Subscribe to [@BotNews](https://t.me/botnews) to be the first to know about the latest updates and join the discussion in [@BotTalk](https://t.me/bottalk)

#### July 14, 2026

**Bot API 10.2**

**Rich Messages**

-   Added the class [InputRichMessageMedia](#inputrichmessagemedia) and the field _media_ to the class [InputRichMessage](#inputrichmessage), allowing bots to explicitly specify media used in _markdown_ or _html_ formatting when sending a rich message.
-   Added the class [InputMediaVoiceNote](#inputmediavoicenote), representing a voice message to be sent.
-   Added the class [InputRichBlockListItem](#inputrichblocklistitem), which represents an item in a list to be sent.
-   Added the classes [InputRichBlockParagraph](#inputrichblockparagraph), [InputRichBlockSectionHeading](#inputrichblocksectionheading), [InputRichBlockPreformatted](#inputrichblockpreformatted), [InputRichBlockFooter](#inputrichblockfooter), [InputRichBlockDivider](#inputrichblockdivider), [InputRichBlockMathematicalExpression](#inputrichblockmathematicalexpression), [InputRichBlockAnchor](#inputrichblockanchor), [InputRichBlockList](#inputrichblocklist), [InputRichBlockBlockQuotation](#inputrichblockblockquotation), [InputRichBlockPullQuotation](#inputrichblockpullquotation), [InputRichBlockCollage](#inputrichblockcollage), [InputRichBlockSlideshow](#inputrichblockslideshow), [InputRichBlockTable](#inputrichblocktable), [InputRichBlockDetails](#inputrichblockdetails), [InputRichBlockMap](#inputrichblockmap), [InputRichBlockAnimation](#inputrichblockanimation), [InputRichBlockAudio](#inputrichblockaudio), [InputRichBlockPhoto](#inputrichblockphoto), [InputRichBlockVideo](#inputrichblockvideo), [InputRichBlockVoiceNote](#inputrichblockvoicenote) and [InputRichBlockThinking](#inputrichblockthinking), which represent different types of blocks available to format an outgoing rich message.
-   Added the field _blocks_ to the class [InputRichMessage](#inputrichmessage), allowing bots to specify rich message formatting via block entities.

**Ephemeral Messages**

-   Introduced support for [Ephemeral Messages](/bots/features/#ephemeral-messages), allowing bots to send group messages and receive commands that are visible only to a specific user and the bot.
-   Added the field _is\_ephemeral_ to the class [BotCommand](#botcommand).
-   Added the field _receiver\_user_ to the class [Message](#message).
-   Added the field _ephemeral\_message\_id_ to the class [Message](#message).
-   Added the parameters _receiver\_user\_id_ and _callback\_query\_id_ to the methods [sendMessage](#sendmessage), [sendAnimation](#sendanimation), [sendAudio](#sendaudio), [sendDocument](#senddocument), [sendLivePhoto](#sendlivephoto), [sendPhoto](#sendphoto), [sendSticker](#sendsticker), [sendVideo](#sendvideo), [sendVideoNote](#sendvideonote), [sendVoice](#sendvoice), [sendContact](#sendcontact), [sendLocation](#sendlocation), [sendVenue](#sendvenue).
-   Added the field _ephemeral\_message\_id_ to the class [ReplyParameters](#replyparameters), allowing bots to reply to ephemeral messages.
-   Marked the field _message\_id_ in the class [ReplyParameters](#replyparameters) as optional if the field _ephemeral\_message\_id_ is present.
-   Added the methods [editEphemeralMessageText](#editephemeralmessagetext), [editEphemeralMessageMedia](#editephemeralmessagemedia), [editEphemeralMessageCaption](#editephemeralmessagecaption), and [editEphemeralMessageReplyMarkup](#editephemeralmessagereplymarkup) allowing bots to edit ephemeral messages.
-   Added the method [deleteEphemeralMessage](#deleteephemeralmessage) allowing bots to delete ephemeral messages.

**Communities**

-   Introduced initial support for **Communities** - several supergroups, channels, and bots linked together around a shared topic or audience.
-   Added the class [Community](#community) which represents a community.
-   Added the class [CommunityChatAdded](#communitychatadded) and the field _community\_chat\_added_ to the class [Message](#message).
-   Added the class [CommunityChatRemoved](#communitychatremoved) and the field _community\_chat\_removed_ to the class [Message](#message).
-   Added the field _community_ to the class [ChatFullInfo](#chatfullinfo).

**General**

-   Added updates about changes to a user payment subscription, represented by the class [BotSubscriptionUpdated](#botsubscriptionupdated) and the field _subscription_ in the class [Update](#update).
-   Hardened the security of Mini Apps by disallowing the usage of Mini App methods from origins different from the original Mini App domain. The protection will be automatically enabled for all Mini Apps on July 20, 2026. You can opt-out from the protection through the [@BotFather](https://t.me/BotFather) Mini App. If you do so, you acknowledge that it is the responsibility of the bot to ensure that the Mini App has no links to untrusted sites.

#### June 11, 2026

**Bot API 10.1**

**Rich Messages**

-   Added support for [Rich Messages](/bots/features/#rich-messages), allowing bots to send highly structured text and stream AI-generated replies with seamless rich formatting.
-   Added the classes [RichTextBold](#richtextbold), [RichTextItalic](#richtextitalic), [RichTextUnderline](#richtextunderline), [RichTextStrikethrough](#richtextstrikethrough), [RichTextSpoiler](#richtextspoiler), [RichTextDateTime](#richtextdatetime), [RichTextTextMention](#richtexttextmention), [RichTextSubscript](#richtextsubscript), [RichTextSuperscript](#richtextsuperscript), [RichTextMarked](#richtextmarked), [RichTextCode](#richtextcode), [RichTextCustomEmoji](#richtextcustomemoji), [RichTextMathematicalExpression](#richtextmathematicalexpression), [RichTextUrl](#richtexturl), [RichTextEmailAddress](#richtextemailaddress), [RichTextPhoneNumber](#richtextphonenumber), [RichTextBankCardNumber](#richtextbankcardnumber), [RichTextMention](#richtextmention), [RichTextHashtag](#richtexthashtag), [RichTextCashtag](#richtextcashtag), [RichTextBotCommand](#richtextbotcommand), [RichTextAnchor](#richtextanchor), [RichTextAnchorLink](#richtextanchorlink), [RichTextReference](#richtextreference) and [RichTextReferenceLink](#richtextreferencelink), which represent different types of rich formatted text.
-   Added the class [RichText](#richtext), which represents rich formatted text.
-   Added the class [RichBlockCaption](#richblockcaption), which represents the caption of a rich formatted text.
-   Added the class [RichBlockTableCell](#richblocktablecell), which represents a cell in a table.
-   Added the class [RichBlockListItem](#richblocklistitem), which represents an item in a list.
-   Added the classes [RichBlockParagraph](#richblockparagraph), [RichBlockSectionHeading](#richblocksectionheading), [RichBlockPreformatted](#richblockpreformatted), [RichBlockFooter](#richblockfooter), [RichBlockDivider](#richblockdivider), [RichBlockMathematicalExpression](#richblockmathematicalexpression), [RichBlockAnchor](#richblockanchor), [RichBlockList](#richblocklist), [RichBlockBlockQuotation](#richblockblockquotation), [RichBlockPullQuotation](#richblockpullquotation), [RichBlockCollage](#richblockcollage), [RichBlockSlideshow](#richblockslideshow), [RichBlockTable](#richblocktable), [RichBlockDetails](#richblockdetails), [RichBlockMap](#richblockmap), [RichBlockAnimation](#richblockanimation), [RichBlockAudio](#richblockaudio), [RichBlockPhoto](#richblockphoto), [RichBlockVideo](#richblockvideo), [RichBlockVoiceNote](#richblockvoicenote) and [RichBlockThinking](#richblockthinking), which represent different types of blocks in a rich formatted message.
-   Added the class [RichBlock](#richblock), which represents a block in a rich formatted message.
-   Added the class [RichMessage](#richmessage), which represents a rich formatted message.
-   Added the field _rich\_message_ to the class [Message](#message).
-   Added the class [InputRichMessage](#inputrichmessage), describing a rich message to send.
-   Added the class [InputRichMessageContent](#inputrichmessagecontent) and allowed it to be used as [InputMessageContent](#inputmessagecontent) in results of inline, guest, and Web App queries.
-   Added the method [sendRichMessage](#sendrichmessage), allowing bots to send rich messages.
-   Added the method [sendRichMessageDraft](#sendrichmessagedraft), allowing bots to stream partial rich messages.
-   Added the parameter _rich\_message_ to the method [editMessageText](#editmessagetext), allowing bots to edit rich messages.

**Join Request Queries**

-   Added the field _supports\_join\_request\_queries_ to the class [User](#user).
-   Added the field _guard\_bot_ to the class [ChatFullInfo](#chatfullinfo).
-   Added the field _query\_id_ to the class [ChatJoinRequest](#chatjoinrequest).
-   Added the method [answerChatJoinRequestQuery](#answerchatjoinrequestquery).
-   Added the method [sendChatJoinRequestWebApp](#sendchatjoinrequestwebapp).

**Polls**

-   Added the class [Link](#link) and the field _link_ to the class [PollMedia](#pollmedia).
-   Added the class [InputMediaLink](#inputmedialink) and allowed it to be used as [InputPollOptionMedia](#inputpolloptionmedia).

#### May 8, 2026

**Bot API 10.0**

**Guest Mode**

-   Introduced support for [guest mode](/bots/features/#guest-bots), allowing bots to receive certain messages and issue replies within chats they are not a member of.
-   Added the field _supports\_guest\_queries_ to the class [User](#user).
-   Added the fields _guest\_bot\_caller\_user_ and _guest\_bot\_caller\_chat_ to the class [Message](#message).
-   Added the field _guest\_query\_id_ to the class [Message](#message).
-   Added the field _guest\_message_ to the class [Update](#update).
-   Added the class [SentGuestMessage](#sentguestmessage) and the method [answerGuestQuery](#answerguestquery).

**Chat Management**

-   Added the field _can\_react\_to\_messages_ to the classes [ChatMemberRestricted](#chatmemberrestricted) and [ChatPermissions](#chatpermissions).
-   Added the parameter _return\_bots_ to the method [getChatAdministrators](#getchatadministrators).
-   Added the method [deleteAllMessageReactions](#deleteallmessagereactions).
-   Added the method [deleteMessageReaction](#deletemessagereaction).
-   Added the ability to see certain messages sent by other bots in groups.

**Polls**

-   Added the classes [InputMediaSticker](#inputmediasticker), [InputMediaLocation](#inputmedialocation), and [InputMediaVenue](#inputmediavenue).
-   Added the class [PollMedia](#pollmedia), representing a media in a poll.
-   Added the field _media_ to the class [Poll](#poll), allowing bots to see media in polls.
-   Added the field _explanation\_media_ to the class [Poll](#poll), allowing bots to see media in quiz explanations.
-   Added the field _media_ to the class [PollOption](#polloption), allowing bots to see media in poll options.
-   Added the class [InputPollMedia](#inputpollmedia) and the parameters _media_ and _explanation\_media_ to the method [sendPoll](#sendpoll), allowing bots to add media to polls.
-   Added the class [InputPollOptionMedia](#inputpolloptionmedia) and the field _media_ to the class [InputPollOption](#inputpolloption), allowing bots to add media to poll options.
-   Added the field _members\_only_ to the class [Poll](#poll).
-   Added the parameter _members\_only_ to the method [sendPoll](#sendpoll).
-   Added the field _country\_codes_ to the class [Poll](#poll).
-   Added the parameter _country\_codes_ to the method [sendPoll](#sendpoll).
-   Decreased the minimum number of poll options from 2 to 1.

**Live photos**

-   Added the class [LivePhoto](#livephoto), which represents a photo with a short video.
-   Added the class [InputMediaLivePhoto](#inputmedialivephoto).
-   Added the field _live\_photo_ to the classes [Message](#message) and [ExternalReplyInfo](#externalreplyinfo).
-   Added the method [sendLivePhoto](#sendlivephoto), allowing bots to send live photos.
-   Added the class [PaidMediaLivePhoto](#paidmedialivephoto), which describes a paid media with a live photo.
-   Added the class [InputPaidMediaLivePhoto](#inputpaidmedialivephoto), allowing bots to send live photos as paid media.
-   Allowed to use live photos in [sendMediaGroup](#sendmediagroup) and [editMessageMedia](#editmessagemedia),

**General**

-   Allowed [Secretary Bots](/bots/features/#secretary-bots) to manage accounts of users without a Telegram Premium subscription.
-   Added the ability to send messages to other bots via username if both bots enabled bot-to-bot communication.
-   Added the ability to reply to other bots from a business bot if the business bot enabled bot-to-bot communication.
-   Allowed bots to pass an empty text in the method [sendMessageDraft](#sendmessagedraft).
-   Added the class [BotAccessSettings](#botaccesssettings) and the method [getManagedBotAccessSettings](#getmanagedbotaccesssettings).
-   Added the method [setManagedBotAccessSettings](#setmanagedbotaccesssettings).
-   Added the method [getUserPersonalChatMessages](#getuserpersonalchatmessages).

**[See earlier changes »](/bots/api-changelog/)**

### Authorizing your bot

Each bot is given a unique authentication token [when it is created](/bots/features/#botfather). The token looks something like `123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11`, but we'll use simply **&lt;token>** in this document instead. You can learn about obtaining tokens and generating new ones in [this document](/bots/features/#botfather).

### Making requests

All queries to the Telegram Bot API must be served over HTTPS and need to be presented in this form: `https://api.telegram.org/bot<token>/METHOD_NAME`. Like this for example:

```
https://api.telegram.org/bot123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11/getMe
```

We support **GET** and **POST** HTTP methods. We support four ways of passing parameters in Bot API requests:

-   [URL query string](https://en.wikipedia.org/wiki/Query_string)
-   application/x-www-form-urlencoded
-   application/json (except for uploading files)
-   multipart/form-data (use to upload files)

The response contains a JSON object, which always has a Boolean field 'ok' and may have an optional String field 'description' with a human-readable description of the result. If 'ok' equals _True_, the request was successful and the result of the query can be found in the 'result' field. In case of an unsuccessful request, 'ok' equals _False_ and the error is explained in the 'description'. An Integer 'error\_code' field is also returned, but its contents are subject to change in the future. Some errors may also have an optional field 'parameters' of the type [ResponseParameters](#responseparameters), which can help to automatically handle the error.

-   All methods in the Bot API are case-insensitive.
-   All queries must be made using UTF-8.

#### Making requests when getting updates

If you're using [**webhooks**](#getting-updates), you can perform a request to the Bot API while sending an answer to the webhook. Use either _application/json_ or _application/x-www-form-urlencoded_ or _multipart/form-data_ response content type for passing parameters. Specify the method to be invoked in the _method_ parameter of the request. It's not possible to know that such a request was successful or get its result.

> Please see our [FAQ](/bots/faq/#how-can-i-make-requests-in-response-to-updates) for examples.

### Using a Local Bot API Server

The Bot API server source code is available at [telegram-bot-api](https://github.com/tdlib/telegram-bot-api). You can run it locally and send the requests to your own server instead of `https://api.telegram.org`. If you switch to a local Bot API server, your bot will be able to:

-   Download files without a size limit.
-   Upload files up to 2000 MB.
-   Upload files using their local path and [the file URI scheme](https://en.wikipedia.org/wiki/File_URI_scheme).
-   Use an HTTP URL for the webhook.
-   Use any local IP address for the webhook.
-   Use any port for the webhook.
-   Set _max\_webhook\_connections_ up to 100000.
-   Receive the absolute local path as a value of the _file\_path_ field without the need to download the file after a [getFile](#getfile) request.

#### Do I need a Local Bot API Server

The majority of bots will be OK with the default configuration, running on our servers. But if you feel that you need one of [these features](#using-a-local-bot-api-server), you're welcome to switch to your own at any time.

### Getting updates

There are two mutually exclusive ways of receiving updates for your bot - the [getUpdates](#getupdates) method on one hand and [webhooks](#setwebhook) on the other. Incoming updates are stored on the server until the bot receives them either way, but they will not be kept longer than 24 hours.

Regardless of which option you choose, you will receive JSON-serialized [Update](#update) objects as a result.

#### Update

This [object](#available-types) represents an incoming update.  
At most **one** of the optional fields can be present in any given update.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>update_id</td><td>Integer</td><td>The update's unique identifier. Update identifiers start from a certain positive number and increase sequentially. This identifier becomes especially handy if you're using <a href="#setwebhook">webhooks</a>, since it allows you to ignore repeated updates or to restore the correct update sequence, should they get out of order. If there are no new updates for at least a week, then identifier of the next update will be chosen randomly instead of sequentially.</td></tr><tr><td>message</td><td><a href="#message">Message</a></td><td><em>Optional</em>. New incoming message of any kind - text, photo, sticker, etc.</td></tr><tr><td>edited_message</td><td><a href="#message">Message</a></td><td><em>Optional</em>. New version of a message that is known to the bot and was edited. This update may at times be triggered by changes to message fields that are either unavailable or not actively used by your bot.</td></tr><tr><td>channel_post</td><td><a href="#message">Message</a></td><td><em>Optional</em>. New incoming channel post of any kind - text, photo, sticker, etc.</td></tr><tr><td>edited_channel_post</td><td><a href="#message">Message</a></td><td><em>Optional</em>. New version of a channel post that is known to the bot and was edited. This update may at times be triggered by changes to message fields that are either unavailable or not actively used by your bot.</td></tr><tr><td>business_connection</td><td><a href="#businessconnection">BusinessConnection</a></td><td><em>Optional</em>. The bot was connected to or disconnected from a business account, or a user edited an existing connection with the bot</td></tr><tr><td>business_message</td><td><a href="#message">Message</a></td><td><em>Optional</em>. New message from a connected business account</td></tr><tr><td>edited_business_message</td><td><a href="#message">Message</a></td><td><em>Optional</em>. New version of a message from a connected business account</td></tr><tr><td>deleted_business_messages</td><td><a href="#businessmessagesdeleted">BusinessMessagesDeleted</a></td><td><em>Optional</em>. Messages were deleted from a connected business account</td></tr><tr><td>guest_message</td><td><a href="#message">Message</a></td><td><em>Optional</em>. New guest message. The bot can use the field <em>Message.guest_query_id</em> and the method <a href="#answerguestquery">answerGuestQuery</a> to send a message in response.</td></tr><tr><td>message_reaction</td><td><a href="#messagereactionupdated">MessageReactionUpdated</a></td><td><em>Optional</em>. A reaction to a message was changed by a user. The bot must be an administrator in the chat and must explicitly specify <code>"message_reaction"</code> in the list of <em>allowed_updates</em> to receive these updates. The update isn't received for reactions set by bots.</td></tr><tr><td>message_reaction_count</td><td><a href="#messagereactioncountupdated">MessageReactionCountUpdated</a></td><td><em>Optional</em>. Reactions to a message with anonymous reactions were changed. The bot must be an administrator in the chat and must explicitly specify <code>"message_reaction_count"</code> in the list of <em>allowed_updates</em> to receive these updates. The updates are grouped and can be sent with delay up to a few minutes.</td></tr><tr><td>inline_query</td><td><a href="#inlinequery">InlineQuery</a></td><td><em>Optional</em>. New incoming <a href="#inline-mode">inline</a> query</td></tr><tr><td>chosen_inline_result</td><td><a href="#choseninlineresult">ChosenInlineResult</a></td><td><em>Optional</em>. The result of an <a href="#inline-mode">inline</a> query that was chosen by a user and sent to their chat partner. Please see our documentation on the <a href="/bots/inline/#collecting-feedback">feedback collecting</a> for details on how to enable these updates for your bot.</td></tr><tr><td>callback_query</td><td><a href="#callbackquery">CallbackQuery</a></td><td><em>Optional</em>. New incoming callback query</td></tr><tr><td>shipping_query</td><td><a href="#shippingquery">ShippingQuery</a></td><td><em>Optional</em>. New incoming shipping query. Only for invoices with flexible price.</td></tr><tr><td>pre_checkout_query</td><td><a href="#precheckoutquery">PreCheckoutQuery</a></td><td><em>Optional</em>. New incoming pre-checkout query. Contains full information about checkout.</td></tr><tr><td>purchased_paid_media</td><td><a href="#paidmediapurchased">PaidMediaPurchased</a></td><td><em>Optional</em>. A user purchased paid media with a non-empty payload sent by the bot in a non-channel chat</td></tr><tr><td>poll</td><td><a href="#poll">Poll</a></td><td><em>Optional</em>. New poll state. Bots receive only updates about manually stopped polls and polls, which are sent by the bot.</td></tr><tr><td>poll_answer</td><td><a href="#pollanswer">PollAnswer</a></td><td><em>Optional</em>. A user changed their answer in a non-anonymous poll. Bots receive new votes only in polls that were sent by the bot itself.</td></tr><tr><td>my_chat_member</td><td><a href="#chatmemberupdated">ChatMemberUpdated</a></td><td><em>Optional</em>. The bot's chat member status was updated in a chat. For private chats, this update is received only when the bot is blocked or unblocked by the user.</td></tr><tr><td>chat_member</td><td><a href="#chatmemberupdated">ChatMemberUpdated</a></td><td><em>Optional</em>. A chat member's status was updated in a chat. The bot must be an administrator in the chat and must explicitly specify <code>"chat_member"</code> in the list of <em>allowed_updates</em> to receive these updates.</td></tr><tr><td>chat_join_request</td><td><a href="#chatjoinrequest">ChatJoinRequest</a></td><td><em>Optional</em>. A request to join the chat has been sent. The bot must have the <em>can_invite_users</em> administrator right in the chat to receive these updates.</td></tr><tr><td>chat_boost</td><td><a href="#chatboostupdated">ChatBoostUpdated</a></td><td><em>Optional</em>. A chat boost was added or changed. The bot must be an administrator in the chat to receive these updates.</td></tr><tr><td>removed_chat_boost</td><td><a href="#chatboostremoved">ChatBoostRemoved</a></td><td><em>Optional</em>. A boost was removed from a chat. The bot must be an administrator in the chat to receive these updates.</td></tr><tr><td>managed_bot</td><td><a href="#managedbotupdated">ManagedBotUpdated</a></td><td><em>Optional</em>. A new bot was created to be managed by the bot, or token or owner of a managed bot was changed</td></tr><tr><td>subscription</td><td><a href="#botsubscriptionupdated">BotSubscriptionUpdated</a></td><td><em>Optional</em>. User payment subscription has changed</td></tr></tbody></table>

#### getUpdates

Use this method to receive incoming updates using long polling ([wiki](https://en.wikipedia.org/wiki/Push_technology#Long_polling)). Returns an Array of [Update](#update) objects.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>offset</td><td>Integer</td><td>Optional</td><td>Identifier of the first update to be returned. Must be greater by one than the highest among the identifiers of previously received updates. By default, updates starting with the earliest unconfirmed update are returned. An update is considered confirmed as soon as <a href="#getupdates">getUpdates</a> is called with an <em>offset</em> higher than its <em>update_id</em>. The negative offset can be specified to retrieve updates starting from <em>-offset</em> update from the end of the updates queue. All previous updates will be forgotten.</td></tr><tr><td>limit</td><td>Integer</td><td>Optional</td><td>Limits the number of updates to be retrieved. Values between 1-100 are accepted. Defaults to 100.</td></tr><tr><td>timeout</td><td>Integer</td><td>Optional</td><td>Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling. Should be positive, short polling should be used for testing purposes only.</td></tr><tr><td>allowed_updates</td><td>Array of String</td><td>Optional</td><td>A JSON-serialized list of the update types you want your bot to receive. For example, specify <code>["message", "edited_channel_post", "callback_query"]</code> to only receive updates of these types. See <a href="#update">Update</a> for a complete list of available update types. Specify an empty list to receive all update types except <em>chat_member</em>, <em>message_reaction</em>, and <em>message_reaction_count</em> (default). If not specified, the previous setting will be used.<br><br>Please note that this parameter doesn't affect updates created before the call to getUpdates, so unwanted updates may be received for a short period of time.</td></tr></tbody></table>

> **Notes**  
> **1.** This method will not work if an outgoing webhook is set up.  
> **2.** In order to avoid getting duplicate updates, recalculate _offset_ after each server response.

#### setWebhook

Use this method to specify a URL and receive incoming updates via an outgoing webhook. Whenever there is an update for the bot, we will send an HTTPS POST request to the specified URL, containing a JSON-serialized [Update](#update). In case of an unsuccessful request (a request with response [HTTP status code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) different from `2XY`), we will repeat the request and give up after a reasonable amount of attempts. Returns _True_ on success.

If you'd like to make sure that the webhook was set by you, you can specify secret data in the parameter _secret\_token_. If specified, the request will contain a header “X-Telegram-Bot-Api-Secret-Token” with the secret token as content.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>url</td><td>String</td><td>Yes</td><td>HTTPS URL to send updates to. Use an empty string to remove webhook integration.</td></tr><tr><td>certificate</td><td><a href="#inputfile">InputFile</a></td><td>Optional</td><td>Upload your public key certificate so that the root certificate in use can be checked. See our <a href="/bots/self-signed/">self-signed guide</a> for details.</td></tr><tr><td>ip_address</td><td>String</td><td>Optional</td><td>The fixed IP address which will be used to send webhook requests instead of the IP address resolved through DNS</td></tr><tr><td>max_connections</td><td>Integer</td><td>Optional</td><td>The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery, 1-100. Defaults to <em>40</em>. Use lower values to limit the load on your bot's server, and higher values to increase your bot's throughput.</td></tr><tr><td>allowed_updates</td><td>Array of String</td><td>Optional</td><td>A JSON-serialized list of the update types you want your bot to receive. For example, specify <code>["message", "edited_channel_post", "callback_query"]</code> to only receive updates of these types. See <a href="#update">Update</a> for a complete list of available update types. Specify an empty list to receive all update types except <em>chat_member</em>, <em>message_reaction</em>, and <em>message_reaction_count</em> (default). If not specified, the previous setting will be used.<br>Please note that this parameter doesn't affect updates created before the call to the setWebhook, so unwanted updates may be received for a short period of time.</td></tr><tr><td>drop_pending_updates</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to drop all pending updates</td></tr><tr><td>secret_token</td><td>String</td><td>Optional</td><td>A secret token to be sent in a header “X-Telegram-Bot-Api-Secret-Token” in every webhook request, 1-256 characters. Only characters <code>A-Z</code>, <code>a-z</code>, <code>0-9</code>, <code>_</code> and <code>-</code> are allowed. The header is useful to ensure that the request comes from a webhook set by you.</td></tr></tbody></table>

> **Notes**  
> **1.** You will not be able to receive updates using [getUpdates](#getupdates) for as long as an outgoing webhook is set up.  
> **2.** To use a self-signed certificate, you need to upload your [public key certificate](/bots/self-signed/) using _certificate_ parameter. Please upload as InputFile, sending a String will not work.  
> **3.** Ports currently supported _for webhooks_: **443, 80, 88, 8443**.
> 
> If you're having any trouble setting up webhooks, please check out this [amazing guide to webhooks](/bots/webhooks/).

#### deleteWebhook

Use this method to remove webhook integration if you decide to switch back to [getUpdates](#getupdates). Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>drop_pending_updates</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to drop all pending updates</td></tr></tbody></table>

#### getWebhookInfo

Use this method to get current webhook status. Requires no parameters. On success, returns a [WebhookInfo](#webhookinfo) object. If the bot is using [getUpdates](#getupdates), will return an object with the _url_ field empty.

#### WebhookInfo

Describes the current status of a webhook.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>url</td><td>String</td><td>Webhook URL, may be empty if webhook is not set up</td></tr><tr><td>has_custom_certificate</td><td>Boolean</td><td><em>True</em>, if a custom certificate was provided for webhook certificate checks</td></tr><tr><td>pending_update_count</td><td>Integer</td><td>Number of updates awaiting delivery</td></tr><tr><td>ip_address</td><td>String</td><td><em>Optional</em>. Currently used webhook IP address</td></tr><tr><td>last_error_date</td><td>Integer</td><td><em>Optional</em>. Unix time for the most recent error that happened when trying to deliver an update via webhook</td></tr><tr><td>last_error_message</td><td>String</td><td><em>Optional</em>. Error message in human-readable format for the most recent error that happened when trying to deliver an update via webhook</td></tr><tr><td>last_synchronization_error_date</td><td>Integer</td><td><em>Optional</em>. Unix time of the most recent error that happened when trying to synchronize available updates with Telegram datacenters</td></tr><tr><td>max_connections</td><td>Integer</td><td><em>Optional</em>. The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery</td></tr><tr><td>allowed_updates</td><td>Array of String</td><td><em>Optional</em>. A list of update types the bot is subscribed to. Defaults to all update types except <em>chat_member</em>, <em>message_reaction</em>, and <em>message_reaction_count</em>.</td></tr></tbody></table>

### Available types

All types used in the Bot API responses are represented as JSON-objects.

It is safe to use 32-bit signed integers for storing all **Integer** fields unless otherwise noted.

> **Optional** fields may be not returned when irrelevant.

#### User

This object represents a Telegram user or bot.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>id</td><td>Integer</td><td>Unique identifier for this user or bot. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier.</td></tr><tr><td>is_bot</td><td>Boolean</td><td><em>True</em>, if this user is a bot</td></tr><tr><td>first_name</td><td>String</td><td>User's or bot's first name</td></tr><tr><td>last_name</td><td>String</td><td><em>Optional</em>. User's or bot's last name</td></tr><tr><td>username</td><td>String</td><td><em>Optional</em>. User's or bot's username</td></tr><tr><td>language_code</td><td>String</td><td><em>Optional</em>. <a href="https://en.wikipedia.org/wiki/IETF_language_tag">IETF language tag</a> of the user's language</td></tr><tr><td>is_premium</td><td>True</td><td><em>Optional</em>. <em>True</em>, if this user is a Telegram Premium user</td></tr><tr><td>added_to_attachment_menu</td><td>True</td><td><em>Optional</em>. <em>True</em>, if this user added the bot to the attachment menu</td></tr><tr><td>can_join_groups</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if the bot can be invited to groups. Returned only in <a href="#getme">getMe</a>.</td></tr><tr><td>can_read_all_group_messages</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if <a href="/bots/features/#privacy-mode">privacy mode</a> is disabled for the bot. Returned only in <a href="#getme">getMe</a>.</td></tr><tr><td>supports_guest_queries</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if the bot supports guest queries from chats it is not a member of. Returned only in <a href="#getme">getMe</a>.</td></tr><tr><td>supports_inline_queries</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if the bot supports inline queries. Returned only in <a href="#getme">getMe</a>.</td></tr><tr><td>can_connect_to_business</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if the bot can be connected to a user account to manage it. Returned only in <a href="#getme">getMe</a>.</td></tr><tr><td>has_main_web_app</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if the bot has a main Web App. Returned only in <a href="#getme">getMe</a>.</td></tr><tr><td>has_topics_enabled</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if the bot has forum topic mode enabled in private chats. Returned only in <a href="#getme">getMe</a>.</td></tr><tr><td>allows_users_to_create_topics</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if the bot allows users to create and delete topics in private chats. Returned only in <a href="#getme">getMe</a>.</td></tr><tr><td>can_manage_bots</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if other bots can be created to be controlled by the bot. Returned only in <a href="#getme">getMe</a>.</td></tr><tr><td>supports_join_request_queries</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if the bot supports join request queries and can be assigned to process them. Returned only in <a href="#getme">getMe</a>.</td></tr></tbody></table>

#### Chat

This object represents a chat.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>id</td><td>Integer</td><td>Unique identifier for this chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.</td></tr><tr><td>type</td><td>String</td><td>Type of the chat, can be either “private”, “group”, “supergroup” or “channel”</td></tr><tr><td>title</td><td>String</td><td><em>Optional</em>. Title, for supergroups, channels and group chats</td></tr><tr><td>username</td><td>String</td><td><em>Optional</em>. Username, for private chats, supergroups and channels if available</td></tr><tr><td>first_name</td><td>String</td><td><em>Optional</em>. First name of the other party in a private chat</td></tr><tr><td>last_name</td><td>String</td><td><em>Optional</em>. Last name of the other party in a private chat</td></tr><tr><td>is_forum</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the supergroup chat is a forum (has <a href="/blog/topics-in-groups-collectible-usernames/#topics-in-groups">topics</a> enabled)</td></tr><tr><td>is_direct_messages</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the chat is the direct messages chat of a channel</td></tr></tbody></table>

#### ChatFullInfo

This object contains full information about a chat.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>id</td><td>Integer</td><td>Unique identifier for this chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.</td></tr><tr><td>type</td><td>String</td><td>Type of the chat, can be either “private”, “group”, “supergroup” or “channel”</td></tr><tr><td>title</td><td>String</td><td><em>Optional</em>. Title, for supergroups, channels and group chats</td></tr><tr><td>username</td><td>String</td><td><em>Optional</em>. Username, for private chats, supergroups and channels if available</td></tr><tr><td>first_name</td><td>String</td><td><em>Optional</em>. First name of the other party in a private chat</td></tr><tr><td>last_name</td><td>String</td><td><em>Optional</em>. Last name of the other party in a private chat</td></tr><tr><td>is_forum</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the supergroup chat is a forum (has <a href="/blog/topics-in-groups-collectible-usernames/#topics-in-groups">topics</a> enabled)</td></tr><tr><td>is_direct_messages</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the chat is the direct messages chat of a channel</td></tr><tr><td>accent_color_id</td><td>Integer</td><td>Identifier of the accent color for the chat name and backgrounds of the chat photo, reply header, and link preview. See <a href="#accent-colors">accent colors</a> for more details.</td></tr><tr><td>max_reaction_count</td><td>Integer</td><td>The maximum number of reactions that can be set on a message in the chat</td></tr><tr><td>photo</td><td><a href="#chatphoto">ChatPhoto</a></td><td><em>Optional</em>. Chat photo</td></tr><tr><td>active_usernames</td><td>Array of String</td><td><em>Optional</em>. If non-empty, the list of all <a href="/blog/topics-in-groups-collectible-usernames/#collectible-usernames">active chat usernames</a>; for private chats, supergroups and channels</td></tr><tr><td>birthdate</td><td><a href="#birthdate">Birthdate</a></td><td><em>Optional</em>. For private chats, the date of birth of the user</td></tr><tr><td>business_intro</td><td><a href="#businessintro">BusinessIntro</a></td><td><em>Optional</em>. For private chats with business accounts, the intro of the business</td></tr><tr><td>business_location</td><td><a href="#businesslocation">BusinessLocation</a></td><td><em>Optional</em>. For private chats with business accounts, the location of the business</td></tr><tr><td>business_opening_hours</td><td><a href="#businessopeninghours">BusinessOpeningHours</a></td><td><em>Optional</em>. For private chats with business accounts, the opening hours of the business</td></tr><tr><td>personal_chat</td><td><a href="#chat">Chat</a></td><td><em>Optional</em>. For private chats, the personal channel of the user</td></tr><tr><td>parent_chat</td><td><a href="#chat">Chat</a></td><td><em>Optional</em>. Information about the corresponding channel chat; for direct messages chats only</td></tr><tr><td>available_reactions</td><td>Array of <a href="#reactiontype">ReactionType</a></td><td><em>Optional</em>. List of available reactions allowed in the chat. If omitted, then all <a href="#reactiontypeemoji">emoji reactions</a> are allowed.</td></tr><tr><td>background_custom_emoji_id</td><td>String</td><td><em>Optional</em>. Custom emoji identifier of the emoji chosen by the chat for the reply header and link preview background</td></tr><tr><td>profile_accent_color_id</td><td>Integer</td><td><em>Optional</em>. Identifier of the accent color for the chat's profile background. See <a href="#profile-accent-colors">profile accent colors</a> for more details.</td></tr><tr><td>profile_background_custom_emoji_id</td><td>String</td><td><em>Optional</em>. Custom emoji identifier of the emoji chosen by the chat for its profile background</td></tr><tr><td>emoji_status_custom_emoji_id</td><td>String</td><td><em>Optional</em>. Custom emoji identifier of the emoji status of the chat or the other party in a private chat</td></tr><tr><td>emoji_status_expiration_date</td><td>Integer</td><td><em>Optional</em>. Expiration date of the emoji status of the chat or the other party in a private chat, in Unix time, if any</td></tr><tr><td>bio</td><td>String</td><td><em>Optional</em>. Bio of the other party in a private chat</td></tr><tr><td>has_private_forwards</td><td>True</td><td><em>Optional</em>. <em>True</em>, if privacy settings of the other party in the private chat allows to use <code>tg://user?id=&lt;user_id&gt;</code> links only in chats with the user</td></tr><tr><td>has_restricted_voice_and_video_messages</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the privacy settings of the other party restrict sending voice and video note messages in the private chat</td></tr><tr><td>join_to_send_messages</td><td>True</td><td><em>Optional</em>. <em>True</em>, if users need to join the supergroup before they can send messages</td></tr><tr><td>join_by_request</td><td>True</td><td><em>Optional</em>. <em>True</em>, if all users directly joining the supergroup without using an invite link need to be approved by supergroup administrators</td></tr><tr><td>description</td><td>String</td><td><em>Optional</em>. Description, for groups, supergroups and channel chats</td></tr><tr><td>invite_link</td><td>String</td><td><em>Optional</em>. Primary invite link, for groups, supergroups and channel chats</td></tr><tr><td>pinned_message</td><td><a href="#message">Message</a></td><td><em>Optional</em>. The most recent pinned message (by sending date)</td></tr><tr><td>permissions</td><td><a href="#chatpermissions">ChatPermissions</a></td><td><em>Optional</em>. Default chat member permissions, for groups and supergroups</td></tr><tr><td>accepted_gift_types</td><td><a href="#acceptedgifttypes">AcceptedGiftTypes</a></td><td>Information about types of gifts that are accepted by the chat or by the corresponding user for private chats</td></tr><tr><td>can_send_paid_media</td><td>True</td><td><em>Optional</em>. <em>True</em>, if paid media messages can be sent or forwarded to the channel chat. The field is available only for channel chats.</td></tr><tr><td>slow_mode_delay</td><td>Integer</td><td><em>Optional</em>. For supergroups, the minimum allowed delay between consecutive messages sent by each unprivileged user; in seconds</td></tr><tr><td>unrestrict_boost_count</td><td>Integer</td><td><em>Optional</em>. For supergroups, the minimum number of boosts that a non-administrator user needs to add in order to ignore slow mode and chat permissions</td></tr><tr><td>message_auto_delete_time</td><td>Integer</td><td><em>Optional</em>. The time after which all messages sent to the chat will be automatically deleted; in seconds</td></tr><tr><td>has_aggressive_anti_spam_enabled</td><td>True</td><td><em>Optional</em>. <em>True</em>, if aggressive anti-spam checks are enabled in the supergroup. The field is only available to chat administrators.</td></tr><tr><td>has_hidden_members</td><td>True</td><td><em>Optional</em>. <em>True</em>, if non-administrators can only get the list of bots and administrators in the chat</td></tr><tr><td>has_protected_content</td><td>True</td><td><em>Optional</em>. <em>True</em>, if messages from the chat can't be forwarded to other chats</td></tr><tr><td>has_visible_history</td><td>True</td><td><em>Optional</em>. <em>True</em>, if new chat members will have access to old messages; available only to chat administrators</td></tr><tr><td>sticker_set_name</td><td>String</td><td><em>Optional</em>. For supergroups, name of the group sticker set</td></tr><tr><td>can_set_sticker_set</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the bot can change the group sticker set</td></tr><tr><td>custom_emoji_sticker_set_name</td><td>String</td><td><em>Optional</em>. For supergroups, the name of the group's custom emoji sticker set. Custom emoji from this set can be used by all users and bots in the group.</td></tr><tr><td>linked_chat_id</td><td>Integer</td><td><em>Optional</em>. Unique identifier for the linked chat, i.e. the discussion group identifier for a channel and vice versa; for supergroups and channel chats. This identifier may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier.</td></tr><tr><td>location</td><td><a href="#chatlocation">ChatLocation</a></td><td><em>Optional</em>. For supergroups, the location to which the supergroup is connected</td></tr><tr><td>rating</td><td><a href="#userrating">UserRating</a></td><td><em>Optional</em>. For private chats, the rating of the user if any</td></tr><tr><td>first_profile_audio</td><td><a href="#audio">Audio</a></td><td><em>Optional</em>. For private chats, the first audio added to the profile of the user</td></tr><tr><td>unique_gift_colors</td><td><a href="#uniquegiftcolors">UniqueGiftColors</a></td><td><em>Optional</em>. The color scheme based on a unique gift that must be used for the chat's name, message replies and link previews</td></tr><tr><td>paid_message_star_count</td><td>Integer</td><td><em>Optional</em>. The number of Telegram Stars a general user has to pay to send a message to the chat</td></tr><tr><td>guard_bot</td><td><a href="#user">User</a></td><td><em>Optional</em>. The bot that processes join request queries in the chat. The field is only available to chat administrators.</td></tr><tr><td>community</td><td><a href="#community">Community</a></td><td><em>Optional</em>. The <a href="#community">Community</a> to which the chat belongs</td></tr></tbody></table>

#### Message

This object represents a message.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>message_id</td><td>Integer</td><td>Unique message identifier inside this chat; 0 for ephemeral messages. In specific instances (e.g., a message containing a video sent to a big chat), the server might automatically schedule a message instead of sending it immediately. In such cases, this field will be 0 and the relevant message will be unusable until it is actually sent.</td></tr><tr><td>message_thread_id</td><td>Integer</td><td><em>Optional</em>. Unique identifier of a message thread or forum topic to which the message belongs; for supergroups and private chats only</td></tr><tr><td>direct_messages_topic</td><td><a href="#directmessagestopic">DirectMessagesTopic</a></td><td><em>Optional</em>. Information about the direct messages chat topic that contains the message</td></tr><tr><td>from</td><td><a href="#user">User</a></td><td><em>Optional</em>. Sender of the message; may be empty for messages sent to channels. For backward compatibility, if the message was sent on behalf of a chat, the field contains a fake sender user in non-channel chats.</td></tr><tr><td>sender_chat</td><td><a href="#chat">Chat</a></td><td><em>Optional</em>. Sender of the message when sent on behalf of a chat. For example, the supergroup itself for messages sent by its anonymous administrators or a linked channel for messages automatically forwarded to the channel's discussion group. For backward compatibility, if the message was sent on behalf of a chat, the field <em>from</em> contains a fake sender user in non-channel chats.</td></tr><tr><td>sender_boost_count</td><td>Integer</td><td><em>Optional</em>. If the sender of the message boosted the chat, the number of boosts added by the user</td></tr><tr><td>sender_business_bot</td><td><a href="#user">User</a></td><td><em>Optional</em>. The bot that actually sent the message on behalf of the business account. Available only for outgoing messages sent on behalf of the connected business account.</td></tr><tr><td>sender_tag</td><td>String</td><td><em>Optional</em>. Tag or custom title of the sender of the message; for supergroups only</td></tr><tr><td>receiver_user</td><td><a href="#user">User</a></td><td><em>Optional</em>. For ephemeral messages, the user who received the message</td></tr><tr><td>ephemeral_message_id</td><td>Integer</td><td><em>Optional</em>. For ephemeral messages, identifier of the ephemeral message inside this chat. The identifier may be reused for another ephemeral message after the message is deleted or expires.</td></tr><tr><td>date</td><td>Integer</td><td>Date the message was sent in Unix time. It is always a positive number, representing a valid date.</td></tr><tr><td>guest_query_id</td><td>String</td><td><em>Optional</em>. The unique identifier for the guest query. Use this identifier with the method <a href="#answerguestquery">answerGuestQuery</a> to send a response message. If non-empty, the message belongs to the chat where the guest bot was summoned, which may not coincide with other existing bot chats sharing the same identifier.</td></tr><tr><td>business_connection_id</td><td>String</td><td><em>Optional</em>. Unique identifier of the business connection from which the message was received. If non-empty, the message belongs to a chat of the corresponding business account that is independent from any potential bot chat which might share the same identifier.</td></tr><tr><td>chat</td><td><a href="#chat">Chat</a></td><td>Chat the message belongs to</td></tr><tr><td>forward_origin</td><td><a href="#messageorigin">MessageOrigin</a></td><td><em>Optional</em>. Information about the original message for forwarded messages</td></tr><tr><td>is_topic_message</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the message is sent to a topic in a forum supergroup or a private chat with the bot</td></tr><tr><td>is_automatic_forward</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the message is a channel post that was automatically forwarded to the connected discussion group</td></tr><tr><td>reply_to_message</td><td><a href="#message">Message</a></td><td><em>Optional</em>. For replies in the same chat and message thread, the original message. Note that the <a href="#message">Message</a> object in this field will not contain further <em>reply_to_message</em> fields even if it itself is a reply. If the message is a reply to an ephemeral message, then this field may be omitted.</td></tr><tr><td>external_reply</td><td><a href="#externalreplyinfo">ExternalReplyInfo</a></td><td><em>Optional</em>. Information about the message that is being replied to, which may come from another chat or forum topic</td></tr><tr><td>quote</td><td><a href="#textquote">TextQuote</a></td><td><em>Optional</em>. For replies that quote part of the original message, the quoted part of the message</td></tr><tr><td>reply_to_story</td><td><a href="#story">Story</a></td><td><em>Optional</em>. For replies to a story, the original story</td></tr><tr><td>reply_to_checklist_task_id</td><td>Integer</td><td><em>Optional</em>. Identifier of the specific checklist task that is being replied to</td></tr><tr><td>reply_to_poll_option_id</td><td>String</td><td><em>Optional</em>. Persistent identifier of the specific poll option that is being replied to</td></tr><tr><td>via_bot</td><td><a href="#user">User</a></td><td><em>Optional</em>. Bot through which the message was sent</td></tr><tr><td>guest_bot_caller_user</td><td><a href="#user">User</a></td><td><em>Optional</em>. For a message sent by a guest bot, this is the user whose original message triggered the bot's response</td></tr><tr><td>guest_bot_caller_chat</td><td><a href="#chat">Chat</a></td><td><em>Optional</em>. For a message sent by a guest bot, this is the chat whose original message triggered the bot's response</td></tr><tr><td>edit_date</td><td>Integer</td><td><em>Optional</em>. Date the message was last edited in Unix time</td></tr><tr><td>has_protected_content</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the message can't be forwarded</td></tr><tr><td>is_from_offline</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the message was sent by an implicit action, for example, as an away or a greeting business message, or as a scheduled message</td></tr><tr><td>is_paid_post</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the message is a paid post. Note that such posts must not be deleted for 24 hours to receive the payment and can't be edited.</td></tr><tr><td>media_group_id</td><td>String</td><td><em>Optional</em>. The unique identifier inside this chat of a media message group this message belongs to</td></tr><tr><td>author_signature</td><td>String</td><td><em>Optional</em>. Signature of the post author for messages in channels, or the custom title of an anonymous group administrator</td></tr><tr><td>paid_star_count</td><td>Integer</td><td><em>Optional</em>. The number of Telegram Stars that were paid by the sender of the message to send it</td></tr><tr><td>text</td><td>String</td><td><em>Optional</em>. For text messages, the actual UTF-8 text of the message</td></tr><tr><td>entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td><em>Optional</em>. For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text</td></tr><tr><td>link_preview_options</td><td><a href="#linkpreviewoptions">LinkPreviewOptions</a></td><td><em>Optional</em>. Options used for link preview generation for the message, if it is a text message and link preview options were changed</td></tr><tr><td>suggested_post_info</td><td><a href="#suggestedpostinfo">SuggestedPostInfo</a></td><td><em>Optional</em>. Information about suggested post parameters if the message is a suggested post in a channel direct messages chat. If the message is an approved or declined suggested post, then it can't be edited.</td></tr><tr><td>effect_id</td><td>String</td><td><em>Optional</em>. Unique identifier of the message effect added to the message</td></tr><tr><td>rich_message</td><td><a href="#richmessage">RichMessage</a></td><td><em>Optional</em>. Message is a rich formatted message</td></tr><tr><td>animation</td><td><a href="#animation">Animation</a></td><td><em>Optional</em>. Message is an animation, information about the animation. For backward compatibility, when this field is set, the <em>document</em> field will also be set.</td></tr><tr><td>audio</td><td><a href="#audio">Audio</a></td><td><em>Optional</em>. Message is an audio file, information about the file</td></tr><tr><td>document</td><td><a href="#document">Document</a></td><td><em>Optional</em>. Message is a general file, information about the file</td></tr><tr><td>live_photo</td><td><a href="#livephoto">LivePhoto</a></td><td><em>Optional</em>. Message is a live photo, information about the live photo. For backward compatibility, when this field is set, the <em>photo</em> field will also be set.</td></tr><tr><td>paid_media</td><td><a href="#paidmediainfo">PaidMediaInfo</a></td><td><em>Optional</em>. Message contains paid media; information about the paid media</td></tr><tr><td>photo</td><td>Array of <a href="#photosize">PhotoSize</a></td><td><em>Optional</em>. Message is a photo, available sizes of the photo</td></tr><tr><td>sticker</td><td><a href="#sticker">Sticker</a></td><td><em>Optional</em>. Message is a sticker, information about the sticker</td></tr><tr><td>story</td><td><a href="#story">Story</a></td><td><em>Optional</em>. Message is a forwarded story</td></tr><tr><td>video</td><td><a href="#video">Video</a></td><td><em>Optional</em>. Message is a video, information about the video</td></tr><tr><td>video_note</td><td><a href="#videonote">VideoNote</a></td><td><em>Optional</em>. Message is a <a href="/blog/video-messages-and-telescope/">video note</a>, information about the video message</td></tr><tr><td>voice</td><td><a href="#voice">Voice</a></td><td><em>Optional</em>. Message is a voice message, information about the file</td></tr><tr><td>caption</td><td>String</td><td><em>Optional</em>. Caption for the animation, audio, document, paid media, photo, video or voice</td></tr><tr><td>caption_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td><em>Optional</em>. For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in the caption</td></tr><tr><td>show_caption_above_media</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the caption must be shown above the message media</td></tr><tr><td>has_media_spoiler</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the message media is covered by a spoiler animation</td></tr><tr><td>checklist</td><td><a href="#checklist">Checklist</a></td><td><em>Optional</em>. Message is a checklist</td></tr><tr><td>contact</td><td><a href="#contact">Contact</a></td><td><em>Optional</em>. Message is a shared contact, information about the contact</td></tr><tr><td>dice</td><td><a href="#dice">Dice</a></td><td><em>Optional</em>. Message is a dice with random value</td></tr><tr><td>game</td><td><a href="#game">Game</a></td><td><em>Optional</em>. Message is a game, information about the game. <a href="#games">More about games »</a></td></tr><tr><td>poll</td><td><a href="#poll">Poll</a></td><td><em>Optional</em>. Message is a native poll, information about the poll</td></tr><tr><td>venue</td><td><a href="#venue">Venue</a></td><td><em>Optional</em>. Message is a venue, information about the venue. For backward compatibility, when this field is set, the <em>location</em> field will also be set.</td></tr><tr><td>location</td><td><a href="#location">Location</a></td><td><em>Optional</em>. Message is a shared location, information about the location</td></tr><tr><td>new_chat_members</td><td>Array of <a href="#user">User</a></td><td><em>Optional</em>. New members that were added to the group or supergroup and information about them (the bot itself may be one of these members)</td></tr><tr><td>left_chat_member</td><td><a href="#user">User</a></td><td><em>Optional</em>. A member was removed from the group, information about them (this member may be the bot itself)</td></tr><tr><td>chat_owner_left</td><td><a href="#chatownerleft">ChatOwnerLeft</a></td><td><em>Optional</em>. Service message: chat owner has left</td></tr><tr><td>chat_owner_changed</td><td><a href="#chatownerchanged">ChatOwnerChanged</a></td><td><em>Optional</em>. Service message: chat owner has changed</td></tr><tr><td>new_chat_title</td><td>String</td><td><em>Optional</em>. A chat title was changed to this value</td></tr><tr><td>new_chat_photo</td><td>Array of <a href="#photosize">PhotoSize</a></td><td><em>Optional</em>. A chat photo was change to this value</td></tr><tr><td>delete_chat_photo</td><td>True</td><td><em>Optional</em>. Service message: the chat photo was deleted</td></tr><tr><td>group_chat_created</td><td>True</td><td><em>Optional</em>. Service message: the group has been created</td></tr><tr><td>supergroup_chat_created</td><td>True</td><td><em>Optional</em>. Service message: the supergroup has been created. This field can't be received in a message coming through updates, because bot can't be a member of a supergroup when it is created. It can only be found in reply_to_message if someone replies to a very first message in a directly created supergroup.</td></tr><tr><td>channel_chat_created</td><td>True</td><td><em>Optional</em>. Service message: the channel has been created. This field can't be received in a message coming through updates, because bot can't be a member of a channel when it is created. It can only be found in reply_to_message if someone replies to a very first message in a channel.</td></tr><tr><td>message_auto_delete_timer_changed</td><td><a href="#messageautodeletetimerchanged">MessageAutoDeleteTimerChanged</a></td><td><em>Optional</em>. Service message: auto-delete timer settings changed in the chat</td></tr><tr><td>migrate_to_chat_id</td><td>Integer</td><td><em>Optional</em>. The group has been migrated to a supergroup with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.</td></tr><tr><td>migrate_from_chat_id</td><td>Integer</td><td><em>Optional</em>. The supergroup has been migrated from a group with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.</td></tr><tr><td>pinned_message</td><td><a href="#maybeinaccessiblemessage">MaybeInaccessibleMessage</a></td><td><em>Optional</em>. Specified message was pinned. Note that the <a href="#message">Message</a> object in this field will not contain further <em>reply_to_message</em> fields even if it itself is a reply.</td></tr><tr><td>invoice</td><td><a href="#invoice">Invoice</a></td><td><em>Optional</em>. Message is an invoice for a <a href="#payments">payment</a>, information about the invoice. <a href="#payments">More about payments »</a></td></tr><tr><td>successful_payment</td><td><a href="#successfulpayment">SuccessfulPayment</a></td><td><em>Optional</em>. Message is a service message about a successful payment, information about the payment. <a href="#payments">More about payments »</a></td></tr><tr><td>refunded_payment</td><td><a href="#refundedpayment">RefundedPayment</a></td><td><em>Optional</em>. Message is a service message about a refunded payment, information about the payment. <a href="#payments">More about payments »</a></td></tr><tr><td>users_shared</td><td><a href="#usersshared">UsersShared</a></td><td><em>Optional</em>. Service message: users were shared with the bot</td></tr><tr><td>chat_shared</td><td><a href="#chatshared">ChatShared</a></td><td><em>Optional</em>. Service message: a chat was shared with the bot</td></tr><tr><td>gift</td><td><a href="#giftinfo">GiftInfo</a></td><td><em>Optional</em>. Service message: a regular gift was sent or received</td></tr><tr><td>unique_gift</td><td><a href="#uniquegiftinfo">UniqueGiftInfo</a></td><td><em>Optional</em>. Service message: a unique gift was sent or received</td></tr><tr><td>gift_upgrade_sent</td><td><a href="#giftinfo">GiftInfo</a></td><td><em>Optional</em>. Service message: upgrade of a gift was purchased after the gift was sent</td></tr><tr><td>connected_website</td><td>String</td><td><em>Optional</em>. The domain name of the website on which the user has logged in. <a href="/bots/telegram-login/">More about Telegram Login »</a></td></tr><tr><td>write_access_allowed</td><td><a href="#writeaccessallowed">WriteAccessAllowed</a></td><td><em>Optional</em>. Service message: the user allowed the bot to write messages after adding it to the attachment or side menu, launching a Web App from a link, or accepting an explicit request from a Web App sent by the method <a href="/bots/webapps/#initializing-mini-apps">requestWriteAccess</a></td></tr><tr><td>passport_data</td><td><a href="#passportdata">PassportData</a></td><td><em>Optional</em>. Telegram Passport data</td></tr><tr><td>proximity_alert_triggered</td><td><a href="#proximityalerttriggered">ProximityAlertTriggered</a></td><td><em>Optional</em>. Service message: a user in the chat triggered another user's proximity alert while sharing Live Location</td></tr><tr><td>boost_added</td><td><a href="#chatboostadded">ChatBoostAdded</a></td><td><em>Optional</em>. Service message: user boosted the chat</td></tr><tr><td>chat_background_set</td><td><a href="#chatbackground">ChatBackground</a></td><td><em>Optional</em>. Service message: chat background set</td></tr><tr><td>checklist_tasks_done</td><td><a href="#checklisttasksdone">ChecklistTasksDone</a></td><td><em>Optional</em>. Service message: some tasks in a checklist were marked as done or not done</td></tr><tr><td>checklist_tasks_added</td><td><a href="#checklisttasksadded">ChecklistTasksAdded</a></td><td><em>Optional</em>. Service message: tasks were added to a checklist</td></tr><tr><td>community_chat_added</td><td><a href="#communitychatadded">CommunityChatAdded</a></td><td><em>Optional</em>. Service message: chat added to a <a href="#community">Community</a></td></tr><tr><td>community_chat_removed</td><td><a href="#communitychatremoved">CommunityChatRemoved</a></td><td><em>Optional</em>. Service message: chat removed from a <a href="#community">Community</a></td></tr><tr><td>direct_message_price_changed</td><td><a href="#directmessagepricechanged">DirectMessagePriceChanged</a></td><td><em>Optional</em>. Service message: the price for paid messages in the corresponding direct messages chat of a channel has changed</td></tr><tr><td>forum_topic_created</td><td><a href="#forumtopiccreated">ForumTopicCreated</a></td><td><em>Optional</em>. Service message: forum topic created</td></tr><tr><td>forum_topic_edited</td><td><a href="#forumtopicedited">ForumTopicEdited</a></td><td><em>Optional</em>. Service message: forum topic edited</td></tr><tr><td>forum_topic_closed</td><td><a href="#forumtopicclosed">ForumTopicClosed</a></td><td><em>Optional</em>. Service message: forum topic closed</td></tr><tr><td>forum_topic_reopened</td><td><a href="#forumtopicreopened">ForumTopicReopened</a></td><td><em>Optional</em>. Service message: forum topic reopened</td></tr><tr><td>general_forum_topic_hidden</td><td><a href="#generalforumtopichidden">GeneralForumTopicHidden</a></td><td><em>Optional</em>. Service message: the 'General' forum topic hidden</td></tr><tr><td>general_forum_topic_unhidden</td><td><a href="#generalforumtopicunhidden">GeneralForumTopicUnhidden</a></td><td><em>Optional</em>. Service message: the 'General' forum topic unhidden</td></tr><tr><td>giveaway_created</td><td><a href="#giveawaycreated">GiveawayCreated</a></td><td><em>Optional</em>. Service message: a scheduled giveaway was created</td></tr><tr><td>giveaway</td><td><a href="#giveaway">Giveaway</a></td><td><em>Optional</em>. The message is a scheduled giveaway message</td></tr><tr><td>giveaway_winners</td><td><a href="#giveawaywinners">GiveawayWinners</a></td><td><em>Optional</em>. A giveaway with public winners was completed</td></tr><tr><td>giveaway_completed</td><td><a href="#giveawaycompleted">GiveawayCompleted</a></td><td><em>Optional</em>. Service message: a giveaway without public winners was completed</td></tr><tr><td>managed_bot_created</td><td><a href="#managedbotcreated">ManagedBotCreated</a></td><td><em>Optional</em>. Service message: user created a bot that will be managed by the current bot</td></tr><tr><td>paid_message_price_changed</td><td><a href="#paidmessagepricechanged">PaidMessagePriceChanged</a></td><td><em>Optional</em>. Service message: the price for paid messages has changed in the chat</td></tr><tr><td>poll_option_added</td><td><a href="#polloptionadded">PollOptionAdded</a></td><td><em>Optional</em>. Service message: answer option was added to a poll</td></tr><tr><td>poll_option_deleted</td><td><a href="#polloptiondeleted">PollOptionDeleted</a></td><td><em>Optional</em>. Service message: answer option was deleted from a poll</td></tr><tr><td>suggested_post_approved</td><td><a href="#suggestedpostapproved">SuggestedPostApproved</a></td><td><em>Optional</em>. Service message: a suggested post was approved</td></tr><tr><td>suggested_post_approval_failed</td><td><a href="#suggestedpostapprovalfailed">SuggestedPostApprovalFailed</a></td><td><em>Optional</em>. Service message: approval of a suggested post has failed</td></tr><tr><td>suggested_post_declined</td><td><a href="#suggestedpostdeclined">SuggestedPostDeclined</a></td><td><em>Optional</em>. Service message: a suggested post was declined</td></tr><tr><td>suggested_post_paid</td><td><a href="#suggestedpostpaid">SuggestedPostPaid</a></td><td><em>Optional</em>. Service message: payment for a suggested post was received</td></tr><tr><td>suggested_post_refunded</td><td><a href="#suggestedpostrefunded">SuggestedPostRefunded</a></td><td><em>Optional</em>. Service message: payment for a suggested post was refunded</td></tr><tr><td>video_chat_scheduled</td><td><a href="#videochatscheduled">VideoChatScheduled</a></td><td><em>Optional</em>. Service message: video chat scheduled</td></tr><tr><td>video_chat_started</td><td><a href="#videochatstarted">VideoChatStarted</a></td><td><em>Optional</em>. Service message: video chat started</td></tr><tr><td>video_chat_ended</td><td><a href="#videochatended">VideoChatEnded</a></td><td><em>Optional</em>. Service message: video chat ended</td></tr><tr><td>video_chat_participants_invited</td><td><a href="#videochatparticipantsinvited">VideoChatParticipantsInvited</a></td><td><em>Optional</em>. Service message: new participants invited to a video chat</td></tr><tr><td>web_app_data</td><td><a href="#webappdata">WebAppData</a></td><td><em>Optional</em>. Service message: data sent by a Web App</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td><td><em>Optional</em>. <a href="/bots/features/#inline-keyboards">Inline keyboard</a> attached to the message. <code>login_url</code> buttons are represented as ordinary <code>url</code> buttons.</td></tr></tbody></table>

#### MessageId

This object represents a unique message identifier.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>message_id</td><td>Integer</td><td>Unique message identifier. In specific instances (e.g., message containing a video sent to a big chat), the server might automatically schedule a message instead of sending it immediately. In such cases, this field will be 0 and the relevant message will be unusable until it is actually sent.</td></tr></tbody></table>

#### InaccessibleMessage

This object describes a message that was deleted or is otherwise inaccessible to the bot.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat</td><td><a href="#chat">Chat</a></td><td>Chat the message belonged to</td></tr><tr><td>message_id</td><td>Integer</td><td>Unique message identifier inside the chat</td></tr><tr><td>date</td><td>Integer</td><td>Always 0. The field can be used to differentiate regular and inaccessible messages.</td></tr></tbody></table>

#### MaybeInaccessibleMessage

This object describes a message that can be inaccessible to the bot. It can be one of

-   [Message](#message)
-   [InaccessibleMessage](#inaccessiblemessage)

#### MessageEntity

This object represents one special entity in a text message. For example, hashtags, usernames, URLs, etc.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the entity. Currently, can be “mention” (<code>@username</code>), “hashtag” (<code>#hashtag</code> or <code>#hashtag@chatusername</code>), “cashtag” (<code>$USD</code> or <code>$USD@chatusername</code>), “bot_command” (<code>/start@jobs_bot</code>), “url” (<code>https://telegram.org</code>), “email” (<code>do-not-reply@telegram.org</code>), “phone_number” (<code>+1-212-555-0123</code>), “bold” (<strong>bold text</strong>), “italic” (<em>italic text</em>), “underline” (underlined text), “strikethrough” (strikethrough text), “spoiler” (spoiler message), “blockquote” (block quotation), “expandable_blockquote” (collapsed-by-default block quotation), “code” (monowidth string), “pre” (monowidth block), “text_link” (for clickable text URLs), “text_mention” (for users <a href="/blog/edit/#new-mentions">without usernames</a>), “custom_emoji” (for inline custom emoji stickers), or “date_time” (for formatted date and time).</td></tr><tr><td>offset</td><td>Integer</td><td>Offset in <a href="/api/entities/#entity-length">UTF-16 code units</a> to the start of the entity</td></tr><tr><td>length</td><td>Integer</td><td>Length of the entity in <a href="/api/entities/#entity-length">UTF-16 code units</a></td></tr><tr><td>url</td><td>String</td><td><em>Optional</em>. For “text_link” only, URL that will be opened after user taps on the text</td></tr><tr><td>user</td><td><a href="#user">User</a></td><td><em>Optional</em>. For “text_mention” only, the mentioned user</td></tr><tr><td>language</td><td>String</td><td><em>Optional</em>. For “pre” only, the programming language of the entity text</td></tr><tr><td>custom_emoji_id</td><td>String</td><td><em>Optional</em>. For “custom_emoji” only, unique identifier of the custom emoji. Use <a href="#getcustomemojistickers">getCustomEmojiStickers</a> to get full information about the sticker.</td></tr><tr><td>unix_time</td><td>Integer</td><td><em>Optional</em>. For “date_time” only, the Unix time associated with the entity</td></tr><tr><td>date_time_format</td><td>String</td><td><em>Optional</em>. For “date_time” only, the string that defines the formatting of the date and time. See <a href="#date-time-entity-formatting">date-time entity formatting</a> for more details.</td></tr></tbody></table>

#### TextQuote

This object contains information about the quoted part of a message that is replied to by the given message.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>text</td><td>String</td><td>Text of the quoted part of a message that is replied to by the given message</td></tr><tr><td>entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td><em>Optional</em>. Special entities that appear in the quote. Currently, only <em>bold</em>, <em>italic</em>, <em>underline</em>, <em>strikethrough</em>, <em>spoiler</em>, <em>custom_emoji</em>, and <em>date_time</em> entities are kept in quotes.</td></tr><tr><td>position</td><td>Integer</td><td>Approximate quote position in the original message in UTF-16 code units as specified by the sender</td></tr><tr><td>is_manual</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the quote was chosen manually by the message sender. Otherwise, the quote was added automatically by the server.</td></tr></tbody></table>

#### ExternalReplyInfo

This object contains information about a message that is being replied to, which may come from another chat or forum topic.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>origin</td><td><a href="#messageorigin">MessageOrigin</a></td><td>Origin of the message replied to by the given message</td></tr><tr><td>chat</td><td><a href="#chat">Chat</a></td><td><em>Optional</em>. Chat the original message belongs to. Available only if the chat is a supergroup or a channel.</td></tr><tr><td>message_id</td><td>Integer</td><td><em>Optional</em>. Unique message identifier inside the original chat. Available only if the original chat is a supergroup or a channel.</td></tr><tr><td>link_preview_options</td><td><a href="#linkpreviewoptions">LinkPreviewOptions</a></td><td><em>Optional</em>. Options used for link preview generation for the original message, if it is a text message</td></tr><tr><td>animation</td><td><a href="#animation">Animation</a></td><td><em>Optional</em>. Message is an animation, information about the animation</td></tr><tr><td>audio</td><td><a href="#audio">Audio</a></td><td><em>Optional</em>. Message is an audio file, information about the file</td></tr><tr><td>document</td><td><a href="#document">Document</a></td><td><em>Optional</em>. Message is a general file, information about the file</td></tr><tr><td>live_photo</td><td><a href="#livephoto">LivePhoto</a></td><td><em>Optional</em>. Message is a live photo, information about the live photo</td></tr><tr><td>paid_media</td><td><a href="#paidmediainfo">PaidMediaInfo</a></td><td><em>Optional</em>. Message contains paid media; information about the paid media</td></tr><tr><td>photo</td><td>Array of <a href="#photosize">PhotoSize</a></td><td><em>Optional</em>. Message is a photo, available sizes of the photo</td></tr><tr><td>sticker</td><td><a href="#sticker">Sticker</a></td><td><em>Optional</em>. Message is a sticker, information about the sticker</td></tr><tr><td>story</td><td><a href="#story">Story</a></td><td><em>Optional</em>. Message is a forwarded story</td></tr><tr><td>video</td><td><a href="#video">Video</a></td><td><em>Optional</em>. Message is a video, information about the video</td></tr><tr><td>video_note</td><td><a href="#videonote">VideoNote</a></td><td><em>Optional</em>. Message is a <a href="/blog/video-messages-and-telescope/">video note</a>, information about the video message</td></tr><tr><td>voice</td><td><a href="#voice">Voice</a></td><td><em>Optional</em>. Message is a voice message, information about the file</td></tr><tr><td>has_media_spoiler</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the message media is covered by a spoiler animation</td></tr><tr><td>checklist</td><td><a href="#checklist">Checklist</a></td><td><em>Optional</em>. Message is a checklist</td></tr><tr><td>contact</td><td><a href="#contact">Contact</a></td><td><em>Optional</em>. Message is a shared contact, information about the contact</td></tr><tr><td>dice</td><td><a href="#dice">Dice</a></td><td><em>Optional</em>. Message is a dice with random value</td></tr><tr><td>game</td><td><a href="#game">Game</a></td><td><em>Optional</em>. Message is a game, information about the game. <a href="#games">More about games »</a></td></tr><tr><td>giveaway</td><td><a href="#giveaway">Giveaway</a></td><td><em>Optional</em>. Message is a scheduled giveaway, information about the giveaway</td></tr><tr><td>giveaway_winners</td><td><a href="#giveawaywinners">GiveawayWinners</a></td><td><em>Optional</em>. A giveaway with public winners was completed</td></tr><tr><td>invoice</td><td><a href="#invoice">Invoice</a></td><td><em>Optional</em>. Message is an invoice for a <a href="#payments">payment</a>, information about the invoice. <a href="#payments">More about payments »</a></td></tr><tr><td>location</td><td><a href="#location">Location</a></td><td><em>Optional</em>. Message is a shared location, information about the location</td></tr><tr><td>poll</td><td><a href="#poll">Poll</a></td><td><em>Optional</em>. Message is a native poll, information about the poll</td></tr><tr><td>venue</td><td><a href="#venue">Venue</a></td><td><em>Optional</em>. Message is a venue, information about the venue</td></tr></tbody></table>

#### ReplyParameters

Describes reply parameters for the message that is being sent.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>message_id</td><td>Integer</td><td><em>Optional</em>. Identifier of the message that will be replied to in the current chat, or in the chat <em>chat_id</em> if it is specified. Required if <em>ephemeral_message_id</em> isn't specified.</td></tr><tr><td>chat_id</td><td>Integer or String</td><td><em>Optional</em>. If the message to be replied to is from a different chat, unique identifier for the chat or username of the bot, supergroup or channel in the format <code>@username</code>. Not supported for messages sent on behalf of a business account, messages from channel direct messages chats and ephemeral messages.</td></tr><tr><td>ephemeral_message_id</td><td>Integer</td><td><em>Optional</em>. Identifier of the incoming ephemeral message that will be replied to in the current chat. A reply to an ephemeral message must itself be an ephemeral message. An ephemeral message may only be replied to within 15 seconds of being sent. Required if <em>message_id</em> isn't specified.</td></tr><tr><td>allow_sending_without_reply</td><td>Boolean</td><td><em>Optional</em>. Pass <em>True</em> if the message should be sent even if the specified message to be replied to is not found. Always <em>False</em> for replies in another chat or forum topic, and sent ephemeral messages. Always <em>True</em> for messages sent on behalf of a business account.</td></tr><tr><td>quote</td><td>String</td><td><em>Optional</em>. Quoted part of the message to be replied to; 0-1024 characters after entities parsing. The quote must be an exact substring of the message to be replied to, including <em>bold</em>, <em>italic</em>, <em>underline</em>, <em>strikethrough</em>, <em>spoiler</em>, <em>custom_emoji</em>, and <em>date_time</em> entities. The message will fail to send if the quote isn't found in the original message. Ignored for ephemeral messages.</td></tr><tr><td>quote_parse_mode</td><td>String</td><td><em>Optional</em>. Mode for parsing entities in the quote. See <a href="#formatting-options">formatting options</a> for more details.</td></tr><tr><td>quote_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td><em>Optional</em>. A JSON-serialized list of special entities that appear in the quote. It can be specified instead of <em>quote_parse_mode</em>.</td></tr><tr><td>quote_position</td><td>Integer</td><td><em>Optional</em>. Position of the quote in the original message in UTF-16 code units</td></tr><tr><td>checklist_task_id</td><td>Integer</td><td><em>Optional</em>. Identifier of the specific checklist task to be replied to</td></tr><tr><td>poll_option_id</td><td>String</td><td><em>Optional</em>. Persistent identifier of the specific poll option to be replied to</td></tr></tbody></table>

#### MessageOrigin

This object describes the origin of a message. It can be one of

-   [MessageOriginUser](#messageoriginuser)
-   [MessageOriginHiddenUser](#messageoriginhiddenuser)
-   [MessageOriginChat](#messageoriginchat)
-   [MessageOriginChannel](#messageoriginchannel)

#### MessageOriginUser

The message was originally sent by a known user.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the message origin, always “user”</td></tr><tr><td>date</td><td>Integer</td><td>Date the message was sent originally in Unix time</td></tr><tr><td>sender_user</td><td><a href="#user">User</a></td><td>User that sent the message originally</td></tr></tbody></table>

#### MessageOriginHiddenUser

The message was originally sent by an unknown user.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the message origin, always “hidden_user”</td></tr><tr><td>date</td><td>Integer</td><td>Date the message was sent originally in Unix time</td></tr><tr><td>sender_user_name</td><td>String</td><td>Name of the user that sent the message originally</td></tr></tbody></table>

#### MessageOriginChat

The message was originally sent on behalf of a chat to a group chat.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the message origin, always “chat”</td></tr><tr><td>date</td><td>Integer</td><td>Date the message was sent originally in Unix time</td></tr><tr><td>sender_chat</td><td><a href="#chat">Chat</a></td><td>Chat that sent the message originally</td></tr><tr><td>author_signature</td><td>String</td><td><em>Optional</em>. For messages originally sent by an anonymous chat administrator, original message author signature</td></tr></tbody></table>

#### MessageOriginChannel

The message was originally sent to a channel chat.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the message origin, always “channel”</td></tr><tr><td>date</td><td>Integer</td><td>Date the message was sent originally in Unix time</td></tr><tr><td>chat</td><td><a href="#chat">Chat</a></td><td>Channel chat to which the message was originally sent</td></tr><tr><td>message_id</td><td>Integer</td><td>Unique message identifier inside the chat</td></tr><tr><td>author_signature</td><td>String</td><td><em>Optional</em>. Signature of the original post author</td></tr></tbody></table>

#### PhotoSize

This object represents one size of a photo or a [file](#document) / [sticker](#sticker) thumbnail.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>file_id</td><td>String</td><td>Identifier for this file, which can be used to download or reuse the file</td></tr><tr><td>file_unique_id</td><td>String</td><td>Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.</td></tr><tr><td>width</td><td>Integer</td><td>Photo width</td></tr><tr><td>height</td><td>Integer</td><td>Photo height</td></tr><tr><td>file_size</td><td>Integer</td><td><em>Optional</em>. File size in bytes</td></tr></tbody></table>

#### Animation

This object represents an animation file (GIF or H.264/MPEG-4 AVC video without sound).

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>file_id</td><td>String</td><td>Identifier for this file, which can be used to download or reuse the file</td></tr><tr><td>file_unique_id</td><td>String</td><td>Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.</td></tr><tr><td>width</td><td>Integer</td><td>Video width as defined by the sender</td></tr><tr><td>height</td><td>Integer</td><td>Video height as defined by the sender</td></tr><tr><td>duration</td><td>Integer</td><td>Duration of the video in seconds as defined by the sender</td></tr><tr><td>thumbnail</td><td><a href="#photosize">PhotoSize</a></td><td><em>Optional</em>. Animation thumbnail as defined by the sender</td></tr><tr><td>file_name</td><td>String</td><td><em>Optional</em>. Original animation filename as defined by the sender</td></tr><tr><td>mime_type</td><td>String</td><td><em>Optional</em>. MIME type of the file as defined by the sender</td></tr><tr><td>file_size</td><td>Integer</td><td><em>Optional</em>. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.</td></tr></tbody></table>

#### Audio

This object represents an audio file to be treated as music by the Telegram clients.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>file_id</td><td>String</td><td>Identifier for this file, which can be used to download or reuse the file</td></tr><tr><td>file_unique_id</td><td>String</td><td>Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.</td></tr><tr><td>duration</td><td>Integer</td><td>Duration of the audio in seconds as defined by the sender</td></tr><tr><td>performer</td><td>String</td><td><em>Optional</em>. Performer of the audio as defined by the sender or by audio tags</td></tr><tr><td>title</td><td>String</td><td><em>Optional</em>. Title of the audio as defined by the sender or by audio tags</td></tr><tr><td>file_name</td><td>String</td><td><em>Optional</em>. Original filename as defined by the sender</td></tr><tr><td>mime_type</td><td>String</td><td><em>Optional</em>. MIME type of the file as defined by the sender</td></tr><tr><td>file_size</td><td>Integer</td><td><em>Optional</em>. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.</td></tr><tr><td>thumbnail</td><td><a href="#photosize">PhotoSize</a></td><td><em>Optional</em>. Thumbnail of the album cover to which the music file belongs</td></tr></tbody></table>

#### Document

This object represents a general file (as opposed to [photos](#photosize), [voice messages](#voice) and [audio files](#audio)).

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>file_id</td><td>String</td><td>Identifier for this file, which can be used to download or reuse the file</td></tr><tr><td>file_unique_id</td><td>String</td><td>Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.</td></tr><tr><td>thumbnail</td><td><a href="#photosize">PhotoSize</a></td><td><em>Optional</em>. Document thumbnail as defined by the sender</td></tr><tr><td>file_name</td><td>String</td><td><em>Optional</em>. Original filename as defined by the sender</td></tr><tr><td>mime_type</td><td>String</td><td><em>Optional</em>. MIME type of the file as defined by the sender</td></tr><tr><td>file_size</td><td>Integer</td><td><em>Optional</em>. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.</td></tr></tbody></table>

#### LivePhoto

This object represents a live photo.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>photo</td><td>Array of <a href="#photosize">PhotoSize</a></td><td><em>Optional</em>. Available sizes of the corresponding static photo</td></tr><tr><td>file_id</td><td>String</td><td>Identifier for the video file which can be used to download or reuse the file</td></tr><tr><td>file_unique_id</td><td>String</td><td>Unique identifier for the video file which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.</td></tr><tr><td>width</td><td>Integer</td><td>Video width as defined by the sender</td></tr><tr><td>height</td><td>Integer</td><td>Video height as defined by the sender</td></tr><tr><td>duration</td><td>Integer</td><td>Duration of the video in seconds as defined by the sender</td></tr><tr><td>mime_type</td><td>String</td><td><em>Optional</em>. MIME type of the file as defined by the sender</td></tr><tr><td>file_size</td><td>Integer</td><td><em>Optional</em>. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.</td></tr></tbody></table>

#### Story

This object represents a story.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat</td><td><a href="#chat">Chat</a></td><td>Chat that posted the story</td></tr><tr><td>id</td><td>Integer</td><td>Unique identifier for the story in the chat</td></tr></tbody></table>

#### VideoQuality

This object represents a video file of a specific quality.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>file_id</td><td>String</td><td>Identifier for this file, which can be used to download or reuse the file</td></tr><tr><td>file_unique_id</td><td>String</td><td>Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.</td></tr><tr><td>width</td><td>Integer</td><td>Video width</td></tr><tr><td>height</td><td>Integer</td><td>Video height</td></tr><tr><td>codec</td><td>String</td><td>Codec that was used to encode the video, for example, “h264”, “h265”, or “av01”</td></tr><tr><td>file_size</td><td>Integer</td><td><em>Optional</em>. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.</td></tr></tbody></table>

#### Video

This object represents a video file.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>file_id</td><td>String</td><td>Identifier for this file, which can be used to download or reuse the file</td></tr><tr><td>file_unique_id</td><td>String</td><td>Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.</td></tr><tr><td>width</td><td>Integer</td><td>Video width as defined by the sender</td></tr><tr><td>height</td><td>Integer</td><td>Video height as defined by the sender</td></tr><tr><td>duration</td><td>Integer</td><td>Duration of the video in seconds as defined by the sender</td></tr><tr><td>thumbnail</td><td><a href="#photosize">PhotoSize</a></td><td><em>Optional</em>. Video thumbnail</td></tr><tr><td>cover</td><td>Array of <a href="#photosize">PhotoSize</a></td><td><em>Optional</em>. Available sizes of the cover of the video in the message</td></tr><tr><td>start_timestamp</td><td>Integer</td><td><em>Optional</em>. Timestamp in seconds from which the video will play in the message</td></tr><tr><td>qualities</td><td>Array of <a href="#videoquality">VideoQuality</a></td><td><em>Optional</em>. List of available qualities of the video</td></tr><tr><td>file_name</td><td>String</td><td><em>Optional</em>. Original filename as defined by the sender</td></tr><tr><td>mime_type</td><td>String</td><td><em>Optional</em>. MIME type of the file as defined by the sender</td></tr><tr><td>file_size</td><td>Integer</td><td><em>Optional</em>. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.</td></tr></tbody></table>

#### VideoNote

This object represents a [video message](/blog/video-messages-and-telescope/) (available in Telegram apps as of [v.4.0](/blog/video-messages-and-telescope/)).

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>file_id</td><td>String</td><td>Identifier for this file, which can be used to download or reuse the file</td></tr><tr><td>file_unique_id</td><td>String</td><td>Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.</td></tr><tr><td>length</td><td>Integer</td><td>Video width and height (diameter of the video message) as defined by the sender</td></tr><tr><td>duration</td><td>Integer</td><td>Duration of the video in seconds as defined by the sender</td></tr><tr><td>thumbnail</td><td><a href="#photosize">PhotoSize</a></td><td><em>Optional</em>. Video thumbnail</td></tr><tr><td>file_size</td><td>Integer</td><td><em>Optional</em>. File size in bytes</td></tr></tbody></table>

#### Voice

This object represents a voice note.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>file_id</td><td>String</td><td>Identifier for this file, which can be used to download or reuse the file</td></tr><tr><td>file_unique_id</td><td>String</td><td>Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.</td></tr><tr><td>duration</td><td>Integer</td><td>Duration of the audio in seconds as defined by the sender</td></tr><tr><td>mime_type</td><td>String</td><td><em>Optional</em>. MIME type of the file as defined by the sender</td></tr><tr><td>file_size</td><td>Integer</td><td><em>Optional</em>. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.</td></tr></tbody></table>

#### PaidMediaInfo

Describes the paid media added to a message.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>star_count</td><td>Integer</td><td>The number of Telegram Stars that must be paid to buy access to the media</td></tr><tr><td>paid_media</td><td>Array of <a href="#paidmedia">PaidMedia</a></td><td>Information about the paid media</td></tr></tbody></table>

#### PaidMedia

This object describes paid media. Currently, it can be one of

-   [PaidMediaLivePhoto](#paidmedialivephoto)
-   [PaidMediaPhoto](#paidmediaphoto)
-   [PaidMediaPreview](#paidmediapreview)
-   [PaidMediaVideo](#paidmediavideo)

#### PaidMediaLivePhoto

The paid media is a [live photo](#livephoto).

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the paid media, always “live_photo”</td></tr><tr><td>live_photo</td><td><a href="#livephoto">LivePhoto</a></td><td>The photo</td></tr></tbody></table>

#### PaidMediaPhoto

The paid media is a photo.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the paid media, always “photo”</td></tr><tr><td>photo</td><td>Array of <a href="#photosize">PhotoSize</a></td><td>The photo</td></tr></tbody></table>

#### PaidMediaPreview

The paid media isn't available before the payment.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the paid media, always “preview”</td></tr><tr><td>width</td><td>Integer</td><td><em>Optional</em>. Media width as defined by the sender</td></tr><tr><td>height</td><td>Integer</td><td><em>Optional</em>. Media height as defined by the sender</td></tr><tr><td>duration</td><td>Integer</td><td><em>Optional</em>. Duration of the media in seconds as defined by the sender</td></tr></tbody></table>

#### PaidMediaVideo

The paid media is a video.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the paid media, always “video”</td></tr><tr><td>video</td><td><a href="#video">Video</a></td><td>The video</td></tr></tbody></table>

#### Contact

This object represents a phone contact.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>phone_number</td><td>String</td><td>Contact's phone number</td></tr><tr><td>first_name</td><td>String</td><td>Contact's first name</td></tr><tr><td>last_name</td><td>String</td><td><em>Optional</em>. Contact's last name</td></tr><tr><td>user_id</td><td>Integer</td><td><em>Optional</em>. Contact's user identifier in Telegram. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier.</td></tr><tr><td>vcard</td><td>String</td><td><em>Optional</em>. Additional data about the contact in the form of a <a href="https://en.wikipedia.org/wiki/VCard">vCard</a></td></tr></tbody></table>

#### Dice

This object represents an animated emoji that displays a random value.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>emoji</td><td>String</td><td>Emoji on which the dice throw animation is based</td></tr><tr><td>value</td><td>Integer</td><td>Value of the dice, 1-6 for “<img class="emoji" src="https://telegram.org/img/emoji/40/F09F8EB2.png" width="20" height="20" alt="🎲">”, “<img class="emoji" src="https://telegram.org/img/emoji/40/F09F8EAF.png" width="20" height="20" alt="🎯">” and “<img class="emoji" src="https://telegram.org/img/emoji/40/F09F8EB3.png" width="20" height="20" alt="🎳">” base emoji, 1-5 for “<img class="emoji" src="https://telegram.org/img/emoji/40/F09F8F80.png" width="20" height="20" alt="🏀">” and “<img class="emoji" src="https://telegram.org/img/emoji/40/E29ABD.png" width="20" height="20" alt="⚽">” base emoji, 1-64 for “<img class="emoji" src="https://telegram.org/img/emoji/40/F09F8EB0.png" width="20" height="20" alt="🎰">” base emoji</td></tr></tbody></table>

#### Link

Represents an HTTP link.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>url</td><td>String</td><td>URL of the link</td></tr></tbody></table>

#### PollMedia

At most **one** of the optional fields can be present in any given object.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>animation</td><td><a href="#animation">Animation</a></td><td><em>Optional</em>. Media is an animation, information about the animation</td></tr><tr><td>audio</td><td><a href="#audio">Audio</a></td><td><em>Optional</em>. Media is an audio file, information about the file; currently, can't be received in a poll option</td></tr><tr><td>document</td><td><a href="#document">Document</a></td><td><em>Optional</em>. Media is a general file, information about the file; currently, can't be received in a poll option</td></tr><tr><td>link</td><td><a href="#link">Link</a></td><td><em>Optional</em>. The HTTP link attached to the poll option</td></tr><tr><td>live_photo</td><td><a href="#livephoto">LivePhoto</a></td><td><em>Optional</em>. Media is a live photo, information about the live photo</td></tr><tr><td>location</td><td><a href="#location">Location</a></td><td><em>Optional</em>. Media is a shared location, information about the location</td></tr><tr><td>photo</td><td>Array of <a href="#photosize">PhotoSize</a></td><td><em>Optional</em>. Media is a photo, available sizes of the photo</td></tr><tr><td>sticker</td><td><a href="#sticker">Sticker</a></td><td><em>Optional</em>. Media is a sticker, information about the sticker; currently, for poll options only</td></tr><tr><td>venue</td><td><a href="#venue">Venue</a></td><td><em>Optional</em>. Media is a venue, information about the venue</td></tr><tr><td>video</td><td><a href="#video">Video</a></td><td><em>Optional</em>. Media is a video, information about the video</td></tr></tbody></table>

#### InputPollMedia

This object represents the content of a poll description or a quiz explanation to be sent. It should be one of

-   [InputMediaAnimation](#inputmediaanimation)
-   [InputMediaAudio](#inputmediaaudio)
-   [InputMediaDocument](#inputmediadocument)
-   [InputMediaLivePhoto](#inputmedialivephoto)
-   [InputMediaLocation](#inputmedialocation)
-   [InputMediaPhoto](#inputmediaphoto)
-   [InputMediaVenue](#inputmediavenue)
-   [InputMediaVideo](#inputmediavideo)

#### InputPollOptionMedia

This object represents the content of a poll option to be sent. It should be one of

-   [InputMediaAnimation](#inputmediaanimation)
-   [InputMediaLink](#inputmedialink)
-   [InputMediaLivePhoto](#inputmedialivephoto)
-   [InputMediaLocation](#inputmedialocation)
-   [InputMediaPhoto](#inputmediaphoto)
-   [InputMediaSticker](#inputmediasticker)
-   [InputMediaVenue](#inputmediavenue)
-   [InputMediaVideo](#inputmediavideo)

#### PollOption

This object contains information about one answer option in a poll.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>persistent_id</td><td>String</td><td>Unique identifier of the option, persistent on option addition and deletion</td></tr><tr><td>text</td><td>String</td><td>Option text, 1-100 characters</td></tr><tr><td>text_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td><em>Optional</em>. Special entities that appear in the option <em>text</em>. Currently, only custom emoji entities are allowed in poll option texts</td></tr><tr><td>media</td><td><a href="#pollmedia">PollMedia</a></td><td><em>Optional</em>. Media added to the poll option</td></tr><tr><td>voter_count</td><td>Integer</td><td>Number of users who voted for this option; may be 0 if unknown</td></tr><tr><td>added_by_user</td><td><a href="#user">User</a></td><td><em>Optional</em>. User who added the option; omitted if the option wasn't added by a user after poll creation</td></tr><tr><td>added_by_chat</td><td><a href="#chat">Chat</a></td><td><em>Optional</em>. Chat that added the option; omitted if the option wasn't added by a chat after poll creation</td></tr><tr><td>addition_date</td><td>Integer</td><td><em>Optional</em>. Point in time (Unix timestamp) when the option was added; omitted if the option existed in the original poll</td></tr></tbody></table>

#### InputPollOption

This object contains information about one answer option in a poll to be sent.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>text</td><td>String</td><td>Option text, 1-100 characters</td></tr><tr><td>text_parse_mode</td><td>String</td><td><em>Optional</em>. Mode for parsing entities in the text. See <a href="#formatting-options">formatting options</a> for more details. Currently, only custom emoji entities are allowed.</td></tr><tr><td>text_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td><em>Optional</em>. A JSON-serialized list of special entities that appear in the poll option text. It can be specified instead of <em>text_parse_mode</em>.</td></tr><tr><td>media</td><td><a href="#inputpolloptionmedia">InputPollOptionMedia</a></td><td><em>Optional</em>. Media added to the poll option</td></tr></tbody></table>

#### PollAnswer

This object represents an answer of a user in a non-anonymous poll.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>poll_id</td><td>String</td><td>Unique poll identifier</td></tr><tr><td>voter_chat</td><td><a href="#chat">Chat</a></td><td><em>Optional</em>. The chat that changed the answer to the poll, if the voter is anonymous</td></tr><tr><td>user</td><td><a href="#user">User</a></td><td><em>Optional</em>. The user that changed the answer to the poll, if the voter isn't anonymous</td></tr><tr><td>option_ids</td><td>Array of Integer</td><td>0-based identifiers of chosen answer options. May be empty if the vote was retracted.</td></tr><tr><td>option_persistent_ids</td><td>Array of String</td><td>Persistent identifiers of the chosen answer options. May be empty if the vote was retracted.</td></tr></tbody></table>

#### Poll

This object contains information about a poll.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>id</td><td>String</td><td>Unique poll identifier</td></tr><tr><td>question</td><td>String</td><td>Poll question, 1-300 characters</td></tr><tr><td>question_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td><em>Optional</em>. Special entities that appear in the <em>question</em>. Currently, only custom emoji entities are allowed in poll questions</td></tr><tr><td>options</td><td>Array of <a href="#polloption">PollOption</a></td><td>List of poll options</td></tr><tr><td>total_voter_count</td><td>Integer</td><td>Total number of users that voted in the poll</td></tr><tr><td>is_closed</td><td>Boolean</td><td><em>True</em>, if the poll is closed</td></tr><tr><td>is_anonymous</td><td>Boolean</td><td><em>True</em>, if the poll is anonymous</td></tr><tr><td>type</td><td>String</td><td>Poll type, currently can be “regular” or “quiz”</td></tr><tr><td>allows_multiple_answers</td><td>Boolean</td><td><em>True</em>, if the poll allows multiple answers</td></tr><tr><td>allows_revoting</td><td>Boolean</td><td><em>True</em>, if the poll allows to change the chosen answer options</td></tr><tr><td>members_only</td><td>Boolean</td><td><em>True</em> if voting is limited to users who have been members of the chat where the poll was originally sent for more than 24 hours</td></tr><tr><td>country_codes</td><td>Array of String</td><td><em>Optional</em>. A list of two-letter <a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">ISO 3166-1 alpha-2</a> country codes indicating the countries from which users can vote in the poll. The country code “FT” is used for users with anonymous numbers. If omitted, then users from any country can participate in the poll.</td></tr><tr><td>correct_option_ids</td><td>Array of Integer</td><td><em>Optional</em>. Array of 0-based identifiers of the correct answer options. Available only for polls in quiz mode which are closed or were sent (not forwarded) by the bot or to the private chat with the bot.</td></tr><tr><td>explanation</td><td>String</td><td><em>Optional</em>. Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters</td></tr><tr><td>explanation_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td><em>Optional</em>. Special entities like usernames, URLs, bot commands, etc. that appear in the <em>explanation</em></td></tr><tr><td>explanation_media</td><td><a href="#pollmedia">PollMedia</a></td><td><em>Optional</em>. Media added to the quiz explanation</td></tr><tr><td>open_period</td><td>Integer</td><td><em>Optional</em>. Amount of time in seconds the poll will be active after creation</td></tr><tr><td>close_date</td><td>Integer</td><td><em>Optional</em>. Point in time (Unix timestamp) when the poll will be automatically closed</td></tr><tr><td>description</td><td>String</td><td><em>Optional</em>. Description of the poll; for polls inside the <a href="#message">Message</a> object only</td></tr><tr><td>description_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td><em>Optional</em>. Special entities like usernames, URLs, bot commands, etc. that appear in the description</td></tr><tr><td>media</td><td><a href="#pollmedia">PollMedia</a></td><td><em>Optional</em>. Media added to the poll description; for polls inside the <a href="#message">Message</a> object only</td></tr></tbody></table>

#### ChecklistTask

Describes a task in a checklist.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>id</td><td>Integer</td><td>Unique identifier of the task</td></tr><tr><td>text</td><td>String</td><td>Text of the task</td></tr><tr><td>text_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td><em>Optional</em>. Special entities that appear in the task text</td></tr><tr><td>completed_by_user</td><td><a href="#user">User</a></td><td><em>Optional</em>. User that completed the task; omitted if the task wasn't completed by a user</td></tr><tr><td>completed_by_chat</td><td><a href="#chat">Chat</a></td><td><em>Optional</em>. Chat that completed the task; omitted if the task wasn't completed by a chat</td></tr><tr><td>completion_date</td><td>Integer</td><td><em>Optional</em>. Point in time (Unix timestamp) when the task was completed; 0 if the task wasn't completed</td></tr></tbody></table>

#### Checklist

Describes a checklist.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>title</td><td>String</td><td>Title of the checklist</td></tr><tr><td>title_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td><em>Optional</em>. Special entities that appear in the checklist title</td></tr><tr><td>tasks</td><td>Array of <a href="#checklisttask">ChecklistTask</a></td><td>List of tasks in the checklist</td></tr><tr><td>others_can_add_tasks</td><td>True</td><td><em>Optional</em>. <em>True</em>, if users other than the creator of the list can add tasks to the list</td></tr><tr><td>others_can_mark_tasks_as_done</td><td>True</td><td><em>Optional</em>. <em>True</em>, if users other than the creator of the list can mark tasks as done or not done</td></tr></tbody></table>

#### InputChecklistTask

Describes a task to add to a checklist.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>id</td><td>Integer</td><td>Unique identifier of the task; must be positive and unique among all task identifiers currently present in the checklist</td></tr><tr><td>text</td><td>String</td><td>Text of the task; 1-100 characters after entities parsing</td></tr><tr><td>parse_mode</td><td>String</td><td><em>Optional</em>. Mode for parsing entities in the text. See <a href="#formatting-options">formatting options</a> for more details.</td></tr><tr><td>text_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td><em>Optional</em>. List of special entities that appear in the text, which can be specified instead of parse_mode. Currently, only <em>bold</em>, <em>italic</em>, <em>underline</em>, <em>strikethrough</em>, <em>spoiler</em>, <em>custom_emoji</em>, and <em>date_time</em> entities are allowed.</td></tr></tbody></table>

#### InputChecklist

Describes a checklist to create.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>title</td><td>String</td><td>Title of the checklist; 1-255 characters after entities parsing</td></tr><tr><td>parse_mode</td><td>String</td><td><em>Optional</em>. Mode for parsing entities in the title. See <a href="#formatting-options">formatting options</a> for more details.</td></tr><tr><td>title_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td><em>Optional</em>. List of special entities that appear in the title, which can be specified instead of parse_mode. Currently, only <em>bold</em>, <em>italic</em>, <em>underline</em>, <em>strikethrough</em>, <em>spoiler</em>, <em>custom_emoji</em>, and <em>date_time</em> entities are allowed.</td></tr><tr><td>tasks</td><td>Array of <a href="#inputchecklisttask">InputChecklistTask</a></td><td>List of 1-30 tasks in the checklist</td></tr><tr><td>others_can_add_tasks</td><td>Boolean</td><td><em>Optional</em>. Pass <em>True</em> if other users can add tasks to the checklist</td></tr><tr><td>others_can_mark_tasks_as_done</td><td>Boolean</td><td><em>Optional</em>. Pass <em>True</em> if other users can mark tasks as done or not done in the checklist</td></tr></tbody></table>

#### Location

This object represents a point on the map.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>latitude</td><td>Float</td><td>Latitude as defined by the sender</td></tr><tr><td>longitude</td><td>Float</td><td>Longitude as defined by the sender</td></tr><tr><td>horizontal_accuracy</td><td>Float</td><td><em>Optional</em>. The radius of uncertainty for the location, measured in meters; 0-1500</td></tr><tr><td>live_period</td><td>Integer</td><td><em>Optional</em>. Time relative to the message sending date, during which the location can be updated; in seconds. For active live locations only.</td></tr><tr><td>heading</td><td>Integer</td><td><em>Optional</em>. The direction in which user is moving, in degrees; 1-360. For active live locations only.</td></tr><tr><td>proximity_alert_radius</td><td>Integer</td><td><em>Optional</em>. The maximum distance for proximity alerts about approaching another chat member, in meters. For sent live locations only.</td></tr></tbody></table>

#### Venue

This object represents a venue.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>location</td><td><a href="#location">Location</a></td><td>Venue location. Can't be a live location.</td></tr><tr><td>title</td><td>String</td><td>Name of the venue</td></tr><tr><td>address</td><td>String</td><td>Address of the venue</td></tr><tr><td>foursquare_id</td><td>String</td><td><em>Optional</em>. Foursquare identifier of the venue</td></tr><tr><td>foursquare_type</td><td>String</td><td><em>Optional</em>. Foursquare type of the venue. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)</td></tr><tr><td>google_place_id</td><td>String</td><td><em>Optional</em>. Google Places identifier of the venue</td></tr><tr><td>google_place_type</td><td>String</td><td><em>Optional</em>. Google Places type of the venue. (See <a href="https://developers.google.com/places/web-service/supported_types">supported types</a>.)</td></tr></tbody></table>

#### WebAppData

Describes data sent from a [Web App](/bots/webapps/) to the bot.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>data</td><td>String</td><td>The data. Be aware that a bad client can send arbitrary data in this field.</td></tr><tr><td>button_text</td><td>String</td><td>Text of the <em>web_app</em> keyboard button from which the Web App was opened. Be aware that a bad client can send arbitrary data in this field.</td></tr></tbody></table>

#### ProximityAlertTriggered

This object represents the content of a service message, sent whenever a user in the chat triggers a proximity alert set by another user.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>traveler</td><td><a href="#user">User</a></td><td>User that triggered the alert</td></tr><tr><td>watcher</td><td><a href="#user">User</a></td><td>User that set the alert</td></tr><tr><td>distance</td><td>Integer</td><td>The distance between the users</td></tr></tbody></table>

#### MessageAutoDeleteTimerChanged

This object represents a service message about a change in auto-delete timer settings.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>message_auto_delete_time</td><td>Integer</td><td>New auto-delete time for messages in the chat; in seconds</td></tr></tbody></table>

#### ManagedBotCreated

This object contains information about the bot that was created to be managed by the current bot.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>bot</td><td><a href="#user">User</a></td><td>Information about the bot. The bot's token can be fetched using the method <a href="#getmanagedbottoken">getManagedBotToken</a>.</td></tr></tbody></table>

#### ManagedBotUpdated

This object contains information about the creation, token update, or owner update of a bot that is managed by the current bot.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>user</td><td><a href="#user">User</a></td><td>User that created the bot</td></tr><tr><td>bot</td><td><a href="#user">User</a></td><td>Information about the bot. Token of the bot can be fetched using the method <a href="#getmanagedbottoken">getManagedBotToken</a>.</td></tr></tbody></table>

#### BotSubscriptionUpdated

This object contains information about changes to a user payment subscription toward the current bot.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>user</td><td><a href="#user">User</a></td><td>User who subscribed for payments toward the bot</td></tr><tr><td>invoice_payload</td><td>String</td><td>Bot-specified invoice payload</td></tr><tr><td>state</td><td>String</td><td>The new state of the subscription. Currently, it can be one of “canceled” if the user canceled the subscription, “active” if the user re-enabled a previously canceled subscription, or “failed” if payment for the subscription failed.</td></tr></tbody></table>

#### PollOptionAdded

Describes a service message about an option added to a poll.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>poll_message</td><td><a href="#maybeinaccessiblemessage">MaybeInaccessibleMessage</a></td><td><em>Optional</em>. Message containing the poll to which the option was added, if known. Note that the <a href="#message">Message</a> object in this field will not contain the <em>reply_to_message</em> field even if it itself is a reply.</td></tr><tr><td>option_persistent_id</td><td>String</td><td>Unique identifier of the added option</td></tr><tr><td>option_text</td><td>String</td><td>Option text</td></tr><tr><td>option_text_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td><em>Optional</em>. Special entities that appear in the <em>option_text</em></td></tr></tbody></table>

#### PollOptionDeleted

Describes a service message about an option deleted from a poll.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>poll_message</td><td><a href="#maybeinaccessiblemessage">MaybeInaccessibleMessage</a></td><td><em>Optional</em>. Message containing the poll from which the option was deleted, if known. Note that the <a href="#message">Message</a> object in this field will not contain the <em>reply_to_message</em> field even if it itself is a reply.</td></tr><tr><td>option_persistent_id</td><td>String</td><td>Unique identifier of the deleted option</td></tr><tr><td>option_text</td><td>String</td><td>Option text</td></tr><tr><td>option_text_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td><em>Optional</em>. Special entities that appear in the <em>option_text</em></td></tr></tbody></table>

#### ChatBoostAdded

This object represents a service message about a user boosting a chat.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>boost_count</td><td>Integer</td><td>Number of boosts added by the user</td></tr></tbody></table>

#### BackgroundFill

This object describes the way a background is filled based on the selected colors. Currently, it can be one of

-   [BackgroundFillSolid](#backgroundfillsolid)
-   [BackgroundFillGradient](#backgroundfillgradient)
-   [BackgroundFillFreeformGradient](#backgroundfillfreeformgradient)

#### BackgroundFillSolid

The background is filled using the selected color.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the background fill, always “solid”</td></tr><tr><td>color</td><td>Integer</td><td>The color of the background fill in the RGB24 format</td></tr></tbody></table>

#### BackgroundFillGradient

The background is a gradient fill.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the background fill, always “gradient”</td></tr><tr><td>top_color</td><td>Integer</td><td>Top color of the gradient in the RGB24 format</td></tr><tr><td>bottom_color</td><td>Integer</td><td>Bottom color of the gradient in the RGB24 format</td></tr><tr><td>rotation_angle</td><td>Integer</td><td>Clockwise rotation angle of the background fill in degrees; 0-359</td></tr></tbody></table>

#### BackgroundFillFreeformGradient

The background is a freeform gradient that rotates after every message in the chat.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the background fill, always “freeform_gradient”</td></tr><tr><td>colors</td><td>Array of Integer</td><td>A list of the 3 or 4 base colors that are used to generate the freeform gradient in the RGB24 format</td></tr></tbody></table>

#### BackgroundType

This object describes the type of a background. Currently, it can be one of

-   [BackgroundTypeFill](#backgroundtypefill)
-   [BackgroundTypeWallpaper](#backgroundtypewallpaper)
-   [BackgroundTypePattern](#backgroundtypepattern)
-   [BackgroundTypeChatTheme](#backgroundtypechattheme)

#### BackgroundTypeFill

The background is automatically filled based on the selected colors.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the background, always “fill”</td></tr><tr><td>fill</td><td><a href="#backgroundfill">BackgroundFill</a></td><td>The background fill</td></tr><tr><td>dark_theme_dimming</td><td>Integer</td><td>Dimming of the background in dark themes, as a percentage; 0-100</td></tr></tbody></table>

#### BackgroundTypeWallpaper

The background is a wallpaper in the JPEG format.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the background, always “wallpaper”</td></tr><tr><td>document</td><td><a href="#document">Document</a></td><td>Document with the wallpaper</td></tr><tr><td>dark_theme_dimming</td><td>Integer</td><td>Dimming of the background in dark themes, as a percentage; 0-100</td></tr><tr><td>is_blurred</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the wallpaper is downscaled to fit in a 450x450 square and then box-blurred with radius 12</td></tr><tr><td>is_moving</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the background moves slightly when the device is tilted</td></tr></tbody></table>

#### BackgroundTypePattern

The background is a .PNG or .TGV (gzipped subset of SVG with MIME type “application/x-tgwallpattern”) pattern to be combined with the background fill chosen by the user.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the background, always “pattern”</td></tr><tr><td>document</td><td><a href="#document">Document</a></td><td>Document with the pattern</td></tr><tr><td>fill</td><td><a href="#backgroundfill">BackgroundFill</a></td><td>The background fill that is combined with the pattern</td></tr><tr><td>intensity</td><td>Integer</td><td>Intensity of the pattern when it is shown above the filled background; 0-100</td></tr><tr><td>is_inverted</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the background fill must be applied only to the pattern itself. All other pixels are black in this case. For dark themes only.</td></tr><tr><td>is_moving</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the background moves slightly when the device is tilted</td></tr></tbody></table>

#### BackgroundTypeChatTheme

The background is taken directly from a built-in chat theme.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the background, always “chat_theme”</td></tr><tr><td>theme_name</td><td>String</td><td>Name of the chat theme, which is usually an emoji</td></tr></tbody></table>

#### ChatBackground

This object represents a chat background.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td><a href="#backgroundtype">BackgroundType</a></td><td>Type of the background</td></tr></tbody></table>

#### ChecklistTasksDone

Describes a service message about checklist tasks marked as done or not done.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>checklist_message</td><td><a href="#message">Message</a></td><td><em>Optional</em>. Message containing the checklist whose tasks were marked as done or not done. Note that the <a href="#message">Message</a> object in this field will not contain the <em>reply_to_message</em> field even if it itself is a reply.</td></tr><tr><td>marked_as_done_task_ids</td><td>Array of Integer</td><td><em>Optional</em>. Identifiers of the tasks that were marked as done</td></tr><tr><td>marked_as_not_done_task_ids</td><td>Array of Integer</td><td><em>Optional</em>. Identifiers of the tasks that were marked as not done</td></tr></tbody></table>

#### ChecklistTasksAdded

Describes a service message about tasks added to a checklist.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>checklist_message</td><td><a href="#message">Message</a></td><td><em>Optional</em>. Message containing the checklist to which the tasks were added. Note that the <a href="#message">Message</a> object in this field will not contain the <em>reply_to_message</em> field even if it itself is a reply.</td></tr><tr><td>tasks</td><td>Array of <a href="#checklisttask">ChecklistTask</a></td><td>List of tasks added to the checklist</td></tr></tbody></table>

#### CommunityChatAdded

Describes a service message about a chat being added to a community.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>community</td><td><a href="#community">Community</a></td><td>The new community to which the chat belongs</td></tr></tbody></table>

#### CommunityChatRemoved

Describes a service message about a chat being removed from a community. Currently holds no information.

#### ForumTopicCreated

This object represents a service message about a new forum topic created in the chat.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>name</td><td>String</td><td>Name of the topic</td></tr><tr><td>icon_color</td><td>Integer</td><td>Color of the topic icon in RGB format</td></tr><tr><td>icon_custom_emoji_id</td><td>String</td><td><em>Optional</em>. Unique identifier of the custom emoji shown as the topic icon</td></tr><tr><td>is_name_implicit</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the name of the topic wasn't specified explicitly by its creator and likely needs to be changed by the bot</td></tr></tbody></table>

#### ForumTopicClosed

This object represents a service message about a forum topic closed in the chat. Currently holds no information.

#### ForumTopicEdited

This object represents a service message about an edited forum topic.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>name</td><td>String</td><td><em>Optional</em>. New name of the topic, if it was edited</td></tr><tr><td>icon_custom_emoji_id</td><td>String</td><td><em>Optional</em>. New identifier of the custom emoji shown as the topic icon, if it was edited; an empty string if the icon was removed</td></tr></tbody></table>

#### ForumTopicReopened

This object represents a service message about a forum topic reopened in the chat. Currently holds no information.

#### GeneralForumTopicHidden

This object represents a service message about General forum topic hidden in the chat. Currently holds no information.

#### GeneralForumTopicUnhidden

This object represents a service message about General forum topic unhidden in the chat. Currently holds no information.

#### SharedUser

This object contains information about a user that was shared with the bot using a [KeyboardButtonRequestUsers](#keyboardbuttonrequestusers) button.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>user_id</td><td>Integer</td><td>Identifier of the shared user. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so 64-bit integers or double-precision float types are safe for storing these identifiers. The bot may not have access to the user and could be unable to use this identifier, unless the user is already known to the bot by some other means.</td></tr><tr><td>first_name</td><td>String</td><td><em>Optional</em>. First name of the user, if the name was requested by the bot</td></tr><tr><td>last_name</td><td>String</td><td><em>Optional</em>. Last name of the user, if the name was requested by the bot</td></tr><tr><td>username</td><td>String</td><td><em>Optional</em>. Username of the user, if the username was requested by the bot</td></tr><tr><td>photo</td><td>Array of <a href="#photosize">PhotoSize</a></td><td><em>Optional</em>. Available sizes of the chat photo, if the photo was requested by the bot</td></tr></tbody></table>

#### UsersShared

This object contains information about the users whose identifiers were shared with the bot using a [KeyboardButtonRequestUsers](#keyboardbuttonrequestusers) button.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>request_id</td><td>Integer</td><td>Identifier of the request</td></tr><tr><td>users</td><td>Array of <a href="#shareduser">SharedUser</a></td><td>Information about users shared with the bot</td></tr></tbody></table>

#### ChatShared

This object contains information about a chat that was shared with the bot using a [KeyboardButtonRequestChat](#keyboardbuttonrequestchat) button.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>request_id</td><td>Integer</td><td>Identifier of the request</td></tr><tr><td>chat_id</td><td>Integer</td><td>Identifier of the shared chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. The bot may not have access to the chat and could be unable to use this identifier, unless the chat is already known to the bot by some other means.</td></tr><tr><td>title</td><td>String</td><td><em>Optional</em>. Title of the chat, if the title was requested by the bot</td></tr><tr><td>username</td><td>String</td><td><em>Optional</em>. Username of the chat, if the username was requested by the bot and available</td></tr><tr><td>photo</td><td>Array of <a href="#photosize">PhotoSize</a></td><td><em>Optional</em>. Available sizes of the chat photo, if the photo was requested by the bot</td></tr></tbody></table>

#### WriteAccessAllowed

This object represents a service message about a user allowing a bot to write messages after adding it to the attachment menu, launching a Web App from a link, or accepting an explicit request from a Web App sent by the method [requestWriteAccess](/bots/webapps/#initializing-mini-apps).

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>from_request</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if the access was granted after the user accepted an explicit request from a Web App sent by the method <a href="/bots/webapps/#initializing-mini-apps">requestWriteAccess</a></td></tr><tr><td>web_app_name</td><td>String</td><td><em>Optional</em>. Name of the Web App, if the access was granted when the Web App was launched from a link</td></tr><tr><td>from_attachment_menu</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if the access was granted when the bot was added to the attachment or side menu</td></tr></tbody></table>

#### VideoChatScheduled

This object represents a service message about a video chat scheduled in the chat.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>start_date</td><td>Integer</td><td>Point in time (Unix timestamp) when the video chat is supposed to be started by a chat administrator</td></tr></tbody></table>

#### VideoChatStarted

This object represents a service message about a video chat started in the chat. Currently holds no information.

#### VideoChatEnded

This object represents a service message about a video chat ended in the chat.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>duration</td><td>Integer</td><td>Video chat duration in seconds</td></tr></tbody></table>

#### VideoChatParticipantsInvited

This object represents a service message about new members invited to a video chat.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>users</td><td>Array of <a href="#user">User</a></td><td>New members that were invited to the video chat</td></tr></tbody></table>

#### PaidMessagePriceChanged

Describes a service message about a change in the price of paid messages within a chat.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>paid_message_star_count</td><td>Integer</td><td>The new number of Telegram Stars that must be paid by non-administrator users of the supergroup chat for each sent message</td></tr></tbody></table>

#### DirectMessagePriceChanged

Describes a service message about a change in the price of direct messages sent to a channel chat.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>are_direct_messages_enabled</td><td>Boolean</td><td><em>True</em>, if direct messages are enabled for the channel chat; <em>False</em> otherwise</td></tr><tr><td>direct_message_star_count</td><td>Integer</td><td><em>Optional</em>. The new number of Telegram Stars that must be paid by users for each direct message sent to the channel. Does not apply to users who have been exempted by administrators. Defaults to 0.</td></tr></tbody></table>

#### SuggestedPostApproved

Describes a service message about the approval of a suggested post.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>suggested_post_message</td><td><a href="#message">Message</a></td><td><em>Optional</em>. Message containing the suggested post. Note that the <a href="#message">Message</a> object in this field will not contain the <em>reply_to_message</em> field even if it itself is a reply.</td></tr><tr><td>price</td><td><a href="#suggestedpostprice">SuggestedPostPrice</a></td><td><em>Optional</em>. Amount paid for the post</td></tr><tr><td>send_date</td><td>Integer</td><td>Date when the post will be published</td></tr></tbody></table>

#### SuggestedPostApprovalFailed

Describes a service message about the failed approval of a suggested post. Currently, only caused by insufficient user funds at the time of approval.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>suggested_post_message</td><td><a href="#message">Message</a></td><td><em>Optional</em>. Message containing the suggested post whose approval has failed. Note that the <a href="#message">Message</a> object in this field will not contain the <em>reply_to_message</em> field even if it itself is a reply.</td></tr><tr><td>price</td><td><a href="#suggestedpostprice">SuggestedPostPrice</a></td><td>Expected price of the post</td></tr></tbody></table>

#### SuggestedPostDeclined

Describes a service message about the rejection of a suggested post.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>suggested_post_message</td><td><a href="#message">Message</a></td><td><em>Optional</em>. Message containing the suggested post. Note that the <a href="#message">Message</a> object in this field will not contain the <em>reply_to_message</em> field even if it itself is a reply.</td></tr><tr><td>comment</td><td>String</td><td><em>Optional</em>. Comment with which the post was declined</td></tr></tbody></table>

#### SuggestedPostPaid

Describes a service message about a successful payment for a suggested post.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>suggested_post_message</td><td><a href="#message">Message</a></td><td><em>Optional</em>. Message containing the suggested post. Note that the <a href="#message">Message</a> object in this field will not contain the <em>reply_to_message</em> field even if it itself is a reply.</td></tr><tr><td>currency</td><td>String</td><td>Currency in which the payment was made. Currently, one of “XTR” for Telegram Stars or “TON” for TON grams.</td></tr><tr><td>amount</td><td>Integer</td><td><em>Optional</em>. The amount of the currency that was received by the channel in nanograms; for payments in TON grams only</td></tr><tr><td>star_amount</td><td><a href="#staramount">StarAmount</a></td><td><em>Optional</em>. The amount of Telegram Stars that was received by the channel; for payments in Telegram Stars only</td></tr></tbody></table>

#### SuggestedPostRefunded

Describes a service message about a payment refund for a suggested post.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>suggested_post_message</td><td><a href="#message">Message</a></td><td><em>Optional</em>. Message containing the suggested post. Note that the <a href="#message">Message</a> object in this field will not contain the <em>reply_to_message</em> field even if it itself is a reply.</td></tr><tr><td>reason</td><td>String</td><td>Reason for the refund. Currently, one of “post_deleted” if the post was deleted within 24 hours of being posted or removed from scheduled messages without being posted, or “payment_refunded” if the payer refunded their payment.</td></tr></tbody></table>

#### GiveawayCreated

This object represents a service message about the creation of a scheduled giveaway.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>prize_star_count</td><td>Integer</td><td><em>Optional</em>. The number of Telegram Stars to be split between giveaway winners; for Telegram Star giveaways only</td></tr></tbody></table>

#### Giveaway

This object represents a message about a scheduled giveaway.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chats</td><td>Array of <a href="#chat">Chat</a></td><td>The list of chats which the user must join to participate in the giveaway</td></tr><tr><td>winners_selection_date</td><td>Integer</td><td>Point in time (Unix timestamp) when winners of the giveaway will be selected</td></tr><tr><td>winner_count</td><td>Integer</td><td>The number of users which are supposed to be selected as winners of the giveaway</td></tr><tr><td>only_new_members</td><td>True</td><td><em>Optional</em>. <em>True</em>, if only users who join the chats after the giveaway started should be eligible to win</td></tr><tr><td>has_public_winners</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the list of giveaway winners will be visible to everyone</td></tr><tr><td>prize_description</td><td>String</td><td><em>Optional</em>. Description of additional giveaway prize</td></tr><tr><td>country_codes</td><td>Array of String</td><td><em>Optional</em>. A list of two-letter <a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">ISO 3166-1 alpha-2</a> country codes indicating the countries from which eligible users for the giveaway must come. If empty, then all users can participate in the giveaway. Users with a phone number that was bought on Fragment can always participate in giveaways.</td></tr><tr><td>prize_star_count</td><td>Integer</td><td><em>Optional</em>. The number of Telegram Stars to be split between giveaway winners; for Telegram Star giveaways only</td></tr><tr><td>premium_subscription_month_count</td><td>Integer</td><td><em>Optional</em>. The number of months the Telegram Premium subscription won from the giveaway will be active for; for Telegram Premium giveaways only</td></tr></tbody></table>

#### GiveawayWinners

This object represents a message about the completion of a giveaway with public winners.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat</td><td><a href="#chat">Chat</a></td><td>The chat that created the giveaway</td></tr><tr><td>giveaway_message_id</td><td>Integer</td><td>Identifier of the message with the giveaway in the chat</td></tr><tr><td>winners_selection_date</td><td>Integer</td><td>Point in time (Unix timestamp) when winners of the giveaway were selected</td></tr><tr><td>winner_count</td><td>Integer</td><td>Total number of winners in the giveaway</td></tr><tr><td>winners</td><td>Array of <a href="#user">User</a></td><td>List of up to 100 winners of the giveaway</td></tr><tr><td>additional_chat_count</td><td>Integer</td><td><em>Optional</em>. The number of other chats the user had to join in order to be eligible for the giveaway</td></tr><tr><td>prize_star_count</td><td>Integer</td><td><em>Optional</em>. The number of Telegram Stars that were split between giveaway winners; for Telegram Star giveaways only</td></tr><tr><td>premium_subscription_month_count</td><td>Integer</td><td><em>Optional</em>. The number of months the Telegram Premium subscription won from the giveaway will be active for; for Telegram Premium giveaways only</td></tr><tr><td>unclaimed_prize_count</td><td>Integer</td><td><em>Optional</em>. Number of undistributed prizes</td></tr><tr><td>only_new_members</td><td>True</td><td><em>Optional</em>. <em>True</em>, if only users who had joined the chats after the giveaway started were eligible to win</td></tr><tr><td>was_refunded</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the giveaway was canceled because the payment for it was refunded</td></tr><tr><td>prize_description</td><td>String</td><td><em>Optional</em>. Description of additional giveaway prize</td></tr></tbody></table>

#### GiveawayCompleted

This object represents a service message about the completion of a giveaway without public winners.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>winner_count</td><td>Integer</td><td>Number of winners in the giveaway</td></tr><tr><td>unclaimed_prize_count</td><td>Integer</td><td><em>Optional</em>. Number of undistributed prizes</td></tr><tr><td>giveaway_message</td><td><a href="#message">Message</a></td><td><em>Optional</em>. Message with the giveaway that was completed, if it wasn't deleted</td></tr><tr><td>is_star_giveaway</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the giveaway is a Telegram Star giveaway. Otherwise, currently, the giveaway is a Telegram Premium giveaway.</td></tr></tbody></table>

#### LinkPreviewOptions

Describes the options used for link preview generation.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>is_disabled</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if the link preview is disabled</td></tr><tr><td>url</td><td>String</td><td><em>Optional</em>. URL to use for the link preview. If empty, then the first URL found in the message text will be used.</td></tr><tr><td>prefer_small_media</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if the media in the link preview is supposed to be shrunk; ignored if the URL isn't explicitly specified or media size change isn't supported for the preview</td></tr><tr><td>prefer_large_media</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if the media in the link preview is supposed to be enlarged; ignored if the URL isn't explicitly specified or media size change isn't supported for the preview</td></tr><tr><td>show_above_text</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if the link preview must be shown above the message text; otherwise, the link preview will be shown below the message text</td></tr></tbody></table>

#### SuggestedPostPrice

Describes the price of a suggested post.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>currency</td><td>String</td><td>Currency in which the post will be paid. Currently, must be one of “XTR” for Telegram Stars or “TON” for TON grams.</td></tr><tr><td>amount</td><td>Integer</td><td>The amount of the currency that will be paid for the post in the <em>smallest units</em> of the currency, i.e. Telegram Stars or nanograms. Currently, price in Telegram Stars must be between 5 and 100000, and price in nanograms must be between 10000000 and 10000000000000.</td></tr></tbody></table>

#### SuggestedPostInfo

Contains information about a suggested post.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>state</td><td>String</td><td>State of the suggested post. Currently, it can be one of “pending”, “approved”, “declined”.</td></tr><tr><td>price</td><td><a href="#suggestedpostprice">SuggestedPostPrice</a></td><td><em>Optional</em>. Proposed price of the post. If the field is omitted, then the post is unpaid.</td></tr><tr><td>send_date</td><td>Integer</td><td><em>Optional</em>. Proposed send date of the post. If the field is omitted, then the post can be published at any time within 30 days at the sole discretion of the user or administrator who approves it.</td></tr></tbody></table>

#### SuggestedPostParameters

Contains parameters of a post that is being suggested by the bot.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>price</td><td><a href="#suggestedpostprice">SuggestedPostPrice</a></td><td><em>Optional</em>. Proposed price for the post. If the field is omitted, then the post is unpaid.</td></tr><tr><td>send_date</td><td>Integer</td><td><em>Optional</em>. Proposed send date of the post. If specified, then the date must be between 300 second and 2678400 seconds (30 days) in the future. If the field is omitted, then the post can be published at any time within 30 days at the sole discretion of the user who approves it.</td></tr></tbody></table>

#### DirectMessagesTopic

Describes a topic of a direct messages chat.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>topic_id</td><td>Integer</td><td>Unique identifier of the topic. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier.</td></tr><tr><td>user</td><td><a href="#user">User</a></td><td><em>Optional</em>. Information about the user that created the topic. Currently, it is always present.</td></tr></tbody></table>

#### UserProfilePhotos

This object represent a user's profile pictures.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>total_count</td><td>Integer</td><td>Total number of profile pictures the target user has</td></tr><tr><td>photos</td><td>Array of Array of <a href="#photosize">PhotoSize</a></td><td>Requested profile pictures (in up to 4 sizes each)</td></tr></tbody></table>

#### UserProfileAudios

This object represents the audios displayed on a user's profile.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>total_count</td><td>Integer</td><td>Total number of profile audios for the target user</td></tr><tr><td>audios</td><td>Array of <a href="#audio">Audio</a></td><td>Requested profile audios</td></tr></tbody></table>

#### File

This object represents a file ready to be downloaded. The file can be downloaded via the link `https://api.telegram.org/file/bot<token>/<file_path>`. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling [getFile](#getfile).

> The maximum file size to download is 20 MB

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>file_id</td><td>String</td><td>Identifier for this file, which can be used to download or reuse the file</td></tr><tr><td>file_unique_id</td><td>String</td><td>Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.</td></tr><tr><td>file_size</td><td>Integer</td><td><em>Optional</em>. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.</td></tr><tr><td>file_path</td><td>String</td><td><em>Optional</em>. File path. Use <code>https://api.telegram.org/file/bot&lt;token&gt;/&lt;file_path&gt;</code> to get the file.</td></tr></tbody></table>

#### WebAppInfo

Describes a [Web App](/bots/webapps/).

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>url</td><td>String</td><td>An HTTPS URL of a Web App to be opened with additional data as specified in <a href="/bots/webapps/#initializing-mini-apps">Initializing Web Apps</a></td></tr></tbody></table>

#### ReplyKeyboardMarkup

This object represents a [custom keyboard](/bots/features/#keyboards) with reply options (see [Introduction to bots](/bots/features/#keyboards) for details and examples). Not supported in channels and for messages sent on behalf of a business account.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>keyboard</td><td>Array of Array of <a href="#keyboardbutton">KeyboardButton</a></td><td>Array of button rows, each represented by an Array of <a href="#keyboardbutton">KeyboardButton</a> objects</td></tr><tr><td>is_persistent</td><td>Boolean</td><td><em>Optional</em>. Requests clients to always show the keyboard when the regular keyboard is hidden. Defaults to <em>False</em>, in which case the custom keyboard can be hidden and opened with a keyboard icon.</td></tr><tr><td>resize_keyboard</td><td>Boolean</td><td><em>Optional</em>. Requests clients to resize the keyboard vertically for optimal fit (e.g., make the keyboard smaller if there are just two rows of buttons). Defaults to <em>False</em>, in which case the custom keyboard is always of the same height as the app's standard keyboard.</td></tr><tr><td>one_time_keyboard</td><td>Boolean</td><td><em>Optional</em>. Requests clients to hide the keyboard as soon as it's been used. The keyboard will still be available, but clients will automatically display the usual letter-keyboard in the chat - the user can press a special button in the input field to see the custom keyboard again. Defaults to <em>False</em>.</td></tr><tr><td>input_field_placeholder</td><td>String</td><td><em>Optional</em>. The placeholder to be shown in the input field when the keyboard is active; 1-64 characters</td></tr><tr><td>selective</td><td>Boolean</td><td><em>Optional</em>. Use this parameter if you want to show the keyboard to specific users only. Targets: 1) users that are @mentioned in the <em>text</em> of the <a href="#message">Message</a> object; 2) if the bot's message is a reply to a message in the same chat and forum topic, sender of the original message.<br><br><em>Example:</em> A user requests to change the bot's language, bot replies to the request with a keyboard to select the new language. Other users in the group don't see the keyboard.</td></tr></tbody></table>

#### KeyboardButton

This object represents one button of the reply keyboard. At most one of the fields other than _text_, _icon\_custom\_emoji\_id_, and _style_ must be used to specify the type of the button. For simple text buttons, _String_ can be used instead of this object to specify the button text.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>text</td><td>String</td><td>Text of the button. If none of the fields other than <em>text</em>, <em>icon_custom_emoji_id</em>, and <em>style</em> are used, it will be sent as a message when the button is pressed.</td></tr><tr><td>icon_custom_emoji_id</td><td>String</td><td><em>Optional</em>. Unique identifier of the custom emoji shown before the text of the button. Can only be used by bots that purchased additional usernames on <a href="https://fragment.com">Fragment</a> or in the messages directly sent by the bot to private, group and supergroup chats if the owner of the bot has a Telegram Premium subscription.</td></tr><tr><td>style</td><td>String</td><td><em>Optional</em>. Style of the button. Must be one of “danger” (red), “success” (green) or “primary” (blue). If omitted, then an app-specific style is used.</td></tr><tr><td>request_users</td><td><a href="#keyboardbuttonrequestusers">KeyboardButtonRequestUsers</a></td><td><em>Optional</em>. If specified, pressing the button will open a list of suitable users. Identifiers of selected users will be sent to the bot in a “users_shared” service message. Available in private chats only.</td></tr><tr><td>request_chat</td><td><a href="#keyboardbuttonrequestchat">KeyboardButtonRequestChat</a></td><td><em>Optional</em>. If specified, pressing the button will open a list of suitable chats. Tapping on a chat will send its identifier to the bot in a “chat_shared” service message. Available in private chats only.</td></tr><tr><td>request_managed_bot</td><td><a href="#keyboardbuttonrequestmanagedbot">KeyboardButtonRequestManagedBot</a></td><td><em>Optional</em>. If specified, pressing the button will ask the user to create and share a bot that will be managed by the current bot. Available for bots that enabled management of other bots in the <a href="https://t.me/BotFather">@BotFather</a> Mini App. Available in private chats only.</td></tr><tr><td>request_contact</td><td>Boolean</td><td><em>Optional</em>. If <em>True</em>, the user's phone number will be sent as a contact when the button is pressed. Available in private chats only.</td></tr><tr><td>request_location</td><td>Boolean</td><td><em>Optional</em>. If <em>True</em>, the user's current location will be sent when the button is pressed. Available in private chats only.</td></tr><tr><td>request_poll</td><td><a href="#keyboardbuttonpolltype">KeyboardButtonPollType</a></td><td><em>Optional</em>. If specified, the user will be asked to create a poll and send it to the bot when the button is pressed. Available in private chats only.</td></tr><tr><td>web_app</td><td><a href="#webappinfo">WebAppInfo</a></td><td><em>Optional</em>. If specified, the described <a href="/bots/webapps/">Web App</a> will be launched when the button is pressed. The Web App will be able to send a “web_app_data” service message. Available in private chats only.</td></tr></tbody></table>

#### KeyboardButtonRequestUsers

This object defines the criteria used to request suitable users. Information about the selected users will be shared with the bot when the corresponding button is pressed. [More about requesting users »](/bots/features/#chat-and-user-selection)

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>request_id</td><td>Integer</td><td>Signed 32-bit identifier of the request that will be received back in the <a href="#usersshared">UsersShared</a> object. Must be unique within the message.</td></tr><tr><td>user_is_bot</td><td>Boolean</td><td><em>Optional</em>. Pass <em>True</em> to request bots, pass <em>False</em> to request regular users. If not specified, no additional restrictions are applied.</td></tr><tr><td>user_is_premium</td><td>Boolean</td><td><em>Optional</em>. Pass <em>True</em> to request premium users, pass <em>False</em> to request non-premium users. If not specified, no additional restrictions are applied.</td></tr><tr><td>max_quantity</td><td>Integer</td><td><em>Optional</em>. The maximum number of users to be selected; 1-10. Defaults to 1.</td></tr><tr><td>request_name</td><td>Boolean</td><td><em>Optional</em>. Pass <em>True</em> to request the users' first and last names</td></tr><tr><td>request_username</td><td>Boolean</td><td><em>Optional</em>. Pass <em>True</em> to request the users' usernames</td></tr><tr><td>request_photo</td><td>Boolean</td><td><em>Optional</em>. Pass <em>True</em> to request the users' photos</td></tr></tbody></table>

#### KeyboardButtonRequestChat

This object defines the criteria used to request a suitable chat. Information about the selected chat will be shared with the bot when the corresponding button is pressed. The bot will be granted requested rights in the chat if appropriate. [More about requesting chats »](/bots/features/#chat-and-user-selection).

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>request_id</td><td>Integer</td><td>Signed 32-bit identifier of the request, which will be received back in the <a href="#chatshared">ChatShared</a> object. Must be unique within the message.</td></tr><tr><td>chat_is_channel</td><td>Boolean</td><td>Pass <em>True</em> to request a channel chat, pass <em>False</em> to request a group or a supergroup chat</td></tr><tr><td>chat_is_forum</td><td>Boolean</td><td><em>Optional</em>. Pass <em>True</em> to request a forum supergroup, pass <em>False</em> to request a non-forum chat. If not specified, no additional restrictions are applied.</td></tr><tr><td>chat_has_username</td><td>Boolean</td><td><em>Optional</em>. Pass <em>True</em> to request a supergroup or a channel with a username, pass <em>False</em> to request a chat without a username. If not specified, no additional restrictions are applied.</td></tr><tr><td>chat_is_created</td><td>Boolean</td><td><em>Optional</em>. Pass <em>True</em> to request a chat owned by the user. Otherwise, no additional restrictions are applied.</td></tr><tr><td>user_administrator_rights</td><td><a href="#chatadministratorrights">ChatAdministratorRights</a></td><td><em>Optional</em>. A JSON-serialized object listing the required administrator rights of the user in the chat. The rights must be a superset of <em>bot_administrator_rights</em>. If not specified, no additional restrictions are applied.</td></tr><tr><td>bot_administrator_rights</td><td><a href="#chatadministratorrights">ChatAdministratorRights</a></td><td><em>Optional</em>. A JSON-serialized object listing the required administrator rights of the bot in the chat. The rights must be a subset of <em>user_administrator_rights</em>. If not specified, no additional restrictions are applied.</td></tr><tr><td>bot_is_member</td><td>Boolean</td><td><em>Optional</em>. Pass <em>True</em> to request a chat with the bot as a member. Otherwise, no additional restrictions are applied.</td></tr><tr><td>request_title</td><td>Boolean</td><td><em>Optional</em>. Pass <em>True</em> to request the chat's title</td></tr><tr><td>request_username</td><td>Boolean</td><td><em>Optional</em>. Pass <em>True</em> to request the chat's username</td></tr><tr><td>request_photo</td><td>Boolean</td><td><em>Optional</em>. Pass <em>True</em> to request the chat's photo</td></tr></tbody></table>

#### KeyboardButtonRequestManagedBot

This object defines the parameters for the creation of a managed bot. Information about the created bot will be shared with the bot using the update _managed\_bot_ and a [Message](#message) with the field _managed\_bot\_created_.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>request_id</td><td>Integer</td><td>Signed 32-bit identifier of the request. Must be unique within the message.</td></tr><tr><td>suggested_name</td><td>String</td><td><em>Optional</em>. Suggested name for the bot</td></tr><tr><td>suggested_username</td><td>String</td><td><em>Optional</em>. Suggested username for the bot</td></tr></tbody></table>

#### KeyboardButtonPollType

This object represents type of a poll, which is allowed to be created and sent when the corresponding button is pressed.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td><em>Optional</em>. If <em>quiz</em> is passed, the user will be allowed to create only polls in the quiz mode. If <em>regular</em> is passed, only regular polls will be allowed. Otherwise, the user will be allowed to create a poll of any type.</td></tr></tbody></table>

#### ReplyKeyboardRemove

Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden immediately after the user presses a button (see [ReplyKeyboardMarkup](#replykeyboardmarkup)). Not supported in channels and for messages sent on behalf of a business account.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>remove_keyboard</td><td>True</td><td>Requests clients to remove the custom keyboard (user will not be able to summon this keyboard; if you want to hide the keyboard from sight but keep it accessible, use <em>one_time_keyboard</em> in <a href="#replykeyboardmarkup">ReplyKeyboardMarkup</a>)</td></tr><tr><td>selective</td><td>Boolean</td><td><em>Optional</em>. Use this parameter if you want to remove the keyboard for specific users only. Targets: 1) users that are @mentioned in the <em>text</em> of the <a href="#message">Message</a> object; 2) if the bot's message is a reply to a message in the same chat and forum topic, sender of the original message.<br><br><em>Example:</em> A user votes in a poll, bot returns confirmation message in reply to the vote and removes the keyboard for that user, while still showing the keyboard with poll options to users who haven't voted yet.</td></tr></tbody></table>

#### InlineKeyboardMarkup

This object represents an [inline keyboard](/bots/features/#inline-keyboards) that appears right next to the message it belongs to.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>inline_keyboard</td><td>Array of Array of <a href="#inlinekeyboardbutton">InlineKeyboardButton</a></td><td>Array of button rows, each represented by an Array of <a href="#inlinekeyboardbutton">InlineKeyboardButton</a> objects</td></tr></tbody></table>

#### InlineKeyboardButton

This object represents one button of an inline keyboard. Exactly one of the fields other than _text_, _icon\_custom\_emoji\_id_, and _style_ must be used to specify the type of the button.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>text</td><td>String</td><td>Label text on the button</td></tr><tr><td>icon_custom_emoji_id</td><td>String</td><td><em>Optional</em>. Unique identifier of the custom emoji shown before the text of the button. Can only be used by bots that purchased additional usernames on <a href="https://fragment.com">Fragment</a> or in the messages directly sent by the bot to private, group and supergroup chats if the owner of the bot has a Telegram Premium subscription.</td></tr><tr><td>style</td><td>String</td><td><em>Optional</em>. Style of the button. Must be one of “danger” (red), “success” (green) or “primary” (blue). If omitted, then an app-specific style is used.</td></tr><tr><td>url</td><td>String</td><td><em>Optional</em>. HTTP or tg:// URL to be opened when the button is pressed. Links <code>tg://user?id=&lt;user_id&gt;</code> can be used to mention a user by their identifier without using a username, if this is allowed by their privacy settings.</td></tr><tr><td>callback_data</td><td>String</td><td><em>Optional</em>. Data to be sent in a <a href="#callbackquery">callback query</a> to the bot when the button is pressed, 1-64 bytes</td></tr><tr><td>web_app</td><td><a href="#webappinfo">WebAppInfo</a></td><td><em>Optional</em>. Description of the <a href="/bots/webapps/">Web App</a> that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method <a href="#answerwebappquery">answerWebAppQuery</a>. Available only in private chats between a user and the bot. Not supported for messages sent on behalf of a business account.</td></tr><tr><td>login_url</td><td><a href="#loginurl">LoginUrl</a></td><td><em>Optional</em>. An HTTPS URL used to automatically authorize the user. Can be used as a replacement for the <a href="/bots/telegram-login/">Telegram Login Widget</a>.</td></tr><tr><td>switch_inline_query</td><td>String</td><td><em>Optional</em>. If set, pressing the button will prompt the user to select one of their chats, open that chat and insert the bot's username and the specified inline query in the input field. May be empty, in which case just the bot's username will be inserted. Not supported for messages sent in channel direct messages chats and on behalf of a business account.</td></tr><tr><td>switch_inline_query_current_chat</td><td>String</td><td><em>Optional</em>. If set, pressing the button will insert the bot's username and the specified inline query in the current chat's input field. May be empty, in which case only the bot's username will be inserted.<br><br>This offers a quick way for the user to open your bot in inline mode in the same chat - good for selecting something from multiple options. Not supported in channels and for messages sent in channel direct messages chats and on behalf of a business account.</td></tr><tr><td>switch_inline_query_chosen_chat</td><td><a href="#switchinlinequerychosenchat">SwitchInlineQueryChosenChat</a></td><td><em>Optional</em>. If set, pressing the button will prompt the user to select one of their chats of the specified type, open that chat and insert the bot's username and the specified inline query in the input field. Not supported for messages sent in channel direct messages chats and on behalf of a business account.</td></tr><tr><td>copy_text</td><td><a href="#copytextbutton">CopyTextButton</a></td><td><em>Optional</em>. Description of the button that copies the specified text to the clipboard</td></tr><tr><td>callback_game</td><td><a href="#callbackgame">CallbackGame</a></td><td><em>Optional</em>. Description of the game that will be launched when the user presses the button.<br><br><strong>NOTE:</strong> This type of button <strong>must</strong> always be the first button in the first row.</td></tr><tr><td>pay</td><td>Boolean</td><td><em>Optional</em>. Specify <em>True</em>, to send a <a href="#payments">Pay button</a>. Substrings “<img class="emoji" src="https://telegram.org/img/emoji/40/E2AD90.png" width="20" height="20" alt="⭐">” and “XTR” in the buttons's text will be replaced with a Telegram Star icon.<br><br><strong>NOTE:</strong> This type of button <strong>must</strong> always be the first button in the first row and can only be used in invoice messages.</td></tr></tbody></table>

#### LoginUrl

This object represents a parameter of the inline keyboard button used to automatically authorize a user. Serves as a great replacement for the [Telegram Login Widget](/bots/telegram-login/) when the user is coming from Telegram. All the user needs to do is tap/click a button and confirm that they want to log in:

<div class="blog_image_wrap"><a href="https://core.telegram.org/file/811140015/1734/8VZFkwWXalM.97872/6127fa62d8a0bf2b3c" target="_blank"><img src="https://core.telegram.org/file/811140909/1631/20k1Z53eiyY.23995/c541e89b74253623d9" title="TITLE" alt="TITLE" srcset="/file/811140015/1734/8VZFkwWXalM.97872/6127fa62d8a0bf2b3c , 2x"></a></div>

Telegram apps support these buttons as of [version 5.7](/blog/privacy-discussions-web-bots/#meet-seamless-web-bots).

> Sample bot: [@discussbot](https://t.me/discussbot)

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>url</td><td>String</td><td>An HTTPS URL to be opened with user authorization data added to the query string when the button is pressed. If the user refuses to provide authorization data, the original URL without information about the user will be opened. The data added is the same as described in <a href="/bots/telegram-login/">Receiving authorization data</a>.<br><br><strong>NOTE:</strong> You <strong>must</strong> always check the hash of the received data to verify the authentication and the integrity of the data as described in <a href="/bots/telegram-login/">Checking authorization</a>.</td></tr><tr><td>forward_text</td><td>String</td><td><em>Optional</em>. New text of the button in forwarded messages</td></tr><tr><td>bot_username</td><td>String</td><td><em>Optional</em>. Username of a bot, which will be used for user authorization. See <a href="/bots/telegram-login/">Setting up a bot</a> for more details. If not specified, the current bot's username will be assumed. The <em>url</em>'s domain must be the same as the domain linked with the bot. See <a href="/bots/telegram-login/">Linking your domain to the bot</a> for more details.</td></tr><tr><td>request_write_access</td><td>Boolean</td><td><em>Optional</em>. Pass <em>True</em> to request the permission for your bot to send messages to the user</td></tr></tbody></table>

#### SwitchInlineQueryChosenChat

This object represents an inline button that switches the current user to inline mode in a chosen chat, with an optional default inline query.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>query</td><td>String</td><td><em>Optional</em>. The default inline query to be inserted in the input field. If left empty, only the bot's username will be inserted.</td></tr><tr><td>allow_user_chats</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if private chats with users can be chosen</td></tr><tr><td>allow_bot_chats</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if private chats with bots can be chosen</td></tr><tr><td>allow_group_chats</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if group and supergroup chats can be chosen</td></tr><tr><td>allow_channel_chats</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if channel chats can be chosen</td></tr></tbody></table>

#### CopyTextButton

This object represents an inline keyboard button that copies specified text to the clipboard.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>text</td><td>String</td><td>The text to be copied to the clipboard; 1-256 characters</td></tr></tbody></table>

#### CallbackQuery

This object represents an incoming callback query from a callback button in an [inline keyboard](/bots/features/#inline-keyboards). If the button that originated the query was attached to a message sent by the bot, the field _message_ will be present. If the button was attached to a message sent via the bot (in [inline mode](#inline-mode)), the field _inline\_message\_id_ will be present. Exactly one of the fields _data_ or _game\_short\_name_ will be present.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>id</td><td>String</td><td>Unique identifier for this query</td></tr><tr><td>from</td><td><a href="#user">User</a></td><td>Sender</td></tr><tr><td>message</td><td><a href="#maybeinaccessiblemessage">MaybeInaccessibleMessage</a></td><td><em>Optional</em>. Message sent by the bot with the callback button that originated the query</td></tr><tr><td>inline_message_id</td><td>String</td><td><em>Optional</em>. Identifier of the message sent via the bot in inline mode, that originated the query</td></tr><tr><td>chat_instance</td><td>String</td><td>Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent. Useful for high scores in <a href="#games">games</a>.</td></tr><tr><td>data</td><td>String</td><td><em>Optional</em>. Data associated with the callback button. Be aware that the message originated the query can contain no callback buttons with this data.</td></tr><tr><td>game_short_name</td><td>String</td><td><em>Optional</em>. Short name of a <a href="#games">Game</a> to be returned, serves as the unique identifier for the game</td></tr></tbody></table>

> **NOTE:** After the user presses a callback button, Telegram clients will display a progress bar until you call [answerCallbackQuery](#answercallbackquery). It is, therefore, necessary to react by calling [answerCallbackQuery](#answercallbackquery) even if no notification to the user is needed (e.g., without specifying any of the optional parameters).

#### ForceReply

Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot's message and tapped 'Reply'). This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice [privacy mode](/bots/features/#privacy-mode). Not supported in channels and for messages sent on behalf of a user account.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>force_reply</td><td>True</td><td>Shows reply interface to the user, as if they manually selected the bot's message and tapped 'Reply'</td></tr><tr><td>input_field_placeholder</td><td>String</td><td><em>Optional</em>. The placeholder to be shown in the input field when the reply is active; 1-64 characters</td></tr><tr><td>selective</td><td>Boolean</td><td><em>Optional</em>. Use this parameter if you want to force reply from specific users only. Targets: 1) users that are @mentioned in the <em>text</em> of the <a href="#message">Message</a> object; 2) if the bot's message is a reply to a message in the same chat and forum topic, sender of the original message.</td></tr></tbody></table>

> **Example:** A [poll bot](https://t.me/PollBot) for groups runs in privacy mode (only receives commands, replies to its messages and mentions). There could be two ways to create a new poll:
> 
> -   Explain the user how to send a command with parameters (e.g. /newpoll question answer1 answer2). May be appealing for hardcore users but lacks modern day polish.
> -   Guide the user through a step-by-step process. 'Please send me your question', 'Cool, now let's add the first answer option', 'Great. Keep adding answer options, then send /done when you're ready'.
> 
> The last option is definitely more attractive. And if you use [ForceReply](#forcereply) in your bot's questions, it will receive the user's answers even if it only receives replies, commands and mentions - without any extra work for the user.

#### Community

Represents a community (a group of chats).

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>id</td><td>Integer</td><td>Unique identifier for this community. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.</td></tr><tr><td>name</td><td>String</td><td>Name of the community</td></tr></tbody></table>

#### ChatPhoto

This object represents a chat photo.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>small_file_id</td><td>String</td><td>File identifier of small (160x160) chat photo. This file_id can be used only for photo download and only for as long as the photo is not changed.</td></tr><tr><td>small_file_unique_id</td><td>String</td><td>Unique file identifier of small (160x160) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.</td></tr><tr><td>big_file_id</td><td>String</td><td>File identifier of big (640x640) chat photo. This file_id can be used only for photo download and only for as long as the photo is not changed.</td></tr><tr><td>big_file_unique_id</td><td>String</td><td>Unique file identifier of big (640x640) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.</td></tr></tbody></table>

#### ChatInviteLink

Represents an invite link for a chat.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>invite_link</td><td>String</td><td>The invite link. If the link was created by another chat administrator, then the second part of the link will be replaced with “…”.</td></tr><tr><td>creator</td><td><a href="#user">User</a></td><td>Creator of the link</td></tr><tr><td>creates_join_request</td><td>Boolean</td><td><em>True</em>, if users joining the chat via the link need to be approved by chat administrators</td></tr><tr><td>is_primary</td><td>Boolean</td><td><em>True</em>, if the link is primary</td></tr><tr><td>is_revoked</td><td>Boolean</td><td><em>True</em>, if the link is revoked</td></tr><tr><td>name</td><td>String</td><td><em>Optional</em>. Invite link name</td></tr><tr><td>expire_date</td><td>Integer</td><td><em>Optional</em>. Point in time (Unix timestamp) when the link will expire or has been expired</td></tr><tr><td>member_limit</td><td>Integer</td><td><em>Optional</em>. The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999</td></tr><tr><td>pending_join_request_count</td><td>Integer</td><td><em>Optional</em>. Number of pending join requests created using this link</td></tr><tr><td>subscription_period</td><td>Integer</td><td><em>Optional</em>. The number of seconds the subscription will be active for before the next payment</td></tr><tr><td>subscription_price</td><td>Integer</td><td><em>Optional</em>. The amount of Telegram Stars a user must pay initially and after each subsequent subscription period to be a member of the chat using the link</td></tr></tbody></table>

#### ChatAdministratorRights

Represents the rights of an administrator in a chat.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>is_anonymous</td><td>Boolean</td><td><em>True</em>, if the user's presence in the chat is hidden</td></tr><tr><td>can_manage_chat</td><td>Boolean</td><td><em>True</em>, if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages, ignore slow mode, and send messages to the chat without paying Telegram Stars. Implied by any other administrator privilege.</td></tr><tr><td>can_delete_messages</td><td>Boolean</td><td><em>True</em>, if the administrator can delete messages of other users</td></tr><tr><td>can_manage_video_chats</td><td>Boolean</td><td><em>True</em>, if the administrator can manage video chats</td></tr><tr><td>can_restrict_members</td><td>Boolean</td><td><em>True</em>, if the administrator can restrict, ban or unban chat members, or access supergroup statistics</td></tr><tr><td>can_promote_members</td><td>Boolean</td><td><em>True</em>, if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by the user)</td></tr><tr><td>can_change_info</td><td>Boolean</td><td><em>True</em>, if the user is allowed to change the chat title, photo and other settings</td></tr><tr><td>can_invite_users</td><td>Boolean</td><td><em>True</em>, if the user is allowed to invite new users to the chat</td></tr><tr><td>can_post_stories</td><td>Boolean</td><td><em>True</em>, if the administrator can post stories to the chat</td></tr><tr><td>can_edit_stories</td><td>Boolean</td><td><em>True</em>, if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat's story archive</td></tr><tr><td>can_delete_stories</td><td>Boolean</td><td><em>True</em>, if the administrator can delete stories posted by other users</td></tr><tr><td>can_post_messages</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if the administrator can post messages in the channel, approve suggested posts, or access channel statistics; for channels only</td></tr><tr><td>can_edit_messages</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if the administrator can edit messages of other users and can pin messages; for channels only</td></tr><tr><td>can_pin_messages</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if the user is allowed to pin messages; for groups and supergroups only</td></tr><tr><td>can_manage_topics</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only</td></tr><tr><td>can_manage_direct_messages</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if the administrator can manage direct messages of the channel and decline suggested posts; for channels only</td></tr><tr><td>can_manage_tags</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if the administrator can edit the tags of regular members; for groups and supergroups only. If omitted, defaults to the value of can_pin_messages.</td></tr></tbody></table>

#### ChatMemberUpdated

This object represents changes in the status of a chat member.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat</td><td><a href="#chat">Chat</a></td><td>Chat the user belongs to</td></tr><tr><td>from</td><td><a href="#user">User</a></td><td>Performer of the action, which resulted in the change</td></tr><tr><td>date</td><td>Integer</td><td>Date the change was done in Unix time</td></tr><tr><td>old_chat_member</td><td><a href="#chatmember">ChatMember</a></td><td>Previous information about the chat member</td></tr><tr><td>new_chat_member</td><td><a href="#chatmember">ChatMember</a></td><td>New information about the chat member</td></tr><tr><td>invite_link</td><td><a href="#chatinvitelink">ChatInviteLink</a></td><td><em>Optional</em>. Chat invite link, which was used by the user to join the chat; for joining by invite link events only</td></tr><tr><td>via_join_request</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if the user joined the chat after sending a direct join request without using an invite link and being approved by an administrator</td></tr><tr><td>via_chat_folder_invite_link</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if the user joined the chat via a chat folder invite link</td></tr></tbody></table>

#### ChatMember

This object contains information about one member of a chat. Currently, the following 6 types of chat members are supported:

-   [ChatMemberOwner](#chatmemberowner)
-   [ChatMemberAdministrator](#chatmemberadministrator)
-   [ChatMemberMember](#chatmembermember)
-   [ChatMemberRestricted](#chatmemberrestricted)
-   [ChatMemberLeft](#chatmemberleft)
-   [ChatMemberBanned](#chatmemberbanned)

#### ChatMemberOwner

Represents a [chat member](#chatmember) that owns the chat and has all administrator privileges.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>status</td><td>String</td><td>The member's status in the chat, always “creator”</td></tr><tr><td>user</td><td><a href="#user">User</a></td><td>Information about the user</td></tr><tr><td>is_anonymous</td><td>Boolean</td><td><em>True</em>, if the user's presence in the chat is hidden</td></tr><tr><td>custom_title</td><td>String</td><td><em>Optional</em>. Custom title for this user</td></tr></tbody></table>

#### ChatMemberAdministrator

Represents a [chat member](#chatmember) that has some additional privileges.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>status</td><td>String</td><td>The member's status in the chat, always “administrator”</td></tr><tr><td>user</td><td><a href="#user">User</a></td><td>Information about the user</td></tr><tr><td>can_be_edited</td><td>Boolean</td><td><em>True</em>, if the bot is allowed to edit administrator privileges of that user</td></tr><tr><td>is_anonymous</td><td>Boolean</td><td><em>True</em>, if the user's presence in the chat is hidden</td></tr><tr><td>can_manage_chat</td><td>Boolean</td><td><em>True</em>, if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages, ignore slow mode, and send messages to the chat without paying Telegram Stars. Implied by any other administrator privilege.</td></tr><tr><td>can_delete_messages</td><td>Boolean</td><td><em>True</em>, if the administrator can delete messages of other users</td></tr><tr><td>can_manage_video_chats</td><td>Boolean</td><td><em>True</em>, if the administrator can manage video chats</td></tr><tr><td>can_restrict_members</td><td>Boolean</td><td><em>True</em>, if the administrator can restrict, ban or unban chat members, or access supergroup statistics</td></tr><tr><td>can_promote_members</td><td>Boolean</td><td><em>True</em>, if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by the user)</td></tr><tr><td>can_change_info</td><td>Boolean</td><td><em>True</em>, if the user is allowed to change the chat title, photo and other settings</td></tr><tr><td>can_invite_users</td><td>Boolean</td><td><em>True</em>, if the user is allowed to invite new users to the chat</td></tr><tr><td>can_post_stories</td><td>Boolean</td><td><em>True</em>, if the administrator can post stories to the chat</td></tr><tr><td>can_edit_stories</td><td>Boolean</td><td><em>True</em>, if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat's story archive</td></tr><tr><td>can_delete_stories</td><td>Boolean</td><td><em>True</em>, if the administrator can delete stories posted by other users</td></tr><tr><td>can_post_messages</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if the administrator can post messages in the channel, approve suggested posts, or access channel statistics; for channels only</td></tr><tr><td>can_edit_messages</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if the administrator can edit messages of other users and can pin messages; for channels only</td></tr><tr><td>can_pin_messages</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if the user is allowed to pin messages; for groups and supergroups only</td></tr><tr><td>can_manage_topics</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only</td></tr><tr><td>can_manage_direct_messages</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if the administrator can manage direct messages of the channel and decline suggested posts; for channels only</td></tr><tr><td>can_manage_tags</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if the administrator can edit the tags of regular members; for groups and supergroups only. If omitted, defaults to the value of can_pin_messages.</td></tr><tr><td>custom_title</td><td>String</td><td><em>Optional</em>. Custom title for this user</td></tr></tbody></table>

#### ChatMemberMember

Represents a [chat member](#chatmember) that has no additional privileges or restrictions.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>status</td><td>String</td><td>The member's status in the chat, always “member”</td></tr><tr><td>tag</td><td>String</td><td><em>Optional</em>. Tag of the member</td></tr><tr><td>user</td><td><a href="#user">User</a></td><td>Information about the user</td></tr><tr><td>until_date</td><td>Integer</td><td><em>Optional</em>. Date when the user's subscription will expire; Unix time</td></tr></tbody></table>

#### ChatMemberRestricted

Represents a [chat member](#chatmember) that is under certain restrictions in the chat. Supergroups only.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>status</td><td>String</td><td>The member's status in the chat, always “restricted”</td></tr><tr><td>tag</td><td>String</td><td><em>Optional</em>. Tag of the member</td></tr><tr><td>user</td><td><a href="#user">User</a></td><td>Information about the user</td></tr><tr><td>is_member</td><td>Boolean</td><td><em>True</em>, if the user is a member of the chat at the moment of the request</td></tr><tr><td>can_send_messages</td><td>Boolean</td><td><em>True</em>, if the user is allowed to send text messages, rich messages, contacts, giveaways, giveaway winners, invoices, locations and venues</td></tr><tr><td>can_send_audios</td><td>Boolean</td><td><em>True</em>, if the user is allowed to send audios</td></tr><tr><td>can_send_documents</td><td>Boolean</td><td><em>True</em>, if the user is allowed to send documents</td></tr><tr><td>can_send_photos</td><td>Boolean</td><td><em>True</em>, if the user is allowed to send photos</td></tr><tr><td>can_send_videos</td><td>Boolean</td><td><em>True</em>, if the user is allowed to send videos</td></tr><tr><td>can_send_video_notes</td><td>Boolean</td><td><em>True</em>, if the user is allowed to send video notes</td></tr><tr><td>can_send_voice_notes</td><td>Boolean</td><td><em>True</em>, if the user is allowed to send voice notes</td></tr><tr><td>can_send_polls</td><td>Boolean</td><td><em>True</em>, if the user is allowed to send polls and checklists</td></tr><tr><td>can_send_other_messages</td><td>Boolean</td><td><em>True</em>, if the user is allowed to send animations, games, stickers and use inline bots</td></tr><tr><td>can_add_web_page_previews</td><td>Boolean</td><td><em>True</em>, if the user is allowed to add web page previews to their messages</td></tr><tr><td>can_react_to_messages</td><td>Boolean</td><td><em>True</em>, if the user is allowed to react to messages</td></tr><tr><td>can_edit_tag</td><td>Boolean</td><td><em>True</em>, if the user is allowed to edit their own tag</td></tr><tr><td>can_change_info</td><td>Boolean</td><td><em>True</em>, if the user is allowed to change the chat title, photo and other settings</td></tr><tr><td>can_invite_users</td><td>Boolean</td><td><em>True</em>, if the user is allowed to invite new users to the chat</td></tr><tr><td>can_pin_messages</td><td>Boolean</td><td><em>True</em>, if the user is allowed to pin messages</td></tr><tr><td>can_manage_topics</td><td>Boolean</td><td><em>True</em>, if the user is allowed to create forum topics</td></tr><tr><td>until_date</td><td>Integer</td><td>Date when restrictions will be lifted for this user; Unix time. If 0, then the user is restricted forever.</td></tr></tbody></table>

#### ChatMemberLeft

Represents a [chat member](#chatmember) that isn't currently a member of the chat, but may join it themselves.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>status</td><td>String</td><td>The member's status in the chat, always “left”</td></tr><tr><td>user</td><td><a href="#user">User</a></td><td>Information about the user</td></tr></tbody></table>

#### ChatMemberBanned

Represents a [chat member](#chatmember) that was banned in the chat and can't return to the chat or view chat messages.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>status</td><td>String</td><td>The member's status in the chat, always “kicked”</td></tr><tr><td>user</td><td><a href="#user">User</a></td><td>Information about the user</td></tr><tr><td>until_date</td><td>Integer</td><td>Date when restrictions will be lifted for this user; Unix time. If 0, then the user is banned forever.</td></tr></tbody></table>

#### ChatJoinRequest

Represents a join request sent to a chat.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat</td><td><a href="#chat">Chat</a></td><td>Chat to which the request was sent</td></tr><tr><td>from</td><td><a href="#user">User</a></td><td>User that sent the join request</td></tr><tr><td>user_chat_id</td><td>Integer</td><td>Identifier of a private chat with the user who sent the join request. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. The bot can use this identifier for 5 minutes to send messages until the join request is processed, assuming no other administrator contacted the user.</td></tr><tr><td>date</td><td>Integer</td><td>Date the request was sent in Unix time</td></tr><tr><td>bio</td><td>String</td><td><em>Optional</em>. Bio of the user</td></tr><tr><td>invite_link</td><td><a href="#chatinvitelink">ChatInviteLink</a></td><td><em>Optional</em>. Chat invite link that was used by the user to send the join request</td></tr><tr><td>query_id</td><td>String</td><td><em>Optional</em>. Identifier of the join request query; for bots assigned to process join requests only. If present, then the bot must call <a href="#sendchatjoinrequestwebapp">sendChatJoinRequestWebApp</a> or directly call <a href="#answerchatjoinrequestquery">answerChatJoinRequestQuery</a> within 10 seconds.</td></tr></tbody></table>

#### ChatPermissions

Describes actions that a non-administrator user is allowed to take in a chat.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>can_send_messages</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if the user is allowed to send text messages, rich messages, contacts, giveaways, giveaway winners, invoices, locations and venues</td></tr><tr><td>can_send_audios</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if the user is allowed to send audios</td></tr><tr><td>can_send_documents</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if the user is allowed to send documents</td></tr><tr><td>can_send_photos</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if the user is allowed to send photos</td></tr><tr><td>can_send_videos</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if the user is allowed to send videos</td></tr><tr><td>can_send_video_notes</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if the user is allowed to send video notes</td></tr><tr><td>can_send_voice_notes</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if the user is allowed to send voice notes</td></tr><tr><td>can_send_polls</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if the user is allowed to send polls and checklists</td></tr><tr><td>can_send_other_messages</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if the user is allowed to send animations, games, stickers and use inline bots</td></tr><tr><td>can_add_web_page_previews</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if the user is allowed to add web page previews to their messages</td></tr><tr><td>can_react_to_messages</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if the user is allowed to react to messages. If omitted, defaults to the value of <em>can_send_messages</em>.</td></tr><tr><td>can_edit_tag</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if the user is allowed to edit their own tag. If omitted, defaults to the value of <em>can_pin_messages</em>.</td></tr><tr><td>can_change_info</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if the user is allowed to change the chat title, photo and other settings. Ignored in public supergroups.</td></tr><tr><td>can_invite_users</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if the user is allowed to invite new users to the chat</td></tr><tr><td>can_pin_messages</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if the user is allowed to pin messages. Ignored in public supergroups.</td></tr><tr><td>can_manage_topics</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if the user is allowed to create forum topics. If omitted, defaults to the value of can_pin_messages.</td></tr></tbody></table>

#### Birthdate

Describes the birthdate of a user.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>day</td><td>Integer</td><td>Day of the user's birth; 1-31</td></tr><tr><td>month</td><td>Integer</td><td>Month of the user's birth; 1-12</td></tr><tr><td>year</td><td>Integer</td><td><em>Optional</em>. Year of the user's birth</td></tr></tbody></table>

#### BusinessIntro

Contains information about the start page settings of a Telegram Business account.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>title</td><td>String</td><td><em>Optional</em>. Title text of the business intro</td></tr><tr><td>message</td><td>String</td><td><em>Optional</em>. Message text of the business intro</td></tr><tr><td>sticker</td><td><a href="#sticker">Sticker</a></td><td><em>Optional</em>. Sticker of the business intro</td></tr></tbody></table>

#### BusinessLocation

Contains information about the location of a Telegram Business account.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>address</td><td>String</td><td>Address of the business</td></tr><tr><td>location</td><td><a href="#location">Location</a></td><td><em>Optional</em>. Location of the business</td></tr></tbody></table>

#### BusinessOpeningHoursInterval

Describes an interval of time during which a business is open.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>opening_minute</td><td>Integer</td><td>The minute's sequence number in a week, starting on Monday, marking the start of the time interval during which the business is open; 0 - 7 * 24 * 60</td></tr><tr><td>closing_minute</td><td>Integer</td><td>The minute's sequence number in a week, starting on Monday, marking the end of the time interval during which the business is open; 0 - 8 * 24 * 60</td></tr></tbody></table>

#### BusinessOpeningHours

Describes the opening hours of a business.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>time_zone_name</td><td>String</td><td>Unique name of the time zone for which the opening hours are defined</td></tr><tr><td>opening_hours</td><td>Array of <a href="#businessopeninghoursinterval">BusinessOpeningHoursInterval</a></td><td>List of time intervals describing business opening hours</td></tr></tbody></table>

#### UserRating

This object describes the rating of a user based on their Telegram Star spendings.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>level</td><td>Integer</td><td>Current level of the user, indicating their reliability when purchasing digital goods and services. A higher level suggests a more trustworthy customer; a negative level is likely reason for concern.</td></tr><tr><td>rating</td><td>Integer</td><td>Numerical value of the user's rating; the higher the rating, the better</td></tr><tr><td>current_level_rating</td><td>Integer</td><td>The rating value required to get the current level</td></tr><tr><td>next_level_rating</td><td>Integer</td><td><em>Optional</em>. The rating value required to get to the next level; omitted if the maximum level was reached</td></tr></tbody></table>

#### StoryAreaPosition

Describes the position of a clickable area within a story.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>x_percentage</td><td>Float</td><td>The abscissa of the area's center, as a percentage of the media width</td></tr><tr><td>y_percentage</td><td>Float</td><td>The ordinate of the area's center, as a percentage of the media height</td></tr><tr><td>width_percentage</td><td>Float</td><td>The width of the area's rectangle, as a percentage of the media width</td></tr><tr><td>height_percentage</td><td>Float</td><td>The height of the area's rectangle, as a percentage of the media height</td></tr><tr><td>rotation_angle</td><td>Float</td><td>The clockwise rotation angle of the rectangle, in degrees; 0-360</td></tr><tr><td>corner_radius_percentage</td><td>Float</td><td>The radius of the rectangle corner rounding, as a percentage of the media width</td></tr></tbody></table>

#### LocationAddress

Describes the physical address of a location.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>country_code</td><td>String</td><td>The two-letter ISO 3166-1 alpha-2 country code of the country where the location is located</td></tr><tr><td>state</td><td>String</td><td><em>Optional</em>. State of the location</td></tr><tr><td>city</td><td>String</td><td><em>Optional</em>. City of the location</td></tr><tr><td>street</td><td>String</td><td><em>Optional</em>. Street address of the location</td></tr></tbody></table>

#### StoryAreaType

Describes the type of a clickable area on a story. Currently, it can be one of

-   [StoryAreaTypeLocation](#storyareatypelocation)
-   [StoryAreaTypeSuggestedReaction](#storyareatypesuggestedreaction)
-   [StoryAreaTypeLink](#storyareatypelink)
-   [StoryAreaTypeWeather](#storyareatypeweather)
-   [StoryAreaTypeUniqueGift](#storyareatypeuniquegift)

#### StoryAreaTypeLocation

Describes a story area pointing to a location. Currently, a story can have up to 10 location areas.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the area, always “location”</td></tr><tr><td>latitude</td><td>Float</td><td>Location latitude in degrees</td></tr><tr><td>longitude</td><td>Float</td><td>Location longitude in degrees</td></tr><tr><td>address</td><td><a href="#locationaddress">LocationAddress</a></td><td><em>Optional</em>. Address of the location</td></tr></tbody></table>

#### StoryAreaTypeSuggestedReaction

Describes a story area pointing to a suggested reaction. Currently, a story can have up to 5 suggested reaction areas.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the area, always “suggested_reaction”</td></tr><tr><td>reaction_type</td><td><a href="#reactiontype">ReactionType</a></td><td>Type of the reaction</td></tr><tr><td>is_dark</td><td>Boolean</td><td><em>Optional</em>. Pass <em>True</em> if the reaction area has a dark background</td></tr><tr><td>is_flipped</td><td>Boolean</td><td><em>Optional</em>. Pass <em>True</em> if reaction area corner is flipped</td></tr></tbody></table>

#### StoryAreaTypeLink

Describes a story area pointing to an HTTP or tg:// link. Currently, a story can have up to 3 link areas.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the area, always “link”</td></tr><tr><td>url</td><td>String</td><td>HTTP or tg:// URL to be opened when the area is clicked</td></tr></tbody></table>

#### StoryAreaTypeWeather

Describes a story area containing weather information. Currently, a story can have up to 3 weather areas.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the area, always “weather”</td></tr><tr><td>temperature</td><td>Float</td><td>Temperature, in degree Celsius</td></tr><tr><td>emoji</td><td>String</td><td>Emoji representing the weather</td></tr><tr><td>background_color</td><td>Integer</td><td>A color of the area background in the ARGB format</td></tr></tbody></table>

#### StoryAreaTypeUniqueGift

Describes a story area pointing to a unique gift. Currently, a story can have at most 1 unique gift area.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the area, always “unique_gift”</td></tr><tr><td>name</td><td>String</td><td>Unique name of the gift</td></tr></tbody></table>

#### StoryArea

Describes a clickable area on a story media.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>position</td><td><a href="#storyareaposition">StoryAreaPosition</a></td><td>Position of the area</td></tr><tr><td>type</td><td><a href="#storyareatype">StoryAreaType</a></td><td>Type of the area</td></tr></tbody></table>

#### ChatLocation

Represents a location to which a chat is connected.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>location</td><td><a href="#location">Location</a></td><td>The location to which the supergroup is connected. Can't be a live location.</td></tr><tr><td>address</td><td>String</td><td>Location address; 1-64 characters, as defined by the chat owner</td></tr></tbody></table>

#### ReactionType

This object describes the type of a reaction. Currently, it can be one of

-   [ReactionTypeEmoji](#reactiontypeemoji)
-   [ReactionTypeCustomEmoji](#reactiontypecustomemoji)
-   [ReactionTypePaid](#reactiontypepaid)

#### ReactionTypeEmoji

The reaction is based on an emoji.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the reaction, always “emoji”</td></tr><tr><td>emoji</td><td>String</td><td>Reaction emoji. Currently, it can be one of "<img class="emoji" src="https://telegram.org/img/emoji/40/E29DA4.png" width="20" height="20" alt="❤">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F918D.png" width="20" height="20" alt="👍">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F918E.png" width="20" height="20" alt="👎">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F94A5.png" width="20" height="20" alt="🔥">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09FA5B0.png" width="20" height="20" alt="🥰">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F918F.png" width="20" height="20" alt="👏">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F9881.png" width="20" height="20" alt="😁">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09FA494.png" width="20" height="20" alt="🤔">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09FA4AF.png" width="20" height="20" alt="🤯">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F98B1.png" width="20" height="20" alt="😱">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09FA4AC.png" width="20" height="20" alt="🤬">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F98A2.png" width="20" height="20" alt="😢">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F8E89.png" width="20" height="20" alt="🎉">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09FA4A9.png" width="20" height="20" alt="🤩">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09FA4AE.png" width="20" height="20" alt="🤮">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F92A9.png" width="20" height="20" alt="💩">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F998F.png" width="20" height="20" alt="🙏">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F918C.png" width="20" height="20" alt="👌">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F958A.png" width="20" height="20" alt="🕊">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09FA4A1.png" width="20" height="20" alt="🤡">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09FA5B1.png" width="20" height="20" alt="🥱">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09FA5B4.png" width="20" height="20" alt="🥴">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F988D.png" width="20" height="20" alt="😍">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F90B3.png" width="20" height="20" alt="🐳">", "<img class="emoji" src="https://telegram.org/img/emoji/40/E29DA4E2808DF09F94A5.png" width="20" height="20" alt="❤‍🔥">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F8C9A.png" width="20" height="20" alt="🌚">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F8CAD.png" width="20" height="20" alt="🌭">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F92AF.png" width="20" height="20" alt="💯">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09FA4A3.png" width="20" height="20" alt="🤣">", "<img class="emoji" src="https://telegram.org/img/emoji/40/E29AA1.png" width="20" height="20" alt="⚡">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F8D8C.png" width="20" height="20" alt="🍌">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F8F86.png" width="20" height="20" alt="🏆">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F9294.png" width="20" height="20" alt="💔">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09FA4A8.png" width="20" height="20" alt="🤨">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F9890.png" width="20" height="20" alt="😐">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F8D93.png" width="20" height="20" alt="🍓">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F8DBE.png" width="20" height="20" alt="🍾">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F928B.png" width="20" height="20" alt="💋">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F9695.png" width="20" height="20" alt="🖕">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F9888.png" width="20" height="20" alt="😈">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F98B4.png" width="20" height="20" alt="😴">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F98AD.png" width="20" height="20" alt="😭">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09FA493.png" width="20" height="20" alt="🤓">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F91BB.png" width="20" height="20" alt="👻">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F91A8E2808DF09F92BB.png" width="20" height="20" alt="👨‍💻">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F9180.png" width="20" height="20" alt="👀">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F8E83.png" width="20" height="20" alt="🎃">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F9988.png" width="20" height="20" alt="🙈">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F9887.png" width="20" height="20" alt="😇">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F98A8.png" width="20" height="20" alt="😨">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09FA49D.png" width="20" height="20" alt="🤝">", "<img class="emoji" src="https://telegram.org/img/emoji/40/E29C8D.png" width="20" height="20" alt="✍">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09FA497.png" width="20" height="20" alt="🤗">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09FABA1.png" width="20" height="20" alt="🫡">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F8E85.png" width="20" height="20" alt="🎅">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F8E84.png" width="20" height="20" alt="🎄">", "<img class="emoji" src="https://telegram.org/img/emoji/40/E29883.png" width="20" height="20" alt="☃">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F9285.png" width="20" height="20" alt="💅">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09FA4AA.png" width="20" height="20" alt="🤪">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F97BF.png" width="20" height="20" alt="🗿">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F8692.png" width="20" height="20" alt="🆒">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F9298.png" width="20" height="20" alt="💘">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F9989.png" width="20" height="20" alt="🙉">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09FA684.png" width="20" height="20" alt="🦄">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F9898.png" width="20" height="20" alt="😘">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F928A.png" width="20" height="20" alt="💊">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F998A.png" width="20" height="20" alt="🙊">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F988E.png" width="20" height="20" alt="😎">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F91BE.png" width="20" height="20" alt="👾">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09FA4B7E2808DE29982.png" width="20" height="20" alt="🤷‍♂">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09FA4B7.png" width="20" height="20" alt="🤷">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09FA4B7E2808DE29980.png" width="20" height="20" alt="🤷‍♀">", "<img class="emoji" src="https://telegram.org/img/emoji/40/F09F98A1.png" width="20" height="20" alt="😡">".</td></tr></tbody></table>

#### ReactionTypeCustomEmoji

The reaction is based on a custom emoji.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the reaction, always “custom_emoji”</td></tr><tr><td>custom_emoji_id</td><td>String</td><td>Custom emoji identifier</td></tr></tbody></table>

#### ReactionTypePaid

The reaction is paid.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the reaction, always “paid”</td></tr></tbody></table>

#### ReactionCount

Represents a reaction added to a message along with the number of times it was added.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td><a href="#reactiontype">ReactionType</a></td><td>Type of the reaction</td></tr><tr><td>total_count</td><td>Integer</td><td>Number of times the reaction was added</td></tr></tbody></table>

#### MessageReactionUpdated

This object represents a change of a reaction on a message performed by a user.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat</td><td><a href="#chat">Chat</a></td><td>The chat containing the message the user reacted to</td></tr><tr><td>message_id</td><td>Integer</td><td>Unique identifier of the message inside the chat</td></tr><tr><td>user</td><td><a href="#user">User</a></td><td><em>Optional</em>. The user that changed the reaction, if the user isn't anonymous</td></tr><tr><td>actor_chat</td><td><a href="#chat">Chat</a></td><td><em>Optional</em>. The chat on behalf of which the reaction was changed, if the user is anonymous</td></tr><tr><td>date</td><td>Integer</td><td>Date of the change in Unix time</td></tr><tr><td>old_reaction</td><td>Array of <a href="#reactiontype">ReactionType</a></td><td>Previous list of reaction types that were set by the user</td></tr><tr><td>new_reaction</td><td>Array of <a href="#reactiontype">ReactionType</a></td><td>New list of reaction types that have been set by the user</td></tr></tbody></table>

#### MessageReactionCountUpdated

This object represents reaction changes on a message with anonymous reactions.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat</td><td><a href="#chat">Chat</a></td><td>The chat containing the message</td></tr><tr><td>message_id</td><td>Integer</td><td>Unique message identifier inside the chat</td></tr><tr><td>date</td><td>Integer</td><td>Date of the change in Unix time</td></tr><tr><td>reactions</td><td>Array of <a href="#reactioncount">ReactionCount</a></td><td>List of reactions that are present on the message</td></tr></tbody></table>

#### ForumTopic

This object represents a forum topic.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>message_thread_id</td><td>Integer</td><td>Unique identifier of the forum topic</td></tr><tr><td>name</td><td>String</td><td>Name of the topic</td></tr><tr><td>icon_color</td><td>Integer</td><td>Color of the topic icon in RGB format</td></tr><tr><td>icon_custom_emoji_id</td><td>String</td><td><em>Optional</em>. Unique identifier of the custom emoji shown as the topic icon</td></tr><tr><td>is_name_implicit</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the name of the topic wasn't specified explicitly by its creator and likely needs to be changed by the bot</td></tr></tbody></table>

#### GiftBackground

This object describes the background of a gift.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>center_color</td><td>Integer</td><td>Center color of the background in RGB format</td></tr><tr><td>edge_color</td><td>Integer</td><td>Edge color of the background in RGB format</td></tr><tr><td>text_color</td><td>Integer</td><td>Text color of the background in RGB format</td></tr></tbody></table>

#### Gift

This object represents a gift that can be sent by the bot.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>id</td><td>String</td><td>Unique identifier of the gift</td></tr><tr><td>sticker</td><td><a href="#sticker">Sticker</a></td><td>The sticker that represents the gift</td></tr><tr><td>star_count</td><td>Integer</td><td>The number of Telegram Stars that must be paid to send the sticker</td></tr><tr><td>upgrade_star_count</td><td>Integer</td><td><em>Optional</em>. The number of Telegram Stars that must be paid to upgrade the gift to a unique one</td></tr><tr><td>is_premium</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the gift can only be purchased by Telegram Premium subscribers</td></tr><tr><td>has_colors</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the gift can be used (after being upgraded) to customize a user's appearance</td></tr><tr><td>total_count</td><td>Integer</td><td><em>Optional</em>. The total number of gifts of this type that can be sent by all users; for limited gifts only</td></tr><tr><td>remaining_count</td><td>Integer</td><td><em>Optional</em>. The number of remaining gifts of this type that can be sent by all users; for limited gifts only</td></tr><tr><td>personal_total_count</td><td>Integer</td><td><em>Optional</em>. The total number of gifts of this type that can be sent by the bot; for limited gifts only</td></tr><tr><td>personal_remaining_count</td><td>Integer</td><td><em>Optional</em>. The number of remaining gifts of this type that can be sent by the bot; for limited gifts only</td></tr><tr><td>background</td><td><a href="#giftbackground">GiftBackground</a></td><td><em>Optional</em>. Background of the gift</td></tr><tr><td>unique_gift_variant_count</td><td>Integer</td><td><em>Optional</em>. The total number of different unique gifts that can be obtained by upgrading the gift</td></tr><tr><td>publisher_chat</td><td><a href="#chat">Chat</a></td><td><em>Optional</em>. Information about the chat that published the gift</td></tr></tbody></table>

#### Gifts

This object represent a list of gifts.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>gifts</td><td>Array of <a href="#gift">Gift</a></td><td>The list of gifts</td></tr></tbody></table>

#### UniqueGiftModel

This object describes the model of a unique gift.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>name</td><td>String</td><td>Name of the model</td></tr><tr><td>sticker</td><td><a href="#sticker">Sticker</a></td><td>The sticker that represents the unique gift</td></tr><tr><td>rarity_per_mille</td><td>Integer</td><td>The number of unique gifts that receive this model for every 1000 gift upgrades. Always 0 for crafted gifts.</td></tr><tr><td>rarity</td><td>String</td><td><em>Optional</em>. Rarity of the model if it is a crafted model. Currently, can be “uncommon”, “rare”, “epic”, or “legendary”.</td></tr></tbody></table>

#### UniqueGiftSymbol

This object describes the symbol shown on the pattern of a unique gift.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>name</td><td>String</td><td>Name of the symbol</td></tr><tr><td>sticker</td><td><a href="#sticker">Sticker</a></td><td>The sticker that represents the unique gift</td></tr><tr><td>rarity_per_mille</td><td>Integer</td><td>The number of unique gifts that receive this model for every 1000 gifts upgraded</td></tr></tbody></table>

#### UniqueGiftBackdropColors

This object describes the colors of the backdrop of a unique gift.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>center_color</td><td>Integer</td><td>The color in the center of the backdrop in RGB format</td></tr><tr><td>edge_color</td><td>Integer</td><td>The color on the edges of the backdrop in RGB format</td></tr><tr><td>symbol_color</td><td>Integer</td><td>The color to be applied to the symbol in RGB format</td></tr><tr><td>text_color</td><td>Integer</td><td>The color for the text on the backdrop in RGB format</td></tr></tbody></table>

#### UniqueGiftBackdrop

This object describes the backdrop of a unique gift.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>name</td><td>String</td><td>Name of the backdrop</td></tr><tr><td>colors</td><td><a href="#uniquegiftbackdropcolors">UniqueGiftBackdropColors</a></td><td>Colors of the backdrop</td></tr><tr><td>rarity_per_mille</td><td>Integer</td><td>The number of unique gifts that receive this backdrop for every 1000 gifts upgraded</td></tr></tbody></table>

#### UniqueGiftColors

This object contains information about the color scheme for a user's name, message replies and link previews based on a unique gift.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>model_custom_emoji_id</td><td>String</td><td>Custom emoji identifier of the unique gift's model</td></tr><tr><td>symbol_custom_emoji_id</td><td>String</td><td>Custom emoji identifier of the unique gift's symbol</td></tr><tr><td>light_theme_main_color</td><td>Integer</td><td>Main color used in light themes; RGB format</td></tr><tr><td>light_theme_other_colors</td><td>Array of Integer</td><td>List of 1-3 additional colors used in light themes; RGB format</td></tr><tr><td>dark_theme_main_color</td><td>Integer</td><td>Main color used in dark themes; RGB format</td></tr><tr><td>dark_theme_other_colors</td><td>Array of Integer</td><td>List of 1-3 additional colors used in dark themes; RGB format</td></tr></tbody></table>

#### UniqueGift

This object describes a unique gift that was upgraded from a regular gift.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>gift_id</td><td>String</td><td>Identifier of the regular gift from which the gift was upgraded</td></tr><tr><td>base_name</td><td>String</td><td>Human-readable name of the regular gift from which this unique gift was upgraded</td></tr><tr><td>name</td><td>String</td><td>Unique name of the gift. This name can be used in <code>https://t.me/nft/...</code> links and story areas.</td></tr><tr><td>number</td><td>Integer</td><td>Unique number of the upgraded gift among gifts upgraded from the same regular gift</td></tr><tr><td>model</td><td><a href="#uniquegiftmodel">UniqueGiftModel</a></td><td>Model of the gift</td></tr><tr><td>symbol</td><td><a href="#uniquegiftsymbol">UniqueGiftSymbol</a></td><td>Symbol of the gift</td></tr><tr><td>backdrop</td><td><a href="#uniquegiftbackdrop">UniqueGiftBackdrop</a></td><td>Backdrop of the gift</td></tr><tr><td>is_premium</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the original regular gift was exclusively purchaseable by Telegram Premium subscribers</td></tr><tr><td>is_burned</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the gift was used to craft another gift and isn't available anymore</td></tr><tr><td>is_from_blockchain</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the gift is assigned from the TON blockchain and can't be resold or transferred in Telegram</td></tr><tr><td>colors</td><td><a href="#uniquegiftcolors">UniqueGiftColors</a></td><td><em>Optional</em>. The color scheme that can be used by the gift's owner for the chat's name, replies to messages and link previews; for business account gifts and gifts that are currently on sale only</td></tr><tr><td>publisher_chat</td><td><a href="#chat">Chat</a></td><td><em>Optional</em>. Information about the chat that published the gift</td></tr></tbody></table>

#### GiftInfo

Describes a service message about a regular gift that was sent or received.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>gift</td><td><a href="#gift">Gift</a></td><td>Information about the gift</td></tr><tr><td>owned_gift_id</td><td>String</td><td><em>Optional</em>. Unique identifier of the received gift for the bot; only present for gifts received on behalf of business accounts</td></tr><tr><td>convert_star_count</td><td>Integer</td><td><em>Optional</em>. Number of Telegram Stars that can be claimed by the receiver by converting the gift; omitted if conversion to Telegram Stars is impossible</td></tr><tr><td>prepaid_upgrade_star_count</td><td>Integer</td><td><em>Optional</em>. Number of Telegram Stars that were prepaid for the ability to upgrade the gift</td></tr><tr><td>is_upgrade_separate</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the gift's upgrade was purchased after the gift was sent</td></tr><tr><td>can_be_upgraded</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the gift can be upgraded to a unique gift</td></tr><tr><td>text</td><td>String</td><td><em>Optional</em>. Text of the message that was added to the gift</td></tr><tr><td>entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td><em>Optional</em>. Special entities that appear in the text</td></tr><tr><td>is_private</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the sender and gift text are shown only to the gift receiver; otherwise, everyone will be able to see them</td></tr><tr><td>unique_gift_number</td><td>Integer</td><td><em>Optional</em>. Unique number reserved for this gift when upgraded. See the <em>number</em> field in <a href="#uniquegift">UniqueGift</a>.</td></tr></tbody></table>

#### UniqueGiftInfo

Describes a service message about a unique gift that was sent or received.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>gift</td><td><a href="#uniquegift">UniqueGift</a></td><td>Information about the gift</td></tr><tr><td>origin</td><td>String</td><td>Origin of the gift. Currently, either “upgrade” for gifts upgraded from regular gifts, “transfer” for gifts transferred from other users or channels, “resale” for gifts bought from other users, “gifted_upgrade” for upgrades purchased after the gift was sent, or “offer” for gifts bought or sold through gift purchase offers.</td></tr><tr><td>last_resale_currency</td><td>String</td><td><em>Optional</em>. For gifts bought from other users, the currency in which the payment for the gift was done. Currently, one of “XTR” for Telegram Stars or “TON” for TON grams.</td></tr><tr><td>last_resale_amount</td><td>Integer</td><td><em>Optional</em>. For gifts bought from other users, the price paid for the gift in either Telegram Stars or nanograms</td></tr><tr><td>owned_gift_id</td><td>String</td><td><em>Optional</em>. Unique identifier of the received gift for the bot; only present for gifts received on behalf of business accounts</td></tr><tr><td>transfer_star_count</td><td>Integer</td><td><em>Optional</em>. Number of Telegram Stars that must be paid to transfer the gift; omitted if the bot cannot transfer the gift</td></tr><tr><td>next_transfer_date</td><td>Integer</td><td><em>Optional</em>. Point in time (Unix timestamp) when the gift can be transferred. If it is in the past, then the gift can be transferred now.</td></tr></tbody></table>

#### OwnedGift

This object describes a gift received and owned by a user or a chat. Currently, it can be one of

-   [OwnedGiftRegular](#ownedgiftregular)
-   [OwnedGiftUnique](#ownedgiftunique)

#### OwnedGiftRegular

Describes a regular gift owned by a user or a chat.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the gift, always “regular”</td></tr><tr><td>gift</td><td><a href="#gift">Gift</a></td><td>Information about the regular gift</td></tr><tr><td>owned_gift_id</td><td>String</td><td><em>Optional</em>. Unique identifier of the gift for the bot; for gifts received on behalf of business accounts only</td></tr><tr><td>sender_user</td><td><a href="#user">User</a></td><td><em>Optional</em>. Sender of the gift if it is a known user</td></tr><tr><td>send_date</td><td>Integer</td><td>Date the gift was sent in Unix time</td></tr><tr><td>text</td><td>String</td><td><em>Optional</em>. Text of the message that was added to the gift</td></tr><tr><td>entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td><em>Optional</em>. Special entities that appear in the text</td></tr><tr><td>is_private</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the sender and gift text are shown only to the gift receiver; otherwise, everyone will be able to see them</td></tr><tr><td>is_saved</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the gift is displayed on the account's profile page; for gifts received on behalf of business accounts only</td></tr><tr><td>can_be_upgraded</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the gift can be upgraded to a unique gift; for gifts received on behalf of business accounts only</td></tr><tr><td>was_refunded</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the gift was refunded and isn't available anymore</td></tr><tr><td>convert_star_count</td><td>Integer</td><td><em>Optional</em>. Number of Telegram Stars that can be claimed by the receiver instead of the gift; omitted if the gift cannot be converted to Telegram Stars; for gifts received on behalf of business accounts only</td></tr><tr><td>prepaid_upgrade_star_count</td><td>Integer</td><td><em>Optional</em>. Number of Telegram Stars that were paid for the ability to upgrade the gift</td></tr><tr><td>is_upgrade_separate</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the gift's upgrade was purchased after the gift was sent; for gifts received on behalf of business accounts only</td></tr><tr><td>unique_gift_number</td><td>Integer</td><td><em>Optional</em>. Unique number reserved for this gift when upgraded. See the <em>number</em> field in <a href="#uniquegift">UniqueGift</a>.</td></tr></tbody></table>

#### OwnedGiftUnique

Describes a unique gift received and owned by a user or a chat.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the gift, always “unique”</td></tr><tr><td>gift</td><td><a href="#uniquegift">UniqueGift</a></td><td>Information about the unique gift</td></tr><tr><td>owned_gift_id</td><td>String</td><td><em>Optional</em>. Unique identifier of the received gift for the bot; for gifts received on behalf of business accounts only</td></tr><tr><td>sender_user</td><td><a href="#user">User</a></td><td><em>Optional</em>. Sender of the gift if it is a known user</td></tr><tr><td>send_date</td><td>Integer</td><td>Date the gift was sent in Unix time</td></tr><tr><td>is_saved</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the gift is displayed on the account's profile page; for gifts received on behalf of business accounts only</td></tr><tr><td>can_be_transferred</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the gift can be transferred to another owner; for gifts received on behalf of business accounts only</td></tr><tr><td>transfer_star_count</td><td>Integer</td><td><em>Optional</em>. Number of Telegram Stars that must be paid to transfer the gift; omitted if the bot cannot transfer the gift</td></tr><tr><td>next_transfer_date</td><td>Integer</td><td><em>Optional</em>. Point in time (Unix timestamp) when the gift can be transferred. If it is in the past, then the gift can be transferred now.</td></tr></tbody></table>

#### OwnedGifts

Contains the list of gifts received and owned by a user or a chat.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>total_count</td><td>Integer</td><td>The total number of gifts owned by the user or the chat</td></tr><tr><td>gifts</td><td>Array of <a href="#ownedgift">OwnedGift</a></td><td>The list of gifts</td></tr><tr><td>next_offset</td><td>String</td><td><em>Optional</em>. Offset for the next request. If empty, then there are no more results.</td></tr></tbody></table>

#### BotAccessSettings

This object describes the access settings of a bot.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>is_access_restricted</td><td>Boolean</td><td><em>True</em>, if only selected users can access the bot. The bot's owner can always access it.</td></tr><tr><td>added_users</td><td>Array of <a href="#user">User</a></td><td><em>Optional</em>. The list of other users who have access to the bot if the access is restricted</td></tr></tbody></table>

#### AcceptedGiftTypes

This object describes the types of gifts that can be gifted to a user or a chat.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>unlimited_gifts</td><td>Boolean</td><td><em>True</em>, if unlimited regular gifts are accepted</td></tr><tr><td>limited_gifts</td><td>Boolean</td><td><em>True</em>, if limited regular gifts are accepted</td></tr><tr><td>unique_gifts</td><td>Boolean</td><td><em>True</em>, if unique gifts or gifts that can be upgraded to unique for free are accepted</td></tr><tr><td>premium_subscription</td><td>Boolean</td><td><em>True</em>, if a Telegram Premium subscription is accepted</td></tr><tr><td>gifts_from_channels</td><td>Boolean</td><td><em>True</em>, if transfers of unique gifts from channels are accepted</td></tr></tbody></table>

#### StarAmount

Describes an amount of Telegram Stars.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>amount</td><td>Integer</td><td>Integer amount of Telegram Stars, rounded to 0; can be negative</td></tr><tr><td>nanostar_amount</td><td>Integer</td><td><em>Optional</em>. The number of 1/1000000000 shares of Telegram Stars; from -999999999 to 999999999; can be negative if and only if <em>amount</em> is non-positive</td></tr></tbody></table>

#### BotCommand

This object represents a bot command.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>command</td><td>String</td><td>Text of the command; 1-32 characters. Can contain only lowercase English letters, digits and underscores.</td></tr><tr><td>description</td><td>String</td><td>Description of the command; 1-256 characters</td></tr><tr><td>is_ephemeral</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if the command sends an ephemeral message, which can be seen only by the sender of the message and the bot</td></tr></tbody></table>

#### BotCommandScope

This object represents the scope to which bot commands are applied. Currently, the following 7 scopes are supported:

-   [BotCommandScopeDefault](#botcommandscopedefault)
-   [BotCommandScopeAllPrivateChats](#botcommandscopeallprivatechats)
-   [BotCommandScopeAllGroupChats](#botcommandscopeallgroupchats)
-   [BotCommandScopeAllChatAdministrators](#botcommandscopeallchatadministrators)
-   [BotCommandScopeChat](#botcommandscopechat)
-   [BotCommandScopeChatAdministrators](#botcommandscopechatadministrators)
-   [BotCommandScopeChatMember](#botcommandscopechatmember)

#### Determining list of commands

The following algorithm is used to determine the list of commands for a particular user viewing the bot menu. The first list of commands which is set is returned:

**Commands in the chat with the bot**

-   botCommandScopeChat + language\_code
-   botCommandScopeChat
-   botCommandScopeAllPrivateChats + language\_code
-   botCommandScopeAllPrivateChats
-   botCommandScopeDefault + language\_code
-   botCommandScopeDefault

**Commands in group and supergroup chats**

-   botCommandScopeChatMember + language\_code
-   botCommandScopeChatMember
-   botCommandScopeChatAdministrators + language\_code (administrators only)
-   botCommandScopeChatAdministrators (administrators only)
-   botCommandScopeChat + language\_code
-   botCommandScopeChat
-   botCommandScopeAllChatAdministrators + language\_code (administrators only)
-   botCommandScopeAllChatAdministrators (administrators only)
-   botCommandScopeAllGroupChats + language\_code
-   botCommandScopeAllGroupChats
-   botCommandScopeDefault + language\_code
-   botCommandScopeDefault

#### BotCommandScopeDefault

Represents the default [scope](#botcommandscope) of bot commands. Default commands are used if no commands with a [narrower scope](#determining-list-of-commands) are specified for the user.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Scope type, must be <em>default</em></td></tr></tbody></table>

#### BotCommandScopeAllPrivateChats

Represents the [scope](#botcommandscope) of bot commands, covering all private chats.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Scope type, must be <em>all_private_chats</em></td></tr></tbody></table>

#### BotCommandScopeAllGroupChats

Represents the [scope](#botcommandscope) of bot commands, covering all group and supergroup chats.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Scope type, must be <em>all_group_chats</em></td></tr></tbody></table>

#### BotCommandScopeAllChatAdministrators

Represents the [scope](#botcommandscope) of bot commands, covering all group and supergroup chat administrators.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Scope type, must be <em>all_chat_administrators</em></td></tr></tbody></table>

#### BotCommandScopeChat

Represents the [scope](#botcommandscope) of bot commands, covering a specific chat.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Scope type, must be <em>chat</em></td></tr><tr><td>chat_id</td><td>Integer or String</td><td>Unique identifier for the target chat or username of the target supergroup in the format <code>@username</code>. Channel direct messages chats and channel chats aren't supported.</td></tr></tbody></table>

#### BotCommandScopeChatAdministrators

Represents the [scope](#botcommandscope) of bot commands, covering all administrators of a specific group or supergroup chat.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Scope type, must be <em>chat_administrators</em></td></tr><tr><td>chat_id</td><td>Integer or String</td><td>Unique identifier for the target chat or username of the target supergroup in the format <code>@username</code>. Channel direct messages chats and channel chats aren't supported.</td></tr></tbody></table>

#### BotCommandScopeChatMember

Represents the [scope](#botcommandscope) of bot commands, covering a specific member of a group or supergroup chat.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Scope type, must be <em>chat_member</em></td></tr><tr><td>chat_id</td><td>Integer or String</td><td>Unique identifier for the target chat or username of the target supergroup in the format <code>@username</code>. Channel direct messages chats and channel chats aren't supported.</td></tr><tr><td>user_id</td><td>Integer</td><td>Unique identifier of the target user</td></tr></tbody></table>

#### BotName

This object represents the bot's name.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>name</td><td>String</td><td>The bot's name</td></tr></tbody></table>

#### BotDescription

This object represents the bot's description.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>description</td><td>String</td><td>The bot's description</td></tr></tbody></table>

#### BotShortDescription

This object represents the bot's short description.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>short_description</td><td>String</td><td>The bot's short description</td></tr></tbody></table>

#### MenuButton

This object describes the bot's menu button in a private chat. It should be one of

-   [MenuButtonCommands](#menubuttoncommands)
-   [MenuButtonWebApp](#menubuttonwebapp)
-   [MenuButtonDefault](#menubuttondefault)

If a menu button other than [MenuButtonDefault](#menubuttondefault) is set for a private chat, then it is applied in the chat. Otherwise the default menu button is applied. By default, the menu button opens the list of bot commands.

#### MenuButtonCommands

Represents a menu button, which opens the bot's list of commands.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the button, must be <em>commands</em></td></tr></tbody></table>

#### MenuButtonWebApp

Represents a menu button, which launches a [Web App](/bots/webapps/).

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the button, must be <em>web_app</em></td></tr><tr><td>text</td><td>String</td><td>Text on the button</td></tr><tr><td>web_app</td><td><a href="#webappinfo">WebAppInfo</a></td><td>Description of the Web App that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method <a href="#answerwebappquery">answerWebAppQuery</a>. Alternatively, a <code>t.me</code> link to a Web App of the bot can be specified in the object instead of the Web App's URL, in which case the Web App will be opened as if the user pressed the link.</td></tr></tbody></table>

#### MenuButtonDefault

Describes that no specific value for the menu button was set.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the button, must be <em>default</em></td></tr></tbody></table>

#### ChatBoostSource

This object describes the source of a chat boost. It can be one of

-   [ChatBoostSourcePremium](#chatboostsourcepremium)
-   [ChatBoostSourceGiftCode](#chatboostsourcegiftcode)
-   [ChatBoostSourceGiveaway](#chatboostsourcegiveaway)

#### ChatBoostSourcePremium

The boost was obtained by subscribing to Telegram Premium or by gifting a Telegram Premium subscription to another user.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>source</td><td>String</td><td>Source of the boost, always “premium”</td></tr><tr><td>user</td><td><a href="#user">User</a></td><td>User that boosted the chat</td></tr></tbody></table>

#### ChatBoostSourceGiftCode

The boost was obtained by the creation of Telegram Premium gift codes to boost a chat. Each such code boosts the chat 4 times for the duration of the corresponding Telegram Premium subscription.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>source</td><td>String</td><td>Source of the boost, always “gift_code”</td></tr><tr><td>user</td><td><a href="#user">User</a></td><td>User for which the gift code was created</td></tr></tbody></table>

#### ChatBoostSourceGiveaway

The boost was obtained by the creation of a Telegram Premium or a Telegram Star giveaway. This boosts the chat 4 times for the duration of the corresponding Telegram Premium subscription for Telegram Premium giveaways and _prize\_star\_count_ / 500 times for one year for Telegram Star giveaways.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>source</td><td>String</td><td>Source of the boost, always “giveaway”</td></tr><tr><td>giveaway_message_id</td><td>Integer</td><td>Identifier of a message in the chat with the giveaway; the message could have been deleted already. May be 0 if the message isn't sent yet.</td></tr><tr><td>user</td><td><a href="#user">User</a></td><td><em>Optional</em>. User that won the prize in the giveaway if any; for Telegram Premium giveaways only</td></tr><tr><td>prize_star_count</td><td>Integer</td><td><em>Optional</em>. The number of Telegram Stars to be split between giveaway winners; for Telegram Star giveaways only</td></tr><tr><td>is_unclaimed</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the giveaway was completed, but there was no user to win the prize</td></tr></tbody></table>

#### ChatBoost

This object contains information about a chat boost.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>boost_id</td><td>String</td><td>Unique identifier of the boost</td></tr><tr><td>add_date</td><td>Integer</td><td>Point in time (Unix timestamp) when the chat was boosted</td></tr><tr><td>expiration_date</td><td>Integer</td><td>Point in time (Unix timestamp) when the boost will automatically expire, unless the booster's Telegram Premium subscription is prolonged</td></tr><tr><td>source</td><td><a href="#chatboostsource">ChatBoostSource</a></td><td>Source of the added boost</td></tr></tbody></table>

#### ChatBoostUpdated

This object represents a boost added to a chat or changed.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat</td><td><a href="#chat">Chat</a></td><td>Chat which was boosted</td></tr><tr><td>boost</td><td><a href="#chatboost">ChatBoost</a></td><td>Information about the chat boost</td></tr></tbody></table>

#### ChatBoostRemoved

This object represents a boost removed from a chat.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat</td><td><a href="#chat">Chat</a></td><td>Chat which was boosted</td></tr><tr><td>boost_id</td><td>String</td><td>Unique identifier of the boost</td></tr><tr><td>remove_date</td><td>Integer</td><td>Point in time (Unix timestamp) when the boost was removed</td></tr><tr><td>source</td><td><a href="#chatboostsource">ChatBoostSource</a></td><td>Source of the removed boost</td></tr></tbody></table>

#### ChatOwnerLeft

Describes a service message about the chat owner leaving the chat.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>new_owner</td><td><a href="#user">User</a></td><td><em>Optional</em>. The user who will become the new owner of the chat if the previous owner does not return to the chat</td></tr></tbody></table>

#### ChatOwnerChanged

Describes a service message about an ownership change in the chat.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>new_owner</td><td><a href="#user">User</a></td><td>The new owner of the chat</td></tr></tbody></table>

#### UserChatBoosts

This object represents a list of boosts added to a chat by a user.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>boosts</td><td>Array of <a href="#chatboost">ChatBoost</a></td><td>The list of boosts added to the chat by the user</td></tr></tbody></table>

#### BusinessBotRights

Represents the rights of a business bot.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>can_reply</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the bot can send and edit messages in the private chats that had incoming messages in the last 24 hours</td></tr><tr><td>can_read_messages</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the bot can mark incoming private messages as read</td></tr><tr><td>can_delete_sent_messages</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the bot can delete messages sent by the bot</td></tr><tr><td>can_delete_all_messages</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the bot can delete all private messages in managed chats</td></tr><tr><td>can_edit_name</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the bot can edit the first and last name of the business account</td></tr><tr><td>can_edit_bio</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the bot can edit the bio of the business account</td></tr><tr><td>can_edit_profile_photo</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the bot can edit the profile photo of the business account</td></tr><tr><td>can_edit_username</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the bot can edit the username of the business account</td></tr><tr><td>can_change_gift_settings</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the bot can change the privacy settings pertaining to gifts for the business account</td></tr><tr><td>can_view_gifts_and_stars</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the bot can view gifts and the amount of Telegram Stars owned by the business account</td></tr><tr><td>can_convert_gifts_to_stars</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the bot can convert regular gifts owned by the business account to Telegram Stars</td></tr><tr><td>can_transfer_and_upgrade_gifts</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the bot can transfer and upgrade gifts owned by the business account</td></tr><tr><td>can_transfer_stars</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the bot can transfer Telegram Stars received by the business account to its own account, or use them to upgrade and transfer gifts</td></tr><tr><td>can_manage_stories</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the bot can post, edit and delete stories on behalf of the business account</td></tr></tbody></table>

#### BusinessConnection

Describes the connection of the bot with a business account.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>id</td><td>String</td><td>Unique identifier of the business connection</td></tr><tr><td>user</td><td><a href="#user">User</a></td><td>Business account user that created the business connection</td></tr><tr><td>user_chat_id</td><td>Integer</td><td>Identifier of a private chat with the user who created the business connection. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier.</td></tr><tr><td>date</td><td>Integer</td><td>Date the connection was established in Unix time</td></tr><tr><td>rights</td><td><a href="#businessbotrights">BusinessBotRights</a></td><td><em>Optional</em>. Rights of the business bot</td></tr><tr><td>is_enabled</td><td>Boolean</td><td><em>True</em>, if the connection is active</td></tr></tbody></table>

#### BusinessMessagesDeleted

This object is received when messages are deleted from a connected business account.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Unique identifier of the business connection</td></tr><tr><td>chat</td><td><a href="#chat">Chat</a></td><td>Information about a chat in the business account. The bot may not have access to the chat or the corresponding user.</td></tr><tr><td>message_ids</td><td>Array of Integer</td><td>The list of identifiers of deleted messages in the chat of the business account</td></tr></tbody></table>

#### SentWebAppMessage

Describes an inline message sent by a [Web App](/bots/webapps/) on behalf of a user.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>inline_message_id</td><td>String</td><td><em>Optional</em>. Identifier of the sent inline message. Available only if there is an <a href="#inlinekeyboardmarkup">inline keyboard</a> attached to the message.</td></tr></tbody></table>

#### SentGuestMessage

Describes an inline message sent by a guest bot.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>inline_message_id</td><td>String</td><td>Identifier of the sent inline message</td></tr></tbody></table>

#### PreparedInlineMessage

Describes an inline message to be sent by a user of a Mini App.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>id</td><td>String</td><td>Unique identifier of the prepared message</td></tr><tr><td>expiration_date</td><td>Integer</td><td>Expiration date of the prepared message, in Unix time. Expired prepared messages can no longer be used.</td></tr></tbody></table>

#### PreparedKeyboardButton

Describes a keyboard button to be used by a user of a Mini App.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>id</td><td>String</td><td>Unique identifier of the keyboard button</td></tr></tbody></table>

#### ResponseParameters

Describes why a request was unsuccessful.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>migrate_to_chat_id</td><td>Integer</td><td><em>Optional</em>. The group has been migrated to a supergroup with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.</td></tr><tr><td>retry_after</td><td>Integer</td><td><em>Optional</em>. In case of exceeding flood control, the number of seconds left to wait before the request can be repeated</td></tr></tbody></table>

#### InputMedia

This object represents the content of a media message to be sent. It should be one of

-   [InputMediaAnimation](#inputmediaanimation)
-   [InputMediaAudio](#inputmediaaudio)
-   [InputMediaDocument](#inputmediadocument)
-   [InputMediaLivePhoto](#inputmedialivephoto)
-   [InputMediaPhoto](#inputmediaphoto)
-   [InputMediaVideo](#inputmediavideo)

#### InputMediaAnimation

Represents an animation file (GIF or H.264/MPEG-4 AVC video without sound) to be sent.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the media, must be <em>animation</em></td></tr><tr><td>media</td><td>String</td><td>File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://&lt;file_attach_name&gt;” to upload a new one using multipart/form-data under &lt;file_attach_name&gt; name. <a href="#sending-files">More information on Sending Files »</a></td></tr><tr><td>thumbnail</td><td>String</td><td><em>Optional</em>. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://&lt;file_attach_name&gt;” if the thumbnail was uploaded using multipart/form-data under &lt;file_attach_name&gt;. <a href="#sending-files">More information on Sending Files »</a></td></tr><tr><td>caption</td><td>String</td><td><em>Optional</em>. Caption of the animation to be sent, 0-1024 characters after entities parsing</td></tr><tr><td>parse_mode</td><td>String</td><td><em>Optional</em>. Mode for parsing entities in the animation caption. See <a href="#formatting-options">formatting options</a> for more details.</td></tr><tr><td>caption_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td><em>Optional</em>. List of special entities that appear in the caption, which can be specified instead of <em>parse_mode</em></td></tr><tr><td>show_caption_above_media</td><td>Boolean</td><td><em>Optional</em>. Pass <em>True</em> if the caption must be shown above the message media</td></tr><tr><td>width</td><td>Integer</td><td><em>Optional</em>. Animation width</td></tr><tr><td>height</td><td>Integer</td><td><em>Optional</em>. Animation height</td></tr><tr><td>duration</td><td>Integer</td><td><em>Optional</em>. Animation duration in seconds</td></tr><tr><td>has_spoiler</td><td>Boolean</td><td><em>Optional</em>. Pass <em>True</em> if the animation needs to be covered with a spoiler animation</td></tr></tbody></table>

#### InputMediaAudio

Represents an audio file to be treated as music to be sent.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the media, must be <em>audio</em></td></tr><tr><td>media</td><td>String</td><td>File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://&lt;file_attach_name&gt;” to upload a new one using multipart/form-data under &lt;file_attach_name&gt; name. <a href="#sending-files">More information on Sending Files »</a></td></tr><tr><td>thumbnail</td><td>String</td><td><em>Optional</em>. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://&lt;file_attach_name&gt;” if the thumbnail was uploaded using multipart/form-data under &lt;file_attach_name&gt;. <a href="#sending-files">More information on Sending Files »</a></td></tr><tr><td>caption</td><td>String</td><td><em>Optional</em>. Caption of the audio to be sent, 0-1024 characters after entities parsing</td></tr><tr><td>parse_mode</td><td>String</td><td><em>Optional</em>. Mode for parsing entities in the audio caption. See <a href="#formatting-options">formatting options</a> for more details.</td></tr><tr><td>caption_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td><em>Optional</em>. List of special entities that appear in the caption, which can be specified instead of <em>parse_mode</em></td></tr><tr><td>duration</td><td>Integer</td><td><em>Optional</em>. Duration of the audio in seconds</td></tr><tr><td>performer</td><td>String</td><td><em>Optional</em>. Performer of the audio</td></tr><tr><td>title</td><td>String</td><td><em>Optional</em>. Title of the audio</td></tr></tbody></table>

#### InputMediaDocument

Represents a general file to be sent.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the media, must be <em>document</em></td></tr><tr><td>media</td><td>String</td><td>File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://&lt;file_attach_name&gt;” to upload a new one using multipart/form-data under &lt;file_attach_name&gt; name. <a href="#sending-files">More information on Sending Files »</a></td></tr><tr><td>thumbnail</td><td>String</td><td><em>Optional</em>. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://&lt;file_attach_name&gt;” if the thumbnail was uploaded using multipart/form-data under &lt;file_attach_name&gt;. <a href="#sending-files">More information on Sending Files »</a></td></tr><tr><td>caption</td><td>String</td><td><em>Optional</em>. Caption of the document to be sent, 0-1024 characters after entities parsing</td></tr><tr><td>parse_mode</td><td>String</td><td><em>Optional</em>. Mode for parsing entities in the document caption. See <a href="#formatting-options">formatting options</a> for more details.</td></tr><tr><td>caption_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td><em>Optional</em>. List of special entities that appear in the caption, which can be specified instead of <em>parse_mode</em></td></tr><tr><td>disable_content_type_detection</td><td>Boolean</td><td><em>Optional</em>. Disables automatic server-side content type detection for files uploaded using multipart/form-data. Always <em>True</em>, if the document is sent as part of an album.</td></tr></tbody></table>

#### InputMediaLink

Represents an HTTP link to be sent.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the media, must be <em>link</em></td></tr><tr><td>url</td><td>String</td><td>HTTP URL of the link</td></tr></tbody></table>

#### InputMediaLivePhoto

Represents a live photo to be sent.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the media, must be <em>live_photo</em></td></tr><tr><td>media</td><td>String</td><td>Video of the live photo to send. Pass a file_id to send a file that exists on the Telegram servers (recommended) or pass “attach://&lt;file_attach_name&gt;” to upload a new one using multipart/form-data under &lt;file_attach_name&gt; name. <a href="#sending-files">More information on Sending Files »</a>. Sending live photos by a URL is currently unsupported.</td></tr><tr><td>photo</td><td>String</td><td>The static photo to send. Pass a file_id to send a file that exists on the Telegram servers (recommended) or pass “attach://&lt;file_attach_name&gt;” to upload a new one using multipart/form-data under &lt;file_attach_name&gt; name. <a href="#sending-files">More information on Sending Files »</a>. Sending live photos by a URL is currently unsupported.</td></tr><tr><td>caption</td><td>String</td><td><em>Optional</em>. Caption of the live photo to be sent, 0-1024 characters after entities parsing</td></tr><tr><td>parse_mode</td><td>String</td><td><em>Optional</em>. Mode for parsing entities in the live photo caption. See <a href="#formatting-options">formatting options</a> for more details.</td></tr><tr><td>caption_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td><em>Optional</em>. List of special entities that appear in the caption, which can be specified instead of <em>parse_mode</em></td></tr><tr><td>show_caption_above_media</td><td>Boolean</td><td><em>Optional</em>. Pass <em>True</em> if the caption must be shown above the message media</td></tr><tr><td>has_spoiler</td><td>Boolean</td><td><em>Optional</em>. Pass <em>True</em> if the live photo needs to be covered with a spoiler animation</td></tr></tbody></table>

#### InputMediaLocation

Represents a location to be sent.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the media, must be <em>location</em></td></tr><tr><td>latitude</td><td>Float</td><td>Latitude of the location</td></tr><tr><td>longitude</td><td>Float</td><td>Longitude of the location</td></tr><tr><td>horizontal_accuracy</td><td>Float</td><td><em>Optional</em>. The radius of uncertainty for the location, measured in meters; 0-1500</td></tr></tbody></table>

#### InputMediaPhoto

Represents a photo to be sent.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the media, must be <em>photo</em></td></tr><tr><td>media</td><td>String</td><td>File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://&lt;file_attach_name&gt;” to upload a new one using multipart/form-data under &lt;file_attach_name&gt; name. <a href="#sending-files">More information on Sending Files »</a></td></tr><tr><td>caption</td><td>String</td><td><em>Optional</em>. Caption of the photo to be sent, 0-1024 characters after entities parsing</td></tr><tr><td>parse_mode</td><td>String</td><td><em>Optional</em>. Mode for parsing entities in the photo caption. See <a href="#formatting-options">formatting options</a> for more details.</td></tr><tr><td>caption_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td><em>Optional</em>. List of special entities that appear in the caption, which can be specified instead of <em>parse_mode</em></td></tr><tr><td>show_caption_above_media</td><td>Boolean</td><td><em>Optional</em>. Pass <em>True</em> if the caption must be shown above the message media</td></tr><tr><td>has_spoiler</td><td>Boolean</td><td><em>Optional</em>. Pass <em>True</em> if the photo needs to be covered with a spoiler animation</td></tr></tbody></table>

#### InputMediaSticker

Represents a sticker file to be sent.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the media, must be <em>sticker</em></td></tr><tr><td>media</td><td>String</td><td>File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a .WEBP sticker from the Internet, or pass “attach://&lt;file_attach_name&gt;” to upload a new .WEBP, .TGS, or .WEBM sticker using multipart/form-data under &lt;file_attach_name&gt; name. <a href="#sending-files">More information on Sending Files »</a></td></tr><tr><td>emoji</td><td>String</td><td><em>Optional</em>. Emoji associated with the sticker; only for just uploaded stickers</td></tr></tbody></table>

#### InputMediaVenue

Represents a venue to be sent.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the media, must be <em>venue</em></td></tr><tr><td>latitude</td><td>Float</td><td>Latitude of the location</td></tr><tr><td>longitude</td><td>Float</td><td>Longitude of the location</td></tr><tr><td>title</td><td>String</td><td>Name of the venue</td></tr><tr><td>address</td><td>String</td><td>Address of the venue</td></tr><tr><td>foursquare_id</td><td>String</td><td><em>Optional</em>. Foursquare identifier of the venue</td></tr><tr><td>foursquare_type</td><td>String</td><td><em>Optional</em>. Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)</td></tr><tr><td>google_place_id</td><td>String</td><td><em>Optional</em>. Google Places identifier of the venue</td></tr><tr><td>google_place_type</td><td>String</td><td><em>Optional</em>. Google Places type of the venue. (See <a href="https://developers.google.com/places/web-service/supported_types">supported types</a>.)</td></tr></tbody></table>

#### InputMediaVideo

Represents a video to be sent.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the media, must be <em>video</em></td></tr><tr><td>media</td><td>String</td><td>File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://&lt;file_attach_name&gt;” to upload a new one using multipart/form-data under &lt;file_attach_name&gt; name. <a href="#sending-files">More information on Sending Files »</a></td></tr><tr><td>thumbnail</td><td>String</td><td><em>Optional</em>. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://&lt;file_attach_name&gt;” if the thumbnail was uploaded using multipart/form-data under &lt;file_attach_name&gt;. <a href="#sending-files">More information on Sending Files »</a></td></tr><tr><td>cover</td><td>String</td><td><em>Optional</em>. Cover for the video in the message. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://&lt;file_attach_name&gt;” to upload a new one using multipart/form-data under &lt;file_attach_name&gt; name. <a href="#sending-files">More information on Sending Files »</a></td></tr><tr><td>start_timestamp</td><td>Integer</td><td><em>Optional</em>. Start timestamp for the video in the message</td></tr><tr><td>caption</td><td>String</td><td><em>Optional</em>. Caption of the video to be sent, 0-1024 characters after entities parsing</td></tr><tr><td>parse_mode</td><td>String</td><td><em>Optional</em>. Mode for parsing entities in the video caption. See <a href="#formatting-options">formatting options</a> for more details.</td></tr><tr><td>caption_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td><em>Optional</em>. List of special entities that appear in the caption, which can be specified instead of <em>parse_mode</em></td></tr><tr><td>show_caption_above_media</td><td>Boolean</td><td><em>Optional</em>. Pass <em>True</em> if the caption must be shown above the message media</td></tr><tr><td>width</td><td>Integer</td><td><em>Optional</em>. Video width</td></tr><tr><td>height</td><td>Integer</td><td><em>Optional</em>. Video height</td></tr><tr><td>duration</td><td>Integer</td><td><em>Optional</em>. Video duration in seconds</td></tr><tr><td>supports_streaming</td><td>Boolean</td><td><em>Optional</em>. Pass <em>True</em> if the uploaded video is suitable for streaming</td></tr><tr><td>has_spoiler</td><td>Boolean</td><td><em>Optional</em>. Pass <em>True</em> if the video needs to be covered with a spoiler animation</td></tr></tbody></table>

#### InputMediaVoiceNote

Represents a voice message file to be sent.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the media, must be <em>voice_note</em></td></tr><tr><td>media</td><td>String</td><td>File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://&lt;file_attach_name&gt;" to upload a new one using multipart/form-data under &lt;file_attach_name&gt; name. <a href="#sending-files">More information on Sending Files »</a></td></tr><tr><td>caption</td><td>String</td><td><em>Optional</em>. Caption of the voice message to be sent, 0-1024 characters after entities parsing</td></tr><tr><td>parse_mode</td><td>String</td><td><em>Optional</em>. Mode for parsing entities in the voice message caption. See <a href="#formatting-options">formatting options</a> for more details.</td></tr><tr><td>caption_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td><em>Optional</em>. List of special entities that appear in the caption, which can be specified instead of <em>parse_mode</em></td></tr><tr><td>duration</td><td>Integer</td><td><em>Optional</em>. Duration of the voice message in seconds</td></tr></tbody></table>

#### InputFile

This object represents the contents of a file to be uploaded. Must be posted using multipart/form-data in the usual way that files are uploaded via the browser.

#### InputPaidMedia

This object describes the paid media to be sent. Currently, it can be one of

-   [InputPaidMediaLivePhoto](#inputpaidmedialivephoto)
-   [InputPaidMediaPhoto](#inputpaidmediaphoto)
-   [InputPaidMediaVideo](#inputpaidmediavideo)

#### InputPaidMediaLivePhoto

The paid media to send is a live photo.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the media, must be <em>live_photo</em></td></tr><tr><td>media</td><td>String</td><td>Video of the live photo to send. Pass a file_id to send a file that exists on the Telegram servers (recommended) or pass “attach://&lt;file_attach_name&gt;” to upload a new one using multipart/form-data under &lt;file_attach_name&gt; name. <a href="#sending-files">More information on Sending Files »</a>. Sending live photos by a URL is currently unsupported.</td></tr><tr><td>photo</td><td>String</td><td>The static photo to send. Pass a file_id to send a file that exists on the Telegram servers (recommended) or pass “attach://&lt;file_attach_name&gt;” to upload a new one using multipart/form-data under &lt;file_attach_name&gt; name. <a href="#sending-files">More information on Sending Files »</a>. Sending live photos by a URL is currently unsupported.</td></tr></tbody></table>

#### InputPaidMediaPhoto

The paid media to send is a photo.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the media, must be <em>photo</em></td></tr><tr><td>media</td><td>String</td><td>File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://&lt;file_attach_name&gt;” to upload a new one using multipart/form-data under &lt;file_attach_name&gt; name. <a href="#sending-files">More information on Sending Files »</a></td></tr></tbody></table>

#### InputPaidMediaVideo

The paid media to send is a video.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the media, must be <em>video</em></td></tr><tr><td>media</td><td>String</td><td>File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://&lt;file_attach_name&gt;” to upload a new one using multipart/form-data under &lt;file_attach_name&gt; name. <a href="#sending-files">More information on Sending Files »</a></td></tr><tr><td>thumbnail</td><td>String</td><td><em>Optional</em>. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://&lt;file_attach_name&gt;” if the thumbnail was uploaded using multipart/form-data under &lt;file_attach_name&gt;. <a href="#sending-files">More information on Sending Files »</a></td></tr><tr><td>cover</td><td>String</td><td><em>Optional</em>. Cover for the video in the message. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://&lt;file_attach_name&gt;” to upload a new one using multipart/form-data under &lt;file_attach_name&gt; name. <a href="#sending-files">More information on Sending Files »</a></td></tr><tr><td>start_timestamp</td><td>Integer</td><td><em>Optional</em>. Start timestamp for the video in the message</td></tr><tr><td>width</td><td>Integer</td><td><em>Optional</em>. Video width</td></tr><tr><td>height</td><td>Integer</td><td><em>Optional</em>. Video height</td></tr><tr><td>duration</td><td>Integer</td><td><em>Optional</em>. Video duration in seconds</td></tr><tr><td>supports_streaming</td><td>Boolean</td><td><em>Optional</em>. Pass <em>True</em> if the uploaded video is suitable for streaming</td></tr></tbody></table>

#### InputProfilePhoto

This object describes a profile photo to set. Currently, it can be one of

-   [InputProfilePhotoStatic](#inputprofilephotostatic)
-   [InputProfilePhotoAnimated](#inputprofilephotoanimated)

#### InputProfilePhotoStatic

A static profile photo in the .JPG format.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the profile photo, must be <em>static</em></td></tr><tr><td>photo</td><td>String</td><td>The static profile photo. Profile photos can't be reused and can only be uploaded as a new file, so you can pass “attach://&lt;file_attach_name&gt;” if the photo was uploaded using multipart/form-data under &lt;file_attach_name&gt;. <a href="#sending-files">More information on Sending Files »</a></td></tr></tbody></table>

#### InputProfilePhotoAnimated

An animated profile photo in the MPEG4 format.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the profile photo, must be <em>animated</em></td></tr><tr><td>animation</td><td>String</td><td>The animated profile photo. Profile photos can't be reused and can only be uploaded as a new file, so you can pass “attach://&lt;file_attach_name&gt;” if the photo was uploaded using multipart/form-data under &lt;file_attach_name&gt;. <a href="#sending-files">More information on Sending Files »</a></td></tr><tr><td>main_frame_timestamp</td><td>Float</td><td><em>Optional</em>. Timestamp in seconds of the frame that will be used as the static profile photo. Defaults to 0.0.</td></tr></tbody></table>

#### InputStoryContent

This object describes the content of a story to post. Currently, it can be one of

-   [InputStoryContentPhoto](#inputstorycontentphoto)
-   [InputStoryContentVideo](#inputstorycontentvideo)

#### InputStoryContentPhoto

Describes a photo to post as a story.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the content, must be <em>photo</em></td></tr><tr><td>photo</td><td>String</td><td>The photo to post as a story. The photo must be of the size 1080x1920 and must not exceed 10 MB. The photo can't be reused and can only be uploaded as a new file, so you can pass “attach://&lt;file_attach_name&gt;” if the photo was uploaded using multipart/form-data under &lt;file_attach_name&gt;. <a href="#sending-files">More information on Sending Files »</a></td></tr></tbody></table>

#### InputStoryContentVideo

Describes a video to post as a story.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the content, must be <em>video</em></td></tr><tr><td>video</td><td>String</td><td>The video to post as a story. The video must be of the size 720x1280, streamable, encoded with H.265 codec, with key frames added each second in the MPEG4 format, and must not exceed 30 MB. The video can't be reused and can only be uploaded as a new file, so you can pass “attach://&lt;file_attach_name&gt;” if the video was uploaded using multipart/form-data under &lt;file_attach_name&gt;. <a href="#sending-files">More information on Sending Files »</a></td></tr><tr><td>duration</td><td>Float</td><td><em>Optional</em>. Precise duration of the video in seconds; 0-60</td></tr><tr><td>cover_frame_timestamp</td><td>Float</td><td><em>Optional</em>. Timestamp in seconds of the frame that will be used as the static cover for the story. Defaults to 0.0.</td></tr><tr><td>is_animation</td><td>Boolean</td><td><em>Optional</em>. Pass <em>True</em> if the video has no sound</td></tr></tbody></table>

#### Sending files

There are three ways to send files (photos, stickers, audio, media, etc.):

1.  If the file is already stored somewhere on the Telegram servers, you don't need to reupload it: each file object has a **file\_id** field, simply pass this **file\_id** as a parameter instead of uploading. There are **no limits** for files sent this way.
2.  Provide Telegram with an HTTP URL for the file to be sent. Telegram will download and send the file. 5 MB max size for photos and 20 MB max for other types of content.
3.  Post the file using multipart/form-data in the usual way that files are uploaded via the browser. 10 MB max size for photos, 50 MB for other files.

**Sending by file\_id**

-   It is not possible to change the file type when resending by **file\_id**. I.e. a [video](#video) can't be [sent as a photo](#sendphoto), a [photo](#photosize) can't be [sent as a document](#senddocument), etc.
-   It is not possible to resend thumbnails.
-   Resending a photo by **file\_id** will send all of its [sizes](#photosize).
-   **file\_id** is unique for each individual bot and **can't** be transferred from one bot to another.
-   **file\_id** uniquely identifies a file, but a file can have different valid **file\_id**s even for the same bot.

**Sending by URL**

-   When sending by URL the target file must have the correct MIME type (e.g., audio/mpeg for [sendAudio](#sendaudio), etc.).
-   In [sendDocument](#senddocument), sending by URL will currently only work for **.PDF** and **.ZIP** files.
-   To use [sendVoice](#sendvoice), the file must have the type audio/ogg and be no more than 1MB in size. 1-20MB voice notes will be sent as files.
-   Other configurations may work but we can't guarantee that they will.

#### Accent colors

Colors with identifiers 0 (red), 1 (orange), 2 (purple/violet), 3 (green), 4 (cyan), 5 (blue), 6 (pink) can be customized by app themes. Additionally, the following colors in RGB format are currently in use.

<table class="table table-hover table-bordered"><thead><tr><th scope="col">Color identifier</th><th scope="col">Light colors</th><th scope="col">Dark colors</th></tr></thead><tbody><tr><td>7</td><td>E15052 F9AE63</td><td>FF9380 992F37</td></tr><tr><td>8</td><td>E0802B FAC534</td><td>ECB04E C35714</td></tr><tr><td>9</td><td>A05FF3 F48FFF</td><td>C697FF 5E31C8</td></tr><tr><td>10</td><td>27A910 A7DC57</td><td>A7EB6E 167E2D</td></tr><tr><td>11</td><td>27ACCE 82E8D6</td><td>40D8D0 045C7F</td></tr><tr><td>12</td><td>3391D4 7DD3F0</td><td>52BFFF 0B5494</td></tr><tr><td>13</td><td>DD4371 FFBE9F</td><td>FF86A6 8E366E</td></tr><tr><td>14</td><td>247BED F04856 FFFFFF</td><td>3FA2FE E5424F FFFFFF</td></tr><tr><td>15</td><td>D67722 1EA011 FFFFFF</td><td>FF905E 32A527 FFFFFF</td></tr><tr><td>16</td><td>179E42 E84A3F FFFFFF</td><td>66D364 D5444F FFFFFF</td></tr><tr><td>17</td><td>2894AF 6FC456 FFFFFF</td><td>22BCE2 3DA240 FFFFFF</td></tr><tr><td>18</td><td>0C9AB3 FFAD95 FFE6B5</td><td>22BCE2 FF9778 FFDA6B</td></tr><tr><td>19</td><td>7757D6 F79610 FFDE8E</td><td>9791FF F2731D FFDB59</td></tr><tr><td>20</td><td>1585CF F2AB1D FFFFFF</td><td>3DA6EB EEA51D FFFFFF</td></tr></tbody></table>

#### Profile accent colors

Currently, the following colors in RGB format are in use for profile backgrounds.

<table class="table table-hover table-bordered"><thead><tr><th scope="col">Color identifier</th><th scope="col">Light colors</th><th scope="col">Dark colors</th></tr></thead><tbody><tr><td>0</td><td>BA5650</td><td>9C4540</td></tr><tr><td>1</td><td>C27C3E</td><td>945E2C</td></tr><tr><td>2</td><td>956AC8</td><td>715099</td></tr><tr><td>3</td><td>49A355</td><td>33713B</td></tr><tr><td>4</td><td>3E97AD</td><td>387E87</td></tr><tr><td>5</td><td>5A8FBB</td><td>477194</td></tr><tr><td>6</td><td>B85378</td><td>944763</td></tr><tr><td>7</td><td>7F8B95</td><td>435261</td></tr><tr><td>8</td><td>C9565D D97C57</td><td>994343 AC583E</td></tr><tr><td>9</td><td>CF7244 CC9433</td><td>8F552F A17232</td></tr><tr><td>10</td><td>9662D4 B966B6</td><td>634691 9250A2</td></tr><tr><td>11</td><td>3D9755 89A650</td><td>296A43 5F8F44</td></tr><tr><td>12</td><td>3D95BA 50AD98</td><td>306C7C 3E987E</td></tr><tr><td>13</td><td>538BC2 4DA8BD</td><td>38618C 458BA1</td></tr><tr><td>14</td><td>B04F74 D1666D</td><td>884160 A65259</td></tr><tr><td>15</td><td>637482 7B8A97</td><td>53606E 384654</td></tr></tbody></table>

#### Inline mode objects

Objects and methods used in the inline mode are described in the [Inline mode section](#inline-mode).

### Available methods

> All methods in the Bot API are case-insensitive. We support **GET** and **POST** HTTP methods. Use either [URL query string](https://en.wikipedia.org/wiki/Query_string) or _application/json_ or _application/x-www-form-urlencoded_ or _multipart/form-data_ for passing parameters in Bot API requests.  
> On successful call, a JSON-object containing the result will be returned.

#### getMe

A simple method for testing your bot's authentication token. Requires no parameters. Returns basic information about the bot in form of a [User](#user) object.

#### logOut

Use this method to log out from the cloud Bot API server before launching the bot locally. You **must** log out the bot before running it locally, otherwise there is no guarantee that the bot will receive updates. After a successful call, you can immediately log in on a local server, but will not be able to log in back to the cloud Bot API server for 10 minutes. Returns _True_ on success. Requires no parameters.

#### close

Use this method to close the bot instance before moving it from one local server to another. You need to delete the webhook before calling this method to ensure that the bot isn't launched again after server restart. The method will return error 429 in the first 10 minutes after the bot is launched. Returns _True_ on success. Requires no parameters.

#### sendMessage

Use this method to send text messages. On success, the sent [Message](#message) is returned.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Optional</td><td>Unique identifier of the business connection on behalf of which the message will be sent</td></tr><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target bot, supergroup or channel in the format <code>@username</code></td></tr><tr><td>message_thread_id</td><td>Integer</td><td>Optional</td><td>Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only</td></tr><tr><td>direct_messages_topic_id</td><td>Integer</td><td>Optional</td><td>Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat</td></tr><tr><td>receiver_user_id</td><td>Integer</td><td>Optional</td><td>For outgoing ephemeral messages, unique identifier of the user who will receive the message; for group and supergroup chats only. It is not guaranteed that the user will receive the message, especially if they are offline. See <a href="#ephemeral-messages-and-commands">ephemeral message sending</a> for more details.</td></tr><tr><td>callback_query_id</td><td>String</td><td>Optional</td><td>For outgoing ephemeral messages, identifier of the callback query which triggered the message if any</td></tr><tr><td>text</td><td>String</td><td>Yes</td><td>Text of the message to be sent, 1-4096 characters after entities parsing</td></tr><tr><td>parse_mode</td><td>String</td><td>Optional</td><td>Mode for parsing entities in the message text. See <a href="#formatting-options">formatting options</a> for more details.</td></tr><tr><td>entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td>Optional</td><td>A JSON-serialized list of special entities that appear in message text, which can be specified instead of <em>parse_mode</em></td></tr><tr><td>link_preview_options</td><td><a href="#linkpreviewoptions">LinkPreviewOptions</a></td><td>Optional</td><td>Link preview generation options for the message</td></tr><tr><td>disable_notification</td><td>Boolean</td><td>Optional</td><td>Sends the message <a href="/blog/channels-2-0/#silent-messages">silently</a>. Users will receive a notification with no sound.</td></tr><tr><td>protect_content</td><td>Boolean</td><td>Optional</td><td>Protects the contents of the sent message from forwarding and saving</td></tr><tr><td>allow_paid_broadcast</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to allow up to 1000 messages per second, ignoring <a href="/bots/faq/#how-can-i-message-all-of-my-bot-s-subscribers-at-once">broadcasting limits</a> for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance.</td></tr><tr><td>message_effect_id</td><td>String</td><td>Optional</td><td>Unique identifier of the message effect to be added to the message; for private chats only</td></tr><tr><td>suggested_post_parameters</td><td><a href="#suggestedpostparameters">SuggestedPostParameters</a></td><td>Optional</td><td>A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.</td></tr><tr><td>reply_parameters</td><td><a href="#replyparameters">ReplyParameters</a></td><td>Optional</td><td>Description of the message to reply to</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a> or <a href="#replykeyboardmarkup">ReplyKeyboardMarkup</a> or <a href="#replykeyboardremove">ReplyKeyboardRemove</a> or <a href="#forcereply">ForceReply</a></td><td>Optional</td><td>Additional interface options. A JSON-serialized object for an <a href="/bots/features/#inline-keyboards">inline keyboard</a>, <a href="/bots/features/#keyboards">custom reply keyboard</a>, instructions to remove a reply keyboard or to force a reply from the user.</td></tr></tbody></table>

#### Formatting options

The Bot API supports basic formatting for messages. You can use bold, italic, underlined, strikethrough, spoiler text, block quotations as well as inline links and pre-formatted code in your bots' messages. Telegram clients will render them accordingly. You can specify text entities directly, or use markdown-style or HTML-style formatting.

Note that Telegram clients will display an **alert** to the user before opening an inline link ('Open this link?' together with the full URL).

Message entities can be nested, providing following restrictions are met:  
\- If two entities have common characters, then one of them is fully contained inside another.  
\- _bold_, _italic_, _underline_, _strikethrough_, and _spoiler_ entities can contain and can be part of any other entities, except _pre_ and _code_.  
\- _blockquote_ and _expandable\_blockquote_ entities can't be nested.  
\- All other entities can't contain each other.

Links `tg://user?id=<user_id>` can be used to mention a user by their identifier without using a username. Please note:

-   These links will work **only** if they are used inside an inline link or in an inline keyboard button. For example, they will not work, when used in a message text.
-   Unless the user is a member of the chat where they were mentioned, these mentions are only guaranteed to work if the user has contacted the bot in private in the past or has sent a callback query to the bot via an inline button and doesn't have Forwarded Messages privacy enabled for the bot.

You can find the list of programming and markup languages for which syntax highlighting is supported at [libprisma#supported-languages](https://github.com/TelegramMessenger/libprisma#supported-languages).

###### Date-time entity formatting

Date-time entity formatting is specified by a format string, which must adhere to the following regular expression: `r|w?[dD]?[tT]?`.

If the format string is empty, the underlying text is displayed as-is; however, the user can still receive the underlying date in their local format. When populated, the format string determines the output based on the presence of the following control characters:

-   **`r`**: Displays the time relative to the current time. Cannot be combined with any other control characters.
-   **`w`**: Displays the day of the week in the user's localized language.
-   **`d`**: Displays the date in short form (e.g., “17.03.22”).
-   **`D`**: Displays the date in long form (e.g., “March 17, 2022”).
-   **`t`**: Displays the time in short form (e.g., “22:45”).
-   **`T`**: Displays the time in long form (e.g., “22:45:00”).

###### MarkdownV2 style

To use this mode, pass _MarkdownV2_ in the _parse\_mode_ field. Use the following syntax in your message:

````
*bold \*text*
_italic \*text_
__underline__
~strikethrough~
||spoiler||
*bold _italic bold ~italic bold strikethrough ||italic bold strikethrough spoiler||~ __underline italic bold___ bold*
[inline URL](http://www.example.com/)
[inline mention of a user](tg://user?id=123456789)
![](tg://emoji?id=5368324170671202286)
![22:45 tomorrow](tg://time?unix=1647531900&format=wDT)
![22:45 tomorrow](tg://time?unix=1647531900&format=t)
![22:45 tomorrow](tg://time?unix=1647531900&format=r)
![22:45 tomorrow](tg://time?unix=1647531900)
`inline fixed-width code`
```
pre-formatted fixed-width code block
```
```python
pre-formatted fixed-width code block written in the Python programming language
```
>Block quotation started
>Block quotation continued
>Block quotation continued
>Block quotation continued
>The last line of the block quotation
**>The expandable block quotation started right after the previous block quotation
>It is separated from the previous block quotation by an empty bold entity
>Expandable block quotation continued
>Hidden by default part of the expandable block quotation started
>Expandable block quotation continued
>The last line of the expandable block quotation with the expandability mark||
````

Please note:

-   Any character with code between 1 and 126 inclusively can be escaped anywhere with a preceding '\\' character, in which case it is treated as an ordinary character and not a part of the markup. This implies that '\\' character usually must be escaped with a preceding '\\' character.
-   Inside `pre` and `code` entities, all '\`' and '\\' characters must be escaped with a preceding '\\' character.
-   Inside the `(...)` part of the inline link and custom emoji definition, all ')' and '\\' must be escaped with a preceding '\\' character.
-   In all other places characters '\_', '\*', '\[', '\]', '(', ')', '~', '\`', '>', '#', '+', '-', '=', '|', '{', '}', '.', '!' must be escaped with the preceding character '\\'.
-   In case of ambiguity between `italic` and `underline` entities `__` is always greedily treated from left to right as beginning or end of an `underline` entity, so instead of `___italic underline___` use `___italic underline_**__`, adding an empty bold entity as a separator.
-   A valid emoji must be provided as an alternative value for the custom emoji. The emoji will be shown instead of the custom emoji in places where a custom emoji cannot be displayed (e.g., system notifications) or if the message is forwarded by a non-premium user. It is recommended to use the emoji from the **emoji** field of the custom emoji [sticker](#sticker).
-   Custom emoji entities can only be used by bots that purchased additional usernames on [Fragment](https://fragment.com) or in the messages directly sent by the bot to private, group and supergroup chats if the owner of the bot has a Telegram Premium subscription.
-   See [date-time entity formatting](#date-time-entity-formatting) for more details about supported date-time formats.

###### HTML style

To use this mode, pass _HTML_ in the _parse\_mode_ field. The following tags are currently supported:

```
<b>bold</b>, <strong>bold</strong>
<i>italic</i>, <em>italic</em>
<u>underline</u>, <ins>underline</ins>
<s>strikethrough</s>, <strike>strikethrough</strike>, <del>strikethrough</del>
<span class="tg-spoiler">spoiler</span>, <tg-spoiler>spoiler</tg-spoiler>
<b>bold <i>italic bold <s>italic bold strikethrough <span class="tg-spoiler">italic bold strikethrough spoiler</span></s> <u>underline italic bold</u></i> bold</b>
<a href="http://www.example.com/">inline URL</a>
<a href="tg://user?id=123456789">inline mention of a user</a>
<tg-emoji emoji-id="5368324170671202286"></tg-emoji>
<tg-time unix="1647531900" format="wDT">22:45 tomorrow</tg-time>
<tg-time unix="1647531900" format="t">22:45 tomorrow</tg-time>
<tg-time unix="1647531900" format="r">22:45 tomorrow</tg-time>
<tg-time unix="1647531900">22:45 tomorrow</tg-time>
<code>inline fixed-width code</code>
<pre>pre-formatted fixed-width code block</pre>
<pre><code class="language-python">pre-formatted fixed-width code block written in the Python programming language</code></pre>
<blockquote>Block quotation started
Block quotation continued
The last line of the block quotation</blockquote>
<blockquote expandable>Expandable block quotation started
Expandable block quotation continued
Expandable block quotation continued
Hidden by default part of the block quotation started
Expandable block quotation continued
The last line of the block quotation</blockquote>
```

Please note:

-   Only the tags mentioned above are currently supported.
-   All `<`, `>` and `&` symbols that are not a part of a tag or an HTML entity must be replaced with the corresponding HTML entities (`<` with `&lt;`, `>` with `&gt;` and `&` with `&amp;`).
-   All numerical HTML entities are supported.
-   The API currently supports only the following named HTML entities: `&lt;`, `&gt;`, `&amp;` and `&quot;`.
-   Use nested `pre` and `code` tags, to define programming language for `pre` entity.
-   Programming language can't be specified for standalone `code` tags.
-   A valid emoji must be used as the content of the `tg-emoji` tag. The emoji will be shown instead of the custom emoji in places where a custom emoji cannot be displayed (e.g., system notifications) or if the message is forwarded by a non-premium user. It is recommended to use the emoji from the **emoji** field of the custom emoji [sticker](#sticker).
-   Custom emoji entities can only be used by bots that purchased additional usernames on [Fragment](https://fragment.com) or in the messages directly sent by the bot to private, group and supergroup chats if the owner of the bot has a Telegram Premium subscription.
-   See [date-time entity formatting](#date-time-entity-formatting) for more details about supported date-time formats.

###### Markdown style

This is a legacy mode, retained for backward compatibility. To use this mode, pass _Markdown_ in the _parse\_mode_ field. Use the following syntax in your message:

````
*bold text*
_italic text_
[inline URL](http://www.example.com/)
[inline mention of a user](tg://user?id=123456789)
`inline fixed-width code`
```
pre-formatted fixed-width code block
```
```python
pre-formatted fixed-width code block written in the Python programming language
```
````

Please note:

-   Entities must not be nested, use parse mode [MarkdownV2](#markdownv2-style) instead.
-   There is no way to specify “underline”, “strikethrough”, “spoiler”, “blockquote”, “expandable\_blockquote”, “custom\_emoji”, and “date\_time” entities, use parse mode [MarkdownV2](#markdownv2-style) instead.
-   To escape characters '\_', '\*', '\`', '\[' outside of an entity, prepend the character '\\' before them.
-   Escaping inside entities is not allowed, so entity must be closed first and reopened again: use `_snake_\__case_` for italic `snake_case` and `*2*\**2=4*` for bold `2*2=4`.

#### Ephemeral Messages and Commands

Ephemeral interactions allow a bot and an individual member of a group or supergroup chat to communicate privately on the public timeline without cluttering the chat for other members. They may disappear automatically after some time, or if the app is restarted.

**Ephemeral Commands (User to Bot)**  
Bots can declare ephemeral commands by setting the _is\_ephemeral_ field to _True_ in the [BotCommand](#botcommand) class. A user can then send an ephemeral command that is received by the target bot but remains invisible to all members of the chat, including both users and other bots.

**Ephemeral Messages**  
Bots can send an ephemeral message response back to a specific user designated by the _receiver\_user\_id_ parameter. Other members of the group or supergroup chat will not see the message.

> It is **not guaranteed** that the ephemeral message will be received, especially if the user is offline.

**Reply Targets and Conditions**

-   Any bot can send an ephemeral message to a user within **15 seconds** of the incoming eligible action. The message will be sent to the exact client application that triggered the action. For this the bot must provide either:
    
    -   The _callback\_query\_id_ from a received callback query, or
    -   The _reply\_parameters.ephemeral\_message\_id_ from an incoming ephemeral message.
-   If the bot is a chat administrator, it can send an ephemeral message to any non-bot member of the chat at any time without needing to specify a _callback\_query\_id_ or _reply\_parameters.ephemeral\_message\_id_. In this case, the message may be delivered across multiple active client applications of the user, but is regardless not guaranteed to be delivered to any of them.
    

#### Paid Broadcasts

By default, all bots are able to broadcast up to [30 messages](/bots/faq/#my-bot-is-hitting-limits-how-do-i-avoid-this) per second to their users. Developers can increase this limit by enabling _Paid Broadcasts_ in [@BotFather](https://t.me/botfather) - allowing their bot to broadcast **up to 1000 messages** per second.

Each message broadcasted over the free amount of 30 messages per second incurs a cost of 0.1 Stars per message, paid with Telegram Stars from the bot's balance. In order to use this feature, a bot must have at least _10,000 Stars_ on its balance.

> Bots with increased limits are only charged for messages that are broadcasted successfully.

#### forwardMessage

Use this method to forward messages of any kind. Service messages and messages with protected content can't be forwarded. On success, the sent [Message](#message) is returned.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target bot, supergroup or channel in the format <code>@username</code></td></tr><tr><td>message_thread_id</td><td>Integer</td><td>Optional</td><td>Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only</td></tr><tr><td>direct_messages_topic_id</td><td>Integer</td><td>Optional</td><td>Identifier of the direct messages topic to which the message will be forwarded; required if the message is forwarded to a direct messages chat</td></tr><tr><td>from_chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the chat where the original message was sent (or username of the target bot, supergroup or channel in the format <code>@username</code>)</td></tr><tr><td>video_start_timestamp</td><td>Integer</td><td>Optional</td><td>New start timestamp for the forwarded video in the message</td></tr><tr><td>disable_notification</td><td>Boolean</td><td>Optional</td><td>Sends the message <a href="/blog/channels-2-0/#silent-messages">silently</a>. Users will receive a notification with no sound.</td></tr><tr><td>protect_content</td><td>Boolean</td><td>Optional</td><td>Protects the contents of the forwarded message from forwarding and saving</td></tr><tr><td>message_effect_id</td><td>String</td><td>Optional</td><td>Unique identifier of the message effect to be added to the message; only available when forwarding to private chats</td></tr><tr><td>suggested_post_parameters</td><td><a href="#suggestedpostparameters">SuggestedPostParameters</a></td><td>Optional</td><td>A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only</td></tr><tr><td>message_id</td><td>Integer</td><td>Yes</td><td>Message identifier in the chat specified in <em>from_chat_id</em></td></tr></tbody></table>

#### forwardMessages

Use this method to forward multiple messages of any kind. If some of the specified messages can't be found or forwarded, they are skipped. Service messages and messages with protected content can't be forwarded. Album grouping is kept for forwarded messages. On success, an Array of [MessageId](#messageid) of the sent messages is returned.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target bot, supergroup or channel in the format <code>@username</code></td></tr><tr><td>message_thread_id</td><td>Integer</td><td>Optional</td><td>Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only</td></tr><tr><td>direct_messages_topic_id</td><td>Integer</td><td>Optional</td><td>Identifier of the direct messages topic to which the messages will be forwarded; required if the messages are forwarded to a direct messages chat</td></tr><tr><td>from_chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the chat where the original messages were sent (or username of the target bot, supergroup or channel in the format <code>@username</code>)</td></tr><tr><td>message_ids</td><td>Array of Integer</td><td>Yes</td><td>A JSON-serialized list of 1-100 identifiers of messages in the chat <em>from_chat_id</em> to forward. The identifiers must be specified in a strictly increasing order.</td></tr><tr><td>disable_notification</td><td>Boolean</td><td>Optional</td><td>Sends the messages <a href="/blog/channels-2-0/#silent-messages">silently</a>. Users will receive a notification with no sound.</td></tr><tr><td>protect_content</td><td>Boolean</td><td>Optional</td><td>Protects the contents of the forwarded messages from forwarding and saving</td></tr></tbody></table>

#### copyMessage

Use this method to copy messages of any kind. Service messages, paid media messages, giveaway messages, giveaway winners messages, and invoice messages can't be copied. A quiz [poll](#poll) can be copied only if the value of the field _correct\_option\_ids_ is known to the bot. The method is analogous to the method [forwardMessage](#forwardmessage), but the copied message doesn't have a link to the original message. Returns the [MessageId](#messageid) of the sent message on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target bot, supergroup or channel in the format <code>@username</code></td></tr><tr><td>message_thread_id</td><td>Integer</td><td>Optional</td><td>Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only</td></tr><tr><td>direct_messages_topic_id</td><td>Integer</td><td>Optional</td><td>Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat</td></tr><tr><td>from_chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the chat where the original message was sent (or username of the target bot, supergroup or channel in the format <code>@username</code>)</td></tr><tr><td>message_id</td><td>Integer</td><td>Yes</td><td>Message identifier in the chat specified in <em>from_chat_id</em></td></tr><tr><td>video_start_timestamp</td><td>Integer</td><td>Optional</td><td>New start timestamp for the copied video in the message</td></tr><tr><td>caption</td><td>String</td><td>Optional</td><td>New caption for media, 0-1024 characters after entities parsing. If not specified, the original caption is kept.</td></tr><tr><td>parse_mode</td><td>String</td><td>Optional</td><td>Mode for parsing entities in the new caption. See <a href="#formatting-options">formatting options</a> for more details.</td></tr><tr><td>caption_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td>Optional</td><td>A JSON-serialized list of special entities that appear in the new caption, which can be specified instead of <em>parse_mode</em></td></tr><tr><td>show_caption_above_media</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the caption must be shown above the message media. Ignored if a new caption isn't specified.</td></tr><tr><td>disable_notification</td><td>Boolean</td><td>Optional</td><td>Sends the message <a href="/blog/channels-2-0/#silent-messages">silently</a>. Users will receive a notification with no sound.</td></tr><tr><td>protect_content</td><td>Boolean</td><td>Optional</td><td>Protects the contents of the sent message from forwarding and saving</td></tr><tr><td>allow_paid_broadcast</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to allow up to 1000 messages per second, ignoring <a href="/bots/faq/#how-can-i-message-all-of-my-bot-s-subscribers-at-once">broadcasting limits</a> for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance.</td></tr><tr><td>message_effect_id</td><td>String</td><td>Optional</td><td>Unique identifier of the message effect to be added to the message; only available when copying to private chats</td></tr><tr><td>suggested_post_parameters</td><td><a href="#suggestedpostparameters">SuggestedPostParameters</a></td><td>Optional</td><td>A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.</td></tr><tr><td>reply_parameters</td><td><a href="#replyparameters">ReplyParameters</a></td><td>Optional</td><td>Description of the message to reply to</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a> or <a href="#replykeyboardmarkup">ReplyKeyboardMarkup</a> or <a href="#replykeyboardremove">ReplyKeyboardRemove</a> or <a href="#forcereply">ForceReply</a></td><td>Optional</td><td>Additional interface options. A JSON-serialized object for an <a href="/bots/features/#inline-keyboards">inline keyboard</a>, <a href="/bots/features/#keyboards">custom reply keyboard</a>, instructions to remove a reply keyboard or to force a reply from the user.</td></tr></tbody></table>

#### copyMessages

Use this method to copy messages of any kind. If some of the specified messages can't be found or copied, they are skipped. Service messages, paid media messages, giveaway messages, giveaway winners messages, and invoice messages can't be copied. A quiz [poll](#poll) can be copied only if the value of the field _correct\_option\_ids_ is known to the bot. The method is analogous to the method [forwardMessages](#forwardmessages), but the copied messages don't have a link to the original message. Album grouping is kept for copied messages. On success, an Array of [MessageId](#messageid) of the sent messages is returned.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target bot, supergroup or channel in the format <code>@username</code></td></tr><tr><td>message_thread_id</td><td>Integer</td><td>Optional</td><td>Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only</td></tr><tr><td>direct_messages_topic_id</td><td>Integer</td><td>Optional</td><td>Identifier of the direct messages topic to which the messages will be sent; required if the messages are sent to a direct messages chat</td></tr><tr><td>from_chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the chat where the original messages were sent (or username of the target bot, supergroup or channel in the format <code>@username</code>)</td></tr><tr><td>message_ids</td><td>Array of Integer</td><td>Yes</td><td>A JSON-serialized list of 1-100 identifiers of messages in the chat <em>from_chat_id</em> to copy. The identifiers must be specified in a strictly increasing order.</td></tr><tr><td>disable_notification</td><td>Boolean</td><td>Optional</td><td>Sends the messages <a href="/blog/channels-2-0/#silent-messages">silently</a>. Users will receive a notification with no sound.</td></tr><tr><td>protect_content</td><td>Boolean</td><td>Optional</td><td>Protects the contents of the sent messages from forwarding and saving</td></tr><tr><td>remove_caption</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to copy the messages without their captions</td></tr></tbody></table>

#### sendPhoto

Use this method to send photos. On success, the sent [Message](#message) is returned.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Optional</td><td>Unique identifier of the business connection on behalf of which the message will be sent</td></tr><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target bot, supergroup or channel in the format <code>@username</code></td></tr><tr><td>message_thread_id</td><td>Integer</td><td>Optional</td><td>Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only</td></tr><tr><td>direct_messages_topic_id</td><td>Integer</td><td>Optional</td><td>Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat</td></tr><tr><td>receiver_user_id</td><td>Integer</td><td>Optional</td><td>For outgoing ephemeral messages, unique identifier of the user who will receive the message; for group and supergroup chats only. It is not guaranteed that the user will receive the message, especially if they are offline. See <a href="#ephemeral-messages-and-commands">ephemeral message sending</a> for more details.</td></tr><tr><td>callback_query_id</td><td>String</td><td>Optional</td><td>For outgoing ephemeral messages, identifier of the callback query which triggered the message if any</td></tr><tr><td>photo</td><td><a href="#inputfile">InputFile</a> or String</td><td>Yes</td><td>Photo to send. Pass a file_id as String to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data. The photo must be at most 10 MB in size. The photo's width and height must not exceed 10000 in total. Width and height ratio must be at most 20. <a href="#sending-files">More information on Sending Files »</a></td></tr><tr><td>caption</td><td>String</td><td>Optional</td><td>Photo caption (may also be used when resending photos by <em>file_id</em>), 0-1024 characters after entities parsing</td></tr><tr><td>parse_mode</td><td>String</td><td>Optional</td><td>Mode for parsing entities in the photo caption. See <a href="#formatting-options">formatting options</a> for more details.</td></tr><tr><td>caption_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td>Optional</td><td>A JSON-serialized list of special entities that appear in the caption, which can be specified instead of <em>parse_mode</em></td></tr><tr><td>show_caption_above_media</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the caption must be shown above the message media</td></tr><tr><td>has_spoiler</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the photo needs to be covered with a spoiler animation</td></tr><tr><td>disable_notification</td><td>Boolean</td><td>Optional</td><td>Sends the message <a href="/blog/channels-2-0/#silent-messages">silently</a>. Users will receive a notification with no sound.</td></tr><tr><td>protect_content</td><td>Boolean</td><td>Optional</td><td>Protects the contents of the sent message from forwarding and saving</td></tr><tr><td>allow_paid_broadcast</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to allow up to 1000 messages per second, ignoring <a href="/bots/faq/#how-can-i-message-all-of-my-bot-s-subscribers-at-once">broadcasting limits</a> for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance.</td></tr><tr><td>message_effect_id</td><td>String</td><td>Optional</td><td>Unique identifier of the message effect to be added to the message; for private chats only</td></tr><tr><td>suggested_post_parameters</td><td><a href="#suggestedpostparameters">SuggestedPostParameters</a></td><td>Optional</td><td>A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.</td></tr><tr><td>reply_parameters</td><td><a href="#replyparameters">ReplyParameters</a></td><td>Optional</td><td>Description of the message to reply to</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a> or <a href="#replykeyboardmarkup">ReplyKeyboardMarkup</a> or <a href="#replykeyboardremove">ReplyKeyboardRemove</a> or <a href="#forcereply">ForceReply</a></td><td>Optional</td><td>Additional interface options. A JSON-serialized object for an <a href="/bots/features/#inline-keyboards">inline keyboard</a>, <a href="/bots/features/#keyboards">custom reply keyboard</a>, instructions to remove a reply keyboard or to force a reply from the user.</td></tr></tbody></table>

#### sendLivePhoto

Use this method to send live photos. On success, the sent [Message](#message) is returned.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Optional</td><td>Unique identifier of the business connection on behalf of which the message will be sent</td></tr><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target channel (in the format <code>@channelusername</code>)</td></tr><tr><td>message_thread_id</td><td>Integer</td><td>Optional</td><td>Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only</td></tr><tr><td>direct_messages_topic_id</td><td>Integer</td><td>Optional</td><td>Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat</td></tr><tr><td>receiver_user_id</td><td>Integer</td><td>Optional</td><td>For outgoing ephemeral messages, unique identifier of the user who will receive the message; for group and supergroup chats only. It is not guaranteed that the user will receive the message, especially if they are offline. See <a href="#ephemeral-messages-and-commands">ephemeral message sending</a> for more details.</td></tr><tr><td>callback_query_id</td><td>String</td><td>Optional</td><td>For outgoing ephemeral messages, identifier of the callback query which triggered the message if any</td></tr><tr><td>live_photo</td><td><a href="#inputfile">InputFile</a> or String</td><td>Yes</td><td>Live photo video to send. The video must be no longer than 10 seconds and must not exceed 10 MB in size. Pass a file_id as String to send a video that exists on the Telegram servers (recommended) or upload a new video using multipart/form-data. <a href="#sending-files">More information on Sending Files »</a>. Sending live photos by a URL is currently unsupported.</td></tr><tr><td>photo</td><td><a href="#inputfile">InputFile</a> or String</td><td>Yes</td><td>The static photo to send. Pass a file_id as String to send a photo that exists on the Telegram servers (recommended) or upload a new video using multipart/form-data. <a href="#sending-files">More information on Sending Files »</a>. Sending live photos by a URL is currently unsupported.</td></tr><tr><td>caption</td><td>String</td><td>Optional</td><td>Video caption (may also be used when resending videos by <em>file_id</em>), 0-1024 characters after entities parsing</td></tr><tr><td>parse_mode</td><td>String</td><td>Optional</td><td>Mode for parsing entities in the video caption. See <a href="#formatting-options">formatting options</a> for more details.</td></tr><tr><td>caption_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td>Optional</td><td>A JSON-serialized list of special entities that appear in the caption, which can be specified instead of <em>parse_mode</em></td></tr><tr><td>show_caption_above_media</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the caption must be shown above the message media</td></tr><tr><td>has_spoiler</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the video needs to be covered with a spoiler animation</td></tr><tr><td>disable_notification</td><td>Boolean</td><td>Optional</td><td>Sends the message <a href="/blog/channels-2-0/#silent-messages">silently</a>. Users will receive a notification with no sound.</td></tr><tr><td>protect_content</td><td>Boolean</td><td>Optional</td><td>Protects the contents of the sent message from forwarding and saving</td></tr><tr><td>allow_paid_broadcast</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to allow up to 1000 messages per second, ignoring <a href="/bots/faq/#how-can-i-message-all-of-my-bot-s-subscribers-at-once">broadcasting limits</a> for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance.</td></tr><tr><td>message_effect_id</td><td>String</td><td>Optional</td><td>Unique identifier of the message effect to be added to the message; for private chats only</td></tr><tr><td>suggested_post_parameters</td><td><a href="#suggestedpostparameters">SuggestedPostParameters</a></td><td>Optional</td><td>A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.</td></tr><tr><td>reply_parameters</td><td><a href="#replyparameters">ReplyParameters</a></td><td>Optional</td><td>Description of the message to reply to</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a> or <a href="#replykeyboardmarkup">ReplyKeyboardMarkup</a> or <a href="#replykeyboardremove">ReplyKeyboardRemove</a> or <a href="#forcereply">ForceReply</a></td><td>Optional</td><td>Additional interface options. A JSON-serialized object for an <a href="/bots/features/#inline-keyboards">inline keyboard</a>, <a href="/bots/features/#keyboards">custom reply keyboard</a>, instructions to remove a reply keyboard or to force a reply from the user.</td></tr></tbody></table>

#### sendAudio

Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the .MP3 or .M4A format. On success, the sent [Message](#message) is returned. Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future.

For sending voice messages, use the [sendVoice](#sendvoice) method instead.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Optional</td><td>Unique identifier of the business connection on behalf of which the message will be sent</td></tr><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target bot, supergroup or channel in the format <code>@username</code></td></tr><tr><td>message_thread_id</td><td>Integer</td><td>Optional</td><td>Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only</td></tr><tr><td>direct_messages_topic_id</td><td>Integer</td><td>Optional</td><td>Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat</td></tr><tr><td>receiver_user_id</td><td>Integer</td><td>Optional</td><td>For outgoing ephemeral messages, unique identifier of the user who will receive the message; for group and supergroup chats only. It is not guaranteed that the user will receive the message, especially if they are offline. See <a href="#ephemeral-messages-and-commands">ephemeral message sending</a> for more details.</td></tr><tr><td>callback_query_id</td><td>String</td><td>Optional</td><td>For outgoing ephemeral messages, identifier of the callback query which triggered the message if any</td></tr><tr><td>audio</td><td><a href="#inputfile">InputFile</a> or String</td><td>Yes</td><td>Audio file to send. Pass a file_id as String to send an audio file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an audio file from the Internet, or upload a new one using multipart/form-data. <a href="#sending-files">More information on Sending Files »</a></td></tr><tr><td>caption</td><td>String</td><td>Optional</td><td>Audio caption, 0-1024 characters after entities parsing</td></tr><tr><td>parse_mode</td><td>String</td><td>Optional</td><td>Mode for parsing entities in the audio caption. See <a href="#formatting-options">formatting options</a> for more details.</td></tr><tr><td>caption_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td>Optional</td><td>A JSON-serialized list of special entities that appear in the caption, which can be specified instead of <em>parse_mode</em></td></tr><tr><td>duration</td><td>Integer</td><td>Optional</td><td>Duration of the audio in seconds</td></tr><tr><td>performer</td><td>String</td><td>Optional</td><td>Performer</td></tr><tr><td>title</td><td>String</td><td>Optional</td><td>Track name</td></tr><tr><td>thumbnail</td><td><a href="#inputfile">InputFile</a> or String</td><td>Optional</td><td>Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://&lt;file_attach_name&gt;” if the thumbnail was uploaded using multipart/form-data under &lt;file_attach_name&gt;. <a href="#sending-files">More information on Sending Files »</a></td></tr><tr><td>disable_notification</td><td>Boolean</td><td>Optional</td><td>Sends the message <a href="/blog/channels-2-0/#silent-messages">silently</a>. Users will receive a notification with no sound.</td></tr><tr><td>protect_content</td><td>Boolean</td><td>Optional</td><td>Protects the contents of the sent message from forwarding and saving</td></tr><tr><td>allow_paid_broadcast</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to allow up to 1000 messages per second, ignoring <a href="/bots/faq/#how-can-i-message-all-of-my-bot-s-subscribers-at-once">broadcasting limits</a> for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance.</td></tr><tr><td>message_effect_id</td><td>String</td><td>Optional</td><td>Unique identifier of the message effect to be added to the message; for private chats only</td></tr><tr><td>suggested_post_parameters</td><td><a href="#suggestedpostparameters">SuggestedPostParameters</a></td><td>Optional</td><td>A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.</td></tr><tr><td>reply_parameters</td><td><a href="#replyparameters">ReplyParameters</a></td><td>Optional</td><td>Description of the message to reply to</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a> or <a href="#replykeyboardmarkup">ReplyKeyboardMarkup</a> or <a href="#replykeyboardremove">ReplyKeyboardRemove</a> or <a href="#forcereply">ForceReply</a></td><td>Optional</td><td>Additional interface options. A JSON-serialized object for an <a href="/bots/features/#inline-keyboards">inline keyboard</a>, <a href="/bots/features/#keyboards">custom reply keyboard</a>, instructions to remove a reply keyboard or to force a reply from the user.</td></tr></tbody></table>

#### sendDocument

Use this method to send general files. On success, the sent [Message](#message) is returned. Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Optional</td><td>Unique identifier of the business connection on behalf of which the message will be sent</td></tr><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target bot, supergroup or channel in the format <code>@username</code></td></tr><tr><td>message_thread_id</td><td>Integer</td><td>Optional</td><td>Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only</td></tr><tr><td>direct_messages_topic_id</td><td>Integer</td><td>Optional</td><td>Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat</td></tr><tr><td>receiver_user_id</td><td>Integer</td><td>Optional</td><td>For outgoing ephemeral messages, unique identifier of the user who will receive the message; for group and supergroup chats only. It is not guaranteed that the user will receive the message, especially if they are offline. See <a href="#ephemeral-messages-and-commands">ephemeral message sending</a> for more details.</td></tr><tr><td>callback_query_id</td><td>String</td><td>Optional</td><td>For outgoing ephemeral messages, identifier of the callback query which triggered the message if any</td></tr><tr><td>document</td><td><a href="#inputfile">InputFile</a> or String</td><td>Yes</td><td>File to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. <a href="#sending-files">More information on Sending Files »</a></td></tr><tr><td>thumbnail</td><td><a href="#inputfile">InputFile</a> or String</td><td>Optional</td><td>Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://&lt;file_attach_name&gt;” if the thumbnail was uploaded using multipart/form-data under &lt;file_attach_name&gt;. <a href="#sending-files">More information on Sending Files »</a></td></tr><tr><td>caption</td><td>String</td><td>Optional</td><td>Document caption (may also be used when resending documents by <em>file_id</em>), 0-1024 characters after entities parsing</td></tr><tr><td>parse_mode</td><td>String</td><td>Optional</td><td>Mode for parsing entities in the document caption. See <a href="#formatting-options">formatting options</a> for more details.</td></tr><tr><td>caption_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td>Optional</td><td>A JSON-serialized list of special entities that appear in the caption, which can be specified instead of <em>parse_mode</em></td></tr><tr><td>disable_content_type_detection</td><td>Boolean</td><td>Optional</td><td>Disables automatic server-side content type detection for files uploaded using multipart/form-data</td></tr><tr><td>disable_notification</td><td>Boolean</td><td>Optional</td><td>Sends the message <a href="/blog/channels-2-0/#silent-messages">silently</a>. Users will receive a notification with no sound.</td></tr><tr><td>protect_content</td><td>Boolean</td><td>Optional</td><td>Protects the contents of the sent message from forwarding and saving</td></tr><tr><td>allow_paid_broadcast</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to allow up to 1000 messages per second, ignoring <a href="/bots/faq/#how-can-i-message-all-of-my-bot-s-subscribers-at-once">broadcasting limits</a> for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance.</td></tr><tr><td>message_effect_id</td><td>String</td><td>Optional</td><td>Unique identifier of the message effect to be added to the message; for private chats only</td></tr><tr><td>suggested_post_parameters</td><td><a href="#suggestedpostparameters">SuggestedPostParameters</a></td><td>Optional</td><td>A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.</td></tr><tr><td>reply_parameters</td><td><a href="#replyparameters">ReplyParameters</a></td><td>Optional</td><td>Description of the message to reply to</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a> or <a href="#replykeyboardmarkup">ReplyKeyboardMarkup</a> or <a href="#replykeyboardremove">ReplyKeyboardRemove</a> or <a href="#forcereply">ForceReply</a></td><td>Optional</td><td>Additional interface options. A JSON-serialized object for an <a href="/bots/features/#inline-keyboards">inline keyboard</a>, <a href="/bots/features/#keyboards">custom reply keyboard</a>, instructions to remove a reply keyboard or to force a reply from the user.</td></tr></tbody></table>

#### sendVideo

Use this method to send video files, Telegram clients support MPEG4 videos (other formats may be sent as [Document](#document)). On success, the sent [Message](#message) is returned. Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Optional</td><td>Unique identifier of the business connection on behalf of which the message will be sent</td></tr><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target bot, supergroup or channel in the format <code>@username</code></td></tr><tr><td>message_thread_id</td><td>Integer</td><td>Optional</td><td>Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only</td></tr><tr><td>direct_messages_topic_id</td><td>Integer</td><td>Optional</td><td>Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat</td></tr><tr><td>receiver_user_id</td><td>Integer</td><td>Optional</td><td>For outgoing ephemeral messages, unique identifier of the user who will receive the message; for group and supergroup chats only. It is not guaranteed that the user will receive the message, especially if they are offline. See <a href="#ephemeral-messages-and-commands">ephemeral message sending</a> for more details.</td></tr><tr><td>callback_query_id</td><td>String</td><td>Optional</td><td>For outgoing ephemeral messages, identifier of the callback query which triggered the message if any</td></tr><tr><td>video</td><td><a href="#inputfile">InputFile</a> or String</td><td>Yes</td><td>Video to send. Pass a file_id as String to send a video that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a video from the Internet, or upload a new video using multipart/form-data. <a href="#sending-files">More information on Sending Files »</a></td></tr><tr><td>duration</td><td>Integer</td><td>Optional</td><td>Duration of sent video in seconds</td></tr><tr><td>width</td><td>Integer</td><td>Optional</td><td>Video width</td></tr><tr><td>height</td><td>Integer</td><td>Optional</td><td>Video height</td></tr><tr><td>thumbnail</td><td><a href="#inputfile">InputFile</a> or String</td><td>Optional</td><td>Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://&lt;file_attach_name&gt;” if the thumbnail was uploaded using multipart/form-data under &lt;file_attach_name&gt;. <a href="#sending-files">More information on Sending Files »</a></td></tr><tr><td>cover</td><td><a href="#inputfile">InputFile</a> or String</td><td>Optional</td><td>Cover for the video in the message. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://&lt;file_attach_name&gt;” to upload a new one using multipart/form-data under &lt;file_attach_name&gt; name. <a href="#sending-files">More information on Sending Files »</a></td></tr><tr><td>start_timestamp</td><td>Integer</td><td>Optional</td><td>Start timestamp for the video in the message</td></tr><tr><td>caption</td><td>String</td><td>Optional</td><td>Video caption (may also be used when resending videos by <em>file_id</em>), 0-1024 characters after entities parsing</td></tr><tr><td>parse_mode</td><td>String</td><td>Optional</td><td>Mode for parsing entities in the video caption. See <a href="#formatting-options">formatting options</a> for more details.</td></tr><tr><td>caption_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td>Optional</td><td>A JSON-serialized list of special entities that appear in the caption, which can be specified instead of <em>parse_mode</em></td></tr><tr><td>show_caption_above_media</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the caption must be shown above the message media</td></tr><tr><td>has_spoiler</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the video needs to be covered with a spoiler animation</td></tr><tr><td>supports_streaming</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the uploaded video is suitable for streaming</td></tr><tr><td>disable_notification</td><td>Boolean</td><td>Optional</td><td>Sends the message <a href="/blog/channels-2-0/#silent-messages">silently</a>. Users will receive a notification with no sound.</td></tr><tr><td>protect_content</td><td>Boolean</td><td>Optional</td><td>Protects the contents of the sent message from forwarding and saving</td></tr><tr><td>allow_paid_broadcast</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to allow up to 1000 messages per second, ignoring <a href="/bots/faq/#how-can-i-message-all-of-my-bot-s-subscribers-at-once">broadcasting limits</a> for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance.</td></tr><tr><td>message_effect_id</td><td>String</td><td>Optional</td><td>Unique identifier of the message effect to be added to the message; for private chats only</td></tr><tr><td>suggested_post_parameters</td><td><a href="#suggestedpostparameters">SuggestedPostParameters</a></td><td>Optional</td><td>A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.</td></tr><tr><td>reply_parameters</td><td><a href="#replyparameters">ReplyParameters</a></td><td>Optional</td><td>Description of the message to reply to</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a> or <a href="#replykeyboardmarkup">ReplyKeyboardMarkup</a> or <a href="#replykeyboardremove">ReplyKeyboardRemove</a> or <a href="#forcereply">ForceReply</a></td><td>Optional</td><td>Additional interface options. A JSON-serialized object for an <a href="/bots/features/#inline-keyboards">inline keyboard</a>, <a href="/bots/features/#keyboards">custom reply keyboard</a>, instructions to remove a reply keyboard or to force a reply from the user.</td></tr></tbody></table>

#### sendAnimation

Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound). On success, the sent [Message](#message) is returned. Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Optional</td><td>Unique identifier of the business connection on behalf of which the message will be sent</td></tr><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target bot, supergroup or channel in the format <code>@username</code></td></tr><tr><td>message_thread_id</td><td>Integer</td><td>Optional</td><td>Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only</td></tr><tr><td>direct_messages_topic_id</td><td>Integer</td><td>Optional</td><td>Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat</td></tr><tr><td>receiver_user_id</td><td>Integer</td><td>Optional</td><td>For outgoing ephemeral messages, unique identifier of the user who will receive the message; for group and supergroup chats only. It is not guaranteed that the user will receive the message, especially if they are offline. See <a href="#ephemeral-messages-and-commands">ephemeral message sending</a> for more details.</td></tr><tr><td>callback_query_id</td><td>String</td><td>Optional</td><td>For outgoing ephemeral messages, identifier of the callback query which triggered the message if any</td></tr><tr><td>animation</td><td><a href="#inputfile">InputFile</a> or String</td><td>Yes</td><td>Animation to send. Pass a file_id as String to send an animation that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an animation from the Internet, or upload a new animation using multipart/form-data. <a href="#sending-files">More information on Sending Files »</a></td></tr><tr><td>duration</td><td>Integer</td><td>Optional</td><td>Duration of sent animation in seconds</td></tr><tr><td>width</td><td>Integer</td><td>Optional</td><td>Animation width</td></tr><tr><td>height</td><td>Integer</td><td>Optional</td><td>Animation height</td></tr><tr><td>thumbnail</td><td><a href="#inputfile">InputFile</a> or String</td><td>Optional</td><td>Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://&lt;file_attach_name&gt;” if the thumbnail was uploaded using multipart/form-data under &lt;file_attach_name&gt;. <a href="#sending-files">More information on Sending Files »</a></td></tr><tr><td>caption</td><td>String</td><td>Optional</td><td>Animation caption (may also be used when resending animation by <em>file_id</em>), 0-1024 characters after entities parsing</td></tr><tr><td>parse_mode</td><td>String</td><td>Optional</td><td>Mode for parsing entities in the animation caption. See <a href="#formatting-options">formatting options</a> for more details.</td></tr><tr><td>caption_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td>Optional</td><td>A JSON-serialized list of special entities that appear in the caption, which can be specified instead of <em>parse_mode</em></td></tr><tr><td>show_caption_above_media</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the caption must be shown above the message media</td></tr><tr><td>has_spoiler</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the animation needs to be covered with a spoiler animation</td></tr><tr><td>disable_notification</td><td>Boolean</td><td>Optional</td><td>Sends the message <a href="/blog/channels-2-0/#silent-messages">silently</a>. Users will receive a notification with no sound.</td></tr><tr><td>protect_content</td><td>Boolean</td><td>Optional</td><td>Protects the contents of the sent message from forwarding and saving</td></tr><tr><td>allow_paid_broadcast</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to allow up to 1000 messages per second, ignoring <a href="/bots/faq/#how-can-i-message-all-of-my-bot-s-subscribers-at-once">broadcasting limits</a> for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance.</td></tr><tr><td>message_effect_id</td><td>String</td><td>Optional</td><td>Unique identifier of the message effect to be added to the message; for private chats only</td></tr><tr><td>suggested_post_parameters</td><td><a href="#suggestedpostparameters">SuggestedPostParameters</a></td><td>Optional</td><td>A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.</td></tr><tr><td>reply_parameters</td><td><a href="#replyparameters">ReplyParameters</a></td><td>Optional</td><td>Description of the message to reply to</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a> or <a href="#replykeyboardmarkup">ReplyKeyboardMarkup</a> or <a href="#replykeyboardremove">ReplyKeyboardRemove</a> or <a href="#forcereply">ForceReply</a></td><td>Optional</td><td>Additional interface options. A JSON-serialized object for an <a href="/bots/features/#inline-keyboards">inline keyboard</a>, <a href="/bots/features/#keyboards">custom reply keyboard</a>, instructions to remove a reply keyboard or to force a reply from the user.</td></tr></tbody></table>

#### sendVoice

Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an .OGG file encoded with OPUS, or in .MP3 format, or in .M4A format (other formats may be sent as [Audio](#audio) or [Document](#document)). On success, the sent [Message](#message) is returned. Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Optional</td><td>Unique identifier of the business connection on behalf of which the message will be sent</td></tr><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target bot, supergroup or channel in the format <code>@username</code></td></tr><tr><td>message_thread_id</td><td>Integer</td><td>Optional</td><td>Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only</td></tr><tr><td>direct_messages_topic_id</td><td>Integer</td><td>Optional</td><td>Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat</td></tr><tr><td>receiver_user_id</td><td>Integer</td><td>Optional</td><td>For outgoing ephemeral messages, unique identifier of the user who will receive the message; for group and supergroup chats only. It is not guaranteed that the user will receive the message, especially if they are offline. See <a href="#ephemeral-messages-and-commands">ephemeral message sending</a> for more details.</td></tr><tr><td>callback_query_id</td><td>String</td><td>Optional</td><td>For outgoing ephemeral messages, identifier of the callback query which triggered the message if any</td></tr><tr><td>voice</td><td><a href="#inputfile">InputFile</a> or String</td><td>Yes</td><td>Audio file to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. <a href="#sending-files">More information on Sending Files »</a></td></tr><tr><td>caption</td><td>String</td><td>Optional</td><td>Voice message caption, 0-1024 characters after entities parsing</td></tr><tr><td>parse_mode</td><td>String</td><td>Optional</td><td>Mode for parsing entities in the voice message caption. See <a href="#formatting-options">formatting options</a> for more details.</td></tr><tr><td>caption_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td>Optional</td><td>A JSON-serialized list of special entities that appear in the caption, which can be specified instead of <em>parse_mode</em></td></tr><tr><td>duration</td><td>Integer</td><td>Optional</td><td>Duration of the voice message in seconds</td></tr><tr><td>disable_notification</td><td>Boolean</td><td>Optional</td><td>Sends the message <a href="/blog/channels-2-0/#silent-messages">silently</a>. Users will receive a notification with no sound.</td></tr><tr><td>protect_content</td><td>Boolean</td><td>Optional</td><td>Protects the contents of the sent message from forwarding and saving</td></tr><tr><td>allow_paid_broadcast</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to allow up to 1000 messages per second, ignoring <a href="/bots/faq/#how-can-i-message-all-of-my-bot-s-subscribers-at-once">broadcasting limits</a> for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance.</td></tr><tr><td>message_effect_id</td><td>String</td><td>Optional</td><td>Unique identifier of the message effect to be added to the message; for private chats only</td></tr><tr><td>suggested_post_parameters</td><td><a href="#suggestedpostparameters">SuggestedPostParameters</a></td><td>Optional</td><td>A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.</td></tr><tr><td>reply_parameters</td><td><a href="#replyparameters">ReplyParameters</a></td><td>Optional</td><td>Description of the message to reply to</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a> or <a href="#replykeyboardmarkup">ReplyKeyboardMarkup</a> or <a href="#replykeyboardremove">ReplyKeyboardRemove</a> or <a href="#forcereply">ForceReply</a></td><td>Optional</td><td>Additional interface options. A JSON-serialized object for an <a href="/bots/features/#inline-keyboards">inline keyboard</a>, <a href="/bots/features/#keyboards">custom reply keyboard</a>, instructions to remove a reply keyboard or to force a reply from the user.</td></tr></tbody></table>

#### sendVideoNote

As of [v.4.0](/blog/video-messages-and-telescope/), Telegram clients support rounded square MPEG4 videos of up to 1 minute long. Use this method to send video messages. On success, the sent [Message](#message) is returned.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Optional</td><td>Unique identifier of the business connection on behalf of which the message will be sent</td></tr><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target bot, supergroup or channel in the format <code>@username</code></td></tr><tr><td>message_thread_id</td><td>Integer</td><td>Optional</td><td>Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only</td></tr><tr><td>direct_messages_topic_id</td><td>Integer</td><td>Optional</td><td>Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat</td></tr><tr><td>receiver_user_id</td><td>Integer</td><td>Optional</td><td>For outgoing ephemeral messages, unique identifier of the user who will receive the message; for group and supergroup chats only. It is not guaranteed that the user will receive the message, especially if they are offline. See <a href="#ephemeral-messages-and-commands">ephemeral message sending</a> for more details.</td></tr><tr><td>callback_query_id</td><td>String</td><td>Optional</td><td>For outgoing ephemeral messages, identifier of the callback query which triggered the message if any</td></tr><tr><td>video_note</td><td><a href="#inputfile">InputFile</a> or String</td><td>Yes</td><td>Video note to send. Pass a file_id as String to send a video note that exists on the Telegram servers (recommended) or upload a new video using multipart/form-data. <a href="#sending-files">More information on Sending Files »</a>. Sending video notes by a URL is currently unsupported.</td></tr><tr><td>duration</td><td>Integer</td><td>Optional</td><td>Duration of sent video in seconds</td></tr><tr><td>length</td><td>Integer</td><td>Optional</td><td>Video width and height, i.e. diameter of the video message</td></tr><tr><td>thumbnail</td><td><a href="#inputfile">InputFile</a> or String</td><td>Optional</td><td>Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://&lt;file_attach_name&gt;” if the thumbnail was uploaded using multipart/form-data under &lt;file_attach_name&gt;. <a href="#sending-files">More information on Sending Files »</a></td></tr><tr><td>disable_notification</td><td>Boolean</td><td>Optional</td><td>Sends the message <a href="/blog/channels-2-0/#silent-messages">silently</a>. Users will receive a notification with no sound.</td></tr><tr><td>protect_content</td><td>Boolean</td><td>Optional</td><td>Protects the contents of the sent message from forwarding and saving</td></tr><tr><td>allow_paid_broadcast</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to allow up to 1000 messages per second, ignoring <a href="/bots/faq/#how-can-i-message-all-of-my-bot-s-subscribers-at-once">broadcasting limits</a> for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance.</td></tr><tr><td>message_effect_id</td><td>String</td><td>Optional</td><td>Unique identifier of the message effect to be added to the message; for private chats only</td></tr><tr><td>suggested_post_parameters</td><td><a href="#suggestedpostparameters">SuggestedPostParameters</a></td><td>Optional</td><td>A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.</td></tr><tr><td>reply_parameters</td><td><a href="#replyparameters">ReplyParameters</a></td><td>Optional</td><td>Description of the message to reply to</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a> or <a href="#replykeyboardmarkup">ReplyKeyboardMarkup</a> or <a href="#replykeyboardremove">ReplyKeyboardRemove</a> or <a href="#forcereply">ForceReply</a></td><td>Optional</td><td>Additional interface options. A JSON-serialized object for an <a href="/bots/features/#inline-keyboards">inline keyboard</a>, <a href="/bots/features/#keyboards">custom reply keyboard</a>, instructions to remove a reply keyboard or to force a reply from the user.</td></tr></tbody></table>

#### sendPaidMedia

Use this method to send paid media. On success, the sent [Message](#message) is returned.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Optional</td><td>Unique identifier of the business connection on behalf of which the message will be sent</td></tr><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target bot, supergroup or channel in the format <code>@username</code>. If the chat is a channel, all Telegram Star proceeds from this media will be credited to the chat's balance. Otherwise, they will be credited to the bot's balance.</td></tr><tr><td>message_thread_id</td><td>Integer</td><td>Optional</td><td>Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only</td></tr><tr><td>direct_messages_topic_id</td><td>Integer</td><td>Optional</td><td>Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat</td></tr><tr><td>star_count</td><td>Integer</td><td>Yes</td><td>The number of Telegram Stars that must be paid to buy access to the media; 1-25000</td></tr><tr><td>media</td><td>Array of <a href="#inputpaidmedia">InputPaidMedia</a></td><td>Yes</td><td>A JSON-serialized Array describing the media to be sent; up to 10 items</td></tr><tr><td>payload</td><td>String</td><td>Optional</td><td>Bot-defined paid media payload, 0-128 bytes. This will not be displayed to the user, use it for your internal processes.</td></tr><tr><td>caption</td><td>String</td><td>Optional</td><td>Media caption, 0-1024 characters after entities parsing</td></tr><tr><td>parse_mode</td><td>String</td><td>Optional</td><td>Mode for parsing entities in the media caption. See <a href="#formatting-options">formatting options</a> for more details.</td></tr><tr><td>caption_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td>Optional</td><td>A JSON-serialized list of special entities that appear in the caption, which can be specified instead of <em>parse_mode</em></td></tr><tr><td>show_caption_above_media</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the caption must be shown above the message media</td></tr><tr><td>disable_notification</td><td>Boolean</td><td>Optional</td><td>Sends the message <a href="/blog/channels-2-0/#silent-messages">silently</a>. Users will receive a notification with no sound.</td></tr><tr><td>protect_content</td><td>Boolean</td><td>Optional</td><td>Protects the contents of the sent message from forwarding and saving</td></tr><tr><td>allow_paid_broadcast</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to allow up to 1000 messages per second, ignoring <a href="/bots/faq/#how-can-i-message-all-of-my-bot-s-subscribers-at-once">broadcasting limits</a> for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance.</td></tr><tr><td>suggested_post_parameters</td><td><a href="#suggestedpostparameters">SuggestedPostParameters</a></td><td>Optional</td><td>A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.</td></tr><tr><td>reply_parameters</td><td><a href="#replyparameters">ReplyParameters</a></td><td>Optional</td><td>Description of the message to reply to</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a> or <a href="#replykeyboardmarkup">ReplyKeyboardMarkup</a> or <a href="#replykeyboardremove">ReplyKeyboardRemove</a> or <a href="#forcereply">ForceReply</a></td><td>Optional</td><td>Additional interface options. A JSON-serialized object for an <a href="/bots/features/#inline-keyboards">inline keyboard</a>, <a href="/bots/features/#keyboards">custom reply keyboard</a>, instructions to remove a reply keyboard or to force a reply from the user.</td></tr></tbody></table>

#### sendMediaGroup

Use this method to send a group of photos, live photos, videos, documents or audios as an album. Documents and audio files can be only grouped in an album with messages of the same type. On success, an Array of [Message](#message) objects that were sent is returned.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Optional</td><td>Unique identifier of the business connection on behalf of which the message will be sent</td></tr><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target bot, supergroup or channel in the format <code>@username</code></td></tr><tr><td>message_thread_id</td><td>Integer</td><td>Optional</td><td>Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only</td></tr><tr><td>direct_messages_topic_id</td><td>Integer</td><td>Optional</td><td>Identifier of the direct messages topic to which the messages will be sent; required if the messages are sent to a direct messages chat</td></tr><tr><td>media</td><td>Array of <a href="#inputmediaaudio">InputMediaAudio</a>, <a href="#inputmediadocument">InputMediaDocument</a>, <a href="#inputmedialivephoto">InputMediaLivePhoto</a>, <a href="#inputmediaphoto">InputMediaPhoto</a> and <a href="#inputmediavideo">InputMediaVideo</a></td><td>Yes</td><td>A JSON-serialized Array describing messages to be sent, must include 2-10 items</td></tr><tr><td>disable_notification</td><td>Boolean</td><td>Optional</td><td>Sends messages <a href="/blog/channels-2-0/#silent-messages">silently</a>. Users will receive a notification with no sound.</td></tr><tr><td>protect_content</td><td>Boolean</td><td>Optional</td><td>Protects the contents of the sent messages from forwarding and saving</td></tr><tr><td>allow_paid_broadcast</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to allow up to 1000 messages per second, ignoring <a href="/bots/faq/#how-can-i-message-all-of-my-bot-s-subscribers-at-once">broadcasting limits</a> for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance.</td></tr><tr><td>message_effect_id</td><td>String</td><td>Optional</td><td>Unique identifier of the message effect to be added to the message; for private chats only</td></tr><tr><td>reply_parameters</td><td><a href="#replyparameters">ReplyParameters</a></td><td>Optional</td><td>Description of the message to reply to</td></tr></tbody></table>

#### sendLocation

Use this method to send point on the map. On success, the sent [Message](#message) is returned.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Optional</td><td>Unique identifier of the business connection on behalf of which the message will be sent</td></tr><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target bot, supergroup or channel in the format <code>@username</code></td></tr><tr><td>message_thread_id</td><td>Integer</td><td>Optional</td><td>Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only</td></tr><tr><td>direct_messages_topic_id</td><td>Integer</td><td>Optional</td><td>Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat</td></tr><tr><td>receiver_user_id</td><td>Integer</td><td>Optional</td><td>For outgoing ephemeral messages, unique identifier of the user who will receive the message; for group and supergroup chats only. It is not guaranteed that the user will receive the message, especially if they are offline. See <a href="#ephemeral-messages-and-commands">ephemeral message sending</a> for more details.</td></tr><tr><td>callback_query_id</td><td>String</td><td>Optional</td><td>For outgoing ephemeral messages, identifier of the callback query which triggered the message if any</td></tr><tr><td>latitude</td><td>Float</td><td>Yes</td><td>Latitude of the location</td></tr><tr><td>longitude</td><td>Float</td><td>Yes</td><td>Longitude of the location</td></tr><tr><td>horizontal_accuracy</td><td>Float</td><td>Optional</td><td>The radius of uncertainty for the location, measured in meters; 0-1500</td></tr><tr><td>live_period</td><td>Integer</td><td>Optional</td><td>Period in seconds during which the location will be updated (see <a href="/blog/live-locations/">Live Locations</a>), must be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely. Must be 0 for ephemeral messages.</td></tr><tr><td>heading</td><td>Integer</td><td>Optional</td><td>For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.</td></tr><tr><td>proximity_alert_radius</td><td>Integer</td><td>Optional</td><td>For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.</td></tr><tr><td>disable_notification</td><td>Boolean</td><td>Optional</td><td>Sends the message <a href="/blog/channels-2-0/#silent-messages">silently</a>. Users will receive a notification with no sound.</td></tr><tr><td>protect_content</td><td>Boolean</td><td>Optional</td><td>Protects the contents of the sent message from forwarding and saving</td></tr><tr><td>allow_paid_broadcast</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to allow up to 1000 messages per second, ignoring <a href="/bots/faq/#how-can-i-message-all-of-my-bot-s-subscribers-at-once">broadcasting limits</a> for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance.</td></tr><tr><td>message_effect_id</td><td>String</td><td>Optional</td><td>Unique identifier of the message effect to be added to the message; for private chats only</td></tr><tr><td>suggested_post_parameters</td><td><a href="#suggestedpostparameters">SuggestedPostParameters</a></td><td>Optional</td><td>A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.</td></tr><tr><td>reply_parameters</td><td><a href="#replyparameters">ReplyParameters</a></td><td>Optional</td><td>Description of the message to reply to</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a> or <a href="#replykeyboardmarkup">ReplyKeyboardMarkup</a> or <a href="#replykeyboardremove">ReplyKeyboardRemove</a> or <a href="#forcereply">ForceReply</a></td><td>Optional</td><td>Additional interface options. A JSON-serialized object for an <a href="/bots/features/#inline-keyboards">inline keyboard</a>, <a href="/bots/features/#keyboards">custom reply keyboard</a>, instructions to remove a reply keyboard or to force a reply from the user.</td></tr></tbody></table>

#### sendVenue

Use this method to send information about a venue. On success, the sent [Message](#message) is returned.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Optional</td><td>Unique identifier of the business connection on behalf of which the message will be sent</td></tr><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target bot, supergroup or channel in the format <code>@username</code></td></tr><tr><td>message_thread_id</td><td>Integer</td><td>Optional</td><td>Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only</td></tr><tr><td>direct_messages_topic_id</td><td>Integer</td><td>Optional</td><td>Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat</td></tr><tr><td>receiver_user_id</td><td>Integer</td><td>Optional</td><td>For outgoing ephemeral messages, unique identifier of the user who will receive the message; for group and supergroup chats only. It is not guaranteed that the user will receive the message, especially if they are offline. See <a href="#ephemeral-messages-and-commands">ephemeral message sending</a> for more details.</td></tr><tr><td>callback_query_id</td><td>String</td><td>Optional</td><td>For outgoing ephemeral messages, identifier of the callback query which triggered the message if any</td></tr><tr><td>latitude</td><td>Float</td><td>Yes</td><td>Latitude of the venue</td></tr><tr><td>longitude</td><td>Float</td><td>Yes</td><td>Longitude of the venue</td></tr><tr><td>title</td><td>String</td><td>Yes</td><td>Name of the venue</td></tr><tr><td>address</td><td>String</td><td>Yes</td><td>Address of the venue</td></tr><tr><td>foursquare_id</td><td>String</td><td>Optional</td><td>Foursquare identifier of the venue</td></tr><tr><td>foursquare_type</td><td>String</td><td>Optional</td><td>Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)</td></tr><tr><td>google_place_id</td><td>String</td><td>Optional</td><td>Google Places identifier of the venue</td></tr><tr><td>google_place_type</td><td>String</td><td>Optional</td><td>Google Places type of the venue. (See <a href="https://developers.google.com/places/web-service/supported_types">supported types</a>.)</td></tr><tr><td>disable_notification</td><td>Boolean</td><td>Optional</td><td>Sends the message <a href="/blog/channels-2-0/#silent-messages">silently</a>. Users will receive a notification with no sound.</td></tr><tr><td>protect_content</td><td>Boolean</td><td>Optional</td><td>Protects the contents of the sent message from forwarding and saving</td></tr><tr><td>allow_paid_broadcast</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to allow up to 1000 messages per second, ignoring <a href="/bots/faq/#how-can-i-message-all-of-my-bot-s-subscribers-at-once">broadcasting limits</a> for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance.</td></tr><tr><td>message_effect_id</td><td>String</td><td>Optional</td><td>Unique identifier of the message effect to be added to the message; for private chats only</td></tr><tr><td>suggested_post_parameters</td><td><a href="#suggestedpostparameters">SuggestedPostParameters</a></td><td>Optional</td><td>A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.</td></tr><tr><td>reply_parameters</td><td><a href="#replyparameters">ReplyParameters</a></td><td>Optional</td><td>Description of the message to reply to</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a> or <a href="#replykeyboardmarkup">ReplyKeyboardMarkup</a> or <a href="#replykeyboardremove">ReplyKeyboardRemove</a> or <a href="#forcereply">ForceReply</a></td><td>Optional</td><td>Additional interface options. A JSON-serialized object for an <a href="/bots/features/#inline-keyboards">inline keyboard</a>, <a href="/bots/features/#keyboards">custom reply keyboard</a>, instructions to remove a reply keyboard or to force a reply from the user.</td></tr></tbody></table>

#### sendContact

Use this method to send phone contacts. On success, the sent [Message](#message) is returned.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Optional</td><td>Unique identifier of the business connection on behalf of which the message will be sent</td></tr><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target bot, supergroup or channel in the format <code>@username</code></td></tr><tr><td>message_thread_id</td><td>Integer</td><td>Optional</td><td>Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only</td></tr><tr><td>direct_messages_topic_id</td><td>Integer</td><td>Optional</td><td>Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat</td></tr><tr><td>receiver_user_id</td><td>Integer</td><td>Optional</td><td>For outgoing ephemeral messages, unique identifier of the user who will receive the message; for group and supergroup chats only. It is not guaranteed that the user will receive the message, especially if they are offline. See <a href="#ephemeral-messages-and-commands">ephemeral message sending</a> for more details.</td></tr><tr><td>callback_query_id</td><td>String</td><td>Optional</td><td>For outgoing ephemeral messages, identifier of the callback query which triggered the message if any</td></tr><tr><td>phone_number</td><td>String</td><td>Yes</td><td>Contact's phone number</td></tr><tr><td>first_name</td><td>String</td><td>Yes</td><td>Contact's first name</td></tr><tr><td>last_name</td><td>String</td><td>Optional</td><td>Contact's last name</td></tr><tr><td>vcard</td><td>String</td><td>Optional</td><td>Additional data about the contact in the form of a <a href="https://en.wikipedia.org/wiki/VCard">vCard</a>, 0-2048 bytes</td></tr><tr><td>disable_notification</td><td>Boolean</td><td>Optional</td><td>Sends the message <a href="/blog/channels-2-0/#silent-messages">silently</a>. Users will receive a notification with no sound.</td></tr><tr><td>protect_content</td><td>Boolean</td><td>Optional</td><td>Protects the contents of the sent message from forwarding and saving</td></tr><tr><td>allow_paid_broadcast</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to allow up to 1000 messages per second, ignoring <a href="/bots/faq/#how-can-i-message-all-of-my-bot-s-subscribers-at-once">broadcasting limits</a> for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance.</td></tr><tr><td>message_effect_id</td><td>String</td><td>Optional</td><td>Unique identifier of the message effect to be added to the message; for private chats only</td></tr><tr><td>suggested_post_parameters</td><td><a href="#suggestedpostparameters">SuggestedPostParameters</a></td><td>Optional</td><td>A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.</td></tr><tr><td>reply_parameters</td><td><a href="#replyparameters">ReplyParameters</a></td><td>Optional</td><td>Description of the message to reply to</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a> or <a href="#replykeyboardmarkup">ReplyKeyboardMarkup</a> or <a href="#replykeyboardremove">ReplyKeyboardRemove</a> or <a href="#forcereply">ForceReply</a></td><td>Optional</td><td>Additional interface options. A JSON-serialized object for an <a href="/bots/features/#inline-keyboards">inline keyboard</a>, <a href="/bots/features/#keyboards">custom reply keyboard</a>, instructions to remove a reply keyboard or to force a reply from the user.</td></tr></tbody></table>

#### sendPoll

Use this method to send a native poll. On success, the sent [Message](#message) is returned.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Optional</td><td>Unique identifier of the business connection on behalf of which the message will be sent</td></tr><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target bot, supergroup or channel in the format <code>@username</code>. Polls can't be sent to channel direct messages chats.</td></tr><tr><td>message_thread_id</td><td>Integer</td><td>Optional</td><td>Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only</td></tr><tr><td>question</td><td>String</td><td>Yes</td><td>Poll question, 1-300 characters</td></tr><tr><td>question_parse_mode</td><td>String</td><td>Optional</td><td>Mode for parsing entities in the question. See <a href="#formatting-options">formatting options</a> for more details. Currently, only custom emoji entities are allowed.</td></tr><tr><td>question_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td>Optional</td><td>A JSON-serialized list of special entities that appear in the poll question. It can be specified instead of <em>question_parse_mode</em>.</td></tr><tr><td>options</td><td>Array of <a href="#inputpolloption">InputPollOption</a></td><td>Yes</td><td>A JSON-serialized list of 1-12 answer options</td></tr><tr><td>is_anonymous</td><td>Boolean</td><td>Optional</td><td><em>True</em>, if the poll needs to be anonymous, defaults to <em>True</em></td></tr><tr><td>type</td><td>String</td><td>Optional</td><td>Poll type, “quiz” or “regular”, defaults to “regular”</td></tr><tr><td>allows_multiple_answers</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the poll allows multiple answers, defaults to <em>False</em></td></tr><tr><td>allows_revoting</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the poll allows to change chosen answer options, defaults to <em>False</em> for quizzes and to <em>True</em> for regular polls</td></tr><tr><td>shuffle_options</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the poll options must be shown in random order</td></tr><tr><td>allow_adding_options</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if answer options can be added to the poll after creation; not supported for anonymous polls and quizzes</td></tr><tr><td>hide_results_until_closes</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if poll results must be shown only after the poll closes</td></tr><tr><td>members_only</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if voting is limited to users who have been members of the chat where the poll is being sent for more than 24 hours; for channel chats only</td></tr><tr><td>country_codes</td><td>Array of String</td><td>Optional</td><td>A JSON-serialized list of 0-12 two-letter <a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">ISO 3166-1 alpha-2</a> country codes indicating the countries from which users can vote in the poll; for channel chats only. Use “FT” as a country code to allow users with anonymous numbers to vote. If omitted or empty, then users from any country can participate in the poll.</td></tr><tr><td>correct_option_ids</td><td>Array of Integer</td><td>Optional</td><td>A JSON-serialized list of monotonically increasing 0-based identifiers of the correct answer options, required for polls in quiz mode</td></tr><tr><td>explanation</td><td>String</td><td>Optional</td><td>Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters with at most 2 line feeds after entities parsing</td></tr><tr><td>explanation_parse_mode</td><td>String</td><td>Optional</td><td>Mode for parsing entities in the explanation. See <a href="#formatting-options">formatting options</a> for more details.</td></tr><tr><td>explanation_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td>Optional</td><td>A JSON-serialized list of special entities that appear in the poll explanation. It can be specified instead of <em>explanation_parse_mode</em>.</td></tr><tr><td>explanation_media</td><td><a href="#inputpollmedia">InputPollMedia</a></td><td>Optional</td><td>Media added to the quiz explanation</td></tr><tr><td>open_period</td><td>Integer</td><td>Optional</td><td>Amount of time in seconds the poll will be active after creation, 5-2628000. Can't be used together with <em>close_date</em>.</td></tr><tr><td>close_date</td><td>Integer</td><td>Optional</td><td>Point in time (Unix timestamp) when the poll will be automatically closed. Must be at least 5 and no more than 2628000 seconds in the future. Can't be used together with <em>open_period</em>.</td></tr><tr><td>is_closed</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the poll needs to be immediately closed. This can be useful for poll preview.</td></tr><tr><td>description</td><td>String</td><td>Optional</td><td>Description of the poll to be sent, 0-1024 characters after entities parsing</td></tr><tr><td>description_parse_mode</td><td>String</td><td>Optional</td><td>Mode for parsing entities in the poll description. See <a href="#formatting-options">formatting options</a> for more details.</td></tr><tr><td>description_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td>Optional</td><td>A JSON-serialized list of special entities that appear in the poll description, which can be specified instead of <em>description_parse_mode</em></td></tr><tr><td>media</td><td><a href="#inputpollmedia">InputPollMedia</a></td><td>Optional</td><td>Media added to the poll description</td></tr><tr><td>disable_notification</td><td>Boolean</td><td>Optional</td><td>Sends the message <a href="/blog/channels-2-0/#silent-messages">silently</a>. Users will receive a notification with no sound.</td></tr><tr><td>protect_content</td><td>Boolean</td><td>Optional</td><td>Protects the contents of the sent message from forwarding and saving</td></tr><tr><td>allow_paid_broadcast</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to allow up to 1000 messages per second, ignoring <a href="/bots/faq/#how-can-i-message-all-of-my-bot-s-subscribers-at-once">broadcasting limits</a> for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance.</td></tr><tr><td>message_effect_id</td><td>String</td><td>Optional</td><td>Unique identifier of the message effect to be added to the message; for private chats only</td></tr><tr><td>reply_parameters</td><td><a href="#replyparameters">ReplyParameters</a></td><td>Optional</td><td>Description of the message to reply to</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a> or <a href="#replykeyboardmarkup">ReplyKeyboardMarkup</a> or <a href="#replykeyboardremove">ReplyKeyboardRemove</a> or <a href="#forcereply">ForceReply</a></td><td>Optional</td><td>Additional interface options. A JSON-serialized object for an <a href="/bots/features/#inline-keyboards">inline keyboard</a>, <a href="/bots/features/#keyboards">custom reply keyboard</a>, instructions to remove a reply keyboard or to force a reply from the user.</td></tr></tbody></table>

#### sendChecklist

Use this method to send a checklist on behalf of a connected business account. On success, the sent [Message](#message) is returned.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Yes</td><td>Unique identifier of the business connection on behalf of which the message will be sent</td></tr><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target bot in the format <code>@username</code></td></tr><tr><td>checklist</td><td><a href="#inputchecklist">InputChecklist</a></td><td>Yes</td><td>A JSON-serialized object for the checklist to send</td></tr><tr><td>disable_notification</td><td>Boolean</td><td>Optional</td><td>Sends the message silently. Users will receive a notification with no sound.</td></tr><tr><td>protect_content</td><td>Boolean</td><td>Optional</td><td>Protects the contents of the sent message from forwarding and saving</td></tr><tr><td>message_effect_id</td><td>String</td><td>Optional</td><td>Unique identifier of the message effect to be added to the message</td></tr><tr><td>reply_parameters</td><td><a href="#replyparameters">ReplyParameters</a></td><td>Optional</td><td>A JSON-serialized object for description of the message to reply to</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td><td>Optional</td><td>A JSON-serialized object for an <a href="/bots/features/#inline-keyboards">inline keyboard</a></td></tr></tbody></table>

#### sendDice

Use this method to send an animated emoji that will display a random value. On success, the sent [Message](#message) is returned.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Optional</td><td>Unique identifier of the business connection on behalf of which the message will be sent</td></tr><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target bot, supergroup or channel in the format <code>@username</code></td></tr><tr><td>message_thread_id</td><td>Integer</td><td>Optional</td><td>Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only</td></tr><tr><td>direct_messages_topic_id</td><td>Integer</td><td>Optional</td><td>Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat</td></tr><tr><td>emoji</td><td>String</td><td>Optional</td><td>Emoji on which the dice throw animation is based. Currently, must be one of “<img class="emoji" src="https://telegram.org/img/emoji/40/F09F8EB2.png" width="20" height="20" alt="🎲">”, “<img class="emoji" src="https://telegram.org/img/emoji/40/F09F8EAF.png" width="20" height="20" alt="🎯">”, “<img class="emoji" src="https://telegram.org/img/emoji/40/F09F8F80.png" width="20" height="20" alt="🏀">”, “<img class="emoji" src="https://telegram.org/img/emoji/40/E29ABD.png" width="20" height="20" alt="⚽">”, “<img class="emoji" src="https://telegram.org/img/emoji/40/F09F8EB3.png" width="20" height="20" alt="🎳">”, or “<img class="emoji" src="https://telegram.org/img/emoji/40/F09F8EB0.png" width="20" height="20" alt="🎰">”. Dice can have values 1-6 for “<img class="emoji" src="https://telegram.org/img/emoji/40/F09F8EB2.png" width="20" height="20" alt="🎲">”, “<img class="emoji" src="https://telegram.org/img/emoji/40/F09F8EAF.png" width="20" height="20" alt="🎯">” and “<img class="emoji" src="https://telegram.org/img/emoji/40/F09F8EB3.png" width="20" height="20" alt="🎳">”, values 1-5 for “<img class="emoji" src="https://telegram.org/img/emoji/40/F09F8F80.png" width="20" height="20" alt="🏀">” and “<img class="emoji" src="https://telegram.org/img/emoji/40/E29ABD.png" width="20" height="20" alt="⚽">”, and values 1-64 for “<img class="emoji" src="https://telegram.org/img/emoji/40/F09F8EB0.png" width="20" height="20" alt="🎰">”. Defaults to “<img class="emoji" src="https://telegram.org/img/emoji/40/F09F8EB2.png" width="20" height="20" alt="🎲">”.</td></tr><tr><td>disable_notification</td><td>Boolean</td><td>Optional</td><td>Sends the message <a href="/blog/channels-2-0/#silent-messages">silently</a>. Users will receive a notification with no sound.</td></tr><tr><td>protect_content</td><td>Boolean</td><td>Optional</td><td>Protects the contents of the sent message from forwarding</td></tr><tr><td>allow_paid_broadcast</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to allow up to 1000 messages per second, ignoring <a href="/bots/faq/#how-can-i-message-all-of-my-bot-s-subscribers-at-once">broadcasting limits</a> for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance.</td></tr><tr><td>message_effect_id</td><td>String</td><td>Optional</td><td>Unique identifier of the message effect to be added to the message; for private chats only</td></tr><tr><td>suggested_post_parameters</td><td><a href="#suggestedpostparameters">SuggestedPostParameters</a></td><td>Optional</td><td>A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.</td></tr><tr><td>reply_parameters</td><td><a href="#replyparameters">ReplyParameters</a></td><td>Optional</td><td>Description of the message to reply to</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a> or <a href="#replykeyboardmarkup">ReplyKeyboardMarkup</a> or <a href="#replykeyboardremove">ReplyKeyboardRemove</a> or <a href="#forcereply">ForceReply</a></td><td>Optional</td><td>Additional interface options. A JSON-serialized object for an <a href="/bots/features/#inline-keyboards">inline keyboard</a>, <a href="/bots/features/#keyboards">custom reply keyboard</a>, instructions to remove a reply keyboard or to force a reply from the user.</td></tr></tbody></table>

#### sendMessageDraft

Use this method to stream a partial message to a user while the message is being generated. Note that the streamed draft is ephemeral and acts as a temporary 30-second preview - once the output is finalized, you **must** call [sendMessage](#sendmessage) with the complete message to persist it in the user's chat. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer</td><td>Yes</td><td>Unique identifier for the target private chat</td></tr><tr><td>message_thread_id</td><td>Integer</td><td>Optional</td><td>Unique identifier for the target message thread</td></tr><tr><td>draft_id</td><td>Integer</td><td>Yes</td><td>Unique identifier of the message draft; must be non-zero. Changes to drafts with the same identifier are animated.</td></tr><tr><td>text</td><td>String</td><td>Optional</td><td>Text of the message to be sent, 0-4096 characters after entities parsing. Pass an empty text to show a “Thinking…” placeholder.</td></tr><tr><td>parse_mode</td><td>String</td><td>Optional</td><td>Mode for parsing entities in the message text. See <a href="#formatting-options">formatting options</a> for more details.</td></tr><tr><td>entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td>Optional</td><td>A JSON-serialized list of special entities that appear in message text, which can be specified instead of <em>parse_mode</em></td></tr></tbody></table>

#### sendChatAction

Use this method when you need to tell the user that something is happening on the bot's side. The status is set for 5 seconds or less (when a message arrives from your bot, Telegram clients clear its typing status). Returns _True_ on success.

> Example: The [ImageBot](https://t.me/imagebot) needs some time to process a request and upload the image. Instead of sending a text message along the lines of “Retrieving image, please wait…”, the bot may use [sendChatAction](#sendchataction) with _action_ = _upload\_photo_. The user will see a “sending photo” status for the bot.

We only recommend using this method when a response from the bot will take a **noticeable** amount of time to arrive.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Optional</td><td>Unique identifier of the business connection on behalf of which the action will be sent</td></tr><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target bot or supergroup in the format <code>@username</code>. Channel chats and channel direct messages chats aren't supported.</td></tr><tr><td>message_thread_id</td><td>Integer</td><td>Optional</td><td>Unique identifier for the target message thread or topic of a forum; for supergroups and private chats of bots with forum topic mode enabled only</td></tr><tr><td>action</td><td>String</td><td>Yes</td><td>Type of action to broadcast. Choose one, depending on what the user is about to receive: <em>typing</em> for <a href="#sendmessage">text messages</a>, <em>upload_photo</em> for <a href="#sendphoto">photos</a>, <em>record_video</em> or <em>upload_video</em> for <a href="#sendvideo">videos</a>, <em>record_voice</em> or <em>upload_voice</em> for <a href="#sendvoice">voice notes</a>, <em>upload_document</em> for <a href="#senddocument">general files</a>, <em>choose_sticker</em> for <a href="#sendsticker">stickers</a>, <em>find_location</em> for <a href="#sendlocation">location data</a>, <em>record_video_note</em> or <em>upload_video_note</em> for <a href="#sendvideonote">video notes</a>.</td></tr></tbody></table>

#### setMessageReaction

Use this method to change the chosen reactions on a message. Service messages of some types can't be reacted to. Automatically forwarded messages from a channel to its discussion group have the same available reactions as messages in the channel. Bots can't use paid reactions. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target bot, supergroup or channel in the format <code>@username</code></td></tr><tr><td>message_id</td><td>Integer</td><td>Yes</td><td>Identifier of the target message. If the message belongs to a media group, the reaction is set to the first non-deleted message in the group instead.</td></tr><tr><td>reaction</td><td>Array of <a href="#reactiontype">ReactionType</a></td><td>Optional</td><td>A JSON-serialized list of reaction types to set on the message. Currently, as non-premium users, bots can set up to one reaction per message. A custom emoji reaction can be used if it is either already present on the message or explicitly allowed by chat administrators. Paid reactions can't be used by bots.</td></tr><tr><td>is_big</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to set the reaction with a big animation</td></tr></tbody></table>

#### getUserProfilePhotos

Use this method to get a list of profile pictures for a user. Returns a [UserProfilePhotos](#userprofilephotos) object.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>user_id</td><td>Integer</td><td>Yes</td><td>Unique identifier of the target user</td></tr><tr><td>offset</td><td>Integer</td><td>Optional</td><td>Sequential number of the first photo to be returned. By default, all photos are returned.</td></tr><tr><td>limit</td><td>Integer</td><td>Optional</td><td>Limits the number of photos to be retrieved. Values between 1-100 are accepted. Defaults to 100.</td></tr></tbody></table>

#### getUserProfileAudios

Use this method to get a list of profile audios for a user. Returns a [UserProfileAudios](#userprofileaudios) object.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>user_id</td><td>Integer</td><td>Yes</td><td>Unique identifier of the target user</td></tr><tr><td>offset</td><td>Integer</td><td>Optional</td><td>Sequential number of the first audio to be returned. By default, all audios are returned.</td></tr><tr><td>limit</td><td>Integer</td><td>Optional</td><td>Limits the number of audios to be retrieved. Values between 1-100 are accepted. Defaults to 100.</td></tr></tbody></table>

#### setUserEmojiStatus

Changes the emoji status for a given user that previously allowed the bot to manage their emoji status via the Mini App method [requestEmojiStatusAccess](/bots/webapps/#initializing-mini-apps). Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>user_id</td><td>Integer</td><td>Yes</td><td>Unique identifier of the target user</td></tr><tr><td>emoji_status_custom_emoji_id</td><td>String</td><td>Optional</td><td>Custom emoji identifier of the emoji status to set. Pass an empty string to remove the status.</td></tr><tr><td>emoji_status_expiration_date</td><td>Integer</td><td>Optional</td><td>Expiration date of the emoji status, if any</td></tr></tbody></table>

#### getFile

Use this method to get basic information about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a [File](#file) object is returned. The file can then be downloaded via the link `https://api.telegram.org/file/bot<token>/<file_path>`, where `<file_path>` is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling [getFile](#getfile) again.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>file_id</td><td>String</td><td>Yes</td><td>File identifier to get information about</td></tr></tbody></table>

**Note:** This function may not preserve the original file name and MIME type. You should save the file's MIME type and name (if available) when the File object is received.

#### banChatMember

Use this method to ban a user in a group, a supergroup or a channel. In the case of supergroups and channels, the user will not be able to return to the chat on their own using invite links, etc., unless [unbanned](#unbanchatmember) first. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target group or username of the target supergroup or channel in the format <code>@username</code></td></tr><tr><td>user_id</td><td>Integer</td><td>Yes</td><td>Unique identifier of the target user</td></tr><tr><td>until_date</td><td>Integer</td><td>Optional</td><td>Date when the user will be unbanned; Unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever. Applied for supergroups and channels only.</td></tr><tr><td>revoke_messages</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to delete all messages from the chat for the user that is being removed. If <em>False</em>, the user will be able to see messages in the group that were sent before the user was removed. Always <em>True</em> for supergroups and channels.</td></tr></tbody></table>

#### unbanChatMember

Use this method to unban a previously banned user in a supergroup or channel. The user will **not** return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. By default, this method guarantees that after the call the user is not a member of the chat, but will be able to join it. So if the user is a member of the chat they will also be **removed** from the chat. If you don't want this, use the parameter _only\_if\_banned_. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target group or username of the target supergroup or channel in the format <code>@username</code></td></tr><tr><td>user_id</td><td>Integer</td><td>Yes</td><td>Unique identifier of the target user</td></tr><tr><td>only_if_banned</td><td>Boolean</td><td>Optional</td><td>Do nothing if the user is not banned</td></tr></tbody></table>

#### restrictChatMember

Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate administrator rights. Pass _True_ for all permissions to lift restrictions from a user. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target supergroup in the format <code>@username</code></td></tr><tr><td>user_id</td><td>Integer</td><td>Yes</td><td>Unique identifier of the target user</td></tr><tr><td>permissions</td><td><a href="#chatpermissions">ChatPermissions</a></td><td>Yes</td><td>A JSON-serialized object for new user permissions</td></tr><tr><td>use_independent_chat_permissions</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if chat permissions are set independently. Otherwise, the <em>can_send_other_messages</em> and <em>can_add_web_page_previews</em> permissions will imply the <em>can_send_messages</em>, <em>can_send_audios</em>, <em>can_send_documents</em>, <em>can_send_photos</em>, <em>can_send_videos</em>, <em>can_send_video_notes</em>, and <em>can_send_voice_notes</em> permissions; the <em>can_send_polls</em> permission will imply the <em>can_send_messages</em> permission.</td></tr><tr><td>until_date</td><td>Integer</td><td>Optional</td><td>Date when restrictions will be lifted for the user; Unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever.</td></tr></tbody></table>

#### promoteChatMember

Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Pass _False_ for all boolean parameters to demote a user. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target channel in the format <code>@username</code></td></tr><tr><td>user_id</td><td>Integer</td><td>Yes</td><td>Unique identifier of the target user</td></tr><tr><td>is_anonymous</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the administrator's presence in the chat is hidden</td></tr><tr><td>can_manage_chat</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages, ignore slow mode, and send messages to the chat without paying Telegram Stars. Implied by any other administrator privilege.</td></tr><tr><td>can_delete_messages</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the administrator can delete messages of other users</td></tr><tr><td>can_manage_video_chats</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the administrator can manage video chats</td></tr><tr><td>can_restrict_members</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the administrator can restrict, ban or unban chat members, or access supergroup statistics. For backward compatibility, defaults to <em>True</em> for promotions of channel administrators.</td></tr><tr><td>can_promote_members</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by him)</td></tr><tr><td>can_change_info</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the administrator can change chat title, photo and other settings</td></tr><tr><td>can_invite_users</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the administrator can invite new users to the chat</td></tr><tr><td>can_post_stories</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the administrator can post stories to the chat</td></tr><tr><td>can_edit_stories</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat's story archive</td></tr><tr><td>can_delete_stories</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the administrator can delete stories posted by other users</td></tr><tr><td>can_post_messages</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the administrator can post messages in the channel, approve suggested posts, or access channel statistics; for channels only</td></tr><tr><td>can_edit_messages</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the administrator can edit messages of other users and can pin messages; for channels only</td></tr><tr><td>can_pin_messages</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the administrator can pin messages; for supergroups only</td></tr><tr><td>can_manage_topics</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only</td></tr><tr><td>can_manage_direct_messages</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the administrator can manage direct messages within the channel and decline suggested posts; for channels only</td></tr><tr><td>can_manage_tags</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the administrator can edit the tags of regular members; for groups and supergroups only</td></tr></tbody></table>

#### setChatAdministratorCustomTitle

Use this method to set a custom title for an administrator in a supergroup promoted by the bot. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target supergroup in the format <code>@username</code></td></tr><tr><td>user_id</td><td>Integer</td><td>Yes</td><td>Unique identifier of the target user</td></tr><tr><td>custom_title</td><td>String</td><td>Yes</td><td>New custom title for the administrator; 0-16 characters, emoji are not allowed</td></tr></tbody></table>

#### setChatMemberTag

Use this method to set a tag for a regular member in a group or a supergroup. The bot must be an administrator in the chat for this to work and must have the _can\_manage\_tags_ administrator right. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target supergroup in the format <code>@username</code></td></tr><tr><td>user_id</td><td>Integer</td><td>Yes</td><td>Unique identifier of the target user</td></tr><tr><td>tag</td><td>String</td><td>Optional</td><td>New tag for the member; 0-16 characters, emoji are not allowed</td></tr></tbody></table>

#### banChatSenderChat

Use this method to ban a channel chat in a supergroup or a channel. Until the chat is [unbanned](#unbanchatsenderchat), the owner of the banned chat won't be able to send messages on behalf of **any of their channels**. The bot must be an administrator in the supergroup or channel for this to work and must have the appropriate administrator rights. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target channel in the format <code>@username</code></td></tr><tr><td>sender_chat_id</td><td>Integer</td><td>Yes</td><td>Unique identifier of the target sender chat</td></tr></tbody></table>

#### unbanChatSenderChat

Use this method to unban a previously banned channel chat in a supergroup or channel. The bot must be an administrator for this to work and must have the appropriate administrator rights. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target channel in the format <code>@username</code></td></tr><tr><td>sender_chat_id</td><td>Integer</td><td>Yes</td><td>Unique identifier of the target sender chat</td></tr></tbody></table>

#### setChatPermissions

Use this method to set default chat permissions for all members. The bot must be an administrator in the group or a supergroup for this to work and must have the _can\_restrict\_members_ administrator rights. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target supergroup in the format <code>@username</code></td></tr><tr><td>permissions</td><td><a href="#chatpermissions">ChatPermissions</a></td><td>Yes</td><td>A JSON-serialized object for new default chat permissions</td></tr><tr><td>use_independent_chat_permissions</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if chat permissions are set independently. Otherwise, the <em>can_send_other_messages</em> and <em>can_add_web_page_previews</em> permissions will imply the <em>can_send_messages</em>, <em>can_send_audios</em>, <em>can_send_documents</em>, <em>can_send_photos</em>, <em>can_send_videos</em>, <em>can_send_video_notes</em>, and <em>can_send_voice_notes</em> permissions; the <em>can_send_polls</em> permission will imply the <em>can_send_messages</em> permission.</td></tr></tbody></table>

#### exportChatInviteLink

Use this method to generate a new primary invite link for a chat; any previously generated primary link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the new invite link as _String_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target channel in the format <code>@username</code></td></tr></tbody></table>

> Note: Each administrator in a chat generates their own invite links. Bots can't use invite links generated by other administrators. If you want your bot to work with invite links, it will need to generate its own link using [exportChatInviteLink](#exportchatinvitelink) or by calling the [getChat](#getchat) method. If your bot needs to generate a new primary invite link replacing its previous one, use [exportChatInviteLink](#exportchatinvitelink) again.

#### createChatInviteLink

Use this method to create an additional invite link for a chat. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. The link can be revoked using the method [revokeChatInviteLink](#revokechatinvitelink). Returns the new invite link as [ChatInviteLink](#chatinvitelink) object.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target channel in the format <code>@username</code></td></tr><tr><td>name</td><td>String</td><td>Optional</td><td>Invite link name; 0-32 characters</td></tr><tr><td>expire_date</td><td>Integer</td><td>Optional</td><td>Point in time (Unix timestamp) when the link will expire</td></tr><tr><td>member_limit</td><td>Integer</td><td>Optional</td><td>The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999</td></tr><tr><td>creates_join_request</td><td>Boolean</td><td>Optional</td><td><em>True</em>, if users joining the chat via the link need to be approved by chat administrators. If <em>True</em>, <em>member_limit</em> can't be specified.</td></tr></tbody></table>

#### editChatInviteLink

Use this method to edit a non-primary invite link created by the bot. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the edited invite link as a [ChatInviteLink](#chatinvitelink) object.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target channel in the format <code>@username</code></td></tr><tr><td>invite_link</td><td>String</td><td>Yes</td><td>The invite link to edit</td></tr><tr><td>name</td><td>String</td><td>Optional</td><td>Invite link name; 0-32 characters</td></tr><tr><td>expire_date</td><td>Integer</td><td>Optional</td><td>Point in time (Unix timestamp) when the link will expire</td></tr><tr><td>member_limit</td><td>Integer</td><td>Optional</td><td>The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999</td></tr><tr><td>creates_join_request</td><td>Boolean</td><td>Optional</td><td><em>True</em>, if users joining the chat via the link need to be approved by chat administrators. If <em>True</em>, <em>member_limit</em> can't be specified.</td></tr></tbody></table>

#### createChatSubscriptionInviteLink

Use this method to create a [subscription invite link](/blog/superchannels-star-reactions-subscriptions/#star-subscriptions) for a channel chat. The bot must have the _can\_invite\_users_ administrator rights. The link can be edited using the method [editChatSubscriptionInviteLink](#editchatsubscriptioninvitelink) or revoked using the method [revokeChatInviteLink](#revokechatinvitelink). Returns the new invite link as a [ChatInviteLink](#chatinvitelink) object.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target channel chat or username of the target channel in the format <code>@username</code></td></tr><tr><td>name</td><td>String</td><td>Optional</td><td>Invite link name; 0-32 characters</td></tr><tr><td>subscription_period</td><td>Integer</td><td>Yes</td><td>The number of seconds the subscription will be active for before the next payment. Currently, it must always be 2592000 (30 days).</td></tr><tr><td>subscription_price</td><td>Integer</td><td>Yes</td><td>The amount of Telegram Stars a user must pay initially and after each subsequent subscription period to be a member of the chat; 1-10000</td></tr></tbody></table>

#### editChatSubscriptionInviteLink

Use this method to edit a subscription invite link created by the bot. The bot must have the _can\_invite\_users_ administrator rights. Returns the edited invite link as a [ChatInviteLink](#chatinvitelink) object.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target channel in the format <code>@username</code></td></tr><tr><td>invite_link</td><td>String</td><td>Yes</td><td>The invite link to edit</td></tr><tr><td>name</td><td>String</td><td>Optional</td><td>Invite link name; 0-32 characters</td></tr></tbody></table>

#### revokeChatInviteLink

Use this method to revoke an invite link created by the bot. If the primary link is revoked, a new link is automatically generated. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the revoked invite link as [ChatInviteLink](#chatinvitelink) object.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier of the target chat or username of the target channel in the format <code>@username</code></td></tr><tr><td>invite_link</td><td>String</td><td>Yes</td><td>The invite link to revoke</td></tr></tbody></table>

#### approveChatJoinRequest

Use this method to approve a chat join request. The bot must be an administrator in the chat for this to work and must have the _can\_invite\_users_ administrator right. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target channel in the format <code>@username</code></td></tr><tr><td>user_id</td><td>Integer</td><td>Yes</td><td>Unique identifier of the target user</td></tr></tbody></table>

#### declineChatJoinRequest

Use this method to decline a chat join request. The bot must be an administrator in the chat for this to work and must have the _can\_invite\_users_ administrator right. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target channel in the format <code>@username</code></td></tr><tr><td>user_id</td><td>Integer</td><td>Yes</td><td>Unique identifier of the target user</td></tr></tbody></table>

#### answerChatJoinRequestQuery

Use this method to process a received chat join request query. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_join_request_query_id</td><td>String</td><td>Yes</td><td>Unique identifier of the join request query</td></tr><tr><td>result</td><td>String</td><td>Yes</td><td>Result of the query. Must be either “approve” to allow the user to join the chat, “decline” to disallow the user to join the chat, or “queue” to leave the decision to other administrators.</td></tr></tbody></table>

#### sendChatJoinRequestWebApp

Use this method to process a received chat join request query by showing a Mini App to the user before deciding the outcome. Call [answerChatJoinRequestQuery](#answerchatjoinrequestquery) to resolve the join request query based on the user interaction with the Mini App. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_join_request_query_id</td><td>String</td><td>Yes</td><td>Unique identifier of the join request query</td></tr><tr><td>web_app_url</td><td>String</td><td>Yes</td><td>An HTTPS URL of a Web App to be opened with additional data as specified in <a href="/bots/webapps/#initializing-mini-apps">Initializing Web Apps</a></td></tr></tbody></table>

#### setChatPhoto

Use this method to set a new profile photo for the chat. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target channel in the format <code>@username</code></td></tr><tr><td>photo</td><td><a href="#inputfile">InputFile</a></td><td>Yes</td><td>New chat photo, uploaded using multipart/form-data</td></tr></tbody></table>

#### deleteChatPhoto

Use this method to delete a chat photo. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target channel in the format <code>@username</code></td></tr></tbody></table>

#### setChatTitle

Use this method to change the title of a chat. Titles can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target channel in the format <code>@username</code></td></tr><tr><td>title</td><td>String</td><td>Yes</td><td>New chat title, 1-128 characters</td></tr></tbody></table>

#### setChatDescription

Use this method to change the description of a group, a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target channel in the format <code>@username</code></td></tr><tr><td>description</td><td>String</td><td>Optional</td><td>New chat description, 0-255 characters</td></tr></tbody></table>

#### pinChatMessage

Use this method to add a message to the list of pinned messages in a chat. In private chats and channel direct messages chats, all non-service messages can be pinned. Conversely, the bot must be an administrator with the 'can\_pin\_messages' right or the 'can\_edit\_messages' right to pin messages in groups and channels respectively. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Optional</td><td>Unique identifier of the business connection on behalf of which the message will be pinned</td></tr><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target channel in the format <code>@username</code></td></tr><tr><td>message_id</td><td>Integer</td><td>Yes</td><td>Identifier of a message to pin</td></tr><tr><td>disable_notification</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if it is not necessary to send a notification to all chat members about the new pinned message. Notifications are always disabled in channels and private chats.</td></tr></tbody></table>

#### unpinChatMessage

Use this method to remove a message from the list of pinned messages in a chat. In private chats and channel direct messages chats, all messages can be unpinned. Conversely, the bot must be an administrator with the 'can\_pin\_messages' right or the 'can\_edit\_messages' right to unpin messages in groups and channels respectively. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Optional</td><td>Unique identifier of the business connection on behalf of which the message will be unpinned</td></tr><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target channel in the format <code>@username</code></td></tr><tr><td>message_id</td><td>Integer</td><td>Optional</td><td>Identifier of the message to unpin. Required if <em>business_connection_id</em> is specified. If not specified, the most recent pinned message (by sending date) will be unpinned.</td></tr></tbody></table>

#### unpinAllChatMessages

Use this method to clear the list of pinned messages in a chat. In private chats and channel direct messages chats, no additional rights are required to unpin all pinned messages. Conversely, the bot must be an administrator with the 'can\_pin\_messages' right or the 'can\_edit\_messages' right to unpin all pinned messages in groups and channels respectively. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target channel in the format <code>@username</code></td></tr></tbody></table>

#### leaveChat

Use this method for your bot to leave a group, supergroup or channel. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target supergroup or channel in the format <code>@username</code>. Channel direct messages chats aren't supported; leave the corresponding channel instead.</td></tr></tbody></table>

#### getChat

Use this method to get up-to-date information about the chat. Returns a [ChatFullInfo](#chatfullinfo) object on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target supergroup or channel in the format <code>@username</code></td></tr></tbody></table>

#### getChatAdministrators

Use this method to get a list of administrators in a chat. Returns an Array of [ChatMember](#chatmember) objects.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target supergroup or channel in the format <code>@username</code></td></tr><tr><td>return_bots</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to additionally receive all bots that are administrators of the chat. By default, bots other than the current bot are omitted.</td></tr></tbody></table>

#### getChatMemberCount

Use this method to get the number of members in a chat. Returns _Integer_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target supergroup or channel in the format <code>@username</code></td></tr></tbody></table>

#### getChatMember

Use this method to get information about a member of a chat. The method is only guaranteed to work for other users if the bot is an administrator in the chat. Returns a [ChatMember](#chatmember) object on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target supergroup or channel in the format <code>@username</code></td></tr><tr><td>user_id</td><td>Integer</td><td>Yes</td><td>Unique identifier of the target user</td></tr></tbody></table>

#### getUserPersonalChatMessages

Use this method to get the last messages from the personal chat (i.e., the chat currently added to their profile) of a given user. On success, an Array of [Message](#message) objects is returned.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>user_id</td><td>Integer</td><td>Yes</td><td>Unique identifier for the target user</td></tr><tr><td>limit</td><td>Integer</td><td>Yes</td><td>The maximum number of messages to return; 1-20</td></tr></tbody></table>

#### setChatStickerSet

Use this method to set a new group sticker set for a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field _can\_set\_sticker\_set_ optionally returned in [getChat](#getchat) requests to check if the bot can use this method. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target supergroup in the format <code>@username</code></td></tr><tr><td>sticker_set_name</td><td>String</td><td>Yes</td><td>Name of the sticker set to be set as the group sticker set</td></tr></tbody></table>

#### deleteChatStickerSet

Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field _can\_set\_sticker\_set_ optionally returned in [getChat](#getchat) requests to check if the bot can use this method. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target supergroup in the format <code>@username</code></td></tr></tbody></table>

#### getForumTopicIconStickers

Use this method to get custom emoji stickers, which can be used as a forum topic icon by any user. Requires no parameters. Returns an Array of [Sticker](#sticker) objects.

#### createForumTopic

Use this method to create a topic in a forum supergroup chat or a private chat with a user. In the case of a supergroup chat the bot must be an administrator in the chat for this to work and must have the _can\_manage\_topics_ administrator right. Returns information about the created topic as a [ForumTopic](#forumtopic) object.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target supergroup in the format <code>@username</code></td></tr><tr><td>name</td><td>String</td><td>Yes</td><td>Topic name, 1-128 characters</td></tr><tr><td>icon_color</td><td>Integer</td><td>Optional</td><td>Color of the topic icon in RGB format. Currently, must be one of 7322096 (0x6FB9F0), 16766590 (0xFFD67E), 13338331 (0xCB86DB), 9367192 (0x8EEE98), 16749490 (0xFF93B2), or 16478047 (0xFB6F5F).</td></tr><tr><td>icon_custom_emoji_id</td><td>String</td><td>Optional</td><td>Unique identifier of the custom emoji shown as the topic icon. Use <a href="#getforumtopiciconstickers">getForumTopicIconStickers</a> to get all allowed custom emoji identifiers.</td></tr></tbody></table>

#### editForumTopic

Use this method to edit name and icon of a topic in a forum supergroup chat or a private chat with a user. In the case of a supergroup chat the bot must be an administrator in the chat for this to work and must have the _can\_manage\_topics_ administrator rights, unless it is the creator of the topic. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target supergroup in the format <code>@username</code></td></tr><tr><td>message_thread_id</td><td>Integer</td><td>Yes</td><td>Unique identifier for the target message thread of the forum topic</td></tr><tr><td>name</td><td>String</td><td>Optional</td><td>New topic name, 0-128 characters. If not specified or empty, the current name of the topic will be kept.</td></tr><tr><td>icon_custom_emoji_id</td><td>String</td><td>Optional</td><td>New unique identifier of the custom emoji shown as the topic icon. Use <a href="#getforumtopiciconstickers">getForumTopicIconStickers</a> to get all allowed custom emoji identifiers. Pass an empty string to remove the icon. If not specified, the current icon will be kept.</td></tr></tbody></table>

#### closeForumTopic

Use this method to close an open topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the _can\_manage\_topics_ administrator rights, unless it is the creator of the topic. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target supergroup in the format <code>@username</code></td></tr><tr><td>message_thread_id</td><td>Integer</td><td>Yes</td><td>Unique identifier for the target message thread of the forum topic</td></tr></tbody></table>

#### reopenForumTopic

Use this method to reopen a closed topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the _can\_manage\_topics_ administrator rights, unless it is the creator of the topic. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target supergroup in the format <code>@username</code></td></tr><tr><td>message_thread_id</td><td>Integer</td><td>Yes</td><td>Unique identifier for the target message thread of the forum topic</td></tr></tbody></table>

#### deleteForumTopic

Use this method to delete a forum topic along with all its messages in a forum supergroup chat or a private chat with a user. In the case of a supergroup chat the bot must be an administrator in the chat for this to work and must have the _can\_delete\_messages_ administrator rights. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target supergroup in the format <code>@username</code></td></tr><tr><td>message_thread_id</td><td>Integer</td><td>Yes</td><td>Unique identifier for the target message thread of the forum topic</td></tr></tbody></table>

#### unpinAllForumTopicMessages

Use this method to clear the list of pinned messages in a forum topic in a forum supergroup chat or a private chat with a user. In the case of a supergroup chat the bot must be an administrator in the chat for this to work and must have the _can\_pin\_messages_ administrator right in the supergroup. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target supergroup in the format <code>@username</code></td></tr><tr><td>message_thread_id</td><td>Integer</td><td>Yes</td><td>Unique identifier for the target message thread of the forum topic</td></tr></tbody></table>

#### editGeneralForumTopic

Use this method to edit the name of the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the _can\_manage\_topics_ administrator rights. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target supergroup in the format <code>@username</code></td></tr><tr><td>name</td><td>String</td><td>Yes</td><td>New topic name, 1-128 characters</td></tr></tbody></table>

#### closeGeneralForumTopic

Use this method to close an open 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the _can\_manage\_topics_ administrator rights. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target supergroup in the format <code>@username</code></td></tr></tbody></table>

#### reopenGeneralForumTopic

Use this method to reopen a closed 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the _can\_manage\_topics_ administrator rights. The topic will be automatically unhidden if it was hidden. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target supergroup in the format <code>@username</code></td></tr></tbody></table>

#### hideGeneralForumTopic

Use this method to hide the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the _can\_manage\_topics_ administrator rights. The topic will be automatically closed if it was open. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target supergroup in the format <code>@username</code></td></tr></tbody></table>

#### unhideGeneralForumTopic

Use this method to unhide the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the _can\_manage\_topics_ administrator rights. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target supergroup in the format <code>@username</code></td></tr></tbody></table>

#### unpinAllGeneralForumTopicMessages

Use this method to clear the list of pinned messages in a General forum topic. The bot must be an administrator in the chat for this to work and must have the _can\_pin\_messages_ administrator right in the supergroup. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target supergroup in the format <code>@username</code></td></tr></tbody></table>

#### answerCallbackQuery

Use this method to send answers to callback queries sent from [inline keyboards](/bots/features/#inline-keyboards). The answer will be displayed to the user as a notification at the top of the chat screen or as an alert. On success, _True_ is returned.

> Alternatively, the user can be redirected to the specified Game URL. For this option to work, you must first create a game for your bot via [@BotFather](https://t.me/botfather) and accept the terms. Otherwise, you may use links like `t.me/your_bot?start=XXXX` that open your bot with a parameter.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>callback_query_id</td><td>String</td><td>Yes</td><td>Unique identifier for the query to be answered</td></tr><tr><td>text</td><td>String</td><td>Optional</td><td>Text of the notification. If not specified, nothing will be shown to the user, 0-200 characters.</td></tr><tr><td>show_alert</td><td>Boolean</td><td>Optional</td><td>If <em>True</em>, an alert will be shown by the client instead of a notification at the top of the chat screen. Defaults to <em>False</em>.</td></tr><tr><td>url</td><td>String</td><td>Optional</td><td>URL that will be opened by the user's client. If you have created a <a href="#game">Game</a> and accepted the conditions via <a href="https://t.me/botfather">@BotFather</a>, specify the URL that opens your game - note that this will only work if the query comes from a <a href="#inlinekeyboardbutton"><em>callback_game</em></a> button.<br><br>Otherwise, you may use links like <code>t.me/your_bot?start=XXXX</code> that open your bot with a parameter.</td></tr><tr><td>cache_time</td><td>Integer</td><td>Optional</td><td>The maximum amount of time in seconds that the result of the callback query may be cached client-side. Telegram apps will support caching starting in version 3.14. Defaults to 0.</td></tr></tbody></table>

#### answerGuestQuery

Use this method to reply to a received guest message. On success, a [SentGuestMessage](#sentguestmessage) object is returned.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>guest_query_id</td><td>String</td><td>Yes</td><td>Unique identifier for the query to be answered</td></tr><tr><td>result</td><td><a href="#inlinequeryresult">InlineQueryResult</a></td><td>Yes</td><td>A JSON-serialized object describing the message to be sent</td></tr></tbody></table>

#### getUserChatBoosts

Use this method to get the list of boosts added to a chat by a user. Requires administrator rights in the chat. Returns a [UserChatBoosts](#userchatboosts) object.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the chat or username of the channel in the format <code>@username</code></td></tr><tr><td>user_id</td><td>Integer</td><td>Yes</td><td>Unique identifier of the target user</td></tr></tbody></table>

#### getBusinessConnection

Use this method to get information about the connection of the bot with a business account. Returns a [BusinessConnection](#businessconnection) object on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Yes</td><td>Unique identifier of the business connection</td></tr></tbody></table>

#### getManagedBotToken

Use this method to get the token of a managed bot. Returns the token as _String_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>user_id</td><td>Integer</td><td>Yes</td><td>User identifier of the managed bot whose token will be returned</td></tr></tbody></table>

#### replaceManagedBotToken

Use this method to revoke the current token of a managed bot and generate a new one. Returns the new token as _String_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>user_id</td><td>Integer</td><td>Yes</td><td>User identifier of the managed bot whose token will be replaced</td></tr></tbody></table>

#### getManagedBotAccessSettings

Use this method to get the access settings of a managed bot. Returns a [BotAccessSettings](#botaccesssettings) object on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>user_id</td><td>Integer</td><td>Yes</td><td>User identifier of the managed bot whose access settings will be returned</td></tr></tbody></table>

#### setManagedBotAccessSettings

Use this method to change the access settings of a managed bot. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>user_id</td><td>Integer</td><td>Yes</td><td>User identifier of the managed bot whose access settings will be changed</td></tr><tr><td>is_access_restricted</td><td>Boolean</td><td>Yes</td><td>Pass <em>True</em> if only selected users can access the bot. The bot's owner can always access it.</td></tr><tr><td>added_user_ids</td><td>Array of Integer</td><td>Optional</td><td>A JSON-serialized list of up to 10 identifiers of users who will have access to the bot in addition to its owner. Ignored if <em>is_access_restricted</em> is <em>False</em>.</td></tr></tbody></table>

#### setMyCommands

Use this method to change the list of the bot's commands. See [this manual](/bots/features/#commands) for more details about bot commands. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>commands</td><td>Array of <a href="#botcommand">BotCommand</a></td><td>Yes</td><td>A JSON-serialized list of bot commands to be set as the list of the bot's commands. At most 100 commands can be specified.</td></tr><tr><td>scope</td><td><a href="#botcommandscope">BotCommandScope</a></td><td>Optional</td><td>A JSON-serialized object, describing scope of users for which the commands are relevant. Defaults to <a href="#botcommandscopedefault">BotCommandScopeDefault</a>.</td></tr><tr><td>language_code</td><td>String</td><td>Optional</td><td>A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands.</td></tr></tbody></table>

#### deleteMyCommands

Use this method to delete the list of the bot's commands for the given scope and user language. After deletion, [higher level commands](#determining-list-of-commands) will be shown to affected users. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>scope</td><td><a href="#botcommandscope">BotCommandScope</a></td><td>Optional</td><td>A JSON-serialized object, describing scope of users for which the commands are relevant. Defaults to <a href="#botcommandscopedefault">BotCommandScopeDefault</a>.</td></tr><tr><td>language_code</td><td>String</td><td>Optional</td><td>A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands.</td></tr></tbody></table>

#### getMyCommands

Use this method to get the current list of the bot's commands for the given scope and user language. Returns an Array of [BotCommand](#botcommand) objects. If commands aren't set, an empty list is returned.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>scope</td><td><a href="#botcommandscope">BotCommandScope</a></td><td>Optional</td><td>A JSON-serialized object, describing scope of users. Defaults to <a href="#botcommandscopedefault">BotCommandScopeDefault</a>.</td></tr><tr><td>language_code</td><td>String</td><td>Optional</td><td>A two-letter ISO 639-1 language code or an empty string</td></tr></tbody></table>

#### setMyName

Use this method to change the bot's name. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>name</td><td>String</td><td>Optional</td><td>New bot name; 0-64 characters. Pass an empty string to remove the dedicated name for the given language.</td></tr><tr><td>language_code</td><td>String</td><td>Optional</td><td>A two-letter ISO 639-1 language code. If empty, the name will be shown to all users for whose language there is no dedicated name.</td></tr></tbody></table>

#### getMyName

Use this method to get the current bot name for the given user language. Returns [BotName](#botname) on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>language_code</td><td>String</td><td>Optional</td><td>A two-letter ISO 639-1 language code or an empty string</td></tr></tbody></table>

#### setMyDescription

Use this method to change the bot's description, which is shown in the chat with the bot if the chat is empty. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>description</td><td>String</td><td>Optional</td><td>New bot description; 0-512 characters. Pass an empty string to remove the dedicated description for the given language.</td></tr><tr><td>language_code</td><td>String</td><td>Optional</td><td>A two-letter ISO 639-1 language code. If empty, the description will be applied to all users for whose language there is no dedicated description.</td></tr></tbody></table>

#### getMyDescription

Use this method to get the current bot description for the given user language. Returns [BotDescription](#botdescription) on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>language_code</td><td>String</td><td>Optional</td><td>A two-letter ISO 639-1 language code or an empty string</td></tr></tbody></table>

#### setMyShortDescription

Use this method to change the bot's short description, which is shown on the bot's profile page and is sent together with the link when users share the bot. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>short_description</td><td>String</td><td>Optional</td><td>New short description for the bot; 0-120 characters. Pass an empty string to remove the dedicated short description for the given language.</td></tr><tr><td>language_code</td><td>String</td><td>Optional</td><td>A two-letter ISO 639-1 language code. If empty, the short description will be applied to all users for whose language there is no dedicated short description.</td></tr></tbody></table>

#### getMyShortDescription

Use this method to get the current bot short description for the given user language. Returns [BotShortDescription](#botshortdescription) on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>language_code</td><td>String</td><td>Optional</td><td>A two-letter ISO 639-1 language code or an empty string</td></tr></tbody></table>

#### setMyProfilePhoto

Changes the profile photo of the bot. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>photo</td><td><a href="#inputprofilephoto">InputProfilePhoto</a></td><td>Yes</td><td>The new profile photo to set</td></tr></tbody></table>

#### removeMyProfilePhoto

Removes the profile photo of the bot. Requires no parameters. Returns _True_ on success.

#### setChatMenuButton

Use this method to change the bot's menu button in a private chat, or the default menu button. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer</td><td>Optional</td><td>Unique identifier for the target private chat. If not specified, the bot's default menu button will be changed.</td></tr><tr><td>menu_button</td><td><a href="#menubutton">MenuButton</a></td><td>Optional</td><td>A JSON-serialized object for the bot's new menu button. Defaults to <a href="#menubuttondefault">MenuButtonDefault</a>.</td></tr></tbody></table>

#### getChatMenuButton

Use this method to get the current value of the bot's menu button in a private chat, or the default menu button. Returns [MenuButton](#menubutton) on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer</td><td>Optional</td><td>Unique identifier for the target private chat. If not specified, the bot's default menu button will be returned.</td></tr></tbody></table>

#### setMyDefaultAdministratorRights

Use this method to change the default administrator rights requested by the bot when it's added as an administrator to groups or channels. These rights will be suggested to users, but they are free to modify the list before adding the bot. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>rights</td><td><a href="#chatadministratorrights">ChatAdministratorRights</a></td><td>Optional</td><td>A JSON-serialized object describing new default administrator rights. If not specified, the default administrator rights will be cleared.</td></tr><tr><td>for_channels</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to change the default administrator rights of the bot in channels. Otherwise, the default administrator rights of the bot for groups and supergroups will be changed.</td></tr></tbody></table>

#### getMyDefaultAdministratorRights

Use this method to get the current default administrator rights of the bot. Returns [ChatAdministratorRights](#chatadministratorrights) on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>for_channels</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to get default administrator rights of the bot in channels. Otherwise, default administrator rights of the bot for groups and supergroups will be returned.</td></tr></tbody></table>

#### getAvailableGifts

Returns the list of gifts that can be sent by the bot to users and channel chats. Requires no parameters. Returns a [Gifts](#gifts) object.

#### sendGift

Sends a gift to the given user or channel chat. The gift can't be converted to Telegram Stars by the receiver. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>user_id</td><td>Integer</td><td>Optional</td><td>Required if <em>chat_id</em> is not specified. Unique identifier of the target user who will receive the gift.</td></tr><tr><td>chat_id</td><td>Integer or String</td><td>Optional</td><td>Required if <em>user_id</em> is not specified. Unique identifier for the chat or username of the channel (in the format <code>@username</code>) that will receive the gift.</td></tr><tr><td>gift_id</td><td>String</td><td>Yes</td><td>Identifier of the gift; limited gifts can't be sent to channel chats</td></tr><tr><td>pay_for_upgrade</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to pay for the gift upgrade from the bot's balance, thereby making the upgrade free for the receiver</td></tr><tr><td>text</td><td>String</td><td>Optional</td><td>Text that will be shown along with the gift; 0-128 characters</td></tr><tr><td>text_parse_mode</td><td>String</td><td>Optional</td><td>Mode for parsing entities in the text. See <a href="#formatting-options">formatting options</a> for more details. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, “custom_emoji”, and “date_time” are ignored.</td></tr><tr><td>text_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td>Optional</td><td>A JSON-serialized list of special entities that appear in the gift text. It can be specified instead of <em>text_parse_mode</em>. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, “custom_emoji”, and “date_time” are ignored.</td></tr></tbody></table>

#### giftPremiumSubscription

Gifts a Telegram Premium subscription to the given user. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>user_id</td><td>Integer</td><td>Yes</td><td>Unique identifier of the target user who will receive a Telegram Premium subscription</td></tr><tr><td>month_count</td><td>Integer</td><td>Yes</td><td>Number of months the Telegram Premium subscription will be active for the user; must be one of 3, 6, or 12</td></tr><tr><td>star_count</td><td>Integer</td><td>Yes</td><td>Number of Telegram Stars to pay for the Telegram Premium subscription; must be 1000 for 3 months, 1500 for 6 months, and 2500 for 12 months</td></tr><tr><td>text</td><td>String</td><td>Optional</td><td>Text that will be shown along with the service message about the subscription; 0-128 characters</td></tr><tr><td>text_parse_mode</td><td>String</td><td>Optional</td><td>Mode for parsing entities in the text. See <a href="#formatting-options">formatting options</a> for more details. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, “custom_emoji”, and “date_time” are ignored.</td></tr><tr><td>text_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td>Optional</td><td>A JSON-serialized list of special entities that appear in the gift text. It can be specified instead of <em>text_parse_mode</em>. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, “custom_emoji”, and “date_time” are ignored.</td></tr></tbody></table>

#### verifyUser

Verifies a user [on behalf of the organization](/verify/#third-party-verification) which is represented by the bot. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>user_id</td><td>Integer</td><td>Yes</td><td>Unique identifier of the target user</td></tr><tr><td>custom_description</td><td>String</td><td>Optional</td><td>Custom description for the verification; 0-70 characters. Must be empty if the organization isn't allowed to provide a custom verification description.</td></tr></tbody></table>

#### verifyChat

Verifies a chat [on behalf of the organization](/verify/#third-party-verification) which is represented by the bot. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target bot, supergroup or channel in the format <code>@username</code>. Channel direct messages chats can't be verified.</td></tr><tr><td>custom_description</td><td>String</td><td>Optional</td><td>Custom description for the verification; 0-70 characters. Must be empty if the organization isn't allowed to provide a custom verification description.</td></tr></tbody></table>

#### removeUserVerification

Removes verification from a user who is currently verified [on behalf of the organization](/verify/#third-party-verification) represented by the bot. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>user_id</td><td>Integer</td><td>Yes</td><td>Unique identifier of the target user</td></tr></tbody></table>

#### removeChatVerification

Removes verification from a chat that is currently verified [on behalf of the organization](/verify/#third-party-verification) represented by the bot. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target bot or channel in the format <code>@username</code></td></tr></tbody></table>

#### readBusinessMessage

Marks incoming message as read on behalf of a business account. Requires the _can\_read\_messages_ business bot right. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Yes</td><td>Unique identifier of the business connection on behalf of which to read the message</td></tr><tr><td>chat_id</td><td>Integer</td><td>Yes</td><td>Unique identifier of the chat in which the message was received. The chat must have been active in the last 24 hours.</td></tr><tr><td>message_id</td><td>Integer</td><td>Yes</td><td>Unique identifier of the message to mark as read</td></tr></tbody></table>

#### deleteBusinessMessages

Delete messages on behalf of a business account. Requires the _can\_delete\_sent\_messages_ business bot right to delete messages sent by the bot itself, or the _can\_delete\_all\_messages_ business bot right to delete any message. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Yes</td><td>Unique identifier of the business connection on behalf of which to delete the messages</td></tr><tr><td>message_ids</td><td>Array of Integer</td><td>Yes</td><td>A JSON-serialized list of 1-100 identifiers of messages to delete. All messages must be from the same chat. See <a href="#deletemessage">deleteMessage</a> for limitations on which messages can be deleted.</td></tr></tbody></table>

#### setBusinessAccountName

Changes the first and last name of a managed business account. Requires the _can\_change\_name_ business bot right. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Yes</td><td>Unique identifier of the business connection</td></tr><tr><td>first_name</td><td>String</td><td>Yes</td><td>The new value of the first name for the business account; 1-64 characters</td></tr><tr><td>last_name</td><td>String</td><td>Optional</td><td>The new value of the last name for the business account; 0-64 characters</td></tr></tbody></table>

#### setBusinessAccountUsername

Changes the username of a managed business account. Requires the _can\_change\_username_ business bot right. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Yes</td><td>Unique identifier of the business connection</td></tr><tr><td>username</td><td>String</td><td>Optional</td><td>The new value of the username for the business account; 0-32 characters</td></tr></tbody></table>

#### setBusinessAccountBio

Changes the bio of a managed business account. Requires the _can\_change\_bio_ business bot right. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Yes</td><td>Unique identifier of the business connection</td></tr><tr><td>bio</td><td>String</td><td>Optional</td><td>The new value of the bio for the business account; 0-140 characters</td></tr></tbody></table>

#### setBusinessAccountProfilePhoto

Changes the profile photo of a managed business account. Requires the _can\_edit\_profile\_photo_ business bot right. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Yes</td><td>Unique identifier of the business connection</td></tr><tr><td>photo</td><td><a href="#inputprofilephoto">InputProfilePhoto</a></td><td>Yes</td><td>The new profile photo to set</td></tr><tr><td>is_public</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to set the public photo, which will be visible even if the main photo is hidden by the business account's privacy settings. An account can have only one public photo.</td></tr></tbody></table>

#### removeBusinessAccountProfilePhoto

Removes the current profile photo of a managed business account. Requires the _can\_edit\_profile\_photo_ business bot right. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Yes</td><td>Unique identifier of the business connection</td></tr><tr><td>is_public</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to remove the public photo, which is visible even if the main photo is hidden by the business account's privacy settings. After the main photo is removed, the previous profile photo (if present) becomes the main photo.</td></tr></tbody></table>

#### setBusinessAccountGiftSettings

Changes the privacy settings pertaining to incoming gifts in a managed business account. Requires the _can\_change\_gift\_settings_ business bot right. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Yes</td><td>Unique identifier of the business connection</td></tr><tr><td>show_gift_button</td><td>Boolean</td><td>Yes</td><td>Pass <em>True</em> if a button for sending a gift to the user or by the business account must always be shown in the input field</td></tr><tr><td>accepted_gift_types</td><td><a href="#acceptedgifttypes">AcceptedGiftTypes</a></td><td>Yes</td><td>Types of gifts accepted by the business account</td></tr></tbody></table>

#### getBusinessAccountStarBalance

Returns the amount of Telegram Stars owned by a managed business account. Requires the _can\_view\_gifts\_and\_stars_ business bot right. Returns [StarAmount](#staramount) on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Yes</td><td>Unique identifier of the business connection</td></tr></tbody></table>

#### transferBusinessAccountStars

Transfers Telegram Stars from the business account balance to the bot's balance. Requires the _can\_transfer\_stars_ business bot right. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Yes</td><td>Unique identifier of the business connection</td></tr><tr><td>star_count</td><td>Integer</td><td>Yes</td><td>Number of Telegram Stars to transfer; 1-10000</td></tr></tbody></table>

#### getBusinessAccountGifts

Returns the gifts received and owned by a managed business account. Requires the _can\_view\_gifts\_and\_stars_ business bot right. Returns [OwnedGifts](#ownedgifts) on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Yes</td><td>Unique identifier of the business connection</td></tr><tr><td>exclude_unsaved</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to exclude gifts that aren't saved to the account's profile page</td></tr><tr><td>exclude_saved</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to exclude gifts that are saved to the account's profile page</td></tr><tr><td>exclude_unlimited</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to exclude gifts that can be purchased an unlimited number of times</td></tr><tr><td>exclude_limited_upgradable</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to exclude gifts that can be purchased a limited number of times and can be upgraded to unique</td></tr><tr><td>exclude_limited_non_upgradable</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to exclude gifts that can be purchased a limited number of times and can't be upgraded to unique</td></tr><tr><td>exclude_unique</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to exclude unique gifts</td></tr><tr><td>exclude_from_blockchain</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to exclude gifts that were assigned from the TON blockchain and can't be resold or transferred in Telegram</td></tr><tr><td>sort_by_price</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to sort results by gift price instead of send date. Sorting is applied before pagination.</td></tr><tr><td>offset</td><td>String</td><td>Optional</td><td>Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of results</td></tr><tr><td>limit</td><td>Integer</td><td>Optional</td><td>The maximum number of gifts to be returned; 1-100. Defaults to 100.</td></tr></tbody></table>

#### getUserGifts

Returns the gifts owned and hosted by a user. Returns [OwnedGifts](#ownedgifts) on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>user_id</td><td>Integer</td><td>Yes</td><td>Unique identifier of the user</td></tr><tr><td>exclude_unlimited</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to exclude gifts that can be purchased an unlimited number of times</td></tr><tr><td>exclude_limited_upgradable</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to exclude gifts that can be purchased a limited number of times and can be upgraded to unique</td></tr><tr><td>exclude_limited_non_upgradable</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to exclude gifts that can be purchased a limited number of times and can't be upgraded to unique</td></tr><tr><td>exclude_from_blockchain</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to exclude gifts that were assigned from the TON blockchain and can't be resold or transferred in Telegram</td></tr><tr><td>exclude_unique</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to exclude unique gifts</td></tr><tr><td>sort_by_price</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to sort results by gift price instead of send date. Sorting is applied before pagination.</td></tr><tr><td>offset</td><td>String</td><td>Optional</td><td>Offset of the first entry to return as received from the previous request; use an empty string to get the first chunk of results</td></tr><tr><td>limit</td><td>Integer</td><td>Optional</td><td>The maximum number of gifts to be returned; 1-100. Defaults to 100.</td></tr></tbody></table>

#### getChatGifts

Returns the gifts owned by a chat. Returns [OwnedGifts](#ownedgifts) on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target channel in the format <code>@username</code></td></tr><tr><td>exclude_unsaved</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to exclude gifts that aren't saved to the chat's profile page. Always <em>True</em>, unless the bot has the <em>can_post_messages</em> administrator right in the channel.</td></tr><tr><td>exclude_saved</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to exclude gifts that are saved to the chat's profile page. Always <em>False</em>, unless the bot has the <em>can_post_messages</em> administrator right in the channel.</td></tr><tr><td>exclude_unlimited</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to exclude gifts that can be purchased an unlimited number of times</td></tr><tr><td>exclude_limited_upgradable</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to exclude gifts that can be purchased a limited number of times and can be upgraded to unique</td></tr><tr><td>exclude_limited_non_upgradable</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to exclude gifts that can be purchased a limited number of times and can't be upgraded to unique</td></tr><tr><td>exclude_from_blockchain</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to exclude gifts that were assigned from the TON blockchain and can't be resold or transferred in Telegram</td></tr><tr><td>exclude_unique</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to exclude unique gifts</td></tr><tr><td>sort_by_price</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to sort results by gift price instead of send date. Sorting is applied before pagination.</td></tr><tr><td>offset</td><td>String</td><td>Optional</td><td>Offset of the first entry to return as received from the previous request; use an empty string to get the first chunk of results</td></tr><tr><td>limit</td><td>Integer</td><td>Optional</td><td>The maximum number of gifts to be returned; 1-100. Defaults to 100.</td></tr></tbody></table>

#### convertGiftToStars

Converts a given regular gift to Telegram Stars. Requires the _can\_convert\_gifts\_to\_stars_ business bot right. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Yes</td><td>Unique identifier of the business connection</td></tr><tr><td>owned_gift_id</td><td>String</td><td>Yes</td><td>Unique identifier of the regular gift that should be converted to Telegram Stars</td></tr></tbody></table>

#### upgradeGift

Upgrades a given regular gift to a unique gift. Requires the _can\_transfer\_and\_upgrade\_gifts_ business bot right. Additionally requires the _can\_transfer\_stars_ business bot right if the upgrade is paid. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Yes</td><td>Unique identifier of the business connection</td></tr><tr><td>owned_gift_id</td><td>String</td><td>Yes</td><td>Unique identifier of the regular gift that should be upgraded to a unique one</td></tr><tr><td>keep_original_details</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to keep the original gift text, sender and receiver in the upgraded gift</td></tr><tr><td>star_count</td><td>Integer</td><td>Optional</td><td>The amount of Telegram Stars that will be paid for the upgrade from the business account balance. If <code>gift.prepaid_upgrade_star_count &gt; 0</code>, then pass 0, otherwise, the <em>can_transfer_stars</em> business bot right is required and <code>gift.upgrade_star_count</code> must be passed.</td></tr></tbody></table>

#### transferGift

Transfers an owned unique gift to another user. Requires the _can\_transfer\_and\_upgrade\_gifts_ business bot right. Requires _can\_transfer\_stars_ business bot right if the transfer is paid. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Yes</td><td>Unique identifier of the business connection</td></tr><tr><td>owned_gift_id</td><td>String</td><td>Yes</td><td>Unique identifier of the regular gift that should be transferred</td></tr><tr><td>new_owner_chat_id</td><td>Integer</td><td>Yes</td><td>Unique identifier of the chat which will own the gift. The chat must be active in the last 24 hours.</td></tr><tr><td>star_count</td><td>Integer</td><td>Optional</td><td>The amount of Telegram Stars that will be paid for the transfer from the business account balance. If positive, then the <em>can_transfer_stars</em> business bot right is required.</td></tr></tbody></table>

#### postStory

Posts a story on behalf of a managed business account. Requires the _can\_manage\_stories_ business bot right. Returns [Story](#story) on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Yes</td><td>Unique identifier of the business connection</td></tr><tr><td>content</td><td><a href="#inputstorycontent">InputStoryContent</a></td><td>Yes</td><td>Content of the story</td></tr><tr><td>active_period</td><td>Integer</td><td>Yes</td><td>Period after which the story is moved to the archive, in seconds; must be one of <code>6 * 3600</code>, <code>12 * 3600</code>, <code>86400</code>, or <code>2 * 86400</code></td></tr><tr><td>caption</td><td>String</td><td>Optional</td><td>Caption of the story, 0-2048 characters after entities parsing</td></tr><tr><td>parse_mode</td><td>String</td><td>Optional</td><td>Mode for parsing entities in the story caption. See <a href="#formatting-options">formatting options</a> for more details.</td></tr><tr><td>caption_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td>Optional</td><td>A JSON-serialized list of special entities that appear in the caption, which can be specified instead of <em>parse_mode</em></td></tr><tr><td>areas</td><td>Array of <a href="#storyarea">StoryArea</a></td><td>Optional</td><td>A JSON-serialized list of clickable areas to be shown on the story</td></tr><tr><td>post_to_chat_page</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to keep the story accessible after it expires</td></tr><tr><td>protect_content</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the content of the story must be protected from forwarding and screenshotting</td></tr></tbody></table>

#### repostStory

Reposts a story on behalf of a business account from another business account. Both business accounts must be managed by the same bot, and the story on the source account must have been posted (or reposted) by the bot. Requires the _can\_manage\_stories_ business bot right for both business accounts. Returns [Story](#story) on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Yes</td><td>Unique identifier of the business connection</td></tr><tr><td>from_chat_id</td><td>Integer</td><td>Yes</td><td>Unique identifier of the chat which posted the story that should be reposted</td></tr><tr><td>from_story_id</td><td>Integer</td><td>Yes</td><td>Unique identifier of the story that should be reposted</td></tr><tr><td>active_period</td><td>Integer</td><td>Yes</td><td>Period after which the story is moved to the archive, in seconds; must be one of <code>6 * 3600</code>, <code>12 * 3600</code>, <code>86400</code>, or <code>2 * 86400</code></td></tr><tr><td>post_to_chat_page</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to keep the story accessible after it expires</td></tr><tr><td>protect_content</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the content of the story must be protected from forwarding and screenshotting</td></tr></tbody></table>

#### editStory

Edits a story previously posted by the bot on behalf of a managed business account. Requires the _can\_manage\_stories_ business bot right. Returns [Story](#story) on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Yes</td><td>Unique identifier of the business connection</td></tr><tr><td>story_id</td><td>Integer</td><td>Yes</td><td>Unique identifier of the story to edit</td></tr><tr><td>content</td><td><a href="#inputstorycontent">InputStoryContent</a></td><td>Yes</td><td>Content of the story</td></tr><tr><td>caption</td><td>String</td><td>Optional</td><td>Caption of the story, 0-2048 characters after entities parsing</td></tr><tr><td>parse_mode</td><td>String</td><td>Optional</td><td>Mode for parsing entities in the story caption. See <a href="#formatting-options">formatting options</a> for more details.</td></tr><tr><td>caption_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td>Optional</td><td>A JSON-serialized list of special entities that appear in the caption, which can be specified instead of <em>parse_mode</em></td></tr><tr><td>areas</td><td>Array of <a href="#storyarea">StoryArea</a></td><td>Optional</td><td>A JSON-serialized list of clickable areas to be shown on the story</td></tr></tbody></table>

#### deleteStory

Deletes a story previously posted by the bot on behalf of a managed business account. Requires the _can\_manage\_stories_ business bot right. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Yes</td><td>Unique identifier of the business connection</td></tr><tr><td>story_id</td><td>Integer</td><td>Yes</td><td>Unique identifier of the story to delete</td></tr></tbody></table>

#### answerWebAppQuery

Use this method to set the result of an interaction with a [Web App](/bots/webapps/) and send a corresponding message on behalf of the user to the chat from which the query originated. On success, a [SentWebAppMessage](#sentwebappmessage) object is returned.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>web_app_query_id</td><td>String</td><td>Yes</td><td>Unique identifier for the query to be answered</td></tr><tr><td>result</td><td><a href="#inlinequeryresult">InlineQueryResult</a></td><td>Yes</td><td>A JSON-serialized object describing the message to be sent</td></tr></tbody></table>

#### savePreparedInlineMessage

Stores a message that can be sent by a user of a Mini App. Returns a [PreparedInlineMessage](#preparedinlinemessage) object.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>user_id</td><td>Integer</td><td>Yes</td><td>Unique identifier of the target user that can use the prepared message</td></tr><tr><td>result</td><td><a href="#inlinequeryresult">InlineQueryResult</a></td><td>Yes</td><td>A JSON-serialized object describing the message to be sent</td></tr><tr><td>allow_user_chats</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the message can be sent to private chats with users</td></tr><tr><td>allow_bot_chats</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the message can be sent to private chats with bots</td></tr><tr><td>allow_group_chats</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the message can be sent to group and supergroup chats</td></tr><tr><td>allow_channel_chats</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the message can be sent to channel chats</td></tr></tbody></table>

#### savePreparedKeyboardButton

Stores a keyboard button that can be used by a user within a Mini App. Returns a [PreparedKeyboardButton](#preparedkeyboardbutton) object.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>user_id</td><td>Integer</td><td>Yes</td><td>Unique identifier of the target user that can use the button</td></tr><tr><td>button</td><td><a href="#keyboardbutton">KeyboardButton</a></td><td>Yes</td><td>A JSON-serialized object describing the button to be saved. The button must be of the type <em>request_users</em>, <em>request_chat</em>, or <em>request_managed_bot</em>.</td></tr></tbody></table>

#### Inline mode methods

Methods and objects used in the inline mode are described in the [Inline mode section](#inline-mode).

### Updating messages

The following methods allow you to change an existing message in the message history instead of sending a new one with a result of an action. This is most useful for messages with [inline keyboards](/bots/features/#inline-keyboards) using callback queries, but can also help reduce clutter in conversations with regular chat bots.

Please note, that it is currently only possible to edit messages without _reply\_markup_ or with [inline keyboards](/bots/features/#inline-keyboards).

#### editMessageText

Use this method to edit text, rich and [game](#games) messages. On success, if the edited message is not an inline message, the edited [Message](#message) is returned, otherwise _True_ is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within **48 hours** from the time they were sent.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Optional</td><td>Unique identifier of the business connection on behalf of which the message to be edited was sent</td></tr><tr><td>chat_id</td><td>Integer or String</td><td>Optional</td><td>Required if <em>inline_message_id</em> is not specified. Unique identifier for the target chat or username of the target bot, supergroup or channel in the format <code>@username</code>.</td></tr><tr><td>message_id</td><td>Integer</td><td>Optional</td><td>Required if <em>inline_message_id</em> is not specified. Identifier of the message to edit.</td></tr><tr><td>inline_message_id</td><td>String</td><td>Optional</td><td>Required if <em>chat_id</em> and <em>message_id</em> are not specified. Identifier of the inline message.</td></tr><tr><td>text</td><td>String</td><td>Optional</td><td>New text of the message, 1-4096 characters after entity parsing; required if <em>rich_message</em> isn't specified</td></tr><tr><td>parse_mode</td><td>String</td><td>Optional</td><td>Mode for parsing entities in the message text. See <a href="#formatting-options">formatting options</a> for more details.</td></tr><tr><td>entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td>Optional</td><td>A JSON-serialized list of special entities that appear in message text, which can be specified instead of <em>parse_mode</em></td></tr><tr><td>link_preview_options</td><td><a href="#linkpreviewoptions">LinkPreviewOptions</a></td><td>Optional</td><td>Link preview generation options for the message</td></tr><tr><td>rich_message</td><td><a href="#inputrichmessage">InputRichMessage</a></td><td>Optional</td><td>New rich content of the message; required if <em>text</em> isn't specified. Direct upload of new files isn't supported when an inline message is edited.</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td><td>Optional</td><td>A JSON-serialized object for an <a href="/bots/features/#inline-keyboards">inline keyboard</a></td></tr></tbody></table>

#### editMessageCaption

Use this method to edit captions of messages. On success, if the edited message is not an inline message, the edited [Message](#message) is returned, otherwise _True_ is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within **48 hours** from the time they were sent.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Optional</td><td>Unique identifier of the business connection on behalf of which the message to be edited was sent</td></tr><tr><td>chat_id</td><td>Integer or String</td><td>Optional</td><td>Required if <em>inline_message_id</em> is not specified. Unique identifier for the target chat or username of the target bot, supergroup or channel in the format <code>@username</code>.</td></tr><tr><td>message_id</td><td>Integer</td><td>Optional</td><td>Required if <em>inline_message_id</em> is not specified. Identifier of the message to edit.</td></tr><tr><td>inline_message_id</td><td>String</td><td>Optional</td><td>Required if <em>chat_id</em> and <em>message_id</em> are not specified. Identifier of the inline message.</td></tr><tr><td>caption</td><td>String</td><td>Optional</td><td>New caption of the message, 0-1024 characters after entities parsing</td></tr><tr><td>parse_mode</td><td>String</td><td>Optional</td><td>Mode for parsing entities in the message caption. See <a href="#formatting-options">formatting options</a> for more details.</td></tr><tr><td>caption_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td>Optional</td><td>A JSON-serialized list of special entities that appear in the caption, which can be specified instead of <em>parse_mode</em></td></tr><tr><td>show_caption_above_media</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the caption must be shown above the message media. Supported only for animation, photo and video messages.</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td><td>Optional</td><td>A JSON-serialized object for an <a href="/bots/features/#inline-keyboards">inline keyboard</a></td></tr></tbody></table>

#### editMessageMedia

Use this method to edit animation, audio, document, live photo, photo, or video messages, or to replace a text or a rich message with a media. If a message is part of a message album, then it can be edited only to an audio for audio albums, only to a document for document albums and to a photo, a live photo, or a video otherwise. When an inline message is edited, a new file can't be uploaded; use a previously uploaded file via its file\_id or specify a URL. On success, if the edited message is not an inline message, the edited [Message](#message) is returned, otherwise _True_ is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within **48 hours** from the time they were sent.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Optional</td><td>Unique identifier of the business connection on behalf of which the message to be edited was sent</td></tr><tr><td>chat_id</td><td>Integer or String</td><td>Optional</td><td>Required if <em>inline_message_id</em> is not specified. Unique identifier for the target chat or username of the target bot, supergroup or channel in the format <code>@username</code>.</td></tr><tr><td>message_id</td><td>Integer</td><td>Optional</td><td>Required if <em>inline_message_id</em> is not specified. Identifier of the message to edit.</td></tr><tr><td>inline_message_id</td><td>String</td><td>Optional</td><td>Required if <em>chat_id</em> and <em>message_id</em> are not specified. Identifier of the inline message.</td></tr><tr><td>media</td><td><a href="#inputmedia">InputMedia</a></td><td>Yes</td><td>A JSON-serialized object for the new media content of the message</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td><td>Optional</td><td>A JSON-serialized object for a new <a href="/bots/features/#inline-keyboards">inline keyboard</a></td></tr></tbody></table>

#### editMessageLiveLocation

Use this method to edit live location messages. A location can be edited until its _live\_period_ expires or editing is explicitly disabled by a call to [stopMessageLiveLocation](#stopmessagelivelocation). On success, if the edited message is not an inline message, the edited [Message](#message) is returned, otherwise _True_ is returned.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Optional</td><td>Unique identifier of the business connection on behalf of which the message to be edited was sent</td></tr><tr><td>chat_id</td><td>Integer or String</td><td>Optional</td><td>Required if <em>inline_message_id</em> is not specified. Unique identifier for the target chat or username of the target bot, supergroup or channel in the format <code>@username</code>.</td></tr><tr><td>message_id</td><td>Integer</td><td>Optional</td><td>Required if <em>inline_message_id</em> is not specified. Identifier of the message to edit.</td></tr><tr><td>inline_message_id</td><td>String</td><td>Optional</td><td>Required if <em>chat_id</em> and <em>message_id</em> are not specified. Identifier of the inline message.</td></tr><tr><td>latitude</td><td>Float</td><td>Yes</td><td>Latitude of new location</td></tr><tr><td>longitude</td><td>Float</td><td>Yes</td><td>Longitude of new location</td></tr><tr><td>live_period</td><td>Integer</td><td>Optional</td><td>New period in seconds during which the location can be updated, starting from the message send date. If 0x7FFFFFFF is specified, then the location can be updated forever. Otherwise, the new value must not exceed the current <em>live_period</em> by more than a day, and the live location expiration date must remain within the next 90 days. If not specified, then <em>live_period</em> remains unchanged.</td></tr><tr><td>horizontal_accuracy</td><td>Float</td><td>Optional</td><td>The radius of uncertainty for the location, measured in meters; 0-1500</td></tr><tr><td>heading</td><td>Integer</td><td>Optional</td><td>Direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.</td></tr><tr><td>proximity_alert_radius</td><td>Integer</td><td>Optional</td><td>The maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td><td>Optional</td><td>A JSON-serialized object for a new <a href="/bots/features/#inline-keyboards">inline keyboard</a></td></tr></tbody></table>

#### stopMessageLiveLocation

Use this method to stop updating a live location message before _live\_period_ expires. On success, if the message is not an inline message, the edited [Message](#message) is returned, otherwise _True_ is returned.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Optional</td><td>Unique identifier of the business connection on behalf of which the message to be edited was sent</td></tr><tr><td>chat_id</td><td>Integer or String</td><td>Optional</td><td>Required if <em>inline_message_id</em> is not specified. Unique identifier for the target chat or username of the target bot, supergroup or channel in the format <code>@username</code>.</td></tr><tr><td>message_id</td><td>Integer</td><td>Optional</td><td>Required if <em>inline_message_id</em> is not specified. Identifier of the message with live location to stop.</td></tr><tr><td>inline_message_id</td><td>String</td><td>Optional</td><td>Required if <em>chat_id</em> and <em>message_id</em> are not specified. Identifier of the inline message.</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td><td>Optional</td><td>A JSON-serialized object for a new <a href="/bots/features/#inline-keyboards">inline keyboard</a></td></tr></tbody></table>

#### editMessageChecklist

Use this method to edit a checklist on behalf of a connected business account. On success, the edited [Message](#message) is returned.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Yes</td><td>Unique identifier of the business connection on behalf of which the message will be sent</td></tr><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target bot in the format <code>@username</code></td></tr><tr><td>message_id</td><td>Integer</td><td>Yes</td><td>Unique identifier for the target message</td></tr><tr><td>checklist</td><td><a href="#inputchecklist">InputChecklist</a></td><td>Yes</td><td>A JSON-serialized object for the new checklist</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td><td>Optional</td><td>A JSON-serialized object for the new <a href="/bots/features/#inline-keyboards">inline keyboard</a> for the message</td></tr></tbody></table>

#### editMessageReplyMarkup

Use this method to edit only the reply markup of messages. On success, if the edited message is not an inline message, the edited [Message](#message) is returned, otherwise _True_ is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within **48 hours** from the time they were sent.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Optional</td><td>Unique identifier of the business connection on behalf of which the message to be edited was sent</td></tr><tr><td>chat_id</td><td>Integer or String</td><td>Optional</td><td>Required if <em>inline_message_id</em> is not specified. Unique identifier for the target chat or username of the target bot, supergroup or channel in the format <code>@username</code>.</td></tr><tr><td>message_id</td><td>Integer</td><td>Optional</td><td>Required if <em>inline_message_id</em> is not specified. Identifier of the message to edit.</td></tr><tr><td>inline_message_id</td><td>String</td><td>Optional</td><td>Required if <em>chat_id</em> and <em>message_id</em> are not specified. Identifier of the inline message.</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td><td>Optional</td><td>A JSON-serialized object for an <a href="/bots/features/#inline-keyboards">inline keyboard</a></td></tr></tbody></table>

#### stopPoll

Use this method to stop a poll which was sent by the bot. On success, the stopped [Poll](#poll) is returned.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Optional</td><td>Unique identifier of the business connection on behalf of which the message to be edited was sent</td></tr><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target bot, supergroup or channel in the format <code>@username</code></td></tr><tr><td>message_id</td><td>Integer</td><td>Yes</td><td>Identifier of the original message with the poll</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td><td>Optional</td><td>A JSON-serialized object for a new message <a href="/bots/features/#inline-keyboards">inline keyboard</a></td></tr></tbody></table>

#### editEphemeralMessageText

Use this method to edit an ephemeral text message. Note that it is not guaranteed that the user will receive the message edit event, especially if they are offline. On success, _True_ is returned.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target supergroup in the format <code>@username</code></td></tr><tr><td>receiver_user_id</td><td>Integer</td><td>Yes</td><td>Identifier of the user who received the message</td></tr><tr><td>ephemeral_message_id</td><td>Integer</td><td>Yes</td><td>Identifier of the ephemeral message to edit</td></tr><tr><td>text</td><td>String</td><td>Yes</td><td>New text of the message, 1-4096 characters after entity parsing</td></tr><tr><td>parse_mode</td><td>String</td><td>Optional</td><td>Mode for parsing entities in the message text. See <a href="#formatting-options">formatting options</a> for more details.</td></tr><tr><td>entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td>Optional</td><td>A JSON-serialized list of special entities that appear in message text, which can be specified instead of <em>parse_mode</em></td></tr><tr><td>link_preview_options</td><td><a href="#linkpreviewoptions">LinkPreviewOptions</a></td><td>Optional</td><td>Link preview generation options for the message</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td><td>Optional</td><td>A JSON-serialized object for an <a href="/bots/features/#inline-keyboards">inline keyboard</a></td></tr></tbody></table>

#### editEphemeralMessageMedia

Use this method to edit the media of an ephemeral message. Note that it is not guaranteed that the user will receive the message edit event, especially if they are offline. On success, _True_ is returned.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target supergroup in the format <code>@username</code></td></tr><tr><td>receiver_user_id</td><td>Integer</td><td>Yes</td><td>Identifier of the user who received the message</td></tr><tr><td>ephemeral_message_id</td><td>Integer</td><td>Yes</td><td>Identifier of the ephemeral message to edit</td></tr><tr><td>media</td><td><a href="#inputmedia">InputMedia</a></td><td>Yes</td><td>A JSON-serialized object for the new media content of the message. A new file can't be uploaded; use a previously uploaded file via its file_id or specify a URL.</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td><td>Optional</td><td>A JSON-serialized object for an <a href="/bots/features/#inline-keyboards">inline keyboard</a></td></tr></tbody></table>

#### editEphemeralMessageCaption

Use this method to edit the caption of an ephemeral message. Note that it is not guaranteed that the user will receive the message edit event, especially if they are offline. On success, _True_ is returned.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target supergroup in the format <code>@username</code></td></tr><tr><td>receiver_user_id</td><td>Integer</td><td>Yes</td><td>Identifier of the user who received the message</td></tr><tr><td>ephemeral_message_id</td><td>Integer</td><td>Yes</td><td>Identifier of the ephemeral message to edit</td></tr><tr><td>caption</td><td>String</td><td>Optional</td><td>New caption of the message, 0-1024 characters after entities parsing</td></tr><tr><td>parse_mode</td><td>String</td><td>Optional</td><td>Mode for parsing entities in the message caption. See <a href="#formatting-options">formatting options</a> for more details.</td></tr><tr><td>caption_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td>Optional</td><td>A JSON-serialized list of special entities that appear in the caption, which can be specified instead of <em>parse_mode</em></td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td><td>Optional</td><td>A JSON-serialized object for an <a href="/bots/features/#inline-keyboards">inline keyboard</a></td></tr></tbody></table>

#### editEphemeralMessageReplyMarkup

Use this method to edit only the reply markup of an ephemeral message. Note that it is not guaranteed that the user will receive the message edit event, especially if they are offline. On success, _True_ is returned.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target supergroup in the format <code>@username</code></td></tr><tr><td>receiver_user_id</td><td>Integer</td><td>Yes</td><td>Identifier of the user who received the message</td></tr><tr><td>ephemeral_message_id</td><td>Integer</td><td>Yes</td><td>Identifier of the ephemeral message to edit</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td><td>Optional</td><td>A JSON-serialized object for an <a href="/bots/features/#inline-keyboards">inline keyboard</a></td></tr></tbody></table>

#### approveSuggestedPost

Use this method to approve a suggested post in a direct messages chat. The bot must have the 'can\_post\_messages' administrator right in the corresponding channel chat. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer</td><td>Yes</td><td>Unique identifier for the target direct messages chat</td></tr><tr><td>message_id</td><td>Integer</td><td>Yes</td><td>Identifier of a suggested post message to approve</td></tr><tr><td>send_date</td><td>Integer</td><td>Optional</td><td>Point in time (Unix timestamp) when the post is expected to be published; omit if the date has already been specified when the suggested post was created. If specified, then the date must be not more than 2678400 seconds (30 days) in the future.</td></tr></tbody></table>

#### declineSuggestedPost

Use this method to decline a suggested post in a direct messages chat. The bot must have the 'can\_manage\_direct\_messages' administrator right in the corresponding channel chat. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer</td><td>Yes</td><td>Unique identifier for the target direct messages chat</td></tr><tr><td>message_id</td><td>Integer</td><td>Yes</td><td>Identifier of a suggested post message to decline</td></tr><tr><td>comment</td><td>String</td><td>Optional</td><td>Comment for the creator of the suggested post; 0-128 characters</td></tr></tbody></table>

#### deleteMessage

Use this method to delete a message, including service messages, with the following limitations:  
\- A message can only be deleted if it was sent less than 48 hours ago.  
\- Service messages about a supergroup, channel, or forum topic creation can't be deleted.  
\- A dice message in a private chat can only be deleted if it was sent more than 24 hours ago.  
\- Bots can delete outgoing messages in private chats, groups, and supergroups.  
\- Bots can delete incoming messages in private chats.  
\- Bots granted _can\_post\_messages_ permissions can delete outgoing messages in channels.  
\- If the bot is an administrator of a group, it can delete any message there.  
\- If the bot has _can\_delete\_messages_ administrator right in a supergroup or a channel, it can delete any message there.  
\- If the bot has _can\_manage\_direct\_messages_ administrator right in a channel, it can delete any message in the corresponding direct messages chat.  
Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target bot, supergroup or channel in the format <code>@username</code></td></tr><tr><td>message_id</td><td>Integer</td><td>Yes</td><td>Identifier of the message to delete</td></tr></tbody></table>

#### deleteMessages

Use this method to delete multiple messages simultaneously. If some of the specified messages can't be found, they are skipped. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target bot, supergroup or channel in the format <code>@username</code></td></tr><tr><td>message_ids</td><td>Array of Integer</td><td>Yes</td><td>A JSON-serialized list of 1-100 identifiers of messages to delete. See <a href="#deletemessage">deleteMessage</a> for limitations on which messages can be deleted.</td></tr></tbody></table>

#### deleteEphemeralMessage

Use this method to delete an ephemeral message. Note that it is not guaranteed that the user will receive the message deletion event, especially if they are offline. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target supergroup in the format <code>@username</code></td></tr><tr><td>receiver_user_id</td><td>Integer</td><td>Yes</td><td>Identifier of the user who received the message</td></tr><tr><td>ephemeral_message_id</td><td>Integer</td><td>Yes</td><td>Identifier of the ephemeral message to delete</td></tr></tbody></table>

#### deleteMessageReaction

Use this method to remove a reaction from a message in a group or a supergroup chat. The bot must have the 'can\_delete\_messages' administrator right in the chat. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target supergroup in the format <code>@username</code></td></tr><tr><td>message_id</td><td>Integer</td><td>Yes</td><td>Identifier of the target message</td></tr><tr><td>user_id</td><td>Integer</td><td>Optional</td><td>Identifier of the user whose reaction will be removed, if the reaction was added by a user</td></tr><tr><td>actor_chat_id</td><td>Integer</td><td>Optional</td><td>Identifier of the chat whose reaction will be removed, if the reaction was added by a chat</td></tr></tbody></table>

#### deleteAllMessageReactions

Use this method to remove up to 10000 recent reactions in a group or a supergroup chat added by a given user or chat. The bot must have the 'can\_delete\_messages' administrator right in the chat. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target supergroup in the format <code>@username</code></td></tr><tr><td>user_id</td><td>Integer</td><td>Optional</td><td>Identifier of the user whose reactions will be removed, if the reactions were added by a user</td></tr><tr><td>actor_chat_id</td><td>Integer</td><td>Optional</td><td>Identifier of the chat whose reactions will be removed, if the reactions were added by a chat</td></tr></tbody></table>

### Stickers

The following methods and objects allow your bot to handle stickers and sticker sets.

#### Sticker

This object represents a sticker.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>file_id</td><td>String</td><td>Identifier for this file, which can be used to download or reuse the file</td></tr><tr><td>file_unique_id</td><td>String</td><td>Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.</td></tr><tr><td>type</td><td>String</td><td>Type of the sticker, currently one of “regular”, “mask”, “custom_emoji”. The type of the sticker is independent from its format, which is determined by the fields <em>is_animated</em> and <em>is_video</em>.</td></tr><tr><td>width</td><td>Integer</td><td>Sticker width</td></tr><tr><td>height</td><td>Integer</td><td>Sticker height</td></tr><tr><td>is_animated</td><td>Boolean</td><td><em>True</em>, if the sticker is <a href="/blog/animated-stickers/">animated</a></td></tr><tr><td>is_video</td><td>Boolean</td><td><em>True</em>, if the sticker is a <a href="/blog/video-stickers-better-reactions/">video sticker</a></td></tr><tr><td>thumbnail</td><td><a href="#photosize">PhotoSize</a></td><td><em>Optional</em>. Sticker thumbnail in the .WEBP or .JPG format</td></tr><tr><td>emoji</td><td>String</td><td><em>Optional</em>. Emoji associated with the sticker</td></tr><tr><td>set_name</td><td>String</td><td><em>Optional</em>. Name of the sticker set to which the sticker belongs</td></tr><tr><td>premium_animation</td><td><a href="#file">File</a></td><td><em>Optional</em>. For premium regular stickers, premium animation for the sticker</td></tr><tr><td>mask_position</td><td><a href="#maskposition">MaskPosition</a></td><td><em>Optional</em>. For mask stickers, the position where the mask should be placed</td></tr><tr><td>custom_emoji_id</td><td>String</td><td><em>Optional</em>. For custom emoji stickers, unique identifier of the custom emoji</td></tr><tr><td>needs_repainting</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the sticker must be repainted to a text color in messages, the color of the Telegram Premium badge in emoji status, white color on chat photos, or another appropriate color in other places</td></tr><tr><td>file_size</td><td>Integer</td><td><em>Optional</em>. File size in bytes</td></tr></tbody></table>

#### StickerSet

This object represents a sticker set.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>name</td><td>String</td><td>Sticker set name</td></tr><tr><td>title</td><td>String</td><td>Sticker set title</td></tr><tr><td>sticker_type</td><td>String</td><td>Type of stickers in the set, currently one of “regular”, “mask”, “custom_emoji”</td></tr><tr><td>stickers</td><td>Array of <a href="#sticker">Sticker</a></td><td>List of all set stickers</td></tr><tr><td>thumbnail</td><td><a href="#photosize">PhotoSize</a></td><td><em>Optional</em>. Sticker set thumbnail in the .WEBP, .TGS, or .WEBM format</td></tr></tbody></table>

#### MaskPosition

This object describes the position on faces where a mask should be placed by default.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>point</td><td>String</td><td>The part of the face relative to which the mask should be placed. One of “forehead”, “eyes”, “mouth”, or “chin”.</td></tr><tr><td>x_shift</td><td>Float</td><td>Shift by X-axis measured in widths of the mask scaled to the face size, from left to right. For example, choosing -1.0 will place mask just to the left of the default mask position.</td></tr><tr><td>y_shift</td><td>Float</td><td>Shift by Y-axis measured in heights of the mask scaled to the face size, from top to bottom. For example, 1.0 will place the mask just below the default mask position.</td></tr><tr><td>scale</td><td>Float</td><td>Mask scaling coefficient. For example, 2.0 means double size.</td></tr></tbody></table>

#### InputSticker

This object describes a sticker to be added to a sticker set.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>sticker</td><td>String</td><td>The added sticker. Pass a <em>file_id</em> as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or pass “attach://&lt;file_attach_name&gt;” to upload a new file using multipart/form-data under &lt;file_attach_name&gt; name. Animated and video stickers can't be uploaded via HTTP URL. <a href="#sending-files">More information on Sending Files »</a></td></tr><tr><td>format</td><td>String</td><td>Format of the added sticker, must be one of “static” for a <strong>.WEBP</strong> or <strong>.PNG</strong> image, “animated” for a <strong>.TGS</strong> animation, “video” for a <strong>.WEBM</strong> video</td></tr><tr><td>emoji_list</td><td>Array of String</td><td>List of 1-20 emoji associated with the sticker</td></tr><tr><td>mask_position</td><td><a href="#maskposition">MaskPosition</a></td><td><em>Optional</em>. Position where the mask should be placed on faces. For “mask” stickers only.</td></tr><tr><td>keywords</td><td>Array of String</td><td><em>Optional</em>. List of 0-20 search keywords for the sticker with total length of up to 64 characters. For “regular” and “custom_emoji” stickers only.</td></tr></tbody></table>

#### sendSticker

Use this method to send static .WEBP, [animated](/blog/animated-stickers/) .TGS, or [video](/blog/video-stickers-better-reactions/) .WEBM stickers. On success, the sent [Message](#message) is returned.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Optional</td><td>Unique identifier of the business connection on behalf of which the message will be sent</td></tr><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target bot, supergroup or channel in the format <code>@username</code></td></tr><tr><td>message_thread_id</td><td>Integer</td><td>Optional</td><td>Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only</td></tr><tr><td>direct_messages_topic_id</td><td>Integer</td><td>Optional</td><td>Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat</td></tr><tr><td>receiver_user_id</td><td>Integer</td><td>Optional</td><td>For outgoing ephemeral messages, unique identifier of the user who will receive the message; for group and supergroup chats only. It is not guaranteed that the user will receive the message, especially if they are offline. See <a href="#ephemeral-messages-and-commands">ephemeral message sending</a> for more details.</td></tr><tr><td>callback_query_id</td><td>String</td><td>Optional</td><td>For outgoing ephemeral messages, identifier of the callback query which triggered the message if any</td></tr><tr><td>sticker</td><td><a href="#inputfile">InputFile</a> or String</td><td>Yes</td><td>Sticker to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a .WEBP sticker from the Internet, or upload a new .WEBP, .TGS, or .WEBM sticker using multipart/form-data. <a href="#sending-files">More information on Sending Files »</a>. Video and animated stickers can't be sent via an HTTP URL.</td></tr><tr><td>emoji</td><td>String</td><td>Optional</td><td>Emoji associated with the sticker; only for just uploaded stickers</td></tr><tr><td>disable_notification</td><td>Boolean</td><td>Optional</td><td>Sends the message <a href="/blog/channels-2-0/#silent-messages">silently</a>. Users will receive a notification with no sound.</td></tr><tr><td>protect_content</td><td>Boolean</td><td>Optional</td><td>Protects the contents of the sent message from forwarding and saving</td></tr><tr><td>allow_paid_broadcast</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to allow up to 1000 messages per second, ignoring <a href="/bots/faq/#how-can-i-message-all-of-my-bot-s-subscribers-at-once">broadcasting limits</a> for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance.</td></tr><tr><td>message_effect_id</td><td>String</td><td>Optional</td><td>Unique identifier of the message effect to be added to the message; for private chats only</td></tr><tr><td>suggested_post_parameters</td><td><a href="#suggestedpostparameters">SuggestedPostParameters</a></td><td>Optional</td><td>A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.</td></tr><tr><td>reply_parameters</td><td><a href="#replyparameters">ReplyParameters</a></td><td>Optional</td><td>Description of the message to reply to</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a> or <a href="#replykeyboardmarkup">ReplyKeyboardMarkup</a> or <a href="#replykeyboardremove">ReplyKeyboardRemove</a> or <a href="#forcereply">ForceReply</a></td><td>Optional</td><td>Additional interface options. A JSON-serialized object for an <a href="/bots/features/#inline-keyboards">inline keyboard</a>, <a href="/bots/features/#keyboards">custom reply keyboard</a>, instructions to remove a reply keyboard or to force a reply from the user.</td></tr></tbody></table>

#### getStickerSet

Use this method to get a sticker set. On success, a [StickerSet](#stickerset) object is returned.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>name</td><td>String</td><td>Yes</td><td>Name of the sticker set</td></tr></tbody></table>

#### getCustomEmojiStickers

Use this method to get information about custom emoji stickers by their identifiers. Returns an Array of [Sticker](#sticker) objects.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>custom_emoji_ids</td><td>Array of String</td><td>Yes</td><td>A JSON-serialized list of custom emoji identifiers. At most 200 custom emoji identifiers can be specified.</td></tr></tbody></table>

#### uploadStickerFile

Use this method to upload a file with a sticker for later use in the [createNewStickerSet](#createnewstickerset), [addStickerToSet](#addstickertoset), or [replaceStickerInSet](#replacestickerinset) methods (the file can be used multiple times). Returns the uploaded [File](#file) on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>user_id</td><td>Integer</td><td>Yes</td><td>User identifier of sticker file owner</td></tr><tr><td>sticker</td><td><a href="#inputfile">InputFile</a></td><td>Yes</td><td>A file with the sticker in .WEBP, .PNG, .TGS, or .WEBM format. See <a href="/stickers/"></a><a href="/stickers/">https://core.telegram.org/stickers</a> for technical requirements. <a href="#sending-files">More information on Sending Files »</a></td></tr><tr><td>sticker_format</td><td>String</td><td>Yes</td><td>Format of the sticker, must be one of “static”, “animated”, “video”</td></tr></tbody></table>

#### createNewStickerSet

Use this method to create a new sticker set owned by a user. The bot will be able to edit the sticker set thus created. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>user_id</td><td>Integer</td><td>Yes</td><td>User identifier of created sticker set owner</td></tr><tr><td>name</td><td>String</td><td>Yes</td><td>Short name of sticker set, to be used in <code>t.me/addstickers/</code> URLs (e.g., <em>animals</em>). Can contain only English letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores and must end in <code>"_by_&lt;bot_username&gt;"</code>. <code>&lt;bot_username&gt;</code> is case insensitive. 1-64 characters.</td></tr><tr><td>title</td><td>String</td><td>Yes</td><td>Sticker set title, 1-64 characters</td></tr><tr><td>stickers</td><td>Array of <a href="#inputsticker">InputSticker</a></td><td>Yes</td><td>A JSON-serialized list of 1-50 initial stickers to be added to the sticker set</td></tr><tr><td>sticker_type</td><td>String</td><td>Optional</td><td>Type of stickers in the set, pass “regular”, “mask”, or “custom_emoji”. By default, a regular sticker set is created.</td></tr><tr><td>needs_repainting</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if stickers in the sticker set must be repainted to the color of text when used in messages, the accent color if used as emoji status, white on chat photos, or another appropriate color based on context; for custom emoji sticker sets only</td></tr></tbody></table>

#### addStickerToSet

Use this method to add a new sticker to a set created by the bot. Emoji sticker sets can have up to 200 stickers. Other sticker sets can have up to 120 stickers. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>user_id</td><td>Integer</td><td>Yes</td><td>User identifier of sticker set owner</td></tr><tr><td>name</td><td>String</td><td>Yes</td><td>Sticker set name</td></tr><tr><td>sticker</td><td><a href="#inputsticker">InputSticker</a></td><td>Yes</td><td>A JSON-serialized object with information about the added sticker. If exactly the same sticker had already been added to the set, then the set isn't changed.</td></tr></tbody></table>

#### setStickerPositionInSet

Use this method to move a sticker in a set created by the bot to a specific position. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>sticker</td><td>String</td><td>Yes</td><td>File identifier of the sticker</td></tr><tr><td>position</td><td>Integer</td><td>Yes</td><td>New sticker position in the set, zero-based</td></tr></tbody></table>

#### deleteStickerFromSet

Use this method to delete a sticker from a set created by the bot. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>sticker</td><td>String</td><td>Yes</td><td>File identifier of the sticker</td></tr></tbody></table>

#### replaceStickerInSet

Use this method to replace an existing sticker in a sticker set with a new one. The method is equivalent to calling [deleteStickerFromSet](#deletestickerfromset), then [addStickerToSet](#addstickertoset), then [setStickerPositionInSet](#setstickerpositioninset). Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>user_id</td><td>Integer</td><td>Yes</td><td>User identifier of the sticker set owner</td></tr><tr><td>name</td><td>String</td><td>Yes</td><td>Sticker set name</td></tr><tr><td>old_sticker</td><td>String</td><td>Yes</td><td>File identifier of the replaced sticker</td></tr><tr><td>sticker</td><td><a href="#inputsticker">InputSticker</a></td><td>Yes</td><td>A JSON-serialized object with information about the added sticker. If exactly the same sticker had already been added to the set, then the set remains unchanged.</td></tr></tbody></table>

#### setStickerEmojiList

Use this method to change the list of emoji assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>sticker</td><td>String</td><td>Yes</td><td>File identifier of the sticker</td></tr><tr><td>emoji_list</td><td>Array of String</td><td>Yes</td><td>A JSON-serialized list of 1-20 emoji associated with the sticker</td></tr></tbody></table>

#### setStickerKeywords

Use this method to change search keywords assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>sticker</td><td>String</td><td>Yes</td><td>File identifier of the sticker</td></tr><tr><td>keywords</td><td>Array of String</td><td>Optional</td><td>A JSON-serialized list of 0-20 search keywords for the sticker with total length of up to 64 characters</td></tr></tbody></table>

#### setStickerMaskPosition

Use this method to change the [mask position](#maskposition) of a mask sticker. The sticker must belong to a sticker set that was created by the bot. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>sticker</td><td>String</td><td>Yes</td><td>File identifier of the sticker</td></tr><tr><td>mask_position</td><td><a href="#maskposition">MaskPosition</a></td><td>Optional</td><td>A JSON-serialized object with the position where the mask should be placed on faces. Omit the parameter to remove the mask position.</td></tr></tbody></table>

#### setStickerSetTitle

Use this method to set the title of a created sticker set. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>name</td><td>String</td><td>Yes</td><td>Sticker set name</td></tr><tr><td>title</td><td>String</td><td>Yes</td><td>Sticker set title, 1-64 characters</td></tr></tbody></table>

#### setStickerSetThumbnail

Use this method to set the thumbnail of a regular or mask sticker set. The format of the thumbnail file must match the format of the stickers in the set. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>name</td><td>String</td><td>Yes</td><td>Sticker set name</td></tr><tr><td>user_id</td><td>Integer</td><td>Yes</td><td>User identifier of the sticker set owner</td></tr><tr><td>thumbnail</td><td><a href="#inputfile">InputFile</a> or String</td><td>Optional</td><td>A <strong>.WEBP</strong> or <strong>.PNG</strong> image with the thumbnail, must be up to 128 kilobytes in size and have a width and height of exactly 100px, or a <strong>.TGS</strong> animation with a thumbnail up to 32 kilobytes in size (see <a href="/stickers/"></a><a href="/stickers/">https://core.telegram.org/stickers#animation-requirements</a> for animated sticker technical requirements), or a <strong>.WEBM</strong> video with the thumbnail up to 32 kilobytes in size; see <a href="/stickers/"></a><a href="/stickers/">https://core.telegram.org/stickers#video-requirements</a> for video sticker technical requirements. Pass a <em>file_id</em> as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. <a href="#sending-files">More information on Sending Files »</a>. Animated and video sticker set thumbnails can't be uploaded via HTTP URL. If omitted, then the thumbnail is dropped and the first sticker is used as the thumbnail.</td></tr><tr><td>format</td><td>String</td><td>Yes</td><td>Format of the thumbnail, must be one of “static” for a <strong>.WEBP</strong> or <strong>.PNG</strong> image, “animated” for a <strong>.TGS</strong> animation, or “video” for a <strong>.WEBM</strong> video</td></tr></tbody></table>

#### setCustomEmojiStickerSetThumbnail

Use this method to set the thumbnail of a custom emoji sticker set. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>name</td><td>String</td><td>Yes</td><td>Sticker set name</td></tr><tr><td>custom_emoji_id</td><td>String</td><td>Optional</td><td>Custom emoji identifier of a sticker from the sticker set; pass an empty string to drop the thumbnail and use the first sticker as the thumbnail</td></tr></tbody></table>

#### deleteStickerSet

Use this method to delete a sticker set that was created by the bot. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>name</td><td>String</td><td>Yes</td><td>Sticker set name</td></tr></tbody></table>

### Rich messages

The following methods and objects allow your bot to handle and send rich messages.

#### Rich Message Formatting Options

[Rich messages](#inputrichmessage) support advanced structured formatting options like headings, lists, tables, media, block quotations, collapsible blocks, footnotes, and formulas. Telegram clients will render them accordingly. You can specify rich message content using [Markdown-style](#rich-markdown-style) or [HTML-style](#rich-html-style) formatting, or explicit [blocks](#inputrichblock).

Plain URLs, e-mail addresses, username mentions, hashtags, cashtags, bot commands, phone numbers, and bank card numbers are detected automatically. To disable automatic entity detection, pass _True_ in the _skip\_entity\_detection_ field. Note that Telegram clients will display an alert to the user before opening an inline link ('Open this link?' together with the full URL).

When [Markdown-style](#rich-markdown-style) or [HTML-style](#rich-html-style) formatting is used, you can use links in the form `tg://photo?id=...`, `tg://video?id=...`, and `tg://audio?id=...` instead of an HTTP URL to reuse previously uploaded files or upload a new file.

###### Rich Message Limits

Rich messages are subject to the following limits:

-   Up to **32768 UTF-8 characters** in the rich message text, including custom emoji alternative text and formula source.
-   Up to **500 blocks**, including nested blocks, list items, ordered list items, table rows, quotation blocks, and details blocks.
-   Up to **16 levels** of nested formatting and blocks.
-   Up to **50 media attachments** in total, including photos, videos, and audio files.
-   Up to **20 columns** in a table.

###### Rich Markdown style

To use this mode, pass rich message content in the _markdown_ field. Use the following syntax in your message:

````
**bold text**
__bold text__
*italic text*
_italic text_
~~strikethrough text~~
`inline fixed-width code`
==marked text==
||spoiler||

[inline URL](https://t.me/)
[inline e-mail](mailto:user@example.com)
[inline phone number](tel:+123456789)
[inline mention of a user](tg://user?id=123456789)
![](tg://emoji?id=5368324170671202286)
![22:45 tomorrow](tg://time?unix=1647531900&format=wDT)
$x^2 + y^2$
\#hashtag $USD +12345678901, card: 4242 4242 4242 4242, https://t.me t.me a@t.me /command @username
all the text above was on the same line

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

Paragraph text

```python
  print('pre-formatted fixed-width code block written in the Python programming language')
```

---

- unordered list item
* unordered list item
+ unordered list item

1. ordered list item
2. ordered list item

- [ ] task list item
- [x] completed task list item

>Block quotation started
>
>Block quotation continued on the next line
>Block quotation continued on the same line
>
>The last line of the block quotation

![](https://telegram.org/example/photo.jpg)
![](https://telegram.org/example/video.mp4)
![](https://telegram.org/example/audio.mp3)
![](https://telegram.org/example/audio.ogg)
![](https://telegram.org/example/animation.gif)

![](https://telegram.org/example/photo.jpg "Photo caption")
![](https://telegram.org/example/video.mp4 "Video caption")
![](https://telegram.org/example/audio.mp3 "Audio caption")
![](https://telegram.org/example/audio.ogg "Voice note caption")
![](https://telegram.org/example/animation.gif "Animation caption")

| Header 1 | Header 2 |
|:---------|:--------:|
| left     | center   |

Text with a reference[^id1] and another one[^id2].

[^id1]: Definition of the first footnote.
[^id2]: Definition of the second footnote.

$$E = mc^2$$

```math
E = mc^2
```

## Example Nested Syntax Report for _Q1_
Intro with <u>underlined text</u>, ==marked text==, and $x^2 + y^2$.
**Bold _italic <u>underlined italic bold</u> italic_ bold**
<u>In inline tags, nested **markdown** is parsed</u>
>Quote with **bold text, ~~strikethrough, and <tg-spoiler>spoiler</tg-spoiler>~~**, plus [a link](https://t.me/).

- List item with `code`, <sup>superscript</sup>, <sub>subscript</sub>, and a footnote[^note]
- Another item with **bold <tg-spoiler><code>spoiler code</code></tg-spoiler>**
- Another item with ~~strikethrough and <ins>inserted text</ins>~~

| Metric | Value |
|:-------|------:|
| Speed  | **42** <sup>ms</sup> |
| Status | <tg-spoiler>ready</tg-spoiler> |

[^note]: Footnote with _italic text_ and <u>HTML underline</u>.

---

# Details blocks can contain Markdown content:

<details open><summary>Summary with **bold text**</summary>

### Details heading
- List item with _italic text_
- List item with <tg-spoiler>spoiler</tg-spoiler>

</details>

# Collages and slideshows can contain Markdown media blocks:

<tg-collage>

![](https://telegram.org/example/photo.jpg)
![](https://telegram.org/example/video.mp4)

</tg-collage>

<tg-slideshow>

![](https://telegram.org/example/photo.jpg)
![](https://telegram.org/example/video.mp4)

</tg-slideshow>
````

For formatting features that don't have Markdown syntax, use [HTML tags](#rich-html-style):

```
<u>underlined text</u>, <ins>underlined text</ins>
<sub>subscript text</sub>
<sup>superscript text</sup>
<a name="chapter-1"></a>
<aside>Pull quote<cite>The Author</cite></aside>
<details open><summary>Title</summary>Content</details>
<tg-map lat="41.9" long="12.5" zoom="14"/>
<tg-collage><img src="https://telegram.org/example/photo.jpg"/><figcaption>Caption<cite>The Author</cite></figcaption></tg-collage>
<tg-slideshow><img src="https://telegram.org/example/photo.jpg"/><video src="https://telegram.org/example/video.mp4"/><figcaption>Slideshow caption<cite>The Author</cite></figcaption></tg-slideshow>
```

Additionally, you can use the following tag in [sendRichMessageDraft](#sendrichmessagedraft):

```
<tg-thinking>Thinking...</tg-thinking>
```

Please note:

-   Rich Markdown is compatible with GitHub Flavored Markdown where possible and can contain arbitrary HTML. Supported rich message HTML tags are parsed as described in [Rich HTML style](#rich-html-style).
-   Media can be specified only as a separate block.
-   Media blocks support only HTTP and HTTPS URLs.
-   Media type is determined by the MIME type and the URL of the media.
-   In media syntax, the optional title after the URL is used as the caption; for example, <img class="icon" src="url" alt="" title="Photo caption"> displays “Photo caption” under the media.
-   Table cells can contain only inline formatting.
-   Formula source is treated as raw LaTeX.
-   Markdown isn't parsed inside block HTML tags other than &lt;details>, &lt;tg-collage> and &lt;tg-slideshow>, therefore only HTML tags can be used there.
-   See [date-time entity formatting](#date-time-entity-formatting) for more details about supported date-time formats.

###### Rich HTML style

To use this mode, pass rich message content in the _html_ field. The following tags are currently supported:

```
<a name="chapter-0"></a>
<b>bold text</b>, <strong>bold text</strong>
<i>italic text</i>, <em>italic text</em>
<u>underlined text</u>, <ins>underlined text</ins>
<s>strikethrough text</s>, <strike>strikethrough text</strike>, <del>strikethrough text</del>
<code>inline fixed-width code</code>
<mark>marked text</mark>
<sub>subscript text</sub>
<sup>superscript text</sup>
<tg-spoiler>spoiler</tg-spoiler>

<a href="#note-1">Reference</a>
<a href="https://t.me/">inline URL</a>
<a href="mailto:user@example.com">inline e-mail</a>
<a href="tel:+123456789">inline phone number</a>
<a href="tg://user?id=123456789">inline mention of a user</a>
<a href="#chapter-1">in-document link</a>
<a name="chapter-1"></a>

<tg-reference name="note-1">Referenced text</tg-reference>
<tg-emoji emoji-id="5368324170671202286"></tg-emoji>
<img src="tg://emoji?id=5368324170671202286" alt=""/>
<tg-time unix="1647531900" format="wDT">22:45 tomorrow</tg-time>
<tg-math>x^2 + y^2</tg-math>

#hashtag $USD +12345678901, card: 4242 4242 4242 4242, https://t.me t.me a@t.me /command @username

all the text above was on the same line

<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>

<a name="chapter-2"></a>

<p>Paragraph text</p>
<pre>pre-formatted fixed-width code block</pre>
<pre><code class="language-python">  print('pre-formatted fixed-width code block written in the Python programming language')</code></pre>
<footer>Footer text</footer>
<hr/>
<ul><li>unordered list item</li></ul>
<ol><li>ordered list item</li></ol>
<ol start="3" type="a" reversed><li>ordered list item</li></ol>
<ol><li value="7" type="i">ordered list item with explicit number</li></ol>
<ul>
<li><input type="checkbox" checked>Checked checkbox</li>
<li><input type="checkbox">Unchecked checkbox</li>
</ul>

<blockquote>Block quotation started<br>Block quotation continued<br>The last line of the block quotation<cite>The Author</cite></blockquote>
<aside>Pull quote<cite>The Author</cite></aside>

<img src="https://telegram.org/example/photo.jpg"/>
<video src="https://telegram.org/example/video.mp4"></video>
<audio src="https://telegram.org/example/audio.mp3"></audio>
<audio src="https://telegram.org/example/audio.ogg"></audio>
<video src="https://telegram.org/example/animation.gif"></video>

<figure><img src="https://telegram.org/example/photo.jpg" tg-spoiler/><figcaption>Photo caption<cite>Photo credit</cite></figcaption></figure>
<figure><video src="https://telegram.org/example/video.mp4" tg-spoiler></video><figcaption>Video caption</figcaption></figure>
<figure><audio src="https://telegram.org/example/audio.mp3"></audio><figcaption>Audio caption</figcaption></figure>
<figure><audio src="https://telegram.org/example/audio.ogg"></audio><figcaption>Voice note caption</figcaption></figure>
<figure><video src="https://telegram.org/example/animation.gif" tg-spoiler></video><figcaption>Animation caption</figcaption></figure>

<tg-map lat="41.9" long="12.5" zoom="14"/>
<figure><tg-map lat="41.9" long="12.5" zoom="14"/><figcaption>Map caption</figcaption></figure>

<tg-collage><img src="https://telegram.org/example/photo.jpg"/><video src="https://telegram.org/example/video.mp4"/></tg-collage>
<tg-collage><video src="https://telegram.org/example/video.mp4"/><img src="https://telegram.org/example/photo.jpg"/><figcaption>Collage caption</figcaption></tg-collage>
<tg-slideshow><img src="https://telegram.org/example/photo.jpg"/><video src="https://telegram.org/example/video.mp4"/></tg-slideshow>
<tg-slideshow><video src="https://telegram.org/example/video.mp4"/><img src="https://telegram.org/example/photo.jpg"/><figcaption>Slideshow caption</figcaption></tg-slideshow>

<table><tr><th scope="col">Header 1</th><th scope="col">Header 2</th></tr><tr><td>Value 1</td><td>Value 2</td></tr></table>
<table bordered striped><caption>Table caption</caption>
<tr><td colspan="2" rowspan="2" align="left">Value</td><td align="center">Value2</td><td align="right">Value3</td></tr>
<tr><td valign="top">Value4</td><td valign="middle">Value5</td><td valign="bottom">Value6</td></tr>
<tr><td>Value7</td></tr></table>

<details><summary>Title</summary>Content</details>
<details open><summary>Title</summary>Content</details>
<tg-math-block>E = mc^2</tg-math-block>
```

Additionally, you can use the following tag in [sendRichMessageDraft](#sendrichmessagedraft):

```
<tg-thinking>Thinking...</tg-thinking>
```

Please note:

-   Only the tags mentioned above are currently supported.
-   All numerical HTML entities are supported.
-   The API currently supports only the following named HTML entities: `&lt;`, `&gt;`, `&amp;`, `&quot;`, `&apos;`, `&nbsp;`, `&hellip;`, `&mdash;`, `&ndash;`, `&lsquo;`, `&rsquo;`, `&ldquo;` and `&rdquo;`.
-   Use nested `pre` and `code` tags to define the programming language for a pre-formatted block.
-   Programming language can't be specified for standalone `code` tags.
-   Links `mailto:...`, `tel:...`, and `tg://user?id=...` are rendered as e-mail links, phone links, and inline mentions respectively. Other supported links are rendered as regular inline links.
-   Images, videos, and audio files can be specified only as separate media blocks.
-   Media blocks support only HTTP and HTTPS URLs.
-   An empty `<a name="..."></a>` on its own creates an anchor that can be linked to with `<a href="#...">...</a>`.
-   In `<figcaption>`, you can use `<cite>` tags to specify caption credit.
-   Use `<tg-reference name="...">...</tg-reference>` to define referenced text that can be linked to with `<a href="#...">...</a>`.
-   The body of a `<details>` tag can contain rich message content. If the `open` attribute is specified, the block is expanded by default.
-   Formula source is treated as raw LaTeX.
-   See [date-time entity formatting](#date-time-entity-formatting) for more details about supported date-time formats.

#### RichMessage

Rich formatted message.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>blocks</td><td>Array of <a href="#richblock">RichBlock</a></td><td>Content of the message</td></tr><tr><td>is_rtl</td><td>Boolean</td><td><em>Optional</em>. <em>True</em>, if the rich message must be shown right-to-left</td></tr></tbody></table>

#### InputRichMessage

Describes a rich message to be sent. Exactly **one** of the fields _html_, _markdown_, or _blocks_ must be used.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>blocks</td><td>Array of <a href="#inputrichblock">InputRichBlock</a></td><td><em>Optional</em>. Content of the rich message to send described as a list of blocks</td></tr><tr><td>html</td><td>String</td><td><em>Optional</em>. Content of the rich message to send described using HTML formatting. See <a href="#rich-message-formatting-options">rich message formatting options</a> for more details. Use <em>media</em> field to specify the media used in the message.</td></tr><tr><td>markdown</td><td>String</td><td><em>Optional</em>. Content of the rich message to send described using Markdown formatting. See <a href="#rich-message-formatting-options">rich message formatting options</a> for more details. Use <em>media</em> field to specify the media used in the message.</td></tr><tr><td>media</td><td>Array of <a href="#inputrichmessagemedia">InputRichMessageMedia</a></td><td><em>Optional</em>. List of media that are specified in the <em>markdown</em> or <em>html</em> fields using <code>tg://photo?id=</code>, <code>tg://video?id=</code>, and <code>tg://audio?id=</code> links</td></tr><tr><td>is_rtl</td><td>Boolean</td><td><em>Optional</em>. Pass <em>True</em> if the rich message must be shown right-to-left</td></tr><tr><td>skip_entity_detection</td><td>Boolean</td><td><em>Optional</em>. Pass <em>True</em> to skip automatic detection of entities (e.g., URLs, email addresses, username mentions, hashtags, cashtags, bot commands, or phone numbers) in the text</td></tr></tbody></table>

#### InputRichMessageMedia

Describes a media element embedded in an outgoing rich message.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>id</td><td>String</td><td>Unique identifier of the media used in a <code>tg://photo?id=</code>, <code>tg://video?id=</code>, or <code>tg://audio?id=</code> link. 1-64 characters, only <code>A-Z</code>, <code>a-z</code>, <code>0-9</code>, <code>_</code> and <code>-</code> are allowed.</td></tr><tr><td>media</td><td><a href="#inputmediaanimation">InputMediaAnimation</a> or <a href="#inputmediaaudio">InputMediaAudio</a> or <a href="#inputmediaphoto">InputMediaPhoto</a> or <a href="#inputmediavideo">InputMediaVideo</a> or <a href="#inputmediavoicenote">InputMediaVoiceNote</a></td><td>The media to be sent. Everything except the media itself and its properties is ignored.</td></tr></tbody></table>

#### sendRichMessage

Use this method to send rich messages. If the message contains a block with a media element, then the bot must have the right to send the media to the chat. On success, the sent [Message](#message) is returned.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Optional</td><td>Unique identifier of the business connection on behalf of which the message will be sent. Bot can send rich messages on behalf of a business account only if the corresponding user can send rich messages.</td></tr><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target bot, supergroup or channel in the format <code>@username</code></td></tr><tr><td>message_thread_id</td><td>Integer</td><td>Optional</td><td>Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only</td></tr><tr><td>direct_messages_topic_id</td><td>Integer</td><td>Optional</td><td>Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat</td></tr><tr><td>rich_message</td><td><a href="#inputrichmessage">InputRichMessage</a></td><td>Yes</td><td>The message to be sent</td></tr><tr><td>disable_notification</td><td>Boolean</td><td>Optional</td><td>Sends the message <a href="/blog/channels-2-0/#silent-messages">silently</a>. Users will receive a notification with no sound.</td></tr><tr><td>protect_content</td><td>Boolean</td><td>Optional</td><td>Protects the contents of the sent message from forwarding and saving</td></tr><tr><td>allow_paid_broadcast</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to allow up to 1000 messages per second, ignoring <a href="/bots/faq/#how-can-i-message-all-of-my-bot-s-subscribers-at-once">broadcasting limits</a> for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance.</td></tr><tr><td>message_effect_id</td><td>String</td><td>Optional</td><td>Unique identifier of the message effect to be added to the message; for private chats only</td></tr><tr><td>suggested_post_parameters</td><td><a href="#suggestedpostparameters">SuggestedPostParameters</a></td><td>Optional</td><td>A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.</td></tr><tr><td>reply_parameters</td><td><a href="#replyparameters">ReplyParameters</a></td><td>Optional</td><td>Description of the message to reply to</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a> or <a href="#replykeyboardmarkup">ReplyKeyboardMarkup</a> or <a href="#replykeyboardremove">ReplyKeyboardRemove</a> or <a href="#forcereply">ForceReply</a></td><td>Optional</td><td>Additional interface options. A JSON-serialized object for an <a href="/bots/features/#inline-keyboards">inline keyboard</a>, <a href="/bots/features/#keyboards">custom reply keyboard</a>, instructions to remove a reply keyboard or to force a reply from the user.</td></tr></tbody></table>

#### sendRichMessageDraft

Use this method to stream a partial rich message to a user while the message is being generated. Note that the streamed draft is ephemeral and acts as a temporary 30-second preview - once the output is finalized, you **must** call [sendRichMessage](#sendrichmessage) with the complete message to persist it in the user's chat. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer</td><td>Yes</td><td>Unique identifier for the target private chat</td></tr><tr><td>message_thread_id</td><td>Integer</td><td>Optional</td><td>Unique identifier for the target message thread</td></tr><tr><td>draft_id</td><td>Integer</td><td>Yes</td><td>Unique identifier of the message draft; must be non-zero. Changes to drafts with the same identifier are animated.</td></tr><tr><td>rich_message</td><td><a href="#inputrichmessage">InputRichMessage</a></td><td>Yes</td><td>The partial message to be streamed. Direct upload of new files isn't supported.</td></tr></tbody></table>

#### RichText

This object represents a rich formatted text. Currently, it can be either a String for plain text, an Array of [RichText](#richtext), or any of the following types:

-   [RichTextBold](#richtextbold)
-   [RichTextItalic](#richtextitalic)
-   [RichTextUnderline](#richtextunderline)
-   [RichTextStrikethrough](#richtextstrikethrough)
-   [RichTextSpoiler](#richtextspoiler)
-   [RichTextDateTime](#richtextdatetime)
-   [RichTextTextMention](#richtexttextmention)
-   [RichTextSubscript](#richtextsubscript)
-   [RichTextSuperscript](#richtextsuperscript)
-   [RichTextMarked](#richtextmarked)
-   [RichTextCode](#richtextcode)
-   [RichTextCustomEmoji](#richtextcustomemoji)
-   [RichTextMathematicalExpression](#richtextmathematicalexpression)
-   [RichTextUrl](#richtexturl)
-   [RichTextEmailAddress](#richtextemailaddress)
-   [RichTextPhoneNumber](#richtextphonenumber)
-   [RichTextBankCardNumber](#richtextbankcardnumber)
-   [RichTextMention](#richtextmention)
-   [RichTextHashtag](#richtexthashtag)
-   [RichTextCashtag](#richtextcashtag)
-   [RichTextBotCommand](#richtextbotcommand)
-   [RichTextAnchor](#richtextanchor)
-   [RichTextAnchorLink](#richtextanchorlink)
-   [RichTextReference](#richtextreference)
-   [RichTextReferenceLink](#richtextreferencelink)

#### RichTextBold

A bold text.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the rich text, always “bold”</td></tr><tr><td>text</td><td><a href="#richtext">RichText</a></td><td>The text</td></tr></tbody></table>

#### RichTextItalic

An italicized text.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the rich text, always “italic”</td></tr><tr><td>text</td><td><a href="#richtext">RichText</a></td><td>The text</td></tr></tbody></table>

#### RichTextUnderline

An underlined text.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the rich text, always “underline”</td></tr><tr><td>text</td><td><a href="#richtext">RichText</a></td><td>The text</td></tr></tbody></table>

#### RichTextStrikethrough

A strikethrough text.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the rich text, always “strikethrough”</td></tr><tr><td>text</td><td><a href="#richtext">RichText</a></td><td>The text</td></tr></tbody></table>

#### RichTextSpoiler

A text covered by a spoiler.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the rich text, always “spoiler”</td></tr><tr><td>text</td><td><a href="#richtext">RichText</a></td><td>The text</td></tr></tbody></table>

#### RichTextDateTime

Formatted date and time.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the rich text, always “date_time”</td></tr><tr><td>text</td><td><a href="#richtext">RichText</a></td><td>The text</td></tr><tr><td>unix_time</td><td>Integer</td><td>The Unix time associated with the entity</td></tr><tr><td>date_time_format</td><td>String</td><td>The string that defines the formatting of the date and time. See <a href="#date-time-entity-formatting">date-time entity formatting</a> for more details.</td></tr></tbody></table>

#### RichTextTextMention

A mention of a Telegram user by their identifier.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the rich text, always “text_mention”</td></tr><tr><td>text</td><td><a href="#richtext">RichText</a></td><td>The text</td></tr><tr><td>user</td><td><a href="#user">User</a></td><td>The mentioned user</td></tr></tbody></table>

#### RichTextSubscript

A subscript text.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the rich text, always “subscript”</td></tr><tr><td>text</td><td><a href="#richtext">RichText</a></td><td>The text</td></tr></tbody></table>

#### RichTextSuperscript

A superscript text.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the rich text, always “superscript”</td></tr><tr><td>text</td><td><a href="#richtext">RichText</a></td><td>The text</td></tr></tbody></table>

#### RichTextMarked

A marked text.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the rich text, always “marked”</td></tr><tr><td>text</td><td><a href="#richtext">RichText</a></td><td>The text</td></tr></tbody></table>

#### RichTextCode

A monowidth text.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the rich text, always “code”</td></tr><tr><td>text</td><td><a href="#richtext">RichText</a></td><td>The text</td></tr></tbody></table>

#### RichTextCustomEmoji

A custom emoji.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the rich text, always “custom_emoji”</td></tr><tr><td>custom_emoji_id</td><td>String</td><td>Unique identifier of the custom emoji. Use <a href="#getcustomemojistickers">getCustomEmojiStickers</a> to get full information about the sticker.</td></tr><tr><td>alternative_text</td><td>String</td><td>Alternative emoji for the custom emoji</td></tr></tbody></table>

#### RichTextMathematicalExpression

A mathematical expression.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the rich text, always “mathematical_expression”</td></tr><tr><td>expression</td><td>String</td><td>The expression in LaTeX format</td></tr></tbody></table>

#### RichTextUrl

A text with a link.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the rich text, always “url”</td></tr><tr><td>text</td><td><a href="#richtext">RichText</a></td><td>The text</td></tr><tr><td>url</td><td>String</td><td>URL of the link</td></tr></tbody></table>

#### RichTextEmailAddress

A text with an email address.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the rich text, always “email_address”</td></tr><tr><td>text</td><td><a href="#richtext">RichText</a></td><td>The text</td></tr><tr><td>email_address</td><td>String</td><td>The email address</td></tr></tbody></table>

#### RichTextPhoneNumber

A text with a phone number.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the rich text, always “phone_number”</td></tr><tr><td>text</td><td><a href="#richtext">RichText</a></td><td>The text</td></tr><tr><td>phone_number</td><td>String</td><td>The phone number</td></tr></tbody></table>

#### RichTextBankCardNumber

A text with a bank card number.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the rich text, always “bank_card_number”</td></tr><tr><td>text</td><td><a href="#richtext">RichText</a></td><td>The text</td></tr><tr><td>bank_card_number</td><td>String</td><td>The bank card number</td></tr></tbody></table>

#### RichTextMention

A mention by a username.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the rich text, always “mention”</td></tr><tr><td>text</td><td><a href="#richtext">RichText</a></td><td>The text</td></tr><tr><td>username</td><td>String</td><td>The username</td></tr></tbody></table>

#### RichTextHashtag

A hashtag.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the rich text, always “hashtag”</td></tr><tr><td>text</td><td><a href="#richtext">RichText</a></td><td>The text</td></tr><tr><td>hashtag</td><td>String</td><td>The hashtag</td></tr></tbody></table>

#### RichTextCashtag

A cashtag.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the rich text, always “cashtag”</td></tr><tr><td>text</td><td><a href="#richtext">RichText</a></td><td>The text</td></tr><tr><td>cashtag</td><td>String</td><td>The cashtag</td></tr></tbody></table>

#### RichTextBotCommand

A bot command.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the rich text, always “bot_command”</td></tr><tr><td>text</td><td><a href="#richtext">RichText</a></td><td>The text</td></tr><tr><td>bot_command</td><td>String</td><td>The bot command</td></tr></tbody></table>

#### RichTextAnchor

An anchor.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the rich text, always “anchor”</td></tr><tr><td>name</td><td>String</td><td>The name of the anchor</td></tr></tbody></table>

#### RichTextAnchorLink

A link to an anchor.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the rich text, always “anchor_link”</td></tr><tr><td>text</td><td><a href="#richtext">RichText</a></td><td>The link text</td></tr><tr><td>anchor_name</td><td>String</td><td>The name of the anchor. If the name is empty, then the link brings back to the top of the message.</td></tr></tbody></table>

#### RichTextReference

A reference.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the rich text, always “reference”</td></tr><tr><td>text</td><td><a href="#richtext">RichText</a></td><td>Text of the reference</td></tr><tr><td>name</td><td>String</td><td>The name of the reference</td></tr></tbody></table>

#### RichTextReferenceLink

A link to a reference.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the rich text, always “reference_link”</td></tr><tr><td>text</td><td><a href="#richtext">RichText</a></td><td>The link text</td></tr><tr><td>reference_name</td><td>String</td><td>The name of the reference</td></tr></tbody></table>

#### RichBlockCaption

Caption of a rich formatted block.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>text</td><td><a href="#richtext">RichText</a></td><td>Block caption</td></tr><tr><td>credit</td><td><a href="#richtext">RichText</a></td><td><em>Optional</em>. Block credit which corresponds to the HTML tag &lt;cite&gt;</td></tr></tbody></table>

#### RichBlockTableCell

Cell in a table.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>text</td><td><a href="#richtext">RichText</a></td><td><em>Optional</em>. Text in the cell. If omitted, then the cell is invisible.</td></tr><tr><td>is_header</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the cell is a header cell</td></tr><tr><td>colspan</td><td>Integer</td><td><em>Optional</em>. The number of columns the cell spans if it is bigger than 1</td></tr><tr><td>rowspan</td><td>Integer</td><td><em>Optional</em>. The number of rows the cell spans if it is bigger than 1</td></tr><tr><td>align</td><td>String</td><td>Horizontal cell content alignment. Currently, must be one of “left”, “center”, or “right”.</td></tr><tr><td>valign</td><td>String</td><td>Vertical cell content alignment. Currently, must be one of “top”, “middle”, or “bottom”.</td></tr></tbody></table>

#### RichBlockListItem

An item of a list.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>label</td><td>String</td><td>Label of the item</td></tr><tr><td>blocks</td><td>Array of <a href="#richblock">RichBlock</a></td><td>The content of the item</td></tr><tr><td>has_checkbox</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the item has a checkbox</td></tr><tr><td>is_checked</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the item has a checked checkbox</td></tr><tr><td>value</td><td>Integer</td><td><em>Optional</em>. For ordered lists, the numeric value of the item label</td></tr><tr><td>type</td><td>String</td><td><em>Optional</em>. For ordered lists, the type of the item label; must be one of “a” for lowercase letters, “A” for uppercase letters, “i” for lowercase Roman numerals, “I” for uppercase Roman numerals, or “1” for decimal numbers</td></tr></tbody></table>

#### RichBlock

This object represents a block in a rich formatted message. Currently, it can be any of the following types:

-   [RichBlockParagraph](#richblockparagraph)
-   [RichBlockSectionHeading](#richblocksectionheading)
-   [RichBlockPreformatted](#richblockpreformatted)
-   [RichBlockFooter](#richblockfooter)
-   [RichBlockDivider](#richblockdivider)
-   [RichBlockMathematicalExpression](#richblockmathematicalexpression)
-   [RichBlockAnchor](#richblockanchor)
-   [RichBlockList](#richblocklist)
-   [RichBlockBlockQuotation](#richblockblockquotation)
-   [RichBlockPullQuotation](#richblockpullquotation)
-   [RichBlockCollage](#richblockcollage)
-   [RichBlockSlideshow](#richblockslideshow)
-   [RichBlockTable](#richblocktable)
-   [RichBlockDetails](#richblockdetails)
-   [RichBlockMap](#richblockmap)
-   [RichBlockAnimation](#richblockanimation)
-   [RichBlockAudio](#richblockaudio)
-   [RichBlockPhoto](#richblockphoto)
-   [RichBlockVideo](#richblockvideo)
-   [RichBlockVoiceNote](#richblockvoicenote)
-   [RichBlockThinking](#richblockthinking)

#### RichBlockParagraph

A text paragraph, corresponding to the HTML tag `<p>`.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the block, always “paragraph”</td></tr><tr><td>text</td><td><a href="#richtext">RichText</a></td><td>Text of the block</td></tr></tbody></table>

#### RichBlockSectionHeading

A section heading, corresponding to the HTML tags `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, or `<h6>`.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the block, always “heading”</td></tr><tr><td>text</td><td><a href="#richtext">RichText</a></td><td>Text of the block</td></tr><tr><td>size</td><td>Integer</td><td>Relative size of the text font; 1-6, 1 is the largest, 6 is the smallest</td></tr></tbody></table>

#### RichBlockPreformatted

A preformatted text block, corresponding to the nested HTML tags `<pre>` and `<code>`.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the block, always “pre”</td></tr><tr><td>text</td><td><a href="#richtext">RichText</a></td><td>Text of the block</td></tr><tr><td>language</td><td>String</td><td><em>Optional</em>. The programming language of the text</td></tr></tbody></table>

#### RichBlockFooter

A footer, corresponding to the HTML tag `<footer>`.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the block, always “footer”</td></tr><tr><td>text</td><td><a href="#richtext">RichText</a></td><td>Text of the block</td></tr></tbody></table>

#### RichBlockDivider

A divider, corresponding to the HTML tag `<hr/>`.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the block, always “divider”</td></tr></tbody></table>

#### RichBlockMathematicalExpression

A block with a mathematical expression in LaTeX format, corresponding to the custom HTML tag `<tg-math-block>`.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the block, always “mathematical_expression”</td></tr><tr><td>expression</td><td>String</td><td>The mathematical expression in LaTeX format</td></tr></tbody></table>

#### RichBlockAnchor

A block with an anchor, corresponding to the HTML tag `<a>` with the attribute `name`.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the block, always “anchor”</td></tr><tr><td>name</td><td>String</td><td>The name of the anchor</td></tr></tbody></table>

#### RichBlockList

A list of blocks, corresponding to the HTML tag `<ul>` or `<ol>` with multiple nested tags `<li>`.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the block, always “list”</td></tr><tr><td>items</td><td>Array of <a href="#richblocklistitem">RichBlockListItem</a></td><td>Items of the list</td></tr></tbody></table>

#### RichBlockBlockQuotation

A block quotation, corresponding to the HTML tag `<blockquote>`.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the block, always “blockquote”</td></tr><tr><td>blocks</td><td>Array of <a href="#richblock">RichBlock</a></td><td>Content of the block</td></tr><tr><td>credit</td><td><a href="#richtext">RichText</a></td><td><em>Optional</em>. Credit of the block</td></tr></tbody></table>

#### RichBlockPullQuotation

A quotation with centered text, loosely corresponding to the HTML tag `<aside>`.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the block, always “pullquote”</td></tr><tr><td>text</td><td><a href="#richtext">RichText</a></td><td>Text of the block</td></tr><tr><td>credit</td><td><a href="#richtext">RichText</a></td><td><em>Optional</em>. Credit of the block</td></tr></tbody></table>

#### RichBlockCollage

A collage, corresponding to the custom HTML tag `<tg-collage>`.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the block, always “collage”</td></tr><tr><td>blocks</td><td>Array of <a href="#richblock">RichBlock</a></td><td>Elements of the collage</td></tr><tr><td>caption</td><td><a href="#richblockcaption">RichBlockCaption</a></td><td><em>Optional</em>. Caption of the block</td></tr></tbody></table>

#### RichBlockSlideshow

A slideshow, corresponding to the custom HTML tag `<tg-slideshow>`.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the block, always “slideshow”</td></tr><tr><td>blocks</td><td>Array of <a href="#richblock">RichBlock</a></td><td>Elements of the slideshow</td></tr><tr><td>caption</td><td><a href="#richblockcaption">RichBlockCaption</a></td><td><em>Optional</em>. Caption of the block</td></tr></tbody></table>

#### RichBlockTable

A table, corresponding to the HTML tag `<table>`.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the block, always “table”</td></tr><tr><td>cells</td><td>Array of Array of <a href="#richblocktablecell">RichBlockTableCell</a></td><td>Cells of the table</td></tr><tr><td>is_bordered</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the table has borders</td></tr><tr><td>is_striped</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the table is striped</td></tr><tr><td>caption</td><td><a href="#richtext">RichText</a></td><td><em>Optional</em>. Caption of the table</td></tr></tbody></table>

#### RichBlockDetails

An expandable block for details disclosure, corresponding to the HTML tag `<details>`.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the block, always “details”</td></tr><tr><td>summary</td><td><a href="#richtext">RichText</a></td><td>Always shown summary of the block</td></tr><tr><td>blocks</td><td>Array of <a href="#richblock">RichBlock</a></td><td>Content of the block</td></tr><tr><td>is_open</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the content of the block is visible by default</td></tr></tbody></table>

#### RichBlockMap

A block with a map, corresponding to the custom HTML tag `<tg-map>`.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the block, always “map”</td></tr><tr><td>location</td><td><a href="#location">Location</a></td><td>Location of the center of the map</td></tr><tr><td>zoom</td><td>Integer</td><td>Map zoom level; 13-20</td></tr><tr><td>width</td><td>Integer</td><td>Expected width of the map</td></tr><tr><td>height</td><td>Integer</td><td>Expected height of the map</td></tr><tr><td>caption</td><td><a href="#richblockcaption">RichBlockCaption</a></td><td><em>Optional</em>. Caption of the block</td></tr></tbody></table>

#### RichBlockAnimation

A block with an animation, corresponding to the HTML tag `<video>`.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the block, always “animation”</td></tr><tr><td>animation</td><td><a href="#animation">Animation</a></td><td>The animation</td></tr><tr><td>has_spoiler</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the media preview is covered by a spoiler animation</td></tr><tr><td>caption</td><td><a href="#richblockcaption">RichBlockCaption</a></td><td><em>Optional</em>. Caption of the block</td></tr></tbody></table>

#### RichBlockAudio

A block with a music file, corresponding to the HTML tag `<audio>`.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the block, always “audio”</td></tr><tr><td>audio</td><td><a href="#audio">Audio</a></td><td>The audio</td></tr><tr><td>caption</td><td><a href="#richblockcaption">RichBlockCaption</a></td><td><em>Optional</em>. Caption of the block</td></tr></tbody></table>

#### RichBlockPhoto

A block with a photo, corresponding to the HTML tag `<img>`.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the block, always “photo”</td></tr><tr><td>photo</td><td>Array of <a href="#photosize">PhotoSize</a></td><td>Available sizes of the photo</td></tr><tr><td>has_spoiler</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the media preview is covered by a spoiler animation</td></tr><tr><td>caption</td><td><a href="#richblockcaption">RichBlockCaption</a></td><td><em>Optional</em>. Caption of the block</td></tr></tbody></table>

#### RichBlockVideo

A block with a video, corresponding to the HTML tag `<video>`.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the block, always “video”</td></tr><tr><td>video</td><td><a href="#video">Video</a></td><td>The video</td></tr><tr><td>has_spoiler</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the media preview is covered by a spoiler animation</td></tr><tr><td>caption</td><td><a href="#richblockcaption">RichBlockCaption</a></td><td><em>Optional</em>. Caption of the block</td></tr></tbody></table>

#### RichBlockVoiceNote

A block with a voice note, corresponding to the HTML tag `<audio>`.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the block, always “voice_note”</td></tr><tr><td>voice_note</td><td><a href="#voice">Voice</a></td><td>The voice note</td></tr><tr><td>caption</td><td><a href="#richblockcaption">RichBlockCaption</a></td><td><em>Optional</em>. Caption of the block</td></tr></tbody></table>

#### RichBlockThinking

A block with a “Thinking…” placeholder, corresponding to the custom HTML tag `<tg-thinking>`. The block may be used only in [sendRichMessageDraft](#sendrichmessagedraft), therefore it can't be received in messages. See [](https://t.me/addemoji/AIActions)[https://t.me/addemoji/AIActions](https://t.me/addemoji/AIActions) for examples of custom emoji that are recommended for usage in the block.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the block, always “thinking”</td></tr><tr><td>text</td><td><a href="#richtext">RichText</a></td><td>Text of the block. See <a href="https://t.me/addemoji/AIActions"></a><a href="https://t.me/addemoji/AIActions">https://t.me/addemoji/AIActions</a> for examples of custom emoji that are recommended for usage in the block.</td></tr></tbody></table>

#### InputRichBlockListItem

An item of a list to be sent.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>blocks</td><td>Array of <a href="#inputrichblock">InputRichBlock</a></td><td>The content of the item</td></tr><tr><td>has_checkbox</td><td>True</td><td><em>Optional</em>. Pass <em>True</em> if the item has a checkbox</td></tr><tr><td>is_checked</td><td>True</td><td><em>Optional</em>. Pass <em>True</em> if the item has a checked checkbox</td></tr><tr><td>value</td><td>Integer</td><td><em>Optional</em>. For ordered lists, the numeric value of the item label</td></tr><tr><td>type</td><td>String</td><td><em>Optional</em>. For ordered lists, the type of the item label; must be one of “a” for lowercase letters, “A” for uppercase letters, “i” for lowercase Roman numerals, “I” for uppercase Roman numerals, or “1” for decimal numbers</td></tr></tbody></table>

#### InputRichBlock

This object represents a block in a rich formatted message to be sent. Currently, it can be any of the following types:

-   [InputRichBlockParagraph](#inputrichblockparagraph)
-   [InputRichBlockSectionHeading](#inputrichblocksectionheading)
-   [InputRichBlockPreformatted](#inputrichblockpreformatted)
-   [InputRichBlockFooter](#inputrichblockfooter)
-   [InputRichBlockDivider](#inputrichblockdivider)
-   [InputRichBlockMathematicalExpression](#inputrichblockmathematicalexpression)
-   [InputRichBlockAnchor](#inputrichblockanchor)
-   [InputRichBlockList](#inputrichblocklist)
-   [InputRichBlockBlockQuotation](#inputrichblockblockquotation)
-   [InputRichBlockPullQuotation](#inputrichblockpullquotation)
-   [InputRichBlockCollage](#inputrichblockcollage)
-   [InputRichBlockSlideshow](#inputrichblockslideshow)
-   [InputRichBlockTable](#inputrichblocktable)
-   [InputRichBlockDetails](#inputrichblockdetails)
-   [InputRichBlockMap](#inputrichblockmap)
-   [InputRichBlockAnimation](#inputrichblockanimation)
-   [InputRichBlockAudio](#inputrichblockaudio)
-   [InputRichBlockPhoto](#inputrichblockphoto)
-   [InputRichBlockVideo](#inputrichblockvideo)
-   [InputRichBlockVoiceNote](#inputrichblockvoicenote)
-   [InputRichBlockThinking](#inputrichblockthinking)

#### InputRichBlockParagraph

A text paragraph, corresponding to the HTML tag `<p>`.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the block, always “paragraph”</td></tr><tr><td>text</td><td><a href="#richtext">RichText</a></td><td>Text of the block</td></tr></tbody></table>

#### InputRichBlockSectionHeading

A section heading, corresponding to the HTML tags `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, or `<h6>`.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the block, always “heading”</td></tr><tr><td>text</td><td><a href="#richtext">RichText</a></td><td>Text of the block</td></tr><tr><td>size</td><td>Integer</td><td>Relative size of the text font; 1-6, 1 is the largest, 6 is the smallest</td></tr></tbody></table>

#### InputRichBlockPreformatted

A preformatted text block, corresponding to the nested HTML tags `<pre>` and `<code>`.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the block, always “pre”</td></tr><tr><td>text</td><td><a href="#richtext">RichText</a></td><td>Text of the block</td></tr><tr><td>language</td><td>String</td><td><em>Optional</em>. The programming language of the text</td></tr></tbody></table>

#### InputRichBlockFooter

A footer, corresponding to the HTML tag `<footer>`.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the block, always “footer”</td></tr><tr><td>text</td><td><a href="#richtext">RichText</a></td><td>Text of the block</td></tr></tbody></table>

#### InputRichBlockDivider

A divider, corresponding to the HTML tag `<hr/>`.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the block, always “divider”</td></tr></tbody></table>

#### InputRichBlockMathematicalExpression

A block with a mathematical expression in LaTeX format, corresponding to the custom HTML tag `<tg-math-block>`.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the block, always “mathematical_expression”</td></tr><tr><td>expression</td><td>String</td><td>The mathematical expression in LaTeX format</td></tr></tbody></table>

#### InputRichBlockAnchor

A block with an anchor, corresponding to the HTML tag `<a>` with the attribute `name`.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the block, always “anchor”</td></tr><tr><td>name</td><td>String</td><td>The name of the anchor</td></tr></tbody></table>

#### InputRichBlockList

A list of blocks, corresponding to the HTML tag `<ul>` or `<ol>` with multiple nested tags `<li>`.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the block, always “list”</td></tr><tr><td>items</td><td>Array of <a href="#inputrichblocklistitem">InputRichBlockListItem</a></td><td>Items of the list</td></tr></tbody></table>

#### InputRichBlockBlockQuotation

A block quotation, corresponding to the HTML tag `<blockquote>`.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the block, always “blockquote”</td></tr><tr><td>blocks</td><td>Array of <a href="#inputrichblock">InputRichBlock</a></td><td>Content of the block</td></tr><tr><td>credit</td><td><a href="#richtext">RichText</a></td><td><em>Optional</em>. Credit of the block</td></tr></tbody></table>

#### InputRichBlockPullQuotation

A quotation with centered text, loosely corresponding to the HTML tag `<aside>`.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the block, always “pullquote”</td></tr><tr><td>text</td><td><a href="#richtext">RichText</a></td><td>Text of the block</td></tr><tr><td>credit</td><td><a href="#richtext">RichText</a></td><td><em>Optional</em>. Credit of the block</td></tr></tbody></table>

#### InputRichBlockCollage

A collage, corresponding to the custom HTML tag `<tg-collage>`.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the block, always “collage”</td></tr><tr><td>blocks</td><td>Array of <a href="#inputrichblock">InputRichBlock</a></td><td>Elements of the collage</td></tr><tr><td>caption</td><td><a href="#richblockcaption">RichBlockCaption</a></td><td><em>Optional</em>. Caption of the block</td></tr></tbody></table>

#### InputRichBlockSlideshow

A slideshow, corresponding to the custom HTML tag `<tg-slideshow>`.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the block, always “slideshow”</td></tr><tr><td>blocks</td><td>Array of <a href="#inputrichblock">InputRichBlock</a></td><td>Elements of the slideshow</td></tr><tr><td>caption</td><td><a href="#richblockcaption">RichBlockCaption</a></td><td><em>Optional</em>. Caption of the block</td></tr></tbody></table>

#### InputRichBlockTable

A table, corresponding to the HTML tag `<table>`.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the block, always “table”</td></tr><tr><td>cells</td><td>Array of Array of <a href="#richblocktablecell">RichBlockTableCell</a></td><td>Cells of the table</td></tr><tr><td>is_bordered</td><td>True</td><td><em>Optional</em>. Pass <em>True</em> if the table has borders</td></tr><tr><td>is_striped</td><td>True</td><td><em>Optional</em>. Pass <em>True</em> if the table is striped</td></tr><tr><td>caption</td><td><a href="#richtext">RichText</a></td><td><em>Optional</em>. Caption of the table</td></tr></tbody></table>

#### InputRichBlockDetails

An expandable block for details disclosure, corresponding to the HTML tag `<details>`.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the block, always “details”</td></tr><tr><td>summary</td><td><a href="#richtext">RichText</a></td><td>Always shown summary of the block</td></tr><tr><td>blocks</td><td>Array of <a href="#inputrichblock">InputRichBlock</a></td><td>Content of the block</td></tr><tr><td>is_open</td><td>True</td><td><em>Optional</em>. Pass <em>True</em> if the content of the block is visible by default</td></tr></tbody></table>

#### InputRichBlockMap

A block with a map, corresponding to the custom HTML tag `<tg-map>`. The map's width and height must not exceed 10000 in total. The width and height ratio must be at most 20.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the block, always “map”</td></tr><tr><td>location</td><td><a href="#location">Location</a></td><td>Location of the center of the map</td></tr><tr><td>zoom</td><td>Integer</td><td>Map zoom level; 0-24</td></tr><tr><td>width</td><td>Integer</td><td>Map width; 0-10000</td></tr><tr><td>height</td><td>Integer</td><td>Map height; 0-10000</td></tr><tr><td>caption</td><td><a href="#richblockcaption">RichBlockCaption</a></td><td><em>Optional</em>. Caption of the block</td></tr></tbody></table>

#### InputRichBlockAnimation

A block with an animation, corresponding to the HTML tag `<video>`.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the block, always “animation”</td></tr><tr><td>animation</td><td><a href="#inputmediaanimation">InputMediaAnimation</a></td><td>The animation. Caption is ignored.</td></tr><tr><td>caption</td><td><a href="#richblockcaption">RichBlockCaption</a></td><td><em>Optional</em>. Caption of the block</td></tr></tbody></table>

#### InputRichBlockAudio

A block with a music file, corresponding to the HTML tag `<audio>`.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the block, always “audio”</td></tr><tr><td>audio</td><td><a href="#inputmediaaudio">InputMediaAudio</a></td><td>The audio. Caption is ignored.</td></tr><tr><td>caption</td><td><a href="#richblockcaption">RichBlockCaption</a></td><td><em>Optional</em>. Caption of the block</td></tr></tbody></table>

#### InputRichBlockPhoto

A block with a photo, corresponding to the HTML tag `<img>`.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the block, always “photo”</td></tr><tr><td>photo</td><td><a href="#inputmediaphoto">InputMediaPhoto</a></td><td>The photo. Caption is ignored.</td></tr><tr><td>caption</td><td><a href="#richblockcaption">RichBlockCaption</a></td><td><em>Optional</em>. Caption of the block</td></tr></tbody></table>

#### InputRichBlockVideo

A block with a video, corresponding to the HTML tag `<video>`.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the block, always “video”</td></tr><tr><td>video</td><td><a href="#inputmediavideo">InputMediaVideo</a></td><td>The video. Caption is ignored.</td></tr><tr><td>caption</td><td><a href="#richblockcaption">RichBlockCaption</a></td><td><em>Optional</em>. Caption of the block</td></tr></tbody></table>

#### InputRichBlockVoiceNote

A block with a voice note, corresponding to the HTML tag `<audio>`.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the block, always “voice_note”</td></tr><tr><td>voice_note</td><td><a href="#inputmediavoicenote">InputMediaVoiceNote</a></td><td>The voice note. Caption is ignored.</td></tr><tr><td>caption</td><td><a href="#richblockcaption">RichBlockCaption</a></td><td><em>Optional</em>. Caption of the block</td></tr></tbody></table>

#### InputRichBlockThinking

A block with a “Thinking…” placeholder, corresponding to the custom HTML tag `<tg-thinking>`. The block may be used only in [sendRichMessageDraft](#sendrichmessagedraft), therefore it can't be received in messages. See [](https://t.me/addemoji/AIActions)[https://t.me/addemoji/AIActions](https://t.me/addemoji/AIActions) for examples of custom emoji that are recommended for usage in the block.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the block, always “thinking”</td></tr><tr><td>text</td><td><a href="#richtext">RichText</a></td><td>Text of the block. See <a href="https://t.me/addemoji/AIActions"></a><a href="https://t.me/addemoji/AIActions">https://t.me/addemoji/AIActions</a> for examples of custom emoji that are recommended for usage in the block.</td></tr></tbody></table>

### Inline mode

The following methods and objects allow your bot to work in [inline mode](/bots/inline/).  
Please see our [Introduction to Inline bots](/bots/inline/) for more details.

To enable this option, send the `/setinline` command to [@BotFather](https://t.me/botfather) and provide the placeholder text that the user will see in the input field after typing your bot's name.

#### InlineQuery

This object represents an incoming inline query. When the user sends an empty query, your bot could return some default or trending results.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>id</td><td>String</td><td>Unique identifier for this query</td></tr><tr><td>from</td><td><a href="#user">User</a></td><td>Sender</td></tr><tr><td>query</td><td>String</td><td>Text of the query (up to 256 characters)</td></tr><tr><td>offset</td><td>String</td><td>Offset of the results to be returned, can be controlled by the bot</td></tr><tr><td>chat_type</td><td>String</td><td><em>Optional</em>. Type of the chat from which the inline query was sent. Can be either “sender” for a private chat with the inline query sender, “private”, “group”, “supergroup”, or “channel”. The chat type should be always known for requests sent from official clients and most third-party clients, unless the request was sent from a secret chat.</td></tr><tr><td>location</td><td><a href="#location">Location</a></td><td><em>Optional</em>. Sender location, only for bots that request user location</td></tr></tbody></table>

#### answerInlineQuery

Use this method to send answers to an inline query. On success, _True_ is returned.  
No more than **50** results per query are allowed.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>inline_query_id</td><td>String</td><td>Yes</td><td>Unique identifier for the answered query</td></tr><tr><td>results</td><td>Array of <a href="#inlinequeryresult">InlineQueryResult</a></td><td>Yes</td><td>A JSON-serialized Array of results for the inline query</td></tr><tr><td>cache_time</td><td>Integer</td><td>Optional</td><td>The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300.</td></tr><tr><td>is_personal</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query.</td></tr><tr><td>next_offset</td><td>String</td><td>Optional</td><td>Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don't support pagination. Offset length can't exceed 64 bytes.</td></tr><tr><td>button</td><td><a href="#inlinequeryresultsbutton">InlineQueryResultsButton</a></td><td>Optional</td><td>A JSON-serialized object describing a button to be shown above inline query results</td></tr></tbody></table>

#### InlineQueryResultsButton

This object represents a button to be shown above inline query results. You **must** use exactly one of the optional fields.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>text</td><td>String</td><td>Label text on the button</td></tr><tr><td>web_app</td><td><a href="#webappinfo">WebAppInfo</a></td><td><em>Optional</em>. Description of the <a href="/bots/webapps/">Web App</a> that will be launched when the user presses the button. The Web App will be able to switch back to the inline mode using the method <a href="/bots/webapps/#initializing-mini-apps">switchInlineQuery</a> inside the Web App.</td></tr><tr><td>start_parameter</td><td>String</td><td><em>Optional</em>. <a href="/bots/features/#deep-linking">Deep-linking</a> parameter for the /start message sent to the bot when a user presses the button. 1-64 characters, only <code>A-Z</code>, <code>a-z</code>, <code>0-9</code>, <code>_</code> and <code>-</code> are allowed.<br><br><em>Example:</em> An inline bot that sends YouTube videos can ask the user to connect the bot to their YouTube account to adapt search results accordingly. To do this, it displays a 'Connect your YouTube account' button above the results, or even before showing any. The user presses the button, switches to a private chat with the bot and, in doing so, passes a start parameter that instructs the bot to return an OAuth link. Once done, the bot can offer a <a href="#inlinekeyboardmarkup"><em>switch_inline</em></a> button so that the user can easily return to the chat where they wanted to use the bot's inline capabilities.</td></tr></tbody></table>

#### InlineQueryResult

This object represents one result of an inline query. Telegram clients currently support results of the following 20 types:

-   [InlineQueryResultCachedAudio](#inlinequeryresultcachedaudio)
-   [InlineQueryResultCachedDocument](#inlinequeryresultcacheddocument)
-   [InlineQueryResultCachedGif](#inlinequeryresultcachedgif)
-   [InlineQueryResultCachedMpeg4Gif](#inlinequeryresultcachedmpeg4gif)
-   [InlineQueryResultCachedPhoto](#inlinequeryresultcachedphoto)
-   [InlineQueryResultCachedSticker](#inlinequeryresultcachedsticker)
-   [InlineQueryResultCachedVideo](#inlinequeryresultcachedvideo)
-   [InlineQueryResultCachedVoice](#inlinequeryresultcachedvoice)
-   [InlineQueryResultArticle](#inlinequeryresultarticle)
-   [InlineQueryResultAudio](#inlinequeryresultaudio)
-   [InlineQueryResultContact](#inlinequeryresultcontact)
-   [InlineQueryResultGame](#inlinequeryresultgame)
-   [InlineQueryResultDocument](#inlinequeryresultdocument)
-   [InlineQueryResultGif](#inlinequeryresultgif)
-   [InlineQueryResultLocation](#inlinequeryresultlocation)
-   [InlineQueryResultMpeg4Gif](#inlinequeryresultmpeg4gif)
-   [InlineQueryResultPhoto](#inlinequeryresultphoto)
-   [InlineQueryResultVenue](#inlinequeryresultvenue)
-   [InlineQueryResultVideo](#inlinequeryresultvideo)
-   [InlineQueryResultVoice](#inlinequeryresultvoice)

**Note:** All URLs passed in inline query results will be available to end users and therefore must be assumed to be **public**.

#### InlineQueryResultArticle

Represents a link to an article or web page.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the result, must be <em>article</em></td></tr><tr><td>id</td><td>String</td><td>Unique identifier for this result, 1-64 Bytes</td></tr><tr><td>title</td><td>String</td><td>Title of the result</td></tr><tr><td>input_message_content</td><td><a href="#inputmessagecontent">InputMessageContent</a></td><td>Content of the message to be sent</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td><td><em>Optional</em>. <a href="/bots/features/#inline-keyboards">Inline keyboard</a> attached to the message</td></tr><tr><td>url</td><td>String</td><td><em>Optional</em>. URL of the result</td></tr><tr><td>description</td><td>String</td><td><em>Optional</em>. Short description of the result</td></tr><tr><td>thumbnail_url</td><td>String</td><td><em>Optional</em>. Url of the thumbnail for the result</td></tr><tr><td>thumbnail_width</td><td>Integer</td><td><em>Optional</em>. Thumbnail width</td></tr><tr><td>thumbnail_height</td><td>Integer</td><td><em>Optional</em>. Thumbnail height</td></tr></tbody></table>

#### InlineQueryResultPhoto

Represents a link to a photo. By default, this photo will be sent by the user with optional caption. Alternatively, you can use _input\_message\_content_ to send a message with the specified content instead of the photo.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the result, must be <em>photo</em></td></tr><tr><td>id</td><td>String</td><td>Unique identifier for this result, 1-64 bytes</td></tr><tr><td>photo_url</td><td>String</td><td>A valid URL of the photo. Photo must be in <strong>JPEG</strong> format. Photo size must not exceed 5MB.</td></tr><tr><td>thumbnail_url</td><td>String</td><td>URL of the thumbnail for the photo</td></tr><tr><td>photo_width</td><td>Integer</td><td><em>Optional</em>. Width of the photo</td></tr><tr><td>photo_height</td><td>Integer</td><td><em>Optional</em>. Height of the photo</td></tr><tr><td>title</td><td>String</td><td><em>Optional</em>. Title for the result</td></tr><tr><td>description</td><td>String</td><td><em>Optional</em>. Short description of the result</td></tr><tr><td>caption</td><td>String</td><td><em>Optional</em>. Caption of the photo to be sent, 0-1024 characters after entities parsing</td></tr><tr><td>parse_mode</td><td>String</td><td><em>Optional</em>. Mode for parsing entities in the photo caption. See <a href="#formatting-options">formatting options</a> for more details.</td></tr><tr><td>caption_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td><em>Optional</em>. List of special entities that appear in the caption, which can be specified instead of <em>parse_mode</em></td></tr><tr><td>show_caption_above_media</td><td>Boolean</td><td><em>Optional</em>. Pass <em>True</em> if the caption must be shown above the message media</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td><td><em>Optional</em>. <a href="/bots/features/#inline-keyboards">Inline keyboard</a> attached to the message</td></tr><tr><td>input_message_content</td><td><a href="#inputmessagecontent">InputMessageContent</a></td><td><em>Optional</em>. Content of the message to be sent instead of the photo</td></tr></tbody></table>

#### InlineQueryResultGif

Represents a link to an animated GIF file. By default, this animated GIF file will be sent by the user with optional caption. Alternatively, you can use _input\_message\_content_ to send a message with the specified content instead of the animation.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the result, must be <em>gif</em></td></tr><tr><td>id</td><td>String</td><td>Unique identifier for this result, 1-64 bytes</td></tr><tr><td>gif_url</td><td>String</td><td>A valid URL for the GIF file</td></tr><tr><td>gif_width</td><td>Integer</td><td><em>Optional</em>. Width of the GIF</td></tr><tr><td>gif_height</td><td>Integer</td><td><em>Optional</em>. Height of the GIF</td></tr><tr><td>gif_duration</td><td>Integer</td><td><em>Optional</em>. Duration of the GIF in seconds</td></tr><tr><td>thumbnail_url</td><td>String</td><td>URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result</td></tr><tr><td>thumbnail_mime_type</td><td>String</td><td><em>Optional</em>. MIME type of the thumbnail, must be one of “image/jpeg”, “image/gif”, or “video/mp4”. Defaults to “image/jpeg”.</td></tr><tr><td>title</td><td>String</td><td><em>Optional</em>. Title for the result</td></tr><tr><td>caption</td><td>String</td><td><em>Optional</em>. Caption of the GIF file to be sent, 0-1024 characters after entities parsing</td></tr><tr><td>parse_mode</td><td>String</td><td><em>Optional</em>. Mode for parsing entities in the caption. See <a href="#formatting-options">formatting options</a> for more details.</td></tr><tr><td>caption_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td><em>Optional</em>. List of special entities that appear in the caption, which can be specified instead of <em>parse_mode</em></td></tr><tr><td>show_caption_above_media</td><td>Boolean</td><td><em>Optional</em>. Pass <em>True</em> if the caption must be shown above the message media</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td><td><em>Optional</em>. <a href="/bots/features/#inline-keyboards">Inline keyboard</a> attached to the message</td></tr><tr><td>input_message_content</td><td><a href="#inputmessagecontent">InputMessageContent</a></td><td><em>Optional</em>. Content of the message to be sent instead of the GIF animation</td></tr></tbody></table>

#### InlineQueryResultMpeg4Gif

Represents a link to a video animation (H.264/MPEG-4 AVC video without sound). By default, this animated MPEG-4 file will be sent by the user with optional caption. Alternatively, you can use _input\_message\_content_ to send a message with the specified content instead of the animation.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the result, must be <em>mpeg4_gif</em></td></tr><tr><td>id</td><td>String</td><td>Unique identifier for this result, 1-64 bytes</td></tr><tr><td>mpeg4_url</td><td>String</td><td>A valid URL for the MPEG4 file</td></tr><tr><td>mpeg4_width</td><td>Integer</td><td><em>Optional</em>. Video width</td></tr><tr><td>mpeg4_height</td><td>Integer</td><td><em>Optional</em>. Video height</td></tr><tr><td>mpeg4_duration</td><td>Integer</td><td><em>Optional</em>. Video duration in seconds</td></tr><tr><td>thumbnail_url</td><td>String</td><td>URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result</td></tr><tr><td>thumbnail_mime_type</td><td>String</td><td><em>Optional</em>. MIME type of the thumbnail, must be one of “image/jpeg”, “image/gif”, or “video/mp4”. Defaults to “image/jpeg”.</td></tr><tr><td>title</td><td>String</td><td><em>Optional</em>. Title for the result</td></tr><tr><td>caption</td><td>String</td><td><em>Optional</em>. Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing</td></tr><tr><td>parse_mode</td><td>String</td><td><em>Optional</em>. Mode for parsing entities in the caption. See <a href="#formatting-options">formatting options</a> for more details.</td></tr><tr><td>caption_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td><em>Optional</em>. List of special entities that appear in the caption, which can be specified instead of <em>parse_mode</em></td></tr><tr><td>show_caption_above_media</td><td>Boolean</td><td><em>Optional</em>. Pass <em>True</em> if the caption must be shown above the message media</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td><td><em>Optional</em>. <a href="/bots/features/#inline-keyboards">Inline keyboard</a> attached to the message</td></tr><tr><td>input_message_content</td><td><a href="#inputmessagecontent">InputMessageContent</a></td><td><em>Optional</em>. Content of the message to be sent instead of the video animation</td></tr></tbody></table>

#### InlineQueryResultVideo

Represents a link to a page containing an embedded video player or a video file. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use _input\_message\_content_ to send a message with the specified content instead of the video.

> If an InlineQueryResultVideo message contains an embedded video (e.g., YouTube), you **must** replace its content using _input\_message\_content_.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the result, must be <em>video</em></td></tr><tr><td>id</td><td>String</td><td>Unique identifier for this result, 1-64 bytes</td></tr><tr><td>video_url</td><td>String</td><td>A valid URL for the embedded video player or video file</td></tr><tr><td>mime_type</td><td>String</td><td>MIME type of the content of the video URL, “text/html” or “video/mp4”</td></tr><tr><td>thumbnail_url</td><td>String</td><td>URL of the thumbnail (JPEG only) for the video</td></tr><tr><td>title</td><td>String</td><td>Title for the result</td></tr><tr><td>caption</td><td>String</td><td><em>Optional</em>. Caption of the video to be sent, 0-1024 characters after entities parsing</td></tr><tr><td>parse_mode</td><td>String</td><td><em>Optional</em>. Mode for parsing entities in the video caption. See <a href="#formatting-options">formatting options</a> for more details.</td></tr><tr><td>caption_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td><em>Optional</em>. List of special entities that appear in the caption, which can be specified instead of <em>parse_mode</em></td></tr><tr><td>show_caption_above_media</td><td>Boolean</td><td><em>Optional</em>. Pass <em>True</em> if the caption must be shown above the message media</td></tr><tr><td>video_width</td><td>Integer</td><td><em>Optional</em>. Video width</td></tr><tr><td>video_height</td><td>Integer</td><td><em>Optional</em>. Video height</td></tr><tr><td>video_duration</td><td>Integer</td><td><em>Optional</em>. Video duration in seconds</td></tr><tr><td>description</td><td>String</td><td><em>Optional</em>. Short description of the result</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td><td><em>Optional</em>. <a href="/bots/features/#inline-keyboards">Inline keyboard</a> attached to the message</td></tr><tr><td>input_message_content</td><td><a href="#inputmessagecontent">InputMessageContent</a></td><td><em>Optional</em>. Content of the message to be sent instead of the video. This field is <strong>required</strong> if InlineQueryResultVideo is used to send an HTML-page as a result (e.g., a YouTube video).</td></tr></tbody></table>

#### InlineQueryResultAudio

Represents a link to an MP3 audio file. By default, this audio file will be sent by the user. Alternatively, you can use _input\_message\_content_ to send a message with the specified content instead of the audio.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the result, must be <em>audio</em></td></tr><tr><td>id</td><td>String</td><td>Unique identifier for this result, 1-64 bytes</td></tr><tr><td>audio_url</td><td>String</td><td>A valid URL for the audio file</td></tr><tr><td>title</td><td>String</td><td>Title</td></tr><tr><td>caption</td><td>String</td><td><em>Optional</em>. Caption, 0-1024 characters after entities parsing</td></tr><tr><td>parse_mode</td><td>String</td><td><em>Optional</em>. Mode for parsing entities in the audio caption. See <a href="#formatting-options">formatting options</a> for more details.</td></tr><tr><td>caption_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td><em>Optional</em>. List of special entities that appear in the caption, which can be specified instead of <em>parse_mode</em></td></tr><tr><td>performer</td><td>String</td><td><em>Optional</em>. Performer</td></tr><tr><td>audio_duration</td><td>Integer</td><td><em>Optional</em>. Audio duration in seconds</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td><td><em>Optional</em>. <a href="/bots/features/#inline-keyboards">Inline keyboard</a> attached to the message</td></tr><tr><td>input_message_content</td><td><a href="#inputmessagecontent">InputMessageContent</a></td><td><em>Optional</em>. Content of the message to be sent instead of the audio</td></tr></tbody></table>

#### InlineQueryResultVoice

Represents a link to a voice recording in an .OGG container encoded with OPUS. By default, this voice recording will be sent by the user. Alternatively, you can use _input\_message\_content_ to send a message with the specified content instead of the the voice message.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the result, must be <em>voice</em></td></tr><tr><td>id</td><td>String</td><td>Unique identifier for this result, 1-64 bytes</td></tr><tr><td>voice_url</td><td>String</td><td>A valid URL for the voice recording</td></tr><tr><td>title</td><td>String</td><td>Recording title</td></tr><tr><td>caption</td><td>String</td><td><em>Optional</em>. Caption, 0-1024 characters after entities parsing</td></tr><tr><td>parse_mode</td><td>String</td><td><em>Optional</em>. Mode for parsing entities in the voice message caption. See <a href="#formatting-options">formatting options</a> for more details.</td></tr><tr><td>caption_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td><em>Optional</em>. List of special entities that appear in the caption, which can be specified instead of <em>parse_mode</em></td></tr><tr><td>voice_duration</td><td>Integer</td><td><em>Optional</em>. Recording duration in seconds</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td><td><em>Optional</em>. <a href="/bots/features/#inline-keyboards">Inline keyboard</a> attached to the message</td></tr><tr><td>input_message_content</td><td><a href="#inputmessagecontent">InputMessageContent</a></td><td><em>Optional</em>. Content of the message to be sent instead of the voice recording</td></tr></tbody></table>

#### InlineQueryResultDocument

Represents a link to a file. By default, this file will be sent by the user with an optional caption. Alternatively, you can use _input\_message\_content_ to send a message with the specified content instead of the file. Currently, only **.PDF** and **.ZIP** files can be sent using this method.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the result, must be <em>document</em></td></tr><tr><td>id</td><td>String</td><td>Unique identifier for this result, 1-64 bytes</td></tr><tr><td>title</td><td>String</td><td>Title for the result</td></tr><tr><td>caption</td><td>String</td><td><em>Optional</em>. Caption of the document to be sent, 0-1024 characters after entities parsing</td></tr><tr><td>parse_mode</td><td>String</td><td><em>Optional</em>. Mode for parsing entities in the document caption. See <a href="#formatting-options">formatting options</a> for more details.</td></tr><tr><td>caption_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td><em>Optional</em>. List of special entities that appear in the caption, which can be specified instead of <em>parse_mode</em></td></tr><tr><td>document_url</td><td>String</td><td>A valid URL for the file</td></tr><tr><td>mime_type</td><td>String</td><td>MIME type of the content of the file, either “application/pdf” or “application/zip”</td></tr><tr><td>description</td><td>String</td><td><em>Optional</em>. Short description of the result</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td><td><em>Optional</em>. <a href="/bots/features/#inline-keyboards">Inline keyboard</a> attached to the message</td></tr><tr><td>input_message_content</td><td><a href="#inputmessagecontent">InputMessageContent</a></td><td><em>Optional</em>. Content of the message to be sent instead of the file</td></tr><tr><td>thumbnail_url</td><td>String</td><td><em>Optional</em>. URL of the thumbnail (JPEG only) for the file</td></tr><tr><td>thumbnail_width</td><td>Integer</td><td><em>Optional</em>. Thumbnail width</td></tr><tr><td>thumbnail_height</td><td>Integer</td><td><em>Optional</em>. Thumbnail height</td></tr></tbody></table>

#### InlineQueryResultLocation

Represents a location on a map. By default, the location will be sent by the user. Alternatively, you can use _input\_message\_content_ to send a message with the specified content instead of the location.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the result, must be <em>location</em></td></tr><tr><td>id</td><td>String</td><td>Unique identifier for this result, 1-64 Bytes</td></tr><tr><td>latitude</td><td>Float</td><td>Location latitude in degrees</td></tr><tr><td>longitude</td><td>Float</td><td>Location longitude in degrees</td></tr><tr><td>title</td><td>String</td><td>Location title</td></tr><tr><td>horizontal_accuracy</td><td>Float</td><td><em>Optional</em>. The radius of uncertainty for the location, measured in meters; 0-1500</td></tr><tr><td>live_period</td><td>Integer</td><td><em>Optional</em>. Period in seconds during which the location can be updated, must be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely</td></tr><tr><td>heading</td><td>Integer</td><td><em>Optional</em>. For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.</td></tr><tr><td>proximity_alert_radius</td><td>Integer</td><td><em>Optional</em>. For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td><td><em>Optional</em>. <a href="/bots/features/#inline-keyboards">Inline keyboard</a> attached to the message</td></tr><tr><td>input_message_content</td><td><a href="#inputmessagecontent">InputMessageContent</a></td><td><em>Optional</em>. Content of the message to be sent instead of the location</td></tr><tr><td>thumbnail_url</td><td>String</td><td><em>Optional</em>. Url of the thumbnail for the result</td></tr><tr><td>thumbnail_width</td><td>Integer</td><td><em>Optional</em>. Thumbnail width</td></tr><tr><td>thumbnail_height</td><td>Integer</td><td><em>Optional</em>. Thumbnail height</td></tr></tbody></table>

#### InlineQueryResultVenue

Represents a venue. By default, the venue will be sent by the user. Alternatively, you can use _input\_message\_content_ to send a message with the specified content instead of the venue.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the result, must be <em>venue</em></td></tr><tr><td>id</td><td>String</td><td>Unique identifier for this result, 1-64 Bytes</td></tr><tr><td>latitude</td><td>Float</td><td>Latitude of the venue location in degrees</td></tr><tr><td>longitude</td><td>Float</td><td>Longitude of the venue location in degrees</td></tr><tr><td>title</td><td>String</td><td>Title of the venue</td></tr><tr><td>address</td><td>String</td><td>Address of the venue</td></tr><tr><td>foursquare_id</td><td>String</td><td><em>Optional</em>. Foursquare identifier of the venue if known</td></tr><tr><td>foursquare_type</td><td>String</td><td><em>Optional</em>. Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)</td></tr><tr><td>google_place_id</td><td>String</td><td><em>Optional</em>. Google Places identifier of the venue</td></tr><tr><td>google_place_type</td><td>String</td><td><em>Optional</em>. Google Places type of the venue. (See <a href="https://developers.google.com/places/web-service/supported_types">supported types</a>.)</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td><td><em>Optional</em>. <a href="/bots/features/#inline-keyboards">Inline keyboard</a> attached to the message</td></tr><tr><td>input_message_content</td><td><a href="#inputmessagecontent">InputMessageContent</a></td><td><em>Optional</em>. Content of the message to be sent instead of the venue</td></tr><tr><td>thumbnail_url</td><td>String</td><td><em>Optional</em>. Url of the thumbnail for the result</td></tr><tr><td>thumbnail_width</td><td>Integer</td><td><em>Optional</em>. Thumbnail width</td></tr><tr><td>thumbnail_height</td><td>Integer</td><td><em>Optional</em>. Thumbnail height</td></tr></tbody></table>

#### InlineQueryResultContact

Represents a contact with a phone number. By default, this contact will be sent by the user. Alternatively, you can use _input\_message\_content_ to send a message with the specified content instead of the contact.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the result, must be <em>contact</em></td></tr><tr><td>id</td><td>String</td><td>Unique identifier for this result, 1-64 Bytes</td></tr><tr><td>phone_number</td><td>String</td><td>Contact's phone number</td></tr><tr><td>first_name</td><td>String</td><td>Contact's first name</td></tr><tr><td>last_name</td><td>String</td><td><em>Optional</em>. Contact's last name</td></tr><tr><td>vcard</td><td>String</td><td><em>Optional</em>. Additional data about the contact in the form of a <a href="https://en.wikipedia.org/wiki/VCard">vCard</a>, 0-2048 bytes</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td><td><em>Optional</em>. <a href="/bots/features/#inline-keyboards">Inline keyboard</a> attached to the message</td></tr><tr><td>input_message_content</td><td><a href="#inputmessagecontent">InputMessageContent</a></td><td><em>Optional</em>. Content of the message to be sent instead of the contact</td></tr><tr><td>thumbnail_url</td><td>String</td><td><em>Optional</em>. Url of the thumbnail for the result</td></tr><tr><td>thumbnail_width</td><td>Integer</td><td><em>Optional</em>. Thumbnail width</td></tr><tr><td>thumbnail_height</td><td>Integer</td><td><em>Optional</em>. Thumbnail height</td></tr></tbody></table>

#### InlineQueryResultGame

Represents a [Game](#games).

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the result, must be <em>game</em></td></tr><tr><td>id</td><td>String</td><td>Unique identifier for this result, 1-64 bytes</td></tr><tr><td>game_short_name</td><td>String</td><td>Short name of the game</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td><td><em>Optional</em>. <a href="/bots/features/#inline-keyboards">Inline keyboard</a> attached to the message</td></tr></tbody></table>

#### InlineQueryResultCachedPhoto

Represents a link to a photo stored on the Telegram servers. By default, this photo will be sent by the user with an optional caption. Alternatively, you can use _input\_message\_content_ to send a message with the specified content instead of the photo.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the result, must be <em>photo</em></td></tr><tr><td>id</td><td>String</td><td>Unique identifier for this result, 1-64 bytes</td></tr><tr><td>photo_file_id</td><td>String</td><td>A valid file identifier of the photo</td></tr><tr><td>title</td><td>String</td><td><em>Optional</em>. Title for the result</td></tr><tr><td>description</td><td>String</td><td><em>Optional</em>. Short description of the result</td></tr><tr><td>caption</td><td>String</td><td><em>Optional</em>. Caption of the photo to be sent, 0-1024 characters after entities parsing</td></tr><tr><td>parse_mode</td><td>String</td><td><em>Optional</em>. Mode for parsing entities in the photo caption. See <a href="#formatting-options">formatting options</a> for more details.</td></tr><tr><td>caption_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td><em>Optional</em>. List of special entities that appear in the caption, which can be specified instead of <em>parse_mode</em></td></tr><tr><td>show_caption_above_media</td><td>Boolean</td><td><em>Optional</em>. Pass <em>True</em> if the caption must be shown above the message media</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td><td><em>Optional</em>. <a href="/bots/features/#inline-keyboards">Inline keyboard</a> attached to the message</td></tr><tr><td>input_message_content</td><td><a href="#inputmessagecontent">InputMessageContent</a></td><td><em>Optional</em>. Content of the message to be sent instead of the photo</td></tr></tbody></table>

#### InlineQueryResultCachedGif

Represents a link to an animated GIF file stored on the Telegram servers. By default, this animated GIF file will be sent by the user with an optional caption. Alternatively, you can use _input\_message\_content_ to send a message with specified content instead of the animation.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the result, must be <em>gif</em></td></tr><tr><td>id</td><td>String</td><td>Unique identifier for this result, 1-64 bytes</td></tr><tr><td>gif_file_id</td><td>String</td><td>A valid file identifier for the GIF file</td></tr><tr><td>title</td><td>String</td><td><em>Optional</em>. Title for the result</td></tr><tr><td>caption</td><td>String</td><td><em>Optional</em>. Caption of the GIF file to be sent, 0-1024 characters after entities parsing</td></tr><tr><td>parse_mode</td><td>String</td><td><em>Optional</em>. Mode for parsing entities in the caption. See <a href="#formatting-options">formatting options</a> for more details.</td></tr><tr><td>caption_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td><em>Optional</em>. List of special entities that appear in the caption, which can be specified instead of <em>parse_mode</em></td></tr><tr><td>show_caption_above_media</td><td>Boolean</td><td><em>Optional</em>. Pass <em>True</em> if the caption must be shown above the message media</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td><td><em>Optional</em>. <a href="/bots/features/#inline-keyboards">Inline keyboard</a> attached to the message</td></tr><tr><td>input_message_content</td><td><a href="#inputmessagecontent">InputMessageContent</a></td><td><em>Optional</em>. Content of the message to be sent instead of the GIF animation</td></tr></tbody></table>

#### InlineQueryResultCachedMpeg4Gif

Represents a link to a video animation (H.264/MPEG-4 AVC video without sound) stored on the Telegram servers. By default, this animated MPEG-4 file will be sent by the user with an optional caption. Alternatively, you can use _input\_message\_content_ to send a message with the specified content instead of the animation.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the result, must be <em>mpeg4_gif</em></td></tr><tr><td>id</td><td>String</td><td>Unique identifier for this result, 1-64 bytes</td></tr><tr><td>mpeg4_file_id</td><td>String</td><td>A valid file identifier for the MPEG4 file</td></tr><tr><td>title</td><td>String</td><td><em>Optional</em>. Title for the result</td></tr><tr><td>caption</td><td>String</td><td><em>Optional</em>. Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing</td></tr><tr><td>parse_mode</td><td>String</td><td><em>Optional</em>. Mode for parsing entities in the caption. See <a href="#formatting-options">formatting options</a> for more details.</td></tr><tr><td>caption_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td><em>Optional</em>. List of special entities that appear in the caption, which can be specified instead of <em>parse_mode</em></td></tr><tr><td>show_caption_above_media</td><td>Boolean</td><td><em>Optional</em>. Pass <em>True</em> if the caption must be shown above the message media</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td><td><em>Optional</em>. <a href="/bots/features/#inline-keyboards">Inline keyboard</a> attached to the message</td></tr><tr><td>input_message_content</td><td><a href="#inputmessagecontent">InputMessageContent</a></td><td><em>Optional</em>. Content of the message to be sent instead of the video animation</td></tr></tbody></table>

#### InlineQueryResultCachedSticker

Represents a link to a sticker stored on the Telegram servers. By default, this sticker will be sent by the user. Alternatively, you can use _input\_message\_content_ to send a message with the specified content instead of the sticker.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the result, must be <em>sticker</em></td></tr><tr><td>id</td><td>String</td><td>Unique identifier for this result, 1-64 bytes</td></tr><tr><td>sticker_file_id</td><td>String</td><td>A valid file identifier of the sticker</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td><td><em>Optional</em>. <a href="/bots/features/#inline-keyboards">Inline keyboard</a> attached to the message</td></tr><tr><td>input_message_content</td><td><a href="#inputmessagecontent">InputMessageContent</a></td><td><em>Optional</em>. Content of the message to be sent instead of the sticker</td></tr></tbody></table>

#### InlineQueryResultCachedDocument

Represents a link to a file stored on the Telegram servers. By default, this file will be sent by the user with an optional caption. Alternatively, you can use _input\_message\_content_ to send a message with the specified content instead of the file.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the result, must be <em>document</em></td></tr><tr><td>id</td><td>String</td><td>Unique identifier for this result, 1-64 bytes</td></tr><tr><td>title</td><td>String</td><td>Title for the result</td></tr><tr><td>document_file_id</td><td>String</td><td>A valid file identifier for the file</td></tr><tr><td>description</td><td>String</td><td><em>Optional</em>. Short description of the result</td></tr><tr><td>caption</td><td>String</td><td><em>Optional</em>. Caption of the document to be sent, 0-1024 characters after entities parsing</td></tr><tr><td>parse_mode</td><td>String</td><td><em>Optional</em>. Mode for parsing entities in the document caption. See <a href="#formatting-options">formatting options</a> for more details.</td></tr><tr><td>caption_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td><em>Optional</em>. List of special entities that appear in the caption, which can be specified instead of <em>parse_mode</em></td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td><td><em>Optional</em>. <a href="/bots/features/#inline-keyboards">Inline keyboard</a> attached to the message</td></tr><tr><td>input_message_content</td><td><a href="#inputmessagecontent">InputMessageContent</a></td><td><em>Optional</em>. Content of the message to be sent instead of the file</td></tr></tbody></table>

#### InlineQueryResultCachedVideo

Represents a link to a video file stored on the Telegram servers. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use _input\_message\_content_ to send a message with the specified content instead of the video.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the result, must be <em>video</em></td></tr><tr><td>id</td><td>String</td><td>Unique identifier for this result, 1-64 bytes</td></tr><tr><td>video_file_id</td><td>String</td><td>A valid file identifier for the video file</td></tr><tr><td>title</td><td>String</td><td>Title for the result</td></tr><tr><td>description</td><td>String</td><td><em>Optional</em>. Short description of the result</td></tr><tr><td>caption</td><td>String</td><td><em>Optional</em>. Caption of the video to be sent, 0-1024 characters after entities parsing</td></tr><tr><td>parse_mode</td><td>String</td><td><em>Optional</em>. Mode for parsing entities in the video caption. See <a href="#formatting-options">formatting options</a> for more details.</td></tr><tr><td>caption_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td><em>Optional</em>. List of special entities that appear in the caption, which can be specified instead of <em>parse_mode</em></td></tr><tr><td>show_caption_above_media</td><td>Boolean</td><td><em>Optional</em>. Pass <em>True</em> if the caption must be shown above the message media</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td><td><em>Optional</em>. <a href="/bots/features/#inline-keyboards">Inline keyboard</a> attached to the message</td></tr><tr><td>input_message_content</td><td><a href="#inputmessagecontent">InputMessageContent</a></td><td><em>Optional</em>. Content of the message to be sent instead of the video</td></tr></tbody></table>

#### InlineQueryResultCachedVoice

Represents a link to a voice message stored on the Telegram servers. By default, this voice message will be sent by the user. Alternatively, you can use _input\_message\_content_ to send a message with the specified content instead of the voice message.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the result, must be <em>voice</em></td></tr><tr><td>id</td><td>String</td><td>Unique identifier for this result, 1-64 bytes</td></tr><tr><td>voice_file_id</td><td>String</td><td>A valid file identifier for the voice message</td></tr><tr><td>title</td><td>String</td><td>Voice message title</td></tr><tr><td>caption</td><td>String</td><td><em>Optional</em>. Caption, 0-1024 characters after entities parsing</td></tr><tr><td>parse_mode</td><td>String</td><td><em>Optional</em>. Mode for parsing entities in the voice message caption. See <a href="#formatting-options">formatting options</a> for more details.</td></tr><tr><td>caption_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td><em>Optional</em>. List of special entities that appear in the caption, which can be specified instead of <em>parse_mode</em></td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td><td><em>Optional</em>. <a href="/bots/features/#inline-keyboards">Inline keyboard</a> attached to the message</td></tr><tr><td>input_message_content</td><td><a href="#inputmessagecontent">InputMessageContent</a></td><td><em>Optional</em>. Content of the message to be sent instead of the voice message</td></tr></tbody></table>

#### InlineQueryResultCachedAudio

Represents a link to an MP3 audio file stored on the Telegram servers. By default, this audio file will be sent by the user. Alternatively, you can use _input\_message\_content_ to send a message with the specified content instead of the audio.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the result, must be <em>audio</em></td></tr><tr><td>id</td><td>String</td><td>Unique identifier for this result, 1-64 bytes</td></tr><tr><td>audio_file_id</td><td>String</td><td>A valid file identifier for the audio file</td></tr><tr><td>caption</td><td>String</td><td><em>Optional</em>. Caption, 0-1024 characters after entities parsing</td></tr><tr><td>parse_mode</td><td>String</td><td><em>Optional</em>. Mode for parsing entities in the audio caption. See <a href="#formatting-options">formatting options</a> for more details.</td></tr><tr><td>caption_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td><em>Optional</em>. List of special entities that appear in the caption, which can be specified instead of <em>parse_mode</em></td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td><td><em>Optional</em>. <a href="/bots/features/#inline-keyboards">Inline keyboard</a> attached to the message</td></tr><tr><td>input_message_content</td><td><a href="#inputmessagecontent">InputMessageContent</a></td><td><em>Optional</em>. Content of the message to be sent instead of the audio</td></tr></tbody></table>

#### InputMessageContent

This object represents the content of a message to be sent as a result of an inline query. Telegram clients currently support the following types:

-   [InputTextMessageContent](#inputtextmessagecontent)
-   [InputRichMessageContent](#inputrichmessagecontent)
-   [InputLocationMessageContent](#inputlocationmessagecontent)
-   [InputVenueMessageContent](#inputvenuemessagecontent)
-   [InputContactMessageContent](#inputcontactmessagecontent)
-   [InputInvoiceMessageContent](#inputinvoicemessagecontent)

#### InputTextMessageContent

Represents the [content](#inputmessagecontent) of a text message to be sent as the result of an inline query.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>message_text</td><td>String</td><td>Text of the message to be sent, 1-4096 characters</td></tr><tr><td>parse_mode</td><td>String</td><td><em>Optional</em>. Mode for parsing entities in the message text. See <a href="#formatting-options">formatting options</a> for more details.</td></tr><tr><td>entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td><em>Optional</em>. List of special entities that appear in message text, which can be specified instead of <em>parse_mode</em></td></tr><tr><td>link_preview_options</td><td><a href="#linkpreviewoptions">LinkPreviewOptions</a></td><td><em>Optional</em>. Link preview generation options for the message</td></tr></tbody></table>

#### InputRichMessageContent

Represents the [content](#inputmessagecontent) of a rich message to be sent as the result of an inline query.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>rich_message</td><td><a href="#inputrichmessage">InputRichMessage</a></td><td>The message to be sent</td></tr></tbody></table>

#### InputLocationMessageContent

Represents the [content](#inputmessagecontent) of a location message to be sent as the result of an inline query.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>latitude</td><td>Float</td><td>Latitude of the location in degrees</td></tr><tr><td>longitude</td><td>Float</td><td>Longitude of the location in degrees</td></tr><tr><td>horizontal_accuracy</td><td>Float</td><td><em>Optional</em>. The radius of uncertainty for the location, measured in meters; 0-1500</td></tr><tr><td>live_period</td><td>Integer</td><td><em>Optional</em>. Period in seconds during which the location can be updated, must be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely</td></tr><tr><td>heading</td><td>Integer</td><td><em>Optional</em>. For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.</td></tr><tr><td>proximity_alert_radius</td><td>Integer</td><td><em>Optional</em>. For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.</td></tr></tbody></table>

#### InputVenueMessageContent

Represents the [content](#inputmessagecontent) of a venue message to be sent as the result of an inline query.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>latitude</td><td>Float</td><td>Latitude of the venue in degrees</td></tr><tr><td>longitude</td><td>Float</td><td>Longitude of the venue in degrees</td></tr><tr><td>title</td><td>String</td><td>Name of the venue</td></tr><tr><td>address</td><td>String</td><td>Address of the venue</td></tr><tr><td>foursquare_id</td><td>String</td><td><em>Optional</em>. Foursquare identifier of the venue, if known</td></tr><tr><td>foursquare_type</td><td>String</td><td><em>Optional</em>. Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)</td></tr><tr><td>google_place_id</td><td>String</td><td><em>Optional</em>. Google Places identifier of the venue</td></tr><tr><td>google_place_type</td><td>String</td><td><em>Optional</em>. Google Places type of the venue. (See <a href="https://developers.google.com/places/web-service/supported_types">supported types</a>.)</td></tr></tbody></table>

#### InputContactMessageContent

Represents the [content](#inputmessagecontent) of a contact message to be sent as the result of an inline query.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>phone_number</td><td>String</td><td>Contact's phone number</td></tr><tr><td>first_name</td><td>String</td><td>Contact's first name</td></tr><tr><td>last_name</td><td>String</td><td><em>Optional</em>. Contact's last name</td></tr><tr><td>vcard</td><td>String</td><td><em>Optional</em>. Additional data about the contact in the form of a <a href="https://en.wikipedia.org/wiki/VCard">vCard</a>, 0-2048 bytes</td></tr></tbody></table>

#### InputInvoiceMessageContent

Represents the [content](#inputmessagecontent) of an invoice message to be sent as the result of an inline query.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>title</td><td>String</td><td>Product name, 1-32 characters</td></tr><tr><td>description</td><td>String</td><td>Product description, 1-255 characters</td></tr><tr><td>payload</td><td>String</td><td>Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use it for your internal processes.</td></tr><tr><td>provider_token</td><td>String</td><td><em>Optional</em>. Payment provider token, obtained via <a href="https://t.me/botfather">@BotFather</a>. Pass an empty string for payments in <a href="https://t.me/BotNews/90">Telegram Stars</a>.</td></tr><tr><td>currency</td><td>String</td><td>Three-letter ISO 4217 currency code, see <a href="/bots/payments/#supported-currencies">more on currencies</a>. Pass “XTR” for payments in <a href="https://t.me/BotNews/90">Telegram Stars</a>.</td></tr><tr><td>prices</td><td>Array of <a href="#labeledprice">LabeledPrice</a></td><td>Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.). Must contain exactly one item for payments in <a href="https://t.me/BotNews/90">Telegram Stars</a>.</td></tr><tr><td>max_tip_amount</td><td>Integer</td><td><em>Optional</em>. The maximum accepted amount for tips in the <em>smallest units</em> of the currency (integer, <strong>not</strong> float/double). For example, for a maximum tip of <code>US$ 1.45</code> pass <code>max_tip_amount = 145</code>. See the <em>exp</em> parameter in <a href="/bots/payments/currencies.json/">currencies.json</a>, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0. Not supported for payments in <a href="https://t.me/BotNews/90">Telegram Stars</a>.</td></tr><tr><td>suggested_tip_amounts</td><td>Array of Integer</td><td><em>Optional</em>. A JSON-serialized Array of suggested amounts of tip in the <em>smallest units</em> of the currency (integer, <strong>not</strong> float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed <em>max_tip_amount</em>.</td></tr><tr><td>provider_data</td><td>String</td><td><em>Optional</em>. A JSON-serialized object for data about the invoice, which will be shared with the payment provider. A detailed description of the required fields should be provided by the payment provider.</td></tr><tr><td>photo_url</td><td>String</td><td><em>Optional</em>. URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service.</td></tr><tr><td>photo_size</td><td>Integer</td><td><em>Optional</em>. Photo size in bytes</td></tr><tr><td>photo_width</td><td>Integer</td><td><em>Optional</em>. Photo width</td></tr><tr><td>photo_height</td><td>Integer</td><td><em>Optional</em>. Photo height</td></tr><tr><td>need_name</td><td>Boolean</td><td><em>Optional</em>. Pass <em>True</em> if you require the user's full name to complete the order. Ignored for payments in <a href="https://t.me/BotNews/90">Telegram Stars</a>.</td></tr><tr><td>need_phone_number</td><td>Boolean</td><td><em>Optional</em>. Pass <em>True</em> if you require the user's phone number to complete the order. Ignored for payments in <a href="https://t.me/BotNews/90">Telegram Stars</a>.</td></tr><tr><td>need_email</td><td>Boolean</td><td><em>Optional</em>. Pass <em>True</em> if you require the user's email address to complete the order. Ignored for payments in <a href="https://t.me/BotNews/90">Telegram Stars</a>.</td></tr><tr><td>need_shipping_address</td><td>Boolean</td><td><em>Optional</em>. Pass <em>True</em> if you require the user's shipping address to complete the order. Ignored for payments in <a href="https://t.me/BotNews/90">Telegram Stars</a>.</td></tr><tr><td>send_phone_number_to_provider</td><td>Boolean</td><td><em>Optional</em>. Pass <em>True</em> if the user's phone number should be sent to the provider. Ignored for payments in <a href="https://t.me/BotNews/90">Telegram Stars</a>.</td></tr><tr><td>send_email_to_provider</td><td>Boolean</td><td><em>Optional</em>. Pass <em>True</em> if the user's email address should be sent to the provider. Ignored for payments in <a href="https://t.me/BotNews/90">Telegram Stars</a>.</td></tr><tr><td>is_flexible</td><td>Boolean</td><td><em>Optional</em>. Pass <em>True</em> if the final price depends on the shipping method. Ignored for payments in <a href="https://t.me/BotNews/90">Telegram Stars</a>.</td></tr></tbody></table>

#### ChosenInlineResult

Represents a [result](#inlinequeryresult) of an inline query that was chosen by the user and sent to their chat partner.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>result_id</td><td>String</td><td>The unique identifier for the result that was chosen</td></tr><tr><td>from</td><td><a href="#user">User</a></td><td>The user that chose the result</td></tr><tr><td>location</td><td><a href="#location">Location</a></td><td><em>Optional</em>. Sender location, only for bots that require user location</td></tr><tr><td>inline_message_id</td><td>String</td><td><em>Optional</em>. Identifier of the sent inline message. Available only if there is an <a href="#inlinekeyboardmarkup">inline keyboard</a> attached to the message. Will be also received in <a href="#callbackquery">callback queries</a> and can be used to <a href="#updating-messages">edit</a> the message.</td></tr><tr><td>query</td><td>String</td><td>The query that was used to obtain the result</td></tr></tbody></table>

**Note:** It is necessary to enable [inline feedback](/bots/inline/#collecting-feedback) via [@BotFather](https://t.me/botfather) in order to receive these objects in updates.

### Payments

Your bot can accept payments from Telegram users. Please see the [introduction to payments](/bots/payments/) for more details on the process and how to set up payments for your bot.

#### sendInvoice

Use this method to send invoices. On success, the sent [Message](#message) is returned.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target bot, supergroup or channel in the format <code>@username</code></td></tr><tr><td>message_thread_id</td><td>Integer</td><td>Optional</td><td>Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only</td></tr><tr><td>direct_messages_topic_id</td><td>Integer</td><td>Optional</td><td>Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat</td></tr><tr><td>title</td><td>String</td><td>Yes</td><td>Product name, 1-32 characters</td></tr><tr><td>description</td><td>String</td><td>Yes</td><td>Product description, 1-255 characters</td></tr><tr><td>payload</td><td>String</td><td>Yes</td><td>Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use it for your internal processes.</td></tr><tr><td>provider_token</td><td>String</td><td>Optional</td><td>Payment provider token, obtained via <a href="https://t.me/botfather">@BotFather</a>. Pass an empty string for payments in <a href="https://t.me/BotNews/90">Telegram Stars</a>.</td></tr><tr><td>currency</td><td>String</td><td>Yes</td><td>Three-letter ISO 4217 currency code, see <a href="/bots/payments/#supported-currencies">more on currencies</a>. Pass “XTR” for payments in <a href="https://t.me/BotNews/90">Telegram Stars</a>.</td></tr><tr><td>prices</td><td>Array of <a href="#labeledprice">LabeledPrice</a></td><td>Yes</td><td>Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.). Must contain exactly one item for payments in <a href="https://t.me/BotNews/90">Telegram Stars</a>.</td></tr><tr><td>max_tip_amount</td><td>Integer</td><td>Optional</td><td>The maximum accepted amount for tips in the <em>smallest units</em> of the currency (integer, <strong>not</strong> float/double). For example, for a maximum tip of <code>US$ 1.45</code> pass <code>max_tip_amount = 145</code>. See the <em>exp</em> parameter in <a href="/bots/payments/currencies.json/">currencies.json</a>, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0. Not supported for payments in <a href="https://t.me/BotNews/90">Telegram Stars</a>.</td></tr><tr><td>suggested_tip_amounts</td><td>Array of Integer</td><td>Optional</td><td>A JSON-serialized Array of suggested amounts of tips in the <em>smallest units</em> of the currency (integer, <strong>not</strong> float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed <em>max_tip_amount</em>.</td></tr><tr><td>start_parameter</td><td>String</td><td>Optional</td><td>Unique deep-linking parameter. If left empty, <strong>forwarded copies</strong> of the sent message will have a <em>Pay</em> button, allowing multiple users to pay directly from the forwarded message, using the same invoice. If non-empty, forwarded copies of the sent message will have a <em>URL</em> button with a deep link to the bot (instead of a <em>Pay</em> button), with the value used as the start parameter.</td></tr><tr><td>provider_data</td><td>String</td><td>Optional</td><td>JSON-serialized data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider.</td></tr><tr><td>photo_url</td><td>String</td><td>Optional</td><td>URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. People like it better when they see what they are paying for.</td></tr><tr><td>photo_size</td><td>Integer</td><td>Optional</td><td>Photo size in bytes</td></tr><tr><td>photo_width</td><td>Integer</td><td>Optional</td><td>Photo width</td></tr><tr><td>photo_height</td><td>Integer</td><td>Optional</td><td>Photo height</td></tr><tr><td>need_name</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if you require the user's full name to complete the order. Ignored for payments in <a href="https://t.me/BotNews/90">Telegram Stars</a>.</td></tr><tr><td>need_phone_number</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if you require the user's phone number to complete the order. Ignored for payments in <a href="https://t.me/BotNews/90">Telegram Stars</a>.</td></tr><tr><td>need_email</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if you require the user's email address to complete the order. Ignored for payments in <a href="https://t.me/BotNews/90">Telegram Stars</a>.</td></tr><tr><td>need_shipping_address</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if you require the user's shipping address to complete the order. Ignored for payments in <a href="https://t.me/BotNews/90">Telegram Stars</a>.</td></tr><tr><td>send_phone_number_to_provider</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the user's phone number should be sent to the provider. Ignored for payments in <a href="https://t.me/BotNews/90">Telegram Stars</a>.</td></tr><tr><td>send_email_to_provider</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the user's email address should be sent to the provider. Ignored for payments in <a href="https://t.me/BotNews/90">Telegram Stars</a>.</td></tr><tr><td>is_flexible</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the final price depends on the shipping method. Ignored for payments in <a href="https://t.me/BotNews/90">Telegram Stars</a>.</td></tr><tr><td>disable_notification</td><td>Boolean</td><td>Optional</td><td>Sends the message <a href="/blog/channels-2-0/#silent-messages">silently</a>. Users will receive a notification with no sound.</td></tr><tr><td>protect_content</td><td>Boolean</td><td>Optional</td><td>Protects the contents of the sent message from forwarding and saving</td></tr><tr><td>allow_paid_broadcast</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to allow up to 1000 messages per second, ignoring <a href="/bots/faq/#how-can-i-message-all-of-my-bot-s-subscribers-at-once">broadcasting limits</a> for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance.</td></tr><tr><td>message_effect_id</td><td>String</td><td>Optional</td><td>Unique identifier of the message effect to be added to the message; for private chats only</td></tr><tr><td>suggested_post_parameters</td><td><a href="#suggestedpostparameters">SuggestedPostParameters</a></td><td>Optional</td><td>A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined.</td></tr><tr><td>reply_parameters</td><td><a href="#replyparameters">ReplyParameters</a></td><td>Optional</td><td>Description of the message to reply to</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td><td>Optional</td><td>A JSON-serialized object for an <a href="/bots/features/#inline-keyboards">inline keyboard</a>. If empty, one 'Pay <code>total price</code>' button will be shown. If not empty, the first button must be a Pay button.</td></tr></tbody></table>

#### createInvoiceLink

Use this method to create a link for an invoice. Returns the created invoice link as _String_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Optional</td><td>Unique identifier of the business connection on behalf of which the link will be created. For payments in <a href="https://t.me/BotNews/90">Telegram Stars</a> only.</td></tr><tr><td>title</td><td>String</td><td>Yes</td><td>Product name, 1-32 characters</td></tr><tr><td>description</td><td>String</td><td>Yes</td><td>Product description, 1-255 characters</td></tr><tr><td>payload</td><td>String</td><td>Yes</td><td>Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use it for your internal processes.</td></tr><tr><td>provider_token</td><td>String</td><td>Optional</td><td>Payment provider token, obtained via <a href="https://t.me/botfather">@BotFather</a>. Pass an empty string for payments in <a href="https://t.me/BotNews/90">Telegram Stars</a>.</td></tr><tr><td>currency</td><td>String</td><td>Yes</td><td>Three-letter ISO 4217 currency code, see <a href="/bots/payments/#supported-currencies">more on currencies</a>. Pass “XTR” for payments in <a href="https://t.me/BotNews/90">Telegram Stars</a>.</td></tr><tr><td>prices</td><td>Array of <a href="#labeledprice">LabeledPrice</a></td><td>Yes</td><td>Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.). Must contain exactly one item for payments in <a href="https://t.me/BotNews/90">Telegram Stars</a>.</td></tr><tr><td>subscription_period</td><td>Integer</td><td>Optional</td><td>The number of seconds the subscription will be active for before the next payment. The currency must be set to “XTR” (Telegram Stars) if the parameter is used. Currently, it must always be 2592000 (30 days) if specified. Any number of subscriptions can be active for a given bot at the same time, including multiple concurrent subscriptions from the same user. Subscription price must no exceed 10000 Telegram Stars.</td></tr><tr><td>max_tip_amount</td><td>Integer</td><td>Optional</td><td>The maximum accepted amount for tips in the <em>smallest units</em> of the currency (integer, <strong>not</strong> float/double). For example, for a maximum tip of <code>US$ 1.45</code> pass <code>max_tip_amount = 145</code>. See the <em>exp</em> parameter in <a href="/bots/payments/currencies.json/">currencies.json</a>, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0. Not supported for payments in <a href="https://t.me/BotNews/90">Telegram Stars</a>.</td></tr><tr><td>suggested_tip_amounts</td><td>Array of Integer</td><td>Optional</td><td>A JSON-serialized Array of suggested amounts of tips in the <em>smallest units</em> of the currency (integer, <strong>not</strong> float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed <em>max_tip_amount</em>.</td></tr><tr><td>provider_data</td><td>String</td><td>Optional</td><td>JSON-serialized data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider.</td></tr><tr><td>photo_url</td><td>String</td><td>Optional</td><td>URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service.</td></tr><tr><td>photo_size</td><td>Integer</td><td>Optional</td><td>Photo size in bytes</td></tr><tr><td>photo_width</td><td>Integer</td><td>Optional</td><td>Photo width</td></tr><tr><td>photo_height</td><td>Integer</td><td>Optional</td><td>Photo height</td></tr><tr><td>need_name</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if you require the user's full name to complete the order. Ignored for payments in <a href="https://t.me/BotNews/90">Telegram Stars</a>.</td></tr><tr><td>need_phone_number</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if you require the user's phone number to complete the order. Ignored for payments in <a href="https://t.me/BotNews/90">Telegram Stars</a>.</td></tr><tr><td>need_email</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if you require the user's email address to complete the order. Ignored for payments in <a href="https://t.me/BotNews/90">Telegram Stars</a>.</td></tr><tr><td>need_shipping_address</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if you require the user's shipping address to complete the order. Ignored for payments in <a href="https://t.me/BotNews/90">Telegram Stars</a>.</td></tr><tr><td>send_phone_number_to_provider</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the user's phone number should be sent to the provider. Ignored for payments in <a href="https://t.me/BotNews/90">Telegram Stars</a>.</td></tr><tr><td>send_email_to_provider</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the user's email address should be sent to the provider. Ignored for payments in <a href="https://t.me/BotNews/90">Telegram Stars</a>.</td></tr><tr><td>is_flexible</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the final price depends on the shipping method. Ignored for payments in <a href="https://t.me/BotNews/90">Telegram Stars</a>.</td></tr></tbody></table>

#### answerShippingQuery

If you sent an invoice requesting a shipping address and the parameter _is\_flexible_ was specified, the Bot API will send an [Update](#update) with a _shipping\_query_ field to the bot. Use this method to reply to shipping queries. On success, _True_ is returned.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>shipping_query_id</td><td>String</td><td>Yes</td><td>Unique identifier for the query to be answered</td></tr><tr><td>ok</td><td>Boolean</td><td>Yes</td><td>Pass <em>True</em> if delivery to the specified address is possible and <em>False</em> if there are any problems (for example, if delivery to the specified address is not possible)</td></tr><tr><td>shipping_options</td><td>Array of <a href="#shippingoption">ShippingOption</a></td><td>Optional</td><td>Required if <em>ok</em> is <em>True</em>. A JSON-serialized Array of available shipping options.</td></tr><tr><td>error_message</td><td>String</td><td>Optional</td><td>Required if <em>ok</em> is <em>False</em>. Error message in human readable form that explains why it is impossible to complete the order (e.g. “Sorry, delivery to your desired address is unavailable”). Telegram will display this message to the user.</td></tr></tbody></table>

#### answerPreCheckoutQuery

Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an [Update](#update) with the field _pre\_checkout\_query_. Use this method to respond to such pre-checkout queries. On success, _True_ is returned. **Note:** The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>pre_checkout_query_id</td><td>String</td><td>Yes</td><td>Unique identifier for the query to be answered</td></tr><tr><td>ok</td><td>Boolean</td><td>Yes</td><td>Specify <em>True</em> if everything is alright (goods are available, etc.) and the bot is ready to proceed with the order. Use <em>False</em> if there are any problems.</td></tr><tr><td>error_message</td><td>String</td><td>Optional</td><td>Required if <em>ok</em> is <em>False</em>. Error message in human readable form that explains the reason for failure to proceed with the checkout (e.g. "Sorry, somebody just bought the last of our amazing black T-shirts while you were busy filling out your payment details. Please choose a different color or garment!"). Telegram will display this message to the user.</td></tr></tbody></table>

#### getMyStarBalance

A method to get the current Telegram Stars balance of the bot. Requires no parameters. On success, returns a [StarAmount](#staramount) object.

#### getStarTransactions

Returns the bot's Telegram Star transactions in chronological order. On success, returns a [StarTransactions](#startransactions) object.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>offset</td><td>Integer</td><td>Optional</td><td>Number of transactions to skip in the response</td></tr><tr><td>limit</td><td>Integer</td><td>Optional</td><td>The maximum number of transactions to be retrieved. Values between 1-100 are accepted. Defaults to 100.</td></tr></tbody></table>

#### refundStarPayment

Refunds a successful payment in [Telegram Stars](https://t.me/BotNews/90). Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>user_id</td><td>Integer</td><td>Yes</td><td>Identifier of the user whose payment will be refunded</td></tr><tr><td>telegram_payment_charge_id</td><td>String</td><td>Yes</td><td>Telegram payment identifier</td></tr></tbody></table>

#### editUserStarSubscription

Allows the bot to cancel or re-enable extension of a subscription paid in Telegram Stars. Returns _True_ on success.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>user_id</td><td>Integer</td><td>Yes</td><td>Identifier of the user whose subscription will be edited</td></tr><tr><td>telegram_payment_charge_id</td><td>String</td><td>Yes</td><td>Telegram payment identifier for the subscription</td></tr><tr><td>is_canceled</td><td>Boolean</td><td>Yes</td><td>Pass <em>True</em> to cancel extension of the user subscription; the subscription must be active up to the end of the current subscription period. Pass <em>False</em> to allow the user to re-enable a subscription that was previously canceled by the bot.</td></tr></tbody></table>

#### LabeledPrice

This object represents a portion of the price for goods or services.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>label</td><td>String</td><td>Portion label</td></tr><tr><td>amount</td><td>Integer</td><td>Price of the product in the <em>smallest units</em> of the <a href="/bots/payments/#supported-currencies">currency</a> (integer, <strong>not</strong> float/double). For example, for a price of <code>US$ 1.45</code> pass <code>amount = 145</code>. See the <em>exp</em> parameter in <a href="/bots/payments/currencies.json/">currencies.json</a>, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).</td></tr></tbody></table>

#### Invoice

This object contains basic information about an invoice.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>title</td><td>String</td><td>Product name</td></tr><tr><td>description</td><td>String</td><td>Product description</td></tr><tr><td>start_parameter</td><td>String</td><td>Unique bot deep-linking parameter that can be used to generate this invoice</td></tr><tr><td>currency</td><td>String</td><td>Three-letter ISO 4217 <a href="/bots/payments/#supported-currencies">currency</a> code, or “XTR” for payments in <a href="https://t.me/BotNews/90">Telegram Stars</a></td></tr><tr><td>total_amount</td><td>Integer</td><td>Total price in the <em>smallest units</em> of the currency (integer, <strong>not</strong> float/double). For example, for a price of <code>US$ 1.45</code> pass <code>amount = 145</code>. See the <em>exp</em> parameter in <a href="/bots/payments/currencies.json/">currencies.json</a>, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).</td></tr></tbody></table>

#### ShippingAddress

This object represents a shipping address.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>country_code</td><td>String</td><td>Two-letter <a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">ISO 3166-1 alpha-2</a> country code</td></tr><tr><td>state</td><td>String</td><td>State, if applicable</td></tr><tr><td>city</td><td>String</td><td>City</td></tr><tr><td>street_line1</td><td>String</td><td>First line for the address</td></tr><tr><td>street_line2</td><td>String</td><td>Second line for the address</td></tr><tr><td>post_code</td><td>String</td><td>Address post code</td></tr></tbody></table>

#### OrderInfo

This object represents information about an order.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>name</td><td>String</td><td><em>Optional</em>. User name</td></tr><tr><td>phone_number</td><td>String</td><td><em>Optional</em>. User's phone number</td></tr><tr><td>email</td><td>String</td><td><em>Optional</em>. User email</td></tr><tr><td>shipping_address</td><td><a href="#shippingaddress">ShippingAddress</a></td><td><em>Optional</em>. User shipping address</td></tr></tbody></table>

#### ShippingOption

This object represents one shipping option.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>id</td><td>String</td><td>Shipping option identifier</td></tr><tr><td>title</td><td>String</td><td>Option title</td></tr><tr><td>prices</td><td>Array of <a href="#labeledprice">LabeledPrice</a></td><td>List of price portions</td></tr></tbody></table>

#### SuccessfulPayment

This object contains basic information about a successful payment. Note that if the buyer initiates a chargeback with the relevant payment provider following this transaction, the funds may be debited from your balance. This is outside of Telegram's control.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>currency</td><td>String</td><td>Three-letter ISO 4217 <a href="/bots/payments/#supported-currencies">currency</a> code, or “XTR” for payments in <a href="https://t.me/BotNews/90">Telegram Stars</a></td></tr><tr><td>total_amount</td><td>Integer</td><td>Total price in the <em>smallest units</em> of the currency (integer, <strong>not</strong> float/double). For example, for a price of <code>US$ 1.45</code> pass <code>amount = 145</code>. See the <em>exp</em> parameter in <a href="/bots/payments/currencies.json/">currencies.json</a>, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).</td></tr><tr><td>invoice_payload</td><td>String</td><td>Bot-specified invoice payload</td></tr><tr><td>subscription_expiration_date</td><td>Integer</td><td><em>Optional</em>. Expiration date of the subscription, in Unix time; for recurring payments only</td></tr><tr><td>is_recurring</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the payment is a recurring payment for a subscription</td></tr><tr><td>is_first_recurring</td><td>True</td><td><em>Optional</em>. <em>True</em>, if the payment is the first payment for a subscription</td></tr><tr><td>shipping_option_id</td><td>String</td><td><em>Optional</em>. Identifier of the shipping option chosen by the user</td></tr><tr><td>order_info</td><td><a href="#orderinfo">OrderInfo</a></td><td><em>Optional</em>. Order information provided by the user</td></tr><tr><td>telegram_payment_charge_id</td><td>String</td><td>Telegram payment identifier</td></tr><tr><td>provider_payment_charge_id</td><td>String</td><td>Provider payment identifier</td></tr></tbody></table>

#### RefundedPayment

This object contains basic information about a refunded payment.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>currency</td><td>String</td><td>Three-letter ISO 4217 <a href="/bots/payments/#supported-currencies">currency</a> code, or “XTR” for payments in <a href="https://t.me/BotNews/90">Telegram Stars</a>. Currently, always “XTR”.</td></tr><tr><td>total_amount</td><td>Integer</td><td>Total refunded price in the <em>smallest units</em> of the currency (integer, <strong>not</strong> float/double). For example, for a price of <code>US$ 1.45</code>, <code>total_amount = 145</code>. See the <em>exp</em> parameter in <a href="/bots/payments/currencies.json/">currencies.json</a>, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).</td></tr><tr><td>invoice_payload</td><td>String</td><td>Bot-specified invoice payload</td></tr><tr><td>telegram_payment_charge_id</td><td>String</td><td>Telegram payment identifier</td></tr><tr><td>provider_payment_charge_id</td><td>String</td><td><em>Optional</em>. Provider payment identifier</td></tr></tbody></table>

#### ShippingQuery

This object contains information about an incoming shipping query.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>id</td><td>String</td><td>Unique query identifier</td></tr><tr><td>from</td><td><a href="#user">User</a></td><td>User who sent the query</td></tr><tr><td>invoice_payload</td><td>String</td><td>Bot-specified invoice payload</td></tr><tr><td>shipping_address</td><td><a href="#shippingaddress">ShippingAddress</a></td><td>User specified shipping address</td></tr></tbody></table>

#### PreCheckoutQuery

This object contains information about an incoming pre-checkout query.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>id</td><td>String</td><td>Unique query identifier</td></tr><tr><td>from</td><td><a href="#user">User</a></td><td>User who sent the query</td></tr><tr><td>currency</td><td>String</td><td>Three-letter ISO 4217 <a href="/bots/payments/#supported-currencies">currency</a> code, or “XTR” for payments in <a href="https://t.me/BotNews/90">Telegram Stars</a></td></tr><tr><td>total_amount</td><td>Integer</td><td>Total price in the <em>smallest units</em> of the currency (integer, <strong>not</strong> float/double). For example, for a price of <code>US$ 1.45</code> pass <code>amount = 145</code>. See the <em>exp</em> parameter in <a href="/bots/payments/currencies.json/">currencies.json</a>, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).</td></tr><tr><td>invoice_payload</td><td>String</td><td>Bot-specified invoice payload</td></tr><tr><td>shipping_option_id</td><td>String</td><td><em>Optional</em>. Identifier of the shipping option chosen by the user</td></tr><tr><td>order_info</td><td><a href="#orderinfo">OrderInfo</a></td><td><em>Optional</em>. Order information provided by the user</td></tr></tbody></table>

#### PaidMediaPurchased

This object contains information about a paid media purchase.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>from</td><td><a href="#user">User</a></td><td>User who purchased the media</td></tr><tr><td>paid_media_payload</td><td>String</td><td>Bot-specified paid media payload</td></tr></tbody></table>

#### RevenueWithdrawalState

This object describes the state of a revenue withdrawal operation. Currently, it can be one of

-   [RevenueWithdrawalStatePending](#revenuewithdrawalstatepending)
-   [RevenueWithdrawalStateSucceeded](#revenuewithdrawalstatesucceeded)
-   [RevenueWithdrawalStateFailed](#revenuewithdrawalstatefailed)

#### RevenueWithdrawalStatePending

The withdrawal is in progress.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the state, always “pending”</td></tr></tbody></table>

#### RevenueWithdrawalStateSucceeded

The withdrawal succeeded.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the state, always “succeeded”</td></tr><tr><td>date</td><td>Integer</td><td>Date the withdrawal was completed in Unix time</td></tr><tr><td>url</td><td>String</td><td>An HTTPS URL that can be used to see transaction details</td></tr></tbody></table>

#### RevenueWithdrawalStateFailed

The withdrawal failed and the transaction was refunded.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the state, always “failed”</td></tr></tbody></table>

#### AffiliateInfo

Contains information about the affiliate that received a commission via this transaction.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>affiliate_user</td><td><a href="#user">User</a></td><td><em>Optional</em>. The bot or the user that received an affiliate commission if it was received by a bot or a user</td></tr><tr><td>affiliate_chat</td><td><a href="#chat">Chat</a></td><td><em>Optional</em>. The chat that received an affiliate commission if it was received by a chat</td></tr><tr><td>commission_per_mille</td><td>Integer</td><td>The number of Telegram Stars received by the affiliate for each 1000 Telegram Stars received by the bot from referred users</td></tr><tr><td>amount</td><td>Integer</td><td>Integer amount of Telegram Stars received by the affiliate from the transaction, rounded to 0; can be negative for refunds</td></tr><tr><td>nanostar_amount</td><td>Integer</td><td><em>Optional</em>. The number of 1/1000000000 shares of Telegram Stars received by the affiliate; from -999999999 to 999999999; can be negative for refunds</td></tr></tbody></table>

#### TransactionPartner

This object describes the source of a transaction, or its recipient for outgoing transactions. Currently, it can be one of

-   [TransactionPartnerUser](#transactionpartneruser)
-   [TransactionPartnerChat](#transactionpartnerchat)
-   [TransactionPartnerAffiliateProgram](#transactionpartneraffiliateprogram)
-   [TransactionPartnerFragment](#transactionpartnerfragment)
-   [TransactionPartnerTelegramAds](#transactionpartnertelegramads)
-   [TransactionPartnerTelegramApi](#transactionpartnertelegramapi)
-   [TransactionPartnerOther](#transactionpartnerother)

#### TransactionPartnerUser

Describes a transaction with a user.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the transaction partner, always “user”</td></tr><tr><td>transaction_type</td><td>String</td><td>Type of the transaction, currently one of “invoice_payment” for payments via invoices, “paid_media_payment” for payments for paid media, “gift_purchase” for gifts sent by the bot, “premium_purchase” for Telegram Premium subscriptions gifted by the bot, “business_account_transfer” for direct transfers from managed business accounts</td></tr><tr><td>user</td><td><a href="#user">User</a></td><td>Information about the user</td></tr><tr><td>affiliate</td><td><a href="#affiliateinfo">AffiliateInfo</a></td><td><em>Optional</em>. Information about the affiliate that received a commission via this transaction. Can be available only for “invoice_payment” and “paid_media_payment” transactions.</td></tr><tr><td>invoice_payload</td><td>String</td><td><em>Optional</em>. Bot-specified invoice payload. Can be available only for “invoice_payment” transactions.</td></tr><tr><td>subscription_period</td><td>Integer</td><td><em>Optional</em>. The duration of the paid subscription. Can be available only for “invoice_payment” transactions.</td></tr><tr><td>paid_media</td><td>Array of <a href="#paidmedia">PaidMedia</a></td><td><em>Optional</em>. Information about the paid media bought by the user; for “paid_media_payment” transactions only</td></tr><tr><td>paid_media_payload</td><td>String</td><td><em>Optional</em>. Bot-specified paid media payload. Can be available only for “paid_media_payment” transactions.</td></tr><tr><td>gift</td><td><a href="#gift">Gift</a></td><td><em>Optional</em>. The gift sent to the user by the bot; for “gift_purchase” transactions only</td></tr><tr><td>premium_subscription_duration</td><td>Integer</td><td><em>Optional</em>. Number of months the gifted Telegram Premium subscription will be active for; for “premium_purchase” transactions only</td></tr></tbody></table>

#### TransactionPartnerChat

Describes a transaction with a chat.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the transaction partner, always “chat”</td></tr><tr><td>chat</td><td><a href="#chat">Chat</a></td><td>Information about the chat</td></tr><tr><td>gift</td><td><a href="#gift">Gift</a></td><td><em>Optional</em>. The gift sent to the chat by the bot</td></tr></tbody></table>

#### TransactionPartnerAffiliateProgram

Describes the affiliate program that issued the affiliate commission received via this transaction.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the transaction partner, always “affiliate_program”</td></tr><tr><td>sponsor_user</td><td><a href="#user">User</a></td><td><em>Optional</em>. Information about the bot that sponsored the affiliate program</td></tr><tr><td>commission_per_mille</td><td>Integer</td><td>The number of Telegram Stars received by the bot for each 1000 Telegram Stars received by the affiliate program sponsor from referred users</td></tr></tbody></table>

#### TransactionPartnerFragment

Describes a withdrawal transaction with Fragment.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the transaction partner, always “fragment”</td></tr><tr><td>withdrawal_state</td><td><a href="#revenuewithdrawalstate">RevenueWithdrawalState</a></td><td><em>Optional</em>. State of the transaction if the transaction is outgoing</td></tr></tbody></table>

#### TransactionPartnerTelegramAds

Describes a withdrawal transaction to the Telegram Ads platform.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the transaction partner, always “telegram_ads”</td></tr></tbody></table>

#### TransactionPartnerTelegramApi

Describes a transaction with payment for [paid broadcasting](#paid-broadcasts).

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the transaction partner, always “telegram_api”</td></tr><tr><td>request_count</td><td>Integer</td><td>The number of successful requests that exceeded regular limits and were therefore billed</td></tr></tbody></table>

#### TransactionPartnerOther

Describes a transaction with an unknown source or recipient.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Type of the transaction partner, always “other”</td></tr></tbody></table>

#### StarTransaction

Describes a Telegram Star transaction. Note that if the buyer initiates a chargeback with the payment provider from whom they acquired Stars (e.g., Apple, Google) following this transaction, the refunded Stars will be deducted from the bot's balance. This is outside of Telegram's control.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>id</td><td>String</td><td>Unique identifier of the transaction. Coincides with the identifier of the original transaction for refund transactions. Coincides with <em>SuccessfulPayment.telegram_payment_charge_id</em> for successful incoming payments from users.</td></tr><tr><td>amount</td><td>Integer</td><td>Integer amount of Telegram Stars transferred by the transaction</td></tr><tr><td>nanostar_amount</td><td>Integer</td><td><em>Optional</em>. The number of 1/1000000000 shares of Telegram Stars transferred by the transaction; from 0 to 999999999</td></tr><tr><td>date</td><td>Integer</td><td>Date the transaction was created in Unix time</td></tr><tr><td>source</td><td><a href="#transactionpartner">TransactionPartner</a></td><td><em>Optional</em>. Source of an incoming transaction (e.g., a user purchasing goods or services, Fragment refunding a failed withdrawal). Only for incoming transactions.</td></tr><tr><td>receiver</td><td><a href="#transactionpartner">TransactionPartner</a></td><td><em>Optional</em>. Receiver of an outgoing transaction (e.g., a user for a purchase refund, Fragment for a withdrawal). Only for outgoing transactions.</td></tr></tbody></table>

#### StarTransactions

Contains a list of Telegram Star transactions.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>transactions</td><td>Array of <a href="#startransaction">StarTransaction</a></td><td>The list of transactions</td></tr></tbody></table>

### Telegram Passport

**Telegram Passport** is a unified authorization method for services that require personal identification. Users can upload their documents once, then instantly share their data with services that require real-world ID (finance, ICOs, etc.). Please see the [manual](/passport/) for details.

#### PassportData

Describes Telegram Passport data shared with the bot by the user.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>data</td><td>Array of <a href="#encryptedpassportelement">EncryptedPassportElement</a></td><td>Array with information about documents and other Telegram Passport elements that was shared with the bot</td></tr><tr><td>credentials</td><td><a href="#encryptedcredentials">EncryptedCredentials</a></td><td>Encrypted credentials required to decrypt the data</td></tr></tbody></table>

#### PassportFile

This object represents a file uploaded to Telegram Passport. Currently all Telegram Passport files are in JPEG format when decrypted and don't exceed 10MB.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>file_id</td><td>String</td><td>Identifier for this file, which can be used to download or reuse the file</td></tr><tr><td>file_unique_id</td><td>String</td><td>Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.</td></tr><tr><td>file_size</td><td>Integer</td><td>File size in bytes</td></tr><tr><td>file_date</td><td>Integer</td><td>Unix time when the file was uploaded</td></tr></tbody></table>

#### EncryptedPassportElement

Describes documents or other Telegram Passport elements shared with the bot by the user.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>type</td><td>String</td><td>Element type. One of “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport”, “address”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”, “phone_number”, “email”.</td></tr><tr><td>data</td><td>String</td><td><em>Optional</em>. Base64-encoded encrypted Telegram Passport element data provided by the user; available only for “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport” and “address” types. Can be decrypted and verified using the accompanying <a href="#encryptedcredentials">EncryptedCredentials</a>.</td></tr><tr><td>phone_number</td><td>String</td><td><em>Optional</em>. User's verified phone number; available only for “phone_number” type</td></tr><tr><td>email</td><td>String</td><td><em>Optional</em>. User's verified email address; available only for “email” type</td></tr><tr><td>files</td><td>Array of <a href="#passportfile">PassportFile</a></td><td><em>Optional</em>. Array of encrypted files with documents provided by the user; available only for “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration” and “temporary_registration” types. Files can be decrypted and verified using the accompanying <a href="#encryptedcredentials">EncryptedCredentials</a>.</td></tr><tr><td>front_side</td><td><a href="#passportfile">PassportFile</a></td><td><em>Optional</em>. Encrypted file with the front side of the document, provided by the user; available only for “passport”, “driver_license”, “identity_card” and “internal_passport”. The file can be decrypted and verified using the accompanying <a href="#encryptedcredentials">EncryptedCredentials</a>.</td></tr><tr><td>reverse_side</td><td><a href="#passportfile">PassportFile</a></td><td><em>Optional</em>. Encrypted file with the reverse side of the document, provided by the user; available only for “driver_license” and “identity_card”. The file can be decrypted and verified using the accompanying <a href="#encryptedcredentials">EncryptedCredentials</a>.</td></tr><tr><td>selfie</td><td><a href="#passportfile">PassportFile</a></td><td><em>Optional</em>. Encrypted file with the selfie of the user holding a document, provided by the user; available if requested for “passport”, “driver_license”, “identity_card” and “internal_passport”. The file can be decrypted and verified using the accompanying <a href="#encryptedcredentials">EncryptedCredentials</a>.</td></tr><tr><td>translation</td><td>Array of <a href="#passportfile">PassportFile</a></td><td><em>Optional</em>. Array of encrypted files with translated versions of documents provided by the user; available if requested for “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration” and “temporary_registration” types. Files can be decrypted and verified using the accompanying <a href="#encryptedcredentials">EncryptedCredentials</a>.</td></tr><tr><td>hash</td><td>String</td><td>Base64-encoded element hash for using in <a href="#passportelementerrorunspecified">PassportElementErrorUnspecified</a></td></tr></tbody></table>

#### EncryptedCredentials

Describes data required for decrypting and authenticating [EncryptedPassportElement](#encryptedpassportelement). See the [Telegram Passport Documentation](/passport/#receiving-information) for a complete description of the data decryption and authentication processes.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>data</td><td>String</td><td>Base64-encoded encrypted JSON-serialized data with unique user's payload, data hashes and secrets required for <a href="#encryptedpassportelement">EncryptedPassportElement</a> decryption and authentication</td></tr><tr><td>hash</td><td>String</td><td>Base64-encoded data hash for data authentication</td></tr><tr><td>secret</td><td>String</td><td>Base64-encoded secret, encrypted with the bot's public RSA key, required for data decryption</td></tr></tbody></table>

#### setPassportDataErrors

Informs a user that some of the Telegram Passport elements they provided contains errors. The user will not be able to re-submit their Passport to you until the errors are fixed (the contents of the field for which you returned the error must change). Returns _True_ on success.

Use this if the data submitted by the user doesn't satisfy the standards your service requires for any reason. For example, if a birthday date seems invalid, a submitted document is blurry, a scan shows evidence of tampering, etc. Supply some details in the error message to make sure the user knows how to correct the issues.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>user_id</td><td>Integer</td><td>Yes</td><td>User identifier</td></tr><tr><td>errors</td><td>Array of <a href="#passportelementerror">PassportElementError</a></td><td>Yes</td><td>A JSON-serialized Array describing the errors</td></tr></tbody></table>

#### PassportElementError

This object represents an error in the Telegram Passport element which was submitted that should be resolved by the user. It should be one of:

-   [PassportElementErrorDataField](#passportelementerrordatafield)
-   [PassportElementErrorFrontSide](#passportelementerrorfrontside)
-   [PassportElementErrorReverseSide](#passportelementerrorreverseside)
-   [PassportElementErrorSelfie](#passportelementerrorselfie)
-   [PassportElementErrorFile](#passportelementerrorfile)
-   [PassportElementErrorFiles](#passportelementerrorfiles)
-   [PassportElementErrorTranslationFile](#passportelementerrortranslationfile)
-   [PassportElementErrorTranslationFiles](#passportelementerrortranslationfiles)
-   [PassportElementErrorUnspecified](#passportelementerrorunspecified)

#### PassportElementErrorDataField

Represents an issue in one of the data fields that was provided by the user. The error is considered resolved when the field's value changes.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>source</td><td>String</td><td>Error source, must be <em>data</em></td></tr><tr><td>type</td><td>String</td><td>The section of the user's Telegram Passport which has the error, one of “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport”, “address”</td></tr><tr><td>field_name</td><td>String</td><td>Name of the data field which has the error</td></tr><tr><td>data_hash</td><td>String</td><td>Base64-encoded data hash</td></tr><tr><td>message</td><td>String</td><td>Error message</td></tr></tbody></table>

#### PassportElementErrorFrontSide

Represents an issue with the front side of a document. The error is considered resolved when the file with the front side of the document changes.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>source</td><td>String</td><td>Error source, must be <em>front_side</em></td></tr><tr><td>type</td><td>String</td><td>The section of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”</td></tr><tr><td>file_hash</td><td>String</td><td>Base64-encoded hash of the file with the front side of the document</td></tr><tr><td>message</td><td>String</td><td>Error message</td></tr></tbody></table>

#### PassportElementErrorReverseSide

Represents an issue with the reverse side of a document. The error is considered resolved when the file with reverse side of the document changes.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>source</td><td>String</td><td>Error source, must be <em>reverse_side</em></td></tr><tr><td>type</td><td>String</td><td>The section of the user's Telegram Passport which has the issue, one of “driver_license”, “identity_card”</td></tr><tr><td>file_hash</td><td>String</td><td>Base64-encoded hash of the file with the reverse side of the document</td></tr><tr><td>message</td><td>String</td><td>Error message</td></tr></tbody></table>

#### PassportElementErrorSelfie

Represents an issue with the selfie with a document. The error is considered resolved when the file with the selfie changes.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>source</td><td>String</td><td>Error source, must be <em>selfie</em></td></tr><tr><td>type</td><td>String</td><td>The section of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”</td></tr><tr><td>file_hash</td><td>String</td><td>Base64-encoded hash of the file with the selfie</td></tr><tr><td>message</td><td>String</td><td>Error message</td></tr></tbody></table>

#### PassportElementErrorFile

Represents an issue with a document scan. The error is considered resolved when the file with the document scan changes.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>source</td><td>String</td><td>Error source, must be <em>file</em></td></tr><tr><td>type</td><td>String</td><td>The section of the user's Telegram Passport which has the issue, one of “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”</td></tr><tr><td>file_hash</td><td>String</td><td>Base64-encoded file hash</td></tr><tr><td>message</td><td>String</td><td>Error message</td></tr></tbody></table>

#### PassportElementErrorFiles

Represents an issue with a list of scans. The error is considered resolved when the list of files containing the scans changes.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>source</td><td>String</td><td>Error source, must be <em>files</em></td></tr><tr><td>type</td><td>String</td><td>The section of the user's Telegram Passport which has the issue, one of “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”</td></tr><tr><td>file_hashes</td><td>Array of String</td><td>List of base64-encoded file hashes</td></tr><tr><td>message</td><td>String</td><td>Error message</td></tr></tbody></table>

#### PassportElementErrorTranslationFile

Represents an issue with one of the files that constitute the translation of a document. The error is considered resolved when the file changes.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>source</td><td>String</td><td>Error source, must be <em>translation_file</em></td></tr><tr><td>type</td><td>String</td><td>Type of element of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”</td></tr><tr><td>file_hash</td><td>String</td><td>Base64-encoded file hash</td></tr><tr><td>message</td><td>String</td><td>Error message</td></tr></tbody></table>

#### PassportElementErrorTranslationFiles

Represents an issue with the translated version of a document. The error is considered resolved when a file with the document translation change.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>source</td><td>String</td><td>Error source, must be <em>translation_files</em></td></tr><tr><td>type</td><td>String</td><td>Type of element of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”</td></tr><tr><td>file_hashes</td><td>Array of String</td><td>List of base64-encoded file hashes</td></tr><tr><td>message</td><td>String</td><td>Error message</td></tr></tbody></table>

#### PassportElementErrorUnspecified

Represents an issue in an unspecified place. The error is considered resolved when new data is added.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>source</td><td>String</td><td>Error source, must be <em>unspecified</em></td></tr><tr><td>type</td><td>String</td><td>Type of element of the user's Telegram Passport which has the issue</td></tr><tr><td>element_hash</td><td>String</td><td>Base64-encoded element hash</td></tr><tr><td>message</td><td>String</td><td>Error message</td></tr></tbody></table>

### Games

Your bot can offer users **HTML5 games** to play solo or to compete against each other in groups and one-on-one chats. Create games via [@BotFather](https://t.me/botfather) using the _/newgame_ command. Please note that this kind of power requires responsibility: you will need to accept the terms for each game that your bots will be offering.

-   Games are a new type of content on Telegram, represented by the [Game](#game) and [InlineQueryResultGame](#inlinequeryresultgame) objects.
-   Once you've created a game via [BotFather](https://t.me/botfather), you can send games to chats as regular messages using the [sendGame](#sendgame) method, or use [inline mode](#inline-mode) with [InlineQueryResultGame](#inlinequeryresultgame).
-   If you send the game message without any buttons, it will automatically have a 'Play _GameName_' button. When this button is pressed, your bot gets a [CallbackQuery](#callbackquery) with the _game\_short\_name_ of the requested game. You provide the correct URL for this particular user and the app opens the game in the in-app browser.
-   You can manually add multiple buttons to your game message. Please note that the first button in the first row **must always** launch the game, using the field _callback\_game_ in [InlineKeyboardButton](#inlinekeyboardbutton). You can add extra buttons according to taste: e.g., for a description of the rules, or to open the game's official community.
-   To make your game more attractive, you can upload a GIF animation that demonstrates the game to the users via [BotFather](https://t.me/botfather) (see [Lumberjack](https://t.me/gamebot?game=lumberjack) for example).
-   A game message will also display high scores for the current chat. Use [setGameScore](#setgamescore) to post high scores to the chat with the game, add the _disable\_edit\_message_ parameter to disable automatic update of the message with the current scoreboard.
-   Use [getGameHighScores](#getgamehighscores) to get data for in-game high score tables.
-   You can also add an extra [sharing button](/bots/games/#sharing-your-game-to-telegram-chats) for users to share their best score to different chats.
-   For examples of what can be done using this new stuff, check the [@gamebot](https://t.me/gamebot) and [@gamee](https://t.me/gamee) bots.

#### sendGame

Use this method to send a game. On success, the sent [Message](#message) is returned.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>business_connection_id</td><td>String</td><td>Optional</td><td>Unique identifier of the business connection on behalf of which the message will be sent</td></tr><tr><td>chat_id</td><td>Integer or String</td><td>Yes</td><td>Unique identifier for the target chat or username of the target bot in the format <code>@username</code>. Games can't be sent to channel direct messages chats and channel chats.</td></tr><tr><td>message_thread_id</td><td>Integer</td><td>Optional</td><td>Unique identifier for the target message thread (topic) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only</td></tr><tr><td>game_short_name</td><td>String</td><td>Yes</td><td>Short name of the game, serves as the unique identifier for the game. Set up your games via <a href="https://t.me/botfather">@BotFather</a>.</td></tr><tr><td>disable_notification</td><td>Boolean</td><td>Optional</td><td>Sends the message <a href="/blog/channels-2-0/#silent-messages">silently</a>. Users will receive a notification with no sound.</td></tr><tr><td>protect_content</td><td>Boolean</td><td>Optional</td><td>Protects the contents of the sent message from forwarding and saving</td></tr><tr><td>allow_paid_broadcast</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> to allow up to 1000 messages per second, ignoring <a href="/bots/faq/#how-can-i-message-all-of-my-bot-s-subscribers-at-once">broadcasting limits</a> for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance.</td></tr><tr><td>message_effect_id</td><td>String</td><td>Optional</td><td>Unique identifier of the message effect to be added to the message; for private chats only</td></tr><tr><td>reply_parameters</td><td><a href="#replyparameters">ReplyParameters</a></td><td>Optional</td><td>Description of the message to reply to</td></tr><tr><td>reply_markup</td><td><a href="#inlinekeyboardmarkup">InlineKeyboardMarkup</a></td><td>Optional</td><td>A JSON-serialized object for an <a href="/bots/features/#inline-keyboards">inline keyboard</a>. If empty, one 'Play game_title' button will be shown. If not empty, the first button must launch the game.</td></tr></tbody></table>

#### Game

This object represents a game. Use BotFather to create and edit games, their short names will act as unique identifiers.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>title</td><td>String</td><td>Title of the game</td></tr><tr><td>description</td><td>String</td><td>Description of the game</td></tr><tr><td>photo</td><td>Array of <a href="#photosize">PhotoSize</a></td><td>Photo that will be displayed in the game message in chats</td></tr><tr><td>text</td><td>String</td><td><em>Optional</em>. Brief description of the game or high scores included in the game message. Can be automatically edited to include current high scores for the game when the bot calls <a href="#setgamescore">setGameScore</a>, or manually edited using <a href="#editmessagetext">editMessageText</a>. 0-4096 characters.</td></tr><tr><td>text_entities</td><td>Array of <a href="#messageentity">MessageEntity</a></td><td><em>Optional</em>. Special entities that appear in <em>text</em>, such as usernames, URLs, bot commands, etc.</td></tr><tr><td>animation</td><td><a href="#animation">Animation</a></td><td><em>Optional</em>. Animation that will be displayed in the game message in chats. Upload via <a href="https://t.me/botfather">BotFather</a>.</td></tr></tbody></table>

#### CallbackGame

A placeholder, currently holds no information. Use [BotFather](https://t.me/botfather) to set up your game.

#### setGameScore

Use this method to set the score of the specified user in a game message. On success, if the message is not an inline message, the [Message](#message) is returned, otherwise _True_ is returned. Returns an error, if the new score is not greater than the user's current score in the chat and _force_ is _False_.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>user_id</td><td>Integer</td><td>Yes</td><td>User identifier</td></tr><tr><td>score</td><td>Integer</td><td>Yes</td><td>New score, must be non-negative</td></tr><tr><td>force</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters.</td></tr><tr><td>disable_edit_message</td><td>Boolean</td><td>Optional</td><td>Pass <em>True</em> if the game message should not be automatically edited to include the current scoreboard</td></tr><tr><td>chat_id</td><td>Integer</td><td>Optional</td><td>Required if <em>inline_message_id</em> is not specified. Unique identifier for the target chat.</td></tr><tr><td>message_id</td><td>Integer</td><td>Optional</td><td>Required if <em>inline_message_id</em> is not specified. Identifier of the sent message.</td></tr><tr><td>inline_message_id</td><td>String</td><td>Optional</td><td>Required if <em>chat_id</em> and <em>message_id</em> are not specified. Identifier of the inline message.</td></tr></tbody></table>

#### getGameHighScores

Use this method to get data for high score tables. Will return the score of the specified user and several of their neighbors in a game. Returns an Array of [GameHighScore](#gamehighscore) objects.

> This method will currently return scores for the target user, plus two of their closest neighbors on each side. Will also return the top three users if the user and their neighbors are not among them. Please note that this behavior is subject to change.

<table class="table"><thead><tr><th scope="col">Parameter</th><th scope="col">Type</th><th scope="col">Required</th><th scope="col">Description</th></tr></thead><tbody><tr><td>user_id</td><td>Integer</td><td>Yes</td><td>Target user id</td></tr><tr><td>chat_id</td><td>Integer</td><td>Optional</td><td>Required if <em>inline_message_id</em> is not specified. Unique identifier for the target chat.</td></tr><tr><td>message_id</td><td>Integer</td><td>Optional</td><td>Required if <em>inline_message_id</em> is not specified. Identifier of the sent message.</td></tr><tr><td>inline_message_id</td><td>String</td><td>Optional</td><td>Required if <em>chat_id</em> and <em>message_id</em> are not specified. Identifier of the inline message.</td></tr></tbody></table>

#### GameHighScore

This object represents one row of the high scores table for a game.

<table class="table"><thead><tr><th scope="col">Field</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>position</td><td>Integer</td><td>Position in high score table for the game</td></tr><tr><td>user</td><td><a href="#user">User</a></td><td>User</td></tr><tr><td>score</td><td>Integer</td><td>Score</td></tr></tbody></table>

* * *

And that's about all we've got for now.  
If you've got any questions, please check out our [**Bot FAQ »**](/bots/faq/)
