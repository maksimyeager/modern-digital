/* eslint-disable @next/next/no-img-element */
import { Banner } from "@/components/shared";
import { FaCheck } from "react-icons/fa6";
import { Title } from "@/components/shared/title";

const tacir_pro_data = [
    {
        name: "Təchizatçıya olan borcun daxil edilməsi",
    },
    {
        name: "Müştərinin borcunun daxil edilməsi əməliyyatı",
    },
    {
        name: "Malın digər obyektdən qəbul edilməsi",
    },
    {
        name: "Malın digər obyektə göndərilməsi",
    },
    {
        name: "Malın silinməsi",
    },
    {
        name: "Malların anbara daxil edilməsi",
    },
    {
        name: "Kassadan çıxarış əməliyyatı",
    },
    {
        name: "İşçilərə ödənişlərin edilməsi",
    },
    {
        name: "Əlavə gəlirin daxil edilməsi",
    },
    {
        name: "Göstərilən xidmətlərin daxil edilməsi",
    },
    {
        name: "Xərclərin daxil olunması",
    },
];

export default function TacirPro() {
    return (
        <>
            <Banner title="Tacir.Pro" />
            <section>
                <div className="container flex md:flex-row flex-col gap-4">
                    <div className="flex flex-col md:max-w-[650px] w-full md:p-12 p-8 bg-[#160A2E] rounded-[43px]">
                        <Title
                            text={"About our program "}
                            size="lg"
                            className="mb-4 text-[32px] font-medium"
                        />
                        <p className="text-[15px] text-white font-light mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                        <Title
                            text={"Tətbiq sahələri"}
                            size="lg"
                            className="mb-4 font-medium"
                        />
                        <ul className="font-light">
                            <li className="flex items-center gap-2">
                                <FaCheck color="#01F59D" /> Duis aute irure
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheck color="#01F59D" /> Duis aute irure
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheck color="#01F59D" /> Duis aute irure
                            </li>
                        </ul>
                    </div>
                    <div>
                        <img
                            src="/images/tacir-pro.jpg"
                            alt=""
                            className="rounded-[43px] h-full object-cover"
                        />
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <h2 className="text-center text-[40px] mb-2">
                        Funksionallıq
                    </h2>
                    <p className="text-center text-sm font-light mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do <br /> eiusmod tempor incididunt ut labore qua. 
                    </p>
                    <div className="w-full flex items-center justify-center flex-wrap gap-y-5 gap-x-8">
                        {tacir_pro_data.map((item, index) => (
                            <div
                                key={index}
                                className="w-full max-w-[360px] flex gap-4 items-center border rounded-2xl py-4 px-8"
                            >
                                <div>
                                    <img
                                        src="/images/box.svg"
                                        alt=""
                                        className="resize-none!"
                                    />
                                </div>
                                <p>{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <h2 className="text-center text-[40px] mb-2">
                        Click Here To Know More
                    </h2>
                    <p className="text-center text-sm font-light mb-8">
                        Lorem ipsum dolor sit adipiscing elit, sed do eiusmod
                        tempor <br /> incididunt ut labore. 
                    </p>
                    <a href="https://tacir.pro/" className="link-1">
                        Open Tacir.PRO website
                    </a>
                </div>
            </section>
        </>
    );
}
