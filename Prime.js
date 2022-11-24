
for(num=1;num<=100;num++)
{
    var isprime=true
    for( i=2;i<num-1;i++)
    {
if(num%i==0)
{
    var isprime=false
    break;
}
    }
    if(isprime==true)
    {
    console.log(num)
}
}
