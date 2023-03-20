function clearScreen() {
    document.getElementById("result").value = "";
}

function backspace(){
    let number = document.getElementById("result").value;
    if(number[number.length-1] == '+'||number[number.length-1] == '-'||number[number.length-1] == '*'||number[number.length-1] == '/'){
        co--;
    }
    document.getElementById("result").value = number.substring(0,number.length -1);
}

var operatorArray =[];
var numberArray =[];
var res = [];
var co=0
let cd=0

function display(value){
    var inputValue=document.getElementById("result").value;
    if(value=='.'){
        if(inputValue[0]=='.'){
            document.getElementById("result").value = '0'+inputValue ;
        }
        else if(inputValue[inputValue.length-1]=='+'||inputValue[inputValue.length-1]=='-'||inputValue[inputValue.length-1]=='*'||inputValue[inputValue.length-1]=='/')
        {
            
            document.getElementById("result").value = inputValue+"0" ;  
        }
    }
    else if(inputValue[0]=='+'||inputValue[0]=='-'||inputValue[0]=='*'||inputValue[0]=='/'||inputValue[0]=='='){
        document.getElementById("result").value = ""
        alert("Please enter a number first!")
    }
    if ((value == "+")||(value == "-")||(value == "*")||(value == "/")||(value == "=")){
        if(inputValue[inputValue.length-1]=='.'){
            document.getElementById("result").value = inputValue+"0" ;  
        }

        if(co==0){
            console.log(inputValue[inputValue.length-1]);
            document.getElementById("result").value += value; 
            } 
            
        co++;
        cd=0;
    }

    else if (value==".") {
        cd++
        if (cd<=1) {
            document.getElementById("result").value += value
        }    
    } 
    else if(value<=9 && value >=0){
        document.getElementById("result").value += value;
    co=0;
    }
}

function calculate() {
    var input = document.getElementById("result").value;
    var number_array = (input.split(/[-*+/]+/))
    var operator_array = input.split(/[1234567890]+/);
    operator_array = operator_array.slice(1,operator_array.length-1)
    operations=[]
    for (let i=0; i<operator_array.length; i++){
        if (operator_array[i]!=='.'){
            operations.push(operator_array[i]);
        }
    }
    console.log(operations);
    let res=Number(number_array[0])
    if(operations.length==0){
        res=Number(number_array[0])
    }
    for (let i=0; i<operations.length; i++){
        if (operations[i]==='+'){
            res+=Number(number_array[i+1])
        }
        else if(operations[i]==='-'){
            res-=Number(number_array[i+1])
        }
        else if(operations[i]==='*'){
            res*=Number(number_array[i+1])
        }
        else if (operations[i]==='/'){
            res/=Number(number_array[i+1])
        }
        else{
            res="Wrong input"
        }
    }
    return(res);

}
function equals() {
    var answer = calculate()
    document.getElementById('result').value = answer;
    console.log(answer);
}