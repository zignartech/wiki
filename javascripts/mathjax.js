window.MathJax = {
  tex2jax: {
    inlineMath: [ ["$","$"], ["\\(","\\)"] ],
    displayMath: [ ["\\[","\\]"] ],
    processEscapes: true
  },
  TeX: {
    TagSide: "right",
    TagIndent: ".8em",
    MultLineWidth: "85%",
    equationNumbers: {
      autoNumber: "AMS",
    },
    unicode: {
      fonts: "STIXGeneral,'Arial Unicode MS'"
    }
  },
  displayAlign: "center",
  showProcessingMessages: false,
  messageStyle: "none"
};

(function () {
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
  script.async = true;
  document.head.appendChild(script);
})();