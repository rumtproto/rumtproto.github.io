---
title: "Поиск"
original: "https://core.telegram.org"
section: other
description: "Полнотекстовый поиск по русскому переводу документации Telegram: статьи, конструкторы, методы и типы схемы TL, с фильтром по разделам."
mirror: false
layout: layout.njk
---

# Поиск

<link rel="stylesheet" href="/pagefind/pagefind-ui.css">

Полнотекстовый поиск по всему сайту: статьи, конструкторы, методы и типы схемы TL. Ищет и по русскому тексту, и по именам из схемы. Фильтр **Раздел** ограничивает поиск страницами Telegram API, MTProto, Схемы или прочих разделов (FAQ).

<div id="search-page"></div>

<script src="/pagefind/pagefind-ui.js"></script>
<script>
  window.addEventListener('DOMContentLoaded', function () {
    if (!window.PagefindUI) return;
    var ui = new PagefindUI({
      element: '#search-page',
      showSubResults: true,
      showImages: false,
      pageSize: 15,
      translations: {
        placeholder: 'Поиск по сайту…',
        clear_search: 'Очистить',
        load_more: 'Показать ещё',
        search_label: 'Поиск по сайту',
        filters_label: 'Фильтры',
        zero_results: 'Ничего не найдено по запросу [SEARCH_TERM]',
        many_results: 'Найдено результатов: [COUNT] — по запросу [SEARCH_TERM]',
        one_result: 'Найден 1 результат по запросу [SEARCH_TERM]',
        alt_search: 'Ничего не найдено по запросу [SEARCH_TERM]. Показаны результаты по запросу [DIFFERENT_TERM]',
        search_suggestion: 'Ничего не найдено по запросу [SEARCH_TERM]. Попробуйте один из запросов:',
        searching: 'Идёт поиск: [SEARCH_TERM]…'
      }
    });
    var q = new URLSearchParams(window.location.search).get('q');
    if (q) ui.triggerSearch(q);
  });
</script>
