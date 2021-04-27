nose_x = 0;
nose_y = 0;

function preload()
{
    clown_nose = loadImage('https://i.postimg.cc/mZqjGsff/clown-nose.png');
}

function setup()
{
    canvas = createCanvas(800,800);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(800,800);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is informed');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("x = " + results[0].pose.nose.x);
        console.log("y = " + results[0].pose.nose.y);
    }
}

function draw()
{
    image(video,0,0,800,800);
    image(clown_nose,nose_x-20,nose_y-10,80,80);
}

function take_snapshot()
{
    save('clown_face_filter.jpeg');
}