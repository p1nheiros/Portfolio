import React from 'react'

const ModalContent = ({ onClose }) => (
    <div className="modal-overlay">
        <div className="modal-container">
            <div className="modal-header">
                <h3 className="modal-title">Hackathon</h3>
                <i className="fa-solid fa-xmark modal-close" onClick={onClose}></i>
            </div>
            <div className="modal-body">
                <p className="modal-description">
                    Hackathons são eventos em que equipes criam soluções inovadoras em pouco tempo.
                    São oportunidades para aprender, fazer networking e mostrar habilidades em projetos tecnológicos.
                </p>
                <ul className="modal-services">
                    <li className="modal-service">
                        <i className="uil uil-check-circle modal-icon"></i>
                        <p className="modal-info">Ideathon Smart Agro - 2023</p>
                    </li>
                    <li className="modal-service">
                        <i className="uil uil-check-circle modal-icon"></i>
                        <p className="modal-info">Hackathon Smart Agro - 2023</p>
                    </li>
                    <li className="modal-service">
                        <i className="uil uil-check-circle modal-icon"></i>
                        <p className="modal-info">HackaSun - 2023</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

export default ModalContent;