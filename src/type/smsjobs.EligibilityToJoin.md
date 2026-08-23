---
title: "smsjobs.EligibilityToJoin (тип)"
original: "https://core.telegram.org/type/smsjobs.EligibilityToJoin"
section: ref
kind: type
layout: layout.njk
---

# smsjobs.EligibilityToJoin

*Тип из схемы TL.*

> SMS jobs eligibility

## Определение TL

```
smsjobs.eligibleToJoin#dc8b44cf terms_url:string monthly_sent_sms:int = smsjobs.EligibilityToJoin;

---functions---

smsjobs.isEligibleToJoin#edc39d0 = smsjobs.EligibilityToJoin;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [smsjobs.eligibleToJoin](/constructor/smsjobs.eligibleToJoin/) | SMS jobs eligibility |

## Методы

| Method | Описание |
|---|---|
| [smsjobs.isEligibleToJoin](/method/smsjobs.isEligibleToJoin/) | Check if we can process SMS jobs (official clients only). |
