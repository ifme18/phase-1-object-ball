function gameObject(){
    return{
        home:{
            teamName:'Brooklyn Nets',
            colors:[Black, White],
            players:{
                "Alan Anderson":{
                    number:0,
                    shoe:16,
                    points:22,
                    pebounds:12,
                    assists:1,
                    steals:3,
                    blocks:1,
                    slam_Dunks:1,

                },
                "Reggie Evans":{
                    number:30,
                    shoe:14,
                    points:12,
                    rebounds:12,
                    assists:12,
                    steals:12,
                    blocks:12,
                    slam_Dunks:7,

                },
                "Broke Lopez":{
                    number:11,
                    shoe:17,
                    points:17,
                    rebounds:19,
                    assists:10,
                    steals:3,
                    blocks:1,
                    slam_Dunks:15,

                },
                "Mason Plumlee":{
                    number:1,
                    shoe:19,
                    points:26,
                    rebounds:12,
                   assists:6,
                    steals:3,
                    blocks:8,
                    slam_Dunks:5,

                },
                "Jason Tree":{
                    number:31,
                    shoe:15,
                    points:19,
                    rebounds:2,
                    assists:2,
                    steals:4,
                    blocks:11,
                    slam_Dunks:1,

                },
            },

        },
        
        away:{
            teamName:'Charlotte Hornets',

            colors:[Turquoise, Purple],
            players:{
            "Jeff Adrien":{
                    number:4,
                    shoe:18,
                    points:10,
                    rebounds:1,
                    assists:1,
                    steals:2,
                    blocks:7,
                    slam_Dunks:2,
                },
                "Bismack Biyombo":{
                    number:0,
                    shoe:16,
                    points:12,
                    rebounds:4,
                    assists:7,
                    steals:7,
                    blocks:15,
                    slam_Dunks:10,
                },
                "DeSagna Diop":{
                    number:2,
                    shoe:14,
                    points:24,
                    rebounds:12,
                    assists:12,
                    steals:4,
                    blocks:5,
                    slam_Dunks:5,
                },
                "Ben Gordon":{
                    number:8,
                    shoe:15,
                    points:33,
                    rebounds:3,
                    assists:2,
                    steals:1,
                    blocks:1,
                    slam_Dunks:0,
                },
                "Brendan Haywood":{
                    number:33,
                    shoe:15,
                    points:6,
                    rebounds:12,
                    assists:12,
                    steals:22,
                    blocks:5,
                    slam_Dunks:12,
                },    
            }

        }
    }
    
}
function homeTeamName() {
    let object = gameObject();
    return object["home"]["teamName"];
  }
  
  console.log(homeTeamName());
  function awayTeamName() {
    const object = gameObject();
    return object.away.teamName;
  }
  
  console.log(awayTeamName()); // Logs: Charlotte Hornets
  function playerStats(playerName) {
    const object = gameObject();
    
    const homePlayers = object.home.players;
    const awayPlayers = object.away.players;
    
    if (homePlayers[playerName]) {
      return homePlayers[playerName];
    } else if (awayPlayers[playerName]) {
      return awayPlayers[playerName];
    } else {
      return "Player not found";
    }
  }
  
  console.log(playerStats("Alan Anderson")); // Logs Alan Anderson's stats
  console.log(playerStats("Bismack Biyombo")); // Logs Bismack Biyombo's stats
    
