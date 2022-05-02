import { Card } from "@mui/material";
import { CardHeader } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { Avatar } from "@mui/material";
import { red } from '@mui/material/colors';


export default function post ({info}) {

    let name = info.author;
    let array = name.split(' ');
    let first_name = array[0];
    let last_name = array[array.length - 1];
    let initals = first_name[0] + last_name[0]

    return (
        <Card sx={{maxWidth: 900, width: "90%" }}>
            <CardHeader
                avatar = {
                    <Avatar sx={{bgColor: red[500]}}>
                        {initals}
                    </Avatar>
                }
                title={info.title}
                subheader= {info.date}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {info.text}
                </Typography>
            </CardContent>
        </Card>
    )
}