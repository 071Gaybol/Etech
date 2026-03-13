(function () {
  var toggle = document.querySelector('.nav-bar__toggle');
  var collapse = document.querySelector('.nav-bar__collapse');
  var dropdownItems = document.querySelectorAll('.nav-bar__item--dropdown');
  var collapseLinks = document.querySelectorAll('.nav-bar__collapse a');

  function isMobile() {
    return window.innerWidth <= 768;
  }

  function closeMenu() {
    if (!toggle || !collapse) {
      return;
    }

    collapse.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');

    dropdownItems.forEach(function (item) {
      item.classList.remove('is-open');
    });
  }

  if (toggle && collapse) {
    toggle.addEventListener('click', function () {
      var isOpen = collapse.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen);
      toggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    });
  }

  dropdownItems.forEach(function (item) {
    var link = item.querySelector(':scope > a');
    if (link) {
      link.addEventListener('click', function (e) {
        if (isMobile()) {
          e.preventDefault();
          item.classList.toggle('is-open');
        }
      });
    }
  });

  collapseLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (!isMobile()) {
        return;
      }

      if (link.parentElement && link.parentElement.classList.contains('nav-bar__item--dropdown')) {
        return;
      }
      
      closeMenu();
    });
  });
})();
