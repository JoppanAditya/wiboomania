import Link from "next/link";
import { authUserSession } from "@/libs/auth-libs";
import Profile from "./Profile";

const UserActionButton = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Keluar" : "Masuk";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <>
      {user ? (
        <Profile user={user} />
      ) : (
        <Link href={actionURL} className="py-2 px-10 bg-color-dark-100 text-color-primary rounded-md hover:bg-color-accent hover:text-color-dark-100 transition-all">
          {actionLabel}
        </Link>
      )}
    </>
  );
};

export default UserActionButton;
