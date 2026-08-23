---
title: "smsjobs.isEligibleToJoin (метод)"
original: "https://core.telegram.org/method/smsjobs.isEligibleToJoin"
section: ref
kind: method
layout: layout.njk
---

# smsjobs.isEligibleToJoin

*Метод из схемы TL.*

> Check if we can process SMS jobs (official clients only).

## Определение TL

```
smsjobs.eligibleToJoin#dc8b44cf terms_url:string monthly_sent_sms:int = smsjobs.EligibilityToJoin;
---functions---
smsjobs.isEligibleToJoin#edc39d0 = smsjobs.EligibilityToJoin;
```

## Параметры

This constructor does not require any parameters.

## Результат

[smsjobs.EligibilityToJoin](/type/smsjobs.EligibilityToJoin/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 403 | NOT_ELIGIBLE | The current user is not eligible to join the Peer-to-Peer Login Program. |
