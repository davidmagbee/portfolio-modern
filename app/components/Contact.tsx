"use client";

import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/16/solid";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:david.magbee@me.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. %0D%0A %0D%0A ${formData.message} %0D%0A %0D%0A (${formData.email})`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl mx-auto">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <div>
          {/* hotfix in place | TODO: address contact section layout odd behavior */}
          <h4 className="text-2xl font-semibold text-center">
            I&apos;m open to new opportunities!{" "}
            <span className="decoration-[#468621]/50 underline">
              Let&apos;s talk.
            </span>
          </h4>
        </div>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#468621] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+1 (574) 329-2425</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#468621] h-7 w-7 animate-pulse" />
            <p className="text-2xl">david.magbee@me.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#468621] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Better Farm</p>
          </div>
        </div>
        {/* TODO: Update contact form to incorporate formspree from portfolio v2 */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
            cols={30}
            rows={10}
          />
          <button
            type="submit"
            className="bg-[#468621] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
