import BodyWrapper from "../components/bodyWrapper";
export default function About() {
    
    return (
        <BodyWrapper>
            <div className="block p-4 text-2xl about">
               <p> <span className="font-bold text-teal-600">Full Stack Developer</span> with over 11 years of experience in web development and a deep technical
                expertise, I specialize in crafting dynamic, responsive web applications. My expertise spans across both front-end and back-end technologies, allowing me to deliver end-to-end solutions that meet modern web standards.
                </p><br/>
                Extensive Experience:
                <ul className="p-4 text-xl list-disc ml-10 about-points">
                    <li>11+ years in web development with robust technical knowledge.</li>
                    <li>7+ years focused on Single Page Applications (SPA) and backend development.</li>
                    <li>3+ years of experience in creating AWS Cloud Infrastructure and AWS Cloud Development.</li>
                </ul>
                
                Versatile Technology Stack:
                <ul className="p-4 text-xl list-disc ml-10 about-points">
                    <li>Proficient in <span className="font-semibold text-red-600">MEAN and MERN</span> stacks, as well as <span className="font-semibold text-blue-600">Java Full Stack</span> technologies.</li>
                    <li>Programming skills in modern frameworks like <span className="font-semibold text-rose-400">Angular 17, React JS 18 and Next JS 14</span>.</li>
                    <li>Backend experience with <span className="font-semibold text-purple-600">Spring Boot 3, Spring Cloud, Node.js and Express.js</span>.</li>
                    <li>Hands-on experience with AWS Lambda and <span className="font-semibold text-orange-600">Serverless</span> computing.</li>
                </ul>
                Advanced Technical Skills:
                <ul className="p-4 text-xl list-disc ml-10 about-points">
                    <li>Comprehensive understanding of Web Services and APIs with practical experience.</li>
                    <li>Expertise in unit testing frameworks such as <span className="font-semibold text-orange-900">Jasmine, Karma, and JUnit5.</span></li>
                    <li>Strong command of version control using <span className="font-semibold text-pink-600">Git and GitHub.</span></li>
                    <li>Hands-on experience with <span className="font-semibold text-fuchsia-600">Linux</span> operating systems and <span className="font-semibold text-green-700">Bash scripting</span>.</li>
                </ul>
                
                Containerization and Orchestration:
                <ul className="p-4 text-xl list-disc ml-10 about-points">
                    <li>Skilled in <span className="font-semibold text-violet-600">Docker</span> image building, maintenance, and orchestration with <span className="font-semibold text-indigo-600">Kubernetes</span>.</li>
                    <li>Experience in implementing <span className="font-semibold text-sky-600">Microservices</span> Architecture with Docker containerization.</li>
                </ul>
                DevOps and CI/CD:
                <ul className="p-4 text-xl list-disc ml-10 about-points">
                    <li>Knowledgeable in CI/CD tools, including <span className="font-semibold text-lime-600">Jenkins Pipelines and GitHub Actions</span>.</li>
                    <li>Proficient in <span className="font-semibold text-red-600">AWS</span> services and <span className="font-semibold text-amber-600">Cloud Native</span> technologies.</li>
                    <li>Experience in Cloud infrastructure management using <span className="font-semibold text-blue-600">Terraform</span>.</li>
                    <li>Knowledge in setting up and managing robust <span className="font-semibold text-purple-600">Architectural Design</span>.</li>
                </ul>
                
                {/* Agile and Remote Collaboration:
                <ul className="p-4 text-xl list-disc ml-10 about-points">
                    <li>Proven ability to work effectively in an Agile remote team, delivering tasks on time.</li>
                </ul> */}
            </div>

        </BodyWrapper>
    );
}