var i = 1;
while(i <= 100) {
  var text = '';
  if (i % 3 == 0) text += 'fizz'
  if (i % 5 == 0) text += 'buzz'
  console.log(i, text)
  i++
}
