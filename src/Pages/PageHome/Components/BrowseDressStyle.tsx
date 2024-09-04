import React from 'react';
import { Box, Typography } from '@mui/material';
import Casual from '../../../Assests/Images/Casual.png';
import Formal from '../../../Assests/Images/Formal.png';
import Party from '../../../Assests/Images/Party.png';
import Gym from '../../../Assests/Images/Gym.png';

const dressStyles = [
    { label: 'Casual', image: Casual },
    { label: 'Formal', image: Formal },
    { label: 'Party', image: Party },
    { label: 'Gym', image: Gym },
];

const BrowseByDressStyle: React.FC = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#f4f4f4',
                padding: '100px',
                borderRadius: '16px',
                textAlign: 'center',
                width: '70%',
                margin: '0 auto',
            }}
        >
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                BROWSE BY DRESS STYLE
            </Typography>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gridTemplateRows: 'repeat(2, 1fr)',
                    gap: '10px',
                }}
            >
                {dressStyles.map((style) => (
                    <Box
                        key={style.label}
                        sx={{
                            position: 'relative',
                            borderRadius: '16px',
                            overflow: 'hidden',
                        }}
                    >
                        <img
                            src={style.image}
                            alt={style.label}
                            style={{
                                width: '80%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center',
                                borderRadius:'62px',
                            }}
                        />
                        <Typography
                            variant="h6"
                            sx={{
                                position: 'absolute',
                                top: '10px',
                                left: '10px',
                                color: '#000',
                                fontWeight: 'bold',
                                textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)',
                            }}
                        >
                            {style.label}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default BrowseByDressStyle;
