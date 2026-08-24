---
title: "bots.requestWebViewButton"
original: "https://core.telegram.org/method/bots.requestWebViewButton"
section: ref
kind: method
description: "Боты могут использовать этот метод, чтобы подготовить кнопку запроса пира для Mini App; подробнее см. здесь »."
layout: layout.njk
---

# bots.requestWebViewButton

[@term:Mini App] Боты могут использовать этот метод, чтобы подготовить кнопку запроса пира для [Mini App](/api/bots/webapps/); подробнее см. [здесь »](/api/bots/buttons/#requesting-peers-via-mini-apps).

```
 Method schema is available as of layer 224. Switch »
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Пользователь, который воспользуется подготовленной кнопкой в Mini App</td></tr><tr><td><strong>button</strong></td><td style="text-align: center;"><a href="/type/KeyboardButton">KeyboardButton</a></td><td>Кнопка для подготовки, <a href="/constructor/inputKeyboardButtonRequestPeer">inputKeyboardButtonRequestPeer</a> с любым <a href="/type/RequestPeerType">RequestPeerType</a></td></tr></tbody></table>

### Результат

[bots.RequestedButton](/type/bots.RequestedButton/)

### Этот метод доступен только ботам

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BUTTON_INVALID</td><td>Указанная кнопка недействительна.</td></tr><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>Этот метод может вызывать только бот.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>Указанный идентификатор пользователя недействителен.</td></tr></tbody></table>

### Связанные страницы

#### [inputKeyboardButtonRequestPeer](/constructor/inputKeyboardButtonRequestPeer/)

Предлагает пользователю выбрать одного или нескольких пиров и передать их боту с помощью [messages.sendBotRequestedPeer](/method/messages.sendBotRequestedPeer/).

Используйте этот конструктор, чтобы отправить кнопку [keyboardButtonRequestPeer](/constructor/keyboardButtonRequestPeer/) в [клавиатуре ответа](https://core.telegram.org/bots/features#keyboards) в личном чате.

Полное описание процесса см. в разделе [запросы пиров](/api/bots/buttons/#peer-requests).

#### [RequestPeerType](/type/RequestPeerType/)

Критерии отбора для списка выбора пиров, показываемого пользователю.

#### [Mini Apps в Telegram](/api/bots/webapps/)

Боты могут предлагать пользователям интерактивные веб-приложения на HTML5, полностью заменяющие любой сайт.

#### [Кнопки ботов](/api/bots/buttons/)

Пользователи могут взаимодействовать с вашим ботом через кнопки и даже через инлайн-кнопки прямо в инлайн-сообщениях в любом чате.
