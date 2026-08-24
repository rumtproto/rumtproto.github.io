---
title: "Авторизация пользователя"
original: "https://core.telegram.org/api/auth"
section: api
description: "Авторизация привязана к идентификатору ключа шифрования клиента — auth_key_id (короткий отпечаток авторизационного ключа, по которому сервер узнаёт нужный ключ). После авторизации…"
layout: layout.njk
---

# Авторизация пользователя

[@term:auth_key_id] Авторизация привязана к идентификатору ключа шифрования клиента — **auth\_key\_id** (короткий отпечаток авторизационного ключа, по которому сервер узнаёт нужный ключ). После авторизации в методы не нужно передавать никаких дополнительных параметров.

Чтобы войти в качестве [бота](https://core.telegram.org/bots), следуйте [этим инструкциям »](/api/bots/).

Пользователям также доступны следующие альтернативные способы входа:

-   [Вход по QR-коду »](/api/qr-login/).
-   [@term:passkey] [Вход по passkey »](/api/passkeys/) — passkey (ключ доступа, хранится на устройстве и заменяет пароль).

### Отправка кода подтверждения

Примеры реализации: [Telegram for Android](https://github.com/DrKLO/Telegram/blob/master/TMessagesProj/src/main/java/org/telegram/ui/LoginActivity.java), [TDLib](https://github.com/tdlib/td/tree/master/td/telegram/SendCodeHelper.cpp).

Чтобы показать аккуратно отформатированное поле номера телефона с проверкой ввода, можно получить конструктор [help.countriesList](/constructor/help.countriesList/) с помощью метода [help.getCountriesList](/method/help.getCountriesList/).  
Затем конфигурация [help.countriesList](/constructor/help.countriesList/) и другие значения конфигурации используются так, как описано [здесь »](/api/config/#country-information-and-login-phone-patterns).

После этого на телефон пользователя отправляется текстовое сообщение с кодом авторизации — с помощью [auth.sendCode](/method/auth.sendCode/).  
Однако так бывает не всегда — если используются будущие токены авторизации:

#### Будущие токены авторизации

[@term:future_auth_token] При вызове [auth.logOut](/method/auth.logOut/) для ранее авторизованной сессии сервер может вернуть `future_auth_token` (будущий токен авторизации — секрет, позволяющий войти в этот же аккаунт позднее без кода подтверждения), который следует сохранить в локальной базе данных.  
Кроме того, `future_auth_token` содержится в конструкторе [auth.authorization](/constructor/auth.authorization/), возвращаемом при входе.  
В базе данных будущих токенов авторизации в любой момент должно храниться не более 20 токенов: по мере добавления новых вытесняйте более старые, чтобы не превышать этот предел.  
При вызове [auth.sendCode](/method/auth.sendCode/) все будущие токены авторизации, имеющиеся в базе данных, следует передать в `codeSettings.logout_tokens`.  
Если какой-либо из будущих токенов авторизации соответствует аккаунту, в который выполняется вход, и срок действия токена не истёк:

-   Если [двухфакторная аутентификация](/api/srp/) не включена, [auth.sendCode](/method/auth.sendCode/) сразу вернёт конструктор [auth.sentCodeSuccess](/constructor/auth.sentCodeSuccess/) со сведениями о сессии, что означает: сессия авторизована.
-   Если [двухфакторная аутентификация](/api/srp/) включена, [auth.sendCode](/method/auth.sendCode/) вернёт RPC-ошибку `SESSION_PASSWORD_NEEDED`, предлагая пользователю [ввести пароль двухфакторной аутентификации](#2fa), и не отправит никакого кода авторизации.

В противном случае система отправит код авторизации по описанной ниже логике:

#### Типы кодов

```
codeSettings#ad253d78 flags:# allow_flashcall:flags.0?true current_number:flags.1?true allow_app_hash:flags.4?true allow_missed_call:flags.5?true allow_firebase:flags.7?true unknown_number:flags.9?true logout_tokens:flags.6?Vector<bytes> token:flags.8?string app_sandbox:flags.8?Bool = CodeSettings;

auth.sentCodeTypeApp#3dbb5986 length:int = auth.SentCodeType;
auth.sentCodeTypeSms#c000bba2 length:int = auth.SentCodeType;
auth.sentCodeTypeCall#5353e5a7 length:int = auth.SentCodeType;
auth.sentCodeTypeFlashCall#ab03c6d9 pattern:string = auth.SentCodeType;
auth.sentCodeTypeMissedCall#82006484 prefix:string length:int = auth.SentCodeType;
auth.sentCodeTypeEmailCode#f450f59b flags:# apple_signin_allowed:flags.0?true google_signin_allowed:flags.1?true email_pattern:string length:int reset_available_period:flags.3?int reset_pending_date:flags.4?int = auth.SentCodeType;
auth.sentCodeTypeSetUpEmailRequired#a5491dea flags:# apple_signin_allowed:flags.0?true google_signin_allowed:flags.1?true = auth.SentCodeType;
auth.sentCodeTypeFragmentSms#d9565c39 url:string length:int = auth.SentCodeType;
auth.sentCodeTypeFirebaseSms#009fd736 flags:# nonce:flags.0?bytes play_integrity_project_id:flags.2?long play_integrity_nonce:flags.2?bytes receipt:flags.1?string push_timeout:flags.1?int length:int = auth.SentCodeType;
auth.sentCodeTypeSmsWord#a416ac81 flags:# beginning:flags.0?string = auth.SentCodeType;
auth.sentCodeTypeSmsPhrase#b37794af flags:# beginning:flags.0?string = auth.SentCodeType;

auth.sentCode#5e002502 flags:# type:auth.SentCodeType phone_code_hash:string next_type:flags.1?auth.CodeType timeout:flags.2?int = auth.SentCode;
auth.sentCodeSuccess#2390fe44 authorization:auth.Authorization = auth.SentCode;
auth.sentCodePaymentRequired#f8827ebf store_product:string phone_code_hash:string support_email_address:string support_email_subject:string premium_days:int currency:string amount:long = auth.SentCode;

---functions---

auth.sendCode#a677244f phone_number:string api_id:int api_hash:string settings:CodeSettings = auth.SentCode;
auth.resendCode#cae47523 flags:# phone_number:string phone_code_hash:string reason:flags.0?string = auth.SentCode;

auth.requestFirebaseSms#8e39261e flags:# phone_number:string phone_code_hash:string safety_net_token:flags.0?string play_integrity_token:flags.2?string ios_push_secret:flags.1?string = Bool;
```

У метода [auth.sendCode](/method/auth.sendCode/) есть параметры, включающие и отключающие использование flash-звонков и пропущенных звонков, а также позволяющие передать SMS-токен, который будет включён в отправляемое SMS. Последнее, например, требуется в новых версиях Android для работы с [Android SMS Retriever APIs](https://developers.google.com/identity/sms-retriever/overview).

Возвращаемый объект [auth.sentCode](/constructor/auth.sentCode/) содержит несколько параметров:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>type</strong></td><td style="text-align: center;"><a href="/type/auth.SentCodeType">auth.SentCodeType</a></td><td>Тип кода подтверждения</td></tr><tr><td><strong>phone_code_hash</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Хеш кода подтверждения; его следует сохранить и переиспользовать в последующих вызовах методов</td></tr><tr><td><strong>next_type</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/auth.CodeType">auth.CodeType</a></td><td>Тип кода подтверждения, который будет отправлен следующим, если код не получен в течение <code>timeout</code> секунд: чтобы отправить его, используйте <a href="/method/auth.resendCode">auth.resendCode</a></td></tr><tr><td><strong>timeout</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/int">int</a></td><td>Тайм-аут ожидания кода подтверждения</td></tr></tbody></table>

Система сама выбирает способ доставки кода авторизации; вариантов доставки несколько, и клиенту сообщается о выбранном через поле `type` конструктора [auth.SentCodeType](/type/auth.SentCodeType/).

Обратите внимание: при некоторых условиях во время регистрации или входа с помощью SMS-кода или звонка допустим только тип кода [auth.sentCodeTypeFirebaseSms](/constructor/auth.sentCodeTypeFirebaseSms/).

Сейчас использовать аутентификацию Firebase SMS могут только официальные мобильные приложения: это значит, что при некоторых условиях получить код для входа или регистрации по SMS либо звонком могут только официальные приложения.

Сторонние приложения и немобильные официальные приложения могут выполнять вход любым из остальных способов доставки кода (коды Telegram, коды Fragment, коды по электронной почте, будущие токены авторизации, [QR-коды »](/api/qr-login/) и [passkeys »](/api/passkeys/)).

> Разработчики, чьим сторонним приложениям необходима авторизация по SMS, могут написать нам на sms@telegram.org, указав `#enableSMS` в теме письма.

-   [auth.sentCodeTypeSetUpEmailRequired](/constructor/auth.sentCodeTypeSetUpEmailRequired/): если пользователь входит достаточно часто, Telegram попросит его подтвердить адрес электронной почты, на который будет отправляться код для входа.  
    Подробнее о процедуре подтверждения см. [здесь »](#email-verification).
-   [auth.sentCodeTypeEmailCode](/constructor/auth.sentCodeTypeEmailCode/): код отправлен на настроенный адрес электронной почты для входа.
-   [auth.sentCodeTypeFragmentSms](/constructor/auth.sentCodeTypeFragmentSms/): код отправлен через [fragment.com](https://fragment.com): откройте указанный `url`, чтобы войти на платформу [Fragment](https://fragment.com) с помощью своего кошелька и посмотреть код.
-   [@term:session] [auth.sentCodeTypeApp](/constructor/auth.sentCodeTypeApp/): код отправлен как служебное уведомление Telegram во все остальные активные сессии (`session` — авторизованный вход в аккаунт с отдельного устройства или клиента).
-   [auth.sentCodeTypeFirebaseSms](/constructor/auth.sentCodeTypeFirebaseSms/): вход через Firebase, только для официальных приложений.
    -   На Android этот тип может быть получен, только если в [codeSettings](/constructor/codeSettings/) установлен флаг `allow_firebase`.  
        Клиент обязан передать полученные [auth.sentCodeTypeFirebaseSms](/constructor/auth.sentCodeTypeFirebaseSms/).`nonce`/`play_integrity_nonce` (одноразовые значения) в [SafetyNet Attestation API](https://developer.android.com/training/safetynet/attestation)/[Google Play Integrity API](https://developer.android.com/google/play/integrity/overview), а затем передать полученный объект JWS в [auth.requestFirebaseSms](/method/auth.requestFirebaseSms/).`safety_net_token`/`play_integrity_token` вместе с `phone_number` и `phone_code_hash`.  
        Если метод вернул [boolTrue](/constructor/boolTrue/), код будет отправлен по SMS; иначе необходимо воспользоваться способом аутентификации `next_type` через [auth.resendCode](/method/auth.resendCode/).  
        Способ `next_type` необходимо использовать и в том случае, если проверка целостности устройства не прошла и токен для вызова [auth.requestFirebaseSms](/method/auth.requestFirebaseSms/) получить не удалось: тогда причину неудачной проверки целостности устройства нужно передать в [auth.resendCode](/method/auth.resendCode/) в поле `reason`.
    -   На iOS этот тип может быть получен, только если токен устройства для Apple Push был передан в [codeSettings](/constructor/codeSettings/).`token`.  
        После этого клиент ждёт нового push-уведомления в течение [auth.sentCodeTypeFirebaseSms](/constructor/auth.sentCodeTypeFirebaseSms/).`push_timeout` секунд.  
        Если push-уведомление не получено за `push_timeout` секунд, необходимо воспользоваться способом аутентификации `next_type` через [auth.resendCode](/method/auth.resendCode/).  
        Если получено push-уведомление с полями `receipt` и `ios_push_secret` и значение поля `receipt` совпадает с [codeSettings](/constructor/codeSettings/).`receipt`, то значение `ios_push_secret` передаётся в [auth.requestFirebaseSms](/method/auth.requestFirebaseSms/).`ios_push_secret` вместе с `phone_number` и `phone_code_hash`.  
        Если метод вернул [boolTrue](/constructor/boolTrue/), код будет отправлен по SMS; иначе необходимо воспользоваться способом аутентификации `next_type` через [auth.resendCode](/method/auth.resendCode/).  
        Способ `next_type` необходимо использовать и в том случае, если проверка целостности устройства не прошла и секрет для вызова [auth.requestFirebaseSms](/method/auth.requestFirebaseSms/) получить не удалось: тогда причину неудачной проверки целостности устройства нужно передать в [auth.resendCode](/method/auth.resendCode/) в поле `reason`.
-   [auth.sentCodeTypeSms](/constructor/auth.sentCodeTypeSms/): код отправлен по SMS.
-   [auth.sentCodeTypeSmsWord](/constructor/auth.sentCodeTypeSmsWord/): код отправлен по SMS, содержащему одно слово, — это слово и есть код для ввода.  
    Флаг `beginning`, если он установлен, содержит первую букву секретного слова.
-   [auth.sentCodeTypeSmsPhrase](/constructor/auth.sentCodeTypeSmsPhrase/): код отправлен по SMS, содержащему фразу из нескольких слов, — эта фраза и есть код для ввода.  
    Флаг `beginning`, если он установлен, содержит первое слово секретной фразы.
-   [auth.sentCodeTypeCall](/constructor/auth.sentCodeTypeCall/): пользователю поступит телефонный звонок, и синтезированный голос продиктует код подтверждения для ввода.
-   [auth.sentCodeTypeFlashCall](/constructor/auth.sentCodeTypeFlashCall/): код будет отправлен через flash-звонок, который немедленно сбрасывается.  
    В этом случае кодом подтверждения служит сам номер телефона; достаточно убедиться, что номер соответствует указанному шаблону (см. [auth.sentCodeTypeFlashCall](/constructor/auth.sentCodeTypeFlashCall/)).
-   [auth.sentCodeTypeMissedCall](/constructor/auth.sentCodeTypeMissedCall/): код будет отправлен через flash-звонок, который немедленно сбрасывается.  
    Последние цифры номера, с которого поступает звонок, и есть код, который пользователь вводит вручную.
-   [Будущие токены авторизации »](#future-auth-tokens)

Если сообщение идёт на телефон слишком долго (дольше `timeout` секунд), можно вызвать метод [auth.resendCode](/method/auth.resendCode/), чтобы повторно отправить код типа `next_type`. Если это повторится, можно снова вызвать [auth.resendCode](/method/auth.resendCode/) с тем значением `next_type`, которое вернул предыдущий вызов [auth.resendCode](/method/auth.resendCode/). Чтобы отменить код подтверждения, используйте [auth.cancelCode](/method/auth.cancelCode/).

##### Платная авторизация

Официальные приложения могут вместо этого получить [auth.sentCodePaymentRequired](/constructor/auth.sentCodePaymentRequired/): этот конструктор означает, что из-за высокой стоимости SMS с кодом подтверждения для страны или оператора пользователя для продолжения входа или регистрации ему необходимо приобрести подписку Telegram Premium, причём по сценарию, доступному только официальным клиентам.

### Подтверждение адреса электронной почты

```
auth.sentCodeTypeSetUpEmailRequired#a5491dea flags:# apple_signin_allowed:flags.0?true google_signin_allowed:flags.1?true = auth.SentCodeType;

emailVerifyPurposeLoginSetup#4345be73 phone_number:string phone_code_hash:string = EmailVerifyPurpose;

emailVerificationCode#922e55a9 code:string = EmailVerification;
emailVerificationGoogle#db909ec2 token:string = EmailVerification;
emailVerificationApple#96d074fd token:string = EmailVerification;

account.sentEmailCode#811f854f email_pattern:string length:int = account.SentEmailCode;

account.emailVerifiedLogin#e1bb0d61 email:string sent_code:auth.SentCode = account.EmailVerified;

emailVerifyPurposeLoginChange#527d22eb = EmailVerifyPurpose;
account.emailVerified#2b96cd1b email:string = account.EmailVerified;

---functions---

account.sendVerifyEmailCode#98e037bb purpose:EmailVerifyPurpose email:string = account.SentEmailCode;
account.verifyEmail#032da4cf purpose:EmailVerifyPurpose verification:EmailVerification = account.EmailVerified;
auth.resetLoginEmail#7e960193 phone_number:string phone_code_hash:string = auth.SentCode;
```

Telegram может вернуть тип кода [auth.sentCodeTypeSetUpEmailRequired](/constructor/auth.sentCodeTypeSetUpEmailRequired/) в конструкторе [auth.sentCode](/constructor/auth.sentCode/), который возвращает метод [auth.sendCode](/method/auth.sendCode/).  
В этом случае клиенту следует предложить пользователю подтвердить адрес электронной почты, на который будет приходить код для входа, — процедура такова:

-   Если установлен флаг `google_signin_allowed` или `apple_signin_allowed`, пользователь может подтвердить свою почту напрямую через Google/Apple ID, как описано [здесь (Google ID) »](https://developers.google.com/identity/sign-in/android/sign-in) и [здесь (Apple ID) »](https://developer.apple.com/documentation/sign_in_with_apple).  
    Получив ID-токен, вызовите [account.verifyEmail](/method/account.verifyEmail/) со следующими параметрами:

    -   `purpose` — конструктор [emailVerifyPurposeLoginSetup](/constructor/emailVerifyPurposeLoginSetup/)
    -   `purpose.phone_number` — номер телефона, использованный в [auth.sendCode](/method/auth.sendCode/)
    -   `purpose.phone_code_hash` — хеш кода из конструктора [auth.sentCode](/constructor/auth.sentCode/), возвращённого методом [auth.sendCode](/method/auth.sendCode/)
    -   `verification` — [emailVerificationGoogle](/constructor/emailVerificationGoogle/) или [emailVerificationApple](/constructor/emailVerificationApple/)
    -   `verification.token` — ID-токен, возвращённый Google ID API.

    В случае успеха метод [account.verifyEmail](/method/account.verifyEmail/) вернёт конструктор [account.emailVerifiedLogin](/constructor/account.emailVerifiedLogin/) с конструктором [auth.sentCode](/constructor/auth.sentCode/), который обрабатывается [обычным образом »](#code-types).

-   Иначе предложите пользователю ввести адрес электронной почты и вызовите [account.sendVerifyEmailCode](/method/account.sendVerifyEmailCode/) со следующими параметрами:

    -   `email` — адрес электронной почты
    -   `purpose` — конструктор [emailVerifyPurposeLoginSetup](/constructor/emailVerifyPurposeLoginSetup/)
    -   `purpose.phone_number` — номер телефона, использованный в [auth.sendCode](/method/auth.sendCode/)
    -   `purpose.phone_code_hash` — хеш кода из конструктора [auth.sentCode](/constructor/auth.sentCode/), возвращённого методом [auth.sendCode](/method/auth.sendCode/)

    После того как пользователь получит и введёт код подтверждения, вызовите [account.verifyEmail](/method/account.verifyEmail/) со следующими параметрами:

    -   `purpose` — конструктор [emailVerifyPurposeLoginSetup](/constructor/emailVerifyPurposeLoginSetup/)
    -   `purpose.phone_number` — номер телефона, использованный в [auth.sendCode](/method/auth.sendCode/)
    -   `purpose.phone_code_hash` — хеш кода из конструктора [auth.sentCode](/constructor/auth.sentCode/), возвращённого методом [auth.sendCode](/method/auth.sendCode/)
    -   `verification` — [emailVerificationCode](/constructor/emailVerificationCode/)
    -   `verification.code` — код подтверждения, полученный пользователем.

    В случае успеха метод [account.verifyEmail](/method/account.verifyEmail/) вернёт конструктор [account.emailVerifiedLogin](/constructor/account.emailVerifiedLogin/) с конструктором [auth.sentCode](/constructor/auth.sentCode/), который обрабатывается [обычным образом »](#code-types).

Если доступ к адресу электронной почты потерян, можно запросить сброс почты методом [auth.resetLoginEmail](/method/auth.resetLoginEmail/).

Чтобы сменить почту для входа уже после авторизации, передайте в качестве `purpose` конструктор [emailVerifyPurposeLoginChange](/constructor/emailVerifyPurposeLoginChange/), выполнив ровно тот же сценарий входа через Google ID/Apple ID/код на почту, что описан выше: в случае успеха метод [account.verifyEmail](/method/account.verifyEmail/) вернёт конструктор [account.emailVerified](/constructor/account.emailVerified/).

Сервер может прислать пропускаемую [рекомендацию SETUP\_LOGIN\_EMAIL »](/api/config/#setup-login-email), предлагая пользователю настроить подтверждение по электронной почте.

Сервер может прислать непропускаемую [рекомендацию SETUP\_LOGIN\_EMAIL\_NOSKIP »](/api/config/#setup-login-email), вынуждая пользователя настроить подтверждение по электронной почте: такую рекомендацию пропустить нельзя, и она должна быть показана как полноэкранное окно без возможности закрытия, полностью блокирующее работу с приложением до тех пор, пока почта для входа не будет настроена.

### Вход и регистрация

Когда пользователь вводит проверочный код, для его проверки и, возможно, входа пользователя необходимо использовать метод [auth.signIn](/method/auth.signIn/).

Если код введён верно, но метод вернул [auth.authorizationSignUpRequired](/constructor/auth.authorizationSignUpRequired/), это означает, что аккаунта с таким номером телефона ещё не существует: пользователь должен указать основные сведения о себе, принять условия использования, после чего необходимо вызвать метод регистрации нового пользователя ([auth.signUp](/method/auth.signUp/)).

### Двухфакторная аутентификация

```
auth.authorization#2ea2c0d4 flags:# setup_password_required:flags.1?true otherwise_relogin_days:flags.1?int tmp_sessions:flags.0?int future_auth_token:flags.2?bytes user:User = auth.Authorization;

---functions---

auth.checkPassword#d18b4d16 password:InputCheckPasswordSRP = auth.Authorization;
```

При попытке войти через [auth.signIn](/method/auth.signIn/) может быть возвращена [ошибка 400 SESSION\_PASSWORD\_NEEDED](/method/auth.signIn/#possible-errors) — это происходит, если у пользователя включена двухфакторная аутентификация. В этом случае следует выполнить инструкции по [двухфакторной аутентификации через SRP](/api/srp/).

Чтобы настроить двухфакторную авторизацию на уже авторизованном аккаунте, следуйте [документации по двухфакторной аутентификации через SRP](/api/srp/): сформируйте подходящий объект [InputCheckPasswordSRP](/type/InputCheckPasswordSRP/) и вызовите [auth.checkPassword](/method/auth.checkPassword/).

Если указан неверный пароль, этот метод вернёт RPC-ошибку `PASSWORD_HASH_INVALID`.

Могут возвращаться и другие связанные с этим ошибки — подробности приведены на [странице метода](/method/auth.checkPassword/).

В случае успеха пользователь входит в аккаунт, а метод возвращает конструктор [auth.authorization](/constructor/auth.authorization/).

### Подтверждение входа

```
authorization#ad01d61d flags:# current:flags.0?true official_app:flags.1?true password_pending:flags.2?true encrypted_requests_disabled:flags.3?true call_requests_disabled:flags.4?true unconfirmed:flags.5?true hash:long device_model:string platform:string system_version:string api_id:int app_name:string app_version:string date_created:int date_active:int ip:string country:string region:string = Authorization;

account.authorizations#4bff8ea0 authorization_ttl_days:int authorizations:Vector<Authorization> = account.Authorizations;

updateNewAuthorization#8951abef flags:# unconfirmed:flags.0?true hash:long date:flags.0?int device:flags.0?string location:flags.0?string = Update;

---functions---

account.getAuthorizations#e320c158 = account.Authorizations;

account.changeAuthorizationSettings#40f48462 flags:# confirmed:flags.3?true hash:long encrypted_requests_disabled:flags.0?Bool call_requests_disabled:flags.1?Bool = Bool;

account.resetAuthorization#df77f3bc hash:long = Bool;
```

При входе остальные активные сессии получат обновление [updateNewAuthorization](/constructor/updateNewAuthorization/).  
Если установлен флаг `unconfirmed`, клиентам следует показать уведомление с вопросом, узнаёт ли пользователь эту сессию.

Если пользователь нажимает кнопку «Да», вызовите [account.changeAuthorizationSettings](/method/account.changeAuthorizationSettings/), передав `hash` новой сессии и установив флаг `confirmed`, — так указанная сессия подтверждается.

Если пользователь нажимает кнопку «Нет», вызовите [account.resetAuthorization](/method/account.resetAuthorization/), передав `hash` новой сессии, — так указанная сессия завершается.

Если пользователь не предпринимает никаких действий, сессия будет подтверждена автоматически через `authorization_autoconfirm_period` секунд после входа (см. соответствующий [параметр конфигурации клиента »](/api/config/#authorization-autoconfirm-period)).

### Аннулирование кодов входа

Серверы Telegram автоматически аннулируют коды входа, если пользователь отправляет их в другой чат Telegram — переслав сообщение или вписав код в текст сообщения. Однако клиентам следует и самостоятельно, немедленно аннулировать коды входа, если пользователь пытается сделать снимок экрана или переслать сообщение с кодами входа, отправленное служебным пользователем уведомлений о входе (ID `777000`).

Если входящее сообщение:

-   Отправлено служебным пользователем уведомлений о входе (ID `777000`)
-   И это текстовое сообщение (а не медиа)
-   И содержит один или несколько кодов входа, то есть последовательностей из 5–7 десятичных цифр, между которыми или после которых может стоять произвольное количество символов `-` ([пример реализации »](https://github.com/tdlib/td/blob/912b29b8ab389451ee9be3de04303bc6359fd197/td/telegram/MessagesManager.cpp#L4193))

И при этом оно:

-   Попало в снимок экрана, сделанный пользователем
-   ИЛИ переслано пользователем в любой чат

следует вызвать [account.invalidateSignInCodes](/method/account.invalidateSignInCodes/), передав извлечённые коды входа `codes` (без символов `-`).

```
---functions---

account.invalidateSignInCodes#ca8ae8ba codes:Vector<string> = Bool;
```

### Тестовые аккаунты

Для каждого номера телефона действует ограничение на количество попыток входа в сутки (например, 5, но это значение может измениться); после его исчерпания API будет возвращать ошибку FLOOD до следующего дня. Для тестирования реализации процедур авторизации пользователя в клиентских приложениях этого может оказаться недостаточно.

Существует несколько зарезервированных префиксов номеров телефона, предназначенных для проверки того, что ваше приложение правильно обрабатывает перенаправления между дата-центрами (DC), регистрацию, вход и двухфакторную аутентификацию. Такие номера доступны только на **тестовых DC** (их IP-адреса для транспорта TCP приведены в панели [API development tools](https://my.telegram.org/apps) после [получения api\_id](/api/obtaining_api_id/#obtaining-api-id), а [формат URI](/mtproto/transports/#uri-format) — для транспорта HTTPS/WebSocket).

Если требуется сымитировать приложение пользователя, привязанного к дата-центру номер X, достаточно указать при регистрации пользователя номер телефона вида `99966XYYYY`, где YYYY — случайные цифры. Такой пользователь всегда будет получать в качестве кода подтверждения входа значение XXXXX (номер DC, повторённый пять раз). Обратите внимание: значение X должно быть в диапазоне 1–3, поскольку тестовых DC всего три. Когда для конкретного тестового номера исчерпан лимит по флуду, просто выберите другой номер, изменив случайную часть YYYY.

Не храните в сообщениях таких тестовых аккаунтов никакую важную или личную информацию: упрощённым механизмом авторизации может воспользоваться кто угодно, а вся хранящаяся там информация периодически полностью удаляется.

Переходите к процедурам авторизации пользователя на **боевых DC** только после того, как убедитесь, что всё корректно работает на **тестовых DC** — это позволит не упереться в лимиты по флуду.

> Чтобы облегчить работу на боевых DC, для входов с тем же номером телефона, на который был зарегистрирован `api_id`, действуют более щадящие лимиты по флуду.

### Мы авторизованы

В результате авторизации ключ клиента — **auth\_key\_id** (идентификатор авторизационного ключа, по которому сервер узнаёт используемый `auth_key`) — оказывается связан с пользователем, и каждый последующий вызов API с этим ключом будет выполняться от имени этого пользователя. Сам метод авторизации возвращает соответствующего пользователя. Лучше всего сразу же сохранить локально ID пользователя в привязке к ключу.

**Неавторизованным** пользователям доступна лишь небольшая часть методов API:

-   [account.deleteAccount](/method/account.deleteAccount/) - Удалить аккаунт пользователя с серверов Telegram.
-   [account.getPassword](/method/account.getPassword/) - Получить конфигурацию двухфакторной авторизации по паролю
-   [account.sendVerifyEmailCode](/method/account.sendVerifyEmailCode/) - Отправить код подтверждения адреса электронной почты.
-   [account.verifyEmail](/method/account.verifyEmail/) - Подтвердить адрес электронной почты.
-   [auth.bindTempAuthKey](/method/auth.bindTempAuthKey/) - Привязывает временный авторизационный ключ `temp_auth_key_id` к постоянному авторизационному ключу `perm_auth_key_id`.
-   [auth.cancelCode](/method/auth.cancelCode/) - Отменить проверочный код входа
-   [auth.checkPaidAuth](/method/auth.checkPaidAuth/) - Проверяет статус [платежа за вход](/api/auth/#paid-auth).
-   [auth.checkPassword](/method/auth.checkPassword/) - Попытаться войти в аккаунт, защищённый [паролем двухфакторной аутентификации](/api/srp/).
-   [auth.exportLoginToken](/method/auth.exportLoginToken/) - Сформировать токен входа для [входа по QR-коду](/api/qr-login/).
-   [auth.finishPasskeyLogin](/method/auth.finishPasskeyLogin/) - Завершить вход по passkey поверх неаутентифицированного соединения, подробности [здесь »](/api/passkeys/#logging-in-with-a-passkey).
-   [auth.importAuthorization](/method/auth.importAuthorization/) - Выполняет вход пользователя с помощью ключа, переданного из его основного дата-центра.
-   [auth.importBotAuthorization](/method/auth.importBotAuthorization/) - Войти в качестве бота
-   [auth.importLoginToken](/method/auth.importLoginToken/) - Вход по перенаправленному токену входа, который формируется при несовпадении DC во время [входа по QR-коду](/api/qr-login/).
-   [auth.importWebTokenAuthorization](/method/auth.importWebTokenAuthorization/) - Вход путём импорта токена авторизации
-   [auth.initPasskeyLogin](/method/auth.initPasskeyLogin/) - Начать вход по passkey поверх неаутентифицированного соединения, подробности [здесь »](/api/passkeys/#logging-in-with-a-passkey).
-   [auth.reportMissingCode](/method/auth.reportMissingCode/) - Только для официальных приложений: сообщает, что код аутентификации по SMS не был доставлен.
-   [auth.requestFirebaseSms](/method/auth.requestFirebaseSms/) - Запросить SMS-код через Firebase.
-   [auth.resendCode](/method/auth.resendCode/) - Отправить код входа повторно другим способом; тип телефонного кода определяется значением, возвращённым предыдущим вызовом auth.sendCode/auth.resendCode: подробности см. в разделе [вход](/api/auth/).
-   [auth.resetLoginEmail](/method/auth.resetLoginEmail/) - Сбросить [адрес электронной почты для входа »](/api/auth/#email-verification).
-   [auth.sendCode](/method/auth.sendCode/) - Отправить проверочный код для входа
-   [auth.signIn](/method/auth.signIn/) - Выполняет вход пользователя с подтверждённым номером телефона.
-   [auth.signUp](/method/auth.signUp/) - Регистрирует в системе подтверждённый номер телефона.
-   [help.getAppConfig](/method/help.getAppConfig/) - Получить конфигурацию, специфичную для приложения; подробнее о результате см. в разделе [конфигурация клиента](/api/config/#client-configuration).
-   [help.getConfig](/method/help.getConfig/) - Возвращает текущую конфигурацию, включая конфигурацию дата-центров.
-   [help.getCountriesList](/method/help.getCountriesList/) - Получить название, ISO-код, локализованное название и телефонные коды/шаблоны всех доступных стран
-   [help.getDeepLinkInfo](/method/help.getDeepLinkInfo/) - Получить сведения о неподдерживаемой глубокой ссылке, [подробнее здесь »](/api/links/#unsupported-links).
-   [help.getNearestDc](/method/help.getNearestDc/) - Возвращает сведения о ближайшем к пользователю дата-центре.
-   [help.saveAppLog](/method/help.saveAppLog/) - Сохраняет логи приложения на сервере.
-   [initConnection](/method/initConnection/) - Инициализировать соединение
-   [invokeWithLayer](/method/invokeWithLayer/) - Вызвать указанный запрос с использованием указанного [слоя](/api/invoking/#layers) API
-   [langpack.getDifference](/method/langpack.getDifference/) - Получить новые строки в языковом пакете
-   [langpack.getLangPack](/method/langpack.getLangPack/) - Получить строки пакета локализации
-   [langpack.getLanguage](/method/langpack.getLanguage/) - Получить сведения о языке в пакете локализации
-   [langpack.getLanguages](/method/langpack.getLanguages/) - Получить сведения обо всех языках в пакете локализации
-   [langpack.getStrings](/method/langpack.getStrings/) - Получить строки из языкового пакета
-   [payments.assignAppStoreTransaction](/method/payments.assignAppStoreTransaction/) - Сообщает серверу о покупке, совершённой через App Store: только для официальных приложений.
-   [payments.assignPlayMarketTransaction](/method/payments.assignPlayMarketTransaction/) - Сообщает серверу о покупке, совершённой через Play Store: только для официальных приложений.
-   [payments.canPurchaseStore](/method/payments.canPurchaseStore/) - Проверяет, возможна ли покупка. Обязан вызываться перед покупкой во встроенном магазине, только для официальных приложений.
-   [payments.getPaymentForm](/method/payments.getPaymentForm/) - Получить форму платежа
-   [payments.sendPaymentForm](/method/payments.sendPaymentForm/) - Отправить заполненную форму платежа

Остальные методы приведут к ошибке [**401 UNAUTHORIZED**](/api/errors/#401-unauthorized).

Обратите внимание: JSON-версия полного списка методов, которые можно вызывать по неаутентифицированному соединению, также доступна в [базе RPC »](/api/errors/#error-database).

### Замороженные аккаунты

Аккаунт может быть заморожен за серьёзные нарушения [условий использования](https://telegram.org/tos) Telegram.

Замороженный аккаунт переводится в режим «только чтение», и вызов многих методов приводит к одной из следующих ошибок:

-   `FROZEN_METHOD_INVALID` (420): указанный метод вообще недоступен замороженным аккаунтам.
-   `FROZEN_PARTICIPANT_MISSING` (400): даже если сам метод замороженным аккаунтам доступен, указанный пир недоступен для замороженных аккаунтов.

Замороженный аккаунт удаляется по истечении определённого срока — если только не будет подана и удовлетворена апелляция.

Получив ошибку `FROZEN_METHOD_INVALID`, клиенту следует вызвать [help.getAppConfig](/method/help.getAppConfig/) и получить следующие поля, которые в этом случае заполняются:

-   `freeze_since_date` — если задано и не равно нулю, указывает, когда аккаунт был заморожен (целое число, unixtime)
-   `freeze_until_date` — если задано и не равно нулю, указывает, когда аккаунт будет удалён, если по адресу `freeze_appeal_url` не будет подана и удовлетворена апелляция (целое число, unixtime)
-   `freeze_appeal_url` — URL, который пользователь может открыть, чтобы подать апелляцию (строка)
