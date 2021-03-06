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
      $('.todo-list').append('<li class="todo-item">' + todo + '<span class="trash"><i class="far fa-trash-alt"></i></span></li>')
      // Delete the text
      $(this).val('');
    }
  }
});

// Toggle showing/hiding of input
$('#todo-add-toggle').on('click', function() {
  $('.todo-input').fadeToggle(500);

  // Toggle show/hide
  $('#todo-add-toggle i').toggleClass('fa-eye-slash')
  $('#todo-add-toggle i').toggleClass('fa-eye')
});
