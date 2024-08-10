import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { buttonVariants } from "~/components/ui/button"

export function TopNav() {
    return (
      <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
        <div><Link className={buttonVariants({variant: "ghost"})} href="/downtime">Downtime</Link></div>
        <div><Link className={buttonVariants({variant: "ghost"})} href="/leads">Leads</Link></div>
        <div><Link className={buttonVariants({variant: "ghost"})} href="/characters">Characters</Link></div>
        <div><Link className={buttonVariants({variant: "ghost"})} href="">Vault</Link></div>
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    );
  }