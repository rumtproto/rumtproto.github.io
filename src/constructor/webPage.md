---
title: "webPage"
original: "https://core.telegram.org/constructor/webPage"
section: ref
kind: constructor
description: "Предпросмотр веб-страницы"
layout: layout.njk
---

# webPage

Предпросмотр веб-страницы

Поле `type` указывает тип веб-страницы, который влияет на отображение предпросмотра (то есть какая дополнительная кнопка действия предлагается, откуда берётся медиафайл и какой [WebPageAttribute](/type/WebPageAttribute/) присутствует в поле `attributes`). Оно может принимать одно из следующих значений:

-   [@term:Mini App] `app` - Предпросмотр [ссылки на Mini App »](/api/links/#main-mini-app-links): в поле `photo` находится значок приложения, а клиенты отображают кнопку, запускающую [Mini App »](/api/bots/webapps/).
-   `article` - Предпросмотр произвольной внешней статьи или веб-страницы. Если задано поле `cached_page`, клиенты отображают кнопку [instant view](https://instantview.telegram.org).
-   `document` - Предпросмотр внешнего документа или файла, содержащегося в поле `document`.
-   `gif` - Предпросмотр внешней анимации GIF. Если заданы `embed_url`+`embed_type`, GIF воспроизводится встроенным проигрывателем, иначе анимация содержится в поле `document`.
-   `photo` - Предпросмотр внешнего изображения, содержащегося в поле `photo`.
-   `profile` - Предпросмотр внешнего автора или страницы профиля; клиенты обычно отображают его с маленькой миниатюрой (принудительно уменьшенное медиа).
-   `telegram_aicomposetone` - Предпросмотр [ссылки на тон ИИ-редактора »](/api/links/#ai-compose-tone-links), которая передаётся при предпросмотре [пользовательского тона ИИ-редактора »](/api/ai/#ai-compose-tones). Поле `attributes` содержит [webPageAttributeAiComposeTone](/constructor/webPageAttributeAiComposeTone/) с [пользовательским эмодзи »](/api/custom-emoji/), обозначающим тон; клиенты отображают кнопку, применяющую переданный тон.
-   `telegram_album` - Предпросмотр [ссылки на сообщение »](/api/links/#message-links), указывающей на группу сообщений (альбом); отображается как сгруппированный медиаальбом, а не как предпросмотр с одним медиафайлом. Для этого типа медиафайлы альбома берутся **не** из полей `photo`/`document` верхнего уровня: вместо этого обязательно присутствует [cached\_page](#) ([instant view](https://instantview.telegram.org)), и клиенты отображают элементы его первого блока [pageBlockCollage](/constructor/pageBlockCollage/) или [pageBlockSlideshow](/constructor/pageBlockSlideshow/). Каждый элемент [pageBlockPhoto](/constructor/pageBlockPhoto/)/[pageBlockVideo](/constructor/pageBlockVideo/) в этом блоке ссылается на фотографию или видео по идентификатору, который разрешается по полям `photos` и `documents` объекта `cached_page`. Сам instant view кнопкой не предлагается (его заменяют медиафайлы альбома).
-   `telegram_auction` - Предпросмотр [ссылки на аукцион »](/api/links/#auction-links), ведущей на [аукцион коллекционных подарков »](/api/auctions/). Поле `attributes` содержит [webPageAttributeStarGiftAuction](/constructor/webPageAttributeStarGiftAuction/) с выставленным на аукцион подарком и датой окончания аукциона; клиенты отображают кнопку для участия в аукционе либо для просмотра результатов, если аукцион уже завершён.
-   `telegram_background` - Предпросмотр [глубокой ссылки на обои »](/api/links/#wallpaper-links), ведущей на [обои чата »](/api/wallpapers/). Параметры обоев (цвета фона, поворот градиента, интенсивность узора, размытие/движение и т. д.) разбираются из глубокой ссылки в поле `url`, а не из отдельных полей. Обои-изображения содержат изображение обоев в поле `document`. Обои с узором также используют поле `document`, при этом MIME-типом узора служит `application/x-tgwallpattern` или `image/png`; цвета из `url` отображаются как фон и оттенок узора. Одноцветные и градиентные обои не содержат медиафайлов и отрисовываются по цветам, закодированным в `url`. Поле `photo` отсутствует. Клиенты отображают кнопку для применения фона.
-   `telegram_bot` - Предпросмотр [ссылки на бота »](/api/links/#bot-links); отображается как предпросмотр профиля с аватаром бота в поле `photo`.
-   `telegram_botapp` - Предпросмотр [прямой ссылки на Mini App »](/api/links/#direct-mini-app-links), ведущей на именованный Mini App бота: в поле `photo` находится изображение предпросмотра приложения, а клиенты отображают кнопку, открывающую Mini App.
-   `telegram_call` - Предпросмотр [ссылки на конференцию »](/api/links/#conference-links), ведущей на [групповой звонок/конференцию »](/api/group-calls/); клиенты отображают кнопку для присоединения к звонку (поля `photo`/`document` отсутствуют).
-   `telegram_channel` - Предпросмотр [ссылки на публичное имя пользователя »](/api/links/#public-username-links), ведущей на канал; используется аватар канала в поле `photo`; клиенты отображают кнопку для открытия канала или подписки на него.
-   `telegram_channel_boost` - Предпросмотр [ссылки на буст »](/api/links/#boost-links), позволяющей [забустить канал »](/api/boost/); используется аватар канала в поле `photo`; клиенты отображают кнопку для буста канала.
-   `telegram_channel_direct` - Предпросмотр [ссылки на монофорум »](/api/links/#monoforum-links), ведущей в личные сообщения канала; используется аватар канала в поле `photo`.
-   `telegram_channel_request` - Предпросмотр [пригласительной ссылки на чат »](/api/links/#chat-invite-links), ведущей на канал, в котором включены [заявки на вступление »](/api/invites/#join-requests); клиенты отображают кнопку «Подать заявку».
-   `telegram_chat` - Предпросмотр [ссылки на публичное имя пользователя »](/api/links/#public-username-links), ведущей на обычную группу; используется аватар группы в поле `photo`; клиенты отображают кнопку для открытия группы или вступления в неё.
-   `telegram_chat_request` - Предпросмотр [пригласительной ссылки на чат »](/api/links/#chat-invite-links), ведущей на группу, в которой включены [заявки на вступление »](/api/invites/#join-requests); клиенты отображают кнопку «Подать заявку».
-   `telegram_chatlist` - Предпросмотр [ссылки на папку с чатами »](/api/links/#chat-folder-links), ведущей на [папку, которой можно поделиться »](/api/folders/#shared-folders) (поля `photo`/`document` отсутствуют): для текста предпросмотра клиенты используют поля `site_name`, `title` и `description`, объект [WebPageAttribute](/type/WebPageAttribute/) не требуется, а кнопка действия открывает глубокую ссылку из `url` для импорта папки.
-   `telegram_collection` - Предпросмотр [ссылки на коллекцию подарков »](/api/links/#gift-collection-links), ведущей на [коллекцию подарков »](/api/gifts/#gift-collections). Поле `attributes` содержит [webPageAttributeStarGiftCollection](/constructor/webPageAttributeStarGiftCollection/) со стикерами-значками коллекции; клиенты отображают кнопку для просмотра коллекции.
-   `telegram_community` - Предпросмотр [ссылки на папку с чатами »](/api/links/#chat-folder-links), ведущей на [папку, которой можно поделиться »](/api/folders/#shared-folders); отображается так же, как `telegram_chatlist`.
-   `telegram_giftcode` - Предпросмотр [ссылки на подарочный код Premium »](/api/links/#premium-giftcode-links), ведущей на [подарочный код Telegram Premium »](/api/giveaways/); клиенты отображают кнопку для просмотра или активации подарочного кода (поля `photo`/`document` отсутствуют).
-   `telegram_group_boost` - Предпросмотр [ссылки на буст »](/api/links/#boost-links), позволяющей [забустить супергруппу »](/api/boost/); используется аватар супергруппы в поле `photo`; клиенты отображают кнопку для буста супергруппы.
-   `telegram_livestream` - Предпросмотр [ссылки на видеочат/трансляцию »](/api/links/#video-chat-livestream-links), ведущей на [прямую видеотрансляцию »](/api/group-calls/); отображается как предпросмотр видеочата, помеченного как трансляция; клиенты отображают кнопку для просмотра трансляции.
-   `telegram_megagroup` - Предпросмотр [ссылки на публичное имя пользователя »](/api/links/#public-username-links), ведущей на супергруппу; используется аватар супергруппы в поле `photo`; клиенты отображают кнопку для открытия супергруппы или вступления в неё.
-   `telegram_megagroup_request` - Предпросмотр [пригласительной ссылки на чат »](/api/links/#chat-invite-links), ведущей на супергруппу, в которой включены [заявки на вступление »](/api/invites/#join-requests); клиенты отображают кнопку «Подать заявку».
-   `telegram_message` - Предпросмотр [ссылки на сообщение »](/api/links/#message-links), ведущей на одно сообщение; клиенты отображают кнопку для открытия сообщения. Для этого типа instant view из `cached_page` игнорируется.
-   `telegram_newbot` - Предпросмотр [ссылки на запрос создания управляемого бота »](/api/links/#managed-bot-creation-request-links), используемой для создания нового бота; клиенты отображают кнопку для создания и регистрации управляемого бота.
-   `telegram_nft` - Предпросмотр [ссылки на коллекционный подарок »](/api/links/#collectible-gift-link), ведущей на [коллекционный (уникальный) подарок »](/api/gifts/#collectible-gifts). Поле `attributes` содержит [webPageAttributeUniqueStarGift](/constructor/webPageAttributeUniqueStarGift/) с уникальным подарком; клиенты отображают кнопку для просмотра коллекционного подарка.
-   `telegram_stickerset` - Предпросмотр [ссылки на набор стикеров »](/api/links/#stickerset-links), ведущей на [набор стикеров или пользовательских эмодзи »](/api/stickers/). Поле `attributes` содержит [webPageAttributeStickerSet](/constructor/webPageAttributeStickerSet/) с несколькими стикерами для предпросмотра и флагами `emojis`/`text_color`; клиенты показывают стикеры предпросмотра и отображают кнопку для просмотра набора стикеров (или набора пользовательских эмодзи, если установлен флаг `emojis`).
-   `telegram_story` - Предпросмотр [ссылки на историю »](/api/links/#story-links), ведущей на [историю »](/api/stories/). Поле `attributes` содержит [webPageAttributeStory](/constructor/webPageAttributeStory/) с пиром и идентификатором истории (и, возможно, со вложенным объектом [storyItem](/constructor/storyItem/)); медиафайл предпросмотра и подпись берутся из истории, а клиенты отображают кнопку для её просмотра.
-   `telegram_story_album` - Предпросмотр [ссылки на альбом историй »](/api/links/#story-album-links), ведущей на [альбом историй »](/api/stories/): присутствует обложка в поле `photo` (и, возможно, видео в поле `document`), а клиенты отображают кнопку для просмотра альбома историй.
-   `telegram_theme` - Предпросмотр [ссылки на тему »](/api/links/#theme-links), ведущей на [тему »](/api/themes/). Поле `attributes` содержит [webPageAttributeTheme](/constructor/webPageAttributeTheme/) с файлом (или файлами) темы и её параметрами; клиенты отображают кнопку для применения темы.
-   `telegram_user` - Предпросмотр [ссылки на публичное имя пользователя »](/api/links/#public-username-links), ведущей на пользователя; отображается как предпросмотр профиля с аватаром пользователя в поле `photo`.
-   `telegram_videochat` - Предпросмотр [ссылки на видеочат/трансляцию »](/api/links/#video-chat-livestream-links), ведущей на [видеочат »](/api/group-calls/); отображается как предпросмотр видеочата.
-   `telegram_voicechat` - Предпросмотр [ссылки на видеочат/трансляцию »](/api/links/#video-chat-livestream-links), ведущей на [голосовой чат »](/api/group-calls/); отображается как предпросмотр видеочата без видео; клиенты отображают кнопку для присоединения к голосовому чату.
-   `video` - Предпросмотр внешнего видео. Если заданы `embed_url`+`embed_type`, видео воспроизводится встроенным проигрывателем, иначе видео содержится в поле `document`.

```
webPage#e89c45b2 flags:# has_large_media:flags.13?true video_cover_photo:flags.14?true id:long url:string display_url:string hash:int type:flags.0?string site_name:flags.1?string title:flags.2?string description:flags.3?string photo:flags.4?Photo embed_url:flags.5?string embed_type:flags.5?string embed_width:flags.6?int embed_height:flags.6?int duration:flags.7?int author:flags.8?string document:flags.9?Document cached_page:flags.10?Page attributes:flags.12?Vector<WebPageAttribute> = WebPage;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>has_large_media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.13?<a href="/constructor/true">true</a></td><td>Можно ли изменить размер медиа в предпросмотре.</td></tr><tr><td><strong>video_cover_photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.14?<a href="/constructor/true">true</a></td><td>Представляет пользовательскую <a href="/api/files#video-covers">обложку видео</a>.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор предпросмотра</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>URL веб-страницы из предпросмотра</td></tr><tr><td><strong>display_url</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>URL веб-страницы, который будет показан пользователю</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>[@term:hash] <a href="/api/offsets#hash-generation">Хеш выборки, используемый для кеширования; подробности здесь</a></td></tr><tr><td><strong>type</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Тип веб-страницы, влияющий на то, как отображается предпросмотр (то есть какая дополнительная кнопка действия предлагается, откуда берётся медиафайл и какой <a href="/type/WebPageAttribute">WebPageAttribute</a> присутствует в поле <code>attributes</code>). Список возможных значений см. <a href="#">выше</a>.</td></tr><tr><td><strong>site_name</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Краткое название сайта (например, Google Docs, App Store)</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/string">string</a></td><td>Заголовок содержимого</td></tr><tr><td><strong>description</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/string">string</a></td><td>Описание содержимого</td></tr><tr><td><strong>photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/Photo">Photo</a></td><td>Изображение, представляющее содержимое</td></tr><tr><td><strong>embed_url</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/string">string</a></td><td>URL, который нужно показать во встроенном предпросмотре</td></tr><tr><td><strong>embed_type</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/string">string</a></td><td>MIME-тип встроенного предпросмотра (например, text/html или video/mp4)</td></tr><tr><td><strong>embed_width</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/type/int">int</a></td><td>Ширина встроенного предпросмотра</td></tr><tr><td><strong>embed_height</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/type/int">int</a></td><td>Высота встроенного предпросмотра</td></tr><tr><td><strong>duration</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/type/int">int</a></td><td>Длительность содержимого в секундах</td></tr><tr><td><strong>author</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.8?<a href="/type/string">string</a></td><td>Автор содержимого</td></tr><tr><td><strong>document</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.9?<a href="/type/Document">Document</a></td><td>Предпросмотр содержимого в виде медиафайла</td></tr><tr><td><strong>cached_page</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.10?<a href="/type/Page">Page</a></td><td>Содержимое страницы в формате <a href="https://instantview.telegram.org">instant view</a></td></tr><tr><td><strong>attributes</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.12?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/WebPageAttribute">WebPageAttribute</a>&gt;</td><td>Атрибуты веб-страницы</td></tr></tbody></table>

### Тип

[WebPage](/type/WebPage/)

### Связанные страницы

#### [Загрузка и скачивание файлов](/api/files/)

Как правильно передавать большие объёмы данных.

#### [Постраничная выборка в API](/api/offsets/)

Как выбирать результаты из больших списков объектов.

#### [WebPageAttribute](/type/WebPageAttribute/)

Атрибуты веб-страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.

#### [Mini Apps в Telegram](/api/bots/webapps/)

Боты могут предлагать пользователям интерактивные веб-приложения на HTML5, полностью заменяющие любой сайт.

#### [Возможности ИИ](/api/ai/)

Telegram предлагает множество возможностей на основе ИИ, работающих на Cocoon — децентрализованной сети, спроектированной для максимальной приватности.

#### [webPageAttributeAiComposeTone](/constructor/webPageAttributeAiComposeTone/)

[Атрибут веб-страницы](/type/WebPageAttribute/), прикреплённый к [webPage](/constructor/webPage/) типа `telegram_aicomposetone`; создаётся при предпросмотре [тона ИИ-редактора »](/api/ai/#ai-compose-tones), которым поделились через [ссылку на тон ИИ-редактора »](/api/links/#ai-compose-tone-links).

#### [Пользовательские эмодзи](/api/custom-emoji/)

Telegram позволяет вставлять в сообщения анимированные и статичные пользовательские эмодзи.

#### [pageBlockCollage](/constructor/pageBlockCollage/)

Коллаж из медиа

#### [pageBlockSlideshow](/constructor/pageBlockSlideshow/)

Слайд-шоу

#### [pageBlockPhoto](/constructor/pageBlockPhoto/)

Фотография

#### [pageBlockVideo](/constructor/pageBlockVideo/)

Видео

#### [Аукционы коллекционных подарков](/api/auctions/)

Новые выпуски коллекционных подарков распространяются через аукционы за Stars, которые проходят в несколько раундов.

#### [webPageAttributeStarGiftAuction](/constructor/webPageAttributeStarGiftAuction/)

Содержит информацию об [аукционе коллекционного подарка »](/api/auctions/) для предпросмотра [webPage](/constructor/webPage/) [аукциона »](/api/auctions/) (у [webPage](/constructor/webPage/) поле `type` будет равно `telegram_auction`).

#### [Обои чатов](/api/wallpapers/)

Приложения Telegram умеют создавать, публиковать и синхронизировать фоны чатов.

#### [Групповые звонки](/api/group-calls/)

Как начинать групповые звонки и видеочаты, присоединяться к ним и управлять ими.

#### [Бусты каналов и супергрупп](/api/boost/)

Пользователи Telegram Premium могут открывать любимым каналам и супергруппам дополнительные возможности — например, публикацию историй, — отдавая за них бусты.

#### [Пригласительные ссылки](/api/invites/)

У чатов и каналов может быть публичное имя пользователя или закрытая пригласительная ссылка; закрытые пригласительные ссылки дополнительно могут требовать заявку на вступление от каждого пользователя.

#### [Папки диалогов](/api/folders/)

Telegram позволяет раскладывать чаты по папкам в зависимости от их типа, состояния уведомлений или других произвольных критериев — благодаря чёрным и белым спискам папок.

#### [Подарки Telegram](/api/gifts/)

Пользователи могут отправлять подарки друзьям. Получатели подарков могут показывать их в своих профилях или превращать в Telegram Stars ». Telegram Stars применяются для многого, в том числе для поддержки авторов и покупки услуг в мини-приложениях.

#### [webPageAttributeStarGiftCollection](/constructor/webPageAttributeStarGiftCollection/)

Содержит информацию о [коллекции подарков »](/api/gifts/#gift-collections) для предпросмотра [webPage](/constructor/webPage/) [коллекции подарков »](/api/gifts/#gift-collections) (у [webPage](/constructor/webPage/) поле `type` будет равно `telegram_collection`).

#### [Розыгрыши и подарки](/api/giveaways/)

Администраторы каналов и супергрупп Telegram могут запускать розыгрыши, чтобы случайным образом раздать подписчикам подписки Telegram Premium и другие подарки в обмен на бусты.

#### [webPageAttributeUniqueStarGift](/constructor/webPageAttributeUniqueStarGift/)

Содержит информацию о [коллекционном подарке »](/api/gifts/#collectible-gifts) для предпросмотра [webPage](/constructor/webPage/) [коллекционного подарка »](/api/gifts/#collectible-gifts) (у [webPage](/constructor/webPage/) поле `type` будет равно `telegram_nft`).

#### [Стикеры и маски](/api/stickers/)

Клиенты Telegram поддерживают отображение статических и анимированных стикеров.

#### [webPageAttributeStickerSet](/constructor/webPageAttributeStickerSet/)

Содержит информацию о [наборе стикеров »](/api/stickers/) для предпросмотра [webPage](/constructor/webPage/) [глубокой ссылки на набор стикеров »](/api/links/#stickerset-links) (у [webPage](/constructor/webPage/) поле `type` будет равно `telegram_stickerset`).

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.

#### [webPageAttributeStory](/constructor/webPageAttributeStory/)

Предпросмотр веб-страницы для истории Telegram

#### [storyItem](/constructor/storyItem/)

Представляет [историю](/api/stories/).

#### [Темы оформления Telegram](/api/themes/)

Приложения Telegram умеют создавать, отправлять и синхронизировать темы оформления.

#### [webPageAttributeTheme](/constructor/webPageAttributeTheme/)

Тема оформления страницы
