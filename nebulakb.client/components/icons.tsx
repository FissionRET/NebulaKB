﻿import {
    AlertTriangle,
    ArrowRight,
    Check,
    ChevronLeft,
    ChevronRight,
    CircuitBoardIcon,
    Command,
    CreditCard,
    File,
    FileText,
    HelpCircle,
    Image,
    Laptop,
    LayoutDashboardIcon,
    Loader2,
    LogIn,
    LucideIcon,
    LucideProps,
    Moon,
    MoreVertical,
    Pizza,
    Plus,
    Settings,
    SunMedium,
    Trash,
    Twitter,
    User,
    User2Icon,
    UserX2Icon,
    X,
} from "lucide-react";

export type Icon = LucideIcon;
export type IconSvgProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
    dashboard: LayoutDashboardIcon,
    logo: Command,
    login: LogIn,
    close: X,
    profile: User2Icon,
    spinner: Loader2,
    kanban: CircuitBoardIcon,
    chevronLeft: ChevronLeft,
    chevronRight: ChevronRight,
    trash: Trash,
    employee: UserX2Icon,
    post: FileText,
    page: File,
    media: Image,
    settings: Settings,
    billing: CreditCard,
    ellipsis: MoreVertical,
    add: Plus,
    warning: AlertTriangle,
    user: User,
    arrowRight: ArrowRight,
    help: HelpCircle,
    pizza: Pizza,
    sun: SunMedium,
    moon: Moon,
    laptop: Laptop,
    gitHub: ({...props}: LucideProps) => (
        <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="github"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
            {...props}
        >
            <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
            ></path>
        </svg>
    ),
    twitter: Twitter,
    check: Check,
};

