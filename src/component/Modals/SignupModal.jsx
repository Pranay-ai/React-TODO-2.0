import React, { useImperativeHandle, forwardRef } from 'react';
import google_icon from '/images/google_icon.png';

const SignupModal = forwardRef((props, ref) => {
    const dialogRef = React.useRef(null);
    const backdropRef = React.useRef(null);

    useImperativeHandle(ref, () => ({
        open: () => {
            if (dialogRef.current && backdropRef.current) {
                backdropRef.current.style.display = 'block';
                dialogRef.current.showModal();
            }
        },
        close: () => {
            if (dialogRef.current && backdropRef.current) {
                dialogRef.current.close();
                backdropRef.current.style.display = 'none';
            }
        }
    }));

    return (
        <>
            {/* Backdrop */}
            <div
                ref={backdropRef}
                className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
                style={{ display: 'none' }} // Initially hidden
            ></div>

            {/* Modal */}
            <dialog
                ref={dialogRef}
                className="rounded-3xl bg-black h-fit w-1/3"
            >
                <div className="flex flex-col items-center w-full gap-3 h-auto justify-center py-24">
                    <h1 className="text-white text-5xl pb-8">SIGN UP</h1>
                    <form className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="p-2 border px-10 border-gray-300 rounded-md"
                        />
                        <input
                            type="text"
                            placeholder="Email"
                            className="p-2 border px-10 border-gray-300 rounded-md"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="p-2 px-10 border border-gray-300 rounded-md"
                        />
                        <button
                            type="button"
                            className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-400"
                        >
                            Sign Up
                        </button>
                    </form>
                    <p className="text-white text-center">
                        Already have an account?{' '}
                        <span className="underline">Login</span>
                    </p>
                    <img src={google_icon} alt="" className='w-9 h-auto' />

                    <button
                        type="button"
                        onClick={() => ref.current.close()}
                        className="mt-4 text-white underline text-center"
                    >
                        Close
                    </button>
                </div>
            </dialog>
        </>
    );
});

export default SignupModal;
