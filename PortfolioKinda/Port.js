var textSpan = document.querySelector('.portfolio_span');
var cursorSpan = document.querySelector('.typewriter-cursor');
if (textSpan && cursorSpan) {
  var text = textSpan.getAttribute('data-typewriter') || textSpan.textContent;
  textSpan.textContent = '';
  var i = 0;
  function typeLetter() {
    if (i <= text.length) {
      textSpan.textContent = text.substring(0, i);
      i++;
      setTimeout(typeLetter, 80);
    } else {
      blinkCursor();
    }
  }
  function blinkCursor() {
    setInterval(function() {
      if (cursorSpan.style.visibility === 'hidden') {
        cursorSpan.style.visibility = 'visible';
      } else {
        cursorSpan.style.visibility = 'hidden';
      }
    }, 500);
  }
  typeLetter();
}