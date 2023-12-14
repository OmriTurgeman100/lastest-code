import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, useAutocomplete } from '@mui/material';

export default function MultiActionAreaCard({ number, updateNumber }) {

    const increment = () => {

        updateNumber(number + 1);
    }
    
    const decrement = () => {
        updateNumber(number - 1);
        if (number < 0) {

        }
    };

    return (
        <Card
            sx={{
                maxWidth: 345,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(5px)',
                textAlign: 'center',
                color: 'white',
                '&:hover': {
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    transform: 'scale(1.05)',
                },
            }}
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://steamuserimages-a.akamaihd.net/ugc/842587034918019612/FFA99C866B4EA6BC93D1B9664083DEB6BA1E3386/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="white" sx={{ fontSize: '1.5rem' }}>
                        זמן טעינת האתר
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ color: 'white', fontSize: '1rem' }}>
                        בעזרת כרטיס זה ניתן לבחור כמה זמן אנחנו רוצים שיקח לאתר להיטען
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={decrement} variant="outlined">-</Button>
                <Button variant="outlined">set</Button>
                <Button variant="outlined">
                    {number}
                </Button>
                <Button onClick={increment} variant="outlined">+</Button>
            </CardActions>
        </Card>
    );
}
