import React, { useRef, useState } from "react"
import Card from "../../atom/Card"

import data from "../../../utils/dummy"
import iconBoy from "./../../../assets/card/boy.svg"
import iconGirl from "./../../../assets/card/girl.svg"
import useInput from "../../../hooks/useInput"
import rumus from "../../../utils/rumus"
import Toast from "../../atom/Toast"
import useToast from "../../../hooks/useToast"
import Button from "../../atom/button"

export default function MineralCalcu() {
  const [gender, setGender, onGenderChange] = useInput("")
  const [beratBadan, setBeratBadan, onBeratBadanChange] = useInput("")
  const [tinggiBadan, setTinggiBadan, onTinggiBadanChange] = useInput("")
  const [umur, setUmur, onUmurChange] = useInput("")

  const [aktivitas, setAktivitas, onAktivitasChange] = useInput()
  const [pangkalPaha, setPangkalPaha, onPangkalPahaChange] = useInput("")
  const [lebarPinggang, setLebarPinggang, onLebarPinggangChange] = useInput("")
  const [panjangLeher, setPanjangLeher, onPanjangLeherChange] = useInput("")
  const [result, setResult] = useState(null)
  const modalRef = useRef()

  const [errorMessage, setErrorMessage] = useState()
  const [showToast, setShowToast] = useToast(errorMessage)

  const onCalculate = async (event) => {
    try {

      event.preventDefault()

      const { waterIntake, suggestions } = rumus.WaterIntakeCalculate(
        gender,
        beratBadan,
        tinggiBadan,
        umur,
        aktivitas
      )

      await setResult({
        waterIntake,
        suggestions,
      })

      modalRef.current.showModal()
    } catch (error) {
      setErrorMessage(error.message)
      setShowToast(true)
    }
    
  }

  const mineralCalculator = data.calculator.slice(
    0,
    data.calculator.length - 3
  )

  return (
    <div>
      {showToast && (
        <Toast>
          {errorMessage}
        </Toast>
      )}
      <div className="w-full flex justify-center items-center py-8">
        <form onSubmit={onCalculate}>
          <div
            className={`grid grid-cols-6 items-center justify-center gap-y-6 gap-x-4 max-w-4xl mb-4`}>
            {mineralCalculator.map((item, index) => {
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
                case 5:
                case 6:
                case 7:
                  return (
                    <div
                      className={`${index > 4 ? "lg:col-span-2 col-span-full" : "lg:col-span-3 col-span-full"}`}
                      key={index}>
                      <Card
                        valueInput={
                          index === 1
                            ? beratBadan
                            : index === 2
                            ? tinggiBadan
                            : index === 3
                            ? umur
                            : index === 5
                            ? pangkalPaha
                            : index === 6
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
                            : index === 5
                            ? onPangkalPahaChange
                            : index === 6
                            ? onLebarPinggangChange
                            : onPanjangLeherChange
                        }
                        {...item}
                      />
                    </div>
                  )
                case 4:
                  return (
                    <div className="lg:col-span-3 col-span-full">
                      <div className="w-full h-full rounded-2xl flex flex-col gap-y-6 font-semibold text-secondary bg-white border p-4">
                        <div className="flex flex-col relative mb-">
                          <img
                            className="absolute right-2 -top-8 w-16 h-16"
                            src={item.asset}
                            alt=""
                          />
                          <h3 className="text-base">{item.title}</h3>
                        </div>

                        <h3 className="text-sm font-medium text-[#b9b9b9]">
                          Pilih nilai di bawah ini!!!
                        </h3>
                        <div className="flex lg:gap-4 gap-1">
                          <div className="form-control flex justify-center items-center">
                            <label className="label cursor-pointer space-x-1">
                              <input
                                type="radio"
                                name="radio-7"
                                required
                                className="radio lg:radio-sm radio-xs radio-info"
                                checked={aktivitas === "Jarang"}
                                value="Jarang"
                                onChange={onAktivitasChange}
                              />
                              <span className="label-text lg:text-base text-xs">
                                Jarang
                              </span>
                            </label>
                          </div>
                          <div className="form-control flex flex-col justify-center items-center">
                            <label className="label cursor-pointer space-x-1">
                              <input
                                type="radio"
                                name="radio-7"
                                required
                                className="radio lg:radio-sm radio-xs radio-info"
                                checked={aktivitas === "Cukup"}
                                value="Cukup"
                                onChange={onAktivitasChange}
                              />
                              <span className="label-text lg:text-base text-xs">
                                Cukup
                              </span>
                            </label>
                          </div>
                          <div className="form-control flex flex-col justify-center items-center">
                            <label className="label cursor-pointer space-x-1">
                              <input
                                type="radio"
                                name="radio-7"
                                required
                                className="radio lg:radio-sm radio-xs radio-info"
                                checked={aktivitas === "Sering"}
                                value="Sering"
                                onChange={onAktivitasChange}
                              />
                              <span className="label-text lg:text-base text-xs">
                                Sering
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                default:
                  return null
              }
            })}
          </div>
          <Button type="submit" className="btn btn-filled w-full">
            Saya menghitung!
          </Button>
        </form>
      </div>

      {result && (
        <dialog ref={modalRef} id="my_modal_4" className="modal">
          <div className="modal-box lg:text-lg text-base lg:w-6/12 w-10/12 max-w-5xl flex flex-col text-center justify-center items-center">
            <div className="flex flex-col mb-2">
              <h2 className="font-bold lg:text-2xl text-xl">
                Kebutuhan Mineral Kamu {result.waterIntake}
              </h2>
            </div>
            <h2 className="font-bold lg:text-xl text-lg">Tips Untuk Kamu</h2>
            <ul className="lg:text-base text-sm">
              {result?.suggestions.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
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
