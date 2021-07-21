function preload(){
}
function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(390, 300);
    video = createCapture(VIDEO);
    video.hide();
    tint_colour = ""
}
function draw(){
    image( video, 0, 0, 640,480);
    tint(tint_colour);
}
function filterChange(){
    tint_colour = document.getElementById("color_input").value;
}
function take_snapshot(){
    save('filter_selfie.png');
}