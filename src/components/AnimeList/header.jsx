import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="py-4 flex justify-between items-center text-color-light-100">
      <h1 className="text-2xl font-bold ">{title}</h1>
      {linkHref && linkTitle ? (
        <Link href={linkHref} className="md:text-lg text-md underline text-color-primary hover:text-color-accent transition-all">
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
