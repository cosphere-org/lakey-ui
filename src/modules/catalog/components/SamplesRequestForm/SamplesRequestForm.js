import React from "react"
import { Checkbox, Button, Input, Dropdown } from "formik-semantic-ui"
import { Divider, Grid, Message } from "semantic-ui-react"
import { Formik, Form, FieldArray } from "formik"
import { Persist } from "formik-persist"

const getOperatorOptions = type => {
  switch (type) {
    case "BOOL":
      return ["==", "!="].map(operator => ({ text: operator, value: operator }))
    default:
      return ["==", "!=", ">", ">=", "<=", "<"].map(operator => ({
        text: operator,
        value: operator,
      }))
  }
}

const SingleFilter = ({ columnsOptions, index, onRemove, spec, filter }) => {
  const selectedColumnName = filter.column
  const selectedColumnSpec =
    (selectedColumnName &&
      spec.filter(({ name }) => name === selectedColumnName)[0]) ||
    {}

  return (
    <Grid.Row verticalAlign="middle">
      <Grid.Column width={5}>
        <Dropdown
          name={`filters.${index}.column`}
          options={columnsOptions}
          inputProps={{
            fluid: true,
            placeholder: "column",
          }}
        />
      </Grid.Column>
      <Grid.Column width={4}>
        <Dropdown
          name={`filters.${index}.operator`}
          options={getOperatorOptions(selectedColumnSpec.type)}
          inputProps={{
            fluid: true,
            placeholder: "operator",
          }}
        />
      </Grid.Column>
      <Grid.Column width={5}>
        <Input
          name={`filters.${index}.value`}
          inputProps={{
            fluid: true,
            placeholder: "value",
            ...(["INTEGER", "FLOAT"].includes(selectedColumnSpec.type)
              ? { type: "number" }
              : { type: "text" }),
          }}
        />
      </Grid.Column>
      <Grid.Column width={2}>
        <Button size="small" onClick={onRemove}>
          -
        </Button>
      </Grid.Column>
    </Grid.Row>
  )
}

export const SamplesRequestForm = ({ spec, name }) => {
  const columnsOptions = spec.map(({ name }) => ({ text: name, value: name }))

  return (
    <div>
      <Formik
        initialValues={{ randomize_ratio: 100 }}
        render={({ values, setFieldValue }) => (
          <Form>
            <Divider horizontal>columns</Divider>
            {spec.map(({ name }, i) => (
              <Checkbox
                type="checkbox"
                name={`columns.${name}`}
                label={name}
                key={i}
              />
            ))}
            <Divider horizontal>filters</Divider>
            <FieldArray
              name="filters"
              render={arrayHelpers => (
                <Grid>
                  {values.filters &&
                    values.filters.map((filter, index) => (
                      <SingleFilter
                        spec={spec}
                        index={index}
                        key={index}
                        filter={filter}
                        columnsOptions={columnsOptions}
                        onRemove={() => arrayHelpers.remove(index)}
                        setFieldValue={setFieldValue}
                      />
                    ))}
                  <Grid.Row>
                    <Grid.Column>
                      <Button
                        type="button"
                        onClick={() => arrayHelpers.push({ value: "" })}
                      >
                        Add a filter
                      </Button>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              )}
            />
            <Divider horizontal>random sampling</Divider>
            <Input
              inputProps={{
                onChange: (e, { name, value }) => {
                  setFieldValue(name, parseInt(value))
                },
                type: "number",
                min: 1,
                max: 100,
                placeholder: "randomize ratio",
              }}
              name="randomize_ratio"
            />
            <Divider horizontal />
            {/* <Button.Submit>Send Request For Sample</Button.Submit> */}
            <Persist name={`samplingRequestForm.${name}`} />
            <Divider horizontal>Download</Divider>
            <Message info>
              <Message.Header>
                to get data copy to the next cell:
              </Message.Header>
              <Message.Content>
                <pre>
                  {`df = lakey.download(${JSON.stringify(values, null, 4)})`}
                </pre>
              </Message.Content>
            </Message>
          </Form>
        )}
      />
    </div>
  )
}

export default SamplesRequestForm
