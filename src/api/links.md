---
title: "Глубокие ссылки"
original: "https://core.telegram.org/api/links"
section: api
description: "Клиенты Telegram обязаны обрабатывать специальные глубокие ссылки (deep link — ссылка, открывающая конкретный экран приложения) вида tg:// и t.me, встречающиеся в сообщениях, в…"
layout: layout.njk
---

# Глубокие ссылки

[@term:deep link] Клиенты Telegram обязаны обрабатывать специальные глубокие ссылки (`deep link` — ссылка, открывающая конкретный экран приложения) вида `tg://` и `t.me`, встречающиеся в сообщениях, в сущностях оформления типа «ссылка» и в других приложениях; для этого нужно зарегистрировать обработчики на уровне операционной системы.

Как правило, ссылки существуют в двух вариантах: HTTPS-ссылки `t.me` и URI со схемой `tg:`.

Примеры синтаксиса ссылок `t.me`:

-   `t.me/path?query`
-   `http://t.me/path?query`
-   `https://t.me/path?query`

При этом вместо `t.me` могут использоваться `telegram.me`, `telegram.dog`, а также домен, указанный в поле `me_url_prefix` глобальной [конфигурации](/constructor/config/), которую можно получить методом [help.getConfig](/method/help.getConfig/).

Примеры синтаксиса ссылок `tg:`:

-   `tg:path?query`
-   `tg://path?query`

Часть `#fragment` при разборе глубоких ссылок Telegram всегда игнорируется.

Учтите также: если встретилась ссылка вида `<username>.t.me`, где `<username>` **не** состоит из одной буквы И **не** равен `www` И является допустимым именем пользователя И **не** совпадает ни с одним из значений:

-   `addemoji`
-   `addlist`
-   `addstickers`
-   `addstyle`
-   `addtheme`
-   `auction`
-   `auth`
-   `boost`
-   `call`
-   `confirmphone`
-   `contact`
-   `giftcode`
-   `invoice`
-   `joinchat`
-   `login`
-   `m`
-   `nft`
-   `proxy`
-   `setlanguage`
-   `share`
-   `socks`
-   `web`
-   `a`
-   `k`
-   `z`

…её следует трактовать в точности как ссылку `t.me/<username>/` (то есть построить ссылку `t.me/<username>/` и дописать к ней остаток пути, если он есть, и строку запроса, если она есть).

Везде, где параметры ссылки содержат идентификатор пользователя, чата, канала или супергруппы, он записан в формате MTProto; о том, как преобразовать его в формат Bot API, читайте [здесь »](/api/bots/ids/).

### Сайты TON

