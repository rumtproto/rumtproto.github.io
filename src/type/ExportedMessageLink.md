---
title: "ExportedMessageLink"
original: "https://core.telegram.org/type/ExportedMessageLink"
section: ref
kind: type
description: "HTTP-ссылка и данные для встраивания сообщения канала"
layout: layout.njk
---

# ExportedMessageLink

HTTP-ссылка и данные для встраивания сообщения канала

```
exportedMessageLink#5dab1af4 link:string html:string = ExportedMessageLink;

---functions---

channels.exportMessageLink#e63fadeb flags:# grouped:flags.0?true thread:flags.1?true channel:InputChannel id:int = ExportedMessageLink;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/exportedMessageLink">exportedMessageLink</a></td><td>Ссылка на сообщение в супергруппе или канале</td></tr></tbody></table>

### Методы

<table class="table"><thead><tr><th scope="col">Метод</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/method/channels.exportMessageLink">channels.exportMessageLink</a></td><td>Получить ссылку и данные для встраивания сообщения в <a href="/api/channel">канале или супергруппе</a></td></tr></tbody></table>
