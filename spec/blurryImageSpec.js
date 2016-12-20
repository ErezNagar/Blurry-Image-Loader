"use strict";

var React = require("react");
var ReactTestUtils = require("react-addons-test-utils");
import BlurryImage from "../src/BlurryImage";

describe("BlurryImage structure: (shallow rendering)", function () {
    var blurryImage;

    beforeEach(function() {
        const renderer = ReactTestUtils.createRenderer();
        var component = <BlurryImage placeholder="../images/photo1.placeholder.png"
                                            image="https://static.pexels.com/photos/161809/cityscape-manhattan-skyline-view-161809.jpeg" />
        renderer.render(component);
        blurryImage = renderer.getRenderOutput();
    });

    it("should be rendered", () => {
        expect(blurryImage).toBeTruthy();
    });

    it("should be of type 'div'", () => {
        expect(blurryImage.type).toBe("div");
    });

    it("should have a className prop", () => {
        expect(blurryImage.props.className).toBe("blurry-image");
    });

    it("should be rendered with the placeholder image", () => {
        expect(blurryImage.props.style.backgroundImage).toBe("url(../images/photo1.placeholder.png)");
    });
});

describe("blurryImage behaviour:", function () {
    var blurryImage;

    beforeEach(function() {
        blurryImage = ReactTestUtils.renderIntoDocument(
            <BlurryImage placeholder="images/photo3.placeholder.png" image="https://static.pexels.com/photos/132657/pexels-photo-132657.jpeg" />
        );
    });

    it("should replace placeholder with full-size image", () => {
        expect(blurryImage.state.style.backgroundImage).toBe("url(images/photo3.placeholder.png)");
        blurryImage.onImageLoaded();
        expect(blurryImage.state.style.backgroundImage).toBe("url(https://static.pexels.com/photos/132657/pexels-photo-132657.jpeg)");
    });

    it("should set blur effect to 0", () => {
        expect(blurryImage.state.style.filter).toBe("blur(25px)");
        blurryImage.onImageLoaded();
        expect(blurryImage.state.style.filter).toBe("blur(0)");
    });

    it("should call image onLoad() handler (async)", (done) => {
        spyOn(blurryImage, "onImageLoaded");

        expect(blurryImage.onImageLoaded.calls.any()).toBeFalsy();

        setTimeout(() => {
            expect(blurryImage.onImageLoaded.calls.count()).toEqual(1);
            done();
        }, 12000);
    }, 20000);

    it("should set the src full-size image after it was downloaded (async)", (done) => {
        spyOn(blurryImage, "onImageLoaded");

        expect(blurryImage.state.style.backgroundImage).toBe("url(images/photo3.placeholder.png)");

        setTimeout(() => {
            expect(blurryImage.state.style.backgroundImage).toBe("url(https://static.pexels.com/photos/132657/pexels-photo-132657.jpeg)");
            done();
        }, 12000);
    }, 10000);
});
