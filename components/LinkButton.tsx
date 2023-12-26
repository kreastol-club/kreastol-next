import Link from "next/link";
import { Button } from "./ui/button";

export default function LinkButton({ children, href, ...props }: { children: React.ReactNode, href: string }) {

  return <>
    <Button asChild>
      <Link href={href} {...props}>{children}</Link>
    </Button>
  </>
}
