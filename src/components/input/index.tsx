import { Input, IInputProps } from "native-base";

export default function InputForm( {...rest}: IInputProps ){

    return (
        <Input
            borderRadius={8}
            padding={3}
            fontSize={14}

            // _focus={{
            //     bg: "fff000"
            // }}

            {...rest}
        />
    )
}