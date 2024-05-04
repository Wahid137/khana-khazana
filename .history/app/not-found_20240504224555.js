import Link from "next/link";

const NotFound = () => {
    return (
        <div className="text-center">
            <h1 className="my-8 text-3xl font-bold">Not Found!!</h1>
            <Link
                className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center"
                href="/"
            >

                <span>Go Home</span>
            </Link>
        </div>
    );
};

export default NotFound;