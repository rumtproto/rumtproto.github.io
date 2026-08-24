---
title: "Папки диалогов"
original: "https://core.telegram.org/api/folders"
section: api
description: "Telegram позволяет раскладывать чаты по папкам — по их типу, по состоянию уведомлений или по другим произвольным критериям, для чего в папках предусмотрены чёрные и белые списки;…"
layout: layout.njk
---

# Папки диалогов

Telegram позволяет раскладывать чаты по папкам — по их типу, по состоянию уведомлений или по другим произвольным критериям, для чего в папках предусмотрены чёрные и белые списки; такими папками можно делиться с другими пользователями.

### Папки

Схема:

```
dialogFilter#aa472651 flags:# contacts:flags.0?true non_contacts:flags.1?true groups:flags.2?true broadcasts:flags.3?true bots:flags.4?true exclude_muted:flags.11?true exclude_read:flags.12?true exclude_archived:flags.13?true title_noanimate:flags.28?true id:int title:TextWithEntities emoticon:flags.25?string color:flags.27?int pinned_peers:Vector<InputPeer> include_peers:Vector<InputPeer> exclude_peers:Vector<InputPeer> = DialogFilter;
dialogFilterChatlist#96537bd7 flags:# has_my_invites:flags.26?true title_noanimate:flags.28?true id:int title:TextWithEntities emoticon:flags.25?string color:flags.27?int pinned_peers:Vector<InputPeer> include_peers:Vector<InputPeer> = DialogFilter;
dialogFilterDefault#363293ae = DialogFilter;

dialogFilterSuggested#77744d4a filter:DialogFilter description:string = DialogFilterSuggested;

updateDialogFilter#26ffde7d flags:# id:int filter:flags.0?DialogFilter = Update;
updateDialogFilterOrder#a5d72105 order:Vector<int> = Update;
updateDialogFilters#3504914f = Update;

messages.dialogFilters#2ad93719 flags:# tags_enabled:flags.0?true filters:Vector<DialogFilter> = messages.DialogFilters;

---functions---

messages.getDialogFilters#efd48c89 = messages.DialogFilters;
messages.getSuggestedDialogFilters#a29cd42c = Vector<DialogFilterSuggested>;
messages.updateDialogFilter#1ad4a04a flags:# id:int filter:flags.0?DialogFilter = Bool;
messages.updateDialogFiltersOrder#c563c1e4 order:Vector<int> = Bool;

help.getAppConfig#61e3f854 hash:int = help.AppConfig;
```

[@term:dialog filter] В API папки называются «фильтрами диалогов» (`dialog filter` — набор правил, по которым чаты попадают в папку).  
В интерфейсе папки обычно изображаются вкладками.

При запуске клиенты вызывают:

-   [messages.getDialogFilters](/method/messages.getDialogFilters/), чтобы получить список ранее настроенных папок.
-   [messages.getSuggestedDialogFilters](/method/messages.getSuggestedDialogFilters/), чтобы получить список предлагаемых сочетаний папок.
-   [help.getAppConfig](/method/help.getAppConfig/), чтобы получить параметры конфигурации, специфичные для приложения.

