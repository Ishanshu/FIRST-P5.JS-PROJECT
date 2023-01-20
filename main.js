function preload()
{

}

function setup()
{
    canvas = createCanvas(620, 440);
    canvas.position(250, 150);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";

}

function draw()
{
    image(video, 150, 150, 350, 260);
    tint(tint_color);
    fill(118, 0, 0);
    stroke(118, 0, 0);
    circle(50, 50, 70);

    fill(118, 0, 0);
    stroke(118, 0, 0);
    circle(565, 50, 70);

    fill(118, 0, 0);
    stroke(118, 0, 0);
    circle(50, 400, 70);

    fill(118, 0, 0);
    stroke(118, 0, 0);
    circle(565, 400, 70);
}

function take_snapshot()
{
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}
