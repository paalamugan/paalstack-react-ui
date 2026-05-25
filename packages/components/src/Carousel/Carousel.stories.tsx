import type { Meta, StoryObj } from '@storybook/react';

import { Card, CardContent } from '../Card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselRoot } from './Carousel';

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Carousel>;

// ─── Props API Stories ────────────────────────────────────────────────────────

const makeSlide = (index: number) => (
  <div className="p-1">
    <Card>
      <CardContent className="flex aspect-square items-center justify-center p-6">
        <span className="text-4xl font-semibold">{index + 1}</span>
      </CardContent>
    </Card>
  </div>
);

export const Basic: Story = {
  render: () => (
    <div className="w-full max-w-xs">
      <Carousel items={Array.from({ length: 5 }, (_, i) => ({ key: `${i}`, content: makeSlide(i) }))} />
    </div>
  ),
};

export const WithoutNavigation: Story = {
  name: 'Without Navigation Buttons',
  render: () => (
    <div className="w-full max-w-xs">
      <Carousel
        showNavigation={false}
        items={Array.from({ length: 5 }, (_, i) => ({ key: `${i}`, content: makeSlide(i) }))}
      />
    </div>
  ),
};

export const Loop: Story = {
  render: () => (
    <div className="w-full max-w-xs">
      <Carousel
        opts={{ loop: true }}
        items={Array.from({ length: 5 }, (_, i) => ({ key: `${i}`, content: makeSlide(i) }))}
      />
    </div>
  ),
};

export const VerticalProps: Story = {
  name: 'Vertical (Props API)',
  render: () => (
    <div className="w-full max-w-xs">
      <Carousel
        orientation="vertical"
        className="mt-14 mb-14"
        contentClassName="-mt-2 h-[200px]"
        itemClassName="basis-full pt-2"
        items={Array.from({ length: 5 }, (_, i) => ({
          key: `${i}`,
          content: (
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{i + 1}</span>
                </CardContent>
              </Card>
            </div>
          ),
        }))}
      />
    </div>
  ),
};

// ─── Composition API Stories ──────────────────────────────────────────────────

export const CompositionBasic: Story = {
  name: 'Composition: Basic',
  render: () => (
    <div className="w-full max-w-xs">
      <CarouselRoot>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>{makeSlide(index)}</CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </CarouselRoot>
    </div>
  ),
};

export const CompositionThirdBasis: Story = {
  name: 'Composition: Basis 1/3',
  render: () => (
    <div className="w-full max-w-sm">
      <CarouselRoot>
        <CarouselContent className="-ml-2">
          {Array.from({ length: 9 }).map((_, index) => (
            <CarouselItem key={index} className="basis-1/3 pl-2">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-4">
                    <span className="text-2xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </CarouselRoot>
    </div>
  ),
};

export const CompositionHalfBasis: Story = {
  name: 'Composition: Basis 1/2',
  render: () => (
    <div className="w-full max-w-sm">
      <CarouselRoot>
        <CarouselContent className="-ml-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <CarouselItem key={index} className="basis-1/2 pl-3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </CarouselRoot>
    </div>
  ),
};

export const CompositionVertical: Story = {
  name: 'Composition: Vertical',
  render: () => (
    <div className="w-full max-w-xs">
      <CarouselRoot orientation="vertical" className="mt-14 mb-14">
        <CarouselContent className="-mt-2 h-[200px]">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="basis-full pt-2">
              <div className="p-1">
                <Card>
                  <CardContent className="flex items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </CarouselRoot>
    </div>
  ),
};
