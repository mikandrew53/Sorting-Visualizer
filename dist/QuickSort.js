class QuickSort {
    constructor (ui){
        this.ui = ui;
    }
    
    test (inputArr) {
        let sorted = true;
        for (let i = 0; i < inputArr.length; i++) {
            for (let j = 0; j < inputArr.length; j++) {
                if (inputArr[j] > inputArr[j + 1]) {
                    sorted = false;
                    let temp = inputArr[j];
                    inputArr[j] = inputArr[j + 1];
                    inputArr[j + 1] = temp;
                }
            }
        }
        return sorted;
    }

    
    async middleElement(){
        for (let i = 2; i > 0; i--) {
            for (let j = 0; j < i; j++) {       
                if (j === 0){
                    let divOne = document.getElementById(j);
                    let divTwo = document.getElementById( Math.floor((ui.array.length + 1)/2 - 1));
                    this.ui.checkingDivs(divOne, divTwo);
                    await this.ui.delay(this.ui.getSortingSpeed());
                    if (ui.array[0] > ui.array[Math.floor((ui.array.length + 1)/2 - 1)]){
                        
                        this.ui.changeDivColour(divOne, 'red');
                        this.ui.changeDivColour(divTwo, 'red');
                        this.switchElements(ui.array, 0, Math.floor((ui.array.length + 1)/2 - 1));
                        await this.ui.delay(this.ui.getSortingSpeed());
                        this.ui.switchElements(divOne, divTwo);
                    }
                    this.ui.changeDivColour(divOne, '#c6c0f0');
                    this.ui.changeDivColour(divTwo, '#c6c0f0');  
                }
                if (j === 1){
                    let divOne = document.getElementById(Math.floor((ui.array.length + 1)/2 - 1));
                    let divTwo = document.getElementById((ui.array.length-1));
                    this.ui.checkingDivs(divOne, divTwo);
                    
                    await this.ui.delay(this.ui.getSortingSpeed());
                    if (array[Math.floor((ui.array.length + 1)/2 - 1)] > ui.array[ui.array.length-1]){
                        this.ui.changeDivColour(divOne, 'red');
                        this.ui.changeDivColour(divTwo, 'red');
    
                        this.switchElements(ui.array, Math.floor((ui.array.length + 1)/2 - 1), ui.array.length-1);
                        this.ui.switchElements(divOne, divTwo);
                    }
                    this.ui.changeDivColour(divOne, '#c6c0f0');
                    this.ui.changeDivColour(divTwo, '#c6c0f0');  
                }
            }
        }
    }
        
    switchElements (array, left, right){
        let temp = array[left];
        array[left] = array[right];
        array[right] = temp; 
    }


    async quickSort (){
        await this.middleElement();
        await this.startQuickSort(ui.array, 0, ui.array.length);
    }


    async leftPointer (array, leftIndex, rightIndex){
        let leftPointer;
        for(let i = leftIndex; i < rightIndex-1; i++){
            this.ui.changeDivColour(document.getElementById(i), 'purple');
            await this.ui.delay(this.ui.getSortingSpeed());
            if(array[i] > array[rightIndex-1]){
                leftPointer = i;
                this.ui.changeDivColour(document.getElementById(i), 'turquoise');
                break;
            }
            this.ui.changeDivColour(document.getElementById(i), '#c6c0f0');
        }
        return leftPointer;
    }

    async rightPointer (array, leftIndex, rightIndex){
        let rightPointer;
        for(let i = rightIndex-2; i > leftIndex-1; i--){
            this.ui.changeDivColour(document.getElementById(i), 'orange');
            await this.ui.delay(this.ui.getSortingSpeed());
            if(array[i] < array[rightIndex-1]){
                rightPointer = i;
                this.ui.changeDivColour(document.getElementById(i), 'pink');
                break;
            }
            this.ui.changeDivColour(document.getElementById(i), '#c6c0f0');
        }
        return rightPointer;
    }

    async startQuickSort(array, leftIndex, rightIndex){
        // Only sort if you have 2 or more elements
        if (rightIndex-leftIndex === 1) {
            this.ui.changeDivColour(document.getElementById(leftIndex), 'green');
        }else{
            this.ui.checkingDivs(document.getElementById((Math.floor(((rightIndex - leftIndex) + 1)/2)+ leftIndex -1)), document.getElementById((rightIndex-1)));
            await this.ui.delay(this.ui.getSortingSpeed());
           
            this.ui.switchElements(document.getElementById((Math.floor(((rightIndex - leftIndex) + 1)/2)+ leftIndex -1)), document.getElementById((rightIndex-1)));
            this.switchElements(array, (Math.floor(((rightIndex - leftIndex) + 1)/2) + leftIndex -1), (rightIndex-1));
            this.ui.changeDivColour(document.getElementById((Math.floor(((rightIndex - leftIndex) + 1)/2)+ leftIndex -1)), 'red');  
            this.ui.changeDivColour(document.getElementById((rightIndex-1)), 'red');
           
            await this.ui.delay(this.ui.getSortingSpeed());
            this.ui.changeDivColour(document.getElementById((rightIndex-1)), 'blue');  
            this.ui.changeDivColour(document.getElementById((Math.floor(((rightIndex - leftIndex) + 1)/2)+ leftIndex -1)), '#c6c0f0');

            while (true) {
                let leftPointer, rightPointer;
                rightPointer = await this.rightPointer(array, leftIndex, rightIndex);
                leftPointer = await this.leftPointer(array, leftIndex, rightIndex);

                if (leftPointer === undefined){
                    // currently in correct position Largest Number in array
                    this.ui.changeDivColour(document.getElementById(((rightIndex-1))), 'green');
                    this.startQuickSort(array, leftIndex, rightIndex-1);
                    break;
                }
                if (rightPointer === undefined){
                    // smallest number in array
                    this.switchElements(array, leftIndex, rightIndex-1);
                    this.ui.switchElements(document.getElementById(leftIndex), document.getElementById((rightIndex-1)));
                    this.ui.changeDivColour(document.getElementById(leftIndex), 'green');
                    this.startQuickSort(array, leftIndex+1, rightIndex);
                    break;
                }
                if (leftPointer < rightPointer){
                    await this.ui.delay(this.ui.getSortingSpeed());
                    this.ui.changeDivColour(document.getElementById(leftPointer), 'red');
                    this.ui.changeDivColour(document.getElementById(rightPointer), 'red');
                    await this.ui.delay(this.ui.getSortingSpeed());
                    this.switchElements(array, leftPointer, rightPointer);
                    this.ui.switchElements(document.getElementById(leftPointer), document.getElementById(rightPointer));
                    this.ui.changeDivColour(document.getElementById(leftPointer), '#c6c0f0');
                    this.ui.changeDivColour(document.getElementById(rightPointer), '#c6c0f0');
                }else{
                    this.switchElements(array, leftPointer, rightIndex-1);
                    this.ui.switchElements(document.getElementById(leftPointer), document.getElementById((rightIndex-1)));
                    this.ui.changeDivColour(document.getElementById(leftPointer), 'green');
                    this.startQuickSort(array, leftIndex, leftPointer);
                    this.startQuickSort(array, leftPointer+1, rightIndex);
                    break;
                }
            }
        }
    }
}