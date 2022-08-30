import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  RUPEE,
  DOLLAR,
  EURO,
  NAIRA,
  NEW_SHEKEL,
  POUND,
  RUBLE,
  TAKA,
  WON,
  YEN,
} from "../constants/currency";
import { INDIAN, INTERNATIONAL } from "../constants/amountFormat";

import { setPreference } from "../features/preference/preferenceSlice";

export default function Settings() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const preference = useSelector((state) => state.preference);

  const [formData, setFormData] = useState({
    amountFormat: preference.amountFormat,
    currency: preference.currency,
  });
  const { amountFormat, currency } = formData;

  const [preferenceSaveButtonLabel, setPreferenceSaveButtonLabel] =
    useState("Save");

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  });

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePreferenceSubmit = () => {
    const preference = {
      amountFormat,
      currency,
    };

    dispatch(setPreference(preference));
    setPreferenceSaveButtonLabel("Saved 🎉");
  };

  return (
    <>
      <div className="w-full max-w-sm sm:mt-4 mb-8">
        <h1 className="text-4xl font-bold text-left">Settings</h1>
      </div>

      <div className="card w-full max-w-sm bg-base-100 mb-8">
        <div className="card-body sm:w-96 w-full">
          <div className="card-title">
            <h1 className="text-2xl font-bold">Preference</h1>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Currency Format</span>
            </label>
            <select
              className="select select-bordered"
              name="amountFormat"
              value={amountFormat}
              onChange={onChange}
            >
              <option value={INDIAN}>Indian</option>
              <option value={INTERNATIONAL}>International</option>
            </select>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Currency Name</span>
            </label>
            <select
              className="select select-bordered"
              name="currency"
              value={currency}
              onChange={onChange}
            >
              <option value={RUPEE}>Rupee (₹) 🇮🇳</option>
              <option value={DOLLAR}>Dollar ($) 🇺🇸 🇦🇺 🇨🇦 🇲🇽</option>
              <option value={EURO}>Euro (€) 🇪🇺</option>
              <option value={NAIRA}>Naira (₦) 🇳🇬</option>
              <option value={NEW_SHEKEL}>New Shekel (₪) 🇮🇱</option>
              <option value={POUND}>Pound (£) 🇬🇧</option>
              <option value={RUBLE}>Ruble (₽) 🇷🇺</option>
              <option value={TAKA}>Taka (৳) 🇧🇩</option>
              <option value={WON}>Won (₩) 🇰🇷</option>
              <option value={YEN}>Yen (¥) 🇯🇵 🇨🇳</option>
            </select>
          </div>
          <div className="form-control mt-4">
            <button
              className="btn bg-green-500 text-white"
              onClick={handlePreferenceSubmit}
            >
              {preferenceSaveButtonLabel}
            </button>
          </div>
        </div>
      </div>

      <div className="card w-full max-w-sm bg-base-100 mb-8">
        <div className="card-body sm:w-96 w-full">
          <div className="card-title">
            <h1 className="text-2xl font-bold">Delete Account</h1>
          </div>

          <p className="text-justify text-xs mt-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam id
            praesentium laudantium ratione vel necessitatibus distinctio, quas
            error suscipit rerum eaque accusantium dolorum, sint, consequuntur
            obcaecati mollitia amet quae. Cum?
          </p>
          <button className="btn bg-red-500 text-white w-full mt-4">
            Delete
          </button>
        </div>
      </div>

      <div className="card w-full max-w-sm bg-base-100 mb-8">
        <div className="card-body sm:w-96 w-full">
          <div className="card-title">
            <h1 className="text-2xl font-bold">Normalization</h1>
          </div>

          <p className="text-justify text-xs mt-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam id
            praesentium laudantium ratione vel necessitatibus distinctio, quas
            error suscipit rerum eaque accusantium dolorum, sint, consequuntur
            obcaecati mollitia amet quae. Cum?
          </p>
          <button className="btn bg-yellow-500 text-white w-full mt-4">
            Normalize
          </button>
        </div>
      </div>
    </>
  );
}
