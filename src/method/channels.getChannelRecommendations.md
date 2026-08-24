---
title: "channels.getChannelRecommendations"
original: "https://core.telegram.org/method/channels.getChannelRecommendations"
section: ref
kind: method
description: "Получить список публичных каналов схожей тематики, отобранных по сходству их **аудитории подписчиков**."
layout: layout.njk
---

# channels.getChannelRecommendations

Получить список публичных каналов схожей тематики, отобранных по сходству их **аудитории подписчиков**.

```
messages.chats#64ff9fd5 chats:Vector<Chat> = messages.Chats;
messages.chatsSlice#9cd81144 count:int chats:Vector<Chat> = messages.Chats;
---functions---
channels.getChannelRecommendations#25a71742 flags:# channel:flags.0?InputChannel = messages.Chats;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/InputChannel">InputChannel</a></td><td>Метод вернёт каналы, связанные с переданным каналом <code>channel</code>. Если не задано, метод вернёт каналы, связанные с каналами, на которые подписан пользователь.</td></tr></tbody></table>

### Результат

[messages.Chats](/type/messages.Chats/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>Вы не вступили в этот канал или супергруппу.</td></tr><tr><td>400</td><td>CHAT_NOT_MODIFIED</td><td>Информация о чате не изменена, потому что переданные вами новые данные совпадают с текущими.</td></tr></tbody></table>
