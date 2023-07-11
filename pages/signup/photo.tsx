import SelectInput from "@/components/atoms/Select-Input";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function signUpPhoto() {
  return (
    <>
      <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
        <div className="container mx-auto">
          <form action="">
            <div className="form-input d-md-block d-flex flex-column">
              <div>
                <div className="mb-20">
                  <div className="image-upload text-center">
                    <label for="avatar">
                      <Image
                        src={"/assets/icon/signup-photo.svg"}
                        width={120}
                        height={120}
                        alt=""
                      />
                    </label>
                    <input
                      id="avatar"
                      type="file"
                      name="avatar"
                      accept="image/png, image/jpeg"
                    />
                  </div>
                </div>
                <h2 className="fw-bold text-xl text-center color-palette-1 m-0">
                  Shayna Anne
                </h2>
                <p className="text-lg text-center color-palette-1 m-0">
                  shayna@anne.com
                </p>
                <div className="pt-50 pb-50">
                  <SelectInput
                    label="Favorite Game"
                    placeHolder="Select Category"
                    options={[
                      { label: "First Person Shoter", value: "fps" },
                      { label: "Role Playing Game", value: "rpg" },
                      { label: "Arcade", value: "arcade" },
                      { label: "Sport", value: "sport" },
                    ]}
                  />
                </div>
              </div>

              <div className="button-group d-flex flex-column mx-auto">
                <Link
                  className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                  href="/signup/success"
                  role="button"
                >
                  Create My Account
                </Link>
                <Link
                  className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15"
                  href="#"
                  role="button"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
