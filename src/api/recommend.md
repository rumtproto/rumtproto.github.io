---
title: "Похожие каналы и боты"
original: "https://core.telegram.org/api/recommend"
section: api
description: "API предоставляет метод, позволяющий получить список публичных каналов и ботов схожей тематики, подобранных по сходству их аудиторий подписчиков."
layout: layout.njk
---

# Похожие каналы и боты

API предоставляет метод, позволяющий получить список публичных каналов и ботов схожей тематики, подобранных по сходству их **аудиторий подписчиков**.

### Похожие каналы

Схема:

```
messages.chats#64ff9fd5 chats:Vector<Chat> = messages.Chats;
messages.chatsSlice#9cd81144 count:int chats:Vector<Chat> = messages.Chats;

---functions---

channels.getChannelRecommendations#25a71742 flags:# channel:flags.0?InputChannel = messages.Chats;
```

[@term:peer] Клиентам следует вызывать [channels.getChannelRecommendations](/method/channels.getChannelRecommendations/) после подписки на [канал](/api/channel/), передавая в поле `channel` пир этого канала (`peer` — идентификатор адресата: пользователя, чата или канала), и автоматически показывать всплывающее окно со списком каналов схожей тематики.

Тот же метод следует вызывать и при открытии специальной вкладки «Похожие каналы» в профиле канала — по аналогии с вкладками «Медиа», «Ссылки», «GIF» и прочими.

Кроме того, метод следует вызывать _без_ установки флага `channel` в разделе «Похожие каналы» вкладки «Каналы» глобального поиска: тогда возвращается _глобальный_ список рекомендованных каналов, похожих на те, на которые текущий пользователь уже подписан; подробнее см. [здесь »](/api/search/#global-search).

Максимальное число похожих каналов, которое метод [channels.getChannelRecommendations»](/method/channels.getChannelRecommendations/) может порекомендовать пользователям с подпиской [Premium](/api/premium/) и пользователям без [Premium](/api/premium/), задаётся ключами конфигурации приложения [recommended\_channels\_limit\_premium](/api/config/#recommended-channels-limit-premium) и [recommended\_channels\_limit\_default](/api/config/#recommended-channels-limit-default) соответственно.

Пользователям без [Premium](/api/premium/) может вернуться урезанная выборка — [messages.chatsSlice](/constructor/messages.chatsSlice/), в котором `count` больше числа элементов в `chats`; после перехода на [Premium](/api/premium/) метод вернёт полную выборку в виде [messages.chatsSlice](/constructor/messages.chatsSlice/).

[@note] В оригинале в этом абзаце оба раза указан конструктор `messages.chatsSlice`. Судя по симметричному абзацу раздела «Похожие боты», где полному набору соответствует `users.users`, полный набор каналов должен возвращаться как `messages.chats`. Перевод сохраняет формулировку оригинала без изменений.

### Похожие боты

```
users.users#62d706b8 users:Vector<User> = users.Users;
users.usersSlice#315a4974 count:int users:Vector<User> = users.Users;

---functions---

bots.getBotRecommendations#a1b70815 bot:InputUser = users.Users;
```

Тот же метод следует вызывать и при открытии специальной вкладки «Похожие боты» в профиле бота — по аналогии с вкладками «Медиа», «Ссылки», «GIF» и прочими.

Пользователям без [Premium](/api/premium/) может вернуться урезанная выборка — [users.usersSlice](/constructor/users.usersSlice/), в котором `count` больше числа элементов в `users`; после перехода на [Premium](/api/premium/) метод вернёт полную выборку в виде [users.users](/constructor/users.users/).
