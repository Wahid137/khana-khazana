"use client"
import Link from "next/link";
import { useParams } from "next/navigation";


const NotFound = ({ params }) => {
    const router = useParams();

    return (
        <div className="text-center">
            <h1 className="my-8 text-3xl font-bold">This movie with {router?.id} id was not found!</h1>
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