import React from "react";
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox-next";
import {PaletteTree} from "./palette";
import Products from "@/app/[lang]/products/page";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Products">
                <p></p>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;