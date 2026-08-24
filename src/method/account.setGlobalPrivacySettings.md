---
title: "account.setGlobalPrivacySettings"
original: "https://core.telegram.org/method/account.setGlobalPrivacySettings"
section: ref
kind: method
description: "Задать глобальные настройки приватности"
layout: layout.njk
---

# account.setGlobalPrivacySettings

Задать глобальные настройки приватности

```
globalPrivacySettings#fe41b34f flags:# archive_and_mute_new_noncontact_peers:flags.0?true keep_archived_unmuted:flags.1?true keep_archived_folders:flags.2?true hide_read_marks:flags.3?true new_noncontact_peers_require_premium:flags.4?true display_gifts_button:flags.7?true noncontact_peers_paid_stars:flags.5?long disallowed_gifts:flags.6?DisallowedGiftsSettings = GlobalPrivacySettings;
---functions---
account.setGlobalPrivacySettings#1edaaac2 settings:GlobalPrivacySettings = GlobalPrivacySettings;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>settings</strong></td><td style="text-align: center;"><a href="/type/GlobalPrivacySettings">GlobalPrivacySettings</a></td><td>Глобальные настройки приватности</td></tr></tbody></table>

### Результат

[GlobalPrivacySettings](/type/GlobalPrivacySettings/)

### Этот метод доступен только пользователям

### Этот метод можно вызывать через [бизнес-подключение »](/api/bots/connected-business-bots/)

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>AUTOARCHIVE_NOT_AVAILABLE</td><td>Настройка автоархивации сейчас недоступна: перед вызовом этого метода проверьте значение <a href="/api/config#client-configuration">поля autoarchive_setting_available в конфигурации клиента&nbsp;»</a>.</td></tr><tr><td>403</td><td>BOT_ACCESS_FORBIDDEN</td><td>Указанный метод <em>можно</em> использовать через <a href="/api/bots/connected-business-bots">бизнес-подключение</a> для некоторых операций, но в данном запросе была предпринята операция, недопустимая через бизнес-подключение.</td></tr><tr><td>400</td><td>BUSINESS_CONNECTION_INVALID</td><td>Значение <code>connection_id</code>, переданное в объемлющем вызове <a href="/api/business">invokeWithBusinessConnection</a>, недействительно.</td></tr><tr><td>403</td><td>PREMIUM_ACCOUNT_REQUIRED</td><td>Для выполнения этого действия требуется аккаунт Premium.</td></tr></tbody></table>

### Связанные страницы

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.

#### [Подключённые бизнес-боты](/api/bots/connected-business-bots/)

Пользователи могут подключать ботов Telegram, которые будут обрабатывать сообщения и отвечать на них от имени пользователя. Это позволяет легко встроить любые уже существующие инструменты и рабочие процессы или добавить ИИ-помощников, которые ведут их чаты.

#### [Telegram Business](/api/business/)

Пользователи могут превратить свою учётную запись Telegram в бизнес-аккаунт и получить доступ к возможностям Telegram Business: часам работы, местоположению, быстрым ответам, автоматическим сообщениям, настраиваемым стартовым страницам, поддержке чат-ботов и не только.
