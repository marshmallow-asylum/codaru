import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export default function TermsPage () {
    return (
        <>
            <Head>
                <title>Terms of Service | codaru</title>
            </Head>
            <div className="flex justify-center items-center">
                <a className="flex items-center justify-center mb-5" href="/">
                    <img
                        className="w-15 h-15 mr-5"
                        src="/assets/images/logo.svg"
                        alt="codaru logo"
                    />
                    <span className="font-[League Spartan Variable] text-5xl font-bold">codaru</span>
                </a>
            </div>
            <div className="flex justify-center items-start flex-col">
                <h1 className="text-2xl font-bold font-[League Spartan Variable]">Terms of Service</h1>
                <p className="text-sm font-[Outfit Variable] ml-2">Last Updated: March 16, 2025</p> <br />
                <p className="text-sm font-[Outfit Variable] ml-2">
                    Welcome to codaru.org ("we," "our," or "us"). By using our website and services, you agree to these Terms of Service ("ToS"). If you do not agree, please do not use our services.
                </p>
                <ol className="list-decimal pl-5 leading-10">
                    <li>
                        <h2 className="text-xl font-bold font-[League Spartan Variable]">Acceptance of Terms</h2>
                        <p className="text-sm font-[Outfit Variable] ml-1/2">
                            By accessing or using codaru.org ("Service"), you agree to be bound by these Terms. If you are creating an account on behalf of an entity, you represent that you have the authority to do so.
                        </p>
                    </li>
                    <li>
                        <h2 className="text-xl font-bold font-[League Spartan Variable]">Eligibility</h2>
                        <p className="text-sm font-[Outfit Variable]">
                            You must be at least 13 years old to use our Service. By using our Service, you affirm that you meet this requirement.
                        </p>
                    </li>
                    <li>
                        <h2 className="text-xl font-bold font-[League Spartan Variable]">Accounts and Usernames</h2>
                        <ul className="list-disc pl-5 leading-6">
                            <li>
                                <p className="text-sm font-[Outfit Variable]">You may create an account using Discord, GitHub, or email/password.</p>
                            </li>
                            <li>
                                <p className="text-sm font-[Outfit Variable]">You are responsible for maintaining the security of your account.</p>
                            </li>
                            <li>
                                <p className="text-sm font-[Outfit Variable]">Usernames must not impersonate others, contain offensive content, or violate intellectual property rights.</p>
                            </li>
                            <li>
                                <p className="text-sm font-[Outfit Variable]">We collect IP addresses as part of account creation and service usage.</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h2 className="text-xl font-bold font-[League Spartan Variable]">Use of Service</h2>
                        <ul className="list-disc pl-5">
                            <li>
                                <p className="text-sm font-[Outfit Variable]">You agree not to use the Service for unlawful or abusive activities.</p>
                            </li>
                            <li>
                                <p className="text-sm font-[Outfit Variable]">We may modify, suspend, or terminate accounts that violate these Terms.</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h2 className="text-xl font-bold font-[League Spartan Variable]">Termination</h2>
                        <p className="text-sm font-[Outfit Variable]">
                            We reserve the right to suspend or terminate your access at our discretion if you violate these Terms.
                        </p>
                    </li>
                    <li>
                        <h2 className="text-xl font-bold font-[League Spartan Variable]">Limitation of Liability</h2>
                        <p className="text-sm font-[Outfit Variable]">
                            To the fullest extent permitted by law, we are not liable for any indirect, incidental, or consequential damages resulting from your use of the Service.
                        </p>
                    </li>
                    <li>
                        <h2 className="text-xl font-bold font-[League Spartan Variable]">Changes to These Terms</h2>
                        <p className="text-sm font-[Outfit Variable]">
                            We may update these Terms at any time. Continued use after changes means you accept the new Terms.
                        </p>
                    </li>
                    <li>
                        <h2 className="text-xl font-bold font-[League Spartan Variable]">Contact Us</h2>
                        <p className="text-sm font-[Outfit Variable]">
                            For questions regarding these Terms, contact us at <a href="mailto:privacy@codaru.org" className="underline">privacy@codaru.org.</a>
                        </p>
                    </li>
                </ol>
            </div>
        </>
    );
};