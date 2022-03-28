import React from 'react'
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg'
import { PRIMARYCOLOR } from '../colors/colors'
export const INTROIMAGE = require('./introImage.png')
export const CLOUDPERSON = require('./cloudPerson.png')
export const HomeIllustration = require('./HomeIllustration.png')
export const GRAPHBARSIllustration = require('./Graphbarillus.png')
export const SETTINGIllustration = require('./SettingIllustration.png')

export const HOMETABICON = require('./HomeTabIcon.png')
export const HOMETABICONC = require('./HomeTabIconC.png')
export const GRAPHTABICON = require('./GraphTabIcon.png')
export const GRAPHTABICONC = require('./GraphTabIconC.png')
// export const LOCKTABICON = require('./LockTabIcon.png')
// export const LOCKTABICONC = require('./Unlock.svg')
export const GRAPHICONWHITE = require('./GraphIconWhite.png')
// export const LOCKTABICONC = require('./Unlock.svg');
// export {default as LOCKTABICONC} from './Unlock.svg'

export const ENGLISHICON = () => (
    <Svg width="73" height="51" viewBox="0 0 73 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M73 41.4375H0V51H73V41.4375Z" fill="#DF8761" />
        <Path d="M73 41.4375V47.8125H11.1087C7.60152 47.8125 4.76086 44.9597 4.76086 41.4375H73Z" fill="#F29B75" />
        <Path d="M44.4348 35.0625H31.7391V41.4375H44.4348V35.0625Z" fill="#C4455E" />
        <Path d="M44.4348 35.0625V38.25H38.087C36.8016 38.25 34.9131 37.2459 34.9131 35.0625H44.4348Z" fill="#DB5669" />
        <Path d="M44.4348 12.75H31.7391V35.0625H44.4348V12.75Z" fill="#DB5669" />
        <Path d="M44.4348 12.75H34.9131V35.0625H44.4348V12.75Z" fill="#F26674" />
        <Path d="M44.4348 6.375H31.7391V12.75H44.4348V6.375Z" fill="#C4455E" />
        <Path d="M44.4348 6.375H34.9131V12.75H44.4348V6.375Z" fill="#DB5669" />
        <Path d="M19.0434 9.5625H6.34778V41.4375H19.0434V9.5625Z" fill="#6FABE6" />
        <Path d="M19.0435 9.5625C19.0435 39.4612 18.8848 38.25 19.0435 38.25C13.7906 38.25 9.52173 33.9628 9.52173 28.6875V9.5625H19.0435Z" fill="#82BCF4" />
        <Path d="M53.9566 19.125H44.4348V41.4375H53.9566V19.125Z" fill="#9DCC6B" />
        <Path d="M53.9565 19.125C53.9565 39.27 53.7978 38.25 53.9565 38.25C50.4493 38.25 47.6086 35.3972 47.6086 31.875V19.125H53.9565Z" fill="#B5E08C" />
        <Path d="M66.6522 9.5625H53.9565V31.875H66.6522V9.5625Z" fill="#FFCC66" />
        <Path d="M66.6522 9.5625H57.1305V31.875H66.6522V9.5625Z" fill="#FFDE76" />
        <Path d="M31.7391 25.5H19.0435V41.4375H31.7391V25.5Z" fill="#9DCC6B" />
        <Path d="M31.7391 25.5C31.7391 39.1266 31.5805 38.25 31.7391 38.25C26.4863 38.25 22.2174 33.9628 22.2174 28.6875V25.5H31.7391Z" fill="#B5E08C" />
        <Path d="M31.7391 0H19.0435V15.9375H31.7391V0Z" fill="#9DCC6B" />
        <Path d="M31.7391 0H22.2174V15.9375H31.7391V0Z" fill="#B5E08C" />
        <Path d="M66.6522 0H53.9565V9.5625H66.6522V0Z" fill="#6FABE6" />
        <Path d="M66.6522 0H57.1305V9.5625H66.6522V0Z" fill="#82BCF4" />
        <Path d="M31.7391 15.9375H19.0435V25.5H31.7391V15.9375Z" fill="#84B749" />
        <Path d="M31.7391 15.9375H22.2174V25.5H31.7391V15.9375Z" fill="#9DCC6B" />
        <Path d="M66.6522 31.875H53.9565V41.4375H66.6522V31.875Z" fill="#6FABE6" />
        <Path d="M66.6522 31.875V38.25H63.4783C59.9711 38.25 57.1305 35.3972 57.1305 31.875H66.6522Z" fill="#82BCF4" />
        <Path d="M14.2826 25.5H11.1087C9.0139 25.5 9.0139 22.3125 11.1087 22.3125H14.2826C16.3774 22.3125 16.3774 25.5 14.2826 25.5Z" fill="#374F68" />
        <Path d="M14.2826 31.875H11.1087C9.0139 31.875 9.0139 28.6875 11.1087 28.6875H14.2826C16.3774 28.6875 16.3774 31.875 14.2826 31.875Z" fill="#374F68" />
        <Path d="M47.6086 33.4687V27.0937C47.6086 24.99 50.7826 24.99 50.7826 27.0937V33.4687C50.7826 35.5725 47.6086 35.5725 47.6086 33.4687Z" fill="#DAD7E5" />
    </Svg>

)

