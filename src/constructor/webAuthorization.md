---
title: "webAuthorization"
original: "https://core.telegram.org/constructor/webAuthorization"
section: ref
kind: constructor
description: "Представляет бота, авторизованного через виджет входа Telegram"
layout: layout.njk
---

# webAuthorization

Представляет бота, авторизованного через [виджет входа Telegram](https://core.telegram.org/widgets/login)

```
webAuthorization#a6f8f452 hash:long bot_id:long domain:string browser:string platform:string date_created:int date_active:int ip:string region:string = WebAuthorization;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:hash] Хеш авторизации</td></tr><tr><td><strong>bot_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор бота</td></tr><tr><td><strong>domain</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Доменное имя сайта, на котором пользователь выполнил вход.</td></tr><tr><td><strong>browser</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>User-agent браузера</td></tr><tr><td><strong>platform</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Платформа</td></tr><tr><td><strong>date_created</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Когда была создана веб-сессия</td></tr><tr><td><strong>date_active</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Когда веб-сессия была активна в последний раз</td></tr><tr><td><strong>ip</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>IP-адрес</td></tr><tr><td><strong>region</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Регион, определённый по IP-адресу</td></tr></tbody></table>

### Тип

[WebAuthorization](/type/WebAuthorization/)

### Связанные страницы

#### [Виджет входа через Telegram](https://core.telegram.org/widgets/login)
