//Print Armstrong numbers from 1 to 1000
for(var i=1;i<=1000;i++)
{
    var arm=0,num=i
    while(num>0)
    {
        rem=num%10;
         num=parseInt(num/10);
        arm=arm+(rem*rem*rem);
    }
    if(arm==i)
    {
        console.log(i)
    }
}


// program to check whether 153 is an Armstrong number or not

let arm = 0;
const number = 153

// create a temporary variable
let temp = number;
while (temp > 0) {
//     // finding the one's digit
    let remainder = temp % 10;

    arm += remainder * remainder * remainder;

    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
}
// check the condition
if (arm == number) {
    console.log(number+ "is an Armstrong number");
}
else {
    console.log(number+ "is not an Armstrong number");
}


