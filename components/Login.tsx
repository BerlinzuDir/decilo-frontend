import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { FunctionComponent } from "react";

type User = {
  name: string
  email: string
  image: string
}

const Login: FunctionComponent = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const user = session?.user as User
  console.log(user);
  return (
    <div className={'container'}>
      {!loading && (
        <>
          {!session &&
              <SignInButton signIn={signIn}/>
          }
          {session?.user &&
            <SignedInUser signOut={signOut} user={user}/>
          }
        </>
      )}
    </div>
  );
};

interface SignInProps {
  signIn: () => Promise<void>
}

const SignInButton: FunctionComponent<SignInProps> = ({signIn}) => {
  return (<a
      href={`/api/auth/signin`}
      className={"btn btn-primary my-2 my-sm-0"}
      onClick={(e) => {
        e.preventDefault();
        signIn();
      }}
  >
    Sign in
  </a>)
}

interface SignOutProps {
  signOut: () => Promise<void>
  user: User
}

const SignedInUser: FunctionComponent<SignOutProps> = ({signOut, user}) => {
  return (
    <div className={"row align-items-center"}>
      {user.image && (
        <div className={"col-2 px-1  d-flex justify-content-end"}>
          <Image
            className={"rounded-circle"}
            src={user.image}
            layout={'fixed'}
            width={37}
            height={37}
          />
        </div>
      )}

      <div className={"col-5 d-flex justify-content-center"}>
                    <span className={"text-white fw-bold text-nowrap"}>
                      {user.name ?? user.email}
                    </span>
      </div>

      <div className={"col-5 d-flex justify-content-start"}>
        <a
            href={`/api/auth/signout`}
            className={"btn btn-light text-nowrap"}
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
        >
          Sign out
        </a>
      </div>
    </div>
  )
}

export default Login;
