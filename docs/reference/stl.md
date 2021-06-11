---
template: overrides/main.html
tags:
  - Reference
---

# STL Files Support

Markdown itself doesn't have a mechanism for embedding an STL File. However, Markdown accepts raw HTML in its input and passes it through unaltered. So the question you might want to ask is: How to you embed an STL in HTML? In other words, what HTML would one use to have a browser display an STL embedded in an HTML page?

You would just include that HTML in your Markdown document:

_Example_:

``` html linenums="1"
<script src="/javascripts/stl_viewer/stl_viewer.min.js"></script>
<div id="stl_cont" style="width:500px;height:500px;margin:100 auto;"></div>
<script>
    var stl_viewer=new StlViewer (
        document.getElementById("stl_cont"), {
            auto_rotate:true,
            auto_resize: false,
            zoom: 4,
            bgcolor:"#20FAAC",
            allow_drag_and_drop:true,
            models: [ {filename:"../../reference/assets/sample.stl"}]
        }
    );
</script>
```

_Result_:

<script src="/javascripts/stl_viewer/stl_viewer.min.js"></script>
<div id="stl_cont" style="width:500px;height:500px;margin:100 auto;"></div>
<script>
    var stl_viewer=new StlViewer (
        document.getElementById("stl_cont"), {
            auto_rotate:true,
            auto_resize: false,
            zoom: 4,
            bgcolor:"#20FAAC",
            allow_drag_and_drop:true,
            models: [ {filename:"../../reference/assets/sample.stl"}]
        }
    );
</script>

## Javascript STL/OBJ 3D files Viewer

This Plugin is highly customizable. Further instructions on how to use it can be found [here][1].

- Reads binary/ASCII STL files; OBJ files
- Supports multiple 3D files at the same container
- Set model's size, position, color, rotation and some basic animation
- Supports user's drag&drop
- Model click events
- Model information (size, volume, surface area etc.)
- Add existing meshes into scene
- Supports WebGL - falls back to HTML5 Canvas
- Supports multiple Stl Viewer instances at the same page
- Easy usage - as much as one line of Javascript code
- Stand alone code - independent of external services/websites 

[1]: https://www.viewstl.com/plugin/