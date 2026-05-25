/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Box } from '@/layouts/Box';
import { Text } from '@/layouts/Text';

import { AccordionContent, AccordionItem, AccordionRoot, AccordionTrigger } from '../Accordion';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { CardContent, CardDescription, CardFooter, CardHeader, CardRoot, CardTitle } from '../Card';
import { Input } from '../Input';
import { Label } from '../Label';
import { SelectContent, SelectItem, SelectRoot, SelectTrigger, SelectValue } from '../Select';
import { DirectionProvider, useDirection } from './Direction';

const meta: Meta<typeof DirectionProvider> = {
  title: 'Components/Direction',
  component: DirectionProvider,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj<typeof DirectionProvider>;

const DirectionIndicator = () => {
  const direction = useDirection();
  return (
    <Badge variant="outline" className="mb-4">
      Current direction: {direction}
    </Badge>
  );
};

export const Basic: Story = {
  name: 'LTR (Default)',
  render: () => (
    <DirectionProvider direction="ltr">
      <Box dir="ltr" className="w-[360px] space-y-4">
        <DirectionIndicator />
        <CardRoot>
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>Enter your email below to login to your account</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Box className="grid gap-1.5">
              <Label htmlFor="ltr-email">Email</Label>
              <Input id="ltr-email" type="email" placeholder="m@example.com" />
            </Box>
            <Box className="grid gap-1.5">
              <Label htmlFor="ltr-password">Password</Label>
              <Input id="ltr-password" type="password" />
            </Box>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Login</Button>
          </CardFooter>
        </CardRoot>
      </Box>
    </DirectionProvider>
  ),
};

export const RTL: Story = {
  name: 'RTL (Arabic)',
  render: () => (
    <DirectionProvider direction="rtl">
      <Box dir="rtl" className="w-[360px] space-y-4" style={{ fontFamily: 'system-ui' }}>
        <DirectionIndicator />
        <CardRoot>
          <CardHeader>
            <CardTitle>تسجيل الدخول إلى حسابك</CardTitle>
            <CardDescription>أدخل بريدك الإلكتروني أدناه لتسجيل الدخول</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Box className="grid gap-1.5">
              <Label htmlFor="rtl-email">البريد الإلكتروني</Label>
              <Input id="rtl-email" type="email" placeholder="m@example.com" dir="ltr" />
            </Box>
            <Box className="grid gap-1.5">
              <Label htmlFor="rtl-password">كلمة المرور</Label>
              <Input id="rtl-password" type="password" dir="ltr" />
            </Box>
          </CardContent>
          <CardFooter>
            <Button className="w-full">تسجيل الدخول</Button>
          </CardFooter>
        </CardRoot>
      </Box>
    </DirectionProvider>
  ),
};

export const Toggle: Story = {
  name: 'Toggle Direction',
  render: () => {
    const [dir, setDir] = useState<'ltr' | 'rtl'>('ltr');

    const labels = {
      ltr: {
        title: 'Login to your account',
        email: 'Email',
        password: 'Password',
        login: 'Login',
        toggle: 'Switch to RTL',
      },
      rtl: {
        title: 'تسجيل الدخول إلى حسابك',
        email: 'البريد الإلكتروني',
        password: 'كلمة المرور',
        login: 'تسجيل الدخول',
        toggle: 'التبديل إلى LTR',
      },
    };

    const t = labels[dir];

    return (
      <DirectionProvider direction={dir}>
        <Box dir={dir} className="w-[360px] space-y-4" style={{ fontFamily: 'system-ui' }}>
          <Box className="flex items-center justify-between">
            <DirectionIndicator />
            <Button variant="outline" size="sm" onClick={() => setDir(dir === 'ltr' ? 'rtl' : 'ltr')}>
              {t.toggle}
            </Button>
          </Box>
          <CardRoot>
            <CardHeader>
              <CardTitle>{t.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Box className="grid gap-1.5">
                <Label htmlFor="toggle-email">{t.email}</Label>
                <Input id="toggle-email" type="email" placeholder="m@example.com" dir="ltr" />
              </Box>
              <Box className="grid gap-1.5">
                <Label htmlFor="toggle-password">{t.password}</Label>
                <Input id="toggle-password" type="password" dir="ltr" />
              </Box>
            </CardContent>
            <CardFooter>
              <Button className="w-full">{t.login}</Button>
            </CardFooter>
          </CardRoot>
        </Box>
      </DirectionProvider>
    );
  },
};

export const WithSelect: Story = {
  name: 'RTL with Select',
  render: () => (
    <DirectionProvider direction="rtl">
      <Box dir="rtl" className="w-[360px] space-y-4" style={{ fontFamily: 'system-ui' }}>
        <DirectionIndicator />
        <Box className="grid gap-1.5">
          <Label htmlFor="rtl-lang">اللغة</Label>
          <SelectRoot defaultValue="ar">
            <SelectTrigger id="rtl-lang">
              <SelectValue placeholder="اختر اللغة" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ar">العربية</SelectItem>
              <SelectItem value="he">עברית</SelectItem>
              <SelectItem value="fa">فارسی</SelectItem>
              <SelectItem value="en">English</SelectItem>
            </SelectContent>
          </SelectRoot>
        </Box>
      </Box>
    </DirectionProvider>
  ),
};

export const WithAccordion: Story = {
  name: 'RTL with Accordion',
  render: () => (
    <DirectionProvider direction="rtl">
      <Box dir="rtl" className="w-[360px] space-y-4" style={{ fontFamily: 'system-ui' }}>
        <DirectionIndicator />
        <AccordionRoot>
          <AccordionItem value="item-1">
            <AccordionTrigger>هل هو متاح؟</AccordionTrigger>
            <AccordionContent>
              <Text>نعم. إنه يلتزم بمواصفات WAI-ARIA لتصميم الأكورديون.</Text>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>هل هو مُنسق؟</AccordionTrigger>
            <AccordionContent>
              <Text>نعم. يأتي مع أنماط افتراضية تتوافق مع المكونات الأخرى.</Text>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>هل يمكن تحريكه؟</AccordionTrigger>
            <AccordionContent>
              <Text>نعم. إنه متحرك بشكل افتراضي، ولكن يمكنك تعطيل ذلك إذا كنت تفضل ذلك.</Text>
            </AccordionContent>
          </AccordionItem>
        </AccordionRoot>
      </Box>
    </DirectionProvider>
  ),
};

export const UseDirectionHook: Story = {
  name: 'useDirection Hook',
  render: () => {
    const DirectionAwareComponent = () => {
      const direction = useDirection();
      const isRtl = direction === 'rtl';

      return (
        <Box className="flex flex-col items-center gap-3">
          <Text className="text-sm text-muted-foreground">
            The arrow points to the {isRtl ? 'start (right)' : 'start (left)'} based on direction.
          </Text>
          <Box className="flex items-center gap-2 rounded-lg border p-4">
            <Text className="text-2xl">{isRtl ? '←' : '→'}</Text>
            <Text className="font-medium">{isRtl ? 'اتجاه البداية' : 'Start direction'}</Text>
          </Box>
        </Box>
      );
    };

    const [dir, setDir] = useState<'ltr' | 'rtl'>('ltr');

    return (
      <DirectionProvider direction={dir}>
        <Box dir={dir} className="w-[360px] space-y-4">
          <Box className="flex items-center justify-between">
            <DirectionIndicator />
            <Button variant="outline" size="sm" onClick={() => setDir(dir === 'ltr' ? 'rtl' : 'ltr')}>
              Toggle
            </Button>
          </Box>
          <DirectionAwareComponent />
        </Box>
      </DirectionProvider>
    );
  },
};
