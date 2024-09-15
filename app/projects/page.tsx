
import Proj from "./projects";
import BodyWrapper from "../components/bodyWrapper";
export default function Projects() {
    const projects = Proj.list;
    return (
        <BodyWrapper>
            <div className="flex justify-around" style={{ flexFlow: "row wrap" }}>

                {projects.map((item: any, index: number) => {
                    return (<div className="flip-card" key={index.toString()}>
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <div className="fcf mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-70" >
                                    <div className="p-6">
                                        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                            {item.title}
                                        </h5>
                                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                            {item.description}
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div className="flip-card-back">
                                <div className="fcb mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-70">
                                    <div className="p-6">
                                        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                            Platform
                                        </h5>
                                        <div className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                            <br />
                                            <ul>
                                                {item.platforms.map((innerItem: string, indx: number) => <li key={index.toString()}>{innerItem}</li>)}
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>)
                })}

            </div>
        </BodyWrapper>
        // <div className="bg-img">
        //     <div className="block w-full h-20 bg-teal-600">
        //         <span className="uppercase text-3xl block text-center text-white p-4" >Projects</span>
        //     </div>
        //     <br />
        //     <div className="flex justify-around" style={{ flexFlow: "row wrap" }}>

        //     {projects.map((item:any,index:number)=>{
        //         return(<div className="flip-card">
        //             <div className="flip-card-inner">
        //                 <div className="flip-card-front">
        //                     <div className="fcf mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80">
        //                         <div className="p-6">
        //                             <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        //                                 {item.title}
        //                             </h5>
        //                             <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
        //                             {item.description}
        //                             </p>
        //                         </div>

        //                     </div>
        //                 </div>
        //                 <div className="flip-card-back">
        //                     <div className="fcb mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80">
        //                         <div className="p-6">
        //                             <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        //                                 Platform
        //                             </h5>
        //                             <div className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
        //                                 <br/>
        //                                <ul>
        //                                {item.platforms.map((innerItem:string,indx:number)=> <li>{innerItem}</li>)}
        //                                </ul>
        //                             </div>
        //                         </div>

        //                     </div>
        //                 </div>
        //             </div>
        //         </div>)
        //     })}

        //     </div>
        // </div>
    );
}
