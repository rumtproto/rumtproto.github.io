---
title: "Messages.FoundStickerSets (тип)"
original: "https://core.telegram.org/type/messages.FoundStickerSets"
section: ref
kind: type
layout: layout.njk
---

# Messages.FoundStickerSets

*Тип из схемы TL.*

> Found stickersets

## Определение TL

```
messages.foundStickerSetsNotModified#d54b65d = messages.FoundStickerSets;
messages.foundStickerSets#8af09dd2 hash:long sets:Vector<StickerSetCovered> = messages.FoundStickerSets;

---functions---

messages.searchStickerSets#35705b8a flags:# exclude_featured:flags.0?true q:string hash:long = messages.FoundStickerSets;
messages.searchEmojiStickerSets#92b4494c flags:# exclude_featured:flags.0?true q:string hash:long = messages.FoundStickerSets;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.foundStickerSetsNotModified](/constructor/messages.foundStickerSetsNotModified/) | No further results were found |
| [messages.foundStickerSets](/constructor/messages.foundStickerSets/) | Found stickersets |

## Методы

| Method | Описание |
|---|---|
| [messages.searchStickerSets](/method/messages.searchStickerSets/) | Search for stickersets |
| [messages.searchEmojiStickerSets](/method/messages.searchEmojiStickerSets/) | Search for [custom emoji stickersets »](https://core.telegram.org/api/custom-emoji) |
