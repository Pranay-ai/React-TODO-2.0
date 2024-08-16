import { useRef } from "react";
import LoginModal from "./Modals/LoginModal";
import SignupModal from "./Modals/SignupModal";

export default function Header() {
    const loginModalRef = useRef(null);
    const signupModalRef = useRef(null);

    const openLoginModal = () => {
        if (loginModalRef.current) {
            loginModalRef.current.open();
        }
    };

    const openSignupModal = () => {
        if (signupModalRef.current) {
            signupModalRef.current.open();
        }
    }

    return (
        <>
            <header className="bg-black p-4">
                <div className="flex justify-between align-baseline">
                    <div>
                        <h1 className="text-white text-3xl font-mono">TASK ZEN</h1>
                    </div>
                    <div className="flex gap-6">
                        <button className="text-white text-xl appearance-none" onClick={openLoginModal}>Login</button>
                        <button className="text-white text-xl appearance-none" onClick={openSignupModal}>Sign Up</button>
                    </div>
                </div>
            </header>

            <LoginModal ref={loginModalRef} />
            <SignupModal ref={signupModalRef} />

        </>
    );
}
