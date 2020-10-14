import React from "react"
import Title from "./Title"
import { graphql, useStaticQuery } from "gatsby"
import { JobSection, JobCenter, ButtonContainer, JobButton, JobInfo } from "../elements/JobElements"

const query = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
      nodes {
        strapiId
        company
        date
        position
        desc {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  console.log(data)
  // destructering
  const {
    allStrapiJobs: { nodes: jobs },
  } = data
  console.log(jobs)
  const [value, setValue] = React.useState(0)
  const { company, position, date, desc } = jobs[value]
  console.log(company, position, date, desc)

  return (
    <JobSection>
      <Title title="erfarenhet" />
      <JobCenter>
        <ButtonContainer>
          {jobs.map((item, index) => {
            return (
              <JobButton
                key={item.strapiId}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </JobButton>
            )
          })}
        </ButtonContainer>
        {/* job info */}
        <JobInfo>
          <h3>{position}</h3>
          <p className="job-date">{date}</p>
          {desc.map(item => {
            return (
                <p>{item.name}</p>
            )
          })}
        </JobInfo>
      </JobCenter>
    </JobSection>
  )
}

export default Jobs
