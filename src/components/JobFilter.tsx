import { useRef, useState } from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";

export default function JobFilter() {
  const methods = useForm();
  const position = useRef<HTMLInputElement>(null);
  const position2 = useRef<HTMLInputElement>(null);

  const newFilter = {
    position: [0],
  };

  const updateFilter = () => {
    console.log(newFilter);
  };

  function removeItemOnce(arr: any, value: any) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

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
      <div className="job_filter_category_sidebar jb_cover">
        <div className="job_filter_sidebar_heading jb_cover">
          <h1>Position</h1>
        </div>
        <div className="category_jobbox jb_cover">
          <p className="job_field">
            <input
              type="checkbox"
              id="c1"
              ref={position}
              onChange={() => {
                if (position.current?.checked) newFilter.position.push(1);
                else removeItemOnce(newFilter.position, 1);
                updateFilter()
              }}
            />
            <label htmlFor="c1">AI-Engineer</label>
          </p>
          <p className="job_field">
            <input
              type="checkbox"
              id="c2"
              ref={position2}
              onChange={() => {
                if (position2.current?.checked) newFilter.position.push(2);
                else removeItemOnce(newFilter.position, 2);
                updateFilter()
              }}
            />
            <label htmlFor="c2">Backend</label>
          </p>
        </div>
      </div>
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
