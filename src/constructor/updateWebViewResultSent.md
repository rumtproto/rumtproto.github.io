---
title: "updateWebViewResultSent"
original: "https://core.telegram.org/constructor/updateWebViewResultSent"
section: ref
kind: constructor
description: "Сообщает боту, что веб-представление было закрыто и от имени пользователя было отправлено инлайн-сообщение с помощью messages.sendWebViewResultMessage"
layout: layout.njk
---

# updateWebViewResultSent

Сообщает боту, что веб-представление было закрыто и от имени пользователя было отправлено инлайн-сообщение с помощью [messages.sendWebViewResultMessage](/method/messages.sendWebViewResultMessage/)

```
updateWebViewResultSent#1592b79d query_id:long = Update;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>query_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор взаимодействия с веб-приложением</td></tr></tbody></table>

### Тип

[Update](/type/Update/)

### Связанные страницы

#### [messages.sendWebViewResultMessage](/method/messages.sendWebViewResultMessage/)

Завершить взаимодействие с веб-представлением, начатое через [messages.requestWebView](/method/messages.requestWebView/), отправив указанное сообщение в чат от имени пользователя.
