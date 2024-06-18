import React, { useState, useRef } from "react"

import Card from "../../atom/Card"

import data from "../../../utils/dummy"
import iconBoy from "./../../../assets/card/boy.svg"
import iconGirl from "./../../../assets/card/girl.svg"
import useInput from "../../../hooks/useInput"
import rumus from "../../../utils/rumus"
import Toast from "../../atom/Toast"
import useToast from "../../../hooks/useToast"

export default function GreaseCalcu() {
  const [gender, setGender, onGenderChange] = useInput("")
  const [beratBadan, setBeratBadan, onBeratBadanChange] = useInput("")
  const [tinggiBadan, setTinggiBadan, onTinggiBadanChange] = useInput("")
  const [umur, setUmur, onUmurChange] = useInput("")

  const [pangkalPaha, setPangkalPaha, onPangkalPahaChange] = useInput("")
  const [panjangLeher, setPanjangLeher, onPanjangLeherChange] = useInput("")
  const [lebarPinggang, setLebarPinggang, onLebarPinggangChange] = useInput("")
  const [result, setResult] = useState(null)
  const modalRef = useRef()

  const [errorMessage, setErrorMessage] = useState()
  const [showToast, setShowToast] = useToast(errorMessage)

  const onCalculate = async (event) => {
    try {
      event.preventDefault()

      const { bodyFatPercentage, suggestions } = rumus.GreseCalculate(
        gender,
        beratBadan,
        tinggiBadan,
        umur,
        pangkalPaha,
        panjangLeher,
        lebarPinggang
      )

      await setResult({
        bodyFatPercentage: bodyFatPercentage.toFixed(2),
        suggestions,
      })

      modalRef.current.showModal()

      setUmur('')
      setBeratBadan('')
      setTinggiBadan('')
      setUmur('')

      setPangkalPaha('')
      setLebarPinggang('')
      setPanjangLeher('')
    } catch (error) {
      setErrorMessage(error.message)
      setShowToast(true)
    }
  }

  const greaseCalculator = data.calculator.filter(
    (data) => data.title !== "Aktivitas Fisik"
  )

  return (
    <div>
      {showToast && <Toast>{errorMessage}</Toast>}

      <div className="w-full flex justify-center items-center py-8 md:px-6">
        <form onSubmit={onCalculate}>
          <div
            className={`grid grid-cols-6 items-center justify-center gap-y-6 gap-x-4 max-w-3xl mb-4`}>
            {greaseCalculator.map((item, index) => {
              switch (index) {
                case 0:
                  return (
                    <div className="col-span-6" key={index}>
                      <Card visual={true}>
                        <h3 className="text-sm font-medium text-[#b9b9b9]">
                          Pilih Jenis Kelamin mu!
                        </h3>
                        <div className="flex lg:flex-row flex-col items-center justify-between">
                          <span className="lg:text-2xl text-base pb-2 text-secondary font-semibold">
                            {item.title}
                          </span>
                          <div className="flex gap-4 lg:px-8">
                            <div className="form-control flex flex-col justify-center items-center">
                              <img className="lg:w-20 w-16" src={iconBoy} alt="" />
                              <label className="label cursor-pointer space-x-2">
                                <input
                                  type="radio"
                                  name="gender"
                                  className="radio lg:radio-sm radio-xs radio-info"
                                  required
                                  checked={gender === "laki-laki"}
                                  value="laki-laki"
                                  onChange={onGenderChange}
                                />
                                <span className="label-text lg:text-lg text-sm">
                                  Laki Laki
                                </span>
                              </label>
                            </div>
                            <div className="form-control flex flex-col justify-center items-center">
                              <img
                                className="lg:w-20 w-16"
                                src={iconGirl}
                                alt=""
                              />
                              <label className="label cursor-pointer space-x-2">
                                <input
                                  type="radio"
                                  name="gender"
                                  required
                                  className="radio lg:radio-sm radio-xs radio-info"
                                  checked={gender === "perempuan"}
                                  value="perempuan"
                                  onChange={onGenderChange}
                                />
                                <span className="label-text lg:text-lg text-sm">
                                  Perempuan
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  )
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                  return (
                    <div className="lg:col-span-3 col-span-full" key={index}>
                      <Card
                        valueInput={
                          index === 1
                            ? beratBadan
                            : index === 2
                            ? tinggiBadan
                            : index === 3
                            ? umur
                            : index === 4
                            ? pangkalPaha
                            : index === 5
                            ? lebarPinggang
                            : panjangLeher
                        }
                        onInputChange={
                          index === 1
                            ? onBeratBadanChange
                            : index === 2
                            ? onTinggiBadanChange
                            : index === 3
                            ? onUmurChange
                            : index === 4
                            ? onPangkalPahaChange
                            : index === 5
                            ? onLebarPinggangChange
                            : onPanjangLeherChange
                        }
                        {...item}
                      />
                    </div>
                  )
                default:
                  return null
              }
            })}
          </div>
          <button type="submit" className="btn btn-secondary w-full">
            Saya menghitung!
          </button>
        </form>
      </div>

      {result && (
        <dialog ref={modalRef} id="my_modal_4" className="modal">
          <div className="modal-box text-lg lg:w-6/12 w-10/12 max-w-5xl flex flex-col text-center justify-center items-center">
            <div className="flex flex-col mb-2">
              <h3 className="font-bold lg:text-2xl text-lg">
                Persentase Lemak Tubuh kamu: {result.bodyFatPercentage}%
              </h3>
              <h2 className="font-bold lg:text-xl text-lg">Tips Untuk Kamu</h2>
              <ul className="lg:text-base text-sm">
                {result?.suggestions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn lg:text-base text-sm font-medium btn-secondary w-full">
                  Hitung Lagi
                </button>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </div>
  )
}
