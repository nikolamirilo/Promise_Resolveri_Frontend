import { SignIn, SignUp } from "@clerk/nextjs"

const Auth = ({ params }) => {
  const action = params.action
  if (action == "sign-up") {
    return (
      <div className="flex w-full items-center justify-center py-10">
        <SignUp afterSignUpUrl="/registration" />
      </div>
    )
  } else if (action == "sign-in") {
    return (
      <div className="flex w-full items-center justify-center py-10">
        <SignIn afterSignInUrl="/" />
      </div>
    )
  }
}

export default Auth
