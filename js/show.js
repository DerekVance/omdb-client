

var newobj = {};
var x = document.location.search;
  x = x.replace('?', '').split('&');

  for (var i = 0; i < x.length; i++) {
    var y = x[i].split('=');
    newobj[y[0]]= y[1];
  };


  omdbID = newobj.fraggle;

  console.log("aga", omdbID);
var xhr = new XMLHttpRequest();
var jsonUrl = 'http://www.omdbapi.com/?i=' + omdbID + '&r=json';
console.log(jsonUrl);
xhr.open('GET', jsonUrl, true);
xhr.addEventListener('load', function () {
  var response = xhr.response;
  var responsedata =  JSON.parse(response);
  console.log(responsedata);


    var p = document.createElement('p')
    p.innerHTML = responsedata.Title;
    document.body.appendChild(p);
    var p = document.createElement('p')
    p.innerHTML = responsedata.Released;
    document.body.appendChild(p);
    var p = document.createElement('p')
    p.innerHTML = responsedata.Runtime;
    document.body.appendChild(p);
    var p = document.createElement('p')
    p.innerHTML = responsedata.Actors;
    document.body.appendChild(p);


});
xhr.send();
