import { ScrollArea as ScrollAreaPrimitive } from '@base-ui/react/scroll-area';

import { cn } from '@/shared/lib';

/**
 * ScrollArea Component
 *
 * Augments native scroll functionality for custom, cross-browser styling.
 * Perfect for creating consistent scrollable areas with custom scrollbar styling.
 *
 * @example
 * // Basic usage
 * import { ScrollArea } from '@paalstack/react-ui';
 *
 * <ScrollArea className="h-72 w-full rounded border">
 *   <div className="p-4">
 *     <p>Scrollable content goes here...</p>
 *     <p>More content...</p>
 *     // Long content *
 *   </div>
 * </ScrollArea>
 *
 * @example
 * // Tags list with horizontal scroll
 * <ScrollArea className="w-96 whitespace-nowrap">
 *   <div className="flex gap-2 p-4">
 *     {tags.map(tag => (
 *       <Badge key={tag} variant="outline">{tag}</Badge>
 *     ))}
 *   </div>
 *   <ScrollBar orientation="horizontal" />
 * </ScrollArea>
 *
 * @example
 * // Sidebar navigation
 * <ScrollArea className="h-screen w-64">
 *   <nav className="p-4 space-y-2">
 *     <a href="/" className="block p-2 hover:bg-accent rounded">Dashboard</a>
 *     <a href="/projects" className="block p-2 hover:bg-accent rounded">Projects</a>
 *     <a href="/team" className="block p-2 hover:bg-accent rounded">Team</a>
 *     // Many more links *
 *   </nav>
 * </ScrollArea>
 *
 * @example
 * // Chat messages
 * <ScrollArea className="h-96 w-full rounded border">
 *   <div className="p-4 space-y-4">
 *     {messages.map(message => (
 *       <div key={message.id} className="flex gap-3">
 *         <Avatar src={message.avatar} fallback={message.initials} />
 *         <div>
 *           <p className="font-medium">{message.author}</p>
 *           <p className="text-sm">{message.text}</p>
 *           <p className="text-xs text-muted-foreground">{message.time}</p>
 *         </div>
 *       </div>
 *     ))}
 *   </div>
 * </ScrollArea>
 *
 * @example
 * // Code viewer
 * <ScrollArea className="h-96 w-full rounded border">
 *   <pre className="p-4">
 *     <code>{sourceCode}</code>
 *   </pre>
 * </ScrollArea>
 *
 * @example
 * // Product description with scroll
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Product Details</CardTitle>
 *   </CardHeader>
 *   <CardContent>
 *     <ScrollArea className="h-60">
 *       <div className="space-y-4 pr-4">
 *         <section>
 *           <h3 className="font-medium mb-2">Description</h3>
 *           <p className="text-sm text-muted-foreground">{description}</p>
 *         </section>
 *         <section>
 *           <h3 className="font-medium mb-2">Specifications</h3>
 *           <ul className="text-sm space-y-1">
 *             {specs.map(spec => <li key={spec}>{spec}</li>)}
 *           </ul>
 *         </section>
 *       </div>
 *     </ScrollArea>
 *   </CardContent>
 * </Card>
 *
 * @example
 * // Notifications panel
 * <ScrollArea className="h-80 w-96">
 *   <div className="p-4 space-y-3">
 *     <h3 className="font-semibold">Notifications</h3>
 *     {notifications.map(notif => (
 *       <div key={notif.id} className="p-3 border rounded hover:bg-accent">
 *         <p className="font-medium text-sm">{notif.title}</p>
 *         <p className="text-xs text-muted-foreground">{notif.message}</p>
 *         <p className="text-xs text-muted-foreground mt-1">{notif.time}</p>
 *       </div>
 *     ))}
 *   </div>
 * </ScrollArea>
 *
 * @example
 * // File explorer
 * <ScrollArea className="h-96 w-64 border rounded">
 *   <div className="p-2">
 *     {files.map(file => (
 *       <div key={file.id} className="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
 *         <FileIcon className="size-4" />
 *         <span className="text-sm">{file.name}</span>
 *       </div>
 *     ))}
 *   </div>
 * </ScrollArea>
 *
 * @example
 * // Horizontal scroll gallery
 * <ScrollArea className="w-full whitespace-nowrap rounded-lg border">
 *   <div className="flex gap-4 p-4">
 *     {images.map(image => (
 *       <img
 *         key={image.id}
 *         src={image.url}
 *         alt={image.alt}
 *         className="h-48 w-auto rounded"
 *       />
 *     ))}
 *   </div>
 *   <ScrollBar orientation="horizontal" />
 * </ScrollArea>
 *
 * @example
 * // Long form content
 * <ScrollArea className="h-[600px] w-full max-w-2xl">
 *   <article className="p-6 space-y-4">
 *     <h1 className="text-3xl font-bold">{article.title}</h1>
 *     <p className="text-muted-foreground">{article.date}</p>
 *     <div className="prose">{article.content}</div>
 *   </article>
 * </ScrollArea>
 *
 * @example
 * // Multi-select list with scroll
 * <ScrollArea className="h-64 w-full border rounded">
 *   <div className="p-2">
 *     {options.map(option => (
 *       <div key={option.id} className="flex items-center gap-2 p-2">
 *         <Checkbox
 *           checked={selected.includes(option.id)}
 *           onCheckedChange={() => toggleOption(option.id)}
 *         />
 *         <span className="text-sm">{option.label}</span>
 *       </div>
 *     ))}
 *   </div>
 * </ScrollArea>
 *
 * @example
 * // Activity feed
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Recent Activity</CardTitle>
 *   </CardHeader>
 *   <CardContent className="p-0">
 *     <ScrollArea className="h-80">
 *       <div className="p-4 space-y-3">
 *         {activities.map(activity => (
 *           <div key={activity.id} className="flex gap-3">
 *             <div className="size-2 mt-2 rounded-full bg-primary" />
 *             <div>
 *               <p className="text-sm">{activity.description}</p>
 *               <p className="text-xs text-muted-foreground">{activity.time}</p>
 *             </div>
 *           </div>
 *         ))}
 *       </div>
 *     </ScrollArea>
 *   </CardContent>
 * </Card>
 *
 * @example
 * // Modal with scrollable content
 * <Dialog open={open} onOpenChange={setOpen}>
 *   <DialogContent className="max-h-[80vh]">
 *     <DialogHeader>
 *       <DialogTitle>Terms and Conditions</DialogTitle>
 *     </DialogHeader>
 *     <ScrollArea className="h-96">
 *       <div className="pr-4 space-y-4">
 *         <p>{termsContent}</p>
 *       </div>
 *     </ScrollArea>
 *     <DialogFooter>
 *       <Button>Accept</Button>
 *     </DialogFooter>
 *   </DialogContent>
 * </Dialog>
 *
 * @example
 * // Both vertical and horizontal scroll
 * <ScrollArea className="h-72 w-full">
 *   <div style={{ width: '2000px', height: '1000px' }} className="p-4">
 *     <p>Content that requires both horizontal and vertical scrolling</p>
 *   </div>
 *   <ScrollBar orientation="horizontal" />
 * </ScrollArea>
 */
