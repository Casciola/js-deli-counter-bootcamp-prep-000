
var katzDeli = [];

 function takeANumber(katzDeli, name) {
   katzDeli.push(name);
     return('Welcome, ' + name + '. You are number ' +katzDeli.length +' in line.');
 }


 function nowServing(katzDeli) {
   var i = 0;
  while (i < katzDeli.length) {
     i++;
  }
   if (katzDeli.length === 0) {
     return "There is nobody waiting to be served!";
   }
   else
   return ('Currently serving ' + katzDeli.shift() + '.');
 }

 var line = [];

 function currentLine(katzDeli) {
   for (var i = 0; i < katzDeli.length; i++) {
    line.push(` `+[i+1]+`. `  + katzDeli[i])
   }
   if (katzDeli.length === 0) {
     return "The line is currently empty.";
   } else
   return('The line is currently:' + line);
 }

function takeANumber(katzDeli, name) {
  var katzDeliLine = [];
  var i = 0;
  for(i; i < katzDeli.length; i++) {
    katzDeliLine.unshift(`Welcome, ${name} You are number ${i + 1} in line.`);
  }
  return katzDeliLine;
}
