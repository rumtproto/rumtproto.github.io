---
title: "ChannelAdminLogEventsFilter (тип)"
original: "https://core.telegram.org/type/ChannelAdminLogEventsFilter"
section: ref
kind: type
layout: layout.njk
---

# ChannelAdminLogEventsFilter

*Тип из схемы TL.*

> Filter for fetching events in the channel admin log

## Определение TL

```
channelAdminLogEventsFilter#ea107ae4 flags:# join:flags.0?true leave:flags.1?true invite:flags.2?true ban:flags.3?true unban:flags.4?true kick:flags.5?true unkick:flags.6?true promote:flags.7?true demote:flags.8?true info:flags.9?true settings:flags.10?true pinned:flags.11?true edit:flags.12?true delete:flags.13?true group_call:flags.14?true invites:flags.15?true send:flags.16?true forums:flags.17?true sub_extend:flags.18?true edit_rank:flags.19?true = ChannelAdminLogEventsFilter;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [channelAdminLogEventsFilter](/constructor/channelAdminLogEventsFilter/) | Filter only certain admin log events |
