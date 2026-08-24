---
title: "Formal TL declaration"
original: "https://core.telegram.org/mtproto/TL-formal"
section: mtproto
description: "See also TL Language. For the syntax of declaring combinators, see in article Formal declaration of TL combinators. For the syntax of patterns, see in article Formal declaration…"
crumbs: [{"title":"Mobile Protocol","url":"/mtproto/"},{"title":"Formal TL declaration","url":"/mtproto/TL-formal/"}]
layout: layout.njk
---

# Formal TL declaration

See also [TL Language](/mtproto/TL/). For the syntax of declaring combinators, see in article [Formal declaration of TL combinators](/mtproto/TL-combinators/). For the syntax of patterns, see in article [Formal declaration of TL patterns](/mtproto/TL-patterns/).

### Tokens

Comments are the same as in C/C++. They are removed by a lexical parser (for example, being replaced by a single space). Whitespace separates tokens. Except for string constants, tokens cannot contain spaces.

Character classes:

_lc-letter_ ::= `a` | `b` | ... | `z`  
_uc-letter_ ::= `A` | `B` | ... | `Z`  
_digit_ ::= `0` | `1` | ... | `9`  
_hex-digit_ ::= _digit_ | `a` | `b` | `c` | `d` | `e` | `f`  
_underscore_ ::= `_`  
_letter_ ::= _lc-letter_ | _uc-letter_  
_ident-char_ ::= _letter_ | _digit_ | _underscore_

Simple identifiers and keywords:

_lc-ident_ ::= _lc-letter_ { _ident-char_ }  
_uc-ident_ ::= _uc-letter_ { _ident-char_ }  
_namespace-ident_ ::= _lc-ident_  
_lc-ident-ns_ ::= \[ _namespace-ident_ `.` \] _lc-ident_  
_uc-ident-ns_ ::= \[ _namespace-ident_ `.` \] _uc-ident_  
_lc-ident-full_ ::= _lc-ident-ns_ \[ `#` _hex-digit_ \*8 \]

Tokens:

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

`Final` is a reserved keyword, e.g. a special token. Words like `Type` are not keywords, rather they are identifiers with preset values.

Tokens consisting of one or more constant symbols shall be hereafter denoted using terms in quotation marks (for example, `---` replaces _triple-minus_).

## Syntax

### General syntax of a TL program

Syntactically, a TL program consists of a stream of tokens (separated by spaces, which are ignored at this stage). General program structure:

_TL-program_ ::= _constr-declarations_ { `---` `functions` `---` _fun-declarations_ | `---` `types` `---` _constr-declarations_ }

Here the constructor- and function declarations are nearly identical in their syntax (they are both combinators):

_constr-declarations_ ::= { _declaration_ }  
_fun-declarations_ ::= { _declaration_ }

There are various declarations:

_declaration_ ::= _combinator-decl_ | _partial-app-decl_ | _final-decl_

Before explaining how declarations of combinators, partial applications, and type `finalization` are given, we will introduce additional syntactical categories:

### Syntactical categories and constructions

The concept of an expression (_expr_) is important. There are type expressions (_type-expr_) and numeric expressions (_nat-expr_). However, they are defined the same way. Their correctness as type- or numeric expressions is checked when the type of the analyzed expression is checked.

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

Note that writing `E = E_1 E_2 ... E_n` in the expression for _expr_ means applying the function _E\_1_ to the argument _E\_2_, applying the result to _E\_3_, etc. Specifically, `E_1 E_2 E_3 = (E_1 E_2) E_3`. A solitary `#` is included in _type-ident_, because it is actually the identifier for a built-in type (`#` alias `nat`).

The expression `E<E_1,...,E_n>` is syntactic sugar for `(E (E_1) ... (E_n))`, i.e. both expressions are transformed into the same internal representation.

### Combinator declarations

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

See [Formal declaration of TL combinators](/mtproto/TL-combinators/) for a description of what exactly this means. Here we will only note that when declaring the type of a combinator's next argument, only the names of previously arranged (more to the left) arguments of the same combinator may be used as variables, but when declaring the result type you can use all of its parameters (of type `Type` and `#`).

Note that the names of combinators declared in this way may be used in TL itself only as the corresponding bare types. The only combinators that appear in declarations are built-in: `O : #` and `S : # -> #`.

