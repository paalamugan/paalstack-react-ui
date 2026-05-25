import React from 'react';

import { cn } from '@/shared/lib';

/**
 * AspectRatio Component
 *
 * Displays content within a desired ratio.
 * Perfect for responsive images, videos, and maintaining consistent dimensions.
 *
 * @example
 * // Basic usage (16:9 aspect ratio)
 * import { AspectRatio } from '@paalstack/react-ui';
 *
 * <AspectRatio ratio={16 / 9}>
 *   <img src="/image.jpg" alt="Image" className="rounded object-cover" />
 * </AspectRatio>
 *
 * @example
 * // Square aspect ratio (1:1)
 * <AspectRatio ratio={1}>
 *   <img src="/avatar.jpg" alt="Avatar" className="rounded-full object-cover" />
 * </AspectRatio>
 *
 * @example
 * // Video player (16:9)
 * <AspectRatio ratio={16 / 9} className="bg-muted">
 *   <video controls className="size-full">
 *     <source src="/video.mp4" type="video/mp4" />
 *   </video>
 * </AspectRatio>
 *
 * @example
 * // YouTube embed
 * <AspectRatio ratio={16 / 9}>
 *   <iframe
 *     src="https://www.youtube.com/embed/VIDEO_ID"
 *     className="size-full"
 *     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
 *     allowFullScreen
 *   />
 * </AspectRatio>
 *
 * @example
 * // Product image card
 * <Card>
 *   <AspectRatio ratio={4 / 3}>
 *     <img
 *       src="/product.jpg"
 *       alt="Product"
 *       className="size-full object-cover"
 *     />
 *   </AspectRatio>
 *   <CardContent>
 *     <h3 className="font-semibold">{product.name}</h3>
 *     <p className="text-sm text-muted-foreground">${product.price}</p>
 *   </CardContent>
 * </Card>
 *
 * @example
 * // Portrait aspect ratio (9:16)
 * <AspectRatio ratio={9 / 16}>
 *   <img src="/portrait.jpg" alt="Portrait" className="rounded object-cover" />
 * </AspectRatio>
 *
 * @example
 * // Social media post (1:1)
 * <div className="max-w-md mx-auto">
 *   <AspectRatio ratio={1}>
 *     <img
 *       src="/social-post.jpg"
 *       alt="Post"
 *       className="size-full rounded object-cover"
 *     />
 *   </AspectRatio>
 *   <div className="p-4">
 *     <p>{post.caption}</p>
 *   </div>
 * </div>
 *
 * @example
 * // Image gallery grid
 * <div className="grid grid-cols-3 gap-4">
 *   {images.map(image => (
 *     <AspectRatio key={image.id} ratio={1} className="bg-muted">
 *       <img
 *         src={image.url}
 *         alt={image.alt}
 *         className="size-full rounded object-cover"
 *       />
 *     </AspectRatio>
 *   ))}
 * </div>
 *
 * @example
 * // Loading placeholder
 * <AspectRatio ratio={16 / 9} className="bg-muted">
 *   {isLoading ? (
 *     <div className="flex items-center justify-center size-full">
 *       <Loading />
 *     </div>
 *   ) : (
 *     <img src={imageUrl} alt="Content" className="size-full object-cover" />
 *   )}
 * </AspectRatio>
 *
 * @example
 * // Banner image (21:9 ultrawide)
 * <AspectRatio ratio={21 / 9}>
 *   <img
 *     src="/banner.jpg"
 *     alt="Banner"
 *     className="size-full object-cover"
 *   />
 * </AspectRatio>
 *
 * @example
 * // Map embed
 * <AspectRatio ratio={16 / 9} className="border rounded overflow-hidden">
 *   <iframe
 *     src="https://maps.google.com/..."
 *     className="size-full"
 *     loading="lazy"
 *   />
 * </AspectRatio>
 *
 * @example
 * // Thumbnail with overlay
 * <AspectRatio ratio={16 / 9} className="relative group">
 *   <img
 *     src="/thumbnail.jpg"
 *     alt="Video"
 *     className="size-full object-cover rounded"
 *   />
 *   <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
 *     <PlayIcon className="size-12 text-white" />
 *   </div>
 * </AspectRatio>
 *
 * @example
 * // Responsive images with different ratios
 * // Mobile: 1:1, Desktop: 16:9
 * <AspectRatio ratio={1} className="sm:hidden">
 *   <img src="/mobile.jpg" alt="Mobile view" className="size-full object-cover" />
 * </AspectRatio>
 * <AspectRatio ratio={16 / 9} className="hidden sm:block">
 *   <img src="/desktop.jpg" alt="Desktop view" className="size-full object-cover" />
 * </AspectRatio>
 */
export interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The desired aspect ratio (width / height).
   * @default 1
   */
  ratio?: number;
}

const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ ratio = 1, style, className, ...props }, ref) => (
    <div
      ref={ref}
      data-qa="aspect-ratio"
      data-slot="aspect-ratio"
      style={{ '--ratio': ratio, ...style } as React.CSSProperties}
      className={cn('relative aspect-(--ratio)', className)}
      {...props}
    />
  ),
);
AspectRatio.displayName = 'AspectRatio';

export { AspectRatio };
