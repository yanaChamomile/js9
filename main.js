/*1*/
let div = document.createElement('div');
div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');
document.body.appendChild(div);
let Copy = div.cloneNode(true);
document.body.appendChild(Copy);

/*2*/
let productList = ['Main','Products','About us','Contacts']
let ul = document.createElement('ul');
for (const item of productList) {
    const li = document.createElement('li');
    li.innerText = item;
    ul.appendChild(li);
}
document.body.appendChild(ul);

/*3*/
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const course of coursesAndDurationArray) {
    const div = document.createElement('div');
    div.innerText = `${course.title} ${course.monthDuration}`
    document.body.appendChild(div);
}

/*4*/
for (const course of coursesAndDurationArray) {
  const div = document.createElement('div');
     div.classList.add('item');
  const h1 = document.createElement('h1');
    h1.innerText = course.title;
    h1.classList.add('heading');
  const p = document.createElement('p');
    p.innerText = course.monthDuration;
    p.classList.add('description');
    div.append(h1, p);
  document.body.appendChild(div);
}


