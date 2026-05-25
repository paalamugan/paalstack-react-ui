export function makeStyleTag() {
  const tag = document.createElement('style');
  tag.setAttribute('type', 'text/css');
  tag.setAttribute('paalstack-scroll-lock', '');

  return tag;
}
