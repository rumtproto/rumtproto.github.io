---
title: "availableReaction"
original: "https://core.telegram.org/constructor/availableReaction"
section: ref
kind: constructor
description: "Анимации, связанные с реакцией на сообщение"
layout: layout.njk
---

# availableReaction

Анимации, связанные с реакцией на сообщение

```
availableReaction#c077ec01 flags:# inactive:flags.0?true premium:flags.2?true reaction:string title:string static_icon:Document appear_animation:Document select_animation:Document activate_animation:Document effect_animation:Document around_animation:flags.1?Document center_icon:flags.1?Document = AvailableReaction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>inactive</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если не установлено, реакцию можно добавлять к новым сообщениям и включать в чатах.</td></tr><tr><td><strong>premium</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Могут ли использовать эту реакцию только пользователи Telegram Premium</td></tr><tr><td><strong>reaction</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Эмодзи реакции</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Описание реакции</td></tr><tr><td><strong>static_icon</strong></td><td style="text-align: center;"><a href="/type/Document">Document</a></td><td>Статичный значок реакции</td></tr><tr><td><strong>appear_animation</strong></td><td style="text-align: center;"><a href="/type/Document">Document</a></td><td>Анимированный стикер, показываемый при открытии пользователем списка реакций</td></tr><tr><td><strong>select_animation</strong></td><td style="text-align: center;"><a href="/type/Document">Document</a></td><td>Анимированный стикер, показываемый при наведении курсора на реакцию</td></tr><tr><td><strong>activate_animation</strong></td><td style="text-align: center;"><a href="/type/Document">Document</a></td><td>Анимированный стикер, показываемый при выборе и активации реакции</td></tr><tr><td><strong>effect_animation</strong></td><td style="text-align: center;"><a href="/type/Document">Document</a></td><td>Фоновый эффект (тоже анимированный стикер), проигрываемый под <code>activate_animation</code> при выборе и активации реакции</td></tr><tr><td><strong>around_animation</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/Document">Document</a></td><td>Анимация, проигрываемая вокруг кнопки при нажатии на существующую реакцию (проигрывается вместе с <code>center_icon</code>).</td></tr><tr><td><strong>center_icon</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/Document">Document</a></td><td>Анимация эмодзи внутри кнопки при нажатии на существующую реакцию (проигрывается вместе с <code>around_animation</code>).</td></tr></tbody></table>

### Тип

[AvailableReaction](/type/AvailableReaction/)
