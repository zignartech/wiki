---
template: overrides/main.html
tags:
  - Reference
---

# Diagrams

Diagrams help to communicate complex relationships and interconnections between
different technical components, and are a great addition to project
documentation. This documentation system integrates with [Mermaid.js][1], a very
popular and flexible solution for drawing diagrams.

  [1]: https://mermaid-js.github.io/mermaid/



## Usage

### Using diagrams

Mermaid diagrams are written as [code blocks][2]. They must be enclosed with two separate lines
containing three backticks:

_Example_:

```` markdown
``` mermaid
graph LR
  A[Start] --> B{Error?};
  B -->|Yes| C[Hmm...];
  C --> D[Debug];
  D --> B;
  B ---->|No| E[Yay!];
```
````

_Result_:

``` mermaid
graph LR
  A[Start] --> B{Error?};
  B -->|Yes| C[Hmm...];
  C --> D[Debug];
  D --> B;
  B ---->|No| E[Yay!];
```

_See the [official documentation][1] to learn about all available diagram 
types._

  [2]: code-blocks.md

