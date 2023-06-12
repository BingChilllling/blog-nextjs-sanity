import Image from "next/image";
import Link from "next/link";

function BlogHeader() {
    return (
        <header className="flex items-center justify-between 
        space-x-2 font-bold px-10 py-5">
            <Link href="/">
                <img
                    src="/Currencyforte-logo.png"
                    width={250}
                    height={250}
                    alt="logo"
                />
            </Link>
            <div className="absolute right-11">
                <Link
                    href="/"
                    className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center"
                >
                Subscribe to the Currencyforte blog
                </Link>
            </div>
        </header>
    );
}



export default BlogHeader;
