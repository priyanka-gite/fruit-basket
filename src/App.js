import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import "./Btn.css";
import Form from "./components/Form";
import { useForm } from 'react-hook-form';


function App() {
  const { register } = useForm();
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
    console.log("i am resetted")
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
    console.log(
        {kiwi, banaan, aardbei, appel, firstNameValue,lastNameValue,ageValue,postcodeValue,commentValue, termsAndCondtionsValue, selectFrequencyValue})
  }

  return (
      <>
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
                {...register("firstname", {
                  required: true,
                })}
                id="firstname"
                value={firstNameValue}
                handleChange={(e)=>{setFirstNameValue(e.target.value)}}
            />
            <br />
            <br />
            <Form
                htmlFor="lastname"
                text = "Achternaam"
                type= "text"
                {...register("lastname", {
                  required:true,
                })}
                id="lastname"
                value={lastNameValue}
                handleChange={(e)=>{setLastNameValue(e.target.value)}}
            />
            <br />
            <br />
            <Form
                htmlFor="age"
                text="Leeftijd:"
                type="number"
                {...register("age", {
                  required:true,
                })}
                id="age"

                value={ageValue}
                handleChange={(e)=>setAgeValue(e.target.value)}
            />
            <br />
            <br />
            <Form
                htmlFor="postcode"
                text= "Postcode:"
                type="text"
                pattern="[0-9]{5}"
                {...register("postcode", {
                  required:true,
                  maxlength:6
                })}
                id="postcode"
                value={postcodeValue}
                handleChange={(e)=>{setPostcodeValue(e.target.value)}}
            />
            <br />
            <br/>

            <label htmlFor="frequency">Bezorgfrequency:</label>
            <select id="frequency" {...register("frequency", {
              required:true,
            })}  onChange={frequency} >
              <option value="everyWeek" > Iedere week </option>
              <option value="alternateWeek"> om de week</option>
              <option value="monthly"> iedere maand </option>
            </select>

            <br />
            <br />
            <div>
              <Form
                  htmlFor="option1"
                  text="Overdag"
                  type="radio"
                  {...register("time-of-delivery")}
                  value="daytime"
                  id="option1"
              />
              <Form
                  htmlFor="option2"
                  text= "'s Avonds"
                  type="radio"
                  {...register("time-of-delivery")}
                  value="evening"
                  id="option2"
              />
            </div>
            <br />
            <Form
                htmlFor="comments"
                text = "Opmerking: "
                type="text"
                id="comments"
                {...register("comments")}
                value={commentValue}
                handleChange={(e)=> {setCommentValue(e.target.value)}}
            />
            <br />
            <br />
            <Form
                htmlFor="terms-and-conditions"
                type="checkbox"
                {...register("termsAndConditions", {
                  required:true
                })}
                checked={termsAndCondtionsValue}
                id="terms-and-conditions"
                handleChange={(e)=>{toggleTermsAndCondtions(!termsAndCondtionsValue)}}
                sentence = "Ik ga akkord met de voorwaarden."
            />
            <br />
            <br />
            <Button
                type="button"
                text="Verzend"
                className="reset-button"
                handleClick ={handleSubmit}
            />
          </form>
        </footer>
      </>
  );
}

export default App;
