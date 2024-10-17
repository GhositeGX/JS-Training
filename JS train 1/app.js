function applyDiscount(){
    let isPremium = document.getElementById('isPremium').checked;
    let discount = isPremium ? 10 : 5;
    document.getElementById("discount-result").textContent = `discount applied ${discount}`;
}

document.getElementById('event-btn').addEventListener('click', function(){
    document.getElementById('event-result').textContent = 'Button clicked!';
});


function openModal(){
    document.getElementById("custom-modal").style.display = "flex";
}

function closeModal(){
    document.getElementById("custom-modal").style.display = "none";
}

function fetchApiData() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => {
        document.getElementById("api-result").textContent = JSON.stringify(data, null, 2);
    });
}

function processData(){
    let numbers = [1,2,3,4,5];
    let sum = numbers.reduce((total, num) => total + num, 0);
    document.getElementById("data-result").textContent = `sum of ${sum}`;
}


function checkOrderStatus(){
    let orderStatus = "shipped";
    if (orderStatus === "shipped") {
        document.getElementById("workflow-result").textContent = "Order is shipped";
    }
}

function validatePhoneNumber(){
    let phoneNumber = document.getElementById('phone-number').value;
    const pattern = /^[0-9]{10}$/;
    let result = pattern.test(phoneNumber) ? "Valid phone number" : "Invalid phone number";
    document.getElementById("validation-result").textContent = result;
}

function sendConfirmationEmail(){
    console.log("sending email to johndoe@gmail.com");
    document.getElementById("email-result").textContent =  "Email has been sent";
}

document.getElementById("update-button").addEventListener("click", function(){
    document.getElementById("dynamic-output").textContent = "button updated"
});


function debugData(){
    let userData = {name: "John Doe", email: "johndoe@gmail.com"};
    console.log("User Data", userData);
    document.getElementById("debug-output").textContent = JSON.stringify(userData, null, 2);
}