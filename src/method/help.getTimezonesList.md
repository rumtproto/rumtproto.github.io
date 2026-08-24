---
title: "help.getTimezonesList"
original: "https://core.telegram.org/method/help.getTimezonesList"
section: ref
kind: method
description: "Возвращает сведения о часовых поясах, которые могут использоваться в других частях API — например, для указания часов работы Telegram Business »."
layout: layout.njk
---

# help.getTimezonesList

Возвращает сведения о часовых поясах, которые могут использоваться в других частях API — например, для указания [часов работы Telegram Business »](/api/business/#opening-hours).

```
help.timezonesListNotModified#970708cc = help.TimezonesList;
help.timezonesList#7b74ed71 timezones:Vector<Timezone> hash:int = help.TimezonesList;
---functions---
help.getTimezonesList#49b30240 hash:int = help.TimezonesList;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:hash] <a href="/api/offsets#hash-generation">Хеш выборки, используемый для кеширования; подробности здесь</a>.</td></tr></tbody></table>

### Результат

[help.TimezonesList](/type/help.TimezonesList/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.
