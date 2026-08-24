---
title: "phoneCall"
original: "https://core.telegram.org/constructor/phoneCall"
section: ref
kind: constructor
description: "Телефонный звонок, подробнее о полной последовательности действий см. здесь »."
layout: layout.njk
---

# phoneCall

Телефонный звонок, подробнее о полной последовательности действий см. [здесь »](/api/calls/).

```
phoneCall#30535af5 flags:# p2p_allowed:flags.5?true video:flags.6?true conference_supported:flags.8?true id:long access_hash:long date:int admin_id:long participant_id:long g_a_or_b:bytes key_fingerprint:long protocol:PhoneCallProtocol connections:Vector<PhoneConnection> start_date:int custom_parameters:flags.7?DataJSON = PhoneCall;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>p2p_allowed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/constructor/true">true</a></td><td>Разрешено ли P2P-соединение с другим пиром</td></tr><tr><td><strong>video</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/constructor/true">true</a></td><td>Является ли это видеозвонком</td></tr><tr><td><strong>conference_supported</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.8?<a href="/constructor/true">true</a></td><td>Если установлено, другая сторона поддерживает <a href="/api/calls#migrating-to-a-conference-call">перевод звонка в конференц-звонок »</a>; клиентам следует предлагать в интерфейсе звонка вариант перевода («Добавить участников») только при установленном флаге.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор звонка</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:access_hash] Хеш доступа</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Дата создания звонка</td></tr><tr><td><strong>admin_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор пользователя, создавшего звонок</td></tr><tr><td><strong>participant_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор второго участника звонка</td></tr><tr><td><strong>g_a_or_b</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td><a href="/api/end-to-end/voice-calls">Параметр для обмена ключами</a></td></tr><tr><td><strong>key_fingerprint</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td><a href="/api/end-to-end/voice-calls">Отпечаток ключа</a></td></tr><tr><td><strong>protocol</strong></td><td style="text-align: center;"><a href="/type/PhoneCallProtocol">PhoneCallProtocol</a></td><td>Сведения о протоколе звонка, передаваемые в libtgvoip</td></tr><tr><td><strong>connections</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/PhoneConnection">PhoneConnection</a>&gt;</td><td>Список адресов (endpoint), к которым пользователь может подключиться для обмена данными звонка</td></tr><tr><td><strong>start_date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Когда звонок фактически начался</td></tr><tr><td><strong>custom_parameters</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/type/DataJSON">DataJSON</a></td><td>Пользовательские параметры звонка в формате JSON, передаваемые в tgcalls.</td></tr></tbody></table>

### Тип

[PhoneCall](/type/PhoneCall/)

### Связанные страницы

#### [Звонки](/api/calls/)

Telegram поддерживает голосовые и видеозвонки один на один со сквозным шифрованием.

#### [Сквозное шифрование голосовых звонков](/api/end-to-end/voice-calls/)

Устаревшее описание шифрования в голосовых звонках, как оно было реализовано в приложениях Telegram до версии 7.0.
