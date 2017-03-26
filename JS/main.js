$(document).ready(function(){

  $("dropdownMenu1").click();

  function showMenu() {
    console.log("menu clicked");
    $("dropdown-menu").addClass("#dropdownMenu1:active")
  }
});