import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';

export function TopNav() {
    return (
      <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
        <div><Link href="/downtime">Downtime</Link></div>
        <div>Characters</div>
        <div>Vault</div>
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