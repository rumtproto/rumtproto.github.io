---
title: "Групповые звонки с E2E-шифрованием"
original: "https://core.telegram.org/api/end-to-end/group-calls"
section: api
description: "Эта статья описывает сквозное шифрование, применяемое в Telegram для групповых голосовых и видеозвонков; оно использует блокчейн для управления состоянием и повышения безопасности."
layout: layout.njk
---

# Групповые звонки с E2E-шифрованием

Эта статья описывает сквозное шифрование, применяемое в Telegram для **групповых голосовых и видеозвонков**; оно использует блокчейн для управления состоянием и повышения безопасности.

##### Связанные статьи

-   [Групповые звонки (обзор API) »](/api/group-calls/)
-   [Сквозное шифрование в секретных чатах](/api/end-to-end/)
-   [Рекомендации по безопасности для разработчиков клиентов](/mtproto/security_guidelines/)
-   [Язык TL](/mtproto/TL/)

* * *

### Обзор

[@term:blockchain] Групповые звонки Telegram со сквозным шифрованием в общем случае опираются на 3 компонента, которые обеспечивают безопасный обмен данными между несколькими участниками:

1.  **Блокчейн (`blockchain`):** децентрализованный журнал (цепочка блоков), общий для всех участников. Он служит источником истины о состоянии звонка, включая список участников, разрешения и общие ключи шифрования. Его хеш нужен для генерации кодов подтверждения.
2.  **Протокол шифрования:** протокол, оптимизированный для связи в реальном времени; он шифрует аудио- и видеоданные на уровне отдельных кадров. Он включает механизмы подписи пакетов для проверки авторства и безопасного распространения общих ключей.
3.  **Протокол подтверждения через эмодзи:** двухфазная схема «фиксация — раскрытие» (commit-reveal), по которой эмодзи для подтверждения генерируются на основе состояния блокчейна в сочетании со случайными значениями от участников. Это **исключает манипуляции со стороны любого отдельного участника**, включая создателей блоков, и делает визуальную сверку ключей достоверной.

Этот документ подробно описывает техническую реализацию перечисленных компонентов.

### Общая схема работы

Ниже приводится общая схема работы с групповыми звонками. Как уже сказано, блокчейн лежит в основе базовых операций — входа в звонок, выхода из него и поддержания согласованного состояния внутри звонка.

#### Вход в звонок

1.  **Получение состояния:** пользователь, желающий присоединиться, запрашивает у сервера последний блок блокчейна (он представляет текущее состояние звонка) методом [phone.getGroupCallChainBlocks](/method/phone.getGroupCallChainBlocks/) с параметрами `sub_chain_id=0`, `limit=1`, `offset=-1`.
2.  **Создание блока входа:** пользователь формирует предложение нового блока. Этот блок:
    -   Ссылается на хеш предыдущего блока.
    -   Содержит изменение `ChangeSetGroupState`, добавляющее пользователя в список участников.
    -   Содержит изменение `ChangeSetSharedKey`, которое устанавливает новый общий ключ, зашифрованный для всех участников (включая входящего пользователя). Входящий пользователь _обязан_ быть указан как участник в изменении состояния группы _в том же самом блоке_, иначе он не сможет создать общий ключ.
