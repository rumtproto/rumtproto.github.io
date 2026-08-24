---
title: "Formal description of TL combinators"
original: "https://core.telegram.org/mtproto/TL-combinators"
section: mtproto
description: "Formal declaration of TL combinators"
crumbs: [{"title":"Mobile Protocol","url":"/mtproto/"},{"title":"Formal description of TL combinators","url":"/mtproto/TL-combinators/"}]
layout: layout.njk
---

# Formal description of TL combinators

[Formal declaration of TL combinators](/mtproto/TL-combinators/)

Main article: [Formal description of TL](/mtproto/TL-formal/). See also [TL Language](/mtproto/TL/).

Combinators in TL are declared as follows:

_combinator-decl_ ::= _full-combinator-id_ { _opt-args_ } { _args_ } `=` _result-type_ `;`  
_full-combinator-id_ ::= _lc-ident-full_ | `_`  
_combinator-id_ ::= _lc-ident-ns_ | `_`  
_opt-args_ ::= `{` _var-ident_ { _var-ident_ } : \[_excl-mark_\] _type-expr_ `}`  
_args_ ::= _var-ident-opt_ `:` \[ _conditional-arg-def_ \] \[ `!` \] _type-term_  
_args_ ::= \[ _var-ident-opt_ `:` \] \[ _multiplicity_ `*`\] `[` { _args_ } `]`  
_args_ ::= `(` _var-ident-opt_ { _var-ident-opt_ } `:` \[`!`\] _type-term_ `)`  
_args_ ::= \[ `!` \] _type-term_  
_multiplicity_ ::= _nat-term_  
_var-ident-opt_ ::= _var-ident_ | `_`  
_conditional-arg-def_ ::= _var-ident_ \[ `.` _nat-const_ \] `?`  
_result-type_ ::= _boxed-type-ident_ { _subexpr_ }  
_result-type_ ::= _boxed-type-ident_ `<` _subexpr_ { `,` _subexpr_ } `>`

We shall clarify what all this means.

-   A combinator identifier is either an identifier starting with a lowercase Latin letter (_lc-ident_), or a namespace identifier (also _lc-ident_) followed by a period and another _lc-ident_. Therefore, `cons` and `lists.get` are valid combinator identifiers.
    
-   A combinator has a _name_, also known as a _number_ (not to be confused with the _designation_) -- a 32-bit number that unambiguously determines it. It is either calculated automatically (see below) or it is explicitly assigned in the declaration. To do this, a hash mark (`#`) and exactly 8 hexadecimal digits -- the combinator's name -- are added to the identifier of the combinator being defined.
    
-   A combinator's declaration begins with its identifier, to which its name (separated by a hash mark) may have been added.
    
-   After the combinator identifier comes the main part of the declaration, which consists of declarations of _fields_ (or _variables_), including an indication of their _types_.
    
-   First come declarations of optional fields (of which there may be several or none at all). Then there are the declarations of the required fields (there may not be any of these either).
    
-   Any identifier that begins with an uppercase or lowercase letter and which does not contain references to a namespace can be a field (variable) identifier. Using _uc-ident_ for identifiers of variable types and _lc-indent_ for other variables is good practice.
    
-   Next a combinator declaration contains the equals sign (`=`) and the result type (it may be composite or appearing for the first time). The result type may be polymorphic and/or dependent; any fields of the defined constructor's fields of type `Type` or `#` may be returned (as subexpressions).
    
-   A combinator declaration is terminated with a semicolon.
    

In what follows, a constructor's _fields_, _variables_, and _arguments_ mean the same thing.

### Optional field declarations

-   These have the form `{` _field\_1_ ... _field\_k_ `:` _type-expr_ `}`, where _field\_i_ is a variable (field) identifier that is unique within the scope of the combinator declaration, and _type-expr_ is a type shared by all of the fields.
    
-   If _k>1_, this entry is functionally equivalent to `{` _field\_1_ `:` _type-expr_ `}` ... `{` _field\_k_ `:` _type-expr_ `}`.
    
-   All optional fields must be explicitly named (using `_` instead of _field\_i_ is not allowed).
    
-   Moreover, at present the names of all optional fields must share the combinator's result type (possibly more than once) and themselves be of type `#` (i,e., `nat`) or `Type`. Therefore, if the exact result type is known, it is possible to determine the values of all of the combinator's implicit parameters (possibly obtaining a contradiction of the form `2=3` in doing so, which means that the combinator is not allowed in the context).
    

### Required field declarations

