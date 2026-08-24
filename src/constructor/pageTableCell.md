---
title: "pageTableCell"
original: "https://core.telegram.org/constructor/pageTableCell"
section: ref
kind: constructor
description: "Ячейка таблицы"
layout: layout.njk
---

# pageTableCell

Ячейка таблицы

```
pageTableCell#34566b6a flags:# header:flags.0?true align_center:flags.3?true align_right:flags.4?true valign_middle:flags.5?true valign_bottom:flags.6?true text:flags.7?RichText colspan:flags.1?int rowspan:flags.2?int = PageTableCell;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>header</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Является ли этот элемент частью заголовка столбца</td></tr><tr><td><strong>align_center</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Блок, выровненный по центру по горизонтали</td></tr><tr><td><strong>align_right</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/constructor/true">true</a></td><td>Блок с выравниванием по правому краю</td></tr><tr><td><strong>valign_middle</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/constructor/true">true</a></td><td>Блок, выровненный по вертикали по центру</td></tr><tr><td><strong>valign_bottom</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/constructor/true">true</a></td><td>Блок, выровненный по нижнему краю</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/type/RichText">RichText</a></td><td>Содержимое</td></tr><tr><td><strong>colspan</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>На сколько столбцов должна распространяться эта ячейка</td></tr><tr><td><strong>rowspan</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/int">int</a></td><td>На сколько строк должна распространяться эта ячейка</td></tr></tbody></table>

### Тип

[PageTableCell](/type/PageTableCell/)
