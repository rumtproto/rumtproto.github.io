---
title: "passkey (конструктор)"
original: "https://core.telegram.org/constructor/passkey"
section: ref
kind: constructor
layout: layout.njk
---

# passkey

*Конструктор из схемы TL.*

> Human-readable info about a passkey associated to an account, returned when [creating a passkey »](https://core.telegram.org/api/passkeys#creating-a-passkey) or [listing passkeys »](https://core.telegram.org/api/passkeys#list-passkeys).

## Определение TL

```
passkey#98613ebf flags:# id:string name:string date:int software_emoji_id:flags.0?long last_usage_date:flags.1?int = Passkey;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| id | [string](/type/string/) | Unique passkey ID, usable for example in [account.deletePasskey](/method/account.deletePasskey/). |
| name | [string](/type/string/) | Human-readable passkey name |
| date | [int](/type/int/) | Creation date of the passkey |
| software_emoji_id | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[long](/type/long/) | ID of the [custom emoji](https://core.telegram.org/api/custom-emoji) used as icon for the software or password manager that created the passkey |
| last_usage_date | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[int](/type/int/) | Date when the passkey was last used to log in |

## Тип

[Passkey](/type/Passkey/)

## Related pages

#### [account.deletePasskey](/method/account.deletePasskey/)

Delete a passkey associated to the current account, see [here »](https://core.telegram.org/api/passkeys#delete-passkeys) for more info.

#### [Custom emojis](https://core.telegram.org/api/custom-emoji)

Telegram allows including animated and static custom emojis inside of messages.

#### [Passkey login](https://core.telegram.org/api/passkeys)

Log in to Telegram instantly with a passkey using a PIN or biometrics instead of an SMS code.
