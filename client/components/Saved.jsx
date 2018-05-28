import React from 'react';

const Saved = (props) =>  {
  return(
    <tr>
      <td class="output">{props.output}</td>
      <td class="total">{props.total}</td>
    </tr>
  )
}

module.exports = {
  Saved: Saved
}