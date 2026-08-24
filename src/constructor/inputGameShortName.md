---
title: "inputGameShortName"
original: "https://core.telegram.org/constructor/inputGameShortName"
section: ref
kind: constructor
description: "Игра по краткому имени"
layout: layout.njk
---

# inputGameShortName

Игра по краткому имени

```
inputGameShortName#c331e80a bot_id:InputUser short_name:string = InputGame;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>bot_id</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Бот, предоставляющий игру</td></tr><tr><td><strong>short_name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>[@term:short_name] Краткое имя игры, обычно получаемое из <a href="/api/links#game-links">ссылки на игру »</a></td></tr></tbody></table>

### Тип

[InputGame](/type/InputGame/)

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.
