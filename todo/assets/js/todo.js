// Toggling completion of a todo
$(document).on('click', 'li', function(event) {
  // Prevent event bubbling
  if(event.target == this) {
    $(this).toggleClass('completed');
  }

  event.stopPropagation();
});

// Removing todos
$(document).on('click', '.todo-item span', function() {
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
});

// Append new todo on input keypress center
$('#add-todo').keypress(function(event) {
  if (event.which == 13) {
    var todo = $(this).val();
    // Ensure we have something
    if (todo.length > 0) {
      console.log('Add todo = ' + todo);
      $('.todo-list').append('<li class="todo-item">' + todo + '<span><i class="far fa-trash-alt"></i></span></li>')
      // Delete the text
      $(this).val('');
    }
  }
});
