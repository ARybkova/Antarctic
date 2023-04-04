export const scrollToElement = () => {
  const smoothScrollElements = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');

  if (smoothScrollElements.length > 0) {
    smoothScrollElements.forEach((smoothScrollElement) => {
      smoothScrollElement.addEventListener('click', (evt) => {
        evt.preventDefault();
        const id = smoothScrollElement.getAttribute('href');
        document.querySelector(id).scrollIntoView({
          behavior: 'smooth',
        });
      });
    });
  }
};
