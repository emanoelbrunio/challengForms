import { HStack } from "native-base";
import OptionHeaderForm from "../optionHeaderForm";

const data = [
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
export function HeaderForm(){

    return (
        <HStack
            w="100%"
            justifyContent="space-between"
            padding={5}

            bg="#ebebeb"
        >
            {
                data.map( item => <OptionHeaderForm item={ item  } />)
            }
        </HStack>
    )
}