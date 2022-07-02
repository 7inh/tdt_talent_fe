import { useState, useRef } from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";

import { useSelector } from "react-redux";
import { selectLogin } from "../features/login/loginSlice";

const AccountProfileModal = ({
  profile,
  onSubmit: handleUpdateProfile,
}: any) => {
  const { token } = useSelector(selectLogin);
  const [btnEnable, setBtnState] = useState(true);
  const fullNameInput = useRef<HTMLInputElement>(null);
  const phoneNumberInput = useRef<HTMLInputElement>(null);
  const addressInput = useRef<HTMLInputElement>(null);
  const countryInput = useRef<HTMLInputElement>(null);
  const cityInput = useRef<HTMLInputElement>(null);
  const websiteInput = useRef<HTMLInputElement>(null);
  const attach_resumeInput = useRef<HTMLInputElement>(null);
  const descriptionInput = useRef<HTMLTextAreaElement>(null);

  const methods = useForm();
  const { register, handleSubmit } = methods;

  const onSubmit = (data: any) => console.log(data);
  return (
    <>
      <div
        className="modal fade delete_popup company_popup"
        id="myModal1"
        role="dialog"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <button type="button" className="close" data-dismiss="modal">
              ×
            </button>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <FormProvider {...methods}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="delett_cntn jb_cover">
                      <h1>
                        <i className="fas fa-edit" />
                        General information
                      </h1>
                      <div className="category_wrapper jb_cover">
                        <div className="row">
                          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div className="category_lavel jb_cover">
                              <p>full name :</p>
                            </div>
                          </div>
                          <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                            <div className="delete_jb_form">
                              <input
                                {...register("name")}
                                type="text"
                                name="name"
                                placeholder={profile.full_name || ""}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="category_wrapper jb_cover">
                        <div className="row">
                          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div className="category_lavel jb_cover">
                              <p>email :</p>
                            </div>
                          </div>
                          <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                            <div className="delete_jb_form">
                              <input
                                type="text"
                                name="name"
                                placeholder={
                                  profile.contact_mail || "example@gmail.com"
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="category_wrapper jb_cover">
                        <div className="row">
                          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div className="category_lavel jb_cover">
                              <p>phone :</p>
                            </div>
                          </div>
                          <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                            <div className="delete_jb_form">
                              <input
                                ref={phoneNumberInput}
                                type="text"
                                name="name"
                                placeholder={profile.phone_number || ""}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="category_wrapper jb_cover">
                        <div className="row">
                          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div className="category_lavel jb_cover">
                              <p>Address :</p>
                            </div>
                          </div>
                          <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                            <div className="delete_jb_form">
                              <input
                                ref={addressInput}
                                type="text"
                                name="name"
                                placeholder={
                                  profile.address || "Ho Chi Minh City"
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="category_wrapper jb_cover">
                        <div className="row">
                          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div className="category_lavel jb_cover">
                              <p>contry :</p>
                            </div>
                          </div>
                          <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                            <div className="delete_jb_form">
                              <input
                                ref={countryInput}
                                type="email"
                                name="email"
                                placeholder={profile.country || "Vietnam"}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="category_wrapper jb_cover">
                        <div className="row">
                          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div className="category_lavel jb_cover">
                              <p>city</p>
                            </div>
                          </div>
                          <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                            <div className="delete_jb_form">
                              <input
                                ref={cityInput}
                                type="text"
                                name="name"
                                placeholder={profile.city || "Ho Chi Minh City"}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="category_wrapper jb_cover">
                        <div className="row">
                          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div className="category_lavel jb_cover">
                              <p>website</p>
                            </div>
                          </div>
                          <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                            <div className="delete_jb_form">
                              <input
                                ref={websiteInput}
                                type="text"
                                name="name"
                                placeholder={profile.website || "example.com"}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="category_wrapper jb_cover">
                        <div className="row">
                          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div className="category_lavel jb_cover">
                              <p>attach resume</p>
                            </div>
                          </div>
                          <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                            <div className="delete_jb_form">
                              <input
                                ref={attach_resumeInput}
                                type="text"
                                name="name"
                                placeholder={profile.attach_resume || "none"}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="padder_top jb_cover" />
                      <div className="header_btn search_btn ">
                        <a
                          href="#0"
                          onClick={() => {
                            btnEnable && console.log(methods.getValues("name"));
                          }}
                        >
                          save updates
                        </a>
                      </div>
                      <div className="cancel_wrapper">
                        <a href="#0" data-dismiss="modal">
                          cancel
                        </a>
                      </div>
                    </div>
                  </form>
                </FormProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountProfileModal;
