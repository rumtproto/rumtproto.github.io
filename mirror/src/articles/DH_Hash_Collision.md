---
title: "Hash Collisions for Diffie-Hellman Keys"
original: "https://core.telegram.org/articles/DH_Hash_Collision"
section: other
description: "Suppose somebody (M) wants to implement a MiTM-attack on Diffie—Hellmann Key Exchange between A and B, so that the spoofed shared keys between A and M and between B and M have…"
crumbs: []
layout: layout.njk
---

# Hash Collisions for Diffie-Hellman Keys

> Back to the **[Advanced FAQ »](/techfaq/#hash-collisions-for-diffie-hellman-keys)**

## The Problem

> **UPD:** These calculations are for the earlier versions of Telegram that used a 128-bit fingerprint. Currently, [288-bit fingerprints](/techfaq/#hash-collisions-for-diffie-hellman-keys) are used, which means the already infeasible attack is now completely impossible.

Suppose somebody (M) wants to implement a MiTM-attack on Diffie—Hellmann Key Exchange between A and B, so that the spoofed shared keys between A and M and between B and M have same hash value (used for key visualization and verification).

Let us denote the hash function in question by _H(x)_; it takes _b_\-bit values. For our application, b=128 and H(x) = first 128 bits of SHA1(x).

Let _(p,g)_ be the public Diffie-Hellman parameters; it makes sense to use the same parameters between A and M and between B and M, which can be accomplished if the parameters are supplied by M (as in our case). Denote by _n_ the number of bits in _p_. In our case, _n=2048_.

Now, once A supplies M with its _g\_1 = g^u mod p_ and B supplies M with _g\_2 = g^v mod p_, the problem is to find _x_ and _y_, such that _H(g\_1^x)=H(g\_2^y)_.

## Birthday paradox

An obvious approach, based on the birthday paradox, is to scan 2^{b/2} values of _x_ (say, from an arithmetic progression, or by taking powers of two modulo _(p-1)/2_, so that the next value of _g\_1^x mod p_ is computed from the previous by one multiplication modulo _p_ ), store and sort resulting _H(g\_1^x)_, repeat the same process for 2^{b/2} values of _y_, then compare sorted lists looking for the collision sought.

However, this requires _O(2^{b/2})_ modular multiplications and hash (SHA-1) computations, and, more importantly, _O(b.2^{b/2})_ bits of memory to keep the intermediate results.

There are several approaches which require less memory, but still _O(2^{b/2})_ modular operations, this time exponentiation _mod p_ (which is usually a thousand times more complex operation). They use _cycle finding_ in some form.

## Cycle Finding

Cycle finding is usually applied for detecting collisions for _one_ hash function. In our case, we have to find collision between _two_ hash functions _H\_1(x):=H(g\_1^x)_ and _H\_2(y):=H(g\_2^y)_ from _{0,1}^n_ into _{0,1}^b_.

However, this problem can be reduced to that for one hash function, if we are ready to replace _n_ with _n+1_: consider _H\_0_ from _{0,1}^{n+1}_ to _{0,1}^b_, given by _H\_0(2x):=H\_1(x)_, _H\_0(2y+1):=H\_2(y)_. Once we find a hash collision for _H\_0_ on arguments of different parity, we obtain a hash collision between _H\_1_ and _H\_2_. On average, one collision in two will have the required property, so we'll have to find two-three collisions for _H\_0_.

Next, we need a _projection function_ _g_ from _{0,1}^b_ into _{0,1}^{n+1}_, so as to reduce finding collisions for _H\_0_ to finding collisions for _f(x):=H\_0(g(x))_. An obvious choice is to map _{0,1}^b_ into _{0,1}^{n+1}_ by adding _n+1-b_ leading zero bits. This has the advantage of making the exponents for modular power elevation smaller.

So we are reduced to finding pairs distinct _b_\-bit values _z_ and _z'_, such that _f(z)=f(z')_. We might start from a random _z\_0_, construct _z\_n:=f(z\_{n-1})_, and use, say, a Pollard rho method to find a loop in this sequence. This would require _O(1)_ memory, but _O(2^{b/2})_ **unparallelalizable** computations of _f(z)_.

## Distinguished values

A better approach, allowing some parallelization at the expense of some memory, is to start from a randomly chosen _z\_0_, construct sequence _z\_n_ as before, stopping if a loop is detected by Pollard rho, but in addition storing triple _(z\_n,z\_0,n)_ into a special table whenever _z\_n_ happens to be _distinguished_ (say, has _t_ leading bits equal to 0, for suitably chosen _t &lt; b_ ). Once a distinguished value is reached, processing stops, and a new random value of _z\_0_ is chosen to construct a new sequence _z\_n_.

This might be done in parallel, starting from several randomly chosen values of _z\_0_.

Once the same value of first component in the results table appears twice, we are likely to have found a collision, reconstructing the two colliding sequences from their (distinct) values of _z\_0_.

This requires _O(2^{b/2})_ _n_\-bit modular power elevation operations with a table for _O(2^{b/2-t})_ _b_\-bit values. The computation can be done in parallel on up to _O(2^{b/2-t})_ processor cores if _t_ is suitably chosen. For example, we might take _t=32_ for _b=128_, thus requiring several gigabytes of memory, but allowing parallel computation on billions of cores.

## Required Resources

We still need to compute _O(2^{b/2}) = O(2^{64})_ powers with 128-bit exponents modulo 2048-bit prime _p_, and the same amount of SHA-1 hashes.

Each such power computation would require several million clock cycles on a modern CPU core (tens of thousands cycles for each modular multiplication). Let us assume that it requires two million cycles on a 2GHz core, so that one core can perform thousand such operations per second.

A modern 8-core CPU (with hyperthreading, which will barely help us here since the problem is CPU-intensive) costs about 500$ and consumes about 50 Watt of power.

In this way, we can perform 8000 (let us replace this with 10^4) such operations per second on 500$ equipment consuming 50 Watt of electric power.

We have to perform about 2^{64} ~ 2 \* 10^{19} operations (actually, several times more — say, twice as much) to find a collision of requested form.

If we wish to achieve this, say, in one month (clearly too long a time to expect the parties not to worry about the delay of their DH key exchange), i.e. in 2 \* 10^6 seconds, we'll need 2 \* 10^9 (two billion) 500$ CPUs, worth a trillion dollars. They will consume approximately 50 billion kW.h of electricity in the process, worth hundred millions of dollars. Deployment of FPGA and ASICs might lower this estimate by an order of magnitude, still leaving such an attack to be infeasible.

All this to intercept one secret chat!