Логическое значение под [JSON-ключом `dialog_filters_tooltip`](/api/config/#dialog-filters-tooltip) в результате [help.getAppConfig](/method/help.getAppConfig/) позволяет определить, следует ли сразу же показать пользователю подсказку о папках.  
После этого в интерфейсе следует показать список предлагаемых сочетаний папок.

По завершении настройки приложения вызывают [messages.updateDialogFilter](/method/messages.updateDialogFilter/), чтобы создать папку или изменить существующую.  
Как видно из конструкторов [dialogFilter](/constructor/dialogFilter/)/[dialogFilterChatlist](/constructor/dialogFilterChatlist/), у папки есть несколько флагов; их сочетание определяет, какие чаты попадут в папку (или будут из неё исключены), какой эмодзи станет значком папки и как она будет называться.  
Кроме того, в папке может быть до `dialogs_folder_pinned_limit_*` закреплённых чатов — точное значение задаётся [клиентской конфигурацией](/api/config/#client-configuration).

Конструкторы [dialogFilterChatlist](/constructor/dialogFilterChatlist/) используются для представления импортированных [общих папок](#shared-folders).

Для изменения порядка существующих папок следует использовать [messages.updateDialogFiltersOrder](/method/messages.updateDialogFiltersOrder/), передавая идентификаторы соответствующих фильтров диалогов.

Пользователям [Premium](/api/premium/) доступен также конструктор [dialogFilterDefault](/constructor/dialogFilterDefault/): он применяется только при изменении порядка папок и обозначает папку по умолчанию (все чаты).

Чтобы удалить папку, используйте [messages.updateDialogFilter](/method/messages.updateDialogFilter/), не заполняя поле-флаг `filter`.

Клиенты могут получать обновления [updateDialogFilter](/constructor/updateDialogFilter/) и [updateDialogFilterOrder](/constructor/updateDialogFilterOrder/) с новыми сведениями о фильтрах — их порождают другие клиенты при изменении данных о папках.  
Клиенты могут получить и [updateDialogFilters](/constructor/updateDialogFilters/); в этом случае сведения о папках следует запросить заново вручную с помощью [messages.getDialogFilters](/method/messages.getDialogFilters/).

#### Метки папок

```
dialogFilter#aa472651 flags:# contacts:flags.0?true non_contacts:flags.1?true groups:flags.2?true broadcasts:flags.3?true bots:flags.4?true exclude_muted:flags.11?true exclude_read:flags.12?true exclude_archived:flags.13?true title_noanimate:flags.28?true id:int title:TextWithEntities emoticon:flags.25?string color:flags.27?int pinned_peers:Vector<InputPeer> include_peers:Vector<InputPeer> exclude_peers:Vector<InputPeer> = DialogFilter;
dialogFilterChatlist#96537bd7 flags:# has_my_invites:flags.26?true title_noanimate:flags.28?true id:int title:TextWithEntities emoticon:flags.25?string color:flags.27?int pinned_peers:Vector<InputPeer> include_peers:Vector<InputPeer> = DialogFilter;

updateDialogFilters#3504914f = Update;

messages.dialogFilters#2ad93719 flags:# tags_enabled:flags.0?true filters:Vector<DialogFilter> = messages.DialogFilters;

---functions---

messages.toggleDialogFilterTags#fd2dda49 enabled:Bool = Bool;
messages.getDialogFilters#efd48c89 = messages.DialogFilters;
```

Метки папок можно включить или отключить сразу для всех [папок](#folders) методом [messages.toggleDialogFilterTags](/method/messages.toggleDialogFilterTags/) (только для пользователей [Business](/api/business/)).

Если новое значение переключателя отличается от прежнего, метод разошлёт [updateDialogFilters](/constructor/updateDialogFilters/) во все остальные активные сессии, а те в ответ должны вызвать [messages.toggleDialogFilterTags](/method/messages.toggleDialogFilterTags/) и загрузить новое значение переключателя из поля [messages.dialogFilters](/constructor/messages.dialogFilters/).`tags_enabled`.

Если метки папок включены, клиентам следует добавлять метки папок (по одной на каждую папку, в которую входит запись диалога, кроме папки «Все чаты», представленной конструктором [dialogFilterDefault](/constructor/dialogFilterDefault/), и меток с `color=-1`) ко всем записям диалогов — под предпросмотром последнего сообщения.

Такая метка должна содержать название папки и окрашиваться в цвет, заданный полем `color` этой папки.  
Цвет — целое число от −1 до 6; при значении −1 метку показывать в списке диалогов запрещено; индексам от 0 до 6 соответствуют красный, оранжевый, фиолетовый, зелёный, голубой, синий и розовый — те же цвета, что применяются для случайно подбираемых запасных [акцентных цветов сообщений](/api/colors/).

Изменять `color` метки разрешено, только если у пользователя есть подписка [Premium](/api/premium/) и метки включены.

#### Общие папки

```
inputChatlistDialogFilter#f3e0da33 filter_id:int = InputChatlist;

exportedChatlistInvite#0c5181ac flags:# title:string url:string peers:Vector<Peer> = ExportedChatlistInvite;

chatlists.exportedChatlistInvite#10e6e3a6 filter:DialogFilter invite:ExportedChatlistInvite = chatlists.ExportedChatlistInvite;

chatlists.exportedInvites#10ab6dc7 invites:Vector<ExportedChatlistInvite> chats:Vector<Chat> users:Vector<User> = chatlists.ExportedInvites;

chatlists.chatlistInviteAlready#fa87f659 filter_id:int missing_peers:Vector<Peer> already_peers:Vector<Peer> chats:Vector<Chat> users:Vector<User> = chatlists.ChatlistInvite;
chatlists.chatlistInvite#f10ece2f flags:# title_noanimate:flags.1?true title:TextWithEntities emoticon:flags.0?string peers:Vector<Peer> chats:Vector<Chat> users:Vector<User> = chatlists.ChatlistInvite;

chatlists.chatlistUpdates#93bd878d missing_peers:Vector<Peer> chats:Vector<Chat> users:Vector<User> = chatlists.ChatlistUpdates;

---functions---

chatlists.exportChatlistInvite#8472478e chatlist:InputChatlist title:string peers:Vector<InputPeer> = chatlists.ExportedChatlistInvite;

chatlists.getExportedInvites#ce03da83 chatlist:InputChatlist = chatlists.ExportedInvites;
chatlists.editExportedInvite#653db63d flags:# chatlist:InputChatlist slug:string title:flags.1?string peers:flags.2?Vector<InputPeer> = ExportedChatlistInvite;
chatlists.deleteExportedInvite#719c5c5e chatlist:InputChatlist slug:string = Bool;

chatlists.checkChatlistInvite#41c10fff slug:string = chatlists.ChatlistInvite;
chatlists.joinChatlistInvite#a6b1e39a slug:string peers:Vector<InputPeer> = Updates;

chatlists.getChatlistUpdates#89419521 chatlist:InputChatlist = chatlists.ChatlistUpdates;
chatlists.joinChatlistUpdates#e089f8f5 chatlist:InputChatlist peers:Vector<InputPeer> = Updates;
chatlists.hideChatlistUpdates#66e486fb chatlist:InputChatlist = Bool;

chatlists.getLeaveChatlistSuggestions#fdbcd714 chatlist:InputChatlist = Vector<Peer>;
chatlists.leaveChatlist#74fae13a chatlist:InputChatlist peers:Vector<InputPeer> = Updates;
```

[@term:deep link] Папками можно делиться с помощью [глубоких ссылок на папку чатов](/api/links/#chat-folder-links) (`deep link` — специальная ссылка, которая открывается прямо в приложении Telegram).  
Такие ссылки создаются вызовом [chatlists.exportChatlistInvite](/method/chatlists.exportChatlistInvite/), которому передаётся идентификатор экспортируемой папки и список `peers` — пиров, которые следует включить в общую папку.  
В массиве `peers` допускаются только каналы и группы/супергруппы; эти каналы и группы обязаны быть публичными, либо пользователь должен иметь право управлять пригласительными ссылками. Обычные группы при вызове метода автоматически [преобразуются в супергруппы](/api/channel/#migration).  
Через `title` можно также задать необязательное название общей ссылки.

Метод [chatlists.getExportedInvites](/method/chatlists.getExportedInvites/) выводит список всех ссылок, созданных для папки, метод [chatlists.editExportedInvite](/method/chatlists.editExportedInvite/) изменяет название или список `peers` конкретной ссылки, а метод [chatlists.deleteExportedInvite](/method/chatlists.deleteExportedInvite/) отзывает экспортированную ссылку, лишая новых пользователей возможности её импортировать.

Максимальное число приглашений на одну папку, которое могут создать пользователи с [Premium](/api/premium/) и без [Premium](/api/premium/), задаётся [параметрами клиентской конфигурации »](/api/config/#chatlist-invites-limit-default) `chatlist_invites_limit_default`/`chatlist_invites_limit_premium`.

Метод [chatlists.checkChatlistInvite](/method/chatlists.checkChatlistInvite/) позволяет получить сведения о глубокой ссылке на папку чатов, прежде чем импортировать её методом [chatlists.joinChatlistInvite](/method/chatlists.joinChatlistInvite/), указав в `peers`, к каким каналам и группам следует присоединиться (исключая недоступные каналы и супергруппы: пользователь не может вступить в супергруппу или канал, где он был заблокирован, — таким чатам соответствует конструктор [channelForbidden](/constructor/channelForbidden/)).  
Если пользователь не может вступить ни в один из `peers` папки, папку импортировать нельзя.

Максимальное число общих папок, к которым может присоединиться пользователь с [Premium](/api/premium/) и без [Premium](/api/premium/), задаётся [параметрами клиентской конфигурации »](/api/config/#chatlists-joined-limit-default) `chatlists_joined_limit_default`/`chatlists_joined_limit_premium`.

Пользователям, импортировавшим папку, следует получать новые пиры, добавленные в её список, вызовом [chatlists.getChatlistUpdates](/method/chatlists.getChatlistUpdates/) не чаще, чем раз в `chatlist_update_period` секунд (это [параметр клиентской конфигурации »](/api/config/#chatlist-update-period)).  
Если возвращённый список `missing_peers` не пуст, клиенту следует показать его пользователю, а тот может вступить во все перечисленные чаты или лишь в некоторые из них (исключая недоступные каналы и супергруппы); выбранные чаты передаются в параметр `peers` метода [chatlists.joinChatlistUpdates](/method/chatlists.joinChatlistUpdates/).  
Если после исключения недоступных пиров и пиров, снятых пользователем, список `peers` оказался пустым, вместо [chatlists.joinChatlistUpdates](/method/chatlists.joinChatlistUpdates/) следует вызвать [chatlists.hideChatlistUpdates](/method/chatlists.hideChatlistUpdates/).

Удаляя импортированную папку, клиент должен сначала показать пользователю список входящих в неё пиров, заранее отметив к удалению те, что перечислены в ответе [chatlists.getLeaveChatlistSuggestions](/method/chatlists.getLeaveChatlistSuggestions/): пользователь может оставить или удалить как отдельные группы и каналы папки, так и все сразу, а клиент затем вызывает [chatlists.leaveChatlist](/method/chatlists.leaveChatlist/), указывая в `peers` те чаты папки, которые следует покинуть вместе с ней.

### Папки пиров

В API есть и другой механизм выделения групп пиров — он используется архивом чатов.

Схема:

```
inputFolderPeer#fbd2c296 peer:InputPeer folder_id:int = InputFolderPeer;

folderPeer#e9baa668 peer:Peer folder_id:int = FolderPeer;

updateFolderPeers#19360dc0 folder_peers:Vector<FolderPeer> pts:int pts_count:int = Update;

updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;


inputDialogPeer#fcaafeb7 peer:InputPeer = InputDialogPeer;
inputDialogPeerFolder#64600527 folder_id:int = InputDialogPeer;

dialogPeer#e56dbf05 peer:Peer = DialogPeer;
dialogPeerFolder#514519e2 folder_id:int = DialogPeer;

---functions---

folders.editPeerFolders#6847d0ab folder_peers:Vector<InputFolderPeer> = Updates;
```

Папки пиров на уровне API обычно используются только для [архива чатов](https://telegram.org/blog/archive-and-new-design) и очень удобны, чтобы различать группы пиров: большинство связанных с пирами конструкторов (обновления, сведения о чате) содержат `folder_id`, присвоенный соответствующему чату.

В приложениях Telegram папки пиров применяются только для реализации архива чатов, которому соответствует `folder_id`, равный `1`; все остальные пиры по умолчанию находятся в `folder_id` `0`; никакие другие значения `folder_id` в настоящий момент не допускаются.

-   [folders.editPeerFolders](/method/folders.editPeerFolders/) позволяет добавлять пиры в папки пиров и удалять их оттуда.

Оба метода возвращают конструктор [updates](/constructor/updates/), содержащий одно обновление [updateFolderPeers](/constructor/updateFolderPeers/) с новым значением `folder_id` перемещённых пиров.  
Клиенты могут получать [updateFolderPeers](/constructor/updateFolderPeers/) и как обычное [обновление](/api/updates/), сформированное другими клиентами при изменении папок пиров.

[@note] В оригинале сказано «оба метода», хотя выше перечислен только один — `folders.editPeerFolders`. Это след прежней редакции документации, где рядом описывался второй метод; сейчас сказанное относится к единственному оставшемуся.

Далее клиенты могут использовать [InputDialogPeer](/type/InputDialogPeer/), чтобы сослаться либо на конкретный чат, либо сразу на все чаты в папке пиров: для той же цели сервер возвращает [DialogPeer](/type/DialogPeer/) в ряде конструкторов.
