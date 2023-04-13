import { Button, Text, IButtonProps } from "native-base";

type Props = IButtonProps & {
    title: string;
}

export default function ButtonCta( { title, ...rest }: Props){
    return (
        
        <Button
            w="100%"
            alignItems="center"
            justifyContent="center"
            padding={4}
            borderRadius={8}
            backgroundColor="#121212"

            _pressed={{
                bg: "#444444"
            }}

            { ...rest }
        >
            <Text
                color="#fff"
                fontSize={16}
            >
                { title }
            </Text>
        </Button>
    
    )
}