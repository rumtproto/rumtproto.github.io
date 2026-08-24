---
title: "help.peerColorProfileSet"
original: "https://core.telegram.org/constructor/help.peerColorProfileSet"
section: ref
kind: constructor
description: "Представляет цветовую палитру, которую можно использовать на страницах профиля »."
layout: layout.njk
---

# help.peerColorProfileSet

Представляет [цветовую палитру, которую можно использовать на страницах профиля »](/api/colors/).

```
help.peerColorProfileSet#767d61eb palette_colors:Vector<int> bg_colors:Vector<int> story_colors:Vector<int> = help.PeerColorSet;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>palette_colors</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>Список из 1–2 цветов в формате RGB, отображаемых в настройках цветовой палитры для описания текущей палитры.</td></tr><tr><td><strong>bg_colors</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>Список из 1–2 цветов в формате RGB, описывающих цвета, по которым формируется фон, используемый на странице профиля.</td></tr><tr><td><strong>story_colors</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>Список из 2 цветов в формате RGB, описывающих цвета градиента, который используется для индикатора непрочитанной активной истории вокруг фотографии профиля.</td></tr></tbody></table>

### Тип

[help.PeerColorSet](/type/help.PeerColorSet/)

### Связанные страницы

#### [Акцентные цвета](/api/colors/)

Пользователи и каналы Telegram могут менять акцентный цвет и фоновый узор страницы своего профиля и своих сообщений!
