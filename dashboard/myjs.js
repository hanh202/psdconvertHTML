var show = true;
function showDropdown(a, id) {
  // console.dir(a);
  console.log(a.className);
  var dropdown = document.getElementById(id);
  if (show) {
    dropdown.style.display = 'block';
    show = false;
  } else {
    dropdown.style.display = 'none';
    show = true;
  }
}

var showNav = false;
function showNavBar() {
  if (showNav) {
    document.getElementsByClassName('nav-slidebar-frame')[0].style.display =
      'block';
    showNav = false;
  } else {
    document.getElementsByClassName('nav-slidebar-frame')[0].style.display =
      'none';
    showNav = true;
  }
}
