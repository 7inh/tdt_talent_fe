export default function CandidateProfileForm({
  fullNameInput,
  phoneNumberInput,
  profile,
  btnEnable,
  handleUpdateProfile,
}: any) {
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
                            ref={fullNameInput}
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
                            placeholder={profile.phone_number || "09........"}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="category_wrapper jb_cover">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                        <div className="category_lavel jb_cover">
                          <p>location :</p>
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                        <div className="delete_jb_form">
                          <input
                            type="text"
                            name="name"
                            placeholder={profile.address || "Ho Chi Minh City"}
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
                        btnEnable && handleUpdateProfile();
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
    </>
  );
}
