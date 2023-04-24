import InputForm from '../input'
import { Box } from 'native-base';

import { useForm, Controller } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export type FormProps = {
    country:  string;
    fullName: string;
    streetAddress: string;
    other ?: string;
    luke: string;
}

const formSchema = yup.object({
    country: yup.string().required('Enter country name').min(3, 'At least 3 letters'),
    fullName: yup.string().required('Enter your full name').min(5, 'At least 3 letters'),
    streetAddress: yup.string().required('Enter street address').min(5, 'At least 5 letters'),
})


export default function ControllerInput ( {...rest} ) {

    const { control, handleSubmit, formState : {errors} } = useForm<FormProps> ({
        // passo como resolver o schema (tipo) de validaçãp que quero aplicar com yup
        resolver: yupResolver(formSchema)
    });

    return (
        <Controller
            control={rest.control}
            name={rest.name}
            render= {( { field : { onChange, value }}) => (
                <Box>

                <InputForm
                    onChangeText={ onChange }
                    value={value}
                    
                    w="100%"
                    placeholder='Luke Sky Walker'
                    fontSize={14}
                    padding={3}
                />
                </Box>
            )}
        />
    )
}