export const MATHSICON = () => (
    <Svg width="73" height="51" viewBox="0 0 73 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <G clip-path="url(#clip0_2_415)">
            <Path d="M35 9C35 21.83 35.19 21.73 34.48 22.97C33.79 24.18 32.49 25 31 25H19C16.79 25 15 23.21 15 21V9C15 6.77 16.81 5 19 5H31C33.21 5 35 6.79 35 9Z" fill="#6FABE6" />
            <Path d="M35 9C35 23.42 35.25 22.27 34.05 23C25.05 23 18 15.75 18 7C18 6.42 18.13 5.86 18.35 5.36C18.54 5.25 18.75 5.12 18.95 5H31C33.21 5 35 6.79 35 9Z" fill="#82BCF4" />
            <Path d="M61 9C61 21.83 61.19 21.73 60.48 22.97C59.79 24.18 58.49 25 57 25H45C42.79 25 41 23.21 41 21V9C41 6.77 42.81 5 45 5H57C59.21 5 61 6.79 61 9Z" fill="#FFCC66" />
            <Path d="M61 9C61 23.42 61.25 22.27 60.05 23C51.05 23 44 15.75 44 7C44 6.42 44.13 5.86 44.35 5.36C44.54 5.24 44.75 5.11 44.95 5H57C59.21 5 61 6.79 61 9Z" fill="#FFDE76" />
            <Path d="M35 35C35 47.83 35.19 47.73 34.48 48.97C33.79 50.18 32.49 51 31 51H19C16.79 51 15 49.21 15 47V35C15 32.77 16.81 31 19 31H31C33.21 31 35 32.79 35 35Z" fill="#DB5669" />
            <Path d="M35 35C35 49.42 35.25 48.27 34.05 49C25.05 49 18 41.75 18 33C18 32.42 18.13 31.86 18.35 31.36C18.54 31.24 18.75 31.11 18.95 31H31C33.21 31 35 32.79 35 35Z" fill="#F26674" />
            <Path d="M61 35C61 47.83 61.19 47.73 60.48 48.97C59.79 50.18 58.49 51 57 51H45C42.79 51 41 49.21 41 47V35C41 32.77 42.81 31 45 31H57C59.21 31 61 32.79 61 35Z" fill="#84B749" />
            <Path d="M61 35C61 49.42 61.25 48.27 60.05 49C51.05 49 44 41.75 44 33C44 32.42 44.13 31.86 44.35 31.36C44.54 31.24 44.75 31.11 44.95 31H57C59.21 31 61 32.79 61 35Z" fill="#9DCC6B" />
            <Path d="M30 13H27V10C27 9.45 26.55 9 26 9H24C23.45 9 23 9.45 23 10V13H20C19.45 13 19 13.45 19 14V16C19 16.55 19.45 17 20 17H23V20C23 20.55 23.45 21 24 21H26C26.55 21 27 20.55 27 20V17H30C30.55 17 31 16.55 31 16V14C31 13.45 30.55 13 30 13Z" fill="#EDEBF2" />
            <Path d="M29.9499 43.12L27.8299 41L29.9499 38.88C30.3399 38.49 30.3399 37.86 29.9499 37.47L28.5399 36.06C28.1499 35.67 27.5199 35.67 27.1299 36.06L24.9999 38.17L22.8799 36.05C22.4899 35.66 21.8599 35.66 21.4699 36.05L20.0599 37.46C19.6699 37.85 19.6699 38.48 20.0599 38.87L22.1699 41L20.0499 43.12C19.6599 43.51 19.6599 44.14 20.0499 44.53L21.4599 45.94C21.8499 46.33 22.4799 46.33 22.8699 45.94L24.9999 43.83L27.1199 45.95C27.5099 46.34 28.1399 46.34 28.5299 45.95L29.9399 44.54C30.3399 44.15 30.3399 43.51 29.9499 43.12Z" fill="#EDEBF2" />
            <Path d="M45 16V14C45 13.45 45.45 13 46 13H56C56.55 13 57 13.45 57 14V16C57 16.55 56.55 17 56 17H46C45.45 17 45 16.55 45 16Z" fill="#EDEBF2" />
            <Path d="M51 39C52.1046 39 53 38.1046 53 37C53 35.8954 52.1046 35 51 35C49.8954 35 49 35.8954 49 37C49 38.1046 49.8954 39 51 39Z" fill="#EDEBF2" />
            <Path d="M51 47C52.1046 47 53 46.1046 53 45C53 43.8954 52.1046 43 51 43C49.8954 43 49 43.8954 49 45C49 46.1046 49.8954 47 51 47Z" fill="#EDEBF2" />
        </G>
        <Defs>
            <ClipPath id="clip0_2_415">
                <Rect width="46.02" height="46" fill="white" transform="translate(15 5)" />
            </ClipPath>
        </Defs>
    </Svg>
)

export const BOOKSICON = () => (
    <Svg width="38" height="47" viewBox="0 0 38 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        <G clip-path="url(#clip0_2_373)">
            <Path d="M38 0H6V38H38V0Z" fill="#6FABE6" />
            <Path d="M38 0C38 37.25 37.9 36 38 36C21.98 36 9 23.02 9 7V0H38Z" fill="#82BCF4" />
            <Path d="M38 38V46H4C1.8 46 0 44.22 0 42C0 39.79 1.79 38 4 38H38Z" fill="#C6C3D8" />
            <Path d="M38 39V46C1.29998 46 3.20998 46.31 1.71998 45.28C-0.120025 42.62 1.77998 39 4.99998 39H38Z" fill="#DAD7E5" />
            <Path d="M6 0V38H4C1.79 38 0 39.79 0 42V6C0 2.69 2.68 0 6 0Z" fill="#5B9AD8" />
            <Path d="M32 6H12V14H32V6Z" fill="#9FDBF3" />
            <Path d="M32 6V12H20C16.69 12 14 9.31 14 6H32Z" fill="#B2E5FB" />
            <Path d="M29 22H15C13.68 22 13.68 20 15 20H29C30.32 20 30.32 22 29 22Z" fill="#374F68" />
            <Path d="M27 26H17C15.68 26 15.68 24 17 24H27C28.32 24 28.32 26 27 26Z" fill="#374F68" />
            <Path d="M38 41V43H6.00001C4.68001 43 4.68001 41 6.00001 41H38Z" fill="#C6C3D8" />
        </G>
        <Defs>
            <ClipPath id="clip0_2_373">
                <Rect width="38" height="46.04" fill="white" />
            </ClipPath>
        </Defs>
    </Svg>
)

export const SCIENCEICON = () => (
    <Svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <G clip-path="url(#clip0_2_395)">
            <Path d="M43.99 27.52C38.51 21.02 27.55 13.25 15.93 9.31C15.73 9.93 15.55 10.57 15.38 11.23C38.36 18.89 58.31 42.68 36.89 38.1C34.58 37.62 32.65 36.97 30.48 36.16C30.31 36.83 30.13 37.47 29.93 38.08C45.48 44.15 53.39 38.63 43.99 27.52Z" fill="#9DCC6B" />
            <Path d="M30.48 36.16C30.31 36.83 30.13 37.47 29.93 38.08C26.38 36.73 22.61 34.89 18.9 32.67C11.71 28.37 -3.33997 16.81 0.670032 10.09C3.14003 5.97 11.29 7.76 15.93 9.31C15.73 9.93 15.55 10.57 15.38 11.23C3.75003 7.33 -2.29997 9.98 5.61003 19.37C11.5 26.34 21.96 32.87 30.48 36.16Z" fill="#9DCC6B" />
            <Path d="M6.81996 40.62C0.299963 40.62 -1.58004 36.55 1.51996 31.11C2.16996 29.96 3.90996 30.95 3.25996 32.1C-4.38004 45.54 26.41 36.62 41.3 20.67C42.2 19.7 43.66 21.07 42.76 22.04C34.27 31.13 17.15 40.62 6.81996 40.62Z" fill="#6FABE6" />
            <Path d="M23.89 0C19.28 0 16.53 6.76 15.38 11.23C14.09 16.29 13.71 22.09 13.96 26.98C14.64 27.48 15.35 27.98 16.07 28.48C14.37 8.27 24.17 -8.55 29.99 10.09C32.69 18.89 32.37 30.63 29.93 38.08C25.41 52.37 18.21 45.56 16.34 31.07C15.59 30.58 14.86 30.09 14.15 29.58C16.16 50.61 27.85 54.45 32.38 36.85C36.28 21.87 32.26 0 23.89 0Z" fill="#FFCC66" />
            <Path d="M29.99 10.09C30.18 10.71 30.36 11.35 30.53 12.03C27.13 13.32 23.49 15.09 19.92 17.23C9.02003 23.7 7.24003 27.87 6.00003 27.87C5.16003 27.87 4.65003 26.84 5.27003 26.19C11.43 19.56 21.32 13.37 29.99 10.09Z" fill="#6FABE6" />
            <Path d="M46.54 17.08C45.91 18.23 44.14 17.26 44.8 16.09C49.23 8.37 40.85 8.48 32.43 11.34C32.26 10.68 32.08 10.04 31.89 9.42C46.75 4.4 50.43 10.27 46.54 17.08Z" fill="#6FABE6" />
            <Path d="M3.89001 32C5.54687 32 6.89001 30.6569 6.89001 29C6.89001 27.3431 5.54687 26 3.89001 26C2.23316 26 0.890015 27.3431 0.890015 29C0.890015 30.6569 2.23316 32 3.89001 32Z" fill="#C4455E" />
            <Path d="M6.45 30.56C3.82 32.2 0.669997 29.11 2.33 26.44C4.98 24.79 8.09 27.92 6.45 30.56Z" fill="#DB5669" />
            <Path d="M43.89 22C45.5469 22 46.89 20.6569 46.89 19C46.89 17.3431 45.5469 16 43.89 16C42.2332 16 40.89 17.3431 40.89 19C40.89 20.6569 42.2332 22 43.89 22Z" fill="#C4455E" />
            <Path d="M46.45 20.56C43.81 22.2 40.67 19.1 42.33 16.44C44.99 14.79 48.09 17.92 46.45 20.56Z" fill="#DB5669" />
        </G>
        <Defs>
            <ClipPath id="clip0_2_395">
                <Rect width="48.04" height="48" fill="white" />
            </ClipPath>
        </Defs>
    </Svg>

)
export const GEOMETRYICON = () => (
    <Svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M0 0V46H46C40.41 40.41 5.6 5.6 0 0ZM7 39V19L27 39H7Z" fill="#6FABE6" />
        <Path d="M3 3V36C3 40.42 6.58 44 11 44H44L3 3ZM7 39V19L27 39H7Z" fill="#82BCF4" />
        <Path d="M24.9924 7.00061L19.9932 11.9998L38.9929 30.9996L43.9921 26.0004L24.9924 7.00061Z" fill="#FFCC66" />
        <Path d="M22 4L17 9L15.5 7.5C13.68 5.68 14.37 2.61 16.71 1.71C19.19 0.73 20.6 2.6 22 4Z" fill="#DB5669" />
        <Path d="M7.20998 7.21C5.08998 9.33 5.04998 9.5 4.49998 9.5C3.59998 9.5 3.16998 8.41 3.78998 7.79L5.78998 5.79L7.20998 7.21Z" fill="#374F68" />
        <Path d="M11.21 11.21C8.09998 14.32 8.07998 14.5 7.49998 14.5C6.59998 14.5 6.16998 13.41 6.78998 12.79L9.78998 9.79L11.21 11.21Z" fill="#374F68" />
        <Path d="M15.21 15.21C13.09 17.33 13.05 17.5 12.5 17.5C11.6 17.5 11.17 16.41 11.79 15.79L13.79 13.79L15.21 15.21Z" fill="#374F68" />
        <Path d="M19.21 19.21C16.1 22.32 16.08 22.5 15.5 22.5C14.6 22.5 14.17 21.41 14.79 20.79L17.79 17.79L19.21 19.21Z" fill="#374F68" />
        <Path d="M23.21 23.21C21.09 25.33 21.05 25.5 20.5 25.5C19.6 25.5 19.17 24.41 19.79 23.79L21.79 21.79L23.21 23.21Z" fill="#374F68" />
        <Path d="M27.21 27.21C24.1 30.32 24.08 30.5 23.5 30.5C22.6 30.5 22.17 29.41 22.79 28.79L25.79 25.79L27.21 27.21Z" fill="#374F68" />
        <Path d="M31.21 31.21C29.09 33.33 29.05 33.5 28.5 33.5C27.6 33.5 27.17 32.41 27.79 31.79L29.79 29.79L31.21 31.21Z" fill="#374F68" />
        <Path d="M35.21 35.21C32.1 38.32 32.08 38.5 31.5 38.5C30.6 38.5 30.17 37.41 30.79 36.79L33.79 33.79L35.21 35.21Z" fill="#374F68" />
        <Path d="M39.21 39.21C37.09 41.33 37.05 41.5 36.5 41.5C35.6 41.5 35.17 40.41 35.79 39.79L37.79 37.79L39.21 39.21Z" fill="#374F68" />
        <Path d="M21.9968 4.00498L16.9976 9.00418L19.9957 12.0023L24.9949 7.00309L21.9968 4.00498Z" fill="#DAD7E5" />
        <Path d="M45 32L39 31L44 26C44.69 30.15 44.55 29.3 45 32Z" fill="#DF8761" />
        <Path d="M44.6 29.6L41 29L44 26L44.6 29.6Z" fill="#F29B75" />
        <Path d="M44 26C42.35 27.65 39.66 27.66 38 26L22 10L25 7L44 26Z" fill="#FFDE76" />
        <Path d="M25 7C23.35 8.65 20.67 8.67 19 7L22 4L25 7Z" fill="#EDEBF2" />
        <Path d="M22 4L20.5 5.5C18.47 7.53 15.6 4.52 16.71 1.71C19.19 0.73 20.6 2.6 22 4Z" fill="#F26674" />
    </Svg>
)

export const LOCKTABICON = () => (
    <Svg width="19" height="25" marginTop={5} viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M12.3998 11.05V6.70002C12.3998 5.10502 11.0948 3.80002 9.49981 3.80002C7.90481 3.80002 6.59981 5.10502 6.59981 6.70002H3.69981C3.69981 3.49552 6.29531 0.900024 9.49981 0.900024C12.7043 0.900024 15.2998 3.49552 15.2998 6.70002V11.05H16.7498C17.5473 11.05 18.1998 11.7025 18.1998 12.5V22.65C18.1998 23.4475 17.5473 24.1 16.7498 24.1H2.2498C1.4523 24.1 0.799805 23.4475 0.799805 22.65V12.5C0.799805 11.7025 1.4523 11.05 2.2498 11.05H12.3998ZM10.9498 21.2L10.4278 18.0825C11.1673 17.7345 11.6748 16.995 11.6748 16.125C11.6748 14.9215 10.7033 13.95 9.49981 13.95C8.29631 13.95 7.32481 14.9215 7.32481 16.125C7.32481 16.995 7.8323 17.7345 8.57181 18.0825L8.04981 21.2H10.9498Z" fill={"#D2D2D2"} />
    </Svg>
)
export const LOCKTABICONC = () => (
    <Svg width="19" height="25" marginTop={5} viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M12.3998 11.05V6.70002C12.3998 5.10502 11.0948 3.80002 9.49981 3.80002C7.90481 3.80002 6.59981 5.10502 6.59981 6.70002H3.69981C3.69981 3.49552 6.29531 0.900024 9.49981 0.900024C12.7043 0.900024 15.2998 3.49552 15.2998 6.70002V11.05H16.7498C17.5473 11.05 18.1998 11.7025 18.1998 12.5V22.65C18.1998 23.4475 17.5473 24.1 16.7498 24.1H2.2498C1.4523 24.1 0.799805 23.4475 0.799805 22.65V12.5C0.799805 11.7025 1.4523 11.05 2.2498 11.05H12.3998ZM10.9498 21.2L10.4278 18.0825C11.1673 17.7345 11.6748 16.995 11.6748 16.125C11.6748 14.9215 10.7033 13.95 9.49981 13.95C8.29631 13.95 7.32481 14.9215 7.32481 16.125C7.32481 16.995 7.8323 17.7345 8.57181 18.0825L8.04981 21.2H10.9498Z" fill={PRIMARYCOLOR} />
    </Svg>
)
