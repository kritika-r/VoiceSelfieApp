var SpeechRecognition= window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();

}
recognition.onresult= function(event){
    console.log(event);
    
    var Content= event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML= Content;
    console.log(Content);
    if(Content=="take my selfie"){
        speak();
        console.log("Taking your selfie");
    }
    else{
        console.log("Please say 'take my selfie'to take your selfie.");
    }
   
    
}
function speak(){
    var synth= window.speechSynthesis;

    var speak_data= "Taking your selfie in five seconds.";
    var utterThis= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        takeSnapshot();
        save();
    },5000);
    
}
var camera= document.getElementById("camera");
Webcam.set({
    width: 360,
    height: 250,
    image_format: "png",
    quality: 90

    
});
function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("selfie").innerHTML= '<img id="myselfie" src="'+data_uri+'">';
    });
    
}
function save(){
    link= document.getElementById("link");
    image= document.getElementById("myselfie").src;
    link.href= image;
    link.click();
}