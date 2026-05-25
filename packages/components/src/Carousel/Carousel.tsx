import * as React from 'react';

import type { BoxProps, BoxPropsWithRef } from '@/layouts/Box';
import type { UseEmblaCarouselType } from 'embla-carousel-react';

import useEmblaCarousel from 'embla-carousel-react';

import { LuChevronLeft as ChevronLeftIcon, LuChevronRight as ChevronRightIcon } from '@/icons/lu';
import { Box } from '@/layouts/Box';
import { cn } from '@/shared/lib';

import { Button } from '../Button';

// ─── Types ────────────────────────────────────────────────────────────────────

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselRootProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: 'horizontal' | 'vertical';
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselRootProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

const useCarousel = () => {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error('useCarousel must be used within a <CarouselRoot />');
  }

  return context;
};

// ─── Primitive components (Composition API) ───────────────────────────────────

const CarouselRoot: React.FC<BoxPropsWithRef<'div', CarouselRootProps>> = ({
  orientation = 'horizontal',
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}) => {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === 'horizontal' ? 'x' : 'y',
    },
    plugins,
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((emblaApi: CarouselApi) => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, []);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext],
  );

  React.useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on('reInit', onSelect);
    api.on('select', onSelect);

    return () => {
      api?.off('select', onSelect);
    };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api,
        opts,
        orientation: orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <Box
        onKeyDownCapture={handleKeyDown}
        className={cn('relative', className)}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        data-qa="carousel"
        data-orientation={orientation}
        {...props}
      >
        {children}
      </Box>
    </CarouselContext.Provider>
  );
};
CarouselRoot.displayName = 'CarouselRoot';

const CarouselContent: React.FC<BoxPropsWithRef<'div'>> = ({ className, ...props }) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} className="overflow-hidden" data-slot="carousel-content" data-orientation={orientation}>
      <Box
        className={cn('flex', orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col', className)}
        data-qa="carousel-content-inner"
        data-orientation={orientation}
        {...props}
      />
    </div>
  );
};
CarouselContent.displayName = 'CarouselContent';

const CarouselItem: React.FC<BoxPropsWithRef<'div'>> = ({ className, ...props }) => {
  const { orientation } = useCarousel();

  return (
    <Box
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      data-qa="carousel-item"
      data-orientation={orientation}
      className={cn('min-w-0 shrink-0 grow-0 basis-full', orientation === 'horizontal' ? 'pl-4' : 'pt-4', className)}
      {...props}
    />
  );
};
CarouselItem.displayName = 'CarouselItem';

const CarouselPrevious = ({
  className,
  variant = 'outline',
  size = 'icon-sm',
  ...props
}: React.ComponentProps<typeof Button>) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      data-slot="carousel-previous"
      data-qa="carousel-previous"
      variant={variant}
      size={size}
      className={cn(
        'absolute touch-manipulation rounded-full',
        orientation === 'horizontal'
          ? 'top-1/2 -left-12 -translate-y-1/2'
          : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
        className,
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ChevronLeftIcon className="cn-rtl-flip" />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
};
CarouselPrevious.displayName = 'CarouselPrevious';

const CarouselNext = ({
  className,
  variant = 'outline',
  size = 'icon-sm',
  ...props
}: React.ComponentProps<typeof Button>) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      data-slot="carousel-next"
      data-qa="carousel-next"
      variant={variant}
      size={size}
      className={cn(
        'absolute touch-manipulation rounded-full',
        orientation === 'horizontal'
          ? 'top-1/2 -right-12 -translate-y-1/2'
          : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
        className,
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ChevronRightIcon className="cn-rtl-flip" />
      <span className="sr-only">Next slide</span>
    </Button>
  );
};
CarouselNext.displayName = 'CarouselNext';

// Props API (Compound Component)

export interface CarouselItemType {
  key?: string;
  content: React.ReactNode;
  className?: string;
}

export interface CarouselProps extends Omit<BoxProps, 'children'>, CarouselRootProps {
  className?: string;
  items: CarouselItemType[];
  showNavigation?: boolean;
  contentClassName?: string;
  itemClassName?: string;
  previousProps?: React.ComponentProps<typeof Button>;
  nextProps?: React.ComponentProps<typeof Button>;
}

/**
 * Carousel Component
 *
 * A carousel/slider component built on embla-carousel-react for cycling
 * through a series of content panels.
 *
 * @example
 * // Props API — basic usage
 * import { Carousel } from '@paalstack/react-ui';
 *
 * <Carousel
 *   items={[
 *     { key: '1', content: <div>Slide 1</div> },
 *     { key: '2', content: <div>Slide 2</div> },
 *     { key: '3', content: <div>Slide 3</div> },
 *   ]}
 * />
 *
 * @example
 * // Props API — vertical with loop
 * <Carousel
 *   orientation="vertical"
 *   opts={{ loop: true }}
 *   items={[
 *     { key: 'a', content: <Card><CardContent>Panel A</CardContent></Card> },
 *     { key: 'b', content: <Card><CardContent>Panel B</CardContent></Card> },
 *   ]}
 * />
 *
 * @example
 * // Props API — without navigation buttons
 * <Carousel
 *   showNavigation={false}
 *   items={[
 *     { key: '1', content: <img src="/slide-1.jpg" alt="Slide 1" /> },
 *     { key: '2', content: <img src="/slide-2.jpg" alt="Slide 2" /> },
 *   ]}
 * />
 *
 * @example
 * // Composition API
 * import { CarouselRoot, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@paalstack/react-ui';
 *
 * <CarouselRoot>
 *   <CarouselContent>
 *     <CarouselItem>Slide 1</CarouselItem>
 *     <CarouselItem>Slide 2</CarouselItem>
 *     <CarouselItem>Slide 3</CarouselItem>
 *   </CarouselContent>
 *   <CarouselPrevious />
 *   <CarouselNext />
 * </CarouselRoot>
 *
 * @example
 * // Composition API — partial-width slides
 * <CarouselRoot>
 *   <CarouselContent className="-ml-2">
 *     <CarouselItem className="basis-1/3 pl-2">Slide 1</CarouselItem>
 *     <CarouselItem className="basis-1/3 pl-2">Slide 2</CarouselItem>
 *     <CarouselItem className="basis-1/3 pl-2">Slide 3</CarouselItem>
 *   </CarouselContent>
 *   <CarouselPrevious />
 *   <CarouselNext />
 * </CarouselRoot>
 */
const Carousel: React.FC<CarouselProps> = ({
  items,
  showNavigation = true,
  contentClassName,
  itemClassName,
  previousProps,
  nextProps,
  ...props
}) => {
  return (
    <CarouselRoot {...props}>
      <CarouselContent className={contentClassName}>
        {items.map((item, index) => (
          <CarouselItem key={item.key ?? index} className={cn(itemClassName, item.className)}>
            {item.content}
          </CarouselItem>
        ))}
      </CarouselContent>
      {showNavigation && (
        <>
          <CarouselPrevious {...previousProps} />
          <CarouselNext {...nextProps} />
        </>
      )}
    </CarouselRoot>
  );
};
Carousel.displayName = 'Carousel';

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselRoot,
  useCarousel,
  type CarouselApi,
};
