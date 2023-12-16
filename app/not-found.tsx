'use client'

import { Button, NotFoundWrapper } from "@/components/ui/not-found/style";
import Link from "next/link";

export default function NotFound() {
  return (
    <NotFoundWrapper>
      <h2>Not Found Page</h2>
      <div style={{marginTop:"1rem"}}>
        <Link href="/" passHref legacyBehavior>
          <Button>Return To Home</Button>
        </Link>
      </div>
    </NotFoundWrapper>
  );
}