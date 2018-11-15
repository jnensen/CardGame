// find elements
var button = $("button");
let playerCard; 
let computerCard;

let url2 = "https://deckofcardsapi.com/api/deck/new/shuffle/";



//shuffle and get new deck
$.getJSON(url2, { count: 1 })
    .done(function (data) {
        console.log(data.remaining);
        let deckID = data.deck_id;
        let url = "https://deckofcardsapi.com/api/deck/" + deckID + "/draw/";
        console.log('första funkar åde..')

        //draw cards from previously created deck
        $.getJSON(url, { count: 1 })
            .done(function (data) {
                data.cards.forEach(function (card) {
                    console.log(card.code);                    
                    $('.Pla').attr('src', card.image);

                    //draws card for computer, while with a 1500ms delay
                    setTimeout(function () {
                        $.getJSON(url, { count: 1 })
                            .done(function (data) {
                                data.cards.forEach(function (card) {
                                    console.log(card.code);
                                    $('.Com').attr('src', card.image);

                                })
                            })
                    },1500)

                })
                console.log(data.remaining);
                console.log('andra funkar åde..')
            })

            .fail(function () {
                console.log('Det gick åt skogen på sista anropet');
            });
    })
    .fail(function () {
        console.log("Det gick åt skogen....");
    });



var timer = new Timer();
$('#start.button').click(function () {
    timer.start();
});
$('#pause.button').click(function () {
    timer.pause();
});
$('#chronoExample .stopButton').click(function () {
    timer.stop();
});
$('#chronoExample .resetButton').click(function () {
    timer.reset();
});
timer.addEventListener('secondsUpdated', function (e) {
    $('div.values').html(timer.getTimeValues().toString());
});
timer.addEventListener('started', function (e) {
    $('div.values').html(timer.getTimeValues().toString());
});
timer.addEventListener('reset', function (e) {
    $('div.values').html(timer.getTimeValues().toString());
});