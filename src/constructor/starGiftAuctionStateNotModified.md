---
title: "starGiftAuctionStateNotModified"
original: "https://core.telegram.org/constructor/starGiftAuctionStateNotModified"
section: ref
kind: constructor
description: "Возвращается только методами аукциона (никогда в обновлениях), если переданное значение version совпадает со значением аукциона ».version на сервере, то есть информация об…"
layout: layout.njk
---

# starGiftAuctionStateNotModified

Возвращается только методами аукциона (никогда в обновлениях), если переданное значение `version` совпадает со значением [аукциона »](/api/auctions/).`version` на сервере, то есть информация об аукционе не изменилась по сравнению с локально закешированной версией.

```
starGiftAuctionStateNotModified#fe333952 = StarGiftAuctionState;
```

### Параметры

Этот конструктор не требует параметров.

### Тип

[StarGiftAuctionState](/type/StarGiftAuctionState/)

### Связанные страницы

#### [Аукционы коллекционных подарков](/api/auctions/)

Новые выпуски коллекционных подарков распространяются через аукционы за Stars, которые проходят в несколько раундов.
