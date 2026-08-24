---
title: "Формальное описание TL"
original: "https://core.telegram.org/mtproto/TL-formal"
section: mtproto
description: "См. также Язык TL. Синтаксис объявления комбинаторов описан в статье Формальное объявление комбинаторов TL. Синтаксис шаблонов описан в статье Формальное объявление шаблонов TL."
layout: layout.njk
---

# Формальное описание TL

См. также [Язык TL](TL). Синтаксис объявления комбинаторов описан в статье [Формальное объявление комбинаторов TL](TL-combinators). Синтаксис шаблонов описан в статье [Формальное объявление шаблонов TL](TL-patterns).

### Лексемы

Комментарии такие же, как в C/C++. Их удаляет лексический анализатор (например, заменяя одним пробелом). Лексемы разделяются пробельными символами. За исключением строковых констант, лексема не может содержать пробелов.

Классы символов:

_lc-letter_ ::= `a` | `b` | ... | `z`  
_uc-letter_ ::= `A` | `B` | ... | `Z`  
_digit_ ::= `0` | `1` | ... | `9`  
_hex-digit_ ::= _digit_ | `a` | `b` | `c` | `d` | `e` | `f`  
_underscore_ ::= `_`  
_letter_ ::= _lc-letter_ | _uc-letter_  
_ident-char_ ::= _letter_ | _digit_ | _underscore_

Простые идентификаторы и ключевые слова:

_lc-ident_ ::= _lc-letter_ { _ident-char_ }  
_uc-ident_ ::= _uc-letter_ { _ident-char_ }  
_namespace-ident_ ::= _lc-ident_  
_lc-ident-ns_ ::= \[ _namespace-ident_ `.` \] _lc-ident_  
_uc-ident-ns_ ::= \[ _namespace-ident_ `.` \] _uc-ident_  
_lc-ident-full_ ::= _lc-ident-ns_ \[ `#` _hex-digit_ \*8 \]

Лексемы:

_underscore_ ::= `_`  
_colon_ ::= `:`  
_semicolon_ ::= `;`  
_open-par_ ::= `(`  
_close-par_ ::= `)`  
_open-bracket_ ::= `[`  
_close-bracket_ ::= `]`  
_open-brace_ ::= `{`  
_close-brace_ ::= `}`  
_triple-minus_ ::= `---`  
_nat-const_ ::= _digit_ { _digit_ }  
_lc-ident-full_  
_lc-ident_  
_uc-ident-ns_  
_equals_ ::= `=`  
_hash_ ::= `#`  
_question-mark_ ::= `?`  
_percent_ ::= `%`  
_plus_ ::= `+`  
_langle_ ::= `<`  
_rangle_ ::= `>`  
_comma_ ::= `,`  
_dot_ ::= `.`  
_asterisk_ ::= `*`  
_excl-mark_ ::= `!`  
_Final-kw_ ::= `Final`  
_New-kw_ ::= `New`  
_Empty-kw_ ::= `Empty`

`Final` — зарезервированное ключевое слово, то есть особая лексема. Слова вроде `Type` ключевыми словами не являются — это идентификаторы с предустановленными значениями.

Лексемы, состоящие из одного или нескольких постоянных символов, далее обозначаются самими этими символами в кавычках (например, `---` вместо _triple-minus_).

## Синтаксис

### Общий синтаксис программы на TL

Синтаксически программа на TL представляет собой поток лексем (разделённых пробелами, которые на этом этапе игнорируются). Общая структура программы:

_TL-program_ ::= _constr-declarations_ { `---` `functions` `---` _fun-declarations_ | `---` `types` `---` _constr-declarations_ }

Объявления конструкторов и функций почти совпадают по синтаксису (и те и другие — комбинаторы):

_constr-declarations_ ::= { _declaration_ }  
_fun-declarations_ ::= { _declaration_ }

Объявления бывают разных видов:

_declaration_ ::= _combinator-decl_ | _partial-app-decl_ | _final-decl_

Прежде чем объяснять, как задаются объявления комбинаторов, частичных применений и `финализации` типа, введём дополнительные синтаксические категории:

### Синтаксические категории и конструкции

Важную роль играет понятие выражения (_expr_). Различают типовые выражения (_type-expr_) и числовые выражения (_nat-expr_). Однако определяются они одинаково. Их корректность в качестве типового или числового выражения проверяется при проверке типа анализируемого выражения.

