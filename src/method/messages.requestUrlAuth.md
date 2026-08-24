---
title: "messages.requestUrlAuth"
original: "https://core.telegram.org/method/messages.requestUrlAuth"
section: ref
kind: method
description: "Получить дополнительную информацию о запросе авторизации Seamless Telegram Login; подробнее см. здесь »"
layout: layout.njk
---

# messages.requestUrlAuth

Получить дополнительную информацию о запросе авторизации Seamless Telegram Login; подробнее [см. здесь »](/api/url-authorization/)

```
urlAuthResultRequest#f8f8eb1e flags:# request_write_access:flags.0?true request_phone_number:flags.1?true match_codes_first:flags.5?true bot:User domain:string browser:flags.2?string platform:flags.2?string ip:flags.2?string region:flags.2?string match_codes:flags.3?Vector<string> user_id_hint:flags.4?long = UrlAuthResult;
urlAuthResultAccepted#623a8fa0 flags:# url:flags.0?string = UrlAuthResult;
urlAuthResultDefault#a9d6db1f = UrlAuthResult;
---functions---
messages.requestUrlAuth#894cc99c flags:# peer:flags.1?InputPeer msg_id:flags.1?int button_id:flags.1?int url:flags.2?string in_app_origin:flags.3?string = UrlAuthResult;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Пир, в котором находится сообщение</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>[@term:msg_id] Сообщение</td></tr><tr><td><strong>button_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>Идентификатор кнопки с запросом авторизации</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/string">string</a></td><td>URL, используемый для <a href="/api/url-authorization#link-url-authorization">авторизации по ссылке, подробнее »</a></td></tr><tr><td><strong>in_app_origin</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/string">string</a></td><td>Для <a href="/api/url-authorization#oauth-authorization-for-mini-apps">авторизации OAuth из mini apps »</a>: источник (origin) веб-представления, инициировавшего запрос OAuth, в формате <code>scheme://host</code> (или <code>scheme://host:port</code> для нестандартных портов)</td></tr></tbody></table>

### Результат

[UrlAuthResult](/type/UrlAuthResult/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>500</td><td>OAUTH_REQUEST_INVALID</td><td>Указанный OAuth-запрос недействителен.</td></tr><tr><td>400</td><td>URL_EXPIRED</td><td>Срок действия указанного OAuth-запроса истёк.</td></tr><tr><td>400</td><td>URL_INVALID</td><td>Указан недействительный URL.</td></tr></tbody></table>

### Связанные страницы

#### [Бесшовный вход через Telegram](/api/url-authorization/)

Обработка запросов авторизации по URL через Seamless Telegram Login.
