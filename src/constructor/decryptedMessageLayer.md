---
title: "decryptedMessageLayer"
original: "https://core.telegram.org/constructor/decryptedMessageLayer"
section: ref
kind: constructor
description: "Задаёт номер слоя для содержимого зашифрованного сообщения."
layout: layout.njk
---

# decryptedMessageLayer

Задаёт номер слоя для содержимого зашифрованного сообщения.

```
===17===
decryptedMessageLayer#1be31789 random_bytes:bytes layer:int in_seq_no:int out_seq_no:int message:DecryptedMessage = DecryptedMessageLayer;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>random_bytes</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Набор случайных байтов, препятствующий распознаванию содержимого коротких зашифрованных сообщений.<br>Клиенты обязаны проверять, что в каждом сообщении содержится не менее 15 случайных байтов. Сообщения, в которых случайных байтов меньше 15, должны игнорироваться.<br>Параметр перенесён сюда из <a href="/constructor/decryptedMessage">decryptedMessage</a> в слое 17.</td></tr><tr><td><strong>layer</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:layer] Номер слоя. Минимальное значение — <strong>17</strong> (слой, в котором был добавлен конструктор).</td></tr><tr><td><strong>in_seq_no</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Удвоенное количество сообщений во входящих отправителя (включая удалённые и сервисные сообщения), увеличенное на 1, если текущий пользователь не был создателем чата<br>Параметр добавлен в слое 17.</td></tr><tr><td><strong>out_seq_no</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Удвоенное количество сообщений во входящих получателя (включая удалённые и сервисные сообщения), увеличенное на 1, если текущий пользователь был создателем чата<br>Параметр добавлен в слое 17.</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/DecryptedMessage">DecryptedMessage</a></td><td>Само содержимое сообщения</td></tr></tbody></table>

### Тип

[DecryptedMessageLayer](/type/DecryptedMessageLayer/)

### Связанные страницы

#### [decryptedMessage](/constructor/decryptedMessage/)

Содержимое зашифрованного сообщения.
