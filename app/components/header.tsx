
'use client';
import { IoPerson } from "react-icons/io5";
import { FaFileAlt } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdWeb } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { FiAward } from "react-icons/fi";
import { PiGraduationCapBold } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";
import HeaderList from "./headerList";

export default function Header() {
    
    const listItems: Array<Object> = [
        {
            icon: IoPerson,
            title: 'About',
            iconColor: 'green',
            path:'/about',
        },
        {
            icon: BsGraphUpArrow,
            title: 'Experience',
            iconColor: 'violet',
            path:'/experience',
        },
        {
            icon: MdWeb,
            title: 'Projects',
            iconColor: 'blue',
            path:'/projects',
        },
        {
            icon: GiSkills,
            title: 'Skills',
            iconColor: 'magenta',
            path:'/skills',
        },
        {
            icon: FiAward,
            title: 'Awards',
            iconColor: 'red',
            path:'/awards',
        },
        {
            icon: PiGraduationCapBold,
            title: 'Education',
            iconColor: 'orange',
            path:'/education',
        },
        {
            icon: HiOutlineMail,
            title: 'Contact',
            iconColor: 'brown',
            path:'/contact',
        },
        {
            icon: FaFileAlt,
            title: 'Resume',
            iconColor: 'black',
            path:'/resume',
        },
    ];
    

    return (
        <div className="p-10 shadow-[rgba(0,0,0,0.36)_2px_0px_5px_0px] h-screen">
            <div style={{ backgroundColor: "light-grey" }}>

                <div className="text-xl text-center font-medium text-teal-600" style={{ fontFamily: 'sans-serif' }}>Mansoor Khan</div>
                <br/>
        
                <div className="text-xs text-center font-bold">Full Stack Engineer</div>
                <br/>
                <br/>
            </div>
            <hr className="m-2"/>
            <div style={{ backgroundColor: "white" }}>

                <HeaderList listItems={listItems}/>
            </div>
        </div>
    );
} 