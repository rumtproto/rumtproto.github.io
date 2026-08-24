---
title: "MessageEntity"
original: "https://core.telegram.org/type/MessageEntity"
section: ref
kind: type
description: "Сущности оформления сообщения, задающие форматирование текста"
layout: layout.njk
---

# MessageEntity

Сущности оформления сообщения, задающие форматирование текста

#### [Актуальная TL-схема сквозного шифрования](/schema/end-to-end/)

```
===45===
messageEntityBold#bd610bc9 offset:int length:int = MessageEntity;
messageEntityBotCommand#6cef8ac7 offset:int length:int = MessageEntity;
messageEntityCode#28a20571 offset:int length:int = MessageEntity;
messageEntityEmail#64e475c2 offset:int length:int = MessageEntity;
messageEntityHashtag#6f635b0d offset:int length:int = MessageEntity;
messageEntityItalic#826f8b60 offset:int length:int = MessageEntity;
messageEntityMention#fa04579d offset:int length:int = MessageEntity;
messageEntityPre#73924be0 offset:int length:int language:string = MessageEntity;
messageEntityTextUrl#76a6d327 offset:int length:int url:string = MessageEntity;
messageEntityUnknown#bb92ba95 offset:int length:int = MessageEntity;
messageEntityUrl#6ed02538 offset:int length:int = MessageEntity;

===101===
messageEntityBlockquote#020df5d0 offset:int length:int = MessageEntity;
messageEntityStrike#bf0693d4 offset:int length:int = MessageEntity;
messageEntityUnderline#9c4e7e8b offset:int length:int = MessageEntity;

===144===
messageEntityCustomEmoji#c8cf05f8 offset:int length:int document_id:long = MessageEntity;
messageEntitySpoiler#32ca960f offset:int length:int = MessageEntity;
```

Схема API:

