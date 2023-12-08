import Navbar from "../components/nav"

export const metaData = {
    title: "Payments"
}





const PaymentsLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navbar />
            <div className="py-10 px-10">
                {children}
            </div>
        </div>
    )
}

export default PaymentsLayout