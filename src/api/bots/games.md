---
title: "HTML5-игры"
original: "https://core.telegram.org/api/bots/games"
section: api
description: "Боты могут предлагать пользователям HTML5-игры — как для одиночной игры, так и для соревнования друг с другом в группах и личных чатах."
layout: layout.njk
---

# HTML5-игры

Боты могут предлагать пользователям [HTML5-игры](https://core.telegram.org/bots/games) — как для одиночной игры, так и для соревнования друг с другом в группах и личных чатах.

### Отправка игры

```
inputUserSelf#f7c1b13f = InputUser;

inputGameID#032c3e77 id:long access_hash:long = InputGame;
inputGameShortName#c331e80a bot_id:InputUser short_name:string = InputGame;

inputMediaGame#d33f43f3 id:InputGame = InputMedia;

game#bdf9653b flags:# id:long access_hash:long short_name:string title:string description:string photo:Photo document:flags.0?Document = Game;
messageMediaGame#fdb19008 game:Game = MessageMedia;

---functions---

messages.sendMedia#0330e77f flags:# silent:flags.5?true background:flags.6?true clear_draft:flags.7?true noforwards:flags.14?true update_stickersets_order:flags.15?true invert_media:flags.16?true allow_paid_floodskip:flags.19?true peer:InputPeer reply_to:flags.0?InputReplyTo media:InputMedia message:string random_id:long reply_markup:flags.2?ReplyMarkup entities:flags.3?Vector<MessageEntity> schedule_date:flags.10?int schedule_repeat_period:flags.24?int send_as:flags.13?InputPeer quick_reply_shortcut:flags.17?InputQuickReplyShortcut effect:flags.18?long allow_paid_stars:flags.21?long suggested_post:flags.22?SuggestedPost = Updates;
```

[@term:short_name] Боты могут отправить игру напрямую с помощью метода [messages.sendMedia](/method/messages.sendMedia/), передав в нём `short_name` — краткое имя игры, её постоянный текстовый идентификатор, — а именно:

-   Краткое имя игры, полученное от [@BotFather](https://t.me/botfather) или из [ссылки на игру »](/api/links/#game-links), — в поле `inputGameShortName.short_name`
-   Сведения о самом боте — в поле `inputGameShortName.bot_id`

Отправленное сообщение будет содержать конструктор [messageMediaGame](/constructor/messageMediaGame/) с игрой [game](/constructor/game/); в дальнейшем пользователи смогут пересылать эту игру, вызывая sendMedia с [inputGameID](/constructor/inputGameID/).

### Запуск игры

[@term:callback query] Игра запускается нажатием на кнопку [keyboardButtonGame](/constructor/keyboardButtonGame/): это порождает callback-запрос (`callback query` — служебный запрос от клиента к боту при нажатии кнопки), который возвращает URL игры. Затем игру следует открыть в WebView или в нативном интерфейсе (это определяется флагом `native_ui`), предоставив ей [соответствующие HTML5 API](/api/web-events/), чтобы принимать различные JS-события игры прямо из её кода, как описано [здесь »](/api/web-events/).

### Установка рекордов

```
---functions---

messages.setGameScore#8ef8ecc0 flags:# edit_message:flags.0?true force:flags.1?true peer:InputPeer id:int user_id:InputUser score:int = Updates;
messages.setInlineGameScore#15ad9f64 flags:# edit_message:flags.0?true force:flags.1?true id:InputBotInlineMessageID user_id:InputUser score:int = Bool;
```

Предполагается, что игра сообщает MTProto API о каждом проигрыше пользователя, если при этом установлен новый рекорд.  
Поскольку игры выполняются в браузере, они не могут передавать данные в API напрямую по токену бота: этот токен обязан оставаться в секрете.  
Вместо этого им следует отправлять рекорды на промежуточный сервер, который уже передаёт результаты через [messages.setGameScore](/method/messages.setGameScore/) или [messages.setInlineGameScore](/method/messages.setInlineGameScore/) — в зависимости от того, откуда пришла игра.

-   Флаг `edit_message` следует устанавливать, если сообщение с игрой должно автоматически редактироваться, чтобы показывать текущую таблицу рекордов
-   Флаг `force` следует устанавливать, если рекорду разрешено уменьшаться. Это бывает полезно при исправлении ошибок или блокировке читеров.

### Получение рекордов

```
messageActionGameScore#92a72876 game_id:long score:int = MessageAction;

messageService#7a800e0a flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true reactions_are_possible:flags.9?true silent:flags.13?true post:flags.14?true legacy:flags.19?true id:int from_id:flags.8?Peer peer_id:Peer saved_peer_id:flags.28?Peer reply_to:flags.3?MessageReplyHeader date:int action:MessageAction reactions:flags.20?MessageReactions ttl_period:flags.25?int = Message;

highScore#73a379eb pos:int user_id:long score:int = HighScore;

messages.highScores#9a3bfd99 scores:Vector<HighScore> users:Vector<User> = messages.HighScores;

---functions---

messages.getGameHighScores#e822649d peer:InputPeer id:int user_id:InputUser = messages.HighScores;
messages.getInlineGameHighScores#0f635e1b id:InputBotInlineMessageID user_id:InputUser = messages.HighScores;
```

[@term:pos] Каждый раз, когда установлен новый рекорд и при его отправке был выставлен флаг `edit_message`, создаётся сервисное сообщение [messageService](/constructor/messageService/) с действием [messageActionGameScore](/constructor/messageActionGameScore/): оно означает, что рекорд определённой игры изменился благодаря пользователю с определённым `user_id`.  
Наша собственная текущая позиция в таблице рекордов также сообщается в поле `pos` (порядковый номер в таблице, начиная с первого места).

При получении такого обновления графическим клиентам следует заново запросить таблицу рекордов через [messages.getGameHighScores](/method/messages.getGameHighScores/) или [messages.getInlineGameHighScores](/method/messages.getInlineGameHighScores/).
