import { useState, useEffect} from 'react'
import { Box, Checkbox, HStack, Pressable, Text  } from "native-base";
import { FormType, HeaderType } from '../../screens/Home'
import InputForm from '../input';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { MaskService} from 'react-native-masked-text';
type Props = {
    onFormChange: (newForm: FormType) => void;
    onHeaderChange: (header: HeaderType[]) => void;
};

type FormPropsCreditCard = {
    nameOnCard: string;
    cardNumber: string;
    expirationDate: string;
    securityCode: string;
}

const formCreditCardSchema = yup.object({
    nameOnCard: yup.
                string()
                .required('Enter name on card')
                .min(5, 'At least 5 letters'),
    cardNumber: yup.string()
                .required('Enter card number')
                .min(16, 'At least 16 letters'),
    expirationDate: yup.string()
                    .required('Enter date')                 
                
})



export default function FormCreditCard ({ onFormChange, onHeaderChange } : Props) {
    const [valueCheckBox, setValueCheckBox] = useState(false);
    const [expirationDate, setExpiration] = useState('');

    const { control, handleSubmit, formState : { errors} } = useForm<FormPropsCreditCard> ({
        resolver: yupResolver(formCreditCardSchema)
    })

    function handleSubmitFields ( data: FormPropsCreditCard) {
        console.log(data);
    }


    const [numberCard, setNumberCard] = useState('')
    function handleSetNumber(value: string) {
        const cardCredit = MaskService.toMask('credit-card', value, {
            separator: ' '
        })
        setNumberCard(cardCredit)
    }


    return (
        <Box w="100%">
            <Box
                paddingY={5}
                w="100%"
            >
                <Box
                    w="100%"
                >
                    <Pressable w="100%" flexDirection="row" marginBottom={1}
                    >
                        <Text
                            fontSize={16}
                            fontWeight={700}
                            w="100%"
                        >
                            Name on card
                        </Text>
                    </Pressable>

                    <Controller
                        control={control}
                        name='nameOnCard'

                        render={( { field : {onChange, value}}) => (
                            <InputForm
                                placeholder='Luke Sky Walker'
                                
                                onChangeText={onChange}
                                value={value}
                                errorMessage={errors.nameOnCard?.message}
                            />
                        )}
                    />
                
                    
                </Box>

                <Box
                    w="100%"
                >
                    <Pressable
                        w="100%"
                        flexDirection="row"
                        marginBottom={1}
                    >
                        <Text
                            fontSize={16}
                            fontWeight={700}
                            w="100%"
                        >
                            Card number
                        </Text>
                    </Pressable>

                    <Controller
                        control={control}
                        name='cardNumber'

                        render={( {field: { value, onChange}} ) => (
                            <InputForm
                                placeholder='1234 1234 1234 1234'
                                keyboardType='numeric'

                                value={numberCard}
                                onChangeText={ (text) => {
                                    onChange(text);
                                    handleSetNumber(text)
                                } }

                                errorMessage={errors.cardNumber?.message}
                            />
                        )}
                    
                    />
                    
                </Box>

                <HStack
                    justifyContent="space-between"
                >

                    <Box w="47.5%">
                        <Pressable
                        
                            flexDirection="row"
                            marginBottom={1}
                        >
                            <Text
                                fontSize={16}
                                fontWeight={700}
                                
                            >
                                Expiration date
                            </Text>
                        </Pressable>

                        <Controller 
                            control={control}
                            name='expirationDate'

                            render={ ()=> (
                                <InputForm
                                    placeholder='MM/YY'
                                    keyboardType='numeric'
                                    maxLength={6}
                                    

                                    errorMessage={errors.expirationDate?.message}
                                    
                                />
                            )}
                        />
                    </Box>

                    <Box
                        w="47.5%"
                    >
                        <Pressable
                        
                            flexDirection="row"
                            marginBottom={1}
                        >
                            <Text
                                fontSize={16}
                                fontWeight={700}
                                
                            >
                                Security code
                            </Text>
                        </Pressable>
                        <InputForm
                            placeholder='CVC'
                            fontSize={14}
                            padding={3}
                            keyboardType='numeric'
                        />
                    </Box>

                </HStack>

                <Checkbox
                    value="check"
                    my={1}
                    colorScheme="gray"
                >  
                    <Text fontSize={13}>
                        My billing address is the same as my shipping address
                    </Text>
                </Checkbox>

            </Box>
        
        <Pressable onPress={handleSubmit(handleSubmitFields)}>
            <Text>
                Clique
            </Text>
        </Pressable>
           
        </Box>
    )
};