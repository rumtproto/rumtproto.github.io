---
title: "help.premiumPromo (конструктор)"
original: "https://core.telegram.org/constructor/help.premiumPromo"
section: ref
kind: constructor
layout: layout.njk
---

# help.premiumPromo

*Конструктор из схемы TL.*

> Telegram Premium promotion information
> Note that the `video_sections`+`videos` fields are a list of videos, and the corresponding premium feature identifiers.  
> They're equivalent to a section => video dictionary, with keys from `video_section` and values from `videos`.  
> The keys in `video_sections` correspond to a specific feature identifier, and the associated promotional video should be shown when the associated feature row is clicked.

## Определение TL

```
help.premiumPromo#5334759c status_text:string status_entities:Vector<MessageEntity> video_sections:Vector<string> videos:Vector<Document> period_options:Vector<PremiumSubscriptionOption> users:Vector<User> = help.PremiumPromo;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| status_text | [string](/type/string/) | Description of the current state of the user's Telegram Premium subscription |
| status_entities | [Vector](https://core.telegram.org/type/Vector%20t)<[MessageEntity](/type/MessageEntity/)> | [Message entities for styled text](https://core.telegram.org/api/entities) |
| video_sections | [Vector](https://core.telegram.org/type/Vector%20t)<[string](/type/string/)> | A list of [premium feature identifiers »](https://core.telegram.org/api/premium), associated to each video |
| videos | [Vector](https://core.telegram.org/type/Vector%20t)<[Document](/type/Document/)> | A list of videos |
| period_options | [Vector](https://core.telegram.org/type/Vector%20t)<[PremiumSubscriptionOption](/type/PremiumSubscriptionOption/)> | Telegram Premium subscription options |
| users | [Vector](https://core.telegram.org/type/Vector%20t)<[User](/type/User/)> | Related user information |

## Тип

[help.PremiumPromo](/type/help.PremiumPromo/)

## Related pages

#### [Styled text with message entities](https://core.telegram.org/api/entities)

How to create styled text with message entities

#### [Telegram Premium](https://core.telegram.org/api/premium)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.
