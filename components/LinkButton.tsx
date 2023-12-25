import { Link } from "lucide-react";
import { Button } from "./ui/button";

export default function LinkButton({ children }) {

  return <>
    <Button asChild>
      <Link>{children}</Link>
    </Button>
  </>
}
