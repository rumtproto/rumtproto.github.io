---
title: "messageEntityDiffInsert"
original: "https://core.telegram.org/constructor/messageEntityDiffInsert"
section: ref
kind: constructor
description: "Представляет добавление в diff: отобразите его, просто подчеркнув указанный фрагмент и окрасив его в зелёный цвет; подробнее об отображении сущностей diff см. здесь »."
layout: layout.njk
---

# messageEntityDiffInsert

Представляет добавление в diff: отобразите его, просто подчеркнув указанный фрагмент и окрасив его в зелёный цвет; подробнее об отображении сущностей diff см. [здесь »](/api/entities/#diff-entities).

```
Constructor schema is available as of layer 224. Switch »
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Смещение сущности оформления в сообщении (в <a href="/api/entities#entity-length">кодовых единицах UTF-16</a>)</td></tr><tr><td><strong>length</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Длина сущности оформления в сообщении (в <a href="/api/entities#entity-length">кодовых единицах UTF-16</a>)</td></tr></tbody></table>

### Тип

[MessageEntity](/type/MessageEntity/)

### Связанные страницы

#### [Оформленный текст и сущности оформления](/api/entities/)

Как оформлять текст с помощью сущностей оформления
