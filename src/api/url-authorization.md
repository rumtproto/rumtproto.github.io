---
title: "Бесшовный вход через Telegram"
original: "https://core.telegram.org/api/url-authorization"
section: api
description: "Боты, сайты и приложения Telegram могут предложить пользователю войти на некоторый сайт через Telegram при нажатии на определённые ссылки или URL-кнопки в инлайн-клавиатурах."
layout: layout.njk
---

# Бесшовный вход через Telegram

Боты, сайты и приложения Telegram могут [предложить пользователю войти на некоторый сайт через Telegram](https://core.telegram.org/bots/api#loginurl) при нажатии на определённые ссылки или URL-кнопки в инлайн-клавиатурах.

### Авторизация по OAuth

```
urlAuthResultRequest#3cd623ec flags:# request_write_access:flags.0?true request_phone_number:flags.1?true match_codes_first:flags.5?true is_app:flags.6?true bot:User domain:string browser:flags.2?string platform:flags.2?string ip:flags.2?string region:flags.2?string match_codes:flags.3?Vector<string> user_id_hint:flags.4?long verified_app_name:flags.7?string = UrlAuthResult;
urlAuthResultAccepted#623a8fa0 flags:# url:flags.0?string = UrlAuthResult;

---functions---

messages.requestUrlAuth#894cc99c flags:# peer:flags.1?InputPeer msg_id:flags.1?int button_id:flags.1?int url:flags.2?string in_app_origin:flags.3?string = UrlAuthResult;

messages.acceptUrlAuth#67a3f0de flags:# write_allowed:flags.0?true share_phone_number:flags.3?true peer:flags.1?InputPeer msg_id:flags.1?int button_id:flags.1?int url:flags.2?string match_code:flags.4?string = UrlAuthResult;

messages.declineUrlAuth#35436bbc url:string = Bool;

messages.checkUrlAuthMatchCode#c9a47b0b url:string match_code:string = Bool;
```

Telegram позволяет сайтам реализовать вход через Telegram по протоколу OpenID Connect (OIDC); подробнее о том, как пользоваться Telegram Login, см. [здесь »](https://core.telegram.org/bots/telegram-login).

В этом разделе описано, как _клиенты_ Telegram авторизуют входящий запрос OIDC (OAuth).

[@term:deep link] Всё начинается с того, что клиент получает запрос на открытие [глубокой ссылки OAuth »](/api/links/#oauth-links) (`deep link` — ссылка вида `tg://…` или `https://t.me/…`, которая открывается непосредственно приложением Telegram).

[@term:Mini App] **Примечание**: обрабатывайте эту глубокую ссылку только в том случае, если запрос на её открытие пришёл извне приложения; **не** обрабатывайте её, если по ней нажали внутри самого приложения — например, в сообщениях, [кнопках](/api/bots/buttons/), встроенном браузере, [Mini App](/api/bots/webapps/) (мини-приложениях, работающих внутри Telegram) и тому подобном.

Обратите внимание, что Mini App всё же могут использовать вход по OAuth, но [несколько иначе »](#oauth-authorization-for-mini-apps).

Обрабатывайте [глубокие ссылки OAuth »](/api/links/#oauth-links) так: передайте **целиком** всю глубокую ссылку (а не только параметр `token`) в параметр `url` метода [messages.requestUrlAuth](/method/messages.requestUrlAuth/), не выставляя никаких других флагов.

В рамках этой возможности передавайте в [messages.requestUrlAuth](/method/messages.requestUrlAuth/) только [глубокие ссылки OAuth »](/api/links/#oauth-links); любой URL, не содержащий глубокой ссылки OAuth, отклоняйте.

Если в ответе получен [urlAuthResultRequest](/constructor/urlAuthResultRequest/), необходимо показать окно подтверждения, используя следующие поля (для запросов OAuth они возвращаются **всегда**):

-   `bot`: идентификатор бота, привязанного к сайту, который запрашивает вход (задаётся через [@BotFather](https://t.me/botfather))
-   `domain`: доменное имя сайта, на который пользователь пытается войти.
-   `platform`: платформа (то есть операционная система) пользователя, отправившего запрос OAuth
-   `browser`: браузер, из которого пользователь отправил запрос OAuth
-   `ip`: IP-адрес пользователя
-   `region`: местоположение пользователя, определённое по IP-адресу

Кроме того, если запрос пришёл из приложения (а не с сайта), будут выставлены следующие флаги:

-   `is_app`: выставлен, если запрос пришёл из приложения
-   `verified_app_name`: может быть выставлен, только если выставлен `is_app` **и** приложение верифицировано

Если запрос пришёл из приложения, то при отрисовке окна подтверждения вместо `domain` следует показывать `verified_app_name` (если он выставлен; иначе вместо него нужно показать «Неверифицированное приложение»).

Также могут быть выставлены следующие флаги:

-   `request_write_access`: если выставлен, приложение или сайт запрашивает разрешение писать пользователю через Telegram (от имени бота, связанного с сайтом).

-   `request_phone_number`: если выставлен, приложение или сайт запрашивает номер телефона пользователя.

-   `user_id_hint`: может содержать идентификатор пользователя, для которого был создан запрос на вход.  
    Если этот флаг выставлен и указывает на один из аккаунтов, в которых пользователь уже авторизован, клиенту следует автоматически переключиться на этот аккаунт и повторно вызвать [messages.requestUrlAuth](/method/messages.requestUrlAuth/) от его имени, и лишь затем показывать окно подтверждения.

-   `match_codes`: содержит список эмодзи, один из которых сейчас показан на странице входа исходного сайта или приложения.  
    Если этот флаг выставлен, то после того, как пользователь согласится на вход, но до отправки итогового запроса [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/), он обязан выбрать совпадающий эмодзи и передать его в `match_code` при окончательном вызове [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/).

-   `match_codes_first`: может быть выставлен тогда и только тогда, когда выставлен `match_codes`. Если он выставлен, клиенту следует предложить пользователю выбрать совпадающий код _до_ показа остального интерфейса подтверждения входа, а не после, и проверить выбранный код методом [messages.checkUrlAuthMatchCode](/method/messages.checkUrlAuthMatchCode/), передав выбранный код и глубокую ссылку OAuth.  
    Продолжать процедуру входа следует, только если метод вернул [boolTrue](/constructor/boolTrue/); выбранный и проверенный код при этом нужно передать ещё раз — в [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/).`match_code`.

    Учтите, что [messages.checkUrlAuthMatchCode](/method/messages.checkUrlAuthMatchCode/) допустимо использовать, только если выставлены оба флага — `match_codes` и `match_codes_first`: если выставлен **только** флаг `match_codes`, код нужно передать в [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/).`match_code` без проверки через [messages.checkUrlAuthMatchCode](/method/messages.checkUrlAuthMatchCode/).

    Если выбранный код неверен, [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/) или [messages.checkUrlAuthMatchCode](/method/messages.checkUrlAuthMatchCode/) вернёт ошибку.

Если пользователь вручную переключит аккаунт в окне подтверждения, следует вызвать [messages.requestUrlAuth](/method/messages.requestUrlAuth/) заново от имени вновь выбранного аккаунта, поскольку возвращаемые данные авторизации могут отличаться.

Если пользователь явно отказывается от входа, следует вызвать [messages.declineUrlAuth](/method/messages.declineUrlAuth/), передав глубокую ссылку OAuth в `url`.

Если пользователь соглашается на вход, следует вызвать [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/) со следующими параметрами:

-   `url`: глубокая ссылка OAuth
-   `write_allowed`/`share_phone_number`: если это было запрошено и пользователь дал согласие
-   `match_code`: если выставлен `match_codes` — выбранный пользователем эмодзи (он обязателен всегда, когда выставлен `match_codes`, даже если выставлен `match_codes_first` и код уже был проверен методом [messages.checkUrlAuthMatchCode](/method/messages.checkUrlAuthMatchCode/))

В случае успеха результатом будет [urlAuthResultAccepted](/constructor/urlAuthResultAccepted/).  
Если в нём присутствует поле `url`, возвращённый URL следует открыть во внешнем браузере (**не** во встроенном), по возможности в том же браузере, из которого пришла глубокая ссылка; URL также может использовать собственную схему для прямого перехода в другое приложение.  
Если поле `url` отсутствует, клиенту достаточно показать всплывающее уведомление или подобное сообщение об успешном входе.

И [messages.requestUrlAuth](/method/messages.requestUrlAuth/), и [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/) могут вернуть ошибку `URL_EXPIRED`.

#### Авторизация по OAuth из push-уведомлений

Процедуру авторизации по OAuth можно также запустить нажатием на [push-уведомление OAUTH\_REQUEST](/api/push-updates/#oauth-request): это должно запускать обычную [процедуру OAuth »](#oauth-authorization) с использованием [глубокой ссылки OAuth »](/api/links/#oauth-links), содержащейся в `custom.data_url`.

Учтите, что полученные [push-уведомления OAUTH\_REQUEST](/api/push-updates/#oauth-request) действительны всего 60 секунд.

#### Авторизация по OAuth для Mini App

[Авторизация по OAuth](#oauth-authorization) из встроенного браузера или [Mini App](/api/bots/webapps/) устроена немного иначе.

Всё начинается с того, что клиент, работая внутри встроенного браузера или [Mini App](/api/bots/webapps/), получает [событие `oauth_request`](/api/web-events/#oauth-request).

Независимо от содержимого события клиенту следует немедленно ответить [событием `oauth_supported`](/api/bots/webapps/#oauth-supported) (это особенно важно для [событий `oauth_request`](/api/web-events/#oauth-request) без `url`, которые служат для проверки того, поддерживает ли клиент вход по OAuth).

Помимо отправки [события `oauth_supported`](/api/bots/webapps/#oauth-supported), описанной выше, если в параметре `url` [события `oauth_request`](/api/web-events/#oauth-request) была передана корректная [глубокая ссылка OAuth](/api/links/#oauth-links), клиенту следует также вызвать [messages.requestUrlAuth](/method/messages.requestUrlAuth/) со следующими аргументами:

-   `url`: должен содержать [глубокую ссылку OAuth](/api/links/#oauth-links) из [oauth\_request.url](/api/web-events/#oauth-request).
-   [@term:origin] `in_app_origin`: должен быть равен origin (источнику — сочетанию схемы, хоста и порта) события webview в следующем формате: `scheme://host` (или `scheme://host:port` для нестандартных портов).

Затем следует обычная [процедура подтверждения OAuth »](#oauth-authorization).

В случае успеха возвращённый [urlAuthResultAccepted](/constructor/urlAuthResultAccepted/) следует передать обратно в Mini App, отправив [событие `oauth_result_confirmed`](/api/bots/webapps/#oauth-result-confirmed), где `result_url` равен возвращённому `url` — либо `null`, если в [urlAuthResultAccepted](/constructor/urlAuthResultAccepted/) поля `url` не было.

Перед отправкой [события `oauth_result_confirmed`](/api/bots/webapps/#oauth-result-confirmed) клиенту следует убедиться, что origin webview не изменился.

При ошибке или если пользователь отменил процедуру OAuth, клиент вместо этого должен отправить [событие `oauth_result_failed`](/api/bots/webapps/#oauth-result-failed).

### Авторизация по URL через кнопку бота

```
keyboardButtonUrlAuth#f51006f9 flags:# style:flags.10?KeyboardButtonStyle text:string fwd_text:flags.0?string url:string button_id:int = KeyboardButton;

urlAuthResultRequest#3cd623ec flags:# request_write_access:flags.0?true request_phone_number:flags.1?true match_codes_first:flags.5?true is_app:flags.6?true bot:User domain:string browser:flags.2?string platform:flags.2?string ip:flags.2?string region:flags.2?string match_codes:flags.3?Vector<string> user_id_hint:flags.4?long verified_app_name:flags.7?string = UrlAuthResult;
urlAuthResultAccepted#623a8fa0 flags:# url:flags.0?string = UrlAuthResult;
urlAuthResultDefault#a9d6db1f = UrlAuthResult;

---functions---

messages.requestUrlAuth#894cc99c flags:# peer:flags.1?InputPeer msg_id:flags.1?int button_id:flags.1?int url:flags.2?string in_app_origin:flags.3?string = UrlAuthResult;
messages.acceptUrlAuth#67a3f0de flags:# write_allowed:flags.0?true share_phone_number:flags.3?true peer:flags.1?InputPeer msg_id:flags.1?int button_id:flags.1?int url:flags.2?string match_code:flags.4?string = UrlAuthResult;
```

Используется для входа на сайт по нажатию на специальную кнопку [keyboardButtonUrlAuth](/constructor/keyboardButtonUrlAuth/), отправленную ботом.

[@term:button_id] [@term:peer] Когда пользователь нажимает на [keyboardButtonUrlAuth](/constructor/keyboardButtonUrlAuth/), следует вызвать [messages.requestUrlAuth](/method/messages.requestUrlAuth/), передав `button_id` (идентификатор нажатой кнопки в разметке клавиатуры), а также идентификатор и пир (`peer` — собеседник: пользователь, группа или канал) сообщения, в котором она находится. Возвращённый объект [urlAuthResultRequest](/constructor/urlAuthResultRequest/) содержит подробности запроса на авторизацию:

-   Параметр `domain` будет содержать доменное имя сайта, на который пользователь будет входить (например: _comments.app_).
-   Параметр `bot` будет содержать сведения о боте, через которого будет проводиться авторизация пользователя (например: _DiscussBot_).
-   Флаг `request_write_access` будет выставлен, если бот хочет отправлять пользователю сообщения.
-   Флаг `request_phone_number` будет выставлен, если бот хочет получить номер телефона пользователя.

Эти сведения следует показать в диалоговом окне:

<div class="blog_image_wrap"><a href="https://core.telegram.org/file/811140015/1734/8VZFkwWXalM.97872/6127fa62d8a0bf2b3c" target="_blank"><img src="https://core.telegram.org/file/811140909/1631/20k1Z53eiyY.23995/c541e89b74253623d9" title="ЗАГОЛОВОК" alt="ЗАГОЛОВОК" srcset="/file/811140015/1734/8VZFkwWXalM.97872/6127fa62d8a0bf2b3c , 2x"></a></div>

Если пользователь соглашается войти по этому URL, следует вызвать [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/), выставив при необходимости флаги `write_allowed`/`share_phone_number` — если они были запрошены полями [urlAuthResultRequest](/constructor/urlAuthResultRequest/).`request_write_access`/`request_phone_number` и пользователь дал на это согласие. Результатом будет [urlAuthResultAccepted](/constructor/urlAuthResultAccepted/) с итоговым URL для открытия (он всегда присутствует при авторизации по URL через кнопку бота и при [авторизации по URL-ссылке](#link-url-authorization)); этот URL включает строку запроса с запрошенными сведениями и хеш, который [сервис обязан проверить при получении](https://core.telegram.org/widgets/login#receiving-authorization-data).

Вместо него может быть возвращён и [urlAuthResultDefault](/constructor/urlAuthResultDefault/) — в этом случае следует открыть `url` из [keyboardButtonUrlAuth](/constructor/keyboardButtonUrlAuth/).

`url` из [keyboardButtonUrlAuth](/constructor/keyboardButtonUrlAuth/) необходимо открыть напрямую, без дополнительного вызова [messages.acceptUrlAuth](/method/messages.acceptUrlAuth/), и в том случае, когда пользователь открывает ссылку, отказавшись от авторизации нажатием «Отмена» в показанном выше окне.

Учтите, что в некоторых случаях [messages.requestUrlAuth](/method/messages.requestUrlAuth/) может сразу вернуть [urlAuthResultAccepted](/constructor/urlAuthResultAccepted/) — тогда никакое окно показывать не нужно, а возвращённый URL следует просто открыть.

### Авторизация по URL-ссылке

Telegram поддерживает автоматическую авторизацию на некоторых сайтах при открытии HTTP-адреса внутри приложения — при переходе по ссылке в сообщении или при нажатии на [keyboardButtonUrl](/constructor/keyboardButtonUrl/).

#### Автоматическая авторизация

Клиентам следует автоматически авторизовывать пользователя при открытии официальных сайтов Telegram, перечисленных в [ключе `autologin_domains`](/api/config/#autologin-domains) [объекта клиентской конфигурации »](/api/config/#client-configuration).

[@term:autologin_token] [@term:query string] При переходе по ссылке адрес необходимо изменить, добавив [`autologin_token` »](/constructor/config/) (токен автоматического входа) из [объекта конфигурации MTProto »](/api/config/#mtproto-configuration) в [строку запроса](https://datatracker.ietf.org/doc/html/rfc3986#section-3.4) (`query string` — часть URL после знака вопроса), вот так:

Исходный URL: `https://somedomain.telegram.org/path?query=string#fragment=value`  
Изменённый URL: `https://somedomain.telegram.org/path?query=string&autologin_token=$autologin_token#fragment=value`

Убедитесь, что используемому значению `autologin_token` не больше `10000` секунд: если оно старше, перед использованием его необходимо запросить заново методом [help.getConfig](/method/help.getConfig/).

#### Ручная авторизация

Клиентам следует показывать окно подтверждения, аналогичное тому, что используется [для кнопок ботов](#bot-button-url-authorization), чтобы авторизовать пользователя при открытии некоторых сайтов Telegram, перечисленных в ключе `url_auth_domains` [объекта клиентской конфигурации »](/api/config/#url-auth-domains).

При открытии адреса, домен которого совпадает с одним из `url_auth_domains`, следует передать этот адрес в [messages.requestUrlAuth](/method/messages.requestUrlAuth/), а затем действовать по той же схеме, что и [для кнопок ботов](#bot-button-url-authorization).

Учтите, что в некоторых случаях [messages.requestUrlAuth](/method/messages.requestUrlAuth/) может сразу вернуть [urlAuthResultAccepted](/constructor/urlAuthResultAccepted/) — тогда окно подтверждения показывать не нужно, а возвращённый адрес следует просто открыть.
