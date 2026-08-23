---
title: "messages.sendMedia (метод)"
original: "https://core.telegram.org/method/messages.sendMedia"
section: ref
kind: method
layout: layout.njk
---

# messages.sendMedia

*Метод из схемы TL.*

> Send a media

## Определение TL

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
messages.sendMedia#330e77f flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo media:InputMedia message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| silent | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](/constructor/true/) | Send message silently (no notification should be triggered) |
| background | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[true](/constructor/true/) | Send message in background |
| clear_draft | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[true](/constructor/true/) | Clear the draft |
| noforwards | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).14?[true](/constructor/true/) | Only for bots, disallows forwarding and saving of the messages, even if the destination chat doesn't have [content protection](https://telegram.org/blog/content-protection-delete-by-date-and-more) enabled |
| update_stickersets_order | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).15?[true](/constructor/true/) | Whether to move used stickersets to top, [see here for more info on this flag »](https://core.telegram.org/api/stickers#recent-stickersets) |
| invert_media | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).16?[true](/constructor/true/) | If set, any eventual webpage preview will be shown on top of the message instead of at the bottom. |
| allow_paid_floodskip | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).19?[true](/constructor/true/) | Bots only: if set, allows sending up to 1000 messages per second, ignoring [broadcasting limits](https://core.telegram.org/bots/faq#how-can-i-message-all-of-my-bot-39s-subscribers-at-once) for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance. |
| peer | [InputPeer](/type/InputPeer/) | Destination |
| reply_to | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[InputReplyTo](/type/InputReplyTo/) | If set, indicates that the message should be sent in reply to the specified message or story. |
| media | [InputMedia](/type/InputMedia/) | Attached media |
| message | [string](/type/string/) | Caption |
| random_id | [long](/type/long/) | Random ID to avoid resending the same message. See [here »](https://core.telegram.org/api/updates/#updatemessageid-updates) for more info on random ID deduplication and updateMessageID mapping. |
| reply_markup | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[ReplyMarkup](/type/ReplyMarkup/) | Reply markup for bot keyboards |
| entities | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[Vector](https://core.telegram.org/type/Vector%20t)<[MessageEntity](/type/MessageEntity/)> | Message [entities](https://core.telegram.org/api/entities) for styled text |
| schedule_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[int](/type/int/) | Scheduled message date for [scheduled messages](https://core.telegram.org/api/scheduled-messages) |
| schedule_repeat_period | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).24?[int](/type/int/) | Once sent, this message will be automatically re-scheduled to be re-sent again this many seconds in the future, see [here »](https://core.telegram.org/api/scheduled-messages#repeating-scheduled-messages) for more info on repeating scheduled messages. |
| send_as | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).13?[InputPeer](/type/InputPeer/) | Send this message as the specified peer |
| quick_reply_shortcut | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).17?[InputQuickReplyShortcut](/type/InputQuickReplyShortcut/) | Add the message to the specified [quick reply shortcut »](https://core.telegram.org/api/business#quick-reply-shortcuts), instead. |
| effect | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).18?[long](/type/long/) | Specifies a [message effect »](https://core.telegram.org/api/effects) to use for the message. |
| allow_paid_stars | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).21?[long](/type/long/) | For [paid messages »](https://core.telegram.org/api/paid-messages), specifies the amount of [Telegram Stars](https://core.telegram.org/api/stars) the user has agreed to pay in order to send the message. |
| suggested_post | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).22?[SuggestedPost](/type/SuggestedPost/) | Used to [suggest a post to a channel, see here »](https://core.telegram.org/api/suggested-posts) for more info on the full flow. |

## Результат

[Updates](/type/Updates/)

## Both users and bots can use this method

## This method can be invoked over a business connection »

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 406 | ALLOW_PAYMENT_REQUIRED | This peer only accepts [paid messages »](https://core.telegram.org/api/paid-messages): this error is only emitted for older layers without paid messages support, so the client must be updated in order to use paid messages. . |
| 403 | ALLOW_PAYMENT_REQUIRED_%d | This peer charges %d [Telegram Stars](https://core.telegram.org/api/stars) per message, but the allow_paid_stars was not set or its value is smaller than %d. |
| 400 | BOT_GAMES_DISABLED | Games can't be sent to channels. |
| 400 | BOT_PAYMENTS_DISABLED | Please enable bot payments in botfather before calling this method. |
| 400 | BROADCAST_PUBLIC_VOTERS_FORBIDDEN | You can't forward polls with public voters. |
| 400 | BUSINESS_CONNECTION_INVALID | The connection_id passed to the wrapping [invokeWithBusinessConnection](https://core.telegram.org/api/business) call is invalid. |
| 400 | BUSINESS_PEER_INVALID | Messages can't be set to the specified peer through the current [business connection](https://core.telegram.org/api/business#connected-bots). |
| 400 | BUSINESS_PEER_USAGE_MISSING | You cannot send a message to a user through a [business connection](https://core.telegram.org/api/business#connected-bots) if the user hasn't recently contacted us. |
| 400 | BUTTON_COPY_TEXT_INVALID | The specified [keyboardButtonCopy](/constructor/keyboardButtonCopy/).copy_text is invalid. |
| 400 | BUTTON_DATA_INVALID | The data of one or more of the buttons you provided is invalid. |
| 400 | BUTTON_POS_INVALID | The position of one of the keyboard buttons is invalid (i.e. a Game or Pay button not in the first position, and so on...). |
| 400 | BUTTON_TYPE_INVALID | The type of one or more of the buttons you provided is invalid. |
| 400 | BUTTON_URL_INVALID | Button URL invalid. |
| 400 | BUTTON_USER_PRIVACY_RESTRICTED | The privacy setting of the user specified in a [inputKeyboardButtonUserProfile](/constructor/inputKeyboardButtonUserProfile/) button do not allow creating such a button. |
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 406 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 403 | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this. |
| 400 | CHAT_FORWARDS_RESTRICTED | You can't forward messages from a protected chat. |
| 403 | CHAT_GUEST_SEND_FORBIDDEN | You join the discussion group before commenting, see [here »](https://core.telegram.org/api/discussion#requiring-users-to-join-the-group) for more info. |
| 400 | CHAT_RESTRICTED | You can't send messages in this chat, you were restricted. |
| 403 | CHAT_SEND_AUDIOS_FORBIDDEN | You can't send audio messages in this chat. |
| 403 | CHAT_SEND_DOCS_FORBIDDEN | You can't send documents in this chat. |
| 403 | CHAT_SEND_GIFS_FORBIDDEN | You can't send gifs in this chat. |
| 403 | CHAT_SEND_MEDIA_FORBIDDEN | You can't send media in this chat. |
| 403 | CHAT_SEND_PHOTOS_FORBIDDEN | You can't send photos in this chat. |
| 403 | CHAT_SEND_PLAIN_FORBIDDEN | You can't send non-media (text) messages in this chat. |
| 403 | CHAT_SEND_POLL_FORBIDDEN | You can't send polls in this chat. |
| 403 | CHAT_SEND_ROUNDVIDEOS_FORBIDDEN | You can't send round videos to this chat. |
| 403 | CHAT_SEND_STICKERS_FORBIDDEN | You can't send stickers in this chat. |
| 403 | CHAT_SEND_VIDEOS_FORBIDDEN | You can't send videos in this chat. |
| 403 | CHAT_SEND_VOICES_FORBIDDEN | You can't send voice recordings in this chat. |
| 403 | CHAT_WRITE_FORBIDDEN | You can't write in this chat. |
| 400 | CURRENCY_TOTAL_AMOUNT_INVALID | The total amount of all prices is invalid. |
| 400 | DOCUMENT_INVALID | The specified document is invalid. |
| 400 | EFFECT_CHAT_INVALID | Message [effects](https://core.telegram.org/api/effects) can only be used in private 1-on-1 chats, but the caller tried to send a message with an effect to a group or channel. |
| 400 | EFFECT_ID_INVALID | The specified effect ID is invalid. |
| 400 | EMOTICON_INVALID | The specified emoji is invalid. |
| 400 | ENTITY_BOUNDS_INVALID | A specified [entity offset or length](https://core.telegram.org/api/entities#entity-length) is invalid, see [here »](https://core.telegram.org/api/entities#entity-length) for info on how to properly compute the entity offset/length. |
| 400 | EXTENDED_MEDIA_AMOUNT_INVALID | The specified stars_amount of the passed [inputMediaPaidMedia](/constructor/inputMediaPaidMedia/) is invalid. |
| 400 | EXTENDED_MEDIA_EMPTY | The specified extended media is empty. |
| 400 | EXTENDED_MEDIA_INVALID | The specified paid media is invalid. |
| 400 | EXTENDED_MEDIA_PEER_INVALID | Paid media is not allowed for the target peer. |
| 400 | EXTERNAL_URL_INVALID | External URL invalid. |
| 400 | FILE_PARTS_INVALID | The number of file parts is invalid. |
| 400 | FILE_PART_LENGTH_INVALID | The length of a file part is invalid. |
| 400 | FILE_REFERENCE_EMPTY | An empty [file reference](https://core.telegram.org/api/file-references) was specified. |
| 400 | FILE_REFERENCE_EXPIRED | File reference expired, it must be refetched as described in [the documentation](https://core.telegram.org/api/file-references). |
| 400 | GAME_BOT_INVALID | Bots can't send another bot's game. |
| 400 | IMAGE_PROCESS_FAILED | Failure while processing image. |
| 400 | INPUT_FILE_INVALID | The specified [InputFile](/type/InputFile/) is invalid. |
| 400 | INPUT_USER_DEACTIVATED | The specified user was deleted. |
| 400 | INVOICE_PAYLOAD_INVALID | The specified invoice payload is invalid. |
| 400 | MD5_CHECKSUM_INVALID | The MD5 checksums do not match. |
| 400 | MEDIA_CAPTION_TOO_LONG | The caption is too long. |
| 400 | MEDIA_EMPTY | The provided media object is invalid. |
| 400 | MEDIA_FILE_INVALID | The specified media file is invalid. |
| 400 | MEDIA_INVALID | Media invalid. |
| 400 | MESSAGE_EMPTY | The provided message is empty. |
| 400 | MESSAGE_TOO_LONG | The provided message is too long. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| 400 | PAYMENT_PROVIDER_INVALID | The specified payment provider is invalid. |
| 406 | PEER_ID_INVALID | The provided peer id is invalid. |
| 400 | PHOTO_EXT_INVALID | The extension of the photo is invalid. |
| 400 | PHOTO_INVALID_DIMENSIONS | The photo dimensions are invalid. |
| 400 | PHOTO_SAVE_FILE_INVALID | Internal issues, try again later. |
| 400 | POLL_ANSWERS_INVALID | Invalid poll answers were provided. |
| 400 | POLL_ANSWER_INVALID | One of the poll answers is not acceptable. |
| 400 | POLL_OPTION_DUPLICATE | Duplicate poll options provided. |
| 400 | POLL_OPTION_INVALID | Invalid poll option provided. |
| 400 | POLL_QUESTION_INVALID | One of the poll questions is not acceptable. |
| 403 | PREMIUM_ACCOUNT_REQUIRED | A premium account is required to execute this action. |
| 403 | PRIVACY_PREMIUM_REQUIRED | You need a [Telegram Premium subscription](https://core.telegram.org/api/premium) to send a message to this user. |
| 400 | QUICK_REPLIES_BOT_NOT_ALLOWED | [Quick replies](https://core.telegram.org/api/business#quick-reply-shortcuts) cannot be used by bots. |
| 400 | QUICK_REPLIES_TOO_MUCH | A maximum of [appConfig.quick_replies_limit](https://core.telegram.org/api/config#quick-replies-limit) shortcuts may be created, the limit was reached. |
| 400 | QUIZ_CORRECT_ANSWERS_EMPTY | No correct quiz answer was specified. |
| 400 | QUIZ_CORRECT_ANSWERS_TOO_MUCH | You specified too many correct answers in a quiz, quizzes can only have one right answer! |
| 400 | QUIZ_CORRECT_ANSWER_INVALID | An invalid value was provided to the correct_answers field. |
| 400 | QUIZ_MULTIPLE_INVALID | Quizzes can't have the multiple_choice flag set! |
| 500 | RANDOM_ID_DUPLICATE | You provided a random ID that was already used. |
| 400 | REPLY_MARKUP_BUY_EMPTY | Reply markup for buy button empty. |
| 400 | REPLY_MARKUP_GAME_EMPTY | A game message is being edited, but the newly provided keyboard doesn't have a keyboardButtonGame button. |
| 400 | REPLY_MARKUP_INVALID | The provided reply markup is invalid. |
| 400 | REPLY_MARKUP_TOO_LONG | The specified reply_markup is too long. |
| 400 | REPLY_MESSAGES_TOO_MUCH | Each shortcut can contain a maximum of [appConfig.quick_reply_messages_limit](https://core.telegram.org/api/config#quick-reply-messages-limit) messages, the limit was reached. |
| 400 | REPLY_MESSAGE_ID_INVALID | The specified reply-to message ID is invalid. |
| 400 | REPLY_TO_MONOFORUM_PEER_INVALID | The specified inputReplyToMonoForum.monoforum_peer_id is invalid. |
| 400 | SCHEDULE_BOT_NOT_ALLOWED | Bots cannot schedule messages. |
| 400 | SCHEDULE_DATE_TOO_LATE | You can't schedule a message this far in the future. |
| 400 | SCHEDULE_TOO_MUCH | There are too many scheduled messages. |
| 400 | SEND_AS_PEER_INVALID | You can't send messages as the specified peer. |
| 420 | SLOWMODE_WAIT_%d | Slowmode is enabled in this chat: wait %d seconds before sending another message to this chat. |
| 400 | STARS_INVOICE_INVALID | The specified Telegram Star invoice is invalid. |
| 400 | STORY_ID_INVALID | The specified story ID is invalid. |
| 400 | SUBSCRIPTION_EXPORT_MISSING | You cannot send a [bot subscription invoice](https://core.telegram.org/api/subscriptions#bot-subscriptions) directly, you may only create invoice links using [payments.exportInvoice](/method/payments.exportInvoice/). |
| 400 | SUGGESTED_POST_PEER_INVALID | You cannot send suggested posts to non-[monoforum](https://core.telegram.org/api/monoforum) peers. |
| 400 | TERMS_URL_INVALID | The specified [invoice](/constructor/invoice/).terms_url is invalid. |
| 400 | TODO_ITEMS_EMPTY | A checklist was specified, but no [checklist items](https://core.telegram.org/api/todo) were passed. |
| 400 | TODO_ITEMS_TOO_MUCH | You specified too many todo list items. |
| 400 | TODO_ITEM_DUPLICATE | Duplicate [checklist items](https://core.telegram.org/api/todo) detected. |
| 406 | TOPIC_CLOSED | This topic was closed, you can't send messages to it anymore. |
| 406 | TOPIC_DELETED | The specified topic was deleted. |
| 400 | TTL_MEDIA_INVALID | Invalid media Time To Live was provided. |
| 400 | USER_BANNED_IN_CHANNEL | You're banned from sending messages in supergroups/channels. |
| 400 | USER_BOT_TO_BOT_DISABLED | Bot-to-bot messaging is disabled because one of the two bots hasn't enabled the Bot to Bot setting in @BotFather. |
| 403 | USER_IS_BLOCKED | You were blocked by this user. |
| 400 | USER_IS_BOT | Bots can't send messages to other bots. |
| 400 | VIDEO_CONTENT_TYPE_INVALID | The video's content type is invalid. |
| 400 | VOICE_MESSAGES_FORBIDDEN | This user's privacy settings forbid you from sending voice messages. |
| 400 | WEBDOCUMENT_MIME_INVALID | Invalid webdocument mime type provided. |
| 400 | WEBPAGE_CURL_FAILED | Failure while fetching the webpage with cURL. |
| 400 | WEBPAGE_MEDIA_EMPTY | Webpage media empty. |
| 400 | WEBPAGE_NOT_FOUND | A preview for the specified webpage url could not be generated. |
| 400 | WEBPAGE_URL_INVALID | The specified webpage url is invalid. |
| 400 | YOU_BLOCKED_USER | You blocked this user. |

## Related pages

#### [Stickers and masks](https://core.telegram.org/api/stickers)

Telegram clients support displaying static and animated stickers.

#### [Bots FAQ](https://core.telegram.org/bots/faq)

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities

#### [Scheduled messages](https://core.telegram.org/api/scheduled-messages)

Telegram allows scheduling messages

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.

#### [Animated message effects](https://core.telegram.org/api/effects)

Telegram allows adding spectacular animated effects to messages you send.

#### [Paid messages](https://core.telegram.org/api/paid-messages)

Telegram Stars can be used to pay for sending messages to users, supergroups and channels that have configured paid messages, requiring a payment for every message sent to them.

#### [Telegram Stars](https://core.telegram.org/api/stars)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Suggested posts](https://core.telegram.org/api/suggested-posts)

Telegram offers a powerful monetization feature to channel administrators: suggested posts.

#### [keyboardButtonCopy](/constructor/keyboardButtonCopy/)

Clipboard button

Available only in [inline keyboards](/constructor/replyInlineMarkup/).

When pressed, clients must copy `copy_text` to the clipboard.

#### [inputKeyboardButtonUserProfile](/constructor/inputKeyboardButtonUserProfile/)

Button that links directly to a user profile

Use this constructor to send a [keyboardButtonUserProfile](/constructor/keyboardButtonUserProfile/) button in an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards).

#### [Discussion groups](https://core.telegram.org/api/discussion)

Groups can be associated to a channel as a discussion group, to allow users to discuss about posts.

#### [inputMediaPaidMedia](/constructor/inputMediaPaidMedia/)

[Paid media, see here »](https://core.telegram.org/api/paid-media) for more info.

#### [File references](https://core.telegram.org/api/file-references)

How to handle file references.

#### [InputFile](/type/InputFile/)

Defines a file uploaded by the client.

#### [Telegram Premium](https://core.telegram.org/api/premium)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [Client configuration](https://core.telegram.org/api/config)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [Star subscriptions](https://core.telegram.org/api/subscriptions)

Bots and channels may create subscriptions, periodically charging users a certain amount of Telegram Stars in exchange for content and services.

#### [payments.exportInvoice](/method/payments.exportInvoice/)

Generate an [invoice deep link](https://core.telegram.org/api/links#invoice-links)

#### [Direct messages to channels](https://core.telegram.org/api/monoforum)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.

#### [invoice](/constructor/invoice/)

Invoice

#### [Checklists and to-do lists](https://core.telegram.org/api/todo)

Premium users can now create collaborative checklists in any chat to track tasks and coordinate teams — or manage shopping and to-do lists.
