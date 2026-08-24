---
title: "Избранные сообщения"
original: "https://core.telegram.org/api/saved-messages"
section: api
description: "Чат «Избранное» (Saved Messages) позволяет пользователям сохранять сообщения и медиафайлы: это личное облачное хранилище для любых сообщений и медиа, которые вы захотите туда…"
layout: layout.njk
---

# Избранные сообщения

Чат «Избранное» (Saved Messages) позволяет пользователям сохранять сообщения и медиафайлы: это личное облачное хранилище для любых сообщений и медиа, которые вы захотите туда отправить или переслать.

[@term:inputPeerSelf] Внутри системы чат «Избранное» — это просто личный чат с самим собой (то есть чат с [inputPeerSelf](/constructor/inputPeerSelf/) — конструктором, который обозначает текущего пользователя как собеседника): единственное отличие чата «Избранное» от чата с любым другим пользователем состоит в том, что для него доступны дополнительные возможности, помогающие удобнее упорядочивать отправленные туда сообщения и медиа.

### Диалоги избранных сообщений

Схема:

```
message#95ef6f2b flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true post:flags.14?true from_scheduled:flags.18?true legacy:flags.19?true edit_hide:flags.21?true pinned:flags.24?true noforwards:flags.26?true invert_media:flags.27?true flags2:# offline:flags2.1?true video_processing_pending:flags2.4?true paid_suggested_post_stars:flags2.8?true paid_suggested_post_ton:flags2.9?true id:int from_id:flags.8?Peer from_boosts_applied:flags.29?int from_rank:flags2.12?string peer_id:Peer saved_peer_id:flags.28?Peer fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long via_business_bot_id:flags2.0?long guestchat_via_from:flags2.19?Peer reply_to:flags.3?MessageReplyHeader date:int message:string media:flags.9?MessageMedia reply_markup:flags.6?ReplyMarkup entities:flags.7?Vector<MessageEntity> views:flags.10?int forwards:flags.10?int replies:flags.23?MessageReplies edit_date:flags.15?int post_author:flags.16?string grouped_id:flags.17?long reactions:flags.20?MessageReactions restriction_reason:flags.22?Vector<RestrictionReason> ttl_period:flags.25?int quick_reply_shortcut_id:flags.30?int effect:flags2.2?long factcheck:flags2.3?FactCheck report_delivery_until_date:flags2.5?int paid_message_stars:flags2.6?long suggested_post:flags2.7?SuggestedPost schedule_repeat_period:flags2.10?int summary_from_language:flags2.11?string = Message;
messageFwdHeader#4e4df4bb flags:# imported:flags.7?true saved_out:flags.11?true from_id:flags.0?Peer from_name:flags.5?string date:int channel_post:flags.2?int post_author:flags.3?string saved_from_peer:flags.4?Peer saved_from_msg_id:flags.4?int saved_from_id:flags.8?Peer saved_from_name:flags.9?string saved_date:flags.10?int psa_type:flags.6?string = MessageFwdHeader;

savedDialog#bd87cb6c flags:# pinned:flags.2?true peer:Peer top_message:int = SavedDialog;

updateSavedDialogPinned#aeaf9e74 flags:# pinned:flags.0?true peer:DialogPeer = Update;
updatePinnedSavedDialogs#686c85a6 flags:# order:flags.0?Vector<DialogPeer> = Update;

messages.savedDialogs#f83ae221 dialogs:Vector<SavedDialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.SavedDialogs;
messages.savedDialogsSlice#44ba9dd9 count:int dialogs:Vector<SavedDialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.SavedDialogs;
messages.savedDialogsNotModified#c01f6fe8 count:int = messages.SavedDialogs;

savedDialog#bd87cb6c flags:# pinned:flags.2?true peer:Peer top_message:int = SavedDialog;

---functions---

messages.getSavedDialogs#1e91fc99 flags:# exclude_pinned:flags.0?true parent_peer:flags.1?InputPeer offset_date:int offset_id:int offset_peer:InputPeer limit:int hash:long = messages.SavedDialogs;
messages.getSavedDialogsByID#6f6f9c96 flags:# parent_peer:flags.1?InputPeer ids:Vector<InputPeer> = messages.SavedDialogs;
messages.getSavedHistory#998ab009 flags:# parent_peer:flags.0?InputPeer peer:InputPeer offset_id:int offset_date:int add_offset:int limit:int max_id:int min_id:int hash:long = messages.Messages;
messages.deleteSavedHistory#4dc5085f flags:# parent_peer:flags.0?InputPeer peer:InputPeer max_id:int min_date:flags.2?int max_date:flags.3?int = messages.AffectedHistory;
messages.getPinnedSavedDialogs#d63d94e0 = messages.SavedDialogs;
messages.toggleSavedDialogPin#ac81bbde flags:# pinned:flags.0?true peer:InputDialogPeer = Bool;
messages.reorderPinnedSavedDialogs#8b716587 flags:# force:flags.0?true order:Vector<InputDialogPeer> = Bool;


messages.search#29ee847a flags:# peer:InputPeer q:string from_id:flags.0?InputPeer saved_peer_id:flags.2?InputPeer saved_reaction:flags.3?Vector<Reaction> top_msg_id:flags.1?int filter:MessagesFilter min_date:int max_date:int offset_id:int add_offset:int limit:int max_id:int min_id:int hash:long = messages.Messages;
messages.getSearchCounters#1bbcf300 flags:# peer:InputPeer saved_peer_id:flags.2?InputPeer top_msg_id:flags.0?int filters:Vector<MessagesFilter> = Vector<messages.SearchCounter>;
messages.getSearchResultsCalendar#6aa3f6bd flags:# peer:InputPeer saved_peer_id:flags.2?InputPeer filter:MessagesFilter offset_id:int offset_date:int = messages.SearchResultsCalendar;
messages.getSearchResultsPositions#9c7f2f10 flags:# peer:InputPeer saved_peer_id:flags.2?InputPeer filter:MessagesFilter offset_id:int limit:int = messages.SearchResultsPositions;
```

