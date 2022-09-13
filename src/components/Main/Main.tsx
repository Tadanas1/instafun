import {Box, Button, CardMedia, TextField, Typography} from "@mui/material";
import {MainStyles} from "../theme/styles";
import {useState} from "react";
import {testEmail} from "./constants";
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import './public/BlueVinyl.otf';

export default () => {
    const [email, setEmail] = useState('');
    const [isValidEmail, setValidEmail] = useState(false);

    return (
    <Box sx={{...MainStyles.mainBox}}>
        <Box sx={{...MainStyles.headerBox}}>
            <CardMedia
                image={require("./public/instalogo.png")}
                sx={{width: "50px", height: "50px", marginRight: "10px"}}
            />
            <Typography sx={{
                color: "black", fontSize: 48, fontWeight: 400,
                fontFamily: "BlueVinyl",
            }}>
                InstaFun
            </Typography>
        </Box>
        <Box sx={{...MainStyles.contentBox}}>
            <Box sx={{...MainStyles.directBox}}>
                <Box sx={{...MainStyles.dialogBox, height: "50px", justifyContent: "flex-end", borderBottom: "1px solid #dcdcdc",}}>
                    <CardMedia
                        image={require("./public/writeIcon.png")}
                        sx={{width: "26px", height: "26px"}}
                    />
                </Box>
                <Box sx={{...MainStyles.dialogBox}}>
                    <CardMedia
                        image="https://fingerlickingoodoffers4affiliates.com/images/lovemore/woman_landing/whats_flirt/LM_LP__girl-3.png"
                        sx={{...MainStyles.directPhoto}}
                    />
                    <Box sx={{...MainStyles.dialogTextBox}}>
                        <Typography sx={{...MainStyles.dialogName}}>
                            TineSucht (20)
                        </Typography>
                        <Typography sx={{...MainStyles.dialogText}}>
                            Wer erlöst mich von meiner Langeweile? Rette ...
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{...MainStyles.dialogBox}}>
                    <CardMedia
                        image="https://fingerlickingoodoffers4affiliates.com/images/lovemore/woman_landing/whats_flirt/LM_LP__girl-4.png"
                        sx={{...MainStyles.directPhoto, width: "94px"}}
                    />
                    <Box sx={{...MainStyles.dialogTextBox}}>
                        <Typography sx={{...MainStyles.dialogName}}>
                            Janine
                        </Typography>
                        <Typography sx={{...MainStyles.dialogText}}>
                            Bin zwar eigentlich blond, aber entspreche sicher nicht dem Klischee. Schick mir ...
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{...MainStyles.dialogBox}}>
                    <CardMedia
                        image="https://fingerlickingoodoffers4affiliates.com/images/lovemore/woman_landing/whats_flirt/LM_LP__girl-5.png"
                        sx={{...MainStyles.directPhoto}}
                    />
                    <Box sx={{...MainStyles.dialogTextBox}}>
                        <Typography sx={{...MainStyles.dialogName}}>
                            Vicky
                        </Typography>
                        <Typography sx={{...MainStyles.dialogText}}>
                            Bin ne Zicke mit Anspruch. Nicht für jeden, aber ...
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{...MainStyles.dialogBox}}>
                    <CardMedia
                        image="https://fingerlickingoodoffers4affiliates.com/images/lovemore/woman_landing/whats_flirt/LM_LP__girl-6.png"
                        sx={{...MainStyles.directPhoto, width: "74px"}}
                    />
                    <Box sx={{...MainStyles.dialogTextBox}}>
                        <Typography sx={{...MainStyles.dialogName}}>
                            Marina
                        </Typography>
                        <Typography sx={{...MainStyles.dialogText}}>
                            Bin ein bisschen schüchtern und suche Bekanntschaften zum ...
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{...MainStyles.dialogBox}}>
                    <CardMedia
                        image="https://fingerlickingoodoffers4affiliates.com/images/lovemore/woman_landing/whats_flirt/LM_LP__girl-7.png"
                        sx={{...MainStyles.directPhoto}}
                    />
                    <Box sx={{...MainStyles.dialogTextBox}}>
                        <Typography sx={{...MainStyles.dialogName}}>
                            Anna
                        </Typography>
                        <Typography sx={{...MainStyles.dialogText}}>
                            Ich bin spontan, kontaktfreudig und freue mich ...
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{...MainStyles.dialogBox}}>
                    <CardMedia
                        image="https://fingerlickingoodoffers4affiliates.com/images/lovemore/picture/user6.jpg"
                        sx={{...MainStyles.directPhoto}}
                    />
                    <Box sx={{...MainStyles.dialogTextBox}}>
                        <Typography sx={{...MainStyles.dialogName}}>
                            Melina
                        </Typography>
                        <Typography sx={{...MainStyles.dialogText}}>
                            Ich brauch einen richtigen Schmusekater für ...
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{...MainStyles.contentColumn}}>
                <Box sx={{...MainStyles.storiesBox}}>
                    <Box sx={{...MainStyles.storiesPhotoBox}}>
                        <CardMedia
                            image="https://fingerlickingoodoffers4affiliates.com/images/lovemore/lp/lp1_email_img1.png"
                            sx={{...MainStyles.storiesPhoto,}}
                        />
                    </Box>
                    <Box sx={{...MainStyles.storiesPhotoBox}}>
                        <CardMedia
                            image="	https://fingerlickingoodoffers4affiliates.com/images/lovemore/lp/lp1_email_img2.png"
                            sx={{...MainStyles.storiesPhoto,}}
                        />
                    </Box>
                    <Box sx={{...MainStyles.storiesPhotoBox}}>
                        <CardMedia
                            image="	https://fingerlickingoodoffers4affiliates.com/images/lovemore/lp/lp1_email_img3.png"
                            sx={{...MainStyles.storiesPhoto,}}
                        />
                    </Box>
                    <Box sx={{...MainStyles.storiesPhotoBox}}>
                        <CardMedia
                            image="	https://fingerlickingoodoffers4affiliates.com/images/lovemore/lp/lp1_email_img4.png"
                            sx={{...MainStyles.storiesPhoto,}}
                        />
                    </Box>
                </Box>
                <Box sx={{...MainStyles.formBox}}>
                    <Typography sx={{
                        color: "black", fontSize: 28, fontWeight: 500, textAlign: "center", marginBottom: "10px"
                    }}>
                        SEX? Kennenlernen nur mit E-Mailadresse möglich:
                    </Typography>
                    <TextField
                        placeholder="E-Mail"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setValidEmail(testEmail(e.target.value));
                        }}
                        error={!isValidEmail || !email || !email.length}
                        helperText={(email && email.length && !isValidEmail) ? 'E-Mail falsch eingegeben' : ' '}
                        sx={{width: "90%", }}
                    />
                    <Button sx={{...MainStyles.button, width: "200px"}}
                    disabled={!email || !email.length || !isValidEmail}
                    >
                        WEITER
                    </Button>
                </Box>
            </Box>
        </Box>
    </Box>
    )
}