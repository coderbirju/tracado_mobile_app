import { buttonStyles } from "../enums";

export interface buttonProps {
    onPress: any,
    text: string,
    buttonStyle?: buttonStyles,
    bgColor?: string,
    fgColor?: string
};