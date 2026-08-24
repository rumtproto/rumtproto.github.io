---
title: "Возможности ИИ"
original: "https://core.telegram.org/api/ai"
section: api
description: "Telegram предлагает множество возможностей на базе ИИ, работающих поверх Cocoon — децентрализованной сети, спроектированной так, чтобы обеспечить максимальную приватность."
layout: layout.njk
---

# Возможности ИИ

Telegram предлагает множество возможностей на базе ИИ, работающих поверх [Cocoon](https://cocoon.org) — децентрализованной сети, спроектированной так, чтобы обеспечить максимальную приватность.

### Составление сообщений

```
inputAiComposeToneID#0773c080 id:long access_hash:long = InputAiComposeTone;
inputAiComposeToneSlug#1fa01357 slug:string = InputAiComposeTone;
inputAiComposeToneDefault#1fe9a9bf tone:string = InputAiComposeTone;

messageEntityDiffInsert#71777116 offset:int length:int = MessageEntity;
messageEntityDiffReplace#c6c1e5a7 offset:int length:int old_text:string = MessageEntity;
messageEntityDiffDelete#0652c1c5 offset:int length:int = MessageEntity;

textWithEntities#751f3146 text:string entities:Vector<MessageEntity> = TextWithEntities;

messages.composedMessageWithAI#90d7adfa flags:# result_text:TextWithEntities diff_text:flags.0?TextWithEntities = messages.ComposedMessageWithAI;

---functions---

messages.composeMessageWithAI#daecc589 flags:# proofread:flags.0?true emojify:flags.3?true text:TextWithEntities translate_to_lang:flags.1?string tone:flags.2?InputAiComposeTone = messages.ComposedMessageWithAI;
```

При написании сообщения используйте [messages.composeMessageWithAI](/method/messages.composeMessageWithAI/), чтобы вызвать ИИ-редактор Telegram: он умеет переводить, преобразовывать, исправлять ваш текст и расставлять в нём эмодзи множеством разных способов — и всё это приватно, силами [Cocoon](https://cocoon.org)!

Этот метод вызывается при нажатии кнопки ИИ в строке ввода текста в чатах: кнопку ИИ следует показывать только для сообщений длиннее трёх строк текста (хотя у самого метода такого ограничения нет).

[@term:flags] [@term:tone] Доступно несколько режимов редактирования, каждый включается соответствующим флагом (`flags` — битовое поле, где каждый бит разрешает отдельный необязательный параметр; `tone` — тон, то есть заданный стиль, в котором ИИ переписывает сообщение):

-   `proofread` — вычитать сообщение и исправить ошибки
-   `translate_to_lang` — перевести сообщение на указанный язык (передайте нужный код языка)
-   `tone` — переформулировать сообщение в заданном [тоне »](#ai-compose-tones)
-   `emojify` — добавить в сообщение эмодзи

Все перечисленные выше режимы можно комбинировать.

Текст для преобразования передаётся в `text`: метод вернёт конструктор [messages.composedMessageWithAI](/constructor/messages.composedMessageWithAI/), в котором преобразованное сообщение лежит в поле `result_text`, а все [сущности оформления текста](/api/entities/) при необходимости сдвинуты, изменены по длине или удалены.

Если включён **только** режим вычитки (`proofread`), метод дополнительно заполнит поле [messages.composedMessageWithAI](/constructor/messages.composedMessageWithAI/).`diff_text` «предварительно отрисованной» разницей между старым и новым текстом сообщения.

Поле `diff_text` следует отображать, просто отрисовав `textWithEntities`, который лишь в этом случае будет содержать **только** [сущности разницы, отрисовываемые так, как описано здесь »](/api/entities/#diff-entities) (обычные сущности оформления текста всегда вырезаются только из `diff_text`, но никогда — из `result_text`).

Пользователям [Premium](/api/premium/) доступно в **50 раз** больше преобразований текста с помощью ИИ в сутки: если пользователь без подписки исчерпает дневной лимит, вернётся RPC-ошибка `AICOMPOSE_FLOOD_PREMIUM`, в ответ на которую следует показать модальное окно [Premium](/api/premium/) с [идентификатором возможности ai\_compose »](/api/premium/#ai-compose).

#### Тоны ИИ-редактора

```
aiComposeTone#cff63ea9 flags:# creator:flags.0?true id:long access_hash:long slug:string title:string emoji_id:flags.1?long prompt:flags.4?string installs_count:flags.2?int author_id:flags.3?long example_english:flags.5?AiComposeToneExample = AiComposeTone;
aiComposeToneDefault#9bad6414 tone:string emoji_id:long title:string = AiComposeTone;

aicompose.tonesNotModified#c1f46103 = aicompose.Tones;
aicompose.tones#6c9d0efe hash:long tones:Vector<AiComposeTone> users:Vector<User> = aicompose.Tones;

updateAiComposeTones#8c0f91fb = Update;

inputAiComposeToneID#0773c080 id:long access_hash:long = InputAiComposeTone;
inputAiComposeToneSlug#1fa01357 slug:string = InputAiComposeTone;
inputAiComposeToneDefault#1fe9a9bf tone:string = InputAiComposeTone;

aiComposeToneExample#f1d628ec from:TextWithEntities to:TextWithEntities = AiComposeToneExample;

---functions---

aicompose.getTones#abd59201 hash:long = aicompose.Tones;

aicompose.createTone#4aa83913 flags:# display_author:flags.0?true emoji_id:long title:string prompt:string = AiComposeTone;
aicompose.updateTone#903bcf59 flags:# tone:InputAiComposeTone display_author:flags.0?Bool emoji_id:flags.1?long title:flags.2?string prompt:flags.3?string = AiComposeTone;
aicompose.deleteTone#dd39316a tone:InputAiComposeTone = Bool;

aicompose.getTone#b2e8ba03 tone:InputAiComposeTone = aicompose.Tones;
aicompose.getToneExample#d1b4ab14 tone:InputAiComposeTone num:int = AiComposeToneExample;
aicompose.saveTone#1782cbb1 tone:InputAiComposeTone unsave:Bool = Bool;
```

Чтобы получить список стандартных [тонов ИИ-редактора »](#compose-messages), предлагаемых Telegram, а также пользовательских тонов, сохранённых (установленных) текущим пользователем, используйте [aicompose.getTones](/method/aicompose.getTones/) — метод возвращает массив конструкторов [AiComposeTone](/type/AiComposeTone/).

Об изменениях в списке установленных тонов ИИ-редактора сигнализирует обновление [updateAiComposeTones](/constructor/updateAiComposeTones/): по нему следует заново вызвать [aicompose.getTones](/method/aicompose.getTones/) и обновить кеш.

Стандартные тоны ИИ-редактора представлены конструктором [aiComposeToneDefault](/constructor/aiComposeToneDefault/), а ссылаться на них следует через [inputAiComposeToneDefault](/constructor/inputAiComposeToneDefault/).

[@term:slug] Помимо встроенных тонов пользователи могут создавать, сохранять и передавать другим собственные — они представлены конструктором [aiComposeTone](/constructor/aiComposeTone/), а ссылаться на них можно либо по идентификатору через [inputAiComposeToneID](/constructor/inputAiComposeToneID/), либо по публичному короткому имени (`slug`) через [inputAiComposeToneSlug](/constructor/inputAiComposeToneSlug/).

Пользовательский тон создаётся методом [aicompose.createTone](/method/aicompose.createTone/), которому передаются `title` (до [aicompose\_tone\_title\_length\_max »](/api/config/#aicompose-tone-title-length-max) символов UTF-8), `emoji_id` со значком тона ([пользовательский эмодзи](/api/custom-emoji/)) и `prompt` (до [aicompose\_tone\_prompt\_length\_max »](/api/config/#aicompose-tone-prompt-length-max) символов UTF-8) с описанием того, как ИИ должен переписывать сообщения; установите `display_author`, чтобы публично значиться автором тона.

Метод [aicompose.updateTone](/method/aicompose.updateTone/) позволяет изменить созданный вами тон, а [aicompose.deleteTone](/method/aicompose.deleteTone/) — удалить его.

Установить или удалить тон можно методом [aicompose.saveTone](/method/aicompose.saveTone/): пользователи без [Premium](/api/premium/) могут установить до [aicompose\_tone\_saved\_limit\_default »](/api/config/#aicompose-tone-saved-limit-default) тонов, пользователи с [Premium](/api/premium/) — до [aicompose\_tone\_saved\_limit\_premium »](/api/config/#aicompose-tone-saved-limit-premium) тонов.

Отдельный тон можно получить методом [aicompose.getTone](/method/aicompose.getTone/) — например, после того как пользователь открыл [ссылку на тон ИИ-редактора »](/api/links/#ai-compose-tone-links) или просматривает превью [webPage](/constructor/webPage/) типа `telegram_aicomposetone` (с вложенным конструктором [webPageAttributeAiComposeTone](/constructor/webPageAttributeAiComposeTone/)).

Предварительный просмотр того, как тон переписывает образец сообщения, доступен через [aicompose.getToneExample](/method/aicompose.getToneExample/) — метод возвращает [aiComposeToneExample](/constructor/aiComposeToneExample/); передавайте возрастающее значение `num` (до [aicompose\_tone\_examples\_num »](/api/config/#aicompose-tone-examples-num)), чтобы перебрать доступные примеры.

Пользовательские тоны применимы везде, где принимается тон, в том числе в поле [messages.composeMessageWithAI](/method/messages.composeMessageWithAI/).`tone`.

### Краткий пересказ сообщений

```
textWithEntities#751f3146 text:string entities:Vector<MessageEntity> = TextWithEntities;

---functions---

messages.summarizeText#abbbd346 flags:# peer:InputPeer id:int to_lang:flags.0?string tone:flags.2?string = TextWithEntities;
```

Вызовите [messages.summarizeText](/method/messages.summarizeText/), чтобы кратко пересказать содержимое сообщения с помощью ИИ — приватно, силами [Cocoon](https://cocoon.org).

Клиентам следует показывать кнопку краткого пересказа у сообщений, в которых заполнено поле [message](/constructor/message/).`summary_from_language`.

Поле `summary_from_language` — это подсказка для интерфейса, выдаваемая сервером; в нём указан распознанный язык текста сообщения, которое нужно пересказать. Это поле не служит ни обязательным аргументом, ни предварительным условием вызова [messages.summarizeText](/method/messages.summarizeText/): метод можно вызывать независимо от значения `summary_from_language` у целевого сообщения.

Передайте идентификатор сообщения в `id`, а чат, в котором находится сообщение, — в `peer`.

Для краткого пересказа можно выбрать свой [тон »](#ai-compose-tones), передав идентификатор тона в `tone`.

Если задано поле `to_lang`, пересказ формируется на указанном языке; иначе — на языке самого сообщения.

### Возможности ИИ для чат-ботов

Боты Telegram предоставляют ряд возможностей для чат-ботов на базе ИИ:

-   [Потоковая передача ответа в реальном времени »](/api/bots/ai/#live-response-streaming)
-   [Форумы ботов »](/api/bots/ai/#bot-forums)
