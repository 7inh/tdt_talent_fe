import { useForm, FormProvider, Controller } from "react-hook-form";

export default function CompanyProfileForm({
  profile,
  btnEnable,
  handleUpdateProfile,
}: any) {
  const methods = useForm();
  const { register } = methods;

  const handleSubmit = () => {
    handleUpdateProfile({
      full_name: methods.getValues("name") || profile.full_name,
      phone_number: methods.getValues("phone") || profile.phone_number,
      address: methods.getValues("address") || profile.address,
      country: methods.getValues("country") || profile.country,
      website: methods.getValues("website") || profile.country,
    });
  };

  return (
    <>
      <FormProvider {...methods}>
        <form>
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
                    <div className="delett_cntn jb_cover">
                      <h1>
                        <i className="fas fa-edit" />
                        Contact information
                      </h1>
                      <div className="category_wrapper jb_cover">
                        <div className="row">
                          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div className="category_lavel jb_cover">
                              <p>Company Name :</p>
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
                                readOnly
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
                                {...register("phone")}
                                type="text"
                                name="phone"
                                placeholder={
                                  profile.phone_number || "your phone number"
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
                              <p>Address :</p>
                            </div>
                          </div>
                          <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                            <div className="delete_jb_form">
                              <input
                                {...register("address")}
                                type="text"
                                name="address"
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
                                {...register("country")}
                                type="email"
                                name="country"
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
                              <p>website</p>
                            </div>
                          </div>
                          <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                            <div className="delete_jb_form">
                              <input
                                {...register("website")}
                                type="text"
                                name="website"
                                placeholder={profile.website || "example.com"}
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
                            btnEnable && handleSubmit();
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </>
  );
}
