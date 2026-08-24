---
title: "poll"
original: "https://core.telegram.org/constructor/poll"
section: ref
kind: constructor
description: "Опрос"
layout: layout.njk
---

# poll

Опрос

```
poll#58747131 id:long flags:# closed:flags.0?true public_voters:flags.1?true multiple_choice:flags.2?true quiz:flags.3?true question:TextWithEntities answers:Vector<PollAnswer> close_period:flags.4?int close_date:flags.5?int = Poll;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Идентификатор опроса</td></tr><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>closed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Завершён ли опрос и не принимает ли он больше ответов</td></tr><tr><td><strong>public_voters</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Видны ли отданные голоса всем пользователям (неанонимный опрос)</td></tr><tr><td><strong>multiple_choice</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Можно ли выбрать в ответе несколько вариантов</td></tr><tr><td><strong>quiz</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/constructor/true">true</a></td><td>Является ли это викториной (с неверными и верными ответами, результаты показываются в возвращаемом типе).<br>При создании опроса верные ответы указываются в <a href="/constructor/inputMediaPoll">inputMediaPoll</a>.<code>correct_answers</code>.</td></tr><tr><td><strong>open_answers</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/constructor/true">true</a></td><td>Могут ли пользователи добавлять новые варианты ответа после создания опроса, см. <a href="/api/poll#open-answer-polls">опросы со свободным ответом »</a></td></tr><tr><td><strong>revoting_disabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/constructor/true">true</a></td><td>Если установлено, пользователи не могут изменить свой голос после его подачи</td></tr><tr><td><strong>shuffle_answers</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.8?<a href="/constructor/true">true</a></td><td>Показываются ли варианты ответа каждому пользователю в случайном порядке</td></tr><tr><td><strong>hide_results_until_close</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.9?<a href="/constructor/true">true</a></td><td>Скрыты ли результаты голосования от всех участников до закрытия опроса</td></tr><tr><td><strong>creator</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.10?<a href="/constructor/true">true</a></td><td>Создал ли текущий пользователь этот опрос</td></tr><tr><td><strong>subscribers_only</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.11?<a href="/constructor/true">true</a></td><td>Могут ли голосовать только подписчики: пользователь может проголосовать, только если он сейчас состоит в канале или супергруппе и вступил туда не менее чем за 24 часа до публикации опроса, см. <a href="/api/poll#subscriber-only-polls">опросы только для подписчиков »</a>.</td></tr><tr><td><strong>question</strong></td><td style="text-align: center;"><a href="/type/TextWithEntities">TextWithEntities</a></td><td>Вопрос опроса (только пользователи <a href="/api/premium">Premium</a> могут использовать здесь <a href="/api/custom-emoji">сущности с пользовательскими эмодзи</a>).</td></tr><tr><td><strong>answers</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/PollAnswer">PollAnswer</a>&gt;</td><td>Возможные варианты ответа (от 2 до <a href="/api/config#poll-answers-max">poll_answers_max</a>); для голосования используйте <a href="/method/messages.sendVote">messages.sendVote</a>.</td></tr><tr><td><strong>close_period</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/int">int</a></td><td>Время в секундах, в течение которого опрос будет активен после создания, но не более <a href="/api/config#poll-close-period-max"><code>poll_close_period_max</code> »</a> секунд. Нельзя использовать вместе с close_date.</td></tr><tr><td><strong>close_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/int">int</a></td><td>Момент времени (Unix timestamp), когда опрос будет автоматически закрыт. Не более чем на <a href="/api/config#poll-close-period-max"><code>poll_close_period_max</code> »</a> секунд вперёд; нельзя использовать вместе с close_period.</td></tr><tr><td><strong>countries_iso2</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.12?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/string">string</a>&gt;</td><td>Если установлено, голосовать могут только пользователи из стран с указанными кодами по стандарту ISO 3166-1 alpha-2, см. <a href="/api/poll#country-restricted-polls">опросы с ограничением по странам »</a>; пользователь может проголосовать, только если параметр конфигурации <a href="/api/config#phone-country-iso2"><code>phone_country_iso2</code> »</a> содержится в этом списке.</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>[@term:hash] Хеш для использования с <a href="/method/messages.getPollResults">messages.getPollResults</a></td></tr></tbody></table>

### Тип

[Poll](/type/Poll/)

### Связанные страницы

#### [inputMediaPoll](/constructor/inputMediaPoll/)

Опрос

#### [Опросы и викторины](/api/poll/)

Telegram позволяет отправлять опросы и викторины, в которых могут проголосовать тысячи, если не миллионы пользователей в чатах и каналах.

#### [Telegram Premium](/api/premium/)

Telegram Premium — необязательная подписка, которая открывает дополнительные эксклюзивные возможности на стороне клиента и API и одновременно помогает поддерживать разработку приложения.

#### [Пользовательские эмодзи](/api/custom-emoji/)

Telegram позволяет вставлять в сообщения анимированные и статичные пользовательские эмодзи.

#### [Конфигурация клиента](/api/config/)

У MTProto API есть несколько параметров конфигурации, которые можно получить соответствующими методами.

#### [messages.sendVote](/method/messages.sendVote/)

Проголосовать в [опросе](/constructor/poll/)

Начиная со слоя 159 голос отправляется от имени пира, указанного через [messages.saveDefaultSendAs](/method/messages.saveDefaultSendAs/).

Перед голосованием клиентам следует проверить, что пользователю действительно разрешено голосовать: голосование невозможно, если опрос закрыт, если он [только для подписчиков »](/api/poll/#subscriber-only-polls), а у пользователя нет нужной подписки, либо если он [ограничен по странам »](/api/poll/#country-restricted-polls), а [`phone_country_iso2` »](/api/config/#phone-country-iso2) пользователя отсутствует в списке разрешённых стран опроса. Полный перечень условий см. в разделе [ограничения на голосование »](/api/poll/#vote-restrictions).

#### [messages.getPollResults](/method/messages.getPollResults/)

Получить результаты опроса
