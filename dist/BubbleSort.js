class BubbleSort {
    constructor (ui){
        this.ui = ui;
    }
    async boubleSort (){
        for (let i = this.ui.array.length-1; i > 0; i--){
            for (let j = 0, k = 1; j < i; j++, k++) {
                    let elementOne = document.getElementById(j);
                    let elementTwo = document.getElementById(k);

                    this.ui.checkingDivs(elementOne, elementTwo);
                    await this.checkElements(elementOne, elementTwo, j, k);

                    await this.ui.delay(this.ui.getSortingSpeed());
                    this.ui.changeDivColour(elementOne, '#c6c0f0');
                    this.ui.changeDivColour(elementTwo, '#c6c0f0');
                }        
                this.ui.changeDivColour(document.getElementById(i), 'green');
            }
            this.ui.changeDivColour(document.getElementById('0'), 'green');
    }

    async checkElements (elementOne, elementTwo, j, k){
        if (this.ui.removePX(elementOne.style.height) > this.ui.removePX(elementTwo.style.height)){
            await this.ui.delay(this.ui.getSortingSpeed());
            this.ui.changeDivColour(elementOne, 'red');
            this.ui.changeDivColour(elementTwo, 'red');   
            await this.ui.delay(this.ui.getSortingSpeed());
            ui.switchElements(elementOne, elementTwo);
            this.switchElements(j, k);
        }
    }

    switchElements (left, right){
        let temp = ui.array[left];
        ui.array[left] = ui.array[right];
        ui.array[right] = temp; 
    }

    async testBubbleSort(array){
        for (let i = this.ui.array.length-1; i > 0; i--){
            for (let j = 0, k = 1; j < i; j++, k++) {
                    let elementOne = document.getElementById(j);
                    let elementTwo = document.getElementById(k);

                    this.ui.checkingDivs(elementOne, elementTwo);
                    await this.checkElements(elementOne, elementTwo, j, k);

                    await this.ui.delay(this.ui.getSortingSpeed());
                    this.ui.changeDivColour(elementOne, '#c6c0f0');
                    this.ui.changeDivColour(elementTwo, '#c6c0f0');
                }        
                this.ui.changeDivColour(document.getElementById(i), 'green');
            }
            this.ui.changeDivColour(document.getElementById('0'), 'green');
    }
}
