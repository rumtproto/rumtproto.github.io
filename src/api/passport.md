---
title: "Telegram passport"
original: "https://core.telegram.org/api/passport"
section: api
description: "Telegram Passport — единый способ авторизации для сервисов, которым требуется удостоверение личности. Пользователь один раз загружает свои документы, а затем мгновенно передаёт…"
layout: layout.njk
---

# Telegram passport

**Telegram Passport** — единый способ авторизации для сервисов, которым требуется удостоверение личности. Пользователь один раз загружает свои документы, а затем мгновенно передаёт данные сервисам, которым нужен настоящий документ (финансовые организации, ICO и т. п.). Благодаря сквозному шифрованию у Telegram нет доступа к персональным данным пользователей.

На этой странице описан порядок обмена запросами, которому должны следовать клиентские приложения, чтобы передать сервису запрошенные данные.

### Обзор

С точки зрения сервиса, которому нужно удостоверение личности, процесс выглядит так:

-   Пользователь нажимает «Log in with Telegram» на вашем сайте или в вашем приложении.
-   Вы запрашиваете нужные вам данные.
-   Пользователь принимает вашу политику конфиденциальности и соглашается передать свои данные.
-   Приложение Telegram пользователя скачивает запрошенные вами данные из хранилища Telegram со сквозным шифрованием и расшифровывает их.
-   Если части запрошенных данных не хватает, пользователь может прямо на этом шаге добавить её в свой Telegram Passport.
-   Приложение пользователя шифрует данные вашим открытым ключом и отправляет их вам.
-   Вы расшифровываете данные, проверяете их на ошибки и заново запрашиваете всё, чего не хватает или что оказалось недействительным.
-   Вы регистрируете пользователя в своём сервисе. Готово!

