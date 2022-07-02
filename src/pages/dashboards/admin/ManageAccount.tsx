import { useCallback, useState } from "react";
import AccountProfileModal from "../../../components/AccoutPriofileModal";
import CandidateProfileForm from "../../../components/CandidateProfileForm";
import useAccountList from "../../../hooks/useAccountList";

export default function ManageAccount() {
  const accounts = useAccountList();
  const [selectedAccount, setSelectedAccount] = useState(accounts[0]);

  const displayJobList = useCallback(() => {
    return (
      <>
        {accounts.map((account, key) => {
          return (
            <div className="dashboard_latest_job_box jb_cover" key={key}>
              <div
                className="dashboard_job_list_next"
                style={{ display: "flex" }}
              >
                <img
                  src={account.avatar_url || "/images/rs1.jpg"}
                  alt="post_img"
                />
              </div>
              <div className="dashboard_job_list">
                <h6>
                  <a href="#0">{account.full_name}</a>
                </h6>
                <p>
                  {" "}
                  <i className="far fa-envelope" /> {account.email}
                </p>
              </div>
              <div className="dashboard_job_list_next">
                <p className="gn">{account.role}</p>
              </div>
              <div className="dashboard_job_list_next">
                <ul>
                  <li>
                    <a
                      href="#0"
                      onClick={() => setSelectedAccount(account)}
                      data-toggle="modal"
                      data-target="#myModal1"
                    >
                      <i className="fas fa-eye" />
                    </a>
                  </li>
                  <li>
                    <a href="#0" data-toggle="modal" data-target="#myModal1">
                      <i className="fas fa-edit" />
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="fas fa-trash-alt" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </>
    );
  }, [accounts]);

  return (
    <>
      {selectedAccount && <AccountProfileModal profile={selectedAccount} />}
      <div className="col-lg-9 col-md-12 col-sm-12 col-12">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="job_main_overflow jb_cover">
              <div className="dashboard_latest_job_overlow">
                <div className="manage_jobs_wrapper jb_cover">
                  <div
                    className="dashboard_job_list_next mange_list"
                    style={{ textAlign: "left" }}
                  >
                    <h6>Avatar</h6>
                  </div>
                  <div className="dashboard_job_list mange_list">
                    <h6>Account Info</h6>
                  </div>
                  <div className="dashboard_job_list_next mange_list">
                    <h6>Role</h6>
                  </div>
                  <div className="dashboard_job_list_next mange_list">
                    <h6>action</h6>
                  </div>
                </div>

                {displayJobList()}

                <div className="blog_pagination_section jb_cover">
                  <ul>
                    <li>
                      <a href="#0" className="prev">
                        {" "}
                        <i className="flaticon-left-arrow" />{" "}
                      </a>
                    </li>
                    <li className="third_pagger">
                      <a href="#0">1</a>
                    </li>
                    <li>
                      <a href="#0">2</a>
                    </li>
                    <li className="d-block d-sm-block d-md-block d-lg-block">
                      <a href="#0">3</a>
                    </li>
                    <li className="d-none d-sm-block d-md-block d-lg-block">
                      <a href="#0">...</a>
                    </li>
                    <li className="d-none d-sm-block d-md-block d-lg-block">
                      <a href="#0">6</a>
                    </li>
                    <li>
                      <a href="#0" className="next">
                        {" "}
                        <i className="flaticon-right-arrow" />{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
