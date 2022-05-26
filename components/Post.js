import { Card } from "@mui/material";
import { CardHeader } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { Avatar } from "@mui/material";
import { red } from '@mui/material/colors';


export default function post ({info}) {

    info.forEach(element => {
        let name = element.author;
        let array = name.split(' ');
        let first_name = array[0];
        let last_name = array[array.length - 1];
        let initals = first_name[0] + last_name[0]
        element.initals = initals 
    });


    return info.map((el) =>
        <Card sx={{maxWidth: 900, width: "90%" , margin: "1.5rem auto"}}>
        <CardHeader
            avatar = {
                <Avatar sx={{bgColor: red[500]}}>
                    {el.initals}
                </Avatar>
            }
            title={el.title}
            subheader= {el.date}
        />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
                {el.text}
            </Typography>
        </CardContent>
    </Card>
    )
}