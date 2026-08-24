---
title: "SendMessageAction"
original: "https://core.telegram.org/type/SendMessageAction"
section: ref
description: "User actions. Use this to provide users with detailed info about their chat partner's actions: typing or sending attachments of all kinds."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"SendMessageAction","url":"/type/SendMessageAction/"}]
layout: layout.njk
---

# SendMessageAction

User actions. Use this to provide users with detailed info about their chat partner's actions: typing or sending attachments of all kinds.

#### [End-to-end schema](/schema/end-to-end/)

```
===17===
sendMessageCancelAction#fd5ec8f5 = SendMessageAction;
sendMessageChooseContactAction#628cbc6f = SendMessageAction;
sendMessageGeoLocationAction#176f8ba1 = SendMessageAction;
sendMessageRecordAudioAction#d52f73f7 = SendMessageAction;
sendMessageRecordVideoAction#a187d66f = SendMessageAction;
sendMessageTypingAction#16bf744e = SendMessageAction;
sendMessageUploadAudioAction#e6ac8a6f = SendMessageAction;
sendMessageUploadDocumentAction#8faee98e = SendMessageAction;
sendMessageUploadPhotoAction#990a3c1a = SendMessageAction;
sendMessageUploadVideoAction#92042ff7 = SendMessageAction;

===66===
sendMessageRecordRoundAction#88f27fbc = SendMessageAction;
sendMessageUploadRoundAction#bb718624 = SendMessageAction;
```

