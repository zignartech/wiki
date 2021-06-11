---
template: overrides/main.html
---

# Customizing Navigation

By customizing navigation, there is a way to have detailed control by using a small configuration file directly placed in the relevant directory of the documentation.

## How does it work?

By creating a YAML file named `.pages` in a directory and using the `nav` attribute to customize the navigation on that level. Files and subdirectories can be listed in the order that they should appear in the navigation.

```yaml
nav:
    - subdirectory
    - page1.md
    - page2.md
```

### Rest

Pages or sections that are not mentioned in the list will not appear in the navigation. However, a `...`  entry you may be included to specify where all remaining items should be inserted.

```yaml
nav:
    - introduction.md
    - ...
    - summary.md
```

Furthermore, it is possible to filter the remaining items using glob patterns or regular expressions. For example to match only the Markdown files starting with `introduction-`.

```yaml
nav:
    - ... | introduction-*.md
    - ...
    - summary.md
```
!!! note
    The pattern is checked against the basename (folder- / filename) of remaining items - not their whole path. For more details refer to the [Rest Filter Patterns](#rest-filter-patterns) section below.

### Titles

A title for the navigation entry can be optionally specified.

```yaml
nav:
    - ...
    - First page: page1.md
```

!!! note 
    Specifying a title for a directory containing a `.pages` file that defines a `title` has no effect.

### Links

Additional external links can also be used the `nav` attribute.

```yaml
nav:
    - ...
    - Link Title: https://lukasgeiter.com
```

### Changing the Sort Order

By creating a YAML file named `.pages` in a directory and setting the `order` attribute to `asc` or `desc`, the order of navigation items can be changed.

```yaml
order: desc
```

!!! note 
    Unlike the default order, this does not distinguish between files and directories. Therefore pages and sections might get mixed.

## Collapsing Single Nested Pages

With directories that only contain a single page, "collapsing" them is possible, so the folder doesn't show up in the navigation.

For example, with the following file structure:

```yaml
docs/
├─ section1/
│  ├─ img/
│  │  ├─ image1.png
│  │  └─ image2.png
│  └─ index.md # Section 1
└─ section2/
   └─ index.md # Section 2
```

The pages will appear in the navigation at the root level:

- Section 1
- Section 2

Instead of how they would be displayed by default:

- Section 1
    * index.md # Section 1
- Section 2
    * index.md # Section 2

### For a sub-section

To collapse certain pages, a YAML file called `.pages` can be created in the directory, and the `collapse_single_pages` can be set to `true`:

```yaml
collapse_single_pages: true
```

You may also enable collapsing globally using the plugin option and then use the `.pages` file to prevent certain sub-sections from being collapsed by setting `collapse_single_pages` to `false`.

!!! Note 
    This feature works recursively. That means it will also collapse multiple levels of single pages.

### For a single page

To enable or disable collapsing of a single page, without applying the setting recursively, a YAML file called `.pages` can be created in the directory, and the `collapse` attribute can be set to `true` or `false`:

```yaml
collapse: true
```

## Hiding a Directory

By creating a YAML file named `.pages` in a directory, and setting the `hide` attribute to `true` the directory is hidden, including all sub-pages and sub-sections, from the navigation:

```yaml
hide: true
```

!!! Note
    This option only hides the section from the navigation. It will still be included in the build and can be accessed under its URL.

## Setting a Directory Title

By creating a YAML file named `.pages` in a directory, and setting the `title` attribute, the title of that directory in the navigation is overridden:

```yaml
title: Page Title
```
<br/>

## Rest Filter Patterns

In all places where the rest entry (`...`) is allowed, a glob pattern or regular expression can be included to filter the items to be displayed.

```yaml
nav:
    - ... | page-*.md
    - ... | regex=page-[0-9]+.md
```

The filter only operates on remaining items. This means it will not include items that are explicitly listed in the navigation or items that are matched by another filter that appears earlier in the configuration.

You may also include a rest entry without filter to act as a catch-all, inserting everything that is not matched by a filter.

### Syntax Details

Unless the filter starts with `regex=` it is interpreted as glob pattern, however you may also explicitly say so using `glob=`. The spaces around `...` are optional but recommended for readability.

!!! note
    Depending on the characters in your filter, you might also need to use quotes around the whole entry.

```yaml
nav:
    # equivalent glob entries
    - ... | page-*.md
    - ... | glob=page-*.md
    - ...|page-*.md
    - '... | page-*.md'

    # equivalent regex entries
    - ... | regex=page-[0-9]+.md
    - ...|regex=page-[0-9]+.md
    - '... | regex=page-[0-9]+.md'
```
