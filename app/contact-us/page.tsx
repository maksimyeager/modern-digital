import { Container, Form } from "@/components/shared";
import { Title } from "@/components/shared/title";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { MdPhone } from "react-icons/md";

export default function ContactUs() {
    return (
        <div className="">
            <Container className="flex gap-14 w-full lg:flex-row flex-col">
                <div className=" flex max-w-[720px] w-full">
                    <Form />
                </div>
                <div className="flex-1">
                    <Title
                        text={"Contact Us Today"}
                        size="lg"
                        className="mb-4 text-[32px]"
                    />
                    <p className="text-sm font-light text-[#D6D5D5] mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis..
                    </p>
                    <Title text={"Mail Us"} size="lg" className="mb-4" />
                    <p className="flex items-center gap-4 text-base mb-4">
                        <IoMail size={28} color="#01F59D" />
                        <span>Jamilloxebaniy@gmail.com</span>
                    </p>
                    <Title text={"Call us"} size="lg" className="mb-4" />
                    <p className="flex items-center gap-4 text-base mb-4">
                        <MdPhone size={28} color="#01F59D" />
                        <span>+777 77 777 77</span>
                    </p>
                    <Title
                        text={"Our Social Media"}
                        size="lg"
                        className="mb-4"
                    />
                    <div className="flex gap-4">
                        <a
                            href="#"
                            className="border w-[38px] h-[38px] flex items-center justify-center  rounded-lg"
                        >
                            <FaLinkedinIn size={18} />
                        </a>
                        <a
                            href="#"
                            className="border w-[38px] h-[38px] flex items-center justify-center rounded-lg"
                        >
                            <FaInstagram size={20} />
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    );
}
