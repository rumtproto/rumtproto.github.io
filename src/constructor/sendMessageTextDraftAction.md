---
title: "sendMessageTextDraftAction (конструктор)"
original: "https://core.telegram.org/constructor/sendMessageTextDraftAction"
section: ref
kind: constructor
layout: layout.njk
---

# sendMessageTextDraftAction

*Конструктор из схемы TL.*

> Used by bots to implement [live message streaming »](https://core.telegram.org/api/bots/ai#live-response-streaming).

## Определение TL

```
sendMessageTextDraftAction#376d975c random_id:long text:TextWithEntities = SendMessageAction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| random_id | [long](/type/long/) | Live draft ID: used by graphical clients to slightly change the rendering behavior, see [here »](https://core.telegram.org/api/bots/ai#live-response-streaming) for more info. See [here »](https://core.telegram.org/api/updates/#updatemessageid-updates) for more info on random ID deduplication and updateMessageID mapping. |
| text | [TextWithEntities](/type/TextWithEntities/) | The contents of the live draft. |

## Тип

[SendMessageAction](/type/SendMessageAction/)

## Related pages

#### [AI features for bots](https://core.telegram.org/api/bots/ai)

Telegram bots offer a number of features for AI chatbots.

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
