---
title: "DialogFilter (тип)"
original: "https://core.telegram.org/type/DialogFilter"
section: ref
kind: type
layout: layout.njk
---

# DialogFilter

*Тип из схемы TL.*

> Dialog filter ([folder »](https://core.telegram.org/api/folders))

## Определение TL

```
dialogFilter#aa472651 flags:# contacts:flags.0?true non_contacts:flags.1?true groups:flags.2?true broadcasts:flags.3?true bots:flags.4?true exclude_muted:flags.11?true exclude_read:flags.12?true exclude_archived:flags.13?true title_noanimate:flags.28?true id:int title:TextWithEntities emoticon:flags.25?string color:flags.27?int pinned_peers:Vector<InputPeer> include_peers:Vector<InputPeer> exclude_peers:Vector<InputPeer> = DialogFilter;
dialogFilterDefault#363293ae = DialogFilter;
dialogFilterChatlist#96537bd7 flags:# has_my_invites:flags.26?true title_noanimate:flags.28?true id:int title:TextWithEntities emoticon:flags.25?string color:flags.27?int pinned_peers:Vector<InputPeer> include_peers:Vector<InputPeer> = DialogFilter;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [dialogFilter](/constructor/dialogFilter/) | Dialog filter AKA [folder](https://core.telegram.org/api/folders) |
| [dialogFilterDefault](/constructor/dialogFilterDefault/) | Used only when reordering folders to indicate the default (all chats) folder. |
| [dialogFilterChatlist](/constructor/dialogFilterChatlist/) | A folder imported using a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). |

## Related pages

#### [Dialog folders](https://core.telegram.org/api/folders)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.
