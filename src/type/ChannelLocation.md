---
title: "ChannelLocation (тип)"
original: "https://core.telegram.org/type/ChannelLocation"
section: ref
kind: type
layout: layout.njk
---

# ChannelLocation

*Тип из схемы TL.*

> Geographical location of supergroup (geogroups)

## Определение TL

```
channelLocationEmpty#bfb5ad8b = ChannelLocation;
channelLocation#209b82db geo_point:GeoPoint address:string = ChannelLocation;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [channelLocationEmpty](/constructor/channelLocationEmpty/) | No location (normal supergroup) |
| [channelLocation](/constructor/channelLocation/) | Geographical location of supergroup (geogroups) |
