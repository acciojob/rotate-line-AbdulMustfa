//your JS code here. If required.
      var line = document.getElementById('line');
      var angle = 0;
      setInterval(function() {
        angle += 1;
        line.style.transform = 'rotate(' + angle + 'deg)';
      }, 10);