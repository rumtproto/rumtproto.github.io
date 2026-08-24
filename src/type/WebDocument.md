---
title: "WebDocument"
original: "https://core.telegram.org/type/WebDocument"
section: ref
kind: type
description: "Удалённый документ"
layout: layout.njk
---

# WebDocument

Удалённый документ

```
webDocument#1c570ed1 url:string access_hash:long size:int mime_type:string attributes:Vector<DocumentAttribute> = WebDocument;
webDocumentNoProxy#f9c8bcc6 url:string size:int mime_type:string attributes:Vector<DocumentAttribute> = WebDocument;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/webDocument">webDocument</a></td><td>Удалённый документ</td></tr><tr><td><a href="/constructor/webDocumentNoProxy">webDocumentNoProxy</a></td><td>Удалённый документ, который можно скачать без <a href="/api/files">проксирования через telegram</a></td></tr></tbody></table>
