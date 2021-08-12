'use strict';

//This class (BankAccount) takes in a new acc # and owner's name to create a new account.
//It has 0 transactions stored into an empty array upon creation.
class BankAccount {
    constructor(accountNumber, owner){
      this.accountNumber = accountNumber;
      this.owner = owner;
      this.transactions = [];
    }
//This function starts an account balance of 0 and keeps a running tally of the sum of all of the transactions. 
    balance(){
        let sum = 0;
        for (let i = 0; i < this.transactions.length; i++){
            sum += this.transactions[i].amount;
        }
        return sum;
    }
//This function allows for charges to be added to the account, and shows who they are being paid to.
//As long as, the charge will not overdraw the acc.    
    charge(payee, amt){
        let accBalance = this.balance();
        if (amt <= accBalance){
        let chargeTrans = new Transaction(-amt, 'payee');
        this.transactions.push(chargeTrans);
        }
    }
//This function allows for deposits to be added to the account, as long as, it not a "negative deposit".
    deposit(amt){
        if (amt > 0){
        let depositTrans = new Transaction(amt, 'deposit');
        this.transactions.push(depositTrans);
        }
    }
}

//This class (Transaction) takes in an amount and a payee to create a new transaction.
//It displays the date of aforementioned transaction upon creation.
class Transaction {
    constructor(amount, payee){
      this.amount = amount;
      this.payee = payee;
      this.date = new Date();
}
}
//Tests    
if (typeof describe === 'function') {
    
    const assert = require('assert');
    //Account creation test
    describe('#creating an account', function(){
        it('should be able to create a new bank account', function(){
        let newAcc = new BankAccount ('11235813', 'Jimmy Twotimes' );
        assert.equal(newAcc.accountNumber, '11235813');
        assert.equal(newAcc.owner, 'Jimmy Twotimes');
        assert.equal(newAcc.transactions.length, 0);
        assert.equal(newAcc.balance(), 0);
        });
    });
    //Account Balance Test
    describe("#testing acc balance", function(){
        it('should create a create an acc balance correctly', function(){
            let acct1 = new BankAccount('11235813', 'Jimmy Twotimes');
            assert.equal(acct1.balance(), 0);
            acct1.deposit(100);
            assert.equal(acct1.balance(), 100);

        });
    });
    //Deposit Test
    describe('#taking a deposit', function(){
        it('should be able to take in a deposit to the acc', function(){
        let newAcc = new BankAccount ('11235813', 'Jimmy Twotimes');
        assert.equal(newAcc.balance(), 0);
        newAcc.deposit(50) //50
        assert.equal(newAcc.balance(), 50);
        newAcc.deposit(1500) //1550
        assert.equal(newAcc.balance(), 1550);
        });
    });
    //Charge Test
    describe('#taking a charge', function(){
        it('should be able to place a charge on the acc', function(){
        let newAcc = new BankAccount ('11235813', 'Jimmy Twotimes' );
        newAcc.deposit(1550)
        newAcc.charge('Firehouse Lounge', 10.83)
        assert.equal(newAcc.balance(), 1539.17);
        newAcc.charge('Limey Bikes', 450)
        assert.equal(newAcc.balance(), 1089.17);
        });
    });
    //Transaction Test
    describe('#creating a transaction', function(){
        it('should be able to create a new transaction', function(){
        let newAcc = new BankAccount ('11235813', 'Jimmy Twotimes' );    
        let newTrans = new Transaction (500, 'White Lodging Services');
        assert.equal(newTrans.amount, 500);
        assert.equal(newTrans.payee, 'White Lodging Services');
        });
    });
    //Overdraft Fail Test
    describe('#not allowing an overdraft charge', function(){
        it('should not be able to accept an overdraft charge', function(){
        let newAcc = new BankAccount ('11235813', 'Jimmy Twotimes' );
        newAcc.deposit(1550)
        newAcc.charge('Kawasaki USA', 11500)
        assert.equal(newAcc.balance(), 1550);
        newAcc.charge('Limey Bikes', 450)
        assert.equal(newAcc.balance(), 1100);
        });
    });
}
    