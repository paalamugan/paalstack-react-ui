import { Separator as SeparatorPrimitive } from '@base-ui/react/separator';

import { cn } from '@/shared/lib';

/**
 * Separator Component
 *
 * Visually or semantically separates content.
 * Perfect for dividing sections, creating visual hierarchy, and improving content organization.
 *
 * @example
 * // Basic horizontal separator
 * import { Separator } from '@paalstack/react-ui';
 *
 * <div>
 *   <p>Content above</p>
 *   <Separator />
 *   <p>Content below</p>
 * </div>
 *
 * @example
 * // Vertical separator
 * <div className="flex items-center gap-4">
 *   <span>Item 1</span>
 *   <Separator orientation="vertical" className="h-6" />
 *   <span>Item 2</span>
 *   <Separator orientation="vertical" className="h-6" />
 *   <span>Item 3</span>
 * </div>
 *
 * @example
 * // In a navigation menu
 * <nav className="flex items-center gap-4">
 *   <a href="/">Home</a>
 *   <Separator orientation="vertical" className="h-4" />
 *   <a href="/about">About</a>
 *   <Separator orientation="vertical" className="h-4" />
 *   <a href="/contact">Contact</a>
 * </nav>
 *
 * @example
 * // In a card
 * <Card>
 *   <CardHeader>
 *     <CardTitle>User Profile</CardTitle>
 *   </CardHeader>
 *   <Separator />
 *   <CardContent>
 *     <p>Profile information here</p>
 *   </CardContent>
 *   <Separator />
 *   <CardFooter>
 *     <Button>Edit Profile</Button>
 *   </CardFooter>
 * </Card>
 *
 * @example
 * // Section divider with text
 * <div className="my-8">
 *   <div className="relative">
 *     <Separator />
 *     <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-sm text-muted-foreground">
 *       or
 *     </span>
 *   </div>
 * </div>
 *
 * @example
 * // In a dropdown menu
 * <DropdownMenu>
 *   <DropdownMenuTrigger>Options</DropdownMenuTrigger>
 *   <DropdownMenuContent>
 *     <DropdownMenuItem>Edit</DropdownMenuItem>
 *     <DropdownMenuItem>Duplicate</DropdownMenuItem>
 *     <Separator className="my-1" />
 *     <DropdownMenuItem className="text-danger">Delete</DropdownMenuItem>
 *   </DropdownMenuContent>
 * </DropdownMenu>
 *
 * @example
 * // Sidebar divider
 * <aside className="w-64 p-4">
 *   <nav>
 *     <a href="/">Dashboard</a>
 *     <a href="/projects">Projects</a>
 *   </nav>
 *   <Separator className="my-4" />
 *   <nav>
 *     <a href="/settings">Settings</a>
 *     <a href="/profile">Profile</a>
 *   </nav>
 * </aside>
 *
 * @example
 * // Custom styling
 * <Separator className="bg-primary" />
 * <Separator className="bg-gradient-to-r from-transparent via-primary to-transparent" />
 *
 * @example
 * // Between list items
 * <ul className="divide-y">
 *   {items.map((item, index) => (
 *     <React.Fragment key={item.id}>
 *       <li className="py-3">{item.name}</li>
 *       {index < items.length - 1 && <Separator />}
 *     </React.Fragment>
 *   ))}
 * </ul>
 *
 * @example
 * // Login form with social divider
 * <form>
 *   <Input label="Email" type="email" />
 *   <Input label="Password" type="password" />
 *   <Button type="submit">Sign In</Button>
 *
 *   <div className="relative my-6">
 *     <Separator />
 *     <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4 text-sm text-muted-foreground">
 *       Or continue with
 *     </span>
 *   </div>
 *
 *   <Button variant="outline" className="w-full">
 *     <GoogleIcon className="mr-2" /> Sign in with Google
 *   </Button>
 * </form>
 *
 * @example
 * // Toolbar groups
 * <div className="flex items-center gap-2 p-2 border rounded">
 *   <IconButton icon={<BoldIcon />} />
 *   <IconButton icon={<ItalicIcon />} />
 *   <IconButton icon={<UnderlineIcon />} />
 *
 *   <Separator orientation="vertical" className="h-6 mx-1" />
 *
 *   <IconButton icon={<AlignLeftIcon />} />
 *   <IconButton icon={<AlignCenterIcon />} />
 *   <IconButton icon={<AlignRightIcon />} />
 * </div>
 */
const Separator = ({ className, orientation = 'horizontal', ...props }: SeparatorPrimitive.Props) => (
  <SeparatorPrimitive
    data-slot="separator"
    data-qa="separator"
    orientation={orientation}
    className={cn(
      'shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch',
      className,
    )}
    {...props}
  />
);
Separator.displayName = 'Separator';

export { Separator };
