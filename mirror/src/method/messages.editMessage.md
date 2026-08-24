---
title: "messages.editMessage"
original: "https://core.telegram.org/method/messages.editMessage"
section: ref
description: "How to create styled text with message entities"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.editMessage","url":"/method/messages.editMessage/"}]
layout: layout.njk
---

# messages.editMessage

Edit message

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updatesTooLong/">updatesTooLong</a>#e317af7e = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updateShortMessage/">updateShortMessage</a>#313bc7f8 flags:<a href="/type/%23/">#</a> out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:<a href="/type/int/">int</a> user_id:<a href="/type/long/">long</a> message:<a href="/type/string/">string</a> pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> fwd_from:flags.2?<a href="/type/MessageFwdHeader/">MessageFwdHeader</a> via_bot_id:flags.11?<a href="/type/long/">long</a> reply_to:flags.3?<a href="/type/MessageReplyHeader/">MessageReplyHeader</a> entities:flags.7?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; ttl_period:flags.25?<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updateShortChatMessage/">updateShortChatMessage</a>#4d6deea5 flags:<a href="/type/%23/">#</a> out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:<a href="/type/int/">int</a> from_id:<a href="/type/long/">long</a> chat_id:<a href="/type/long/">long</a> message:<a href="/type/string/">string</a> pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> fwd_from:flags.2?<a href="/type/MessageFwdHeader/">MessageFwdHeader</a> via_bot_id:flags.11?<a href="/type/long/">long</a> reply_to:flags.3?<a href="/type/MessageReplyHeader/">MessageReplyHeader</a> entities:flags.7?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; ttl_period:flags.25?<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updateShort/">updateShort</a>#78d4dec1 update:<a href="/type/Update/">Update</a> date:<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updatesCombined/">updatesCombined</a>#725b04c3 updates:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Update/">Update</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; date:<a href="/type/int/">int</a> seq_start:<a href="/type/int/">int</a> seq:<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updates/">updates</a>#74ae4240 updates:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Update/">Update</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; date:<a href="/type/int/">int</a> seq:<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
<a href="/constructor/updateShortSentMessage/">updateShortSentMessage</a>#9015e101 flags:<a href="/type/%23/">#</a> out:flags.1?true id:<a href="/type/int/">int</a> pts:<a href="/type/int/">int</a> pts_count:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> media:flags.9?<a href="/type/MessageMedia/">MessageMedia</a> entities:flags.7?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; ttl_period:flags.25?<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;
---functions---
<a href="/method/messages.editMessage/" class="current_page_link">messages.editMessage</a>#51e842e1 flags:<a href="/type/%23/">#</a> no_webpage:flags.1?true invert_media:flags.16?true peer:<a href="/type/InputPeer/">InputPeer</a> id:<a href="/type/int/">int</a> message:flags.11?<a href="/type/string/">string</a> media:flags.14?<a href="/type/InputMedia/">InputMedia</a> reply_markup:flags.2?<a href="/type/ReplyMarkup/">ReplyMarkup</a> entities:flags.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; schedule_date:flags.15?<a href="/type/int/">int</a> schedule_repeat_period:flags.18?<a href="/type/int/">int</a> quick_reply_shortcut_id:flags.17?<a href="/type/int/">int</a> = <a href="/type/Updates/">Updates</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>no_webpage</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Disable webpage preview</td></tr><tr><td><strong>invert_media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.16?<a href="/constructor/true/">true</a></td><td>If set, any eventual webpage preview will be shown on top of the message instead of at the bottom.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Where was the message sent</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>ID of the message to edit</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.11?<a href="/type/string/">string</a></td><td>New message</td></tr><tr><td><strong>media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.14?<a href="/type/InputMedia/">InputMedia</a></td><td>New attached media</td></tr><tr><td><strong>reply_markup</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/ReplyMarkup/">ReplyMarkup</a></td><td>Reply markup for inline keyboards</td></tr><tr><td><strong>entities</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt;</td><td><a href="/api/entities/">Message entities for styled text</a></td></tr><tr><td><strong>schedule_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.15?<a href="/type/int/">int</a></td><td>Scheduled message date for <a href="/api/scheduled-messages/">scheduled messages</a></td></tr><tr><td><strong>schedule_repeat_period</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.18?<a href="/type/int/">int</a></td><td>Once sent, this message will be automatically re-scheduled to be re-sent again this many seconds in the future, see <a href="/api/scheduled-messages/#repeating-scheduled-messages">here »</a> for more info on repeating scheduled messages.</td></tr><tr><td><strong>quick_reply_shortcut_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.17?<a href="/type/int/">int</a></td><td>If specified, edits a <a href="/api/business/#quick-reply-shortcuts">quick reply shortcut message, instead »</a>.</td></tr></tbody></table>

