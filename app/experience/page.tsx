
import Image from 'next/image';
import Exp from './experience';
import BodyWrapper from "../components/bodyWrapper";
export default function Experience() {

    const experience: Array<Object> = Exp.list;
    return (
        <BodyWrapper>
            <div className="flex flex-col justify-center  items-center">

                {experience.map((item: any, index: number) => {
                    return (<div className="flex flex-col bg-white border shadow-sm w-4/5 mb-16 " key={index.toString()}>

                        <div className="p-4 md:p-5">
                            <h3 className="text-lg font-bold text-gray-800 inline-block pb-5">
                                <Image className="inline-block" src={item.logo} width={30} height={30} alt="" />
                                &nbsp; {item.companyName}
                            </h3>
                            <h3 className="text-lg font-bold text-gray-800 designation pb-5">
                                {item.designation}
                            </h3>
                            <hr />
                            <p className="mt-2 text-gray-500">
                                {item.aboutOrganization}
                            </p>
                        </div>
                        <div className="bg-gray-100 border-b py-3 px-4 md:py-4 md:px-5">
                            <p className="mt-1 text-sm text-gray-500">
                                {item.duration}
                            </p>
                        </div>

                    </div>)
                })}
            </div>
        </BodyWrapper>

    );
}
