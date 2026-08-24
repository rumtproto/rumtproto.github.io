---
title: "payments.StarsRevenueAdsAccountUrl"
original: "https://core.telegram.org/type/payments.StarsRevenueAdsAccountUrl"
section: ref
kind: type
description: "Содержит URL страницы, на которой пользователь сможет размещать рекламу для канала или бота, оплачивая её Telegram Stars."
layout: layout.njk
---

# payments.StarsRevenueAdsAccountUrl

Содержит URL страницы, на которой пользователь сможет размещать рекламу для канала или бота, оплачивая её [Telegram Stars](/api/stars/#paying-for-ads).

```
payments.starsRevenueAdsAccountUrl#394e7f21 url:string = payments.StarsRevenueAdsAccountUrl;

---functions---

payments.getStarsRevenueAdsAccountUrl#d1d7efc5 peer:InputPeer = payments.StarsRevenueAdsAccountUrl;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/payments.starsRevenueAdsAccountUrl">payments.starsRevenueAdsAccountUrl</a></td><td>Содержит URL страницы, на которой пользователь сможет размещать рекламу для канала или бота, оплачивая её <a href="/api/stars#paying-for-ads">Telegram Stars</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/payments.getStarsRevenueAdsAccountUrl">payments.getStarsRevenueAdsAccountUrl</a></td><td>[@term:peer] Возвращает URL аккаунта рекламной платформы Telegram, который можно использовать для настройки рекламы канала или бота в <code>peer</code> с оплатой при помощи Telegram Stars, принадлежащих указанному <code>peer</code>; подробнее см. <a href="/api/stars#paying-for-ads">здесь »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.
