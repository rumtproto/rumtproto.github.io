---
title: "messages.availableReactions"
original: "https://core.telegram.org/constructor/messages.availableReactions"
section: ref
kind: constructor
description: "Анимации и метаданные, связанные с реакциями на сообщения »"
layout: layout.njk
---

# messages.availableReactions

Анимации и метаданные, связанные с [реакциями на сообщения »](/api/reactions/)

```
messages.availableReactions#768e3aad hash:int reactions:Vector<AvailableReaction> = messages.AvailableReactions;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:hash] <a href="/api/offsets#hash-generation">Хеш выборки, используемый для кеширования; подробности здесь</a></td></tr><tr><td><strong>reactions</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/AvailableReaction">AvailableReaction</a>&gt;</td><td>Анимации и метаданные, связанные с <a href="/api/reactions">реакциями на сообщения »</a></td></tr></tbody></table>

### Тип

[messages.AvailableReactions](/type/messages.AvailableReactions/)

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [Реакции на сообщения](/api/reactions/)

Telegram позволяет пользователям реагировать на любое сообщение определёнными эмодзи, запуская симпатичные lottie-анимации.