```
messageEntityUnknown#bb92ba95 offset:int length:int = MessageEntity;
messageEntityMention#fa04579d offset:int length:int = MessageEntity;
messageEntityHashtag#6f635b0d offset:int length:int = MessageEntity;
messageEntityBotCommand#6cef8ac7 offset:int length:int = MessageEntity;
messageEntityUrl#6ed02538 offset:int length:int = MessageEntity;
messageEntityEmail#64e475c2 offset:int length:int = MessageEntity;
messageEntityBold#bd610bc9 offset:int length:int = MessageEntity;
messageEntityItalic#826f8b60 offset:int length:int = MessageEntity;
messageEntityCode#28a20571 offset:int length:int = MessageEntity;
messageEntityPre#73924be0 offset:int length:int language:string = MessageEntity;
messageEntityTextUrl#76a6d327 offset:int length:int url:string = MessageEntity;
messageEntityMentionName#dc7b1140 offset:int length:int user_id:long = MessageEntity;
inputMessageEntityMentionName#208e68c9 offset:int length:int user_id:InputUser = MessageEntity;
messageEntityPhone#9b69e34b offset:int length:int = MessageEntity;
messageEntityCashtag#4c4e743f offset:int length:int = MessageEntity;
messageEntityUnderline#9c4e7e8b offset:int length:int = MessageEntity;
messageEntityStrike#bf0693d4 offset:int length:int = MessageEntity;
messageEntityBankCard#761e6af4 offset:int length:int = MessageEntity;
messageEntitySpoiler#32ca960f offset:int length:int = MessageEntity;
messageEntityCustomEmoji#c8cf05f8 offset:int length:int document_id:long = MessageEntity;
messageEntityBlockquote#f1ccaaac flags:# collapsed:flags.0?true offset:int length:int = MessageEntity;
messageEntityFormattedDate#904ac7c7 flags:# relative:flags.0?true short_time:flags.1?true long_time:flags.2?true short_date:flags.3?true long_date:flags.4?true day_of_week:flags.5?true offset:int length:int date:int = MessageEntity;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/messageEntityUnknown">messageEntityUnknown</a></td><td>Неизвестная сущность оформления</td></tr><tr><td><a href="/constructor/messageEntityMention">messageEntityMention</a></td><td>Сущность оформления, <a href="/api/mentions">упоминающая</a> пользователя по <code>@username</code>; для упоминания пользователей по их идентификатору можно также использовать <a href="/constructor/messageEntityMentionName">messageEntityMentionName</a>.</td></tr><tr><td><a href="/constructor/messageEntityHashtag">messageEntityHashtag</a></td><td>Сущность оформления <strong>#хештег</strong></td></tr><tr><td><a href="/constructor/messageEntityBotCommand">messageEntityBotCommand</a></td><td>Сущность оформления, представляющая /команду бота</td></tr><tr><td><a href="/constructor/messageEntityUrl">messageEntityUrl</a></td><td>Сущность оформления, представляющая ссылку в тексте: <a href="https://google.com">https://google.com</a>; для <a href="https://google.com">текстовых ссылок</a> используйте <a href="/constructor/messageEntityTextUrl">messageEntityTextUrl</a>.</td></tr><tr><td><a href="/constructor/messageEntityEmail">messageEntityEmail</a></td><td>Сущность оформления, представляющая адрес <a href="mailto:email@example.com">email@example.com</a>.</td></tr><tr><td><a href="/constructor/messageEntityBold">messageEntityBold</a></td><td>Сущность оформления, представляющая <strong>полужирный текст</strong>.</td></tr><tr><td><a href="/constructor/messageEntityItalic">messageEntityItalic</a></td><td>Сущность оформления, представляющая <em>курсивный текст</em>.</td></tr><tr><td><a href="/constructor/messageEntityCode">messageEntityCode</a></td><td>Сущность оформления, представляющая <code>codeblock</code>.</td></tr><tr><td><a href="/constructor/messageEntityPre">messageEntityPre</a></td><td>Сущность оформления, представляющая форматированный <code>codeblock</code> с возможностью указать язык программирования для этого блока кода.</td></tr><tr><td><a href="/constructor/messageEntityTextUrl">messageEntityTextUrl</a></td><td>Сущность оформления, представляющая <a href="https://google.com">текстовую ссылку</a>: для ссылок прямо в тексте, вроде <a href="https://google.com">https://google.com</a>, используйте <a href="/constructor/messageEntityUrl">messageEntityUrl</a>.<br><br>Обратите внимание, что перед открытием этой ссылки пользователю необходимо показать дополнительное окно подтверждения с полным URL, если только домен не удовлетворяет условиям, указанным в <a href="/api/config#whitelisted-domains">документации по белому списку доменов »</a>.</td></tr><tr><td><a href="/constructor/messageEntityUnderline">messageEntityUnderline</a></td><td>Сущность оформления, представляющая подчёркнутый текст.</td></tr><tr><td><a href="/constructor/messageEntityStrike">messageEntityStrike</a></td><td>Сущность оформления, представляющая <del>зачёркнутый</del> текст.</td></tr><tr><td><a href="/constructor/messageEntityBlockquote">messageEntityBlockquote</a></td><td>Сущность оформления, представляющая цитату.</td></tr><tr><td><a href="/constructor/messageEntitySpoiler">messageEntitySpoiler</a></td><td>Сущность оформления, представляющая спойлер</td></tr><tr><td><a href="/constructor/messageEntityCustomEmoji">messageEntityCustomEmoji</a></td><td>Представляет пользовательский эмодзи.<br>Учтите, что эта сущность обязана охватывать ровно один обычный эмодзи (тот, который содержится в <a href="/constructor/documentAttributeCustomEmoji">documentAttributeCustomEmoji</a>.<code>alt</code>) в соответствующем тексте, иначе сервер её проигнорирует.</td></tr><tr><td><a href="/constructor/messageEntityMentionName">messageEntityMentionName</a></td><td>Сущность оформления, представляющая <a href="/api/mentions">упоминание пользователя</a>; для <em>создания</em> упоминания используйте <a href="/constructor/inputMessageEntityMentionName">inputMessageEntityMentionName</a>.</td></tr><tr><td><a href="/constructor/inputMessageEntityMentionName">inputMessageEntityMentionName</a></td><td>Сущность оформления, с помощью которой можно создать <a href="/api/mentions">упоминание пользователя</a>; в получаемых упоминаниях вместо неё используется конструктор <a href="/constructor/messageEntityMentionName">messageEntityMentionName</a>.</td></tr><tr><td><a href="/constructor/messageEntityPhone">messageEntityPhone</a></td><td>Сущность оформления, представляющая номер телефона.</td></tr><tr><td><a href="/constructor/messageEntityCashtag">messageEntityCashtag</a></td><td>Сущность оформления, представляющая <strong>$cashtag</strong>.</td></tr><tr><td><a href="/constructor/messageEntityBankCard">messageEntityBankCard</a></td><td>Обозначает номер банковской карты</td></tr><tr><td><a href="/constructor/messageEntityFormattedDate">messageEntityFormattedDate</a></td><td>Представляет конкретный момент времени, отображаемый так, как указано <a href="/api/entities#date-entities">здесь »</a><br><br>Все флаги необязательны, но действуют следующие ограничения:<br><br>- <code>relative</code> нельзя сочетать ни с каким другим флагом<br>- <code>short_time</code> и <code>long_time</code> нельзя сочетать друг с другом<br>- <code>short_date</code> и <code>long_date</code> нельзя сочетать друг с другом<br><br>Если флаги сочетаются, порядок их отображения в тексте следующий:<br><br>- <code>day_of_week</code><br>- <code>short_time</code>/<code>long_time</code><br>- <code>short_date</code>/<code>long_date</code></td></tr><tr><td><a href="/constructor/messageEntityDiffInsert">messageEntityDiffInsert</a></td><td>Представляет добавление в diff: отобразите его, просто <u>подчеркнув</u> указанный фрагмент и окрасив его в зелёный цвет; подробнее об отображении сущностей diff см. <a href="/api/entities#diff-entities">здесь »</a>.</td></tr><tr><td><a href="/constructor/messageEntityDiffReplace">messageEntityDiffReplace</a></td><td>Представляет замену в diff, отображайте её следующим образом:<br><br>- Вставьте <code>old_text</code> в текст по смещению <code>offset</code>, <u>подчеркните</u> его и окрасьте в красный цвет: учтите, что эта вставка не влияет на смещения следующих за ней сущностей.<br>- <u>Подчеркните</u> фрагмент, ограниченный значениями <code>offset</code> и <code>limit</code>, и окрасьте его в зелёный цвет.<br><br>Подробнее об отображении сущностей diff см. <a href="/api/entities#diff-entities">здесь »</a>.</td></tr><tr><td><a href="/constructor/messageEntityDiffDelete">messageEntityDiffDelete</a></td><td>Представляет удаление в diff: отобразите его, просто <u>подчеркнув</u> указанный фрагмент и окрасив его в красный цвет; подробнее об отображении сущностей diff см. <a href="/api/entities#diff-entities">здесь »</a>.</td></tr></tbody></table>
