---
title: "account.getTheme"
original: "https://core.telegram.org/method/account.getTheme"
section: ref
kind: method
description: "Получить информацию о теме оформления"
layout: layout.njk
---

# account.getTheme

Получить информацию о теме оформления

```
theme#a00e67d6 flags:# creator:flags.0?true default:flags.1?true for_chat:flags.5?true id:long access_hash:long slug:string title:string document:flags.2?Document settings:flags.3?Vector<ThemeSettings> emoticon:flags.6?string installs_count:flags.4?int = Theme;
---functions---
account.getTheme#3a5869ec format:string theme:InputTheme = Theme;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>format</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Формат темы оформления — строка, определяющая движки оформления, поддерживаемые клиентом</td></tr><tr><td><strong>theme</strong></td><td style="text-align: center;"><a href="/type/InputTheme">InputTheme</a></td><td>Тема оформления</td></tr></tbody></table>

### Результат

[Theme](/type/Theme/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>THEME_FORMAT_INVALID</td><td>Указан недопустимый формат темы оформления.</td></tr><tr><td>400</td><td>THEME_INVALID</td><td>Указана недействительная тема оформления.</td></tr><tr><td>400</td><td>THEME_SLUG_INVALID</td><td>Указанный слаг темы недействителен.</td></tr></tbody></table>
