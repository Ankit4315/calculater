let string = "";
let buttons = document.querySelectorAll('.btn');
let inbox=document.querySelector('input')
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string)
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML=='DEL'){
            string=string.substring(0,string.length-1)
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})

// .container{
//     /* background:red; */
//     margin: auto;
//     display: flex;
//     flex-direction: column;
//     /* justify-content: center; */
//     align-items: center;
    
// }