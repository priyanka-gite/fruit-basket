import React, { useState } from "react";
import "./App.css";
import Button from "./Button";
import "./Btn.css";
import Form from "./Form";
import Select from "./Select";

function App() {
  const [aardbei, setAardbei] = useState(0);
  const [banaan, setBanaan] = useState(0);
  const [appel, setAppel] = useState(0);
  const [kiwi, setKiwi] = useState(0);
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [ageValue, setAgeValue] = useState("");
  const [postcodeValue, setPostcodeValue] = useState("");
  const [commentValue, setCommentValue] = useState("");
  const [termsAndCondtionsValue, toggleTermsAndCondtions] = useState(true);
  const [selectFrequencyValue, setSelectedFrequencyValue] = useState("everyWeek");

  function aardbeiIncrement() {
    setAardbei((aardbei) => aardbei + 1);
  }
  function aardbeiReduction() {
    setAardbei((aardbei) => aardbei - 1);
  }

  function banaanIncrement() {
    setBanaan((banaan) => banaan + 1);
  }
  function banaanReduction() {
    setBanaan((banaan) => banaan - 1);
  }

  function appelIncrement() {
    setAppel((appel) => appel + 1);
  }
  function appelReduction() {
    setAppel((appel) => appel - 1);
  }

  function kiwiIncrement() {
    setKiwi((kiwi) => kiwi + 1);
  }
  function kiwiReduction() {
    setKiwi((kiwi) => kiwi - 1);
  }

  function resetButton() {
    console.log("i am clicked")
    setBanaan(0);
    setKiwi(0);
    setAppel(0);
    setAardbei(0);
  }

  function frequency (e) {
    console.log(e.target.value)
    if (e.target.value=== "everyWeek"){
      setSelectedFrequencyValue("Iedere week")}
    if (e.target.value === "alternateWeek"){
      setSelectedFrequencyValue("om de week")}
    if (e.target.value === "monthly")
    {setSelectedFrequencyValue("iedere maand")}
  }

  function handleSubmit() {
      console.log({kiwi, banaan, aardbei, appel, firstNameValue,lastNameValue,ageValue,postcodeValue,commentValue, termsAndCondtionsValue, selectFrequencyValue})
  }

  return (
    <>
    <div>
      <main>
        <h1>Fruitmand bezorgservice</h1>

        <section className="background-color-aardbei">
          <h2>
            <strong> 🍓 Aardbeien </strong>
          </h2>
          <Button
            type="button"
            handleClick={aardbeiReduction}
            disabled={aardbei <= 0}
            text="-"
          />

          {aardbei}

          <Button type="button" handleClick={aardbeiIncrement} text="+" />
        </section>

        <section className="background-color-banaan">
          <h2>

            <strong> 🍌 Banaan </strong>
          </h2>
          <Button
            type="button"
            handleClick={banaanReduction}
            disabled={banaan <= 0}
            text="-"

          />

          {banaan}

          <Button type="button" handleClick={banaanIncrement} text="+" />
        </section>

        <section className="background-color-appels">
          <h2>
            <strong> 🍏 Appels </strong>
          </h2>
          <Button
            type="button"
            handleClick={appelReduction}
            disabled={appel <= 0}
            text="-"

          />

          {appel}

          <Button type="button" handleClick={appelIncrement} text="+" />
        </section>

        <section className="background-color-kiwi">
          <h2>
            <strong> 🥝 Kiwi </strong>
          </h2>
          <Button
            type="button"
            handleClick={kiwiReduction}
            disabled={kiwi <= 0}
            text="-"

          />

          {kiwi}

          <Button type="button" handleClick={kiwiIncrement} text="+" />
        </section>

        <div>
          <Button
            type="button"
            handleClick={resetButton}
            className="reset-button"
            text="Reset"
          />
        </div>
      </main>
      <footer>
        <h1> Bezorg Adress</h1>
        <form>
          {/*   value refers to textbox value*/}
          {/* key (firstnamevalue) saves the information we have in value  */}
          {/*  onChange makes an object. we set the value of inputfield in setter function*/}
          <Form
              htmlFor="firstname"
              text = "Voornaam"
              type= "text"
              name="firstname"
              id="firstname"
              value={firstNameValue}
              handleChange={(e)=>{setFirstNameValue(e.target.value)}}
          />
          <br />
          <Form
              htmlFor="lastname"
              text = "Achternaam"
              type= "text"
              name="lastname"
              id="lastname"
              value={lastNameValue}
              handleChange={(e)=>{setLastNameValue(e.target.value)}}
          />
          <br />
          <Form
              htmlFor="age"
              text="Leeftijd:"
              type="number"
              name="age"
              id="age"
              min="18"
              value={ageValue}
              handleChange={(e)=>setAgeValue(e.target.value)}
          />
          <br />
          <Form
              htmlFor="postcode"
              text= "Postcode:"
            type="text"
            pattern="[0-9]{5}"
            name="postcode"
            id="postcode"
            value={postcodeValue}
            handleChange={(e)=>{setPostcodeValue(e.target.value)}}
          />
          <br />

          {/*<Select*/}
          {/*    htmlFor="frequency"*/}
          {/*    text = "Bezorgfrequency:"*/}
          {/*    selId="frequency"*/}
          {/*    name="frequency"*/}
          {/*    handleSelect={frequency}*/}
          {/*    freqValue="everyWeek"*/}
          {/*    timeFrequency = "Iedere week"*/}
          {/*    freqValue="alternateWeek"*/}
          {/*    timeFrequency =  "om de week"*/}
          {/*    freqValue="monthly"*/}
          {/*    timeFrequency =  "iedere maand"*/}
          {/*/>*/}
        <br/>

          <label htmlFor="frequency">Bezorgfrequency:</label>
          <select id="frequency" name="frequency"  onChange={frequency} >
            <option value="everyWeek" > Iedere week </option>
            <option value="alternateWeek"> om de week</option>
            <option value="monthly"> iedere maand </option>
          </select>

          <br />
          <div>
            <Form
                htmlFor="option1"
                text="Overdag"
                type="radio"
                name="time-of-delivery"
                value="daytime"
                id="option1"
            />
            <Form
                htmlFor="option2"
                text= "'s Avonds"
                type="radio"
                name="time-of-delivery"
                value="evening"
                id="option2"
            />
          </div>
          <br />
          <Form
              htmlFor="comments"
              text = "Opmerking"
              type="text"
              id="comments"
              value={commentValue}
              handleChange={(e)=> {setCommentValue(e.target.value)}}
          />
          <br />

          <Form
              htmlFor="terms-and-conditions"
              type="checkbox"
              name="termsAndConditions"
              checked={termsAndCondtionsValue}
              id="terms-and-conditions"
              handleChange={(e)=>{toggleTermsAndCondtions(!termsAndCondtionsValue)}}
              sentence = "Ik ga akkord met de voorwaarden."
            />
          <br />

           <Button
              type="button"
              text="Verzend"
              className="reset-button"
              handleClick ={handleSubmit}
          />
        </form>
      </footer>
      </div>
    </>
  );
}

export default App;
