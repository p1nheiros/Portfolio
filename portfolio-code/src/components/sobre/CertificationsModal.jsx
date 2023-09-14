import React from 'react';
import Png1 from '../../assets/Ideathon-Smart-Agro-2023.pdf';
import Png2 from '../../assets/Hackathon-Smart-Agro-Expolondrina-2023.pdf';
import Png3 from '../../assets/Oficina-Design-Sprint-Ideathon-Smart-Agro.pdf';
import Png4 from '../../assets/HackaSun-2023.pdf';
import Png5 from '../../assets/Hackathon-Health-Tech-2023.pdf';

const CertificationsModal = ({ onClose }) => {
    const handleDownload = (pdfUrl) => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.target = '_blank';
        link.rel = 'noreferrer';
        link.download = 'certificado.pdf';
        link.click();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="modal-header">
                    <h2 className="modal-title">Certificações</h2>
                    <span className="modal-close" onClick={onClose}>
                        &times;
                    </span>
                </div>
                <div className="modal-body">
                    <p className="modal-description">
                        Clique para baixar meus certificados de todos os Hackathons em que participei.
                    </p>
                    <ul className="modal-services">
                        <li className="modal-service" onClick={() => handleDownload(Png1)}>
                            <i className="fa-solid fa-download modal-icon"></i>
                            <p className="modal-info">Ideathon Smart Agro 2023</p>
                        </li>
                        <li className="modal-service" onClick={() => handleDownload(Png2)}>
                            <i className="fa-solid fa-download modal-icon"></i>
                            <p className="modal-info">Hackathon Smart Agro 2023</p>
                        </li>
                        <li className="modal-service" onClick={() => handleDownload(Png3)}>
                            <i className="fa-solid fa-download modal-icon"></i>
                            <p className="modal-info">Oficina Design Sprint 2023</p>
                        </li>
                        <li className="modal-service" onClick={() => handleDownload(Png4)}>
                            <i className="fa-solid fa-download modal-icon"></i>
                            <p className="modal-info">HackaSun 2023</p>
                        </li>
                        <li className="modal-service" onClick={() => handleDownload(Png5)}>
                            <i className="fa-solid fa-download modal-icon"></i>
                            <p className="modal-info">Hackathon HealthTech 2023</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CertificationsModal;
