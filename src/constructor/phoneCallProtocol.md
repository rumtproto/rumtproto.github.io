---
title: "phoneCallProtocol"
original: "https://core.telegram.org/constructor/phoneCallProtocol"
section: ref
kind: constructor
description: "Сведения о протоколе для библиотеки VoIP; подробнее о том, как их заполнять, см. здесь »."
layout: layout.njk
---

# phoneCallProtocol

Сведения о протоколе для библиотеки VoIP; подробнее о том, как их заполнять, см. [здесь »](/api/calls/#populating-phonecallprotocol).

```
phoneCallProtocol#fc878fc8 flags:# udp_p2p:flags.0?true udp_reflector:flags.1?true min_layer:int max_layer:int library_versions:Vector<string> = PhoneCallProtocol;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>udp_p2p</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Разрешать ли P2P-соединение с другим участником</td></tr><tr><td><strong>udp_reflector</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Разрешать ли соединение с другими участниками через серверы-ретрансляторы</td></tr><tr><td><strong>min_layer</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Минимальный слой для удалённого libtgvoip</td></tr><tr><td><strong>max_layer</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Максимальный слой для удалённого libtgvoip</td></tr><tr><td><strong>library_versions</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/string">string</a>&gt;</td><td>При использовании <a href="/method/phone.requestCall">phone.requestCall</a> и <a href="/method/phone.acceptCall">phone.acceptCall</a> укажите все версии библиотеки, поддерживаемые клиентом.<br>Сервер объединит списки и выберет лучшую версию библиотеки, поддерживаемую обоими пирами, вернув только это лучшее значение в результате вызова <a href="/method/phone.acceptCall">phone.acceptCall</a> вызываемым абонентом и в обновлении <a href="/constructor/phoneCallAccepted">phoneCallAccepted</a>, которое получает вызывающий.</td></tr></tbody></table>

### Тип

[PhoneCallProtocol](/type/PhoneCallProtocol/)

### Связанные страницы

#### [phone.requestCall](/method/phone.requestCall/)

Начать телефонный звонок Telegram; подробнее о полном сценарии см. [здесь »](/api/calls/#one-to-one-calls).

#### [phone.acceptCall](/method/phone.acceptCall/)

Принять входящий звонок; подробнее о полном процессе см. [здесь »](/api/calls/#one-to-one-calls).

#### [phoneCallAccepted](/constructor/phoneCallAccepted/)

Принятый звонок; подробнее о полном процессе см. [здесь »](/api/calls/).

#### [Звонки](/api/calls/)

Telegram поддерживает голосовые и видеозвонки один на один со сквозным шифрованием.
