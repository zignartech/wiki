---
template: overrides/main.html
---

# Variables

Macros and variables are powerful tools to parametrize Markdown files, as they 
allow to perform Jinja templating directly from Markdown. This is especially 
useful to include technical data from other files and add central variables via 
`mkdocs.yml`.

## Usage

### Using predefined variables

A set of predefined variables is enabled by default and can be used from 
Markdown, including data from `mkdocs.yml`. More specifically, predefined 
variables fall into the following categories:

- `config.*`: configuration parameters from `mkdocs.yml`
- `page.*`: metadata and content of current page
- `navigation.*`: list of all pages and sections
- `environment.*`: underlying operating system
- `git.*`: git-related information, if available

_Example_:

!!! warning "The following example had to be written with the set of double brackets {} separated to avoid triggering the macro. After copying the example, don't forget to delete the spaces between both opening brackets and both closing brackets."

``` markdown
Welcome to { { config.site_name } }!
```

_Result_:

Welcome to Material for {{ config.site_name }} !

### Using custom variables

All data defined under `extra` in `mkdocs.yml` is automatically exposed as a
variable and can be used from the template. This enables centralized parameter
storage and management.

_Example_:

!!! warning "The following example had to be written with the set of double brackets {} separated to avoid triggering the macro. After copying the example, don't forget to delete the spaces between both opening brackets and both closing brackets."

=== "docs/your_page.md"

    ```` markdown
    The unit price is { { unit.price } }
    ````

=== "mkdocs.yml"

    ``` yaml
    extra:
      unit:
        price: 12.50
    ```

_Result_:

The unit price is 12.50.