import { DESKTOP_BREAKPOINT } from './const';

const html = document.documentElement;

const getScrollbarWidth = () => {
  return window.innerWidth - html.clientWidth;
};

const isDesktop = () => {
  return html.clientWidth + getScrollbarWidth() >= DESKTOP_BREAKPOINT;
};

const isBreakpoint = breakpoint => {
  return html.clientWidth + getScrollbarWidth() >= breakpoint;
};

const getScrollY = () => {
  return html.scrollTop;
};

const addPageOverflow = () => {
  html.classList.add('page--lock');
  document.body.style.overflowY = 'scroll';
  document.body.style.top = `${getScrollY() * -1}px`;
  document.body.style.position = 'fixed';
};

const removePageOverflow = () => {
  html.classList.remove('page--lock');
  const scrollY = parseInt(document.body.style.top, 10);
  document.body.style.overflowY = '';
  document.body.style.position = '';
  document.body.style.top = '';
  window.scrollTo(0, Math.abs(scrollY));
};

const convertWhiteSpaces = string => {
  const mnemonic = '\u00A0';
  return string.replace(/&nbsp;/g, mnemonic);
};

const onlyNumbers = value => value.replace(/\D/g, '').replace(/^0+/g, '');

export {
  getScrollbarWidth,
  isDesktop,
  isBreakpoint,
  getScrollY,
  addPageOverflow,
  removePageOverflow,
  convertWhiteSpaces,
  onlyNumbers,
};
