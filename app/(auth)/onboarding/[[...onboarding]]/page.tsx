import AccountProfile from "../../../../components/forms/AccountProfile"
import { currentUser } from "@clerk/nextjs"

export default async function Page() {
  const user = await currentUser()
  const userInfo = { _id: "", name: "" }
  const userData = {
    id: user?.id || "",
    objectId: userInfo?._id || "",
    username: user?.username || "",
    name: userInfo?.name || user?.firstName,
    bio: userInfo?.bio || "",
    imageSrc: userInfo?.image || user?.imageUrl || "",
  }
  return (
    <>
      <main className='mx-auto flex max-w-3xl flex-col justify-start px-10 py-20'>
        <h1 className='head-text'>Onboarding</h1>
        <p className='mt-3 text-base-regular text-light-2'>
          {"Please complete your profile to use Dhaaga"}
        </p>
        <section className='mt-9 bg-dark-2 p-10'>
          <AccountProfile userData={userData} btnTitle={"Continue"} />
        </section>
      </main>
    </>
  )
}
