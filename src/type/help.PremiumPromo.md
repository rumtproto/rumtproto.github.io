---
title: "help.PremiumPromo (тип)"
original: "https://core.telegram.org/type/help.PremiumPromo"
section: ref
kind: type
layout: layout.njk
---

# help.PremiumPromo

*Тип из схемы TL.*

> Telegram Premium promotion information

## Определение TL

```
help.premiumPromo#5334759c status_text:string status_entities:Vector<MessageEntity> video_sections:Vector<string> videos:Vector<Document> period_options:Vector<PremiumSubscriptionOption> users:Vector<User> = help.PremiumPromo;

---functions---

help.getPremiumPromo#b81b93d4 = help.PremiumPromo;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [help.premiumPromo](/constructor/help.premiumPromo/) | Telegram Premium promotion information Note that the video_sections+videos fields are a list of videos, and the corresponding premium feature identifiers. They're equivalent to a section => video dictionary, with keys from video_section and values from videos. The keys in video_sections correspond to a specific feature identifier, and the associated promotional video should be shown when the associated feature row is clicked. |

## Методы

| Method | Описание |
|---|---|
| [help.getPremiumPromo](/method/help.getPremiumPromo/) | Get Telegram Premium promotion information |
