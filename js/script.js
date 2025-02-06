const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const dropdownBtn = dropdown.querySelector('.dropbtn');
  const dropdownContent = dropdown.querySelector('.dropdown-content');

  dropdownBtn.addEventListener('click', () => {
    if (dropdown.classList.contains('show')) {
      dropdownContent.classList.add('hide');
      setTimeout(() => {
        dropdown.classList.remove('show');
        dropdownContent.classList.remove('hide');
        dropdownContent.style.display = 'none';
      }, 500);
    } else {
      dropdownContent.style.display = 'block';
      setTimeout(() => {
        dropdown.classList.add('show');
      }, 10);
    }
  });
});