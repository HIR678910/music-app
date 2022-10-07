song = "";
song_Rude = "";
song_Dusk_Till_Dawn = "";
lY = 0;
lX = 0;
rX = 0;
rY = 0;
scoreLeft = 0;
scoreRight = 0;
Rude = "";
Dusk_Till_Dawn = "";

function setup()
{
  canvas = createCanvas(600, 500);
  canvas.center();

  video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
   
function modelLoaded()
    {
      console.log('PoseNet Has Stared');
    }

function gotPoses(results)
{
    if(results.length > 0);
  {
    console.log(results);
    
    scoreLeft = results[0].pose.keypoints[9].score;
    console.log("scoreLeft = " + scoreLeft);

    scoreRight = results[0].pose.keypoints[10].score;
    console.log("scoreRight = " + scoreRight);


    lX = results[0].pose.leftWrist.x;
    lY = results[0].pose.leftWrist.y;
    console.log("leftWrist = " + lX + " leftWristY = " + lY);
  
    rX = results[0].pose.RightWrist.x;
    rY = results[0].pose.RightWrist.y;
    console.log("rightWrist = " + rX + " rightWristY = " + rY);

}
}

function preload()
{
  song_Rude = loadSound("Rude.mp3");
  song_Dusk_Till_Dawn = loadSound("Dusk Till Dawn.mp3");

}

function draw()
{
  image(video, 0, 0, 600, 500);

  fill("#95f9fc");
  stroke("#197d80");

  Dusk_Till_Dawn = song_Dusk_Till_Dawn.isPlaying();
  console.log("Dusk Till Dawn = "+Dusk_Till_Dawn);

  if(scoreRight > 0.2){
    circle(rX, rY, 20);

    song_Rude.stop();

if(Dusk_Till_Dawn == false)
{ 
  song_Dusk_Till_Dawn.play();
}

else
{
  document.getElementById("S_N").innerHTML = "Song Name: = Dusk Till Dawn";
}

}

  Rude = song_Rude.isPlaying();
  console.log("Rude ="+Rude);


  if(scoreLeft > 0.2){
    circle(lX, lY, 20);

    song_Dusk_Till_Dawn.stop();

if(Rude == false)
{ 
  song_Rude.play();
}

else
{
  document.getElementById("S_N").innerHTML = "Song Name: = Rude";
}

}
  

}
  


