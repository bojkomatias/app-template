/**
 * TODO: Update this component to use your client-side framework's link
 * component. We've provided examples of how to do this for Next.js, Remix, and
 * Inertia.js in the Catalyst documentation:
 *
 * https://catalyst.tailwindui.com/docs#client-side-router-integration
 */

import * as Headless from "@headlessui/react";
import React, { forwardRef, ReactNode } from "react";
import { Link as TanStackLink, LinkProps } from "@tanstack/react-router";

export const Link = forwardRef(function Link(
  props: { href?: string } & LinkProps,
  ref: React.ForwardedRef<HTMLAnchorElement>,
) {
  return (
    <Headless.DataInteractive>
      {"href" in props ? (
        <a {...props} ref={ref}>
          {props.children as ReactNode}
        </a>
      ) : (
        <TanStackLink {...props} ref={ref} />
      )}
    </Headless.DataInteractive>
  );
});
