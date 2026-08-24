---
title: "help.PeerColors"
original: "https://core.telegram.org/type/help.PeerColors"
section: ref
kind: type
description: "Содержит информацию о нескольких цветовых палитрах »."
layout: layout.njk
---

# Help.PeerColors

Содержит информацию о нескольких [цветовых палитрах »](/api/colors/).

```
help.peerColorsNotModified#2ba1f5ce = help.PeerColors;
help.peerColors#f8ed08 hash:int colors:Vector<help.PeerColorOption> = help.PeerColors;

---functions---

help.getPeerColors#da80f42f hash:int = help.PeerColors;
help.getPeerProfileColors#abcfa9fd hash:int = help.PeerColors;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/help.peerColorsNotModified">help.peerColorsNotModified</a></td><td>Список цветовых палитр не изменился.</td></tr><tr><td><a href="/constructor/help.peerColors">help.peerColors</a></td><td>Содержит информацию о нескольких <a href="/api/colors">цветовых палитрах »</a>.</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/help.getPeerColors">help.getPeerColors</a></td><td>Получить набор <a href="/api/colors">палитр акцентных цветов »</a>, которые можно использовать для акцентов в сообщениях.</td></tr><tr><td><a href="/method/help.getPeerProfileColors">help.getPeerProfileColors</a></td><td>Получить набор <a href="/api/colors">палитр акцентных цветов »</a>, которые можно использовать для фона страницы профиля.</td></tr></tbody></table>

### Связанные страницы

#### [Акцентные цвета](/api/colors/)

Пользователи и каналы Telegram могут менять акцентный цвет и фоновый узор страницы своего профиля и своих сообщений!
