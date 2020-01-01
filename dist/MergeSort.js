class MergeSort {
    constructor (ui){
        this.ui = ui;
        this.array = [];
    }

    switchElements(array, firstIndex, secondIndex){
        let temp = array[firstIndex];
        array[firstIndex] = array[secondIndex];
        array[secondIndex] = temp;
    }

    async startMergeSort(array, startIndex, end){
        let middleIndex = Math.floor((startIndex + end)/2);
        let numElements = end - startIndex;
        if ((numElements) > 1){
            await this.startMergeSort(array, startIndex, middleIndex);
            await this.startMergeSort(array, middleIndex, end);   
            let arr = [];
            for (let i = startIndex; i < end; i++) {
                arr.push(array[i]);
            }
            await this.merge(array, startIndex, middleIndex, end);
        }
    }

    async mergeSort (){
        await this.startMergeSort(this.ui.array, 0, this.ui.array.length);
    }
    
    async merge(array, firstArrayPointer, secondArrayPointer, end){
        let elementsLeftInFirstArray = (secondArrayPointer - firstArrayPointer),
        elmentsLeftInSecondArray = end - secondArrayPointer;
        let last;
        end === this.ui.array.length && firstArrayPointer === 0 ? last = true : last = false
        
        while(elementsLeftInFirstArray > 0 && elmentsLeftInSecondArray > 0){
            let elementOne = document.getElementById(firstArrayPointer),
            elementTwo = document.getElementById(secondArrayPointer);

            this.ui.checkingDivs(elementOne, elementTwo);
            await this.ui.delay(this.ui.getSortingSpeed());

            if (array[firstArrayPointer] < array[secondArrayPointer]){
                last ? this.ui.changeDivColour(elementOne, 'green') : this.ui.changeDivColour(elementOne, '#c6c0f0');
                this.ui.changeDivColour(elementTwo, '#c6c0f0');
                elementsLeftInFirstArray -= 1;
            }else{
                let numSwitches = secondArrayPointer - firstArrayPointer;
                await this.moveIndex(last, array, numSwitches, (secondArrayPointer-1), secondArrayPointer);
                elmentsLeftInSecondArray -= 1;
                secondArrayPointer += 1;
            }
            firstArrayPointer += 1;
        }
        if (last)
            for (let i = firstArrayPointer; i < array.length; i++)
                this.ui.changeDivColour(document.getElementById(i), 'green');                 
    }


    async moveIndex (last, array, numSwitches, leftIndex, rightIndex){
        for(let i = numSwitches; i > 0; i--){
            let tempElementOne = document.getElementById(leftIndex),
            tempElementTwo = document.getElementById(rightIndex);
            this.ui.changeDivColour(tempElementOne, 'purple');
            this.ui.changeDivColour(tempElementTwo, 'red');
            this.switchElements(array, leftIndex, rightIndex);
            this.ui.switchElements(tempElementOne, tempElementTwo);
            await this.ui.delay(this.ui.getSortingSpeed());
            i === 1 && last ? this.ui.changeDivColour(tempElementTwo, 'green') : this.ui.changeDivColour(tempElementTwo, '#c6c0f0');
            this.ui.changeDivColour(tempElementOne, '#c6c0f0');
            rightIndex = leftIndex;
            leftIndex -= 1;                    
        }
    }

    test () {
        let sorted = true;
        let len = inputArr.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if (inputArr[j] > inputArr[j + 1]) {
                    sorted = false;
                    let tmp = inputArr[j];
                    inputArr[j] = inputArr[j + 1];
                    inputArr[j + 1] = tmp;
                }
            }
        }
        return sorted;
    }
}