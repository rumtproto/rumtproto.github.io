---
title: "keyboardButtonUrlAuth"
original: "https://core.telegram.org/constructor/keyboardButtonUrlAuth"
section: ref
kind: constructor
description: "Кнопка для запроса авторизации пользователя по URL через Seamless Telegram Login. Когда пользователь нажимает такую кнопку, следует вызвать messages.requestUrlAuth, передав…"
layout: layout.njk
---

# keyboardButtonUrlAuth

Кнопка для запроса авторизации пользователя по URL через [Seamless Telegram Login](https://telegram.org/blog/privacy-discussions-web-bots#meet-seamless-web-bots). Когда пользователь нажимает такую кнопку, следует вызвать [messages.requestUrlAuth](/method/messages.requestUrlAuth/), передав `button_id` и идентификатор сообщения-контейнера. Возвращённый объект [urlAuthResultRequest](/constructor/urlAuthResultRequest/) будет содержать более подробные сведения о запросе авторизации (`request_write_access`, если бот хочет отправлять пользователю сообщения, а также имя пользователя бота, который будет использован для авторизации). Наконец, пользователь может вызвать [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/) и получить [urlAuthResultAccepted](/constructor/urlAuthResultAccepted/) с URL, который следует открыть вместо поля `url` этого конструктора, либо [urlAuthResultDefault](/constructor/urlAuthResultDefault/) — в этом случае необходимо открыть именно `url` этого конструктора. Если пользователь отклоняет запрос авторизации, но всё же хочет открыть ссылку, необходимо использовать `url` этого конструктора.

Доступно только в [инлайн-клавиатурах](/constructor/replyInlineMarkup/).

```
keyboardButtonUrlAuth#f51006f9 flags:# style:flags.10?KeyboardButtonStyle text:string fwd_text:flags.0?string url:string button_id:int = KeyboardButton;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>style</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.10?<a href="/type/KeyboardButtonStyle">KeyboardButtonStyle</a></td><td>Стиль кнопки; подробнее о стилях кнопок см. <a href="/api/bots/buttons#button-styles">здесь »</a>.</td></tr><tr><td><strong>text</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Подпись кнопки</td></tr><tr><td><strong>fwd_text</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Новый текст кнопки в пересылаемых сообщениях.</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>HTTP-ссылка, которая будет открыта при нажатии кнопки с добавлением данных авторизации пользователя в строку запроса. Если пользователь откажется предоставить данные авторизации, будет открыта исходная ссылка без сведений о пользователе. Добавляемые данные те же, что описаны в разделе <a href="/widgets/login#receiving-authorization-data">Получение данных авторизации</a>.<br><br><strong>ПРИМЕЧАНИЕ</strong>: сервисы <strong>обязаны всегда</strong> проверять хеш полученных данных, чтобы убедиться в подлинности и целостности данных, как описано в разделе <a href="/widgets/login#checking-authorization">Проверка авторизации</a>.</td></tr><tr><td><strong>button_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор кнопки, который следует передать в <a href="/method/messages.requestUrlAuth">messages.requestUrlAuth</a></td></tr></tbody></table>

### Тип

[KeyboardButton](/type/KeyboardButton/)

### Связанные страницы

#### [Кнопки ботов](/api/bots/buttons/)

Пользователи могут взаимодействовать с вашим ботом через кнопки и даже через инлайн-кнопки прямо в инлайн-сообщениях в любом чате.

#### [Виджет входа через Telegram](https://core.telegram.org/widgets/login)

#### [messages.requestUrlAuth](/method/messages.requestUrlAuth/)

Получить дополнительную информацию о запросе авторизации Seamless Telegram Login; подробнее [см. здесь »](/api/url-authorization/)

#### [urlAuthResultRequest](/constructor/urlAuthResultRequest/)

Сведения о запросе авторизации; подробнее [см. здесь »](/api/url-authorization/)

#### [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/)

Используйте этот метод, чтобы подтвердить запрос авторизации Seamless Telegram Login; подробнее [см. здесь »](/api/url-authorization/)

#### [urlAuthResultAccepted](/constructor/urlAuthResultAccepted/)

Сведения о принятом запросе авторизации; подробнее [см. здесь »](/api/url-authorization/)

#### [urlAuthResultDefault](/constructor/urlAuthResultDefault/)

Сведения о принятом запросе авторизации; подробнее [см. здесь »](/api/url-authorization/)

#### [replyInlineMarkup](/constructor/replyInlineMarkup/)

Представляет инлайн-клавиатуру
