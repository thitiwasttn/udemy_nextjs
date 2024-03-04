'use client'
import classes from "./image-picker.module.css";
import {ChangeEvent, useRef, useState} from "react";
import Image from 'next/image';
import {StaticImageData, StaticRequire} from "next/dist/shared/lib/get-img-props";


export default function ImagePicker(prop: any) {
    const [pickedImage, setPickedImage] = useState<string | StaticRequire | StaticImageData>();
    const imageInputRef = useRef<any>();

    function handlePickClick() {
        imageInputRef.current.click();
    }

    function handleImageChange(event: ChangeEvent<HTMLImageElement> | any) {
        const file = event.target.files[0];

        if (!file) {
            setPickedImage("");
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
            // @ts-ignore
            setPickedImage(fileReader.result);
        };

        fileReader.readAsDataURL(file);
    }

    return <>
        <div className={classes.picker}>
            <label htmlFor={prop.name}>{prop.label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No image picked yet.</p>}
                    {pickedImage && (
                        <Image
                            src={pickedImage}
                            alt="The image selected by the user."
                            fill={true}
                        />
                    )}
                </div>
                <input
                    className={classes.input}
                    type="file"
                    id={prop.name}
                    accept="image/png, image/jpeg"
                    name={prop.name}
                    ref={imageInputRef}
                    onChange={handleImageChange}
                />
                <button
                    className={classes.button}
                    type="button"
                    onClick={handlePickClick}
                >
                    Pick an Image
                </button>
            </div>
        </div>
    </>
}