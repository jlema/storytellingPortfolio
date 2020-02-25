$(function() {
  // Sidebar toggle behavior
  // From: https://bootstrapious.com/p/bootstrap-vertical-navbar
  $('#sidebarCollapse').on('click', function() {
    $('#sidebar, #content').toggleClass('active');
  });
});
