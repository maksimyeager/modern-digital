/* eslint-disable @next/next/no-img-element */
import { Container, Subscribe } from "@/components/shared";
import { HomeBanner } from "@/components/shared/home-banner";
import { HomeSlider } from "@/components/shared/home-slider";
import { Reviews } from "@/components/shared/reviews";

export default function Home() {
    return (
        <>
            <HomeBanner />
            <section className="py-16">
                <Container>
                    <h2 className="text-center text-[40px]">
                        Sizə Təklif Etdiyimiz{" "}
                        <span className="font-semibold text-secondary">
                            Xidmətlərimiz
                        </span>
                    </h2>
                    <p className="text-center text-sm font-light mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor <br /> incididunt ut labore et
                        dolore magna aliqua. 
                    </p>
                    <HomeSlider />
                </Container>
            </section>
            <Reviews />
            <section className="py-16">
                <Container>
                    <h2 className="text-[40px] mb-4 pl-12">
                        Got A{" "}
                        <span className="font-semibold text-secondary">
                            Project
                        </span>{" "}
                        In Mind?
                    </h2>
                    <Subscribe />
                </Container>
            </section>
        </>
    );
}
