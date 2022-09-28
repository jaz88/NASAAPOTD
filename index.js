function contentLoader(){
    senApiReq();

    
}
async function sendApiReq(){
  //  let apiKey="WeJQydmgkMuduN5VfyYepdvelVujh0GjH4e7yJro";
    let res= await fetch("https://api.nasa.gov/planetary/apod?api_key=WeJQydmgkMuduN5VfyYepdvelVujh0GjH4e7yJro");
    let data= await res.json();
    useApiData(data);
}
function useApidata(data){
    document.querySelector("#date").innerHTML += data.date;
    document.querySelector("#explanation").innerHTML += data.explanation;
    document.querySelector("#hdurl").innerHTML += data.hdurl;
    document.querySelector("#title").innerHTML += data.title;
    document.querySelector("#url").innerHTML += <img scr="${data.url}" class ="url" />;
    document.querySelector("#media_type").innerHTML += data.media_type;
    document.querySelector("#copyright").innerHTML += data.copyright;

}