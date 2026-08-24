---
title: "pageBlockTable"
original: "https://core.telegram.org/constructor/pageBlockTable"
section: ref
kind: constructor
description: "Таблица"
layout: layout.njk
---

# pageBlockTable

Таблица

```
pageBlockTable#bf4dea82 flags:# bordered:flags.0?true striped:flags.1?true title:RichText rows:Vector<PageTableRow> = PageBlock;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>bordered</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Есть ли у таблицы видимая рамка?</td></tr><tr><td><strong>striped</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Является ли таблица полосатой?</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/RichText">RichText</a></td><td>Название</td></tr><tr><td><strong>rows</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/PageTableRow">PageTableRow</a>&gt;</td><td>Строки таблицы</td></tr></tbody></table>

### Тип

[PageBlock](/type/PageBlock/)
