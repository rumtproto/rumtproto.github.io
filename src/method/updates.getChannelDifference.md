---
title: "updates.getChannelDifference"
original: "https://core.telegram.org/method/updates.getChannelDifference"
section: ref
kind: method
description: "Возвращает разницу между текущим состоянием обновлений определённого канала и переданным состоянием."
layout: layout.njk
---

# updates.getChannelDifference

Возвращает разницу между текущим состоянием обновлений определённого канала и переданным состоянием.

```
updates.channelDifferenceEmpty#3e11affb flags:# final:flags.0?true pts:int timeout:flags.1?int = updates.ChannelDifference;
updates.channelDifferenceTooLong#a4bcc6fe flags:# final:flags.0?true timeout:flags.1?int dialog:Dialog messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = updates.ChannelDifference;
updates.channelDifference#2064674e flags:# final:flags.0?true pts:int timeout:flags.1?int new_messages:Vector<Message> other_updates:Vector<Update> chats:Vector<Chat> users:Vector<User> = updates.ChannelDifference;
---functions---
updates.getChannelDifference#3173d78 flags:# force:flags.0?true channel:InputChannel filter:ChannelMessagesFilter pts:int limit:int = updates.ChannelDifference;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>force</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Установите в true, чтобы пропустить часть возможно ненужных обновлений и снизить нагрузку на сервер</td></tr><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/type/InputChannel">InputChannel</a></td><td>Канал</td></tr><tr><td><strong>filter</strong></td><td style="text-align: center;"><a href="/type/ChannelMessagesFilter">ChannelMessagesFilter</a></td><td>Фильтр сообщений</td></tr><tr><td><strong>pts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:pts] Постоянная метка времени (см. <a href="/api/updates">обновления</a>)</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Сколько обновлений нужно получить, максимум <code>100000</code><br>Обычным пользователям (не ботам) следует передавать <code>10-100</code></td></tr></tbody></table>

### Результат

[updates.ChannelDifference](/type/updates.ChannelDifference/)

### Этот метод доступен и пользователям, и ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>Указанный канал недействителен.</td></tr><tr><td>406</td><td>CHANNEL_PRIVATE</td><td>Вы не вступили в этот канал или супергруппу.</td></tr><tr><td>403</td><td>CHANNEL_PUBLIC_GROUP_NA</td><td>канал/супергруппа недоступны.</td></tr><tr><td>400</td><td>CHAT_NOT_MODIFIED</td><td>Информация о чате не изменена, потому что переданные вами новые данные совпадают с текущими.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>Вы не можете писать в этот чат.</td></tr><tr><td>400</td><td>FROM_MESSAGE_BOT_DISABLED</td><td>Боты не могут использовать конструкторы fromMessage min.</td></tr><tr><td>400</td><td>FROZEN_PARTICIPANT_MISSING</td><td>Текущий аккаунт <a href="/api/auth#frozen-accounts">заморожен</a> и не может обращаться к указанному пиру.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Указан недействительный идентификатор сообщения.</td></tr><tr><td>400</td><td>PERSISTENT_TIMESTAMP_EMPTY</td><td>Постоянная метка времени пуста.</td></tr><tr><td>400</td><td>PERSISTENT_TIMESTAMP_INVALID</td><td>Недействительная постоянная метка времени.</td></tr><tr><td>500</td><td>PERSISTENT_TIMESTAMP_OUTDATED</td><td>Внутренние проблемы репликации канала, повторите попытку позже (обрабатывайте так же, как RPC_CALL_FAIL).</td></tr><tr><td>400</td><td>PINNED_DIALOGS_TOO_MUCH</td><td>Слишком много закреплённых диалогов.</td></tr><tr><td>400</td><td>RANGES_INVALID</td><td>Указан недопустимый диапазон.</td></tr><tr><td>400</td><td>USER_BANNED_IN_CHANNEL</td><td>Вам запрещено отправлять сообщения в супергруппах и каналах.</td></tr></tbody></table>

### Связанные страницы

#### [Работа с обновлениями](/api/updates/)

Как подписаться на обновления и правильно их обрабатывать.

#### [Авторизация пользователя](/api/auth/)

Как зарегистрировать телефон пользователя, чтобы начать работу с API.
