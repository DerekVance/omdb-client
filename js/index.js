var h1 = document.createElement('h1');
h1.innerHTML = "Movie";
document.body.appendChild(h1);

var xhr = new XMLHttpRequest();
xhr.open('get', 'http://www.omdbapi.com/?s=pizza');
xhr.addEventListener('load', function () {

  var response = xhr.response;
  var responsedata =  JSON.parse(response);

for (var i = 0; i < responsedata.Search.length; i++) {
  var a = document.createElement('a')
  a.innerHTML = responsedata.Search[i].Title;
  a.href = '/show.html?fraggle=' + responsedata.Search[i].imdbID


  var p = document.createElement('p');
  p.appendChild(a);
  document.body.appendChild(p);
}
});
xhr.send();
