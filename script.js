
let ladder = {

    current_position: 0,

    up(numOfSteps = 1){
        for(let i = 1; i <= numOfSteps; i++)
        {
            this.current_position++;
        }
        return this;
        
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
        return this;
    },
    showCurrent(){
        console.log(`Current position: ${this.current_position}`);
        return this;
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

console.log("Second task i forgot to implement");

ladder.up(2).up(2).down(1).showCurrent();