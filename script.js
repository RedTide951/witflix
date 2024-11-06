function toggleMenu() {
  const menu = document.getElementById("hamburger-menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function toggleSearch() {
  const searchBar = document.querySelector(".search-bar");
  if (searchBar.style.width === "150px") {
    searchBar.style.width = "0";
    searchBar.style.opacity = "0";
  } else {
    searchBar.style.width = "150px";
    searchBar.style.opacity = "1";
  }
}


// Movie List 
