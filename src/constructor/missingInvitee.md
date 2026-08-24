---
title: "missingInvitee"
original: "https://core.telegram.org/constructor/missingInvitee"
section: ref
kind: constructor
description: "Информация о том, почему определённого пользователя не удалось пригласить »."
layout: layout.njk
---

# missingInvitee

Информация о том, почему определённого пользователя не удалось [пригласить »](/api/invites/#direct-invites).

```
missingInvitee#628c9224 flags:# premium_would_allow_invite:flags.0?true premium_required_for_pm:flags.1?true user_id:long = MissingInvitee;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>premium_would_allow_invite</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, мы не смогли добавить пользователя <em>только потому</em>, что для завершения операции текущему аккаунту необходимо приобрести подписку <a href="/api/premium">Telegram Premium</a>.</td></tr><tr><td><strong>premium_required_for_pm</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Если установлено, мы не смогли добавить пользователя из-за его настроек приватности, и, кроме того, текущему аккаунту необходимо приобрести подписку <a href="/api/premium">Telegram Premium</a>, чтобы отправить пользователю пригласительную ссылку напрямую личным сообщением.</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор пользователя. Если ни один из приведённых ниже флагов не установлен, добавить пользователя не удалось из-за его настроек приватности, и вместо этого мы можем создать <a href="/api/invites#invite-links">пригласительную ссылку</a> и отправить её ему обычным сообщением.</td></tr></tbody></table>

### Тип

[MissingInvitee](/type/MissingInvitee/)

### Связанные страницы

#### [Telegram Premium](/api/premium/)

Telegram Premium — необязательная подписка, которая открывает дополнительные эксклюзивные возможности на стороне клиента и API и одновременно помогает поддерживать разработку приложения.

#### [Пригласительные ссылки](/api/invites/)

У чатов и каналов может быть публичное имя пользователя или закрытая пригласительная ссылка; закрытые пригласительные ссылки дополнительно могут требовать заявку на вступление от каждого пользователя.
