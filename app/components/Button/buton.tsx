


const Button = ({children} : any) => {
    return (
        <button type={children} className="px-6 py-3 bg-greenPrimary text-white rounded-md hover:bg-greenSecondary ease-in-out duration-300 w-max">{children}</button>
    )
}

export default Button
