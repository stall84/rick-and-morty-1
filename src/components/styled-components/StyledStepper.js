import { styled } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';


export const StyledStepper = styled(MobileStepper)({
         width: 360,
         backgroundColor: 'rgb(206, 192, 190)',
         borderBottomLeftRadius: '3%',
         borderBottomRightRadius: '3%',
         position: 'relative',
         overflow: 'auto',
         maxHeight: 300,
})