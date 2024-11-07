function toggleMenu() {
  const menu = document.getElementById("hamburger-menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function toggleSearch() {
  const searchBar = document.querySelector(".search-bar");
  const searchButton = document.querySelector(".compact-search-button");
  if (searchBar.style.width === "200px") {
    searchBar.style.width = "0";
    searchBar.style.opacity = "0";
    searchButton.style.fontSize = "1.5rem";
  } else {
    searchBar.style.width = "200px";
    searchBar.style.opacity = "0.8";
    searchButton.style.fontSize = "1.2rem";
  }
}

// Movie List
