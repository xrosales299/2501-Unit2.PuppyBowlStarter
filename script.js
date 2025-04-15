//If you would like to, you can create a variable to store the API_URL here.
//This is optional. if you do not want to, skip this and move on.


/////////////////////////////
/*This looks like a good place to declare any state or global variables you might need*/

////////////////////////////
let playerList = []
const allPlayersDiv = document.querySelector("#allPlayers")
const PlayersImage = document.getElementById("dogimage")
const playersID = document.getElementById("PlayersName").value;
/**
 * Fetches all players from the API.
 * This function should not be doing any rendering
 * @returns {Object[]} the array of player objects
 */

/*const fetchAllPlayers = async () => {
  const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2501-PUPPIES/players")
  if(!response.success){
    console.log("Connected to puppyball API!");
  }
  const data = await response.json()
  console.log(data)
  return data
  //TODO
};
/**
 * Fetches a single player from the API.
 * This function should not be doing any rendering
 * @param {number} playerId
 * @returns {Object} the player object
 */
const fetchSinglePlayer = async (singleDog) => {
  const html2 = playerList.players.map((playerid) => {
    console.log(playersID)
    return 
  })

};

/**
 * Adds a new player to the roster via the API.
 * Once a player is added to the database, the new player
 * should appear in the all players page without having to refresh
 * @param {Object} newPlayer the player to add
 */
/* Note: we need data from our user to be able to add a new player
 * Do we have a way to do that currently...? 
*/
/**
 * Note#2: addNewPlayer() expects you to pass in a
 * new player object when you call it. How can we
 * create a new player object and then pass it to addNewPlayer()?
 */
/**
 * FOR TESTING PURPOSES ONLY PLEASE OBSERVE THIS SECTION
 * @returns {Object} the new player object added to database
 */

const addNewPlayer = async (newPlayer) => {
  //TODO
};

/**
 * Removes a player from the roster via the API.
 * Once the player is removed from the database,
 * the player should also be removed from our view without refreshing
 * @param {number} playerId the ID of the player to remove
 */
/**
 * Note: In order to call removePlayer() some information is required.
 * Unless we get that information, we cannot call removePlayer()....
 */
/**
 * Note#2: Don't be afraid to add parameters to this function if you need to!
 */

const removePlayer = async (playerId) => {
  //TODO

};  


const render = () => {
  const html = playerList.players.map((player) => {
      console.log(player)
      return `
        <div>
          <h2>${player.id}</h2>
          <p>
              Their name is ${player.name}
          </p>
          <p>They are a ${player.breed}</p>
        </div>
    `
  })
  allPlayers.innerHTML = html.join("")
}




const renderSinglePlayer = (player) => {
  // TODO

};



const fetchAllPlayers = async () => {
  const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2501-PUPPIES/players")
  if(!response.success){
    console.log("Connected to puppyball API!");
  }
  const data = await response.json()
  console.log(data)
  return data
  //TODO
}








const init = async () => {
  const playerData = await fetchAllPlayers()
  playerList = playerData.data
  console.log(playerList.players)

  render();
}
/**THERE IS NO NEED TO EDIT THE CODE BELOW =) **/

// This script will be run using Node when testing, so here we're doing a quick
// check to see if we're in Node or the browser, and exporting the functions
// we want to test if we're in Node.
if (typeof window === "undefined") {
  module.exports = {
    fetchAllPlayers,
    fetchSinglePlayer,
    addNewPlayer,
  };
} else {
  init();
}
