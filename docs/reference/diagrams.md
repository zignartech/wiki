---
template: overrides/main.html
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

_Examples_:

=== "Horizontal Flowcharts"
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

=== "Vertical Flowcharts"
    ```` markdown
        ```mermaid
        graph TD
            A[Hard] -->|Text| B(Round)
            B --> C{Decision}
            C -->|One| D[Result 1]
            C -->|Two| E[Result 2]
        ```
    ````

=== "Sequence Diagrams"
    ```` markdown
        ```mermaid
        sequenceDiagram
            participant Alice
            participant Bob
            Alice->>John: Hello John, how are you?
            loop Healthcheck
                John->>John: Fight against hypochondria
            end
            Note right of John: Rational thoughts <br/>prevail!
            John-->>Alice: Great!
            John->>Bob: How about you?
            Bob-->>John: Jolly good!
        ```
    ````

=== "Class Diagrams"
    ```` markdown
        ```mermaid
        classDiagram
            Class01 <|-- AveryLongClass : Cool
            Class03 *-- Class04
            Class05 o-- Class06
            Class07 .. Class08
            Class09 --> C2 : Where am i?
            Class09 --* C3
            Class09 --|> Class07
            Class07 : equals()
            Class07 : Object[] elementData
            Class01 : size()
            Class01 : int chimp
            Class01 : int gorilla
            Class08 <--> C2: Cool label
        ```
    ````

=== "Entity Relationships"
    ```` markdown
        ```mermaid
        erDiagram
            CUSTOMER ||--o{ ORDER : places
            ORDER ||--|{ LINE-ITEM : contains
            CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
        ```
    ````

=== "State Diagrams"
    ```` markdown
        ```mermaid
        stateDiagram
            [*] --> First
            First --> Second
            First --> Third

            state First {
                [*] --> fir
                fir --> [*]
            }
            state Second {
                [*] --> sec
                sec --> [*]
            }
            state Third {
                [*] --> thi
                thi --> [*]
            }
        ```
    ````

_Results_:

=== "Horizontal Flowcharts"
    ``` mermaid
    graph LR
        A[Start] --> B{Error?};
        B -->|Yes| C[Hmm...];
        C --> D[Debug];
        D --> B;
        B ---->|No| E[Yay!];
    ```

=== "Vertical Flowcharts"
    ```mermaid
    graph TD
        A[Hard] -->|Text| B(Round)
        B --> C{Decision}
        C -->|One| D[Result 1]
        C -->|Two| E[Result 2]
    ```

=== "Sequence Diagrams"
    ```mermaid
    sequenceDiagram
        participant Alice
        participant Bob
        Alice->>John: Hello John, how are you?
        loop Healthcheck
            John->>John: Fight against hypochondria
        end
        Note right of John: Rational thoughts <br/>prevail!
        John-->>Alice: Great!
        John->>Bob: How about you?
        Bob-->>John: Jolly good!
    ```

=== "Class Diagrams"
    ```mermaid
    classDiagram
        Class01 <|-- AveryLongClass : Cool
        Class03 *-- Class04
        Class05 o-- Class06
        Class07 .. Class08
        Class09 --> C2 : Where am i?
        Class09 --* C3
        Class09 --|> Class07
        Class07 : equals()
        Class07 : Object[] elementData
        Class01 : size()
        Class01 : int chimp
        Class01 : int gorilla
        Class08 <--> C2: Cool label
    ```

=== "Entity Relationships"
    ```mermaid
    erDiagram
        CUSTOMER ||--o{ ORDER : places
        ORDER ||--|{ LINE-ITEM : contains
        CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
    ```

=== "State Diagrams"
    ```mermaid
    stateDiagram
        [*] --> First
        First --> Second
        First --> Third

        state First {
            [*] --> fir
            fir --> [*]
        }
        state Second {
            [*] --> sec
            sec --> [*]
        }
        state Third {
            [*] --> thi
            thi --> [*]
        }
    ```


_See the [official documentation][1] to learn about all available diagram 
types._

  [2]: code-blocks.md