О том, как запрашивать данные Telegram Passport при помощи бота через MTProto API, см. раздел [Как бот](#as-a-bot). О том, как запрашивать данные при помощи бота через упрощённый Bot API, см. [руководство по Telegram Passport](https://core.telegram.org/passport).

С точки зрения пользователя процесс выглядит примерно так:

-   Ваше приложение [получает событие/интент](#receiving-requests) от одного из [SDK](https://core.telegram.org/passport#sdk) либо из собственного источника.
-   Пользователь принимает вашу политику конфиденциальности и соглашается передать свои данные.
-   Приложение Telegram пользователя [скачивает запрошенные вами данные](https://core.telegram.org/passport/encryption#fetching-and-deleting-stored-passport-data) из хранилища Telegram со сквозным шифрованием.
-   Если части запрошенных данных не хватает, пользователь может прямо на этом шаге [добавить её в свой Telegram Passport](https://core.telegram.org/passport/encryption#encryption).
-   Приложение пользователя шифрует данные вашим открытым ключом и отправляет их сервису.
-   Вы регистрируете пользователя в своём сервисе. Готово!

О том, как клиентским приложениям следует отправлять данные Telegram Passport сервису через MTProto API, см. раздел [Как пользователь](#as-a-user).

### Как бот

Упрощённый вариант этого процесса доступен через Bot API; подробнее см. [руководство по Telegram Passport](https://core.telegram.org/passport).

При работе через MTProto API процесс практически такой же — различия начинаются только на уровне самих вызовов API.

> Учтите, что все двоичные поля передаются в сыром двоичном виде, в отличие от Bot API, где они закодированы в base64

#### Настройка Telegram Passport

[Как описано в Bot API](https://core.telegram.org/passport#setting-up-telegram-passport).

#### Запрос информации

[Как описано в Bot API](https://core.telegram.org/passport#requesting-information).

#### Получение информации

Схема:

```
secureData#8aeabec3 data:bytes data_hash:bytes secret:bytes = SecureData;

securePlainPhone#7d6099dd phone:string = SecurePlainData;
securePlainEmail#21ec5a5f email:string = SecurePlainData;

secureFile#7d09c27e id:long access_hash:long size:long dc_id:int date:int file_hash:bytes secret:bytes = SecureFile;

secureValueTypePersonalDetails#9d2a81e3 = SecureValueType;
secureValueTypePassport#3dac6a00 = SecureValueType;
secureValueTypeDriverLicense#6e425c4 = SecureValueType;
secureValueTypeIdentityCard#a0d0744b = SecureValueType;
secureValueTypeInternalPassport#99a48f23 = SecureValueType;
secureValueTypeAddress#cbe31e26 = SecureValueType;
secureValueTypeUtilityBill#fc36954e = SecureValueType;
secureValueTypeBankStatement#89137c0d = SecureValueType;
secureValueTypeRentalAgreement#8b883488 = SecureValueType;
secureValueTypePassportRegistration#99e3806a = SecureValueType;
secureValueTypeTemporaryRegistration#ea02ec33 = SecureValueType;
secureValueTypePhone#b320aadb = SecureValueType;
secureValueTypeEmail#8e3ca7ee = SecureValueType;

secureValue#187fa0ca flags:# type:SecureValueType data:flags.0?SecureData front_side:flags.1?SecureFile reverse_side:flags.2?SecureFile selfie:flags.3?SecureFile translation:flags.6?Vector<SecureFile> files:flags.4?Vector<SecureFile> plain_data:flags.5?SecurePlainData hash:bytes = SecureValue;

secureCredentialsEncrypted#33f0ea47 data:bytes hash:bytes secret:bytes = SecureCredentialsEncrypted;

messageActionSecureValuesSentMe#1b287353 values:Vector<SecureValue> credentials:SecureCredentialsEncrypted = MessageAction;	
messageService#7a800e0a flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true reactions_are_possible:flags.9?true silent:flags.13?true post:flags.14?true legacy:flags.19?true id:int from_id:flags.8?Peer peer_id:Peer saved_peer_id:flags.28?Peer reply_to:flags.3?MessageReplyHeader date:int action:MessageAction reactions:flags.20?MessageReactions ttl_period:flags.25?int = Message;

updateNewMessage#1f2b0afd message:Message pts:int pts_count:int = Update;
```

Когда пользователь подтверждает ваш запрос нажатием кнопки «Authorize», MTProto API присылает от его имени [updateNewMessage](/constructor/updateNewMessage/) с конструктором [messageService](/constructor/messageService/), который содержит конструктор [messageActionSecureValuesSentMe](/constructor/messageActionSecureValuesSentMe/) с зашифрованными данными Telegram Passport.

#### Расшифровка данных

```
secureCredentialsEncrypted#33f0ea47 data:bytes hash:bytes secret:bytes = SecureCredentialsEncrypted;

messageActionSecureValuesSentMe#1b287353 values:Vector<SecureValue> credentials:SecureCredentialsEncrypted = MessageAction;	
```

[@term:credentials] Чтобы расшифровать полученные данные, сначала расшифруйте учётные данные (`credentials` — набор ключей и хешей, которыми зашифровано всё остальное), содержащиеся в [secureCredentialsEncrypted](/constructor/secureCredentialsEncrypted/).

1.  Расшифруйте секрет учётных данных (поле _secret_ в [secureCredentialsEncrypted](/constructor/secureCredentialsEncrypted/)) своим **закрытым** ключом (задайте режим дополнения OAEP, например `OPENSSL_PKCS1_OAEP_PADDING` в PHP)

2.  По этому секрету и хешу учётных данных (поле _hash_ в [secureCredentialsEncrypted](/constructor/secureCredentialsEncrypted/)) вычислите _credentials\_key_ и _credentials\_iv_, как показано ниже:

    ```
     credentials_secret_hash = SHA512( credentials_secret + credentials_hash )
     credentials_key = slice( credentials_secret_hash, 0, 32 )
     credentials_iv = slice( credentials_secret_hash, 32, 16 )
    ```

3.  Расшифруйте данные `credentials` (поле _data_ в [secureCredentialsEncrypted](/constructor/secureCredentialsEncrypted/)) алгоритмом AES256-CBC с этими _credentials\_key_ и _credentials\_iv_. **ВАЖНО:** на этом шаге убедитесь, что хеш учётных данных равен `SHA256( credentials_data )`

4.  [@term:padding] Данные `credentials` дополнены (padding — выравнивающее дополнение) 32–255 случайными байтами, чтобы их длина стала кратна 16 байтам. Первый байт содержит длину этого дополнения (включая сам байт). Удалите дополнение, чтобы получить данные.

> Учтите, что все хеши — это сырые двоичные данные, а не шестнадцатеричные строки

#### Учётные данные

Учётные данные представляют собой JSON-объект той же структуры, что и в [bot API »](https://core.telegram.org/passport#credentials). Поскольку учётные данные для расшифровки защищены сквозным шифрованием, приложения обязаны хранить их именно как JSON, а не как TL-структуры.

Учётные данные применяются так, как описано в [руководстве по Telegram Passport](https://core.telegram.org/passport#credentials), для расшифровки файлов, вложенных в [secureValue](/constructor/secureValue/). В данном случае контейнер для данных со сквозным шифрованием описан в TL, а сами зашифрованные данные — в JSON.

##### [secureValue](/constructor/secureValue/)

```
secureValue#187fa0ca flags:# type:SecureValueType data:flags.0?SecureData front_side:flags.1?SecureFile reverse_side:flags.2?SecureFile selfie:flags.3?SecureFile translation:flags.6?Vector<SecureFile> files:flags.4?Vector<SecureFile> plain_data:flags.5?SecurePlainData hash:bytes = SecureValue;

messageActionSecureValuesSentMe#1b287353 values:Vector<SecureValue> credentials:SecureCredentialsEncrypted = MessageAction;	
```

Схема конструктора [secureValue](/constructor/inputSecureValue/) определяет, какой конструктор может находиться в каждом из полей.

<table class="table"><thead><tr><th scope="col">Название</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>type</strong></td><td><a href="/type/SecureValueType">SecureValueType</a></td><td>Тип защищённого значения <a href="/passport">passport</a></td></tr><tr><td><strong>data</strong></td><td><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/SecureData">SecureData</a></td><td>Зашифрованные данные элемента <a href="/passport">Telegram Passport</a></td></tr><tr><td><strong>front_side</strong></td><td><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/SecureFile">SecureFile</a></td><td>Зашифрованный файл <a href="/passport">passport</a> с лицевой стороной документа</td></tr><tr><td><strong>reverse_side</strong></td><td><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/SecureFile">SecureFile</a></td><td>Зашифрованный файл <a href="/passport">passport</a> с оборотной стороной документа</td></tr><tr><td><strong>selfie</strong></td><td><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/SecureFile">SecureFile</a></td><td>Зашифрованный файл <a href="/passport">passport</a> с селфи пользователя, держащего документ</td></tr><tr><td><strong>translation</strong></td><td><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/SecureFile">SecureFile</a>&gt;</td><td>Массив зашифрованных файлов <a href="/passport">passport</a> с переводами предоставленных документов</td></tr><tr><td><strong>files</strong></td><td><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/SecureFile">SecureFile</a>&gt;</td><td>Массив зашифрованных файлов <a href="/passport">passport</a> с фотографиями документов</td></tr><tr><td><strong>plain_data</strong></td><td><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/SecurePlainData">SecurePlainData</a></td><td>Подтверждённые данные <a href="/passport">passport</a> в открытом виде</td></tr><tr><td><strong>hash</strong></td><td><a href="/type/bytes">bytes</a></td><td>Хеш данных</td></tr></tbody></table>

Ниже перечислены возможные значения [SecureValueTypes](/type/SecureValueType/) и параметры, которые можно задать или запросить для каждого типа.

<table class="table"><thead><tr><th scope="col">Тип</th><th scope="col">Допустимые поля</th></tr></thead><tbody><tr><td><a href="/constructor/secureValueTypeEmail">secureValueTypeEmail</a></td><td><code>plain_data</code></td></tr><tr><td><a href="/constructor/secureValueTypeEmail">secureValueTypePhone</a></td><td><code>plain_data</code></td></tr><tr><td><a href="/constructor/secureValueTypePersonalDetails">secureValueTypePersonalDetails</a></td><td><code>data</code></td></tr><tr><td><a href="/constructor/secureValueTypePassport">secureValueTypePassport</a></td><td><code>data</code>, <code>front_side</code>, <code>selfie</code>, <code>translation</code></td></tr><tr><td><a href="/constructor/secureValueTypeDriverLicense">secureValueTypeDriverLicense</a></td><td><code>data</code>, <code>front_side</code>, <code>reverse_side</code>, <code>selfie</code>, <code>translation</code></td></tr><tr><td><a href="/constructor/secureValueTypeIdentityCard">secureValueTypeIdentityCard</a></td><td><code>data</code>, <code>front_side</code>, <code>reverse_side</code>, <code>selfie</code>, <code>translation</code></td></tr><tr><td><a href="/constructor/secureValueTypeInternalPassport">secureValueTypeInternalPassport</a></td><td><code>data</code>, <code>front_side</code>, <code>selfie</code>, <code>translation</code></td></tr><tr><td><a href="/constructor/secureValueTypeAddress">secureValueTypeAddress</a></td><td><code>data</code></td></tr><tr><td><a href="/constructor/secureValueTypeUtilityBill">secureValueTypeUtilityBill</a></td><td><code>files</code>, <code>translation</code></td></tr><tr><td><a href="/constructor/secureValueTypeBankStatement">secureValueTypeBankStatement</a></td><td><code>files</code>, <code>translation</code></td></tr><tr><td><a href="/constructor/secureValueTypeRentalAgreement">secureValueTypeRentalAgreement</a></td><td><code>files</code>, <code>translation</code></td></tr><tr><td><a href="/constructor/secureValueTypePassportRegistration">secureValueTypePassportRegistration</a></td><td><code>files</code>, <code>translation</code></td></tr><tr><td><a href="/constructor/secureValueTypeTemporaryRegistration">secureValueTypeTemporaryRegistration</a></td><td><code>files</code>, <code>translation</code></td></tr></tbody></table>

##### [SecureData](/type/SecureData/)

```
secureData#8aeabec3 data:bytes data_hash:bytes secret:bytes = SecureData;
```

Данные — это зашифрованный и дополненный JSON-объект одного из перечисленных JSON-типов; какого именно, зависит от выбранного [типа](/type/SecureValueType/).

<table class="table"><thead><tr><th scope="col">Выбранный тип</th><th scope="col">JSON-объект</th></tr></thead><tbody><tr><td><a href="/constructor/secureValueTypePersonalDetails">secureValueTypePersonalDetails</a></td><td><a href="/passport#personaldetails">PersonalDetails</a></td></tr><tr><td><a href="/constructor/secureValueTypePassport">secureValueTypePassport</a></td><td><a href="/passport#iddocumentdata">IdDocumentData</a></td></tr><tr><td><a href="/constructor/secureValueTypeDriverLicense">secureValueTypeDriverLicense</a></td><td><a href="/passport#iddocumentdata">IdDocumentData</a></td></tr><tr><td><a href="/constructor/secureValueTypeIdentityCard">secureValueTypeIdentityCard</a></td><td><a href="/passport#iddocumentdata">IdDocumentData</a></td></tr><tr><td><a href="/constructor/secureValueTypeInternalPassport">secureValueTypeInternalPassport</a></td><td><a href="/passport#iddocumentdata">IdDocumentData</a></td></tr><tr><td><a href="/constructor/secureValueTypeAddress">secureValueTypeAddress</a></td><td><a href="/passport#residentialaddress">ResidentialAddress</a></td></tr></tbody></table>

Извлечённые [из учётных данных](#credentials) [DataCredentials](https://core.telegram.org/passport#datacredentials) позволяют затем расшифровать зашифрованные данные из поля _data_ конструктора [secureData](/constructor/secureData/). Подробнее о том, как расшифровать поле _data_, см. в [руководстве по Telegram Passport](https://core.telegram.org/passport#datacredentials).

##### [SecureFile](/type/SecureFile/)

```
secureFile#7d09c27e id:long access_hash:long size:long dc_id:int date:int file_hash:bytes secret:bytes = SecureFile;	

inputSecureFileLocation#cbc7ee28 id:long access_hash:long = InputFileLocation;

---functions---

upload.getFile#be5335be flags:# precise:flags.0?true cdn_supported:flags.1?true location:InputFileLocation offset:long limit:int = upload.File;
```

Файлы (после расшифровки — формат JPG, не более 10 МБ) скачиваются по частям, как описано в разделе [файлы »](/api/files/), с той разницей, что вместо [inputFileLocation](/constructor/inputFile/) следует сформировать [inputFileLocation](/constructor/inputFileLocation/).

-   Поле `id` — это `id` из [secureFile](/constructor/secureFile/)
-   [@term:access_hash] Поле `access_hash` — это `access_hash` (выданный сервером хеш доступа, без которого запрос файла не будет принят) из [secureFile](/constructor/secureFile/)

Извлечённые [из учётных данных](#credentials) [FileCredentials](https://core.telegram.org/passport#filecredentials) позволяют затем расшифровать скачанные зашифрованные данные. Подробнее о том, как расшифровать файлы Telegram Passport, см. в [руководстве по Telegram Passport](https://core.telegram.org/passport#filecredentials).

##### [SecurePlainData](/type/SecurePlainData/)

```
securePlainPhone#7d6099dd phone:string = SecurePlainData;
securePlainEmail#21ec5a5f email:string = SecurePlainData;
```

Адрес электронной почты и номер телефона передаются открытым текстом с помощью соответствующего конструктора [SecurePlainData](/type/SecurePlainData/). Адреса и номера, отправленные через Telegram Passport, _уже подтверждены_, как описано в [руководстве по Telegram Passport](https://core.telegram.org/passport/encryption#secureplaindata).

#### Исправление ошибок

```
secureValueErrorData#e8a40bd9 type:SecureValueType data_hash:bytes field:string text:string = SecureValueError;
secureValueErrorFrontSide#be3dfa type:SecureValueType file_hash:bytes text:string = SecureValueError;
secureValueErrorReverseSide#868a2aa5 type:SecureValueType file_hash:bytes text:string = SecureValueError;
secureValueErrorSelfie#e537ced6 type:SecureValueType file_hash:bytes text:string = SecureValueError;
secureValueErrorFile#7a700873 type:SecureValueType file_hash:bytes text:string = SecureValueError;
secureValueErrorFiles#666220e9 type:SecureValueType file_hash:Vector<bytes> text:string = SecureValueError;
secureValueError#869d758f type:SecureValueType hash:bytes text:string = SecureValueError;
secureValueErrorTranslationFile#a1144770 type:SecureValueType file_hash:bytes text:string = SecureValueError;
secureValueErrorTranslationFiles#34636dd8 type:SecureValueType file_hash:Vector<bytes> text:string = SecureValueError;

inputUser#f21158c6 user_id:long access_hash:long = InputUser;


---functions---

users.setSecureValueErrors#90c894b5 id:InputUser errors:Vector<SecureValueError> = Bool;
```

Если в полученных данных есть ошибки, бот может вызвать метод [users.setSecureValueErrors](/method/users.setSecureValueErrors/), чтобы сообщить об этом пользователю и заново [запросить информацию](#requesting-information). Пользователь не сможет отправить данные повторно, пока не будут исправлены все ошибки.

Описание параметров метода приведено на его [странице документации »](/method/users.setSecureValueErrors/).

### Как пользователь

#### Приём запросов

Всё начинается с того, что ваше приложение получает событие от одного из [SDK](https://core.telegram.org/passport#sdk) или из собственного источника.

#### Формат URI

[@term:deep link] SDK запускают запрос на авторизацию в Telegram Passport, открывая [глубокие ссылки »](/api/links/) (`deep link` — ссылка, которая открывается сразу в приложении Telegram) следующего вида:

Синтаксис `tg:`:

```
tg://passport?bot_id=<bot_user_id>&scope=<scope>&public_key=<public_key>&nonce=<nonce>
tg://resolve?domain=telegrampassport&bot_id=<bot_user_id>&scope=<scope>&public_key=<public_key>&nonce=<nonce>
```

Со следующими параметрами строки запроса:

<table class="table"><thead><tr><th scope="col">Параметры</th><th scope="col">Тип</th><th scope="col">Обязательность</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>domain</td><td>String</td><td>Обязателен только для вариантов passport-URI с <code>resolve</code></td><td>Для запросов на авторизацию в Passport всегда равен <code>telegrampassport</code>.</td></tr><tr><td>bot_id</td><td>Integer</td><td>Да</td><td>Уникальный идентификатор бота. Его можно получить из токена бота. Например, для токена <code>1234567:4TT8bAc8GHUspu3ERYn-KGcvsvGB9u_n4ddy</code> идентификатор бота равен <code>1234567</code>.</td></tr><tr><td>scope</td><td><a href="#uripassportscope">UriPassportScope</a></td><td>Да</td><td>Более компактный JSON-объект, описывающий запрашиваемые данные</td></tr><tr><td>public_key</td><td>String</td><td>Да</td><td>Открытый ключ бота</td></tr><tr><td>nonce</td><td>String</td><td>Да</td><td>Одноразовое значение, заданное ботом. <strong>Важно:</strong> из соображений безопасности оно должно быть криптографически стойким уникальным идентификатором запроса. В частности, оно должно быть достаточно длинным и должно порождаться криптографически стойким генератором псевдослучайных чисел. Нельзя дважды принимать учётные данные с одним и тем же nonce.</td></tr><tr><td>callback_url</td><td>String</td><td>Необязательный</td><td>Поддерживается некоторыми клиентами Telegram; задаёт URL обратного вызова, который следует открыть после завершения или отмены процесса.</td></tr><tr><td>payload</td><td>String</td><td>Необязательный</td><td><strong>Устаревший</strong> параметр из Telegram Passport 1.0, выполнявший ту же роль, что и параметр <code>nonce</code>. Сервисы, всё ещё использующие устаревшую версию SDK, могут передавать его вместо <code>nonce</code>. В некоторых случаях в URI ради обратной совместимости присутствуют оба параметра — <code>nonce</code> и <code>payload</code>: в этом случае всегда следует использовать <code>nonce</code>, а не <code>payload</code>.</td></tr></tbody></table>

Пример URI, сформированного [страницей примера Telegram Passport](https://core.telegram.org/passport/example):

```
tg://resolve?domain=telegrampassport&bot_id=543260180&scope=%7B%22v%22%3A1%2C%22d%22%3A%5B%7B%22_%22%3A%22pd%22%2C%22n%22%3A1%7D%2C%22ad%22%2C%22pn%22%2C%22em%22%2C%7B%22_%22%3A%5B%7B%22_%22%3A%22pp%22%2C%22s%22%3A1%2C%22t%22%3A1%7D%2C%22ip%22%2C%22dl%22%2C%22ic%22%5D%7D%2C%7B%22_%22%3A%5B%22ub%22%2C%22bs%22%2C%22ra%22%2C%22pr%22%2C%22tr%22%5D%7D%5D%7D&public_key=-----BEGIN%20PUBLIC%20KEY-----%0AMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAv6m1zBF8lZOCqcxf8hnj%0AkvHwuWdU8s4rBWaxKXH%2FvDDUklcCS5uhSnmjhxWca9suubaG3lW4HxlCilkeJPVf%0Ajimg5Q8ZqWrR3OoOihEpcG9iJZTOEpsEk7VtEiabgacBG3Quv9JslTrDe95Fn801%0At9d21HXwgMrHeHpWDOn31Dr%2BwoEH%2BkwySUWa6L%2FZbnGwSNP7eeDTE7Amz1RMDk3t%0A8EWGq58u0IQatPcEH09aUQlKzk6MIiALkZ9ILBKCBk6d2WCokKnsdBctovNbxwSx%0AhP1qst1r%2BYc8iPBZozsDC0ZsC5jXCkcODI3OC0tkNtYzN2XKalW5R0DjDRUDmGhT%0AzQIDAQAB%0A-----END%20PUBLIC%20KEY-----%0A&nonce=b8e892dc2e0afe63424d101b964f1256_32858210_708614a4585b84872e&callback_url=https%3A%2F%2Fcore.telegram.org%2Fpassport%2Fexample%3Fpassport_ssid%3Db8e892dc2e0afe63424d101b964f1256_32858210_db259b427f200751ce&payload=b8e892dc2e0afe63424d101b964f1256_32858210_708614a4585b84872e
```

#### UriPassportScope

Этот объект описывает запрашиваемые данные.

<table class="table"><thead><tr><th scope="col">Поле</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>d</td><td>Массив <a href="#uripassportscopeelement">UriPassportScopeElement</a></td><td>Список запрашиваемых элементов; каждый тип может быть использован только один раз во всём массиве объектов UriPassportScopeElement</td></tr><tr><td>v</td><td>Integer</td><td>Версия области запроса, должна быть равна <em>1</em></td></tr></tbody></table>

##### UriPassportScopeElement

Этот объект описывает запрашиваемый элемент и должен быть одним из следующих:

-   [UriPassportScopeElementOneOfSeveral](#uripassportscopeelementoneofseveral) — используется, чтобы запросить любой один из документов, входящих в область запроса.
-   [UriPassportScopeElementOne](#uripassportscopeelementone) — используется, чтобы запросить один конкретный документ.

Идентификаторы типов документов Telegram Passport имеют следующие сокращённые псевдонимы:

<table class="table"><thead><tr><th scope="col"><strong>Полный</strong></th><th scope="col"><strong>Псевдоним</strong></th></tr></thead><tbody><tr><td><code>personal_details</code></td><td><code>pd</code></td></tr><tr><td><code>passport</code></td><td><code>pp</code></td></tr><tr><td><code>driver_license</code></td><td><code>dl</code></td></tr><tr><td><code>identity_card</code></td><td><code>ic</code></td></tr><tr><td><code>internal_passport</code></td><td><code>ip</code></td></tr><tr><td><code>id_document</code></td><td><code>idd</code></td></tr><tr><td><code>address</code></td><td><code>ad</code></td></tr><tr><td><code>utility_bill</code></td><td><code>ub</code></td></tr><tr><td><code>bank_statement</code></td><td><code>bs</code></td></tr><tr><td><code>rental_agreement</code></td><td><code>ra</code></td></tr><tr><td><code>passport_registration</code></td><td><code>pr</code></td></tr><tr><td><code>temporary_registration</code></td><td><code>tr</code></td></tr><tr><td><code>address_document</code></td><td><code>add</code></td></tr><tr><td><code>phone_number</code></td><td><code>pn</code></td></tr><tr><td><code>email</code></td><td><code>em</code></td></tr></tbody></table>

Специальный тип «idd» можно использовать как псевдоним для одного из «pp», «dl», «ic», а специальный тип «add» — как псевдоним для одного из «ub», «bs», «ra».

#### UriPassportScopeElementOneOfSeveral

Этот объект описывает несколько элементов, один из которых обязан быть предоставлен.

<table class="table"><thead><tr><th scope="col">Поле</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>_</td><td>Массив <a href="#uripassportscopeelementone">UriPassportScopeElementOne</a></td><td>Список элементов, один из которых обязан быть предоставлен; должен содержать либо несколько из «pp», «dl», «ic», «ip», <strong>либо</strong> несколько из «ub», «bs», «ra», «pr», «tr»</td></tr><tr><td>s</td><td>Boolean</td><td><em>Необязательное.</em> Используйте этот параметр, если хотите запросить селфи с тем документом из списка, который пользователь решит загрузить.</td></tr><tr><td>t</td><td>Boolean</td><td><em>Необязательное.</em> Используйте этот параметр, если хотите запросить перевод того документа из списка, который пользователь решит загрузить. <strong>Примечание:</strong> мы советуем запрашивать переводы только <em>после</em> того, как вы получили корректный документ, для которого перевод требуется.</td></tr></tbody></table>

#### UriPassportScopeElementOne

Этот объект описывает один конкретный элемент, который обязан быть предоставлен. Если никакие параметры не нужны, вместо этого объекта для указания типа элемента можно использовать _String_.

<table class="table"><thead><tr><th scope="col">Поле</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>_</td><td>String</td><td>Тип элемента. Один из «pd», «pp», «dl», «ic», «ip», «ad», «ub», «bs», «ra», «pr», «tr», «pn», «em»</td></tr><tr><td>s</td><td>Boolean</td><td><em>Необязательное.</em> Используйте этот параметр, если хотите дополнительно запросить селфи с документом. Доступно для «pp», «dl», «ic» и «ip»</td></tr><tr><td>t</td><td>Boolean</td><td><em>Необязательное.</em> Используйте этот параметр, если хотите дополнительно запросить перевод документа. Доступно для «pp», «dl», «ic», «ip», «ub», «bs», «ra», «pr» и «tr». <strong>Примечание:</strong> мы советуем запрашивать переводы только <em>после</em> того, как вы получили корректный документ, для которого перевод требуется.</td></tr><tr><td>n</td><td>Boolean</td><td><em>Необязательное.</em> Используйте этот параметр, чтобы запросить имя, фамилию и отчество пользователя на языке страны его проживания. Доступно для «pd»</td></tr></tbody></table>

Специальный тип «idd» также можно использовать как псевдоним для одного из «pp», «dl», «ic», а специальный тип «add» — как псевдоним для одного из «ub», «bs», «ra».

#### Настройка Telegram Passport

Следующий шаг клиентского приложения — запросить у пользователя пароль двухфакторной аутентификации от Telegram Passport, настроить Telegram Passport, а также получить и расшифровать сохранённые на сервере параметры Telegram Passport, как описано в [статье о шифровании »](https://core.telegram.org/passport/encryption).

[@note] В оригинале здесь сказано «2FA passport», хотя речь идёт о пароле двухфакторной аутентификации (облачном пароле): именно на нём строится ключ, которым расшифровывается хранилище Telegram Passport, поэтому без него получить сохранённые параметры невозможно.

#### Получение формы авторизации

```
account.authorizationForm#ad2e1cd8 flags:# required_types:Vector<SecureRequiredType> values:Vector<SecureValue> errors:Vector<SecureValueError> users:Vector<User> privacy_policy_url:flags.0?string = account.AuthorizationForm;

---functions---

account.getAuthorizationForm#a929597a bot_id:long scope:string public_key:string = account.AuthorizationForm;
```

Затем клиентское приложение передаёт серверам Telegram идентификатор бота, область запроса и открытый ключ из [запроса авторизации Telegram Passport](#receiving-requests), используя метод [account.getAuthorizationForm](/method/account.getAuthorizationForm/).

В ответ придёт конструктор [account.authorizationForm](/constructor/account.authorizationForm/) со сведениями о требуемых типах документов, URL политики конфиденциальности сервиса, а также с информацией о боте, которому следует отправить форму. Если форма уже отправлялась хотя бы один раз, конструктор будет содержать ещё и список ранее отправленных данных вместе с возможными ошибками.

Пользователь должен принять политику конфиденциальности и перейти к заполнению требуемых данных, а клиент — зашифровать и загрузить их, как описано в [статье о шифровании »](https://core.telegram.org/passport/encryption).

#### Отправка формы авторизации

```
secureCredentialsEncrypted#33f0ea47 data:bytes hash:bytes secret:bytes = SecureCredentialsEncrypted;

secureValueHash#ed1ecdb0 type:SecureValueType hash:bytes = SecureValueHash;

---functions---

account.acceptAuthorization#f3ed4c73 bot_id:long scope:string public_key:string value_hashes:Vector<SecureValueHash> credentials:SecureCredentialsEncrypted = Bool;
```

Как только пользователь завершит загрузку требуемых документов и нажмёт кнопку отправки, клиент вызывает [account.acceptAuthorization](/method/account.acceptAuthorization/), передавая документы боту, связанному с сервисом.

-   Как и раньше, `bot_id`, `scope` и `public_key` берутся из URI запроса авторизации.
-   Поле `value_hashes` используется сервером, чтобы выбрать, какой документ какого типа отправить боту: в поле `type` следует указать тип документа, а в поле `hash` — значение `data_hash`/`file_hash`, полученное при [загрузке и шифровании данных »](https://core.telegram.org/passport/encryption#encryption).
-   Поле `credentials` содержит зашифрованные учётные данные, необходимые сервису для расшифровки отправленных защищённых значений со сквозным шифрованием; они формируются так, как описано в разделе [Passport Credentials »](https://core.telegram.org/passport/encryption#passport-credentials).

Наконец, клиент открывает callback URL (если он указан).

#### Обработка некорректных форм

```
secureValueErrorData#e8a40bd9 type:SecureValueType data_hash:bytes field:string text:string = SecureValueError;
secureValueErrorFrontSide#be3dfa type:SecureValueType file_hash:bytes text:string = SecureValueError;
secureValueErrorReverseSide#868a2aa5 type:SecureValueType file_hash:bytes text:string = SecureValueError;
secureValueErrorSelfie#e537ced6 type:SecureValueType file_hash:bytes text:string = SecureValueError;
secureValueErrorFile#7a700873 type:SecureValueType file_hash:bytes text:string = SecureValueError;
secureValueErrorFiles#666220e9 type:SecureValueType file_hash:Vector<bytes> text:string = SecureValueError;
secureValueError#869d758f type:SecureValueType hash:bytes text:string = SecureValueError;
secureValueErrorTranslationFile#a1144770 type:SecureValueType file_hash:bytes text:string = SecureValueError;
secureValueErrorTranslationFiles#34636dd8 type:SecureValueType file_hash:Vector<bytes> text:string = SecureValueError;

account.authorizationForm#ad2e1cd8 flags:# required_types:Vector<SecureRequiredType> values:Vector<SecureValue> errors:Vector<SecureValueError> users:Vector<User> privacy_policy_url:flags.0?string = account.AuthorizationForm;

---functions---

account.getAuthorizationForm#a929597a bot_id:long scope:string public_key:string = account.AuthorizationForm;
```

Если какие-либо значения из отправленной формы отклонены сервисом, бот [вызывает соответствующий метод, чтобы сообщить об ошибках](/api/passport/#fixing-errors).

Пользователь может узнать об этих ошибках непосредственно от сервиса либо, если решит [начать процесс заново](#receiving-requests) и отправить исправленные данные, прямо из формы авторизации (поле `errors`).
