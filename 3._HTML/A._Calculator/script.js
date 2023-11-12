let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
        string = string.replace("÷","/")
        string = string.replace("x","*") 
        string = eval(string);
        document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'AC'){
      string = ""
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML=='x'){
        string=string+'x'
        document.querySelector('input').value = string;    
    }
    else if(e.target.innerHTML=='÷'){
        string=string+'÷'
        document.querySelector('input').value = string;    
    }
    else{ 
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
    }
  })
})