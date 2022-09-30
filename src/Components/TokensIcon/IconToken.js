import { Box, Button } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import tokenimg from '../../Assets/Images/BUSD.webp'
import Ethereum from '../../Assets/chain-icon/ethereum.svg'
import tokenbnb from '../../Assets/chain-icon/bsc.svg'
import { useParams, useLocation, useNavigate } from 'react-router-dom';



const Tonkenbtn = styled.button`
    display: flex; 
    gap:10px;
    background: #1b2d42;
    border:none;
    align-items: center;
    padding: 8px 12px;
    border-radius: 50px;
    color: ${({ theme }) => theme.text};
    cursor: pointer;
    font-size: 14px;
`

const Tokenbg = styled.div`
    background: ${({ theme }) => theme.bg}; 
    width: 554px;
`
const Tokensbox = styled.div`
    background: ${({ theme }) => theme.bg}; 
    padding: 10px 20px;
    color: ${({ theme }) => theme.text};
    width: 17%;
    text-align: center;
    cursor: pointer;
    border-radius: 5px;
    &:hover {
        background: ${({ theme }) => theme.bgitems}; 
    }
`

const Searchinput = styled.input`
    padding: 14px 20px;
    width: 100%;
    border-radius: 20px;
    border: none;
    background: #0b131d;
    color: ${({ theme }) => theme.text}; 
    font-size: 18px;
`


const IconToken = () => {

    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');
    let {chain} = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    if(!chain){
        chain = "ethereum";
    }

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    function handleClick(selectedChain){
        const newLocation = location.pathname.replace(chain, selectedChain);
        navigate(newLocation);
    }

    return (
        <div>
            <Box>
                <Tonkenbtn type='submit' onClick={handleClickOpen('paper')}>
                    <img src={tokenimg} width='25px' style={{ borderRadius: '50px' }} />
                    <span>{chain.toUpperCase()}</span>
                    <ExpandMoreRoundedIcon />
                </Tonkenbtn>
            </Box>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <Tokenbg>
                    <DialogTitle id="scroll-dialog-title">
                        <Box>
                            <Searchinput type='search' placeholder='search' />
                        </Box>
                    </DialogTitle>
                    <DialogContent dividers={scroll === 'paper'}>
                        <DialogContentText
                            id="scroll-dialog-description"
                            ref={descriptionElementRef}
                            tabIndex={-1}
                        >
                            <Box display='flex' alignItems='center' flexWrap='wrap'>
                                <Tokensbox>
                                    <Box>
                                        <span>ALL</span>
                                    </Box>
                                    <Box>
                                        <span>CHAINS</span>
                                    </Box>
                                </Tokensbox>
                                <Tokensbox onClick={() => handleClick("ethereum")}>
                                    <Box>
                                        <img src={Ethereum} width='25px' height='25px' style={{ borderRadius: '50px' }} />
                                    </Box>
                                    <Box>
                                        <span>Ethereum</span>
                                    </Box>
                                </Tokensbox>
                                <Tokensbox onClick={() => handleClick("bsc")}>
                                    <Box>
                                        <img src={tokenbnb} width='25px' height='25px' style={{ borderRadius: '50px' }} />
                                    </Box>
                                    <Box>
                                        <span>BNB Chain</span>
                                    </Box>
                                </Tokensbox>
                                <Tokensbox onClick={() => handleClick("avalanche")}>
                                    <Box>
                                        <img src={tokenimg} width='25px' style={{ borderRadius: '50px' }} />
                                    </Box>
                                    <Box>
                                        <span>Avalanche</span>
                                    </Box>
                                </Tokensbox>
                                <Tokensbox>
                                    <Box>
                                        <img src={tokenimg} width='25px' style={{ borderRadius: '50px' }} />
                                    </Box>
                                    <Box>
                                        <span>BNB</span>
                                    </Box>
                                </Tokensbox>
                            </Box>
                        </DialogContentText>
                    </DialogContent>
                </Tokenbg>
            </Dialog>
        </div>
    )
}

export default IconToken;