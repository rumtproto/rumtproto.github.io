---
title: "dialogFilter (конструктор)"
original: "https://core.telegram.org/constructor/dialogFilter"
section: ref
kind: constructor
layout: layout.njk
---

# dialogFilter

*Конструктор из схемы TL.*

> Dialog filter AKA [folder](https://core.telegram.org/api/folders)

## Определение TL

```
dialogFilter#aa472651 flags:# contacts:flags.0?true non_contacts:flags.1?true groups:flags.2?true broadcasts:flags.3?true bots:flags.4?true exclude_muted:flags.11?true exclude_read:flags.12?true exclude_archived:flags.13?true title_noanimate:flags.28?true id:int title:TextWithEntities emoticon:flags.25?string color:flags.27?int pinned_peers:Vector<InputPeer> include_peers:Vector<InputPeer> exclude_peers:Vector<InputPeer> = DialogFilter;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| contacts | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | Whether to include all contacts in this [folder](https://core.telegram.org/api/folders) |
| non_contacts | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[true](/constructor/true/) | Whether to include all non-contacts in this [folder](https://core.telegram.org/api/folders) |
| groups | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Whether to include all groups in this [folder](https://core.telegram.org/api/folders) |
| broadcasts | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).3?[true](/constructor/true/) | Whether to include all channels in this [folder](https://core.telegram.org/api/folders) |
| bots | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).4?[true](/constructor/true/) | Whether to include all bots in this [folder](https://core.telegram.org/api/folders) |
| exclude_muted | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).11?[true](/constructor/true/) | Whether to exclude muted chats from this [folder](https://core.telegram.org/api/folders) |
| exclude_read | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).12?[true](/constructor/true/) | Whether to exclude read chats from this [folder](https://core.telegram.org/api/folders) |
| exclude_archived | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).13?[true](/constructor/true/) | Whether to exclude archived chats from this [folder](https://core.telegram.org/api/folders) |
| title_noanimate | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).28?[true](/constructor/true/) | If set, any animated emojis present in title should not be animated and should be instead frozen on the first frame. |
| id | [int](/type/int/) | [Folder](https://core.telegram.org/api/folders) ID |
| title | [TextWithEntities](/type/TextWithEntities/) | [Folder](https://core.telegram.org/api/folders) name (max 12 UTF-8 chars) |
| emoticon | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).25?[string](/type/string/) | Emoji to use as icon for the folder. |
| color | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).27?[int](/type/int/) | A color ID for the [folder tag associated to this folder, see here »](https://core.telegram.org/api/folders#folder-tags) for more info. |
| pinned_peers | [Vector](https://core.telegram.org/type/Vector%20t)<[InputPeer](/type/InputPeer/)> | Pinned chats, [folders](https://core.telegram.org/api/folders) can have unlimited pinned chats |
| include_peers | [Vector](https://core.telegram.org/type/Vector%20t)<[InputPeer](/type/InputPeer/)> | Include the following chats in this [folder](https://core.telegram.org/api/folders) |
| exclude_peers | [Vector](https://core.telegram.org/type/Vector%20t)<[InputPeer](/type/InputPeer/)> | Exclude the following chats from this [folder](https://core.telegram.org/api/folders) |

## Тип

[DialogFilter](/type/DialogFilter/)

## Related pages

#### [Dialog folders](https://core.telegram.org/api/folders)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.
