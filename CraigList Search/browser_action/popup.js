document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('searchButton');
    var queryInput = document.getElementById('query'); 
    
    checkPageButton.addEventListener('click', function() {
        var placeInput = document.getElementById('place').value;
        
        if (placeInput != 'default' && queryInput.value.trim() != "") {
            chrome.tabs.getSelected(null, function(tab) {
                var queryValue = queryInput.value;    
                d = document;
                var f = d.createElement('form');
                f.action = 'http://'+placeInput+'.craigslist.org/search/sss?sort=rel&query='+queryValue;
                f.method = 'post';
                var i = d.createElement('input');
                i.type = 'hidden';
                i.name = 'url';
                i.value = tab.url;
                f.appendChild(i);
                d.body.appendChild(f);
                f.submit();
            });
        }
    }, false);

    queryInput.addEventListener('keydown', function(event) {
        if (event.keyCode == 13) {
            checkPageButton.click();
            return false;
         }
    }, false);

}, false);