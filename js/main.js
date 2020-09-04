//main.js for learing JS in Day 2
var x = 2;
var userName = "steven";
var htmlBuilder = "";

// table
let teamTable = [
  {teamName: "Braves", wins: 89, losses: 55},
  {teamName: "Nationals", wins: 79, losses: 63},
  {teamName: "Phillies", wins: 74, losses: 68},
  {teamName: "Mets", wins: 72, losses: 70},
  {teamName: "Marlins", wins: 51, losses: 91},
  {teamName: "Cardinals", wins: 81, losses: 62},
  {teamName: "Cubs", wins: 76, losses: 66},
  {teamName: "Brewers", wins: 74, losses: 68},
  {teamName: "Reds", wins: 67, losses: 77},
  {teamName: "Pirates", wins: 62, losses: 81},
  {teamName: "Dodgers", wins: 93, losses: 52},
  {teamName: "Diamondbacks", wins: 75, losses: 68},
  {teamName: "Giants", wins: 69, losses: 74},
  {teamName: "Padres", wins: 66, losses: 76},
  {teamName: "Rockies", wins: 60, losses: 84}
];

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}
function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
}
}

let table = document.querySelector("table");
let data = Object.keys(teamTable[0]);
generateTable(table, teamTable);
generateTableHead(table, data);

var tempHighWins = 0;
var tempLeader = 0;


// in class content/prewritten content
teams = ["Braves", "Nationals","Phillies","Mets","Marlins","Cardinals","Cubs","Brewers","Reds","Pirates","Dodgers","Diamondbacks","Giants","Padres","Rockies",];
wins = [89,79,74,72,51,81,76,74,67,62,93,75,69,66,60];
losses = [55,63,68,70,91,62,66,68,77,81,52,68,74,76,84];

htmlBuilder = '<h2>Teams:</h2>';
htmlBuilder += '<div class="team-list">';

for (var i=0; i<teams.length; i++){
  //console.log("inside the loop " + i);
  console.log(teams[i]);

  if (losses[i] >= 60){
    console.log("This team is horrible!");
  }else{
    console.log('This team is not that bad');
  }

  htmlBuilder += teams[i] +"     "+ wins[i] +"     "+ losses[i] + "</br>";
}
htmlBuilder += "</div>";
document.getElementById('teams').innerHTML=htmlBuilder;

//logic to determin the team with the most wins.

var tempHighWins = 0;
var tempLeader = 0;


for (var i=0; i<teams.length; i++){
  if(wins[i] >= tempHighWins){
    tempHighWins = wins[i];
    tempLeader = i;
  }

  if (tempLeader) {
    htmlBuilder += "<strong>" + teams[tempLeader] + "</strong></br>";
  }

}
document.getElementById('teams').innerHTML=htmlBuilder;
console.log("The team with the most wins of " + tempHighWins + " is " + teams[tempLeader]);


console.log(teams);
console.log(wins);
console.log(wins[x]);