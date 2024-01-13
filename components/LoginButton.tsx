'use client'

import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import Link from "next/link";

type Locales = {
  signIn: string;
  signOut: string;
  profile: string;
  settings: string;
}

function getNameInitials(name: string) {
  let separated = name.split(' ');

  let firstLetters = separated.map(s => s[0]);

  return firstLetters.join("");
}

export default function LoginButton({ btnContents }: { btnContents: Locales }) {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="mx-1 btn">
                <AvatarImage src={session.user.image} />
                <AvatarFallback>{getNameInitials(session.user.name)}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <div className="flex flex-row space-x-2">
                  <p className="text-sm self-center font-medium leading-none">{session.user.name}</p>
                  <Badge className="m-0" variant="outline"><span className='text-xs'>{session.user.role}</span></Badge>
                </div>
                <p className="text-xs leading-none text-muted-foreground">
                  {session.user.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem disabled>
                <Link className={'flex flex-row justify-between w-full'} href={'/user'}>
                  {btnContents.profile}
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem disabled>
                <Link className={'flex flex-row justify-between w-full'} href={'/user/settings'}>
                  {btnContents.settings}
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => signOut()}>
              {btnContents.signOut}
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </>
    )
  }
  return (
    <>
      <button className="mx-1 btn" onClick={() => signIn()}>{btnContents.signIn}</button>
    </>
  )
}
