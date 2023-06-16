import Link from "next/link";
function BlogBanner() {
    return (
        <div className="flex flex-col lg:flex-row lg:space-x-5
        justify-between font-bold px-10 py-5 mb-10">
            <div>
                <img
                    src="/cropped-logo-currencyforte.png"
                    width={150}
                    height={150}
                    alt="logo"
                />
                <h2 className="mt-5 md:mt-5">
                    Welcome to{" "}
                    <span className="underline decoration-4 decoration-[#F7AB0A]">
                        Every Investor's
                    </span>{" "}
                    favorite blog on the Internet
                </h2>
            </div>

            <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
                Business insights | The latest in technology | Cryptocurrencies
                & More!
            </p>
        </div>
    );
}

export default BlogBanner;