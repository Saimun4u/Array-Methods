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
}

console.log(data);

