import './AboutMe.scss';
import me from './me.jpg';

function AboutMe() {
  return (
    <div id="about-me">
      <img className="img-fluid mb-3" src={me} alt="My Name" />
      <h1>Rene Ramirez</h1>
      <p>Meet Rene Ramirez, he is currently the Community Outreach Coordinator at 42 Silicon Valley. <br />
        Rene Ramirez joined 42 Silicon Valley (42) in 2016 as a student, over the last 4 years he volunteered and transitioned into the position he is in now.
        <br /><br />His journey began when he dropped out of San Francisco State University. His first 2 years at 42 were as a student, he had to prove himself that he was capable of being a strong candidate to become a student.
        His rigorous path while sleeping in his car for 28 days finally paid off when he joined in as a full time student in 2017.
        <br /><br />In late 2017 42 asked him to join their team as an Event Coordinator after his experience with volunteering around campus for several months.
        Over the next 2 years he managed over 200 events and shared some unique experiences with huge companies and people worldwide. In 2020 he was promoted into his current position as a Community Outreach Coordinator.
      </p>
    </div>
  );
}

export default AboutMe;
