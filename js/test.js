<html> <body>
 <h2>What Can JavaScript Do?</h2>
 <p>html text</p>
 <p id="demos"></p> 
<script>document.getElementById("demos").innerHTML = "java script text";
</script> <p id="demo" style="display:none">you failed!</p>
 <button type="button" onclick="document.getElementById('demo').style.display='block'">apear!</button>
 <button type="button" onclick="document.getElementById('demo').style.display='none'">disapear!</button>
 <br><br> <button type="button" onclick="document.getElementById('demo2').style.fontSize = '16px'">back to normal size :( </button>
 <p id="demo2" >i wanna be a big boy!</p>
 <button type="button" onclick="document.getElementById('demo2').style.fontSize = '25px'">big!</button>
 <button type="button" onclick="document.getElementById('demo2').style.fontSize = '50px'">bigger!</button>
 <button type="button" onclick="document.getElementById('demo2').style.fontSize = '9001px'">go even behond !</button>
 <h5>you can do functions in java script this changes the apear txt</h5> 
<button onclick="myFunction()">Click Me!</button> 
<p>note for function :Placing scripts at the bottom of the body element improves the display speed, because script compilation slows down the display. </p> <br>
 <script src="cs.mcgill.ca/~dgilbe9/js/myScript.js"></script>
 include the file where src points **musnt contain script tag,writtent in html body ?
 <br> you can print the answer to math: 5+6= 
<script> document.write(5 + 6); </script> or click to solve 80/7+6=
 <button onclick="document.write(80/7+6)">Try it</button>
 <script> function myFunction() { var x = document.getElementById("demo");
 document.getElementById("demo").innerHTML = "Paragraph changed";
 x.style.fontSize = "25px"; 
x.style.color = "#00FFFF";
 }
 </script>
 <script> window.alert("WELCOME IS THIS JS TEST"); </script>
 <br><br> <button onclick="window.alert('welcome ?')">welcome me again</button> <br><br>
 <h3>Activate debugging with F12</h3>
 <p>Select "Console" in the debugger menu. Then click Run again.</p>
 <script> console.log("this is a console.log entry"); </script>
 </body></html>

