---
title: "DecryptedMessageAction"
original: "https://core.telegram.org/type/DecryptedMessageAction"
section: ref
kind: type
description: "Объект описывает действие, с которым связано сервисное сообщение."
layout: layout.njk
---

# DecryptedMessageAction

Объект описывает действие, с которым связано сервисное сообщение.

```
===8===
decryptedMessageActionSetMessageTTL#a1733aec ttl_seconds:int = DecryptedMessageAction;
decryptedMessageActionReadMessages#c4f40be random_ids:Vector<long> = DecryptedMessageAction;
decryptedMessageActionDeleteMessages#65614304 random_ids:Vector<long> = DecryptedMessageAction;
decryptedMessageActionScreenshotMessages#8ac1f475 random_ids:Vector<long> = DecryptedMessageAction;
decryptedMessageActionFlushHistory#6719e45c = DecryptedMessageAction;

===17===
decryptedMessageActionResend#511110b0 start_seq_no:int end_seq_no:int = DecryptedMessageAction;
decryptedMessageActionNotifyLayer#f3048883 layer:int = DecryptedMessageAction;
decryptedMessageActionTyping#ccb27641 action:SendMessageAction = DecryptedMessageAction;

===20===
decryptedMessageActionRequestKey#f3c9611b exchange_id:long g_a:bytes = DecryptedMessageAction;
decryptedMessageActionAcceptKey#6fe1735b exchange_id:long g_b:bytes key_fingerprint:long = DecryptedMessageAction;
decryptedMessageActionAbortKey#dd05ec6b exchange_id:long = DecryptedMessageAction;
decryptedMessageActionCommitKey#ec2e0b9b exchange_id:long key_fingerprint:long = DecryptedMessageAction;
decryptedMessageActionNoop#a82fdd63 = DecryptedMessageAction;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/decryptedMessageActionSetMessageTTL">decryptedMessageActionSetMessageTTL</a></td><td>Настройка времени жизни сообщения после прочтения.<br><br>Получив такое сообщение, клиент обязан начать удаление всех сообщений секретного чата через <strong>ttl_seconds</strong> секунд после того, как пользователь их прочитал.</td></tr><tr><td><a href="/constructor/decryptedMessageActionReadMessages">decryptedMessageActionReadMessages</a></td><td>Сообщения отмечены как прочитанные.</td></tr><tr><td><a href="/constructor/decryptedMessageActionDeleteMessages">decryptedMessageActionDeleteMessages</a></td><td>Удалённые сообщения.</td></tr><tr><td><a href="/constructor/decryptedMessageActionScreenshotMessages">decryptedMessageActionScreenshotMessages</a></td><td>Сделан снимок экрана.</td></tr><tr><td><a href="/constructor/decryptedMessageActionFlushHistory">decryptedMessageActionFlushHistory</a></td><td>Вся история сообщений была удалена.</td></tr><tr><td><a href="/constructor/decryptedMessageActionResend">decryptedMessageActionResend</a></td><td>Запрос к другой стороне секретного чата на автоматическую повторную отправку непрерывного диапазона ранее отправленных сообщений, как описано в разделе <a href="/api/end-to-end/seq_no">Sequence number is Secret Chats</a>.</td></tr><tr><td><a href="/constructor/decryptedMessageActionNotifyLayer">decryptedMessageActionNotifyLayer</a></td><td>Уведомление о том, какой слой API использует клиент. Следует использовать свой текущий слой и при отправке сообщений учитывать слой, используемый на другой стороне переписки.</td></tr><tr><td><a href="/constructor/decryptedMessageActionTyping">decryptedMessageActionTyping</a></td><td>Пользователь готовит сообщение: набирает текст, записывает, загружает и т. п.</td></tr><tr><td><a href="/constructor/decryptedMessageActionRequestKey">decryptedMessageActionRequestKey</a></td><td>Запросить смену ключей, см. <a href="/api/end-to-end/pfs">процесс смены ключей</a></td></tr><tr><td><a href="/constructor/decryptedMessageActionAcceptKey">decryptedMessageActionAcceptKey</a></td><td>Принять новый ключ</td></tr><tr><td><a href="/constructor/decryptedMessageActionAbortKey">decryptedMessageActionAbortKey</a></td><td>Прервать смену ключей</td></tr><tr><td><a href="/constructor/decryptedMessageActionCommitKey">decryptedMessageActionCommitKey</a></td><td>Зафиксировать новый ключ, см. <a href="/api/end-to-end/pfs">процесс смены ключей</a></td></tr><tr><td><a href="/constructor/decryptedMessageActionNoop">decryptedMessageActionNoop</a></td><td>Действие NOOP</td></tr></tbody></table>