const ScrollArea = ({ className, children, ...props }: ScrollAreaPrimitive.Root.Props) => (
  <ScrollAreaPrimitive.Root
    data-slot="scroll-area"
    data-qa="scroll-area"
    className={cn('relative', className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport
      data-slot="scroll-area-viewport"
      data-qa="scroll-area-viewport"
      className="size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1"
    >
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner data-qa="scroll-area-corner" />
  </ScrollAreaPrimitive.Root>
);
ScrollArea.displayName = 'ScrollArea';

const ScrollBar = ({ className, orientation = 'vertical', ...props }: ScrollAreaPrimitive.Scrollbar.Props) => (
  <ScrollAreaPrimitive.Scrollbar
    data-slot="scroll-area-scrollbar"
    data-qa="scroll-area-scrollbar"
    data-orientation={orientation}
    orientation={orientation}
    className={cn(
      'flex touch-none p-px transition-colors select-none data-horizontal:h-2.5 data-horizontal:flex-col data-horizontal:border-t data-horizontal:border-t-transparent data-vertical:h-full data-vertical:w-2.5 data-vertical:border-l data-vertical:border-l-transparent',
      className,
    )}
    {...props}
  >
    <ScrollAreaPrimitive.Thumb
      data-slot="scroll-area-thumb"
      data-qa="scroll-area-thumb"
      className="relative flex-1 rounded-full bg-border"
    />
  </ScrollAreaPrimitive.Scrollbar>
);
ScrollBar.displayName = 'ScrollBar';

export { ScrollArea, ScrollBar };
