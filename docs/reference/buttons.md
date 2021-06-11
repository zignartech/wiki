---
template: overrides/main.html
---

# Buttons

Primary and secondary buttons can be added to any link, `label` or `button` element. This is especially
useful for documents or landing pages with dedicated _call-to-actions_.

## Usage

### Adding buttons

Any clickable element can be
converted into a button by adding the `.md-button` CSS class, which will receive
the selected primary color.

_Example_:

``` markdown
[Subscribe to our mailing list](#){ .md-button }
```

_Result_:

[Subscribe to our mailing list][1]{ .md-button }

### Adding primary buttons

If you want to display a filled, primary button add both the `.md-button` and `.md-button--primary` CSS classes.

_Example_:

``` markdown
[Subscribe to our mailing list](#){ .md-button .md-button--primary }
```

_Result_:

[Subscribe to our mailing list][1]{ .md-button .md-button--primary }

### Adding icon buttons

Of course, icons can be added to both types of buttons by using the [regular
icon syntax][2] and referencing a valid path to [any icon bundled with the
theme][3].

_Example_:

``` markdown
[Submit :fontawesome-solid-paper-plane:](#){ .md-button .md-button--primary }
```

_Result_:

[Submit :fontawesome-solid-paper-plane:][1]{ .md-button .md-button--primary }

[1]: javascript:alert$.next("Done!")
[2]: icons-emojis.md#using-icons
[3]: icons-emojis.md#search