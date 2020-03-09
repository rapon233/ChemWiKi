window.MathJax = {
    TeX: {
      inlineMath: [['$','$'], ['\\(', '\\)']],
      displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
      processEscapes: true,
      processEnvironments: true,
      digits: /^(?:[0-9]+(?:\{,\}[0-9]{3})*(?:\.[0-9]*)?|\.[0-9]+)/,
      tags: 'none',  
      tagSide: "right",
      tagIndent: ".8em",
      multlineWidth: '85%',
      equationNumbers: {
        autoNumber: "AMS",
      },
      unicode: {
        fonts: "STIXGeneral,'Arial Unicode MS'"
      },
      autoload: expandable({
        mhchem: ['ce', 'pu']
      }
    },
    displayAlign: "left",
    showProcessingMessages: false,
    messageStyle: "none"
  };

 
  