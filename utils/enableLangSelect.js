export default function enableLangSelect(selectorId = 'lang') {
  const lang = document.querySelector(`#${selectorId}`);
  const langList = lang.querySelector('.lang__list');

  lang.addEventListener('mouseenter', () => {
    langList.classList.add('lang__list_active');
  });

  lang.addEventListener('mouseleave', () => {
    langList.classList.remove('lang__list_active');
  });
}
