---
title: "payments.getStarsRevenueAdsAccountUrl"
original: "https://core.telegram.org/method/payments.getStarsRevenueAdsAccountUrl"
section: ref
kind: method
description: "Возвращает URL аккаунта рекламной платформы Telegram, который можно использовать для настройки рекламы канала или бота в peer с оплатой звёздами Telegram Stars, принадлежащими…"
layout: layout.njk
---

# payments.getStarsRevenueAdsAccountUrl

[@term:peer] Возвращает URL аккаунта рекламной платформы Telegram, который можно использовать для настройки рекламы канала или бота в `peer` с оплатой звёздами Telegram Stars, принадлежащими указанному `peer`; подробнее см. [здесь »](/api/stars/#paying-for-ads).

```
payments.starsRevenueAdsAccountUrl#394e7f21 url:string = payments.StarsRevenueAdsAccountUrl;
---functions---
payments.getStarsRevenueAdsAccountUrl#d1d7efc5 peer:InputPeer = payments.StarsRevenueAdsAccountUrl;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Канал или бот, которому принадлежат звёзды.</td></tr></tbody></table>

### Результат

[payments.StarsRevenueAdsAccountUrl](/type/payments.StarsRevenueAdsAccountUrl/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>Вы не можете писать в этот чат.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.
