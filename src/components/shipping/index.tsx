import { Box, Text, Pressable } from 'native-base';
import React from 'react';
import ButtonCta from '../buttonCta';
import InputForm from '../input';

export default function Shipping(){

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
            
                <Box
                    w="100%"
                    marginBottom={3}
                >
                    <Pressable flexDirection="row">
                        <Text fontSize={16}>
                            Country
                        </Text>
                        <Text color="#0BADA2" marginLeft={1}>
                            * 
                        </Text>
                    </Pressable>

                    <InputForm
                       placeholder='Country'
                    />
                </Box>
                
                <Box
                    w="100%"
                    marginBottom={3}
                >
                    <Pressable flexDirection="row">
                        <Text fontSize={16}>
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
                    marginBottom={3}
                >
                    <Pressable flexDirection="row">
                        <Text fontSize={16}>
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
                    marginBottom={3}
                >
                    <Pressable>
                        <Text fontSize={16}>
                            Other
                        </Text>
                    </Pressable>
                    <InputForm
                       placeholder='Other'
                    />
                </Box>
            
            </Box>
            
            <ButtonCta
                title="Confirm and continue"
            />
    
        </Box>
    );
}