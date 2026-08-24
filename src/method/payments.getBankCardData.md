---
title: "payments.getBankCardData"
original: "https://core.telegram.org/method/payments.getBankCardData"
section: ref
kind: method
description: "Получить сведения о банковской карте"
layout: layout.njk
---

# payments.getBankCardData

Получить сведения о банковской карте

```
payments.bankCardData#3e24e573 title:string open_urls:Vector<BankCardOpenUrl> = payments.BankCardData;
---functions---
payments.getBankCardData#2e79d779 number:string = payments.BankCardData;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>number</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Номер банковской карты</td></tr></tbody></table>

### Результат

[payments.BankCardData](/type/payments.BankCardData/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BANK_CARD_NUMBER_INVALID</td><td>Указанный номер карты недействителен.</td></tr></tbody></table>
