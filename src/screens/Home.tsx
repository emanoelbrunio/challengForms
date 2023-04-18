import { useState } from "react"
import { HeaderForm } from "../components/headerForm"
import Shipping from "../components/shipping"
import Payment from "../components/payment"
import { Box, HStack, Pressable, Text } from "native-base"
import Review from "../components/review"


export type FormType = "shipping" | "payment" | "review";

export type HeaderType = {
    name: string, 
    num: number,
    active: boolean,
    concluded: boolean,
}

const data: HeaderType[] = [
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
]
export function Home() {
    const [form, setForm] = useState<FormType>("payment");
    const handleFormChange = (form: FormType) => {
        setForm(form)
    }

    const [header, setHeader] = useState<HeaderType[]>(data)

    const handleHeaderChange = (header: HeaderType[]) => {
        setHeader(header);
    }

    return (
        <Box
            flex={1}
            alignItems="center"  
        >
            <HStack
                backgroundColor="#000"
                w="100%"
                padding={5}
                safeArea
                alignItems="center"
                flexDirection="row"
                justifyContent="center"
            >
                <Pressable position="absolute" left={0} marginLeft={5}>
                    <Text
                        color="#a1a1a1"
                        fontSize={16}
                        
                        right={0}                        
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

            <HeaderForm
                data={header}
                onFormChange={ handleFormChange } onHeaderChange= { handleHeaderChange }
            />

            {
                form === 'shipping' ? (
                    <Shipping onFormChange={ handleFormChange } onHeaderChange= { handleHeaderChange }/>
                ) : form === 'payment' ? (
                    <Payment onFormChange={ handleFormChange } onHeaderChange= { handleHeaderChange }/>
                ) : (
                    <Review  onFormChange={ handleFormChange } onHeaderChange= { handleHeaderChange }/>
                )
            }

        </Box>
    )
}

