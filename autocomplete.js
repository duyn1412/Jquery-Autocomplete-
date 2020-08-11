$(function () {
    var availableTags = [
        "one day is the first and last today", "tuesday is today", "one", "one day is tomorrow"
    ];

    // Overrides the default autocomplete filter function to search for matched on atleast 1 word in each of the input term's words
    $.ui.autocomplete.filter = function (array, terms) {
        arrayOfTerms = terms.split(" ");
        var term = $.map(arrayOfTerms, function (tm) {
             return $.ui.autocomplete.escapeRegex(tm);
        }).join('|');
       var matcher = new RegExp("\\b" + term, "i");
        return $.grep(array, function (value) {
           return matcher.test(value.label || value.value || value);
        });
    };

    $("#tags").autocomplete({
        source: availableTags,
        multiple: true,
        mustMatch: false
        /*,source: function (request, response) {
            // delegate back to autocomplete, but extract the last term
            //response($.ui.autocomplete.filter(
            //availableTags, request.term.split(" ")));
        },*/
    });


});
