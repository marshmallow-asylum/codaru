import { SignUp } from "@clerk/nextjs";
import Head from "next/head";

export default function SignUpPage() {
    return (
        <>
            <Head>
                <title>Sign Up | codaru</title>
            </Head>
            <div className="flex w-full h-screen justify-between items-center">
                <img
                    className="hidden md:block w-1/2 ml-[-10vw]"
                    loading="lazy"
                    src="/assets/images/cog.webp"
                    alt="retrofuturistic cog overgrown with plants"
                />
                <div className="flex flex-1 h-screen items-center justify-center flex-col">
                    <a className="flex items-center justify-center mb-5" href="/">
                        <img
                            className="w-15 h-15 mr-5"
                            src="/assets/images/logo.svg"
                            alt="codaru logo"
                        />
                        <span className="font-[League Spartan Variable] text-5xl font-bold">codaru</span>
                    </a>
                    <SignUp routing="hash"/>
                </div>
            </div>
        </>
    );
}