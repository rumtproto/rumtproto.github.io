---
title: "businessBotRights (конструктор)"
original: "https://core.telegram.org/constructor/businessBotRights"
section: ref
kind: constructor
layout: layout.njk
---

# businessBotRights

*Конструктор из схемы TL.*

> [Business bot rights](https://core.telegram.org/api/bots/connected-business-bots).

## Определение TL

```
businessBotRights#a0624cf7 flags:# reply:flags.0?true read_messages:flags.1?true delete_sent_messages:flags.2?true delete_received_messages:flags.3?true edit_name:flags.4?true edit_bio:flags.5?true edit_profile_photo:flags.6?true edit_username:flags.7?true view_gifts:flags.8?true sell_gifts:flags.9?true change_gift_settings:flags.10?true transfer_and_upgrade_gifts:flags.11?true transfer_stars:flags.12?true manage_stories:flags.13?true = BusinessBotRights;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| reply | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether the bot can send and edit messages in private chats that had incoming messages in the last 24 hours. |
| read_messages | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether the bot can mark incoming private messages as read. |
| delete_sent_messages | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Whether the bot can delete messages sent by the bot. |
| delete_received_messages | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | Whether the bot can delete received private messages in managed chats. |
| edit_name | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[true](/constructor/true/) | Whether the bot can edit the first and last name of the business account. |
| edit_bio | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).5?[true](/constructor/true/) | Whether the bot can edit the bio of the business account. |
| edit_profile_photo | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).6?[true](/constructor/true/) | Whether the bot can edit the profile photo of the business account. |
| edit_username | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).7?[true](/constructor/true/) | Whether the bot can edit the username of the business account. |
| view_gifts | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).8?[true](/constructor/true/) | Whether the bot can view gifts and the amount of Telegram Stars owned by the business account. |
| sell_gifts | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).9?[true](/constructor/true/) | Whether the bot can convert regular gifts owned by the business account to Telegram Stars. |
| change_gift_settings | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).10?[true](/constructor/true/) | Whether the bot can change the privacy settings pertaining to gifts for the business account. |
| transfer_and_upgrade_gifts | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).11?[true](/constructor/true/) | Whether the bot can transfer and upgrade gifts owned by the business account. |
| transfer_stars | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).12?[true](/constructor/true/) | Whether the bot can transfer Telegram Stars received by the business account to its own account, or use them to upgrade and transfer gifts. |
| manage_stories | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).13?[true](/constructor/true/) | Whether the bot can post, edit and delete stories on behalf of the business account. |

## Тип

[BusinessBotRights](/type/BusinessBotRights/)

## Related pages

#### [Connected business bots](https://core.telegram.org/api/bots/connected-business-bots)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.
