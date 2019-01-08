
/**
 testNumber.is(24).divisible.by(2).equal(12)
 */


class Divisible{
    static by(number){

    }
}


class TestNumber{

    constructor(number){
        this.number=number;
        this.error=[];
        this.divisible=Divisible;
    }

    is(equalNumber){
        if(this.number !== equalNumber){
            this.error.push(`expected ${equalNumber} is not ${this.number}`)
        }
        return this;
    }
}