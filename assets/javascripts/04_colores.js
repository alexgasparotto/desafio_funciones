const box1 = document.querySelector('#box1');
const box2 = document.querySelector('#box2');
const box3 = document.querySelector('#box3');
const box4 = document.querySelector('#box4');

box1.style.backgroundColor = 'blue';
box2.style.backgroundColor = 'red';
box3.style.backgroundColor = 'green';
box4.style.backgroundColor = 'yellow';


box1.addEventListener('click', function(){box1.style.backgroundColor = 'black'});
box2.addEventListener('click', function(){box2.style.backgroundColor = 'black'});
box3.addEventListener('click', function(){box3.style.backgroundColor = 'black'});
box4.addEventListener('click', function(){box4.style.backgroundColor = 'black'});
box4.addEventListener('click', function(){box4.style.color = 'white'});
