let siteHeader = document .querySelector(".site-header");
let siteToggler = siteHeader .querySelector(".site-header__toggler");

siteToggler.addEventListener("click", function() {
  siteHeader.classList.toggle("site-header--open")
});