Используются для открытия [сайтов TON](https://blog.ton.org/ton-sites) во встроенном [браузере Telegram](https://telegram.org/blog/w3-browser-mini-app-store#telegram-browser).

Синтаксис:

```
tonsite://somesite.domain/path?query#hash
```

Для доменов `.ton` схему `tonsite://` можно и не указывать:

```
getting-started.ton/path?query#hash
```

В обоих случаях часть `#hash` в составе URL игнорировать **нельзя**.

Чтобы открыть такой URL, нужно:

-   Заменить схему `tonsite` на `https`
-   Преобразовать имя хоста в URL следующим образом:
    -   Заменить все символы `.` на `-d`
    -   Заменить символы `-` на `-h` (кроме тех `-`, которые появились в результате первой замены)
    -   Дописать `.`
    -   Дописать доменное имя, указанное в [параметре клиентской конфигурации ton\_proxy\_address »](/api/config/#ton-proxy-address)

Получившийся URL следует открывать только во встроенном [браузере Telegram](https://telegram.org/blog/w3-browser-mini-app-store#telegram-browser) (то есть возможности открыть такие ссылки в стороннем браузере давать не следует).

### Ссылки на публичные имена пользователей

Используются для ссылок на публичных пользователей, группы и каналы; подробнее об их обработке читайте [здесь »](/api/invites/#public-usernames).

Синтаксис `t.me`:

```
t.me/<username>?text=<draft_text>&profile
```

Синтаксис `tg:`:

```
tg://resolve?domain=<username>&text=<draft_text>&profile
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>username</code></td><td style="text-align: center;">Обязательный</td><td>Имя пользователя, которое нужно <a href="/api/invites#public-usernames">проверить или импортировать&nbsp;»</a></td></tr><tr><td><code>draft_text</code></td><td style="text-align: center;">Необязательный</td><td>Текст в кодировке UTF-8, который нужно заранее подставить в поле ввода, если пользователь может писать в этот чат.<br>Перед вставкой:<br>- Проверьте, что текст — корректный UTF-8.<br>- Если текст начинается с <code>@</code>, добавьте перед ним пробел (чтобы не сработал <a href="/api/bots/inline">инлайн-запрос</a>).<br>- Обрежьте текст до <a href="/constructor/config">message_length_max</a> кодовых точек UTF-8.</td></tr><tr><td><code>profile</code></td><td style="text-align: center;">Необязательный</td><td>Если задан, нажатие на такую ссылку должно открывать страницу профиля целевого пира, а не экран чата.</td></tr></tbody></table>

Учтите, что [ссылки на сообщения](#message-links) и [ссылки на монофорумы](#monoforum-links) имеют такой же или похожий синтаксис, но с дополнительными параметрами.

### Ссылки на монофорумы

Используются для открытия чата прямых сообщений (он же [монофорум »](/api/monoforum/)), связанного с каналом; подробнее о монофорумах читайте [здесь »](/api/monoforum/).

**Примечание**: при пересылке сообщений, отправленных в монофорум, используйте [обычные ссылки на сообщения »](#message-links) с идентификатором монофорума, а не с идентификатором связанного канала; то же правило действует и для всех остальных связанных с чатами ссылок, в которых участвует монофорум.

Синтаксис `t.me`:

```
t.me/<username>?direct
```

Синтаксис `tg:`:

```
tg://resolve?domain=<username>&direct
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>username</code></td><td style="text-align: center;">Обязательный</td><td>Имя пользователя канала, у которого есть связанный монофорум.</td></tr><tr><td><code>direct</code></td><td style="text-align: center;">Обязательный</td><td>Отличает ссылки на монофорумы от ссылок других типов.</td></tr></tbody></table>

Учтите, что [ссылки на публичные имена пользователей](#public-username-links) имеют похожий синтаксис, но не содержат флага `direct`.

### Временные ссылки на профиль

[@term:token] Используются для ссылок на профили пользователей и создаются методом [contacts.exportContactToken](/method/contacts.exportContactToken/).  
Такие ссылки можно создать даже для профилей без имени пользователя, и у них есть срок действия, заданный полем `expires` конструктора [exportedContactToken](/constructor/exportedContactToken/), который возвращает [contacts.exportContactToken](/method/contacts.exportContactToken/). Здесь `token` — одноразовый маркер профиля, по которому получатель ссылки запрашивает данные пользователя.

Синтаксис `t.me`:

```
t.me/contact/<token>
```

Синтаксис `tg:`:

```
tg://contact?token=<token>
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>token</code></td><td style="text-align: center;">Обязательный</td><td>Маркер профиля, который следует импортировать методом <a href="/method/contacts.importContactToken">contacts.importContactToken</a>; в ответ вернутся сведения о пользователе.</td></tr></tbody></table>

### Ссылки по номеру телефона

Используются для ссылок на публичных и приватных пользователей по их номеру телефона.

Синтаксис `t.me`:

```
t.me/+<phone_number>?text=<draft_text>&profile
```

Синтаксис `tg:`:

```
tg://resolve?phone=<phone_number>&text=<draft_text>&profile
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>phone_number</code></td><td style="text-align: center;">Обязательный</td><td>Номер телефона, который следует разрешить методом <a href="/method/contacts.resolvePhone">contacts.resolvePhone</a></td></tr><tr><td><code>draft_text</code></td><td style="text-align: center;">Необязательный</td><td>Текст в кодировке UTF-8, который нужно заранее подставить в поле ввода сообщения, если пользователь может писать в этот чат.<br>Перед вставкой:<br>- Проверьте, что текст — корректный UTF-8.<br>- Если текст начинается с <code>@</code>, добавьте перед ним пробел (чтобы не сработал <a href="/api/bots/inline">инлайн-запрос</a>).<br>- Обрежьте текст до <a href="/constructor/config">message_length_max</a> кодовых точек UTF-8.</td></tr><tr><td><code>profile</code></td><td style="text-align: center;">Необязательный</td><td>Если параметр задан, по нажатию на такую ссылку должна открываться страница профиля пользователя, а не чат с ним.</td></tr></tbody></table>

Учтите, что [пригласительные ссылки в чат](#message-links) имеют такой же синтаксис, но `<phone_number>` в них не будет корректным номером телефона.

[@note] В оригинале эта ссылка ведёт на раздел `#message-links`, хотя по смыслу речь о пригласительных ссылках в чат (`#chat-invite-links`): в обоих случаях путь начинается с `t.me/+`, и различить их можно только по тому, похоже ли значение после `+` на настоящий номер телефона. Адрес ссылки сохранён как в оригинале.

### Пригласительные ссылки в чат

Используются, чтобы приглашать пользователей в приватные группы и каналы; [подробнее о том, как создавать такие ссылки »](/api/invites/#invite-links).

Синтаксис `t.me`:

```
t.me/+<hash>
```

Синтаксис `t.me` (устаревший):

```
t.me/joinchat/<hash>
```

Синтаксис `tg:`:

```
tg://join?invite=<hash>
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>hash</code></td><td style="text-align: center;">Обязательный</td><td>Хеш приглашения, который нужно <a href="/api/invites#invite-links">проверить или импортировать&nbsp;»</a></td></tr></tbody></table>

### Ссылки на папки с чатами

Используются, чтобы приглашать пользователей в приватные группы и каналы; [подробнее о том, как создавать такие ссылки »](/api/folders/#shared-folders).

Синтаксис `t.me`:

```
t.me/addlist/<slug>
```

Синтаксис `tg:`:

```
tg://addlist?slug=<slug>
```

[@term:slug] Параметры (здесь и далее `slug` — короткое строковое имя, которое однозначно указывает на конкретный объект и подставляется прямо в путь ссылки):

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>slug</code></td><td style="text-align: center;">Обязательный</td><td>Идентификатор приглашения (<code>slug</code>), который нужно <a href="/api/folders#shared-folders">проверить или импортировать&nbsp;»</a></td></tr></tbody></table>

### Ссылки на сообщения

Используются для ссылок на конкретные сообщения в публичных и приватных группах и каналах.

Синтаксис `t.me` (публичные ссылки):

```
t.me/<username>/<id>?single&thread=<thread_id>&comment=<comment>&t=<media_timestamp>&task=<task_id>&option=<option_id>
t.me/<username>/<thread_id>/<id>?single&comment=<comment>&t=<media_timestamp>&task=<task_id>&option=<option_id>
```

Синтаксис `t.me` (приватные ссылки):

```
t.me/c/<channel>/<id>?single&thread=<thread_id>&comment=<comment>&t=<media_timestamp>&task=<task_id>&option=<option_id>
t.me/c/<channel>/<thread_id>/<id>?single&comment=<comment>&t=<media_timestamp>&task=<task_id>&option=<option_id>
```

Синтаксис `tg:` (публичные ссылки):

```
tg://resolve?domain=<username>&post=<id>&single&thread=<thread_id>&comment=<comment>&t=<media_timestamp>&task=<task_id>&option=<option_id>
```

Синтаксис `tg:` (приватные ссылки):

```
tg://privatepost?channel=<channel>&post=<id>&single&thread=<thread_id>&comment=<comment>&t=<media_timestamp>&task=<task_id>&option=<option_id>
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>username</code></td><td style="text-align: center;">Обязателен для публичной ссылки</td><td>Имя пользователя диалога.</td></tr><tr><td><code>channel</code></td><td style="text-align: center;">Обязателен для приватной ссылки</td><td>ID канала или супергруппы.</td></tr><tr><td><code>id</code></td><td style="text-align: center;">Обязательный</td><td>ID сообщения.</td></tr><tr><td><code>single</code></td><td style="text-align: center;">Необязательный</td><td>Для альбомов и сгруппированных медиа: если параметр задан, ссылка ведёт на конкретный медиафайл из альбома, иначе — на весь альбом целиком.</td></tr><tr><td><code>thread_id</code></td><td style="text-align: center;">Необязательный</td><td>Для <a href="/api/threads">тредов сообщений</a> содержит ID треда.</td></tr><tr><td><code>comment</code></td><td style="text-align: center;">Необязательный</td><td>Для <a href="/api/discussion">комментариев к каналу</a>: <code>username</code> будет содержать имя пользователя канала, <code>id</code> — ID сообщения канала, с которого началась ветка комментариев, а это поле — ID самого комментария в группе обсуждения.</td></tr><tr><td><code>media_timestamp</code></td><td style="text-align: center;">Необязательный</td><td>Момент времени, с которого следует начать воспроизведение медиафайла из тела сообщения или из превью веб-страницы, в одном из следующих форматов:<br>- Секунды: <code>123</code>, регулярное выражение <code>^(\d+)$</code><br>- Минуты и секунды: <code>10:23</code>, пример регулярного выражения <code>^(\d+):(\d{1,2})$</code><br>- Часы, минуты и секунды: <code>1h23m10s</code>, пример регулярного выражения <code>^(?:(\d+)h)?(?:(\d{1,2})m)?(?:(\d{1,2})s)$</code></td></tr><tr><td><code>task_id</code></td><td style="text-align: center;">Необязательный</td><td>Положительный целочисленный ID конкретной задачи, которую нужно подсветить, когда сообщение по ссылке содержит <a href="/api/todo">список задач&nbsp;»</a>; соответствует полю <a href="/constructor/todoItem">todoItem</a>.<code>id</code>. Некорректные значения (неположительные или нечисловые) следует считать ошибкой.</td></tr><tr><td><code>option_id</code></td><td style="text-align: center;">Необязательный</td><td>Закодированный в base64url идентификатор конкретного варианта <a href="/constructor/poll">опроса&nbsp;»</a>, который нужно подсветить, когда сообщение по ссылке содержит опрос; соответствует полю <a href="/constructor/pollAnswer">pollAnswer</a>.<code>option</code>. Декодированное значение обязано быть корректным UTF-8, иначе его следует проигнорировать.</td></tr></tbody></table>

Учтите, что ID [темы форума](/api/forum/#forum-topics) — это на самом деле ID сервисного сообщения, создавшего тему, поэтому, если клиент разбирает [ссылку на сообщение](#message-links), которая указывает на сервисное сообщение [messageActionTopicCreate](/constructor/messageActionTopicCreate/), ему следует открыть саму тему.  
Кроме того, если ID сообщения равен `1`, а супергруппа по ссылке — форум, вместо первого сообщения супергруппы следует открыть тему «General».

### Ссылки на темы форума

Используются для ссылок на конкретную [тему форума](/api/forum/#forum-topics).

Синтаксис у них ровно такой же, как у [ссылок на сообщения](#message-links), потому что ID темы — это на самом деле ID сервисного сообщения, создавшего тему; поэтому, когда клиент разбирает [ссылку на сообщение](#message-links), указывающую на сервисное сообщение [messageActionTopicCreate](/constructor/messageActionTopicCreate/), ему следует открыть тему, а не это сообщение.

Кроме того, если ID сообщения равен `1`, а супергруппа по ссылке — форум, вместо первого сообщения супергруппы следует открыть тему «General».

### Ссылки «Поделиться»

Используются, чтобы поместить заранее подготовленное сообщение и URL в поле ввода выбранного чата.  
Обрабатывать такие ссылки следует так:

-   Показать окно выбора диалога
-   После выбора: проверить и обрезать URL, а затем вставить его в начало поля ввода
-   Добавить в поле ввода перевод строки
-   Дописать текст `text`, если он присутствует, и выделить его

Синтаксис `t.me`:

```
t.me/share?url=<url>&text=<text>
t.me/share/url?url=<url>&text=<text>
t.me/share/url/?url=<url>&text=<text>
t.me/msg/url?url=<url>&text=<text>
```

Синтаксис `tg:`:

```
tg://msg_url?url=<url>&text=<text>
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>url</code></td><td style="text-align: center;">Обязательный</td><td>URL, которым нужно поделиться (в URL-кодировке)</td></tr><tr><td><code>text</code></td><td style="text-align: center;">Необязательный</td><td>Сообщение, которым нужно поделиться</td></tr></tbody></table>

### Ссылки на бизнес-чат

[Глубокие ссылки на бизнес-чат »](/api/business/#business-chat-links) позволяют владельцам бизнес-аккаунтов делиться заранее подготовленными ссылками на свой аккаунт [Telegram Business](/api/business/) и при желании заранее заполнять поле ввода сообщения готовым текстом (с поддержкой [оформления текста сущностями »](/api/entities/)).

Дополнительного ограничения на длину подготовленного сообщения нет (потому что текст сообщения _не_ передаётся в строке запроса URL, а запрашивается с сервера по идентификатору из ссылки); кроме того, у каждой созданной глубокой ссылки на бизнес-чат есть счётчик просмотров.

О том, как создавать, изменять и разбирать ссылки на бизнес-чат, а также получать статистику их просмотров, см. [здесь »](/api/business/#business-chat-links).

Обрабатывать такие ссылки следует так:

-   Вызвать [account.resolveBusinessChatLink](/method/account.resolveBusinessChatLink/), передав `slug`, чтобы получить сведения о ссылке в виде [account.resolvedBusinessChatLinks](/constructor/account.resolvedBusinessChatLinks/) и увеличить счётчик просмотров.
-   Открыть возвращённый `peer`, заранее заполнив поле ввода текста возвращёнными значениями `message` и `entities` (если они присутствуют).

Синтаксис `t.me`:

```
t.me/m/<slug>
```

Синтаксис `tg:`:

```
tg://message?slug=<slug>
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>slug</code></td><td style="text-align: center;">Обязательный</td><td>Идентификатор (<code>slug</code>), который нужно передать в <a href="/method/account.resolveBusinessChatLink">account.resolveBusinessChatLink</a> и в методы управления ссылками.</td></tr></tbody></table>

### Ссылки на видеочат/трансляцию

Используются, чтобы присоединяться к видео- и голосовым чатам в группах и к трансляциям в каналах.  
Такие ссылки создаются методом [phone.exportGroupCallInvite](/method/phone.exportGroupCallInvite/).  
Учтите, что ссылки `voicechat` устарели: API всегда экспортирует ссылки `videochat` — и для видеочатов, и для голосовых чатов в группах, а клиентам следует поддерживать разбор старого формата ссылок только ради обратной совместимости.

Синтаксис `t.me`:

```
t.me/<username>?videochat
t.me/<username>?videochat=<invite_hash>
t.me/<username>?livestream
t.me/<username>?livestream=<invite_hash>
t.me/<username>?voicechat
t.me/<username>?voicechat=<invite_hash>
```

Синтаксис `tg:`:

```
tg://resolve?domain=<username>&videochat
tg://resolve?domain=<username>&videochat=<invite_hash>
tg://resolve?domain=<username>&livestream
tg://resolve?domain=<username>&livestream=<invite_hash>
tg://resolve?domain=<username>&voicechat
tg://resolve?domain=<username>&voicechat=<invite_hash>
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>invite_hash</code></td><td style="text-align: center;">Необязательный</td><td>Хеш приглашения, который экспортируется, если при вызове <a href="/method/phone.exportGroupCallInvite">phone.exportGroupCallInvite</a> был установлен флаг <code>can_self_unmute</code>: его следует передать в <a href="/method/phone.joinGroupCall">phone.joinGroupCall</a>, он разрешает пользователю говорить в трансляциях и в групповых чатах с выключенными микрофонами.</td></tr></tbody></table>

### Ссылки на конференции

Используются для ссылок на [конференц-звонки со сквозным шифрованием](/api/end-to-end/group-calls/).

Синтаксис `t.me`:

```
t.me/call/<slug>
```

Синтаксис `tg:`:

```
tg://call?slug=<slug>
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>slug</code></td><td style="text-align: center;">Обязательный</td><td>Хеш приглашения в конференц-звонок со сквозным шифрованием, который нужно передать в методы работы с конференц-звонками.</td></tr></tbody></table>

### Ссылки на наборы стикеров

Используются, чтобы устанавливать наборы стикеров или наборы [пользовательских эмодзи](/api/custom-emoji/), как описано [здесь »](/api/stickers/#installing-stickersets).

Синтаксис `t.me`:

```
t.me/addstickers/<slug>
t.me/addemoji/<slug>
```

Синтаксис `tg:`:

```
tg://addstickers?set=<slug>
tg://addemoji?set=<slug>
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>slug</code></td><td style="text-align: center;">Обязательный</td><td>Короткое имя набора стикеров, используемое при <a href="/api/stickers#installing-stickersets">установке стикеров</a>.</td></tr></tbody></table>

### Ссылки на наборы пользовательских эмодзи

Используются, чтобы устанавливать наборы [пользовательских эмодзи](/api/custom-emoji/), как описано [здесь »](/api/stickers/#installing-stickersets).

Синтаксис `t.me`:

```
t.me/addemoji/<slug>
```

Синтаксис `tg:`:

```
tg://addemoji?set=<slug>
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>slug</code></td><td style="text-align: center;">Обязательный</td><td>Короткое имя набора стикеров, используемое при <a href="/api/stickers#installing-stickersets">установке стикеров</a>.</td></tr></tbody></table>

### Ссылки на истории

Используются для ссылок на [историю Telegram »](/api/stories/) и создаются по процедуре, [описанной здесь »](/api/links/#story-links).

Синтаксис `t.me`:

```
t.me/<username>/s/<story_id>
```

Синтаксис `tg:`:

```
tg://resolve?domain=<username>&story=<story_id>
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>username</code></td><td style="text-align: center;">Обязательный</td><td>Имя пользователя или канала, опубликовавшего историю.</td></tr><tr><td><code>story_id</code></td><td style="text-align: center;">Обязательный</td><td>ID <a href="/api/stories#watching-stories">истории Telegram, которую нужно получить и показать, как описано здесь&nbsp;»</a>.<br>Если значение равно <code>live</code>, то это уже <a href="#live-story-links">ссылка на прямой эфир&nbsp;»</a>.</td></tr></tbody></table>

#### Ссылки на прямой эфир

Особая разновидность [ссылок на истории](#story-links): служит для открытия прямого эфира, который прямо сейчас ведёт пользователь или канал (вместо ID истории подставляется буквальное ключевое слово `live`).

Синтаксис `t.me`:

```
t.me/<username>/s/live
```

Синтаксис `tg:`:

```
tg://resolve?domain=<username>&story=live
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>username</code></td><td style="text-align: center;">Обязательный</td><td>Имя пользователя или канала, ведущего прямой эфир.</td></tr></tbody></table>

### Ссылки на альбомы историй

Указывают на [альбом историй »](/api/stories/#story-albums) в профиле пира: чтобы получить истории из указанного альбома, используйте [stories.getAlbumStories](/method/stories.getAlbumStories/).

Синтаксис `t.me`:

```
t.me/<username>?album=<album_id>
t.me/<username>/a/<album_id>
```

Синтаксис `tg:`:

```
tg://resolve?domain=<username>&album=<album_id>
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>username</code></td><td style="text-align: center;">Обязательный</td><td>Имя пользователя пира, которому принадлежит коллекция.</td></tr><tr><td><code>album_id</code></td><td style="text-align: center;">Обязательный</td><td>Целочисленный ID <a href="/api/stories#story-albums">альбома историй&nbsp;»</a>, берётся из <a href="/constructor/storyAlbum">storyAlbum</a>.<code>album_id</code>.</td></tr></tbody></table>

### Ссылки на публикацию истории

Используются, чтобы открыть у пользователя редактор [истории »](/api/stories/), при желании заранее выбрав тип публикуемого содержимого.

Синтаксис `tg:`:

```
tg://post
tg://post/<content_type>
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>content_type</code></td><td style="text-align: center;">Необязательный</td><td>Тип содержимого истории; если параметр отсутствует, редактор открывается без предварительно выбранного типа. Распознаваемые значения:<br><br><br>- <code>photo</code> — создать историю с фотографией.<br>- <code>video</code> — создать историю с видео.<br>- <code>live</code> — начать прямой эфир.<br><br><br>Любое другое непустое значение означает тип содержимого, не поддерживаемый текущей версией клиента; в таком случае следует предложить пользователю обновить приложение.</td></tr></tbody></table>

### Ссылки на запрос создания управляемого бота

Используются, чтобы запросить создание нового [управляемого бота »](/api/bots/managed-bots/).

[@term:via_deeplink] Обработка такой ссылки состоит в том, чтобы запустить [процедуру создания управляемого бота »](/api/bots/managed-bots/#creating-a-managed-bot) и при итоговом вызове [bots.createBot](/method/bots.createBot/) дополнительно выставить флаг `via_deeplink` — признак того, что создание бота начато переходом по глубокой ссылке.

Синтаксис `t.me`:

```
t.me/newbot/<manager_bot_username>/<suggested_bot_username>?name=<suggested_bot_name>
t.me/newbot/<manager_bot_username>?name=<suggested_bot_name>
```

Синтаксис `tg:`:

```
tg://newbot?manager=<manager_bot_username>&username=<suggested_bot_username>&name=<suggested_bot_name>
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>manager_bot_username</code></td><td style="text-align: center;">Обязательный</td><td>Имя пользователя бота-управляющего, передаётся в <a href="/method/bots.createBot">bots.createBot</a>.<code>manager_id</code>.<br>Прежде чем использовать это значение, разрешите его и убедитесь, что оно относится к боту-управляющему (то есть у полученного <a href="/constructor/user">user</a> должен быть выставлен флаг <code>bot_can_manage_bots</code>).</td></tr><tr><td><code>suggested_bot_username</code></td><td style="text-align: center;">Необязательный</td><td>Предлагаемое имя пользователя для создаваемого управляемого бота, передаётся в <a href="/method/bots.createBot">bots.createBot</a>.<code>username</code>.<br>Если значение непустое и <strong>не</strong> заканчивается на <code>bot</code>, добавьте в конец <code>bot</code>, прежде чем предлагать его пользователю.<br>Значение может быть пустым — тогда пользователь обязан выбрать имя пользователя до вызова <a href="/method/bots.createBot">bots.createBot</a>.</td></tr><tr><td><code>suggested_bot_name</code></td><td style="text-align: center;">Необязательный</td><td>Предлагаемое название для создаваемого управляемого бота, передаётся в <a href="/method/bots.createBot">bots.createBot</a>.<code>name</code>.<br>Значение может быть пустым — тогда пользователь обязан выбрать название до вызова <a href="/method/bots.createBot">bots.createBot</a>.</td></tr></tbody></table>

### Ссылки на буст

Используются пользователями, чтобы [бустить каналы »](/api/boost/), давая им возможность публиковать истории и получать другие привилегии.

Используйте информацию о канале, чтобы забустить его так, как описано [здесь »](/api/boost/).

Синтаксис `t.me` (публичные каналы):

```
t.me/boost/<username>
t.me/<username>?boost
```

Синтаксис `t.me` (приватные каналы):

```
t.me/boost?c=<id>
t.me/c/<id>?boost
```

Синтаксис `tg:` (публичные каналы):

```
tg://boost?domain=<username>
```

Синтаксис `tg:` (приватные каналы):

```
tg://boost?channel=<id>
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>username</code></td><td style="text-align: center;">Обязателен для публичных ссылок</td><td>Имя пользователя канала.</td></tr><tr><td><code>channel</code></td><td style="text-align: center;">Обязателен для приватных ссылок</td><td>ID канала.</td></tr></tbody></table>

### Ссылки OAuth

Используются для авторизации входящего [запроса входа через OAuth Telegram »](/api/url-authorization/#oauth-authorization).

Учтите, что `token` по-прежнему нужно проверять отдельно (он обязан быть непустым), однако в [messages.requestUrlAuth](/method/messages.requestUrlAuth/) следует передавать **дословно** **всю глубокую ссылку целиком**, а не только параметр `token`, как указано [здесь »](/api/url-authorization/#oauth-authorization).

**Важно**: обрабатывайте такую глубокую ссылку только тогда, когда запрос на её открытие приходит извне приложения; **не** обрабатывайте её, если по ней кликнули внутри приложения — например, в сообщениях, [кнопках](/api/bots/buttons/), встроенном браузере, [mini apps](/api/bots/webapps/) и тому подобном.

Учтите, что mini app всё же могут пользоваться входом через OAuth, но [несколько иным образом »](/api/url-authorization/#oauth-authorization-for-mini-apps).

Синтаксис `t.me`:

```
https://t.me/oauth?startapp=<token>
```

Синтаксис `tg:`:

```
tg://oauth?token=<token>
tg://resolve?domain=oauth&startapp=<token>
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>token</code></td><td style="text-align: center;">Обязательный</td><td>Токен OAuth, обязан быть непустым.</td></tr></tbody></table>

### Ссылки на прокси

Используются, чтобы поделиться прокси-сервером, через который можно подключаться к Telegram.

#### Ссылки MTProxy

Используются для [MTProxy »](/mtproto/mtproto-transports/#transport-obfuscation).

Синтаксис `t.me`:

```
t.me/proxy?server=<server>&port=<port>&secret=<secret>
```

Синтаксис `tg:`:

```
tg://proxy?server=<server>&port=<port>&secret=<secret>
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>server</code></td><td style="text-align: center;">Обязательный</td><td>IP-адрес или хост сервера MTProxy</td></tr><tr><td><code>port</code></td><td style="text-align: center;">Обязательный</td><td>Порт сервера MTProxy</td></tr><tr><td><code>secret</code></td><td style="text-align: center;">Обязательный</td><td><a href="/mtproto/mtproto-transports#transport-obfuscation">Секрет&nbsp;»</a> MTProxy</td></tr></tbody></table>

#### Ссылки на прокси SOCKS5

Используются для прокси SOCKS5.

Синтаксис `t.me`:

```
t.me/socks?server=<server>&port=<port>&user=<user>&pass=<pass>
```

Синтаксис `tg:`:

```
tg://socks?server=<server>&port=<port>&user=<user>&pass=<pass>
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>server</code></td><td style="text-align: center;">Обязательный</td><td>IP-адрес или хост прокси-сервера</td></tr><tr><td><code>port</code></td><td style="text-align: center;">Обязательный</td><td>Порт прокси-сервера</td></tr><tr><td><code>user</code></td><td style="text-align: center;">Необязательный</td><td>Имя пользователя прокси-сервера</td></tr><tr><td><code>pass</code></td><td style="text-align: center;">Необязательный</td><td>Пароль прокси-сервера</td></tr></tbody></table>

### Ссылки на темы оформления

Используются, чтобы [устанавливать темы оформления »](/api/themes/#installing-themes).

Синтаксис `t.me`:

```
t.me/addtheme/<name>
```

Синтаксис `tg:`:

```
tg://addtheme?slug=<name>
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>name</code></td><td style="text-align: center;">Обязательный</td><td>Короткое имя темы оформления, используемое при <a href="/api/themes#installing-themes">установке тем&nbsp;»</a></td></tr></tbody></table>

### Ссылки на тон AI-компоновщика

Используются, чтобы поделиться пользовательским [тоном AI-компоновщика »](/api/ai/#ai-compose-tones) и установить его.

Обработка такой ссылки состоит в том, чтобы разрешить `slug` методом [aicompose.getTone](/method/aicompose.getTone/), передав [inputAiComposeToneSlug](/constructor/inputAiComposeToneSlug/) с этим значением `slug`, а затем показать предпросмотр возвращённого [aiComposeTone](/constructor/aiComposeTone/), позволяющий пользователю установить его методом [aicompose.saveTone](/method/aicompose.saveTone/).

Синтаксис `t.me`:

```
t.me/addstyle/<slug>
```

Синтаксис `tg:`:

```
tg://addstyle?slug=<slug>
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>slug</code></td><td style="text-align: center;">Обязательный</td><td>Уникальный <a href="/api/ai#ai-compose-tones">тон AI-компоновщика&nbsp;»</a> — значение slug, как в <a href="/constructor/aiComposeTone">aiComposeTone</a>.<code>slug</code>.</td></tr></tbody></table>

### Ссылки на обои

Используются для того, чтобы делиться фонами чата (обоями) и устанавливать их: [подробнее о различных типах обоев и заливок »](/api/wallpapers/).

#### [Обои-изображения](/api/wallpapers/#image-wallpapers)

Используются для [обоев на основе изображения »](/api/wallpapers/#image-wallpapers).

Синтаксис `t.me`:

```
t.me/bg/<slug>?mode=<mode>
```

Синтаксис `tg:`:

```
tg://bg?slug=<slug>&mode=<mode>
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>slug</code></td><td style="text-align: center;">Обязательный</td><td>Идентификатор обоев, по которому файл изображения получают методом <a href="/method/account.getWallPaper">account.getWallPaper</a>.</td></tr><tr><td><code>mode</code></td><td style="text-align: center;">Необязательный</td><td>Сочетание значений <code>blur</code> и <code>motion</code> (объединяемых знаком <code>+</code>), включающее размытие и/или параллакс-эффект, как описано в <a href="/api/wallpapers#image-wallpapers">документации&nbsp;»</a>.</td></tr></tbody></table>

#### Обои со сплошной заливкой

Используются для [обоев-заливок »](/api/wallpapers/#fill-wallpapers) со [сплошной заливкой »](/api/wallpapers/#solid-fill).

Синтаксис `t.me`:

```
t.me/bg/<hex_color>
```

Синтаксис `tg:`:

```
tg://bg?color=<hex_color>
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>hex_color</code></td><td style="text-align: center;">Обязательный</td><td>Цвет заливки в шестнадцатеричном формате RGB.</td></tr></tbody></table>

#### Обои с градиентной заливкой

Используются для [обоев-заливок »](/api/wallpapers/#fill-wallpapers) с [градиентной заливкой »](/api/wallpapers/#gradient-fill).

Синтаксис `t.me`:

```
t.me/bg/<top_color>-<bottom_color>?rotation=<rotation>
```

Синтаксис `tg:`:

```
tg://bg?gradient=<top_color>-<bottom_color>&rotation=<rotation>
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>top_color</code></td><td style="text-align: center;">Обязательный</td><td>Верхний цвет градиента в шестнадцатеричном формате RGB.</td></tr><tr><td><code>bottom_color</code></td><td style="text-align: center;">Обязательный</td><td>Нижний цвет градиента в шестнадцатеричном формате RGB.</td></tr><tr><td><code>rotation</code></td><td style="text-align: center;">Необязательный</td><td>Угол поворота градиента по часовой стрелке, в градусах; 0–359. Обязан всегда делиться на 45; если не задан, по умолчанию равен 0.</td></tr></tbody></table>

#### Обои с произвольной градиентной заливкой

Используются для [обоев-заливок »](/api/wallpapers/#fill-wallpapers) с [произвольной градиентной заливкой »](/api/wallpapers/#freeform-gradient-fill).

Синтаксис `t.me`:

```
t.me/bg/<hex_color1>~<hex_color2>~<hex_color3>
t.me/bg/<hex_color1>~<hex_color2>~<hex_color3>~<hex_color4>
```

Синтаксис `tg:`:

```
tg://bg?gradient=<hex_color1>~<hex_color2>~<hex_color3>
tg://bg?gradient=<hex_color1>~<hex_color2>~<hex_color3>~<hex_color4>
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>hex_color1</code></td><td style="text-align: center;">Обязательный</td><td>Первый цвет градиента в шестнадцатеричном формате RGB.</td></tr><tr><td><code>hex_color2</code></td><td style="text-align: center;">Обязательный</td><td>Второй цвет градиента в шестнадцатеричном формате RGB.</td></tr><tr><td><code>hex_color3</code></td><td style="text-align: center;">Обязательный</td><td>Третий цвет градиента в шестнадцатеричном формате RGB.</td></tr><tr><td><code>hex_color4</code></td><td style="text-align: center;">Необязательный</td><td>Четвёртый цвет градиента в шестнадцатеричном формате RGB.</td></tr></tbody></table>

#### Узорные обои со сплошной заливкой

Используются для [узорных обоев »](/api/wallpapers/#pattern-wallpapers) со [сплошной заливкой »](/api/wallpapers/#solid-fill).

Синтаксис `t.me`:

```
t.me/bg/<slug>?intensity=<intensity>&bg_color=<bg_color>&mode=<mode>
```

Синтаксис `tg:`:

```
tg://bg?slug=<slug>&intensity=<intensity>&bg_color=<bg_color>&mode=<mode>
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>slug</code></td><td style="text-align: center;">Обязательный</td><td>Идентификатор обоев, по которому файл узора получают методом <a href="/method/account.getWallPaper">account.getWallPaper</a>.</td></tr><tr><td><code>intensity</code></td><td style="text-align: center;">Обязательный</td><td>Значение в диапазоне от −100 до 100, определяющее, как узор сочетается с заливкой, <a href="/api/wallpapers#pattern-wallpapers">как описано в документации</a>.</td></tr><tr><td><code>bg_color</code></td><td style="text-align: center;">Обязательный</td><td>Цвет заливки в шестнадцатеричном формате RGB.</td></tr><tr><td><code>mode</code></td><td style="text-align: center;">Необязательный</td><td><code>motion</code> — включает параллакс-эффект, как описано в <a href="/api/wallpapers#image-wallpapers">документации</a>.</td></tr></tbody></table>

#### Узорные обои с градиентной заливкой

Используются для [узорных обоев »](/api/wallpapers/#pattern-wallpapers) с [градиентной заливкой »](/api/wallpapers/#gradient-fill).

Синтаксис `t.me`:

```
t.me/bg/<slug>?intensity=<intensity>&bg_color=<top_color>-<bottom_color>&rotation=<rotation>&mode=<mode>
```

Синтаксис `tg:`:

```
tg://bg?slug=<slug>&intensity=<intensity>&bg_color=<top_color>-<bottom_color>&rotation=<rotation>&mode=<mode>
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>slug</code></td><td style="text-align: center;">Обязательный</td><td>Идентификатор обоев, по которому файл узора получают методом <a href="/method/account.getWallPaper">account.getWallPaper</a>.</td></tr><tr><td><code>intensity</code></td><td style="text-align: center;">Обязательный</td><td>Значение в диапазоне от −100 до 100, определяющее, как узор сочетается с заливкой, <a href="/api/wallpapers#pattern-wallpapers">как описано в документации</a>.</td></tr><tr><td><code>top_color</code></td><td style="text-align: center;">Обязательный</td><td>Верхний цвет градиента в шестнадцатеричном формате RGB.</td></tr><tr><td><code>bottom_color</code></td><td style="text-align: center;">Обязательный</td><td>Нижний цвет градиента в шестнадцатеричном формате RGB.</td></tr><tr><td><code>rotation</code></td><td style="text-align: center;">Необязательный</td><td>Угол поворота градиента по часовой стрелке, в градусах; 0–359. Обязан всегда делиться на 45; если не задан, по умолчанию равен 0.</td></tr><tr><td><code>mode</code></td><td style="text-align: center;">Необязательный</td><td><code>motion</code> — включает параллакс-эффект, как описано в <a href="/api/wallpapers#image-wallpapers">документации</a>.</td></tr></tbody></table>

#### Узорные обои с произвольной градиентной заливкой

Используются для [узорных обоев »](/api/wallpapers/#pattern-wallpapers) с [произвольной градиентной заливкой »](/api/wallpapers/#freeform-gradient-fill).

Синтаксис `t.me`:

```
t.me/bg/<slug>?intensity=<intensity>&bg_color=<hex_color1>~<hex_color2>~<hex_color3>&mode=<mode>
t.me/bg/<slug>?intensity=<intensity>&bg_color=<hex_color1>~<hex_color2>~<hex_color3>~<hex_color4>&mode=<mode>
```

Синтаксис `tg:`:

```
tg://bg?slug=<slug>&intensity=<intensity>&bg_color=<hex_color1>~<hex_color2>~<hex_color3>&mode=<mode>
tg://bg?slug=<slug>&intensity=<intensity>&bg_color=<hex_color1>~<hex_color2>~<hex_color3>~<hex_color4>&mode=<mode>
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>slug</code></td><td style="text-align: center;">Обязательный</td><td>Идентификатор обоев, по которому файл узора получают методом <a href="/method/account.getWallPaper">account.getWallPaper</a>.</td></tr><tr><td><code>intensity</code></td><td style="text-align: center;">Обязательный</td><td>Значение в диапазоне от −100 до 100, определяющее, как узор сочетается с заливкой, <a href="/api/wallpapers#pattern-wallpapers">как описано в документации</a>.</td></tr><tr><td><code>hex_color1</code></td><td style="text-align: center;">Обязательный</td><td>Первый цвет градиента в шестнадцатеричном формате RGB.</td></tr><tr><td><code>hex_color2</code></td><td style="text-align: center;">Обязательный</td><td>Второй цвет градиента в шестнадцатеричном формате RGB.</td></tr><tr><td><code>hex_color3</code></td><td style="text-align: center;">Обязательный</td><td>Третий цвет градиента в шестнадцатеричном формате RGB.</td></tr><tr><td><code>hex_color4</code></td><td style="text-align: center;">Необязательный</td><td>Четвёртый цвет градиента в шестнадцатеричном формате RGB.</td></tr><tr><td><code>mode</code></td><td style="text-align: center;">Необязательный</td><td><code>motion</code> — включает параллакс-эффект, как описано в <a href="/api/wallpapers#image-wallpapers">документации</a>.</td></tr></tbody></table>

### Ссылки на ботов

Используются для ссылок на ботов.

Синтаксис `t.me`:

```
t.me/<bot_username>?start=<parameter>
```

Синтаксис `tg:`:

```
tg://resolve?domain=<bot_username>&start=<parameter>
```

Учтите, что [у реферальных ссылок похожий синтаксис, но с обязательным префиксом в `parameter`](#referral-links).

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>bot_username</code></td><td style="text-align: center;">Обязательный</td><td>Имя пользователя бота</td></tr><tr><td><code>parameter</code></td><td style="text-align: center;">Необязательный</td><td>Стартовый параметр, до 64 символов base64url: если он указан и <code>bot_username</code> действительно принадлежит боту, строку ввода текста следует заменить кнопкой <code>Start</code> (даже если пользователь уже запускал бота), по нажатию которой должен вызываться <a href="/method/messages.startBot">messages.startBot</a> с соответствующим значением <code>parameter</code>. Учтите, что если <code>bot_username</code> совпадает со <a href="/api/config#premium-bot-username">значением конфигурации <code>premium_bot_username</code>&nbsp;»</a>, то нажатие на такую ссылку должно немедленно вызывать <a href="/method/messages.startBot">messages.startBot</a> с соответствующим значением <code>parameter</code>.</td></tr></tbody></table>

### Ссылки для добавления ботов в группы и каналы

Используются для добавления ботов в группы или каналы.  
Прежде всего следует проверить, что `<bot_username>` действительно указывает на бота.  
Затем, для ссылок на группы:

-   Если параметр `admin` не указан:
    -   Показать диалог выбора групп, в которые пользователь может добавлять участников
    -   Добавить бота в группу
    -   Если указан `parameter`, вызвать [messages.startBot](/method/messages.startBot/) с соответствующим значением `parameter`
-   Если параметр `admin` указан:
    -   Показать диалог выбора групп, в которых пользователь может назначать и изменять администраторов
    -   Если бот уже администратор группы, объединить имеющиеся права администратора с правами из `admin`
    -   Назначить бота администратором либо изменить его права администратора на новые
    -   Если указан `parameter`, вызвать [messages.startBot](/method/messages.startBot/) с соответствующим значением `parameter`

Для ссылок на каналы:

-   Показать диалог выбора каналов, в которых пользователь может назначать и изменять администраторов
-   Если бот уже администратор канала, объединить имеющиеся права администратора с правами из `admin`
-   Назначить бота администратором либо изменить его права администратора на новые

Синтаксис `t.me` (группы):

```
t.me/<bot_username>?startgroup=<parameter>&admin=<permissions>
t.me/<bot_username>?startgroup&admin=<permissions>
```

Синтаксис `tg:` (группы):

```
tg://resolve?domain=<bot_username>&startgroup=<parameter>&admin=<permissions>
tg://resolve?domain=<bot_username>&startgroup&admin=<permissions>
```

Синтаксис `t.me` (каналы):

```
t.me/<bot_username>?startchannel&admin=<permissions>
```

Синтаксис `tg:` (каналы):

```
tg://resolve?domain=<bot_username>&startchannel&admin=<permissions>
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>bot_username</code></td><td style="text-align: center;">Обязательный</td><td>Имя пользователя бота</td></tr><tr><td><code>parameter</code></td><td style="text-align: center;">Необязательный для ссылок на группы, отсутствует в ссылках на каналы</td><td>Стартовый параметр, только для ссылок на группы, до 64 символов base64url: если он указан и <code>bot_username</code> действительно принадлежит боту, то после добавления бота в группу следует вызвать <a href="/method/messages.startBot">messages.startBot</a> с соответствующим значением <code>parameter</code>.</td></tr><tr><td><code>admin</code></td><td style="text-align: center;">Необязательный для ссылок на группы, обязательный для ссылок на каналы</td><td>Сочетание перечисленных ниже идентификаторов, разделённых знаком <code>+</code>; каждый из них соответствует определённому флагу в конструкторе <a href="/constructor/chatAdminRights">chatAdminRights&nbsp;»</a>:<br>- <code>change_info</code> - <a href="/constructor/chatAdminRights">chatAdminRights.change_info</a><br>- <code>post_messages</code> - <a href="/constructor/chatAdminRights">chatAdminRights.post_messages</a><br>- <code>edit_messages</code> - <a href="/constructor/chatAdminRights">chatAdminRights.edit_messages</a><br>- <code>delete_messages</code> - <a href="/constructor/chatAdminRights">chatAdminRights.delete_messages</a><br>- <code>restrict_members</code> - <a href="/constructor/chatAdminRights">chatAdminRights.ban_users</a><br>- <code>invite_users</code> - <a href="/constructor/chatAdminRights">chatAdminRights.invite_users</a><br>- <code>pin_messages</code> - <a href="/constructor/chatAdminRights">chatAdminRights.pin_messages</a><br>- <code>manage_topics</code> - <a href="/constructor/chatAdminRights">chatAdminRights.manage_topics</a><br>- <code>promote_members</code> - <a href="/constructor/chatAdminRights">chatAdminRights.add_admins</a><br>- <code>manage_video_chats</code> - <a href="/constructor/chatAdminRights">chatAdminRights.manage_call</a><br>- <code>anonymous</code> - <a href="/constructor/chatAdminRights">chatAdminRights.anonymous</a><br>- <code>manage_chat</code> - <a href="/constructor/chatAdminRights">chatAdminRights.other</a><br>- <code>post_stories</code> - <a href="/constructor/chatAdminRights">chatAdminRights.post_stories</a><br>- <code>edit_stories</code> - <a href="/constructor/chatAdminRights">chatAdminRights.edit_stories</a><br>- <code>delete_stories</code> - <a href="/constructor/chatAdminRights">chatAdminRights.delete_stories</a><br>- <code>manage_direct_messages</code> - <a href="/constructor/chatAdminRights">chatAdminRights.manage_direct_messages</a><br>- <code>manage_tags</code> - <a href="/constructor/chatAdminRights">chatAdminRights.manage_ranks</a></td></tr></tbody></table>

### Ссылки на игры

Используются для отправки [игр](/api/bots/games/).

Такие ссылки следует обрабатывать так:

-   Проверить, что `bot_username` действительно принадлежит боту, и если это так, то
-   Показать диалог выбора чата
-   Отправить игру в выбранный чат с помощью [inputMediaGame](/constructor/inputMediaGame/) и вложенного [inputGameShortName](/constructor/inputGameShortName/), как описано в [документации по играм](/api/bots/games/#sending-a-game).

Синтаксис `t.me`:

```
t.me/<bot_username>?game=<short_name>
```

Синтаксис `tg:`:

```
tg://resolve?domain=<bot_username>&game=<short_name>
```

[@term:short_name] Параметры (`short_name` — краткое имя игры, её постоянный строковый идентификатор у бота-владельца):

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>bot_username</code></td><td style="text-align: center;">Обязательный</td><td>Имя пользователя бота, которому принадлежит <a href="/api/bots/games">игра</a></td></tr><tr><td><code>short_name</code></td><td style="text-align: center;">Обязательный</td><td>Краткое имя игры</td></tr></tbody></table>

### Ссылки на настройки

Используются для перехода пользователя к настройкам приложения; при необходимости сразу открывают определённую страницу настроек или её подраздел.

Синтаксис `tg:`:

```
tg://settings
tg://settings/<path>
```

Если `<path>` не указан, открывается верхний уровень настроек.

В противном случае `<path>` — это разделённый косыми чертами идентификатор конкретной страницы настроек или подраздела, который нужно открыть. Клиентам следует распознавать перечисленные ниже значения, а для любого нераспознанного или распознанного лишь частично `<path>` — корректно откатываться к ближайшей известной родительской странице (а если и её нет — к верхнему уровню настроек).

-   `appearance`
-   `appearance/themes`
-   `appearance/themes/edit`
-   `appearance/themes/create`
-   `appearance/wallpapers`
-   `appearance/wallpapers/edit`
-   `appearance/wallpapers/set`
-   `appearance/wallpapers/choose-photo`
-   `appearance/your-color/profile`
-   `appearance/your-color/profile/add-icons`
-   `appearance/your-color/profile/use-gift`
-   `appearance/your-color/profile/reset`
-   `appearance/your-color/name`
-   `appearance/your-color/name/add-icons`
-   `appearance/your-color/name/use-gift`
-   `appearance/night-mode`
-   `appearance/auto-night-mode`
-   `appearance/text-size`
-   `appearance/text-size/use-system`
-   `appearance/message-corners`
-   `appearance/animations`
-   `appearance/stickers-and-emoji`
-   `appearance/stickers-and-emoji/edit`
-   `appearance/stickers-and-emoji/trending`
-   `appearance/stickers-and-emoji/archived`
-   `appearance/stickers-and-emoji/archived/edit`
-   `appearance/stickers-and-emoji/emoji`
-   `appearance/stickers-and-emoji/emoji/edit`
-   `appearance/stickers-and-emoji/emoji/archived`
-   `appearance/stickers-and-emoji/emoji/archived/edit`
-   `appearance/stickers-and-emoji/emoji/suggest`
-   `appearance/stickers-and-emoji/emoji/quick-reaction`
-   `appearance/stickers-and-emoji/emoji/quick-reaction/choose`
-   `appearance/stickers-and-emoji/suggest-by-emoji`
-   `appearance/stickers-and-emoji/large-emoji`
-   `appearance/stickers-and-emoji/dynamic-order`
-   `appearance/stickers-and-emoji/emoji/show-more`
-   `appearance/app-icon`
-   `appearance/tap-for-next-media`
-   `ask-question`
-   `auto_delete`
-   `business`
-   `business/do-not-hide-ads`
-   `change_number`
-   `chat/browser`
-   `chat/browser/enable-browser`
-   `chat/browser/clear-cookies`
-   `chat/browser/clear-cache`
-   `chat/browser/history`
-   `chat/browser/clear-history`
-   `chat/browser/never-open`
-   `chat/browser/clear-list`
-   `chat/browser/search`
-   `data`
-   `data/storage`
-   `data/storage/edit`
-   `data/storage/auto-remove`
-   `data/storage/clear-cache`
-   `data/storage/max-cache`
-   `data/usage`
-   `data/usage/mobile`
-   `data/usage/wifi`
-   `data/usage/reset`
-   `data/usage/roaming`
-   `data/auto-download/mobile`
-   `data/auto-download/mobile/enable`
-   `data/auto-download/mobile/usage`
-   `data/auto-download/mobile/photos`
-   `data/auto-download/mobile/stories`
-   `data/auto-download/mobile/videos`
-   `data/auto-download/mobile/files`
-   `data/auto-download/wifi`
-   `data/auto-download/wifi/enable`
-   `data/auto-download/wifi/usage`
-   `data/auto-download/wifi/photos`
-   `data/auto-download/wifi/stories`
-   `data/auto-download/wifi/videos`
-   `data/auto-download/wifi/files`
-   `data/auto-download/roaming`
-   `data/auto-download/roaming/enable`
-   `data/auto-download/roaming/usage`
-   `data/auto-download/roaming/photos`
-   `data/auto-download/roaming/stories`
-   `data/auto-download/roaming/videos`
-   `data/auto-download/roaming/files`
-   `data/auto-download/reset`
-   `data/save-to-photos/chats`
-   `data/save-to-photos/chats/max-video-size`
-   `data/save-to-photos/chats/add-exception`
-   `data/save-to-photos/chats/delete-all`
-   `data/save-to-photos/groups`
-   `data/save-to-photos/groups/max-video-size`
-   `data/save-to-photos/groups/add-exception`
-   `data/save-to-photos/groups/delete-all`
-   `data/save-to-photos/channels`
-   `data/save-to-photos/channels/max-video-size`
-   `data/save-to-photos/channels/add-exception`
-   `data/save-to-photos/channels/delete-all`
-   `data/less-data-calls`
-   `data/open-links`
-   `data/share-sheet`
-   `data/share-sheet/suggested-chats`
-   `data/share-sheet/suggest-by`
-   `data/share-sheet/reset`
-   `data/saved-edited-photos`
-   `data/pause-music`
-   `data/raise-to-listen`
-   `data/raise-to-speak`
-   `data/show-18-content`
-   `data/proxy`
-   `data/proxy/edit`
-   `data/proxy/use-proxy`
-   `data/proxy/add-proxy`
-   `data/proxy/share-list`
-   `data/proxy/use-for-calls`
-   `devices`
-   `devices/edit`
-   `devices/link-desktop`
-   `devices/terminate-sessions`
-   `devices/auto-terminate`
-   `edit`
-   `edit/set-photo`
-   `edit/first-name`
-   `edit/last-name`
-   `edit/bio`
-   `edit/birthday`
-   `edit/change-number`
-   `edit/username`
-   `edit/your-color`
-   `edit/channel`
-   `edit/add-account`
-   `edit/log-out`
-   `edit_profile`
-   `emoji-status`
-   `profile-color/profile`
-   `profile-color/profile/add-icons`
-   `profile-color/profile/use-gift`
-   `profile-color/name`
-   `profile-color/name/add-icons`
-   `profile-color/name/use-gift`
-   `profile-photo/use-emoji`
-   `faq`
-   `features`
-   `folders`
-   `folders/edit`
-   `folders/create`
-   `folders/add-recommended`
-   `folders/show-tags`
-   `folders/tab-view`
-   `language`
-   `language/show-button`
-   `language/translate-chats`
-   `language/do-not-translate`
-   `login_email`
-   `notifications`
-   `notifications/accounts`
-   `notifications/private-chats`
-   `notifications/private-chats/edit`
-   `notifications/private-chats/show`
-   `notifications/private-chats/preview`
-   `notifications/private-chats/sound`
-   `notifications/private-chats/add-exception`
-   `notifications/private-chats/delete-exceptions`
-   `notifications/private-chats/light-color`
-   `notifications/private-chats/vibrate`
-   `notifications/private-chats/priority`
-   `notifications/groups`
-   `notifications/groups/edit`
-   `notifications/groups/show`
-   `notifications/groups/preview`
-   `notifications/groups/sound`
-   `notifications/groups/add-exception`
-   `notifications/groups/delete-exceptions`
-   `notifications/groups/light-color`
-   `notifications/groups/vibrate`
-   `notifications/groups/priority`
-   `notifications/channels`
-   `notifications/channels/edit`
-   `notifications/channels/show`
-   `notifications/channels/preview`
-   `notifications/channels/sound`
-   `notifications/channels/add-exception`
-   `notifications/channels/delete-exceptions`
-   `notifications/channels/light-color`
-   `notifications/channels/vibrate`
-   `notifications/channels/priority`
-   `notifications/stories`
-   `notifications/stories/new`
-   `notifications/stories/important`
-   `notifications/stories/show-sender`
-   `notifications/stories/sound`
-   `notifications/stories/add-exception`
-   `notifications/stories/delete-exceptions`
-   `notifications/stories/light-color`
-   `notifications/stories/vibrate`
-   `notifications/stories/priority`
-   `notifications/reactions`
-   `notifications/reactions/messages`
-   `notifications/reactions/stories`
-   `notifications/reactions/show-sender`
-   `notifications/reactions/sound`
-   `notifications/reactions/light-color`
-   `notifications/reactions/vibrate`
-   `notifications/reactions/priority`
-   `notifications/in-app-sounds`
-   `notifications/in-app-vibrate`
-   `notifications/in-app-preview`
-   `notifications/in-chat-sounds`
-   `notifications/in-app-popup`
-   `notifications/lock-screen-names`
-   `notifications/include-channels`
-   `notifications/include-muted-chats`
-   `notifications/count-unread-messages`
-   `notifications/new-contacts`
-   `notifications/pinned-messages`
-   `notifications/reset`
-   `notifications/web`
-   `power-saving`
-   `power-saving/videos`
-   `power-saving/gifs`
-   `power-saving/stickers`
-   `power-saving/emoji`
-   `power-saving/effects`
-   `power-saving/preload`
-   `power-saving/background`
-   `power-saving/call-animations`
-   `power-saving/particles`
-   `power-saving/transitions`
-   `password`
-   `phone_privacy`
-   `premium`
-   `privacy`
-   `privacy/blocked`
-   `privacy/blocked/edit`
-   `privacy/blocked/block-user`
-   `privacy/blocked/block-user/chats`
-   `privacy/blocked/block-user/contacts`
-   `privacy/active-websites`
-   `privacy/active-websites/edit`
-   `privacy/active-websites/disconnect-all`
-   `privacy/passcode`
-   `privacy/passcode/disable`
-   `privacy/passcode/change`
-   `privacy/passcode/auto-lock`
-   `privacy/passcode/face-id`
-   `privacy/passcode/fingerprint`
-   `privacy/2sv`
-   `privacy/2sv/change`
-   `privacy/2sv/disable`
-   `privacy/2sv/change-email`
-   `privacy/passkey`
-   `privacy/passkey/create`
-   `privacy/auto-delete`
-   `privacy/auto-delete/set-custom`
-   `privacy/login-email`
-   `privacy/phone-number`
-   `privacy/phone-number/never`
-   `privacy/phone-number/always`
-   `privacy/last-seen`
-   `privacy/last-seen/never`
-   `privacy/last-seen/always`
-   `privacy/last-seen/hide-read-time`
-   `privacy/profile-photos`
-   `privacy/profile-photos/never`
-   `privacy/profile-photos/always`
-   `privacy/profile-photos/set-public`
-   `privacy/profile-photos/update-public`
-   `privacy/profile-photos/remove-public`
-   `privacy/bio`
-   `privacy/bio/never`
-   `privacy/bio/always`
-   `privacy/gifts`
-   `privacy/gifts/show-icon`
-   `privacy/gifts/never`
-   `privacy/gifts/always`
-   `privacy/gifts/accepted-types`
-   `privacy/birthday`
-   `privacy/birthday/add`
-   `privacy/birthday/never`
-   `privacy/birthday/always`
-   `privacy/saved-music`
-   `privacy/saved-music/never`
-   `privacy/saved-music/always`
-   `privacy/forwards`
-   `privacy/forwards/never`
-   `privacy/forwards/always`
-   `privacy/calls`
-   `privacy/calls/never`
-   `privacy/calls/always`
-   `privacy/calls/p2p`
-   `privacy/calls/p2p/never`
-   `privacy/calls/p2p/always`
-   `privacy/calls/ios-integration`
-   `privacy/voice`
-   `privacy/voice/never`
-   `privacy/voice/always`
-   `privacy/messages`
-   `privacy/messages/set-price`
-   `privacy/messages/exceptions`
-   `privacy/invites`
-   `privacy/invites/never`
-   `privacy/invites/always`
-   `privacy/self-destruct`
-   `privacy/data-settings`
-   `privacy/data-settings/sync-contacts`
-   `privacy/data-settings/delete-synced`
-   `privacy/data-settings/suggest-contacts`
-   `privacy/data-settings/delete-cloud-drafts`
-   `privacy/data-settings/clear-payment-info`
-   `privacy/data-settings/link-previews`
-   `privacy/data-settings/bot-settings`
-   `privacy/data-settings/map-provider`
-   `privacy/archive-and-mute`
-   `privacy-policy`
-   `qr-code`
-   `qr-code/share`
-   `qr-code/scan`
-   `search`
-   `send-gift`
-   `send-gift/self`
-   `stars`
-   `stars/top-up`
-   `stars/stats`
-   `stars/gift`
-   `stars/earn`
-   `themes`
-   `ton`
-   `saved-messages`
-   `calls`
-   `calls/all`
-   `calls/missed`
-   `calls/edit`
-   `calls/show-tab`
-   `calls/start-call`
-   `my-profile`
-   `my-profile/posts`
-   `my-profile/posts/all-stories`
-   `my-profile/posts/add-album`
-   `my-profile/gifts`
-   `my-profile/archived-posts`

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>path</code></td><td style="text-align: center;">Необязательный</td><td>Разделённый косыми чертами идентификатор страницы настроек или её подраздела, который нужно открыть; если параметр отсутствует, открывается основная страница настроек. Должен быть одним из перечисленных выше значений.</td></tr></tbody></table>

### Ссылки на «Мои звёзды»

Используются, чтобы привести пользователя на страницу «Мои звёзды», где расположены кнопка пополнения, история операций со звёздами, статистика и [многое другое »](/api/stars/).  
Эквивалентно [ссылке на настройки](#settings-links) `stars` (`tg://settings/stars`).

Синтаксис `tg:`:

```
tg://stars
```

### Ссылки на «Мои граммы»

Используются, чтобы привести пользователя на страницу баланса TON, где расположены кнопка пополнения, история операций с TON и статистика.  
Эквивалентно [ссылке на настройки](#settings-links) `ton` (`tg://settings/ton`).

Синтаксис `tg:`:

```
tg://ton
```

### Ссылки на контакты

Используются, чтобы привести пользователя к списку контактов, при необходимости сразу открыв определённый раздел или начав определённое действие.

Синтаксис `tg:`:

```
tg://contacts
tg://contacts/<section>
```

Если `<section>` не указан, просто открывается список контактов.  
В противном случае `<section>` должен принимать одно из следующих значений; при любом нераспознанном значении следует ограничиться открытием списка контактов:

<table class="table"><thead><tr><th scope="col"><code>section</code></th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>search</code></td><td>Установить фокус на поле поиска по контактам.</td></tr><tr><td><code>sort</code></td><td>Открыть настройки сортировки контактов.</td></tr><tr><td><code>new</code></td><td>Начать добавление нового контакта.</td></tr><tr><td><code>invite</code></td><td>Открыть сценарий «пригласить друзей».</td></tr><tr><td><code>manage</code></td><td>Открыть экран управления контактами.</td></tr></tbody></table>

### Ссылки на создание чата

Используются, чтобы привести пользователя к сценарию создания чата.

Синтаксис `tg:`:

```
tg://new
tg://new/channel
tg://new/group
```

<table class="table"><thead><tr><th scope="col">Ссылка</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>tg://new</code></td><td>Начать создание нового личного чата (то есть выбрать контакт, которому написать).</td></tr><tr><td><code>tg://new/channel</code></td><td>Начать создание нового канала.</td></tr><tr><td><code>tg://new/group</code></td><td>Начать создание новой группы.</td></tr></tbody></table>

### Ссылки на список чатов

Используются для действий над основным списком чатов.

Синтаксис `tg:`:

```
tg://chats/edit
tg://chats/search
tg://chats/emoji-status
```

<table class="table"><thead><tr><th scope="col">Ссылка</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>tg://chats/edit</code></td><td>Открыть список чатов в режиме выделения и редактирования, позволяющем пользователю выбрать чаты для массовых действий.</td></tr><tr><td><code>tg://chats/search</code></td><td>Открыть глобальный поиск.</td></tr><tr><td><code>tg://chats/emoji-status</code></td><td>Открыть выбор эмодзи-статуса (эквивалентно <a href="#settings-links">ссылке на настройки</a> <code>emoji-status</code>).</td></tr></tbody></table>

### Ссылка с кодом входа

Содержит код подтверждения номера телефона, который используется при [авторизации пользователя »](/api/auth/).

Синтаксис `t.me`:

```
t.me/login/<code>
```

Синтаксис `tg:`:

```
tg://login?code=<code>
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>code</code></td><td style="text-align: center;">Обязательный</td><td>Код входа.</td></tr></tbody></table>

### Ссылки на счёт

Используются, чтобы начать [оплату счёта »](/api/payments/), сформированного с помощью [payments.exportedInvoice](/constructor/payments.exportedInvoice/).

Синтаксис `t.me`:

```
t.me/invoice/<slug>
t.me/$<slug>
```

Синтаксис `tg:`:

```
tg://invoice?slug=<slug>
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>slug</code></td><td style="text-align: center;">Обязательный</td><td>Идентификатор счёта, который используется <a href="/api/payments">при оплате&nbsp;»</a>.</td></tr></tbody></table>

### Ссылки на языковой пакет

Используются для импорта пользовательских языковых пакетов с помощью [langpack.getLangPack](/method/langpack.getLangPack/).

Синтаксис `t.me`:

```
t.me/setlanguage/<slug>
```

Синтаксис `tg:`:

```
tg://setlanguage?lang=<slug>
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>slug</code></td><td style="text-align: center;">Обязательный</td><td>Название языкового пакета, который импортируется с помощью <a href="/method/langpack.getLangPack">langpack.getLangPack</a></td></tr></tbody></table>

### Ссылки Telegram Passport

Параметры и порядок использования описаны в [документации по Telegram Passport »](/api/passport/#uri-format).

Синтаксис `tg:`:

```
tg://passport?params
tg://resolve?domain=telegrampassport&params
```

### Ссылки подтверждения номера телефона

Отличаются от [ссылок с кодом входа](#login-code-link).  
Эти ссылки используются для подтверждения владения номером телефона, чтобы предотвратить удаление аккаунта: [подробнее о том, как их обрабатывать, — в документации по удалению аккаунта »](/api/account-deletion/).

Синтаксис `t.me`:

```
t.me/confirmphone?phone=<phone>&hash=<hash>
```

Синтаксис `tg:`:

```
tg://confirmphone?phone=<phone>&hash=<hash>
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>phone</code></td><td style="text-align: center;">Обязательный</td><td>Номер телефона</td></tr><tr><td><code>hash</code></td><td style="text-align: center;">Обязательный</td><td>Хеш подтверждения, который обрабатывается <a href="/api/account-deletion">так, как описано здесь&nbsp;»</a></td></tr></tbody></table>

### Ссылки на дарение нескольких подписок Telegram Premium

Используются, чтобы привести пользователя на экран дарения подписок Telegram Premium друзьям; [подробнее о дарении Telegram Premium сразу нескольким пользователям »](/api/giveaways/).

Такая ссылка приглашает пользователей подарить подписку Premium другим пользователям; [здесь »](#premium-giftcode-links) описан другой тип ссылок, который содержит сами подарочные коды, позволяющие активировать подаренную подписку Telegram Premium.

Синтаксис `tg:`:

```
tg://premium_multigift?ref=<referrer>
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>referrer</code></td><td style="text-align: center;">Необязательный</td><td>Используется официальными приложениями для аналитики через <a href="/method/help.saveAppLog">help.saveAppLog</a>.</td></tr></tbody></table>

### Реферальные ссылки на Telegram Premium

Используются официальными приложениями, чтобы показать страницу подписки [Telegram Premium](/api/premium/).

Синтаксис `tg:`:

```
tg://premium_offer?ref=<referrer>
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>referrer</code></td><td style="text-align: center;">Необязательный</td><td>Используется официальными приложениями для аналитики через <a href="/method/help.saveAppLog">help.saveAppLog</a></td></tr></tbody></table>

### Ссылки с подарочным кодом Telegram Premium

Используются для обработки [ссылок с подарочными кодами Telegram Premium](/api/giveaways/).

Синтаксис `tg:`:

```
tg://giftcode?slug=<slug>
```

Синтаксис `t.me`:

```
t.me/giftcode/<slug>
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>slug</code></td><td style="text-align: center;">Необязательный</td><td>Идентификатор подарочного кода, который передаётся в <a href="/method/payments.checkGiftCode">payments.checkGiftCode</a> для получения дополнительных сведений, а затем в <a href="/method/payments.applyGiftCode">payments.applyGiftCode</a> для его активации. Подробнее — в документации по <a href="/api/giveaways">розыгрышам</a>.</td></tr></tbody></table>

### Ссылки для входа по QR-коду

Используются в [процедуре входа по QR-коду »](/api/qr-login/).

Синтаксис `tg:`:

```
tg://login?token=<base64encodedtoken>
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>server</code></td><td style="text-align: center;">Обязательный</td><td><a href="/api/qr-login">Токен входа по QR-коду</a> в кодировке Base64URL</td></tr></tbody></table>

### Ссылки на Main Mini App

Используются для открытия [Main Mini App »](/api/bots/webapps/#main-mini-apps).

Если у указанного бота **не** настроено Main Mini App (то есть флаг [user](/constructor/user/).`bot_has_main_app` **не** установлен), следует вернуться к поведению [ссылок с именем пользователя »](#public-username-links).

Main Mini App следует открывать методом [messages.requestMainWebView](/method/messages.requestMainWebView/).

Синтаксис `t.me`:

```
t.me/<bot_username>?startapp&mode=<mode>
t.me/<bot_username>?startapp=<start_parameter>&mode=<mode>
```

Обратите внимание, что [ссылки на Mini App с прямой ссылкой](#direct-mini-app-links) имеют похожий синтаксис, но с дополнительным параметром `short_name`, который указывает конкретное Mini App, принадлежащее боту.

Синтаксис `tg:`:

```
tg://resolve?domain=<bot_username>&startapp&mode=<mode>
tg://resolve?domain=<bot_username>&startapp=<start_parameter>&mode=<mode>
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>bot_username</code></td><td style="text-align: center;">Обязательный</td><td>Имя пользователя бота, которому принадлежит <a href="/api/bots/webapps#main-mini-apps">main mini app&nbsp;»</a></td></tr><tr><td><code>start_parameter</code></td><td style="text-align: center;">Необязательный</td><td>Если указан, его следует передать в <a href="/method/messages.requestMainWebView">messages.requestMainWebView</a>.<code>start_param</code></td></tr><tr><td><code>mode</code></td><td style="text-align: center;">Необязательный</td><td>Если равен <code>compact</code>, обязан быть установлен флаг <a href="/method/messages.requestMainWebView">messages.requestMainWebView</a>.<code>compact</code>.<br>Если равен <code>fullscreen</code>, обязан быть установлен флаг <a href="/method/messages.requestMainWebView">messages.requestMainWebView</a>.<code>fullscreen</code>.</td></tr></tbody></table>

### Ссылки на mini app с прямой ссылкой

Используются, чтобы делиться [Mini App с прямой ссылкой](/api/bots/webapps/#direct-link-mini-apps).

Такие ссылки отличаются от [глубоких ссылок на меню вложений бота](#bot-attachment-or-side-menu-links): они не требуют от пользователя устанавливать меню вложений, и один бот может предлагать сразу несколько именованных mini app, различаемых по `short_name` (коротком строковом имени приложения).

Обрабатывать такие ссылки следует так, как описано в [документации по Mini App с прямой ссылкой »](/api/bots/webapps/#direct-link-mini-apps).

Синтаксис `t.me`:

```
t.me/<bot_username>/<short_name>?startapp=<start_parameter>&mode=<mode>
```

Синтаксис `tg:`:

```
tg://resolve?domain=<bot_username>&appname=<short_name>&startapp=<start_parameter>&mode=<mode>
```

Обратите внимание, что [ссылки на Main Mini App](#main-mini-app-links) имеют похожий синтаксис, но _без_ параметра `short_name`.

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>bot_username</code></td><td style="text-align: center;">Обязательный</td><td>Имя пользователя бота, которому принадлежит <a href="/api/bots/games">игра</a></td></tr><tr><td><code>appname</code></td><td style="text-align: center;">Обязательный</td><td>Короткое имя mini app, которое передаётся в <a href="/constructor/inputBotAppShortName">inputBotAppShortName</a>.<code>short_name</code> при вызове <a href="/method/messages.getBotApp">messages.getBotApp</a></td></tr><tr><td><code>startapp</code></td><td style="text-align: center;">Необязательный</td><td><code>start_param</code>, передаваемый в <a href="/method/messages.requestAppWebView">messages.requestAppWebView</a></td></tr><tr><td><code>mode</code></td><td style="text-align: center;">Необязательный</td><td>Если равен <code>compact</code>, обязан быть установлен флаг <a href="/method/messages.requestAppWebView">messages.requestAppWebView</a>.<code>compact</code>.<br>Если равен <code>fullscreen</code>, обязан быть установлен флаг <a href="/method/messages.requestAppWebView">messages.requestAppWebView</a>.<code>fullscreen</code>.</td></tr></tbody></table>

### Ссылки на меню вложений или боковое меню бота

Используются, чтобы установить и открыть [меню вложений или боковое меню бота »](/api/bots/attach/) в определённом чате.  
Для всех типов таких ссылок клиенту следует сначала [установить соответствующую запись меню вложений или бокового меню, как описано здесь »](/api/bots/attach/), и, если пользователь согласился в диалоге установки, открыть Mini App по следующей логике, зависящей от подтипа ссылки:

#### Открытие в текущем чате

После глобальной установки записи меню вложений или бокового меню открывает связанное mini app методом [messages.requestWebView](/method/messages.requestWebView/) в текущем открытом чате, передавая его в параметр `peer` метода [messages.requestWebView](/method/messages.requestWebView/).

Если текущий чат не поддерживается полем [attachMenuBot](/constructor/attachMenuBot/).`peer_types`:

-   Если пользователь только что установил меню вложений на предыдущем шаге, сообщить ему, что меню вложений успешно установлено.
-   В противном случае сообщить пользователю, что веб-приложение меню вложений нельзя открыть в указанном чате.

Синтаксис `t.me`:

```
t.me/<bot_username>?startattach
t.me/<bot_username>?startattach=<start_parameter>
```

Синтаксис `tg:`:

```
tg://resolve?domain=<bot_username>&startattach
tg://resolve?domain=<bot_username>&startattach=<start_parameter>
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>bot_username</code></td><td style="text-align: center;">Обязательный</td><td>Имя пользователя бота, которому принадлежит <a href="/api/bots/attach">запись меню вложений или бокового меню</a></td></tr><tr><td><code>start_parameter</code></td><td style="text-align: center;">Необязательный</td><td>Если указан, его следует передать в <a href="/method/messages.requestWebView">messages.requestWebView</a>.<code>start_param</code></td></tr></tbody></table>

#### Открытие в конкретном чате

После глобальной установки записи меню вложений или бокового меню открывает связанное mini app методом [messages.requestWebView](/method/messages.requestWebView/) в конкретном чате (он передаётся в параметр `peer` метода [messages.requestWebView](/method/messages.requestWebView/)).

Синтаксис `t.me`:

```
t.me/<username>?attach=<bot_username>
t.me/<username>?attach=<bot_username>&startattach=<start_parameter>
t.me/+<phone_number>?attach=<bot_username>
t.me/+<phone_number>?attach=<bot_username>&startattach=<start_parameter>
```

Синтаксис `tg:`:

```
tg://resolve?domain=<username>&attach=<bot_username>
tg://resolve?domain=<username>&attach=<bot_username>&startattach=<start_parameter>
tg://resolve?phone=<phone_number>&attach=<bot_username>
tg://resolve?phone=<phone_number>&attach=<bot_username>&startattach=<start_parameter>
```

Если указанный чат не поддерживается полем [attachMenuBot](/constructor/attachMenuBot/).`peer_types`:

-   Если пользователь только что установил меню вложений на предыдущем шаге, сообщить ему, что меню вложений успешно установлено.
-   В противном случае сообщить пользователю, что веб-приложение меню вложений нельзя открыть в указанном чате.

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>username</code></td><td style="text-align: center;">Обязательный для <a href="#public-username-links">ссылок с именем пользователя</a></td><td>Имя пользователя чата, в котором нужно открыть mini app</td></tr><tr><td><code>phone_number</code></td><td style="text-align: center;">Обязательный для <a href="#phone-number-links">ссылок с номером телефона</a></td><td>Номер телефона личного чата, в котором нужно открыть mini app</td></tr><tr><td><code>bot_username</code></td><td style="text-align: center;">Обязательный</td><td>Имя пользователя бота, которому принадлежит <a href="/api/bots/attach">меню вложений или боковое меню</a></td></tr><tr><td><code>start_parameter</code></td><td style="text-align: center;">Необязательный</td><td>Если указан, его следует передать в <a href="/method/messages.requestWebView">messages.requestWebView</a>.<code>start_param</code></td></tr></tbody></table>

#### Открытие в любом чате

После глобальной установки записи меню вложений или бокового меню открывает форму выбора диалога, которая откроет mini app меню вложений методом [messages.requestWebView](/method/messages.requestWebView/) в конкретном чате (передайте его в параметр `peer` метода [messages.requestWebView](/method/messages.requestWebView/)).

Синтаксис `t.me`:

```
t.me/<bot_username>?startattach&choose=users+bots+groups+channels
t.me/<bot_username>?startattach=<start_parameter>&choose=users+bots+groups+channels
```

Синтаксис `tg:`:

```
tg://resolve?domain=<bot_username>&startattach&choose=users+bots+groups+channels
tg://resolve?domain=<bot_username>&startattach=<start_parameter>&choose=users+bots+groups+channels
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>bot_username</code></td><td style="text-align: center;">Обязательный</td><td>Имя пользователя бота, которому принадлежит <a href="/api/bots/attach">меню вложений или боковое меню</a></td></tr><tr><td><code>start_parameter</code></td><td style="text-align: center;">Необязательный</td><td>Если указан, его следует передать в <a href="/method/messages.requestWebView">messages.requestWebView</a>.<code>start_param</code></td></tr><tr><td><code>choose</code></td><td style="text-align: center;">Необязательный</td><td>Сочетание значений <code>users</code>, <code>bots</code>, <code>groups</code>, <code>channels</code>, разделённых знаком <code>+</code>: указывает типы диалогов, которые нужно показать во всплывающем окне выбора диалога; перед использованием его обязательно пересечь с типами диалогов, содержащимися в поле <a href="/constructor/attachMenuBot">attachMenuBot</a>.<code>peer_types</code>.</td></tr></tbody></table>

### Ссылка на пополнение баланса Stars

Используется, чтобы убедиться, что на балансе пользователя есть хотя бы N [Telegram Stars](/api/stars/).  
Если это не так, ссылка обязана привести пользователя на [страницу пополнения баланса Telegram Stars](/api/stars/#buying-or-gifting-stars).

Синтаксис `tg:`:

```
tg://stars_topup?balance=<star_count>&purpose=<purpose>
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>star_count</code></td><td style="text-align: center;">Обязательный</td><td>Указывает, сколько звёзд необходимо для выполнения действия (целое число, обязано быть ограничено диапазоном от 1 до 1000000000000).<br>Если текущий баланс больше этого значения или равен ему, вместо формы пополнения следует показать простое всплывающее уведомление о том, что у пользователя уже достаточно звёзд для выполнения операции: это уведомление также обязано содержать кнопку «Всё равно купить», которая безусловно открывает форму пополнения баланса звёзд.</td></tr><tr><td><code>purpose</code></td><td style="text-align: center;">Необязательный</td><td>Содержит строку с указанием причины, по которой требуется пополнение; её обязательно показать на странице пополнения (если она открыта). Возможные значения:<br><br>- <code>subs</code> — купите <strong>Stars</strong>, чтобы сохранить подписки на каналы.<br>- <code>subadvance12</code> — купите <strong>Stars</strong>, чтобы подписки оставались активными следующие 12 месяцев.<br><br></td></tr></tbody></table>

### Ссылка на коллекционный подарок

Идентифицирует уникальный [коллекционный подарок »](/api/gifts/#collectible-gifts): используйте [payments.getUniqueStarGift](/method/payments.getUniqueStarGift/), чтобы получить сведения о коллекционном экземпляре.

Синтаксис `t.me`:

```
t.me/nft/<slug>
```

Синтаксис `tg:`:

```
tg://nft?slug=<slug>
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>slug</code></td><td style="text-align: center;">Обязательный</td><td>Идентификатор коллекционного подарка, который передаётся в <a href="/method/payments.getUniqueStarGift">payments.getUniqueStarGift</a>.</td></tr></tbody></table>

### Ссылки на коллекции подарков

Идентифицируют [коллекцию звёздных подарков »](/api/gifts/#gift-collections) в профиле пира: чтобы получить подарки из коллекции, используйте [payments.getSavedStarGifts](/method/payments.getSavedStarGifts/) с установленным флагом `collection_id`.

Синтаксис `t.me`:

```
t.me/<username>?collection=<collection_id>
t.me/<username>/c/<collection_id>
```

Синтаксис `tg:`:

```
tg://resolve?domain=<username>&collection=<collection_id>
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>username</code></td><td style="text-align: center;">Обязательный</td><td>Имя пользователя пира, которому принадлежит коллекция.</td></tr><tr><td><code>collection_id</code></td><td style="text-align: center;">Обязательный</td><td>Целочисленный идентификатор <a href="/api/gifts#gift-collections">коллекции звёздных подарков »</a> из поля <a href="/constructor/starGiftCollection">starGiftCollection</a>.<code>collection_id</code>.</td></tr></tbody></table>

### Ссылки на аукционы

Идентифицируют [аукцион коллекционных подарков »](/api/auctions/)

Синтаксис `t.me`:

```
t.me/auction/<slug>
```

Синтаксис `tg:`:

```
tg://stargift_auction?slug=<slug>
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>slug</code></td><td style="text-align: center;">Обязательный</td><td>Краткий идентификатор аукциона; по нему формируется <a href="/constructor/inputStarGiftAuctionSlug">inputStarGiftAuctionSlug</a>, который передаётся в <a href="/method/payments.getStarGiftAuctionState">payments.getStarGiftAuctionState</a>.</td></tr></tbody></table>

### Реферальные ссылки

Используются в [партнёрских программах](/api/bots/referrals/): после перехода по такой ссылке все покупки за Telegram Stars, совершённые для цифровых товаров и подписок в связанном [mini app](/api/bots/webapps/), дополнительно переводят определённое количество Stars _создателю_ ссылки.

Полное описание процесса смотрите [здесь »](/api/bots/referrals/).

Синтаксис `t.me`:

```
t.me/<bot_username>?ref=<referrer>
t.me/<bot_username>?start={prefix}<referrer>
```

Синтаксис `tg:`:

```
tg://resolve?domain=<bot_username>&ref=<referrer>
tg://resolve?domain=<bot_username>&start={prefix}<referrer>
```

`{prefix}` — любой из префиксов, перечисленных в [параметре клиентской конфигурации starref\_start\_param\_prefixes »](/api/config/#starref-start-param-prefixes): для вторых вариантов реферальных ссылок он обязателен, чтобы отличать их от [ссылок на ботов](#bot-links).

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>bot_username</code></td><td style="text-align: center;">Обязательный</td><td>Имя пользователя бота, которому принадлежит <a href="/api/bots/webapps">mini app</a></td></tr><tr><td><code>referrer</code></td><td style="text-align: center;">Обязательный</td><td>Идентификатор реферера, который передаётся в <a href="/method/contacts.resolveUsername">contacts.resolveUsername</a></td></tr></tbody></table>

### Ссылки по ID

Ссылки по ID — не более чем абстракция, предлагаемая [bot API](https://core.telegram.org/bots/api), чтобы упростить построение конструкторов [inputMessageEntityMentionName](/constructor/inputMessageEntityMentionName/) и [inputKeyboardButtonUserProfile](/constructor/inputKeyboardButtonUserProfile/); обычным клиентам их следует игнорировать.

Синтаксис `tg:`:

```
tg://user?id=<id>
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>id</code></td><td style="text-align: center;">Обязательный</td><td>ID пользователя</td></tr></tbody></table>

### Ссылки на эмодзи

Ссылки на эмодзи — не более чем абстракция, предлагаемая [bot API](https://core.telegram.org/bots/api), чтобы упростить построение конструкторов [messageEntityCustomEmoji](/constructor/messageEntityCustomEmoji/); обычным клиентам их следует игнорировать.

Синтаксис `tg:`:

```
tg://emoji?id=<id>
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>id</code></td><td style="text-align: center;">Обязательный</td><td><a href="/api/custom-emoji">ID пользовательского эмодзи</a></td></tr></tbody></table>

### Ссылки на момент времени

Ссылки на момент времени — не более чем абстракция, предлагаемая [bot API](https://core.telegram.org/bots/api), чтобы упростить построение [messageEntityFormattedDate](/constructor/inputMessageEntityMentionName/); обычным клиентам их следует игнорировать.

Синтаксис `tg:`:

```
tg://time?unix=<unix>&format=<format>
```

Параметры:

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Необязательный</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><code>unix</code></td><td style="text-align: center;">Обязательный</td><td>Положительная отметка времени Unix (в секундах) для отображаемой даты.</td></tr><tr><td><code>format</code></td><td style="text-align: center;">Необязательный</td><td>Строка формата, определяющая, как следует показать дату; подробнее см. <a href="/api/entities#date-entities">здесь »</a>.</td></tr></tbody></table>

### Неподдерживаемые ссылки

Если клиент встретил ссылку типа `tg:`, не описанную на этой странице, следует вызвать [help.getDeepLinkInfo](/method/help.getDeepLinkInfo/), передав только компонент `path` этой ссылки.

Схема:

```
help.deepLinkInfoEmpty#66afa166 = help.DeepLinkInfo;
help.deepLinkInfo#6a4ee832 flags:# update_app:flags.0?true message:string entities:flags.1?Vector<MessageEntity> = help.DeepLinkInfo;

---functions---

help.getDeepLinkInfo#3fedc75f path:string = help.DeepLinkInfo;
```

Метод может вернуть форматированный текст, содержащий, например:

-   описание того, что делает ссылка, либо
-   объяснение, почему такая ссылка не поддерживается приложением;

И (или) предложение обновиться до последней версии клиентского приложения, чтобы ссылка заработала: в этом случае в результате будет также выставлен флаг `update_app`, и приложению следует напрямую открыть ссылку на магазин приложений либо попытаться обновиться до последней версии.

Примеры ссылок, которые можно использовать для проверки:

-   `tg://need_update_for_some_feature?test=a`
-   `tg:some_unsupported_feature?test=b`

В этих случаях [help.getDeepLinkInfo](/method/help.getDeepLinkInfo/) следует вызывать со следующими параметрами:

-   `help.getDeepLinkInfo({path: "need_update_for_some_feature"})`
-   `help.getDeepLinkInfo({path: "some_unsupported_feature"})`

Учтите, что для нераспознанных ссылок `t.me` этот метод вызывать не следует — вместо него обязана применяться обычная логика обработки HTTP-ссылок.
