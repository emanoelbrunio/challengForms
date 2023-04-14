import { useState} from 'react'
import { Box, HStack, Pressable, Radio, Text } from "native-base";
import ButtonCta from "../buttonCta";
import { FormType, HeaderType } from '../../screens/Home'
import ArrowLeft from '../../assets/arrowLeft.svg'
import LogoVisa from '../../assets/logoVisa.svg'
import LogoMC from '../../assets/logoMC.svg'
import LogoAli from '../../assets/logoALiPay.svg'
import LogoPayPal from '../../assets/LogoPayPal.svg'
import LogoApplePay from '../../assets/logoApplePay.svg'

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

    return (
        <Box 
            alignItems="center"
            paddingX={5}
            w="100%"
            flex={1}
            justifyContent="space-between"
        >  
            <Box
                flex={1}
                w="100%"
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
                        flexDir="row"
                        w="100%"
                        justifyContent="space-between"
                        alignItems="center"
                        marginBottom={8}
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

                    <Box
                        flexDir="row"
                        w="100%"
                        justifyContent="space-between"
                        alignItems="center"
                        marginBottom={8}
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

                    <Box
                        flexDir="row"
                        w="100%"
                        justifyContent="space-between"
                        alignItems="center"
                        marginBottom={8}
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

                    <Box
                        flexDir="row"
                        w="100%"
                        justifyContent="space-between"
                        alignItems="center"
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
                    
                    

                    

                </Radio.Group>
            </Box>
          

            <ButtonCta title="Confirm and continue" onPress={handleChangeForm}/>
            
        </Box>
    )
}