import React, { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';
import { Box, Text, Pressable, ScrollView, KeyboardAvoidingView } from 'native-base';
import ButtonCta from '../buttonCta';
import InputForm from '../input';

import { useForm, Controller } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { FormType, HeaderType } from '../../screens/Home';


type Props = {
    onFormChange: (newForm: FormType) => void;
    onHeaderChange: (header: HeaderType[]) => void;
}

export type FormProps = {
    country:  string;
    fullName: string;
    streetAddress: string;
    other ?: string;
    luke: string;
}

const formSchema = yup.object({
    country: yup.string().required('Enter country name').min(3, 'At least 3 letters'),
    fullName: yup.string().required('Enter your full name').min(5, 'At least 3 letters'),
    streetAddress: yup.string().required('Enter street address').min(5, 'At least 5 letters'),
})

export default function Shipping( { onFormChange, onHeaderChange } : Props){
    const [keyboard, setKeyboard] = useState(false);

    useEffect(() => {

        const keyboardDidShowListener = Keyboard.addListener(
          'keyboardDidShow',
          () => setKeyboard(true),
        );
    
        const keyboardDidHideListener = Keyboard.addListener(
          'keyboardDidHide',
          () => setKeyboard(false),
        );
    
        return () => {
          keyboardDidShowListener.remove();
          keyboardDidHideListener.remove();
        };
 
    }, []);
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

    const { control, handleSubmit, formState : {errors} } = useForm<FormProps> ({
        // passo como resolver o schema (tipo) de validaçãp que quero aplicar com yup
        resolver: yupResolver(formSchema)
    });

    function handleSubmitFields (data: FormProps) {
        handleChangeForm() 
    }

    return (


        <Box
            alignItems="center"
            w="100%"
            flex={1}
            justifyContent="space-between"
        >

            <ScrollView w="100%" marginBottom={2} paddingX={5}> 
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
                            Country: 
                        </Text>
                        <Text color="#0BADA2" marginLeft={1}>
                            * 
                        </Text>
                    </Pressable>

                    <Controller
                        control={ control }
                        name="country"
                        // rules={{
                        //     required: 'Enter country name',
                        //     minLength: {
                        //         value: 3,
                        //         message: 'At least 3 letters'
                        //     },
                        //     //pattern: {
                        //     // }
                        // }}
                        render={({ field: { onChange} }) => (
                            <InputForm
                                placeholder='Country'
                                onChangeText={onChange}
                                errorMessage={errors.country?.message}
                            />
                        )}
                    />
                </Box>
                
                <Box
                    w="100%"
                >
                    <Pressable flexDirection="row">
                        <Text fontSize={18}>
                            Full name:  
                        </Text>
                        <Text color="#0BADA2" marginLeft={1}>
                            * 
                        </Text>
                    </Pressable>

                    <Controller
                        control={ control }
                        name="fullName"
                        
                        render={({ field: { onChange} }) => (
                            <InputForm
                                placeholder='Full name'
                                onChangeText={onChange}
                                errorMessage={errors.fullName?.message}  
                            />
                        )}
                        
                    />                    
                </Box>

                <Box
                    w="100%"
                >
                    <Pressable flexDirection="row">
                        <Text fontSize={18}>
                            Street address:  
                        </Text>
                        <Text color="#0BADA2" marginLeft={1}>
                            * 
                        </Text>
                    </Pressable>

                    <Controller
                        control={ control }
                        name="streetAddress"
                        
                        render={({ field: { onChange} }) => (
                            <InputForm
                                placeholder='Street Address'
                                onChangeText={onChange}
                                errorMessage={errors.streetAddress?.message}
                            />
                        )}
                        
                    />
                    
                </Box>
                
                <Box
                    w="100%"
                >
                    <Pressable>
                        <Text fontSize={18}>
                            Other: 
                        </Text>
                    </Pressable>

                    <Controller
                        control={ control }
                        name="other"
                        render={({ field: { onChange} }) => (
                            <InputForm
                                placeholder='Other'
                                onChangeText={onChange}
                                
                            />
                        )}
                        
                    />
                    
                </Box>
                
                
            </ScrollView>  
           
            <Box
                bg="#f9f9f9"
                w="100%"   
                padding={5} 
                paddingTop={3}  
                borderTopColor="#c4c4c4"
                borderTopWidth={0.2} 
                
                display= { keyboard ? 'none' : 'flex'}    
            >
            
                <ButtonCta
                    title="Confirm and continue"
                    onPress={handleSubmit(handleSubmitFields)}
                />
            </Box>                 
    
        </Box>
        
        
    );
}

