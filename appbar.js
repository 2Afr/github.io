// Retrieve the contents of the appbar.html file
fetch('appbar.html')
  .then(response => response.text())
  .then(data => {
    // Insert the app bar HTML into the appbar div
    document.querySelector('#appbar').innerHTML = data;
  })
  .catch(error => console.error(error));


 