Сообщения, отправленные и пересланные в «Избранное» от разных пользователей (в том числе от нас самих), автоматически раскладываются по исходным диалогам в отдельный список сохранённых диалогов, весьма похожий на обычный список диалогов, через который идёт повседневная работа с чатами.

Чтобы в обычном списке диалогов появился новый диалог, пользователь должен написать собеседнику (либо вступить в канал или чат и т. п.).  
Чтобы новый диалог появился в списке сохранённых диалогов, достаточно переслать сообщения из любого обычного диалога в [inputPeerSelf](/constructor/inputPeerSelf/) (текущему пользователю): пересланные сообщения (включая исходящие) будут добавлены в сохранённый диалог с тем же идентификатором, что и у исходного диалога.

[@term:peer] Это касается и исходящих сообщений; для примера предположим следующее (`peer` — пир, то есть собеседник или чат, к которому привязан диалог):

-   Наш `id` пользователя равен `11111111`
-   Мы отправляем сообщение A с ID `10` в [супергруппу](/api/channel/) с `id=-100122222222` (формат bot API, эквивалентен [peerChannel](/constructor/peerChannel/) с ID `122222222`)
-   Другой пользователь с `id=133333333` отвечает `B` на наше предыдущее сообщение, ID сообщения — `11`
-   Мы пересылаем оба сообщения, `A` и `B`, с ID `10` и `11` в [inputPeerSelf](/constructor/inputPeerSelf/), в результате чего:
    -   Создаётся новый [savedDialog](/constructor/savedDialog/) с `peer=-100122222222` (если он ещё не создан — он уже существовал бы, если бы мы раньше пересылали сообщения из этой супергруппы)
    -   Генерируются два сообщения:
        -   Сообщение `A`:
            -   `id`: произвольный ID сообщения, никак не связанный с исходным, — следующий в общей последовательности ID, например `1234`
            -   `peer_id`: `11111111`
            -   `saved_peer_id`: `-100122222222`
            -   `fwd_from.from_id`: `11111111`
            -   `fwd_from.saved_from_peer`: `-100122222222`
            -   `fwd_from.saved_from_msg_id`: `10`
        -   Сообщение `B`:
            -   `id`: произвольный ID сообщения, никак не связанный с исходным, — следующий в общей последовательности ID, например `1235`
            -   `reply_to.reply_to_msg_id`: `1234`
            -   `peer_id`: `11111111`
            -   `saved_peer_id`: `-100122222222`
            -   `fwd_from.from_id`: `133333333`
            -   `fwd_from.saved_from_peer`: `-100122222222`
            -   `fwd_from.saved_from_msg_id`: `11`

Сохранение сообщений из личных чатов с пользователями, включившими запрет на ссылку при пересылке, добавит их в запись сохранённого диалога особого анонимного пользователя с `id=2666000`.

[@term:layer] Клиенты могут воспользоваться следующим псевдокодом, чтобы вручную заполнить поле `saved_peer_id` у старых [сообщений](/constructor/message/) со слоем `layer < 170` (`layer` — версия схемы TL, с которой работает клиент), хранящихся в **локальной** базе данных.

```
// user_id is the ID of the current user.

if (message.peer_id == user_id) {
  if (message.fwd_from.saved_from_peer) {
    message.saved_peer_id = message.fwd_from.saved_from_peer
  } elseif (message.fwd_from.from_id) {
    message.saved_peer_id = user_id;
  } elseif (message.fwd_from.from_name) {
    message.saved_peer_id = 2666000;
  } else {
    message.saved_peer_id = user_id;
  }
}
```

