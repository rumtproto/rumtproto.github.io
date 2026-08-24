---
title: "botMenuButton"
original: "https://core.telegram.org/constructor/botMenuButton"
section: ref
kind: constructor
description: "Кнопка меню бота, открывающая при нажатии веб-приложение."
layout: layout.njk
---

# botMenuButton

[Кнопка меню бота](/api/bots/menu/), открывающая при нажатии [веб-приложение](/api/bots/webapps/).

```
botMenuButton#c7b57ce6 text:string url:string = BotMenuButton;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Надпись, отображаемая на кнопке меню вместо «Menu»</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>URL <a href="/api/bots/webapps">веб-приложения</a>, которое нужно открыть при нажатии пользователем на кнопку</td></tr></tbody></table>

### Тип

[BotMenuButton](/type/BotMenuButton/)

### Связанные страницы

#### [Mini Apps в Telegram](/api/bots/webapps/)

Боты могут предлагать пользователям интерактивные веб-приложения на HTML5, полностью заменяющие любой сайт.

#### [Кнопка меню бота](/api/bots/menu/)

Боты могут выбирать поведение кнопки меню, отображаемой рядом с полем ввода текста.
