---
title: "InputSingleMedia (тип)"
original: "https://core.telegram.org/type/InputSingleMedia"
section: ref
kind: type
layout: layout.njk
---

# InputSingleMedia

*Тип из схемы TL.*

> A single media in an [album or grouped media](https://core.telegram.org/api/files/#albums-grouped-media) sent with [messages.sendMultiMedia](/method/messages.sendMultiMedia/).

## Определение TL

```
inputSingleMedia#1cc6e91f flags:# media:InputMedia random_id:long message:string entities:flags.0?Vector<MessageEntity> = InputSingleMedia;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [inputSingleMedia](/constructor/inputSingleMedia/) | A single media in an [album or grouped media](https://core.telegram.org/api/files/#albums-grouped-media) sent with [messages.sendMultiMedia](/method/messages.sendMultiMedia/). |

## Related pages

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.

#### [messages.sendMultiMedia](/method/messages.sendMultiMedia/)

Send an [album or grouped media](https://core.telegram.org/api/files/#albums-grouped-media)
