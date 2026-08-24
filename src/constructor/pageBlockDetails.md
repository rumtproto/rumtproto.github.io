---
title: "pageBlockDetails"
original: "https://core.telegram.org/constructor/pageBlockDetails"
section: ref
kind: constructor
description: "Сворачиваемый блок подробностей"
layout: layout.njk
---

# pageBlockDetails

Сворачиваемый блок подробностей

```
pageBlockDetails#76768bed flags:# open:flags.0?true blocks:Vector<PageBlock> title:RichText = PageBlock;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>open</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Раскрыт ли блок по умолчанию</td></tr><tr><td><strong>blocks</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/PageBlock">PageBlock</a>&gt;</td><td>Содержимое блока</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/RichText">RichText</a></td><td>Всегда видимый заголовок блока</td></tr></tbody></table>

### Тип

[PageBlock](/type/PageBlock/)
