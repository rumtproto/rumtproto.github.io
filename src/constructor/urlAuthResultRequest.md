---
title: "urlAuthResultRequest"
original: "https://core.telegram.org/constructor/urlAuthResultRequest"
section: ref
kind: constructor
description: "Сведения о запросе авторизации; подробнее см. здесь »"
layout: layout.njk
---

# urlAuthResultRequest

Сведения о запросе авторизации; подробнее [см. здесь »](/api/url-authorization/)

```
urlAuthResultRequest#f8f8eb1e flags:# request_write_access:flags.0?true request_phone_number:flags.1?true match_codes_first:flags.5?true bot:User domain:string browser:flags.2?string platform:flags.2?string ip:flags.2?string region:flags.2?string match_codes:flags.3?Vector<string> user_id_hint:flags.4?long = UrlAuthResult;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>request_write_access</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Хочет ли бот отправлять сообщения пользователю</td></tr><tr><td><strong>request_phone_number</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Приложение или сайт запрашивает номер телефона пользователя; если пользователь согласен, установите <code>share_phone_number</code> при вызове <a href="/method/messages.acceptUrlAuth">messages.acceptUrlAuth</a></td></tr><tr><td><strong>match_codes_first</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/constructor/true">true</a></td><td>Может быть указано, только если также установлено <code>match_codes</code>; если установлено, клиенты обязаны попросить пользователя выбрать подходящий код <em>до</em> показа остального интерфейса подтверждения входа и обязаны проверить выбор с помощью <a href="/method/messages.checkUrlAuthMatchCode">messages.checkUrlAuthMatchCode</a>, прежде чем продолжать</td></tr><tr><td><strong>is_app</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/constructor/true">true</a></td><td>Устанавливается, если запрос OAuth пришёл из приложения, а не с сайта; в этом случае <code>domain</code> в запросе подтверждения должен быть заменён на <code>verified_app_name</code> (если задано) или на «Unverified App»</td></tr><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/User">User</a></td><td>Имя пользователя бота, который будет использован для авторизации пользователя. Если не указано, подразумевается имя пользователя текущего бота. Домен в URL должен совпадать с доменом, привязанным к боту. Подробнее см. <a href="https://core.telegram.org/widgets/login#linking-your-domain-to-the-bot">Привязка домена к боту</a>.</td></tr><tr><td><strong>domain</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Доменное имя сайта, на котором пользователь выполнит вход.</td></tr><tr><td><strong>browser</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/string">string</a></td><td>Браузер, из которого пользователь выполнил OAuth-запрос</td></tr><tr><td><strong>platform</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/string">string</a></td><td>Платформа (операционная система) пользователя, отправившего запрос OAuth</td></tr><tr><td><strong>ip</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/string">string</a></td><td>IP-адрес пользователя, выполняющего запрос OAuth</td></tr><tr><td><strong>region</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/string">string</a></td><td>Местоположение пользователя, определённое по IP-адресу</td></tr><tr><td><strong>match_codes</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/string">string</a>&gt;</td><td>Список эмодзи или кодов, один из которых сейчас отображается на странице входа сайта или приложения; пользователь должен выбрать совпадающий и передать его в <a href="/method/messages.acceptUrlAuth">messages.acceptUrlAuth</a>.<code>match_code</code></td></tr><tr><td><strong>user_id_hint</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/long">long</a></td><td>Может содержать идентификатор аккаунта, для которого был создан запрос на вход; если он совпадает с одним из аккаунтов, в которые выполнен вход, клиентам следует автоматически переключиться на этот аккаунт и повторно вызвать <a href="/method/messages.requestUrlAuth">messages.requestUrlAuth</a> перед показом запроса подтверждения</td></tr><tr><td><strong>verified_app_name</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/type/string">string</a></td><td>Может быть указано, только если установлено <code>is_app</code> и приложение верифицировано; при наличии должно заменять <code>domain</code> в запросе подтверждения</td></tr></tbody></table>

### Тип

[UrlAuthResult](/type/UrlAuthResult/)

### Связанные страницы

#### [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/)

Используйте этот метод, чтобы подтвердить запрос авторизации Seamless Telegram Login; подробнее [см. здесь »](/api/url-authorization/)

#### [messages.checkUrlAuthMatchCode](/method/messages.checkUrlAuthMatchCode/)

Сверить выбранный пользователем код соответствия с кодом, показанным на странице входа, в рамках [процесса авторизации OAuth »](/api/url-authorization/#oauth-authorization).

Используется только тогда, когда в конструкторе [urlAuthResultRequest](/constructor/urlAuthResultRequest/), возвращённом методом [messages.requestUrlAuth](/method/messages.requestUrlAuth/), установлены оба флага `match_codes` и `match_codes_first`.  
Если возвращается [boolTrue](/constructor/boolTrue/), продолжите процедуру входа и передайте проверенный код в [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/).`match_code`.

#### [messages.requestUrlAuth](/method/messages.requestUrlAuth/)

Получить дополнительную информацию о запросе авторизации Seamless Telegram Login; подробнее [см. здесь »](/api/url-authorization/)

#### [Бесшовный вход через Telegram](/api/url-authorization/)

Обработка запросов авторизации по URL через Seamless Telegram Login.
