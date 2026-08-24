---
title: "messages.acceptUrlAuth"
original: "https://core.telegram.org/method/messages.acceptUrlAuth"
section: ref
kind: method
description: "Используйте этот метод, чтобы подтвердить запрос авторизации Seamless Telegram Login; подробнее см. здесь »"
layout: layout.njk
---

# messages.acceptUrlAuth

Используйте этот метод, чтобы подтвердить запрос авторизации Seamless Telegram Login; подробнее [см. здесь »](/api/url-authorization/)

```
urlAuthResultRequest#f8f8eb1e flags:# request_write_access:flags.0?true request_phone_number:flags.1?true match_codes_first:flags.5?true bot:User domain:string browser:flags.2?string platform:flags.2?string ip:flags.2?string region:flags.2?string match_codes:flags.3?Vector<string> user_id_hint:flags.4?long = UrlAuthResult;
urlAuthResultAccepted#623a8fa0 flags:# url:flags.0?string = UrlAuthResult;
urlAuthResultDefault#a9d6db1f = UrlAuthResult;
---functions---
messages.acceptUrlAuth#67a3f0de flags:# write_allowed:flags.0?true share_phone_number:flags.3?true peer:flags.1?InputPeer msg_id:flags.1?int button_id:flags.1?int url:flags.2?string match_code:flags.4?string = UrlAuthResult;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>write_allowed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Установите этот флаг, чтобы разрешить боту отправлять вам сообщения (если он это запросил)</td></tr><tr><td><strong>share_phone_number</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Установите этот флаг, чтобы передать боту номер телефона пользователя (если он был запрошен через <a href="/constructor/urlAuthResultRequest">urlAuthResultRequest</a>.<code>request_phone_number</code> и пользователь на это согласился)</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/InputPeer">InputPeer</a></td><td>[@term:peer] Расположение сообщения</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>[@term:msg_id] Идентификатор сообщения с кнопкой входа</td></tr><tr><td><strong>button_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>Идентификатор кнопки входа</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/string">string</a></td><td>URL, используемый для <a href="/api/url-authorization#link-url-authorization">авторизации по ссылке, подробнее »</a></td></tr><tr><td><strong>match_code</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/string">string</a></td><td>Если в <a href="/constructor/urlAuthResultRequest">urlAuthResultRequest</a>.<code>match_codes</code> было задано значение — эмодзи или код, выбранный пользователем из предложенного списка; должен передаваться всегда, когда задано <code>match_codes</code>, даже если было задано <code>match_codes_first</code> и код уже был проверен через <a href="/method/messages.checkUrlAuthMatchCode">messages.checkUrlAuthMatchCode</a></td></tr></tbody></table>

### Результат

[UrlAuthResult](/type/UrlAuthResult/)

### Этот метод доступен только пользователям

### Связанные страницы

#### [urlAuthResultRequest](/constructor/urlAuthResultRequest/)

Сведения о запросе авторизации; подробнее [см. здесь »](/api/url-authorization/)

#### [Бесшовный вход через Telegram](/api/url-authorization/)

Обработка запросов авторизации по URL через Seamless Telegram Login.

#### [messages.checkUrlAuthMatchCode](/method/messages.checkUrlAuthMatchCode/)

Сверить выбранный пользователем код соответствия с кодом, показанным на странице входа, в рамках [процесса авторизации OAuth »](/api/url-authorization/#oauth-authorization).

Используется только тогда, когда в конструкторе [urlAuthResultRequest](/constructor/urlAuthResultRequest/), возвращённом методом [messages.requestUrlAuth](/method/messages.requestUrlAuth/), установлены оба флага `match_codes` и `match_codes_first`.  
Если возвращается [boolTrue](/constructor/boolTrue/), продолжите процедуру входа и передайте проверенный код в [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/).`match_code`.
