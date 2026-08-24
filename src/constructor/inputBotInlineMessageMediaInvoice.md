---
title: "inputBotInlineMessageMediaInvoice"
original: "https://core.telegram.org/constructor/inputBotInlineMessageMediaInvoice"
section: ref
kind: constructor
description: "Счёт"
layout: layout.njk
---

# inputBotInlineMessageMediaInvoice

Счёт

```
inputBotInlineMessageMediaInvoice#d7e78225 flags:# title:string description:string photo:flags.0?InputWebDocument invoice:Invoice payload:bytes provider:string provider_data:DataJSON reply_markup:flags.2?ReplyMarkup = InputBotInlineMessage;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Название товара, 1–32 символа</td></tr><tr><td><strong>description</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Описание товара, 1–255 символов</td></tr><tr><td><strong>photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/InputWebDocument">InputWebDocument</a></td><td>Изображение счёта</td></tr><tr><td><strong>invoice</strong></td><td style="text-align: center;"><a href="/type/Invoice">Invoice</a></td><td>Счёт</td></tr><tr><td><strong>payload</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Полезная нагрузка счёта, заданная ботом, 1–128 байт. Она не показывается пользователю, используйте её для своих внутренних процессов.</td></tr><tr><td><strong>provider</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Токен платёжного провайдера, полученный через <a href="https://t.me/botfather">Botfather</a></td></tr><tr><td><strong>provider_data</strong></td><td style="text-align: center;"><a href="/type/DataJSON">DataJSON</a></td><td>Сериализованный в JSON объект с данными о счёте, которые будут переданы платёжному провайдеру. Подробное описание обязательных полей должен предоставить платёжный провайдер.</td></tr><tr><td><strong>reply_markup</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/ReplyMarkup">ReplyMarkup</a></td><td>Инлайн-клавиатура</td></tr></tbody></table>

### Тип

[InputBotInlineMessage](/type/InputBotInlineMessage/)
