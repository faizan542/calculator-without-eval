var symbols = ['+', '-', '*', '/', '%', '='];
var memory = [];
var screenMemory = '';


function key(numb) {
    document.querySelector('#input').value += numb;
    screenMemory += numb;
    // console.log('Screen Memory ' + screenMemory);
}

function keySymbols(sym) {
    document.querySelector('#input').value = sym;
    memory.push(screenMemory);
    memory.push(sym);
    screenMemory = '';
    // console.log("Screen memory now " + screenMemory);
    // console.log("Memory: " + memory);
}

function clearResult() {
    document.querySelector('#input').value = '';
    memory = [];
    screenMemory = '';
}

function clearOne(){
    var input = document.querySelector('#input');
    var back = input.value;
    back = back.slice(0,-1);
    input.value = back;

}

function showResult() {
    memory.push(screenMemory);
    for (i = 0; i <= memory.length; i++) {
        if (memory[i] === symbols[0]) {
            var result = Number(memory[i - 1]) + Number(memory[i + 1]);
            document.querySelector('#input').value = result;
            screenMemory = result;
            memory.push(result);
            // console.log(memory);
        }
        else if (memory[i] === symbols[1]) {
            var result = Number(memory[i - 1]) - Number(memory[i + 1]);
            document.querySelector('#input').value = result;
            screenMemory = result;
            memory.push(result);
            // console.log(memory);
        }
        else if (memory[i] === symbols[2]) {
            var result = Number(memory[i - 1]) * Number(memory[i + 1]);
            document.querySelector('#input').value = result;
            screenMemory = result;
            memory.push(result);
            // console.log(memory);
        }
        else if (memory[i] === symbols[3]) {
            var result = Number(memory[i - 1]) / Number(memory[i + 1]);
            document.querySelector('#input').value = result;
            screenMemory = result;
            memory.push(result);
            // console.log(memory);
        }
        else if (memory[i] === symbols[4]) {
            var result = Number(memory[i - 1]) % Number(memory[i + 1]);
            document.querySelector('#input').value = result;
            screenMemory = result;
            memory.push(result);
            // console.log(memory);
        }
    }
}