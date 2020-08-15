let user_number = null;
let game_number = null;
    
 while(1)
{
    user_number = +prompt('Введите число от 0 до 5', 0);
    game_number = +Math.floor(Math.random() * 6);
    console.log(`game - ${game_number} User - ${user_number}`); // чтобы отследить, что выводит рандом
    if(user_number == game_number) 
    {
        alert('You Win, Good Job!'); 
        break;
    }else 
    {
        alert('You Lose, Another try!'); 
    }
}

