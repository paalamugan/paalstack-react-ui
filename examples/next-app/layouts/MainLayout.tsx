import type { ToasterProps } from '@paalstack/react-ui';

import { Toaster } from '@paalstack/react-ui';

interface MainLayoutProps {
  children: React.ReactNode;
  theme: ToasterProps['theme'];
}
export const MainLayout = ({ children, theme }: MainLayoutProps) => {
  return (
    <>
      <Toaster richColors closeButton theme={theme} />
      {children}
    </>
  );
};
