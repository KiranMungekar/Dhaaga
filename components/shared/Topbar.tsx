import Link from "next/link";
import Image from "next/image";
import { OrganizationSwitcher, SignOutButton, SignedIn  } from "@clerk/nextjs";
import { dark } from "@clerk/themes"
function Topbar() {
  return (
    <nav className='topbar'>
      <Link href='/' className='flex item-center gap-4'>
        <Image src={"/assets/logo.svg"} alt='logo' width={28} height={28} />
        <p className='text-2xl font-semibold text-slate-50 md:visible'>
          Dhaaga
        </p>
      </Link>
      <div className='flex item-center gap-1'>
        <div className='block md:hidden'>
          <SignedIn>
            <SignOutButton>
              <div className='flex cursor-pointer'>
                <Image
                  src='/assets/logout.svg'
                  alt='logout'
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
        <>
          <OrganizationSwitcher
            appearance={{
              baseTheme: dark,
              elements: {
                organizationSwitcherTrigger: "px-4 py-2",
              },
            }}
          />
        </>
      </div>
    </nav>
  )
}

export default Topbar;