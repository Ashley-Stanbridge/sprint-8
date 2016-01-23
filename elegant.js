function min(a, b) {
  if (a < b)
    return a;
  else
    return b;
}

function isEven(a) {
  if (a == 0)
    return true;
  else if (a == 1)
    return false;
  else if (a < 0)
    return isEven(-a);
  else
    return isEven(a - 2);

}



function countBs(beez) {
  return countChar(beez, "B");
}

function countChar(beez, character) {
  var total = 0;
  for (var count = beez.length - 1; count > -1; count--) {
    if (beez.charAt(count) === character) {
      total += 1;
    }
  }
  return total;
}