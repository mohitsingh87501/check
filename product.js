// let incr = document.getElementById('increment')
let count = document.getElementById("counter")
let Pick_color = document.getElementsByClassName("same_color")
function choose_color(a){
    let pick_blur = document.getElementsByClassName("same_blur")
    let pick_text = document.getElementById("color_select")
    let select_text1 = pick_text.children[0]
    let select_text2 = pick_text.children[1]
    if(pick_blur[a].style.backgroundColor != "black"){
        select_text1.textContent = Pick_color[a].id
        select_text2.textContent = Pick_color[a].id
        // Pick_color[a].style.backgroundColor = "black"
        pick_blur[a].style.backgroundColor = "black"
        setTimeout(function(){
            pick_blur[a].style.backgroundColor = "white"
        } ,200)
    }
}
// let decr = document.getElementById('decrement')
let num = count.textContent
// num = '12';

let num1 = Number.parseInt(num);
let inc = ()=>{
    // num1 = num1+1;
    ++num1;
    num1 = num1.toString();
    count.textContent = num1;
}

let dec = ()=>{
    if(num1>0){
        num1 = num1-1
        num1 = num1.toString();
        // num = String.toString(num);
        count.textContent = num1;
    }
}
// }  


/// Review system

let rev  = document.getElementById("my_review");
let smt  = document.getElementById("submit_btn");


function after_click(){
    alert(rev.value);
    rev.value = null;
}
// let time = setTimeout(function() {
//     console.log(rev)
// },3000)

// if(rev = "true"){
//     clearTimeout(time);
// }



// while(rev = "true");
//     console.log(rev)


