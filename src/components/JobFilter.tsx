import { useForm, FormProvider, Controller } from "react-hook-form";

export default function JobFilter() {
  const methods = useForm();
  const { ref } = methods.register("cb");
  console.log("==================", methods.getValues("cb"));

  return (
    <>
      <div className="job_filter_category_sidebar jb_cover">
        <div className="job_filter_sidebar_heading jb_cover">
          <h1>salary</h1>
        </div>
        <div className="category_jobbox jb_cover">
          <div className="widget price-range">
            <ul>
              <li className="range">
                <div id="range-price" className="range-box" />
                <input type="text" id="price" className="price-box" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <FormProvider {...methods}>
        <form>
          <div className="job_filter_category_sidebar jb_cover">
            <div className="job_filter_sidebar_heading jb_cover">
              <h1>work experience</h1>
            </div>
            <div className="category_jobbox jb_cover">
              <p className="job_field">
                <input type="checkbox" id="c1" name="cb" />
                <label htmlFor="c1">No Experience</label>
              </p>
              <p className="job_field">
                <input type="checkbox" id="c2" name="cb" />
                <label htmlFor="c2">0-2 years</label>
              </p>
              <p className="job_field">
                <input type="checkbox" id="c3" name="cb" />
                <label htmlFor="c3">3-5 years</label>
              </p>
              <p className="job_field">
                <input type="checkbox" id="c4" name="cb" />
                <label htmlFor="c4">more than 6 years</label>
              </p>
            </div>
          </div>
        </form>
      </FormProvider>
      <div className="job_filter_category_sidebar jb_cover">
        <div className="job_filter_sidebar_heading jb_cover">
          <h1>type of employment</h1>
        </div>
        <div className="category_jobbox jb_cover">
          <p className="job_field">
            <input type="checkbox" id="c02" name="cb" />
            <label htmlFor="c02">full-time</label>
          </p>
          <p className="job_field">
            <input type="checkbox" id="c03" name="cb" />
            <label htmlFor="c03">part-time</label>
          </p>
          <p className="job_field">
            <input type="checkbox" id="c04" name="cb" />
            <label htmlFor="c04">intern ship</label>
          </p>
        </div>
      </div>
      <div className="job_filter_category_sidebar jb_cover">
        <div className="job_filter_sidebar_heading jb_cover">
          <h1>Date Posted</h1>
        </div>
        <div className="category_jobbox jb_cover">
          <p className="job_field">
            <input type="checkbox" id="c11" name="cb" />
            <label htmlFor="c11">all</label>
          </p>
          <p className="job_field">
            <input type="checkbox" id="c12" name="cb" />
            <label htmlFor="c12">last hours</label>
          </p>
          <p className="job_field">
            <input type="checkbox" id="c13" name="cb" />
            <label htmlFor="c13">last 24 hours</label>
          </p>
          <p className="job_field">
            <input type="checkbox" id="c14" name="cb" />
            <label htmlFor="c14">last 7 days</label>
          </p>
          <p className="job_field">
            <input type="checkbox" id="c15" name="cb" />
            <label htmlFor="c15">last 14 days</label>
          </p>
          <p className="job_field">
            <input type="checkbox" id="c16" name="cb" />
            <label htmlFor="c16">last 30 days</label>
          </p>
        </div>
      </div>
    </>
  );
}
