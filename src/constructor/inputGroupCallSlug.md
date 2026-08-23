---
title: "inputGroupCallSlug (конструктор)"
original: "https://core.telegram.org/constructor/inputGroupCallSlug"
section: ref
kind: constructor
layout: layout.njk
---

# inputGroupCallSlug

*Конструктор из схемы TL.*

> Identify a [conference call »](https://core.telegram.org/api/group-calls#conference-calls) using the slug from its invitation link.
> This constructor can only be used for conference calls. It cannot be used for video chats/livestreams, live stories or any other group call type.

## Определение TL

```
inputGroupCallSlug#fe06823f slug:string = InputGroupCall;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| slug | [string](/type/string/) | Slug from the [conference link »](https://core.telegram.org/api/links#conference-links). |

## Тип

[InputGroupCall](/type/InputGroupCall/)

## Related pages

#### [Deep links](https://core.telegram.org/api/links)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Group calls](https://core.telegram.org/api/group-calls)

How to start, join and manage group calls and video chats.