API schema:

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/sendMessageTypingAction/">sendMessageTypingAction</a>#16bf744e = <a href="/type/SendMessageAction/" class="current_page_link">SendMessageAction</a>;
<a href="/constructor/sendMessageCancelAction/">sendMessageCancelAction</a>#fd5ec8f5 = <a href="/type/SendMessageAction/" class="current_page_link">SendMessageAction</a>;
<a href="/constructor/sendMessageRecordVideoAction/">sendMessageRecordVideoAction</a>#a187d66f = <a href="/type/SendMessageAction/" class="current_page_link">SendMessageAction</a>;
<a href="/constructor/sendMessageUploadVideoAction/">sendMessageUploadVideoAction</a>#e9763aec progress:<a href="/type/int/">int</a> = <a href="/type/SendMessageAction/" class="current_page_link">SendMessageAction</a>;
<a href="/constructor/sendMessageRecordAudioAction/">sendMessageRecordAudioAction</a>#d52f73f7 = <a href="/type/SendMessageAction/" class="current_page_link">SendMessageAction</a>;
<a href="/constructor/sendMessageUploadAudioAction/">sendMessageUploadAudioAction</a>#f351d7ab progress:<a href="/type/int/">int</a> = <a href="/type/SendMessageAction/" class="current_page_link">SendMessageAction</a>;
<a href="/constructor/sendMessageUploadPhotoAction/">sendMessageUploadPhotoAction</a>#d1d34a26 progress:<a href="/type/int/">int</a> = <a href="/type/SendMessageAction/" class="current_page_link">SendMessageAction</a>;
<a href="/constructor/sendMessageUploadDocumentAction/">sendMessageUploadDocumentAction</a>#aa0cd9e4 progress:<a href="/type/int/">int</a> = <a href="/type/SendMessageAction/" class="current_page_link">SendMessageAction</a>;
<a href="/constructor/sendMessageGeoLocationAction/">sendMessageGeoLocationAction</a>#176f8ba1 = <a href="/type/SendMessageAction/" class="current_page_link">SendMessageAction</a>;
<a href="/constructor/sendMessageChooseContactAction/">sendMessageChooseContactAction</a>#628cbc6f = <a href="/type/SendMessageAction/" class="current_page_link">SendMessageAction</a>;
<a href="/constructor/sendMessageGamePlayAction/">sendMessageGamePlayAction</a>#dd6a8f48 = <a href="/type/SendMessageAction/" class="current_page_link">SendMessageAction</a>;
<a href="/constructor/sendMessageRecordRoundAction/">sendMessageRecordRoundAction</a>#88f27fbc = <a href="/type/SendMessageAction/" class="current_page_link">SendMessageAction</a>;
<a href="/constructor/sendMessageUploadRoundAction/">sendMessageUploadRoundAction</a>#243e1c66 progress:<a href="/type/int/">int</a> = <a href="/type/SendMessageAction/" class="current_page_link">SendMessageAction</a>;
<a href="/constructor/speakingInGroupCallAction/">speakingInGroupCallAction</a>#d92c2285 = <a href="/type/SendMessageAction/" class="current_page_link">SendMessageAction</a>;
<a href="/constructor/sendMessageHistoryImportAction/">sendMessageHistoryImportAction</a>#dbda9246 progress:<a href="/type/int/">int</a> = <a href="/type/SendMessageAction/" class="current_page_link">SendMessageAction</a>;
<a href="/constructor/sendMessageChooseStickerAction/">sendMessageChooseStickerAction</a>#b05ac6b1 = <a href="/type/SendMessageAction/" class="current_page_link">SendMessageAction</a>;
<a href="/constructor/sendMessageEmojiInteraction/">sendMessageEmojiInteraction</a>#25972bcb emoticon:<a href="/type/string/">string</a> msg_id:<a href="/type/int/">int</a> interaction:<a href="/type/DataJSON/">DataJSON</a> = <a href="/type/SendMessageAction/" class="current_page_link">SendMessageAction</a>;
<a href="/constructor/sendMessageEmojiInteractionSeen/">sendMessageEmojiInteractionSeen</a>#b665902e emoticon:<a href="/type/string/">string</a> = <a href="/type/SendMessageAction/" class="current_page_link">SendMessageAction</a>;
<a href="/constructor/sendMessageTextDraftAction/">sendMessageTextDraftAction</a>#376d975c random_id:<a href="/type/long/">long</a> text:<a href="/type/TextWithEntities/">TextWithEntities</a> = <a href="/type/SendMessageAction/" class="current_page_link">SendMessageAction</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/sendMessageTypingAction/">sendMessageTypingAction</a></td><td>User is typing.</td></tr><tr><td><a href="/constructor/sendMessageCancelAction/">sendMessageCancelAction</a></td><td>Invalidate all previous action updates. E.g. when user deletes entered text or aborts a video upload.</td></tr><tr><td><a href="/constructor/sendMessageRecordVideoAction/">sendMessageRecordVideoAction</a></td><td>User is recording a video.</td></tr><tr><td><a href="/constructor/sendMessageUploadVideoAction/">sendMessageUploadVideoAction</a></td><td>User is uploading a video.</td></tr><tr><td><a href="/constructor/sendMessageRecordAudioAction/">sendMessageRecordAudioAction</a></td><td>User is recording a voice message.</td></tr><tr><td><a href="/constructor/sendMessageUploadAudioAction/">sendMessageUploadAudioAction</a></td><td>User is uploading a voice message.</td></tr><tr><td><a href="/constructor/sendMessageUploadPhotoAction/">sendMessageUploadPhotoAction</a></td><td>User is uploading a photo.</td></tr><tr><td><a href="/constructor/sendMessageUploadDocumentAction/">sendMessageUploadDocumentAction</a></td><td>User is uploading a file.</td></tr><tr><td><a href="/constructor/sendMessageGeoLocationAction/">sendMessageGeoLocationAction</a></td><td>User is selecting a location to share.</td></tr><tr><td><a href="/constructor/sendMessageChooseContactAction/">sendMessageChooseContactAction</a></td><td>User is selecting a contact to share.</td></tr><tr><td><a href="/constructor/sendMessageRecordRoundAction/">sendMessageRecordRoundAction</a></td><td>User is recording a round video to share</td></tr><tr><td><a href="/constructor/sendMessageUploadRoundAction/">sendMessageUploadRoundAction</a></td><td>User is uploading a round video</td></tr><tr><td><a href="/constructor/sendMessageGamePlayAction/">sendMessageGamePlayAction</a></td><td>User is playing a game</td></tr><tr><td><a href="/constructor/speakingInGroupCallAction/">speakingInGroupCallAction</a></td><td>User is currently speaking in the group call</td></tr><tr><td><a href="/constructor/sendMessageHistoryImportAction/">sendMessageHistoryImportAction</a></td><td>Chat history is being imported</td></tr><tr><td><a href="/constructor/sendMessageChooseStickerAction/">sendMessageChooseStickerAction</a></td><td>User is choosing a sticker</td></tr><tr><td><a href="/constructor/sendMessageEmojiInteraction/">sendMessageEmojiInteraction</a></td><td>User has clicked on an animated emoji triggering a <a href="/api/animated-emojis/#emoji-reactions">reaction, click here for more info »</a>.</td></tr><tr><td><a href="/constructor/sendMessageEmojiInteractionSeen/">sendMessageEmojiInteractionSeen</a></td><td>User is watching an animated emoji reaction triggered by another user, <a href="/api/animated-emojis/#emoji-reactions">click here for more info »</a>.</td></tr><tr><td><a href="/constructor/sendMessageTextDraftAction/">sendMessageTextDraftAction</a></td><td>Used by bots to implement <a href="/api/bots/ai/#live-response-streaming">live message streaming »</a>.</td></tr></tbody></table>
