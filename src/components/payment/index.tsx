import { useState, useEffect} from 'react'
import { Keyboard, RootTagContext } from 'react-native';

import { Alert, Box, Checkbox, HStack, Pressable, Radio, ScrollView, Text  } from "native-base";
import ButtonCta from "../buttonCta";
import { FormType, HeaderType } from '../../screens/Home'
import ArrowLeft from '../../assets/arrowLeft.svg'
import LogoVisa from '../../assets/logoVisa.svg'
import LogoMC from '../../assets/logoMC.svg'
import LogoAli from '../../assets/logoALiPay.svg'
import LogoPayPal from '../../assets/LogoPayPal.svg'
import LogoApplePay from '../../assets/logoApplePay.svg'
import InputForm from '../input';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import FormCreditCard from '../formCreditCard';

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
                string().
                required('Enter name on card')
                .min(16, 'At least 3 letters')
                .matches(/^([a-zA-Z]{4}\s)*[a-zA-Z]{0,4}$/, 'Please enter a valid name on card')
})

export default function Payment ({ onFormChange, onHeaderChange } : Props) {

    const [value, setValue] = useState("");
    const [keyboard, setKeyboard] = useState(false);
    const [method, setMethod] = useState('')

    const { control, handleSubmit, formState : { errors} } = useForm<FormPropsCreditCard> ({
        resolver: yupResolver(formCreditCardSchema)
    })


    const handleChangeForm =  () => {
        onFormChange('review')
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
                concluded: true,
            },
            {
                name: 'Review', 
                num: 3,
                active: true,
                concluded: false,
            }
        ])
    }

    const back = () => {

        method === 'creditCard' ? (
            setMethod('')
        ) : (
            onFormChange('shipping'),
            onHeaderChange([
                {
                    name: 'Shipping', 
                    num: 1,
                    active: true,
                    concluded: false,
                },
                {
                    name: 'Payment', 
                    num: 2,
                    active: false,
                    concluded:false,
                },
                {
                    name: 'Review', 
                    num: 3,
                    active: false,
                    concluded: false,
                }
            ])
        )
        
        
    }

   
    function handleSubmitFields ( data: FormPropsCreditCard) {
        console.log(data);
    }

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

    
    return (
        <Box 
            alignItems="center"
            w="100%"
            flex={1}
            justifyContent="space-between"
        >  
                
            <ScrollView w="100%" marginBottom={2} paddingX={5} >
        
                <Box
                    paddingTop={5}
                    paddingBottom={10}
                > 
                    <Pressable
                        w="100%"
                        flexDirection="row"
                        alignItems="center"
                        onPress={back} 
                        paddingBottom={2}
                    >
                        <ArrowLeft
                            width={20}
                            height={20}
                            fill="#000"
                        />

                        <Text
                            fontWeight="bold"
                            fontSize={22}
                            marginLeft={2}
                        >
                            Choose a payment method
                        </Text>
                    </Pressable>

                    <Text>
                        You will not be charged until you review this order on the next page
                    </Text>
                </Box>
                
                {
                    method !== 'creditCard'? (
                        <Radio.Group  
                            name="myRadioGroup"
                            accessibilityLabel="select option"
                            value={value}
                            onChange={ nextValue => setValue(nextValue) }
                        >   
                            <Box
                                flexDir="row"
                                w="100%"
                                justifyContent="space-between"
                                alignItems="center"
                                marginBottom={ 8 }
                            >
                                <Radio
                                    value="creditCard"
                                    my={1}
                                    w={7}
                                    h={7}  
                                    colorScheme='gray'  
                                >
                                    <Text
                                        fontSize={18}
                                        fontWeight={500}
                                        marginLeft={3}
                                    >
                                        Credit Card
                                    </Text>
                                </Radio>

                                <Box
                                    flexDir="row"
                                    alignItems="center" 
                                >
                                    <LogoMC width={35} height={25}/>
                                    <LogoVisa width={35} height={25} style={{marginLeft: 10}}/>
                                </Box>
                            </Box>
                            
                            <Box
                                flexDir="row"
                                w="100%"
                                justifyContent="space-between"
                                alignItems="center"
                                marginBottom={ 8 }

                            >
                                <Radio
                                    value="applePay"
                                    my={1}
                                    w={7}
                                    h={7} 
                                    colorScheme='gray'   
                                >
                                    <Text
                                        fontSize={18}
                                        fontWeight={500}
                                        marginLeft={3}
                                    >
                                        Apple Pay
                                    </Text>
                                </Radio>

                                <Box flexDir="row" alignItems="center">
                                    <LogoApplePay width={50} height={25} fill="#000"/>
                                </Box>
                            </Box>   
                            
                            <Box
                                flexDir="row"
                                w="100%"
                                justifyContent="space-between"
                                alignItems="center"
                                marginBottom={ 8 }
                            >
                                <Radio
                                    value="payPal"
                                    my={1}
                                    w={7}
                                    h={7}  
                                    colorScheme='gray' 
                                >
                                    <Text
                                        fontSize={18}
                                        fontWeight={500}
                                        marginLeft={3}
                                    >
                                        PayPal
                                    </Text>
                                </Radio>

                                <Box flexDir="row" alignItems="center">
                                    <LogoPayPal width={60} height={25}/>
                                </Box>
                            </Box>
                            
                            <Box
                                flexDir="row"
                                w="100%"
                                justifyContent="space-between"
                                alignItems="center"
                                marginBottom={ 8 }
                            >
                                <Radio
                                    value="alypay"
                                    my={1}
                                    w={7}
                                    h={7}   
                                    colorScheme='gray'
                                >
                                    <Text
                                        fontSize={18}
                                        fontWeight={500}
                                        marginLeft={3}
                                    >
                                        Alipay
                                    </Text>
                                </Radio>

                                <Box flexDir="row" alignItems="center">
                                    <LogoAli width={55} height={25}/>
                                </Box>
                            </Box>

                        </Radio.Group> 
                    ) : (
                        <Box>
                            <Radio.Group  
                                name="myRadioGroup"
                                accessibilityLabel="select option"
                                value={value}
                                onChange={ nextValue => setValue(nextValue) }
                            >   
                                <Box
                                    flexDir="row"
                                    w="100%"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    marginBottom={ 1 }
                                >
                                    <Radio
                                        value="creditCard"
                                        my={1}
                                        w={7}
                                        h={7}  
                                        colorScheme='gray'  
                                    >
                                        <Text
                                            fontSize={18}
                                            fontWeight={500}
                                            marginLeft={3}
                                        >
                                            Credit Card
                                        </Text>
                                    </Radio>

                                    <Box
                                        flexDir="row"
                                        alignItems="center" 
                                    >
                                        <LogoMC width={35} height={25}/>
                                        <LogoVisa width={35} height={25} style={{marginLeft: 10}}/>
                                    </Box>
                                </Box>
                            </Radio.Group>

                            <FormCreditCard onFormChange={onFormChange} onHeaderChange={onHeaderChange}/>
                        </Box>
                    )
                }
                      
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
                    onPress={ () => {
                        value !== 'creditCard' ? (
                            console.log('value is empty')
                        ) : (
                            setMethod('creditCard')
                        );                        
                    }}     
                />
                   
            </Box>  
            
            
            
        </Box>
    )
}