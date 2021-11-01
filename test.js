import { fs } from 'fs';
const name1 = document.getElementById("name");
const email = document.getElementById("email");
const age = document.getElementById("age");

var obj = {
    name: name1.value,
    email: email.value,
    age: age.value,
};

document.querySelector("button").addEventListener("click", (event)=>{
    event.preventDefault();  
}); 

const data = JSON.stringify(obj);
// typeof data;



function submitConfirm(){
    confirm("Continue...");
    // console.log(data);
    fs.writeFile('obj.json', data, (err) => {
        if(err){
          throw err;
        }
        console.log('Json data surveyObject is saved..');
      });
};
