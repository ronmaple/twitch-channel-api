var channelArray = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];


var table = document.getElementById('table');

var data;

var GET = function(variable, iteration) {
    var url = 'https://wind-bow.glitch.me/twitch-api/channels/' + variable;
    var i = iteration;

    console.log('channel :' + variable + ' i: ' + i);

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(xhr.responseText);
            Display(data, i);

        }
    }

    xhr.open("GET", url, true);
    xhr.send(null);

}

var Run = function(channelArray) {
    var data;
    var DOM_Change = '';

    for (var i = 0; i < channelArray.length; i++) {
        GET(channelArray[i], i)
    }

}

var Display = function(data, i) { //DOM_Change) {

    var streamlink = data['url'];
    var logo = data['logo'];

    //display_name with stream link embedded
    var display_name = '<a href="' + streamlink + '">' + data['display_name'] + '</a>';

    // check if stream is online, if offline display 'offline'
    if (data['status'] == null) {
        var status = '<em>offline</em>';
    } else {
        var status = data['status'];
    }

    var DOM_Change = '<tr><td><img src="' + logo + '" style="height:50px;width:50px"></td> <td>' + status + '</td> <td>' + display_name + '</td>';

    table.innerHTML += DOM_Change;

}

// Contains GET for server requests nested in a loop
Run(channelArray);



