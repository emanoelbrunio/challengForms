import { HStack } from "native-base";
import OptionHeaderForm from "../optionHeaderForm";
import { HeaderType, FormType } from "../../screens/Home";


type Props = {
    data: HeaderType[];
    onFormChange: (newForm: FormType) => void;
    onHeaderChange: (header: HeaderType[]) => void;
}

export function HeaderForm( {data, onFormChange, onHeaderChange} : Props){

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
                data.map( (item, key)=> <OptionHeaderForm item={ item  } onFormChange={onFormChange}
                onHeaderChange={onHeaderChange} key={key}/>)
            }
        </HStack>
    )
}