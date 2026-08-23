---
title: "RequirementToContact (тип)"
original: "https://core.telegram.org/type/RequirementToContact"
section: ref
kind: type
layout: layout.njk
---

# RequirementToContact

*Тип из схемы TL.*

> Specifies a requirement that must be satisfied in order to contact a user.

## Определение TL

```
requirementToContactEmpty#50a9839 = RequirementToContact;
requirementToContactPremium#e581e4e9 = RequirementToContact;
requirementToContactPaidMessages#b4f67e93 stars_amount:long = RequirementToContact;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [requirementToContactEmpty](/constructor/requirementToContactEmpty/) | This user can be freely contacted. |
| [requirementToContactPremium](/constructor/requirementToContactPremium/) | This user requires us to buy a [Premium](https://core.telegram.org/api/premium) subscription in order to contact them. |
| [requirementToContactPaidMessages](/constructor/requirementToContactPaidMessages/) | This user requires us to pay the specified amount of [Telegram Stars](https://core.telegram.org/api/stars) to send them a message, see [here »](https://core.telegram.org/api/paid-messages) for the full flow. |
