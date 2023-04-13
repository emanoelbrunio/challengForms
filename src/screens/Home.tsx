import { HeaderForm } from "../components/headerForm"
import Shipping from "../components/shipping"
import { Box, HStack, Pressable, Text } from "native-base"


export function Home() {
    return (
        <Box
            flex={1}
        >
            <HStack
                backgroundColor="#000"
                w="100%"
                padding={5}
                safeArea
                alignItems="center"
            >
                <Pressable>
                    <Text
                        color="#a1a1a1"
                        fontSize={16}
                    >
                        Cancel
                    </Text>
                </Pressable>

                <Text
                    color="#fff"
                    fontSize={18}
                >
                    Checkout
                </Text>
            </HStack>

            <HeaderForm />
            <Shipping />
        </Box>
    )
}

