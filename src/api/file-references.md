---
title: "Ссылки на файлы"
original: "https://core.telegram.org/api/file-references"
section: api
description: "Ссылки на файлы — это строки байтов, которые встречаются в полях file_reference объектов document и photo."
layout: layout.njk
---

# Ссылки на файлы

[@term:file_reference] Ссылки на файлы (`file_reference` — короткая метка с ограниченным сроком жизни, подтверждающая право клиента обратиться к медиафайлу) — это строки байтов, которые встречаются в полях `file_reference` объектов [document](/constructor/document/) и [photo](/constructor/photo/).

Клиент обязан кешировать их вместе с **источником**, в котором был найден объект документа или фотографии, чтобы иметь возможность получить их заново, когда ссылка на файл истечёт.

Примеры реализации базы данных ссылок: [MadelineProto](https://github.com/danog/MadelineProto/blob/v8/src/MTProtoTools/ReferenceDatabase.php), [android](https://github.com/DrKLO/Telegram/blob/master/TMessagesProj/src/main/java/org/telegram/messenger/FileRefController.java), [telegram desktop](https://github.com/telegramdesktop/tdesktop/blob/ea438aeb8509b23e7789e9d198cf03f537d90fc5/Telegram/SourceFiles/data/data_file_origin.cpp), [tdlib](https://github.com/tdlib/td/blob/92d814640d1871320e125b68b0181e34a48f86d8/td/telegram/FileReferenceManager.cpp).

### Автоматическая реализация

Реализацию и поддержку базы данных ссылок на файлы можно полностью автоматизировать, воспользовавшись **файлом карты базы данных ссылок на файлы**.

Для начала создайте следующие две таблицы:

-   [Таблица ссылок на файлы »](#file-reference-table): `HashMap<FileId, bytes>`
-   [Таблица источников файлов »](#file-source-table): `HashMap<FileId, Vector<FileSource>>`

Затем скачайте и реализуйте [файл карты »](#map-file).

#### Таблица ссылок на файлы

Таблицу ссылок на файлы можно представить следующим типом:

```
HashMap<FileId, bytes>
```

Эта таблица сопоставляет [идентификатор файла »](#file-ids) (который однозначно определяет фотографию или документ) со [ссылкой на файл »](#file-references).

Таблица заполняется [входящими обходчиками »](#incoming-traversers), содержащимися в [файле карты »](#map-file).

Ссылку на файл можно хранить и иначе — например, в базах данных документов и фотографий рядом с остальными метаданными, или любым другим способом, который однозначно связывает `FileId` со ссылкой на файл.

#### Таблица источников файлов

```
HashMap<FileId, Vector<FileSource>>
```

Она сопоставляет [идентификатор файла »](#file-ids) с одним или несколькими [источниками файлов »](#file-sources).

Таблица заполняется [входящими обходчиками »](#incoming-traversers), содержащимися в [файле карты »](#map-file).

Чтобы уменьшить размер таблицы источников файлов, допускается хранить не более одного источника каждого типа на идентификатор файла (то есть максимум N источников на идентификатор файла при N типах источников) или даже всего один источник на идентификатор файла (максимум 1 источник на идентификатор файла).

### Файл карты

[Скачать актуальную карту ссылок на файлы в формате JSON для текущего слоя »](https://raw.githubusercontent.com/danog/MadelineProto/refs/heads/v8/src/file_ref_map.json) — предикат конструктора сериализуется под ключом `_`, а поля `bytes` сериализуются как `{"_": "bytes", "bytes": "<base64 encoded value>"}`

[Скачать актуальную сериализованную TL-версию карты ссылок на файлы для текущего слоя »](https://raw.githubusercontent.com/danog/MadelineProto/refs/heads/v8/src/file_ref_map.dat)

Полная TL-схема файла карты приведена [здесь »](/api/file-references/map-schema/).

Часть схемы:

```
fileReferenceMap#72a99250 layer:int db_schema:string db_schema_json:string traversers_incoming:Vector<TraverserIncoming> traversers_outgoing:Vector<TraverserOutgoing> refresh_actions:Vector<RefreshAction> skipped_incoming_sources:Vector<SkippedSource> = FileReferenceMap;

predicate#de3bc05a predicate:string is_constructor:Bool = Predicate;
skippedSource#2b543f6f predicate:Predicate why:string = SkippedSource;
```

Файл карты состоит из единственного конструктора `fileReferenceMap`, который содержит:

-   В поле `layer` — версию слоя, для которой был сгенерирован файл карты.

-   Поля `db_schema` и `db_schema_json` с TL-схемой **базы данных** для `FileId` и `FileSource`.  
    `db_schema` — это текстовая TL-схема, а `db_schema_json` — та же самая TL-схема в формате JSON, [который также используется для схемы API »](/schema/).

    Эта схема БД применяется для:

    -   [Идентификаторов файлов »](#file-ids), которые в базе данных ссылок на файлы служат ключами в [таблице ссылок на файлы »](#file-reference-table) и в [таблице источников файлов »](#file-source-table)
    -   [Источников файлов »](#file-sources), которые в базе данных ссылок на файлы служат значениями в [таблице источников файлов »](#file-source-table)

    Эти TL-схемы можно взять за основу схемы СУБД для таблиц ссылок на файлы и источников файлов либо использовать напрямую, сериализуя идентификаторы файлов и векторы источников файлов, если применяется простая KV-база данных вида «строка => строка».

    Актуальная TL-схема базы данных ссылок на файлы приведена [здесь »](/api/file-references/db-schema/).

-   `traversers_incoming` содержит [входящие обходчики »](#incoming-traversers), с помощью которых [ссылки на файлы »](#file-references) извлекаются из входящих медиаконструкторов и сохраняются.

-   `traversers_outgoing` содержит [исходящие обходчики »](#outgoing-traversers), с помощью которых истёкшие [ссылки на файлы »](#file-references) подменяются в исходящих вызовах методов, передающих медиа.

-   `refresh_actions` содержит [действия обновления »](#refresh-actions) — инструкции, по которым истёкшие ссылки на файлы обновляются в соответствии с [источниками файлов »](#file-sources), сохранёнными в [таблице источников файлов](#file-source-table).

-   `skipped_incoming_sources` содержит пропущенные источники.  
    Эти конструкторы указывают, что источник следует полностью игнорировать (в том числе при кодогенерации): источники `skippedSource` используются внутренне, чтобы при проверке убедиться, что все пути получения ссылок на файлы так или иначе охвачены, включая пути для эфемерных медиа вроде инлайн-результатов или для медиа без какого-либо связанного источника (например, у медиа, загруженного через [messages.uploadMedia](/method/messages.uploadMedia/), но ещё никуда не отправленного, очевидно, нет связанного источника).

    -   `skippedSource.predicate` — указывает игнорируемый конструктор или метод. В `predicate.predicate` содержится имя, а `predicate.is_constructor` определяет, указывает ли оно на конструктор или на метод.
    -   `skippedSource.why` — понятная человеку причина, по которой этот источник следует игнорировать.

    Каждому пропущенному предикату соответствует ровно одна причина.

Файл карты автоматически генерируется и проверяется [инструментом генерации ссылок на файлы »](/api/file-reference-generator/); этот инструмент можно вручную запустить на более новых или экспериментальных слоях, чтобы сгенерировать **файл карты базы данных ссылок на файлы** для заданной схемы API: подробнее [здесь »](/api/file-reference-generator/).

### Идентификаторы файлов

[@term:file ID] **Идентификатор файла** (`file ID`) в контексте базы данных ссылок на файлы — это объект, который при сериализации в строку просто и однозначно определяет медиафайл.

Сейчас доступны следующие объекты идентификаторов файлов (взяты из схемы БД внутри [файла карты](#map-file)):

```
fileIdPhoto#47a0bd49 id:long = FileId;
fileIdDocument#461b1d89 id:long = FileId;
```

Эту TL-схему можно взять за основу схемы СУБД для таблиц ссылок на файлы и источников файлов либо использовать напрямую, сериализуя идентификаторы файлов и векторы источников файлов, если применяется простая KV-база данных вида «строка => строка».

[Исходящие обходчики »](#outgoing-traversers) и [входящие обходчики »](#incoming-traversers) описывают, как построить объект идентификатора файла по любому медиаобъекту.

### Ссылки на файлы

**Ссылка на файл** — это строка байтов, которая встречается в полях `file_reference` у

-   _Входящих_ медиаконструкторов, таких как объекты [document](/constructor/document/) и [photo](/constructor/photo/).
-   _Исходящих_ медиаконструкторов вроде [inputDocument](/constructor/inputDocument/), [inputPhoto](/constructor/inputPhoto/) и т. п., где клиент обязан заполнить это поле, чтобы скачать или переслать любое медиа.

Ссылка на файл может **истечь**, и тогда её нельзя использовать в исходящих конструкторах: её необходимо обновить, повторно запросив сообщение, [историю](/api/stories/) и т. д., где медиа встречалось в последний раз, — как описано ниже.

### Источники файлов

[@term:file source] **Источник файла** (`file source`) содержит сведения, с помощью которых клиент может заново получить медиа (а вместе с ним и новую ссылку на файл), выполнив определённое **действие**.

Каждому типу источника соответствует своё [действие обновления »](#refresh-actions).

[Входящие обходчики »](#incoming-traversers) и [логика извлечения источников](#source-extraction) применяются совместно, чтобы заполнить [таблицу источников файлов »](#file-source-table), которая сопоставляет **идентификатор файла** с одним или несколькими **источниками файлов**.

[Файл карты »](#map-file) содержит все источники, необходимые для реализации базы данных ссылок на файлы, включая некоторые пропущенные источники, которые не обрабатываются ни одним извлекателем.

Полный список допустимых источников, содержащихся в текущем файле карты:

```
fileSourceMessage#b19f4c78 flags:# quick_reply_shortcut_id:flags.0?int peer:long id:int = FileSource;
fileSourceStarsTransaction#c1bac8c7 flags:# peer:long id:string refund:flags.0?true ton:flags.1?true = FileSource;
fileSourceScheduledMessage#9dc1f5f7 peer:long id:int = FileSource;
fileSourceStory#c820e3eb id:int peer:long = FileSource;
fileSourceWebPage#9e5b749c url:string = FileSource;
fileSourceBotApp#01cf8b7a id:long access_hash:long = FileSource;
fileSourceUserFull#70fdb7b0 id:long = FileSource;
fileSourceAdminLog#4797f959 channel:long max_id:long = FileSource;
fileSourceStoryAlbum#5e01f223 peer:long = FileSource;
fileSourceBotPreviewMedia#0aa91441 bot:long = FileSource;
fileSourceBotPreviewInfo#f9d2d6fc bot:long lang_code:string = FileSource;
fileSourcePaidMedia#b18d9042 id:int peer:long = FileSource;
fileSourceSavedMusic#dd1a7664 user_id:long id:long access_hash:long = FileSource;
fileSourceChatFull#9de75fde chat_id:long = FileSource;
fileSourceChannelFull#6fe19339 channel:long = FileSource;
fileSourcePremiumPromo#c907a44f = FileSource;
fileSourceAttachMenuBot#c3002694 bot:long = FileSource;
fileSourceTheme#92d05e0c id:long access_hash:long = FileSource;
fileSourceWallPaper#50dbf2f7 id:long access_hash:long = FileSource;
fileSourceStickerSet#34c73709 stickerset:InputStickerSet = FileSource;
fileSourceSavedGifs#13e78e07 = FileSource;
fileSourceSavedRingtones#2b25ef1b = FileSource;
fileSourceAvailableEffects#eb8578f0 = FileSource;
fileSourceAvailableReactions#0e432388 = FileSource;
fileSourceUserProfilePhoto#e39ee274 user_id:long max_id:long = FileSource;
fileSourceDocumentByHash#0f151e0f sha256:bytes size:long mime_type:string = FileSource;
```

Действие обновления, соответствующее каждому типу источника файла, приведено [здесь »](#refresh-actions).

### Входящие обходчики

Полный список входящих обходчиков, содержащихся в текущем файле карты, приведён [здесь »](/api/file-references/incoming-traversers/).

Схема:

```
traverseMethodResult#fda9f236 name:string push_sources:Vector<Source> is_needed_parent:Bool = TraverserIncoming;
traverseIncomingConstructor#6e4d00b6 type:string predicate:string params:Vector<TraverseParam> push_sources:Vector<Source> is_needed_parent:Bool = TraverserIncoming;
traverseCommitSourceLocation#94cc59c5 type:string predicate:string push_sources:Vector<Source> stored_constructor:string = TraverserIncoming;

traverseParam#62161b67 flags:# name:string is_flag:flags.0?true is_vector:flags.1?true type:string = TraverseParam;

predicate#de3bc05a predicate:string is_constructor:Bool = Predicate;
source#4ec4751a flags:# predicate:Predicate stored_constructor:string stored_params:Vector<FieldExtractor> skipped_flags:Vector<string> needs_parent:flags.3?Predicate needs_not_parents:Vector<Predicate> = Source;
```

Входящие обходчики обходят конструкторы, **полученные** от API, и используют собранные сведения, чтобы:

-   Извлекать из входящих медиаобъектов, **полученных** от API, пары [идентификатор файла »](#file-ids) => [источник файла »](#source-extraction) и сохранять их в [таблицу источников файлов »](#file-source-table).
-   Извлекать из входящих медиаобъектов, **полученных** от API, пары [идентификатор файла »](#file-ids) => [ссылка на файл »](#file-references) и сохранять их в [таблицу ссылок на файлы »](#file-reference-table).

Существует три типа обходчиков.

[@term:push_sources] У всех трёх типов обходчиков есть необязательное поле `push_sources` — список [источников](#source-extraction), помещаемых в стек источников при срабатывании обходчика: эти источники будут использованы для сохранения источников файлов в [таблицу источников файлов »](#file-source-table), когда обход дойдёт до `traverseCommitSourceLocation`.

Обходчики допускают только такие точки входа:

-   Результаты всех методов, охваченных обходчиком `traverseMethodResult`.

-   Конструкторы [Update](/type/Update/), охваченные обходчиком `traverseIncomingConstructor`.

    **Примечание**: все конструкторы [Updates](/type/Updates/) обязаны быть преобразованы в вектор конструкторов [Update](/type/Update/), **включая краткие варианты** вроде [updateShortMessage](/constructor/updateShortMessage/), [updateShortSentMessage](/constructor/updateShortSentMessage/), [updateShortChatMessage](/constructor/updateShortChatMessage/), которые клиент обязан заранее преобразовать в конструкторы [Update](/type/Update/), пользуясь сведениями, извлечёнными из вызова метода (в файл карты они для простоты не включены).

    Файл карты не содержит обходчиков для конструкторов [Updates](/type/Updates/), возвращаемых методами, так как их должна обрабатывать система обновлений: конструкторы [Update](/type/Update/) следует обходить только после того, как они будут корректно извлечены, освобождены от дубликатов и упорядочены [системой обновлений](/api/updates/); обход можно запускать прямо из системы обновлений.

#### Пример реализации

Используйте следующие структуры времени выполнения:

-   `HashMap<predicate, Vector<object>> parentContext` — для проверок `is_needed_parent`, `needs_parent` и `needs_not_parents`.
-   `Vector<FileSource> sourceStack` — для стека источников.

`parentContext` определяет допустимость источника при [извлечении источников »](#source-extraction) по полям `needs_parent` и `needs_not_parents`; `sourceStack` поставляет значения, которые сохраняются при срабатывании `traverseCommitSourceLocation`.

Порядок выполнения во время работы:

1.  Начните с допустимой точки входа (`traverseMethodResult` или [Update](/type/Update/)).
2.  Рекурсивно применяйте обходчики следующим образом:  
    2.1. Сформируйте и поместите в `sourceStack` корректные источники из `push_sources`.  
    Источник считается корректным и может быть помещён в стек, если [извлечение источника »](#source-extraction) удаётся выполнить согласно `stored_params` (все обязательные поля-флаги установлены и все пути извлекаются без ошибок), если в `parentContext` есть запись для `source.needs_parent` (когда это поле установлено) и если в `parentContext` нет записи ни для одного предиката, перечисленного в `source.needs_not_parents`.  
    2.2. Если поле `is_needed_parent` установлено, поместите текущий конструктор или метод в `parentContext`, используя его предикат в качестве ключа.  
    2.3. Спуститесь рекурсивно в дочерние элементы, заданные полем `params`, либо в результат метода — для `traverseMethodResult`.  
    2.4. Если поле `is_needed_parent` установлено, извлеките значение, помещённое на шаге 2.2.  
    2.5. Извлеките только те источники, которые были помещены на шаге 2.1 (все остальные источники оставьте без изменений).
3.  Когда `traverseCommitSourceLocation` совпадает с конструктором:  
    3.1. Поместите в `sourceStack` корректные источники из `push_sources` (некоторые конструкторы `traverseCommitSourceLocation` также могут содержать источники).  
    3.2. Сохраните `FileId -> file_reference` в [таблицу ссылок на файлы »](#file-reference-table) и `FileId -> FileSource` в [таблицу источников файлов »](#file-source-table) для всех источников, активных в этот момент в стеке источников.  
    3.3. Извлеките только те источники, которые были помещены на шаге 3.1 (все остальные источники оставьте без изменений).
4.  Продолжайте обход, чтобы собрать все совпадения в пределах одной и той же полезной нагрузки.

Иными словами, входящий обход — это обход в духе поиска в глубину, при котором источники помещаются в стек как контекст и сохраняются лишь тогда, когда достигнут конструктор с расположением медиа.

[@note] DFS (depth-first search) — поиск в глубину: алгоритм обхода дерева, при котором каждая ветвь просматривается до конца, прежде чем алгоритм возвращается назад и переходит к следующей.

#### Список типов обходчиков

-   `traverseMethodResult` — для вызовов методов: прикрепляет источники, используя параметры вызова метода, после чего продолжает обход по результату метода.

    Обходить результат метода следует только в том случае, если для возвращённого конструктора есть подходящий `traverseIncomingConstructor`.

    Параметры:

    -   `name` — имя вызова метода, к которому выполняется привязка (например, `messages.getMessages`).
    -   `push_sources` — список источников, которые нужно поместить в стек при срабатывании обходчика.
    -   `is_needed_parent` — если поле установлено, обход обязан выставить результат этого метода как родительский контекст для последующего извлечения источников, поскольку хотя бы у одного нижележащего `Source` поле `needs_parent` указывает на этот метод. Вызов метода помещается в отдельную карту родительского контекста с ключом по имени метода (можно использовать ту же карту контекста, что и для конструкторов с `is_needed_parent=true`, например `HashMap<predicate, Vector<object>>`).

    [Файл карты »](#map-file) содержит записи `traverseMethodResult` для всех методов, возвращающих ссылки на файлы.

-   `traverseIncomingConstructor` — прикрепляет источники к конструкторам с определённым предикатом (именем), после чего продолжает обход по части параметров конструктора.

    Параметры:

    -   `type` — тип обходимого конструктора (например, `Document`, `Photo` и т. д.; присутствует для упрощения кодогенерации).

    -   `predicate` — имя обходимого конструктора (например, `document`, `photo` и т. д.).

    -   `push_sources` — список источников, которые нужно поместить в стек при срабатывании обходчика.

    -   `is_needed_parent` — если поле установлено, обход обязан выставить этот конструктор как родительский контекст для последующего извлечения источников, поскольку хотя бы у одного нижележащего `Source` поле `needs_parent` указывает на этот конструктор. Этот объект помещается в отдельную карту родительского контекста с ключом по предикату (например, `HashMap<predicate, Vector<object>>`).

    -   `params` — список параметров для обхода.  
        Обходить параметр следует только в том случае, если для содержащегося в нём конструктора есть подходящий `traverseIncomingConstructor`.

        `traverseParam` содержит имя обходимого параметра и (для простоты, хотя эти сведения можно извлечь из схемы) его тип, а также признаки того, флаг ли это, вектор или вектор под флагом.  
        Поле `type` всегда содержит тип нижележащего параметра, то есть без `Vector<>` и без `flags.X?`.

    [Файл карты »](#map-file) содержит записи `traverseIncomingConstructor` для всех входящих конструкторов, содержащих ссылки на файлы (вложенные в параметры).

-   `traverseCommitSourceLocation` — сохраняет ссылку на файл, содержащуюся в текущем конструкторе, и источники файлов, находящиеся в этот момент в стеке источников, в [таблицу источников файлов »](#file-source-table) и [таблицу ссылок на файлы »](#file-reference-table).

    Параметры:

    -   `type` — тип конструктора, указанного в `predicate` (например, `Document`, `Photo` и т. д.; присутствует для упрощения кодогенерации).
    -   `predicate` — имя входящего медиаконструктора, полученного от API (например, `document`, `photo`). У такого конструктора гарантированно есть поле `id` и поле `file_reference`.
    -   `push_sources` — список источников, которые нужно поместить в стек при срабатывании обходчика, до того как какие-либо источники будут сохранены в таблицу источников файлов.
    -   `stored_constructor` — тип [идентификатора файла](#file-ids), который будет использован для заполнения [таблицы ссылок на файлы »](#file-reference-table) и [таблицы источников файлов »](#file-source-table) (например, `fileIdDocument`, `fileIdPhoto`).

    При получении медиаконструктора с предикатом `traverseCommitSourceLocation.predicate` клиент обязан:

    -   Извлечь поле `file_reference` медиаконструктора
    -   Извлечь поле `id` медиаконструктора, сформировав новый идентификатор файла типа `traverseCommitSourceLocation.stored_constructor`
    -   Сохранить оба значения в [таблицу ссылок на файлы »](#file-reference-table), используя идентификатор файла как ключ, а ссылку на файл — как значение.
    -   Сохранить все [источники файлов](#source-extraction), находящиеся в этот момент в стеке источников, в [таблицу источников файлов »](#file-source-table), используя идентификатор файла как ключ, а источник файла — как значение (для одного ключа может храниться несколько значений).

    Например:

    -   Допустим, от API получен `document{id: 12345, file_reference: "...", ...}`; в момент обхода [document](/constructor/document/) в стеке источников присутствуют два [источника файлов](#file-sources) — один `fileSourceMessage{...}` и один `fileSourceWebPage{...}`.
    -   В [таблицу ссылок на файлы »](#file-reference-table) должна быть добавлена новая запись `fileIdDocument{id: 12345} => "..."`
    -   В [таблицу источников файлов »](#file-source-table) должны быть добавлены две новые записи: `fileIdDocument{id: 12345} => fileSourceMessage{...}` и `fileIdDocument{id: 12345} => fileSourceWebPage{...}`.

    [Файл карты »](#map-file) содержит записи `traverseCommitSourceLocation` для всех входящих конструкторов, у которых есть поле `file_reference` и поле `id`.  
    В текущем файле карты присутствуют следующие записи `traverseCommitSourceLocation`:

    -   ```
        traverseCommitSourceLocation{predicate: document, stored_constructor: fileIdDocument, push_sources: [fileSourceStickerSet, fileSourceSavedMusic (needs users.getSavedMusic), fileSourceSavedMusic (needs users.getSavedMusicByID)], type: Document}
        ```
        
    -   ```
        traverseCommitSourceLocation{predicate: photo, stored_constructor: fileIdPhoto, push_sources: [fileSourceUserProfilePhoto (needs photos.getUserPhotos)], type: Photo}
        ```

### Исходящие обходчики

Полный список исходящих обходчиков, содержащихся в текущем файле карты, см. [здесь »](/api/file-references/outgoing-traversers/).

Схема:

```
traverseMethodCall#9244f5bb name:string params:Vector<TraverseParam> = TraverserOutgoing;
traverseOutgoingConstructor#3fc5026d type:string predicate:string params:Vector<TraverseParam> = TraverserOutgoing;
traverseSwapLocation#032bf95d type:string predicate:string stored_constructor:string = TraverserOutgoing;

traverseParam#62161b67 flags:# name:string is_flag:flags.0?true is_vector:flags.1?true type:string = TraverseParam;
```

Исходящие обходчики извлекают [идентификатор файла »](#file-ids) из объектов медиа, **отправляемых** в API, и по нему обновляют и подменяют [ссылку на файл »](#file-references) внутри того же самого исходящего объекта медиа — до того, как он будет отправлен.

Обходчики бывают трёх типов:

-   `traverseMethodCall` — обходит указанные параметры вызова метода.

    Параметры:

    -   `name` — имя метода, параметры которого следует обойти.

    -   `params` — параметры, которые нужно обойти.

        `traverseParam` содержит имя обходимого параметра и (для простоты, хотя эти сведения можно извлечь из схемы) его тип, а также признаки того, флаг ли это, вектор или вектор под флагом.  
        Поле `type` всегда содержит тип нижележащего параметра (то есть без `Vector<>` и без `flags.X?`).

-   `traverseOutgoingConstructor` — обходит указанные параметры конструктора.

    Параметры:

    -   `type` — тип обходимого конструктора (например, `InputMedia`).

    -   `predicate` — имя обходимого конструктора (например, `inputMediaDocument`, `inputMediaPhoto` и т. д.).

    -   `params` — параметры, которые нужно обойти.

        `traverseParam` содержит имя обходимого параметра и (для простоты, хотя эти сведения можно извлечь из схемы) его тип, а также признаки того, флаг ли это, вектор или вектор под флагом.  
        Поле `type` всегда содержит тип нижележащего параметра (то есть без `Vector<>` и без `flags.X?`).

-   `traverseSwapLocation` — обновляет ссылку на файл, содержащуюся в текущем конструкторе, используя источники файлов из [таблицы источников файлов »](#file-source-table).

    Параметры:

    -   `type` — тип конструктора исходящего медиа, отправляемого в API (например, `InputMedia`).
    -   `predicate` — имя конструктора исходящего медиа, отправляемого в API (например, `inputPhoto`, `inputDocument`). У такого конструктора гарантированно есть поле `id` и поле `file_reference`.
    -   `stored_constructor` — тип [идентификатора файла](#file-ids), по которому ищутся значения в [таблице ссылок на файлы »](#file-reference-table) и [таблице источников файлов »](#file-source-table) (например, `fileIdDocument`, `fileIdPhoto`)

    [Файл карты »](#map-file) содержит исходящие обходчики для всех конструкторов исходящего медиа, у которых есть поля `file_reference` и `id`.  
    В текущем файле карты присутствуют следующие исходящие обходчики:

    -   ```
        traverseSwapLocation{predicate: inputPhoto, stored_constructor: fileIdPhoto, type: InputPhoto}
        ```
        
    -   ```
        traverseSwapLocation{predicate: inputDocument, stored_constructor: fileIdDocument, type: InputDocument}
        ```

    -   ```
        traverseSwapLocation{predicate: inputDocumentFileLocation, stored_constructor: fileIdDocument, type: InputFileLocation}
        ```
        
    -   ```
        traverseSwapLocation{predicate: inputPhotoFileLocation, stored_constructor: fileIdPhoto, type: InputFileLocation}
        ```

(Устаревшие конструкторы `inputFileLocation` текущим файлом карты игнорируются).

Исходящие обходчики срабатывают, когда вызов метода, работающего с медиа, возвращает RPC-ошибку `FILE_REFERENCE_EXPIRED` или `FILE_REFERENCE_INVALID`.

Методы, работающие сразу с несколькими медиафайлами, — например [messages.sendMultiMedia](/method/messages.sendMultiMedia/) — могут возвращать ошибки ссылок на файлы в несколько ином виде, как ошибки `FILE_REFERENCE_%d_EXPIRED` (или `FILE_REFERENCE_%d_INVALID`, которую следует обрабатывать так же): в этом случае медиа со ссылкой на файл, требующей обновления, находится по индексу `%d` в переданном векторе `multi_media`.

Та же ошибка `FILE_REFERENCE_%d_INVALID` может быть возвращена и методом [messages.sendMedia](/method/messages.sendMedia/) или другими методами, принимающими единственный конструктор [InputMedia](/type/InputMedia/), если в них передан [inputMediaPaidMedia](/constructor/inputMediaPaidMedia/) с массивом медиафайлов `extended_media`.

При получении такой ошибки клиенту следует:

-   С помощью обходчиков найти среди аргументов неудавшегося вызова метода все конструкторы исходящего медиа, соответствующие `traverseSwapLocation`.

    -   Для ошибок `FILE_REFERENCE_%d_INVALID` выбрать нужный конструктор по индексу, в остальных случаях — выбрать первый.
-   По полю `id` выбранного конструктора сформировать новый [идентификатор файла »](#file-ids) типа `traverseSwapLocation.stored_constructor`.

-   По этому [идентификатору файла »](#file-ids) найти [источники файлов »](#source-extraction) в [таблице источников файлов](#file-source-table)

-   Обновить [ссылку на файл](#file-references) с помощью [действий обновления »](#refresh-actions), связанных с найденными источниками:

    Один раз пройти по всем сохранённым источникам файла, выполняя связанное с каждым [действие обновления »](#refresh-actions), и немедленно выйти из цикла, если:

    -   Запись в [таблице ссылок на файлы »](#file-reference-table), связанная с тем же [идентификатором файла »](#file-ids), обновилась новым значением ЛИБО
    -   Источники закончились — в этом случае исходную ошибку `FILE_REFERENCE_EXPIRED` следует пробросить пользователю.
-   Получить новую [ссылку на файл](#file-references) из [таблицы ссылок на файлы »](#file-reference-table) и записать её в поле `file_reference` конструктора, выбранного на шаге 1

-   Повторить исходный вызов.

Например, если отправленный в API вызов `messages.sendMedia{media: inputMediaPhoto{id: inputPhoto{id: 12345, file_reference: "...", ...}, ...}, ...}` завершается ошибкой `FILE_REFERENCE_EXPIRED`, то по новому `fileIdPhoto{id: 12345}` извлекаются все связанные [источники файлов »](#source-extraction) из [таблицы источников файлов](#file-source-table), ссылка на файл обновляется, затем новая ссылка на файл (`abc`) извлекается из [таблицы ссылок на файлы »](#file-reference-table), и вызов отправляется заново: `messages.sendMedia{media: inputMediaPhoto{id: inputPhoto{id: 12345, file_reference: "abc", ...}, ...}, ...}`.

Ссылку на файл в вызовах медиаметодов можно также подменять заранее, выполняя для всех вызовов упрощённую последовательность действий и не дожидаясь RPC-ошибки (это бывает полезно, когда просроченная ссылка на файл могла осесть в какой-то другой базе данных или поступает извне — например, в составе старого [draftMessage](/constructor/draftMessage/), возвращённого API):

-   С помощью обходчиков найти среди аргументов вызова метода все конструкторы исходящего медиа, соответствующие `traverseSwapLocation`.
-   Для каждого конструктора исходящего медиа:
    -   По полю `id` выбранного конструктора типа `traverseSwapLocation.predicate` сформировать новый [идентификатор файла »](#file-ids) типа `traverseSwapLocation.stored_constructor`.
    -   Если она есть, получить текущую [ссылку на файл](#file-references) из [таблицы ссылок на файлы »](#file-reference-table) и записать её в поле `file_reference` выбранного конструктора
-   Выполнить вызов

Исходящих обходчиков можно вообще не использовать, если FileId или FileSources уже передаются как внешние метаданные в клиентскую функцию, которая выполняет вызов метода (то есть отдельным дополнительным аргументом, не входящим в число передаваемых в API).

### Извлечение источников

[@term:source extractor] Извлекатель источников (`source extractor` — описание того, из каких полей входящего объекта собрать источник файла) содержит инструкции, которыми клиент может воспользоваться, чтобы получить [источник файла »](#file-sources).

[Источник файла »](#file-sources) содержит инструкции о том, как извлечь и сохранить источники файлов из ответа на вызов метода или из входящего обновления.

Полный список исходящих извлекателей источников, содержащихся в текущем файле карты, приведён [здесь »](/api/file-references/sources/).

[Входящие обходчики »](#incoming-traversers) и извлекатели источников применяются совместно, чтобы заполнить [таблицу источников файлов »](#file-source-table), которая сопоставляет **идентификатор файла** с одним или несколькими **источниками файлов**.

Схема:

```
predicate#de3bc05a predicate:string is_constructor:Bool = Predicate;
source#4ec4751a flags:# predicate:Predicate stored_constructor:string stored_params:Vector<FieldExtractor> skipped_flags:Vector<string> needs_parent:flags.3?Predicate needs_not_parents:Vector<Predicate> = Source;
```

**Примечание**: в последующих разделах предполагается, что все конструкторы [Updates](/type/Updates/) уже преобразованы в вектор конструкторов [Update](/type/Update/), **включая краткие варианты** вроде [updateShortMessage](/constructor/updateShortMessage/), [updateShortSentMessage](/constructor/updateShortSentMessage/), [updateShortChatMessage](/constructor/updateShortChatMessage/), которые клиент обязан заранее преобразовать в конструкторы [Update](/type/Update/), используя сведения из самого вызова метода.  
Хотя эту операцию можно было бы описать и внутри файла карты, это без нужды увеличило бы количество путей: поскольку большинство клиентов и так преобразуют короткие конструкторы в конструкторы Update, файл карты рассматривает только пути, начинающиеся с конструкторов Update.

Параметры:

-   `predicate` — указывает конструктор или метод, с которого должно начинаться извлечение полей. `predicate.predicate` содержит имя, а `predicate.is_constructor` определяет, указывает ли оно на конструктор или на метод.
-   `needs_parent` — если задан, содержит конструктор, который обязан присутствовать как родительский в текущей ветви обхода, либо метод, ответ которого сейчас обходится; этот родительский объект требуется одному или нескольким извлекателям путей в составе источника.
-   `needs_not_parents` — содержит конструкторы или методы, которых в текущем родительском контексте быть **не** должно, иначе источник недействителен.
-   `stored_constructor` — содержит имя конструктора `FileSource` из TL-схемы, указанной в `fileReferenceMap.db_schema`; этот конструктор следует сохранить в базу данных после того, как он будет заполнен согласно `stored_params`, как описано ниже.
-   `stored_params` — содержит сведения о том, как заполнять конструктор `FileSource`, указанный в `stored_constructor`
-   `skipped_flags` — в некоторых случаях часть **флаговых** полей конструктора `stored_constructor` не упоминается в `action`: это поле содержит полный список флагов, которые текущий источник никогда не использует и которые обязаны остаться сброшенными.

Каждому уникальному предикату может соответствовать один или несколько `stored_constructor` с разными параметрами.  
Учтите, что источники, привязанные к методам, не могут использовать `needs_parent`.

#### Извлечение полей источника

```
// Extractor
extractAndStore#72069549 from:Path to:string = FieldExtractor;

extractInputStickerSetFromDocumentAttributesAndStore#369d8d14 from:Path to:string = FieldExtractor;
extractInputStickerSetFromStickerSetAndStore#c167d470 from:Path to:string = FieldExtractor;

extractPeerIdFromPeerAndStore#7d33019c from:Path to:string = FieldExtractor;
extractPeerIdFromInputPeerAndStore#a51acfb4 from:Path to:string = FieldExtractor;

extractChannelIdFromChannelAndStore#5675bc97 from:Path to:string = FieldExtractor;
extractChannelIdFromInputChannelAndStore#b662660e from:Path to:string = FieldExtractor;

extractUserIdFromUserAndStore#4778ec63 from:Path to:string = FieldExtractor;
extractUserIdFromInputUserAndStore#7720aa2e from:Path to:string = FieldExtractor;

// Paths
paramNotFlag#acd9d5cf = ParamFlag;
paramIsFlagAbortIfEmpty#f8fe9fee = ParamFlag;
paramIsFlagFallback#202b77a1 fallback:TypedOp = ParamFlag;
paramIsFlagPassthrough#1dc6e17d = ParamFlag;

pathPart#19a10fbf type:string constructor:string param:string param_type:string flag:ParamFlag = PathPart;

path#0c3586a2 parts:Vector<PathPart> = Path;
pathParent#58f13684 parts:Vector<PathPart> = Path;
```

Извлекатели полей служат для того, чтобы получить параметр из одного или нескольких конструкторов — например, `updateStory.story -> storyItem.media -> messageMediaDocument.document -> document.file_reference` — и сохранить его в указанное поле конструктора `FileSource`.

#### Извлекатели

```
extractAndStore#72069549 from:Path to:string = FieldExtractor;

extractInputStickerSetFromDocumentAttributesAndStore#369d8d14 from:Path to:string = FieldExtractor;
extractInputStickerSetFromStickerSetAndStore#c167d470 from:Path to:string = FieldExtractor;

extractPeerIdFromPeerAndStore#7d33019c from:Path to:string = FieldExtractor;
extractPeerIdFromInputPeerAndStore#a51acfb4 from:Path to:string = FieldExtractor;

extractChannelIdFromChannelAndStore#5675bc97 from:Path to:string = FieldExtractor;
extractChannelIdFromInputChannelAndStore#b662660e from:Path to:string = FieldExtractor;

extractUserIdFromUserAndStore#4778ec63 from:Path to:string = FieldExtractor;
extractUserIdFromInputUserAndStore#7720aa2e from:Path to:string = FieldExtractor;
```

##### `extractAndStore`

Извлекает значение по указанному пути и сохраняет его в `$FileSource.$to`.

##### `extractInputStickerSetFromDocumentAttributesAndStore`

Берёт `Vector<DocumentAttribute>` по пути `from`, ищет в нём [documentAttributeSticker](/constructor/documentAttributeSticker/) и сохраняет [InputStickerSet](/type/InputStickerSet/), содержащийся в [documentAttributeSticker](/constructor/documentAttributeSticker/).`stickerset`, в `$FileSource.$to`.

Прерывает работу, если в переданном векторе нет атрибута типа [documentAttributeSticker](/constructor/documentAttributeSticker/).

##### `extractInputStickerSetFromStickerSetAndStore`

Берёт [stickerSet](/constructor/stickerSet/) по пути `from`, преобразует его в [InputStickerSet](/type/InputStickerSet/) и сохраняет в `$FileSource.$to`.

##### `extractPeerIdFromPeerAndStore`

[@term:peer] Берёт [Peer](/type/Peer/) (пир — собеседник: пользователь, чат или канал) по пути `from`, преобразует его в [идентификатор пира в формате bot API (типа `long`) »](/api/bots/ids/) и сохраняет в `$FileSource.$to`.

##### `extractPeerIdFromInputPeerAndStore`

Берёт [InputPeer](/type/InputPeer/) по пути `from`, преобразует его в [идентификатор пира в формате bot API (типа `long`) »](/api/bots/ids/) и сохраняет в `$FileSource.$to`.

Если `from` указывает на [inputPeerSelf](/constructor/inputPeerSelf/), вместо этого сохраняет идентификатор текущего пользователя.

Прерывает работу, если `from` указывает на [inputPeerEmpty](/constructor/inputPeerEmpty/).

##### `extractChannelIdFromChannelAndStore`

Берёт [channel](/constructor/channel/) по пути `from`, извлекает поле `id` и сохраняет его в `$FileSource.$to`.

##### `extractChannelIdFromInputChannelAndStore`

Берёт [InputChannel](/type/InputChannel/) по пути `from`, извлекает поле `channel_id` и сохраняет его в `$FileSource.$to`.

Прерывает работу, если `from` указывает на [inputChannelEmpty](/constructor/inputChannelEmpty/).

##### `extractUserIdFromUserAndStore`

Берёт [user](/constructor/user/) по пути `from`, извлекает поле `id` и сохраняет его в `$FileSource.$to`.

##### `extractUserIdFromInputUserAndStore`

Берёт [InputUser](/type/InputUser/) по пути `from`, извлекает поле `user_id` и сохраняет его в `$FileSource.$to`.

Если `from` указывает на [inputUserSelf](/constructor/inputUserSelf/), вместо этого сохраняет идентификатор текущего пользователя.

Прерывает работу, если `from` указывает на [inputUserEmpty](/constructor/inputUserEmpty/).

#### Пути

Первая часть пути всегда указывает на:

-   Конструктор или метод самого источника (`source.predicate`) — для `path`
-   Конструктор или метод родителя, заданного в `source.needs_parent` — для `pathParent`

Путь складывается из нескольких элементов `pathPart`.

Каждый элемент `pathPart` содержит перечисленные ниже поля, которые описывают, как извлечь значение.

-   `constructor` — указывает предикат требуемого конструктора или метода. Если встретился конструктор другого типа (например, [documentEmpty](/constructor/documentEmpty/) вместо [document](/constructor/document/)), извлечение следует прервать.  
    По определению, если передано имя метода, оно всегда совпадает с методом соответствующего источника.
-   `type` — указывает тип требуемого конструктора или метода.
-   `param` — указывает требуемый параметр; пустая строка означает возвращаемое значение метода.
-   `param_type` — указывает тип требуемого параметра; если параметр — флаг, задаётся его базовый тип; если `param` указывает на возвращаемое значение метода, `param_type` совпадает с `type`.
-   `flag` — содержит ровно один из следующих конструкторов:
    -   `paramNotFlag` — текущий параметр не флаг
    -   `paramIsFlagAbortIfEmpty` — текущий параметр — флаг, и если он не установлен, извлечение следует прервать.
    -   `paramIsFlagFallback` — текущий параметр — флаг, и если он не установлен, в качестве запасного значения используется указанный `TypedOp`.  
        Обратите внимание: операции типов `copyOp`, `getInputChannelByIdOp`, `getInputUserByIdOp` и `getInputPeerByIdOp` в этом контексте не допускаются.
    -   `paramIsFlagPassthrough` — текущий параметр — флаг, и его значение следует скопировать или вернуть без изменений; допускается только для последнего элемента пути, а внутри аргументов constructorOp/callOp/getMessageOp — только если аргумент, использующий этот путь, тоже флаг того же типа.

### Действия обновления

Действия обновления служат для того, чтобы обновить истёкшую ссылку на файл в соответствии с [источниками файлов »](#file-sources), которые хранятся в [таблице источников файлов »](#file-source-table) и связаны с `FileId`.

Полный список действий обновления, содержащихся в текущем файле карты, приведён [здесь »](/api/file-references/refresh-actions/).

```
refreshAction#d4e15689 stored_constructor:string action:ActionOp = RefreshAction;

// Actions
callOp#c2ff3383 method:string args:Vector<TypedOpArg> = ActionOp;
getMessageOp#8da4c2ae peer:TypedOp id:TypedOp quick_reply_shortcut_id:TypedOp = ActionOp;

// For string => TypedOp dictionaries
typedOpArg#3a2930c2 key:string value:TypedOp = TypedOpArg;

// Typed constructors, the type is specified to simplify codegen,
// but isn't strictly necessary as it can be inferred from the TypedOpOp.
// It is fully pre-validated during the generation of the definition file.
typedOp#705b10ec type:string op:TypedOpOp = TypedOp;
```

Параметры:

-   `stored_constructor` — имя [источника файла](#file-sources) (объекта типа `FileSource`), заданное в `db_schema`.
-   `action` — действие, которое выполняется при обновлении источника файла типа `stored_constructor`.

На каждый тип источника файла может приходиться только одно действие.

Аргументы действия складываются из набора конструкторов `typedOp`.

[`typedOp` »](#action-parameters) — это обёртка вокруг конструктора `TypedOpOp`, которая дополнительно содержит TL-тип (`type`) соответствующего `TypedOpOp`; для вычисления он строго не нужен, но может пригодиться при автоматической генерации кода из файла определений.

#### `callOp`

`callOp` — это универсальное действие, которое вызывает метод, указанный в `method`, с аргументами, указанными в `args`.

`callOp.args` всегда содержит как минимум все обязательные параметры, а также, возможно, некоторые параметры под флагами.

#### `getMessageOp`

`getMessageOp` — это специализированное действие, которое вызывает либо [messages.getMessages](/method/messages.getMessages/), либо [channels.getMessages](/method/channels.getMessages/) — в зависимости от типа `peer` (который всегда является подтипом [InputPeer](/type/InputPeer/)), передавая `id` единственным элементом векторного параметра `id`.  
Если флаг, на который указывает `quick_reply_shortcut_id`, установлен, вместо этого следует выполнить [messages.getQuickReplyMessages](/method/messages.getQuickReplyMessages/), передав `quick_reply_shortcut_id` в параметр `shortcut_id`, а `id` — единственным элементом векторного параметра `id`.

#### Параметры действия

```
copyOp#f48f418f from:string = TypedOpOp;

getInputChannelByIdOp#3cb47531 from:string = TypedOpOp;
getInputUserByIdOp#c0ee4326 from:string = TypedOpOp;
getInputPeerByIdOp#19813750 from:string = TypedOpOp;

// Literals & constructors (methods not allowed or needed here)
constructorOp#107f8d8a constructor:string args:Vector<TypedOpArg> = TypedOpOp;

vectorOp#f8fb8f72 values:Vector<TypedOp> = TypedOpOp;

intLiteralOp#cbfabe7c value:int = TypedOpOp;
longLiteralOp#d08b8d3a value:long = TypedOpOp;
stringLiteralOp#2b56ea8e value:string = TypedOpOp;
bytesLiteralOp#fdb395a4 value:bytes = TypedOpOp;
boolLiteralOp#37e07911 value:Bool = TypedOpOp;
doubleLiteralOp#3651e3bf value:double = TypedOpOp;
themeFormatLiteralOp#8e4f9208 = TypedOpOp;
```

Параметры действия описываются конструкторами `TypedOpOp`.

#### `copyOp`

Самый употребительный тип: копирует значение или значения из сохранённого `$FileSource.$from`.

#### `getInputChannelByIdOp`

Возвращает конструктор [InputChannel](/type/InputChannel/) из [базы пиров](/api/peers/) клиента по идентификатору канала типа [long](/type/long/), указанному в сохранённом `$FileSource.$from`.

#### `getInputUserByIdOp`

Возвращает конструктор [InputUser](/type/InputUser/) из [базы пиров](/api/peers/) клиента по идентификатору пользователя типа [long](/type/long/), указанному в сохранённом `$FileSource.$from`.

#### `getInputPeerByIdOp`

Возвращает конструктор [InputPeer](/type/InputPeer/) из [базы пиров](/api/peers/) клиента по [идентификатору пира в стиле bot API »](/api/bots/ids/) типа [long](/type/long/), указанному в сохранённом `$FileSource.$from`.

#### `constructorOp`

Строит конструктор типа (предиката) `constructor`, используя аргументы, указанные в `args`.

#### `vectorOp`

Строит вектор из значений, переданных в `values`.

#### `intLiteralOp`

Строит литерал типа [int](/type/int/) со значением, переданным в `value`.

#### `longLiteralOp`

Строит литерал типа [long](/type/long/) со значением, переданным в `value`.

#### `stringLiteralOp`

Строит литерал типа [string](/type/string/) со значением, переданным в `value`.

#### `bytesLiteralOp`

Строит литерал типа [bytes](/type/bytes/) со значением, переданным в `value`.

#### `boolLiteralOp`

Строит литерал типа [Bool](/type/Bool/) со значением, переданным в `value`.

#### `doubleLiteralOp`

Строит литерал типа [double](/type/double/) со значением, переданным в `value`.

#### `themeFormatLiteralOp`

Строит значение типа [string](/type/string/), указывающее [движки оформления](/api/themes/), которые поддерживает клиент (используется при работе с медиафайлами, связанными с темами; может быть пустой строкой, если клиент не поддерживает темы).
