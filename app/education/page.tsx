import BodyWrapper from "../components/bodyWrapper";
export default function Education() {

    const experience: Array<Object> = [
        {
            degree: "Master of Computer Application",
            logo: "/assets/images/tandf.png",
            designation: "Full Stack Engineer",
            college: "Measi Institute of Information Technology",
            university: "University of Madras",
            duration: "2008 - 2011"
        },
        {
            degree: "Bachelor of Computer Application",
            logo: "/assets/images/cisco.png",
            designation: "Full Stack Engineer",
            college: " St. John's College",
            university: "Manonmaniam Sundaranar University",

            duration: "2005 - 2008"
        }
    ]
    return (
        <BodyWrapper>
            <div className="flex flex-col justify-center  items-center">

                {experience.map((item: any, index: number) => {
                    return (<div className="flex flex-col bg-white border shadow-sm w-4/5 mb-16 mt-5" key={index.toString()}>

                        <div className="p-4 md:p-5">
                            <h3 className="text-2xl font-bold text-gray-800 inline-block pb-5 degree">
                                {item.degree}
                            </h3>
                            <hr />
                            <p className="mt-2 text-gray-800 text-xl mt-5 text-gray-500 ">
                                College : {item.college}
                            </p>
                            <p className="mt-2 text-gray-800 text-xl mt-5 text-gray-500 ">
                                University : {item.university}
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
