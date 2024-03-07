import { useState, FormEvent } from "react";
import { signIn } from "next-auth/react";
import styled from "styled-components";

// Styled components
const Container = styled.div`
  max-width: 400px;
  margin: auto;
  padding-top: 50px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 20px; /* Adjust or remove based on design preference */
`;

const Button = styled.button`
  padding: 10px 15px;
  cursor: pointer;
`;

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Trigger sign in with the email provider
    await signIn("email", { email, redirect: false });
    // Optionally, handle the result, e.g., show a message to check the inbox
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="email">Email address</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <Button type="submit">Send Sign In Link</Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
