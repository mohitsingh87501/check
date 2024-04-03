// let btn = document.getElementById('buttons')
// btn.querySelectorAll();
// let html = 'buttons'.innerHTML;
// console.log(document.body.textContent)
// para1.className = 'red';

function change_color(){
    para1.className = 'red';
    // para1.className = 'para';
}

// set time out
// this function syntax

// setTimeout(function() {
//     alert("welcome to my website");
// },2000) // 2000ms  -- > 2s

// means you want do something after some time using this
// this return timer id 

let time = setTimeout(function() {
    alert("welcome to my website");
},2000)

// if you want to cancel time out like this
clearTimeout(time);

