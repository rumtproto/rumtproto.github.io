---
title: "inputBusinessRecipients (конструктор)"
original: "https://core.telegram.org/constructor/inputBusinessRecipients"
section: ref
kind: constructor
layout: layout.njk
---

# inputBusinessRecipients

*Конструктор из схемы TL.*

> Specifies the chats that **can** receive Telegram Business [away »](https://core.telegram.org/api/business#away-messages) and [greeting »](https://core.telegram.org/api/business#greeting-messages) messages.
> If `exclude_selected` is set, specifies all chats that **cannot** receive Telegram Business [away »](https://core.telegram.org/api/business#away-messages) and [greeting »](https://core.telegram.org/api/business#greeting-messages) messages.

## Определение TL

```
inputBusinessRecipients#6f8b32aa flags:# existing_chats:flags.0?true new_chats:flags.1?true contacts:flags.2?true non_contacts:flags.3?true exclude_selected:flags.5?true users:flags.4?Vector<InputUser> = InputBusinessRecipients;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| existing_chats | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | All existing private chats. |
| new_chats | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | All new private chats. |
| contacts | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | All private chats with contacts. |
| non_contacts | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | All private chats with non-contacts. |
| exclude_selected | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](/constructor/true/) | If set, inverts the selection. |
| users | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[Vector](https://core.telegram.org/type/Vector%20t)<[InputUser](/type/InputUser/)> | Only private chats with the specified users. |

## Тип

[InputBusinessRecipients](/type/InputBusinessRecipients/)

## Related pages

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
