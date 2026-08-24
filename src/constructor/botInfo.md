---
title: "botInfo"
original: "https://core.telegram.org/constructor/botInfo"
section: ref
kind: constructor
description: "Информация о ботах (доступные команды бота и прочее)"
layout: layout.njk
---

# botInfo

Информация о ботах (доступные команды бота и прочее)

```
botInfo#4d8a0299 flags:# has_preview_medias:flags.6?true user_id:flags.0?long description:flags.1?string description_photo:flags.4?Photo description_document:flags.5?Document commands:flags.2?Vector<BotCommand> menu_button:flags.3?BotMenuButton privacy_policy_url:flags.7?string app_settings:flags.8?BotAppSettings verifier_settings:flags.9?BotVerifierSettings = BotInfo;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>[@term:flags] Флаги, см. <a href="/mtproto/TL-combinators#conditional-fields">условные поля TL</a></td></tr><tr><td><strong>has_preview_medias</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/constructor/true">true</a></td><td>[@term:Mini App] Если установлено, у бота есть <a href="/api/bots/webapps#main-mini-app-previews">медиафайлы предпросмотра для настроенного главного Mini App, подробнее о них см. здесь »</a>.</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/long">long</a></td><td>Идентификатор бота</td></tr><tr><td><strong>description</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Описание бота</td></tr><tr><td><strong>description_photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/Photo">Photo</a></td><td>Фотография описания</td></tr><tr><td><strong>description_document</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/Document">Document</a></td><td>Анимация описания в формате MPEG4</td></tr><tr><td><strong>commands</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/BotCommand">BotCommand</a>&gt;</td><td>Команды бота, которые можно использовать в чате</td></tr><tr><td><strong>menu_button</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/BotMenuButton">BotMenuButton</a></td><td>Указывает действие, выполняемое при нажатии на кнопку меню ботов в интерфейсе</td></tr><tr><td><strong>privacy_policy_url</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/type/string">string</a></td><td>HTTP-ссылка на политику конфиденциальности бота. Если не задана, следует использовать команду <code>/privacy</code>, если она поддерживается ботом (то есть если она присутствует в векторе <code>commands</code>). Если она не поддерживается, вместо этого следует открыть <a href="https://telegram.org/privacy-tpa">https://telegram.org/privacy-tpa</a>.</td></tr><tr><td><strong>app_settings</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.8?<a href="/type/BotAppSettings">BotAppSettings</a></td><td>Настройки <a href="/api/bots/webapps">Mini App »</a><br></td></tr><tr><td><strong>verifier_settings</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.9?<a href="/type/BotVerifierSettings">BotVerifierSettings</a></td><td>Этот бот может <a href="/api/bots/verification">верифицировать пиров</a>: это поле содержит дополнительную информацию о верификации, которую бот может присваивать пирам.</td></tr></tbody></table>

### Тип

[BotInfo](/type/BotInfo/)

### Связанные страницы

#### [Mini Apps в Telegram](/api/bots/webapps/)

Боты могут предлагать пользователям интерактивные веб-приложения на HTML5, полностью заменяющие любой сайт.

#### [Сторонняя верификация](/api/bots/verification/)

Чтобы ещё повысить прозрачность в Telegram, официальные сторонние сервисы могут присваивать аккаунтам пользователей и чатам дополнительные значки верификации — чтобы предотвратить мошенничество и снизить распространение недостоверной информации.
