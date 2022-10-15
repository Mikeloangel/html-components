/**
 * Enables hints for all elements on page with class 'hint'
 * and data-tooltip for the message set in html tag attribute
 *
 */
const hints = document.querySelectorAll('.hint');
const hintBubble = document.querySelector('.hint-bubble');
const hintBubbleContent = hintBubble.querySelector('.hint-bubble__content');
let hintTimer;

const TIMER_VALUE = 1000;

export default function enableHints() {
  const handleShowBubble = (e, hint) => {
    clearTimeout(hintTimer);
    if (!hint.dataset.tooltip || hint.dataset.tooltip?.length === 0) {
      handleClearBubble();
      return;
    }
    hintBubbleContent.textContent = hint.dataset.tooltip;
    hintBubble.style.top = `${e.clientY + 16}px`;
    hintBubble.style.left = `${e.clientX}px`;
    hintBubble.classList.add('hint-bubble_visible');
  }

  const handleClearBubble = () => {
    hintBubbleContent.textContent = '';
    hintBubble.classList.remove('hint-bubble_visible');
  }

  const handleSetTimerToClearBubble = () => hintTimer = setTimeout(handleClearBubble, TIMER_VALUE);
  const handleClearTimer = () => clearTimeout(hintTimer);

  Array.from(hints).forEach(hint => {
    hint.addEventListener('click', (e) => { handleShowBubble(e, hint) });
    hint.addEventListener('mouseleave', handleSetTimerToClearBubble);
  });

  hintBubble.addEventListener('mouseover', handleClearTimer);
  hintBubble.addEventListener('mouseleave', handleSetTimerToClearBubble);
}







