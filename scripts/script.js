responsePokeApi = () => {

    var settings = {
        "url": "https://pokeapi.co/api/v2/pokemon/25/",
        "method": "GET",
        "timeout": 0,
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
        
    
        function writePokeInfo(){
            document.getElementById('sprite').innerHTML=`<img src="${response.sprites.versions["generation-v"]["black-white"].animated.front_default}" alt="">`;
            }
            writePokeInfo()
        

        
      });

}


  
  

  
