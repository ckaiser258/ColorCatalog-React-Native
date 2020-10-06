import { useState, useEffect } from "react";
import { generate } from "shortid";
import {AsyncStorage} from 'react-native'

export const useColors = () => {
    const [colors, setColors] = useState([]);

    const loadColors = async () => {
        const colorData = await AsyncStorage.getItem("@ColorListStore:Colors") //Key for the data we want to load.
        if (colorData) {
            const colors = JSON.parse(colorData)
            //Convert string into an array of colors.
            setColors(colors)
        }
    }

    //Load colors upon render.
    useEffect(() => {
        if (colors.length) return
        loadColors()
    }, [])
    
    //Any time there's a change to the colors array, save that change to AsyncStorage.
    useEffect(() => {
        AsyncStorage.setItem("@ColorListStore:Colors", JSON.stringify(colors))
    }, [colors])

    const addColor = (color) => {
      const newColor = { id: generate(), color };
      setColors([newColor, ...colors]);
    };
    return { colors, addColor };
  };