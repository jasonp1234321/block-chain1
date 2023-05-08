const SHA256= require('crypto-js/sha256');

class Block{
    constructor(index,timestamp,data,previousHash=""){

        this.index=index;
        this.timestamp=timestamp;
        this.data=data;
        this.previousHash=previousHash;
        this.hash = calculateHash();
    }
    /*used to make a hash and store information */
    calculateHash()
    {
        returnSHA256(this.index+this.previousHash+this.timestamp+JSON.stringify(this.data)).tostring();
    }
    /*makes a hash using this information */
}

class Blockchain{
    constructor(){
        this.chain=[];
    }
    createGenesisisBlock(){
        return new Block(0,"03/01/2009","Genesis Block","0");
    }
}
/*starts the block chain by adding information */