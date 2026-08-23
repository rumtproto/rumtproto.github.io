---
title: "dialogFilterChatlist (конструктор)"
original: "https://core.telegram.org/constructor/dialogFilterChatlist"
section: ref
kind: constructor
layout: layout.njk
---

# dialogFilterChatlist

*Конструктор из схемы TL.*

> A folder imported using a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links).

## Определение TL

```
dialogFilterChatlist#96537bd7 flags:# has_my_invites:flags.26?true title_noanimate:flags.28?true id:int title:TextWithEntities emoticon:flags.25?string color:flags.27?int pinned_peers:Vector<InputPeer> include_peers:Vector<InputPeer> = DialogFilter;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| has_my_invites | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).26?[true](/constructor/true/) | Whether the current user has created some [chat folder deep links »](https://core.telegram.org/api/links#chat-folder-links) to share the folder as well. |
| title_noanimate | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).28?[true](/constructor/true/) | If set, any animated emojis present in title should not be animated and should be instead frozen on the first frame. |
| id | [int](/type/int/) | ID of the folder |
| title | [TextWithEntities](/type/TextWithEntities/) | Name of the folder (max 12 UTF-8 chars) |
| emoticon | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).25?[string](/type/string/) | Emoji to use as icon for the folder. |
| color | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).27?[int](/type/int/) | A color ID for the [folder tag associated to this folder, see here »](https://core.telegram.org/api/folders#folder-tags) for more info. |
| pinned_peers | [Vector](https://core.telegram.org/type/Vector%20t)<[InputPeer](/type/InputPeer/)> | Pinned chats, [folders](https://core.telegram.org/api/folders) can have unlimited pinned chats |
| include_peers | [Vector](https://core.telegram.org/type/Vector%20t)<[InputPeer](/type/InputPeer/)> | Chats to include in the folder |

## Тип

[DialogFilter](/type/DialogFilter/)

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Dialog folders](https://core.telegram.org/api/folders)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.
