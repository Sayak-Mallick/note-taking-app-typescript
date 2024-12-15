import { Button, Col, Form, FormGroup, Row, Stack } from 'react-bootstrap'
import CreateReactSelect from "react-select/creatable"

export const NewForm = () => {
  return (
    <>
      <Form>
        <Stack gap={4}>
          <Row>
            <Col>
              <Form.Group controlId='title'>
                <Form.Label>Title</Form.Label>
                <Form.Control required />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId='tags'>
                <Form.Label>Tags</Form.Label>
                <CreateReactSelect isMulti />
              </Form.Group> 
            </Col>
          </Row>
          <FormGroup controlId='markdown'>
            <Form.Label>Body</Form.Label>
            <Form.Control as='textarea' required rows={15} />
          </FormGroup>
          <Stack direction='horizontal' gap={2} className='justify-content-end'>
            <Button variant='primary' type='submit'>Submit</Button>
            <Button variant='outline-secondary' type="button">Cancel</Button>
          </Stack>
        </Stack>
      </Form>
    </>
  )
}
