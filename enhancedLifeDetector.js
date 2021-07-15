/*
TODO Create a file called enhancedLifeDetector.js
TODO Print out the appropriate tree life status depending on which command line argument your script receives (see table below)
NOTE ---
0	"alive"
1	"flowering"
2	"shedding"
3+	"other"
*/

const argumentValue = process.argv[2];
const treeStatus = Number(argumentValue);

if (treeStatus === 0) {
  console.log("alive");
} else if (treeStatus === 1) {
  console.log("flowering");
} else if (treeStatus === 2) {
  console.log("shedding");
} else if (treeStatus >= 3) {
  console.log("other");
}
