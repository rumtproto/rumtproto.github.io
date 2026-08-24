---
title: "account.createTheme"
original: "https://core.telegram.org/method/account.createTheme"
section: ref
kind: method
description: "Создать тему оформления"
layout: layout.njk
---

# account.createTheme

Создать тему оформления

```
theme#a00e67d6 flags:# creator:flags.0?true default:flags.1?true for_chat:flags.5?true id:long access_hash:long slug:string title:string document:flags.2?Document settings:flags.3?Vector<ThemeSettings> emoticon:flags.6?string installs_count:flags.4?int = Theme;
---functions---
account.createTheme#652e4400 flags:# slug:string title:string document:flags.2?InputDocument settings:flags.3?Vector<InputThemeSettings> = Theme;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>slug</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>[@term:slug] Уникальный идентификатор темы оформления, используемый для построения <a href="/api/links#theme-links">глубоких ссылок на тему оформления</a>; может быть пустым, чтобы идентификатор был сгенерирован случайным образом.</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Название темы оформления</td></tr><tr><td><strong>document</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/InputDocument">InputDocument</a></td><td>Файл темы оформления</td></tr><tr><td><strong>settings</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputThemeSettings">InputThemeSettings</a>&gt;</td><td>Параметры темы оформления; можно передать несколько значений для разных базовых тем (дневной/ночной режим и т. п.).</td></tr></tbody></table>

### Результат

[Theme](/type/Theme/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>THEME_MIME_INVALID</td><td>MIME-тип темы оформления недействителен.</td></tr><tr><td>400</td><td>THEME_TITLE_INVALID</td><td>Указанное название темы недействительно.</td></tr></tbody></table>

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.
