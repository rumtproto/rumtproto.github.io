---
title: "PhoneCall"
original: "https://core.telegram.org/type/PhoneCall"
section: ref
kind: type
description: "Телефонный звонок"
layout: layout.njk
---

# PhoneCall

Телефонный звонок

```
phoneCallEmpty#5366c915 id:long = PhoneCall;
phoneCallWaiting#c5226f17 flags:# video:flags.6?true id:long access_hash:long date:int admin_id:long participant_id:long protocol:PhoneCallProtocol receive_date:flags.0?int = PhoneCall;
phoneCallRequested#14b0ed0c flags:# video:flags.6?true id:long access_hash:long date:int admin_id:long participant_id:long g_a_hash:bytes protocol:PhoneCallProtocol = PhoneCall;
phoneCallAccepted#3660c311 flags:# video:flags.6?true id:long access_hash:long date:int admin_id:long participant_id:long g_b:bytes protocol:PhoneCallProtocol = PhoneCall;
phoneCall#30535af5 flags:# p2p_allowed:flags.5?true video:flags.6?true conference_supported:flags.8?true id:long access_hash:long date:int admin_id:long participant_id:long g_a_or_b:bytes key_fingerprint:long protocol:PhoneCallProtocol connections:Vector<PhoneConnection> start_date:int custom_parameters:flags.7?DataJSON = PhoneCall;
phoneCallDiscarded#50ca4de1 flags:# need_rating:flags.2?true need_debug:flags.3?true video:flags.6?true id:long reason:flags.0?PhoneCallDiscardReason duration:flags.1?int = PhoneCall;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/phoneCallEmpty">phoneCallEmpty</a></td><td>Пустой конструктор</td></tr><tr><td><a href="/constructor/phoneCallWaiting">phoneCallWaiting</a></td><td>Входящий телефонный звонок; подробнее о полном процессе см. <a href="/api/calls">здесь »</a>.</td></tr><tr><td><a href="/constructor/phoneCallRequested">phoneCallRequested</a></td><td>Запрошенный телефонный звонок; подробнее о полном порядке действий см. <a href="/api/calls">здесь »</a>.</td></tr><tr><td><a href="/constructor/phoneCallAccepted">phoneCallAccepted</a></td><td>Принятый телефонный звонок; подробнее о полном порядке действий см. <a href="/api/calls">здесь »</a>.</td></tr><tr><td><a href="/constructor/phoneCall">phoneCall</a></td><td>Телефонный звонок, подробнее о полной последовательности действий см. <a href="/api/calls">здесь »</a>.</td></tr><tr><td><a href="/constructor/phoneCallDiscarded">phoneCallDiscarded</a></td><td>Обозначает завершённый звонок; подробнее о полном процессе см. <a href="/api/calls">здесь »</a>.</td></tr></tbody></table>
