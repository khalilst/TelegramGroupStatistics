authors = {};
id = null;
$('.im_history_scrollable_wrap .im_history_message_wrap').each(function(index) {
  offset = $(this).offset();
  if ((!offset.top) && (!offset.left))
    return;
  author = $(this).find('.im_message_author');
  if (author.length)
    id = author.text();
  if (!id)
    return;
  if (!authors[id])
    authors[id] = 1;
  else
    authors[id]++;
});

console.log('Result:');
console.log('----------------');
$.each(authors, function() {
  max = null;
  maxValue = 0;
  $.each(authors, function(index) {
    if (maxValue < this) {
      max = index;
      maxValue = this;
    }    
  });  
  console.log(max + ' => ' + maxValue);
  authors[max] = 0;
});
console.log('----------------');