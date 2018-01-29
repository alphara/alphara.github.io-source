import React from 'react'
import { Button, Item } from 'semantic-ui-react'

import PDFResume from './pdf/CV-ArtemArakcheev-AIA.pdf'

export default function Resume(props) {
  return (
    <Item.Group>
      <Item>
        <Item.Description>
        You can download my resume.
        <br /><br />
        <Button color='teal' href={PDFResume} target='_blank'>
          Resume
        </Button>
        </Item.Description>
      </Item>
    </Item.Group>
  );
}
