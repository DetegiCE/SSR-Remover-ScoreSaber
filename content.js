function removeUser(userString) {
    var userArray = userString.split(',');
    console.log(userArray);
    var t = document.querySelector("table").querySelector("tbody");
    for(var i=0 ; i<t.childElementCount ; i++) {
        var rowinfo = t.children[i].getElementsByClassName("player")[0].getElementsByTagName("a")[0].getAttribute("href");
        var rowuid = rowinfo.split('/')[2];
        console.log(rowuid);
        userArray.forEach(function(item, index, arr2) {
            if (String(item) == String(rowuid)) {
                t.deleteRow(i);
            }
        })
    }
}