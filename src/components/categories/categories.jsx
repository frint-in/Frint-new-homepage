import React from 'react'
import "./categories.css";

const Categories = () => {
    return (
        <section className="categories">
            <div className="cat-section">
                <div className="cat-header"><h1><span className='top-bar'>Categories</span></h1></div>
                <div className="container">
                    <div className="left-cont">
                        <h2>Choose an Internship <br></br> that suits you</h2>
                    </div>
                    <div className="right-cont">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nihil voluptatibus mollitia reprehenderit porro dolorum molestias quibusdam nemo sed iure earum architecto, eius facere saepe. Necessitatibus qui animi optio veritatis.
                    </div>
                </div>
                <div className="cat-cards">
                    <div className="cards-main-1">
                        <img src="src\assets\image 9.png" alt="" />
                        <h2>Technology</h2>
                        <ul className='cards-list'>
                            <li>Web Development</li>
                            <li>App Development</li>
                            <li>Machine Learning</li>
                            <li>WordPress</li>
                            <li>E-Commerce</li>
                        </ul>
                        <a href="">See all</a>
                    </div>
                    <div className="cards-mains">
                        <div className="card-up">
                            <img src="src\assets\image 8.png" alt="" />
                            <h2>Academic</h2>
                            <ul className='cards-list'>
                                <li>Engineering</li>
                                <li>General Science</li>
                                <li>Commerce & Huminities</li>
                            </ul>
                        </div>
                        <div className="card-down">
                            <img src="src\assets\image 8.png" alt="" />
                            <h2>Business</h2>
                            <ul className='cards-list'>
                                <li>Sales</li>
                                <li>Accounts & Data</li>
                                <li>Digital Marketing</li>
                            </ul>
                        </div>
                    </div>
                    <div className="cards-main-2">
                        <img src="src\assets\image 9.png" alt="" />
                        <h2>Creative</h2>
                        <ul className='cards-list'>
                            <li>Graphics Designing</li>
                            <li>Logo & Branding</li>
                            <li>Video Editing</li>
                            <li>UI/UX Design</li>
                            <li>Photoshop</li>
                        </ul>
                        <a href="">See all</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categories;