---
title: "Оформленный текст и сущности оформления"
original: "https://core.telegram.org/api/entities"
section: api
description: "Telegram поддерживает оформленный текст с помощью сущностей оформления (message entity — описание участка текста: его смещение, длина и вид оформления)."
layout: layout.njk
---

# Оформленный текст и сущности оформления

[@term:message entity] Telegram поддерживает оформленный текст с помощью [сущностей оформления](/type/MessageEntity/) (`message entity` — описание участка текста: его смещение, длина и вид оформления).

Клиенту, который хочет отправлять оформленные сообщения, достаточно встроить парсер [Markdown](https://en.wikipedia.org/wiki/Markdown)/[HTML](https://en.wikipedia.org/wiki/HTML) и построить массив сущностей оформления, перебирая разобранные теги.

Вложенные сущности поддерживаются.

### Длина сущности

При построении сущностей оформления нужно особенно внимательно относиться к длине строк: её считают в кодовых единицах [UTF-16](https://en.wikipedia.org/wiki/UTF-16), даже если само сообщение передаётся в кодировке UTF-8.

Примеры реализаций: [tdlib](https://github.com/tdlib/td/tree/master/td/telegram/MessageEntity.cpp), [MadelineProto](https://github.com/danog/telegram-entities/blob/master/src/Entities.php).

#### Кодовые точки Unicode и кодировки

[Кодовая точка](https://en.wikipedia.org/wiki/Code_point) [Unicode](https://en.wikipedia.org/wiki/Unicode) — это число в диапазоне от `0x0` до `0x10FFFF`, которое обычно записывают в нотации от `U+0000` до `U+10FFFF`.  
Unicode определяет пространство кодов из 1 112 064 назначаемых кодовых точек в диапазоне от `U+0000` до `U+10FFFF`.  
Каждая назначаемая кодовая точка после её закрепления консорциумом Unicode соответствует конкретному символу, эмодзи или управляющему знаку.

Пространство кодов Unicode, в свою очередь, разделено на 17 плоскостей:

-   Плоскость 1: от `U+0000` до `U+FFFF`: базовая многоязычная плоскость (BMP)
-   Плоскости 2–17: от `U+00000` до `U+10FFFF`: несколько дополнительных плоскостей, определённых [стандартом Unicode](https://en.wikipedia.org/wiki/Plane_\(Unicode\))

Поскольку хранить для каждой буквы 21-битное число было бы расточительно, консорциум Unicode определяет несколько кодировок, позволяющих уложить кодовую точку в _кодовую единицу_ меньшего размера:

#### UTF-8

[UTF-8 »](https://en.wikipedia.org/wiki/UTF-8) — кодировка Unicode, позволяющая хранить 21-битную кодовую точку Unicode в _кодовых единицах_ размером всего 8 бит.  
UTF-8 применяется в MTProto и Bot API при передаче и приёме полей типа [string](/type/string/).

#### UTF-16

[UTF-16 »](https://en.wikipedia.org/wiki/UTF-16) — кодировка Unicode, позволяющая хранить 21-битную кодовую точку Unicode в одной или двух 16-битных _кодовых единицах_.

UTF-16 применяется при вычислении длины и смещений сущностей в MTProto и Bot API: считается количество кодовых единиц UTF-16, а **не** кодовых точек.

#### Вычисление длины сущности

-   Кодовые точки из BMP (от `U+0000` до `U+FFFF`) считаются за 1, потому что кодируются одной кодовой единицей UTF-16
-   Кодовые точки из всех остальных плоскостей считаются за 2, потому что кодируются двумя кодовыми единицами UTF-16 (их также называют суррогатными парами)

Простой, но не самый эффективный способ вычислить длину сущности — преобразовать текст в UTF-16, а затем взять длину в байтах, делённую на 2 (то есть количество кодовых единиц UTF-16).

Однако кодовые точки за пределами BMP кодируются в UTF-8 32-битной кодовой единицей, которая начинается с `0b11110`, а значит, длину сущности можно вычислить эффективнее, не преобразуя сообщение в UTF-16:

-   Если байт начинает 32-битную кодовую единицу UTF-8 (все байты, начинающиеся с `0b11110`), увеличить счётчик на 2; иначе
-   Если байт начинает кодовую единицу UTF-8 (все байты, не начинающиеся с `0b10`), увеличить счётчик на 1.

Пример:

```
length := 0
for byte in text {
    if (byte & 0xc0) != 0x80 {
        length += (byte >= 0xf0 ? 2 : 1)
    }
}
```

**Примечание**: _длина_ сущности **не должна** включать длину завершающих переводов строки и пробельных символов — перед вычислением длины применяйте к сущностям `rtrim`; при этом следующее _смещение_ **обязано** учитывать длину предшествующих ему переводов строки и пробельных символов.

Примеры реализаций: [tdlib](https://github.com/tdlib/td/tree/master/td/telegram/MessageEntity.cpp), [MadelineProto](https://github.com/danog/telegram-entities/blob/master/src/Entities.php).

### Допустимые сущности

#### Задаваемые вручную сущности

Перечисленные ниже сущности пользователь задаёт вручную через параметры оформления.

-   [**messageEntityBold**](/constructor/messageEntityBold/) => `<b>bold</b>`, `<strong>bold</strong>`, `**bold**`

-   [_messageEntityItalic_](/constructor/messageEntityItalic/) => `<i>italic</i>`, `<em>italic</em>` `*italic*`

-   [`messageEntityCode` »](/constructor/messageEntityCode/) => `<code>code</code>`, `` `code` ``

-   [messageEntityStrike](/constructor/messageEntityStrike/) => `<s>strike</s>`, `<strike>strike</strike>`, `<del>strike</del>`, `~~strike~~`

-   [messageEntityUnderline](/constructor/messageEntityUnderline/) => `<u>underline</u>`

-   [messageEntityBlockquote](/constructor/messageEntityBlockquote/) =>

    > Цитата

-   [`messageEntityPre` »](/constructor/messageEntityPre/) => `<pre language="c++">code</pre>`,

    ```
      ```c++
      code
      ```
      
    ```

    Не может быть вложена в другие сущности.

-   [messageEntitySpoiler](/constructor/messageEntitySpoiler/) => используется, чтобы скрыть отдельные части сообщения за анимированным спойлером: скрытый текст раскрывается только по нажатию пользователя

-   [inputMessageEntityMentionName](/constructor/inputMessageEntityMentionName/)/[messageEntityMentionName](/constructor/messageEntityMentionName/) => [Упоминание пользователя по ID или имени пользователя](https://t.me/botfather)

-   [messageEntityCustomEmoji](/constructor/messageEntityCustomEmoji/) => используется для [пользовательских эмодзи »](/api/custom-emoji/)

-   [messageEntityFormattedDate](/constructor/messageEntityFormattedDate/) => используется, чтобы указать на конкретный момент времени, отображается так, как описано [здесь »](/constructor/messageEntityFormattedDate/); не может быть вложена в другие сущности.

##### Сущности с датой

```
messageEntityFormattedDate#904ac7c7 flags:# relative:flags.0?true short_time:flags.1?true long_time:flags.2?true short_date:flags.3?true long_date:flags.4?true day_of_week:flags.5?true offset:int length:int date:int = MessageEntity;
```

Сущность [messageEntityFormattedDate](/constructor/messageEntityFormattedDate/) обозначает конкретный момент времени.

Поле `date` обязано содержать метку времени UNIX в диапазоне от `0` до текущей даты плюс 1098 дней (`time()+1098*86400`).

По нажатию на такую сущность должно открываться контекстное меню с тремя пунктами:

-   Скопировать дату в буфер обмена (в формате `long_date` + `long_time`, независимо от значений флагов)
-   Добавить дату в системный календарь
-   Создать напоминание, отложив сообщение в «Избранное»: вызвать [messages.forwardMessages](/method/messages.forwardMessages/) с ID текущего сообщения, полем `schedule_date`, равным дате из этой сущности, и `to_peer`\=[inputPeerSelf](/constructor/inputPeerSelf/)

Если ни один из необязательных флагов не установлен, выделенный текст следует отображать как ссылку, не изменяя сам текст.

В противном случае его следует отображать как ссылку, заменяя текст датой в часовом поясе текущего пользователя и в формате, заданном переданными флагами:

-   `relative`: если установлен, отображается относительная дата, то есть `In 1 second/minute/hour/day/week/month/year` или `1 second/minute/hour/day/week/month/year ago`.  
    Округлять вниз, и только до ближайшей единицы измерения, — например, в зависимости от значения, переданного в `date`:

    -   `time()+10` — `in 10 seconds`
    -   `time()+60+10` — `in 1 minute`
    -   `time()+3600+60+10` — `in 1 hour`
    -   `time()+86400+60+10` — `in 1 day`
    -   `time()+31*86400+86400+60+10` — `in 1 month`
    -   `time()+365*86400+31*86400+86400+60+10` — `in 1 year`

    То же самое и для дат в прошлом:

    -   `time()-10` — `10 seconds ago`
    -   `time()-60-10` — `1 minute ago`
    -   `time()-3600-60-10` — `1 hour ago`
    -   `time()-86400-60-10` — `1 day ago`
    -   `time()-31*86400-86400-60-10` — `1 month ago`
    -   `time()-365*86400-31*86400-86400-60-10` — `1 year ago`

    Пока сообщение видно пользователю, клиент обязан обновлять дату в реальном времени, сверяясь с текущей датой.

-   `short_time`: отображает время в кратком формате — часы и минуты, согласно языковым настройкам пользователя

-   `long_time`: отображает время в полном формате — часы, минуты, секунды и, возможно, часовой пояс, согласно языковым настройкам пользователя

-   `short_date`: отображает время в кратком формате — месяц, число (и год, если он отличается от текущего), всё согласно языковым настройкам пользователя.

-   `long_date`: отображает время в полном формате — всегда месяц, число и год, всё согласно языковым настройкам пользователя.

-   `day_of_week`: отображает день недели согласно языковым настройкам пользователя.

Все флаги необязательны, но действуют следующие ограничения:

-   `relative` нельзя сочетать ни с каким другим флагом
-   `short_time` и `long_time` нельзя сочетать друг с другом
-   `short_date` и `long_date` нельзя сочетать друг с другом

Если флаги сочетаются друг с другом, в тексте они отображаются в таком порядке:

-   `day_of_week`
-   `short_time`/`long_time`
-   `short_date`/`long_date`

Сущность с датой может покрывать не более 31 кодовой единицы UTF-16, если установлен хотя бы один из флагов форматирования даты, и не более 127 кодовых единиц UTF-16, если не установлен ни один.

#### Автоматически создаваемые сущности

Перечисленные ниже сущности сервер создаёт автоматически для URL, хештегов, адресов электронной почты, команд ботов и тому подобного, тем самым упрощая клиентам логику отрисовки сообщения (им не приходится самостоятельно реализовывать автоматическое превращение URL и других типовых кликабельных участков в ссылки).

Эти сущности окрашивают определённые участки сообщения в синий цвет и делают их кликабельными, так что нажатие запускает то или иное действие:

-   [messageEntityMention](/constructor/messageEntityMention/) => Используется для упоминания пользователя, канала или супергруппы по @username; создаётся автоматически на стороне сервера для @username в сообщениях: при нажатии следует открыть профиль упомянутого адресата.

-   [messageEntityHashtag](/constructor/messageEntityHashtag/) => Для `#хештегов`: при нажатии клиенту следует [найти все сообщения с указанным хештегом в текущем чате »](/api/search/#hashtag-search)
-   [messageEntityCashtag](/constructor/messageEntityCashtag/) => Для `$кештегов`: при нажатии клиенту следует [найти все сообщения с указанным кештегом в текущем чате »](/api/search/#hashtag-search)
-   [messageEntityBotCommand](/constructor/messageEntityBotCommand/) => Для `/команд` бота: при нажатии в группе или личном чате клиенту следует отправить эту же команду в текущий чат
-   [messageEntityUrl](/constructor/messageEntityUrl/) => Для URL в виде обычного текста и [глубоких ссылок](/api/links/): при нажатии клиенту следует открыть ссылку во встроенном браузере.
-   [messageEntityEmail](/constructor/messageEntityEmail/) => Для адресов электронной почты: при нажатии клиенту следует вызвать стандартное системное действие для отправки почты, открыв предпочитаемый почтовый клиент.
-   [messageEntityBankCard](/constructor/messageEntityBankCard/) => Для номеров банковских карт: при долгом нажатии следует вызвать [payments.getBankCardData](/method/payments.getBankCardData/), передав номер карты в `number`

Учтите, что при отправке сообщений в [секретные чаты со сквозным шифрованием »](/api/end-to-end/) клиентам всё равно приходится добавлять перечисленные выше сущности вручную: сервер не может ни просматривать, ни изменять такие сообщения.

#### Сущности сравнения (diff)

```
messageEntityDiffInsert#71777116 offset:int length:int = MessageEntity;
messageEntityDiffDelete#0652c1c5 offset:int length:int = MessageEntity;
messageEntityDiffReplace#c6c1e5a7 offset:int length:int old_text:string = MessageEntity;

textWithEntities#751f3146 text:string entities:Vector<MessageEntity> = TextWithEntities;
```

Сейчас сущности сравнения возвращает только [AI composer »](/api/ai/); в обычных сообщениях их использовать нельзя.

Сущности сравнения упрощают логику на стороне клиента: сервер заранее вычисляет различия между двумя текстами.

Эти сущности отрисовываются только в контексте содержащего их [textWithEntities](/constructor/textWithEntities/): никаких данных, кроме `text` и `entities`, не требуется (то есть вычислять различия вручную не нужно).

-   [messageEntityDiffInsert](/constructor/messageEntityDiffInsert/) — обозначает добавление: отрисуйте его, просто подчеркнув участок, заданный полями `offset` и `limit`, и окрасив его в зелёный цвет.
-   [messageEntityDiffInsert](/constructor/messageEntityDiffInsert/) — обозначает удаление: отрисуйте его, просто подчеркнув участок, заданный полями `offset` и `limit`, и окрасив его в красный цвет.
-   [messageEntityDiffReplace](/constructor/messageEntityDiffReplace/) — обозначает замену; отрисуйте её так:
    -   вставьте [messageEntityDiffReplace](/constructor/messageEntityDiffReplace/).`old_text` в текст по смещению `offset`, подчеркнув вставленное и окрасив его в красный цвет: обратите внимание, что эта вставка не влияет на смещения следующих за ней сущностей.
    -   подчеркните участок, заданный полями `offset` и `limit`, и окрасьте его в зелёный цвет.

[@note] В этом списке оригинал содержит две неточности, сохранённые в переводе. Во-первых, второй пункт помечен конструктором `messageEntityDiffInsert`, хотя по смыслу описывает `messageEntityDiffDelete`. Во-вторых, участок задают поля `offset` и `length` — поля `limit` в схеме нет.

Например, следующее сравнение:

```
{
    "_": "textWithEntities",
    "text": "Hi,\n\nCould you please please proofread this message and correct any mistakes?\n\nThanks thanks.",
    "entities": [
        {
            "_": "messageEntityDiffReplace",
            "offset": 5,
            "length": 1,
            "old_text": "c"
        },
        {
            "_": "messageEntityDiffDelete",
            "offset": 22,
            "length": 7
        },
        {
            "_": "messageEntityDiffInsert",
            "offset": 42,
            "length": 1
        },
        {
            "_": "messageEntityDiffReplace",
            "offset": 66,
            "length": 1,
            "old_text": "uuu"
        },
        {
            "_": "messageEntityDiffDelete",
            "offset": 85,
            "length": 7
        }
    ]
}
```

отрисовывается так:

[<img src="https://core.telegram.org/file/400780400224/3/mT5D09bwVMk.26923.png/17ab4a219f971e78b0" title="Пример отрисовки сущностей сравнения" class="dev_page_image">](https://core.telegram.org/file/400780400224/3/mT5D09bwVMk.26923.png/17ab4a219f971e78b0)

Обратите внимание, что смещение последнего [messageEntityDiffDelete](/constructor/messageEntityDiffDelete/) не изменяется из-за строки `uuu`, вставленной предшествующим [messageEntityDiffReplace](/constructor/messageEntityDiffReplace/).
