{

//getter and setter
class BankAccount{
    public readonly id: number;
    name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number){
        this.id =id;
        this.name=name;
        this._balance = balance;
    }
    
    set deposit(amount: number){
        this._balance = this.balance + amount;
    }

    // public addDeposit(amount: number){
    //     this._balance = this._balance+amount
    // }
    // public getBalance(){
    //     return this._balance;
    // }

    // getter
    get balance(){
        return this._balance
    }
}


const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20);

// goribManusherAccount.deposit = 0
// goribManusherAccount.addDeposit(300)

goribManusherAccount.deposit = 50;

// const myBalance = goribManusherAccount.getBalance(

const myBalance = goribManusherAccount.balance;

console.log(myBalance)










































}