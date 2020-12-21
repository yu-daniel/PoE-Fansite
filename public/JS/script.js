// (1) https://www.w3schools.com/howto/howto_js_redirect_webpage.asp
// (2) https://www.w3schools.com/jsref/prop_style_backgroundimage.asp


/* 
The createButtons() func uses for loops to create buttons for both ends 
of the horizontal menu. Left buttons are added to a div aligned to the far 
left, while as right side buttons are included to a div that is aligned to 
the far right. Each button generated is also given an unique ID to identify
it from other elements. Both divs are appended as child nodes to the general 
body for use in all the webpages.
*/
function createButtons(){

  var divLeft = document.createElement("div")
  divLeft.classList = "rightBar"

  labels = ["Home", "Blog", "Projects", "Contact"]
  category = ["home", "blog", "projects", "contact"]
  for (var i=0; i<4; i++){
    var button = document.createElement("button")
    button.textContent = labels[i]
    button.id = category[i]
    button.classList = "buttons"
    divLeft.appendChild(button)
  }

  // var divRight = document.createElement("div")
  // divRight.classList = "leftBar"

  // rightLabels = ["POE's OFFICE SITE", "TWITCH", "CONTACT US"]
  // rightIDs = ["poeofficial", "twitch", "contact"]

  // for (var i=0; i<3; i++){
  //   var rightButton = document.createElement("button")
  //   rightButton.textContent = rightLabels[i]
  //   rightButton.id = rightIDs[i]
  //   rightButton.classList = "buttons"
  //   divRight.appendChild(rightButton)
  // }

  document.getElementById("body").appendChild(divLeft);
  // document.getElementById("body").appendChild(divRight);

}

createButtons()


/* added event listeners to each button, and when clicked it will 
trigger one of the "click" functions below that leads to a specific
webpage */
document.getElementById("home").addEventListener('click', clickHome)
document.getElementById("blog").addEventListener('click', clickBlog)
document.getElementById("projects").addEventListener('click', clickProjects)
document.getElementById("contact").addEventListener('click', clickContact)
// document.getElementById("contact").addEventListener('click', clickContact)
// document.getElementById("poeofficial").addEventListener('click', clickOfficial)
// document.getElementById("twitch").addEventListener('click', clickTwitch)


/* Reference (1)  
Each of the "click" funtions below when triggered will redirect the
web user to a specific route. */
function clickHome(){
  window.location.href = "/";
}

function clickBlog(){
  window.location.href = "/blog";
}

function clickProjects(){
  window.location.href = "/projects";
}

function clickContact(){
  window.location.href = "/contacts";
}

// function clickContact(){
//   window.location.href = "/contact";
// }

// function clickOfficial(){
//   window.location.href = "https://www.pathofexile.com/";
// }

// function clickTwitch(){
//   window.location.href = "https://www.twitch.tv/directory/game/Path%20of%20Exile"
// }

