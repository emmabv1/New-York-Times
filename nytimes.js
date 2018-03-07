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
            var div = $("<div>");
            var href = $("<a>");
            var h = $("<h3>").append(element.headline.main);
  
            href.attr("href",element.web_url);
            href.append(h);            
            var b = $("<p>").append(element.byline.original);
            div.append(href).append(b);
    
            $("#articles").append(div);
        });
    }).fail(function(err) {
        throw err;
    });
}

//searchArticles(search,limit,begin_year,end_year);

$("#search").on("click",function(){
    /*search = $("#searchTerm").val();
    limit = $("#recordsNum").val();
    begin_year = $("#startYear").val();
    end_year = $("#endYear").val();*/

    var search = "obama";
    var limit = 5;
    var begin_year = "2017";
    var end_year = "2018";

    searchArticles(search,limit,begin_year,end_year);

    

});