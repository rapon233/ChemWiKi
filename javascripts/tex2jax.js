window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [ ['$$', '$$'], ["\\[","\\]"] ],
    processEscapes: true,
    processEnvironments: true,
    multlineWidth: '85%',
    autoload: {
      color: [],
      colorV2: ['color'],
      mhchem: ['ce', 'pu']
    },
        packages: {'[+]': ['noerrors']}
    },
    options: {
      processHtmlClass: "arithmatex",
      ignoreHtmlClass: 'tex2jax_ignore'
    },
    loader: {
      load: ['input/asciimath', '[tex]/noerrors']
    },
  displayAlign: "left",
  showProcessingMessages: false,
  messageStyle: "none"
};
