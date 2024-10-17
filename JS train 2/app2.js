function arrayOperations() {
    const fruits = ['Apple', 'Banana', 'Orange'];
    fruits.push('Grapes'); // Add item
    fruits.pop(); // Remove last item
    document.getElementById('array-result').textContent = 'Updated array: ' + fruits.join(', ');
}


function loopExample() {
    const numbers = [1, 2, 3, 4, 5];
    const result = document.getElementById('loop-result');
    result.innerHTML = '';

    for (let number of numbers) {
        const li = document.createElement('li');
        li.textContent = `Number: ${number}`;
        result.appendChild(li);
    }
}

function errorHandling() {
    try {
        nonExistentFunction();
    } catch (error) {
        document.getElementById('error-result').textContent = 'Error found ' + error.message;
    }
}

function scopeExample() {
    let globalVar = 'I am global';

    function innerFunction() {
        let localVar = 'I am local';
        return localVar;
    }

    document.getElementById('scope-result').textContent = innerFunction() + ' | ' + globalVar;
}


function startTimer() {
    setTimeout(function() {
        document.getElementById('timer-result').textContent = 'Timer finished!';
    }, 3000);
}


document.getElementById('parent').addEventListener('click', function(event){
    if (event.target && event.target.classList.contains('child')){
        document.getElementById('delegation-result').textContent = `Clicked: ${event.target.textContent}`;
    }
});


document.getElementById('validation-form').addEventListener('submit', function(event){
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    if (!username || !email) {
        document.getElementById('validation-result').textContent = 'Please fill in all fields';
    } else {
        document.getElementById('validation-result').textContent = 'Form Submited sucessfully';
    }
});


function storeData() {
    localStorage.setItem('name', 'John Doe');
    document.getElementById('storage-result').textContent = 'Data Stored';

}

function retrieveData() {
    const name = localStorage.getItem('name');
    document.getElementById('storage-result').textContent = name ? `retrieved from storage ${name}` : 'No data found';
}

function traverseDom() {
    const items = document.querySelectorAll('#dom-list li');
    let result = '';

    items.forEach(function(item, index){
        result += `Item ${index + 1}: ${item.textContent}\n`;
    });

    document.getElementById('dom-result').textContent =  result;
}

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old`
    }
}


function classExample() {
    const john = new Person('John Doe', 30);
    document.getElementById('class-result').textContent = john.introduce();
}