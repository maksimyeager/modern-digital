import { Form } from "@/components/shared";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { MdPhone } from "react-icons/md";

export default function ContactUs() {
    return (
        <div className="contact-us">
            <div className="container">
                <div className="contact-us__form">
                    <Form />
                </div>
                <div className="contact-us__info">
                    <div className="contact-us__info-block contact-us__info-block--1">
                        <h2>Contact Us Today</h2>
                        <p className="">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis..
                        </p>
                    </div>
                    <div className="contact-us__info-block contact-us__info-block--2">
                        <h2>Mail Us</h2>
                        <p>
                            <IoMail size={28} color="#01F59D" />
                            <span>Jamilloxebaniy@gmail.com</span>
                        </p>
                    </div>
                    <div className="contact-us__info-block contact-us__info-block--3">
                        <h2>Call Us</h2>
                        <p>
                            <MdPhone size={28} color="#01F59D" />
                            <span>+777 77 777 77</span>
                        </p>
                    </div>
                    <div className="contact-us__info-block contact-us__info-block--4">
                        <h2>Our Social Media</h2>
                        <div className="contact-us__socials">
                            <a
                                href="https://www.linkedin.com/company/modern-digital-az"
                                target="_blank"
                                className="social-link social-link--1"
                            >
                                <FaLinkedinIn size={18} />
                            </a>
                            <a
                                href="https://www.instagram.com/moderndigital.az/"
                                target="_blank"
                                className="social-link social-link--2"
                            >
                                <FaInstagram size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
