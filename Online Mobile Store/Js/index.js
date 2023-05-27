// for the slide show 
var images = ["src/Home5.jpg","src/home4.jpg",
    "src/Home2.jpg", "src/home page photo.jpg"
];
var i = 0;
function slides() {
    document.getElementById("slide_img").src = images[i];
    if (i < (images.length - 1))
        i++;
    else
        i = 0;
}
setInterval(slides, 3000)  // time in milliseconds (3000 = 3 seconds)



function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = today;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}
