---
title: "starsSubscriptionPricing"
original: "https://core.telegram.org/constructor/starsSubscriptionPricing"
section: ref
kind: constructor
description: "Стоимость подписки за Telegram Stars »."
layout: layout.njk
---

# starsSubscriptionPricing

Стоимость [подписки за Telegram Stars »](/api/invites/#paid-invite-links).

```
starsSubscriptionPricing#5416d58 period:int amount:long = StarsSubscriptionPricing;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>period</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Пользователь должен платить <code>amount</code> звёзд каждые <code>period</code> секунд, чтобы получить и сохранять доступ к каналу.<br>В настоящее время единственный допустимый период подписки — <code>30*24*60*60</code>, то есть с пользователя будет списываться указанное количество звёзд ежемесячно.</td></tr><tr><td><strong>amount</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Цена подписки в Telegram Stars.</td></tr></tbody></table>

### Тип

[StarsSubscriptionPricing](/type/StarsSubscriptionPricing/)

### Связанные страницы

#### [Пригласительные ссылки](/api/invites/)

У чатов и каналов может быть публичное имя пользователя или закрытая пригласительная ссылка; закрытые пригласительные ссылки дополнительно могут требовать заявку на вступление от каждого пользователя.
