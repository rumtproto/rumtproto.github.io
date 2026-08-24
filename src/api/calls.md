---
title: "Звонки"
original: "https://core.telegram.org/api/calls"
section: api
description: "Telegram поддерживает звонки один на один со сквозным шифрованием."
layout: layout.njk
---

# Звонки

Telegram поддерживает звонки один на один со сквозным шифрованием.

На этой странице описаны методы API для работы со звонками.

```
phoneCallProtocol#fc878fc8 flags:# udp_p2p:flags.0?true udp_reflector:flags.1?true min_layer:int max_layer:int library_versions:Vector<string> = PhoneCallProtocol;

phoneConnectionWebrtc#635fe375 flags:# turn:flags.0?true stun:flags.1?true id:long ip:string ipv6:string port:int username:string password:string = PhoneConnection;

phoneCallWaiting#c5226f17 flags:# video:flags.6?true id:long access_hash:long date:int admin_id:long participant_id:long protocol:PhoneCallProtocol receive_date:flags.0?int = PhoneCall;
phoneCallRequested#14b0ed0c flags:# video:flags.6?true id:long access_hash:long date:int admin_id:long participant_id:long g_a_hash:bytes protocol:PhoneCallProtocol = PhoneCall;
phoneCallAccepted#3660c311 flags:# video:flags.6?true id:long access_hash:long date:int admin_id:long participant_id:long g_b:bytes protocol:PhoneCallProtocol = PhoneCall;
phoneCall#30535af5 flags:# p2p_allowed:flags.5?true video:flags.6?true conference_supported:flags.8?true id:long access_hash:long date:int admin_id:long participant_id:long g_a_or_b:bytes key_fingerprint:long protocol:PhoneCallProtocol connections:Vector<PhoneConnection> start_date:int custom_parameters:flags.7?DataJSON = PhoneCall;
phoneCallDiscarded#50ca4de1 flags:# need_rating:flags.2?true need_debug:flags.3?true video:flags.6?true id:long reason:flags.0?PhoneCallDiscardReason duration:flags.1?int = PhoneCall;

phone.phoneCall#ec82e140 phone_call:PhoneCall users:Vector<User> = phone.PhoneCall;
updatePhoneCall#ab0f6b1e phone_call:PhoneCall = Update;

phoneCallDiscardReasonMissed#85e42301 = PhoneCallDiscardReason;
phoneCallDiscardReasonDisconnect#e095c1a0 = PhoneCallDiscardReason;
phoneCallDiscardReasonHangup#57adc690 = PhoneCallDiscardReason;
phoneCallDiscardReasonBusy#faf7e8c9 = PhoneCallDiscardReason;
phoneCallDiscardReasonMigrateConferenceCall#9fbbf1f7 slug:string = PhoneCallDiscardReason;

---functions---

phone.requestCall#42ff96ed flags:# video:flags.0?true user_id:InputUser random_id:int g_a_hash:bytes protocol:PhoneCallProtocol = phone.PhoneCall;
phone.acceptCall#3bd2b4a0 peer:InputPhoneCall g_b:bytes protocol:PhoneCallProtocol = phone.PhoneCall;
phone.confirmCall#2efe1722 peer:InputPhoneCall g_a:bytes key_fingerprint:long protocol:PhoneCallProtocol = phone.PhoneCall;

phone.receivedCall#17d54f61 peer:InputPhoneCall = Bool;

phone.discardCall#b2cbc1c0 flags:# video:flags.0?true peer:InputPhoneCall duration:int reason:PhoneCallDiscardReason connection_id:long = Updates;
```

### Звонки один на один

Подробно сквозное шифрование, применяемое в звонках один на один, описано [здесь »](/api/end-to-end/video-calls/); ниже оно изложено кратко, с некоторыми дополнительными подробностями уровня API:

