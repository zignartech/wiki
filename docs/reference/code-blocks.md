---
template: overrides/main.html
tags:
  - Reference
---

# Code blocks

Code blocks and examples are an essential part of technical project
documentation. The examples included in this section can be copy/pasted into your edited page, to facilitate this feature's use.

## Usage

This section discusses how to use different syntax highlighting features.

### Specifying the language

Code blocks must be enclosed with two separate lines containing three backticks.
To add code highlighting to those blocks, add the language short name directly
after the opening block. See the [list of available lexers][1] to find the
short name for a given language.

_Example_:

```` markdown
``` python
import tensorflow as tf
```
````

_Result_:

``` python
import tensorflow as tf
```

  [1]: https://pygments.org/docs/lexers/

### Adding annotations

Annotations offer a comfortable and friendly way to attach explanations to
arbitrary sections of code blocks by adding simple markers within block/inline
comments that refer to items of a list following the code block, i.e. `(1)`,
`(2)`, etc. Material for MkDocs detaches the list from the flow of the document,
injects the content of each list item into a tooltip, and links each list marker
to the corresponding tooltip.

In order to opt-in to annotation support, a slightly different syntax is
required – just add the respective [language short code][1] and the `.annotate`
class, after the three backticks.

Note that annotations can be __placed anywhere__ in a code block where a comment
for the language can be placed, which for JavaScript is `// (1)` and
`/* (2) */`, for Yaml `# (3)`, etc.

_Example_:

```` markdown
``` { .js .annotate }
document$.subscribe(function() { // (1)
  var tables = document.querySelectorAll /* (2) */
  tables.forEach(function(table) {
    new Tablesort(table) // (3)
  })
})
```

1. ...
2. ...
````

_Result_:

``` {: .js .annotate }
document$.subscribe(function() { // (1)
  var tables = document.querySelectorAll /* (2) */
  tables.forEach(function(table) {
    new Tablesort(table) // (3)
  })
})
```

1. Annotations can contain __arbitrary content__ which is shown when the marker
   is focussed, including any kind of formatting, links, remarks, details,
   and even diagrams:

    ``` python linenums="1"
        def bubble_sort(items):
            for i in range(len(items)):
                for j in range(len(items) - 1 - i):
                    if items[j] > items[j + 1]:
                        items[j], items[j + 1] = items[j + 1], items[j]

    ```

    :octicons-light-bulb-16:
    **Tip:** You can use ++tab++ to navigate annotations.

2. Annotations can be __placed anywhere__ in a code block were a comment for the
   underlying language can be placed. 

    === "Python"

        ``` python
        # (1)
        ```

    === "JavaScript"

        ``` js
        // (2)
        /* (2) */
        ```

    === "Lua"

        ``` lua
        -- (3)
        ```

  1.  !!! info
      Of course, this can be combined with [line numbers][10], highlighting and all other code block related features.

[10]: #adding-line-numbers
### Adding line numbers

Line numbers can be added to a code block by using the `linenums="<start>"`
option directly after the short name, whereas `<start>` represents the starting
line number. A code block can start from a line number other than `1`, which
allows splitting large code blocks for readability.

_Example_:

```` markdown
``` python linenums="1"
def bubble_sort(items):
    for i in range(len(items)):
        for j in range(len(items) - 1 - i):
            if items[j] > items[j + 1]:
                items[j], items[j + 1] = items[j + 1], items[j]
```
````

_Result_:

``` python linenums="1"
def bubble_sort(items):
    for i in range(len(items)):
        for j in range(len(items) - 1 - i):
            if items[j] > items[j + 1]:
                items[j], items[j + 1] = items[j + 1], items[j]
```

### Highlighting specific lines

Specific lines can be highlighted by passing the line numbers to the `hl_lines`
argument placed right after the language short name. Note that line counts start
at `1`, regardless of the starting line number specified as part of `linenums`.

_Example_:

```` markdown
``` python hl_lines="2 3"
def bubble_sort(items):
    for i in range(len(items)):
        for j in range(len(items) - 1 - i):
            if items[j] > items[j + 1]:
                items[j], items[j + 1] = items[j + 1], items[j]
```
````

_Result_:

``` python hl_lines="2 3"
def bubble_sort(items):
    for i in range(len(items)):
        for j in range(len(items) - 1 - i):
            if items[j] > items[j + 1]:
                items[j], items[j + 1] = items[j + 1], items[j]
```

### Highlighting inline code blocks

Inline code blocks can be highlighted by
prefixing them with a shebang-like sequence, i.e. `#!`, directly followed by
the [language short name][1].

_Example_:

``` markdown
The `#!python range()` function is used to generate a sequence of numbers.
```

_Result_:

The `#!python range()` function is used to generate a sequence of numbers.

### Adding keyboard keys

Keyboard keys can be rendered with a simple syntax.
Consult the [Python Markdown Extensions][2] documentation to learn about all
available key codes.

_Example_:

``` markdown
++ctrl+alt+del++
```

_Result_:

++ctrl+alt+del++

[2]: https://facelessuser.github.io/pymdown-extensions/

### Embedding external files (Snippets)

_Also known as transcludes or file transclusion in [MultiMarkdown][4]_.

[Snippets][3] from other files can be embedded, which
is especially useful to reference and embed the contents of source files
directly into your project documentation.

_Example_:

```` markdown
```
--8<--​ ".browserslistrc"
```
````

_Result_:

```
last 4 years
```

The following is an example of a Javascript file that is in the `./docs/snippets` directory, and it is named `example.js`. The syntax follows the same pattern as the example shown before (i.e. `--8<--` followed by the qualified file name)

_Result_:

``` javascript
--8<-- "docs/snippets/example.js"
```

Note that the use of Snippets is not limited to code blocks, but can be used anywhere from a document to move repeating content to separate files.

[3]: https://facelessuser.github.io/pymdown-extensions/extensions/snippets/
[4]: https://fletcher.github.io/MultiMarkdown-5/transclusion.html