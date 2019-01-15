

//we can pass a function into exec and exec will run it
function exec (func, arg){ 
  
    func(arg); 

}

exec((something) => { 
    
    console.log(something); //transfromed a statement into a experssion

}, 'Greetings, everyone');