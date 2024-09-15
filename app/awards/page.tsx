
import BodyWrapper from "../components/bodyWrapper";
import Image from 'next/image';
export default function Awards() {
    return (
        <BodyWrapper>
            <div className="flex flex-col justify-around items-center">

                <div className="rounded-lg overflow-hidden shadow-2xl m-10 p-5" style={{border:"10px solid #00897B"}}>

                    <Image className="inline-block" src={"./my-porfolio/assets/certificates/pwc.jpg"} width={800} height={450} alt="" />
                </div>

                <div className="rounded-lg overflow-hidden shadow-2xl m-10 p-5" style={{border:"10px solid #00897B"}}>

                    <Image className="inline-block" src={"./my-porfolio/assets/certificates/cisco.jpg"} width={800} height={450} alt="" />

                </div>

                <div className="rounded-lg overflow-hidden shadow-2xl m-10 p-5" style={{border:"10px solid #00897B"}}>

                    <Image className="inline-block" src={"./my-porfolio/assets/certificates/bct.jpg"} width={800} height={450} alt="" />

                </div>
            </div>
        </BodyWrapper>
    );
}


