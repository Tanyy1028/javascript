class ATM{   //craete class
    balance=5000; //
    debit;
    pin;

    setpin(pin){
        this.pin=pin;
        alert("pin set successfully !");
    }

    deposit(balance,debit,pin){
        this.balance=this.balance+balance;
        this.debit=debit;
        this.pin=pin;
        document.writeln("your current balance",this.balance)
    }

    checkbalance(debit,pin){
        if(this.pin == undefined){
            alert("required genret pin !");
        }
        else if(this.pin==pin){
            document.writeln("your balance is",this.balance);
            document.writeln("<br>");
        }
        else{
            alert("incorrect pin !");
        }
    }

    withdraw(debit,pin,amount){
        if(amount<this.balance){
            this.balance = this.balance-amount;
            document.writeln("withdraw amount",amount);
            document.writeln("<br>");
            document.writeln("your current balance",this.balance);
        }
        else
        {
            document.writeln("insufficient Balance <br>");
        }
    }
}

const atm=new ATM();

atm.setpin(1012);
atm.checkbalance("debit",1012);
atm.deposit(5000,1012);
atm.withdraw("debit",1012,2000);





