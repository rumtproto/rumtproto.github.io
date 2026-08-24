---
title: "langpack.getStrings"
original: "https://core.telegram.org/method/langpack.getStrings"
section: ref
kind: method
description: "Получить строки языкового пакета"
layout: layout.njk
---

# langpack.getStrings

Получить строки языкового пакета

```
---functions---
langpack.getStrings#efea3803 lang_pack:string lang_code:string keys:Vector<string> = Vector<LangPackString>;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>lang_pack</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Идентификатор платформы (например, <code>android</code>, <code>tdesktop</code> и т. п.).</td></tr><tr><td><strong>lang_code</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Либо код языка по ISO 639-1, либо название языкового пакета, полученное из <a href="/api/links#language-pack-links">ссылки на языковой пакет</a>.</td></tr><tr><td><strong>keys</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/string">string</a>&gt;</td><td>Строки, которые нужно получить</td></tr></tbody></table>

### Результат

[Vector](https://core.telegram.org/type/Vector%20t)<[LangPackString](/type/LangPackString/)\>

### Этот метод доступен только пользователям

### Этот метод можно вызывать по [неавторизованному соединению »](/api/auth/)

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>LANG_CODE_NOT_SUPPORTED</td><td>Указанный код языка не поддерживается.</td></tr><tr><td>400</td><td>LANG_PACK_INVALID</td><td>Указанный языковой пакет недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.
