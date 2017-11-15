import React from 'react';
import { TextField } from './fields/TextField';
import { NumberField } from './fields/NumberField';
import { CalcField } from './fields/CalcField';
import { AddableField } from './fields/AddableField';
import './Fieldset.css';

export function Fieldset(props) {
  const fields = props.fieldset.fields.map(field => {
    switch (field.type) {
      case 'number':
        return (
          <NumberField
            key={field.id}
            values={props.meta.availableValues}
            calculationTypes={props.meta.calculationTypes}
            updateValue={props.createUpdateValueFunction(field)}
            field={field}
          >
            {field.label}
          </NumberField>
        );
      case 'calculated':
        return (
          <CalcField
            key={field.id}
            charSheetData={props.charSheetData}
            calculation={field.calculation}
            modifier={props.charSheetData.id}
          >
            {field.label}
          </CalcField>
        );
      case 'addable':
        return (
          <AddableField
            key={field.id}
            updateValue={props.createUpdateValueFunction}
          >
            Addable field
          </AddableField>
        )  
      default:
        return (
          <TextField
            key={field.id}
            updateValue={props.createUpdateValueFunction(field)}
          >
            {field.label}
          </TextField>
        )
    }
  });

  return (
    <fieldset id={props.fieldset.id}>
      <legend>{props.fieldset.title}</legend>
      <div uk-grid="true">
        {fields}
      </div>
    </fieldset>
  )
}