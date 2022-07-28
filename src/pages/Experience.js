import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2016"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            King George Inter College, Lucknow, Uttar Pradesh
          </h3>
          <p> High School</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            St. Joseph Inter College, Lucknow, Uttar Pradesh
          </h3>
          <p>Intermediate</p>
        </VerticalTimelineElement>
       <VerticalTimelineElement
       className="vertical-timeline-element--current status"
       date="2019 - 2023"
       iconStyle={{background:"#3e497a", color: "#fff" }}
       icon={<SchoolIcon/>}
       >
        <h3 className="verticle-timeline-element-title">
          GLA UNIVERSITY, MATHURA
        </h3>
        
        <h4 className="vertical-timeline-element-subtitle">
        Programme: Btech
        </h4>

        <h4 className="verticle-timeline-element-subtitle">
          Stream : Computer Science and Engineering
        </h4>
       </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;