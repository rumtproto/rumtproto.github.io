---
title: "Анимированные эмодзи"
original: "https://core.telegram.org/api/animated-emojis"
section: api
description: "Графические клиенты Telegram должны заменять эмодзи их анимированными версиями."
layout: layout.njk
---

# Анимированные эмодзи

Графическим клиентам Telegram следует заменять эмодзи соответствующими анимированными версиями.

### Анимированные эмодзи

```
inputStickerSetAnimatedEmoji#28703c8 = InputStickerSet;

messages.stickerSet#6e153f16 set:StickerSet packs:Vector<StickerPack> keywords:Vector<StickerKeyword> documents:Vector<Document> = messages.StickerSet;

---functions---

messages.getStickerSet#c8a0ec74 stickerset:InputStickerSet hash:int = messages.StickerSet;
```

При запуске клиентам следует загрузить набор стикеров с анимированными эмодзи, вызвав метод [messages.getStickerSet](/method/messages.getStickerSet/) и передав в поле `stickerset` конструктор [inputStickerSetAnimatedEmoji](/constructor/inputStickerSetAnimatedEmoji/).  
В возвращённом наборе будет по одному анимированному стикеру на каждый из поддерживаемых эмодзи.

Клиентам следует заменять сообщение, состоящее из единственного разрешённого эмодзи и ничего больше, соответствующим анимированным стикером.  
Кроме того, при получении сообщения, состоящего из единственного [пользовательского эмодзи](/api/custom-emoji/), вместо пузыря сообщения с одним маленьким пользовательским эмодзи внутри следует сразу показывать увеличенный пользовательский эмодзи — так же, как обычные стикеры.

