$('#search-button').on('click', function(){

    $.ajax({
        url: 'https://api.disneyapi.dev/characters',
        type: 'get',
        dataType: 'json',
        success: function (result) {
            if (result.data != 0) {
                let disney = result.data;
                console.log(disney);    
                $.each(disney, function(i, data){
                    $('#movie-list').append(`
                        <div class="col-md-4">
                            <div class="card" id="navbar-example2">
                                <img src="`+data.imageUrl+`" class="card-img-top" alt="...">
                                <div class="card-body">
                                <h5 class="card-title">`+data.name+`</h5>
                                <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">
                                <p class="card-text">`+data.tvShows+`</p>
                                </div>
                                </div>
                            </div>                    
                        </div>
                    `);
                });
                
            } else {
                $('#movie-list').html('<h1>Disney Not Found!</h1>');
            }
        }
    })
});

$('#upcoming-button').on('click', function(){

    $.ajax({
        url: 'https://digimon-api.vercel.app/api/digimon',
        type: 'get',
        dataType: 'json',
        success: function (result) {
            if (result != 0) {
                let digimon = result;
                console.log(digimon);
                $.each(digimon, function(i, data){
                    $('#movie-list').append(`
                        <div class="col-md-4">
                            <div class="card" id="navbar-example2">
                                <img src="`+data.img+`" class="card-img-top" alt="...">
                                <div class="card-body">
                                <h5 class="card-title">`+data.name+`</h5>
                                <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">
                                
                                </div>
                                </div>
                            </div>                    
                        </div>
                    `);
                });
                
            } else {
                $('#movie-list').html('<h1>Digimon Not Found!</h1>');
            }
        }
    })
});