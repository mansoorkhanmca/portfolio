
import Image from 'next/image';
import Skill from './skills';
import BodyWrapper from "../components/bodyWrapper";
export default function Skills() {

    const skills: Array<Object> = Skill.list;
    return (
        <BodyWrapper>
            <div className="flex flex-col justify-center  items-center">

                {skills.map((item: any, index: number) => {
                    return (
                        <div className="border shadow-sm w-4/5 mb-16 bg-white">
                            <div className='text-4xl p-5'>
                                {item.title}

                            </div>
                            <hr />
                            <div className="flex flex-row justify-around bg-white" style={{ flexFlow: "row wrap" }}>
                                {item.skills.map((skill: any, indx: number) => {
                                    return (
                                        <div className="flex-row p-5">
                                            <Image className="inline-block" style={{ maxHeight: "100px", minHeight: "100px" }} src={item.path + skill.logo} width={100} height={100} alt="" />
                                            <br />
                                            <div className="p-3 mt-2 text-center">{skill.skill}</div>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    )
                })}
            </div>
        </BodyWrapper>
        // <div className="bg-img">
        //     <div className="block w-full h-20 bg-teal-600">
        //         <span className="uppercase text-3xl block text-center text-white p-4" >Skills</span>
        //     </div>
        //     <br />

        //     <div className="flex flex-col justify-center  items-center">

        //         {skills.map((item: any, index: number) => {
        //             return (
        //                 <div className="border shadow-sm w-4/5 mb-16 bg-white">
        //                     <div className='text-4xl p-5'>
        //                         {item.title}

        //                     </div>
        //                     <hr/>
        //                     <div className="flex flex-row justify-around bg-white" style={{ flexFlow: "row wrap" }}>
        //                         {item.skills.map((skill: any, indx: number) => {
        //                             return (
        //                                 <div className="flex-row p-5">
        //                                     <Image className="inline-block" style={{maxHeight:"100px",minHeight:"100px"}} src={item.path + skill.logo} width={100} height={100} alt="" />
        //                                     <br/>
        //                                     <div className="p-3 mt-2 text-center">{skill.skill}</div>
        //                                 </div>
        //                             )
        //                         })}

        //                     </div>
        //                 </div>
        //             )
        //         })}
        //     </div>
        // </div>

    );
}
