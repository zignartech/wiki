---
template: overrides/main.html
tags:
  - Reference
---

# Icons + Emojis

One of the best features of this documentation system is the possibility to use more than 8.000 icons and thousands of emojis in your project documentation with practically zero additional effort.

## Search for your perfect icon!

<div class="mdx-iconsearch" data-mdx-component="iconsearch">
  <input
    class="md-input md-input--stretch mdx-iconsearch__input"
    placeholder="Search the icon and emoji database"
    data-mdx-component="iconsearch-query"
  />
  <div class="mdx-iconsearch-result" data-mdx-component="iconsearch-result">
    <div class="mdx-iconsearch-result__meta"></div>
    <ol class="mdx-iconsearch-result__list"></ol>
  </div>
</div>
<small>
  :octicons-light-bulb-16:
  **Tip:** Enter some keywords to find the perfect icon or emoji and click on
  the shortcode to copy it to your clipboard.
</small>

The following icon sets are bundled with this package:

- :material-material-design: – [Material Design][1]
- :fontawesome-brands-font-awesome-flag: – [FontAwesome][2]
- :octicons-mark-github-16: – [Octicons][3]

  [1]: https://materialdesignicons.com/
  [2]: https://fontawesome.com/icons?d=gallery&m=free
  [3]: https://octicons.github.com/

## Usage

### Using emojis

Emojis can be integrated in Markdown by putting the shortcode of the emoji between two colons.

_Example_:

```
:smile: 
```

_Result_:

:smile:

### Using icons

Icons can be used similar to emojis. These shortcodes reference the valid path to the bundled icons, which are located in the
[`.icons`][1] directory, and replacing `/` with `-`:

_Example_:

```
- :material-account-circle:
- :fontawesome-regular-laugh-wink:
- :octicons-globe-24:
```

_Result_:

- :material-account-circle: – `.icons/material/account-circle.svg`
- :fontawesome-regular-laugh-wink: – `.icons/fontawesome/regular/laugh-wink.svg`
- :octicons-globe-24: – `.icons/octicons/globe-24.svg`

#### with colors
Custom CSS classes and attributes can be added to icons by suffixing the icon with a special syntax. While HTML and CSS allow to use [inline styles][4], it's always best to add the CSS class to the additional stylesheet located in the `docs/stylesheets` directory:

``` css
.medium {
  color: #00AB6C;
}
.twitter {
  color: #1DA1F2;
}
.facebook {
  color: #4267B2;
}
```

Then, simply add the CSS class to the icon.

<style>
  .medium {
    color: #00AB6C;
  }
  .twitter {
    color: #1DA1F2;
  }
  .facebook {
    color: #4267B2;
  }
</style>

_Example_:

``` markdown
- :fontawesome-brands-medium:{ .medium } – Medium
- :fontawesome-brands-twitter:{ .twitter } – Twitter
- :fontawesome-brands-facebook:{ .facebook } – Facebook
```

_Result_:

- :fontawesome-brands-medium:{ .medium } – Medium
- :fontawesome-brands-twitter:{ .twitter } – Twitter
- :fontawesome-brands-facebook:{ .facebook } – Facebook

  [4]: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/style

#### with animations

Similar to adding [colors][20], it's just as easy to add [CSS animations][21] to icons by using the additional stylesheet located in the `docs/stylesheets` directory, defining a `#!css @keyframes` rule and adding the dedicated CSS class to the icon:

``` css
@keyframes heart {
  0%, 40%, 80%, 100% {
    transform: scale(1);
  }
  20%, 60% {
    transform: scale(1.15);
  }
}
.heart {
  animation: heart 1000ms infinite;
}
```

Then, simply add the CSS class to the icon.

_Example_:

``` markdown
:octicons-heart-fill-24:{ .heart }
```

_Result_:

:octicons-heart-fill-24:{ .mdx-heart }

  [20]: #with-colors
  [21]: https://developer.mozilla.org/en-US/docs/Web/CSS/animation
