const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'rgb(168, 42, 32,)';
ctx.fillRect(0, 0, width, height);
<script type="text/javascript">
document.onmouseup=getXYPosition;
</script>
// Cursor coordinate functions
var myX, myY, xyOn, myMouseX, myMouseY;
xyOn = true;
function getXYPosition(e){
myMouseX=(e||event).clientX;
myMouseY=(e||event).clientY;
if (document.documentElement.scrollTop > 0) {
myMouseY = myMouseY + document.documentElement.scrollTop;
}
if (xyOn) {
alert("X is " + myMouseX + "\nY is " + myMouseY);
}
}
function toggleXY() {
xyOn = !xyOn;
document.getElementById('xyLink').blur();
return false;
}
<a href="#" id="xyLink" onfocus="toggleXY();" accesskey="z"></a>
