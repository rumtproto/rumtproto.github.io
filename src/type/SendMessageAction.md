---
title: "SendMessageAction"
original: "https://core.telegram.org/type/SendMessageAction"
section: ref
kind: type
description: "Действия пользователя. Используйте это, чтобы показывать пользователям подробные сведения о действиях собеседника: наборе текста или отправке вложений любого рода."
layout: layout.njk
---

# SendMessageAction

Действия пользователя. Используйте это, чтобы показывать пользователям подробные сведения о действиях собеседника: наборе текста или отправке вложений любого рода.

#### [Актуальная TL-схема сквозного шифрования](/schema/end-to-end/)

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

Схема API:

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

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/sendMessageTypingAction">sendMessageTypingAction</a></td><td>Пользователь набирает текст.</td></tr><tr><td><a href="/constructor/sendMessageCancelAction">sendMessageCancelAction</a></td><td>Отменяет все предыдущие обновления о действии. Например, когда пользователь удаляет введённый текст или прерывает загрузку видео.</td></tr><tr><td><a href="/constructor/sendMessageRecordVideoAction">sendMessageRecordVideoAction</a></td><td>Пользователь записывает видео.</td></tr><tr><td><a href="/constructor/sendMessageUploadVideoAction">sendMessageUploadVideoAction</a></td><td>Пользователь загружает видео.</td></tr><tr><td><a href="/constructor/sendMessageRecordAudioAction">sendMessageRecordAudioAction</a></td><td>Пользователь записывает голосовое сообщение.</td></tr><tr><td><a href="/constructor/sendMessageUploadAudioAction">sendMessageUploadAudioAction</a></td><td>Пользователь загружает голосовое сообщение.</td></tr><tr><td><a href="/constructor/sendMessageUploadPhotoAction">sendMessageUploadPhotoAction</a></td><td>Пользователь загружает фотографию.</td></tr><tr><td><a href="/constructor/sendMessageUploadDocumentAction">sendMessageUploadDocumentAction</a></td><td>Пользователь загружает файл.</td></tr><tr><td><a href="/constructor/sendMessageGeoLocationAction">sendMessageGeoLocationAction</a></td><td>Пользователь выбирает геопозицию для отправки.</td></tr><tr><td><a href="/constructor/sendMessageChooseContactAction">sendMessageChooseContactAction</a></td><td>Пользователь выбирает контакт для отправки.</td></tr><tr><td><a href="/constructor/sendMessageRecordRoundAction">sendMessageRecordRoundAction</a></td><td>Пользователь записывает видеосообщение для отправки</td></tr><tr><td><a href="/constructor/sendMessageUploadRoundAction">sendMessageUploadRoundAction</a></td><td>Пользователь загружает видеосообщение</td></tr><tr><td><a href="/constructor/sendMessageGamePlayAction">sendMessageGamePlayAction</a></td><td>Пользователь играет в игру</td></tr><tr><td><a href="/constructor/speakingInGroupCallAction">speakingInGroupCallAction</a></td><td>Пользователь сейчас говорит в групповом звонке</td></tr><tr><td><a href="/constructor/sendMessageHistoryImportAction">sendMessageHistoryImportAction</a></td><td>Выполняется импорт истории переписки</td></tr><tr><td><a href="/constructor/sendMessageChooseStickerAction">sendMessageChooseStickerAction</a></td><td>Пользователь выбирает стикер</td></tr><tr><td><a href="/constructor/sendMessageEmojiInteraction">sendMessageEmojiInteraction</a></td><td>Пользователь нажал на анимированный эмодзи, вызвав <a href="/api/animated-emojis#emoji-reactions">реакцию; подробнее см. здесь »</a>.</td></tr><tr><td><a href="/constructor/sendMessageEmojiInteractionSeen">sendMessageEmojiInteractionSeen</a></td><td>Пользователь наблюдает за реакцией анимированным эмодзи, вызванной другим пользователем; <a href="/api/animated-emojis#emoji-reactions">подробнее см. здесь »</a>.</td></tr><tr><td><a href="/constructor/sendMessageTextDraftAction">sendMessageTextDraftAction</a></td><td>Используется ботами для реализации <a href="/api/bots/ai#live-response-streaming">потоковой передачи сообщений »</a>.</td></tr></tbody></table>
