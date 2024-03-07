import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRouter } from 'next/router';


export default function Contact() {
  const router = useRouter();

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "bff6152d-5b06-46ce-b769-5bc5c297bd17");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            alert('Mesaage Submitted Successfully');
            router.push('/ThankYou');

        }
    }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Container>
        <Row>
        <label htmlFor="name">Name</label>

        <input type="text" name="name" required/>
        
        </Row>
        <Row>
        <label htmlFor="name">Contact Number</label>

        <input type="text" name="number" required/>
        
        </Row>
        <Row>
        <label htmlFor="text">Email</label>

        <input type="email" name="email" required/>
        </Row>
        <Row>
        <label htmlFor="name">Message</label>

        <textarea name="message"></textarea>
        </Row>
        <Row>
        <Button type="submit" variant="outline-primary" style={{color: 'white', backgroundColor: 'darkblue', borderColor: 'darkblue', marginTop: '10px'}}>Submit Form</Button>
        </Row>
        </Container>
      </form>
    </>
  );
} 