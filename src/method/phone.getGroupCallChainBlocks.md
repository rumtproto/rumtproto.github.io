---
title: "phone.getGroupCallChainBlocks"
original: "https://core.telegram.org/method/phone.getGroupCallChainBlocks"
section: ref
kind: method
description: "Получить блоки из подцепочки » группового звонка-конференции; возвращённое обновление updateGroupCallChainBlocks следует обрабатывать как описано здесь »."
layout: layout.njk
---

# phone.getGroupCallChainBlocks

Получить блоки из [подцепочки »](/api/end-to-end/group-calls/#subchains) группового звонка-конференции; возвращённое обновление [updateGroupCallChainBlocks](/constructor/updateGroupCallChainBlocks/) следует обрабатывать [как описано здесь »](/api/end-to-end/group-calls/#handling-updates).

[@term:next_offset] Если число блоков, возвращённых _любым_ вызовом этого метода, равно `limit`, метод необходимо вызвать повторно сразу после обработки полученного [updateGroupCallChainBlocks](/constructor/updateGroupCallChainBlocks/), указав новое зафиксированное значение `offset` (обычно равное возвращённому `next_offset`).

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
phone.getGroupCallChainBlocks#ee9f88a6 call:InputGroupCall sub_chain_id:int offset:int limit:int = Updates;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>call</strong></td><td style="text-align: center;"><a href="/type/InputGroupCall">InputGroupCall</a></td><td>Конференция, блоки подцепочки которой требуется получить</td></tr><tr><td><strong>sub_chain_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><code>0</code> — для основного блокчейна состояния, <code>1</code> — для подцепочки проверки звонков</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Получать блоки начиная с этой высоты; передайте <code>-1</code>, чтобы получить последний блок</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Максимальное количество блоков, возвращаемых этим вызовом, <a href="/api/offsets">см. постраничную выборку</a>, не более 100.</td></tr></tbody></table>

### Результат

[Updates](/type/Updates/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>GROUPCALL_INVALID</td><td>Указанный групповой звонок недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [Групповые звонки с E2E-шифрованием](/api/end-to-end/group-calls/)

Сквозное шифрование, применяемое в групповых голосовых и видеозвонках Telegram; состояние хранится в блокчейне.

#### [updateGroupCallChainBlocks](/constructor/updateGroupCallChainBlocks/)

Содержит блоки блокчейна конференц-звонка, см. [обработку обновлений сквозного группового звонка »](/api/end-to-end/group-calls/#handling-updates).
