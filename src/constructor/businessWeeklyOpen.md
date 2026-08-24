---
title: "businessWeeklyOpen"
original: "https://core.telegram.org/constructor/businessWeeklyOpen"
section: ref
kind: constructor
description: "Интервал времени, задающий часы работы компании."
layout: layout.njk
---

# businessWeeklyOpen

Интервал времени, задающий часы работы компании.

Обратите внимание, что указанные пользователем часы работы необходимо соответствующим образом проверить и преобразовать перед их отправкой на сервер, как описано [здесь »](/api/business/#opening-hours).

```
businessWeeklyOpen#120b1ab9 start_minute:int end_minute:int = BusinessWeeklyOpen;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>start_minute</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Минута начала в минутах недели, от <code>0</code> до <code>7*24*60</code> включительно.</td></tr><tr><td><strong>end_minute</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Минута окончания в минутах недели, от <code>1</code> до <code>8*24*60</code> включительно (<code>8</code>, а не <code>7</code>, поскольку это позволяет задавать интервалы, которые, например, начинаются в <code>Sunday 21:00</code> и заканчиваются в <code>Monday 04:00</code> (от <code>6*24*60+21*60</code> до <code>7*24*60+4*60</code>), не передавая недопустимое значение <code>end_minute &lt; start_minute</code>). Подробнее см. <a href="/api/business#opening-hours">здесь »</a>.</td></tr></tbody></table>

### Тип

[BusinessWeeklyOpen](/type/BusinessWeeklyOpen/)

### Связанные страницы

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.
