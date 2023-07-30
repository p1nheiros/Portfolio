import React, { useState } from 'react';
import ModalContent from './ModalContent';
import CertificationsModal from './CertificationsModal';

const AboutBox = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const closeModal = () => {
        setToggleState(0);
    };

    const handleViewMore = () => {
        window.location.href = '#portfolio';
    };

    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <i className="about__icon icon-fire"></i>
                <div>
                    <h3 className="about__title">5+</h3>
                    <span className="about__subtitle">Projetos Concluídos</span>

                    <span className="services__button" onClick={handleViewMore}>
                        Ver Mais <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-people"></i>
                <div>
                    <div>
                        <h3 className="about__title">3+</h3>
                        <span className="about__subtitle">Hackathons</span>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(2)}>
                        Veja mais <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                </div>
                {toggleState === 2 && <ModalContent onClose={closeModal} />}
            </div>

            <div className="about__box">
                <i className="about__icon icon-badge"></i>
                <div>
                    <div>
                        <h3 className="about__title">4+</h3>
                        <span className="about__subtitle">Certificações</span>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(3)}>
                        Ver Mais <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                </div>
                {toggleState === 3 && <CertificationsModal onClose={closeModal} />}
            </div>
        </div>
    );
};

export default AboutBox;
