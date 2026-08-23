---
title: "InputFile (тип)"
original: "https://core.telegram.org/type/InputFile"
section: ref
kind: type
layout: layout.njk
---

# InputFile

*Тип из схемы TL.*

> Defines a file uploaded by the client.

## Определение TL

```
inputFile#f52ff27f id:long parts:int name:string md5_checksum:string = InputFile;
inputFileBig#fa4f0bb5 id:long parts:int name:string = InputFile;
inputFileStoryDocument#62dc8b48 id:InputDocument = InputFile;
```

## Конструкторы

| Constructor | Описание |
|---|---|
| [inputFile](/constructor/inputFile/) | Defines a file saved in parts using the method [upload.saveFilePart](/method/upload.saveFilePart/). |
| [inputFileBig](/constructor/inputFileBig/) | Assigns a big file (over 10 MB in size), saved in part using the method [upload.saveBigFilePart](/method/upload.saveBigFilePart/). |
| [inputFileStoryDocument](/constructor/inputFileStoryDocument/) | Used to [edit the thumbnail/static preview of a story, see here »](https://core.telegram.org/api/stories#editing-stories) for more info on the full flow. |
