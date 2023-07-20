import TextInput from "@/components/atoms/TextInput";
import Sidebar from "@/components/complex/Sidebar";
import React from "react";
import EditPhotoInput from "@/components/complex/Edit-photo-Input";

export default function edit_Profile() {
  return (
    <>
      <section className="edit-profile overflow-auto">
        <Sidebar user={''} activeMenu="settings" />
        {/* main */}
        <main className="main-wrapper">
          <div className="ps-lg-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
            <div className="bg-card pt-30 ps-30 pe-30 pb-30">
              <form action="">
                {/* photo */}
                  <EditPhotoInput />
                {/* input */}
                <div className="pt-50">
                  <TextInput
                    type="text"
                    name="name"
                    placeHolder="Enter your name"
                    label="Full Name"
                  />
                </div>
                <div className="pt-30">
                  <TextInput
                    type="email"
                    name="email"
                    placeHolder="Enter your email address"
                    label="Email Address"
                  />
                </div>
                <div className="pt-30">
                  <TextInput
                    type="tel"
                    name="phone"
                    placeHolder="Enter your phone number"
                    label="Phone"
                  />
                </div>
                {/* btn */}
                <div className="button-group d-flex flex-column pt-50">
                  <button
                    type="submit"
                    className="btn btn-save fw-medium text-lg text-white rounded-pill"
                    role="button"
                  >
                    Save My Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* </div> */}
        </main>
      </section>
    </>
  );
}
