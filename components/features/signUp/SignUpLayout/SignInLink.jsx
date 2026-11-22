import Link from "next/link";

function SignInLink() {
  return (
    <div className="text-center mt-4">
      <p className="text-gray-400 text-sm">
        Already have an account?{" "}
        <Link
          href="/features/SignIn"
          className="text-purple-500 hover:text-purple-400 font-medium"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
}

export default SignInLink;
