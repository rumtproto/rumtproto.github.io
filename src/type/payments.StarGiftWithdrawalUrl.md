---
title: "payments.StarGiftWithdrawalUrl (тип)"
original: "https://core.telegram.org/type/payments.StarGiftWithdrawalUrl"
section: ref
kind: type
layout: layout.njk
---

# payments.StarGiftWithdrawalUrl

*Тип из схемы TL.*

> A URL that can be used to import the exported NFT on Fragment.

## Определение TL

```
payments.starGiftWithdrawalUrl#84aa3a9c url:string = payments.StarGiftWithdrawalUrl;

---functions---

payments.getStarGiftWithdrawalUrl#d06e93a8 stargift:InputSavedStarGift password:InputCheckPasswordSRP = payments.StarGiftWithdrawalUrl;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [payments.starGiftWithdrawalUrl](/constructor/payments.starGiftWithdrawalUrl/) | A URL that can be used to import the exported NFT on Fragment. |

## Методы

| Method | Описание |
|---|---|
| [payments.getStarGiftWithdrawalUrl](/method/payments.getStarGiftWithdrawalUrl/) | Convert a [collectible gift »](https://core.telegram.org/api/gifts) to an NFT on the TON blockchain. |
