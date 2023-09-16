let fragment = document.createDocumentFragment();
let element1 = document.createElement('p');
element1.append(document.createTextNode('たちつてと'));
let element2 = document.createElement('p');
element2.append(document.createTextNode('なにぬねの'));

fragment.append(element1);
fragment.append(element2);

let wrap = document.getElementById('wrap');
wrap.append(fragment);
