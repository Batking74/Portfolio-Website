// Importing Modules/Packages
import Testimonials from "./UI/Testimonials";
import Swiper from 'swiper';

const relationship = ['Collaborator', 'Client'];


export default function TestimonialComponent() {
    return (
        <section className="project" id="Testimonials-Section">
            <h2 className="heading">Testimonial<span className="highlight highlight-Toggle">s</span></h2>
            <p className="sub-heading">
                Explore the voices of satisfied clients and collaborators as they share their satisfaction with my work ethic, performance, and work!
            </p>
            <div className="seperator"></div>
            <div className="filters">
                <button className="testimonial-filter-btn active" id="all-testimonials">All</button>
                <button className="testimonial-filter-btn" id="Collaborator">Collaborators</button>
                <button className="testimonial-filter-btn" id="Client">Clients</button>
            </div>
            <div className="testimonial-container">
                <div className="swiper">
                    <ul className="swiper-wrapper testimonials-append-container">
                        {/* Displays Products on Web Page */}
                        <Testimonials Swiper={Swiper} testimonials={[
                            {
                                Firstname: 'Team Lead',
                                LastName: 'Zach',
                                Relationship: relationship[0],
                                Profession: 'Team Leader at Target Corporation (Manager)',
                                Image: '/images/people/Target_Team_Lead_Zach.webp',
                                Testimonial: 'Nazir has grown as a Team Member since the time I’ve been a manager at Target Corporation. He has excelled at tasks that have been presented to him. His ingenuity to help others at work has shown, and has been taken noticed by other leaders at Target.'
                            },
                            {
                                Firstname: 'Team Lead',
                                LastName: 'Shawn',
                                Relationship: relationship[0],
                                Profession: 'Team Leader at Target Corporation (Manager)',
                                Image: '/images/others/Lion2.webp',
                                Testimonial: 'Coming Soon! Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eligendi magni obcaecati quia. Provident quidem expedita distinctio nam numquam reprehenderit assumenda quasi dolores tenetur, quibusdam laboriosam, sint optio, aperiam corporis?'
                            },
                            {
                                Firstname: 'ETL',
                                LastName: 'Ashley',
                                Relationship: relationship[0],
                                Profession: 'Executive Team Leader at Target Corporation (Manager)',
                                Image: '/images/others/Lion2.webp',
                                Testimonial: 'Coming Soon! Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eligendi magni obcaecati quia. Provident quidem expedita distinctio nam numquam reprehenderit assumenda quasi dolores tenetur, quibusdam laboriosam, sint optio, aperiam corporis?'
                            }
                        ]} />
                    </ul>
                    <div className="swiper-pagination"></div>

                    {/* Navigation Buttons */}
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
            </div>
        </section>
    );
}