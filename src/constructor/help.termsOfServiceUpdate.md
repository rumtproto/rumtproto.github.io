---
title: "help.termsOfServiceUpdate"
original: "https://core.telegram.org/constructor/help.termsOfServiceUpdate"
section: ref
kind: constructor
description: "Информация об обновлении условий использования Telegram. Если условия использования отклонены, следует вызвать метод account.deleteAccount с причиной «Decline ToS update»"
layout: layout.njk
---

# help.termsOfServiceUpdate

Информация об обновлении условий использования Telegram. Если условия использования отклонены, следует вызвать метод [account.deleteAccount](/method/account.deleteAccount/) с причиной «Decline ToS update»

```
help.termsOfServiceUpdate#28ecf961 expires:int terms_of_service:help.TermsOfService = help.TermsOfServiceUpdate;
```

### Параметры

<table class="table"><thead><tr><th scope="col">Имя</th><th scope="col" style="text-align: center;">Тип</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><strong>expires</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Обновления условий использования нужно будет запросить с помощью <a href="/method/help.getTermsOfServiceUpdate">help.getTermsOfServiceUpdate</a> через <code>expires</code> секунд</td></tr><tr><td><strong>terms_of_service</strong></td><td style="text-align: center;"><a href="/type/help.TermsOfService">help.TermsOfService</a></td><td>Новые условия использования</td></tr></tbody></table>

### Тип

[help.TermsOfServiceUpdate](/type/help.TermsOfServiceUpdate/)

### Связанные страницы

#### [help.getTermsOfServiceUpdate](/method/help.getTermsOfServiceUpdate/)

Проверить наличие обновлений условий использования Telegram

#### [account.deleteAccount](/method/account.deleteAccount/)

Удалить аккаунт пользователя с серверов Telegram.

Также может использоваться для удаления аккаунта пользователя, который ввёл код входа, но забыл пароль двухфакторной аутентификации и не настроил способ восстановления; подробнее о восстановлении пароля [см. здесь »](/api/srp/#password-recovery), а об удалении аккаунта — [здесь »](/api/account-deletion/).