Отправка новых сообщений напрямую самому себе (а не пересылка их из другого диалога) добавит их в запись сохранённого диалога с самим собой.

**Примечание**: поле `saved_peer_id` сообщений используется также для реализации отдельной возможности — [прямых сообщений канала »](/api/monoforum/): в этом случае `peer_id` будет равен ID монофорума прямых сообщений канала.

Далее, для получения этого списка диалогов, закрепления и открепления диалогов в нём, просмотра и удаления сообщений из сохранённых диалогов можно использовать набор методов: [messages.getSavedDialogs](/method/messages.getSavedDialogs/), [messages.getSavedDialogsByID](/method/messages.getSavedDialogsByID/), [messages.getSavedHistory](/method/messages.getSavedHistory/), [messages.deleteSavedHistory](/method/messages.deleteSavedHistory/), [messages.getPinnedSavedDialogs](/method/messages.getPinnedSavedDialogs/), [messages.toggleSavedDialogPin](/method/messages.toggleSavedDialogPin/), [messages.reorderPinnedSavedDialogs](/method/messages.reorderPinnedSavedDialogs/) работают точно так же, как их аналоги [messages.getDialogs](/method/messages.getDialogs/), [messages.getHistory](/method/messages.getHistory/), [messages.deleteHistory](/method/messages.deleteHistory/), [messages.getPinnedDialogs](/method/messages.getPinnedDialogs/), [messages.toggleDialogPin](/method/messages.toggleDialogPin/), [messages.reorderPinnedDialogs](/method/messages.reorderPinnedDialogs/), с единственным отличием: они затрагивают список сохранённых диалогов, а не основной список диалогов.

У некоторых из перечисленных выше методов есть необязательный параметр `parent_peer`; его следует заполнять только при работе с [монофорумами](/api/monoforum/), но не при работе с «Избранным».

Для поиска сообщений внутри сохранённого диалога используйте обычные методы [messages.search](/method/messages.search/), [messages.getSearchCounters](/method/messages.getSearchCounters/), [messages.getSearchResultsCalendar](/method/messages.getSearchResultsCalendar/), [messages.getSearchResultsPositions](/method/messages.getSearchResultsPositions/) с `peer`\=[inputPeerSelf](/constructor/inputPeerSelf/) и `saved_peer_id`\=идентификатор сохранённого диалога.

API также предоставляет метод [messages.readSavedHistory](/method/messages.readSavedHistory/), но, вопреки тому, что можно предположить по названию, он применим только к темам [монофорума](/api/monoforum/).

### Теги

Для ещё более удобной организации [пользователи Premium](/api/premium/) могут добавлять к своим сохранённым сообщениям **несколько тегов**, позволяющих быстро **фильтровать** их в поиске.

```
messageReactions#0a339f0b flags:# min:flags.0?true can_see_list:flags.2?true reactions_as_tags:flags.3?true results:Vector<ReactionCount> recent_reactions:flags.1?Vector<MessagePeerReaction> top_reactors:flags.4?Vector<MessageReactor> = MessageReactions;

savedReactionTag#cb6ff828 flags:# reaction:Reaction title:flags.0?string count:int = SavedReactionTag;

messages.savedReactionTagsNotModified#889b59ef = messages.SavedReactionTags;
messages.savedReactionTags#3259950a tags:Vector<SavedReactionTag> hash:long = messages.SavedReactionTags;

updateSavedReactionTags#39c67432 = Update;

---functions---

messages.sendReaction#d30d78d4 flags:# big:flags.1?true add_to_recent:flags.2?true peer:InputPeer msg_id:int reaction:flags.0?Vector<Reaction> = Updates;

messages.search#29ee847a flags:# peer:InputPeer q:string from_id:flags.0?InputPeer saved_peer_id:flags.2?InputPeer saved_reaction:flags.3?Vector<Reaction> top_msg_id:flags.1?int filter:MessagesFilter min_date:int max_date:int offset_id:int add_offset:int limit:int max_id:int min_id:int hash:long = messages.Messages;

messages.getDefaultTagReactions#bdf93428 hash:long = messages.Reactions;

messages.updateSavedReactionTag#60297dec flags:# reaction:Reaction title:flags.0?string = Bool;
messages.getSavedReactionTags#3637e05b flags:# peer:flags.0?InputPeer hash:long = messages.SavedReactionTags;
```

Теги построены на [реакциях »](/api/reactions/): добавить тег к сохранённому сообщению не сложнее, чем [поставить ему реакцию »](/api/reactions/) с помощью [messages.sendReaction](/method/messages.sendReaction/).

Реакции считаются тегами только для сохранённых сообщений и при выполнении одного из следующих условий:

