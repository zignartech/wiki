---
template: overrides/main.html
---

# Basic Markdown Guide

Nearly all Markdown applications support the basic syntax outlined in John Gruber’s original design document. There are minor variations and discrepancies between Markdown processors — those are noted inline wherever possible.

This page only describes Basic Markdown. However, Zigar Docs has en extended syntax module that allows for even richer Markdown documents. Please, refer to the other chapters in this Reference Guide to find out all the amazing options.

## Markdown Formatting

### Headings

To create a heading, add number signs (#) in front of a word or phrase. The number of number signs you use should correspond to the heading level. For example, to create a heading level three `(<h3>)`, use three number signs (e.g., ### My Header).

    # This is an <h1> tag
    ## This is an <h2> tag
    ### This is an <h3> tag
    #### This is an <h4> tag
    ##### This is an <h5> tag
    ###### This is an <h6> tag

### Paragraphs

To create paragraphs, use a blank line to separate one or more lines of text.

### Line Breaks

You can use two or more spaces (commonly referred to as “trailing whitespace”) for line breaks in nearly every Markdown application, but it’s controversial. It’s hard to see trailing whitespace in an editor, and many people accidentally or intentionally put two spaces after every sentence. For this reason, you may want to use something other than trailing whitespace for line breaks. Fortunately, there is another option supported by nearly every Markdown application: the `<br>` HTML tag.

For compatibility, use trailing white space or the `<br>` HTML tag at the end of the line.

### Emphasis

To bold text, add two asterisks or underscores before and after a word or phrase. To bold the middle of a word for emphasis, add two asterisks without spaces around the letters.

To italicize text, add one asterisk or underscore before and after a word or phrase. To italicize the middle of a word for emphasis, add one asterisk without spaces around the letters.

To emphasize text with bold and italics at the same time, add three asterisks or underscores before and after a word or phrase. To bold and italicize the middle of a word for emphasis, add three asterisks without spaces around the letters.

_Example_:

    *This text will be italic*
    _This will also be italic_

    **This text will be bold**
    __This will also be bold__

    _You **can** combine them_

_Result_:

*This text will be italic*

_This will also be italic_

**This text will be bold**

__This will also be bold__

_You **can** combine them_

### Lists

_Example_:

**Inordered:**

    * Milk
    * Bread
        * Wholegrain
    * Butter

_Result_:

* Milk
* Bread
    * Wholegrain
* Butter

**Ordered:**

_Example_:

    1. Tidy the kitchen  
    2. Prepare ingredients  
    3. Cook delicious things

_Result_:

1. Tidy the kitchen  
2. Prepare ingredients  
3. Cook delicious things

### Images

To add an image, add an exclamation mark (!), followed by alt text in brackets, and the path or URL to the image asset in parentheses. You can optionally add a title after the URL in the parentheses.

    ![Alt Text](url)

Result:

_Example_:

```
    ![m'lady](http://i.imgur.com/v8IVDka.jpg)
```

_Result_:

![m'lady](http://i.imgur.com/v8IVDka.jpg)

#### Linking Images

To add a link to an image, enclose the Markdown for the image in brackets, and then add the link in parentheses.

```
[![An old rock in the desert](../assets/shiprock.jpg "Shiprock, New Mexico by Beau Rogers")](https://www.flickr.com/photos/beaurogers/31833779864/in/photolist-Qv3rFw-34mt9F-a9Cmfy-5Ha3Zi-9msKdv-o3hgjr-hWpUte-4WMsJ1-KUQ8N-deshUb-vssBD-6CQci6-8AFCiD-zsJWT-nNfsgB-dPDwZJ-bn9JGn-5HtSXY-6CUhAL-a4UTXB-ugPum-KUPSo-fBLNm-6CUmpy-4WMsc9-8a7D3T-83KJev-6CQ2bK-nNusHJ-a78rQH-nw3NvT-7aq2qf-8wwBso-3nNceh-ugSKP-4mh4kh-bbeeqH-a7biME-q3PtTf-brFpgb-cg38zw-bXMZc-nJPELD-f58Lmo-bXMYG-bz8AAi-bxNtNT-bXMYi-bXMY6-bXMYv)
```

The rendered output looks like this:

[![An old rock in the desert](../assets/shiprock.jpg "Shiprock, New Mexico by Beau Rogers")](https://www.flickr.com/photos/beaurogers/31833779864/in/photolist-Qv3rFw-34mt9F-a9Cmfy-5Ha3Zi-9msKdv-o3hgjr-hWpUte-4WMsJ1-KUQ8N-deshUb-vssBD-6CQci6-8AFCiD-zsJWT-nNfsgB-dPDwZJ-bn9JGn-5HtSXY-6CUhAL-a4UTXB-ugPum-KUPSo-fBLNm-6CUmpy-4WMsc9-8a7D3T-83KJev-6CQ2bK-nNusHJ-a78rQH-nw3NvT-7aq2qf-8wwBso-3nNceh-ugSKP-4mh4kh-bbeeqH-a7biME-q3PtTf-brFpgb-cg38zw-bXMZc-nJPELD-f58Lmo-bXMYG-bz8AAi-bxNtNT-bXMYi-bXMY6-bXMYv)

### Links

To create a link, enclose the link text in brackets (e.g., `[Duck Duck Go]`) and then follow it immediately with the URL in parentheses (e.g., `(https://duckduckgo.com)`).

_Example_:

    [This is a link](http://example.com)

_Result_:

[This is a link](http://example.com)

#### Adding Titles

You can optionally add a title for a link. This will appear as a tooltip when the user hovers over the link. To add a title, enclose it in parentheses after the URL.

_Example_:

```
My favorite search engine is [Duck Duck Go](https://duckduckgo.com "The best search engine for privacy").
```

_Result_:

My favorite search engine is [Duck Duck Go](https://duckduckgo.com "The best search engine for privacy").

### Blockquotes

To create a blockquote, add a > in front of a paragraph.

_Example_:

```
    As Kanye West said:
    > We're living the future so
    > the present is our past.
```

_Result_:

As Kanye West said:
> We're living the future so
> the present is our past.

#### Blockquotes with Multiple Paragraphs

```
    > Dorothy followed her through many of the beautiful rooms in her castle.
    >
    > The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
```

> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

Blockquotes can contain multiple paragraphs. Add a > on the blank lines between the paragraphs.

Blockquotes can also be nested. Add a >> in front of the paragraph you want to nest.

_Example_:

```
> Dorothy followed her through many of the beautiful rooms in her castle.
>
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
```

_Result_:

> Dorothy followed her through many of the beautiful rooms in her castle.
>
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

### Horizontal Rules

_Example_:

```
---
```

_Result_:

---

### Code Snippets

Indenting by 4 spaces will turn an entire paragraph into a code-block.

_Example_:

```
    .my-link {
    text-decoration: underline;
    }
```

_Result_:

    .my-link {
        text-decoration: underline;
    }

### Reference Lists & Titles

_Example_:

```
**The quick brown [fox][1], jumped over the lazy [dog][2].**

[1]: https://en.wikipedia.org/wiki/Fox "Wikipedia: Fox"
[2]: https://en.wikipedia.org/wiki/Dog "Wikipedia: Dog"
```

_Result_:

**The quick brown [fox][1], jumped over the lazy [dog][2].**   

[1]: https://en.wikipedia.org/wiki/Fox "Wikipedia: Fox"
[2]: https://en.wikipedia.org/wiki/Dog "Wikipedia: Dog"

### Escaping

_Example_:

```
\*literally\*
```

_Result_:

\*literally\*

### Embedding HTML

_Example_:

```
<button class="button-save large">Big Fat Button</button>
```

_Result_:

<button class="button-save large">Big Fat Button</button>

### Markdown Footnotes

_Example_:

Work in [Ghost](https://ghost.org/):

```
The quick brown fox[^1] jumped over the lazy dog[^2].

[^1]: Foxes are red
[^2]: Dogs are usually not red
```

_Result_:

The quick brown fox[^1] jumped over the lazy dog[^2].  
(Please scroll to the end of the page, and you will see a footnote)

[^1]: Foxes are red
[^2]: Dogs are usually not red

## GitHub Flavored Markdown

### Syntax Highlighting

_Example_:

````
``` javascript
    function fancyAlert(arg) {
      if(arg) {
        $.facebox({div:'#foo'})
      }
    }
```
````

_Result_:

``` javascript
    function fancyAlert(arg) {
      if(arg) {
        $.facebox({div:'#foo'})
      }
    }
```

### Task Lists

_Example_:

```
- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item
```

_Result_:

- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item

### Tables

You can create tables by assembling a list of words and dividing them with hyphens `-` (for the first row), and then separating each column with a pipe `|`:

_Example_:

```
First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column
```

_Result_:

First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column

### Username @mention

Typing an `@` symbol, followed by a username, will notify that person to come and view the comment. This is called an “`@mention`”, because you’re mentioning the individual. You can also `@mention` teams within an organization. For example @datahomelab.

## References

* http://blog.ghost.org/markdown/
* https://guides.github.com/features/mastering-markdown/
