function preload(){

}

function setup(){
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(500, 450);
    canvas.position(570, 100)

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    background("lightgreen");
}




function modelLoaded(){
    console.log("Model is Loaded:)");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}