import Link from "next/link";

export default function Home() {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-900">
            <h1 className="text-6xl font-bold text-white">
                Welcome to ShipTrack
            </h1>
            <Link
                href="/signup"
                className="mt-10 px-8 py-4 rounded-md text-white bg-blue-700 hover:bg-blue-800"
            >
                Sign Up
            </Link>
        </div>
    );
}
