import { useCallback } from "react";
import useCompanyList from "../hooks/useCompanyList";

export function CompanyItem({ full_name, address, country, avatar_url, account_id }: any) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <div className="company_main_wrapper">
        <div className="company_img_wrapper">
          <img src={avatar_url || "images/cmp1.png"} alt="team_img1" />
          <div className="btc_team_social_wrapper">
            <h1>{country}</h1>
          </div>
        </div>
        <div className="opening_job">
          <h1>
            <a href="#0">{address}</a>
          </h1>
        </div>
        <div className="company_img_cont_wrapper">
          <h4><a href={`company/${account_id}`}>{full_name}</a></h4>
        </div>
      </div>
    </div>
  );
}

export default function CompanyList() {
  const company = useCompanyList();

  const displayCompany = useCallback(() => {
    return (
      <>
        {company.map((company: any, i: number) => {
          return (
            <CompanyItem
              key={i}
              full_name={company.full_name}
              address={company.address}
              country={company.country}
              avatar_url={company.avatar_url}
              account_id={company.account_id}
            />
          );
        })}
      </>
    );
  }, [company]);

  return <>{displayCompany()}</>;
}
