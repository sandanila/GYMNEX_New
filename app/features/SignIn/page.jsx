import SignInLayout from "@/components/features/signIn/SignInLayout/SignInLayout";
import BackgroundImage from "@/components/features/signIn/BackgroundImage";
function SignIn() {
  return (
    <main className="relative h-dvh w-full overflow-hidden">
      <BackgroundImage />
      <div>
        <SignInLayout />
      </div>
    </main>
  );
}

export default SignIn;
