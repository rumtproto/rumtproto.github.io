---
title: "Обои чатов"
original: "https://core.telegram.org/api/wallpapers"
section: api
description: "Приложения Telegram умеют создавать, публиковать и синхронизировать фоны чатов."
layout: layout.njk
---

# Обои чатов

Приложения Telegram умеют создавать, публиковать и синхронизировать фоны чатов.

Обои обязаны отрисовываться по инструкциям, которые содержатся в конструкторах обоев.

### Типы обоев

Существует четыре основных типа обоев:

-   [Обои-изображения](#image-wallpapers)
-   [Обои-узоры](#pattern-wallpapers)
-   [Обои-заливки](#fill-wallpapers)
-   [Обои каналов и супергрупп](#channel-and-supergroup-wallpapers)

Обои-заливки и обои-узоры строятся с помощью одного из трёх [типов заливки](#fill-types).

#### Обои-изображения

```
wallPaper#a437c3ed id:long flags:# creator:flags.0?true default:flags.1?true pattern:flags.3?true dark:flags.4?true access_hash:long slug:string document:Document settings:flags.2?WallPaperSettings = WallPaper;

wallPaperSettings#372efcd0 flags:# blur:flags.1?true motion:flags.2?true background_color:flags.0?int second_background_color:flags.4?int third_background_color:flags.5?int fourth_background_color:flags.6?int intensity:flags.3?int rotation:flags.4?int emoticon:flags.7?string = WallPaperSettings;
```

Обои-изображения — это обои, описываемые конструктором [wallPaper](/constructor/wallPaperNoFile/), в поле `document` которого лежит изображение JPEG.  
Поле `settings` описывает преобразования, которые следует применить к изображению, если выставлены соответствующие флаги:

-   `settings.blur`: изображение следует уменьшить так, чтобы оно вписалось в квадрат 450×450, а затем размыть коробочным размытием с радиусом 12.
-   `settings.motion`: изображение должно слегка смещаться при наклоне устройства, создавая эффект параллакса.

Все остальные флаги поля `settings` следует игнорировать.

#### Обои-узоры

```
wallPaper#a437c3ed id:long flags:# creator:flags.0?true default:flags.1?true pattern:flags.3?true dark:flags.4?true access_hash:long slug:string document:Document settings:flags.2?WallPaperSettings = WallPaper;

wallPaperSettings#372efcd0 flags:# blur:flags.1?true motion:flags.2?true background_color:flags.0?int second_background_color:flags.4?int third_background_color:flags.5?int fourth_background_color:flags.6?int intensity:flags.3?int rotation:flags.4?int emoticon:flags.7?string = WallPaperSettings;
```

Обои-узоры — это обои, описываемые конструктором [wallPaper](/constructor/wallPaperNoFile/) с выставленным флагом `pattern`; они совмещают [цветовую заливку](#fill-types), заданную полем `settings`, с изображением узора в формате PNG или TGV (сжатое gzip подмножество SVG с типом MIME «application/x-tgwallpattern»), которое содержится в поле `document`.

Изображение узора должно быть полностью прозрачным всюду, кроме самого узора, который должен быть выполнен оттенками чёрного.

Перечисленные ниже флаги поля `settings` описывают, как именно узор совмещается с цветовой заливкой:

-   `settings.intensity`: значение в диапазоне от -100 до 100.
    -   Значения от 0 до 100 означают, что узор следует наложить поверх [цветовой заливки](#fill-types) с указанной интенсивностью (при 100 чёрный узор полностью виден на фоновой заливке, при 0 видна только фоновая заливка).
    -   Значения от -1 до -100 означают, что узор следует инвертировать (чёрный фон, прозрачный узор), а затем наложить поверх [цветовой заливки](#fill-types) с указанной интенсивностью (при -100 залитый узор полностью виден на чёрном фоне, при -1 виден только чёрный цвет).
-   `settings.motion`: узор должен слегка смещаться поверх фона при наклоне устройства, создавая эффект параллакса.

#### Обои-заливки

```
wallPaperNoFile#e0804116 id:long flags:# default:flags.1?true dark:flags.4?true settings:flags.2?WallPaperSettings = WallPaper;
```

Обои-заливки — это простые обои, описываемые конструктором [wallPaperNoFile](/constructor/wallPaperNoFile/); они содержат только [заливку](#fill-types), заданную полем `settings`.

#### Обои каналов и супергрупп

```
wallPaperSettings#372efcd0 flags:# blur:flags.1?true motion:flags.2?true background_color:flags.0?int second_background_color:flags.4?int third_background_color:flags.5?int fourth_background_color:flags.6?int intensity:flags.3?int rotation:flags.4?int emoticon:flags.7?string = WallPaperSettings;
```

[@term:emoticon] [Обои-заливки](#fill-wallpapers), в поле `settings` которых задан `emoticon` (эмодзи, которое служит идентификатором обоев), обозначают обои канала или супергруппы: их можно [установить »](#installing-wallpapers-in-a-specific-chat-or-channel) в каналах и супергруппах, набравших достаточно бустов, подробности [см. здесь »](#installing-wallpapers-in-a-specific-chat-or-channel).

Полный список обоев для каналов и супергрупп можно получить методом [account.getChatThemes](/method/account.getChatThemes/).

Начиная с более высокого уровня бустов каналы и супергруппы могут также устанавливать любые произвольные обои, а не только те, что возвращает [account.getChatThemes](/method/account.getChatThemes/); подробности [см. здесь »](#installing-wallpapers-in-a-specific-chat-or-channel).

### Типы заливки

Обои-заливки и обои-узоры строятся с помощью одного из трёх типов заливки:

-   [Сплошная заливка](#solid-fill)
-   [Градиентная заливка](#gradient-fill)
-   [Произвольная градиентная заливка](#freeform-gradient-fill)

#### Сплошная заливка

```
wallPaperSettings#372efcd0 flags:# blur:flags.1?true motion:flags.2?true background_color:flags.0?int second_background_color:flags.4?int third_background_color:flags.5?int fourth_background_color:flags.6?int intensity:flags.3?int rotation:flags.4?int emoticon:flags.7?string = WallPaperSettings;
```

Если из флагов `*_background_color` выставлен только `background_color`, заливка состоит из одного указанного цвета RGB-24.

#### Градиентная заливка

```
wallPaperSettings#372efcd0 flags:# blur:flags.1?true motion:flags.2?true background_color:flags.0?int second_background_color:flags.4?int third_background_color:flags.5?int fourth_background_color:flags.6?int intensity:flags.3?int rotation:flags.4?int emoticon:flags.7?string = WallPaperSettings;
```

Если из флагов `*_background_color` выставлены только `background_color` и `second_background_color`, заливка представляет собой градиент сверху вниз (от background к second\_background) из указанных цветов RGB-24.  
Если поле `rotation` задано, оно указывает угол поворота градиента по часовой стрелке в градусах, 0–359. Значение обязано быть кратно 45; если поле не задано, по умолчанию используется 0.

#### Произвольная градиентная заливка

```
wallPaperSettings#372efcd0 flags:# blur:flags.1?true motion:flags.2?true background_color:flags.0?int second_background_color:flags.4?int third_background_color:flags.5?int fourth_background_color:flags.6?int intensity:flags.3?int rotation:flags.4?int emoticon:flags.7?string = WallPaperSettings;
```

Если выставлены флаги `background_color`, `second_background_color`, `third_background_color` и, необязательно, `fourth_background_color`, заливка представляет собой произвольный градиент из указанных 3 или 4 цветов RGB-24.

### API обоев

#### Загрузка обоев

```
wallPaperSettings#372efcd0 flags:# blur:flags.1?true motion:flags.2?true background_color:flags.0?int second_background_color:flags.4?int third_background_color:flags.5?int fourth_background_color:flags.6?int intensity:flags.3?int rotation:flags.4?int emoticon:flags.7?string = WallPaperSettings;

wallPaper#a437c3ed id:long flags:# creator:flags.0?true default:flags.1?true pattern:flags.3?true dark:flags.4?true access_hash:long slug:string document:Document settings:flags.2?WallPaperSettings = WallPaper;

---functions---

account.uploadWallPaper#e39a8f03 flags:# for_chat:flags.0?true file:InputFile mime_type:string settings:WallPaperSettings = WallPaper;
```

Метод [account.uploadWallPaper](/method/account.uploadWallPaper/) служит для загрузки [обоев-изображений](#image-wallpapers) и [обоев-узоров](#pattern-wallpapers). Флаг `for_chat` обязан быть выставлен, если обои загружаются для последующего использования в [messages.setChatWallPaper](/method/messages.setChatWallPaper/).  
[Обои-заливки](#fill-wallpapers) загружать не требуется: с ними не связан ни один файл, и конструктор [wallPaper](/constructor/wallPaper/) можно сформировать прямо на стороне клиента, указав `id=0`.

[@term:deep link] Затем обоями можно поделиться через [глубокую ссылку на обои »](/api/links/#wallpaper-links) (`deep link` — ссылка, которая открывается непосредственно в приложении Telegram) и (или) [установить их так, как описано здесь (только обои-изображения и обои-узоры) »](#installing-wallpapers).

#### Установка обоев

```
inputWallPaper#e630b979 id:long access_hash:long = InputWallPaper;
inputWallPaperSlug#72091c80 slug:string = InputWallPaper;

wallPaper#a437c3ed id:long flags:# creator:flags.0?true default:flags.1?true pattern:flags.3?true dark:flags.4?true access_hash:long slug:string document:Document settings:flags.2?WallPaperSettings = WallPaper;

wallPaperSettings#372efcd0 flags:# blur:flags.1?true motion:flags.2?true background_color:flags.0?int second_background_color:flags.4?int third_background_color:flags.5?int fourth_background_color:flags.6?int intensity:flags.3?int rotation:flags.4?int emoticon:flags.7?string = WallPaperSettings;

account.wallPapersNotModified#1c199183 = account.WallPapers;
account.wallPapers#cdc3858c hash:long wallpapers:Vector<WallPaper> = account.WallPapers;

---functions---

account.getWallPaper#fc8ddbea wallpaper:InputWallPaper = WallPaper;
account.getMultiWallPapers#65ad71dc wallpapers:Vector<InputWallPaper> = Vector<WallPaper>;

account.saveWallPaper#6c5a5b37 wallpaper:InputWallPaper unsave:Bool settings:WallPaperSettings = Bool;
account.installWallPaper#feed5769 wallpaper:InputWallPaper settings:WallPaperSettings = Bool;
account.getWallPapers#07967d36 hash:long = account.WallPapers;
account.resetWallPapers#bb3b9804 = Bool;
```

После того как вы [загрузили свои обои](#uploading-wallpapers) или получили [глубокую ссылку на обои](/api/links/#wallpaper-links), их можно установить следующим образом.

_Обратите внимание: [обои-заливки](#fill-wallpapers) нельзя установить глобально через [account.installWallPaper](/method/account.installWallPaper/) или [account.saveWallPaper](/method/account.saveWallPaper/) — клиентам следует устанавливать их и вести их учёт только локально, не синхронизируя список обоев и не сообщая серверу об установке._

API хранит список обоев, которые пользователь может выбрать в качестве фона чата, включая несколько предустановленных.  
Чтобы получить этот список, используйте [account.getWallPapers](/method/account.getWallPapers/).  
Чтобы сохранить обои в список, используйте [account.saveWallPaper](/method/account.saveWallPaper/) с `unsave=false`.  
Чтобы удалить обои из списка (в том числе предустановленные), используйте [account.saveWallPaper](/method/account.saveWallPaper/) с `unsave=true`.  
Чтобы восстановить список по умолчанию, удалив все установленные обои и вернув ранее удалённые предустановленные, используйте [account.resetWallPapers](/method/account.resetWallPapers/).

Когда клиент устанавливает обои как фон чатов по умолчанию, вызовите [account.installWallPaper](/method/account.installWallPaper/), чтобы сообщить серверу об этой установке.  
Учтите, что вызов этого метода заодно автоматически сохранит обои, если их ещё нет в списке сохранённых.

Во всех случаях, когда требуется конструктор [InputWallPaper](/type/InputWallPaper/), передавайте:

-   [inputWallPaperSlug](/constructor/inputWallPaperSlug/) — при работе с [глубокими ссылками на обои](/api/links/#wallpaper-links).
-   [inputWallPaper](/constructor/inputWallPaper/) — во всех остальных случаях, используя поля с идентификатором и хешем доступа из полного конструктора [wallPaper](/constructor/wallPaper/).  
    Как уже говорилось, [обои-заливки](#fill-wallpapers) нельзя сохранить на сервере через [account.installWallPaper](/method/account.installWallPaper/) или [account.saveWallPaper](/method/account.saveWallPaper/): для них предусмотрен конструктор [inputWallPaperNoFile](/constructor/inputWallPaperNoFile/), но применять его допускается **только** при работе с [темами »](/api/themes/) либо при вызове [messages.setChatWallPaper](/method/messages.setChatWallPaper/), как описано ниже.

#### Установка обоев в конкретном чате или канале

```
messageActionSetChatWallPaper#5060a3f4 flags:# same:flags.0?true for_both:flags.1?true wallpaper:WallPaper = MessageAction;

updatePeerWallpaper#ae3f101d flags:# wallpaper_overridden:flags.1?true peer:Peer wallpaper:flags.0?WallPaper = Update;

---functions---

messages.setChatWallPaper#8ffacae1 flags:# for_both:flags.3?true revert:flags.4?true peer:InputPeer wallpaper:flags.0?InputWallPaper settings:flags.2?WallPaperSettings id:flags.1?int = Updates;
```

Обои можно установить и в конкретном личном чате — с помощью [messages.setChatWallPaper](/method/messages.setChatWallPaper/): при этом будет отправлено сервисное сообщение [messageActionSetChatWallPaper](/constructor/messageActionSetChatWallPaper/), которое показывает обои в интерфейсе вместе с предложением второму участнику применить те же обои у себя.

В поле `wallpaper` передавайте:

-   [inputWallPaperSlug](/constructor/inputWallPaperSlug/) — при работе с [глубокими ссылками на обои](/api/links/#wallpaper-links).
-   [inputWallPaperNoFile](/constructor/inputWallPaperNoFile/) — для [обоев-заливок](#fill-wallpapers).
-   [inputWallPaper](/constructor/inputWallPaper/) — во всех остальных случаях, используя поля с идентификатором и хешем доступа из полного конструктора [wallPaper](/constructor/wallPaper/).

Если второй участник решит применить те же обои в чате, следует вызвать [messages.setChatWallPaper](/method/messages.setChatWallPaper/), передав настройки `settings`, полученные в сервисном сообщении [messageActionSetChatWallPaper](/constructor/messageActionSetChatWallPaper/) (или другие настройки, если пользователь изменил их перед применением обоев), вместе с `id` этого сервисного сообщения [messageActionSetChatWallPaper](/constructor/messageActionSetChatWallPaper/), но **без** поля `wallpaper`: в этом случае действие породит сообщение [messageActionSetChatWallPaper](/constructor/messageActionSetChatWallPaper/) **с выставленным флагом `same`**, которое в интерфейсе следует показывать как обычное сервисное сообщение-подтверждение — без самих обоев и без предложения второму участнику применить их (ведь оба собеседника это уже сделали).

Однако при наличии подписки [Premium](/api/premium/) можно сменить обои второму участнику без явного подтверждения с его стороны: для этого при вызове [messages.setChatWallPaper](/method/messages.setChatWallPaper/) выставьте флаг `for_both`.  
Так обои изменятся у обеих сторон чата без запроса подтверждения; вдобавок у второго участника будет выставлен флаг [userFull](/constructor/userFull/).`wallpaper_overridden`, а само действие породит сообщение [messageActionSetChatWallPaper](/constructor/messageActionSetChatWallPaper/) **с выставленным флагом `for_both`**.  
Если второму участнику не понравятся выбранные для него обои, он может вернуть прежние обои только у себя, вызвав [messages.setChatWallPaper](/method/messages.setChatWallPaper/) и передав лишь флаг `revert` (и, разумеется, параметр `peer`).

Учтите, что для передачи [обоев-изображений](#image-wallpapers) или [обоев-узоров](#pattern-wallpapers) в [messages.setChatWallPaper](/method/messages.setChatWallPaper/) при [их загрузке методом account.uploadWallPaper](#uploading-wallpapers) обязан быть выставлен флаг `for_chat`.

Учтите также, что, в отличие от [account.installWallPaper](/method/account.installWallPaper/) и [account.saveWallPaper](/method/account.saveWallPaper/), метод [messages.setChatWallPaper](/method/messages.setChatWallPaper/) принимает и [обои-заливки](#fill-wallpapers).

Изменение обоев также порождает обновление [updatePeerWallpaper](/constructor/updatePeerWallpaper/).

[@term:boost level] Достигнув как минимум того [уровня бустов](/api/boost/) (`boost level` — уровень канала или группы, определяемый числом отданных за них бустов), который указан в [параметре конфигурации `channel_wallpaper_level_min`](/api/config/#channel-wallpaper-level-min)/[параметре конфигурации `group_wallpaper_level_min`](/api/config/#group-wallpaper-level-min), каналы и группы получают возможность установить одни из [обоев-заливок для каналов, возвращаемых account.getChatThemes (подробности см. здесь »)](#channel-and-supergroup-wallpapers).

Достигнув как минимум того уровня бустов, который указан в [параметре конфигурации `channel_custom_wallpaper_level_min`](/api/config/#channel-custom-wallpaper-level-min)/[параметре конфигурации `group_custom_wallpaper_level_min`](/api/config/#group-custom-wallpaper-level-min), каналы и супергруппы получают возможность установить любые произвольные [обои](/api/wallpapers/), а не только обои-заливки для каналов.

При установке обоев канала **не** выставляйте флаг `for_both`.
