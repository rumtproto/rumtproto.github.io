---
title: "inputKeyboardButtonUrlAuth"
original: "https://core.telegram.org/constructor/inputKeyboardButtonUrlAuth"
section: ref
kind: constructor
description: "Кнопка для запроса авторизации пользователя по URL через Seamless Telegram Login."
layout: layout.njk
---

# inputKeyboardButtonUrlAuth

Кнопка для запроса [авторизации](/method/messages.acceptUrlAuth/) пользователя по URL через [Seamless Telegram Login](https://telegram.org/blog/privacy-discussions-web-bots#meet-seamless-web-bots).

Используйте этот конструктор, чтобы отправить кнопку [keyboardButtonUrlAuth](/constructor/keyboardButtonUrlAuth/) в [инлайн-клавиатуре](https://core.telegram.org/bots/features#inline-keyboards).

```
inputKeyboardButtonUrlAuth#68013e72 flags:# request_write_access:flags.0?true style:flags.10?KeyboardButtonStyle text:string fwd_text:flags.1?string url:string bot:InputUser = KeyboardButton;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>request_write_access</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Установите этот флаг, чтобы запросить для вашего бота разрешение отправлять пользователю сообщения.</td></tr><tr><td><strong>style</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.10?<a href="/type/KeyboardButtonStyle">KeyboardButtonStyle</a></td><td>Стиль кнопки; подробнее о стилях кнопок см. <a href="/api/bots/buttons#button-styles">здесь »</a>.</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Текст кнопки</td></tr><tr><td><strong>fwd_text</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Новый текст кнопки в пересылаемых сообщениях.</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>HTTP-ссылка, которая будет открыта при нажатии кнопки с добавлением данных авторизации пользователя в строку запроса. Если пользователь откажется предоставить данные авторизации, будет открыта исходная ссылка без сведений о пользователе. Добавляемые данные те же, что описаны в разделе <a href="/widgets/login#receiving-authorization-data">Получение данных авторизации</a>.<br>ПРИМЕЧАНИЕ: необходимо всегда проверять хеш полученных данных, чтобы убедиться в подлинности и целостности данных, как описано в разделе <a href="/widgets/login#checking-authorization">Проверка авторизации</a>.</td></tr><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Имя пользователя бота, который будет использован для авторизации пользователя. Подробнее см. <a href="/widgets/login#setting-up-a-bot">Настройка бота</a>. Если не указано, подразумевается имя пользователя текущего бота. Домен в URL должен совпадать с доменом, привязанным к боту. Подробнее см. <a href="/widgets/login#linking-your-domain-to-the-bot">Привязка домена к боту</a>.</td></tr></tbody></table>

### Тип

[KeyboardButton](/type/KeyboardButton/)

### Связанные страницы

#### [Кнопки ботов](/api/bots/buttons/)

Пользователи могут взаимодействовать с вашим ботом через кнопки и даже через инлайн-кнопки прямо в инлайн-сообщениях в любом чате.

#### [Виджет входа через Telegram](https://core.telegram.org/widgets/login)

#### [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/)

Используйте этот метод, чтобы подтвердить запрос авторизации Seamless Telegram Login; подробнее [см. здесь »](/api/url-authorization/)

#### [keyboardButtonUrlAuth](/constructor/keyboardButtonUrlAuth/)

Кнопка для запроса авторизации пользователя по URL через [Seamless Telegram Login](https://telegram.org/blog/privacy-discussions-web-bots#meet-seamless-web-bots). Когда пользователь нажимает такую кнопку, следует вызвать [messages.requestUrlAuth](/method/messages.requestUrlAuth/), передав `button_id` и идентификатор сообщения-контейнера. Возвращённый объект [urlAuthResultRequest](/constructor/urlAuthResultRequest/) будет содержать более подробные сведения о запросе авторизации (`request_write_access`, если бот хочет отправлять пользователю сообщения, а также имя пользователя бота, который будет использован для авторизации). Наконец, пользователь может вызвать [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/) и получить [urlAuthResultAccepted](/constructor/urlAuthResultAccepted/) с URL, который следует открыть вместо поля `url` этого конструктора, либо [urlAuthResultDefault](/constructor/urlAuthResultDefault/) — в этом случае необходимо открыть именно `url` этого конструктора. Если пользователь отклоняет запрос авторизации, но всё же хочет открыть ссылку, необходимо использовать `url` этого конструктора.

Доступно только в [инлайн-клавиатурах](/constructor/replyInlineMarkup/).

#### [Возможности ботов Telegram](https://core.telegram.org/bots/features)

На этой странице подробно описаны отдельные элементы ботов. Если нужен общий обзор ботов, сначала прочитайте введение.
