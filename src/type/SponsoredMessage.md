---
title: "SponsoredMessage (тип)"
original: "https://core.telegram.org/type/SponsoredMessage"
section: ref
kind: type
layout: layout.njk
---

# SponsoredMessage

*Тип из схемы TL.*

> A sponsored message

## Определение TL

```
sponsoredMessage#7dbf8673 flags:# recommended:flags.5?true can_report:flags.12?true random_id:bytes url:string title:string message:string entities:flags.1?Vector<MessageEntity> photo:flags.6?Photo media:flags.14?MessageMedia color:flags.13?PeerColor button_text:string sponsor_info:flags.7?string additional_info:flags.8?string min_display_duration:flags.15?int max_display_duration:flags.15?int = SponsoredMessage;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [sponsoredMessage](/constructor/sponsoredMessage/) | A [sponsored message](https://core.telegram.org/api/sponsored-messages). |
