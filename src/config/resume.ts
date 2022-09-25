import iconEdu from "../assets/icons/icon-education.svg";
import iconExp from "../assets/icons/icon-experience.svg";

export const resume = {
  edu: {
    icon: iconEdu,
    history: [
      {
        name: "THE COLLEGE OF INFORMATION AND TECHNOLOGY",
        from: new Date("2014-08-15"),
        to: new Date("2017-09-15"),
        description: "Major: Information technology .",
      },
      {
        name: "e48 - f320",
        from: new Date("2017-02-13"),
        to: new Date("2019-01-13"),
        description: "soldier.",
      },
    ],
  },
  exp: {
    icon: iconExp,
    history: [
      {
        name: "E-COMMERCE",
        from: new Date("2014-03-01"),
        to: new Date("2016-05-01"),
        description:
          "- Analysis database and deploy production.\n- Backend project is created from laravel framework.\n- Frontend uses blade template of **laravel framework**.\n- Project has a feature like trello app.",
      },
      // {
      //   name: "CIT IOT MIDDLEWARE FRAMEWORK",
      //   from: new Date("2019-05-01"),
      //   to: new Date("2019-07-01"),
      //   description:
      //     "- Analysis database and deploy production.\n- This project allows user to register, buy equipments that are provided by us and add equipment into project.\n- Project uses nodejs environment (open socket, mqtt communication with equipment).\n- Project uses mongoDB to storage the device's sensor value.\n- Project uses mysql to storage the information of user.",
      // },
      {
        name: "TICKET BOOKING WEBSITE",
        from: new Date("2019-05-01"),
        to: new Date("2019-07-31"),
        description:
          "- Analysis database and deploy production.\n- Project is created from **laravel framework**.\n- Checking ticket by qrcode feature.",
      },
      {
        name: "REAL ESTATE  AGENCY WEBSITE",
        from: new Date("2016-05-02"),
        to: new Date("2017-02-10"),
        description:
          "- Analysis database and deploy production.\n- Display infomation real estate and contact.",
      },
      {
        name: "SELLERWIX",
        from: new Date("2019-08-21"),
        to: new Date("2022-08-21"),
        description:
          "- **Scrum master**, leader of team 5-7 members.\n- **Reactjs** to build UI and function.\n- **Nodejs** to build backend service _**(jwt, graphql, s3, mws/sp-api, bull queue with redis,...etc)**_.\n- Analysis database, use **MySQL**.\n- Deploy to aws _**(use s3 and CloudFront to deploy react-app, use ec2 deploy nodejs app, use rds deploy mysql database)**_.\n- **Puppeteer** build automation tool",
      },
    ],
  },
  skill: [
    {
      name: "ReactJs",
      level: 80,
    },
    {
      name: "Graphql",
      level: 75,
    },
    {
      name: "Bootstrap",
      level: 77,
    },
    {
      name: "Mysql",
      level: 70,
    },
  ],
};
