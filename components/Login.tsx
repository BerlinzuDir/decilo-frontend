import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { FunctionComponent } from "react";

const Login: FunctionComponent = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  console.log(session?.user);
  return (
    <div>
      {!loading && (
        <>
          {!session && (
            <a
              href={`/api/auth/signin`}
              className={"btn btn-primary my-2 my-sm-0"}
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              Sign in
            </a>
          )}
          {session?.user && (
            <div className={"row align-items-center justify-content-end"}>
              {/*{session.user.image && (*/}
              {/*  <div className={"col-2"}>*/}
              {/*    <Image*/}
              {/*      className={"rounded-circle"}*/}
              {/*      src={session.user.image}*/}
              {/*      width={32}*/}
              {/*      height={32}*/}
              {/*    />*/}
              {/*  </div>*/}
              {/*)}*/}

              <div className={"col-5"}>
                <span className={"text-white fw-bold text-nowrap"}>
                  {session.user.name ?? session.user.email}
                </span>
              </div>

              <div className={"col-5 pe-4"}>
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
          )}
        </>
      )}
    </div>
  );
};

export default Login;
