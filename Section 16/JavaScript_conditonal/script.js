console.log("Hello world");

var1 = 4;
var2 = 6;
var3 = var1+var2;

if(var3 === 10){
    console.log("yo this is 10");
}
else{
    console.log("youll never see this");
}



let cycle = 1;

while(cycle < 10){
    let randomNum = Math.random();

    if(randomNum > 0.5){
        console.log("greater then 0.5 :" + randomNum );
    }
    else if(randomNum  <=  0.5){
        console.log("less then or equal 0.5 :" + randomNum );
    }
    else{
        console.log("strange :" + randomNum );
    }

    cycle ++;
}
