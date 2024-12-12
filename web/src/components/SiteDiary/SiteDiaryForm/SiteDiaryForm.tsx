import styled from 'styled-components'
import type { EditSiteDiaryById, UpdateSiteDiaryInput } from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'
import {
  Form,
  FormError,
  FieldError,
  Label,
  DatetimeLocalField,
  TextField,
  Submit,
  TextAreaField,
  SelectField,
} from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const FormButtonGroupContainer = styled.div`
  justify-content: flex-end !important;
`

type FormSiteDiary = NonNullable<EditSiteDiaryById['siteDiary']>

interface SiteDiaryFormProps {
  siteDiary?: EditSiteDiaryById['siteDiary']
  onSave: (data: UpdateSiteDiaryInput, id?: FormSiteDiary['id']) => void
  error: RWGqlError
  loading: boolean
}

const SiteDiaryForm = (props: SiteDiaryFormProps) => {
  const onSubmit = (data: FormSiteDiary) => {
    props.onSave(data, props?.siteDiary?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormSiteDiary> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="date"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Date
        </Label>

        <DatetimeLocalField
          name="date"
          defaultValue={formatDatetime(props.siteDiary?.date)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="date" className="rw-field-error" />

        <Label
          name="notes"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Notes
        </Label>

        <TextField
          name="notes"
          defaultValue={props.siteDiary?.notes}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="notes" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextAreaField
          name="description"
          defaultValue={props.siteDiary?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="weather"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Weather
        </Label>

        <SelectField
          name="weather"
          defaultValue={props.siteDiary?.weather}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        >
          <option>Sunny</option>
          <option>Cloudy</option>
          <option>Windy</option>
          <option>Rainy</option>
        </SelectField>

        <FieldError name="weather" className="rw-field-error" />

        <FormButtonGroupContainer className="rw-button-group">
          <Link to={routes.siteDiaries()} className="rw-button">
            Cancel
          </Link>
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </FormButtonGroupContainer>
      </Form>
    </div>
  )
}

export default SiteDiaryForm
