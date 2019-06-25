import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { navigate } from "gatsby"

const CatalogSearch = ({ onSearch }) => (
  <Formik
    initialValues={{ query: "" }}
    onSubmit={({ query }, { setSubmitting }) => {
      onSearch(query)
      setSubmitting(false)
      navigate("/search_results")
    }}
  >
    {({ errors, isSubmitting }) => (
      <Form>
        {/* TODO: this div is quick hack for using semantic ui with formik */}
        <div className={`ui action input ${errors.query && "error"}`}>
          <Field type="text" name="query" />
          <ErrorMessage name="text" component="div" />
          <button
            type="submit"
            disabled={isSubmitting}
            className="ui blue button"
          >
            Search
          </button>
        </div>
      </Form>
    )}
  </Formik>
)

export default CatalogSearch
