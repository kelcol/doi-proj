// Event listener for submit button
document.querySelector('.button-primary').addEventListener('click',
function(e) {
  let doiPrefix = document.getElementById('doiPrefix').value;
  let output = doiPrefix;
  document.getElementById('output').innerHTML = output;
  console.log(doiPrefix);
});