3.  **Отправка блока:** пользователь отправляет предложенный блок на сервер [соответствующим методом API »](#subchains).
4.  **Проверка и рассылка на сервере:** сервер проверяет блок (убеждается, что тот добавляет только самого входящего пользователя, соблюдает правила последовательности и т. д.).
    -   Если блок корректен и для той же высоты ещё не принят конфликтующий блок, сервер применяет его и рассылает новый блок всем текущим участникам.
    -   Если блок некорректен или возник конфликт (например, другой пользователь вошёл одновременно, из-за чего появился блок на той же высоте), операция завершается неудачей, и пользователю может потребоваться повторить попытку, начав с последнего блока.
5.  [@term:epoch] **Обновление у клиентов:** в итоге все участники получают новый блок от сервера, применяют его локально и начинают принимать пакеты, зашифрованные для новой эпохи (`epoch`) — периода действия очередного общего ключа, который обозначается хешем породившего его блока.
6.  [@term:nonce] **Подтверждение через эмодзи:** каждый раз, принимая блок [основной подцепочки](#subchains) (`subchain=0`), клиент обязан немедленно сформировать новое сообщение-фиксацию одноразового значения (`nonce` — случайное число, используемое ровно один раз), привязанное к новой высоте и хешу блока, отправить его через [подцепочку рассылки](#subchains) (`subchain=1`) и дождаться завершения описанного ниже протокола «фиксация — раскрытие», прежде чем показывать эмодзи подтверждения для этого состояния.

#### Удаление участника

```
groupCallParticipant#2a3dc7ac flags:# muted:flags.0?true left:flags.1?true can_self_unmute:flags.2?true just_joined:flags.4?true versioned:flags.5?true min:flags.8?true muted_by_you:flags.9?true volume_by_admin:flags.10?true self:flags.12?true video_joined:flags.15?true peer:Peer date:int active_date:flags.3?int source:int volume:flags.7?int about:flags.11?string raise_hand_rating:flags.13?long video:flags.6?GroupCallParticipantVideo presentation:flags.14?GroupCallParticipantVideo paid_stars_total:flags.16?long = GroupCallParticipant;

updateGroupCallParticipants#f2ebdb4e call:InputGroupCall participants:Vector<GroupCallParticipant> version:int = Update;

---functions---

phone.leaveGroupCall#500377f9 call:InputGroupCall source:int = Updates;
phone.deleteConferenceCallParticipants#8ca60525 flags:# only_left:flags.0?true kick:flags.1?true call:InputGroupCall ids:Vector<long> block:bytes = Updates;
```

Существуют две различные операции удаления, которые различаются флагом, передаваемым в [phone.deleteConferenceCallParticipants](/method/phone.deleteConferenceCallParticipants/):

-   **`only_left=true`** — очистка от участников, уже отключившихся от медиауровня.
-   **`kick=true`** — принудительное удаление участника, активного в данный момент.

**Примечание:** удалить самого себя через [phone.deleteConferenceCallParticipants](/method/phone.deleteConferenceCallParticipants/) нельзя, поскольку участник не может создать блок, который удаляет его самого и одновременно порождает новый общий ключ для остальных; вместо этого прочие участники обязаны вычищать из блокчейна пользователей, покинувших звонок, как описано ниже.

##### Очистка устаревших записей (`only_left`)

После того как участник отключается от медиауровня RTC вызовом [phone.leaveGroupCall](/method/phone.leaveGroupCall/), всем остальным участникам доставляется обновление [updateGroupCallParticipants](/constructor/updateGroupCallParticipants/) с `groupCallParticipant.left=true`. Однако запись об ушедшем пользователе сохраняется в E2E-блокчейне (`e2e.chain.groupState`). Любой другой активный участник, обладающий разрешением `remove_users`, обязан вычистить такие устаревшие записи из блокчейна.

**Обнаружение устаревших участников:**

Клиенты обнаруживают устаревших участников двумя взаимодополняющими способами:

-   **По входящему [updateGroupCallParticipants](/constructor/updateGroupCallParticipants/):** если получен [groupCallParticipant](/constructor/groupCallParticipant/) с `left=true` для пользователя, который в текущий момент присутствует в локальном состоянии E2E-блокчейна (`e2e.chain.groupState.participants`), этот пользователь сразу считается устаревшим.

-   **По сравнению полного списка участников:** при обновлении состояния E2E-блокчейна (например, после применения нового блока основной цепочки, меняющего список участников) клиент сравнивает `e2e.chain.groupState.participants` из блокчейна со списком участников RTC, полученным от сервера методом [phone.getGroupParticipants](/method/phone.getGroupParticipants/). Любой пользователь, присутствующий в состоянии блокчейна, но отсутствующий в присланном сервером списке участников RTC, считается устаревшим. Если полный список участников RTC ещё не загружен, клиент сначала постранично выбирает его методом [phone.getGroupParticipants](/method/phone.getGroupParticipants/) и выполняет эту проверку после получения всех страниц.

**Отправка удаления:**

После того как один или несколько устаревших участников выявлены:

1.  **Создание блока удаления:** сформируйте новый блок, содержащий:
    -   Изменение `ChangeSetGroupState`, которое удаляет всех устаревших участников из списка участников.
    -   Следующее за ним изменение `ChangeSetSharedKey`, которое устанавливает новый общий ключ, зашифрованный только для _оставшихся_ участников.
2.  **Отправка:** вызовите [phone.deleteConferenceCallParticipants](/method/phone.deleteConferenceCallParticipants/) с параметрами:
    -   `only_left=true` — сообщает серверу, что эти пользователи уже покинули медиауровень.
    -   `ids` — список ID удаляемых пользователей.
    -   `block` — сериализованный блок E2E-цепочки.
3.  **Рассылка:** сервер проверяет блок и, если принимает его, рассылает всем оставшимся участникам через [updateGroupCallChainBlocks](/constructor/updateGroupCallChainBlocks/); те применяют его так же, как любой другой блок основной цепочки.

##### Принудительное удаление (`kick`)

Активный участник может принудительно удалить другого _активного в данный момент_ участника, вызвав [phone.deleteConferenceCallParticipants](/method/phone.deleteConferenceCallParticipants/) с флагом `kick=true` (вместо `only_left=true`) и с теми же полями `ids` и `block`, что описаны выше. Как и при очистке устаревших записей, требуется разрешение `remove_users`.

#### Подцепочки

Схема API:

```
// Receive blocks from any chain
updateGroupCallChainBlocks#a477288f call:InputGroupCall sub_chain_id:int blocks:Vector<bytes> next_offset:int = Update;

---functions---

// Fetch blocks from any chain
phone.getGroupCallChainBlocks#ee9f88a6 call:InputGroupCall sub_chain_id:int offset:int limit:int = Updates;

// The following methods submit blocks to chain 0
phone.createConferenceCall#7d0444bb flags:# muted:flags.0?true video_stopped:flags.2?true join:flags.3?true random_id:int public_key:flags.3?int256 block:flags.3?bytes params:flags.3?DataJSON = Updates;
phone.joinGroupCall#8fb53057 flags:# muted:flags.0?true video_stopped:flags.2?true call:InputGroupCall join_as:InputPeer invite_hash:flags.1?string public_key:flags.3?int256 block:flags.3?bytes params:DataJSON = Updates;
phone.deleteConferenceCallParticipants#8ca60525 flags:# only_left:flags.0?true kick:flags.1?true call:InputGroupCall ids:Vector<long> block:bytes = Updates;

// The following method submits blocks to chain 1
phone.sendConferenceCallBroadcast#c6701900 call:InputGroupCall block:bytes = Updates;
```

Схема E2E-звонка:

```
// Chain 0 blocks
e2e.chain.block#639a3db6 signature:int512 flags:# prev_block_hash:int256 changes:Vector<e2e.chain.Change> height:int state_proof:e2e.chain.StateProof signature_public_key:flags.0?int256 = e2e.chain.Block;

// Chain 1 blocks
e2e.chain.groupBroadcastNonceCommit#d1512ae7 signature:int512 user_id:int64 chain_height:int32 chain_hash:int256 nonce_hash:int256 = e2e.chain.GroupBroadcast;
e2e.chain.groupBroadcastNonceReveal#83f4f9d8 signature:int512 user_id:int64 chain_height:int32 chain_hash:int256 nonce:int256 = e2e.chain.GroupBroadcast;
```

На данный момент у каждого конференц-звонка есть два независимых блокчейна — независимых как от других звонков, так и друг от друга.

[@term:subchain] Эти два блокчейна различаются по идентификатору подцепочки (`subchain` — отдельная ветвь блоков внутри одного звонка):

-   Подцепочка с ID `0`: основной блокчейн.  
    Основной блокчейн содержит последовательность **исключительно** объектов `e2e.chain.Block`, описывающих изменения состояния звонка.

    У каждого блока есть собственная высота (она же смещение внутри подцепочки): первый блок подцепочки имеет высоту `0`, следующий — `1` и так далее.

    Каждый блок связан с предыдущим через параметр `prev_block_hash`.

    Для отправки блоков в подцепочку `0` допускается использовать только следующие методы:

    -   [phone.createConferenceCall](/method/phone.createConferenceCall/) — создать конференц-звонок
    -   [phone.joinGroupCall](/method/phone.joinGroupCall/) — присоединиться к конференц-звонку
    -   [phone.deleteConferenceCallParticipants](/method/phone.deleteConferenceCallParticipants/) — удалить участника конференц-звонка

    При успешном выполнении все эти методы возвращают [updateGroupCallChainBlocks](/constructor/updateGroupCallChainBlocks/) с отправленными блоками.

    Все эти методы, кроме [phone.createConferenceCall](/method/phone.createConferenceCall/), могут вернуть RPC-ошибку, начинающуюся с `CONF_WRITE_CHAIN_INVALID`, если переданный блок построен не на последнем блоке подцепочки: в этом случае следует заново получить последний блок методом [phone.getGroupCallChainBlocks](/method/phone.getGroupCallChainBlocks/), заново сформировать поверх него новый блок и отправить его повторным вызовом метода.

-   Подцепочка с ID `1`: блокчейн верификации звонка.  
    Блокчейн верификации звонка содержит последовательность **исключительно** объектов типа `e2e.chain.GroupBroadcast` — сообщений, применяемых в [протоколе проверки эмодзи по схеме commit-reveal »](#commit-reveal-protocol-workflow).

    У каждого блока есть собственная высота (она же смещение внутри подцепочки): первый блок подцепочки имеет высоту `0`, следующий — `1` и так далее.

    Все блоки подцепочки `1` связаны с блоком из подцепочки `0` через поля `chain_height` и `chain_hash`, которые оба указывают на блок в подцепочке `0`, а **не** на предыдущий блок внутри подцепочки `1`, так что строго говоря блокчейном они не являются, — но API для простоты всё равно использует термин `subchain`.

    Для отправки блоков в подцепочку `1` допускается использовать только следующие методы:

    -   [phone.sendConferenceCallBroadcast](/method/phone.sendConferenceCallBroadcast/) — отправляет блок в подцепочку `1`.

Блоки возвращаются сервером внутри обновлений [updateGroupCallChainBlocks](/constructor/updateGroupCallChainBlocks/): их возвращают все методы отправки блоков, а участникам группового звонка они, кроме того, доставляются пассивно через обычный [механизм доставки обновлений](/api/updates/), и обрабатывать их следует так, как описано [здесь »](#handling-updates).

Блоки подцепочки можно также получить методом [phone.getGroupCallChainBlocks](/method/phone.getGroupCallChainBlocks/): он вернёт не более `limit` блоков из подцепочки `sub_chain_id` с высотой не меньше `offset` — в виде обновления [updateGroupCallChainBlocks](/constructor/updateGroupCallChainBlocks/); значение `offset` может быть равно `-1`, чтобы получить последний блок указанной подцепочки.

Если клиент не является участником звонка, [phone.getGroupCallChainBlocks](/method/phone.getGroupCallChainBlocks/) вернёт **только** последний блок, независимо от значений `offset` и `limit`.

Если клиента удалили из конференц-звонка, сервер начнёт отклонять вызовы методов конференции с RPC-ошибкой `GROUPCALL_FORBIDDEN`.

Поэтому ошибку `GROUPCALL_FORBIDDEN`, возвращённую **любым** из перечисленных ниже методов, следует трактовать как признак того, что клиент утратил членство в звонке, и клиент обязан прозрачно **переподключиться** к нему: заново инициализировать локальное состояние E2E-блокчейна (сбросив `next_offset` в `{-1, -1}`, а `joined` — в `false`, как описано [ниже](#handling-updates)) и повторно отправить блок с добавлением себя через [phone.joinGroupCall](/method/phone.joinGroupCall/), вместо того чтобы показывать ошибку пользователю.

-   [phone.getGroupCallChainBlocks](/method/phone.getGroupCallChainBlocks/) (при опросе новых блоков).
-   [phone.deleteConferenceCallParticipants](/method/phone.deleteConferenceCallParticipants/) (при удалении отключившихся участников или исключении активных).
-   [phone.sendConferenceCallBroadcast](/method/phone.sendConferenceCallBroadcast/) (при передаче блока верификации в подцепочку `1`): блок, который не удалось отправить, следует сохранить и передать заново после завершения переподключения.
-   [phone.editGroupCallParticipant](/method/phone.editGroupCallParticipant/) (как при обновлении собственного состояния локального участника, так и при изменении состояния другого участника).

Обработка `GROUPCALL_FORBIDDEN` с переподключением отличается от обработки `CONF_WRITE_CHAIN_INVALID`, описанной [выше](#subchains): первая ошибка означает утрату членства и требует полного переподключения, тогда как вторая лишь означает, что отправленный блок был построен не на последнем блоке подцепочки, и требует только повторно получить последний блок, заново сформировать блок поверх него и отправить его снова.

Обратите внимание: пока клиент является участником звонка, он **обязан также** самостоятельно опрашивать новые блоки цепочек, вызывая [phone.getGroupCallChainBlocks](/method/phone.getGroupCallChainBlocks/) с `limit=50` каждые 5 секунд в обычном режиме и каждую секунду, когда [идёт проверка ключей](#key-verification-and-emoji-generation) (то есть в основную подцепочку добавлен новый блок и для него как раз формируется отпечаток в виде эмодзи через commit-reveal-сообщения в подцепочке верификации), передавая в `offset` для каждой подцепочки высоту последнего принятого блока плюс `1`.

Если число блоков, возвращённых _любым_ вызовом [phone.getGroupCallChainBlocks](/method/phone.getGroupCallChainBlocks/), равно `limit`, на сервере могут быть ещё блоки, поэтому [phone.getGroupCallChainBlocks](/method/phone.getGroupCallChainBlocks/) **обязан** быть вызван повторно сразу после обработки полученного [updateGroupCallChainBlocks](/constructor/updateGroupCallChainBlocks/) — уже с новым зафиксированным значением `offset`.

**Примечание**: идентификаторы конструкторов всех блоков, **возвращаемых сервером** внутри [updateGroupCallChainBlocks](/constructor/updateGroupCallChainBlocks/) — как пассивно, так и активно в ответ на [phone.getGroupCallChainBlocks](/method/phone.getGroupCallChainBlocks/), — **изменены**: к идентификатору конструктора прибавлена единица, например:

-   [e2e.chain.block](/constructor/e2e.chain.block/)`#639a3db6` превращается в `639a3db7`
-   [e2e.chain.groupBroadcastNonceCommit](/constructor/e2e.chain.groupBroadcastNonceCommit/)`#d1512ae7` превращается в `d1512ae8`
-   [e2e.chain.groupBroadcastNonceReveal](/constructor/e2e.chain.groupBroadcastNonceReveal/)`#83f4f9d8` превращается в `83f4f9d9`

Принимать блоки, полученные от сервера, следует **только** если их идентификатор соответствует увеличенному варианту (а именно: для основной подцепочки принимается только `639a3db7`, а для подцепочки верификации — `d1512ae8` и `83f4f9d9`).

При **отправке** блоков на сервер используются канонические идентификаторы конструкторов (`639a3db6`, `d1512ae7`, `83f4f9d8`).

Клиент обязан применять блоки основной цепочки и сообщения верификации только в том виде, в каком они пришли от сервера: это касается и блоков, и сообщений верификации, созданных самим клиентом, — применять следует только те из них, которые сервер вернул обратно.

#### Обработка обновлений

```
updateGroupCallChainBlocks#a477288f call:InputGroupCall sub_chain_id:int blocks:Vector<bytes> next_offset:int = Update;
```

[@term:pts] Блоки возвращаются сервером внутри обновлений [updateGroupCallChainBlocks](/constructor/updateGroupCallChainBlocks/), которые требуют дополнительной защиты от дублей — по высоте полученных блоков, по аналогии с [обычной логикой устранения дублей на основе `pts`](/api/updates/) (`pts` — счётчик состояния, по которому клиент определяет, не пропустил ли он обновления). Эта логика для таких обновлений тоже действует, просто применяется раньше, на общем этапе обработки, вместе со всеми остальными типами обновлений.

Поле [updateGroupCallChainBlocks](/constructor/updateGroupCallChainBlocks/).`next_offset` содержит высоту (она же смещение) — внутри [подцепочки](#subchains), заданной полем `sub_chain_id`, — того блока, который следует _после_ последнего блока в [updateGroupCallChainBlocks](/constructor/updateGroupCallChainBlocks/).`blocks`.

Высота (смещение) первого блока в [updateGroupCallChainBlocks](/constructor/updateGroupCallChainBlocks/).`blocks` равна `(next_offset - blocks.length) + 0`, высота второго — `(next_offset - blocks.length) + 1` и так далее, вплоть до `(next_offset - blocks.length) + (blocks.length - 1) == (next_offset - 1)` для последнего блока в `blocks`.

Хотя на практике высота (смещение) блока основной подцепочки совпадает со значением [e2e.chain.block](/constructor/e2e.chain.block/).`height`, смещение на уровне API не следует путать с высотой блока: в частности, клиент **не** должен пытаться перезаписать значение [e2e.chain.block](/constructor/e2e.chain.block/).`height` вычисленным смещением, а у блоков [e2e.chain.GroupBroadcast](/type/e2e.chain.GroupBroadcast/) из подцепочки верификации явного поля `height` вообще нет. Тем не менее клиент обязан сопоставить вычисленную высоту каждому блоку из `blocks`, чтобы отсеивать дубли, — но не меняя при этом содержимого блока, например через объект-обёртку `blockOffset{block: bytes, offset: int}` (или вовсе виртуально, обычным счётчиком при переборе `blocks`).

Клиент обязан отдельно хранить смещение последнего принятого блока плюс единицу для обеих подцепочек, то есть в переменной `int next_offset[2]` для каждой конференции.

Начальным значением `next_offset` при инициализации состояния конференции _до_ вызова [phone.createConferenceCall](/method/phone.createConferenceCall/)/[phone.joinGroupCall](/method/phone.joinGroupCall/) для входа в звонок **обязано** быть `{-1, -1}`.

Кроме того, клиент обязан хранить для каждой конференции логическую переменную `joined`, изначально равную `false`.

Если клиент покидает звонок или его из него исключают, всё локальное состояние блокчейна очищается, включая `next_offset` и `joined`.

Логика обработки [updateGroupCallChainBlocks](/constructor/updateGroupCallChainBlocks/) (запускаемая [системой обновлений](/api/updates/) как для пассивных обновлений, так и для обновлений, возвращённых любым методом) различается в зависимости от того, вошли мы в звонок или нет:

-   Если мы ещё не вошли в звонок полностью (`joined == false`):

    -   Если обновление [updateGroupCallChainBlocks](/constructor/updateGroupCallChainBlocks/) пришло в ответ на вызов метода создания или входа в звонок — [phone.createConferenceCall](/method/phone.createConferenceCall/)/[phone.joinGroupCall](/method/phone.joinGroupCall/):

        Для каждого отдельного блока в [updateGroupCallChainBlocks](/constructor/updateGroupCallChainBlocks/).`blocks`:

        -   Применить блок, игнорируя значение `block.offset`.

        Если проверка и применение прошли успешно для всех блоков, установить `next_offset[updateGroupCallChainBlocks.sub_chain_id] := updateGroupCallChainBlocks.next_offset`.

        Затем, если `next_offset[0] >= 0 && next_offset[1] >= 0`, установить `joined := true`.

    -   Иначе обновление полностью игнорируется.

        Эта логика означает, что, например, вызов [phone.getGroupCallChainBlocks](/method/phone.getGroupCallChainBlocks/)`{offset=-1}`, которым получают последний блок при входе в уже существующий звонок, **не** должен приводить к каким-либо изменениям локального состояния, а последний блок вызывающая сторона обязана извлечь вручную, чтобы построить блок с добавлением себя.

        Это также означает, что, например, пассивно пришедшие с опозданием обновления [updateGroupCallChainBlocks](/constructor/updateGroupCallChainBlocks/), относящиеся к покинутому звонку, в который мы пытаемся войти заново, будут проигнорированы, а не запустят логику восстановления пропусков, которая всё равно не сработает: как сказано выше, если клиент не является участником звонка, [phone.getGroupCallChainBlocks](/method/phone.getGroupCallChainBlocks/) вернёт **только** последний блок независимо от значений `offset` и `limit`, что очевидным образом ломает логику восстановления пропусков.

-   Иначе, если `joined == true`:

    Для каждого отдельного блока в [updateGroupCallChainBlocks](/constructor/updateGroupCallChainBlocks/).`blocks`:

    -   Если `next_offset == block.offset`, применить блок: если проверка и применение прошли успешно, сразу же установить `next_offset[updateGroupCallChainBlocks.sub_chain_id] := block.offset + 1`, прежде чем переходить к следующему блоку.

    -   Если `next_offset > block.offset`, блок уже был применён и его следует пропустить.

    -   Если `next_offset < block.offset`, в последовательности обновлений с блоками образовался пропуск, и обрабатывать его нужно так:

        -   Пропустить все оставшиеся блоки в этом обновлении, начиная с текущего включительно, а затем:

        -   Закрыть пропуск вызовом [phone.getGroupCallChainBlocks](/method/phone.getGroupCallChainBlocks/) с `offset=next_offset` и `limit=50` — иными словами, досрочно запустив цикл опроса через [phone.getGroupCallChainBlocks](/method/phone.getGroupCallChainBlocks/), описанный [выше](#subchains).

            Как уже сказано выше, если число блоков, возвращённых _любым_ вызовом [phone.getGroupCallChainBlocks](/method/phone.getGroupCallChainBlocks/), равно `limit`, [phone.getGroupCallChainBlocks](/method/phone.getGroupCallChainBlocks/) обязан быть вызван повторно сразу после обработки полученного [updateGroupCallChainBlocks](/constructor/updateGroupCallChainBlocks/) — с новым зафиксированным значением `offset` (обычно равным возвращённому `next_offset`), так что пропущенный блок всё равно будет обработан, когда клиент дойдёт до него в ходе восстановления пропусков.

        В качестве альтернативы, вместо того чтобы выбрасывать и заново загружать блоки, образовавшие пропуск, их можно складывать в очередь, а клиент может подождать 0,5 секунды и вызвать [phone.getGroupCallChainBlocks](/method/phone.getGroupCallChainBlocks/) только в том случае, если пропуск к тому моменту сохранится: обновление, закрывающее пропуск, вполне может прийти само чуть позже, с нарушением порядка.

        Какой бы подход ни был выбран, вызывать [phone.getGroupCallChainBlocks](/method/phone.getGroupCallChainBlocks/) для закрытия пропусков нужно с осторожностью: если пользователь покинет конференцию, пока пропуск закрывается, метод вернёт только последний блок, а не запрошенный диапазон, что может создать новый пропуск и рекурсивно запустить логику восстановления. Флаг `joined` обязан переводиться в `false`, когда пользователь покидает конференцию, но между `joined := false` и логикой опроса всё ещё возможна гонка, поэтому обязательно отключайте пробуждения цикла опроса, когда пользователь выходит из звонка.

        Для закрытия пропусков не следует вызывать [phone.getGroupCallChainBlocks](/method/phone.getGroupCallChainBlocks/) блокирующим образом внутри потока или актора, обрабатывающего обновления, — вместо этого достаточно запланировать досрочное пробуждение логики опроса, которая естественным образом выполнит метод в отдельном потоке или акторе (с описанным выше ограничением).

#### Сообщения внутри конференции

```
updateGroupCallEncryptedMessage#c957a766 call:InputGroupCall from_id:Peer encrypted_message:bytes = Update;

---functions---

phone.sendGroupCallEncryptedMessage#e5afa56d call:InputGroupCall encrypted_message:bytes = Bool;
```

Сообщения внутри конференции сериализуются в JSON и шифруются с помощью [процедуры шифрования пакетов](#packet-encryption).

Сервер лишь пересылает непрозрачный для него зашифрованный пакет, а отправителя передаёт отдельно, в поле [updateGroupCallEncryptedMessage](/constructor/updateGroupCallEncryptedMessage/).`from_id`.

Открытый текст сообщения — это JSON-объект следующей структуры:

```
{
    "_": "groupCallMessage",
    "random_id": "1234567890123456789",
    "message": {
        "_": "textWithEntities",
        "text": "Hello!",
        "entities": [
            {
                "_": "messageEntityBold",
                "offset": 0,
                "length": 5
            }
        ]
    }
}
```

-   `_` определяет сериализуемый объект или конструктор.

-   [@term:random_id] `random_id` — ненулевое случайное знаковое 64-битное целое (уникальный идентификатор сообщения, генерируемый самим клиентом), закодированное как десятичная строка JSON, чтобы не потерять точность; оно однозначно идентифицирует сообщения, отправленные **текущим пользователем** в этом чате, аналогично `random_id` в секретных чатах.

-   `message` — это JSON-представление конструктора [textWithEntities](/constructor/textWithEntities/).

-   Каждый элемент массива `entities` — это JSON-представление (с именем предиката в ключе `_`) **только** следующих поддерживаемых [типов сущностей оформления](/api/entities/):

    -   [messageEntityBold](/constructor/messageEntityBold/)
    -   [messageEntityItalic](/constructor/messageEntityItalic/)
    -   [messageEntityUnderline](/constructor/messageEntityUnderline/)
    -   [messageEntityStrike](/constructor/messageEntityStrike/)
    -   [messageEntitySpoiler](/constructor/messageEntitySpoiler/)
    -   [messageEntityCustomEmoji](/constructor/messageEntityCustomEmoji/) (поле `document_id` представляется строкой, как и `random_id`)

    Все остальные типы сущностей обязаны быть преобразованы в [messageEntityUnknown](/constructor/messageEntityUnknown/).

    Смещение и длина сущностей, как обычно, выражаются в [кодовых единицах UTF-16](/api/entities/#entity-length).

Это **не** сериализация API-конструктора [groupCallMessage](/constructor/groupCallMessage/): сообщения конференции не содержат назначаемых сервером полей `id`, `from_id`, `date`, `from_admin` и `paid_message_stars` — в них есть только сгенерированный клиентом `random_id` и само поле `message`.

Отправитель берётся из объемлющего обновления [updateGroupCallEncryptedMessage](/constructor/updateGroupCallEncryptedMessage/), а отображаемую дату формирует принимающий клиент.

Получатели обязаны проверять структуру JSON, отвергать некорректный текст и выходящие за границы сущности, а также игнорировать неподдерживаемые конструкторы сущностей.

##### Реакции внутри конференции

Конференц-звонки поддерживают те же анимированные реакции — стандартными и пользовательскими эмодзи, — что и групповые звонки других типов, однако полезная нагрузка реакции обязана быть сериализована и зашифрована сквозным шифрованием как сообщение внутри конференции.

Для реакции стандартным эмодзи запишите в `message.text` только выбранный доступный эмодзи реакции, а `message.entities` оставьте пустым:

```
{
    "_": "groupCallMessage",
    "random_id": "1234567890123456789",
    "message": {
        "_": "textWithEntities",
        "text": "",
        "entities": []
    }
}
```

Для реакции пользовательским эмодзи запишите в `message.text` запасной (fallback) эмодзи этого пользовательского эмодзи и добавьте ровно одну сущность `messageEntityCustomEmoji`, охватывающую весь текст:

```
{
    "_": "groupCallMessage",
    "random_id": "1234567890123456789",
    "message": {
        "_": "textWithEntities",
        "text": "",
        "entities": [
            {
                "_": "messageEntityCustomEmoji",
                "offset": 0,
                "length": 2,
                "document_id": "1234567890123456789"
            }
        ]
    }
}
```

Сериализуйте, зашифруйте и отправьте эту полезную нагрузку по обычной [схеме отправки сообщений внутри конференции](#encrypting-and-sending-a-message). Получателям следует распознавать поддерживаемую нагрузку, состоящую только из эмодзи, либо единственную сущность пользовательского эмодзи во весь текст как реакцию и воспроизводить её анимационный эффект вместо показа обычным текстом.

##### Шифрование и отправка сообщения

```
---functions---

phone.sendGroupCallEncryptedMessage#e5afa56d call:InputGroupCall encrypted_message:bytes = Bool;
```

Чтобы отправить сообщение внутри конференции:

1.  Сериализуйте сообщение так, как описано выше.
2.  Зашифруйте байты UTF-8 с помощью [шифрования пакетов](#packet-encryption), передав:
    -   в `payload` — байты сериализованного JSON;
    -   в `channel_id` — значение `0`;
    -   пустое `extra_data`;
    -   в `seqno` — следующий порядковый номер для канала `0`;
    -   все активные в данный момент эпохи шифрования и закрытый ключ конференции.
3.  Передайте полученный зашифрованный пакет целиком в поле [phone.sendGroupCallEncryptedMessage](/method/phone.sendGroupCallEncryptedMessage/).`encrypted_message`.

##### Приём и расшифровка сообщения

```
updateGroupCallEncryptedMessage#c957a766 call:InputGroupCall from_id:Peer encrypted_message:bytes = Update;
```

Входящие сообщения доставляются в обновлениях [updateGroupCallEncryptedMessage](/constructor/updateGroupCallEncryptedMessage/). Чтобы обработать такое обновление:

1.  Убедитесь, что `from_id` указывает на пользователя, и извлеките его идентификатор.
2.  Расшифруйте `encrypted_message` с помощью [процедуры расшифровки пакетов](#packet-encryption), передав извлечённый идентификатор пользователя-отправителя и ожидая идентификатор канала `0`, а также выполнив все обычные проверки.
3.  Разберите и проверьте расшифрованное JSON-сообщение в кодировке UTF-8.
4.  Прежде чем показывать сообщение, отсеките дубликаты по паре `(from_id, random_id)`.

#### Вопросы безопасности

-   Клиенты **обязаны** применять только те блоки, которые получены от сервера, — даже те, которые они предложили сами. Сервер следит за порядком блоков и не допускает форков.
-   Все участники обязаны убедиться, что видят одни и те же эмодзи-подтверждения, которые выводятся из состояния блокчейна по протоколу commit-reveal, описанному далее.
-   Если бы сервер доставлял разным участникам разные корректные блоки (форк), их хеши блокчейна, а следовательно, и эмодзи-подтверждения навсегда разошлись бы. Опора на сервер исключает это при штатной работе.

* * *

### Управление состоянием блокчейна

Отдельный блокчейн даёт распределённую, проверяемую и синхронизированную историю состояния группового звонка.

#### Структура блока

Блоки образуют цепочку, последовательно ссылаясь друг на друга и тем самым сохраняя историю. Структура определяется так:

```
e2e.chain.block#639a3db6 signature:int512 flags:# prev_block_hash:int256 changes:Vector<e2e.chain.Change> height:int state_proof:e2e.chain.StateProof signature_public_key:flags.0?int256 = e2e.chain.Block;
```

А именно:

-   `signature` — криптографическая подпись, подтверждающая подлинность блока; она вычисляется по TL-сериализации конструктора `e2e.chain.block`, в которой само поле `signature` обнулено.

-   `prev_block_hash` — хеш SHA256 полной TL-сериализации предыдущего блока `e2e.chain.block`; именно он образует связь в цепочке.

-   `changes` — список изменений состояния, вносимых этим блоком.

    Блок обязан содержать _хотя бы_ `ChangeSetGroupState` или `ChangeSetValue`.  
    Блок, содержащий только `ChangeNoop` или только `ChangeSetSharedKey`, недопустим.

    Полный перечень доступных типов изменений и порядок их применения смотрите [здесь »](#change-types-for-group-calls).

-   `height` — порядковый номер блока в цепочке.

-   `state_proof` — криптографическое доказательство состояния блокчейна _после_ применения этого блока; оно включает хеш состояния хранилища «ключ — значение», а также, в зависимости от содержимого блока, состояние группы и состояние общего ключа.

    Более подробное описание этого поля смотрите [здесь »](#local-blockchain-state).

-   `signature_public_key` — открытый ключ участника, который создал и подписал блок. **Примечание**: в целях оптимизации `signature_public_key` можно опустить, если он совпадает с ключом первого участника в состоянии группы (исключение — блок с высотой `0`, где это поле **обязано** присутствовать всегда).

#### Участники и разрешения

```
e2e.chain.groupState#1ddc7584 participants:Vector<e2e.chain.GroupParticipant> external_permissions:int = e2e.chain.GroupState;
e2e.chain.groupParticipant#28852f20 user_id:long public_key:int256 flags:# add_users:flags.0?true remove_users:flags.1?true set_value:flags.2?true version:int = e2e.chain.GroupParticipant;
```

Участники описываются полем [e2e.chain.groupState](/constructor/e2e.chain.groupState/).`participants` внутри [локального состояния](#local-blockchain-state) и [входящих блоков](#block-structure), а идентифицируются по `user_id` или `public_key`.

Каждый участник представлен объектом [e2e.chain.groupParticipant](/constructor/e2e.chain.groupParticipant/), который содержит следующие поля:

-   `user_id` — идентификатор пользователя Telegram, принадлежащий участнику
-   `public_key` — открытый ключ участника
-   `version` — максимальная [версия протокола сквозных групповых звонков »](#versioning), поддерживаемая этим участником.
-   `add_users` — если флаг установлен, пользователь имеет разрешение добавлять новых участников.
-   `remove_users` — если флаг установлен, пользователь имеет разрешение удалять существующих участников.
-   `set_value` — если флаг установлен, пользователь имеет разрешение изменять дерево «ключ — значение».

> **Примечание:** ради удобства пользователей сейчас любой человек может войти в звонок с разрешения сервера, без явного подтверждения со стороны уже присутствующих участников. Хотя блокчейн поддерживает режим явного подтверждения, мы пока используем поле [e2e.chain.groupState](/constructor/e2e.chain.groupState/).`external_permissions` в состоянии блокчейна, чтобы разрешить самостоятельное добавление в группу.

Поле [e2e.chain.groupState](/constructor/e2e.chain.groupState/).`external_permissions` применяется, когда клиенту нужно получить разрешения для пользователя, которого нет в векторе `participants` текущего (то есть до применения блока) состояния [e2e.chain.groupState](/constructor/e2e.chain.groupState/).

Поле [e2e.chain.groupState](/constructor/e2e.chain.groupState/).`external_permissions` может содержать ровно те же битовые флаги, что и [e2e.chain.groupParticipant](/constructor/e2e.chain.groupParticipant/).`flags` (add\_users, remove\_users, set\_value).

Поле [e2e.chain.groupState](/constructor/e2e.chain.groupState/).`external_permissions` используется **только** при применении изменений типа `ChangeSetGroupState`.

#### Типы изменений для групповых звонков

```
e2e.chain.block#639a3db6 signature:int512 flags:# prev_block_hash:int256 changes:Vector<e2e.chain.Change> height:int state_proof:e2e.chain.StateProof signature_public_key:flags.0?int256 = e2e.chain.Block;

e2e.chain.changeSetGroupState#2cf17146 group_state:e2e.chain.GroupState = e2e.chain.Change;
e2e.chain.changeSetSharedKey#987a2158 shared_key:e2e.chain.SharedKey = e2e.chain.Change;
e2e.chain.changeSetValue#7c4f9bfa key:bytes value:bytes = e2e.chain.Change;
e2e.chain.changeNoop#deb4a41b nonce:int256 = e2e.chain.Change;
```

Блоки содержат изменения, которые модифицируют состояние блокчейна.

Блок обязан содержать _хотя бы_ `ChangeSetGroupState` или `ChangeSetValue`.  
Блок, содержащий только `ChangeNoop` или только `ChangeSetSharedKey`, недопустим.

Чтобы применить изменения, следуйте этим указаниям:

1.  **ChangeSetGroupState**: изменяет список участников и их разрешения. Это действие _очищает_ текущий общий ключ, из-за чего **в том же блоке** обязан следовать `ChangeSetSharedKey`.

    ```
    e2e.chain.groupParticipant#28852f20 user_id:long public_key:int256 flags:# add_users:flags.0?true remove_users:flags.1?true set_value:flags.2?true version:int = e2e.chain.GroupParticipant;
    e2e.chain.groupState#1ddc7584 participants:Vector<e2e.chain.GroupParticipant> external_permissions:int = e2e.chain.GroupState;
    e2e.chain.changeSetGroupState#2cf17146 group_state:e2e.chain.GroupState = e2e.chain.Change;
    ```

    Начальное локальное значение `group_state` на условной высоте `height=-1`, которое используется **только** при применении первого блока цепочки с `height=0`, обязано быть равно:

    -   `local_group_state=e2e.chain.GroupState{participants: [], external_permissions: add_users | remove_users | set_value}`

    Чтобы применить входящее изменение этого типа, выполните следующие шаги:

    -   Инициализируйте `local_group_state` локально сохранённым значением `e2e.chain.GroupState` — тем, которое было до применения этого изменения.

    -   Инициализируйте `incoming_group_state` входящим значением `e2e.chain.GroupState`.

    -   Инициализируйте `local_permissions` разрешениями автора блока: найдите его в `local_group_state.participants` по полю `signature_public_key` блока; если для этого открытого ключа подходящей записи нет, используйте `local_group_state.external_permissions`.

    -   Проверьте, что `incoming_group_state.external_permissions` в точности равно `add_users | remove_users | set_value` либо является подмножеством этого набора (неизвестные флаги недопустимы).

    -   Проверьте, что `incoming_group_state.external_permissions` равно `local_group_state.external_permissions` или является его строгим подмножеством, то есть `(incoming_group_state->external_permissions & ~local_group_state->external_permissions) == 0`.  
        Иначе говоря, по сравнению с предыдущим состоянием набор `external_permissions` нельзя расширить, но можно сузить.

    -   Проверьте, что все значения `user_id` в `incoming_group_state.participants` уникальны.

    -   Проверьте, что все значения `public_key` в `incoming_group_state.participants` уникальны.

    -   Проверьте `incoming_group_state.participants`: учтите, что в этом контексте каждый участник однозначно определяется **сразу двумя** полями — `user_id` **и** `public_key` (то есть постройте новый составной идентификатор, склеив двоичные представления `user_id` и `public_key`); именно он используется при сравнении участников в локальном и входящем списках.

        -   Проверьте, что поле `flags` у всех участников из `incoming_group_state.participants` в точности равно `add_users | remove_users | set_value` либо является подмножеством этого набора (неизвестные флаги недопустимы).
        -   Если хотя бы один участник, присутствующий в `local_group_state.participants`, **отсутствует** в `incoming_group_state.participants`, проверьте, что `local_permissions` содержит `remove_users` (чтобы удалять пользователей, подписавший блок обязан иметь разрешение `remove_users`).
        -   Для всех участников, которые есть в `incoming_group_state.participants`, но **отсутствуют** в `local_group_state.participants`:
            -   Проверьте, что `local_permissions` содержит `add_users` (чтобы добавлять пользователей, подписавший блок обязан иметь разрешение `add_users`; для блоков самостоятельного добавления достаточно, чтобы `add_users` присутствовал в `local_group_state.external_permissions`).
            -   Проверьте, что `incoming_participant.flags` равно `local_permissions` или является его подмножеством (у только что добавленного пользователя не может быть больше разрешений, чем у того, кто его добавил, а для блоков самостоятельного добавления — больше, чем в `local_group_state.external_permissions`).
        -   Для всех участников, присутствующих **одновременно** в `incoming_group_state.participants` **и** в `local_group_state.participants`, у которых локальное поле `flags` отличается от входящего:
            -   Проверьте, что `local_permissions` содержит **и** `add_users`, **и** `remove_users` (чтобы менять чужие или собственные разрешения, подписавший блок обязан иметь оба разрешения — `add_users` и `remove_users`).
            -   Проверьте, что `incoming_participant.flags` равно `local_permissions` или является его подмножеством (подписавший блок не может выдать биты разрешений, которых у него самого сейчас нет).
    -   Если все эти проверки пройдены, примените изменение так:

        -   Обновите локальное состояние группы: `local_group_state = incoming_group_state`.
        -   Очистите состояние общего ключа: `local_shared_key = *empty*`. Новый ключ **обязан** быть установлен последующим `ChangeSetSharedKey` в том же блоке.

    Учтите, что эти обновления состояния (как и все прочие обновления состояния, вызванные изменениями любых типов) **обязаны** быть откачены, если хотя бы одно из изменений текущего блока не проходит проверку.

    Одна из причин, по которой все изменения нужно применять к локальному состоянию ещё до того, как обработан весь блок (а при ошибке откатывать), состоит в том, что `ChangeSetSharedKey`, который **обязан** следовать за `ChangeSetGroupState`, рассчитывает на то, что пользователь уже присутствует в локальном списке участников.

2.  **ChangeSetSharedKey**: устанавливает новый общий ключ шифрования, зашифрованный отдельно для каждого перечисленного участника.

    ```
    e2e.chain.sharedKey#8a847e7f ek:int256 encrypted_shared_key:string dest_user_id:Vector<long> dest_header:Vector<bytes> = e2e.chain.SharedKey;
    e2e.chain.changeSetSharedKey#987a2158 shared_key:e2e.chain.SharedKey = e2e.chain.Change;
    ```

    Чтобы применить входящее изменение этого типа, выполните следующие шаги:

    -   Проверьте, что локальное состояние **не** содержит общего ключа шифрования (иными словами, применяйте изменение только в том случае, если звонок был только что инициализирован либо ключ был очищен предыдущим `ChangeSetGroupState`).
    -   Инициализируйте `local_group_state` локально сохранённым значением `e2e.chain.GroupState` — тем, которое было до применения этого изменения.
    -   Инициализируйте `local_permissions` разрешениями автора блока: найдите его в `local_group_state.participants` по полю `signature_public_key` блока; если для этого открытого ключа подходящей записи нет, прервите проверку — **не** используйте в качестве запасного варианта `local_group_state.external_permissions`.
    -   Проверьте, что `local_permissions` содержит `add_users` и/или `remove_users`.
    -   Проверьте, что `dest_user_id` и `dest_header` содержат одинаковое количество элементов.
    -   Проверьте, что `dest_user_id` не содержит повторяющихся идентификаторов пользователей.
    -   Проверьте, что `dest_user_id` содержит ровно одну запись для каждого участника из `local_group_state.participants`, в любом порядке.
    -   Если все эти проверки пройдены, примените изменение, [сгенерировав и обновив »](#shared-key-encryption) локальный общий ключ.
3.  **ChangeSetValue**: обновляет дерево «ключ — значение».

    ```
    e2e.chain.changeSetValue#7c4f9bfa key:bytes value:bytes = e2e.chain.Change;
    ```

    [@term:kv_hash] Клиенты, не реализующие дерево «ключ — значение», всё равно обязаны хранить последнее принятое значение `kv_hash` (хеш состояния этого дерева) и обрабатывать обновления цепочки следующим образом:

    -   Для обычных блоков группового звонка, не содержащих [e2e.chain.changeSetValue](/constructor/e2e.chain.changeSetValue/), значение `incoming.state_proof.kv_hash` обязано совпадать с локально сохранённым.
    -   Если получен блок, содержащий [e2e.chain.changeSetValue](/constructor/e2e.chain.changeSetValue/), игнорируйте содержимое `key` и `value` и просто примите `incoming.state_proof.kv_hash` (из содержащего блока), сохранив это значение как новое локальное `kv_hash`, — но только если автор блока имеет разрешение `set_value`.
4.  **ChangeNoop**: пустое изменение, которое может использоваться для рандомизации хеша.

    ```
    e2e.chain.changeNoop#deb4a41b nonce:int256 = e2e.chain.Change;
    ```

#### Локальное состояние блокчейна

```
e2e.chain.block#639a3db6 signature:int512 flags:# prev_block_hash:int256 changes:Vector<e2e.chain.Change> height:int state_proof:e2e.chain.StateProof signature_public_key:flags.0?int256 = e2e.chain.Block;

e2e.chain.stateProof#d6b679e6 flags:# kv_hash:int256 group_state:flags.0?e2e.chain.GroupState shared_key:flags.1?e2e.chain.SharedKey = e2e.chain.StateProof;

e2e.chain.groupState#1ddc7584 participants:Vector<e2e.chain.GroupParticipant> external_permissions:int = e2e.chain.GroupState;
e2e.chain.groupParticipant#28852f20 user_id:long public_key:int256 flags:# add_users:flags.0?true remove_users:flags.1?true set_value:flags.2?true version:int = e2e.chain.GroupParticipant;

e2e.chain.sharedKey#8a847e7f ek:int256 encrypted_shared_key:string dest_user_id:Vector<long> dest_header:Vector<bytes> = e2e.chain.SharedKey;
```

Состояния блокчейна обязаны храниться локально и используются для проверки входящих блоков.

Состояние конкретной цепочки складывается из следующих полей:

-   `current_height` — **высота последнего блока**: текущая высота блокчейна (равна высоте последнего применённого блока)
-   `current_hash` — **хеш последнего блока**: хеш последнего применённого блока
-   `shared_key` — **общий ключ**: общий групповой ключ, зашифрованный для каждого участника группы.
-   `group_state` — **состояние группы**: список участников группы и их разрешений.
-   `kv_hash` — **хеш хранилища «ключ — значение»**: корневой хеш дерева «ключ — значение» после применения блока. Полный формат этого дерева намеренно вынесен за рамки статьи, поскольку сейчас дерево «ключ — значение» нигде не используется. Тем не менее `kv_hash` по-прежнему частично задействован при проверке блоков, как описано ниже.

Клиент обязан хранить все эти поля локально и использовать их для проверки изменений при применении блоков: если блок применён успешно, поля обязаны быть обновлены в соответствии с содержащимися в блоке изменениями.

Применение входящих блоков, в которых `group_state` и (или) `shared_key` не заданы согласно правилам пропуска полей, [приведённым ниже](#block-application-process), НЕ должно удалять эти поля из локального состояния.

Начальные локальные значения этих полей на условной высоте `height=-1` — они используются только при применении первого блока блокчейна с `height=0` — обязаны быть такими:

-   `current_height=-1`
-   `current_hash=0`
-   `shared_key=*empty*`
-   `group_state=e2e.chain.GroupState{participants: [], external_permissions: add_users | remove_users | set_value}`
-   `kv_hash=0`

#### Процесс применения блока

```
e2e.chain.block#639a3db6 signature:int512 flags:# prev_block_hash:int256 changes:Vector<e2e.chain.Change> height:int state_proof:e2e.chain.StateProof signature_public_key:flags.0?int256 = e2e.chain.Block;
```

Блоки обязаны применяться атомарно (либо применяются все изменения, либо ни одного) и последовательно.

Процедура проверки анализирует входящие блоки, опираясь на текущее локальное значение [локального состояния блокчейна »](#local-blockchain-state) и изменяя его.

1.  **Проверка высоты:** поле `height` блока обязано быть в точности равно `local.current_height + 1`. Иначе блок недействителен. Применить блок с высотой больше `2^31-1` в настоящий момент невозможно.
2.  **Проверка предыдущего хеша:** поле `prev_block_hash` блока обязано совпадать с хешем последнего применённого блока (`local.current_hash`). Иначе блок недействителен.
3.  **Определение подписавшего**: если поле `signature_public_key` заполнено, используйте его, иначе:
    -   если `height` блока равна `0`, прервите обработку (у первого блока `signature_public_key` **обязан** присутствовать);
    -   в противном случае используйте `local.group_state.participants[0].public_key`.
4.  **Проверка разрешений (первичная):** определите разрешения создателя блока (он идентифицируется по `signature_public_key`, полученному на предыдущем шаге). Разрешения берутся из состояния _предыдущего_ блока либо из `external_permissions`, если создатель ещё не был участником.
5.  **Проверка подписи:** проверьте поле `signature` блока с помощью открытого ключа создателя блока. Если подпись неверна, блок отклоняется.
6.  **Последовательное применение изменений:** пройдите по вектору `changes`:
    -   Убедитесь, что у создателя достаточно разрешений для конкретного изменения, используя его _текущие_ разрешения (они могли быть обновлены предыдущим изменением _внутри того же блока_). Если разрешений недостаточно, весь блок недействителен.
    -   Примените изменение к состоянию [так, как указано выше »](#change-types-for-group-calls). Если само изменение сформировано неверно или недопустимо (например, некорректные данные участника), весь блок недействителен.
7.  **Проверка доказательства состояния:** после применения всех изменений убедитесь, что получившееся состояние соответствует сведениям из поля `state_proof` блока. Иначе блок недействителен.

Если блок недействителен, все внесённые им изменения локального состояния обязаны быть откачены (либо процедура применения блока может работать с копией локального состояния, которая изменяется при переборе изменений и применяется, только если блок прошёл проверку целиком).

Блокчейн начинается с условного «генезис»-блока на высоте `height: -1` с хешем `UInt256(0)` (полное локальное состояние блокчейна на высоте `-1` описано [здесь »](#local-blockchain-state)).

#### Версионирование

```
e2e.chain.groupParticipant#28852f20 user_id:long public_key:int256 flags:# add_users:flags.0?true remove_users:flags.1?true set_value:flags.2?true version:int = e2e.chain.GroupParticipant;
```

Протокол сквозного шифрования групповых звонков, описанный в этой статье, может измениться в будущем: чтобы сохранить обратную совместимость с клиентами, которые ещё не поддерживают более новые протоколы, каждый участник обязан объявлять максимальную поддерживаемую им версию в поле `version` конструктора [e2e.chain.groupParticipant](/constructor/e2e.chain.groupParticipant/).

Версия протокола, используемая при формировании и применении блоков, обязана быть равна наименьшему значению `version` из списка участников, ограниченному отрезком `0...255` включительно.

История изменений протокола:

-   Версия `0`: первоначальная версия.
-   Версия `1`: общий групповой ключ теперь **обязан** перед использованием хешироваться как `HMAC-SHA512(raw_group_shared_key, block_hash)[0:32]` (шаг 5 в разделе [шифрование общего ключа »](#shared-key-encryption)).

#### Замечания по реализации

-   **Сериализация:** блоки и их содержимое сериализуются стандартными средствами сериализации Telegram TL перед подписанием или хешированием.
-   **Параллелизм:** если для одной и той же высоты `height` одновременно созданы несколько корректных блоков, добавлен будет только тот, который успешно применён первым. Последующие блоки для этой высоты будут отвергнуты участниками из-за несовпадения высоты, что предотвращает форки и обеспечивает линейную историю.
-   **Проверка:** клиенты **обязаны** применять только те блоки, которые получены от сервера (даже блоки, созданные ими самими). Сервер выполняет проверку и упорядочивание, предотвращая форки и обеспечивая согласованность. Клиентам следует повторять отправку созданных блоков и широковещательных сообщений, пока сервер не подтвердит их приём (успехом или ошибкой).

* * *

### Протокол шифрования

Приведённый ниже протокол шифрует данные звонка (аудио- и видеокадры) и обеспечивает безопасное управление общими ключами.

#### Базовые примитивы

[@term:KDF] Шифрование опирается на перечисленные ниже примитивные функции, схожие с теми, что применяются в MTProto 2.0. Учтите, что во всём этом документе под **KDF** (функция выработки ключа, key derivation function) понимается **HMAC-SHA512**.

-   **encrypt\_data(payload, secret, extra\_data)**

[<img src="https://core.telegram.org/file/400780400121/3/4i8vpkfDb-Q.209706.png/5b7f9e14d6c811fd9c" alt="Шифрование данных" class="dev_page_image" style="max-width: 600px;">](https://core.telegram.org/file/400780400121/3/4i8vpkfDb-Q.209706.png/5b7f9e14d6c811fd9c)

> Шифрует `payload` с помощью `secret`. Значение `extra_data` войдёт в состав MAC. Значение `large_msg_id` будет позже использовано для подписи пакета.

```
padding_size = 16 + 15 - (payload.size + 15) % 16
padding = random_bytes(padding_size)
padding[0] = padding_size
padded_data = padding || payload
large_secret = KDF(secret, "tde2e_encrypt_data")
encrypt_secret = large_secret[0:32]
hmac_secret = large_secret[32:64]
large_msg_id = HMAC-SHA256(hmac_secret, padded_data || extra_data || len(extra_data))
msg_id = large_msg_id[0:16]
(aes_key, aes_iv) = HMAC-SHA512(encrypt_secret, msg_id)[0:48]
encrypted = aes_cbc(aes_key, aes_iv, padded_data)
Result: (msg_id || encrypted), large_msg_id
```

-   **encrypt\_header(header, encrypted\_msg, secret)**

[<img src="https://core.telegram.org/file/400780400206/1/iqlwkozJe4g.139107.png/e98f3020c133d4b503" alt="Шифрование заголовка" class="dev_page_image" style="max-width: 600px;">](https://core.telegram.org/file/400780400206/1/iqlwkozJe4g.139107.png/e98f3020c133d4b503)

> Шифрует 32-байтовый `header`, используя контекст из `encrypted_msg` и `secret`.

```
msg_id = encrypted_msg[0:16]
encrypt_secret = KDF(secret, "tde2e_encrypt_header")[0:32]
(aes_key, aes_iv) = HMAC-SHA512(encrypt_secret, msg_id)[0:48]
encrypted_header = aes_cbc(aes_key, aes_iv, header)
```

**Безопасность:**

-   Процедуры расшифровки **обязаны** заново вычислить и проверить `msg_id`, прежде чем обрабатывать расшифрованные данные.
-   Защита от повторного воспроизведения обеспечивается на уровне пакета с помощью `seqno`.

#### Шифрование пакетов

Пакеты с аудио, видео и сообщениями внутри конференции шифруются следующим образом:

-   **encrypt\_packet(payload, extra\_data, active\_epochs, user\_id, channel\_id, seqno, private\_key)**

[<img src="https://core.telegram.org/file/400780400411/2/SNTNBubSRE4.286743.png/191c0cd208afb9921f" alt="Шифрование пакета" class="dev_page_image" style="max-width: 600px;">](https://core.telegram.org/file/400780400411/2/SNTNBubSRE4.286743.png/191c0cd208afb9921f)

> Шифрует `payload` для передачи, связывая его с активными эпохами блокчейна. Эпохи — это, по сути, блоки, чьи общие ключи в данный момент используются для шифрования.

1.  **Сформируйте заголовок A (список эпох):**

    -   `epoch_id[i] = active_epochs[i].block_hash` (по 32 байта на каждый epoch\_id)
    -   `header_a = active_epochs.size (4 байта) || epoch_id[0] || epoch_id[1] || ...`
2.  **Зашифруйте данные одноразовым ключом:**

    -   `one_time_key = random(32)`
    -   `packet_payload = channel_id (4 байта) || seqno (4 байта) || payload`
    -   `inner_extra_data = magic1 || header_a || extra_data`
    -   `encrypted_payload, large_msg_id = encrypt_data(packet_payload, one_time_key, inner_extra_data)`
3.  **Сформируйте подпись**

    -   `signature = sign(magic2 || large_msg_id, private_key)`
4.  **Сформируйте заголовок B (зашифрованные одноразовые ключи):**

    -   Для каждого `i` из `active_epochs`:
        -   `encrypted_key[i] = encrypt_header(one_time_key, encrypted_payload, active_epochs[i].shared_key)`
    -   `header_b = encrypted_key[0] || encrypted_key[1] || ...`
5.  **Итоговый пакет:** `extra_data || header_a || header_b || encrypted_payload || signature || extra_data_size`.

Итоговое значение `unencrypted_prefix_size` — это 4-байтовое целое в порядке little-endian, записанное в конце пакета. При расшифровке получатель сначала отбрасывает этот хвост, отделяет незашифрованный префикс, разбирает `header_a` и `header_b`, а затем перебирает объявленные эпохи, пока одна из них не позволит успешно расшифровать одноразовый ключ.

`magic1` — это CRC32-магия конструктора (часть после `#`) для [e2e.callPacket](/constructor/e2e.callPacket/).

`magic2` — это CRC32-магия конструктора (часть после `#`) для [e2e.callPacketLargeMsgId](/constructor/e2e.callPacketLargeMsgId/).

#### Вопросы безопасности

-   **Защита от повторного воспроизведения:** значение `seqno` обязано быть уникальным и монотонно возрастающим для каждой пары `(открытый ключ, channel_id)`. При переполнении клиент обязан покинуть звонок. Получатели обязаны отслеживать недавно полученные значения `seqno` и отбрасывать пакеты со старыми или повторяющимися номерами.
-   **Проверка подписи:** при расшифровке получатель обязан по `user_id` (переданному по отдельному каналу) найти открытый ключ отправителя `public_key` в соответствующем состоянии блокчейна (эпоха указана в `header_a`). Подпись хранится в виде 64 байт, идущих сразу за `encrypted_payload`; этим открытым ключом её проверяют против `magic2 || large_msg_id`, предварительно заново вычислив `large_msg_id` в ходе расшифровки данных.
-   **Уникальные закрытые ключи:** клиенты **обязаны** использовать новый уникальный закрытый ключ при каждом своём добавлении в блокчейн. Иначе становятся возможны атаки повторного воспроизведения.

#### Шифрование общего ключа

Когда в блокчейне происходит операция `ChangeSetSharedKey`, новый материал общего ключа распространяется защищённым образом по следующей схеме:

1.  **Сформируйте новый материал:**

    -   `raw_group_shared_key = random(32 байта)` (собственно общий ключ для шифрования данных).
    -   `one_time_secret = random(32 байта)` (временный секрет для шифрования _raw\_group\_shared\_key_).
    -   `e_private_key, e_public_key = generate_private_key()` (эфемерная пара ключей, по которой вырабатывается секрет для каждого участника — _one\_time\_secret_)
2.  **Зашифруйте общий ключ группы:**

    -   `encrypted_group_shared_key = encrypt_data(raw_group_shared_key, one_time_secret)`
3.  **Зашифруйте `one_time_secret` для каждого участника:**

    -   Для каждого `participant` в текущем состоянии группы:
        -   `shared_secret = compute_shared_secret(e_private_key, participant.public_key)`
        -   `encrypted_header = encrypt_header(one_time_secret, encrypted_group_shared_key, shared_secret)`
4.  **Запишите в блокчейн:** значение `e_public_key`, значение `encrypted_group_shared_key` и список `encrypted_header` (по одному на участника) сохраняются в состоянии блокчейна.

5.  **Сформируйте настоящий общий ключ, применяемый для шифрования пакетов:** (только для [версии протокола >= 1](#versioning))

    -   `block_hash` — это хеш блока, в котором задан этот общий ключ.
    -   `group_shared_key` = `HMAC-SHA512(raw_group_shared_key, block_hash)[0:32]`

Каждый принятый блок основной цепочки открывает новую эпоху шифрования, которая обозначается хешем этого блока. Старые эпохи остаются пригодными к использованию ещё некоторое короткое время, чтобы можно было расшифровать пакеты, находящиеся в пути; на данный момент tdlib хранит старые эпохи около 10 секунд и ограничивает список активных эпох пятнадцатью.

#### Вопросы безопасности

-   Успешная расшифровка гарантируется не всем участникам (например, у кого-то может оказаться устаревшее приложение или испорченное состояние).
-   Тем не менее все участники, которые _способны_ успешно расшифровать материал ключа (проделав в обратном порядке шаги `encrypt_header` и `encrypt_data` с помощью своего закрытого ключа и эфемерного открытого ключа), получат один и тот же `group_shared_key`.
-   Участники, которым расшифровать ключ не удалось, **обязаны** немедленно выйти из звонка и, в частности, не должны участвовать в процессе генерации эмодзи.

* * *

### Проверка ключей и формирование эмодзи

Чтобы убедиться, что участники общаются защищённо и без атаки «человек посередине» (Man-in-the-Middle, MitM), а также исключить подтасовку кодов подтверждения, эмодзи формируются по протоколу «фиксация — раскрытие» (commit-reveal) на основе состояния блокчейна и общей случайности.

#### Как работает протокол «фиксация — раскрытие»

Протокол выполняется для каждого вновь принятого блока основной цепочки. Выбранный блок обозначается парой `(chain_height, chain_hash)` — соответственно высотой и хешем этого блока.

1.  **Первоначальная подготовка (для каждого участника):**

    -   Сгенерируйте криптографически стойкое случайное 32-байтовое **одноразовое значение** (`nonce`).
    -   Вычислите `nonce_hash = SHA256(nonce)`.
2.  **Фаза фиксации:**

    -   Каждый участник рассылает свои `nonce_hash`, `chain_height` и `chain_hash` вместе с подписью.
    -   Используйте структуру [e2e.chain.groupBroadcastNonceCommit](/constructor/e2e.chain.groupBroadcastNonceCommit/).
    -   Система (координируемая через сервер) ждёт, пока фиксации не будут получены от _всех_ ожидаемых участников (их состав определяется по состоянию блокчейна на указанной высоте).
3.  **Фаза раскрытия:**

    -   Как только собраны все фиксации, каждый участник рассылает своё исходное значение `nonce`, снова вместе с подписью.
    -   Используйте структуру [e2e.chain.groupBroadcastNonceReveal](/constructor/e2e.chain.groupBroadcastNonceReveal/).
    -   Система проверяет каждое раскрытое значение `nonce`, сверяя равенство `SHA256(revealed_nonce) == committed_nonce_hash`.
    -   Система ждёт, пока не будут раскрыты все корректные одноразовые значения.
4.  **Формирование итогового хеша:**

    -   Соедините все успешно раскрытые 32-байтовые значения `nonce` в сыром виде, отсортировав их в лексикографическом порядке байтов. Обозначим результат как `concatenated_sorted_nonces`.
    -   Возьмите `blockchain_hash` — хеш последнего блока, для которого выполняется проверка.
    -   Вычислите `emoji_hash = HMAC-SHA512(key=concatenated_sorted_nonces, message=blockchain_hash)`.
    -   Возьмите первые 32 байта значения `emoji_hash`, оставшиеся 32 байта отбросьте.
    -   Преобразуйте полученное `emoji_hash_sliced` в отпечаток из четырёх эмодзи, как описано ниже.

#### Формирование отпечатка из эмодзи

32-байтовая двоичная строка (`emoji_hash_sliced` для групповых звонков и `SHA256(key || g_a)` для [звонков один на один](/api/end-to-end/video-calls/)) преобразуется в упорядоченный отпечаток из четырёх эмодзи следующим образом:

1.  Разбейте эти байты на 4 идущих подряд 8-байтовых блока.
2.  Обнулите старший бит первого байта каждого блока.
3.  Прочитайте каждый блок как беззнаковое 64-битное целое в порядке big-endian.
4.  Возьмите каждое целое по модулю длины фиксированной упорядоченной таблицы эмодзи, которую используют клиенты Telegram для отпечатков (в ней 333 элемента).
5.  Используйте 4 полученных значения как индексы в таблице эмодзи, сохраняя их порядок.

В псевдокоде:

```
fingerprint_hash = emoji_hash[0:32]

for i in 0..3:
    offset = i * 8
    value = big_endian_uint64(fingerprint_hash[offset:offset + 8])
    value &= 0x7fffffffffffffff
    fingerprint[i] = emoji_table[value % emoji_table.length]

// fingerprint now contains the 4 emojis
```

Точное содержимое таблицы эмодзи (333 эмодзи) смотрите [здесь »](https://github.com/DrKLO/Telegram/blob/d62d2ed5ec2e1c565f771edce40f8340ab085a9b/TMessagesProj/src/main/java/org/telegram/messenger/voip/EncryptionKeyEmojifier.java#L8).

#### TL-схема рассылаемых сообщений

```
// Phase 1: Commit
e2e.chain.groupBroadcastNonceCommit#d1512ae7 signature:int512 user_id:int64 chain_height:int32 chain_hash:int256 nonce_hash:int256 = e2e.chain.GroupBroadcast;

// Phase 2: Reveal
e2e.chain.groupBroadcastNonceReveal#83f4f9d8 signature:int512 user_id:int64 chain_height:int32 chain_hash:int256 nonce:int256 = e2e.chain.GroupBroadcast;
```

Значение `public_key` извлекается из объекта [e2e.chain.groupParticipant](/constructor/e2e.chain.groupParticipant/), принадлежащего пользователю, — он находится по `user_id`.

В обоих случаях `signature` вычисляется по TL-сериализации объекта, в которой само поле подписи обнулено.

#### Вопросы безопасности

-   Итоговое значение `emoji_hash` невозможно предсказать ни одному участнику в отдельности _до_ фазы раскрытия, поскольку оно зависит от случайных одноразовых значений всех остальных.
-   Участникам следует обрабатывать только те рассылаемые сообщения (фиксации и раскрытия), которые получены от сервера. Эмодзи следует показывать лишь после того, как процедура успешно завершится для всех участников (с поправкой на разумные сетевые задержки).
-   Двухфазный протокол не позволяет ни одному участнику — даже тому, кто управляет созданием блоков, — раскрывать своё одноразовое значение избирательно или перебирать разные значения, подстраивая итоговый набор эмодзи под уже раскрытые значения других.

* * *

### Полная TL-схема

```
e2e.chain.groupBroadcastNonceCommit#d1512ae7 signature:int512 user_id:int64 chain_height:int32 chain_hash:int256 nonce_hash:int256 = e2e.chain.GroupBroadcast;
e2e.chain.groupBroadcastNonceReveal#83f4f9d8 signature:int512 user_id:int64 chain_height:int32 chain_hash:int256 nonce:int256 = e2e.chain.GroupBroadcast;

e2e.chain.groupParticipant#28852f20 user_id:long public_key:int256 flags:# add_users:flags.0?true remove_users:flags.1?true set_value:flags.2?true version:int = e2e.chain.GroupParticipant;

e2e.chain.groupState#1ddc7584 participants:Vector<e2e.chain.GroupParticipant> external_permissions:int = e2e.chain.GroupState;

e2e.chain.sharedKey#8a847e7f ek:int256 encrypted_shared_key:string dest_user_id:Vector<long> dest_header:Vector<bytes> = e2e.chain.SharedKey;

e2e.chain.changeNoop#deb4a41b nonce:int256 = e2e.chain.Change;
e2e.chain.changeSetValue#7c4f9bfa key:bytes value:bytes = e2e.chain.Change;
e2e.chain.changeSetGroupState#2cf17146 group_state:e2e.chain.GroupState = e2e.chain.Change;
e2e.chain.changeSetSharedKey#987a2158 shared_key:e2e.chain.SharedKey = e2e.chain.Change;

e2e.chain.stateProof#d6b679e6 flags:# kv_hash:int256 group_state:flags.0?e2e.chain.GroupState shared_key:flags.1?e2e.chain.SharedKey = e2e.chain.StateProof;

e2e.chain.block#639a3db6 signature:int512 flags:# prev_block_hash:int256 changes:Vector<e2e.chain.Change> height:int state_proof:e2e.chain.StateProof signature_public_key:flags.0?int256 = e2e.chain.Block;

e2e.callPacket#40a6bee9 = e2e.CallPacket;

e2e.callPacketLargeMsgId#1ce56c2d = e2e.CallPacketLargeMsgId;
```
