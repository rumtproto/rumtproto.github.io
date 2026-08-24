---
title: "updateBotStopped"
original: "https://core.telegram.org/constructor/updateBotStopped"
section: ref
kind: constructor
description: "Бот был остановлен или запущен заново."
layout: layout.njk
---

# updateBotStopped

Бот был остановлен или запущен заново.

```
updateBotStopped#c4870a49 user_id:long date:int stopped:Bool qts:int = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор пользователя</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Когда произошло это действие</td></tr><tr><td><strong>stopped</strong></td><td style="text-align: center;"><a href="/type/Bool">Bool</a></td><td>Был ли бот остановлен или запущен</td></tr><tr><td><strong>qts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:qts] Новое значение <strong>qts</strong>, подробнее см. <a href="/api/updates">обновления »</a>.</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.
