var search = "obama";
var limit = 5;
var begin_year = "2017";
var end_year = "2018";

function searchArticles(search,limit,begin_year,end_year){
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "d390cc606b064a05822706e17eedc8cc",
        'q': search,
        'begin_year': begin_year,
        'end_year': end_year,
        'limit' : limit
    });
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function(result) {
        //console.log(result);
        console.log(result.response.docs);
        var articles = result.response.docs;
        console.log("# of articles: " + articles.length);
        $.each(articles,function(index,element){
            console.log(index + " : " + element.headline.main);
            var d = $("<div class='card col-sm-5'>");
            var div = $("<div class='card-block'>");
            var href = $("<a class='btn btn-primary'>");
            var h = $("<h4 class='card-title'>").append(element.headline.main);
            href.text("Read More");
            href.attr("href",element.web_url);
            href.append(h);            
            var b = $("<p>").append(element.byline.original);
            div.append(h).append(b).append(href);
            d.append(div);
            $("#results").append(d);
        });
    }).fail(function(err) {
        throw err;
    });
}

$("button").on("click",function(){
    search = $("#searchTerm").val();
    limit = $("#recordsNum").val();
    begin_year = $("#startYear").val();
    end_year = $("#endYear").val();


    if(search === undefined){search = "obama"; }
    if(limit === undefined){ limit = 10; }
    if(begin_year === undefined){begin_year = 2017; }
    if(end_year === undefined){end_year = 2018;}

    searchArticles(search,limit,begin_year,end_year);

    

});