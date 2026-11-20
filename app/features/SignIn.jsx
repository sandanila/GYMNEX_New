import SignInLayout from "@/components/features/signIn/SignInLayout";
import BackgroundImage from "@/components/features/signIn/BackgroundImage";
function SignIn() {
  return (
    <main className="relative h-dvh w-full overflow-x-hidden">
      <div><BackgroundImage/></div>
      <div><SignInLayout/></div>
    </main>
  )
}

export default SignIn
