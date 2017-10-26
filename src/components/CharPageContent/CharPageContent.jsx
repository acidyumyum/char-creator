import React from 'react';
import { Fieldset } from './Fieldset';

export function CharPageContent(props) {
  const fieldsets = props.sheet.map(fieldset => <Fieldset key={fieldset.id} fieldset={fieldset}/>);
  return (
    <div className="xlarge-80 large-80 medium-70 small-100 tiny-100">
      <form>
        {fieldsets}
      </form>
    </div>
  )
}