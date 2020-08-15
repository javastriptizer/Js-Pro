const number_user = 10;
const reverse = number_user / 2;

for(let i = 0; i <= number_user; i++)
{
    let star = '*';
    if(i < reverse)
    {
        for(let j = 0; j < i; j++){
            star += '*';
        }
        console.log(star);
    } else {
        const dif = i - reverse;
        const star_length = reverse - dif;
        
        for(let j = 0; j < star_length; j++){
            star += '*';
        }
        console.log(star);
    }
}
