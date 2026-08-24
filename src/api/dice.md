---
title: "Анимированные кости"
original: "https://core.telegram.org/api/dice"
section: api
description: "Telegram поддерживает отправку эмодзи анимированных костей. Это реализовано через конструкторы костей:"
layout: layout.njk
---

# Анимированные кости

Telegram поддерживает отправку эмодзи [анимированных костей](https://telegram.org/blog/folders#and-one-more-thing).  
Это реализовано через конструкторы костей:

```
inputMediaDice#e66fbf7b emoticon:string = InputMedia;
messageMediaDice#08cbec07 flags:# value:int emoticon:string game_outcome:flags.0?messages.EmojiGameOutcome = MessageMedia;

inputStickerSetDice#e67f520e emoticon:string = InputStickerSet;

messages.stickerSet#6e153f16 set:StickerSet packs:Vector<StickerPack> keywords:Vector<StickerKeyword> documents:Vector<Document> = messages.StickerSet;

---functions---

messages.sendMedia#0330e77f flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo media:InputMedia message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;

messages.getStickerSet#c8a0ec74 stickerset:InputStickerSet hash:int = messages.StickerSet;

help.getAppConfig#61e3f854 hash:int = help.AppConfig;
```

При запуске клиенту следует получить [конфигурацию приложения с помощью help.getAppConfig](/api/config/#client-configuration).  
Затем для каждого эмодзи кости, перечисленного в [поле `emojies_send_dice`](/api/config/#emojies-send-dice), клиенту следует загрузить набор стикеров для этого эмодзи, вызвав метод [messages.getStickerSet](/method/messages.getStickerSet/) и передав в поле `stickerset` должным образом заполненный конструктор [inputStickerSetDice](/constructor/inputStickerSetDice/).  
В полученном наборе лежат анимированные стикеры — по одному на каждый исход броска, — а перед ними, первым элементом, идёт зацикленный стикер: его показывают пользователю как предварительный просмотр, пока кость ещё не отправлена.

Если пользователь отправляет одиночный эмодзи из числа перечисленных в `emojies_send_dice`, кость следует отправлять методом [messages.sendMedia](/method/messages.sendMedia/), передав этот эмодзи в поле `emoticon`.

[@term:value] Входящие стикеры костей приходят в конструкторе [messageMediaDice](/constructor/messageMediaDice/) вместе со случайным значением `value` (исход броска, который разыгрывает сервер, а не клиент) в диапазоне от 1 до максимально допустимого для данного типа костей.  
Клиенту следует показывать анимированный стикер кости, соответствующий указанному значению: поскольку значения костей начинаются с 1, а первый анимированный стикер в наборе — это предварительный просмотр, поле `value` можно использовать как непосредственный индекс в массиве стикеров `documents` из этого набора.

[Параметр конфигурации `emojies_send_dice_success`](/api/config/#emojies-send-dice-success) содержит дополнительные сведения об эмодзи костей, отличных от обычного <img class="emoji" src="https://telegram.org/img/emoji/40/F09F8EB2.png" width="20" height="20" alt="🎲">:

```
    "emojies_send_dice_success": {
        "\ud83c\udfaf": {
            "value": 6,
            "frame_start": 62
        },
        "\ud83c\udfc0": {
            "value": 5,
            "frame_start": 110
        }
    }
```

[@term:frame_start] Для каждого эмодзи кости задаётся максимальное «выигрышное» значение (`value`), а также номер кадра `frame_start`, начиная с которого поверх анимации показывают салют <img class="emoji" src="https://telegram.org/img/emoji/40/F09F8E86.png" width="20" height="20" alt="🎆">.  
Обратите внимание: анимированные стикеры костей должны прокручиваться ровно один раз — сразу после того, как кость отправлена или получена **впервые**; по нажатию на стикер кости следует открывать всплывающее окно с предложением отправить новую кость того же типа.

### Игровой автомат

Стикеры костей «игровой автомат» <img class="emoji" src="https://telegram.org/img/emoji/40/F09F8EB0.png" width="20" height="20" alt="🎰"> реализованы немного иначе: поле `value` служит не прямым индексом в массиве стикеров, а обрабатывается так, как описано ниже.

Значение `value` складывается из трёх двухбитных полей; каждое из них задаёт — увеличенным на единицу — номер анимированного стикера, который нужно показать в соответствующем барабане.

Массив `stickers` устроен следующим образом:

-   0 => фон игрового автомата
-   1 => выигрышный фон игрового автомата, показывается после выигрышного вращения
-   2 => рамка и рычаг игрового автомата, проигрывается один раз в начале
-   3 => левый барабан, выигрышная семёрка
-   4..7 => левый барабан, невыигрышные варианты
-   8 => левый барабан, анимация вращения
-   9 => центральный барабан, выигрышная семёрка
-   10..13 => центральный барабан, невыигрышные варианты
-   14 => центральный барабан, анимация вращения
-   15 => правый барабан, выигрышная семёрка
-   16..19 => правый барабан, невыигрышные варианты
-   20 => правый барабан, анимация вращения

Как проигрывать анимацию (все задействованные стикеры накладываются прямо друг на друга, особое размещение не требуется):

-   Остановить фон на единственном кадре (`0`)
-   Один раз проиграть анимацию рычага (`2`)
-   Один раз проиграть три анимации вращения барабанов (`8`, `14`, `20`)
-   Один раз проиграть три анимации барабанов, выбрав их так:
    -   Если это выигрыш, `value == 64`:
        -   Левый барабан: выбрать `3`
        -   Центральный барабан: выбрать `9`
        -   Правый барабан: выбрать `15`
    -   Иначе, полагая `map := [1, 2, 3, 0]`:
        -   Левый барабан: выбрать `4 + map[(value-1) & 3]`
        -   Центральный барабан: выбрать `10 + map[((value-1) >> 2) & 3]`
        -   Правый барабан: выбрать `16 + map[((value-1) >> 4) & 3]`
-   Если это выигрыш, `value=64`, заменить фон (`0`) на `1`.

[@note] Перестановка `map` разводит коды двухбитного поля по невыигрышным стикерам: кодам `0`, `1`, `2`, `3` она сопоставляет смещения `1`, `2`, `3`, `0`. Для левого барабана это даёт индексы `5`, `6`, `7` и `4`, то есть все четыре кода укладываются в диапазон `4..7`; для центрального и правого барабанов получается то же самое со сдвигом базы. Комбинация трёх семёрок через эту формулу не выражается и задаётся отдельным случаем `value == 64`.

Пример реализации: [tdesktop](https://github.com/telegramdesktop/tdesktop/blob/dev/Telegram/SourceFiles/history/view/media/history_view_slot_machine.cpp).
