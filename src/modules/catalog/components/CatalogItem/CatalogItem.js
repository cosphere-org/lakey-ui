import React, { useState } from "react"
import { Accordion, Icon, Tab, Table, List } from "semantic-ui-react"
import { css } from "@emotion/core"
import { navigate } from "gatsby"
import ColumnsDetails from "./ColumnsDetails"
import SamplesRequestForm from "../SamplesRequestForm"

const SortableTable = ({ data }) => {
  const [{ column, direction, sortedData }, setState] = useState({
    column: null,
    direction: null,
    sortedData: data,
  })

  const handleSort = clickedColumn => () => {
    if (column !== clickedColumn) {
      setState({
        column: clickedColumn,
        direction: "ascending",
        sortedData: sortedData.sort(
          (a, b) => a[clickedColumn] > b[clickedColumn]
        ),
      })
      return
    }
    setState({
      column: clickedColumn,
      direction: direction === "ascending" ? "descending" : "ascending",
      sortedData: sortedData.sort(
        (a, b) => a[clickedColumn] > b[clickedColumn]
      ),
    })
  }

  const columnsNames = Object.keys(sortedData[0])

  return (
    <Table sortable celled fixed>
      <Table.Header>
        <Table.Row>
          {columnsNames.map((key, i) => (
            <Table.HeaderCell
              key={i}
              sorted={column === key ? direction : null}
              onClick={() => handleSort(key)}
            >
              {key}
            </Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {sortedData.map((row, i) => (
          <Table.Row key={i}>
            {columnsNames.map((key, j) => (
              <Table.Cell key={j}>{row[key]}</Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

const ColumnsDetailsPane = ({ sample, spec }) => (
  <Tab.Pane>
    <ColumnsDetails columns={spec} sample={sample} />
  </Tab.Pane>
)

const DescriptionPane = ({ name, sample, description = "tbd" }) => (
  <Tab.Pane>
    <h5>name</h5>
    <p>{name}</p>
    <h5>description</h5>
    <p>{description}</p>
    <h5>sample</h5>
    <SortableTable data={sample} />
  </Tab.Pane>
)

const SamplesRequestPane = ({ spec }) => (
  <Tab.Pane>
    <SamplesRequestForm spec={spec} />
  </Tab.Pane>
)

// const TBDPane = () => (
//   <Tab.Pane>
//     <Message warning>
//       <Message.Header>TBD</Message.Header>
//       <p>I have only 24 hours and need to sleep ;-)</p>
//     </Message>
//   </Tab.Pane>
// );

const ExistingSamplesPane = () => {
  // eslint-disable-next-line
  const onClick = () =>
    alert("not yet implemented but this feature will be cool ;-)")

  return (
    <Tab.Pane>
      <List divided relaxed>
        <List.Item onClick={onClick}>
          <List.Icon
            name="cloud download"
            size="large"
            verticalAlign="middle"
          />
          <List.Content>
            <List.Header as="a">DATAENG-1410</List.Header>
            <List.Description>
              created by: <strong>zibg</strong>
            </List.Description>
            <List.Description>
              created at: <strong>22.06.2019</strong>
            </List.Description>
            <List.Description>
              filters:{" "}
              <strong>
                {"{random_sampling: 80, columns: ['foo', 'bar']}"}
              </strong>
            </List.Description>
          </List.Content>
        </List.Item>
        <List.Item onClick={onClick}>
          <List.Icon
            name="cloud download"
            size="large"
            verticalAlign="middle"
          />
          <List.Content>
            <List.Header as="a">
              data for global warming explorations
            </List.Header>
            <List.Description>
              created by: <strong>sbcm</strong>
            </List.Description>
            <List.Description>
              created at: <strong>11.06.2019</strong>
            </List.Description>
            <List.Description>
              filters:
              <strong>{"{random_sampling: 95, columns: ['trololo']}"}</strong>
            </List.Description>
          </List.Content>
        </List.Item>
        <List.Item onClick={onClick}>
          <List.Icon
            name="cloud download"
            size="large"
            verticalAlign="middle"
          />
          <List.Content>
            <List.Header>data for EDA wifi strenght</List.Header>
            <List.Description>
              created by: <strong>sowj</strong>
            </List.Description>
            <List.Description>
              created at: <strong>13.07.2019</strong>
            </List.Description>
            <List.Description>
              filters:{" "}
              <strong>{"{random_sampling: 77, columns: ['bazinga']}"}</strong>
            </List.Description>
          </List.Content>
        </List.Item>
      </List>
    </Tab.Pane>
  )
}

export const NotebooksWhichUsed = () => {
  // eslint-disable-next-line
  const onClick = () =>
    alert("not yet implemented but this feature will be cool ;-)")

  return (
    <Tab.Pane>
      <List divided relaxed>
        <List.Item onClick={() => navigate("/geolocation")}>
          <List.Icon name="book" size="large" verticalAlign="middle" />
          <List.Content>
            <List.Header as="a">Geolocation exploration</List.Header>
            <List.Description>
              created by: <strong>zibg</strong>
            </List.Description>
            <List.Description>
              created at: <strong>22.06.2019</strong>
            </List.Description>
            <List.Description>
              filters:{" "}
              <strong>
                {"{random_sampling: 80, columns: ['foo', 'bar']}"}
              </strong>
            </List.Description>
          </List.Content>
        </List.Item>
        <List.Item onClick={() => navigate("/anomalies")}>
          <List.Icon name="book" size="large" verticalAlign="middle" />
          <List.Content>
            <List.Header as="a">Anomalies detection</List.Header>
            <List.Description>
              created by: <strong>sbcm</strong>
            </List.Description>
            <List.Description>
              created at: <strong>11.06.2019</strong>
            </List.Description>
            <List.Description>
              filters:
              <strong>{"{random_sampling: 95, columns: ['trololo']}"}</strong>
            </List.Description>
          </List.Content>
        </List.Item>
        <List.Item onClick={() => navigate("/rooms")}>
          <List.Icon name="book" size="large" verticalAlign="middle" />
          <List.Content>
            <List.Header>Room vs outside sensors</List.Header>
            <List.Description>
              created by: <strong>sowj</strong>
            </List.Description>
            <List.Description>
              created at: <strong>13.07.2019</strong>
            </List.Description>
            <List.Description>
              filters:{" "}
              <strong>{"{random_sampling: 77, columns: ['bazinga']}"}</strong>
            </List.Description>
          </List.Content>
        </List.Item>
      </List>
    </Tab.Pane>
  )
}

const panes = [
  { menuItem: "description", render: DescriptionPane },
  { menuItem: "columns details", render: ColumnsDetailsPane },
  { menuItem: "notebooks which used", render: NotebooksWhichUsed },
  { menuItem: "existing samples", render: ExistingSamplesPane },
  { menuItem: "samples request form", render: SamplesRequestPane },
]

const itemCard = css`
  margin-bottom: 10px;
`

export const CatalogItem = props => {
  const { name } = props
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Accordion fluid styled css={itemCard}>
      <Accordion.Title active={isOpen} onClick={toggleAccordion}>
        <Icon name="dropdown" />
        {name}
      </Accordion.Title>
      <Accordion.Content active={isOpen}>
        <Tab panes={panes} {...props} />
      </Accordion.Content>
    </Accordion>
  )
}

export default CatalogItem
