---
title: "messageActionConferenceCall"
original: "https://core.telegram.org/constructor/messageActionConferenceCall"
section: ref
kind: constructor
description: "Представляет конференц-звонок » либо приглашение на него, если не установлен ни флаг missed, ни флаг active."
layout: layout.njk
---

# messageActionConferenceCall

Представляет [конференц-звонок »](/api/group-calls/#conference-calls) либо приглашение на него, если не установлен ни флаг `missed`, ни флаг `active`.

Если [call\_requests\_disabled](/api/config/#call-requests-disabled) не установлен или равен false, входящий [messageActionConferenceCall](/constructor/messageActionConferenceCall/), у которого **не** установлены флаги `missed` и `active`, должен вызывать звонок и экран входящего вызова — так же, как при звонках один на один.

```
messageActionConferenceCall#2ffe2f7a flags:# missed:flags.0?true active:flags.1?true video:flags.4?true call_id:long duration:flags.2?int other_participants:flags.3?Vector<Peer> = MessageAction;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>missed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Завершилась ли конференция без того, чтобы пользователь к ней присоединился.</td></tr><tr><td><strong>active</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Находится ли пользователь сейчас в конференц-звонке.</td></tr><tr><td><strong>video</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/constructor/true">true</a></td><td>Является ли это видеоконференц-звонком.</td></tr><tr><td><strong>call_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор звонка.</td></tr><tr><td><strong>duration</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/int">int</a></td><td>Длительность звонка, только для завершённых звонков.</td></tr><tr><td><strong>other_participants</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Peer">Peer</a>&gt;</td><td>Идентификаторы некоторых других участников звонка.</td></tr></tbody></table>

### Тип

[MessageAction](/type/MessageAction/)

### Связанные страницы

#### [Групповые звонки](/api/group-calls/)

Как начинать групповые звонки и видеочаты, присоединяться к ним и управлять ими.

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.

#### [messageActionConferenceCall](/constructor/messageActionConferenceCall/)

Представляет [конференц-звонок »](/api/group-calls/#conference-calls) либо приглашение на него, если не установлен ни флаг `missed`, ни флаг `active`.

Если [call\_requests\_disabled](/api/config/#call-requests-disabled) не установлен или равен false, входящий [messageActionConferenceCall](/constructor/messageActionConferenceCall/), у которого **не** установлены флаги `missed` и `active`, должен вызывать звонок и экран входящего вызова — так же, как при звонках один на один.
