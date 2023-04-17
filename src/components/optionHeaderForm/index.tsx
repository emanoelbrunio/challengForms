import { Box, HStack, Pressable, Text } from "native-base";
import Check from '../../assets/checked.svg'

import { FormType, HeaderType } from "../../screens/Home";

type Item = {
    name: string;
    num: number;
    active: boolean;
    concluded: boolean;
}

type Props = {
    item: Item;
    onFormChange: (newForm: FormType) => void;
    onHeaderChange: (header: HeaderType[]) => void;
}

export default function OptionHeaderForm({ item, onFormChange, onHeaderChange } : Props ){

    const handleChangeForm = (item: Item) => {

        if (item.num === 1 ){
            onFormChange('shipping')
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

        else if (item.num === 2){
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

    }
    return (
        <>
            {
                item.concluded ? (
                    <Pressable
                        flexDir="row"
                        onPress={() => handleChangeForm(item)}
                    >
                        <Box
                            bg="#0BADA2"
                            w={7}
                            h={7}
                            borderRadius={100}
                            alignItems="center"
                            justifyContent="center"
                            marginRight={2}                
                        >
                            <Check width={15} height={20} fill="#fff"/>
                        </Box>
                        <Text
                            fontSize={15}
                            color="#000"
                            fontWeight="bold"
                        >          
                            { item.name }
                        </Text>
                    </Pressable>
                ) : (
                    <Pressable flexDir="row">
                        <Box
                            bg={`${ item.active ? "#000" : "#98999A" }`}
                            w={7}
                            h={7}
                            borderRadius={100}
                            alignItems="center"
                            justifyContent="center"
                            marginRight={2}                
                            >
                            <Text
                                color="#fff"
                                fontSize={14}
                            >
                                { item.num }
                            </Text>   
                        </Box>
                        <Text
                            fontSize={15}
                            fontWeight="bold"
                            color={`${ item.active ? "#000" : "#98999A" }`}
                        >
                            { item.name }
                        </Text>
                    </Pressable>
                    )
            }
            
        </>
            
        
    )
}