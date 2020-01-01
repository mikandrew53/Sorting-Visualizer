class Test {
    constructor(b){
        this.array = [];
    }

    randomArray(){
        this.array = [];
        for (let i = 0; i < 10; i++){
            let height = 0;
            while (height === 0) 
                height = Math.round(Math.random()*400);
            this.array.push(height);
        }
    }
    
    test(){
        this.randomArray();
        console.log(this.array);
        this.array.sort(function(a,b){return a-b});
        console.log(this.array);
    }

}