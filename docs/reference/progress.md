---
template: overrides/main.html
---

# Progress Bar

ProgressBar is an extension that adds support for progress/status bars.  It can take percentages or fractions, and it
can optionally generate classes for percentages at specific value levels.

The basic syntax for progress bars is: `[= <percentage or fraction> "optional single or double quoted title"]`.  The
opening `[` can be followed by one or more `=` characters. After the `=` char(s) the percentage is specified as either
a fraction or percentage and can optionally be followed by a title surrounded in either double quotes or single
quotes.

!!! example "Progress Bar Example"

    === "Output"
        [=0% "0%"]
        [=5% "5%"]
        [=25% "25%"]
        [=45% "45%"]
        [=65% "65%"]
        [=85% "85%"]
        [=100% "100%"]

    === "Markdown"
        ```
        [=0% "0%"]
        [=5% "5%"]
        [=25% "25%"]
        [=45% "45%"]
        [=65% "65%"]
        [=85% "85%"]
        [=100% "100%"]
        ```


!!! example "Progress Bar with Attributes"

    === "Output"
        [=85% "85%"]{: .candystripe}
        [=100% "100%"]{: .candystripe}

        [=0%]{: .thin}
        [=5%]{: .thin}
        [=25%]{: .thin}
        [=45%]{: .thin}
        [=65%]{: .thin}
        [=85%]{: .thin}
        [=100%]{: .thin}

    === "Markdown"
        ```
        [=85% "85%"]{: .candystripe}
        [=100% "100%"]{: .candystripe}

        [=0%]{: .thin}
        [=5%]{: .thin}
        [=25%]{: .thin}
        [=45%]{: .thin}
        [=65%]{: .thin}
        [=85%]{: .thin}
        [=100%]{: .thin}
        ```