---
title: "groupCallParticipantVideo"
original: "https://core.telegram.org/constructor/groupCallParticipantVideo"
section: ref
kind: constructor
description: "Информация о видеопотоке"
layout: layout.njk
---

# groupCallParticipantVideo

Информация о видеопотоке

```
groupCallParticipantVideo#67753ac8 flags:# paused:flags.0?true endpoint:string source_groups:Vector<GroupCallParticipantVideoSourceGroup> audio_source:flags.1?int = GroupCallParticipantVideo;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>paused</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Приостановлен ли поток сейчас</td></tr><tr><td><strong>endpoint</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Адрес (endpoint)</td></tr><tr><td><strong>source_groups</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/GroupCallParticipantVideoSourceGroup">GroupCallParticipantVideoSourceGroup</a>&gt;</td><td>Исходные группы</td></tr><tr><td><strong>audio_source</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>Идентификатор источника звука</td></tr></tbody></table>

### Тип

[GroupCallParticipantVideo](/type/GroupCallParticipantVideo/)
