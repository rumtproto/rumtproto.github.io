---
title: "auth.bindTempAuthKey"
original: "https://core.telegram.org/method/auth.bindTempAuthKey"
section: ref
kind: method
description: "Привязывает временный авторизационный ключ temp_auth_key_id к постоянному авторизационному ключу perm_auth_key_id."
layout: layout.njk
---

# auth.bindTempAuthKey

Привязывает временный авторизационный ключ `temp_auth_key_id` к постоянному авторизационному ключу `perm_auth_key_id`.

Подробнее см. [Perfect Forward Secrecy](/api/pfs/).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
auth.bindTempAuthKey#cdd42a05 perm_auth_key_id:long nonce:long expires_at:int encrypted_message:bytes = Bool;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>perm_auth_key_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Постоянный auth_key_id, к которому выполняется привязка</td></tr><tr><td><strong>nonce</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Случайное значение типа long из раздела <a href="#binding-message-contents">Содержимое связывающего сообщения</a></td></tr><tr><td><strong>expires_at</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Метка времени UNIX, до которой действует временный ключ, см. <a href="#binding-message-contents">Содержимое привязывающего сообщения</a></td></tr><tr><td><strong>encrypted_message</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>См. <a href="#generating-encrypted-message">Формирование encrypted_message</a></td></tr></tbody></table>

### Результат

[Bool](/type/Bool/)

### Формирование encrypted\_message

Клиент начинает с создания специального связывающего сообщения:

### Содержимое сообщения привязки

```
bind_auth_key_inner#75a3f765 nonce:long temp_auth_key_id:long perm_auth_key_id:long temp_session_id:long expires_at:int = BindAuthKeyInner;
```

<table class="table"><thead><tr><th scope="col"></th><th scope="col"></th><th scope="col"></th></tr></thead><tbody><tr><td><strong>nonce</strong></td><td><a href="/type/long">long</a></td><td>Случайное значение типа long</td></tr><tr><td><strong>temp_auth_key_id</strong></td><td><a href="/type/long">long</a></td><td>Временный auth_key_id</td></tr><tr><td><strong>perm_auth_key_id</strong></td><td><a href="/type/long">long</a></td><td>Постоянный auth_key_id, к которому выполняется привязка</td></tr><tr><td><strong>temp_session_id</strong></td><td><a href="/type/long">long</a></td><td>Идентификатор сессии, который будет использован при вызове метода <strong>auth.bindTempAuthKey</strong></td></tr><tr><td><strong>expires_at</strong></td><td><a href="/type/int">int</a></td><td>Метка времени UNIX, до которой действует временный ключ</td></tr></tbody></table>

### Шифрование связывающего сообщения

[@term:msg_id] Это привязочное сообщение шифруется [обычным способом, но по MTProto v1](/mtproto/description/) с использованием `perm_auth_key`. Иными словами, нужно поставить в начало `random:int128` (он заменяет привычные `session_id:long` и `salt:long`, которые в данном случае не имеют значения), затем добавить тот же `msg_id`, который будет использован для запроса, `seqno`, равный нулю, и правильный `msg_len` (в данном случае 40 байт); после этого вычисляется `msg_key:int128` как SHA1 полученной строки, добавляется дополнение, необходимое для выравнивания по 16 байт, полученная строка шифруется ключом, выведенным из `perm_auth_key` и `msg_key`, а к зашифрованным данным, как обычно, дописываются в начало `perm_auth_key_id` и `msg_key`.

### Привязка

Когда **encrypted\_message** готово, серверу отправляется запрос **auth.bindTempAuthKey** с использованием `temp_auth_key` и `temp_session_id`. Не забудьте [перезаписать информацию о клиенте](/api/invoking/#saving-client-info) с помощью [initConnection](/method/initConnection/) после завершения привязки.

### Этот метод доступен и пользователям, и ботам

### Этот метод можно вызывать по [неавторизованному соединению »](/api/auth/)

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>ENCRYPTED_MESSAGE_INVALID</td><td>Зашифрованное сообщение недействительно.</td></tr><tr><td>400</td><td>EXPIRES_AT_INVALID</td><td>Указанная временная метка <code>expires_at</code> недействительна.</td></tr><tr><td>400</td><td>TEMP_AUTH_KEY_ALREADY_BOUND</td><td>Переданный временный ключ уже привязан к другому <strong>perm_auth_key_id</strong>.</td></tr><tr><td>400</td><td>TEMP_AUTH_KEY_EMPTY</td><td>Временный авторизационный ключ не передан.</td></tr></tbody></table>

### Связанные страницы

#### [Perfect Forward Secrecy](/api/pfs/)

Привязка временного авторизационного ключа к постоянным.

#### [long](/type/long/)

[@term:bare] Базовый голый тип, значения которого соответствуют последовательностям из двух элементов, представляющим 64-битные знаковые числа (в порядке little-endian).

#### [int](/type/int/)

Базовый голый тип, значения которого соответствуют одноэлементным последовательностям, то есть числам от -2^31 до 2^31-1, которые в этом случае представляют сами себя.

#### [Мобильный протокол: подробное описание](/mtproto/description/)

Описание MTProto 2.0, используемого основными клиентами Telegram начиная с версии 4.6.

#### [Вызов методов API](/api/invoking/)

Дополнительные параметры вызова методов.

#### [initConnection](/method/initConnection/)

Инициализировать подключение
