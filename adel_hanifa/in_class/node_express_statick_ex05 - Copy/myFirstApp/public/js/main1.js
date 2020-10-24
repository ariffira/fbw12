let apiKey = '5a245477';

function showMovis(x, y) {
    console.log(x, y)
    if (y == 'all')
        var link = `http://www.omdbapi.com/?apikey=${apiKey}&s=${x}`;
    else
        var link = `http://www.omdbapi.com/?apikey=${apiKey}&s=${x}&type=${y}`;

    console.log(link)
    fetch(link)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            dAllMovies.innerHTML = '';
            if (data.Response == "False"){
                dAllMovies.innerHTML +=`
                    <div class="text-center col-12">
                        <img src="img/no_result.png" style="margin: auto; width: 35%;">
                    </div>`;
            }
            else {
                data.Search.map((item) => {
                    //console.log(item)
                    dAllMovies.innerHTML +=`
                    <div class="col-lg-2 col-md-4">
                        <div class="card mx-2 my-3 bg-transparent border-success" onclick="showMovieDetails('${item.imdbID}')">
                            <img src="${addPoster(item.Poster)}" class="card-img myImg" title="${item.Title}">
                        </div>
                    </div>`;
                })
            }
            
        });
}

function showMovieDetails(x) {
    console.log(x)
    var link = `http://www.omdbapi.com/?apikey=${apiKey}&i=${x}`;
    console.log(link)
    fetch(link)
        .then(response => response.json())
        .then(item => {
            console.log(item);
            dAllMovies.innerHTML =`
            <div class="col-lg-3 my-4">
                <a target="_blank" href="https://www.imdb.com/title/${x}"><img src="${addPoster(item.Poster)}" class="card-img myImg2" title="${item.Title}"></a>
            </div>

            <div class="col-lg-9 my-4">
                <div class="row">
                    <div class="col-md-9">
                        <h2>${item.Title}</h2>
                    </div>
                    <div class="col-md-3">
                        ${getRatings(item.imdbRating)}
                    </div>
                </div>
                <div class="table-responsive">    
                    <table class="table">
                        <tr>
                            <th>Type:</th><td>${item.Type}</td>
                            <th>Genre:</th><td>${replaceTheArray(item.Genre)}</td>
                        </tr>
                        <tr>
                            <th>Released:</th><td>${item.Released}</td>
                            <th>Runtime:</th><td>${showTheTime(item.Runtime)}</td>
                        </tr>
                        <tr>
                            <th>Language:</th><td>${splitTheArray(item.Language)}</td>
                            <th>Country:</th><td>${splitTheArray(item.Country)}</td>
                        </tr>
                        <tr>
                            <th>Director:</th><td>${splitTheArray(item.Director)}</td>
                            <th>Writer:</th><td>${splitTheArray(item.Writer)}</td>
                        </tr>
                        <tr>
                            <th>Actors:</th><td colspan="3">${replaceTheArray(item.Actors)}</td>
                        </tr>
                        <tr>
                            <th>Summary:</th><td colspan="3">${item.Plot}</td>
                        </tr>
                    </table>
                </div>
            </div>`;    
        });
}

function getRatings(x) {
    if(x == "N/A"){
        return `
        <div class="stars-outer">
            <div class="stars-inner"></div>  
        </div>
        <span style="color: white;">${x}</span>`;
    }
   return `
    <div class="stars-outer">
        <div class="stars-inner" style="width: ${x*10}%;"></div>  
    </div>
    <span style="color: white;">${(x/2).toFixed(1)}</span>`;
}

function showTheTime(x){
    if(x == "N/A"){
        return x;
    }
    x= x.split(' ')[0];
    //console.log(x);
    var y = 0;
    while (x>=60) {
        x = x - 60;
        y++;        
    }
    return y+' h '+x+' min '; 
}

function splitTheArray(x){
    x= x.split(',');
    console.log(x);
    var y='';
    x.map((item) => {
        //console.log(item);
        y = y + '<li>'+item+'</li>';
    })
    return y;
}

function replaceTheArray(x) {
    return x.replace(/,/gi, " -");
}

function addPoster(x) {
    if(x == "N/A"){
        return 'img/no-cover.png';
    }
    else {
        return x;
    }
}