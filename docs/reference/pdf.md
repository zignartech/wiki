---
template: overrides/main.html
tags:
  - Reference
---

# PDF Files Support

Markdown itself doesn't have a mechanism for embedding a PDF. However, Markdown accepts raw HTML in its input and passes it through unaltered. So the question you might want to ask is: How to you embed a PDF in HTML? In other words, what HTML would one use to have a browser display a PDF embedded in an HTML page?

You would just include that HTML in your Markdown document:

_Example_:

``` html linenums="1"
<object data="../assets/sample.pdf" type="application/pdf" style="min-height:100vh;width:100%">
    <embed src="../assets/sample.pdf">
        <p>This browser does not support PDFs. Please download the PDF to view it: <a href="../assets/sample.pdf">Download PDF</a>.</p>
    </embed>
</object>
```

_Result_:

<object data="../assets/sample.pdf" type="application/pdf" style="min-height:100vh;width:100%">
    <embed src="../assets/sample.pdf">
        <p>This browser does not support PDFs. Please download the PDF to view it: <a href="../assets/sample.pdf">Download PDF</a>.</p>
    </embed>
</object>
