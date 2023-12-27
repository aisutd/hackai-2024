import { Typography } from "@mui/material";

const questions = [
  {
    icon: "faq-icons/robot.svg",
    heading: "What is a hackathon?",
    body: <>A 24-hour tech event for teams of students to learn new skills, build cool software projects, and meet tons of other students and professionals.</>
  },
  {
    icon: "faq-icons/handhshake.svg",
    heading: "Do I need to have a team?",
    body: <>Although you can work in up to a team of <b>4</b>, you do not have to have a team. We will have a team matching session if you would like to find a team, but going solo is allowed.</>
  },
  {
    icon: "faq-icons/person.svg",
    heading: "Who can attend?",
    body: <>You must be at least <b>18 years</b> of age. Non-STEM majors, first-time hackers, and beginner coders are welcomed and encouraged to join us! This hackathon is meant to introduce AI to everyone. All you need is a drive and passion to learn!</>
  },
  {
    icon: "faq-icons/wallet.svg",
    heading: "How much does it cost?",
    body: <>There will be food, awesome workshops, and super cool swag, all completely <b>FREE</b>!</>
  },
  {
    icon: "faq-icons/computer.svg",
    heading: "What projects should I expect?",
    body: <>Topics such as Natural Language Processing, Machine Learning, Data Analytics, and more will be represented amongst these projects.</>
  },
   
]

function displayListOfQuestions() {
  return (
    <>
    {questions.map((obj, index) => {
      return (
        <>
          <div key={index} className={index === questions.length-1 ? "" : "mb-[1.25rem]"}>
          <div className="mb-[4px] flex items-center gap-[5px]">
            <img src={obj.icon} className="h-[1.25rem]"/>
            <Typography className="font-placard tracking-wider text-xl leading-normal font-[500] text-ais-black">
              {obj.heading}
            </Typography>
          </div>
          <Typography className="font-roboto tracking-normal text-base leading-normal text-ais-black">
            {obj.body}
          </Typography>
        </div>
        </>
      );
    })}
    </>
  )
}

function FAQs() {
  return (
  <>
    <div className="pt-[5rem] pb-[3rem] flex flex-col items-center">
      <Typography className="font-placard font-bold text-hai-white text-5xl tracking-wider mb-[6px]">
        FAQS
      </Typography>
      <Typography className="font-roboto text-center text-hai-white text-lg tracking-wide px-[1rem] mb-[2rem]">
        Please reach out to us on Discord if you have any additional questions!
      </Typography>
      <div className="
        w-[75vw] max-w-[1024px] 
        p-[2rem]
        flex flex-col
        bg-[url('/glass.svg')] bg-no-repeat bg-fill
      ">
        {displayListOfQuestions()}
      </div>
    </div>
  </>
  )
}

export default FAQs;