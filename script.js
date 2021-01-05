const btn = document.getElementById("button");
const audioElement = document.getElementById("audio");



let togglebuton = ()=>{
   btn.disabled = !btn.disabled;
}


// passing jokes into our  voicRss 
 function  Tellme (joke){
     console.log("tell me joke :", joke)
     VoiceRSS.speech({
        key: '1645f99b45e14cdb980b62bf5f579953',
        src: joke,
        hl: 'en-us',
        v: 'Linda',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}



async function GetJokes(){
    let jokes = "";
    const ApiUrl = `https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`
    try{
      const response = await fetch(ApiUrl)
      const  data =  await response.json()
      data.setup? jokes=`${data.setup}...${data.delivery}`: jokes = data.joke;
       //  text  to speech  function
       Tellme(jokes);
       // button disable 
       togglebuton();
    }catch(error){
        // catch our eror here //
        console.log("whoops ", error)
    }

}

btn.addEventListener("click", GetJokes);
audioElement.addEventListener("ended", togglebuton)