### Result

[Updates](/type/Updates/)

### Both users and bots can use this method

### This method can be invoked over a [business connection »](/api/bots/connected-business-bots/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BOT_DOMAIN_INVALID</td><td>Bot domain invalid.</td></tr><tr><td>400</td><td>BOT_INVALID</td><td>This is not a valid bot.</td></tr><tr><td>400</td><td>BUSINESS_CONNECTION_INVALID</td><td>The <code>connection_id</code> passed to the wrapping <a href="/api/business/">invokeWithBusinessConnection</a> call is invalid.</td></tr><tr><td>400</td><td>BUSINESS_PEER_INVALID</td><td>Messages can't be set to the specified peer through the current <a href="/api/business/#connected-bots">business connection</a>.</td></tr><tr><td>400</td><td>BUTTON_COPY_TEXT_INVALID</td><td>The specified <a href="/constructor/keyboardButtonCopy/">keyboardButtonCopy</a>.<code>copy_text</code> is invalid.</td></tr><tr><td>400</td><td>BUTTON_DATA_INVALID</td><td>The data of one or more of the buttons you provided is invalid.</td></tr><tr><td>400</td><td>BUTTON_TYPE_INVALID</td><td>The type of one or more of the buttons you provided is invalid.</td></tr><tr><td>400</td><td>BUTTON_URL_INVALID</td><td>Button URL invalid.</td></tr><tr><td>400</td><td>BUTTON_USER_PRIVACY_RESTRICTED</td><td>The privacy setting of the user specified in a <a href="/constructor/inputKeyboardButtonUserProfile/">inputKeyboardButtonUserProfile</a> button do not allow creating such a button.</td></tr><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>406</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>403</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>400</td><td>CHAT_FORWARDS_RESTRICTED</td><td>You can't forward messages from a protected chat.</td></tr><tr><td>403</td><td>CHAT_SEND_GIFS_FORBIDDEN</td><td>You can't send gifs in this chat.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>You can't write in this chat.</td></tr><tr><td>400</td><td>DOCUMENT_INVALID</td><td>The specified document is invalid.</td></tr><tr><td>406</td><td>EDIT_MESSAGE_TEMP_RESTRICTED</td><td>Message editing is temporarily forbidden for this user due to regulatory restrictions.</td></tr><tr><td>400</td><td>ENTITIES_TOO_LONG</td><td>You provided too many styled message entities.</td></tr><tr><td>400</td><td>ENTITY_BOUNDS_INVALID</td><td>A specified <a href="/api/entities/#entity-length">entity offset or length</a> is invalid, see <a href="/api/entities/#entity-length">here&nbsp;»</a> for info on how to properly compute the entity offset/length.</td></tr><tr><td>400</td><td>FILE_PARTS_INVALID</td><td>The number of file parts is invalid.</td></tr><tr><td>400</td><td>IMAGE_PROCESS_FAILED</td><td>Failure while processing image.</td></tr><tr><td>403</td><td>INLINE_BOT_REQUIRED</td><td>Only the inline bot can edit message.</td></tr><tr><td>400</td><td>INPUT_USER_DEACTIVATED</td><td>The specified user was deleted.</td></tr><tr><td>400</td><td>MEDIA_CAPTION_TOO_LONG</td><td>The caption is too long.</td></tr><tr><td>400</td><td>MEDIA_EMPTY</td><td>The provided media object is invalid.</td></tr><tr><td>400</td><td>MEDIA_GROUPED_INVALID</td><td>You tried to send media of different types in an album.</td></tr><tr><td>400</td><td>MEDIA_INVALID</td><td>Media invalid.</td></tr><tr><td>400</td><td>MEDIA_NEW_INVALID</td><td>The new media is invalid.</td></tr><tr><td>400</td><td>MEDIA_PREV_INVALID</td><td>Previous media invalid.</td></tr><tr><td>400</td><td>MEDIA_TTL_INVALID</td><td>The specified media TTL is invalid.</td></tr><tr><td>403</td><td>MESSAGE_AUTHOR_REQUIRED</td><td>Message author required.</td></tr><tr><td>400</td><td>MESSAGE_EDIT_TIME_EXPIRED</td><td>You can't edit this message anymore, too much time has passed since its creation.</td></tr><tr><td>400</td><td>MESSAGE_EMPTY</td><td>The provided message is empty.</td></tr><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>The provided message id is invalid.</td></tr><tr><td>400</td><td>MESSAGE_NOT_MODIFIED</td><td>The provided message data is identical to the previous message data, the message wasn't modified.</td></tr><tr><td>400</td><td>MESSAGE_TOO_LONG</td><td>The provided message is too long.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>500</td><td>MSG_WAIT_FAILED</td><td>A waiting call returned an error.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>PEER_TYPES_INVALID</td><td>The passed <a href="/constructor/keyboardButtonSwitchInline/">keyboardButtonSwitchInline</a>.<code>peer_types</code> field is invalid.</td></tr><tr><td>400</td><td>PHOTO_EXT_INVALID</td><td>The extension of the photo is invalid.</td></tr><tr><td>400</td><td>PHOTO_INVALID_DIMENSIONS</td><td>The photo dimensions are invalid.</td></tr><tr><td>400</td><td>PHOTO_SAVE_FILE_INVALID</td><td>Internal issues, try again later.</td></tr><tr><td>400</td><td>REPLY_MARKUP_INVALID</td><td>The provided reply markup is invalid.</td></tr><tr><td>400</td><td>REPLY_MARKUP_TOO_LONG</td><td>The specified reply_markup is too long.</td></tr><tr><td>400</td><td>SCHEDULE_DATE_INVALID</td><td>Invalid schedule date provided.</td></tr><tr><td>400</td><td>TODO_ITEMS_EMPTY</td><td>A checklist was specified, but no <a href="/api/todo/">checklist items</a> were passed.</td></tr><tr><td>400</td><td>TODO_ITEM_DUPLICATE</td><td>Duplicate <a href="/api/todo/">checklist items</a> detected.</td></tr><tr><td>400</td><td>USER_BANNED_IN_CHANNEL</td><td>You're banned from sending messages in supergroups/channels.</td></tr><tr><td>400</td><td>WEBPAGE_NOT_FOUND</td><td>A preview for the specified webpage <code>url</code> could not be generated.</td></tr></tbody></table>

### Related pages

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities

#### [Scheduled messages](/api/scheduled-messages/)

Telegram allows scheduling messages

#### [Telegram Business](/api/business/)

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

When pressed, clients must insert the bot's username and `query` into the chat input field, triggering an [inline query](/api/bots/inline/).

If `same_peer` is set, clients use the current chat. Otherwise, clients prompt the user to select a chat, filtered by `peer_types` if specified.

#### [Checklists and to-do lists](/api/todo/)

Premium users can now create collaborative checklists in any chat to track tasks and coordinate teams — or manage shopping and to-do lists.
