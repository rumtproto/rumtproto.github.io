---
title: "inputStickerSetShortName"
original: "https://core.telegram.org/constructor/inputStickerSetShortName"
section: ref
kind: constructor
description: "Набор стикеров по краткому имени, из глубокой ссылки на набор стикеров »"
layout: layout.njk
---

# inputStickerSetShortName

Набор стикеров по краткому имени, из [глубокой ссылки на набор стикеров »](/api/links/#stickerset-links)

#### [Актуальная TL-схема сквозного шифрования](/schema/end-to-end/)

```
===45===
inputStickerSetShortName#861cc8a0 short_name:string = InputStickerSet;
```

#### Схема API

```
inputStickerSetShortName#861cc8a0 short_name:string = InputStickerSet;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>short_name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>[@term:short_name] Краткое имя из <a href="/api/links#stickerset-links">глубокой ссылки на набор стикеров »</a></td></tr></tbody></table>

### Тип

[InputStickerSet](/type/InputStickerSet/)

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.
