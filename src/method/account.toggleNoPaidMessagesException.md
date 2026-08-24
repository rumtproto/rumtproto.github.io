---
title: "account.toggleNoPaidMessagesException"
original: "https://core.telegram.org/method/account.toggleNoPaidMessagesException"
section: ref
kind: method
description: "Разрешить пользователю отправлять нам сообщения без оплаты, если включены платные сообщения »."
layout: layout.njk
---

# account.toggleNoPaidMessagesException

Разрешить пользователю отправлять нам сообщения без оплаты, если включены [платные сообщения »](/api/paid-messages/).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.toggleNoPaidMessagesException#fe2eda76 flags:# refund_charged:flags.0?true require_payment:flags.2?true parent_peer:flags.1?InputPeer user_id:InputUser = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>refund_charged</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, а флаг <code>require_payment</code> не установлен, возвращает суммы, которые пользователь уже заплатил нам за отправку нам сообщений (напрямую или через монофорум).</td></tr><tr><td><strong>require_payment</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Если установлено, требует от пользователя оплаты за отправку нам сообщений.<br><strong>Установить</strong> этот флаг могут только монофорумы, но не пользователи, то есть при установленном флаге должен быть задан <code>parent_peer</code>; пользователям следует вместо этого использовать настройку приватности <a href="/constructor/inputPrivacyKeyNoPaidMessages">inputPrivacyKeyNoPaidMessages</a>, чтобы убрать ранее добавленное исключение.<br>Если не установлено, разрешает пользователю отправлять нам сообщения без оплаты (<strong>снять</strong> флаг могут как монофорумы, так и пользователи).</td></tr><tr><td><strong>parent_peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/InputPeer">InputPeer</a></td><td>Если установлено, применяет настройку внутри <a href="/api/monoforum">монофорума, то есть личных сообщений »</a> (передавайте идентификатор монофорума, а <strong>не</strong> идентификатор связанного канала).</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Пользователь, которого нужно освободить от платы или лишить освобождения.</td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>PARENT_PEER_INVALID</td><td>Указанный <code>parent_peer</code> недействителен.</td></tr><tr><td>400</td><td>UNSUPPORTED</td><td><code>require_payment</code> не может <em>устанавливаться</em> пользователями — только монофорумами: чтобы снять ранее добавленное исключение, пользователи должны воспользоваться настройкой приватности <a href="/constructor/inputPrivacyKeyNoPaidMessages">inputPrivacyKeyNoPaidMessages</a>.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>Указанный идентификатор пользователя недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [inputPrivacyKeyNoPaidMessages](/constructor/inputPrivacyKeyNoPaidMessages/)

Кто может писать вам без оплаты, если включены [платные сообщения »](/api/paid-messages/).

#### [Личные сообщения в каналы](/api/monoforum/)

Telegram поддерживает личные сообщения в каналы, которые также можно использовать для предложения постов в канал, в том числе платных.

#### [Платные сообщения](/api/paid-messages/)

Telegram Stars можно использовать для оплаты сообщений пользователям, супергруппам и каналам, в которых настроены платные сообщения: за каждое отправленное им сообщение взимается плата.
