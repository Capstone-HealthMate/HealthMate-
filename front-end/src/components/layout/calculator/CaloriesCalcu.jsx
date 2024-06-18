import React, { useRef, useState } from "react"

import Card from "../../atom/Card"

import data from "../../../utils/dummy"
import iconBoy from "./../../../assets/card/boy.svg"
import iconGirl from "./../../../assets/card/girl.svg"
import useInput from "../../../hooks/useInput"
import rumus from "../../../utils/rumus"
import useToast from "../../../hooks/useToast"
import Toast from "../../atom/Toast"

export default function CaloriesCalcu() {
  // input form
  const [beratBadan, setBeratBadan, onBeratBadanChange] = useInput("")
  const [tinggiBadan, setTinggiBadan, onTinggiBadanChange] = useInput("")
  const [umur, setUmur, onUmurChange] = useInput("")
  const [aktivitas, setAktivitas, onAktivitasChange] = useInput("")
  const [gender, setGender, onGenderChange] = useInput("")

  // ref
  const modalRef = useRef()

  // data result
  const [result, setResult] = useState(null)


  const [errorMessage, setErrorMessage] = useState('')
  const [showToast, setShowToast] = useToast(errorMessage)

  // calculate
  const onCalculate = async (event) => {
    try {
      event.preventDefault()

      // Destructure CaloriesCalculate dari rumus
      const { BMR, maintenanceCalories, restingCalories, saran } =
        rumus.CaloriesCalculate(
          beratBadan,
          tinggiBadan,
          umur,
          aktivitas,
          gender
        )

      // Set hasil ke dalam state result
      await setResult({ BMR, maintenanceCalories, restingCalories, saran })

      // Tampilkan modal
      modalRef.current.showModal()

      // Reset nilai input setelah menghitung
      setBeratBadan("")
      setTinggiBadan("")
      setUmur("")
      setAktivitas("")
      setGender("")

    } catch (error) {
      setErrorMessage(error.message)
      setShowToast(true)
    }
  }

  const caloriesCalculator = data.calculator.slice(
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
        <form action="">
          <div
            className={`grid grid-cols-6 items-center justify-center gap-y-6 gap-x-4 max-w-3xl mb-4`}>
            {caloriesCalculator.map((item, index) => {
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
                  return (
                    <div className="lg:col-span-3 col-span-full" key={index}>
                      <Card
                        valueInput={
                          index === 1
                            ? beratBadan
                            : index === 2
                            ? tinggiBadan
                            : umur
                        }
                        onInputChange={
                          index === 1
                            ? onBeratBadanChange
                            : index === 2
                            ? onTinggiBadanChange
                            : onUmurChange
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
          <button onClick={onCalculate} className="btn btn-secondary w-full">
            Saya menghitung!
          </button>
        </form>
      </div>

      {result && (
        <dialog ref={modalRef} id="my_modal_4" className="modal">
          <div className="modal-box text-lg lg:w-6/12 w-10/12 max-w-5xl flex flex-col text-center justify-center items-center">
            <div className="flex flex-col mb-2">
              <h3 className="font-bold lg:text-2xl text-base">
                BMR (Basal Metabolic Rate) kamu {result?.BMR.toFixed(2)}
              </h3>
              <h2 className="font-bold lg:text-2xl text-base">
                Kebutuhan harian kalori mu{" "}
                {result?.maintenanceCalories.toFixed(2)}
              </h2>
            </div>
            <h2 className="font-bold lg:text-xl text-base">Tips Untuk Kamu</h2>
            <ul className="lg:text-base text-sm">
              {result?.saran.map((item, index) => (
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
