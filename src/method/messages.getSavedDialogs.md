---
title: "messages.getSavedDialogs"
original: "https://core.telegram.org/method/messages.getSavedDialogs"
section: ref
kind: method
description: "Возвращает текущий список избранных диалогов » или список тем монофорума »."
layout: layout.njk
---

# messages.getSavedDialogs

Возвращает текущий [список избранных диалогов »](/api/saved-messages/) или [список тем монофорума »](/api/monoforum/).

```
messages.savedDialogs#f83ae221 dialogs:Vector<SavedDialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.SavedDialogs;
messages.savedDialogsSlice#44ba9dd9 count:int dialogs:Vector<SavedDialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.SavedDialogs;
messages.savedDialogsNotModified#c01f6fe8 count:int = messages.SavedDialogs;
---functions---
messages.getSavedDialogs#1e91fc99 flags:# exclude_pinned:flags.0?true parent_peer:flags.1?InputPeer offset_date:int offset_id:int offset_peer:InputPeer limit:int hash:long = messages.SavedDialogs;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>exclude_pinned</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Исключить закреплённые диалоги</td></tr><tr><td><strong>parent_peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/InputPeer">InputPeer</a></td><td>Если установлено, получает список тем переданного монофорума, иначе получает список избранных диалогов.</td></tr><tr><td><strong>offset_date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/offsets">Смещения для постраничной выборки, подробнее см. здесь</a></td></tr><tr><td><strong>offset_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/offsets">Смещения для постраничной выборки, подробнее см. здесь</a> (для постраничной выборки используется идентификатор <code>top_message</code>)</td></tr><tr><td><strong>offset_peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td><a href="/api/offsets">Пир смещения для постраничной выборки</a></td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество возвращаемых элементов списка</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:hash] <a href="/api/offsets#hash-generation">Хеш выборки, используемый для кеширования; подробности здесь</a></td></tr></tbody></table>

### Результат

[messages.SavedDialogs](/type/messages.SavedDialogs/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [Избранные сообщения](/api/saved-messages/)

Чат «Избранное» позволяет сохранять сообщения и медиа: это личное облачное хранилище для любых сообщений и медиа, которые вы захотите туда отправить или переслать.

#### [Личные сообщения в каналы](/api/monoforum/)

Telegram поддерживает личные сообщения в каналы, которые также можно использовать для предложения постов в канал, в том числе платных.
