import { Box, Typography, useMediaQuery, Paper } from "@mui/material";
import "@fontsource/hind-siliguri";

const sponserDir = "sponsers"
const sponsersLogos = [ ["AWS_logo_RGB.svg", "mavs-logo.png", "RISE1.png"],
                        ["Jasper.svg", "richardson-iq-logo.png", "geico.svg"], 
                        ["respell.svg", "TT.svg",  "Blackstone.png" ],
                        ["JSOM.svg", "CAIML.svg", "re-vvive-logo.png"] ]
const sponsorLinks =    [
                            "https://aws.amazon.com/machine-learning/",
                            "https://www.mavs.com/",
                            "https://jindal.utdallas.edu/centers-of-excellence/retail-innovation-strategy-excellence/",
                            "https://www.jasper.ai/",
                            "https://richardsoniq.com",
                            "https://careers.geico.com/us/en/c/information-technology-jobs",
                            "https://respell.ai/",
                            "https://techtitans.org/",
                            "https://innovation.utdallas.edu/programs/blackstone-launchpad/",
                            "https://jindal.utdallas.edu/",
                            "https://cs.utdallas.edu/caiml/",
                            "https://re-vive.com/",
                        ]
const sponsersPath = sponsersLogos.map((row) => row.map((path) => sponserDir + '/' + path))

const fontSize =  {
    title: "3rem",
    subHeading: "1.2rem",
}

function displaySponsers() {
    const mobile = useMediaQuery('(max-width:1023px)')

    return (
        sponsersPath.map((row, rowIndex) => {
            return (
                <Box sx={ mobile ? {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    pt:2
                } : {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    pt:2
                }}>
                    {row.map( (path, colIndex) => 
                        <img
                            src={path}
                            onClick={() => window.open(sponsorLinks[rowIndex*3 + colIndex], "_blank")}
                            className="h-[20vh] w-[20vw] object-contain [cursor:pointer]"
                        />
                    )}
                </Box>
            );
        })
    );
}

function Partners() {
    return (
        <Box className="bg-hai-new-blue" sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <Paper sx={{
                        marginTop: "5rem",
                        padding: "3rem",
                        margin: '8rem 8rem 0 8rem',
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        alignContent: "center",
                        justifyContent: "space-between",
                        backgroundColor: "#FFF9F5",
                    }}>
                <Box color="#1A2025" sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: '100%',
                    marginBottom: '4rem'
                }}>
                    <Typography fontSize={fontSize.title} fontFamily={"var(--PlacardNext)"} className="font-semibold">
                        PAST PARTNERS
                    </Typography>
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                }}>
                    {displaySponsers()}
                </Box>
            </Paper>
        </Box>
    );
}

export default Partners;