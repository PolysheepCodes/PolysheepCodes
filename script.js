const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'rgb(168, 42, 32,)';
ctx.fillRect(0, 0, width, height);
@Test
 public void getCoordinates() throws Exception {
  //Locate element for which you wants to retrieve x y coordinates.
       WebElement Image = driver.findElement(By.xpath("//img[@border='0']"));
       //Used points class to get x and y coordinates of element.
        Point classname = Image.getLocation();
        int xcordi = classname.getX();
        System.out.println("Element's Position from left side"+xcordi +" pixels.");
        int ycordi = classname.getY();
        System.out.println("Element's Position from top"+ycordi +" pixels.");
 }
