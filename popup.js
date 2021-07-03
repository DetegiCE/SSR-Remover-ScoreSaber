document.getElementById("button").addEventListener("click", function() {
    var user = document.querySelector("#user").value;
    chrome.tabs.executeScript(null, {
        code: `removeUser('${user}')`
    })
})