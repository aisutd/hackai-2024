import { Typography } from "@mui/material";

const questions = [
  {
    icon: "faq-icons/robot.svg",
    heading: "What is a makeathon?",
    body: <>A 1-day tech event for students to learn new skills, develop cool software project ideas, and meet tons of other students and professionals. Our event will start off with a morning of workshops, followed by a lunchbreak, and then the makeathon will begin.</>
  },
  {
    icon: "faq-icons/handhshake.svg",
    heading: "Do I need to have a team?",
    body: <>Although you can work in up to a team of <b>4</b>, you do not have to have a team. We will have a team matching session if you would like to find a team, but going solo is allowed.</>
  },
  {
    icon: "faq-icons/person.svg",
    heading: "Who can attend?",
    body: <>You must be at least <b>18 years</b> of age. Non-STEM majors, beginner coders, and even those with <b>zero AI experience</b> are welcomed and encouraged to join us! This event is meant to introduce AI to everyone. All you need is a drive and passion to learn!</>
  },
  {
    icon: "faq-icons/wallet.svg",
    heading: "How much does it cost?",
    body: <>There will be food, awesome workshops, and swag, all completely <b>FREE</b>!</>
  },
  {
    icon: "faq-icons/computer.svg",
    heading: "What projects should I expect?",
    body: <>Project ideas will be centered around various AI topics including Natural Language Processing, Machine Learning, Data Analytics, and more. The morning workshops will provide insight and context on what you should be thinking about when coming up with your solution.</>
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