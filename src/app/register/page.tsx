"use client";
import { registerUser } from "@/lib/actions";
import React from "react";

export default function RegisterPage() {
  async function handleSubmit(formData: FormData) {
    const data = await registerUser(formData);
    console.log(data);
  }

  return (
    <div>
      <section className="max-w-7xl bg-neutral-400 py-32 ">
        <form
          action={(formData) => handleSubmit(formData)}
          className="flex flex-col"
        >
          <label htmlFor="username">Username</label>
          <input id="username" name="username" type="text" />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            className="text-black"
            type="password"
          />

          <button type="submit">Register</button>
        </form>
      </section>
    </div>
  );
}
