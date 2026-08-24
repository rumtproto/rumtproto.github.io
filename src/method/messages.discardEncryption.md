---
title: "messages.discardEncryption"
original: "https://core.telegram.org/method/messages.discardEncryption"
section: ref
kind: method
description: "Отменяет запрос на создание секретного чата и/или удаляет информацию о нём."
layout: layout.njk
---

# messages.discardEncryption

Отменяет запрос на создание секретного чата и/или удаляет информацию о нём.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.discardEncryption#f393aea0 flags:# delete_history:flags.0?true chat_id:int = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>delete_history</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Удалять ли всю историю чата также и у другого пользователя</td></tr><tr><td><strong>chat_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор секретного чата</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ID_EMPTY</td><td>Указанный идентификатор чата пуст.</td></tr><tr><td>400</td><td>ENCRYPTION_ALREADY_ACCEPTED</td><td>Секретный чат уже принят.</td></tr><tr><td>400</td><td>ENCRYPTION_ALREADY_DECLINED</td><td>Секретный чат уже был отклонён.</td></tr><tr><td>400</td><td>ENCRYPTION_ID_INVALID</td><td>Указанный идентификатор секретного чата недействителен.</td></tr></tbody></table>
