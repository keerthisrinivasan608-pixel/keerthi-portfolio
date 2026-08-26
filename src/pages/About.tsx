import { About as AboutComponent } from '../components/About';
import { Education } from '../components/Education';

export const About = () => {
  return (
    <div className="container">
      <AboutComponent />
      <Education />
    </div>
  );
};
