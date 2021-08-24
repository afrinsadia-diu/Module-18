// Declare Variable
var favBook = "Himu";

// Declare Array
var booklist = ['Kew Jane na', 'Himu', 'Dipu no 2', 'titin', 'Megh boleche Jabo Jabo'];

// Arry te koyta index ache jante chaile 
console.log(booklist.length)

// kono index koto Number e ache jante
var titinBook = booklist.indexOf('titin')
console.log(titinBook);

// Array er kono Element change korte chaile 
booklist[2] = "EKa" ;
console.log(booklist);

// Array er first e  kono Element add korte chaile 
booklist.unshift('chando Tara', 'dhurbo Tara', 'Prottaborton');
console.log(booklist);

// Array er last  e  kono Element add korte chaile
booklist.push('english book', 'bengoli book'); 
console.log(booklist);

// Array er first theke  kono Element remove korte chaile 
booklist.shift('chandro Tara');
console.log(booklist);

// Array er last theke  kono Element remove  korte chaile 
booklist.pop('bengoli book');
console.log(booklist);

// conditional
if(booklist[2] == 'Kew Jane na'){
    console.log('Yes! There is Kew Jane na')
}
else{
    console.log('Not here')
}

// ----------------While loop-----------------
var x = 0;
while(x < 10){
    console.log(x);
    x++;
}

// ----------For Loop-------------------
for(var i=0; i<=20; i+=2){
    console.log(i);
}