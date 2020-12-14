/* The postData() function is used in the "Contact Us" page,
where the user can submit his/her data to be added as a 
member of the fansite. The data is simply POSTED to 
httpbin.org and when received back, it is parsed and added
to the "subscriber table".
 */

function postData(){

    var req = new XMLHttpRequest();
  
    var payload = {name:null, region:null, class:null};
  
    payload.name = document.getElementById('name').value;
    payload.region = document.getElementById('region').value;
    payload.class = document.getElementById('class').value;
  
    req.open('POST', 'http://httpbin.org/post', false);
  
    req.send(JSON.stringify(payload));
  
    var response = JSON.parse(req.responseText);
    moreData = JSON.parse(response.data)
  
    document.getElementById('nameback').textContent = moreData.name;
    document.getElementById('regionback').textContent = moreData.region;
    document.getElementById('classback').textContent = moreData.class;
    event.preventDefault();
  }
  
  document.getElementById('subscribesubmit').addEventListener('click', postData);
  