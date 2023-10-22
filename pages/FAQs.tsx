import { Box, Link, Paper, Typography, useMediaQuery } from "@mui/material";
import "@fontsource/hind-siliguri";

const questions = [
    {
        icons: "faq-icons/robot.svg",
        heading: "What is a hackathon?",
        body: <>A 24-hour tech event for teams of students to learn new skills, build cool tech projects, and meet tons of other students and tech professionals.</>
    },
    {
        icons: "faq-icons/handhshake.svg",
        heading: "Do I need to have a team?",
        body: <>Although you can work in up to a team of four, you do not have to have a team. We will also have team matching activities if you would like a team. </>
    },
    {
        icons: "faq-icons/person.svg",
        heading: "Who can attend?",
        body: <>You must be at least <b>18 years</b> of age. Non-STEM majors, first-time hackers, and beginner coders are <b>welcomed</b> and encouraged to join us! This hackathon is meant to introduce AI to everyone. All you need is a drive and passion to learn!</>
    },
    {
        icons: "faq-icons/wallet.svg",
        heading: "How much does it cost?",
        body: <>There's food, awesome workshops, and super cool swag that are completely <b>FREE</b>!</>
    },
    {
        icons: "faq-icons/computer.svg",
        heading: "What projects should I expect?",
        body: <>Topics such as Natural Language Processing, Machine Learning, Data Analytics, and more will be represented amongst these projects, and we are confident that both the creativity and quality of the submissions will be incredibly high</>
    },
   
]

const fontSizes = {
    title: "3rem",
    heading: "1.2rem",
    headingCard: "1.2rem",
    bodyCard: "1rem",
}

function displayListOfQuestions(mobile: boolean) {
    return (
        <>
        {questions.map((obj, key) => {
            return (
                <>
                {mobile ? <div className="h-[20px]"/> : <></>}
                <Box key={key} marginBottom='1.5rem' sx={mobile ? {width:'100%'} : {width:"45%"}}>
                    <Box marginBottom='0.5rem' sx={{
                        display: "flex",
                        alignContent: "center",
                    }}>
                        <Box marginRight='1rem'>
                            <img src={obj.icons} style={{height: fontSizes.headingCard}} />
                        </Box>
                        <Typography variant="h2" fontSize={fontSizes.headingCard} 
                                    fontWeight={600} fontFamily='Hind Siliguri'>
                            {obj.heading}
                        </Typography>
                    </Box>
                    <Typography fontFamily='Hind Siliguri' fontSize={fontSizes.bodyCard}>
                        {obj.body}
                    </Typography>
                </Box>
                </>
            );
        })}
        <img src="hai-logo.png" className="h-[10rem] w-[45%] object-contain"/>
        </>
    );
}

function displayMobile() {
    return(
        <div className="py-[3rem]">
            <Box sx={{
                display:"flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <Typography variant="h2" color="#FEF9EE" fontSize={fontSizes.title} 
                            fontWeight={500} fontFamily={"var(--lucidity)"}>
                    FAQS
                </Typography>
                <Typography marginBottom="2rem" fontSize={fontSizes.heading} fontFamily={"Hind Siliguri"} className="text-center">
                    Have more questions? Send an email to <Link color="#99ebff">contact@aisociety.io</Link>
                </Typography>
            </Box>
            
            <div className="px-[5vw]">
                <Paper className="px-[5vw] py-[2rem] flex flex-col items-center bg-[#FEF9EE]">
                    {displayListOfQuestions(true)}
                </Paper>
            </div>
        </div>
    )
}

function FAQs() {
    const mobile = useMediaQuery('(max-width:1023px)')

    if(mobile)
        return displayMobile()
    else
        return (
        <>
            <Box sx={{padding: "3rem"}}>
                <Box>
                    <Box sx={{
                        display:"flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <Typography variant="h2" color='#FEF9EE' fontSize={fontSizes.title} 
                                    fontWeight={500} fontFamily={"var(--lucidity)"}>
                            FAQS
                        </Typography>
                        <Typography marginBottom="2rem" color='#FEF9EE' fontSize={fontSizes.heading} fontFamily={"Hind Siliguri"}>
                            Have more questions? Send an email to <Link color="#99ebff">contact@aisociety.io</Link>
                        </Typography>
                    </Box>
                    <Paper sx={{
                        padding: "5rem",
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        alignContent: "center",
                        justifyContent: "space-between",
                        backgroundColor: "#FFF9F5",
                    }}>
                        {displayListOfQuestions(false)}
                    </Paper>
                </Box>
            </Box>
        </>
        )
}

export default FAQs;