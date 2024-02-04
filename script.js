function add(){
  var el = document.getElementById('y');
  var style = window.getComputedStyle(y, null).getPropertyValue('font-size');
  var fontSize = parseFloat(style); 
  // now you have a proper float for the font size (yes, it can be a float, not just an integer)
  el.style.fontSize = (fontSize + 28) + 'px';
}