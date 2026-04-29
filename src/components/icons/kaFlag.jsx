function KaFlag({ className = 'w-6 h-4' }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" className={className}>
            <rect width="300" height="200" fill="#fff"/>
            <path d="M130 0h40v200h-40zM0 80h300v40H0z" fill="#FF0000"/>
            <g fill="#FF0000" stroke="#FF0000" strokeWidth="12" strokeLinecap="round">
                <path d="M65 25v30M50 40h30" />
                <path d="M235 25v30M220 40h30" />
                <path d="M65 145v30M50 160h30" />
                <path d="M235 145v30M220 160h30" />
            </g>
        </svg>
    )
}
export default KaFlag;
