---
title: "inputWallPaperNoFile"
original: "https://core.telegram.org/constructor/inputWallPaperNoFile"
section: ref
kind: constructor
description: "Обои без хеша доступа к файлу; используются, например, при удалении обоев (unsave=true) методом account.saveWallPaper, когда передаётся только идентификатор обоев."
layout: layout.njk
---

# inputWallPaperNoFile

[Обои](/api/wallpapers/) без хеша доступа к файлу; используются, например, при удалении обоев (`unsave=true`) методом [account.saveWallPaper](/method/account.saveWallPaper/), когда передаётся только идентификатор обоев.

```
inputWallPaperNoFile#967a462e id:long = InputWallPaper;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор обоев</td></tr></tbody></table>

### Тип

[InputWallPaper](/type/InputWallPaper/)

### Связанные страницы

#### [Обои чатов](/api/wallpapers/)

Приложения Telegram умеют создавать, публиковать и синхронизировать фоны чатов.

#### [account.saveWallPaper](/method/account.saveWallPaper/)

Установить или удалить [обои](/api/wallpapers/)
