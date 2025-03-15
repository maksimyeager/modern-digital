/* eslint-disable @next/next/no-img-element */

import { Banner, Container, Title } from "@/components/shared";

const r_keeper_data = [
    {
        name: "Прозрачного ведения бизнеса",
    },
    {
        name: "Подробной аналитики",
    },
    {
        name: "Эффективной работы зала и кухни",
    },
    {
        name: "Быстрого масштабирования бизнеса",
    },
    {
        name: "Повышения лояльности гостей и привлечения новых",
    },
    {
        name: "Автоматизации складского учета",
    },
    {
        name: "Удаленного контроля в режиме онлайн",
    },
    {
        name: "Удобного взаимодействия с сотрудниками",
    },
    {
        name: "Cоблюдение требований законодательства",
    },
];

export default function RKeeper() {
    return (
        <>
            <Banner title="r_keeper" />
            <section>
                <Container className="flex gap-4">
                    <div className="flex flex-col max-w-[650px] w-full p-12 bg-[#160A2E] rounded-[43px]">
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
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div>
                        <img
                            src="/images/r-keeper.png"
                            alt=""
                            className="rounded-[43px] h-full w-full object-cover"
                        />
                    </div>
                </Container>
            </section>
            <section className="py-16">
                <Container className="">
                    <h2 className="text-center text-[40px] mb-8">
                        В r_keeper есть всё для:
                    </h2>
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-5">
                        {r_keeper_data.map((item, index) => (
                            <div
                                key={index}
                                className="w-full flex gap-4 items-center border rounded-2xl py-4 px-8"
                            >
                                <span className="text-[#01F59D] font-medium text-[32px]">
                                    {index + 1}
                                </span>
                                <p>{item.name}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
            <section className="py-16 possibilities">
                <Container>
                    <div className="possibilities__info">
                        <h2>Возможности продукта</h2>
                        <p>Модули продукта r_keeper для ресторанного бизнеса</p>
                    </div>
                    <div className="possibilities__wrapper">
                        <div className="possibility possibility--1">
                            <div className="possibility__info">
                                <h2>Зачем автоматизировать ресторан?</h2>
                                <p>
                                    По статистике каждый третий ресторан не
                                    доживает и до 2-х лет, а каждый шестой
                                    ресторан закрывается в первые 12 месяцев.
                                    Отсутствие контроля показателей продаж
                                    является наиболее частой причиной закрытия
                                    ресторана в первые 3-6 месяцев. Наличие
                                    правильной системы автоматизации позволяет
                                    экономить до 50% денежных средств и
                                    увеличивает выручку ресторана на 30%.
                                </p>
                            </div>
                            <div className="possibility__image possibility__image--1">
                                <img
                                    src="./../images/possibility-1.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="possibility possibility--2">
                            <div className="possibility__image possibility__image--2">
                                <img
                                    src="./../images/possibility-2.png"
                                    alt=""
                                />
                            </div>

                            <div className="possibility__info">
                                <h2>Слаженная работа и отказ от рутины</h2>
                                <p>
                                    Касса r_keeper делает работу поваров и
                                    персонала в зале точнее и исключает ошибки,
                                    свойственные сотрудникам. Гостю не придется
                                    ждать лишние полчаса из-за забывчивости
                                    официанта — касса сама передаст заказ на
                                    кухню и сообщит сотруднику, когда блюдо
                                    можно выносить в зал. Модуль складского
                                    учета StoreHouse позволяет эффективнее
                                    управлять поставками, контролировать остатки
                                    и списания ингредиентов, а также является
                                    незаменимым помощником
                                    бухгалтера-калькулятора.
                                </p>
                            </div>
                        </div>
                        <div className="possibility possibility--3">
                            <div className="possibility__info">
                                <h2>Точная аналитика и удобная отчетность</h2>
                                <p>
                                    На какие товары делать скидки? Какие из
                                    сезонных блюд включить в основное меню?
                                    Стоит ли нанимать дополнительный персонал?
                                    Для принятия верных управленческих решений
                                    нужны точные цифры. Отчеты и подробный
                                    анализ ключевых показателей доступны
                                    пользователям системы из любой точки мира
                                    (где есть интернет). С аналитикой r_keeper
                                    управляющий и менеджер всегда могут быстро
                                    получить полное и актуальное представление о
                                    работе заведения или целой сети.
                                </p>
                            </div>
                            <div className="possibility__image possibility__image--3">
                                <img
                                    src="./../images/possibility-3.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}
