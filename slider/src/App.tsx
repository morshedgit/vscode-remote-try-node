import { EducationIllustration } from "./componnets/Education/EducationIllustration";
import Progress from "./Progress";
const App = () => (
  <div>
    {/* <EducationIllustration
      backgroundColor="#EBF5FB"
      mountainColor="#4CAF50"
      textColor="#212121"
      learnText="Study"
      growText="Achieve"
    />
    <EducationIllustration
      backgroundColor="#F8F8FF"
      mountainColor="#00BCD4"
      textColor="#3F51B5"
      learnText="Discover"
      growText="Evolve"
    />
    <EducationIllustration
      backgroundColor="#FFF9C4"
      mountainColor="#F57C00"
      textColor="#E64A19"
      learnText="Explore"
      growText="Advance"
    /> */}

    <Progress
      id="download-progress"
      progress={32}
      max={100}
      min={0}
      label="Downloading progress:"
      className="blue"
    />
  </div>
);
export default App;
