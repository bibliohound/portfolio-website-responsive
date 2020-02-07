var candidate = function (name, partyColor) {
  var politician = {};
  politician.name = name;
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.partyColor = partyColor;

  politician.countingVotes = function(){
    this.totalVotes = 0;
    for (var i = 0; i < this.electionResults.length; i++){
     this.totalVotes = this.totalVotes + this.electionResults[i];
    }
  };

  return politician;
};

var dogs = candidate("Instagram Dogs", [132,17,11]);
var cats = candidate("Cat Memes", [245,141,136]);


dogs.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
cats.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

cats.electionResults[9] = 1;
dogs.electionResults[9] = 28;
cats.electionResults[4] = 17;
dogs.electionResults[4] = 38;
cats.electionResults[43] = 11;
dogs.electionResults[43] = 27;

var setStateResults = function(state) {
  theStates[state].winner = null;
  if (dogs.electionResults[state] > cats.electionResults[state]) {
    theStates[state].winner = dogs;
  }
  else if (cats.electionResults[state] > dogs.electionResults[state]) {
    theStates[state].winner = cats;
  }

  var stateWinner = theStates[state].winner;
  if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.partyColor;
  }
  else {
    theStates[state].rgbColor = [11,32,57];
  }

  var stateInfoTable = document.getElementById("stateResults");
  var header = stateInfoTable.children[0].children[0];
  var stateName = header.children[0];
  var stateAbbrev = header.children[1];
  var body = stateInfoTable.children[1];
  var name1 = body.children[0].children[0];
  var results1 = body.children[0].children[1];
  var name2 = body.children[1].children[0];
  var results2 = body.children[1].children[1];
  var stateWinnerName = body.children[2].children[1];

  stateName.innerText = theStates[state].nameFull;
  stateAbbrev.innerText = theStates[state].nameAbbrev;
  name1.innerText = dogs.name;
  results1.innerText = dogs.electionResults[state];
  name2.innerText = cats.name;
  results2.innerText = cats.electionResults[state];

  if (dogs.electionResults[state] > cats.electionResults[state]) {
    stateWinnerName.innerText = dogs.name;
  }
  else if (cats.electionResults[state] > dogs.electionResults[state]) {
    stateWinnerName.innerText = cats.name;
  }
  else {
    stateWinnerName.innerText = "Tied";
  }

};


dogs.countingVotes();
cats.countingVotes();

//console.log(dogs.totalVotes);
//console.log(cats.totalVotes);

var winner = "???";
if (dogs.totalVotes > cats.totalVotes) {
  winner = dogs.name;
}
else if (cats.totalVotes > dogs.totalVotes) {
  winner = cats.name;
}
else {
  winner = "It's a draw.";
}
//console.log("The winner is " + winner);

//console.log(dogs.partyColor);
//console.log(cats.partyColor);


var countryTable = document.getElementById("countryResults");

countryTable.children[0].children[0].children[0].innerText = dogs.name;
countryTable.children[0].children[0].children[1].innerText = dogs.totalVotes;
countryTable.children[0].children[0].children[2].innerText = cats.name;
countryTable.children[0].children[0].children[3].innerText = cats.totalVotes;
countryTable.children[0].children[0].children[5].innerText = this.winner;
