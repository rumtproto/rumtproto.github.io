---
title: "BusinessRecipients (тип)"
original: "https://core.telegram.org/type/BusinessRecipients"
section: ref
kind: type
layout: layout.njk
---

# BusinessRecipients

*Тип из схемы TL.*

> Specifies the chats that **can** receive Telegram Business [away »](https://core.telegram.org/api/business#away-messages) and [greeting »](https://core.telegram.org/api/business#greeting-messages) messages.

## Определение TL

```
businessRecipients#21108ff7 flags:# existing_chats:flags.0?true new_chats:flags.1?true contacts:flags.2?true non_contacts:flags.3?true exclude_selected:flags.5?true users:flags.4?Vector<long> = BusinessRecipients;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [businessRecipients](/constructor/businessRecipients/) | Specifies the chats that can receive Telegram Business [away »](https://core.telegram.org/api/business#away-messages) and [greeting »](https://core.telegram.org/api/business#greeting-messages) messages. If exclude_selected is set, specifies all chats that cannot receive Telegram Business [away »](https://core.telegram.org/api/business#away-messages) and [greeting »](https://core.telegram.org/api/business#greeting-messages) messages. |

## Related pages

#### [Telegram Business](https://core.telegram.org/api/business)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
