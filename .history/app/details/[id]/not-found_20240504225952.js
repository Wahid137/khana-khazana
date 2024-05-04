"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

const NotFound = () => {
    const router = useRouter();
    const { id } = router.query;

    // Check if the ID is provided and valid
    if (!id || !isValidObjectId(id)) {
        return (
            <div className="text-center">
                <h1 className="my-8 text-3xl font-bold">This movie was not found!</h1>
                <Link
                    className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center"
                    href="/"
                >
                    <span>Go Home</span>
                </Link>
            </div>
        );
    }

    // Render the "not found" page with the specific ID
    return (
        <div className="text-center">
            <h1 className="my-8 text-3xl font-bold">This movie with {id} id was not found!</h1>
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
