---
title: "bots.createBot"
original: "https://core.telegram.org/method/bots.createBot"
section: ref
kind: method
description: "Создать управляемого бота », принадлежащего текущему пользователю и управляемого указанным ботом-менеджером."
layout: layout.njk
---

# bots.createBot

Создать [управляемого бота »](/api/bots/managed-bots/#creating-a-managed-bot), принадлежащего текущему пользователю и управляемого указанным ботом-менеджером.

```
 Method schema is available as of layer 224. Switch »
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>via_deeplink</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Устанавливается, только если окно создания было открыто по <a href="/api/links#managed-bot-creation-request-links">глубокой ссылке запроса на создание управляемого бота »</a></td></tr><tr><td><strong>name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Отображаемое имя бота, от 1 до 64 символов</td></tr><tr><td><strong>username</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Имя пользователя для бота, прошедшее проверку методом <a href="/method/bots.checkUsername">bots.checkUsername</a></td></tr><tr><td><strong>manager_id</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>Бот-управляющий, который будет управлять созданным ботом; у него должен быть установлен флаг <a href="/constructor/user">user</a>.<code>bot_can_manage_bots</code></td></tr></tbody></table>

### Результат

[User](/type/User/)

### Этот метод доступен только пользователям

### Возможные ошибки

<table class="table"><thead><tr><th scope="col">Код</th><th scope="col">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td>400</td><td>BOT_CREATE_LIMIT_EXCEEDED</td><td>Текущий пользователь уже владеет максимально допустимым числом ботов, заданным параметрами <a href="/api/config#bots-create-limit-default"><code>bots_create_limit_default</code>&nbsp;»</a> и <a href="/api/config#bots-create-limit-premium"><code>bots_create_limit_premium</code>&nbsp;»</a>; если у текущего пользователя нет Telegram Premium, переход на Premium позволит ему создать больше ботов.</td></tr><tr><td>400</td><td>MANAGER_INVALID</td><td>Указанный бот-менеджер недействителен.</td></tr><tr><td>400</td><td>MANAGER_PERMISSION_MISSING</td><td>У указанного бота-менеджера не установлен флаг <a href="/constructor/user">user</a>.<code>bot_can_manage_bots</code>.</td></tr><tr><td>400</td><td>NAME_INVALID</td><td>Указанное имя бота недействительно.</td></tr><tr><td>400</td><td>USERNAME_INVALID</td><td>Указанное имя пользователя недействительно.</td></tr><tr><td>400</td><td>USERNAME_OCCUPIED</td><td>Указанное имя пользователя уже занято.</td></tr><tr><td>400</td><td>USERNAME_SUFFIX_MISSING</td><td>В указанном юзернейме отсутствует обязательный суффикс <code>bot</code>.</td></tr></tbody></table>

### Связанные страницы

#### [Глубокие ссылки](/api/links/)

Клиенты Telegram обязаны обрабатывать особые глубокие ссылки tg:// и t.me, встречающиеся в сообщениях, сущностях-ссылках и в других приложениях, регистрируя обработчики в операционной системе.

#### [bots.checkUsername](/method/bots.checkUsername/)

Проверить, доступно ли имя пользователя и подходит ли оно для использования при [создании управляемого бота »](/api/bots/managed-bots/#creating-a-managed-bot).

#### [user](/constructor/user/)

Содержит сведения об определённом пользователе.

Если не указано иное, при обновлении [локальной базы пиров](/api/peers/) все поля вновь полученного конструктора имеют приоритет над старым конструктором, сохранённым локально (в том числе поля, не заданные в новом конструкторе, удаляются).

См. [здесь »](https://github.com/tdlib/td/blob/73035e4a69ed26df563652de14aa9c4c86d23420/td/telegram/UserManager.cpp#L3106) реализацию логики, которую следует применять при обновлении [локальной базы пиров-пользователей](/api/peers/).

#### [Управляемые боты](/api/bots/managed-bots/)

Пользователи могут создавать **управляемых** ботов (которыми управляет определённый бот-менеджер) прямо через MTProto API, не обращаясь к [@BotFather](https://t.me/botfather).

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.
