import React, { useEffect, useRef, useState } from "react"
import Card from "../../atom/Card"
import data from "../../../utils/dummy"
import iconBoy from "./../../../assets/card/boy.svg"
import iconGirl from "./../../../assets/card/girl.svg"
import useInput from "../../../hooks/useInput"
import rumus from "../../../utils/rumus"
import Toast from "../../atom/Toast"
import useToast from "../../../hooks/useToast"

export default function BMICalcu() {
  // input form
  const [beratBadan, setBeratBadan, onBeratBadanChange] = useInput("")
  const [tinggiBadan, setTinggiBadan, onTinggiBadanChange] = useInput("")
  const [gender, setGender, onGenderChange] = useInput("")

  // data result
  const [result, setResult] = useState(null)

  // error handling
  const [errorMessage, setErrorMessage] = useState("")

  // ref
  const modalRef = useRef()

  // toast visibility
  const [showToast, setShowToast] = useToast(errorMessage)

  // calculate
  const onCalculate = async (event) => {
    try {
      setErrorMessage("")
      event.preventDefault()
      const { BMI, kategori, saran } = rumus.BMICalculate(
        beratBadan,
        tinggiBadan,
        gender
      )
      await setResult({ BMI: BMI.toFixed(2), kategori, saran })
      modalRef.current.showModal()
      setBeratBadan("")
      setTinggiBadan("")
      setGender("")
    } catch (error) {
      setErrorMessage(error.message)
      setShowToast(true)
    }
  }

  const BMICalculator = data.calculator.slice(0, 3)

 

  return (
    <div>
      {showToast && (
        <Toast>
          {errorMessage}
        </Toast>
      )}
      {result && (
        <dialog ref={modalRef} id="my_modal_4" className="modal">
          <div className="modal-box text-lg w-6/12 max-w-5xl flex flex-col text-center justify-center items-center">
            <div className="flex flex-col mb-2">
              <h3 className="font-bold text-2xl">BMI kamu {result?.BMI}</h3>
              <h2 className="font-bold text-2xl">
                Kamu masuk dalam kategori {result?.kategori}
              </h2>
            </div>
            <h2 className="font-bold text-xl">Tips Untuk Kamu</h2>
            <ul>
              {result?.saran.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn btn-secondary w-full">
                  Hitung Lagi
                </button>
              </form>
            </div>
          </div>
        </dialog>
      )}
      <div className="w-full flex justify-center items-center py-8">
        <form onSubmit={onCalculate}>
          <div
            className={`grid grid-cols-6 items-center justify-center gap-y-6 gap-x-4 max-w-3xl mb-4`}>
            {BMICalculator.map((item, index) =>
              index === 0 ? (
                <div className="col-span-6" key={index}>
                  <Card visual={true}>
                    <h3 className="text-sm font-medium text-[#b9b9b9]">
                      Pilih Jenis Kelamin mu!
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl text-secondary font-semibold">
                        {item.title}
                      </span>
                      <div className="flex gap-4 px-8">
                        <div className="form-control flex flex-col justify-center items-center">
                          <img className="w-20 h-20" src={iconBoy} alt="" />
                          <label className="label cursor-pointer space-x-2">
                            <input
                              type="radio"
                              name="gender"
                              className="radio radio-sm radio-info"
                              required
                              checked={gender === "laki-laki"}
                              value="laki-laki"
                              onChange={onGenderChange}
                            />
                            <span className="label-text text-lg">
                              Laki Laki
                            </span>
                          </label>
                        </div>
                        <div className="form-control flex flex-col justify-center items-center">
                          <img className="w-20 h-20" src={iconGirl} alt="" />
                          <label className="label cursor-pointer space-x-2">
                            <input
                              type="radio"
                              name="gender"
                              required
                              className="radio radio-sm radio-info"
                              checked={gender === "perempuan"}
                              value="perempuan"
                              onChange={onGenderChange}
                            />
                            <span className="label-text text-lg">
                              Perempuan
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ) : index === 1 ? (
                <div className="col-span-3" key={index}>
                  <Card
                    valueInput={beratBadan}
                    onInputChange={onBeratBadanChange}
                    {...item}
                  />
                </div>
              ) : (
                index === 2 && (
                  <div className="col-span-3" key={index}>
                    <Card
                      valueInput={tinggiBadan}
                      onInputChange={onTinggiBadanChange}
                      {...item}
                    />
                  </div>
                )
              )
            )}
          </div>
          <button className="btn submit btn-secondary w-full">
            Saya menghitung!
          </button>
        </form>
      </div>
    </div>
  )
}
