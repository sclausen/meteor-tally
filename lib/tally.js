var tally = function(number) {
  if(!number) return "";
  var base = 64;
  var string = "";

  _.times(Math.floor(number / 5), function() {
    string += String.fromCharCode(base + 5);
  });

  var rest = number % 5;

  if (rest > 0) {
    string += String.fromCharCode(base + rest);
  }
  return string;
}

Template.tally.helpers({
  tally: function(number){
    return tally(number);
  }
});