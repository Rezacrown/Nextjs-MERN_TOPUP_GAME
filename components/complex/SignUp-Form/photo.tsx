import React, {useState, useEffect, useCallback} from "react";
import Image from "next/image";
import Link from "next/link";
import SelectInput from "@/components/atoms/Select-Input";
import {useRouter} from "next/router";

import {getCategory, checkLocalStorage, handleSignup} from '@/services/Auth'

import {SuccesNotif} from '@/utils/notif/index'



interface FormDataInterface {
  name: string,
  email: string;
  password: string;
  favorite: string | undefined;
  image: any
}


export default function signUpPhoto() {
  const router = useRouter()
  const [formData, setFormData] = useState<FormDataInterface>()
  const [category, setCategory] = useState([])
  const [previewImage, setPreviewImage] = useState('')
  
  // callback
  const fetchData = useCallback( async () => {
    const parsing = checkLocalStorage('signup-form')
    if(parsing !== null) { setFormData(parsing) }

    getCategory().then((categoryData: any)=>{ 
      // loop dulu untuk manipulasi data agar cocok dengan componentnya
      let _temp: any = [];
      categoryData.forEach((cat: any)=> {
        _temp.push({
          label: cat.name,
          value: cat._id
        })
      })
      setCategory(_temp)
    } )

    
  }, [checkLocalStorage, getCategory])
  
  useEffect(()=> {
    fetchData()

    console.log('formdata >>>>')
    // console.log(formData)
  }, [])
  
  
  const handleChangecategory = (e: any) => {
    const favorite = e.target.value
    const temp: any = {...formData, favorite}
    setFormData(temp)
  }

  const handleChangeImage = (e: any) => {
    // ambil file gambar yang diselect
    const image = e.target.files[0]

    // buat preview dari url yang dicreate oleh URL.createObjectURL() berupa sting
    const urlImg: string = URL.createObjectURL(image)
    setPreviewImage(urlImg)

    // set Data di formData
    const temp: any = {...formData, image}
    setFormData(temp)
  }


  const handleSubmit = async (e: any) => {
    e.preventDefault()
    // set payload
      const payload = new FormData()
      payload.append('avatar', formData?.image || '')
      payload.append('email', formData?.email || '')
      payload.append('name', formData?.name || '')
      payload.append('password', formData?.password || '')
      payload.append('favorite', formData?.favorite || '')
      //#
      payload.append('phoneNumber', '081134568000')
      payload.append('username', 'testusername' || '')
      // payload.append('role', '' || '')
  
      await handleSignup(payload).then((response: any)=> {
        localStorage.removeItem('signup-form')
        SuccesNotif(`Selamat datang ${response?.name || ''}, anda berhasil Register`)
        router.push('/signup/success')
      })
  }
  
  



  return (
    <>
      <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
        <div className="container mx-auto">
          {/*  */}
          <form onSubmit={handleSubmit} >
            <div className="form-input d-md-block d-flex flex-column">
              <div>
                <div className="mb-20">
                  <div className="image-upload text-center">
                    <label htmlFor="avatar">
                      <Image
                        src={previewImage || "/assets/icon/signup-photo.svg"}
                        width={120}
                        height={120}
                        alt=""
                        className="rounded-circle"
                      />
                    </label>
                    <input
                      id="avatar"
                      type="file"
                      name="avatar"
                      accept="image/png, image/jpeg"
                      onChange={handleChangeImage}

                    />
                  </div>
                </div>
                <h2 className="fw-bold text-xl text-center color-palette-1 m-0">
                  {formData?.name ?? "nama"}
                </h2>
                <p className="text-lg text-center color-palette-1 m-0">
                {formData?.email ?? "email"}
                </p>
                <div className="pt-50 pb-50">
                  <SelectInput
                    label="Favorite Game"
                    placeHolder="Select Category"
                    options={category}
                    handleChange={handleChangecategory}
                    required={true}
                  />
                </div>
              </div>

              <div className="button-group d-flex flex-column mx-auto">
                <button
                  className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                  role="button"
                  type='submit'
                >
                  Create My Account
                </button>
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
