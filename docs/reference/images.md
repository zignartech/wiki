---
template: overrides/main.html
---

# Images

While images are first-class citizens of [Markdown][1] and part of the core syntax, it can be difficult to work with them. This documentation system makes working with images more comfortable by providing styles for alignment and image captions.

  [1]: https://www.markdownguide.org/basic-syntax/#images-1

## Usage

### Image alignment

Images can be aligned by adding the respective alignment directions via the `align` attribute, i.e. `align=left` or `align=right`

=== "Left"

    _Example_:

    ``` markdown
    ![Placeholder](https://dummyimage.com/600x400/eee/aaa){ align=left }
    ```

    _Result_:

    ![Placeholder](https://dummyimage.com/600x400/f5f5f5/aaaaaa&text=–%20Image%20–){ align=left width=300 }

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

=== "Center"

    _Example_:

    ``` markdown
    ![Placeholder](https://dummyimage.com/600x400/eee/aaa){:.center }
    ```

    _Result_:

    ![Placeholder](https://dummyimage.com/600x400/f5f5f5/aaaaaa&text=–%20Image%20–){:.center width=300 }

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

=== "Right"

    _Example_:

    ``` markdown
    ![Placeholder](https://dummyimage.com/600x400/eee/aaa){ align=right }
    ```

    _Result_:

    ![Placeholder](https://dummyimage.com/600x400/f5f5f5/aaaaaa&text=–%20Image%20–){ align=right width=300 }

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

_If there's insufficient space to render the text next to the image, the image
will stretch to the full width of the viewport, e.g. on mobile viewports._

### Image captions

Sadly, the Markdown syntax doesn't provide native support for image captions,
but it's always possible to resort to HTML. Using `figure` and `figcaption`, captions can be added to images.

_Example_:

```html
<figure>
  <img src="https://dummyimage.com/600x400/eee/aaa" width="300">
  <figcaption>Image caption</figcaption>
</figure>
```

_Result_:

<figure>
  <img src="https://dummyimage.com/600x400/f5f5f5/aaaaaa&text=–%20Image%20–" width="300">
  <figcaption>Image caption</figcaption>
</figure>

### Image lazy-loading

Modern browsers provide [native support for lazy-loading images][2] through the `loading` attribute, which degrades to eager-loading in browsers without support. Images can be lazy-loaded by adding `loading=lazy`.

_Example_:

``` markdown
![Placeholder](https://dummyimage.com/600x400/eee/aaa){ loading=lazy }
```

_Result_:

![Placeholder](https://dummyimage.com/600x400/f5f5f5/aaaaaa&text=–%20Image%20–){ loading=lazy width=300 }

  [2]: https://caniuse.com/#feat=loading-lazy-attr