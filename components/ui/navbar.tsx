"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { ThemeChanger } from "./theme-changer";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.7rem)] left-1/2 transform -translate-x-1/2">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export type MenuButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export const MenuButton = ({ children, onClick }: MenuButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="text-black dark:text-white hover:opacity-[0.9] cursor-pointer"
    >
      {children}
    </button>
  );
};

export type MenuLinkProps = {
  children: React.ReactNode;
  href: string;
};

export const MenuLink = ({ children, href }: MenuLinkProps) => {
  return (
    <Link href={href} className="text-black dark:text-white hover:opacity-[0.9] cursor-pointer">
      {children}
    </Link>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className={cn(
        "relative rounded-full flex justify-center space-x-4 px-8 py-6  z-[5000] items-center",
        "border border-transparent dark:border-white/[0.2] dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
      )}
    >
      {children}
    </nav>
  );
};

export type ProductItemProps = {
  title: string;
  description: string;
  href: string;
  src: string;
};

export const ProductItem = ({ title, description, href, src, }: ProductItemProps) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export type HoveredLinkProps = {
  children: React.ReactNode;
  href: string;
  rest?: any;
};

export const HoveredLink = ({ children, href, ...rest }: HoveredLinkProps) => {
  return (
    <Link
      href={href}
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black "
    >
      {children}
    </Link>
  );
};

export type NavbarProps = {
  className?: string;
  links?: HoveredLinkProps[];
  products?: ProductItemProps[];
};

export function Navbar({ className, links, products }: NavbarProps) {
  const [active, setActive] = useState<string | null>(null);

  const linksData = links && (
    <>
      {links.map((link, i) => (
        <HoveredLink key={i} {...link} />
      ))}
    </>
  )

  const productsData = products && (
    <MenuItem setActive={setActive} active={active} item="Products">
      <div className="  text-sm grid grid-cols-2 gap-10 p-4">
        {products.map((product, i) => (
          <ProductItem key={i} {...product} />
        ))}
      </div>
    </MenuItem>
  )

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <ThemeChanger />
        <MenuLink href="/">Home</MenuLink>
        <MenuLink href="/about">About</MenuLink>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            {linksData}
          </div>
        </MenuItem>
        {productsData}
      </Menu>
    </div>
  );
}
