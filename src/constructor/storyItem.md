---
title: "storyItem"
original: "https://core.telegram.org/constructor/storyItem"
section: ref
kind: constructor
description: "Представляет историю."
layout: layout.njk
---

# storyItem

Представляет [историю](/api/stories/).

```
storyItem#edf164f1 flags:# pinned:flags.5?true public:flags.7?true close_friends:flags.8?true min:flags.9?true noforwards:flags.10?true edited:flags.11?true contacts:flags.12?true selected_contacts:flags.13?true out:flags.16?true id:int date:int from_id:flags.18?Peer fwd_from:flags.17?StoryFwdHeader expire_date:int caption:flags.0?string entities:flags.1?Vector<MessageEntity> media:MessageMedia media_areas:flags.14?Vector<MediaArea> privacy:flags.2?Vector<PrivacyRule> views:flags.3?StoryViews sent_reaction:flags.15?Reaction albums:flags.19?Vector<int> = StoryItem;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>pinned</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/constructor/true">true</a></td><td>Закреплена ли эта история в профиле пользователя</td></tr><tr><td><strong>public</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/constructor/true">true</a></td><td>Является ли эта история публичной и доступной для просмотра всем</td></tr><tr><td><strong>close_friends</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.8?<a href="/constructor/true">true</a></td><td>Могут ли эту историю видеть только <a href="/api/privacy">наши близкие друзья, подробнее см. здесь »</a></td></tr><tr><td><strong>min</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.9?<a href="/constructor/true">true</a></td><td>[@term:min] Полная информация об этой истории опущена из соображений экономии места и производительности; используйте <a href="/method/stories.getStoriesByID">stories.getStoriesByID</a>, чтобы получить полную информацию об этой истории, когда и если она понадобится.</td></tr><tr><td><strong>noforwards</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.10?<a href="/constructor/true">true</a></td><td>Является ли эта история <a href="https://telegram.org/blog/content-protection-delete-by-date-and-more">защищённой</a> и потому непересылаемой; клиентам также следует запретить пользователям сохранять вложенные медиафайлы (то есть видео должны только транслироваться, фотографии должны храниться в оперативной памяти и так далее).</td></tr><tr><td><strong>edited</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.11?<a href="/constructor/true">true</a></td><td>Указывает, была ли история отредактирована.</td></tr><tr><td><strong>contacts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.12?<a href="/constructor/true">true</a></td><td>Могут ли эту историю видеть только наши контакты</td></tr><tr><td><strong>selected_contacts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.13?<a href="/constructor/true">true</a></td><td>Могут ли эту историю видеть только избранные наши контакты</td></tr><tr><td><strong>out</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.16?<a href="/constructor/true">true</a></td><td>указывает, отправили ли мы эту историю.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Идентификатор истории.</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Когда история была опубликована.</td></tr><tr><td><strong>from_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.18?<a href="/type/Peer">Peer</a></td><td>Отправитель истории.</td></tr><tr><td><strong>fwd_from</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.17?<a href="/type/StoryFwdHeader">StoryFwdHeader</a></td><td>Для <a href="/api/stories#reposting-stories">репостов историй »</a> содержит сведения об исходной истории.</td></tr><tr><td><strong>expire_date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Когда истекает срок действия истории.</td></tr><tr><td><strong>caption</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Подпись истории.</td></tr><tr><td><strong>entities</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/MessageEntity">MessageEntity</a>&gt;</td><td><a href="/api/entities">Сущности оформления для форматированного текста</a></td></tr><tr><td><strong>media</strong></td><td style="text-align: center;"><a href="/type/MessageMedia">MessageMedia</a></td><td>Медиафайл истории.</td></tr><tr><td><strong>media_areas</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.14?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/MediaArea">MediaArea</a>&gt;</td><td>Список медиаобластей; подробнее о медиаобластях см. <a href="/api/stories#media-areas">здесь »</a>.</td></tr><tr><td><strong>privacy</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/PrivacyRule">PrivacyRule</a>&gt;</td><td><a href="/api/privacy">Правила приватности</a>, определяющие, кто может и кто не может просматривать эту историю</td></tr><tr><td><strong>views</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/StoryViews">StoryViews</a></td><td>Сведения о дате просмотра и реакции</td></tr><tr><td><strong>sent_reaction</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.15?<a href="/type/Reaction">Reaction</a></td><td>Реакция, которую мы отправили.</td></tr><tr><td><strong>albums</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.19?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td><a href="/api/stories#story-albums">Альбомы</a>, в которые входит эта история.</td></tr><tr><td><strong>music</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.20?<a href="/type/Document">Document</a></td><td>Если установлено, аудиодорожка, воспроизводимая как фоновая музыка для истории.</td></tr></tbody></table>

### Тип

[StoryItem](/type/StoryItem/)

### Связанные страницы

#### [Настройки приватности](/api/privacy/)

Telegram позволяет пользователям задавать детальные настройки приватности, выбирая, кто может и кто не может взаимодействовать с ними тем или иным способом.

#### [stories.getStoriesByID](/method/stories.getStoriesByID/)

Получить полные сведения о наборе [историй](/api/stories/) по их идентификаторам.

#### [Telegram Stories](/api/stories/)

Пользователи и каналы Telegram могут без труда публиковать и просматривать истории через API.

#### [Оформленный текст и сущности оформления](/api/entities/)

Как оформлять текст с помощью сущностей оформления
