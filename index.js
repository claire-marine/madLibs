
var button = $('button');
var first = $('.first');
var second = $('.second');
var third = $('.third');
var fourth = $('.fourth');
var fifth = $('.fifth');


var story = $('.story');
// var mainHeader = $('.mainHeader');
// var test =  $('.test');


button.on("click", showStory);

function showStory(){
story.append(`<p> ${first.val()} ${second.val()} ${third.val()} ${fourth.val()} ${fifth.val()}</p>`);
// mainHeader.text("You did it!")
}
