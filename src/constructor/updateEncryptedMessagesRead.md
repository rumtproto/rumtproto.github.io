---
title: "updateEncryptedMessagesRead"
original: "https://core.telegram.org/constructor/updateEncryptedMessagesRead"
section: ref
kind: constructor
description: "История переписки в зашифрованном чате была отмечена как прочитанная."
layout: layout.njk
---

# updateEncryptedMessagesRead

История переписки в зашифрованном чате была отмечена как прочитанная.

```
updateEncryptedMessagesRead#38fe25b7 chat_id:int max_date:int date:int = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>chat_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор чата</td></tr><tr><td><strong>max_date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Максимальное значение даты для прочитанных сообщений</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Время прочтения сообщений</td></tr></tbody></table>

### Тип

[Update](/type/Update/)
