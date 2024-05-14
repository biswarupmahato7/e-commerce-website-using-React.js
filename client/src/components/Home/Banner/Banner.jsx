import BannerImg from "../../../assets/banner-img.png"
import "./Banner.scss";


const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1 >Audio Sphere</h1>
                <p>
                Experience unparalleled sound quality and comfort with our sleek 
                headphones,featuring advanced noise cancellation technology 
                for an immersive listening experience..
                </p>
                {/* call to action */}
                <div className="ctas"> 
                <div className="banner-cta">Read More</div>
                <div className="banner-cta v2">Shop Now</div>

                </div>
            </div>
                <img className="banner-img" src={BannerImg} alt="Headphone Img" />
        </div>

    </div>;
};

export default Banner;