-   у сохранённого сообщения ранее не было ни одной реакции,
-   ЛИБО у сохранённого сообщения уже есть реакции _и_ при этом установлен флаг [messageReactions](/constructor/messageReactions/).`reactions_as_tags`.  
    Если у сохранённого сообщения есть хотя бы одна реакция, но флаг `reactions_as_tags` не установлен, значит, реакция была добавлена до появления тегов — до слоя `layer` 171. В этом случае, чтобы включить возможность добавлять теги-реакции, пользователь обязан сначала удалить с сообщения все имеющиеся реакции, а затем заново поставить нужные теги-реакции.

Искать сохранённые сообщения, помеченные одной или несколькими реакциями, можно через параметр `saved_reaction` метода [messages.search](/method/messages.search/).

С помощью [messages.getDefaultTagReactions](/method/messages.getDefaultTagReactions/) можно получить рекомендуемый список тегов-реакций по умолчанию.

Кроме того, пользователь может присвоить тегу-реакции имя (не длиннее 12 символов UTF-8) методом [messages.updateSavedReactionTag](/method/messages.updateSavedReactionTag/); чтобы удалить имя, вызовите тот же метод, не устанавливая флаг `title`.

Метод [messages.getSavedReactionTags](/method/messages.getSavedReactionTags/) позволяет получить и закешировать локально полный список имён тегов-реакций, заданных пользователем; допускается дополнительно указать `peer`, чтобы получить только те теги-реакции, которые применялись к сообщениям конкретного [диалога сохранённых сообщений](#saved-message-dialogs).  
Изменение имени тега-реакции порождает обновление [updateSavedReactionTags](/constructor/updateSavedReactionTags/) во всех активных сессиях, кроме текущей; получив такое обновление, следует вызвать [messages.getSavedReactionTags](/method/messages.getSavedReactionTags/) _без_ установки флага `peer`, чтобы обновить локально закешированный список.

[@term:hash] Клиент, который сам изменил тег-реакцию, обновления [updateSavedReactionTags](/constructor/updateSavedReactionTags/) не получит: в этом случае он может либо вручную вызывать [messages.getSavedReactionTags](/method/messages.getSavedReactionTags/) после каждого изменения тегов-реакций, либо, чтобы избежать лишнего запроса, обновить закешированный список самостоятельно — тогда хеш выборки `hash` (контрольное значение, по которому сервер определяет, изменились ли данные) необходимо пересчитать по следующему алгоритму:

```
string remove_emoji_selectors(string emoji) {
  string str;
  for (i = 0; i < len(emoji); i++) {
    if (i + 3 <= len(emoji) && emoji[i] == '\xEF' && emoji[i + 1] == '\xB8' && emoji[i + 2] == '\x8F') {
      // skip \uFE0F
      i += 2;
    } else {
      str += emoji[i];
    }
  }
  return str;
}

uint64 get_md5_string_hash(string str) {
  // Binary md5 hash, not hex
  string hash = md5(str);

  uint64 result = 0;
  for (int i = 0; i <= 7; i++) {
    result += ((uint64)hash[i]) << (56 - 8 * i);
  }
  return result;
}

vector<uint64> numbers = [];

// tags is an array of savedReactionTag constructors
foreach (tags as tag) {
  if tag.reaction instanceof reactionEmoji {
    numbers.append(get_md5_string_hash(remove_emoji_selectors(tag.reaction.emoticon)))
  } else if reaction instanceof reactionCustomEmoji {
    numbers.append(tag.reaction.document_id)
  }
  if (len(tag.title) > 0) {
    numbers.append(get_md5_string_hash(tag.title));
  }
  numbers.append(tag.count);
}
```

Полученный список 64-битных целых чисел затем необходимо передать [обычному алгоритму хеширования](/api/offsets/#hash-generation).

Если список сохранённых тегов-реакций, возвращённый методом [messages.getSavedReactionTags](/method/messages.getSavedReactionTags/), не пуст, его следует показать в интерфейсе прямо под строкой поиска, по убыванию значения `count`; при поиске внутри конкретного [диалога сохранённых сообщений](#saved-message-dialogs) укажите `peer`, чтобы вернуть только теги, использованные в этом диалоге.

А вот в интерфейсе выбора тега-реакции следует показывать сначала реакции, возвращённые методом [messages.getSavedReactionTags](/method/messages.getSavedReactionTags/) (глобальный список тегов, то есть без `peer`, независимо от текущего диалога сохранённых сообщений), по убыванию значения `count`, затем реакции из [messages.getDefaultTagReactions](/method/messages.getDefaultTagReactions/), которых не было в ответе [messages.getSavedReactionTags](/method/messages.getSavedReactionTags/), и после них — любые установленные [наборы пользовательских эмодзи](/api/custom-emoji/).
