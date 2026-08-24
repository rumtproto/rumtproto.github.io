---
title: "updates.state"
original: "https://core.telegram.org/constructor/updates.state"
section: ref
kind: constructor
description: "Состояние обновлений."
layout: layout.njk
---

# updates.state

Состояние обновлений.

```
updates.state#a56c2a3e pts:int qts:int date:int seq:int unread_count:int = updates.State;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>pts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:pts] Количество событий, произошедших в текстовом поле</td></tr><tr><td><strong>qts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:qts] Позиция в последовательности обновлений в секретных чатах. Подробнее см. в статье о <a href="/api/end-to-end">секретных чатах</a></td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Дата состояния</td></tr><tr><td><strong>seq</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество отправленных обновлений</td></tr><tr><td><strong>unread_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Количество непрочитанных сообщений</td></tr></tbody></table>

### Тип

[updates.State](/type/updates.State/)

### Связанные страницы

#### [Сквозное шифрование, секретные чаты](/api/end-to-end/)

Новая возможность для обмена сообщениями со сквозным шифрованием.
