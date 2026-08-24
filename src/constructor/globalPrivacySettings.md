---
title: "globalPrivacySettings"
original: "https://core.telegram.org/constructor/globalPrivacySettings"
section: ref
kind: constructor
description: "Глобальные настройки приватности"
layout: layout.njk
---

# globalPrivacySettings

Глобальные настройки приватности

```
globalPrivacySettings#fe41b34f flags:# archive_and_mute_new_noncontact_peers:flags.0?true keep_archived_unmuted:flags.1?true keep_archived_folders:flags.2?true hide_read_marks:flags.3?true new_noncontact_peers_require_premium:flags.4?true display_gifts_button:flags.7?true noncontact_peers_paid_stars:flags.5?long disallowed_gifts:flags.6?DisallowedGiftsSettings = GlobalPrivacySettings;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>archive_and_mute_new_noncontact_peers</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Архивировать ли новые чаты не с контактами и отключать ли для них уведомления</td></tr><tr><td><strong>keep_archived_unmuted</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Останутся ли в списке чатов «Архив» чаты с включёнными уведомлениями при получении нового сообщения.</td></tr><tr><td><strong>keep_archived_folders</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Останутся ли в списке чатов «Архив» чаты с включёнными уведомлениями, которые всегда включены в <a href="/api/folders">папку</a> или закреплены в ней, при получении нового сообщения. Игнорируется, если установлен <code>keep_archived_unmuted</code>.</td></tr><tr><td><strong>hide_read_marks</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Если этот флаг установлен, ключ <a href="/constructor/inputPrivacyKeyStatusTimestamp">inputPrivacyKeyStatusTimestamp</a> будет также распространяться на возможность вызывать <a href="/method/messages.getOutboxReadDate">messages.getOutboxReadDate</a> для отправленных нам сообщений.<br>Это означает, что пользователи, которые не могут видеть <em>нашу</em> точную дату последнего посещения из-за текущего значения ключа <a href="/constructor/inputPrivacyKeyStatusTimestamp">inputPrivacyKeyStatusTimestamp</a>, получат ошибку <code>403 USER_PRIVACY_RESTRICTED</code> при вызове <a href="/method/messages.getOutboxReadDate">messages.getOutboxReadDate</a> для получения точной даты прочтения отправленного нам сообщения.<br>Для пользователей, включивших этот флаг, будет установлен флаг <a href="/constructor/userFull">userFull</a>.<code>read_dates_private</code>.</td></tr><tr><td><strong>new_noncontact_peers_require_premium</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/constructor/true">true</a></td><td>См. <a href="/api/privacy#require-premium-for-new-non-contact-users">подробнее об этом флаге »</a>.</td></tr><tr><td><strong>display_gifts_button</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/constructor/true">true</a></td><td>Включает или отключает наш флаг <a href="/constructor/userFull">userFull</a>.<code>display_gifts_button</code>: если флаг <a href="/constructor/userFull">userFull</a>.<code>display_gifts_button</code> установлен и у нас, и у другого пользователя, в текстовом поле личного чата с этим пользователем должна всегда отображаться кнопка подарка: при нажатии на неё должен открываться интерфейс подарков, предлагающий пользователю подарить подписку <a href="/api/premium#gifting-telegram-premium">Telegram Premium »</a> или <a href="/api/gifts">подарки Telegram »</a>.</td></tr><tr><td><strong>noncontact_peers_paid_stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/long">long</a></td><td>Если настроено, указывает количество <a href="/api/stars">звёзд</a>, которое пользователи должны заплатить нам за отправку нам сообщения; подробнее о платных сообщениях см. <a href="/api/paid-messages">здесь »</a>.</td></tr><tr><td><strong>disallowed_gifts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/type/DisallowedGiftsSettings">DisallowedGiftsSettings</a></td><td>Запрещает получение определённых типов подарков.</td></tr></tbody></table>

### Тип

[GlobalPrivacySettings](/type/GlobalPrivacySettings/)

### Связанные страницы

#### [Папки диалогов](/api/folders/)

Telegram позволяет раскладывать чаты по папкам в зависимости от их типа, состояния уведомлений или других произвольных критериев — благодаря чёрным и белым спискам папок.

#### [inputPrivacyKeyStatusTimestamp](/constructor/inputPrivacyKeyStatusTimestamp/)

Смогут ли другие видеть точное время нашего последнего пребывания в сети.

Учтите: если _мы_ решили скрыть от кого-либо точное время последнего пребывания в сети (то есть от пользователей A, B, C или от всех пользователей) **и** у нас нет подписки [Premium](/api/premium/), мы не сможем видеть точное время последнего пребывания в сети этих пользователей (A, B, C или всех пользователей), даже если они _действительно_ показывают его нам.

Если эти пользователи _всё же_ показывают нам точное время последнего пребывания в сети, но мы не видим его по указанной выше причине, будет установлен флаг `by_me` в конструкторах [userStatusRecently](/constructor/userStatusRecently/), [userStatusLastWeek](/constructor/userStatusLastWeek/), [userStatusLastMonth](/constructor/userStatusLastMonth/).

#### [messages.getOutboxReadDate](/method/messages.getOutboxReadDate/)

Получить точную дату прочтения одного из наших сообщений, отправленных в личный чат с другим пользователем.

Возможно только для исходящих личных сообщений не старше [appConfig.pm\_read\_date\_expire\_period »](/api/config/#pm-read-date-expire-period).

[@term:peer] Если у `peer` установлен флаг [userFull](/constructor/userFull/).`read_dates_private`, мы не сможем получить точную дату прочтения отправленных ему сообщений, и будет возвращена ошибка RPC `USER_PRIVACY_RESTRICTED`.  
Точная дата прочтения сообщений может быть недоступна и по другим причинам, подробнее [см. здесь »](/constructor/globalPrivacySettings/).  
Чтобы установить [userFull](/constructor/userFull/).`read_dates_private` для себя, вызовите [account.setGlobalPrivacySettings](/method/account.setGlobalPrivacySettings/), установив флаг `settings.hide_read_marks`.

#### [userFull](/constructor/userFull/)

Расширенные сведения о пользователе

При обновлении [локальной базы пиров »](/api/peers/) все поля вновь полученного конструктора имеют приоритет над старым конструктором, сохранённым локально (в том числе удаляются поля, не заданные в новом конструкторе).

#### [Настройки приватности](/api/privacy/)

Telegram позволяет пользователям задавать детальные настройки приватности, выбирая, кто может и кто не может взаимодействовать с ними тем или иным способом.

#### [Telegram Premium](/api/premium/)

Telegram Premium — необязательная подписка, которая открывает дополнительные эксклюзивные возможности на стороне клиента и API и одновременно помогает поддерживать разработку приложения.

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.

#### [Telegram Stars](/api/stars/)

Telegram Stars — виртуальные предметы, которые позволяют пользователям покупать цифровые товары и услуги у ботов и мини-приложений внутри экосистемы Telegram, отправлять подарки авторам на платформе Telegram и не только.

#### [Платные сообщения](/api/paid-messages/)

Telegram Stars можно использовать для оплаты сообщений пользователям, супергруппам и каналам, в которых настроены платные сообщения: за каждое отправленное им сообщение взимается плата.
