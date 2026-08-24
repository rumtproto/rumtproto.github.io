---
title: "inputKeyboardButtonRequestPeer"
original: "https://core.telegram.org/constructor/inputKeyboardButtonRequestPeer"
section: ref
kind: constructor
description: "Предлагает пользователю выбрать одного или нескольких пиров и передать их боту с помощью messages.sendBotRequestedPeer."
layout: layout.njk
---

# inputKeyboardButtonRequestPeer

Предлагает пользователю выбрать одного или нескольких пиров и передать их боту с помощью [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/).

Используйте этот конструктор, чтобы отправить кнопку [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/) в [клавиатуре ответа](https://core.telegram.org/bots/features#keyboards) в личном чате.

Полное описание процесса см. в разделе [запросы пиров](/api/bots/buttons/#peer-requests).

```
inputKeyboardButtonRequestPeer#2b78156 flags:# name_requested:flags.0?true username_requested:flags.1?true photo_requested:flags.2?true style:flags.10?KeyboardButtonStyle text:string button_id:int peer_type:RequestPeerType max_quantity:int = KeyboardButton;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>name_requested</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Установите этот флаг, чтобы запросить имя пира.</td></tr><tr><td><strong>username_requested</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Установите этот флаг, чтобы запросить <code>@username</code> пира (если он есть).</td></tr><tr><td><strong>photo_requested</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Установите этот флаг, чтобы запросить фотографию пира (если она есть).</td></tr><tr><td><strong>style</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.10?<a href="/type/KeyboardButtonStyle">KeyboardButtonStyle</a></td><td>Стиль кнопки; подробнее о стилях кнопок см. <a href="/api/bots/buttons#button-styles">здесь »</a>.</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Текст кнопки</td></tr><tr><td><strong>button_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор кнопки, который следует передать в <a href="/method/messages.sendBotRequestedPeer">messages.sendBotRequestedPeer</a>.</td></tr><tr><td><strong>peer_type</strong></td><td style="text-align: center;"><a href="/type/RequestPeerType">RequestPeerType</a></td><td>Критерии отбора для списка выбора пиров, показываемого пользователю.<br>В списке следует показать все существующие пиры указанного типа, а также, при необходимости, предложить пользователю создать и сразу же использовать один или несколько (не более <code>max_quantity</code>) пиров указанного типа.</td></tr><tr><td><strong>max_quantity</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Максимальное число пиров, которых можно выбрать.</td></tr></tbody></table>

### Тип

[KeyboardButton](/type/KeyboardButton/)

### Связанные страницы

#### [Кнопки ботов](/api/bots/buttons/)

Пользователи могут взаимодействовать с вашим ботом через кнопки и даже через инлайн-кнопки прямо в инлайн-сообщениях в любом чате.

#### [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/)

Отправить один или несколько выбранных пиров по запросу кнопки [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/).

#### [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/)

Предлагает пользователю выбрать одного или нескольких пиров и передать их боту с помощью [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/)

Доступно только в личных чатах, в [клавиатурах ответа](/constructor/replyKeyboardMarkup/).

Полное описание процесса см. в разделе [запросы пиров](/api/bots/buttons/#peer-requests).

#### [Возможности ботов Telegram](https://core.telegram.org/bots/features)

На этой странице подробно описаны отдельные элементы ботов. Если нужен общий обзор ботов, сначала прочитайте введение.
