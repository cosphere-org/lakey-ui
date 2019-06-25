import React, { useState } from "react"

import { Accordion, Icon, Segment, Grid } from "semantic-ui-react"
import {
  XYChart,
  BarSeries,
  CrossHair,
  XAxis,
  YAxis,
  LinearGradient,
} from "@data-ui/xy-chart"

import { scaleOrdinal } from "@vx/scale"
// import { LegendOrdinal } from "@vx/legend"

import { color as colors } from "@data-ui/theme"
import { RadialChart, ArcSeries, ArcLabel } from "@data-ui/radial-chart"

import ReactWordCloud from "react-wordcloud"

import styled from "@emotion/styled"

const colorScale = scaleOrdinal({ range: colors.categories })

const PiePlotContainer = styled.div`
  display: flex;
  align-items: stretch;
  margin-bottom: -70px;
  margin-top: -30px;
`

const HistogramPlotContainer = styled.div`
  display: flex;
  align-items: stretch;
  margin-bottom: -30px;
  margin-top: -70px;
  float: right;
`

const Histogram = ({ distribution, description }) => {
  const data = distribution.map(({ value, count }) => ({ x: value, y: count }))

  return (
    <HistogramPlotContainer>
      <XYChart
        ariaLabel="Bar chart showing ..."
        width={400}
        height={400}
        xScale={{ type: "band" }}
        yScale={{ type: "linear" }}
        renderTooltip={({ datum, color }) => (
          <div>
            <strong style={{ color }}>{datum.label}</strong>
            <div>
              <strong>x </strong>
              {datum.x}
            </div>
            <div>
              <strong>y </strong>
              {datum.y}
            </div>
          </div>
        )}
        snapTooltipToDataX
      >
        <LinearGradient id="my_fancy_gradient" from="red" to="yellow" />
        <XAxis label={description} />
        <YAxis label="number of occurence" />
        <BarSeries data={data} fill="url('#my_fancy_gradient')" />
        <CrossHair showHorizontalLine fullHeight stroke="pink" />
      </XYChart>
    </HistogramPlotContainer>
  )
}

// margin={{ top, right, bottom, left }}

const PieChart = ({ data }) => (
  <PiePlotContainer>
    <RadialChart
      ariaLabel="This is a radial-chart chart of..."
      width={600}
      height={400}
      renderTooltip={({ datum, fraction }) => (
        <div>
          <strong>{datum.label}</strong>
          {`${datum.value} (${(fraction * 100).toFixed(2)} %)`}
        </div>
      )}
    >
      <ArcSeries
        data={data}
        pieValue={d => d.value}
        fill={arc => colorScale(arc.data.label)}
        stroke="#fff"
        strokeWidth={1}
        label={arc => `${arc.data.label} ${arc.data.value.toFixed(0)}`}
        labelComponent={<ArcLabel />}
        innerRadius={radius => 0.35 * radius}
        outerRadius={radius => 0.6 * radius}
        labelRadius={radius => 0.75 * radius}
      />
    </RadialChart>
    {/* TODO: TEMPORARY DISABLED */}
    {/* <LegendOrdinal
      direction="column"
      scale={colorScale}
      shape="rect"
      fill={({ datum }) => colorScale(datum)}
      labelFormat={label => label}
    /> */}
  </PiePlotContainer>
)

// /////////////////////////////////////////////////////////////////////////////
const SingleColumnDetails = ({
  name,
  description,
  // eslint-disable-next-line
  is_enum,
  // eslint-disable-next-line
  is_nullable,
  type,
  size,
  distribution,
}) => {
  const [isActive, setActive] = useState(false)

  const toggleAccordion = () => setActive(!isActive)

  return (
    <Accordion>
      <Accordion.Title active={isActive} onClick={toggleAccordion}>
        {name}
        <Icon name="dropdown" />
      </Accordion.Title>
      <Accordion.Content active={isActive}>
        <Segment>
          <Grid>
            <Grid.Row>
              <Grid.Column width={6}>
                <p>
                  description: <b>{description}</b>
                </p>
                <p>
                  type: <b>{type}</b>
                </p>
                <p>
                  size: <b>{size}</b>
                </p>
                <p>
                  is nullable: {/* eslint-disable-next-line */}
                  <Icon name={is_nullable ? "check" : "x"} />
                </p>
                <p>
                  is enum: {/* eslint-disable-next-line */}
                  <Icon name={is_enum ? "check" : "x"} />
                </p>
              </Grid.Column>
              <Grid.Column width={10} floated="right">
                {["FLOAT", "INTEGER"].includes(type) && (
                  <Histogram
                    distribution={distribution}
                    description={description}
                  />
                )}
                {type === "STRING" && (
                  <>
                    {distribution.length > 7 ? (
                      <ReactWordCloud
                        words={distribution.map(({ count, value }) => ({
                          text: value,
                          value: count,
                        }))}
                      />
                    ) : (
                      <PieChart
                        data={distribution.map(({ count, value }) => ({
                          label: value,
                          value: count,
                        }))}
                      />
                    )}
                  </>
                )}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Accordion.Content>
    </Accordion>
  )
}

const ColumnsDetails = ({ columns }) => (
  <>
    {columns.map((column, i) => (
      <SingleColumnDetails key={i} {...column} />
    ))}
  </>
)

export default ColumnsDetails
