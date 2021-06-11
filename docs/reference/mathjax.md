---
template: overrides/main.html
---

# MathJax

<script src="/javascripts/mathjax.js" async></script>

[MathJax][1] is a beautiful and accessible way to display _mathematical content_
in the browser, allows for writing formulas in different notations, including
[LaTeX][2], [MathML][3] and [AsciiMath][4], and can be easily integrated with
Material for MkDocs.

  [1]: https://www.mathjax.org/
  [2]: https://en.wikibooks.org/wiki/LaTeX/Mathematics
  [3]: https://en.wikipedia.org/wiki/MathML
  [4]: http://asciimath.org/

## Usage

To allow [MathJax][1] formulas loading correctly, the corresponding JavaScript libraries must be loaded before the page is created. Therefore, it is necessary to add the following JavaScript to the top of the page that is being created s:

``` html
<script src="/javascripts/mathjax.js" async></script>
```

!!! Info
    Once the libraries are loaded on to the page, standard MathJax notation can be used.

### Using block syntax

Blocks must be enclosed in `#!latex $$...$$` or `#!latex \[...\]`on separate lines:

_Example_:

``` latex
$$
\operatorname{ker} f=\{g\in G:f(g)=e_{H}\}{\mbox{.}}
$$
```

_Result_:

$$
\operatorname{ker} f=\{g\in G:f(g)=e_{H}\}{\mbox{.}}
$$

### Using inline block syntax

Inline blocks must be enclosed in `#!latex $...$` or `#!latex \(...\)`:

_Example_:

``` latex
The homomorphism $f$ is injective if and only if its kernel is only the 
singleton set $e_G$, because otherwise $\exists a,b\in G$ with $a\neq b$ such 
that $f(a)=f(b)$.
```

_Result_:

The homomorphism $f$ is injective if and only if its kernel is only the
singleton set $e_G$, because otherwise $\exists a,b\in G$ with $a\neq b$ such
that $f(a)=f(b)$.
