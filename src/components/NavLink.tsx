import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  activeClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, href, ...props }, ref) => {
    const isActive = typeof window !== "undefined" && window.location.pathname === href;
    return (
      <a
        ref={ref}
        href={href}
        className={cn(className, isActive && "text-foreground font-semibold")}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
