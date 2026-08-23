---
title: "channelAdminLogEventActionParticipantJoinByInvite (конструктор)"
original: "https://core.telegram.org/constructor/channelAdminLogEventActionParticipantJoinByInvite"
section: ref
kind: constructor
layout: layout.njk
---

# channelAdminLogEventActionParticipantJoinByInvite

*Конструктор из схемы TL.*

> A user joined the [supergroup/channel](https://core.telegram.org/api/channel) using a specific invite link

## Определение TL

```
channelAdminLogEventActionParticipantJoinByInvite#fe9fc158 flags:# via_chatlist:flags.0?true invite:ExportedChatInvite = ChannelAdminLogEventAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| via_chatlist | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | The participant joined by importing a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). |
| invite | [ExportedChatInvite](/type/ExportedChatInvite/) | The invite link used to join the [supergroup/channel](https://core.telegram.org/api/channel) |

## Тип

[ChannelAdminLogEventAction](/type/ChannelAdminLogEventAction/)

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Channels, supergroups, gigagroups and basic groups](https://core.telegram.org/api/channel)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
