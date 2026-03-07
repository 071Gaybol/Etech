(function () {
  var toggle = document.querySelector('.nav-bar__toggle');
  var collapse = document.querySelector('.nav-bar__collapse');
  var dropdownItems = document.querySelectorAll('.nav-bar__item--dropdown');

  if (toggle && collapse) {
    toggle.addEventListener('click', function () {
      var isOpen = collapse.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen);
      toggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    });
  }

  dropdownItems.forEach(function (item) {
    var link = item.querySelector(':scope > a');
    if (link && window.matchMedia('(max-width: 768px)').matches) {
      link.addEventListener('click', function (e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          item.classList.toggle('is-open');
        }
      });
    }
  });
})();
