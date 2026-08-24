---
title: "Пользователи и чаты поблизости"
original: "https://core.telegram.org/api/nearby"
section: api
description: "Как работать с функциями на основе геолокации — геогруппами и поиском пользователей поблизости."
layout: layout.njk
---

# Пользователи и чаты поблизости

Как работать с функциями на основе геолокации — геогруппами и поиском пользователей поблизости.

### Получение списка пользователей и геогрупп поблизости

```
inputGeoPoint#48222faf flags:# lat:double long:double accuracy_radius:flags.0?int = InputGeoPoint;

---functions---

contacts.getLocated#d348bc44 flags:# background:flags.1?true geo_point:InputGeoPoint self_expires:flags.0?int = Updates;
```

Используйте [contacts.getLocated](/method/contacts.getLocated/), чтобы получить список находящихся поблизости пользователей и групп.

[@term:flags] **Не** устанавливайте ни один из флагов `background` и `self_expires` (`flags` — битовое поле, где каждый бит отмечает наличие одного необязательного параметра запроса): заполните только `geo_point` текущей геолокацией пользователя — в ответ вернётся список пользователей и геогрупп поблизости (**без** публикации текущего местоположения пользователя).

Эта возможность полезна, например, чтобы [обменяться контактами](/api/contacts/#adding-telegram-users-as-contacts) с находящимся рядом пользователем Telegram или [вступить](/method/channels.joinChannel/) в привязанный к местности групповой чат; другие сценарии использования описаны [здесь »](https://telegram.org/blog/contacts-local-groups).

О том, как создать геогруппу, см. [здесь »](#creating-a-geogroup), а о том, как сообщить другим пользователям своё текущее местоположение, — [здесь »](#advertising-our-current-location).

### Создание геогруппы

```
inputGeoPoint#48222faf flags:# lat:double long:double accuracy_radius:flags.0?int = InputGeoPoint;

---functions---

channels.createChannel#91006707 flags:# broadcast:flags.0?true megagroup:flags.1?true for_import:flags.3?true forum:flags.5?true title:string about:string geo_point:flags.2?InputGeoPoint address:flags.2?string ttl_period:flags.4?int = Updates;

channels.editLocation#58e63f6d channel:InputChannel geo_point:InputGeoPoint address:string = Bool;
```

Передайте `geo_point` в метод [channels.createChannel](/method/channels.createChannel/) при создании [супергруппы](/api/channel/), чтобы создать геогруппу, привязанную к геолокации: такая группа будет возвращаться [пользователям поблизости »](#fetching-nearby-users-and-geogroups).

В поле `address` следует также передать текстовое описание местоположения (1–64 символа UTF-8).

Для изменения местоположения группы используйте [channels.editLocation](/method/channels.editLocation/).

### Публикация своего текущего местоположения

```
inputGeoPoint#48222faf flags:# lat:double long:double accuracy_radius:flags.0?int = InputGeoPoint;

---functions---

contacts.getLocated#d348bc44 flags:# background:flags.1?true geo_point:InputGeoPoint self_expires:flags.0?int = Updates;
```

Текущее местоположение можно [сделать видимым для других пользователей](#fetching-nearby-users-and-geogroups) с помощью [contacts.getLocated](/method/contacts.getLocated/): в этом случае флаг `self_expires` **обязательно должен быть установлен**.

Учтите: если текущий пользователь уже публикует своё местоположение через [функцию местоположения Telegram Business »](/api/business/#location) (даже без `geo_point`, только с текстовым полем `address`), метод вернёт ошибку `BUSINESS_ADDRESS_ACTIVE`. Она означает, что изменить (или удалить) местоположение можно только через [account.updateBusinessLocation »](/method/account.updateBusinessLocation/), а не через [contacts.getLocated](/method/contacts.getLocated/).

[@term:TTL] Этот флаг задаёт TTL переданной геолокации (TTL, time to live — срок жизни, по истечении которого значение перестаёт действовать), то есть геолокация станет недействительной через `self_expires` секунд; передайте `0x7fffffff`, чтобы отключить истечение срока, или 0, чтобы сделать текущую геолокацию приватной.

Метод также возвращает список пользователей и чатов поблизости, но только если переданный срок жизни не равен нулю.  
Пользователи по-прежнему могут получать список находящихся рядом пользователей и чатов, не делая свою геолокацию публичной, — для этого достаточно не устанавливать этот флаг, подробнее [здесь »](#fetching-nearby-users-and-geogroups).

Пока геолокация текущего пользователя остаётся публичной, клиентам следует обновлять её в фоновом режиме примерно раз в полчаса (и в любом случае до наступления срока, указанного в `self_expires`), устанавливая при этом данный флаг: если новое местоположение отстоит от предыдущего более чем на 1 км или если предыдущее местоположение неизвестно, следует установить флаг `background`.