-   These may have the form `(` _field\_1_ ... _field\_k_ `:` _type-expr_ `)`, similar to an optional field declaration, but with parentheses. This entry is equivalent to `(` _field\_1_ `:` _type-expr_ `)` ... `(` _field\_k_ : _type-expr_ `)`, where the fields are defined one at a time.
    
-   The underscore sign (`_`) can be used as names of one or more fields (_field\_i_), indicating that the field is anonymous (the exact name is unimportant).
    
-   One field may be declared without outer parentheses, like this: _field\_id_ `:` _type-expr_. Here, however, if _type-expr_ is a complex type, parentheses may be necessary around _type-expr_ (this is reflected in BNF).
    
-   Furthermore, one anonymous field may be declared using a _type-expr_ entry, functionally equivalent to `_` `:` _type-expr_.
    
-   Required field declarations follow one after another, separated by spaces (by any number of whitespace symbols, to be more precise).
    
-   The declared field's type (_type-expr_) may use the declared combinator's previously defined variables (fields) as subexpressions (i.e. parameter values). For example:
    
    nil {X:Type} = List X; cons {X:Type} hd:X tl:(list X) = List X; typed\_list (X:Type) (l : list X) = TypedList;
    

### Repetitions

-   These may only exist among required parameters. They have the form \[ _field-id_ `:` \] \[ _multiplicity_ `*` \] `[` _args_ `]`, where _args_ has the same format as the combinator's declaration of (several) required fields, except that all of the enclosing combinator's previously declared fields may be used in the argument types.
    
-   The name of a field of an enclosing combinator that receives a repetition as a value may be specified (_field-id_), or bypassed, which is equivalent to using the underscore sign as a _field-id_.
    
-   The _multiplicity_ field is an expression of the type `#` (`nat`), which can be a real constant, the name of a preceding field of type `#`, or an expression in the form `(` _c_ `+` _v_ `)`, where _c_ is a real constant and _v_ is the name of a field of type `#`. The sense of the _multiplicity_ field is to provide the length of the (repetition) vector, each element of which consists of values of the types enumerated in _args_.
    
-   The _multiplicity_ field may be bypassed. In this case, the last preceding parameter of type `#` from the enclosing combinator is used (it must be).
    
-   Functionally, the repetition _field-id_ `:` _multiplicity_ `*` `[` _args_ `]` is equivalent to the declaration of the single field `(` _field-id_ `:` `%Tuple` `%AuxType` _multiplicity_ `)`, where `aux_type` is an auxiliary type with a new name defined as `aux_type *args* = AuxType`. If any of the enclosing type's fields are used within _args_, they are added to the auxiliary constructor `aux_type` and to its `AuxType` result type as the first (optional) parameters.
    
-   If _args_ consists of one anonymous field of type _some-type_, then _some-type_ can be used directly instead of `%AuxType`.
    
-   If during implementation the repetitions are rewritten as indicated above, it is logical to use instead of `aux_type` and `AuxType`, some identifiers that contain the name of the outer combinator being defined and the repetition's index number inside its definition.
    

Example:

```
matrix {m n : #} a : m* [ n* [ double ] ] = Matrix m n;
```

is functionally equivalent to

```
aux_type {n : #} (_ : %Tuple double n) = AuxType n;
matrix {m : #} {n : #} (a : %Tuple %(AuxType n) m) = Matrix m n;
```

Moreover, the built-in types `Tuple` and `Vector` could be defined as:

```
tnil {X : Type} = Tuple X 0;
tcons {X : Type} {n : #} hd:X tl:%(Tuple X n) = Tuple X (S n);
vector {X : Type} (n : #) (v : %(Tuple X n)) = Vector X;
```

Actually, the following equivalent entry is considered the definition of `Vector` (i.e. it is specifically this entry that is used to compute the name of the `vector` constructor and its partial applications):

```
vector {t : Type} # [ t ] = Vector t;
```

If we expand it using `Tuple`, we obtain the previous definition exactly.

### Conditional fields

The construction

_args_ ::= _var-ident-opt_ `:` \[ _conditional-arg-def_ \] \[ `!` \] _type-term_  
_conditional-arg-def_ ::= _var-ident_ \[ `.` _nat-const_ \] `?`

permits assigning fields which are only present if the value of a preceding mandatory or optional field of type `#` is not null (or if its chosen bit is not zero if the special binary bit-selection operator `.` is applied). Example:

user {fields:#} id:int first\_name:(fields.0?string) last\_name:(fields.1?string) friends:(fields.2?%(Vector int)) = User fields;  
get\_users req\_fields:# ids:%(Vector int) = Vector %(User req\_fields)
