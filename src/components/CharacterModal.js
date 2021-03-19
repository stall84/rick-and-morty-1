import React from 'react'

// Material-UI Imports
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

// Loading Spinner
import Loader from 'react-loader-spinner';

// Apollo-GQL Imports
import { useQuery } from '@apollo/client';
import { GET_CHARACTER } from '../graphql/queries';

// Custom component imports
import { StyledModal } from './styled-components/StyledModal';


// Utilizing Material's JSX type styling for their Avatar component
const useStyles = makeStyles((theme) => ({
      avatar: {
          width: theme.spacing(12),
          height: theme.spacing(12),
          border: '0.5px solid black',
      }
}));

export default function CharacterModal(props) {

    const classes = useStyles();

     const { loading, error, data } = useQuery(GET_CHARACTER, {
         variables: {id: props.characterId}
     })
     if (loading) return (
         <Loader 
            type="Puff"
            color="rgb(251, 209, 188)"
            height={180}
            width={180}
            timeout={2000}
            />
     );
     if (error) return `The following error occurred: ${error.message}`;

    // Individual Character rendering 
     const characterDetail = (
        <StyledModal>
             <Avatar 
             alt={`Character Avatar ID: ${props.characterId}`} 
             src={data.character.image}
             className={classes.avatar}
             />
             <p>Name: <span className="characterDetailText">{data.character.name}</span></p>
             <p>Species: <span className="characterDetailText">{data.character.species}</span></p>
             <p>Gender: <span className="characterDetailText">{data.character.gender}</span></p>
             <p>Location: <span className="characterDetailText">{data.character.location.name}</span></p>
             <p>Status: <span className="characterDetailText">{data.character.status}</span></p>
        </StyledModal>
     )
    return (
        <Modal
            open={props.open}
            onClose={props.close}
            >           
                    {characterDetail}           
        </Modal>
    )
}
