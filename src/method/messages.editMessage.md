---
title: "messages.editMessage (метод)"
original: "https://core.telegram.org/method/messages.editMessage"
section: ref
kind: method
layout: layout.njk
---

# messages.editMessage

*Метод из схемы TL.*

> Edit message

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
messages.editMessage#51e842e1 flags:# no_webpage:flags.1?true invert_media:flags.16?true peer:InputPeer id:int message:flags.11?string media:flags.14?InputMedia reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.15?int schedule_repeat_period:flags.18?int quick_reply_shortcut_id:flags.17?int = Updates;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| no_webpage | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Disable webpage preview |
| invert_media | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).16?[true](/constructor/true/) | If set, any eventual webpage preview will be shown on top of the message instead of at the bottom. |
| peer | [InputPeer](/type/InputPeer/) | Where was the message sent |
| id | [int](/type/int/) | ID of the message to edit |
| message | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).11?[string](/type/string/) | New message |
| media | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).14?[InputMedia](/type/InputMedia/) | New attached media |
| reply_markup | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[ReplyMarkup](/type/ReplyMarkup/) | Reply markup for inline keyboards |
| entities | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[Vector](https://core.telegram.org/type/Vector%20t)<[MessageEntity](/type/MessageEntity/)> | [Message entities for styled text](https://core.telegram.org/api/entities) |
| schedule_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).15?[int](/type/int/) | Scheduled message date for [scheduled messages](https://core.telegram.org/api/scheduled-messages) |
| schedule_repeat_period | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).18?[int](/type/int/) | Once sent, this message will be automatically re-scheduled to be re-sent again this many seconds in the future, see [here »](https://core.telegram.org/api/scheduled-messages#repeating-scheduled-messages) for more info on repeating scheduled messages. |
| quick_reply_shortcut_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).17?[int](/type/int/) | If specified, edits a [quick reply shortcut message, instead »](https://core.telegram.org/api/business#quick-reply-shortcuts). |

## Результат

[Updates](/type/Updates/)

## Both users and bots can use this method

## This method can be invoked over a business connection »

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | BOT_DOMAIN_INVALID | Bot domain invalid. |
| 400 | BOT_INVALID | This is not a valid bot. |
| 400 | BUSINESS_CONNECTION_INVALID | The connection_id passed to the wrapping [invokeWithBusinessConnection](https://core.telegram.org/api/business) call is invalid. |
| 400 | BUSINESS_PEER_INVALID | Messages can't be set to the specified peer through the current [business connection](https://core.telegram.org/api/business#connected-bots). |
| 400 | BUTTON_COPY_TEXT_INVALID | The specified [keyboardButtonCopy](/constructor/keyboardButtonCopy/).copy_text is invalid. |
| 400 | BUTTON_DATA_INVALID | The data of one or more of the buttons you provided is invalid. |
| 400 | BUTTON_TYPE_INVALID | The type of one or more of the buttons you provided is invalid. |
| 400 | BUTTON_URL_INVALID | Button URL invalid. |
| 400 | BUTTON_USER_PRIVACY_RESTRICTED | The privacy setting of the user specified in a [inputKeyboardButtonUserProfile](/constructor/inputKeyboardButtonUserProfile/) button do not allow creating such a button. |
| 400 | CHANNEL_INVALID | The provided channel is invalid. |
| 406 | CHANNEL_PRIVATE | You haven't joined this channel/supergroup. |
| 403 | CHAT_ADMIN_REQUIRED | You must be an admin in this chat to do this. |
| 400 | CHAT_FORWARDS_RESTRICTED | You can't forward messages from a protected chat. |
| 403 | CHAT_SEND_GIFS_FORBIDDEN | You can't send gifs in this chat. |
| 403 | CHAT_WRITE_FORBIDDEN | You can't write in this chat. |
| 400 | DOCUMENT_INVALID | The specified document is invalid. |
| 406 | EDIT_MESSAGE_TEMP_RESTRICTED | Message editing is temporarily forbidden for this user due to regulatory restrictions. |
| 400 | ENTITIES_TOO_LONG | You provided too many styled message entities. |
| 400 | ENTITY_BOUNDS_INVALID | A specified [entity offset or length](https://core.telegram.org/api/entities#entity-length) is invalid, see [here »](https://core.telegram.org/api/entities#entity-length) for info on how to properly compute the entity offset/length. |
| 400 | FILE_PARTS_INVALID | The number of file parts is invalid. |
| 400 | IMAGE_PROCESS_FAILED | Failure while processing image. |
| 403 | INLINE_BOT_REQUIRED | Only the inline bot can edit message. |
| 400 | INPUT_USER_DEACTIVATED | The specified user was deleted. |
| 400 | MEDIA_CAPTION_TOO_LONG | The caption is too long. |
| 400 | MEDIA_EMPTY | The provided media object is invalid. |
| 400 | MEDIA_GROUPED_INVALID | You tried to send media of different types in an album. |
| 400 | MEDIA_INVALID | Media invalid. |
| 400 | MEDIA_NEW_INVALID | The new media is invalid. |
| 400 | MEDIA_PREV_INVALID | Previous media invalid. |
| 400 | MEDIA_TTL_INVALID | The specified media TTL is invalid. |
| 403 | MESSAGE_AUTHOR_REQUIRED | Message author required. |
| 400 | MESSAGE_EDIT_TIME_EXPIRED | You can't edit this message anymore, too much time has passed since its creation. |
| 400 | MESSAGE_EMPTY | The provided message is empty. |
| 400 | MESSAGE_ID_INVALID | The provided message id is invalid. |
| 400 | MESSAGE_NOT_MODIFIED | The provided message data is identical to the previous message data, the message wasn't modified. |
| 400 | MESSAGE_TOO_LONG | The provided message is too long. |
| 400 | MSG_ID_INVALID | Invalid message ID provided. |
| 500 | MSG_WAIT_FAILED | A waiting call returned an error. |
| 400 | PEER_ID_INVALID | The provided peer id is invalid. |
| 400 | PEER_TYPES_INVALID | The passed [keyboardButtonSwitchInline](/constructor/keyboardButtonSwitchInline/).peer_types field is invalid. |
| 400 | PHOTO_EXT_INVALID | The extension of the photo is invalid. |
| 400 | PHOTO_INVALID_DIMENSIONS | The photo dimensions are invalid. |
| 400 | PHOTO_SAVE_FILE_INVALID | Internal issues, try again later. |
| 400 | REPLY_MARKUP_INVALID | The provided reply markup is invalid. |
| 400 | REPLY_MARKUP_TOO_LONG | The specified reply_markup is too long. |
| 400 | SCHEDULE_DATE_INVALID | Invalid schedule date provided. |
| 400 | TODO_ITEMS_EMPTY | A checklist was specified, but no [checklist items](https://core.telegram.org/api/todo) were passed. |
| 400 | TODO_ITEM_DUPLICATE | Duplicate [checklist items](https://core.telegram.org/api/todo) detected. |
| 400 | USER_BANNED_IN_CHANNEL | You're banned from sending messages in supergroups/channels. |
| 400 | WEBPAGE_NOT_FOUND | A preview for the specified webpage url could not be generated. |

## Related pages

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities

#### [Scheduled messages](https://core.telegram.org/api/scheduled-messages)

Telegram allows scheduling messages

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.

#### [keyboardButtonCopy](/constructor/keyboardButtonCopy/)

Clipboard button

Available only in [inline keyboards](/constructor/replyInlineMarkup/).

When pressed, clients must copy `copy_text` to the clipboard.

#### [inputKeyboardButtonUserProfile](/constructor/inputKeyboardButtonUserProfile/)

Button that links directly to a user profile

Use this constructor to send a [keyboardButtonUserProfile](/constructor/keyboardButtonUserProfile/) button in an [inline keyboard](https://core.telegram.org/bots/features#inline-keyboards).

#### [keyboardButtonSwitchInline](/constructor/keyboardButtonSwitchInline/)

Button to switch the user to inline mode

Available only in [inline keyboards](/constructor/replyInlineMarkup/).

When pressed, clients must insert the bot's username and `query` into the chat input field, triggering an [inline query](https://core.telegram.org/api/bots/inline).

If `same_peer` is set, clients use the current chat. Otherwise, clients prompt the user to select a chat, filtered by `peer_types` if specified.

#### [Checklists and to-do lists](https://core.telegram.org/api/todo)

Premium users can now create collaborative checklists in any chat to track tasks and coordinate teams — or manage shopping and to-do lists.
