import React from "react";
import logo from "../assets/images/ash logo only.png";

const Home = () => {
    return (
        <section className="w-full h-screen flex justify-center items-center">
            <div className="flex flex-col items-center mx-auto text-white select-none">

                {/* LOGO */}

               


                <div className="border-2 flex flex-col p-3.5 mx-auto items-center border-blue-400">
                    <img
                        src={logo}
                        alt="ASH Logo"
                        className="w-[280px] md:w-3xl object-contain"
                    />


                    {/* TEXT */}
                    <h1 className="mt-6 text-3xl md:text-5xl font-semibold tracking-wide text-white/80">
                        A.S.H Developers
                    </h1>
                </div>
                

            </div>
        </section>
    );
};

export default Home;
