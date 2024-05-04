import Login from "../components/auth/Login";

const LoginPage = () => {
    return (
        <section class="h-screen grid place-items-center">
            <div class="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
                <h4 class="font-bold text-2xl">Sign in</h4>
                <Login />

                <p class="text-center text-xs text-gray-600">Or</p>

                <a href="./register.html" class="underline text-sm mx-auto block text-gray-600 mt-4 text-center">
                    Create New Account
                </a>
            </div>
        </section>
    );
};

export default LoginPage;