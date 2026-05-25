import { forwardRef, useRef, useState } from 'react';

import type React from 'react';

import { createPortal } from 'react-dom';

import { useIsomorphicEffect } from '@/hooks/use-isomorphic-effect';
import { assignRef } from '@/shared/utils';

const createPortalNode = (props: React.ComponentPropsWithoutRef<'div'>) => {
  const node = document.createElement('div');
  node.setAttribute('data-portal', 'true');
  if (typeof props.className === 'string') {
    node.classList.add(...props.className.split(' '));
  }

  if (typeof props.style === 'object') {
    Object.assign(node.style, props.style);
  }

  if (typeof props.id === 'string') {
    node.setAttribute('id', props.id);
  }

  return node;
};

export interface PortalProps extends React.ComponentPropsWithoutRef<'div'> {
  /** Portal children, for example, custom modal or popover */
  children: React.ReactNode;

  /** Element inside which portal should be created, by default a new div element is created and appended to the `document.body` */
  target?: HTMLElement | string;
}

/**
 * Portal Component
 *
 * Renders children into a different part of the DOM tree (portal).
 * By default renders to document.body, but can target any element.
 *
 * @example
 * // Basic portal
 * import { Portal } from '@paalstack/react-ui';
 *
 * <Portal>
 *   <div>Content rendered in body</div>
 * </Portal>
 *
 * @example
 * // Modal overlay
 * <Portal>
 *   <div className="fixed inset-0 bg-black/50 z-50">
 *     <div className="bg-white p-6 rounded-lg">
 *       Modal content
 *     </div>
 *   </div>
 * </Portal>
 *
 * @example
 * // Target specific element
 * <Portal target="#modal-root">
 *   <div>Rendered in #modal-root</div>
 * </Portal>
 *
 * @example
 * // Target DOM element
 * const container = document.getElementById('portal-container');
 * <Portal target={container}>
 *   <div>Content</div>
 * </Portal>
 *
 * @example
 * // Tooltip
 * <Portal>
 *   <div className="fixed top-0 left-0 z-50">
 *     Tooltip content
 *   </div>
 * </Portal>
 *
 * @example
 * // Notification
 * <Portal>
 *   <div className="fixed top-4 right-4 z-50">
 *     <div className="bg-green-500 text-white p-4 rounded">
 *       Success notification
 *     </div>
 *   </div>
 * </Portal>
 *
 * @tip Default target is document.body
 * @tip Use target prop to render elsewhere
 * @tip Ideal for modals, tooltips, and overlays
 * @tip Automatically cleans up on unmount
 * @tip SSR-safe with useIsomorphicEffect
 */
export const Portal = forwardRef<HTMLDivElement, PortalProps>((props, ref) => {
  const { children, target, ...others } = props;

  const [mounted, setMounted] = useState(false);
  const nodeRef = useRef<HTMLElement | null>(null);

  useIsomorphicEffect(() => {
    setMounted(true);
    nodeRef.current = !target
      ? createPortalNode(others)
      : typeof target === 'string'
        ? document.querySelector(target)
        : target;

    if (!nodeRef.current) return;
    assignRef(ref, nodeRef.current as HTMLDivElement);

    if (!target && nodeRef.current) {
      document.body.appendChild(nodeRef.current);
    }

    return () => {
      if (!target && nodeRef.current) {
        document.body.removeChild(nodeRef.current);
      }
    };
  }, [target]);

  if (!mounted || !nodeRef.current) {
    return null;
  }

  return createPortal(<>{children}</>, nodeRef.current);
});

Portal.displayName = 'Portal';
