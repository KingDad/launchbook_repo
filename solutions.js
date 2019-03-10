// Exercise 1): Find the top navbar, using a query for the HTML element type. The navbar's type is `<nav>`.
document.getElementsByTagName("form")[0];
// Exercise 2): Find the sidebar on the left by using its id and set it equal to the variable sideBar.
let sideBar = document.getElementById("sidebar-left");
// Exercise 3): Find the 'Pages' and 'Groups' sections of the sidebar by using their class.
let pages = document.getElementsByClassName("pages");
let groups = document.getElementsByClassName("groups");
// Exercise 4): Set the text of the 'Favorites' `h5` to say "Least Favs".
let favoritesH5 = sideBar.getElementsByClassName("favorites")[0].getElementsByTagName("h5")[0];
favoritesH5.append("Least Favs");
// Exercise 5): Find the first of the ads in the sidebar and hide it.
let ad = document.getElementById("sidebar-right").getElementsByClassName("ads")[0].getElementsByClassName("ad-slot")[0];
ad.style.visibility = "hidden";
// Exercise 6): Set the visibility on the ad that you hid in the previous exercise to make it visible again.
ad.style.visibility = "visible";
// Exercise 7): Use `setAttribute` to change `src` attribute of one of the ads in the sidebar.
let adImg = ad.getElementsByTagName("img")[0];
adImg.src = "http://placebear.com/200/300";
// Exercise 8): Find Sam's post and change its text to something incredible.
let samPostText = document.getElementById("list-of-posts").lastChild.getElementsByClassName("media-body")[0].getElementsByTagName("p")[0];
samPostText.innerHTML = "Sometimes when I'm alone I cry";
// Exercise 9): Find the first post and add the `.post-liked` class to it, and watch it turn blue.
let postToLike = document.getElementById("list-of-posts").getElementsByTagName("li")[0];
postToLike.className += " post-liked";
// Exercise 10: Find the second post and add the `.post-shared` class to the `li` containing the text Shared to watch it turn red.
let postToShare = document.getElementById("list-of-posts").getElementsByTagName("li")[7];
postToShare.classList.add("post-shared");
