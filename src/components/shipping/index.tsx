import { Box, Text, Pressable } from 'native-base';
import React from 'react';
import ButtonCta from '../buttonCta';
import InputForm from '../input';

import { FormType, HeaderType } from '../../screens/Home';

type Props = {
    onFormChange: (newForm: FormType) => void;
    onHeaderChange: (header: HeaderType[]) => void;
}



export default function Shipping( { onFormChange, onHeaderChange } : Props){

    const handleChangeForm = () => {
        onFormChange('payment')
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
                concluded: false,
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
        <Box
            alignItems="center"
            paddingX={5}
            w="100%"
            flex={1}
            justifyContent="space-between"
           
        >
                        
            <Box
                w="100%"
                alignItems="center"
            >
                <Text
                    fontWeight="bold"
                    fontSize={22}
                    w="100%"
                    marginY={5}
                >
                    Enter your shipping address
                </Text>

                <Box
                    w="100%"
                >
                    <Pressable flexDirection="row">
                        <Text fontSize={18}>
                            Country
                        </Text>
                        <Text color="#0BADA2" marginLeft={1}>
                            * 
                        </Text>
                    </Pressable>

                    <InputForm
                       placeholder='Country'
                       isInvalid
                    //    errorMessage="Name is Country invalid"
                    />
                </Box>
                
                <Box
                    w="100%"
                >
                    <Pressable flexDirection="row">
                        <Text fontSize={18}>
                            Full name 
                        </Text>
                        <Text color="#0BADA2" marginLeft={1}>
                            * 
                        </Text>
                    </Pressable>
                    <InputForm
                       placeholder='Full name'
                    />
                </Box>

                <Box
                    w="100%"
                >
                    <Pressable flexDirection="row">
                        <Text fontSize={18}>
                            Street address 
                        </Text>
                        <Text color="#0BADA2" marginLeft={1}>
                            * 
                        </Text>
                    </Pressable>
                    <InputForm
                       placeholder='Street Address'
                    />
                </Box>
                
                <Box
                    w="100%"
                >
                    <Pressable>
                        <Text fontSize={18}>
                            Other
                        </Text>
                    </Pressable>
                    <InputForm
                       placeholder='Other'
                    />
                </Box>
            
            </Box>
            
            <ButtonCta title="Confirm and continue" onPress={handleChangeForm}/>
    
        </Box>
    );
}