import React from 'react'

const AboutBox = () => {
    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <i className="about__icon icon-fire"></i>

                <div>
                    <h3 className="about__title">5+</h3>
                    <span className="about__subtitle">Projetos Concluídos</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-people"></i>

                <div>
                    <h3 className="about__title">4+</h3>
                    <span className="about__subtitle">Eventos</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-badge"></i>

                <div>
                    <h3 className="about__title">6+</h3>
                    <span className="about__subtitle">Certificações</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox