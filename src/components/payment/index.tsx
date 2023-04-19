import { useState, useEffect} from 'react'
import { Keyboard } from 'react-native';

import { Box, Checkbox, HStack, Pressable, Radio, ScrollView, Text } from "native-base";
import ButtonCta from "../buttonCta";
import { FormType, HeaderType } from '../../screens/Home'
import ArrowLeft from '../../assets/arrowLeft.svg'
import LogoVisa from '../../assets/logoVisa.svg'
import LogoMC from '../../assets/logoMC.svg'
import LogoAli from '../../assets/logoALiPay.svg'
import LogoPayPal from '../../assets/LogoPayPal.svg'
import LogoApplePay from '../../assets/logoApplePay.svg'
import InputForm from '../input';

type Props = {
    onFormChange: (newForm: FormType) => void;
    onHeaderChange: (header: HeaderType[]) => void;
};

export default function Payment ({ onFormChange, onHeaderChange } : Props) {

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
        onFormChange('shipping');
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
    }
    
    const [value, setValue] = useState("");
    const [valueCheckBox, setValueCheckBox] = useState(false);

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
                
                flex={1}
            >
                <ScrollView
                    w="100%"  
                    marginBottom={0}
                    flex={1}
                >
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
                    
                    <Radio.Group  
                        name="myRadioGroup"
                        accessibilityLabel="colorscheme"
                        value={value}
                        onChange={nextValue => { setValue(nextValue) }}
                    >   

                        <Box
                            flexDir="column"
                            w="100%"
                        >
                            <Box
                                flexDir="row"
                                w="100%"
                                justifyContent="space-between"
                                alignItems="center"
                                marginBottom={ value === "creditCard" ? 0 : 8 }
                                
                            >
                                <Radio
                                    value="creditCard"
                                    my={1}
                                    w={7}
                                    h={7}   
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

                            <Box w="100%">
                                {
                                    value === "creditCard" ? (

                                        <Box
                                            paddingY={5}
                                            w="100%"
                                        >
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
                                                        Name on card
                                                    </Text>
                                                </Pressable>
                                                <InputForm
                                                    w="100%"
                                                    placeholder='Luke Sky Walker'
                                                    fontSize={14}
                                                    padding={3}
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
                                                <InputForm
                                                    w="100%"
                                                    placeholder='1234 1234 1234 1234'
                                                    fontSize={14}
                                                    padding={3}
                                                />
                                            </Box>

                                            <HStack
                                                justifyContent="space-between"
                                            >

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
                                                            Expiration date
                                                        </Text>
                                                    </Pressable>
                                                    <InputForm
                                                    
                                                        placeholder='MM/YY'
                                                        fontSize={14}
                                                        padding={3}
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
                                    ) : (
                                        <Text display="none"></Text>
                                    )
                                }
                            </Box>
                        </Box>

                        <Box
                            flexDir="column"
                            w="100%"
                        >
                            <Box
                                flexDir="row"
                                w="100%"
                                justifyContent="space-between"
                                alignItems="center"
                                marginBottom={ value === "applePay" ? 0 : 8 }
                                
                            >
                                <Radio
                                    value="applePay"
                                    my={1}
                                    w={7}
                                    h={7}   
                                >
                                    <Text
                                        fontSize={18}
                                        fontWeight={500}
                                        marginLeft={3}
                                    >
                                        Apple Pay
                                    </Text>
                                </Radio>

                                <Box
                                    flexDir="row"
                                    alignItems="center" 
                                >
                                    <LogoApplePay width={50} height={25} fill="#000"/>
                                </Box>
                            </Box>

                            <Box w="100%">
                                {
                                    value === "applePay" ? (

                                        <Box
                                            paddingY={5}
                                            w="100%"
                                        >
                                        <Text> Apple Pay</Text>

                                        </Box>
                                    ) : (
                                        <Text display="none"></Text>
                                    )
                                }
                            </Box>
                        </Box>

                        <Box
                            flexDir="column"
                            w="100%"
                        >
                            <Box
                                flexDir="row"
                                w="100%"
                                justifyContent="space-between"
                                alignItems="center"
                                marginBottom={ value === "payPal" ? 0 : 8 }
                                
                            >
                                <Radio
                                    value="payPal"
                                    my={1}
                                    w={7}
                                    h={7}   
                                >
                                    <Text
                                        fontSize={18}
                                        fontWeight={500}
                                        marginLeft={3}
                                    >
                                        PayPal
                                    </Text>
                                </Radio>

                                <Box
                                    flexDir="row"
                                    alignItems="center" 
                                >
                                    <LogoPayPal width={60} height={25}/>
                                </Box>
                            </Box>

                            <Box w="100%">
                                {
                                    value === "payPal" ? (

                                        <Box
                                            paddingY={5}
                                            w="100%"
                                        >
                                        <Text> PayPal</Text>

                                        </Box>
                                    ) : (
                                        <Text display="none"></Text>
                                    )
                                }
                            </Box>
                        </Box>

                        <Box
                            flexDir="column"
                            w="100%"
                        >
                            <Box
                                flexDir="row"
                                w="100%"
                                justifyContent="space-between"
                                alignItems="center"
                                marginBottom={ value === "alypay" ? 0 : 8 }
                                
                            >
                                <Radio
                                    value="alypay"
                                    my={1}
                                    w={7}
                                    h={7}   
                                >
                                    <Text
                                        fontSize={18}
                                        fontWeight={500}
                                        marginLeft={3}
                                    >
                                        Alipay
                                    </Text>
                                </Radio>

                                <Box
                                    flexDir="row"
                                    alignItems="center" 
                                >
                                    <LogoAli width={55} height={25}/>
                                </Box>
                            </Box>

                            <Box w="100%">
                                {
                                    value === "alypay" ? (

                                        <Box
                                            paddingY={5}
                                            w="100%"
                                        >
                                        <Text> Alipay </Text>

                                        </Box>
                                    ) : (
                                        <Text display="none"></Text>
                                    )
                                }
                            </Box>
                        </Box>
                        
                    </Radio.Group>
                </ScrollView>
                
            </Box>
                
            
            <ButtonCta               
                title="Confirm and continue"
                onPress={handleChangeForm}
                display= { keyboard ? 'none' : 'flex'}   
            />
            
            
        </Box>
    )
}