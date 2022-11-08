import React from 'react';

interface PropsTypes {
    children: React.ReactNode;
}

export default function AuthLayout({ children }: PropsTypes) {
    return (
        <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#f7f7f7]">
            <main className="flex flex-col items-center w-full h-full max-w-[400px] max-h-[calc(100vh-100px)] overflow-auto p-[20px] bg-white border border-[#e1e2e3] rounded">
                {children}
            </main>
        </div>
    );
}
