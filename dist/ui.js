class UI {
    constructor(){
        this.arrayActive = false;
        this.delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        this.array_ui = document.getElementById('array');
        this.array = [];
        this.sortingSpeed = document.getElementById('sorting-speed');
        this.arraySlider = document.getElementById('array-size');
    }
    removePX(string){
        return parseInt(string.replace('px', ''));    
    }
    getArray(){   
        this.array = [];    
        let arrayLength = this.arraySlider.value;
        this.array_ui.innerHTML = '';

        for (let i = 0; i < arrayLength; i++){
            let height = 0;

            while (height === 0) 
                height = Math.round(Math.random()*400);
    
            this.array_ui.innerHTML += `<div class="line" id="${i}"></div>`;
            document.getElementById(i).style.order = i;
            document.getElementById(i).style.height = `${height}px`;
            this.array.push(height);
        }
    }

    ///
    ///
    ///
    getSortingSpeed(){
        return 100 - this.sortingSpeed.value;
    }

    ///
    ///
    ///
    changeDivColour(div, colour){
        div.style.backgroundColor = colour;
    }

    ////
    //// 
    ////
    switchElements(elementOne, elementTwo){
        let tempOrder = elementOne.style.order,
            tempId = elementOne.id;

        elementOne.style.order = elementTwo.style.order;
        elementTwo.style.order = tempOrder;

        elementOne.id = elementTwo.id;
        elementTwo.id = tempId;    
    }

    checkingDivs(elementOne, elementTwo){
        this.changeDivColour(elementOne, 'yellow');
        this.changeDivColour(elementTwo, 'yellow');
    }
}