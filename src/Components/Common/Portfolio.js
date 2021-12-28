import React, {Component} from "react";
import PortfolioItem from "./Portfolio-items";
import image1 from '../assets/img/portfolio/1.jpg'
import image2 from '../assets/img/portfolio/2.jpg'
import image3 from '../assets/img/portfolio/3.jpg'
import image4 from '../assets/img/portfolio/4.jpg'
import image5 from '../assets/img/portfolio/5.jpg'
import image6 from '../assets/img/portfolio/6.jpg'


const portfolio = [
    {title:'Threads', subtitle:'Illustration', image:image1},
    {title:'Explore', subtitle:'Graphic Design', image:image2},
    {title:'Finish', subtitle:'Identity', image:image3},
    {title:'Lines', subtitle:'Branding', image:image4},
    {title:'Southwest', subtitle:'Web Design', image:image5},
    {title:'Window', subtitle:'Photography', image:image6},
]

class Portfolio extends Component{
    render(){
        return(
            <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Portfolio</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                    {
                        portfolio.map((item, index)=>{
                           return <PortfolioItem {...item} key={index}/>;
                        })
                    }
                    
                </div>
            </div>
        </section>
     
        )
    }
}

export default Portfolio