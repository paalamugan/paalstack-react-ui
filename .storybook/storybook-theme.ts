import { create } from '@storybook/theming';

// @ts-ignore
import brandImageDark from './storybook-logo-dark.png';
// @ts-ignore
import brandImageLight from './storybook-logo-light.png';

const getCurrentTheme = (): 'dark' | 'light' => {
  const search = window.location.search;
  const searchParams = new URLSearchParams(search);
  const globals = searchParams.get('globals') || '';
  const isDark = globals.includes('twDarkMode:!true');

  if (isDark) {
    localStorage.setItem('paalstack-ui-theme', 'dark');
  } else {
    localStorage.setItem('paalstack-ui-theme', 'light');
  }
  return isDark ? 'dark' : 'light';
};

const theme = getCurrentTheme();

export default create({
  base: theme,
  brandTitle: 'Paalstack React UI',
  brandUrl: 'https://github.com/paalamugan/paalstack-react-ui',
  brandImage: theme === 'dark' ? brandImageDark : brandImageLight,
  brandTarget: '_blank',
});
