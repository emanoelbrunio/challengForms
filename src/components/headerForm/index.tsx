import { HStack } from "native-base";
import OptionHeaderForm from "../optionHeaderForm";
import { HeaderType } from "../../screens/Home";


type Props = {
    data: HeaderType[];
}

export function HeaderForm( {data} : Props){

    return (
        <HStack
            w="100%"
            justifyContent="space-between"
            padding={5}

            bg="#f9f9f9"
            borderBottomColor="#c4c4c4"
            borderBottomWidth={0.2}
        >
            {
                data.map( (item, key )=> <OptionHeaderForm item={ item  } />)
            }
        </HStack>
    )
}