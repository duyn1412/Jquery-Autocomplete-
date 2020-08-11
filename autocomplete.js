$(function () {
    var availableTags = [
        {label: "Hilton Honors Card",value: "Hilton Honors Card"},
        {label: "Hilton Honors Amex Aspire Card", value: "Hilton Honors Amex Aspire Card"},
        {label: "Hilton Honors Amex Business Card", value: "Hilton Honors Amex Business Card"},
        {label: "Amex Hilton Surpass Card", value: "Amex Hilton Surpass Card"},
        {label: "U.S. Bank FlexPerks Gold Amex Card", value: "U.S. Bank FlexPerks Gold Amex Card"},
        {label: "Amex Gold Business", value: "Amex Gold Business"},
        {label: "Amex Gold Delta Business", value: "Amex Gold Delta Business"},
        
    ];

    // Overrides the default autocomplete filter function to search for matched on atleast 1 word in each of the input term's words
    $.ui.autocomplete.filter = function (array, terms) {
        arrayOfTerms = terms.split(" ");
        arrayOfTerms.forEach(function (entry) {
        array = $.grep(array, function (value) {
             //   console.log(value);
                return value.label.toLowerCase().indexOf(entry.toLowerCase()) >= 0 || value.value.toLowerCase().indexOf(entry.toLowerCase()) >= 0;
            })
        });

       return array;
    };

    $("#input").autocomplete({
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
