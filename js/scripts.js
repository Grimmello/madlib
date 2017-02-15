$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var restrauntInput= $("input#restraunt").val();
    var dateInput = $("input#date").val();
    var foodInput = $("input#food").val();
    var nounInput = $("input#noun").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".restraunt").text(restrauntInput);
    $(".date").text(dateInput);
    $(".food").text(foodInput);
    $(".noun").text(nounInput);

    $(".panel").show();

    event.preventDefault();
  });
});
