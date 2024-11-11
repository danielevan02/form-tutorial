'use client'

import InputForm from "@/app/components/InputForm";
import { IconAbc, IconCake, IconMail } from "@tabler/icons-react";
import { useForm, SubmitHandler } from "react-hook-form";

type Customer = {
  name: string;
  birth: Date;
  phone: string;
  email: string;
  address: string;
  gender: 'male' | 'female';
  photo: string;
}

export default function Insert(){
  const {register, handleSubmit, control} = useForm<Customer>()

  const onSubmit: SubmitHandler<Customer> = (data) => {
    
  }
  return(
    <div className="relative">
      <div className="w-full justify-between flex sticky top-0">
        <h1 className="font-extrabold text-2xl">Insert New Customer</h1>
        <input form="form" className="btn btn-primary uppercase" type="submit"/>
      </div>
      <form id="form" onSubmit={handleSubmit(onSubmit)} className="mt-10 flex flex-col gap-4">
        <InputForm 
          style="file" 
          label='Profile Picture' 
          type='file' 
          register={register('photo')}
        />
        <InputForm 
          label='Name' 
          type='text' 
          placeholder='insert your name...' 
          logo={<IconAbc/>} 
          register={register('name')}
        />
        <InputForm 
          label='Email' 
          type='email' 
          placeholder='example@mail.com' 
          logo={<IconMail/>} 
          register={register('email')}
        />
        <div className="flex flex-col md:flex-row gap-4  justify-between ">
          <InputForm 
            style="phone" 
            label='Phone' 
            type='text' 
            placeholder='enter your phone...' 
            logo={<IconMail/>} 
            control={control}
          />
          <InputForm 
            label='Birthdate' 
            type='date' 
            logo={<IconCake/>} 
            register={register('birth')}
          />
        </div>
        <InputForm 
          style="select" 
          label='Gender' 
          type='text' 
          placeholder="select your gender..." 
          logo={<IconMail/>} 
          register={register('gender')}
        />
      </form>
    </div>
  )
}