import { Box } from "native-base";
import ButtonCta from "../buttonCta";
import { FormType, HeaderType } from '../../screens/Home'

type Props = {
    onFormChange: (newForm: FormType) => void;
    onHeaderChange: (header: HeaderType[]) => void;
};


export default function Review ({ onFormChange, onHeaderChange } : Props) {
    const back = () => {
        onFormChange('payment');
        onHeaderChange([
            {
                name: 'Shipping', 
                num: 1,
                active: true,
                concluded: true,
            },
            {
                name: 'Payment', 
                num: 2,
                active: true,
                concluded:false,
            },
            {
                name: 'Review', 
                num: 3,
                active: false,
                concluded: false,
            }
        ])
    }
    return (
        <Box>
            Review

            <ButtonCta title='Voltar' onPress={back}/>
        </Box>
    )
}