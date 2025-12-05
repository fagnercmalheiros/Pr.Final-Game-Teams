import { useTheme } from "styled-components/native"
import { TextInputProps } from "react-native"

import { InputField } from "./styles"

export function Input({...rest}: TextInputProps){
    const { COLORS } = useTheme()
    return(
        <InputField {...rest} placeholderTextColor={COLORS.GRAY_300}/>
    )
}