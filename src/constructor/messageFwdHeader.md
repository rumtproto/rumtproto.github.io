---
title: "messageFwdHeader"
original: "https://core.telegram.org/constructor/messageFwdHeader"
section: ref
kind: constructor
description: "Информация о пересланном сообщении"
layout: layout.njk
---

# messageFwdHeader

Информация о пересланном сообщении

```
messageFwdHeader#4e4df4bb flags:# imported:flags.7?true saved_out:flags.11?true from_id:flags.0?Peer from_name:flags.5?string date:int channel_post:flags.2?int post_author:flags.3?string saved_from_peer:flags.4?Peer saved_from_msg_id:flags.4?int saved_from_id:flags.8?Peer saved_from_name:flags.9?string saved_date:flags.10?int psa_type:flags.6?string = MessageFwdHeader;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>imported</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/constructor/true">true</a></td><td>Было ли это сообщение <a href="/api/import">импортировано из стороннего мессенджера, подробнее см. здесь »</a></td></tr><tr><td><strong>saved_out</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.11?<a href="/constructor/true">true</a></td><td>Только для сообщений, пересланных в <a href="/api/saved-messages">избранное »</a>: установлено, если исходное сообщение было исходящим (при этом сообщение могло быть исходящим и без этого флага, если <code>from_id</code> указывает на текущего пользователя).</td></tr><tr><td><strong>from_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Peer">Peer</a></td><td>Идентификатор пользователя, который изначально отправил сообщение</td></tr><tr><td><strong>from_name</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/string">string</a></td><td>Имя пользователя, который изначально отправил сообщение</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Когда сообщение было отправлено изначально</td></tr><tr><td><strong>channel_post</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/int">int</a></td><td>Идентификатор пересланного сообщения канала</td></tr><tr><td><strong>post_author</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/string">string</a></td><td>Для каналов, в которых включены подписи, — автор сообщения канала</td></tr><tr><td><strong>saved_from_peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/Peer">Peer</a></td><td>Только для сообщений, пересланных в <a href="/api/saved-messages">избранное »</a>; содержит диалог, в котором сообщение было отправлено изначально.</td></tr><tr><td><strong>saved_from_msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/int">int</a></td><td>Только для сообщений, пересланных в <a href="/api/saved-messages">избранное »</a>; содержит исходный идентификатор сообщения в <code>saved_from_peer</code>.</td></tr><tr><td><strong>saved_from_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.8?<a href="/type/Peer">Peer</a></td><td>Только для пересланных сообщений, повторно пересланных в <a href="/api/saved-messages">избранное »</a>; содержит отправителя исходного сообщения (то есть если пользователь A отправляет сообщение, затем пользователь B пересылает его куда-либо, а затем пользователь C сохраняет его в избранное, то это поле будет содержать идентификатор пользователя B, а <code>from_id</code> — идентификатор пользователя A).</td></tr><tr><td><strong>saved_from_name</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.9?<a href="/type/string">string</a></td><td>Только для пересланных сообщений от пользователей с включённой приватностью пересылки, отправленных пользователями с включённой приватностью пересылки и повторно пересланных в <a href="/api/saved-messages">избранное »</a>; содержит отправителя исходного сообщения (то есть если пользователь A с включённой приватностью пересылки отправляет сообщение, затем пользователь B с включённой приватностью пересылки пересылает его куда-либо, а затем пользователь C сохраняет его в избранное, то это поле будет содержать имя пользователя B, а <code>from_name</code> — имя пользователя A).</td></tr><tr><td><strong>saved_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.10?<a href="/type/int">int</a></td><td>Только для пересланных сообщений, повторно пересланных в <a href="/api/saved-messages">избранное »</a>; указывает, когда было отправлено исходное сообщение (то есть если пользователь A отправляет сообщение в момент unixtime 1, затем пользователь B пересылает его куда-либо в момент unixtime 2, а затем пользователь C сохраняет его в избранное в момент unixtime 3, то это поле будет содержать 2, поле <code>date</code> — 1, а поле <code>date</code> содержащего <a href="/constructor/message">сообщения</a> — 3).</td></tr><tr><td><strong>psa_type</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/type/string">string</a></td><td>Тип социальной рекламы (PSA)</td></tr></tbody></table>

### Тип

[MessageFwdHeader](/type/MessageFwdHeader/)

### Связанные страницы

#### [Импортированные сообщения](/api/import/)

Telegram позволяет импортировать сообщения и медиа из сторонних мессенджеров.

#### [Избранные сообщения](/api/saved-messages/)

Чат «Избранное» позволяет сохранять сообщения и медиа: это личное облачное хранилище для любых сообщений и медиа, которые вы захотите туда отправить или переслать.

#### [message](/constructor/message/)

Сообщение
