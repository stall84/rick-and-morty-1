import React, { useState } from 'react'
import PropTypes from 'prop-types'

import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../graphql/queries';


import { ListContainer } from './styled-components/ListContainer';





export default function CharacterSelection(props) {

    // State functions to track which 'page' the user is on so that the corresponding graphQL page can be queried on demand
    const [currentPage, setcurrentPage] = useState(0);
    const { loading, error, data } = useQuery(GET_CHARACTERS, {
        variables: { page: 1 }
    });

    if (loading) return 'Loading, Please Wait ...';
    if (error) return `The following error occurred: ${error.message}`;
    console.log(data);


   
    
    
    const CharacterStepperList = () => {
        
         // Individual Character 'List Item'
        const CharacterRow = (props) => {
      
            return (
                <ListItem button >
                    <ListItemText>
                        Test Row: {data.characters.results[0].name}
                    </ListItemText>
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
            <ListContainer>
                { data &&
                    <CharacterRow />
                }
                <MobileStepper 
                    variant="progress"
                    steps={6}
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
                            disabled={currentPage === 0}>
                        LAST PAGE <KeyboardArrowLeft />   
                        </Button>
                    }
                />
            </ListContainer>
        )
    }

    return (
        <div>
            <h2>LANDING SELECTION</h2>
            <h4>Choose the character you want to know more about below</h4>
            <CharacterStepperList />
        </div>
    )
}

/**
 * @description 
 */

CharacterSelection.propTypes = {

}


