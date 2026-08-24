---
title: "auth.authorization"
original: "https://core.telegram.org/constructor/auth.authorization"
section: ref
kind: constructor
description: "Содержит информацию об авторизации пользователя."
layout: layout.njk
---

# auth.authorization

Содержит информацию об авторизации пользователя.

```
auth.authorization#2ea2c0d4 flags:# setup_password_required:flags.1?true otherwise_relogin_days:flags.1?int tmp_sessions:flags.0?int future_auth_token:flags.2?bytes user:User = auth.Authorization;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>setup_password_required</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Предлагает пользователю установить пароль двухэтапной проверки, чтобы иметь возможность войти снова</td></tr><tr><td><strong>otherwise_relogin_days</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>Если и только если задано поле setup_password_required и пользователь отказывается установить пароль двухэтапной проверки, он сможет снова войти в свой аккаунт по SMS только по прошествии указанного числа дней.</td></tr><tr><td><strong>tmp_sessions</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Количество <a href="/api/datacenter#parallel-sessions">параллельных сессий</a>, которые клиент может открыть к основному соединению со своим домашним DC для увеличения пропускной способности; если поле отсутствует или <code>≤ 1</code>, необходимо использовать одну основную сессию</td></tr><tr><td><strong>future_auth_token</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/bytes">bytes</a></td><td><a href="/api/auth#future-auth-tokens">Токен будущей авторизации</a></td></tr><tr><td><strong>user</strong></td><td style="text-align: center;"><a href="/type/User">User</a></td><td>Информация об авторизованном пользователе</td></tr></tbody></table>

### Тип

[auth.Authorization](/type/auth.Authorization/)

### Связанные страницы

#### [Работа с разными дата-центрами](/api/datacenter/)

Как подключиться к ближайшей точке доступа дата-центра для более быстрого взаимодействия с API и на что обратить внимание при разработке клиента.

#### [Авторизация пользователя](/api/auth/)

Как зарегистрировать телефон пользователя, чтобы начать работу с API.
