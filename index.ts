// Import stylesheets
import './style.css';

// 增长量百化分
// *为目前不太熟悉的键值（3，7的不熟）
setInterval(function xx() {
  let myMap = new Map([
    ['50%', 2],
    ['33.3%', 3],
    ['25%', 4],
    ['20%', 5],
    ['*16.7%', 6],
    ['*14.3%', 7],
    ['12.5%', 8],
    ['11.1%', 9],
    ['10%', 10],

    ['9.1%', 11],
    ['*8.3%', 12],
    ['*7.7%', 13],
    ['7.1%', 14],
    ['*6.7%', 15],
    ['6.25%', 16],
    ['*5.9%', 17],
    ['*5.6%', 18],
    ['*5.3%', 19],
  ]);

  let ks = [];

  for (let key of myMap.keys()) {
    ks.push(key);
  }

  let random = Math.floor(Math.random() * myMap.size);

  const randomDiv: HTMLElement = document.getElementById('random');
  const valDiv: HTMLElement = document.getElementById('result');
  const npvalDiv: HTMLElement = document.getElementById('npval');
  const nmvalDiv: HTMLElement = document.getElementById('nmval');
  randomDiv.innerHTML = `<h1>${ks[random]}</h1>`;

  setTimeout(function ck() {
    let val = myMap.get(ks[random]);
    valDiv.innerHTML = `<h1>1/${val}</h1>`;
    npvalDiv.innerHTML = `<h1>N+1=${val + 1}</h1>`;
    nmvalDiv.innerHTML = `<h1>N-1=${val - 1}</h1>`;
  }, 1000);
}, 2000);
