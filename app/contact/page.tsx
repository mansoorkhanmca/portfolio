import { ImMail4 } from "react-icons/im";
import { RxGithubLogo } from "react-icons/rx";
import { FaLinkedin } from "react-icons/fa6";
import { FaMobileRetro } from "react-icons/fa6";
import BodyWrapper from "../components/bodyWrapper";

export default function Contact() {
    return (
        <BodyWrapper>
            <div className="flex justify-center  items-center p-24">
                <table>
                    <tbody>
                        <tr>
                            <th><FaMobileRetro className="m-5 text-5xl" /></th>
                            <th className="text-left text-teal-600 cursor-pointer"><a>+91-9790407040</a></th>
                        </tr>
                        <tr>
                            <th><ImMail4 className="m-5 text-5xl" /></th>
                            <th className="text-left text-teal-600 cursor-pointer"><a href="mailto:mansoorkhanmca@gmail.com">mansoorkhanmca@gmail.com</a></th>
                        </tr>
                        {/* <tr>
                            <th><RxGithubLogo className="m-5 text-5xl" /></th>
                            <th className="text-left text-teal-600 cursor-pointer"><a href="https://github.com/mansoorkhanmca" target="_blank">https://github.com/mansoorkhanmca</a></th>
                        </tr> */}
                        <tr>
                            <th><FaLinkedin className="m-5 text-5xl " /></th>
                            <th className="text-left text-teal-600 cursor-pointer linked-in"><a href="https://linkedin.com/in/mansoorkhanmca" target="_blank">https://linkedin.com/in/mansoorkhanmca</a></th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </BodyWrapper>
        
    );
}
