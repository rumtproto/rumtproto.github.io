---
title: "DecryptedMessageMedia"
original: "https://core.telegram.org/type/DecryptedMessageMedia"
section: ref
kind: type
description: "Объект описывает медиасодержимое зашифрованного сообщения."
layout: layout.njk
---

# DecryptedMessageMedia

Объект описывает медиасодержимое зашифрованного сообщения.

```
===8===
decryptedMessageMediaEmpty#89f5c4a = DecryptedMessageMedia;
decryptedMessageMediaPhoto#32798a8c thumb:bytes thumb_w:int thumb_h:int w:int h:int size:int key:bytes iv:bytes = DecryptedMessageMedia;
decryptedMessageMediaVideo#4cee6ef3 thumb:bytes thumb_w:int thumb_h:int duration:int w:int h:int size:int key:bytes iv:bytes = DecryptedMessageMedia;
decryptedMessageMediaGeoPoint#35480a59 lat:double long:double = DecryptedMessageMedia;
decryptedMessageMediaContact#588a0a97 phone_number:string first_name:string last_name:string user_id:int = DecryptedMessageMedia;
decryptedMessageMediaDocument#b095434b thumb:bytes thumb_w:int thumb_h:int file_name:string mime_type:string size:int key:bytes iv:bytes = DecryptedMessageMedia;
decryptedMessageMediaAudio#6080758f duration:int size:int key:bytes iv:bytes = DecryptedMessageMedia;

===17===
decryptedMessageMediaVideo#524a415d thumb:bytes thumb_w:int thumb_h:int duration:int mime_type:string w:int h:int size:int key:bytes iv:bytes = DecryptedMessageMedia;
decryptedMessageMediaAudio#57e0a9cb duration:int mime_type:string size:int key:bytes iv:bytes = DecryptedMessageMedia;

===23===
decryptedMessageMediaExternalDocument#fa95b0dd id:long access_hash:long date:int mime_type:string size:int thumb:PhotoSize dc_id:int attributes:Vector<DocumentAttribute> = DecryptedMessageMedia;

===45===
decryptedMessageMediaPhoto#f1fa8d78 thumb:bytes thumb_w:int thumb_h:int w:int h:int size:int key:bytes iv:bytes caption:string = DecryptedMessageMedia;
decryptedMessageMediaVideo#970c8c0e thumb:bytes thumb_w:int thumb_h:int duration:int mime_type:string w:int h:int size:int key:bytes iv:bytes caption:string = DecryptedMessageMedia;
decryptedMessageMediaDocument#7afe8ae2 thumb:bytes thumb_w:int thumb_h:int mime_type:string size:int key:bytes iv:bytes attributes:Vector<DocumentAttribute> caption:string = DecryptedMessageMedia;
decryptedMessageMediaVenue#8a0df56f lat:double long:double title:string address:string provider:string venue_id:string = DecryptedMessageMedia;
decryptedMessageMediaWebPage#e50511d8 url:string = DecryptedMessageMedia;

===143===
decryptedMessageMediaDocument#6abd9782 thumb:bytes thumb_w:int thumb_h:int mime_type:string size:long key:bytes iv:bytes attributes:Vector<DocumentAttribute> caption:string = DecryptedMessageMedia;
```

### Конструкторы

<table class="table"><thead><tr><th scope="col">Конструктор</th><th scope="col">Описание</th></tr></thead><tbody><tr><td><a href="/constructor/decryptedMessageMediaEmpty">decryptedMessageMediaEmpty</a></td><td>Пустой конструктор, медиасодержимое отсутствует.</td></tr><tr><td><a href="/constructor/decryptedMessageMediaPhoto">decryptedMessageMediaPhoto</a></td><td>Фотография, вложенная в зашифрованное сообщение.</td></tr><tr><td><a href="/constructor/decryptedMessageMediaVideo">decryptedMessageMediaVideo</a></td><td>Видео, вложенное в зашифрованное сообщение.</td></tr><tr><td><a href="/constructor/decryptedMessageMediaGeoPoint">decryptedMessageMediaGeoPoint</a></td><td>Географическая точка, приложенная к зашифрованному сообщению.</td></tr><tr><td><a href="/constructor/decryptedMessageMediaContact">decryptedMessageMediaContact</a></td><td>Контакт, приложенный к зашифрованному сообщению.</td></tr><tr><td><a href="/constructor/decryptedMessageMediaDocument">decryptedMessageMediaDocument</a></td><td>Документ, вложенный в сообщение в секретном чате.</td></tr><tr><td><a href="/constructor/decryptedMessageMediaAudio">decryptedMessageMediaAudio</a></td><td>Аудиофайл, вложенный в сообщение секретного чата.</td></tr><tr><td><a href="/constructor/decryptedMessageMediaExternalDocument">decryptedMessageMediaExternalDocument</a></td><td>Документ не из сквозного шифрования, пересланный из несекретного чата</td></tr><tr><td><a href="/constructor/decryptedMessageMediaVenue">decryptedMessageMediaVenue</a></td><td>Заведение</td></tr><tr><td><a href="/constructor/decryptedMessageMediaWebPage">decryptedMessageMediaWebPage</a></td><td>Предпросмотр веб-страницы</td></tr></tbody></table>
