var song1="";
var song2="";
function setup()
{
    canvas = createCanvas(550, 550);
    canvas.position(490, 200);
    video = createCapture(VIDEO);
    video.hide();
        }     

function preload()
{
song1 = loadSound("music.mp3");
song2 = loadSound("music1.mp3")
}

function draw()
{
    image(video, 0, 0, 550, 500);
}
function play()
{
}