
let ladder = {

    current_position: 0,

    up(numOfSteps = 1){
        for(let i = 1; i <= numOfSteps; i++)
        {
            this.current_position++;
        }
        
    },
    down(numOfSteps = 1){

        for(let i = 1; i <= numOfSteps; i++)
        {
            if(this.current_position <= 0)
            {
                break;
            }
            this.current_position--;
        }
    },
    showCurrent(){
        console.log(`Current position: ${this.current_position}`);
    }
}


ladder.showCurrent();

ladder.up(7);

ladder.showCurrent();

ladder.down(3);

ladder.showCurrent();

ladder.up(2);

ladder.showCurrent();

ladder.down(11);

ladder.showCurrent();
