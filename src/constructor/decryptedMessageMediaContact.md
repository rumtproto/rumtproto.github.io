---
title: "decryptedMessageMediaContact (конструктор)"
original: "https://core.telegram.org/constructor/decryptedMessageMediaContact"
section: ref
kind: constructor
layout: layout.njk
---

# decryptedMessageMediaContact

*Конструктор из схемы TL.*

> Contact attached to an encrypted message.

## Определение TL

```
===8===
decryptedMessageMediaContact#588a0a97 phone_number:string first_name:string last_name:string user_id:int = DecryptedMessageMedia;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| phone_number | [string](/type/string/) | Phone number |
| first_name | [string](/type/string/) | Contact's first name |
| last_name | [string](/type/string/) | Contact's last name |
| user_id | [int](/type/int/) | Telegram User ID of signed-up contact |

## Тип

[DecryptedMessageMedia](/type/DecryptedMessageMedia/)
