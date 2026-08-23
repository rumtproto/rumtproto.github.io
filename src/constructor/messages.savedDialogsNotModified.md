---
title: "messages.savedDialogsNotModified (конструктор)"
original: "https://core.telegram.org/constructor/messages.savedDialogsNotModified"
section: ref
kind: constructor
layout: layout.njk
---

# messages.savedDialogsNotModified

*Конструктор из схемы TL.*

> The saved dialogs haven't changed

## Определение TL

```
messages.savedDialogsNotModified#c01f6fe8 count:int = messages.SavedDialogs;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| count | [int](/type/int/) | Number of [saved dialogs](https://core.telegram.org/api/saved-messages) found server-side by the query |

## Тип

[messages.SavedDialogs](/type/messages.SavedDialogs/)

## Related pages

#### [Saved messages](https://core.telegram.org/api/saved-messages)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.
