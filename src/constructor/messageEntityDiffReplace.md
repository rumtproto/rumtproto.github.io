---
title: "messageEntityDiffReplace"
original: "https://core.telegram.org/constructor/messageEntityDiffReplace"
section: ref
kind: constructor
description: "Представляет замену в diff, отображайте её следующим образом:"
layout: layout.njk
---

# messageEntityDiffReplace

Представляет замену в diff, отображайте её следующим образом:

-   Вставьте `old_text` в текст по смещению `offset`, подчеркните его и окрасьте в красный цвет: обратите внимание, что эта вставка не влияет на смещения следующих за ней сущностей оформления.
-   подчеркните участок, ограниченный `offset` и `limit`, и окрасьте его в зелёный цвет.

Подробнее об отрисовке diff-сущностей см. [здесь »](/api/entities/#diff-entities).

```
Constructor schema is available as of layer 224. Switch »
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Смещение сущности оформления в сообщении (в <a href="/api/entities#entity-length">кодовых единицах UTF-16</a>)</td></tr><tr><td><strong>length</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Длина сущности оформления в сообщении (в <a href="/api/entities#entity-length">кодовых единицах UTF-16</a>)</td></tr><tr><td><strong>old_text</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Удалённый фрагмент текста.</td></tr></tbody></table>

### Тип

[MessageEntity](/type/MessageEntity/)

### Связанные страницы

#### [Оформленный текст и сущности оформления](/api/entities/)

Как оформлять текст с помощью сущностей оформления
