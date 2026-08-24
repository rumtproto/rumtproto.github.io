---
title: "payments.CheckCanSendGiftResult"
original: "https://core.telegram.org/type/payments.CheckCanSendGiftResult"
section: ref
kind: type
description: "Указывает, можно отправить подарок или нет."
layout: layout.njk
---

# payments.CheckCanSendGiftResult

Указывает, можно отправить подарок или нет.

```
payments.checkCanSendGiftResultOk#374fa7ad = payments.CheckCanSendGiftResult;
payments.checkCanSendGiftResultFail#d5e58274 reason:TextWithEntities = payments.CheckCanSendGiftResult;

---functions---

payments.checkCanSendGift#c0c4edc9 gift_id:long = payments.CheckCanSendGiftResult;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/payments.checkCanSendGiftResultOk">payments.checkCanSendGiftResultOk</a></td><td>Указанный подарок можно отправить.</td></tr><tr><td><a href="/constructor/payments.checkCanSendGiftResultFail">payments.checkCanSendGiftResultFail</a></td><td>Указанный подарок пока нельзя отправить по указанной причине.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/payments.checkCanSendGift">payments.checkCanSendGift</a></td><td>Проверить, можно ли отправить указанный <a href="/api/gifts">подарок »</a>.</td></tr></tbody></table>
