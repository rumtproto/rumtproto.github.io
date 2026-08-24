---
title: "messages.setInlineGameScore"
original: "https://core.telegram.org/method/messages.setInlineGameScore"
section: ref
kind: method
description: "Этот метод позволяет задать счёт указанного пользователя в игре, отправленной инлайн-сообщением (только для ботов)."
layout: layout.njk
---

# messages.setInlineGameScore

Этот метод позволяет задать счёт указанного пользователя в игре, отправленной инлайн-сообщением (только для ботов).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.setInlineGameScore#15ad9f64 flags:# edit_message:flags.0?true force:flags.1?true id:InputBotInlineMessageID user_id:InputUser score:int = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>edit_message</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Установите этот флаг, если сообщение с игрой должно автоматически редактироваться для показа текущей таблицы результатов</td></tr><tr><td><strong>force</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Установите этот флаг, если рекорд разрешено понижать. Это может пригодиться при исправлении ошибок или блокировке мошенников</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/InputBotInlineMessageID">InputBotInlineMessageID</a></td><td>Идентификатор инлайн-сообщения</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Идентификатор пользователя</td></tr><tr><td><strong>score</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Новый счёт</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>Указанный идентификатор сообщения недействителен.</td></tr><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>Этот метод может вызывать только бот.</td></tr></tbody></table>
