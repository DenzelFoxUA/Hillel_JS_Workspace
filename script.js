class BankAccount {

    #balance;

    constructor(balanceValue)
    {
        if(typeof(balanceValue) === 'number')
        {
            this.#balance = balanceValue;
        }
        else
            this.#balance = undefined;
    }

    deposit(value)
    {
        if(typeof(value) === 'number')
            this.#balance += value;
        else
            console.error("wrong input");
    }

    withdraw(value)
    {
        if(typeof(value) === 'number')
            this.#balance -= value;
        else
            console.error("wrong input");
    }

    getBalance()
    {
        return this.#balance;
    }
    
}
    
const account1 = new BankAccount(1000);
    
console.log(account1.getBalance()); // 1000
account1.deposit(500);
console.log(account1.getBalance()); // 1500
account1.withdraw(200);
console.log(account1.getBalance()); // 1300