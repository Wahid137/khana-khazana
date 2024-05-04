import RegistrationForm from "../components/auth/RegistrationForm";

const RegistrationPage = () => {
    return (
        <section className="h-screen grid place-items-center">
            <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
                <h4 className="font-bold text-2xl">Sign Up</h4>
                <RegistrationForm />

                <p className="text-center text-xs text-gray-600">Or</p>

                <a href="./login.html" className="underline text-sm mx-auto block text-gray-600 mt-4 text-center">
                    Login
                </a>

            </div>
        </section>
    );
};

export default RegistrationPage;