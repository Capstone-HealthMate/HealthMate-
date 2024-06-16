import React from 'react';
import TextHeader from '../atom/TextHeader';
import Card from '../atom/Card';

import data from '../../utils/dummy';
import iconBoy from './../../assets/card/boy.svg'
import iconGirl from './../../assets/card/girl.svg'


export default function CardLayout() {
    // Ambil placeholder dan satuan dari data atau tetapkan nilai default
    const placeholder = "Enter value"; // Ganti dengan nilai yang sesuai dari `data.calculator[0]`
    const satuan = "unit"; // Ganti dengan nilai yang sesuai dari `data.calculator[0]`

    return (
        <div className='flex flex-col bg-transparent w-full'>
            <div className="flex flex-col justify-center items-center mb-8 w-full">
                <TextHeader>Check Your Healthy</TextHeader>
                <div role="tablist" className="tabs tabs-bordered gap-x-8">
                    <a role="tab" className="tab text-xl text-neutral font-semibold">Mineral Check</a>
                    <a role="tab" className="tab text-xl text-neutral font-semibold">Calories Check</a>
                    <a role="tab" className="tab text-xl text-neutral font-semibold">Grease Check</a>
                    <a role="tab" className="tab text-xl text-neutral font-semibold">Body Mass Index</a>
                </div>
            </div>

            <div className="bg-[#d8ecff8b] w-full py-8 flex justify-center items-center">
                <form action="">
                    <div className={`grid grid-cols-6 items-center justify-center gap-y-6 gap-x-4 max-w-3xl mb-4`}>
                        {
                            data.calculator.map((item, index) => (
                                index === 0 ?
                                    (
                                        <div className="col-span-6">
                                            <Card visual={true} key={index}>
                                                <h3 className='text-sm font-medium text-[#b9b9b9]'>Pilih Jenis Kelamin mu!</h3>
                                                <div className="flex items-center justify-between">
                                                    <span className='text-2xl text-secondary font-semibold'>{item.title}</span>
                                                    <div className="flex gap-4 px-8">
                                                        <div className="form-control flex flex-col justify-center items-center">
                                                            <img className='w-20 h-20' src={iconBoy} alt="" />
                                                            <label className="label cursor-pointer space-x-2">
                                                                <input type="radio" name="radio-7" className="radio radio-sm radio-info" checked />
                                                                <span className="label-text text-lg">Laki Laki</span>
                                                            </label>
                                                        </div>
                                                        <div className="form-control flex flex-col justify-center items-center">
                                                            <img className='w-20 h-20' src={iconGirl} alt="" />
                                                            <label className="label cursor-pointer space-x-2">
                                                                <input type="radio" name="radio-7" className="radio radio-sm radio-info" checked />
                                                                <span className="label-text text-lg">Perempuan</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card>
                                        </div>
                                    )
                                    : index === 4 ?
                                        (
                                            <div className="col-span-3">
                                                <div className='w-full h-full rounded-2xl flex flex-col gap-y-6 font-semibold text-secondary bg-white border p-4'>
                                                    <div className="flex flex-col relative mb-">
                                                        <img className='absolute right-2 -top-8 w-16 h-16' src={item.asset} alt="" />
                                                        <h3 className='text-base'>{item.title}</h3>
                                                    </div>

                                                    <h3 className='text-sm font-medium text-[#b9b9b9]'>Pilih nilai di bawah ini!!!</h3>
                                                    <div className="flex gap-4">
                                                        <div className="form-control flex justify-center items-center">
                                                            <label className="label cursor-pointer space-x-1">
                                                                <input type="radio" name="radio-7" className="radio radio-sm radio-info" checked />
                                                                <span className="label-text text-base">Jarang</span>
                                                            </label>
                                                        </div>
                                                        <div className="form-control flex flex-col justify-center items-center">
                                                            <label className="label cursor-pointer space-x-1">
                                                                <input type="radio" name="radio-7" className="radio radio-sm radio-info" checked />
                                                                <span className="label-text text-base">Cukup</span>
                                                            </label>
                                                        </div>
                                                        <div className="form-control flex flex-col justify-center items-center">
                                                            <label className="label cursor-pointer space-x-1">
                                                                <input type="radio" name="radio-7" className="radio radio-sm radio-info" checked />
                                                                <span className="label-text text-base">Sering</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ) :
                                        index <= 4 ?

                                            <div className='col-span-3'>
                                                <Card key={index} {...item}></Card>
                                            </div>
                                            :
                                            <div className='col-span-2'>
                                                <Card key={index} {...item}></Card>
                                            </div>
                            ))
                        }
                    </div>
                    <button className='btn btn-secondary w-full'>Saya menghitung!</button>
                </form>
            </div>
        </div>
    );
}
