---
title: "decryptedMessageMediaExternalDocument"
original: "https://core.telegram.org/constructor/decryptedMessageMediaExternalDocument"
section: ref
kind: constructor
description: "Документ не из сквозного шифрования, пересланный из несекретного чата"
layout: layout.njk
---

# decryptedMessageMediaExternalDocument

Документ не из сквозного шифрования, пересланный из несекретного чата

```
===23===
decryptedMessageMediaExternalDocument#fa95b0dd id:long access_hash:long date:int mime_type:string size:int thumb:PhotoSize dc_id:int attributes:Vector<DocumentAttribute> = DecryptedMessageMedia;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор документа</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:access_hash] хеш доступа</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Дата</td></tr><tr><td><strong>mime_type</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>MIME-тип</td></tr><tr><td><strong>size</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Размер</td></tr><tr><td><strong>thumb</strong></td><td style="text-align: center;"><a href="/type/PhotoSize">PhotoSize</a></td><td>Миниатюра</td></tr><tr><td><strong>dc_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>DC ID</td></tr><tr><td><strong>attributes</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/DocumentAttribute">DocumentAttribute</a>&gt;</td><td>Атрибуты для типов медиафайлов</td></tr></tbody></table>

### Тип

[DecryptedMessageMedia](/type/DecryptedMessageMedia/)
