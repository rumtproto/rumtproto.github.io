---
title: "help.getPeerProfileColors"
original: "https://core.telegram.org/method/help.getPeerProfileColors"
section: ref
kind: method
description: "Получить набор палитр акцентных цветов », которые можно использовать для фона страницы профиля."
layout: layout.njk
---

# help.getPeerProfileColors

Получить набор [палитр акцентных цветов »](/api/colors/), которые можно использовать для фона страницы профиля.

```
help.peerColorsNotModified#2ba1f5ce = help.PeerColors;
help.peerColors#f8ed08 hash:int colors:Vector<help.PeerColorOption> = help.PeerColors;
---functions---
help.getPeerProfileColors#abcfa9fd hash:int = help.PeerColors;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:hash] <a href="/api/offsets#hash-generation">Хеш выборки, используемый для кеширования; подробности здесь</a>.</td></tr></tbody></table>

### Результат

[help.PeerColors](/type/help.PeerColors/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [Акцентные цвета](/api/colors/)

Пользователи и каналы Telegram могут менять акцентный цвет и фоновый узор страницы своего профиля и своих сообщений!
