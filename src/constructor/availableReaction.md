---
title: "availableReaction (конструктор)"
original: "https://core.telegram.org/constructor/availableReaction"
section: ref
kind: constructor
layout: layout.njk
---

# availableReaction

*Конструктор из схемы TL.*

> Animations associated with a message reaction

## Определение TL

```
availableReaction#c077ec01 flags:# inactive:flags.0?true premium:flags.2?true reaction:string title:string static_icon:Document appear_animation:Document select_animation:Document activate_animation:Document effect_animation:Document around_animation:flags.1?Document center_icon:flags.1?Document = AvailableReaction;
```

## Параметры

| Имя | Тип | Описание |
|---|---|---|
| flags | [#](https://core.telegram.org/type/%23) | Flags, see [TL conditional fields](https://core.telegram.org/mtproto/TL-combinators#conditional-fields) |
| inactive | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).0?[true](/constructor/true/) | If not set, the reaction can be added to new messages and enabled in chats. |
| premium | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).2?[true](/constructor/true/) | Whether this reaction can only be used by Telegram Premium users |
| reaction | [string](/type/string/) | Reaction emoji |
| title | [string](/type/string/) | Reaction description |
| static_icon | [Document](/type/Document/) | Static icon for the reaction |
| appear_animation | [Document](/type/Document/) | The animated sticker to show when the user opens the reaction dropdown |
| select_animation | [Document](/type/Document/) | The animated sticker to show when the user hovers over the reaction |
| activate_animation | [Document](/type/Document/) | The animated sticker to show when the reaction is chosen and activated |
| effect_animation | [Document](/type/Document/) | The background effect (still an animated sticker) to play under the activate_animation, when the reaction is chosen and activated |
| around_animation | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Document](/type/Document/) | The animation that plays around the button when you press an existing reaction (played together with center_icon). |
| center_icon | [flags](https://core.telegram.org/mtproto/TL-combinators#conditional-fields).1?[Document](/type/Document/) | The animation of the emoji inside the button when you press an existing reaction (played together with around_animation). |

## Тип

[AvailableReaction](/type/AvailableReaction/)
