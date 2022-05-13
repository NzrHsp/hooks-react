import React, { useState, useEffect } from "react";
import axios from "axios";

export default ({ language, text }) => {
  const [translated, seTranslated] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(translated);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedTerm(text);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedTerm,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      seTranslated(data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [language, debouncedTerm]);

  return <h1 className="ui header">{translated}</h1>;
};
