import { Banner } from "@/components/shared";

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
            <section className="r_keeper__info">
                <div className="container">
                    <div className="r_keeper__info-desc">
                        <h2>About our program</h2>
                        <p>
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
                    <div className="r_keeper__info-img">
                        <img src="/images/r-keeper.png" alt="" className="" />
                    </div>
                </div>
            </section>
            <section className="section r_keeper__data">
                <div className="container">
                    <h2>В r_keeper есть всё для:</h2>
                    <div className="r_keeper__data-wrapper">
                        {r_keeper_data.map((item, index) => (
                            <div key={index} className="r_keeper__data-block">
                                <span>{index + 1}</span>
                                <p>{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="section possibilities">
                <div className="container">
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
                </div>
            </section>
        </>
    );
}
