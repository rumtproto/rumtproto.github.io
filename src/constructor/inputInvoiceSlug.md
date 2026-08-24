---
title: "inputInvoiceSlug"
original: "https://core.telegram.org/constructor/inputInvoiceSlug"
section: ref
kind: constructor
description: "Идентификатор счёта (slug), взятый из глубокой ссылки на счёт или из параметра конфигурации приложения premium_invoice_slug »"
layout: layout.njk
---

# inputInvoiceSlug

Идентификатор счёта (slug), взятый из [глубокой ссылки на счёт](/api/links/#invoice-links) или из [параметра конфигурации приложения `premium_invoice_slug` »](/api/config/#premium-invoice-slug)

```
inputInvoiceSlug#c326caef slug:string = InputInvoice;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>slug</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>[@term:slug] Идентификатор счёта (slug)</td></tr></tbody></table>

### Тип

[InputInvoice](/type/InputInvoice/)

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.
