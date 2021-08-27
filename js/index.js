const collapseButton = document.querySelector('#sidebarCollapse');
const sideBar = document.querySelector('#sidebar');
const content = document.querySelector('#content');

const profile = document.querySelector('#profile');
const profileLinks = document.querySelector('#profile-links');

// for popups screens
const changePassword = document.querySelector('.password');
const changePasswordPopup = document.querySelector('.change-password-popup')
const popupBtn = document.querySelector("#popup-btn");
const popup = document.querySelector(".popup");
const close = document.querySelector(".cancel-btn");

changePassword.addEventListener('click', () => {
  changePasswordPopup.style.display = "block"
});

collapseButton.addEventListener('click', () => {
  sideBar.classList.toggle("active");
});

profile.addEventListener('click', () => {
  profileLinks.classList.toggle("active-profile")
});

popupBtn.addEventListener('click', () => {
  popup.style.display = "block"
});

close.addEventListener('click', () => {
  popup.style.display = "none";
  changePasswordPopup.style.display = "none"
});
