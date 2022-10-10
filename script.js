function contentLoader(){
    sendApiReqIndex();

    
}
async function sendApiReqIndex(){
   // let apiKey=("WeJQydmgkMuduN5VfyYepdvelVujh0GjH4e7yJro");
    let res= await fetch("https://api.nasa.gov/planetary/apod?api_key=WeJQydmgkMuduN5VfyYepdvelVujh0GjH4e7yJro");
    let data= await res.json();
    console.log(data)
    useApiDataIndex(data);

    
}
function useApiDataIndex(data){
    document.querySelector("#date").innerHTML += data.date;
    document.querySelector("#explanation").innerHTML += data.explanation;
   // document.querySelector("#hdurl").innerHTML += data.hdurl;
    document.querySelector("#title").innerHTML += data.title;
    
 if(data.media_type =="image"){

    document.querySelector("#url").innerHTML += '<img src="'+data.url+'" class="url" />';
    
} else {

    document.getElementById('video').src = data.url;
    document.getElementById.removeClass("hidden");

} 
  
    document.querySelector("#media_type").innerHTML += data.media_type;
    document.querySelector("#copyright").innerHTML += data.copyright;

}







