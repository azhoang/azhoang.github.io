import { TagCloud } from "react-tagcloud";
import Markdown from "../../components/Markdown";
import { resume } from "../../config";
import dayjs from "../../hooks/dayjs";

const keyName = "value";
const valueName = "count";
const minSize = 12;
const maxSize = 30;

const words = [
  { [keyName]: "Nodejs", [valueName]: maxSize },
  { [keyName]: "ReactJs", [valueName]: maxSize },
  { [keyName]: "Javascript", [valueName]: maxSize },
  { [keyName]: "HTML", [valueName]: (maxSize * 60) / 100 },
  { [keyName]: "CSS/SCSS/SASS", [valueName]: (maxSize * 30) / 100 },
  { [keyName]: "Puppeteer", [valueName]: (maxSize * 80) / 100 },
  { [keyName]: "Sequelize", [valueName]: maxSize },
  { [keyName]: "Mysql", [valueName]: (maxSize * 70) / 100 },
  { [keyName]: "Redis", [valueName]: minSize },
  { [keyName]: "Graphql", [valueName]: maxSize / 2 },
  { [keyName]: "GIT", [valueName]: maxSize / 2 },
  { [keyName]: "Bull", [valueName]: minSize },
  { [keyName]: "typescript", [valueName]: minSize },
  { [keyName]: "C/C++", [valueName]: minSize },
  { [keyName]: "Python", [valueName]: minSize },
  { [keyName]: "Django", [valueName]: minSize },
  { [keyName]: "Django Rest", [valueName]: minSize },
  { [keyName]: "Laravel", [valueName]: minSize },
  { [keyName]: "Bootstrap", [valueName]: minSize },
  { [keyName]: "Chakra", [valueName]: minSize },
  { [keyName]: "Font Awesome", [valueName]: minSize },
  { [keyName]: "icomoon", [valueName]: minSize },
  { [keyName]: "Skeleton", [valueName]: minSize },
  { [keyName]: "Lazy load", [valueName]: minSize },
  { [keyName]: "NPM", [valueName]: (maxSize * 30) / 100 },
  { [keyName]: "YARN", [valueName]: (maxSize * 30) / 100 },
  { [keyName]: "MWS", [valueName]: (maxSize * 35) / 100 },
  { [keyName]: "Etsy API", [valueName]: (maxSize * 35) / 100 },
  { [keyName]: "eBay API", [valueName]: (maxSize * 35) / 100 },
  { [keyName]: "SP-API", [valueName]: (maxSize * 35) / 100 },
];

export default function Resume() {
  return (
    <>
      <div className="section mt-0">
        <h1 className="title title--h1 title__separate">Resume</h1>
      </div>
      {/* Experience */}
      <div className="section">
        <h2 className="title title--h2">
          <img className="title-icon" src={resume.exp.icon} alt="Experience" />
          Experience
        </h2>
        <div className="timeline">
          {/* Item */}
          {resume.exp.history
            .sort((a, b) => {
              if (!b.to || !a.to) return -1;
              return b.to.getTime() - a.to.getTime();
            })
            .map((item, index: number) => (
              <article className="timeline__item" key={index}>
                <h5 className="title title--h3 timeline__title">{item.name}</h5>
                <span className="timeline__period">
                  {dayjs(item.from).format("MMM, YYYY")} —{" "}
                  {item.to ? dayjs(item.to).format("MMM, YYYY") : "Present"}
                </span>
                <div className="timeline__description">
                  <Markdown>{item.description}</Markdown>
                </div>
              </article>
            ))}
        </div>
      </div>
      {/* Skills */}
      <div className="section">
        <h2 className="title title--h2">My Skills</h2>
        <div className="box-gray">
          <TagCloud
            minSize={15}
            maxSize={55}
            tags={words}
            colorOptions={{
              luminosity: "light",
              hue: "#1031ff",
            }}
            // onClick={(tag: any) => alert(`'${tag.value}' was selected!`)}
          />
        </div>
      </div>
      {/* Education */}
      <div className="section">
        <h2 className="title title--h2">
          <img className="title-icon" src={resume.edu.icon} alt="Education" />
          Education
        </h2>
        <div className="timeline">
          {/* Item */}
          {resume.edu.history
            .sort((a, b) => b.to.getTime() - a.to.getTime())
            .map((item, index: number) => (
              <article className="timeline__item" key={index}>
                <h5 className="title title--h3 timeline__title">{item.name}</h5>
                <span className="timeline__period">
                  {dayjs(item.from).format("MMM, YYYY")} —{" "}
                  {item.to ? dayjs(item.to).format("MMM, YYYY") : "Present"}
                  {/* {item.from.getFullYear()} — {item.to.getFullYear()} */}
                </span>
                <div className="timeline__description">
                  <Markdown>{item.description}</Markdown>
                </div>
              </article>
            ))}
        </div>
      </div>
    </>
  );
}
