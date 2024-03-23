// Importing Package
import { useEffect } from 'react';

export default function Testimonials({ testimonials, Swiper }) {
    // Initializes Testimonial Swiper
    useEffect(() => {
        new Swiper('.swiper', {
            autoHeight: true,
            // Enable continuous loop for the slides
            loop: true,
            // Configuring bottom navigation dots for slide tracking
            pagination: {
                el: '.swiper-pagination'
            },
            // If the user clicks any of these buttons it will swipe over
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });
    })

    return testimonials.map(({ Firstname, LastName, Relationship, Profession, Image, Testimonial }, i) => {
        return (
            <li className="swiper-slide" key={i + 1}>
                <div className="wrapper">
                    <div className="img-container">
                        <img src={Image} alt={`${Firstname} ${LastName}`} />
                    </div>
                    <div className="message-container">
                        <p>{Testimonial}</p>
                        <div className="PartnerDescription-Container">
                            <h3>{`${Firstname} ${LastName}`}</h3>
                            <p>{`${Relationship}: ${Profession}`}</p>
                        </div>
                    </div>
                </div>
            </li>
        );
    });
}