const scrollToElement = () => {
  const smoothScrollElements = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');

  smoothScrollElements.forEach((smoothScrollElement) => {
    smoothScrollElement.addEventListener('click', (evt) => {
      evt.preventDefault();

      const id = smoothScrollElement.getAttribute('href');
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
};

export {scrollToElement};
