(function(Cookies){
    var s = Cookies("splashed");
    if (!s){
        Cookies("splashed", "1");
        document.location.replace("index.html");
    }    
})(window.Cookies);
