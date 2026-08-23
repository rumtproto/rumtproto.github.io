---
title: "smsjobs.getStatus (метод)"
original: "https://core.telegram.org/method/smsjobs.getStatus"
section: ref
kind: method
layout: layout.njk
---

# smsjobs.getStatus

*Метод из схемы TL.*

> Get SMS jobs status (official clients only).

## Определение TL

```
smsjobs.status#2aee9191 flags:# allow_international:flags.0?true recent_sent:int recent_since:int recent_remains:int total_sent:int total_since:int last_gift_slug:flags.1?string terms_url:string = smsjobs.Status;
---functions---
smsjobs.getStatus#10a698e8 = smsjobs.Status;
```

## Параметры

This constructor does not require any parameters.

## Результат

[smsjobs.Status](/type/smsjobs.Status/)

## Only users can use this method

## Possible errors

| Code | Тип | Описание |
|---|---|---|
| 400 | NOT_JOINED | The current user hasn't joined the Peer-to-Peer Login Program. |
