---
title: "messages.getChatInviteImporters"
original: "https://core.telegram.org/method/messages.getChatInviteImporters"
section: ref
kind: method
description: "Получить информацию о пользователях, вступивших в чат по определённой пригласительной ссылке"
layout: layout.njk
---

# messages.getChatInviteImporters

Получить информацию о пользователях, вступивших в чат по определённой пригласительной ссылке

```
messages.chatInviteImporters#81b6b00a count:int importers:Vector<ChatInviteImporter> users:Vector<User> = messages.ChatInviteImporters;
---functions---
messages.getChatInviteImporters#df04dd4e flags:# requested:flags.0?true subscription_expired:flags.3?true peer:InputPeer link:flags.1?string q:flags.2?string offset_date:int offset_user:InputUser limit:int = messages.ChatInviteImporters;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>requested</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Если установлено, возвращает информацию только о пользователях с ожидающими рассмотрения <a href="/api/invites#join-requests">заявками на вступление »</a></td></tr><tr><td><strong>subscription_expired</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Установите этот флаг, если ссылка является <a href="/api/stars#star-subscriptions">ссылкой на подписку за Telegram Stars »</a> и требуется вернуть только участников с уже истёкшей подпиской.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Чат</td></tr><tr><td><strong>link</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Пригласительная ссылка</td></tr><tr><td><strong>q</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/string">string</a></td><td>Поиск пользователя в списке ожидающих <a href="/api/invites#join-requests">заявок на вступление »</a>: доступно только при установленном флаге <code>requested</code>, нельзя использовать вместе с конкретной ссылкой <code>link</code>.</td></tr><tr><td><strong>offset_date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/offsets">Смещения для постраничной выборки, подробнее см. здесь</a></td></tr><tr><td><strong>offset_user</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Идентификатор пользователя для <a href="/api/offsets">постраничной выборки</a>: если задан, необходимо задать и <code>offset_date</code>.</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Максимальное число возвращаемых результатов, <a href="/api/offsets">см. постраничную выборку</a></td></tr></tbody></table>

### Результат

[messages.ChatInviteImporters](/type/messages.ChatInviteImporters/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>Вы не вступили в этот канал или супергруппу.</td></tr><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>Для этого вы обязаны быть администратором этого чата.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>Вы не можете писать в этот чат.</td></tr><tr><td>400</td><td>INVITE_HASH_EXPIRED</td><td>Срок действия пригласительной ссылки истёк.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>400</td><td>SEARCH_WITH_LINK_NOT_SUPPORTED</td><td>Нельзя одновременно указать поисковый запрос и пригласительную ссылку.</td></tr></tbody></table>

### Связанные страницы

#### [Пригласительные ссылки](/api/invites/)

У чатов и каналов может быть публичное имя пользователя или закрытая пригласительная ссылка; закрытые пригласительные ссылки дополнительно могут требовать заявку на вступление от каждого пользователя.

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.
