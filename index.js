let contentDiv = document.getElementById("content");

let routes = {
  "/": homePage,
  "/index.html": homePage,
  "/appointment": appointmentPage,
  "/about": aboutPage,
  "/contact": contactPage,
  "/services": servicesPage
};

window.onpopstate = () => {
  contentDiv.innerHTML = routes[window.location.pathname];
};

let onNavClick = pathName => {
  window.history.pushState({}, pathName, window.location.origin + pathName);
  contentDiv.innerHTML = routes[pathName];
};

contentDiv.innerHTML = routes[window.location.pathname];
