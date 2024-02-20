// JobCard.jsx
import React from 'react';
import styles from "./Dashboard.module.css"; // Import your CSS styles

const JobCard = ({ job }) => {
    return (
        <div className={styles['jobCardWrapper']}>
            <div className={styles["rectangle-40700"]}></div>
            <div className={styles["senior-product-designer"]}>{job.job_opening_name}</div>
            <div className={styles["rectangle-40701"]}></div>
            <div className={styles["_14-application"]}>{job.requirements.length} Application </div>
            <div className={styles["rectangle-40702"]}></div>
            {/* Assuming the "In Process" count is not available in the API response */}
            <div className={styles["_12-in-process"]}>12 In Process </div>
            <div className={styles["rectangle-40703"]}></div>
            {/* Assuming the "Hired" count is not available in the API response */}
            <div className={styles["_16-hired"]}>16 Hired </div>
            <div className={styles["ellipse-4058"]}></div>
            <img className={styles["image-41"]} src={job.imageSrc} alt={`Image for ${job.job_opening_name}`} />
            <div className={styles["rectangle-40808"]}></div>
            <div className={styles["switch-body"]}></div>
            <div className={styles["switch"]}>
                <div className={styles["ellipse-1"]}></div>
            </div>
            <div className={styles["active"]}>Active </div>
            <div className={styles["indore-mp-india"]}>{job.job_location}</div>
            <div className={styles["_10-000-00-15-000-00"]}>{`Salary(INR): ${job.salary}`}</div>
            <div className={styles["_2-year-experience"]}>{`${job.requirements} Year Experience`}</div>
            <div className={styles["location-svgrepo-com-2"]}>
                <svg
                    className={styles["page-12"]}
                    width="14"
                    height="18"
                    viewBox="0 0 14 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7 5.0625C6.06794 5.0625 5.3125 5.81794 5.3125 6.75C5.3125 7.68206 6.06794 8.4375 7 8.4375C7.93206 8.4375 8.6875 7.68206 8.6875 6.75C8.6875 5.81794 7.93206 5.0625 7 5.0625ZM7 9.5625C5.44694 9.5625 4.1875 8.30363 4.1875 6.75C4.1875 5.19637 5.44694 3.9375 7 3.9375C8.55306 3.9375 9.8125 5.19637 9.8125 6.75C9.8125 8.30363 8.55306 9.5625 7 9.5625ZM7 0C3.27231 0 0.25 3.02231 0.25 6.75C0.25 9.57263 5.87781 18.0062 7 18C8.10475 18.0062 13.75 9.53438 13.75 6.75C13.75 3.02231 10.7277 0 7 0Z"
                        fill="#1C212D"
                    />
                </svg>
            </div>
        </div>
    );
};

export default JobCard;