Анимированный эмодзи следует проигрывать ровно один раз — при первой отправке или получении, а также по щелчку.  
Для [поддерживаемых эмодзи](#emoji-reactions) клиентам на обеих сторонах личной переписки с пользователями полагается показывать анимацию реакции, когда любой из двух собеседников щёлкает по анимированному эмодзи: [подробнее »](#emoji-reactions).

Для особых [эмодзи-кубиков](/api/dice/) вроде <img class="emoji" src="https://telegram.org/img/emoji/40/F09F8EB2.png" width="20" height="20" alt="🎲">, <img class="emoji" src="https://telegram.org/img/emoji/40/F09F8EAF.png" width="20" height="20" alt="🎯"> или <img class="emoji" src="https://telegram.org/img/emoji/40/F09F8F80.png" width="20" height="20" alt="🏀"> клиентам полагается вести себя иначе как при отправке, так и при получении таких эмодзи: [подробнее »](/api/dice/).

### Эмодзи со звуком

Некоторые анимированные эмодзи по щелчку должны проигрывать звук — какие именно, задаёт [конфигурация на стороне сервера](/api/config/#client-configuration).

Возвращаемый объект JSON содержит следующий словарь со списком идентификаторов файлов, которые нужно скачать:

```
    "emojies_sounds": {
        "\ud83c\udf83": {
            "id": "4956223179606458539",
            "access_hash": "-2107001400913062971",
            "file_reference_base64": "AF-4ApC7ukC0UWEPZN0TeSJURe7T"
        },
        "\u26b0": {
            "id": "4956223179606458540",
            "access_hash": "-1498869544183595185",
            "file_reference_base64": "AF-4ApCLKMGt96WCvLm58kbqZHd3"
        },
        "\ud83e\udddf\u200d\u2642": {
            "id": "4960929110848176331",
            "access_hash": "3986395821757915468",
            "file_reference_base64": "AF-4ApAedNln3IMEHH-SUQuH8L9g"
        },
    }
```

[@term:file_reference] Значение [поля со ссылкой на файл](/api/file-references/) (`file_reference` — короткий двоичный маркер, подтверждающий право на скачивание файла) перед [скачиванием файла](/api/files/) следует декодировать из base64.

### Реакции-эмодзи

```
inputStickerSetAnimatedEmojiAnimations#cde3739 = InputStickerSet;

messages.stickerSet#6e153f16 set:StickerSet packs:Vector<StickerPack> keywords:Vector<StickerKeyword> documents:Vector<Document> = messages.StickerSet;

stickerPack#12b299d4 emoticon:string documents:Vector<long> = StickerPack;

sendMessageEmojiInteraction#25972bcb emoticon:string msg_id:int interaction:DataJSON = SendMessageAction;
sendMessageEmojiInteractionSeen#b665902e emoticon:string = SendMessageAction;

updateUserTyping#2a17bf5c flags:# user_id:long top_msg_id:flags.0?int action:SendMessageAction = Update;

---functions---

messages.getStickerSet#c8a0ec74 stickerset:InputStickerSet hash:int = messages.StickerSet;

messages.setTyping#58943ee2 flags:# peer:InputPeer top_msg_id:flags.0?int action:SendMessageAction = Bool;
```

Не путать с [реакциями на сообщения »](/api/reactions/).

При запуске клиентам следует загрузить набор стикеров с анимированными реакциями-эмодзи, вызвав метод [messages.getStickerSet](/method/messages.getStickerSet/) и передав в поле `stickerset` конструктор [inputStickerSetAnimatedEmojiAnimations](/constructor/inputStickerSetAnimatedEmojiAnimations/).  
Возвращённый набор стикеров содержит анимированные реакции-эмодзи — _одну или несколько_ для каждого из поддерживаемых эмодзи.  
Если возвращён набор реакций для эмодзи <img class="emoji" src="https://telegram.org/img/emoji/40/E29DA4.png" width="20" height="20" alt="❤">, те же самые реакции следует назначить и эмодзи <img class="emoji" src="https://telegram.org/img/emoji/40/F09FA7A1.png" width="20" height="20" alt="🧡">, <img class="emoji" src="https://telegram.org/img/emoji/40/F09F929B.png" width="20" height="20" alt="💛">, <img class="emoji" src="https://telegram.org/img/emoji/40/F09F929A.png" width="20" height="20" alt="💚">, <img class="emoji" src="https://telegram.org/img/emoji/40/F09F9299.png" width="20" height="20" alt="💙">, <img class="emoji" src="https://telegram.org/img/emoji/40/F09F929C.png" width="20" height="20" alt="💜">, <img class="emoji" src="https://telegram.org/img/emoji/40/F09F96A4.png" width="20" height="20" alt="🖤">, <img class="emoji" src="https://telegram.org/img/emoji/40/F09FA48D.png" width="20" height="20" alt="🤍"> и <img class="emoji" src="https://telegram.org/img/emoji/40/F09FA48E.png" width="20" height="20" alt="🤎">.

Клиентам на обеих сторонах личной переписки с пользователями следует накладывать одну из подходящих анимаций реакции поверх анимированного стикера, когда любой из двух собеседников щёлкает по поддерживаемому анимированному эмодзи.  
То же самое следует делать и для отдельно стоящих [пользовательских эмодзи](/api/custom-emoji/) (одиночный [пользовательский эмодзи](/api/custom-emoji/) всегда отображается как самостоятельный стикер), если лежащий в его основе обычный эмодзи поддерживается (как описано выше).  
Анимацию реакции для каждого отдельного щелчка следует выбирать случайно из всех доступных реакций для данного эмодзи, а несколько щелчков — объединять и отправлять другому пользователю так:

Каждый щелчок клиенту следует складывать в локальный список.  
Когда с момента последнего щелчка прошла 1 секунда и новых щелчков не было, список нужно очистить, а накопленные щелчки отправить методом [messages.setTyping](/method/messages.setTyping/), передав конструктор [sendMessageEmojiInteraction](/constructor/sendMessageEmojiInteraction/) со следующими полями:

-   `emoticon` — эмодзи, на который мы реагируем
-   `msg_id` — идентификатор сообщения с анимированным эмодзи, по которому щёлкнули
-   `interaction` — объект JSON со сведениями о взаимодействии, содержащий следующие ключи:
    -   `v` — целое число, версия объекта, сейчас `1`
    -   `a` — массив объектов JSON, каждый из которых содержит следующие ключи:
        -   `t` — число с плавающей точкой: сколько секунд прошло с предыдущего щелчка в массиве; для первого щелчка используется значение `0.0`.
        -   `i` — целое число: индекс случайно выбранной анимации для этого щелчка, начиная с 1 (равен индексу конкретной анимации, связанной с эмодзи, в [stickerPack](/constructor/stickerPack/) плюс 1).

Через 1 секунду после того, как принимающий пользователь увидел последнюю анимацию реакции для конкретного эмодзи, клиент обязан отправить подтверждение методом [messages.setTyping](/method/messages.setTyping/), передав конструктор [sendMessageEmojiInteractionSeen](/constructor/sendMessageEmojiInteractionSeen/) с этим эмодзи.
