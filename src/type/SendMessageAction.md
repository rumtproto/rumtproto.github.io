---
title: "SendMessageAction (тип)"
original: "https://core.telegram.org/type/SendMessageAction"
section: ref
kind: type
layout: layout.njk
---

# SendMessageAction

*Тип из схемы TL.*

> User actions. Use this to provide users with detailed info about their chat partner's actions: typing or sending attachments of all kinds.
> #### [End-to-end schema](/schema/end-to-end/)
> ```
> ===17===
> sendMessageCancelAction#fd5ec8f5 = SendMessageAction;
> sendMessageChooseContactAction#628cbc6f = SendMessageAction;
> sendMessageGeoLocationAction#176f8ba1 = SendMessageAction;
> sendMessageRecordAudioAction#d52f73f7 = SendMessageAction;
> sendMessageRecordVideoAction#a187d66f = SendMessageAction;
> sendMessageTypingAction#16bf744e = SendMessageAction;
> sendMessageUploadAudioAction#e6ac8a6f = SendMessageAction;
> sendMessageUploadDocumentAction#8faee98e = SendMessageAction;
> sendMessageUploadPhotoAction#990a3c1a = SendMessageAction;
> sendMessageUploadVideoAction#92042ff7 = SendMessageAction;
> ===66===
> sendMessageRecordRoundAction#88f27fbc = SendMessageAction;
> sendMessageUploadRoundAction#bb718624 = SendMessageAction;
> ```
> API schema:

## Определение TL

```
sendMessageTypingAction#16bf744e = SendMessageAction;
sendMessageCancelAction#fd5ec8f5 = SendMessageAction;
sendMessageRecordVideoAction#a187d66f = SendMessageAction;
sendMessageUploadVideoAction#e9763aec progress:int = SendMessageAction;
sendMessageRecordAudioAction#d52f73f7 = SendMessageAction;
sendMessageUploadAudioAction#f351d7ab progress:int = SendMessageAction;
sendMessageUploadPhotoAction#d1d34a26 progress:int = SendMessageAction;
sendMessageUploadDocumentAction#aa0cd9e4 progress:int = SendMessageAction;
sendMessageGeoLocationAction#176f8ba1 = SendMessageAction;
sendMessageChooseContactAction#628cbc6f = SendMessageAction;
sendMessageGamePlayAction#dd6a8f48 = SendMessageAction;
sendMessageRecordRoundAction#88f27fbc = SendMessageAction;
sendMessageUploadRoundAction#243e1c66 progress:int = SendMessageAction;
speakingInGroupCallAction#d92c2285 = SendMessageAction;
sendMessageHistoryImportAction#dbda9246 progress:int = SendMessageAction;
sendMessageChooseStickerAction#b05ac6b1 = SendMessageAction;
sendMessageEmojiInteraction#25972bcb emoticon:string msg_id:int interaction:DataJSON = SendMessageAction;
sendMessageEmojiInteractionSeen#b665902e emoticon:string = SendMessageAction;
sendMessageTextDraftAction#376d975c random_id:long text:TextWithEntities = SendMessageAction;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [sendMessageTypingAction](/constructor/sendMessageTypingAction/) | User is typing. |
| [sendMessageCancelAction](/constructor/sendMessageCancelAction/) | Invalidate all previous action updates. E.g. when user deletes entered text or aborts a video upload. |
| [sendMessageRecordVideoAction](/constructor/sendMessageRecordVideoAction/) | User is recording a video. |
| [sendMessageUploadVideoAction](/constructor/sendMessageUploadVideoAction/) | User is uploading a video. |
| [sendMessageRecordAudioAction](/constructor/sendMessageRecordAudioAction/) | User is recording a voice message. |
| [sendMessageUploadAudioAction](/constructor/sendMessageUploadAudioAction/) | User is uploading a voice message. |
| [sendMessageUploadPhotoAction](/constructor/sendMessageUploadPhotoAction/) | User is uploading a photo. |
| [sendMessageUploadDocumentAction](/constructor/sendMessageUploadDocumentAction/) | User is uploading a file. |
| [sendMessageGeoLocationAction](/constructor/sendMessageGeoLocationAction/) | User is selecting a location to share. |
| [sendMessageChooseContactAction](/constructor/sendMessageChooseContactAction/) | User is selecting a contact to share. |
| [sendMessageRecordRoundAction](/constructor/sendMessageRecordRoundAction/) | User is recording a round video to share |
| [sendMessageUploadRoundAction](/constructor/sendMessageUploadRoundAction/) | User is uploading a round video |
| [sendMessageGamePlayAction](/constructor/sendMessageGamePlayAction/) | User is playing a game |
| [speakingInGroupCallAction](/constructor/speakingInGroupCallAction/) | User is currently speaking in the group call |
| [sendMessageHistoryImportAction](/constructor/sendMessageHistoryImportAction/) | Chat history is being imported |
| [sendMessageChooseStickerAction](/constructor/sendMessageChooseStickerAction/) | User is choosing a sticker |
| [sendMessageEmojiInteraction](/constructor/sendMessageEmojiInteraction/) | User has clicked on an animated emoji triggering a [reaction, click here for more info »](https://core.telegram.org/api/animated-emojis#emoji-reactions). |
| [sendMessageEmojiInteractionSeen](/constructor/sendMessageEmojiInteractionSeen/) | User is watching an animated emoji reaction triggered by another user, [click here for more info »](https://core.telegram.org/api/animated-emojis#emoji-reactions). |
| [sendMessageTextDraftAction](/constructor/sendMessageTextDraftAction/) | Used by bots to implement [live message streaming »](https://core.telegram.org/api/bots/ai#live-response-streaming). |
