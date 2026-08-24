---
title: "messages.checkUrlAuthMatchCode"
original: "https://core.telegram.org/method/messages.checkUrlAuthMatchCode"
section: ref
kind: method
description: "Сверить выбранный пользователем код соответствия с кодом, показанным на странице входа, в рамках процесса авторизации OAuth »."
layout: layout.njk
---

# messages.checkUrlAuthMatchCode

Сверить выбранный пользователем код соответствия с кодом, показанным на странице входа, в рамках [процесса авторизации OAuth »](/api/url-authorization/#oauth-authorization).

Используется только тогда, когда в конструкторе [urlAuthResultRequest](/constructor/urlAuthResultRequest/), возвращённом методом [messages.requestUrlAuth](/method/messages.requestUrlAuth/), установлены оба флага `match_codes` и `match_codes_first`.  
Если возвращается [boolTrue](/constructor/boolTrue/), продолжите процедуру входа и передайте проверенный код в [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/).`match_code`.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.checkUrlAuthMatchCode#c9a47b0b url:string match_code:string = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Глубокая ссылка OAuth</td></tr><tr><td><strong>match_code</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Эмодзи или код, выбранный пользователем из списка в <a href="/constructor/urlAuthResultRequest">urlAuthResultRequest</a>.<code>match_codes</code></td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>URL_INVALID</td><td>Указан недействительный URL.</td></tr></tbody></table>

### Связанные страницы

#### [urlAuthResultRequest](/constructor/urlAuthResultRequest/)

Сведения о запросе авторизации; подробнее [см. здесь »](/api/url-authorization/)

#### [Бесшовный вход через Telegram](/api/url-authorization/)

Обработка запросов авторизации по URL через Seamless Telegram Login.

#### [messages.requestUrlAuth](/method/messages.requestUrlAuth/)

Получить дополнительную информацию о запросе авторизации Seamless Telegram Login; подробнее [см. здесь »](/api/url-authorization/)

#### [boolTrue](/constructor/boolTrue/)

Конструктор можно трактовать как **логическое** значение `true`.

#### [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/)

Используйте этот метод, чтобы подтвердить запрос авторизации Seamless Telegram Login; подробнее [см. здесь »](/api/url-authorization/)
