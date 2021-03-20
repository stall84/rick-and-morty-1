import React, { useState } from 'react'

// Material-UI Imports
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Loader from 'react-loader-spinner';


// Apollo-GraphQL imports
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../graphql/queries';

// Custom Components
import { ListContainer } from './styled-components/ListContainer';
import { SpacerDiv } from './styled-components/ListContainer';
import { StyledList } from './styled-components/StyledList';
import { StyledStepper } from './styled-components/StyledStepper';
import CharacterModal from './CharacterModal';

export default function CharacterSelection(props) {

    // Individual character modal state
    const [modalOpen, setModalOpen] = useState(false);

    // State functions to track which 'page' the user is on so that the corresponding graphQL page can be queried on demand
    const [currentPage, setcurrentPage] = useState(1);

    // On user character select, store ID to forward to modal gql call
    // This also tracks the 'active' character
    const [characterId, setCharacterId] = useState('');
   

    // GraphQL 'controller' hooks and load-rendering
    const { loading, error, data } = useQuery(GET_CHARACTERS, {
        variables: { page: currentPage }
    });

    if (loading) return (
        <Loader 
            type="TailSpin"
            color="rgb(251, 209, 188)"
            height={180}
            width={180}
            timeout={2000}
        />
    );
    if (error) return `The following error occurred: ${error.message}`;

    const characterHandler = (id) => {
        // When user selects character, set that ID, set the modal state to open
        setCharacterId(id);
        setModalOpen(true);
    }
    
    const modalCloseHandler = () => {
        // If the modal is open, and this prop-forwarded function is called, close the modal and reset
        // the character ID
        if (modalOpen) {
            setModalOpen(false);
            setCharacterId('');
        }
    }

    // Compound Component that will render out each character from the API (In groups of 20)
    const CharacterStepperList = () => {
        
         // Individual Character 'List Item'
        const CharacterRow = (props) => {
            const { id, name, image } = props.characterInfo;
            return (
                <ListItem
                    button 
                    id={id} 
                    onClick={e => characterHandler(id)}
                    divider={true}
                    >
                    <ListItemText primary={name} />
                    <ListItemAvatar>
                        <Avatar 
                            alt={`Avatar number: ${id}`} 
                            src={image}
                        />
                    </ListItemAvatar>    
                </ListItem>
            )
        
        }
        
        const nextStepHandler = () => {
            // Increment the current characters page user is on by one when they click to move 'up' in pages
            setcurrentPage((lastStep) => lastStep + 1); 
        }

        const previousStepHandler = () => {
            // Decrement the page number to go back to previous page of characters
            setcurrentPage((lastStep) => lastStep - 1);
        }

        return (
            <>
            { characterId && 
                < CharacterModal 
                    characterId={characterId} 
                    open={modalOpen}
                    close={modalCloseHandler}    
                />
            }
            <ListContainer>     
                <SpacerDiv>
                <StyledList>
                    { data && data.characters.results.map((char, i) => {
                        return <CharacterRow characterInfo={char} key={i} />
                        })
                    }
                </StyledList>
                </SpacerDiv>
                <StyledStepper
                    variant="progress"
                    steps={34}
                    position="static"
                    activeStep={currentPage}
                    nextButton={
                        <Button size="small" 
                            onClick={nextStepHandler}
                            disabled={currentPage === 34}>
                         NEXT PAGE <KeyboardArrowRight />
                        </Button>
                    }
                    backButton={
                        <Button size="small"
                            onClick={previousStepHandler}
                            disabled={currentPage === 1}>
                        LAST PAGE <KeyboardArrowLeft />   
                        </Button>
                    }
                />
            </ListContainer>
            </>
        )
    }

    return (
        <>
            <h3>Choose the character you want to know more about below!</h3>
            <CharacterStepperList />
        </>
    )
}


