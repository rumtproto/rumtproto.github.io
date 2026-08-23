---
title: "phone.phoneCall (конструктор)"
original: "https://core.telegram.org/constructor/phone.phoneCall"
section: ref
kind: constructor
layout: layout.njk
---

# phone.phoneCall

*Конструктор из схемы TL.*

> A VoIP phone call

## Определение TL

```
phone.phoneCall#ec82e140 phone_call:PhoneCall users:Vector<User> = phone.PhoneCall;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| phone_call | [PhoneCall](/type/PhoneCall/) | The VoIP phone call |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | VoIP phone call participants |

## Тип

[phone.PhoneCall](/type/phone.PhoneCall/)
