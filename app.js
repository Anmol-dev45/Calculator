const buttons = document.querySelectorAll('button');
const output = document.querySelector('h2');









buttons.forEach(button => {
    button.addEventListener('click', dataEntry)
})



let arr ;

function dataEntry(event) {
    let data = event.target.dataset;
    let num = " " + event.target.innerHTML ;

    if(data.operator == '=')
    {
        calc(); 
        
        console.log(arr)
        return;
    }
    if(data.key){
        if(!arr)
        {
            
            result = 0
            output.innerHTML = '' 
        }
        arr += " " + data.key  
        output.innerHTML += num ; 
        
    }
    if(data.operator)
    {
        arr += " " + data.operator
        output.innerHTML += num; 

    }
    if(data.id)
    {
        if(data.id == 'clear')
        {
            arr = 0;
            result = ''
            output.innerHTML = ''
            console.log(arr)
            return
        }

        
    }
}

function add(a, b) {
    return a + b;
    
}
function sub(a, b) {
    return a - b;
}
function mult(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}


let result = 0


function calc(){

    arr = arr.split(" ");
    console.log(arr)

for (let i = 0; i < arr.length; i++) {
    if (!result) {

        if (arr[i] == '+') {
            result = add(+arr[i - 1], +arr[i + 1]);
        }
        else if (arr[i] == '-') {
            result = sub(+arr[i - 1], +arr[i + 1]);
        }
        else if (arr[i] == '*') {
            result = mult(+arr[i - 1], +arr[i + 1]);
        }
        else if (arr[i] == '/') {
            result = div(+arr[i - 1], +arr[i + 1]);
        }
        else{

        }
        console.log(result)
    }
    
    else {
        if (arr[i] == '+') {
            result = add(result, +arr[i + 1]);
            
        }
        else if (arr[i] == '-') {
            result = sub(result, +arr[i + 1]);
        }
        else if (arr[i] == '*') {
            result = mult(result, +arr[i + 1]);
        }
        else if (arr[i] == '/') {
            result = div(result, +arr[i + 1]);
            
        }
        else{}
        console.log(result)
    }
}
    arr = 0;
    result = result.toFixed(1);
    output.innerHTML = result
    // result = 0
}


