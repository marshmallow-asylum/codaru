import {
    SignedIn,
    SignedOut,
    RedirectToSignIn,
    UserProfile
} from "@clerk/nextjs";

export default function Dashboard() {
    return (
        <>
            <SignedIn>
                <div className="flex w-full h-screen justify-between items-center">
                    <div className="flex flex-1 h-screen items-center justify-center flex-col">
                        <a className="flex items-center justify-center mb-5" href="/">
                            <img
                                className="w-15 h-15 mr-5"
                                src="/assets/images/logo.svg"
                                alt="codaru logo"
                            />
                            <span className="font-[league spartan] text-5xl font-bold">
                                codaru
                            </span>
                        </a>
                        <UserProfile routing="hash" />
                    </div>
                    <img
                        className="w-1/2 ml-[-10vw]"
                        loading="lazy"
                        src="/assets/images/cottage.webp"
                        alt="retrofuturistic cottage overgrown with plants"
                    />
                </div>
            </SignedIn>
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
        </>
    );
}