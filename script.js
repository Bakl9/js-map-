var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
console.log(roots)


var neaArray = array.map((title, index,lol) => title);
console.log(neaArray)

var x = c.map((title,index, array) => {
   if(index == 0) {
    array[index + 1] = 50
   };
   return title
}) 
console.log(x)
var z = [
  { 'name ': 'Ivan', 'order': 12, 'sum': '123.5'},
  {'name': 'Sergey',   'order': 12 , 'sum': '123.5'},
  {'name': 'malinda  ', 'order' :12, 'sum': '123.5'},
  { 'name' : 'ivanov petr', 'order': 12, 'sum': '123.50'},
];

var zBack = z.map(title => {
  title.name = title.name.trim().toLocaleLowerCase();
});
console.log(zBack)

