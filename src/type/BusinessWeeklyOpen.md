---
title: "BusinessWeeklyOpen"
original: "https://core.telegram.org/type/BusinessWeeklyOpen"
section: ref
kind: type
description: "Интервал времени, задающий часы работы Telegram Business."
layout: layout.njk
---

# BusinessWeeklyOpen

Интервал времени, задающий часы работы [Telegram Business](/api/business/#opening-hours).

```
businessWeeklyOpen#120b1ab9 start_minute:int end_minute:int = BusinessWeeklyOpen;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/businessWeeklyOpen">businessWeeklyOpen</a></td><td>Интервал времени, задающий часы работы компании.<br><br>Обратите внимание, что указанные пользователем часы работы необходимо соответствующим образом проверить и преобразовать перед отправкой на сервер, как описано <a href="/api/business#opening-hours">здесь »</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.
