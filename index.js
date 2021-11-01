const form = document.getElementById('form');

form.addEventListener('submit', function(e){
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const age = document.getElementById('age').value;
  const bestDescribe = document.getElementById("role").value;
  const recommed = document.getElementsByName('recommed');
  const checkbox = document.getElementsByName('inp');
  const comment = document.getElementById('comment').value;

  var recommed0;
  var arr = [];
  
  //assign recommed to friend
  for(let i = 0; i < recommed.length; i++){
    if(recommed[i].checked)
      recommed0 = recommed[i].value;
  }
  //assign language program
  for(let i = 0; i < checkbox.length; i++){
    if(checkbox[i].checked)
      arr.push(checkbox[i].value);
  }

  var obj = {
    name,
    email,
    age,
    bestDescribe,
    recommed0,
    language: arr,
    comment,
  };

  // var arrObj = [];
  // arrObj.push(obj);

  // var data = JSON.stringify(obj);
  // // confirm("continue..");
  // console.log(data);
  // console.log(obj);

  /**
   *  send data with XMLRequest
   */

  // var xhr = new XMLHttpRequest();
  // xhr.open('POST', '/');
  // xhr.onload = function(obj) {
  //     console.log('loaded', this.responseText);
  // };
  // xhr.setRequestHeader('Content-Type', 'application/json');
  // xhr.send(JSON.stringify(obj));

});
