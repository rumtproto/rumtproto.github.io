---
title: "inputInvoiceMessage"
original: "https://core.telegram.org/constructor/inputInvoiceMessage"
section: ref
kind: constructor
description: "Счёт, содержащийся в сообщении messageMediaInvoice или в платном медиа »."
layout: layout.njk
---

# inputInvoiceMessage

Счёт, содержащийся в сообщении [messageMediaInvoice](/constructor/messageMediaInvoice/) или в [платном медиа »](/api/paid-media/).

```
inputInvoiceMessage#c5b56859 peer:InputPeer msg_id:int = InputInvoice;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Чат, в который были отправлены счёт или платные медиафайлы</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:msg_id] Идентификатор сообщения</td></tr></tbody></table>

### Тип

[InputInvoice](/type/InputInvoice/)

### Связанные страницы

#### [messageMediaInvoice](/constructor/messageMediaInvoice/)

Счёт

#### [Платные медиа](/api/paid-media/)

Авторы контента могут принимать Stars, публикуя в своих каналах платные фотографии и видео. Подписчики смогут просмотреть такие посты, только заплатив автору за их разблокировку.
