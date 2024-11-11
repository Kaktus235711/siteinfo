import { dividerClasses } from '@mui/material';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CardActionArea from '@mui/material/CardActionArea';
import Image1 from '../img/main/1.jpg';
import Image2 from '../img/main/2.jpg';
import Image3 from '../img/main/3.jpg';
import Image4 from '../img/main/4.jpg';
import Image5 from '../img/main/5.jpg';

const Data = [
    {
        Title: "Калькулятор. HTML, CSS, JS",
        Imаge: Image1,
        Site: "https://github.com/Kaktus235711/project_one.git"
    },
    {
        Title: "Научиться учиться. HTML, CSS, React",
        Imаge: Image5,
        Site: "https://github.com/Kaktus235711/N_React.git"
    },
    {
        Title: "Верстка с макета Figma HTML, CSS",
        Imаge: Image3,
        Site: "https://github.com/Kaktus235711/dz.git"
    },
    {

        Title: "Научиться учиться. HTML, CSS",
        Imаge: Image4,
        Site: "https://github.com/Kaktus235711/test.git"
    },
    {
        Title: "Данный сайт-визитка. HTML, CSS, React, Material-ui, npmjs",
        Imаge: Image2,
        Site: "https://github.com/Kaktus235711/siteinfo.git"
    },
]

export default function AppCard() {
    return (
        <>
            <Container maxWidth="lg">
                {/* <Typography variant="h4" align='center' style={{ marginTop: "50px" }}>
                    Material UI Responsive Card
                </Typography> */}
                <Grid container={5} style={{ marginTop: "20px" }}>
                    {Data.map((result, index) => (
                        <Grid item xs={12} sm={4} ms={4} key={index}>
                            <Card sx={{ maxWidth: 345 }} style={{ padding: "10px", marginBottom: "30px", marginLeft: "20px" }}>
                                <CardActionArea  >
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={result.Imаge}
                                        alt="project"
                                    // style={{borderRadius: "10px"}}
                                    />
                                    <CardContent>
                                        {/* <Typography gutterBottom variant="h5" component="div">
                                            Lizard
                                        </Typography> */}
                                        <Typography variant="body2" sx={{ color: "#0a1f6b" }}>
                                            {result.Title}
                                        </Typography>
                                    </CardContent>
                                    <Button size="small" href={result.Site} target="_blank">Посмотреть код на Github</Button>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    )
}




