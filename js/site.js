//take user input and prints numbers to the page
function printNumbers() {
    let startNum = parseInt(document.getElementById("num1").value);
    let endNum = parseInt(document.getElementById("num2").value);
    let numbers = getRange(startNum, endNum);
    displayData(numbers);
}

//Gets the range of numbers
function getRange() {
    let numberArray = [];
    for (let index = 1; index <= 100; index++) {
        numberArray.push(index);
    }

    return numberArray;
}

//display the numbers on the page
//
function displayData(numbers) {
    //let num1 & num2 fixed FIZZBUZZ section!!
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    const rowTemplate = document.getElementById("dataTemplate");
    const resultsBody = document.getElementById("resultsBody");
    let colCount = rowTemplate.content.cloneNode(true).querySelectorAll("td").length;
    //clear the table
    resultsBody.innerHTML = "";

    //loop over every element in the numebrs array
    //get the value and write it to the page
    for (let i = 0; i < numbers.length; i += colCount) {
        let dataRow = rowTemplate.content.cloneNode(true);
        //return an array of columns from the template
        let cols = dataRow.querySelectorAll("td");

        //loop over columns
        for (let colIndex = 0; colIndex < cols.length; colIndex++) {
            let value = numbers[i + colIndex];

            //FIZZBUZZ
            if (typeof value === "undefined") {
                value = "";
            } else if (value % num1 == 0 && value % num2 == 0) {
                value = "Fizzbuzz"
                cols[colIndex].classList.add("fizzbuzzStyle");
            } else if (value % num1 == 0) {
                value = "Fizz"
                cols[colIndex].classList.add("fizzStyle");
            } else if (value % num2 == 0) {
                value = "Buzz"
                cols[colIndex].classList.add("buzzStyle");
            }
            cols[colIndex].textContent = value;

        }
        // add the row to the page
        resultsBody.appendChild(dataRow);
    }
}