_type-expr_ ::= _expr_  
_nat-expr_ ::= _expr_  
_expr_ ::= { _subexpr_ }  
_subexpr_ ::= _term_ | _nat-const_ `+` _subexpr_ | _subexpr_ `+` _nat-const_  
_term_ ::= `(` _expr_ `)` | _type-ident_ | _var-ident_ | _nat-const_ | `%` _term_ | _type-ident_ `<` _expr_ { `,` _expr_ } `>`  
_type-ident_ ::= _boxed-type-ident_ | _lc-ident-ns_ | `#`  
_boxed-type-ident_ ::= _uc-ident-ns_  
_var-ident_ ::= _lc-ident_ | _uc-ident_  
_type-term_ ::= _term_  
_nat-term_ ::= _term_

Обратите внимание: запись `E = E_1 E_2 ... E_n` в выражении для _expr_ означает применение функции _E\_1_ к аргументу _E\_2_, затем применение результата к _E\_3_ и так далее. В частности, `E_1 E_2 E_3 = (E_1 E_2) E_3`. Одиночный символ `#` включён в _type-ident_, поскольку на деле это идентификатор встроенного типа (`#` — синоним `nat`).

Выражение `E<E_1,...,E_n>` — синтаксический сахар для `(E (E_1) ... (E_n))`, то есть оба выражения приводятся к одному и тому же внутреннему представлению.

### Объявления комбинаторов

_combinator-decl_ ::= _full-combinator-id_ { _opt-args_ } { _args_ } `=` _result-type_ `;`  
_full-combinator-id_ ::= _lc-ident-full_ | `_`  
_combinator-id_ ::= _lc-ident-ns_ | `_`  
_opt-args_ ::= `{` _var-ident_ { _var-ident_ } : \[_excl-mark_\] _type-expr_ `}`  
_args_ ::= _var-ident-opt_ `:` \[ _conditional-def_ \] \[ `!` \] _type-term_  
_args_ ::= \[ _var-ident-opt_ `:` \] \[ _multiplicity_ `*`\] `[` { _args_ } `]`  
_args_ ::= `(` _var-ident-opt_ { _var-ident-opt_ } `:` \[`!`\] _type-term_ `)`  
_args_ ::= \[ `!` \] _type-term_  
_multiplicity_ ::= _nat-term_  
_var-ident-opt_ ::= _var-ident_ | `_`  
_conditional-def_ ::= _var-ident_ \[ `.` _nat-const_ \] `?`  
_result-type_ ::= _boxed-type-ident_ { _subexpr_ }  
_result-type_ ::= _boxed-type-ident_ `<` _subexpr_ { `,` _subexpr_ } `>`

Что именно это означает, описано в статье [Формальное объявление комбинаторов TL](TL-combinators). Здесь лишь отметим, что при объявлении типа очередного аргумента комбинатора в качестве переменных можно использовать только имена ранее описанных (расположенных левее) аргументов того же комбинатора, а при объявлении типа результата доступны все его параметры (типа `Type` и `#`).

[@term:bare type] Обратите внимание: имена объявленных таким образом комбинаторов могут использоваться в самом TL только как соответствующие голые типы (`bare type` — тип, значение которого сериализуется без предваряющего номера конструктора). Единственные комбинаторы, встречающиеся в объявлениях, — встроенные: `O : #` и `S : # -> #`.

Существуют также «псевдообъявления», допустимые лишь для объявления встроенных типов (таких как `int ? = Int;`):

_builtin-combinator-decl_ ::= _full-combinator-id_ `?` `=` _boxed-type-ident_ `;`

### Частичные применения (шаблоны)

_partial-app-decl_ ::= _partial-type-app-decl_ | _partial-comb-app-decl_  
_partial-type-app-decl_ ::= _boxed-type-ident_ _subexpr_ { _subexpr_ } `;` | _boxed-type-ident_ `<` _expr_ { `,` _expr_ } `>` `;`  
_partial-comb-app-decl_ ::= _combinator-id_ _subexpr_ { _subexpr_ } `;`

См. [Формальное объявление шаблонов TL](TL-patterns).

### Финализация типа

_final-decl_ ::= `New` _boxed-type-ident_ `;` | `Final` _boxed-type-ident_ `;` | `Empty` _boxed-type-ident_ `;`

Объявление такого вида означает, что для указанного типа не должно быть ни одного конструктора: до объявления — в случае `New` и после объявления — в случае `Final`. Ключевое слово `Empty` даёт оба эффекта сразу.

### Предопределённые идентификаторы

Почти все предопределённые идентификаторы можно задать с помощью следующей схемы (обычно она находится в файле `common.tl`):

/////  
//  
// Common Types  
//  
/////

