import React from 'react';
import './brandpartlogo.css';
import brandlogo1 from '../../assets/logo/logo1.svg';
import brandlogo2 from '../../assets/logo/logo2.svg';
import brandlogo3 from '../../assets/logo/logo3.svg';


const Brandpartlogo = () => {
    return (
        <>
        <div class="hmbnnrbrandprtlogo">
            <img src={brandlogo1} /><br />
            <p>
            Bradford White is a leading manufacturer of high-quality water heaters, space heating, and storage products, dedicated to serving professional contractors and their customers worldwide. With a focus on innovation and engineering excellence, Bradford White has earned the trust of millions through its commitment to quality and performance. The company prides itself on customer satisfaction, striving to deliver products that are "Built to be the Best®." As part of the Bradford White family of companies, they continue to uphold their promise to provide reliable and efficient solutions for all water and space heating needs.
            </p>
        </div>
        <div class="hmbnnrbrandprtlogo">
            <img src={brandlogo2} /><br />
            <p>
            <span>ACO</span> is a global leader in water technology, specializing in rainwater and wastewater management. Founded in 1946 in Schleswig-Holstein, the company is driven by its mission, "ACO. we care for water," which emphasizes a protective and attentive approach to water resources. The ACO WaterCycle focuses on the collection, transportation, purification, storage, and reuse of water, utilizing innovative separation and filtration technologies to prevent contamination by fats, fuels, heavy metals, and microplastics. ACO prioritizes durability, reusability, and a low carbon footprint in its products and systems, reflecting its deep-seated responsibility for people, the environment, and future generations. With a presence in over 50 countries, ACO remains a family-owned corporation that values close relationships with regional markets and business partners.
            </p>
        </div>
        <div class="hmbnnrbrandprtlogo">
            <img src={brandlogo3} /><br />
            <p>
            <span>3M</span> is a global leader in applying science and innovation to make a meaningful impact on people's lives. The company is dedicated to reducing the weight of power lines to enhance energy efficiency, helping manufacturers achieve more with fewer resources, and automating healthcare data to ensure the right information reaches the right people. With a strong commitment to sustainability, 3M inspires innovation and progress by emphasizing environmental protection, corporate and social responsibility, and economic advancement. By leveraging its expertise, 3M continues to drive positive change and improve the quality of life for individuals worldwide.
            </p>
        </div>
        </>
    );
};

export default Brandpartlogo;
