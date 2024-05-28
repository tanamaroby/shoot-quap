"use client";
import Image from "next/image";
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

const components: ComponentProps[] = [{ title: "Home", href: "/" }];

export default function Navbar() {
  return (
    <div className="flex flex-row">
      <NavigationMenu className="py-4 gap-x-4 justify-between min-w-full">
        <Image src="/logo.svg" alt="logo" height={100} width={100} />
        <NavigationMenuList>
          {components.map((component) => {
            return (
              <NavigationMenuItem key={component.href}>
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
    </div>
  );
}
