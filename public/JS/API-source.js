
// The createAPIRef func creates a link manually using JS rather than HTML/CSS.
// The link is added in the 'ladder page' under the ranking table.
function createAPIRef(){

    var link = document.createElement('a');
    link.classList = "specialLink"
    
    var reference = document.createTextNode("API Source");
    link.appendChild(reference);
    link.href = "https://www.pathofexile.com/developer/docs/api-resource-ladders";
    document.getElementById("APIbox").appendChild(link)
  
  }

  createAPIRef()