---
title: "help.peerColors"
original: "https://core.telegram.org/constructor/help.peerColors"
section: ref
kind: constructor
description: "Содержит информацию о нескольких цветовых палитрах »."
layout: layout.njk
---

# help.peerColors

Содержит информацию о нескольких [цветовых палитрах »](/api/colors/).

```
help.peerColors#f8ed08 hash:int colors:Vector<help.PeerColorOption> = help.PeerColors;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:hash] <a href="/api/offsets#hash-generation">Хеш выборки, используемый для кеширования; подробности здесь</a></td></tr><tr><td><strong>colors</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/help.PeerColorOption">help.PeerColorOption</a>&gt;</td><td>Доступные <a href="/api/colors">цветовые палитры</a>.</td></tr></tbody></table>

### Тип

[help.PeerColors](/type/help.PeerColors/)

### Связанные страницы

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [Акцентные цвета](/api/colors/)

Пользователи и каналы Telegram могут менять акцентный цвет и фоновый узор страницы своего профиля и своих сообщений!
