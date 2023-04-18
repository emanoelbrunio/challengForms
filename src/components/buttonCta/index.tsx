import { Button, Text, IButtonProps, Box } from "native-base";
import ArrowRight from '../../assets/arrowRight.svg'

type Props = IButtonProps & {
    title: string;
}

export default function ButtonCta( { title, ...rest }: Props){
    return (
        
        <Button
            w="100%"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            padding={5}
            borderRadius={8}
            backgroundColor="#121212"
            

            _pressed={{
                bg: "#444444"
            }}

            { ...rest }
        >   
        <Box
            flexDir="row"
            w="100%"
            
        >

            <Text
                color="#fff"
                fontSize={16} 
                marginRight={4}  
                lineHeight={15}            
            >
                { title }
            </Text>

            <ArrowRight width={8} height={15} />
        </Box>

        </Button>
    
    )
}