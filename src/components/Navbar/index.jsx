import Link from "next/link";
import InputSearch from "./InputSearch";
import UserActionButton from "./UserActionButton";

export const Navbar = () => {
  return (
    <nav className="bg-color-primary">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-fit bg-color-dark-200 md:bg-opacity-0 flex justify-between items-center px-4 py-2">
          <Link href="/" className="font-bold text-2xl md:text-color-dark-200 text-color-primary">
            Wiboo<span className="text-color-light-100">Mania</span>
          </Link>
          <div className="md:hidden block">
            <UserActionButton />
          </div>
        </div>

        <div className="p-4 w-full md:w-fit">
          <InputSearch />
        </div>

        <div className="hidden md:block px-4 py-2">
          <UserActionButton />
        </div>
      </div>
    </nav>
  );
};
