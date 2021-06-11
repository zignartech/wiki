---
template: overrides/main.html
tags:
  - Reference
---

# Abbreviations

Technical documentation often incurs the usage of a lot of acronyms, which may
need additional explanation, especially for new user of your project. For these
matters, Material for MkDocs uses a combination of Markdown extensions to
enable site-wide glossaries.

## Usage

### Adding abbreviations (On-Spot)

Abbreviations can be defined
with a special syntax similar to URLs and [footnotes][1] at any point in the
Markdown document.

_Example_:

``` markdown
The HTML specification is maintained by the W3C.

*[HTML]: Hyper Text Markup Language
*[W3C]: World Wide Web Consortium
```

_Result_:

The HTML specification is maintained by the W3C.

<!-- *[HTML]: Hyper Text Markup Language
*[W3C]: World Wide Web Consortium -->

--8<-- "include/abbreviations-list.md"

[1]: footnotes.md
### Adding a glossary

Sometimes, it is especially useful to include abbreviations from a central file – a glossary –
and embed them into the page that you are working. The result will be exactly the same as if you are using specific "on-spot" abbreviations.

_Example_:

!!! warning "The following example had to be written with the set of back-colons `` to avoid triggering the snippet. After copying the example, don't forget to delete the back-colons before the snippet and after the snippet."

=== "docs/your_page.md"

    ```` markdown
    The HTML specification is maintained by the W3C.
    
    `--8<-- "include/abbreviations-list.md"`
    ````

=== "include/abbreviations-list.md"

    ```` markdown
    *[HTML]: Hyper Text Markup Language
    *[W3C]: World Wide Web Consortium
    ````

_Result_:

The HTML specification is maintained by the W3C.

_Remember to update the Markdown file (includes/abbreviations.md) located outside of the docs folder to add the relevant abbreviations. This file contains the definitions for the abbreviation snippets._
