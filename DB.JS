const courses = [{
    path: 'courses/htmlcourses.jpg',
    title: 'Free html certification course',
    price: 60,
    category: 'HTML'
},
{
    path:'courses/HTML-b-80.jpg',
    title:'HTML for beginners',
    price: 50,
    category: 'HTML'
},

{
    path: 'courses/html2.png',
    title: 'Full course HTML',
    price: 5.5,
    category: 'HTML'
},

{
    path: 'courses/csscolors.jpg',
    title: ' Intro Css for beginners',
    price: 5.5,
    category: 'CSS'
},

{
    path: 'courses/CSS-Course.jpg',
    title: 'Tutorial style CSS',
    price: 5.5,
    category: 'CSS'
},
{
    path: 'courses/js1.png',
    title: 'tutorial JAVASCRIPT',
    price: 5.5,
    category: 'JS'
},
{
    path:'courses/htmlbeg.jpg',
    title:'8 hours learn HTML',
    price: 80,
    category: 'HTML'
},

{
    path: 'courses/php1.jpg',
    title: 'Intro PHP',
    price: 5.5,
    category: 'PHP'
},


{
    path: 'courses/scriptskills.png',
    title: 'full tutorial JAVASCRIPT',
    price: 5.5,
    category: 'JS'
},

{
    path: 'courses/objetjavascript.jpg',
    title: 'object in JAVASCRIPT',
    price: 5.5,
    category: 'JS'
},


{
    path: 'courses/php2.jpg',
    title: ' Free PHP course',
    price: 5.5,
    category: 'PHP'
},

{  path: 'courses/js2.jpg',
title: 'DOM JAVASCRIPT',
price: 5.5,
category: 'JS'
},

{
    path: 'courses/php3.png',
    title: 'Intro PHP',
    price: 5.5,
    category: 'PHP'
},

   





]
const listBn = document.querySelectorAll('.btn');
const gd = listBn.forEach(function(btn) {
return btn.textContent.split(',');
})
console.log(gd)



/*const category = listBn.forEach(function(e) {
return e.currentTarget.dataset.cg;
});*/


listBn.forEach(function(btn) {
btn.addEventListener("click", function(filtre) {
    const category = filtre.target.dataset.cg;
    console.log(category)
    const courseCatg = courses.filter(function(list) {
        if (list.category === category) {
            return list;
        }
    });
    if (category === "All") {
        courses.forEach(function(e) {
            creationCourses(e.path, e.title, e.price)
        })
    } else {
        courseCatg.forEach(function(e) {
            creationCourses(e.path, e.title, e.price)
        })
    }
});
});

window.addEventListener('DOMContentLoaded', function() {
courses.forEach(function(e) {
    creationCourses(e.path, e.title, e.price)
})
})
const el = document.querySelector('#content2');

function creationCourses(image, titre, prix) {
let div = document.createElement('div'),
    img = document.createElement('img'),
    p = document.createElement('p'),
    span = document.createElement('span');
img.src = image;
let contenu = document.createTextNode(titre);
p.appendChild(contenu);
span.appendChild(document.createTextNode(prix));
div.setAttribute('class', 'card col-3 me-3 mb-3');

div.appendChild(img);
div.appendChild(p);
div.appendChild(span);

el.append(div);
}