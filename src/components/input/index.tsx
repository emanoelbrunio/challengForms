import { Input, IInputProps, FormControl } from "native-base";

type Props = IInputProps & {
    errorMessage ?: string | null;
}

export default function InputForm( { errorMessage = null, isInvalid, ...rest}: Props ){

    const invalid = !!errorMessage || isInvalid
    return (
        <FormControl
            marginBottom={2}
            isInvalid={invalid}
        >

            <Input
                borderRadius={8}
                padding={4}
                fontSize={16}
                isInvalid={invalid}
                
                _invalid={{
                    backgroundColor: "#ff000015"
                }}

                {...rest}
            />

            <FormControl.ErrorMessage>
                { errorMessage }
            </FormControl.ErrorMessage>
            
        </FormControl>
    )
}