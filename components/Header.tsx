import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full bg-white z-50 shadow">
      <Link href="/">
        <Image
          src="https://img.icons8.com/?size=512&id=5BdTu8iP51BN&format=png"
          width={80}
          height={30}
          alt="Logo"
          style={{ marginLeft: 80 }}
        />
      </Link>

      <div className="flex items-center space-x-2.5 text-sm">
        <button className="button bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black">
          Log in
        </button>
        <button className="button bg-transparent border-blue-600 hover:bg-blue-600 hover:text-white hover:border-transparent">
          Sign up
        </button>
      </div>
    </header>
  );
}

export default Header;
