//Select DOM Elements

const main = document.getElementById('main');
const addUser = document.getElementById('add-user');
const doubleMoney = document.getElementById('double');
const showMillionaires = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealth = document.getElementById('calculate-wealth');


let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

//Function for adding users with API

async function getRandomUser(){
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();
    // console.log(data.results);

    const user = data.results[0];

    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random()*1000000) 
    }

    console.log(newUser);

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

//Function number as money

function formatMoney(number){
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}
