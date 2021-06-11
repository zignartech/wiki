---
template: overrides/main.html
tags:
  - Reference
---

# Formatting

There is support for several HTML elements that can be used to highlight sections of a document or apply specific formatting. Additionally, [Critic Markup][1] is supported, adding the ability to display suggested changes for a document.

  [1]: http://criticmarkup.com/

## Usage

### Highlighting changes

[Critic Markup][1] can be used, which adds the ability to _highlight suggested changes_, as well as add _inline comments_ to a document:

_Example_:

``` markdown
Text can be {​--deleted--} and replacement text {​++added++}. This can also be
combined into {​~~one~>a single~~} operation. {​==Highlighting==} is also
possible {​>>and comments can be added inline<<}.

{​==

Formatting can also be applied to blocks, by putting the opening and closing
tags on separate lines and adding new lines between the tags and the content.

==}
```

_Result_:

Text can be {--deleted--} and replacement text {++added++}. This can also be
combined into {~~one~>a single~~} operation. {==Highlighting==} is also
possible {>>and comments can be added inline<<}.

{==

Formatting can also be applied to blocks, by putting the opening and closing
tags on separate lines and adding new lines between the tags and the content.

==}

### Highlighting text

Text can also be highlighted with a nicer syntax than using the corresponding `mark`, `ins` and `del` HTML tags:

_Example_:

``` markdown 
- ==This was marked==
- ^^This was inserted^^
- ~~This was deleted~~
```

_Result_:

- ==This was marked==
- ^^This was inserted^^
- ~~This was deleted~~

### Sub- and superscripts

Text can be sub- and superscripted with a nicer syntax than using the corresponding `sub` and `sup` HTML tags:

_Example_:

``` markdown 
- H~2~0
- A^T^A
```

_Result_:

- H~2~0
- A^T^A
