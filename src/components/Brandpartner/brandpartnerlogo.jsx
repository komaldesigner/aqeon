import React from 'react';
import './brandpartlogo.css';
import brandlogo1 from '../../assets/logo/logo1.svg';
import brandlogo2 from '../../assets/logo/logo2.svg';
import brandlogo3 from '../../assets/logo/logo3.svg';
import brandlogo4 from '../../assets/logo/logo4.svg';


const Brandpartlogo = () => {
    return (
        <>
        <div className="hmbnnrbrandprtlogo">
            <img src={brandlogo1}  alt="brandlogo" data-aos="fade-down"/><br />
            <p>
            <span>Bradford White</span>  Is a leading manufacturer of high-quality water heaters, space heating, and storage products, dedicated to serving professional contractors and their customers worldwide. With a focus on innovation and engineering excellence, bradford white has earned the trust of millions through its commitment to quality and performance. The company prides itself on customer satisfaction, striving to deliver products that are "Built to be the best®." as part of the bradford white family of companies, they continue to uphold their promise to provide reliable and efficient solutions for all water and space heating needs.
            </p>
        </div>
        <div className="hmbnnrbrandprtlogo">
            <img src={brandlogo2}  alt="brandlogo"data-aos="fade-down" /><br />
            <p>
            <span>ACO</span> Is a global leader in water technology, specializing in rainwater and wastewater management. Founded in 1946 in schleswig-holstein, the company is driven by its mission, "Aco. We care for water," which emphasizes a protective and attentive approach to water resources. The aco watercycle focuses on the collection, transportation, purification, storage, and reuse of water, utilizing innovative separation and filtration technologies to prevent contamination by fats, fuels, heavy metals, and microplastics. Aco prioritizes durability, reusability, and a low carbon footprint in its products and systems, reflecting its deep-seated responsibility for people, the environment, and future generations. With a presence in over 50 countries, aco remains a family-owned corporation that values close relationships with regional markets and business partners.
            </p>
        </div>
        <div className="hmbnnrbrandprtlogo">
            <img src={brandlogo3} alt="brandlogo" data-aos="fade-down" /><br />
            <p>
            <span>3M</span> Is a global leader in applying science and innovation to make a meaningful impact on people's lives. The company is dedicated to reducing the weight of power lines to enhance energy efficiency, helping manufacturers achieve more with fewer resources, and automating healthcare data to ensure the right information reaches the right people. With a strong commitment to sustainability, 3m inspires innovation and progress by emphasizing environmental protection, corporate and social responsibility, and economic advancement. By leveraging its expertise, 3m continues to drive positive change and improve the quality of life for individuals worldwide.
            </p>
        </div>
        <div className="hmbnnrbrandprtlogo">
            <img src={brandlogo4} alt="brandlogo" data-aos="fade-down" /><br />
            <p>
            The<span>EBARA</span>Corporation is a japanese multinational. Like every multinational corporation, it has a unique story. The ebara story starts issey hatakeyama, brand founder, who in 1912 founded the inokuty type machinery office with prof. Ariya inokuchi’s theory on centrifugal pumps in mind. Adapting to changes that unfolded over the course of centuries, ebara kept the idea of netsu to makoto (passion and dedication) in its business. These values are still demonstrated by our more than 16,000 employees all over the world.
            Ebara has a global network consisting of more than 80 subsidiaries, 50 of which are consolidated companies, and a number of affiliates specialising in water treatment, environmental engineering systems and precision machinery.
            </p>
        </div>
        </>
    );
};

export default Brandpartlogo;
