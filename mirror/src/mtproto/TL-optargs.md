---
title: "Optional combinator parameters and their values"
original: "https://core.telegram.org/mtproto/TL-optargs"
section: mtproto
description: "TL Language makes it possible to declare a combinator's first few parameters optional. Subsequently, they are almost never required to be explicitly stated. This is directly…"
crumbs: [{"title":"Mobile Protocol","url":"/mtproto/"},{"title":"Optional combinator parameters and their…","url":"/mtproto/TL-optargs/"}]
layout: layout.njk
---

# Optional combinator parameters and their values

[TL Language](/mtproto/TL/) makes it possible to declare a combinator's first few parameters optional. Subsequently, they are almost never required to be explicitly stated. This is directly related to another important property of TL: [polymorphism](/mtproto/TL-polymorph/).

All optional parameters are typically required to be part of the result type (at least once).

A (sub)expression may be serialized/deserialized in one of two ways:

-   The result type is known (for example, we're parsing the response to a previously sent RPC query and therefore know the value of some type is expected). In this case, the result type may be used to determine the values of the combinator's implicit parameters.
    
-   The result type is not known. It is determined as a result of (de)serialization (for example, we are serializing an RPC query). In this case, it is necessary to explicitly specify (and serialize) all of the combinator's optional parameters by using the full version of the combinator.
    

We will assume that the functional combinator only differs from the constructor in that before its result type the `!` modifier is implicitly added, and the (remote or local) computation of a functional expression may be presented as the execution of some polymorphic function `eval : !X -> X`.

Moreover, the unknown result type is obviously usually (but not always) bound to the serialization of an expression whose type has been modified by `!`.

We can formulate the following rules. Let there be some constructor

```
C {a1:T1} ... {am:Tm} b1:U1 ... bn:Un = T;
```

Some of its arguments or its result may be marked with the `!` modifier (We consider a functional combinator to be a constructor whose result type has been modified by an implicit `!`).

The following conditions must hold:

-   Each type _T1_, ..., _Tm_, _U1_, ..., _Un_, and _T_ may depend on parameters of type `Type` or `#`, which have been declared to the left of the use of the given type.
    
-   The types of implicit parameters _T1_, ..., _Tm_ may not be modified by `!`.
    
-   Only implicit parameters of type `Type` or `#` are allowed. In other words, _Ti_ is either a `Type` or a `#`. (Unlike the previous rule, this rule may be relaxed in the future.)
    
-   Each implicit parameter _a1_, ..., _am_ must be used at least once -- either within one of the _Ui_ types that have a `!`, or in the result type _T_, _if it does not have an explicit or implicit `!`_.
    
-   If an implicit parameter _ai_ is not used in the result type, or if the result type has a `!`, then its first (leftmost) usage must be within a type _Uj_ that is modified by `!`.
    

The idea is this: we assume that during (de)serialization of a value of a type modified by `!` that we do not know this type in advance and we will find out what it is only based on the result of the (de)serialization; Conversely, we assume that during (de)serialization of a value of a type that is not modified by `!` that we know this type in advance. In this case, complying with the rules stated above lets us always compute the values of all implicit parameters -- either from the (previously known) result type or from the type of one of the `bj:!Uj` parameters (which was obtained during the serialization process).

In fact, `!` denotes the direction in which type information is flowing. By default, the result type is the source of information about types (and their parameters), while argument types are the recipients of that information. The use of `!` reverses the direction of information flow, making the result type the recipient and the argument type the source of type information.

See also [Binary serialization and abstract TL types](/mtproto/TL-abstract-types/) and [Polymorphism in TL](/mtproto/TL-polymorph/).
