---
title: "messages.getOutboxReadDate"
original: "https://core.telegram.org/method/messages.getOutboxReadDate"
section: ref
kind: method
description: "Получить точную дату прочтения одного из наших сообщений, отправленных в личный чат с другим пользователем."
layout: layout.njk
---

# messages.getOutboxReadDate

Получить точную дату прочтения одного из наших сообщений, отправленных в личный чат с другим пользователем.

Возможно только для исходящих личных сообщений не старше [appConfig.pm\_read\_date\_expire\_period »](/api/config/#pm-read-date-expire-period).

[@term:peer] Если у `peer` установлен флаг [userFull](/constructor/userFull/).`read_dates_private`, мы не сможем получить точную дату прочтения отправленных ему сообщений, и будет возвращена ошибка RPC `USER_PRIVACY_RESTRICTED`.  
Точная дата прочтения сообщений может быть недоступна и по другим причинам, подробнее [см. здесь »](/constructor/globalPrivacySettings/).  
Чтобы установить [userFull](/constructor/userFull/).`read_dates_private` для себя, вызовите [account.setGlobalPrivacySettings](/method/account.setGlobalPrivacySettings/), установив флаг `settings.hide_read_marks`.

```
outboxReadDate#3bb842ac date:int = OutboxReadDate;
---functions---
messages.getOutboxReadDate#8c4bfe5d peer:InputPeer msg_id:int = OutboxReadDate;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Пользователь, которому мы отправили сообщение.</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:msg_id] Идентификатор сообщения.</td></tr></tbody></table>

### Результат

[OutboxReadDate](/type/OutboxReadDate/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>Указанный идентификатор сообщения недействителен.</td></tr><tr><td>400</td><td>MESSAGE_NOT_READ_YET</td><td>Указанное сообщение ещё не прочитано.</td></tr><tr><td>400</td><td>MESSAGE_TOO_OLD</td><td>Сообщение слишком старое, запрошенные сведения недоступны.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>Указанный идентификатор пира недействителен.</td></tr><tr><td>403</td><td>USER_PRIVACY_RESTRICTED</td><td>Настройки приватности пользователя не позволяют вам это сделать.</td></tr><tr><td>403</td><td>YOUR_PRIVACY_RESTRICTED</td><td>Вы не можете получить дату прочтения этого сообщения, поскольку запретили другим пользователям делать это для <em>ваших</em> сообщений; чтобы это исправить, разрешите другим пользователям видеть <em>ваше</em> точное время последнего посещения ИЛИ приобретите подписку <a href="/api/premium">Telegram Premium</a>.</td></tr></tbody></table>

### Связанные страницы

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.

#### [userFull](/constructor/userFull/)

Расширенные сведения о пользователе

При обновлении [локальной базы пиров »](/api/peers/) все поля вновь полученного конструктора имеют приоритет над старым конструктором, сохранённым локально (в том числе удаляются поля, не заданные в новом конструкторе).

#### [globalPrivacySettings](/constructor/globalPrivacySettings/)

Глобальные настройки приватности

#### [account.setGlobalPrivacySettings](/method/account.setGlobalPrivacySettings/)

Задать глобальные настройки приватности

#### [Telegram Premium](/api/premium/)

Telegram Premium — необязательная подписка, которая открывает дополнительные эксклюзивные возможности на стороне клиента и API и одновременно помогает поддерживать разработку приложения.
