---
title: "Current end-to-end TL-schema"
original: "https://core.telegram.org/schema/end-to-end"
section: schema
description: "End-to-end encryption in MTProto, Secret Chats"
crumbs: [{"title":"API","url":"/api/"},{"title":"Secret chats","url":"/api/end-to-end/"},{"title":"Current end-to-end TL-schema","url":"/schema/end-to-end/"}]
layout: layout.njk
---

# Current end-to-end TL-schema

> Below you will find the current end-to-end TL-schema. [More details on TL »](/mtproto/TL/)

See also:  
[End-to-end encryption in MTProto, Secret Chats](/api/end-to-end/)  
[Detailed schema in JSON](/schema/end-to-end-json/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>===8===
<a href="/constructor/decryptedMessage/">decryptedMessage</a>#1f814f1f random_id:<a href="/type/long/">long</a> random_bytes:<a href="/type/bytes/">bytes</a> message:<a href="/type/string/">string</a> media:<a href="/type/DecryptedMessageMedia/">DecryptedMessageMedia</a> = <a href="/type/DecryptedMessage/">DecryptedMessage</a>;
<a href="/constructor/decryptedMessageService/">decryptedMessageService</a>#aa48327d random_id:<a href="/type/long/">long</a> random_bytes:<a href="/type/bytes/">bytes</a> action:<a href="/type/DecryptedMessageAction/">DecryptedMessageAction</a> = <a href="/type/DecryptedMessage/">DecryptedMessage</a>;
<a href="/constructor/decryptedMessageMediaEmpty/">decryptedMessageMediaEmpty</a>#89f5c4a = <a href="/type/DecryptedMessageMedia/">DecryptedMessageMedia</a>;
<a href="/constructor/decryptedMessageMediaPhoto/">decryptedMessageMediaPhoto</a>#32798a8c thumb:<a href="/type/bytes/">bytes</a> thumb_w:<a href="/type/int/">int</a> thumb_h:<a href="/type/int/">int</a> w:<a href="/type/int/">int</a> h:<a href="/type/int/">int</a> size:<a href="/type/int/">int</a> key:<a href="/type/bytes/">bytes</a> iv:<a href="/type/bytes/">bytes</a> = <a href="/type/DecryptedMessageMedia/">DecryptedMessageMedia</a>;
<a href="/constructor/decryptedMessageMediaVideo/">decryptedMessageMediaVideo</a>#4cee6ef3 thumb:<a href="/type/bytes/">bytes</a> thumb_w:<a href="/type/int/">int</a> thumb_h:<a href="/type/int/">int</a> duration:<a href="/type/int/">int</a> w:<a href="/type/int/">int</a> h:<a href="/type/int/">int</a> size:<a href="/type/int/">int</a> key:<a href="/type/bytes/">bytes</a> iv:<a href="/type/bytes/">bytes</a> = <a href="/type/DecryptedMessageMedia/">DecryptedMessageMedia</a>;
<a href="/constructor/decryptedMessageMediaGeoPoint/">decryptedMessageMediaGeoPoint</a>#35480a59 lat:<a href="/type/double/">double</a> long:<a href="/type/double/">double</a> = <a href="/type/DecryptedMessageMedia/">DecryptedMessageMedia</a>;
<a href="/constructor/decryptedMessageMediaContact/">decryptedMessageMediaContact</a>#588a0a97 phone_number:<a href="/type/string/">string</a> first_name:<a href="/type/string/">string</a> last_name:<a href="/type/string/">string</a> user_id:<a href="/type/int/">int</a> = <a href="/type/DecryptedMessageMedia/">DecryptedMessageMedia</a>;
<a href="/constructor/decryptedMessageActionSetMessageTTL/">decryptedMessageActionSetMessageTTL</a>#a1733aec ttl_seconds:<a href="/type/int/">int</a> = <a href="/type/DecryptedMessageAction/">DecryptedMessageAction</a>;
<a href="/constructor/decryptedMessageMediaDocument/">decryptedMessageMediaDocument</a>#b095434b thumb:<a href="/type/bytes/">bytes</a> thumb_w:<a href="/type/int/">int</a> thumb_h:<a href="/type/int/">int</a> file_name:<a href="/type/string/">string</a> mime_type:<a href="/type/string/">string</a> size:<a href="/type/int/">int</a> key:<a href="/type/bytes/">bytes</a> iv:<a href="/type/bytes/">bytes</a> = <a href="/type/DecryptedMessageMedia/">DecryptedMessageMedia</a>;
<a href="/constructor/decryptedMessageMediaAudio/">decryptedMessageMediaAudio</a>#6080758f duration:<a href="/type/int/">int</a> size:<a href="/type/int/">int</a> key:<a href="/type/bytes/">bytes</a> iv:<a href="/type/bytes/">bytes</a> = <a href="/type/DecryptedMessageMedia/">DecryptedMessageMedia</a>;
<a href="/constructor/decryptedMessageActionReadMessages/">decryptedMessageActionReadMessages</a>#c4f40be random_ids:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; = <a href="/type/DecryptedMessageAction/">DecryptedMessageAction</a>;
<a href="/constructor/decryptedMessageActionDeleteMessages/">decryptedMessageActionDeleteMessages</a>#65614304 random_ids:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; = <a href="/type/DecryptedMessageAction/">DecryptedMessageAction</a>;
<a href="/constructor/decryptedMessageActionScreenshotMessages/">decryptedMessageActionScreenshotMessages</a>#8ac1f475 random_ids:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/long/">long</a>&gt; = <a href="/type/DecryptedMessageAction/">DecryptedMessageAction</a>;
<a href="/constructor/decryptedMessageActionFlushHistory/">decryptedMessageActionFlushHistory</a>#6719e45c = <a href="/type/DecryptedMessageAction/">DecryptedMessageAction</a>;

===17===
<a href="/constructor/decryptedMessage/">decryptedMessage</a>#204d3878 random_id:<a href="/type/long/">long</a> ttl:<a href="/type/int/">int</a> message:<a href="/type/string/">string</a> media:<a href="/type/DecryptedMessageMedia/">DecryptedMessageMedia</a> = <a href="/type/DecryptedMessage/">DecryptedMessage</a>;
<a href="/constructor/decryptedMessageService/">decryptedMessageService</a>#73164160 random_id:<a href="/type/long/">long</a> action:<a href="/type/DecryptedMessageAction/">DecryptedMessageAction</a> = <a href="/type/DecryptedMessage/">DecryptedMessage</a>;
<a href="/constructor/decryptedMessageMediaVideo/">decryptedMessageMediaVideo</a>#524a415d thumb:<a href="/type/bytes/">bytes</a> thumb_w:<a href="/type/int/">int</a> thumb_h:<a href="/type/int/">int</a> duration:<a href="/type/int/">int</a> mime_type:<a href="/type/string/">string</a> w:<a href="/type/int/">int</a> h:<a href="/type/int/">int</a> size:<a href="/type/int/">int</a> key:<a href="/type/bytes/">bytes</a> iv:<a href="/type/bytes/">bytes</a> = <a href="/type/DecryptedMessageMedia/">DecryptedMessageMedia</a>;
<a href="/constructor/decryptedMessageMediaAudio/">decryptedMessageMediaAudio</a>#57e0a9cb duration:<a href="/type/int/">int</a> mime_type:<a href="/type/string/">string</a> size:<a href="/type/int/">int</a> key:<a href="/type/bytes/">bytes</a> iv:<a href="/type/bytes/">bytes</a> = <a href="/type/DecryptedMessageMedia/">DecryptedMessageMedia</a>;
<a href="/constructor/decryptedMessageLayer/">decryptedMessageLayer</a>#1be31789 random_bytes:<a href="/type/bytes/">bytes</a> layer:<a href="/type/int/">int</a> in_seq_no:<a href="/type/int/">int</a> out_seq_no:<a href="/type/int/">int</a> message:<a href="/type/DecryptedMessage/">DecryptedMessage</a> = <a href="/type/DecryptedMessageLayer/">DecryptedMessageLayer</a>;
<a href="/constructor/sendMessageTypingAction/">sendMessageTypingAction</a>#16bf744e = <a href="/type/SendMessageAction/">SendMessageAction</a>;
<a href="/constructor/sendMessageCancelAction/">sendMessageCancelAction</a>#fd5ec8f5 = <a href="/type/SendMessageAction/">SendMessageAction</a>;
<a href="/constructor/sendMessageRecordVideoAction/">sendMessageRecordVideoAction</a>#a187d66f = <a href="/type/SendMessageAction/">SendMessageAction</a>;
<a href="/constructor/sendMessageUploadVideoAction/">sendMessageUploadVideoAction</a>#92042ff7 = <a href="/type/SendMessageAction/">SendMessageAction</a>;
<a href="/constructor/sendMessageRecordAudioAction/">sendMessageRecordAudioAction</a>#d52f73f7 = <a href="/type/SendMessageAction/">SendMessageAction</a>;
<a href="/constructor/sendMessageUploadAudioAction/">sendMessageUploadAudioAction</a>#e6ac8a6f = <a href="/type/SendMessageAction/">SendMessageAction</a>;
<a href="/constructor/sendMessageUploadPhotoAction/">sendMessageUploadPhotoAction</a>#990a3c1a = <a href="/type/SendMessageAction/">SendMessageAction</a>;
<a href="/constructor/sendMessageUploadDocumentAction/">sendMessageUploadDocumentAction</a>#8faee98e = <a href="/type/SendMessageAction/">SendMessageAction</a>;
<a href="/constructor/sendMessageGeoLocationAction/">sendMessageGeoLocationAction</a>#176f8ba1 = <a href="/type/SendMessageAction/">SendMessageAction</a>;
<a href="/constructor/sendMessageChooseContactAction/">sendMessageChooseContactAction</a>#628cbc6f = <a href="/type/SendMessageAction/">SendMessageAction</a>;
<a href="/constructor/decryptedMessageActionResend/">decryptedMessageActionResend</a>#511110b0 start_seq_no:<a href="/type/int/">int</a> end_seq_no:<a href="/type/int/">int</a> = <a href="/type/DecryptedMessageAction/">DecryptedMessageAction</a>;
<a href="/constructor/decryptedMessageActionNotifyLayer/">decryptedMessageActionNotifyLayer</a>#f3048883 layer:<a href="/type/int/">int</a> = <a href="/type/DecryptedMessageAction/">DecryptedMessageAction</a>;
<a href="/constructor/decryptedMessageActionTyping/">decryptedMessageActionTyping</a>#ccb27641 action:<a href="/type/SendMessageAction/">SendMessageAction</a> = <a href="/type/DecryptedMessageAction/">DecryptedMessageAction</a>;

===20===
<a href="/constructor/decryptedMessageActionRequestKey/">decryptedMessageActionRequestKey</a>#f3c9611b exchange_id:<a href="/type/long/">long</a> g_a:<a href="/type/bytes/">bytes</a> = <a href="/type/DecryptedMessageAction/">DecryptedMessageAction</a>;
<a href="/constructor/decryptedMessageActionAcceptKey/">decryptedMessageActionAcceptKey</a>#6fe1735b exchange_id:<a href="/type/long/">long</a> g_b:<a href="/type/bytes/">bytes</a> key_fingerprint:<a href="/type/long/">long</a> = <a href="/type/DecryptedMessageAction/">DecryptedMessageAction</a>;
<a href="/constructor/decryptedMessageActionAbortKey/">decryptedMessageActionAbortKey</a>#dd05ec6b exchange_id:<a href="/type/long/">long</a> = <a href="/type/DecryptedMessageAction/">DecryptedMessageAction</a>;
<a href="/constructor/decryptedMessageActionCommitKey/">decryptedMessageActionCommitKey</a>#ec2e0b9b exchange_id:<a href="/type/long/">long</a> key_fingerprint:<a href="/type/long/">long</a> = <a href="/type/DecryptedMessageAction/">DecryptedMessageAction</a>;
<a href="/constructor/decryptedMessageActionNoop/">decryptedMessageActionNoop</a>#a82fdd63 = <a href="/type/DecryptedMessageAction/">DecryptedMessageAction</a>;

===23===
<a href="/constructor/documentAttributeImageSize/">documentAttributeImageSize</a>#6c37c15c w:<a href="/type/int/">int</a> h:<a href="/type/int/">int</a> = <a href="/type/DocumentAttribute/">DocumentAttribute</a>;
<a href="/constructor/documentAttributeAnimated/">documentAttributeAnimated</a>#11b58939 = <a href="/type/DocumentAttribute/">DocumentAttribute</a>;
<a href="/constructor/documentAttributeSticker/">documentAttributeSticker</a>#fb0a5727 = <a href="/type/DocumentAttribute/">DocumentAttribute</a>;
<a href="/constructor/documentAttributeVideo/">documentAttributeVideo</a>#5910cccb duration:<a href="/type/int/">int</a> w:<a href="/type/int/">int</a> h:<a href="/type/int/">int</a> = <a href="/type/DocumentAttribute/">DocumentAttribute</a>;
<a href="/constructor/documentAttributeAudio/">documentAttributeAudio</a>#51448e5 duration:<a href="/type/int/">int</a> = <a href="/type/DocumentAttribute/">DocumentAttribute</a>;
<a href="/constructor/documentAttributeFilename/">documentAttributeFilename</a>#15590068 file_name:<a href="/type/string/">string</a> = <a href="/type/DocumentAttribute/">DocumentAttribute</a>;
<a href="/constructor/photoSizeEmpty/">photoSizeEmpty</a>#e17e23c type:<a href="/type/string/">string</a> = <a href="/type/PhotoSize/">PhotoSize</a>;
<a href="/constructor/photoSize/">photoSize</a>#77bfb61b type:<a href="/type/string/">string</a> location:<a href="/type/FileLocation/">FileLocation</a> w:<a href="/type/int/">int</a> h:<a href="/type/int/">int</a> size:<a href="/type/int/">int</a> = <a href="/type/PhotoSize/">PhotoSize</a>;
<a href="/constructor/photoCachedSize/">photoCachedSize</a>#e9a734fa type:<a href="/type/string/">string</a> location:<a href="/type/FileLocation/">FileLocation</a> w:<a href="/type/int/">int</a> h:<a href="/type/int/">int</a> bytes:<a href="/type/bytes/">bytes</a> = <a href="/type/PhotoSize/">PhotoSize</a>;
<a href="/constructor/fileLocationUnavailable/">fileLocationUnavailable</a>#7c596b46 volume_id:<a href="/type/long/">long</a> local_id:<a href="/type/int/">int</a> secret:<a href="/type/long/">long</a> = <a href="/type/FileLocation/">FileLocation</a>;
<a href="/constructor/fileLocation/">fileLocation</a>#53d69076 dc_id:<a href="/type/int/">int</a> volume_id:<a href="/type/long/">long</a> local_id:<a href="/type/int/">int</a> secret:<a href="/type/long/">long</a> = <a href="/type/FileLocation/">FileLocation</a>;
<a href="/constructor/decryptedMessageMediaExternalDocument/">decryptedMessageMediaExternalDocument</a>#fa95b0dd id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> date:<a href="/type/int/">int</a> mime_type:<a href="/type/string/">string</a> size:<a href="/type/int/">int</a> thumb:<a href="/type/PhotoSize/">PhotoSize</a> dc_id:<a href="/type/int/">int</a> attributes:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/DocumentAttribute/">DocumentAttribute</a>&gt; = <a href="/type/DecryptedMessageMedia/">DecryptedMessageMedia</a>;

===45===
<a href="/constructor/decryptedMessage/">decryptedMessage</a>#36b091de flags:<a href="/type/%23/">#</a> random_id:<a href="/type/long/">long</a> ttl:<a href="/type/int/">int</a> message:<a href="/type/string/">string</a> media:flags.9?<a href="/type/DecryptedMessageMedia/">DecryptedMessageMedia</a> entities:flags.7?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; via_bot_name:flags.11?<a href="/type/string/">string</a> reply_to_random_id:flags.3?<a href="/type/long/">long</a> = <a href="/type/DecryptedMessage/">DecryptedMessage</a>;
<a href="/constructor/decryptedMessageMediaPhoto/">decryptedMessageMediaPhoto</a>#f1fa8d78 thumb:<a href="/type/bytes/">bytes</a> thumb_w:<a href="/type/int/">int</a> thumb_h:<a href="/type/int/">int</a> w:<a href="/type/int/">int</a> h:<a href="/type/int/">int</a> size:<a href="/type/int/">int</a> key:<a href="/type/bytes/">bytes</a> iv:<a href="/type/bytes/">bytes</a> caption:<a href="/type/string/">string</a> = <a href="/type/DecryptedMessageMedia/">DecryptedMessageMedia</a>;
<a href="/constructor/decryptedMessageMediaVideo/">decryptedMessageMediaVideo</a>#970c8c0e thumb:<a href="/type/bytes/">bytes</a> thumb_w:<a href="/type/int/">int</a> thumb_h:<a href="/type/int/">int</a> duration:<a href="/type/int/">int</a> mime_type:<a href="/type/string/">string</a> w:<a href="/type/int/">int</a> h:<a href="/type/int/">int</a> size:<a href="/type/int/">int</a> key:<a href="/type/bytes/">bytes</a> iv:<a href="/type/bytes/">bytes</a> caption:<a href="/type/string/">string</a> = <a href="/type/DecryptedMessageMedia/">DecryptedMessageMedia</a>;
<a href="/constructor/decryptedMessageMediaDocument/">decryptedMessageMediaDocument</a>#7afe8ae2 thumb:<a href="/type/bytes/">bytes</a> thumb_w:<a href="/type/int/">int</a> thumb_h:<a href="/type/int/">int</a> mime_type:<a href="/type/string/">string</a> size:<a href="/type/int/">int</a> key:<a href="/type/bytes/">bytes</a> iv:<a href="/type/bytes/">bytes</a> attributes:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/DocumentAttribute/">DocumentAttribute</a>&gt; caption:<a href="/type/string/">string</a> = <a href="/type/DecryptedMessageMedia/">DecryptedMessageMedia</a>;
<a href="/constructor/documentAttributeSticker/">documentAttributeSticker</a>#3a556302 alt:<a href="/type/string/">string</a> stickerset:<a href="/type/InputStickerSet/">InputStickerSet</a> = <a href="/type/DocumentAttribute/">DocumentAttribute</a>;
<a href="/constructor/documentAttributeAudio/">documentAttributeAudio</a>#ded218e0 duration:<a href="/type/int/">int</a> title:<a href="/type/string/">string</a> performer:<a href="/type/string/">string</a> = <a href="/type/DocumentAttribute/">DocumentAttribute</a>;
<a href="/constructor/messageEntityUnknown/">messageEntityUnknown</a>#bb92ba95 offset:<a href="/type/int/">int</a> length:<a href="/type/int/">int</a> = <a href="/type/MessageEntity/">MessageEntity</a>;
<a href="/constructor/messageEntityMention/">messageEntityMention</a>#fa04579d offset:<a href="/type/int/">int</a> length:<a href="/type/int/">int</a> = <a href="/type/MessageEntity/">MessageEntity</a>;
<a href="/constructor/messageEntityHashtag/">messageEntityHashtag</a>#6f635b0d offset:<a href="/type/int/">int</a> length:<a href="/type/int/">int</a> = <a href="/type/MessageEntity/">MessageEntity</a>;
<a href="/constructor/messageEntityBotCommand/">messageEntityBotCommand</a>#6cef8ac7 offset:<a href="/type/int/">int</a> length:<a href="/type/int/">int</a> = <a href="/type/MessageEntity/">MessageEntity</a>;
<a href="/constructor/messageEntityUrl/">messageEntityUrl</a>#6ed02538 offset:<a href="/type/int/">int</a> length:<a href="/type/int/">int</a> = <a href="/type/MessageEntity/">MessageEntity</a>;
<a href="/constructor/messageEntityEmail/">messageEntityEmail</a>#64e475c2 offset:<a href="/type/int/">int</a> length:<a href="/type/int/">int</a> = <a href="/type/MessageEntity/">MessageEntity</a>;
<a href="/constructor/messageEntityBold/">messageEntityBold</a>#bd610bc9 offset:<a href="/type/int/">int</a> length:<a href="/type/int/">int</a> = <a href="/type/MessageEntity/">MessageEntity</a>;
<a href="/constructor/messageEntityItalic/">messageEntityItalic</a>#826f8b60 offset:<a href="/type/int/">int</a> length:<a href="/type/int/">int</a> = <a href="/type/MessageEntity/">MessageEntity</a>;
<a href="/constructor/messageEntityCode/">messageEntityCode</a>#28a20571 offset:<a href="/type/int/">int</a> length:<a href="/type/int/">int</a> = <a href="/type/MessageEntity/">MessageEntity</a>;
<a href="/constructor/messageEntityPre/">messageEntityPre</a>#73924be0 offset:<a href="/type/int/">int</a> length:<a href="/type/int/">int</a> language:<a href="/type/string/">string</a> = <a href="/type/MessageEntity/">MessageEntity</a>;
<a href="/constructor/messageEntityTextUrl/">messageEntityTextUrl</a>#76a6d327 offset:<a href="/type/int/">int</a> length:<a href="/type/int/">int</a> url:<a href="/type/string/">string</a> = <a href="/type/MessageEntity/">MessageEntity</a>;
<a href="/constructor/inputStickerSetShortName/">inputStickerSetShortName</a>#861cc8a0 short_name:<a href="/type/string/">string</a> = <a href="/type/InputStickerSet/">InputStickerSet</a>;
<a href="/constructor/inputStickerSetEmpty/">inputStickerSetEmpty</a>#ffb62b95 = <a href="/type/InputStickerSet/">InputStickerSet</a>;
<a href="/constructor/decryptedMessageMediaVenue/">decryptedMessageMediaVenue</a>#8a0df56f lat:<a href="/type/double/">double</a> long:<a href="/type/double/">double</a> title:<a href="/type/string/">string</a> address:<a href="/type/string/">string</a> provider:<a href="/type/string/">string</a> venue_id:<a href="/type/string/">string</a> = <a href="/type/DecryptedMessageMedia/">DecryptedMessageMedia</a>;
<a href="/constructor/decryptedMessageMediaWebPage/">decryptedMessageMediaWebPage</a>#e50511d8 url:<a href="/type/string/">string</a> = <a href="/type/DecryptedMessageMedia/">DecryptedMessageMedia</a>;

===46===
<a href="/constructor/documentAttributeAudio/">documentAttributeAudio</a>#9852f9c6 flags:<a href="/type/%23/">#</a> voice:flags.10?true duration:<a href="/type/int/">int</a> title:flags.0?<a href="/type/string/">string</a> performer:flags.1?<a href="/type/string/">string</a> waveform:flags.2?<a href="/type/bytes/">bytes</a> = <a href="/type/DocumentAttribute/">DocumentAttribute</a>;

===66===
<a href="/constructor/documentAttributeVideo/">documentAttributeVideo</a>#ef02ce6 flags:<a href="/type/%23/">#</a> round_message:flags.0?true duration:<a href="/type/int/">int</a> w:<a href="/type/int/">int</a> h:<a href="/type/int/">int</a> = <a href="/type/DocumentAttribute/">DocumentAttribute</a>;
<a href="/constructor/sendMessageRecordRoundAction/">sendMessageRecordRoundAction</a>#88f27fbc = <a href="/type/SendMessageAction/">SendMessageAction</a>;
<a href="/constructor/sendMessageUploadRoundAction/">sendMessageUploadRoundAction</a>#bb718624 = <a href="/type/SendMessageAction/">SendMessageAction</a>;

===73===
<a href="/constructor/decryptedMessage/">decryptedMessage</a>#91cc4674 flags:<a href="/type/%23/">#</a> no_webpage:flags.1?true silent:flags.5?true random_id:<a href="/type/long/">long</a> ttl:<a href="/type/int/">int</a> message:<a href="/type/string/">string</a> media:flags.9?<a href="/type/DecryptedMessageMedia/">DecryptedMessageMedia</a> entities:flags.7?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; via_bot_name:flags.11?<a href="/type/string/">string</a> reply_to_random_id:flags.3?<a href="/type/long/">long</a> grouped_id:flags.17?<a href="/type/long/">long</a> = <a href="/type/DecryptedMessage/">DecryptedMessage</a>;

===101===
<a href="/constructor/messageEntityUnderline/">messageEntityUnderline</a>#9c4e7e8b offset:<a href="/type/int/">int</a> length:<a href="/type/int/">int</a> = <a href="/type/MessageEntity/">MessageEntity</a>;
<a href="/constructor/messageEntityStrike/">messageEntityStrike</a>#bf0693d4 offset:<a href="/type/int/">int</a> length:<a href="/type/int/">int</a> = <a href="/type/MessageEntity/">MessageEntity</a>;
<a href="/constructor/messageEntityBlockquote/">messageEntityBlockquote</a>#20df5d0 offset:<a href="/type/int/">int</a> length:<a href="/type/int/">int</a> = <a href="/type/MessageEntity/">MessageEntity</a>;

===143===
<a href="/constructor/decryptedMessageMediaDocument/">decryptedMessageMediaDocument</a>#6abd9782 thumb:<a href="/type/bytes/">bytes</a> thumb_w:<a href="/type/int/">int</a> thumb_h:<a href="/type/int/">int</a> mime_type:<a href="/type/string/">string</a> size:<a href="/type/long/">long</a> key:<a href="/type/bytes/">bytes</a> iv:<a href="/type/bytes/">bytes</a> attributes:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/DocumentAttribute/">DocumentAttribute</a>&gt; caption:<a href="/type/string/">string</a> = <a href="/type/DecryptedMessageMedia/">DecryptedMessageMedia</a>;

===144===
<a href="/constructor/messageEntitySpoiler/">messageEntitySpoiler</a>#32ca960f offset:<a href="/type/int/">int</a> length:<a href="/type/int/">int</a> = <a href="/type/MessageEntity/">MessageEntity</a>;
<a href="/constructor/messageEntityCustomEmoji/">messageEntityCustomEmoji</a>#c8cf05f8 offset:<a href="/type/int/">int</a> length:<a href="/type/int/">int</a> document_id:<a href="/type/long/">long</a> = <a href="/type/MessageEntity/">MessageEntity</a>;

===216===
<a href="/constructor/jsonObjectValue/">jsonObjectValue</a>#c0de1bd9 key:<a href="/type/string/">string</a> value:<a href="/type/JSONValue/">JSONValue</a> = <a href="/type/JSONObjectValue/">JSONObjectValue</a>;
<a href="/constructor/jsonNull/">jsonNull</a>#3f6d7b68 = <a href="/type/JSONValue/">JSONValue</a>;
<a href="/constructor/jsonBool/">jsonBool</a>#c7345e6a value:<a href="/type/Bool/">Bool</a> = <a href="/type/JSONValue/">JSONValue</a>;
<a href="/constructor/jsonNumber/">jsonNumber</a>#2be0dfa4 value:<a href="/type/double/">double</a> = <a href="/type/JSONValue/">JSONValue</a>;
<a href="/constructor/jsonString/">jsonString</a>#b71e767a value:<a href="/type/string/">string</a> = <a href="/type/JSONValue/">JSONValue</a>;
<a href="/constructor/jsonArray/">jsonArray</a>#f7444763 value:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/JSONValue/">JSONValue</a>&gt; = <a href="/type/JSONValue/">JSONValue</a>;
<a href="/constructor/jsonObject/">jsonObject</a>#99c1d49d value:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/JSONObjectValue/">JSONObjectValue</a>&gt; = <a href="/type/JSONValue/">JSONValue</a>;
<a href="/constructor/textWithEntities/">textWithEntities</a>#751f3146 text:<a href="/type/string/">string</a> entities:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; = <a href="/type/TextWithEntities/">TextWithEntities</a>;
<a href="/constructor/groupCallMessage/">groupCallMessage</a>#907ce88e random_id:<a href="/type/long/">long</a> message:<a href="/type/TextWithEntities/">TextWithEntities</a> = <a href="/type/GroupCallMessage/">GroupCallMessage</a>;</code></pre>
