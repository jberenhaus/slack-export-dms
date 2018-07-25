let token = ""; // Replace Me
let channel = ""; // Replace Me
let count = "1000";
let latest = "";
let url = "https://slack.com/api/im.history?token=" + token + "&channel="+ channel + "&count=" + count + "&latest=" + latest + "&pretty=1";
let y = "";
let other = ""; // Replace Me

var fetchNow = function (latest) {
    fetch(constructUrl(latest))
    .then(res => res.json())
    .then(function (res) {
        console.log(res);
        let messages = res.messages;
        for (let x in messages) {         
            if(messages[x].user === other){
            	y += ("Other: "); // Replace with person's name
            } else {
              y += ("Me: ");
            }
            
            y += (messages[x].text + "\n");
        }
        if (res.has_more === false) {
            document.getElementById("demo").innerText = y;
        }
        else {
            fetchNow(messages[messages.length -1].ts);
        }
        
    });
}

var constructUrl = function (latest){
	return "https://slack.com/api/im.history?token=" + token + "&channel="+ channel + "&count=" + count + "&latest=" + latest + "&pretty=1";
}

fetchNow("");
