//program to check whether 121 is Palindromenumber or not
var num=121,rem,rev=0
var temp=num;
while(num!=0)
{
    rem=num%10
    num=parseInt(num/10)
    rev=(rev*10)+rem
}
if(temp==rev)
{
    console.log("palindrome no")

}
else
{
    console.log("not palindrome no")  
}
