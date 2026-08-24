---
title: "peerSettings"
original: "https://core.telegram.org/constructor/peerSettings"
section: ref
kind: constructor
description: "Список действий, доступных при взаимодействии с этим пользователем; они показываются как предлагаемые действия в панели действий чата », подробнее см. здесь »."
layout: layout.njk
---

# peerSettings

Список действий, доступных при взаимодействии с этим пользователем; они показываются как предлагаемые действия в [панели действий чата »](/api/action-bar/), подробнее [см. здесь »](/api/action-bar/).

```
peerSettings#f47741f7 flags:# report_spam:flags.0?true add_contact:flags.1?true block_contact:flags.2?true share_contact:flags.3?true need_contacts_exception:flags.4?true report_geo:flags.5?true autoarchived:flags.7?true invite_members:flags.8?true request_chat_broadcast:flags.10?true business_bot_paused:flags.11?true business_bot_can_reply:flags.12?true geo_distance:flags.6?int request_chat_title:flags.9?string request_chat_date:flags.9?int business_bot_id:flags.13?long business_bot_manage_url:flags.13?string charge_paid_message_stars:flags.14?long registration_month:flags.15?string phone_country:flags.16?string name_change_date:flags.17?int photo_change_date:flags.18?int = PeerSettings;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>report_spam</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Можем ли мы ещё пожаловаться на пользователя за спам</td></tr><tr><td><strong>add_contact</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Можем ли мы добавить пользователя в контакты</td></tr><tr><td><strong>block_contact</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Можем ли мы заблокировать пользователя</td></tr><tr><td><strong>share_contact</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Можем ли мы поделиться контактом пользователя</td></tr><tr><td><strong>need_contacts_exception</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/constructor/true">true</a></td><td>Требуется ли особое исключение для контактов</td></tr><tr><td><strong>report_geo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/constructor/true">true</a></td><td>Можем ли мы пожаловаться на геогруппу как нерелевантную для этого местоположения</td></tr><tr><td><strong>autoarchived</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/constructor/true">true</a></td><td>Был ли этот пир автоматически архивирован в соответствии с <a href="/constructor/globalPrivacySettings">настройками приватности</a> и можно ли его разархивировать</td></tr><tr><td><strong>invite_members</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.8?<a href="/constructor/true">true</a></td><td>Если установлено, это недавно созданный групповой чат, в который можно приглашать новых участников</td></tr><tr><td><strong>request_chat_broadcast</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.10?<a href="/constructor/true">true</a></td><td>Этот флаг устанавливается, если заданы поля <code>request_chat_title</code> и <code>request_chat_date</code> и <a href="/api/invites#join-requests">заявка на вступление »</a> относится к каналу (если же заданы только поля заявки, <a href="/api/invites#join-requests">заявка на вступление »</a> относится к чату).</td></tr><tr><td><strong>business_bot_paused</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.11?<a href="/constructor/true">true</a></td><td>Этот флаг устанавливается, если заданы и <code>business_bot_id</code>, и <code>business_bot_manage_url</code> и все <a href="/api/bots/connected-business-bots">подключённые бизнес-боты »</a> были приостановлены в этом чате с помощью <a href="/method/account.toggleConnectedBotPaused">account.toggleConnectedBotPaused »</a>.</td></tr><tr><td><strong>business_bot_can_reply</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.12?<a href="/constructor/true">true</a></td><td>Этот флаг устанавливается, если заданы и <code>business_bot_id</code>, и <code>business_bot_manage_url</code> и <a href="/api/bots/connected-business-bots">подключённые бизнес-боты »</a> могут отвечать на сообщения в этом чате в соответствии с настройками, заданными при <a href="/api/bots/connected-business-bots">первоначальной настройке</a>.</td></tr><tr><td><strong>geo_distance</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/type/int">int</a></td><td>Расстояние в метрах между нами и этим пиром</td></tr><tr><td><strong>request_chat_title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.9?<a href="/type/string">string</a></td><td>Если установлено, это личный чат с администратором чата или канала, в который пользователь отправил заявку на вступление, и это поле содержит название чата или канала.</td></tr><tr><td><strong>request_chat_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.9?<a href="/type/int">int</a></td><td>Если установлено, это личный чат с администратором чата или канала, в который пользователь отправил заявку на вступление, и это поле содержит время отправки <a href="/api/invites#join-requests">заявки на вступление »</a>.</td></tr><tr><td><strong>business_bot_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.13?<a href="/type/long">long</a></td><td>Содержит идентификатор <a href="/api/bots/connected-business-bots">бизнес-бота »</a>, управляющего этим чатом; используется для показа сведений о боте в панели действий.</td></tr><tr><td><strong>business_bot_manage_url</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.13?<a href="/type/string">string</a></td><td>Содержит <a href="/api/links">глубокую ссылку »</a>, открывающую меню управления в бизнес-боте. Этот флаг установлен тогда и только тогда, когда задано поле <code>business_bot_id</code>.</td></tr><tr><td><strong>charge_paid_message_stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.14?<a href="/type/long">long</a></td><td>У всех пользователей, которые обязаны <a href="/api/paid-messages">платить <em>нам</em> »</a> за отправку нам личных сообщений, этот флаг будет установлен <em>только для нас</em> и будет содержать необходимое количество звёзд; подробнее о платных сообщениях см. <a href="/api/paid-messages">здесь »</a>.</td></tr><tr><td><strong>registration_month</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.15?<a href="/type/string">string</a></td><td>Используется для отображения года и месяца регистрации пользователя; строка имеет формат <code>MM.YYYY</code>, где <code>MM</code> — месяц регистрации (<code>1-12</code>), а <code>YYYY</code> — год регистрации.</td></tr><tr><td><strong>phone_country</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.16?<a href="/type/string">string</a></td><td>Код страны для номера телефона пользователя.</td></tr><tr><td><strong>name_change_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.17?<a href="/type/int">int</a></td><td>Когда имя пользователя менялось в последний раз.</td></tr><tr><td><strong>photo_change_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.18?<a href="/type/int">int</a></td><td>Когда фотография пользователя менялась в последний раз.</td></tr></tbody></table>

### Тип

[PeerSettings](/type/PeerSettings/)

### Связанные страницы

#### [globalPrivacySettings](/constructor/globalPrivacySettings/)

Глобальные настройки приватности

#### [Пригласительные ссылки](/api/invites/)

У чатов и каналов может быть публичное имя пользователя или закрытая пригласительная ссылка; закрытые пригласительные ссылки дополнительно могут требовать заявку на вступление от каждого пользователя.

#### [Подключённые бизнес-боты](/api/bots/connected-business-bots/)

Пользователи могут подключать ботов Telegram, которые будут обрабатывать сообщения и отвечать на них от имени пользователя. Это позволяет легко встроить любые уже существующие инструменты и рабочие процессы или добавить ИИ-помощников, которые ведут их чаты.

#### [account.toggleConnectedBotPaused](/method/account.toggleConnectedBotPaused/)

Приостановить или возобновить конкретный чат, временно отключив его от всех [бизнес-ботов »](/api/bots/connected-business-bots/).

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.

#### [Платные сообщения](/api/paid-messages/)

Telegram Stars можно использовать для оплаты сообщений пользователям, супергруппам и каналам, в которых настроены платные сообщения: за каждое отправленное им сообщение взимается плата.

#### [Панель действий](/api/action-bar/)

Иногда при взаимодействии с пользователями Telegram через личные или секретные чаты вверху чата необходимо показать панель действий, предлагающую удобные кнопки или уведомления об этом пользователе.
