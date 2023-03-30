//https://storage.googleapis.com/tm-model/0r6ewVBKG/model.json

function start(){

navigator.mediaDevices.getUserMedia({ audio: true});

classifier=ml5.soundClassifier("https://storage.googleapis.com/tm-model/0r6ewVBKG/model.json",modelReady);

}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    } else{
        console.log(results)
    }


    document.getElementById("animal").innerHTML=results[0].label;
    document.getElementById("precisao").innerHTML=Math.round(results[0].confidence.toFixed(2)*100 )+"%"
    var resultado=results[0].label;
}








