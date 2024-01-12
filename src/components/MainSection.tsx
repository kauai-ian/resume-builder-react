import { EducationData } from "./EducationInfo"
import { ResumeDisplay } from "./ResumeDisplay"

const Main = () => {
    return (
        <div className="main">
            <h2>Your Name Here</h2>
            <ResumeDisplay educationData={[]} onFormSubmit={function (): void {
                throw new Error("Function not implemented.")
            } }/>
        </div>
    )
}

export default Main