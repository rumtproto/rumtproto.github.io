---
title: "channels.editPhoto"
original: "https://core.telegram.org/method/channels.editPhoto"
section: ref
kind: method
description: "Изменить фотографию канала/супергруппы"
layout: layout.njk
---

# channels.editPhoto

Изменить фотографию [канала/супергруппы](/api/channel/)

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
channels.editPhoto#f12e57c9 channel:InputChannel photo:InputChatPhoto = Updates;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel">InputChannel</a></td><td>Канал или супергруппа, фотографию которых нужно изменить</td></tr><tr><td><strong>photo</strong></td><td style="text-align: center;"><a href="/type/InputChatPhoto">InputChatPhoto</a></td><td>Новая фотография</td></tr></tbody></table>

### Результат

[Updates](/type/Updates/)

### Этот метод доступен и пользователям, и ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>Вы не вступили в этот канал или супергруппу.</td></tr><tr><td>403</td><td>CHAT_ADMIN_REQUIRED</td><td>Для этого вы обязаны быть администратором этого чата.</td></tr><tr><td>400</td><td>CHAT_INVALID</td><td>Недействительный чат.</td></tr><tr><td>400</td><td>CHAT_NOT_MODIFIED</td><td>Информация о чате не изменена, потому что переданные вами новые данные совпадают с текущими.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>Вы не можете писать в этот чат.</td></tr><tr><td>400</td><td>FILE_PARTS_INVALID</td><td>Недопустимое число частей файла.</td></tr><tr><td>400</td><td>FILE_REFERENCE_INVALID</td><td>Указанная <a href="/api/file-references">ссылка на файл</a> недействительна.</td></tr><tr><td>400</td><td>IMAGE_PROCESS_FAILED</td><td>Сбой при обработке изображения.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>400</td><td>PHOTO_CROP_SIZE_SMALL</td><td>Фотография слишком мала.</td></tr><tr><td>400</td><td>PHOTO_EXT_INVALID</td><td>Недопустимое расширение фотографии.</td></tr><tr><td>400</td><td>PHOTO_FILE_MISSING</td><td>Отсутствует файл фотографии профиля.</td></tr><tr><td>400</td><td>PHOTO_INVALID</td><td>Недействительная фотография.</td></tr><tr><td>400</td><td>STICKER_MIME_INVALID</td><td>Указанный MIME-тип стикера недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Каналы, супергруппы, гигагруппы и обычные группы](/api/channel/)

Как работать с каналами, супергруппами, гигагруппами и обычными группами и чем они друг от друга отличаются.

#### [Ссылки на файлы](/api/file-references/)

Как работать со ссылками на файлы.
