"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

interface ComponentProps {
  title: string;
  href: string;
}

const components: ComponentProps[] = [
  { title: "Home", href: "/" },
  { title: "Shoots", href: "/shoots" },
  { title: "Book", href: "/create" },
];

export default function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {components.map((component) => {
          return (
            <NavigationMenuItem>
              <Link href={component.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {component.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
