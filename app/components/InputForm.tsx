/* eslint-disable @typescript-eslint/no-explicit-any */
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Controller } from "react-hook-form";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import { IconCircleX } from "@tabler/icons-react";

const InputForm = ({
  label,
  placeholder,
  logo,
  register,
  type,
  control,
  style,
}: {
  style?: string;
  label: string;
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
  logo?: React.ReactElement;
  register?: any;
  control?: any;
}) => {
  const [image, setImage] = useState<string>();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target) {
          setImage(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  switch (style) {
    case "phone":
      return (
        <div className="flex flex-1 flex-col gap-3">
          <span>{label}</span>
          <Controller
            name="phone"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <PhoneInput defaultCountry="ID" placeholder={placeholder} className="input input-bordered" {...field} />
            )}
          />
        </div>
      );
      break;

    case "select":
      return (
        <div className="flex flex-col gap-3">
          <span>{label}</span>
          <select name="gender" className="select select-bordered w-full" defaultValue="default" {...register}>
            <option disabled value="default">
              {placeholder}
            </option>
            <option value={"male"}>Male</option>
            <option value={"female"}>Female</option>
          </select>
        </div>
      );
      break;

    case "file":
      return (
        <div className="flex flex-1 flex-col gap-3">
          <span>{label}</span>
          {!image ? (
            <input
              type={type}
              name="picture"
              className="file-input file-input-bordered w-full max-w-xs"
              {...register}
              onChange={handleChange}
            />
          ) : (
            <div className="avatar relative w-fit">
              <div className="mask mask-squircle w-32">
                <Image src={image} width={500} height={500} alt="profile" />
              </div>
              <button className="absolute bg-red-500 rounded-full right-0 top-0 hover:animate-spin" onClick={()=>setImage("")}>
                <IconCircleX className="text-white"/>
              </button>
            </div>
          )}
        </div>
      );
      break;

    default:
      return (
        <div className="flex flex-1 flex-col gap-3">
          <span>{label}</span>
          <label className="input input-bordered flex items-center gap-2">
            {logo}
            <input type={type} className="grow" placeholder={placeholder} {...register} />
          </label>
        </div>
      );
      break;
  }
};

export default InputForm;
