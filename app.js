//Select DOM Elements

const main = document.getElementById('main');
const addUser = document.getElementById('add-user');
const doubleMoney = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');


let data = [];

//Function for adding users with API

async function getRandomUser(){
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();
    console.log(data.results);

    const user = data.results[0];

    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random()*1000000) 
    }

    // console.log(newUser);

    addUserData(newUser);

}


//Function for adding user

function addUserData(obj){
    data.push(obj);
    upDateDOM();
}

// console.log(data);

//Function for showing data in DOM

function upDateDOM(providedData = data){

    //Clear the main div of previous user data

    main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

    providedData.forEach((item)=> {

        //Insert a child div inside the main div to display new user
        const element = document.createElement('div');

        element.classList.add('person');

        element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;

        //Append the element to the parent div of main

        main.appendChild(element);

    })
}


//All Event Listeners

//Event listener for adding user

addUser.addEventListener('click', getRandomUser);

//Event listener for doubling money

doubleMoney.addEventListener('click', dblMoney);

//Event listener for sorting money

sortBtn.addEventListener('click', sortMoney);

//Event listener for filtering millionaires

showMillionairesBtn.addEventListener('click', showMillionaires);

//Event listener for Calculating wealth

calculateWealthBtn.addEventListener('click', calculateWealth);


//Function number as money

function formatMoney(number){
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}


//Function for doubling money for users

function dblMoney(){
    data = data.map((user)=>{
        return {...user, money: user.money * 2};
    })
    upDateDOM();
}

//Function for sorting money in Descending order

function sortMoney(){
    data.sort((a,b)=> b.money - a.money);

    upDateDOM();
}

//Function for showing Millionaires

function showMillionaires(){
    data = data.filter((user) => user.money > 1000000);

    upDateDOM();
}


//Function for showing Millionaires

function calculateWealth(){
    const wealth = data.reduce((acc, user) => acc += user.money, 0)
    
    
}

