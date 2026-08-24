---
title: "updatesTooLong"
original: "https://core.telegram.org/constructor/updatesTooLong"
section: ref
kind: constructor
description: "Количество обновлений в очереди общего ящика сообщений слишком велико, чтобы доставить их пассивно через сокет; вызовите updates.getDifference, чтобы получить разницу, как описано…"
layout: layout.njk
---

# updatesTooLong

Количество обновлений в очереди общего ящика сообщений слишком велико, чтобы доставить их пассивно через сокет; вызовите [updates.getDifference](/method/updates.getDifference/), чтобы получить разницу, как описано в [документации »](/api/updates/).

**Не** обязательно означает, что [достигнут предел размера ящика сообщений](/api/updates/#recovering-gaps-for-very-old-messages); это лишь означает, что число обновлений в очереди ящика сообщений слишком велико, чтобы доставить их пассивно через сокет.

```
updatesTooLong#e317af7e = Updates;
```

### Параметры

Этот конструктор не требует параметров.

### Тип

[Updates](/type/Updates/)

### Связанные страницы

#### [updates.getDifference](/method/updates.getDifference/)

Получить новые [обновления](/api/updates/).

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.
