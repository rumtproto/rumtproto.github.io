---
title: "Спонсируемые сообщения"
original: "https://core.telegram.org/api/sponsored-messages"
section: api
description: "Соответствующая TL-схема:"
layout: layout.njk
---

# Спонсируемые сообщения

Соответствующая TL-схема:

#### Получение спонсируемых сообщений

```
sponsoredMessage#7dbf8673 flags:# recommended:flags.5?true can_report:flags.12?true random_id:bytes url:string title:string message:string entities:flags.1?Vector<MessageEntity> photo:flags.6?Photo media:flags.14?MessageMedia color:flags.13?PeerColor button_text:string sponsor_info:flags.7?string additional_info:flags.8?string min_display_duration:flags.15?int max_display_duration:flags.15?int = SponsoredMessage;

messages.sponsoredMessages#ffda656d flags:# posts_between:flags.0?int start_delay:flags.1?int between_delay:flags.2?int messages:Vector<SponsoredMessage> chats:Vector<Chat> users:Vector<User> = messages.SponsoredMessages;

---functions---

messages.getSponsoredMessages#3d6ce850 flags:# peer:InputPeer msg_id:flags.0?int = messages.SponsoredMessages;
```

Каждый раз, когда пользователь открывает канал или чат с ботом, клиент обязан вызвать [messages.getSponsoredMessages](/method/messages.getSponsoredMessages/), чтобы получить [спонсируемые сообщения](https://promote.telegram.org), доступные для этого канала или бота. Результат обязан кешироваться на **5 минут**.

> [Подробнее о спонсируемых сообщениях в Telegram](https://t.me/durov/172)

#### Получение спонсируемой видеорекламы

```
sponsoredMessage#7dbf8673 flags:# recommended:flags.5?true can_report:flags.12?true random_id:bytes url:string title:string message:string entities:flags.1?Vector<MessageEntity> photo:flags.6?Photo media:flags.14?MessageMedia color:flags.13?PeerColor button_text:string sponsor_info:flags.7?string additional_info:flags.8?string min_display_duration:flags.15?int max_display_duration:flags.15?int = SponsoredMessage;

messages.sponsoredMessages#ffda656d flags:# posts_between:flags.0?int start_delay:flags.1?int between_delay:flags.2?int messages:Vector<SponsoredMessage> chats:Vector<Chat> users:Vector<User> = messages.SponsoredMessages;

---functions---

messages.getSponsoredMessages#3d6ce850 flags:# peer:InputPeer msg_id:flags.0?int = messages.SponsoredMessages;
```

Каждый раз, когда пользователь начинает смотреть видео из канала в полноэкранном режиме, клиент обязан вызвать [messages.getSponsoredMessages](/method/messages.getSponsoredMessages/), передав в `msg_id` идентификатор сообщения с этим видео: так он получит спонсируемые сообщения, которые нужно показывать в небольшом окне поверх видеоплеера во время воспроизведения.

Возвращённые конструкторы [sponsoredMessage](/constructor/sponsoredMessage/) — это всегда исключительно текстовая реклама с установленными флагами `min_display_duration` и `max_display_duration`, а у охватывающего их конструктора [messages.sponsoredMessages](/constructor/messages.sponsoredMessages/) всегда установлены флаги `start_delay` и `between_delay`.

Полученные видеообъявления обязаны показываться по порядку, каждое — в течение [sponsoredMessage](/constructor/sponsoredMessage/).`max_display_duration` секунд, после чего скрываться автоматически.

Кроме того, пользователь может скрыть видеорекламу вручную по истечении [sponsoredMessage](/constructor/sponsoredMessage/).`min_display_duration` секунд.

Первое объявление обязано появиться после [messages.sponsoredMessages](/constructor/messages.sponsoredMessages/).`start_delay` секунд воспроизведения видео.

Каждое следующее объявление обязано появиться через [messages.sponsoredMessages](/constructor/messages.sponsoredMessages/).`between_delay` секунд после того, как предыдущее было скрыто — автоматически либо вручную пользователем.

Переход к следующему или предыдущему видео канала свайпом влево или вправо в полноэкранном плеере **не** должен приводить ни к новому вызову [messages.getSponsoredMessages](/method/messages.getSponsoredMessages/), ни к прерыванию каких-либо таймеров: считайте рекламу привязанной к самому полноэкранному плееру, а не к конкретному видео (это верно, пока воспроизводятся видео одного и того же канала).

Когда пользователь ставит видео на паузу, приостанавливайте все таймеры. Например, пусть:

-   `start_delay=5`
-   `between_delay=10`
-   `min_display_duration=5` для всех объявлений
-   `max_display_duration=10` для всех объявлений

И пусть события идут так:

-   `T=0`: пользователь начинает воспроизведение видео
-   `T=3`: пользователь ставит видео на паузу
-   `T=10`: пользователь возобновляет воспроизведение
-   `T=12`: показывается первое объявление
-   `T=15`: пользователь ставит видео на паузу
-   `T=20`: пользователь возобновляет воспроизведение
-   `T=22`: пользователю разрешается скрыть объявление
-   `T=25`: пользователь ставит видео на паузу
-   `T=30`: пользователь возобновляет воспроизведение
-   `T=32`: объявление скрывается автоматически
-   `T=35`: пользователь ставит видео на паузу
-   `T=40`: пользователь возобновляет воспроизведение
-   `T=47`: показывается следующее объявление

#### Получение спонсируемых результатов поиска

```
contacts.found#b3134d9d my_results:Vector<Peer> results:Vector<Peer> chats:Vector<Chat> users:Vector<User> = contacts.Found;

contacts.sponsoredPeersEmpty#ea32b4b1 = contacts.SponsoredPeers;
contacts.sponsoredPeers#eb032884 peers:Vector<SponsoredPeer> chats:Vector<Chat> users:Vector<User> = contacts.SponsoredPeers;

sponsoredPeer#c69708d3 flags:# random_id:bytes peer:Peer sponsor_info:flags.0?string additional_info:flags.1?string = SponsoredPeer;

---functions---

contacts.search#11f812d8 q:string limit:int = contacts.Found;

contacts.getSponsoredPeers#b6c8c393 q:string = contacts.SponsoredPeers;
```

[@term:peer] Клиенты также обязаны поддерживать спонсируемые пиры (`peer` — собеседник: пользователь, чат, канал или бот); их нужно показывать при поиске собеседников через **функцию глобального поиска**, вместе с результатами [contacts.search](/method/contacts.search/).

Следует вызывать [contacts.getSponsoredPeers](/method/contacts.getSponsoredPeers/): он возвращает список спонсируемых пиров, которые нужно показать после результатов из [contacts.found](/constructor/contacts.found/).`my_results` и перед результатами из [contacts.found](/constructor/contacts.found/).`results`.

Со спонсируемыми пирами следует обращаться так же, как со спонсируемыми сообщениями:

-   Если установлен флаг [sponsoredPeer](/constructor/sponsoredPeer/).`sponsor_info` или [sponsoredPeer](/constructor/sponsoredPeer/).`additional_info`, обязана присутствовать дополнительная пометка «Информация о спонсоре», которая по нажатию показывает содержимое этих полей.
-   [@term:random_id] Когда спонсируемый пир попадает в видимую область при прокрутке, следует вызвать [messages.viewSponsoredMessage](/method/messages.viewSponsoredMessage/) [так, как описано здесь »](#counting-sponsored-message-views), передав `random_id` конструктора [sponsoredPeer](/constructor/sponsoredPeer/) в параметр `random_id` (`random_id` — случайный идентификатор конкретного показа рекламы, по которому сервер связывает просмотры, нажатия и жалобы).
-   О нажатиях следует сообщать вызовом [messages.clickSponsoredMessage](/method/messages.clickSponsoredMessage/) без установки каких-либо флагов, передав `random_id` конструктора [sponsoredPeer](/constructor/sponsoredPeer/) в параметр `random_id`.
-   На спонсируемые результаты поиска можно пожаловаться через [messages.reportSponsoredMessage](/method/messages.reportSponsoredMessage/), следуя [обычной процедуре »](#reporting-sponsored-messages) и передав `random_id` конструктора [sponsoredPeer](/constructor/sponsoredPeer/) в параметр `random_id`.

Как указано выше, `random_id` конструктора [sponsoredPeer](/constructor/sponsoredPeer/) **можно** передавать в методы, относящиеся к спонсируемым сообщениям.

#### Отображение спонсируемых сообщений

Спонсируемые сообщения обязаны отображаться следующим образом:

-   [@term:deep link] В каналах они обязаны отображаться ниже всех остальных постов канала — после того как пользователь прокрутит ленту дальше, за последнее сообщение.  
    Спонсируемые сообщения канала содержат:

    -   Заголовок (в поле `title`)
    -   Текст (в полях `message`+`entities`)
    -   Необязательное медиа (в поле `media`; по нажатию на него следует открыть URL из `url`, как описано ниже; при этом должна быть отдельная кнопка для разворачивания видео на весь экран, нажатие на которую открывать ссылку `url` _не_ должно).
    -   Кнопку внизу (надпись в поле `button_text`), которая по нажатию открывает URL из `url`.  
        Перед открытием URL следует показать запрос на подтверждение — за исключением случая, когда хост-часть URL соответствует регулярному выражению `(^|\\.)(telegram\.(org|me|dog)|t\.me|te\.?legra\.ph|graph\.org|fragment\.com|telesco\.pe)$`: тогда URL открывается без подтверждения (а если это [глубокая ссылка »](/api/links/) — `deep link`, то есть ссылка вида `t.me/…` или `tg://…`, которую приложение разбирает само, — её следует открыть прямо в приложении, минуя браузер).
    -   Если установлен флаг `recommended`, сообщение следует пометить как «Рекомендуемое», а не как «Спонсируемое».
    -   Если установлен флаг `photo`, его следует использовать, чтобы показать рядом со спонсируемым сообщением кружок с фотографией профиля — так же, как у сообщений, отправленных в группах.
    -   Если установлен флаг `sponsor_info` или `additional_info`, в контекстном меню сообщения (меню, всплывающем по нажатию на кнопку) обязан присутствовать дополнительный пункт «Информация о спонсоре», который по нажатию показывает содержимое этих полей.
-   У ботов они обязаны отображаться [над чатом](https://telegram.org/blog/dynamic-video-quality-and-more#telegram-ads-in-bots), по аналогии с [панелью действий](/api/action-bar/). Реклама у ботов содержит:

    -   Заголовок (в поле `title`): клиент обязан сам добавить перед ним синий префикс «Реклама» — либо префикс «Рекомендуемое», если установлен флаг `recommended`.
    -   Текст (в полях `message`+`entities`)
    -   При нажатии на рекламную панель действий клиенту следует открыть URL из `url`.  
        Перед открытием URL следует показать запрос на подтверждение — за исключением случая, когда хост-часть URL соответствует регулярному выражению `(^|\\.)(telegram\.(org|me|dog)|t\.me|te\.?legra\.ph|graph\.org|fragment\.com|telesco\.pe)$`: тогда URL открывается без подтверждения (а если это [глубокая ссылка »](/api/links/), её следует открыть прямо в приложении, минуя браузер).

    Если установлен флаг `photo`, его уменьшенную версию следует показать в правой части панели действий.

Если поле `color` задано, спонсируемому сообщению или рекламной панели действий следует использовать указанный в нём [акцентный цвет сообщения »](/api/colors/).

#### Подсчёт просмотров спонсируемых сообщений

```
---functions---

messages.viewSponsoredMessage#269e3643 random_id:bytes = Bool;
```

Как только весь текст рекламы показан на экране (для рекламы в каналах — без учёта кнопки), клиент обязан вызвать [messages.viewSponsoredMessage](/method/messages.viewSponsoredMessage/) со значением `random_id` спонсируемого сообщения.

#### Нажатия на спонсируемые сообщения

```
---functions---

messages.clickSponsoredMessage#8235057e flags:# media:flags.0?true fullscreen:flags.1?true random_id:bytes = Bool;
```

В зависимости от действия пользователя клиент обязан следовать перечисленной ниже логике.

-   Нажатие на ссылку в спонсируемом сообщении: вызвать [messages.clickSponsoredMessage](/method/messages.clickSponsoredMessage/), открыть ссылку.
-   Нажатие на рекламную панель бота: вызвать [messages.clickSponsoredMessage](/method/messages.clickSponsoredMessage/), открыть ссылку.
-   Открытие спонсируемого чата или спонсируемого сайта по соответствующей кнопке: вызвать [messages.clickSponsoredMessage](/method/messages.clickSponsoredMessage/), открыть чат.
-   Открытие спонсируемого чата по имени в спонсируемом сообщении, по фотографии спонсируемого сообщения или по упоминанию в спонсируемом сообщении: вызвать [messages.clickSponsoredMessage](/method/messages.clickSponsoredMessage/), открыть чат.
-   Нажатия на медиа (только **фотографии и видео без звука**): вызвать [messages.clickSponsoredMessage](/method/messages.clickSponsoredMessage/) с установленным флагом `media`, открыть ссылку.
-   Нажатия на медиа (только **видео со звуком**): вызвать [messages.clickSponsoredMessage](/method/messages.clickSponsoredMessage/) с установленным флагом `media`, открыть видео на весь экран (ссылку пока **не** открывать).
-   Нажатия на медиа (только **видео со звуком в полноэкранном режиме**): вызвать [messages.clickSponsoredMessage](/method/messages.clickSponsoredMessage/) с установленными флагами `media` и `fullscreen`, открыть ссылку.
-   Нажатия на кнопку, пока спонсируемое видео развёрнуто на весь экран: вызвать [messages.clickSponsoredMessage](/method/messages.clickSponsoredMessage/) с установленным флагом `fullscreen`, открыть ссылку.

#### Жалобы на спонсируемые сообщения

```
sponsoredMessage#7dbf8673 flags:# recommended:flags.5?true can_report:flags.12?true random_id:bytes url:string title:string message:string entities:flags.1?Vector<MessageEntity> photo:flags.6?Photo media:flags.14?MessageMedia color:flags.13?PeerColor button_text:string sponsor_info:flags.7?string additional_info:flags.8?string min_display_duration:flags.15?int max_display_duration:flags.15?int = SponsoredMessage;

sponsoredMessageReportOption#430d3150 text:string option:bytes = SponsoredMessageReportOption;

channels.sponsoredMessageReportResultChooseOption#846f9e42 title:string options:Vector<SponsoredMessageReportOption> = channels.SponsoredMessageReportResult;
channels.sponsoredMessageReportResultAdsHidden#3e3bcf2f = channels.SponsoredMessageReportResult;
channels.sponsoredMessageReportResultReported#ad798849 = channels.SponsoredMessageReportResult;

---functions---

messages.reportSponsoredMessage#12cbf0c4 random_id:bytes option:bytes = channels.SponsoredMessageReportResult;
```

Чтобы пожаловаться на спонсируемое сообщение модераторам Telegram, вызовите [messages.reportSponsoredMessage](/method/messages.reportSponsoredMessage/), передав ID канала или бота, значение `random_id` спонсируемого сообщения и пустое поле `option`.

Учтите, что пожаловаться можно только на спонсируемые сообщения с установленным флагом [sponsoredMessage](/constructor/sponsoredMessage/).`can_report`.

Далее, если в ответ получен:

-   Конструктор [channels.sponsoredMessageReportResultChooseOption](/constructor/channels.sponsoredMessageReportResultChooseOption/) — пользователь обязан выбрать причину жалобы из локализованных вариантов в `options`, а после выбора клиент обязан вызвать метод повторно, передав поле `option` выбранного варианта в параметр `option` метода [messages.reportSponsoredMessage](/method/messages.reportSponsoredMessage/).  
    Поле `title` конструктора [channels.sponsoredMessageReportResultChooseOption](/constructor/channels.sponsoredMessageReportResultChooseOption/) обязано служить заголовком окна выбора варианта.
-   Конструктор [channels.sponsoredMessageReportResultAdsHidden](/constructor/channels.sponsoredMessageReportResultAdsHidden/) — спонсируемые сообщения скрыты для пользователя во всех чатах.
-   Конструктор [channels.sponsoredMessageReportResultReported](/constructor/channels.sponsoredMessageReportResultReported/) — жалоба на спонсируемое сообщение успешно принята.

Метод также может вернуть:

-   Ошибку RPC `AD_EXPIRED` — для рекламы с истёкшим сроком действия (слишком старой или не найденной)
-   Ошибку RPC `PREMIUM_ACCOUNT_REQUIRED` — если в выбранном варианте пользователь попросил скрыть спонсируемые сообщения, но для этого действия требуется Telegram Premium.

#### Тестирование спонсируемых сообщений

Для канала [https://t.me/SecretAdTestChannel](https://t.me/SecretAdTestChannel) система **всегда** возвращает спонсируемое сообщение: рекламу канала, конкретного сообщения в канале либо бота с параметром запуска.

#### Вывод дохода от рекламы владельцем канала или бота

У Telegram — одна из **самых щедрых систем вознаграждения** в истории социальных сетей. Владельцы каналов и ботов Telegram теперь могут получать **50%** дохода от рекламы, показанной в их каналах.

[Подробности здесь »](/api/revenue/) — о том, как вывести доход от рекламы в канале или боте и как посмотреть подробную статистику доходов.

* * *

#### Спонсируемые сообщения в сторонних приложениях

Telegram продолжает расти по всему миру — отчасти благодаря сторонним приложениям, использующим Telegram API. Чтобы покрыть растущие вместе с этим издержки, Telegram ввёл [спонсируемые сообщения](https://promote.telegram.org) — платный [щадящий приватность способ](https://t.me/durov/172) продвигать **ботов и каналы**.

Если приложение даёт своим пользователям **доступ к содержимому каналов Telegram**, сторонние разработчики, использующие Telegram API, обязаны до **1 января 2022 года** реализовать поддержку официальных спонсируемых сообщений и их корректный показ. К сожалению, Telegram не может финансово поддерживать сторонние приложения, которые не показывают спонсируемые сообщения, и такие приложения придётся отключить.

Использование Telegram API и дальше будет **бесплатным** для всех разработчиков. [Правила](https://core.telegram.org/api/terms#3-advertising-amp-monetization) монетизации в сторонних приложениях остаются прежними: разработчикам разрешается монетизировать свой труд с помощью собственной рекламы или иными законными способами при условии, что все применяемые в приложении способы монетизации явно указаны в его описании в магазине приложений.