// Built-in types  
int ? = Int;  
long ? = Long;  
double ? = Double;  
string ? = String;

// Boolean emulation  
boolFalse = Bool;  
boolTrue = Bool;

// Boolean for diagonal queries  
boolStat statTrue:int statFalse:int statUnknown:int = BoolStat;

// Vector  
vector {t:Type} # \[t\] = Vector t;  
tuple {t:Type} {n:#} \[t\] = Tuple t n;  
vectorTotal {t:Type} total\_count:int vector:%(Vector t) = VectorTotal t;

/////  
//  
// Result- (Maybe-) types  
//  
/////

resultFalse {t:Type} = Maybe t;  
resultTrue {t:Type} result:t = Maybe t;

pair {X:Type} {Y:Type} a:X b:Y = Pair X Y;  
map {X:Type} {Y:Type} key:X value:Y = Map X Y;

Empty False;  
true = True;

unit = Unit;

-   Предопределённый идентификатор `Type`: этот тип обозначает тип всех типов. Обычно он применяется для указания типов необязательных параметров в конструкторах полиморфных типов. При большом желании его можно использовать и самостоятельно, но на практике это требуется крайне редко.

-   Идентификатор `#`: этот тип служит для обозначения особого типа неотрицательных целых чисел в диапазоне от 0 до 2^31-1; его основное назначение то же, что и у `Type`. Есть два встроенных конструктора: `O` : # и `S` : # -> # («ноль» и «следующее число» соответственно), которые работают так, как если бы `#` был определён схемой

O = #;  
S # = #;

-   Идентификатор `Tuple`: Type -> # -> Type обозначает набор из указанного количества значений заданного типа. Иначе говоря, _Tuple X n_ означает «набор из _n_ значений типа _X_».

-   Тип `Bool` с двумя конструкторами `boolTrue` и `boolFalse` служит для передачи логических значений.

-   Тип `False`, у которого нет ни одного конструктора, можно использовать вместо необъявленных или некорректных типов при построении схемы TL, поскольку любая попытка (де)сериализовать значение типа `False` приведёт к ошибке. Пример использования:

user {flags:#} id:flags.0?string first\_name:flags.1?string last\_name:flags.2?string reserved3:flags.3?False reserved4:flags.4?False = User flags;  
user\_present {flags:#} info:%(User flags) = UserInfo flags;  
user\_absent {flags:#} = UserInfo flags;  
getUser flags:# id:int = !UserInfo flags;

[@term:flags] В будущем биты 3 и 4 поля `flags` (битовая маска, в которой каждый бит отвечает за наличие своего необязательного поля) могут быть задействованы для передачи новых полей — после изменения имён и типов полей `reserved3` и `reserved4`. Это изменит номер конструктора `user`, но большой роли не играет, так как тип `User flags` используется только как голый тип. Передача битов 3 или 4 в поле `flags` запроса `getUser` до того, как эти поля будут действительно определены, приведёт к ошибке (де)сериализации запроса.

-   Тип `True` с единственным нулевым конструктором `true` играет роль, схожую с ролью типа void в C/C++. Особенно он полезен как голый тип `%True`, он же `true`, поскольку его сериализация имеет нулевую длину. Например, использованный выше конструктор `first_name:flags.1?string` на самом деле лишь сокращённая запись (пока не поддерживаемого) общего конструктора с альтернативным типом `first_name:(flags.1?string:true)`.

При непосредственном использовании в [условном поле](/mtproto/TL-combinators/#conditional-fields) он может просто обозначать наличие (отсутствие) некоторого параметра с типом void. Если условное поле присутствует, связанный с ним параметр не заполняется; условное поле просто существует, и сам факт его наличия можно использовать для выполнения тех или иных действий, например:

```
user {flags:#} id:flags.0?string first_name:flags.1?string last_name:flags.2?string bot:flags.3?true reserved4:flags.4?False = User flags;
```

Если бит 3 параметра `flags` не установлен, перед нами обычный пользователь. Если бит 3 параметра `flags` установлен, это означает, что указанный пользователь — бот; однако при десериализации параметру `bot` не должно присваиваться никакое значение, поскольку `true` на деле относится к типу `void`.

-   Тип `Unit` с единственным нулевым конструктором `Unit` устроен аналогично предыдущему.

#### Описание на ANTLR

Описание грамматики TL на [ANLTR](https://www.antlr.org) доступно [здесь »](https://gitlab.com/telekram/telekram/-/blob/master/generator/src/commonMain/antlr/TL.g4).
