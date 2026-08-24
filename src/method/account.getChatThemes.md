---
title: "account.getChatThemes"
original: "https://core.telegram.org/method/account.getChatThemes"
section: ref
kind: method
description: "Получить все доступные темы оформления чатов »."
layout: layout.njk
---

# account.getChatThemes

Получить все доступные [темы оформления чатов »](/api/themes/).

```
account.themesNotModified#f41eb622 = account.Themes;
account.themes#9a3d8c6d hash:long themes:Vector<Theme> = account.Themes;
---functions---
account.getChatThemes#d638de89 hash:long = account.Themes;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:hash] <a href="/api/offsets#hash-generation">Хеш выборки, используемый для кеширования; подробности здесь</a>.</td></tr></tbody></table>

### Результат

[account.Themes](/type/account.Themes/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [Темы оформления Telegram](/api/themes/)

Приложения Telegram умеют создавать, отправлять и синхронизировать темы оформления.
