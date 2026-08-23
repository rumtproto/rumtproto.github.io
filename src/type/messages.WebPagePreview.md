---
title: "messages.WebPagePreview (тип)"
original: "https://core.telegram.org/type/messages.WebPagePreview"
section: ref
kind: type
layout: layout.njk
---

# messages.WebPagePreview

*Тип из схемы TL.*

> Represents a webpage preview.

## Определение TL

```
messages.webPagePreview#8c9a88ac media:MessageMedia chats:Vector<Chat> users:Vector<User> = messages.WebPagePreview;

---functions---

messages.getWebPagePreview#570d6f6f flags:# message:string entities:flags.3?Vector<MessageEntity> = messages.WebPagePreview;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [messages.webPagePreview](/constructor/messages.webPagePreview/) | Represents a webpage preview. |

## Методы

| Method | Описание |
|---|---|
| [messages.getWebPagePreview](/method/messages.getWebPagePreview/) | Get preview of webpage |
