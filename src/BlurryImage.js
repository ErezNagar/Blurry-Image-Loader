// import React from 'react'

class BlurryImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {
                overflow: "hidden",
                backgroundImage: "url(" + this.props.placeholder + ")",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                filter: "blur(25px)"
            }
        };
    }

    componentDidMount(){
        this.img = new Image();
        this.img.onload = () => this.onImageLoaded();
        this.img.src = this.props.image;
    }

    onImageLoaded(){
        this.img.onload = null;
        this.setState({
            style: {
                backgroundImage: "url(" + this.props.image + ")",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                transition: "filter 500ms linear",
                filter: "blur(0)"
            }
        });
    }

    render() {
        return (
            <div className="blurry-image" style={this.state.style}></div>
        );
    }
}

BlurryImage.propTypes = {
    placeholder: React.PropTypes.string.isRequired,
    image: React.PropTypes.string.isRequired
};

// export default BlurryImage;
