---
title: "stickers.suggestShortName"
original: "https://core.telegram.org/method/stickers.suggestShortName"
section: ref
kind: method
description: "Предлагает краткое имя для заданного названия стикерпака"
layout: layout.njk
---

# stickers.suggestShortName

Предлагает краткое имя для заданного названия стикерпака

```
stickers.suggestedShortName#85fea03f short_name:string = stickers.SuggestedShortName;
---functions---
stickers.suggestShortName#4dafc503 title:string = stickers.SuggestedShortName;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Название набора стикеров</td></tr></tbody></table>

### Результат

[stickers.SuggestedShortName](/type/stickers.SuggestedShortName/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>TITLE_INVALID</td><td>Указанное название набора стикеров недействительно.</td></tr></tbody></table>
