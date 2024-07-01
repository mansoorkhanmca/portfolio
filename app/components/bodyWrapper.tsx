'use client'
import { usePathname } from 'next/navigation';
import { GiHamburgerMenu } from "react-icons/gi";
export default function BodyWrapper({ children }: any) {
    const pathname = usePathname().replace("/", "");
    //console.log(pathname);
    const closeSideNav = () => {
        console.log("Close header");
        document.body.style.setProperty('--display-side-nav', 'none');
    }
    const showSideNav = () => {
        console.log("show header");
        document.body.style.setProperty('--display-side-nav', 'block');
    }

    return (
        <div className="bg-img min-h-screen">
            <div className="block w-full h-20 bg-teal-600">
                <span className="uppercase text-3xl block text-center text-white p-4" >
                    <GiHamburgerMenu className="absolute cursor-pointer hide-ls" onClick={() => { showSideNav() }} />

                    <span >{pathname}</span>
                </span>
            </div>
            <br />
            <div style={{ flexFlow: "row wrap" }} onClick={() => { closeSideNav() }}>
                {children}
            </div>

        </div>)
}