There are also “pseudo-declarations” that are allowed only to declare built-in types (such as `int ? = Int;`):

_builtin-combinator-decl_ ::= _full-combinator-id_ `?` `=` _boxed-type-ident_ `;`

### Partial applications (patterns)

_partial-app-decl_ ::= _partial-type-app-decl_ | _partial-comb-app-decl_  
_partial-type-app-decl_ ::= _boxed-type-ident_ _subexpr_ { _subexpr_ } `;` | _boxed-type-ident_ `<` _expr_ { `,` _expr_ } `>` `;`  
_partial-comb-app-decl_ ::= _combinator-id_ _subexpr_ { _subexpr_ } `;`

See [Formal declaration of TL patterns](/mtproto/TL-patterns/).

### Type finalization

_final-decl_ ::= `New` _boxed-type-ident_ `;` | `Final` _boxed-type-ident_ `;` | `Empty` _boxed-type-ident_ `;`

This type of declaration means that there must not be any constructor for the indicated type: before the declaration for `New` and after the declaration for `Final`. The keyword `Empty` enables both effects.

### Predefined identifiers

Nearly all predefined identifiers may be given using the following schema (usually located in `common.tl`):

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

-   Predefined identifier `Type`: This type signifies the type of all types. It is usually used to specify the types of optional parameters in the constructors of polymorphic types. If strongly desired, it can be used in its own right, but this is very rarely needed in practice.
    
-   Identifier `#`: This type is used to specify a special type of nonnegative integers in the range from 0 to 2^31-1; its main purpose is the same as that of `Type`. There are two built-in constructors: `O` : # and `S` : # -> # (“null” and “next number”, respectively), which work as if `#` was defined using the schema
    

O = #;  
S # = #;

-   Identifier `Tuple`: Type -> # -> Type denotes a set of the specified number of values of the indicated type. In other words, _Tuple X n_ means “a set of _n_ values of type _X_".
    
-   The type`Bool`, with two constructors `boolTrue` and `boolFalse`, is used to transmit Boolean values.
    
-   The constructor-less type `False` may be used instead of undeclared or invalid types in the construction of a TL schema, because any attempt to (de)serialize a value of type `False` will produce an error. Usage Example:
    

user {flags:#} id:flags.0?string first\_name:flags.1?string last\_name:flags.2?string reserved3:flags.3?False reserved4:flags.4?False = User flags;  
user\_present {flags:#} info:%(User flags) = UserInfo flags;  
user\_absent {flags:#} = UserInfo flags;  
getUser flags:# id:int = !UserInfo flags;

In the future, bits 3 and 4 in the `flags` field may be used to transmit new fields after changing the names and types of the `reserved3` and `reserved4` fields. This will change the `user` constructor's number, but this isn't too important, since the `User flags` type is only used as a bare type. Transmitting bits 3 or 4 in the `flags` field in a `getUser` query before these fields have actually been defined will lead to an error in the (de)serialization of the request.

-   The type `True` with a single null constructor `true` plays a role similar to the void type in C/C++. It is especially useful as a bare type `%True`, alias `true`, because its serialization has zero length. For example, the `first_name:flags.1?string` constructor used above is in fact shorthand for (the as-yet unsupported) alternative-type general constructor `first_name:(flags.1?string:true)`.

When directly used in a [conditional field](/mtproto/TL-combinators/#conditional-fields) it may simply indicate the presence (absence) of a certain parameter with void type. If the conditional field exists, the associated parameter will not be populated; the conditional field simply exists and the existance value can be used to perform certain operations, example:

```
user {flags:#} id:flags.0?string first_name:flags.1?string last_name:flags.2?string bot:flags.3?true reserved4:flags.4?False = User flags;
```

If bit 3 of the `flags` parameter isn't set, the user is a normal user. If bit 3 of the `flags` parameter is set, this indicates that the specified user is a bot: however, during deserialization, the `bot` parameter must not be assigned any value, since `true` is actually a `void` type.

-   The type`Unit` with a single null constructor `Unit` is similar to the previous type.

#### ANTLR definition

An [ANLTR](https://www.antlr.org) definition of TL grammar can be found [here »](https://gitlab.com/telekram/telekram/-/blob/master/generator/src/commonMain/antlr/TL.g4).
