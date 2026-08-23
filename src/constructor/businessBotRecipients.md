---
title: "businessBotRecipients (конструктор)"
original: "https://core.telegram.org/constructor/businessBotRecipients"
section: ref
kind: constructor
layout: layout.njk
---

# businessBotRecipients

*Конструктор из схемы TL.*

> Specifies the private chats that a [connected business bot »](https://core.telegram.org/api/bots/connected-business-bots) may receive messages and interact with.

## Определение TL

```
businessBotRecipients#b88cf373 flags:# existing_chats:flags.0?true new_chats:flags.1?true contacts:flags.2?true non_contacts:flags.3?true exclude_selected:flags.5?true users:flags.4?Vector<long> exclude_users:flags.6?Vector<long> = BusinessBotRecipients;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| existing_chats | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Selects all existing private chats. |
| new_chats | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Selects all new private chats. |
| contacts | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Selects all private chats with contacts. |
| non_contacts | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | Selects all private chats with non-contacts. |
| exclude_selected | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](/constructor/true/) | If set, then all private chats except the ones selected by existing_chats, new_chats, contacts, non_contacts and users are chosen. Note that if this flag is set, any values passed in exclude_users will be merged and moved into users by the server, thus exclude_users will always be empty. |
| users | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[Vector](https://core.telegram.org/type/Vector%20t)<[long](/type/long/)> | Explicitly selected private chats. |
| exclude_users | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[Vector](https://core.telegram.org/type/Vector%20t)<[long](/type/long/)> | Identifiers of private chats that are always excluded. |

## Тип

[BusinessBotRecipients](/type/BusinessBotRecipients/)

## Related pages

#### [Connected business bots](https://core.telegram.org/api/bots/connected-business-bots)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.
