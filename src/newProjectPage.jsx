import React from 'react';
import { ImageSlider } from './ImageSlider';
import data from './projects/projects.json';
import houses from './projects/houses.json';
import { ReactSVG } from 'react-svg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export const NewProjectPage = React.memo((props) => {
    let project
    if (props.type === 'bath') {
        project = data.find(el => el.id === props.match.params.id)
    } else {
        project = houses.find(el => el.id === props.match.params.id)
    }
    return (
        <section className="qwer">
            <div className="block-wrapper">
                <div className="q">
                    <h1>{project.name}</h1>
                </div>
                <div className="qq">
                    <div className="qqq">
                        <ImageSlider {...project} type={props.type} />
                    </div>
                    <div className="qqqq">
                        <div class="detail_area col-md-12">
                            240м<sup>2</sup>
                        </div>
                        <div className="m-30 flex-sb flex-w">
                            <div className='flex-c w-50 flex-r m-bot w-100'>
                                <div className="flex f-s-50">
                                    4
                                    <ReactSVG beforeInjection={svg => {
                                        svg.classList.add('svg-class-name')
                                        svg.setAttribute('style', 'width: 50px')
                                    }} src="/images/bedroom.svg" />
                                </div>
                                <span className="f-s-24">комнат</span>
                            </div>
                            <div className='flex-c w-50 flex-r m-bot w-100'>
                                <div className="flex f-s-50">
                                    4
                                    <ReactSVG beforeInjection={svg => {
                                        svg.classList.add('svg-class-name')
                                        svg.setAttribute('style', 'width: 50px')
                                    }} src="/images/wc.svg" />
                                </div>
                                <span className="f-s-24">санузла</span>
                            </div>
                            <div className='flex-c w-50 flex-r m-bot w-100'>
                                <div className="flex f-s-50">
                                    4
                                    <ReactSVG beforeInjection={svg => {
                                        svg.classList.add('svg-class-name')
                                        svg.setAttribute('style', 'width: 50px')
                                    }} src="/images/balcony.svg" />
                                </div>
                                <span className="f-s-24">балкона</span>
                            </div>
                            <div className='flex-c w-50 flex-r m-bot w-100'>
                                <div className="flex f-s-50">
                                    4
                                    <ReactSVG beforeInjection={svg => {
                                        svg.classList.add('svg-class-name')
                                        svg.setAttribute('style', 'width: 50px')
                                    }} src="/images/terrace.svg" />
                                </div>
                                <span className="f-s-24">терраса</span>
                            </div>

                            {/* <div className='flex-sb'>
                                <div className="text-c">Площадь террасы:</div>
                                <div className="text-b">26 м2</div>
                            </div> */}
                        </div>
                    </div>

                    <div className='line'></div>

                    {/* <div className="m-30">

                            <div className='text-b-2'>
                                Комплект дома:
                            </div>

                            <div className='text-b-3'>
                                Состоит из:
                            </div>
                            <ul className="project-d-list">
                                <li>Набор раскроенных панелей</li>
                                <li>Пиломатериал сухой строганый</li>
                                <li>Клееный брус</li>
                                <li>Крепеж (41 мм, 75 мм, 120 мм.)</li>
                                <li>Специализированный силовой крепеж (180мм - 360мм)</li>
                                <li>Материалы, улучшающие теплоизоляцию и герметичность дома</li>
                            </ul>
                                </div> */}

                    <Tabs className="w-100">
                        <TabList>
                            <Tab>Планировка</Tab>
                            <Tab>Фасады</Tab>
                            <Tab>Реализация</Tab>
                            <Tab>Интерьер</Tab>
                        </TabList>

                        <TabPanel>
                            {
                                ['house-1-1.jpg', 'house-1-2.jpg', 'house-1-3.jpg', 'house-1-4.jpg'].map(el => {
                                    return (
                                        <div className="outline-no">
                                            <div className="q123" style={{
                                                backgroundImage: 'url(' + require(`./images/house/${el}`) + ')'
                                            }}>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </TabPanel>
                        <TabPanel>
                            {
                                ['house-1-1.jpg', 'house-1-2.jpg', 'house-1-3.jpg', 'house-1-4.jpg'].map(el => {
                                    return (
                                        <div className="outline-no">
                                            <div className="q123" style={{
                                                backgroundImage: 'url(' + require(`./images/house/${el}`) + ')'
                                            }}>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </TabPanel>
                        <TabPanel>
                            {
                                ['house-1-1.jpg', 'house-1-2.jpg', 'house-1-3.jpg', 'house-1-4.jpg'].map(el => {
                                    return (
                                        <div className="outline-no">
                                            <div className="q123" style={{
                                                backgroundImage: 'url(' + require(`./images/house/${el}`) + ')'
                                            }}>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </TabPanel>
                        <TabPanel>
                            {
                                ['house-1-1.jpg', 'house-1-2.jpg', 'house-1-3.jpg', 'house-1-4.jpg'].map(el => {
                                    return (
                                        <div className="outline-no">
                                            <div className="q123" style={{
                                                backgroundImage: 'url(' + require(`./images/house/${el}`) + ')'
                                            }}>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </TabPanel>
                    </Tabs>
                    <div className="description-block">
                        <h2 className="text-header">Проект «КФ-4» серии «Барнхауз»</h2>
                        <div className="description-text">
                            <p>В разработке этого проекта дома из кирпича и клееного бруса по технологии фахверк преследовалась цель создания максимально комфортного жилья и ставились задачи сделать дом серии Barn house теплым и светлым, при этом доступным по цене.</p>
                            <p>В проекте применены две технологии строительства: первый этаж сооружается из крупноформатных керамических блоков Porotherm 38 Thermo, а второй — по разновидности фахверковой технологии (рамная технология Timber Frame, или фреймверк), основа которой — мощные рамы из клееного бруса. Блоки первого этажа не требуют утепления (при строительстве в средней полосе), а стены второго этажа и крыша имеют утепление 250 мм, что делает этот барнхауз очень энергоэффективным.</p>
                            <p>В результате появился современный уютный дом амбарного типа для семьи из 4 человек, где все продумано до мелочей: обрамленное в деревянную раму крыльцо, просторная прихожая, большая гардеробная при входе, постирочная, где удобно разместится вся необходимая техника и инвентарь, открытое пространство кухни-столовой-гостиной с кладовой и целой стеклянной стеной с портальными раздвижными дверями, позволяющими объединить пространство гостиной с террасой. На второй этаж ведет лестница, освещенная дневным светом через карнизное окно. На втором этаже расположилась мастер-спальня с собственной гардеробной с большим окном и ванной комнатой с душевой и ванной, освещаемая через мансардное окно. Также на втором этаже находятся две большие детские комнаты с продуманными местами хранения и отдельный санузел для них, также с душевой и ванной, в который дневной свет попадает аж через два мансардных окна. Фишка этого дома в стиле barn house — возможность установки бельепровода, через который можно сбрасывать грязное белье из санузлов второго этажа — оно будет попадать сразу в постирочную на первом.</p>
                            <p>В проекте присутствует большое количество остекления. Кроме панорамного остекления в гостиной, остекление во всю стену предусмотрено в спальнях второго этажа. При этом продумана безопасность: панорамные окна второго этажа изготовлены из триплекса, а в гостиной применено закаленное стекло. Все стеклопакеты энергосберегающие, что позволит в любую погоду чувствовать себя в доме комфортно, при этом наслаждаться видом окружающей природы.</p>
                            <p>При необходимости к дому можно прибавить дополнительную открытую террасу и навес для автомобиля с плоской эксплуатируемой кровлей, на которую можно организовать выход, установив дополнительное карнизное окно в гостиной.</p>
                            <p>Архитектурный стиль, в котором выполнен этот проект, — набирающий популярность стиль barn house — смесь минимализма и лофта, с двускатной фальцевой крышей, переходящей на стены, остекленными фронтонами и консольно выступающими балконами под широкими выступами крыши. Для отделки внешних стен первого этажа предусмотрено несколько вариантов: это могут быть вертикальные фиброцементные панели «Кедрал» с несколькими десятками возможных цветов, может быть вечный облицовочный кирпич, также с большим многообразием форм и расцветок, а может быть фасадная штукатурка, которую можно колорировать практически в любой цвет. Брутальность металла и камня амбарного дома смягчает деревянная отделка в зоне балконов, цвет которой также может варьироваться. Таким образом, можно создать свой неповторимый облик этого дома.</p>
                            <p>Мы создавали этот дом с любовью к тому, что мы делаем, и к тем, для кого мы это делаем, а будущим хозяевам хотим пожелать только одного: пусть атмосфера в вашей семье будет такой же теплой и солнечной, как этот дом!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
})
