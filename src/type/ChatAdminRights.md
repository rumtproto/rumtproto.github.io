---
title: "ChatAdminRights (тип)"
original: "https://core.telegram.org/type/ChatAdminRights"
section: ref
kind: type
layout: layout.njk
---

# ChatAdminRights

*Тип из схемы TL.*

> Represents the rights of an admin in a [channel/supergroup](https://core.telegram.org/api/channel).

## Определение TL

```
chatAdminRights#5fb224d5 flags:# change_info:flags.0?true post_messages:flags.1?true edit_messages:flags.2?true delete_messages:flags.3?true ban_users:flags.4?true invite_users:flags.5?true pin_messages:flags.7?true add_admins:flags.9?true anonymous:flags.10?true manage_call:flags.11?true other:flags.12?true manage_topics:flags.13?true post_stories:flags.14?true edit_stories:flags.15?true delete_stories:flags.16?true manage_direct_messages:flags.17?true manage_ranks:flags.18?true = ChatAdminRights;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [chatAdminRights](/constructor/chatAdminRights/) | Represents the rights of an admin in a [channel/supergroup](https://core.telegram.org/api/channel). |

## Related pages

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