export const IconsSvg = {
    nextjs: (props: IconSvgProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                fill="currentColor"
                d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"
            />
        </svg>
    ),
    discord: ({...props}: IconSvgProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
            <path
                fill="currentColor"
                d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
            />
        </svg>
    ),
    javascript: (props: IconSvgProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
            <path
                fill="currentColor"
                d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"
            />
        </svg>
    ),
    typescript: (props: IconSvgProps) => (
        <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fill="currentColor"
                d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
            />
        </svg>
    ),
    bash: (props: IconSvgProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
            <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
            <path d="m8 16 2-2-2-2"/>
            <path d="M12 18h4"/>
        </svg>
    ),
    react: (props: IconSvgProps) => (
        <svg viewBox="0 0 128 128" fill="currentColor" strokeWidth="2" {...props}>
            <circle cx="64" cy="64" r="11.4"></circle>
            <path
                d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
        </svg>
    ),
    html5: (props: IconSvgProps) => (
        <svg viewBox="0 0 128 128" fill="currentColor" {...props}>
            <path d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"></path>
            <path d="M64 116.8l36.378-10.086 8.559-95.878H64z"></path>
            <path fill="#000000"
                d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"></path>
            <path fill="#000000"
                d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"></path>
        </svg>
    ),
    tailwindcss: (props: IconSvgProps) => (
        <svg viewBox="0 0 128 128" fill="currentColor" {...props}>
            <path
                d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"></path>
        </svg>
    ),
    json: (props: IconSvgProps) => (
        <svg viewBox="0 0 128 128" fill="currentColor" {...props}>
            <path
                  d="M45.949 63.71c0 22.998 17.853 30.038 18.223 30.175l.016.005a.823.823 0 0 0-.05.021h-.001v.001h.001c20.306 6.899 40.668-10.261 40.668-41.251 0-17.054-7.595-37.361-27.7-48.894C105.528 10.083 126 34.393 126 63.903c0 35.822-30.182 62.003-61.873 62.003-2.078 0-37.078-10.935-37.216-51.164-.103-30.18 19.208-40.406 32.72-38.442.009.003-13.682 7.806-13.682 27.41z"></path>
            <path fill-rule="evenodd"
                  d="M82.051 64.29c0-22.998-17.853-30.038-18.223-30.175l-.016-.005a.823.823 0 0 0 .05-.021h.001v-.001h-.001C43.556 27.19 23.193 44.35 23.193 75.34c0 17.054 7.595 37.361 27.7 48.894C22.472 117.917 2 93.607 2 64.097 2 28.275 32.182 2.094 63.873 2.094c2.078 0 37.078 10.935 37.216 51.164.103 30.18-19.207 40.406-32.72 38.443-.009-.004 13.682-7.807 13.682-27.411z"
                  clip-rule="evenodd"></path>
        </svg>
    ),
    mssqlserver: (props: IconSvgProps) => (
        <svg viewBox="0 0 128 128" fill="currentColor" {...props}>
            <path
                  d="M52.935 0v.002c-.426-.058-7.306 2.42-11.742 4.223-5.988 2.44-10.636 4.766-13.504 6.78-.926.657-2.054 1.75-2.475 2.37l-.007-.021a1.424 1.424 0 0 0-.069.148c-.022.04-.052.086-.066.12a1.812 1.812 0 0 0-.115.66l.064.06c.017.207.065.44.168.695.252.62.988 1.376 1.822 2.15 0 0 8.621 8.409 9.668 9.61 4.766 5.503 6.84 10.927 7.034 18.406.117 4.805-.796 9.03-3.063 13.932-4.03 8.796-12.535 18.504-25.652 29.276l.199-.067c-.09.072-.208.174-.295.242-1.57 1.24-3.896 3.565-5.078 5.038-1.764 2.209-3.157 4.553-3.758 6.355-1.066 3.255-.543 6.548 1.51 9.59 2.636 3.875 7.887 7.83 14.01 10.521 3.12 1.377 8.368 3.14 12.322 4.127 6.567 1.667 19.28 3.469 26.273 3.739 1.414.059 3.312.059 3.39 0 .155-.097 1.241-2.168 2.501-4.744 4.3-8.778 7.399-17.013 9.086-24.047 1.007-4.262 1.801-9.94 2.324-16.663.136-1.88.194-8.177.078-10.308-.175-3.487-.483-6.316-.968-9.086a4.17 4.17 0 0 1-.07-.573c15.578-4.628 32.768-8.821 44.187-10.568l1.764-.271-.272-.428c-1.55-2.403-2.615-3.894-3.894-5.483-3.72-4.61-8.233-8.349-13.756-11.449-7.595-4.244-17.419-7.557-29.858-10.018-2.344-.465-7.495-1.357-11.68-1.996l-.39-.699c-2.287-4.03-4.805-9.027-6.278-12.398-1.142-2.616-2.228-5.639-2.828-7.809C53.187.098 53.15.02 52.935 0Zm-.31.988h.02c.018.02.095.564.173 1.203.33 2.712.931 5.328 1.881 8.157.716 2.13.716 2.015-.117 1.763-1.976-.542-10.83-2.072-17.244-2.964-1.027-.135-1.899-.271-1.899-.291-.077-.078 4.63-2.537 6.703-3.506 2.654-1.22 9.94-4.265 10.483-4.362ZM33.947 9.67l.756.252c4.108 1.395 14.434 3.373 20.13 3.838.64.058 1.182.115 1.2.115.02.02-.52.31-1.219.639-2.75 1.376-5.775 3.061-7.867 4.36-.476.296-.912.546-1.127.648a1193.726 1193.726 0 0 1-1.932-.315l-1.824-1.787a803.536 803.536 0 0 0-7.11-6.84zm-.775.602 2.732 3.41c1.492 1.88 3.003 3.72 3.332 4.127.291.359.503.622.543.7-1.935-.337-4.006-.708-5.6-1.052-1.163-.252-3.39-.775-5.134-1.375-.18-.07-.385-.146-.58-.219v-.205c.02-1.3 1.666-3.238 4.455-5.213zm23.173 4.646c.015-.007.03-.006.04.004.077 0 .172.172.404.695.66 1.453 2.715 5.367 3.219 6.123l.064.104a1193.726 1193.726 0 0 1-10.977-1.79 2.86 2.86 0 0 1 .372-.232c2.035-1.124 4.088-2.557 5.91-4.088.445-.368.851-.715.93-.773a.097.097 0 0 1 .038-.043zm-26.138 3.275c.019-.018.329.1.736.235a50.336 50.336 0 0 0 2.81.851 142.909 142.909 0 0 0 2.557.678c1.162.29 2.132.563 2.15.563.137.136 2.094 6.394 2.753 8.797.252.91.446 1.685.427 1.685-.02.02-.234-.31-.486-.756-2.267-3.99-5.851-8.04-9.998-11.297-.542-.387-.95-.736-.95-.756zm9.513 2.618c0 .038 0 .02.02.02.098 0 .524.057 1.047.173 3.293.736 9.203 1.86 12.98 2.5.64.097 1.143.214 1.143.252 0 .04-.23.175-.522.33-.64.33-3.217 1.86-4.07 2.44-2.15 1.435-4.087 2.983-5.482 4.378a79.99 79.99 0 0 1-1.047 1.028s-.115-.33-.213-.737c-.697-2.694-2.15-6.684-3.469-9.494-.213-.445-.387-.852-.387-.89zm16.8 3.215c.115.04.31.699.697 2.152a31.732 31.732 0 0 1 .93 8.873c-.04.814-.079 1.57-.118 1.668l-.057.191-1.007-.33c-2.073-.658-5.444-1.645-8.33-2.459-1.648-.446-2.985-.852-2.985-.89 0-.117 2.403-2.52 3.43-3.43 1.956-1.725 7.264-5.832 7.44-5.775zm1.335.195c.058-.058 8.024 1.316 11.647 2.014 2.694.523 6.607 1.338 6.84 1.435.115.04-.291.269-1.59.852-5.115 2.305-8.914 4.38-12.692 6.898-.988.66-1.822 1.201-1.84 1.201-.02 0-.039-.562-.039-1.24 0-3.681-.734-7.401-2.091-10.54-.136-.31-.254-.601-.235-.62zm20.596 4.068c.058.057-.193 1.629-.426 2.559-.698 2.887-2.576 7.17-4.88 11.2-.409.716-.778 1.297-.817 1.316-.038.02-.558-.273-1.16-.622-2.247-1.318-4.806-2.555-7.596-3.718-.775-.33-1.454-.601-1.473-.641-.136-.115 6.104-4.242 9.397-6.219 2.617-1.589 6.879-3.952 6.955-3.875zm1.475.233c.174 0 3.7.968 5.54 1.511 4.554 1.356 9.784 3.275 13.194 4.825l1.414.638-.986.233c-8.33 1.918-15.463 4.129-22.342 6.918-.562.233-1.066.425-1.104.425-.039 0 .157-.444.409-.986 2.073-4.399 3.408-8.991 3.738-12.906.019-.368.079-.658.137-.658zm-35.11 8.06c.058-.058 2.751.582 4.205.989 2.21.62 6.899 2.19 6.899 2.304 0 .02-.525.466-1.145 1.008-2.538 2.112-4.98 4.341-7.906 7.17-.871.833-1.606 1.51-1.645 1.51-.04 0-.059-.115-.04-.27.445-3.255.35-7.44-.27-11.683-.06-.543-.117-1.009-.098-1.028zm56.596.059c.038.039-1.24 2.052-2.055 3.195-1.162 1.667-2.867 3.877-6.722 8.72a1289.46 1289.46 0 0 0-5.076 6.413c-.775.969-1.415 1.783-1.436 1.783-.018 0-.27-.35-.541-.775-2.17-3.256-4.767-6.103-7.848-8.66a44.534 44.534 0 0 0-1.431-1.164c-.214-.155-.39-.31-.39-.33 0-.057 3.294-1.472 5.794-2.479 4.38-1.783 10.345-3.913 14.822-5.29 2.344-.735 4.844-1.452 4.883-1.413zm1.492.387c.077-.02.543.214 1.104.543 4.709 2.693 9.32 6.162 12.963 9.726 1.027 1.008 3.564 3.641 3.525 3.66 0 0-.891.08-1.937.157-8.157.62-18.6 2.343-28.635 4.765-.68.155-1.28.291-1.319.291-.038 0 .716-.756 1.666-1.666 5.89-5.677 8.583-9.261 11.76-15.656.446-.948.834-1.762.873-1.82zm-43.148 4.418c.27.058 2.788 1.239 4.687 2.189 1.744.871 4.361 2.266 4.496 2.383.02.019-.91.503-2.054 1.066a135.033 135.033 0 0 0-10.018 5.522c-.93.562-1.704 1.027-1.723 1.027-.078 0-.058-.078.465-1.027 1.744-3.177 3.14-6.975 3.934-10.676.077-.29.155-.484.213-.484zm-2.52.464c.058.058-.6 2.442-1.008 3.74-.795 2.46-2.131 5.54-3.43 7.866-.31.542-.775 1.338-1.027 1.783l-.484.774-1.084-1.045c-1.26-1.22-2.287-1.978-3.604-2.657-.524-.27-.93-.502-.93-.54 0-.156 3.314-3.159 5.852-5.329 1.82-1.57 5.657-4.65 5.715-4.592zm15.404 6.336.95.62c2.17 1.414 4.726 3.295 6.683 4.94 1.104.91 3.235 2.83 3.662 3.294l.233.252-1.57.447c-8.874 2.46-15.733 4.649-23.735 7.594-.892.33-1.647.6-1.705.6-.116 0-.213.096 1.783-1.745 5.115-4.707 9.65-9.898 13.022-14.955zm-4.05 1.008c.04.04-2.614 3.777-4.203 5.889-1.9 2.519-5.272 6.743-7.598 9.494-.968 1.144-1.8 2.092-1.84 2.111-.058.02-.078-.27-.078-.716 0-2.344-.599-4.844-1.645-6.975-.446-.891-.523-1.104-.425-1.201.368-.33 6.004-3.545 9.568-5.463 2.404-1.28 6.163-3.177 6.22-3.139zM44.1 55.26c.057 0 .502.233 1.007.504a21.28 21.28 0 0 1 3.332 2.248c.04.038-.464.446-1.123.93-1.84 1.317-4.63 3.43-6.258 4.728-1.705 1.356-1.763 1.394-1.57 1.104 1.28-1.957 1.92-3.062 2.598-4.477a36.066 36.066 0 0 0 1.627-4.05c.155-.56.347-.987.386-.987zm6.53 5.113c.097-.018.213.157.735.932 1.104 1.647 1.957 3.857 2.17 5.639l.039.386-2.654 1.028c-4.747 1.84-9.126 3.662-12.09 5.02a217.067 217.067 0 0 0-3.237 1.548c-.95.484-1.724.853-1.724.834 0-.02.6-.465 1.336-1.008 5.794-4.204 10.813-8.816 14.572-13.427.407-.484.775-.93.813-.95zm-3.003.737v.002c.078.077-2.132 2.576-3.643 4.107-3.74 3.816-7.441 6.801-12.033 9.707-.582.368-1.104.697-1.162.735-.135.078.038-.116 2.054-2.305a52.694 52.694 0 0 0 3.352-3.97c.736-.95.871-1.086 1.937-1.84 2.85-2.056 9.418-6.513 9.495-6.436zm25.974 2.3c.274 1.057.78 6.126.918 9.481.04.795.019 1.318-.021 1.318-.154 0-3.273-1.84-5.5-3.236-1.93-1.215-5.579-3.634-6.18-4.113a358.495 358.495 0 0 1 10.783-3.45zm-12.867 4.192c.254.11.635.32 1.404.795 3.991 2.5 9.418 5.522 11.743 6.53.716.31.793.193-.854 1.318-3.526 2.402-7.924 4.765-13.31 7.148-.95.426-1.745.756-1.764.756-.04 0 .077-.486.232-1.067 1.297-4.825 2.036-9.705 2.075-13.619.01-.977.014-1.46.039-1.707l.435-.154zm-2.965 1.055c.094.476.021 4.368-.127 5.494a49.361 49.361 0 0 1-1.78 8.428c-.214.717-.41 1.319-.448 1.357-.078.097-2.732-2.5-3.604-3.508-1.51-1.744-2.692-3.486-3.564-5.191-.404-.79-.987-2.205-1.055-2.518a345.346 345.346 0 0 1 8.592-3.355c.617-.232 1.343-.473 1.986-.707zm-12.603 4.9c.047.069.163.327.271.652.62 1.685 2.013 4.165 3.215 5.754 1.318 1.744 3.043 3.605 4.477 4.825.465.387.89.756.949.814.116.117.155.097-3.004 1.299-3.66 1.395-7.652 2.79-12.225 4.262a609.84 609.84 0 0 0-3.275 1.066c-.175.058-.114-.04.389-.834 2.267-3.544 5.714-10.5 7.652-15.422.33-.853.659-1.706.717-1.9.027-.095.066-.15.103-.211l.73-.305zm-4.01 1.7c-.132.39-.973 2.151-1.842 3.853-1.88 3.663-3.933 7.267-6.684 11.646-.466.755-.91 1.453-.97 1.53-.096.136-.135.098-.446-.502-.659-1.3-1.2-2.965-1.492-4.496-.29-1.511-.232-4.146.098-5.774.15-.717.216-.987.36-1.16a225.041 225.041 0 0 1 10.976-5.098zm33.479 1.2v.813c0 4.321-.465 10.25-1.143 14.57-.116.756-.213 1.377-.232 1.397 0 0-.563-.156-1.221-.35a49.985 49.985 0 0 1-8.912-3.816c-1.88-1.027-4.61-2.714-4.533-2.791.019-.02.832-.445 1.78-.95 3.799-1.975 7.441-4.107 10.6-6.22 1.182-.794 2.963-2.071 3.35-2.42zm-48.048 5.737c.074.004.052.163-.062.851a27.507 27.507 0 0 0-.213 2.07c-.155 2.83.31 4.925 1.705 7.792.388.794.698 1.453.678 1.472-.135.117-12.962 3.875-16.992 4.979-1.201.33-2.247.62-2.325.639-.136.04-.155.021-.097-.309.446-2.848 2.617-6.568 5.64-9.707 2.014-2.093 3.622-3.314 6.373-4.883.921-.524 2.066-1.163 3.057-1.71.737-.401 1.484-.799 2.236-1.194zm30.221 5.404h.002c.02-.02.483.232 1.045.56 4.147 2.404 9.921 4.633 14.842 5.776l.445.096-.619.35c-2.576 1.433-11.045 4.96-19.705 8.195-1.26.465-2.498.93-2.73 1.027-.233.097-.448.155-.448.135 0-.02.35-.698.795-1.531 2.422-4.534 4.863-10.055 6.104-13.891.155-.368.25-.697.27-.717zm-3.08 1.006h.002c.02.02-.136.428-.33.893-1.686 4.088-3.895 8.545-6.724 13.543-.716 1.28-1.317 2.306-1.336 2.306-.02 0-.601-.35-1.3-.775-4.106-2.52-7.75-5.62-10.132-8.623l-.35-.426 1.764-.484c6.316-1.724 11.684-3.584 17.012-5.87.756-.31 1.375-.564 1.394-.564zm19.143 6.686c.02.446-.967 4.437-1.781 7.324-.678 2.422-1.26 4.32-2.327 7.672-.464 1.474-.87 2.693-.89 2.693-.02 0-.135-.018-.252-.056-5.754-1.047-10.908-2.501-15.752-4.438-1.356-.543-3.293-1.415-3.41-1.512-.038-.039 1.124-.581 2.597-1.22 8.816-3.856 17.96-8.235 21.1-10.114.368-.233.657-.35.715-.35zM28.677 96.8c.04.04-2.423 3.585-5.87 8.41-1.203 1.686-2.597 3.661-3.12 4.397a77.468 77.468 0 0 0-1.764 2.596l-.814 1.261-.871-.738c-1.027-.853-2.809-2.673-3.604-3.68-1.666-2.073-2.791-4.264-3.236-6.26-.214-.93-.214-1.394-.02-1.45a1459.308 1459.308 0 0 1 10.31-2.424 861.655 861.655 0 0 0 6.935-1.627c1.124-.271 2.035-.485 2.054-.485zm2.479.95.621.697c2.79 3.12 5.637 5.425 9.086 7.44.62.35 1.086.659 1.047.679-.135.096-11.974 4.3-17.457 6.2a462.503 462.503 0 0 1-5.639 1.956c-.019 0-.194-.117-.387-.252l-.35-.252.563-.814c1.82-2.635 4.107-5.521 9.086-11.528zm15.463 11.062c.019-.02.87.29 1.918.68 2.519.949 4.513 1.55 7.187 2.228 3.294.833 8.061 1.646 10.872 1.88.426.037.657.076.58.134-.136.077-2.985 1.028-5.077 1.686-3.333 1.047-13.504 4.05-21.797 6.433a218.736 218.736 0 0 1-2.925.834c-.194.038-.834-.138-.834-.215 0-.038.465-.638 1.027-1.297 2.79-3.333 5.561-7.054 7.867-10.58.64-.969 1.182-1.764 1.182-1.783zm-3.412.098h.002c.019.02-1.357 2.227-3.76 6.025-1.026 1.608-2.17 3.432-2.576 4.07-.388.62-.971 1.59-1.3 2.131l-.56.987-.29-.076c-.699-.195-5.601-1.919-6.9-2.442a48.226 48.226 0 0 1-4.513-2.072c-1.55-.834-3.487-2.074-3.332-2.113.038-.02 2.692-.736 5.889-1.608 8.485-2.306 13.194-3.642 16.275-4.611.562-.175 1.046-.311 1.065-.291zm24.123 5.656h.021c.077.195-3.063 8.913-4.207 11.664-.25.62-.348.776-.484.756-.33-.02-4.881-.657-7.652-1.064-4.824-.736-12.925-2.15-14.958-2.616l-.464-.097 2.886-.659c6.2-1.395 9.184-2.15 12.207-3.08a86.251 86.251 0 0 0 11.413-4.4c.6-.27 1.102-.483 1.238-.502z"></path>
        </svg>
    ),
    netcore: (props: IconSvgProps) => (

        <svg viewBox="0 0 128 128" fill="currentColor" {...props}>
            <path
                d="M61.195 0h4.953c12.918.535 25.688 4.89 36.043 12.676 9.809 7.289 17.473 17.437 21.727 28.906 2.441 6.387 3.664 13.18 4.082 19.992v4.211c-.414 11.293-3.664 22.52-9.73 32.082-6.801 10.895-16.922 19.73-28.727 24.828A64.399 64.399 0 0165.082 128h-2.144c-11.735-.191-23.41-3.66-33.297-9.992-11.196-7.113-20.114-17.785-25.028-30.117C1.891 81.19.441 74.02 0 66.812v-4.957c.504-14.39 5.953-28.609 15.41-39.496C23.168 13.31 33.5 6.48 44.887 2.937 50.172 1.27 55.676.41 61.195 0M25.191 37.523c-.03 12.153-.011 24.305-.011 36.454 1.43.011 2.86.011 4.293.011-.075-10.433.101-20.863-.106-31.293.48.907.918 1.84 1.465 2.707C37.035 54.91 43.105 64.5 49.309 74c1.738-.023 3.476-.023 5.214.004-.003-12.16-.007-24.32.004-36.48a308.076 308.076 0 00-4.25-.012c.075 10.32-.136 20.64.125 30.949-6.507-10.352-13.101-20.645-19.695-30.945a370.85 370.85 0 00-5.516.007m38.844-.011c-.129 12.16-.004 24.32-.047 36.476 6.469-.015 12.938.024 19.41-.02a83.36 83.36 0 01.024-3.952c-5.012-.016-10.027.007-15.043-.02-.074-4.21-.004-8.426-.04-12.637 4.395-.078 8.79.012 13.18-.047-.011-1.277-.011-2.554-.019-3.832-4.387.141-8.773-.054-13.164.012.012-4.023.02-8.05.02-12.078 4.699 0 9.398-.02 14.093.012-.008-1.301 0-2.606.016-3.906-6.145-.016-12.29-.008-18.43-.008m22.602.054c.004 1.266.004 2.528.008 3.79 3.488-.04 6.972.109 10.46.035-.023 10.863.004 21.718-.011 32.574 1.46.043 2.93.035 4.39-.09-.12-5.992.118-11.988-.156-17.977.067-2.699-.07-5.394.117-8.09.106-2.14-.277-4.277-.035-6.417 3.516.047 7.035.015 10.55.015a59.774 59.774 0 01.075-3.832c-8.469-.105-16.937-.094-25.398-.008M13.55 69.094c-1.977.91-2.106 4.023-.149 5.027 1.72 1.18 4.305-.371 4.227-2.41.133-2.004-2.29-3.688-4.078-2.617m29.23 15.289c-4.277 3.469-4.226 11.195.5 14.25 2.668 1.695 6.102 1.344 8.922.215.012-.621.027-1.239.05-1.86-2.671 1.395-6.41 1.68-8.675-.61-2.965-3.237-2.297-9.269 1.613-11.476 2.211-1.164 4.907-.824 7.086.239-.007-.66-.004-1.32 0-1.98-3.097-1.099-6.922-1.04-9.496 1.222m17.207 2.71c-1.89.22-3.758 1.22-4.633 2.966-1.253 2.496-1.109 5.867.864 7.96 2.035 2.297 5.945 2.32 8.18.297 2.425-2.308 2.699-6.468.757-9.164-1.148-1.629-3.273-2.183-5.168-2.058m17.887 2.722c-1.66 2.883-1.332 7.25 1.598 9.211 2.183 1.22 4.933.832 7.074-.308-.004-.617.004-1.235.031-1.848-1.687 1.07-3.937 1.856-5.812.777-1.309-.722-1.704-2.257-1.914-3.625 2.875-.039 5.746-.082 8.625-.074-.075-1.828-.118-3.894-1.45-5.308-2.199-2.43-6.644-1.657-8.152 1.175m-8.414-2.336v12.008c.652 0 1.312 0 1.973.004.023-2.195-.04-4.394.023-6.594.016-1.27.527-2.558 1.484-3.414.801-.605 1.883-.27 2.801-.246-.012-.636-.02-1.27-.023-1.902-1.793-.398-3.336.652-4.242 2.117-.02-.633-.04-1.266-.051-1.894-.656-.024-1.313-.051-1.965-.079zm0 0"></path>
            <path
                d="M58.758 89.223c1.652-.805 4.023-.41 4.945 1.3 1.05 1.887 1.027 4.383-.137 6.211-1.52 2.286-5.527 1.786-6.523-.742-1.008-2.258-.617-5.484 1.715-6.77zm0 0M79.04 92.414c.046-1.574 1.144-3.137 2.726-3.48.976-.164 2.097.007 2.773.793.672.714.813 1.714.98 2.64-2.16.012-4.32-.031-6.48.047zm0 0"></path>
        </svg>
    )
}