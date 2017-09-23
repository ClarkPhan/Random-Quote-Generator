function newQuote() {
  $.ajaxSetup({ cache: false });

  $.getJSON(
    "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&1&callback=",
    function(data) {
      $("#quote").html(data[0].content + " - " + data[0].title);
    }
  );
};
newQuote(); 

$("#new-quote-btn").on("click", function() {
  newQuote();
});