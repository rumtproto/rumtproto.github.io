---
title: "BusinessBotRecipients (тип)"
original: "https://core.telegram.org/type/BusinessBotRecipients"
section: ref
kind: type
layout: layout.njk
---

# BusinessBotRecipients

*Тип из схемы TL.*

> Specifies the private chats that a [connected business bot »](https://core.telegram.org/api/bots/connected-business-bots) may receive messages and interact with.

## Определение TL

```
businessBotRecipients#b88cf373 flags:# existing_chats:flags.0?true new_chats:flags.1?true contacts:flags.2?true non_contacts:flags.3?true exclude_selected:flags.5?true users:flags.4?Vector<long> exclude_users:flags.6?Vector<long> = BusinessBotRecipients;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [businessBotRecipients](/constructor/businessBotRecipients/) | Specifies the private chats that a [connected business bot »](https://core.telegram.org/api/bots/connected-business-bots) may receive messages and interact with. |

## Related pages

#### [Connected business bots](https://core.telegram.org/api/bots/connected-business-bots)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.
