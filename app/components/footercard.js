import Image from "next/image"
const FooterCard = ({ image, shopping, order }) => {
    return (
        <div>
            <div className="flex items-center gap-2 py-2">
                <Image
                    src={image}
                    alt="Landscape picture"
                    width={50}
                    height={50}
                >
                </Image>
                <div>
                    < h1 className="font-bold text-md text-gray-600">{shopping} </h1>
                    <p className="text-sm text-color">{order} </p>
                </div>

            </div>

        </div>
    )
}

export default FooterCard