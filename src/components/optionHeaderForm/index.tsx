import { Box, HStack, Text } from "native-base";
import Check from '../../assets/checked.svg'

type Prop = {
    name: string;
    num: number;
    active: boolean;
    concluded: boolean;
}

export default function OptionHeaderForm({ item }: { item : Prop} ){
    return (
        <>
            {
                item.concluded ? (
                    <HStack>
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
                    </HStack>
                ) : (
                    <HStack>
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
                    </HStack>
                    )
            }
            
        </>
            
        
    )
}