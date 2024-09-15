
import BodyWrapper from "../components/bodyWrapper";
export default function About() {
    const myKnowledges : Array<string>= [
        '11+ years of total experience in web development with strong technical knowledge.',
        '7+ years of experience with Single Page Application and Back End Application Development.',
        '3+ Years of Experience in AWS Cloud Infrastructure and Cloud Development.',
        'Good Experience with Multiple Stacks like MEAN, MERN and Java Full Stack.',
        'Programming abilities across a range of technologies like Angular 17, React JS 18, Next JS 14 and etc...',
        'Experience with different backend technnologies like Spring Boot 3, Spring Cloud, Node JS and Express JS.',
        'Comprehensive understanding of and significant experience with Web Services and APIs.',
        'Experience with Unit testing skills with Jasmine, karma and Junit5.',
        'Strong understanding of version control (Git & GitHub)',
        'Good knowledge and hands on experience on Linux based operating systems with bash scripting.',
        'Docker image building, maintenance, orchestration with Kubernetes.',
        'Experience with Microservices architecture with Docker container implementation.',
        'Knowledge with Continuous Integration/Continuous Delivery tools - Jenkins Pipelines & GitHub Actions.',
        'Experience in AWS multiple services & infrastructure creation with Terraform.',
        'Experience in setting up and managing Web Architecture.',
        'Ability to work in an agile remote team with task-based deliveries.'
    ]
    return (
        <BodyWrapper>
            <div className="block p-4 text-2xl about">
                Senior Full Stack Developer having 11+ Years of Experience in Web Development with the ability to create interactive 
                responsive Websites and Web Applications. Moreover, ability to deploy the web application with DevOps lastest tools and automate the 
                process using CI/CD pipelines. Currenty working as Senior Full Stack Engineer / AWS Cloud Developer with 
                (AWS / MEAN / MERN) technologies. 
            </div>

            <ul className="p-4 text-xl list-disc ml-10 about-points">
                {myKnowledges.map((item: string,index: number)=> <li key={index}>{item}</li>)}
            </ul>
        </BodyWrapper>
        );
}