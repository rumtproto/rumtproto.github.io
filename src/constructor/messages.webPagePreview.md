---
title: "messages.webPagePreview (конструктор)"
original: "https://core.telegram.org/constructor/messages.webPagePreview"
section: ref
kind: constructor
layout: layout.njk
---

# messages.webPagePreview

*Конструктор из схемы TL.*

> Represents a webpage preview.

## Определение TL

```
messages.webPagePreview#8c9a88ac media:MessageMedia chats:Vector<Chat> users:Vector<User> = messages.WebPagePreview;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| media | [MessageMedia](/type/MessageMedia/) | The [messageMediaWebPage](/constructor/messageMediaWebPage/) or a [messageMediaEmpty](/constructor/messageMediaEmpty/) if there is no preview. |
| chats | [Vector](https://core.telegram.org/type/Vector%20t)<[Chat](/type/Chat/)> | Chats mentioned in the gift field. |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Users mentioned within the media object. |

## Тип

[messages.WebPagePreview](/type/messages.WebPagePreview/)

## Related pages

#### [messageMediaWebPage](/constructor/messageMediaWebPage/)

Preview of webpage

#### [messageMediaEmpty](/constructor/messageMediaEmpty/)

Empty constructor.
