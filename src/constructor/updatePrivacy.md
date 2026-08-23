---
title: "updatePrivacy (конструктор)"
original: "https://core.telegram.org/constructor/updatePrivacy"
section: ref
kind: constructor
layout: layout.njk
---

# updatePrivacy

*Конструктор из схемы TL.*

> Privacy rules were changed

## Определение TL

```
updatePrivacy#ee3b272a key:PrivacyKey rules:Vector<PrivacyRule> = Update;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| key | [PrivacyKey](/type/PrivacyKey/) | Peers to which the privacy rules apply |
| rules | [Vector](https://core.telegram.org/type/Vector%20t)<[PrivacyRule](/type/PrivacyRule/)> | New privacy rules |

## Тип

[Update](/type/Update/)
