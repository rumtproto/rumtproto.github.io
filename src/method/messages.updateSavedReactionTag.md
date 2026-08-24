---
title: "messages.updateSavedReactionTag"
original: "https://core.telegram.org/method/messages.updateSavedReactionTag"
section: ref
kind: method
description: "Обновить описание тега сохранённого сообщения »."
layout: layout.njk
---

# messages.updateSavedReactionTag

Обновить [описание тега сохранённого сообщения »](/api/saved-messages/#tags).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.updateSavedReactionTag#60297dec flags:# reaction:Reaction title:flags.0?string = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>reaction</strong></td><td style="text-align: center;"><a href="/type/Reaction">Reaction</a></td><td><a href="/api/reactions">Реакция</a>, связанная с тегом</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Описание тега, не более 12 символов UTF-8; чтобы удалить описание, вызовите метод, не устанавливая этот флаг.</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>403</td><td>PREMIUM_ACCOUNT_REQUIRED</td><td>Для выполнения этого действия требуется аккаунт Premium.</td></tr><tr><td>400</td><td>REACTION_INVALID</td><td>Указанная реакция недействительна.</td></tr></tbody></table>

### Связанные страницы

#### [Реакции на сообщения](/api/reactions/)

Telegram позволяет пользователям реагировать на любое сообщение определёнными эмодзи, запуская симпатичные lottie-анимации.

#### [Избранные сообщения](/api/saved-messages/)

Чат «Избранное» позволяет сохранять сообщения и медиа: это личное облачное хранилище для любых сообщений и медиа, которые вы захотите туда отправить или переслать.
