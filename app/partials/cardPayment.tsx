import Metode from "../components/metode"





const CardPayments = () => {



    return (
        <div className="px-[100px] py-[70px] bg-greenSecondary h-screen">
            <div className="bg-bgPrimary w-fit px-28 py-12">
            <Metode/>
            <div >
                <form action="" className="grid">
                    <label htmlFor="">Nama</label>
                    <input type="text" placeholder="Masukan nama" />
                    <label htmlFor="">Jumlah Infaq</label>
                    <input type="text" placeholder="Masukan nama" />
                    <label htmlFor="">Tulisakan Doa</label>
                    <input type="text" placeholder="Masukan nama" />
                </form>
            </div>
            </div>

        </div>
    )
}


export default CardPayments