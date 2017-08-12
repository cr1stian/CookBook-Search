var resultsBox = document.querySelector("#resultsBox");


var searchBox = document.querySelector("#searchBox").addEventListener('keydown', function(event){

  if(event.keyCode === 13){
    return(displayData(event.target.value));
  }

})

displayData("")


function displayData(event){
fetch(`http://recipepuppyproxy.herokuapp.com/api/?i=${event}`)
      .then( function(response) {
        return response.json()
      }).then(function(data){
        recipesBox(data)
      })

}


function recipesBox(data){
    var searchWord = ""
  for(i=0; i < data.results.length; i++){

    var title = `${data.results[i].title}`;
    let link = `${data.results[i].href}`;
    let ingredients = `${data.results[i].ingredients}`;
    let thumbnail = `${data.results[i].thumbnail}`;
  

    searchWord += `<div>
                    <img src="${thumbnail}"/>
                    <h2>${title}</h2>
                    <p>${ingredients}</p>

                    </div>`

  };
  resultsBox.innerHTML = searchWord
};