1.  Пользователь _A_ вызывает [phone.requestCall](/method/phone.requestCall/), чтобы позвонить пользователю _B_, передавая начальные параметры DH и [информацию о протоколе звонка »](#populating-phonecallprotocol). Установите флаг `video`, чтобы запросить видеозвонок; иначе запрашивается аудиозвонок.  
    Метод вернёт [phone.phoneCall](/constructor/phone.phoneCall/) с [phoneCallWaiting](/constructor/phoneCallWaiting/)
2.  Сервер _S_ проверяет настройки приватности и отправляет обновление [updatePhoneCall](/constructor/updatePhoneCall/) с конструктором [phoneCallRequested](/constructor/phoneCallRequested/) на все активные устройства пользователя _B_.
3.  Получив [phoneCallRequested](/constructor/phoneCallRequested/), пользователь _B_ может по желанию вызвать [phone.receivedCall](/method/phone.receivedCall/): это запретит другим пользователям звонить _B_, пока текущий звонок не завершится (будет либо отклонён, либо принят, подтверждён, а затем завершён), — сервер станет сразу отклонять входящие звонки с причиной [phoneCallDiscardReasonBusy](/constructor/phoneCallDiscardReasonBusy/).  
    Этот шаг не строго обязателен, и его можно пропустить — например, так поступают юзерботы, вещающие интернет-радио: тогда несколько пользователей смогут одновременно вести несколько параллельных звонков с одним и тем же собеседником.
4.  Пользователь _B_ принимает звонок на одном из своих устройств, выполняет все необходимые проверки безопасности и вызывает метод [phone.acceptCall](/method/phone.acceptCall/), передавая параметры DH и [информацию о протоколе звонка »](#populating-phonecallprotocol): этот метод вернёт [phone.phoneCall](/constructor/phone.phoneCall/) с [phoneCallAccepted](/constructor/phoneCallAccepted/).  
    Вместо этого пользователь _B_ может отклонить звонок, вызвав [phone.discardCall](/method/phone.discardCall/) с [phoneCallDiscardReasonMissed](/constructor/phoneCallDiscardReasonMissed/) (пользователь _A_ может поступить точно так же).
5.  Сервер _S_ отправляет [updatePhoneCall](/constructor/updatePhoneCall/) с конструктором [phoneCallDiscarded](/constructor/phoneCallDiscarded/) на все остальные устройства, авторизованные пользователем _B_, чтобы тот же звонок нельзя было принять ни на одном из других устройств. С этого момента сервер _S_ работает только с тем конкретным устройством пользователя _B_, которое первым вызвало [phone.acceptCall](/method/phone.acceptCall/).
6.  Сервер _S_ отправляет пользователю _A_ обновление [updatePhoneCall](/constructor/updatePhoneCall/) с конструктором [phoneCallAccepted](/constructor/phoneCallAccepted/): _A_ выполняет все обычные проверки безопасности, после чего вызывает метод [phone.confirmCall](/method/phone.confirmCall/), передавая параметры DH и [информацию о протоколе звонка »](#populating-phonecallprotocol), — метод вернёт [phone.phoneCall](/constructor/phone.phoneCall/) с [phoneCall](/constructor/phoneCall/).  
    Затем _A_ передаёт звонок библиотеке tgcalls, используя конструкторы [phoneCallProtocol](/constructor/phoneCallProtocol/) и [phoneConnectionWebrtc](/constructor/phoneConnectionWebrtc/), содержащиеся в конструкторе [phoneCall](/constructor/phoneCall/).
7.  Сервер _S_ отправляет пользователю _B_ обновление [updatePhoneCall](/constructor/updatePhoneCall/) с конструктором [phoneCall](/constructor/phoneCall/): на этом этапе _B_ выполняет все необходимые проверки безопасности и передаёт звонок библиотеке tgcalls, как описано выше.
8.  Чтобы завершить звонок, вызовите [phone.discardCall](/method/phone.discardCall/) — обоим пользователям придёт [updatePhoneCall](/constructor/updatePhoneCall/) с [phoneCallDiscarded](/constructor/phoneCallDiscarded/).  
    Установите флаг `video`, если хотя бы у одной из двух сторон завершаемого звонка был включён видеопоток (независимо от того, был ли звонок изначально видео- или голосовым), а также при переходе к [конференц-звонку »](#migrating-to-a-conference-call).  
    Если установлен флаг [phoneCallDiscarded](/constructor/phoneCallDiscarded/).`need_rating`, клиент обязан предложить пользователю [оценить звонок »](#call-rating) по его завершении.  
    Пользователь может оценить звонок и вручную, щёлкнув правой кнопкой мыши по сервисному сообщению о звонке: в этом случае при вызове [phone.setCallRating](/method/phone.setCallRating/) обязательно установить флаг `user_initiative`.

### Переход к конференц-звонку

```
phoneCallDiscardReasonMigrateConferenceCall#9fbbf1f7 slug:string = PhoneCallDiscardReason;

---functions---

phone.createConferenceCall#7d0444bb flags:# muted:flags.0?true video_stopped:flags.2?true join:flags.3?true random_id:int public_key:flags.3?int256 block:flags.3?bytes params:flags.3?DataJSON = Updates;
phone.discardCall#b2cbc1c0 flags:# video:flags.0?true peer:InputPhoneCall duration:int reason:PhoneCallDiscardReason connection_id:long = Updates;
```

Идущий звонок один на один можно перевести («мигрировать») в [конференц-звонок »](/api/group-calls/#conference-calls) со сквозным шифрованием — например, чтобы добавить больше участников.

Переход возможен, только если клиент собеседника поддерживает конференц-звонки, о чём говорит флаг [phoneCall](/constructor/phoneCall/).`conference_supported` (сервер устанавливает его в итоговом конструкторе [phoneCall](/constructor/phoneCall/)): клиентам следует показывать в интерфейсе звонка вариант перехода — «Добавить участников» — только при установленном флаге.

Чтобы перевести звонок, инициирующий клиент выполняет следующее:

1.  Создаёт новый конференц-звонок, вызывая [phone.createConferenceCall](/method/phone.createConferenceCall/) с установленным флагом `join`, и сам присоединяется к только что созданной конференции, как описано [здесь »](/api/group-calls/#conference-calls); состояние медиапотоков текущего звонка (отключён ли микрофон, включена ли камера) переносится в новую конференцию.
2.  [@term:slug] Извлекает из поля [groupCall](/constructor/groupCall/).`invite_link` в ответе slug (короткий идентификатор в адресе ссылки) [глубокой ссылки на конференцию »](/api/links/#conference-links).
3.  Завершает звонок один на один, вызывая [phone.discardCall](/method/phone.discardCall/) со значением `reason`, равным [phoneCallDiscardReasonMigrateConferenceCall](/constructor/phoneCallDiscardReasonMigrateConferenceCall/), и передавая slug конференции в поле `slug` этого конструктора (как и для любого завершаемого звонка, установите флаг `video`, если видеопоток был включён у любой из сторон).

Собеседник получает [updatePhoneCall](/constructor/updatePhoneCall/) с [phoneCallDiscarded](/constructor/phoneCallDiscarded/), у которого в `reason` указан [phoneCallDiscardReasonMigrateConferenceCall](/constructor/phoneCallDiscardReasonMigrateConferenceCall/): его клиент обязан извлечь `slug`, получить только что созданный конференц-звонок вызовом [phone.getGroupCall](/method/phone.getGroupCall/) с конструктором [inputGroupCallSlug](/constructor/inputGroupCallSlug/), сформированным из этого slug, и автоматически присоединиться к нему, как описано [здесь »](/api/group-calls/#conference-calls), снова перенеся состояние медиапотоков прежнего звонка.

Тем самым оба пользователя фактически переходят из звонка один на один в новый конференц-звонок, куда затем можно [пригласить »](/api/group-calls/#conference-calls) и других участников.

### Заполнение `phoneCallProtocol`

```
phoneCallProtocol#fc878fc8 flags:# udp_p2p:flags.0?true udp_reflector:flags.1?true min_layer:int max_layer:int library_versions:Vector<string> = PhoneCallProtocol;
```

[phoneCallProtocol](/constructor/phoneCallProtocol/) описывает версии протокола tgcalls, поддерживаемые локальной сборкой tgcalls, и заполняется так:

-   в `library_versions` запишите упорядоченный список поддерживаемых версий протокола tgcalls (порядок важен: предпочтительная версия протокола tgcalls должна идти первой)
-   установите оба флага, `udp_p2p` и `udp_reflector` (устарело, ранее так разрешали или запрещали прямое соединение peer-to-peer для звонков libtgvoip)
-   присвойте `min_layer` значение `65` (устарело, ранее означало самый старый поддерживаемый протокол libtgvoip)
-   присвойте `max_layer` значение `92` (устарело, ранее означало самый новый поддерживаемый протокол libtgvoip)

Поля `udp_p2p`, `udp_reflector`, `min_layer` и `max_layer` использовала устаревшая библиотека libtgvoip; в tgcalls их передавать не следует. Приведённые здесь значения жёстко зашиты и неизменны: они повторяют последнее, что поддерживала libtgvoip, и нужны только тогда, когда на другом конце всё ещё работает libtgvoip.

Теперь работой через peer-to-peer управляет [настройка приватности »](/api/privacy/) [privacyKeyPhoneP2P](/constructor/privacyKeyPhoneP2P/): по ней сервер решает, вернуть ли вдобавок к обычным вариантам подключения через ретранслятор TURN — конструкторам [phoneConnectionWebrtc](/constructor/phoneConnectionWebrtc/) — ещё и варианты подключения P2P через STUN, тоже [phoneConnectionWebrtc](/constructor/phoneConnectionWebrtc/).

Один и тот же набор локальных возможностей заново отправляется во всех трёх исходящих методах рукопожатия: поле `protocol`, вложенное в [phoneCallWaiting](/constructor/phoneCallWaiting/), [phoneCallRequested](/constructor/phoneCallRequested/) и [phoneCallAccepted](/constructor/phoneCallAccepted/), не мешает клиенту снова объявить собственные локальные возможности в следующем исходящем RPC-запросе — это верно для обеих сторон.

### Сигнальные данные

```
updatePhoneCallSignalingData#2661bf09 phone_call_id:long data:bytes = Update;

---functions---

phone.sendSignalingData#ff7a9383 peer:InputPhoneCall data:bytes = Bool;
```

[phone.sendSignalingData](/method/phone.sendSignalingData/) применяется только после того, как DH-рукопожатие завершено и у обеих сторон есть итоговый [phoneCall](/constructor/phoneCall/) с проверенным ключевым материалом и сведениями о соединении: на этом этапе tgcalls следует инициализировать по полям `protocol` и `connections` итогового конструктора [phoneCall](/constructor/phoneCall/) и только затем подключать сигнальный обратный вызов tgcalls к [phone.sendSignalingData](/method/phone.sendSignalingData/).

Вызывайте этот метод всякий раз, когда tgcalls выдаёт непрозрачный сигнальный пакет, который нужно доставить собеседнику: второму участнику звонка придёт [updatePhoneCallSignalingData](/constructor/updatePhoneCallSignalingData/), и ему следует передать поле [updatePhoneCallSignalingData](/constructor/updatePhoneCallSignalingData/).`data` в свой экземпляр tgcalls.

### Оценка звонка

```
---functions---

phone.setCallRating#59ead627 flags:# user_initiative:flags.0?true peer:InputPhoneCall rating:int comment:string = Updates;
```

Вызовите [phone.setCallRating](/method/phone.setCallRating/) после завершения звонка, чтобы оценить его (при этом отправляется сообщение официальному боту для оценки VoIP-звонков), передав следующие параметры:

-   `peer`: конструктор [inputPhoneCall](/constructor/inputPhoneCall/), сформированный из [phoneCallDiscarded](/constructor/phoneCallDiscarded/)

-   `user_initiative`: установите этот флаг, если оценку начал сам пользователь, щёлкнув правой кнопкой по сервисному сообщению о звонке; флаг НЕ должен быть установлен, если оценку запросил сервер флагом [phoneCallDiscarded](/constructor/phoneCallDiscarded/).`need_rating`.

-   `rating`: выбранная пользователем оценка от 1 до 5.

-   `comment`: комментарий, введённый пользователем (только для оценок, отличных от 5).

    Пользователь может дополнительно указать, какие именно проблемы он заметил, выбрав их из приведённого ниже фиксированного списка: они дописываются к комментарию как `#hashtags`.

    Эти хештеги допускается дописывать даже при оценке 5, по такому алгоритму:

    -   если накопленный комментарий не пуст, добавьте пробел
    -   добавьте идентификатор выбранной проблемы в виде хештега (то есть `#echo`)
    -   повторите это для всех выбранных пользователем проблем из следующих доступных вариантов:

#### Типы проблем при оценке звонка

##### `echo`

Пользователь слышал собственный голос (эхо).

##### `noise`

Пользователь слышал посторонний шум.

##### `interruptions`

Собеседник постоянно пропадал.

##### `distorted_speech`

Речь была искажена.

##### `silent_local`

Пользователь не слышал собеседника.

##### `silent_remote`

Собеседник не слышал пользователя.

##### `dropped`

Звонок неожиданно прервался.

##### `distorted_video`

Видео было искажено.

##### `pixelated_video`

Видео рассыпалось на пиксели.

### Отладочные данные звонка

```
---functions---

phone.saveCallDebug#277add7e peer:InputPhoneCall debug:DataJSON = Bool;
```

Если в итоговом [phoneCallDiscarded](/constructor/phoneCallDiscarded/) установлен флаг `need_debug`, клиенту следует отправить на сервер отладочные сведения о завершившемся звонке, свои для каждой реализации: для этого вызовите [phone.saveCallDebug](/method/phone.saveCallDebug/) с JSON-строкой, которую вернул активный экземпляр tgcalls.
