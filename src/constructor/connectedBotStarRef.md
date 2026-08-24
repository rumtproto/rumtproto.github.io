---
title: "connectedBotStarRef"
original: "https://core.telegram.org/constructor/connectedBotStarRef"
section: ref
kind: constructor
description: "Информация об активной партнёрской программе, в которой мы участвуем с одним из Mini App"
layout: layout.njk
---

# connectedBotStarRef

[@term:Mini App] Информация об [активной партнёрской программе, в которой мы участвуем с одним из Mini App](/api/bots/referrals/#becoming-an-affiliate)

```
connectedBotStarRef#19a13f71 flags:# revoked:flags.1?true url:string date:int bot_id:long commission_permille:int duration_months:flags.0?int participants:long revenue:long = ConnectedBotStarRef;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>revoked</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Если установлено, это партнёрство было отозвано партнёром с помощью <a href="/method/payments.editConnectedStarRefBot">payments.editConnectedStarRefBot</a> или владельцем партнёрской программы с помощью <a href="/method/bots.updateStarRefProgram">bots.updateStarRefProgram</a></td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td><a href="/api/links#referral-links">Реферальная ссылка</a>, которой нужно поделиться</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Когда мы вступили в партнёрство с <code>bot_id</code></td></tr><tr><td><strong>bot_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор mini app, создавшего партнёрскую программу</td></tr><tr><td><strong>commission_permille</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество Telegram Stars, получаемых партнёром за каждую 1000 Telegram Stars, полученных <code>bot_id</code></td></tr><tr><td><strong>duration_months</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Количество месяцев, в течение которых программа будет действовать; если не задано, срок действия не ограничен.</td></tr><tr><td><strong>participants</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Количество пользователей, воспользовавшихся партнёрской программой</td></tr><tr><td><strong>revenue</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Количество Telegram Stars, заработанных партнёрской программой</td></tr></tbody></table>

### Тип

[ConnectedBotStarRef](/type/ConnectedBotStarRef/)

### Связанные страницы

#### [payments.editConnectedStarRefBot](/method/payments.editConnectedStarRefBot/)

Выйти из [партнёрской программы »](/api/bots/referrals/#becoming-an-affiliate) бота

#### [bots.updateStarRefProgram](/method/bots.updateStarRefProgram/)

Создать, изменить или удалить [партнёрскую программу](/api/bots/referrals/) принадлежащего нам бота

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.

#### [Партнёрские программы](/api/bots/referrals/)

Разработчики могут открывать партнёрские программы для своих mini app — это позволяет авторам контента, другим разработчикам mini app и любому пользователю Telegram продвигать приложение и получать комиссию с покупок, совершённых приведёнными ими людьми.
