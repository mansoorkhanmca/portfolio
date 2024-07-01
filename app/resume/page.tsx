import BodyWrapper from "../components/bodyWrapper";
export default function Resume() {
    return (
        <BodyWrapper>
            <div className="flex items-center justify-center mt-60">
                <a href="../../assets/resume/Mansoor_Khan.pdf" target="_blank">
                    <button type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2">Download</button>
                </a>
            </div>
        </BodyWrapper>
    );
}
