function firstFunc(a, b){
    if(a > b)
        return a / b;
    else
        return a * b;
}


let numbers = [1, 2, "3", 4, 5, 6, "7", 8];
function secondFunc(arr){
    let s = 0, sum = 0;
    for(let i = 0; i < numbers.length - 1; i++){
        if(Number(i) % 1 == 0 && Number(i) != NaN){
            s++;
        }
    }

    if(s == numbers.length - 1){
        for(let i = 0; i < numbers.length - 1; i++){
                sum += Number(numbers[i]);
        }
        console.log(Math.round(sum / numbers.length));
    }

    else   
        console.log("0")
}

function thirdFunc()
{
		var rem, temp, final = 0;
		var number = -121;

		temp = number;
		while(number>0)
		{
			rem = number%10;
			number = parseInt(number/10);
			final = final*10+rem;
		}
		if(final==temp)
		{
			console.log("Bu son Palindrom");
		}
		else
		{
			console.log("Bu son palindrom emas");
        }
}

arr = [1, 2, 3, 4, 2, 7, 2, 2, 16];
val = 2;
function fourthFunc(arr, val){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == val){
            arr[i] = '_';
        }
    }

    console.log(arr)
}

let clock = () => {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let period = "AM";
    if (hrs == 0) {
      hrs = 12;
    } else if (hrs >= 12) {
      hrs = hrs - 12;
      period = "PM";
    }
    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;
  
    let time = `${hrs}:${mins}:${secs}:${period}`;
    document.getElementById("clock").innerText = time;
    setTimeout(clock, 1000);
  };
  
  clock();  
