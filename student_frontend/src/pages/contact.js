import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { ContactPage, ContactForm, ContactHeading, FormGroup, ContactInput, ContactTextarea, ContactSumbitButton } from "../elements/ContactElements"

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" description="Contact page" />
      <ContactPage>
        <ContactForm>
          <ContactHeading>kontakta mig</ContactHeading>
          <form action="https://formspree.io/f/xjvpgwdn" method="POST">
            <FormGroup className="form-group">
              <ContactInput
                type="text"
                placeholder="Your name"
                name="name"
              />
              <ContactInput
                type="email"
                placeholder="e-mail"
                name="email"
              />
              <ContactTextarea
                name="message"
                rows="5"
                placeholder="meddelande"
              ></ContactTextarea>
            </FormGroup>
            <ContactSumbitButton type="submit">
              Skicka
            </ContactSumbitButton>
          </form>
        </ContactForm>
      </ContactPage>
    </Layout>
  )
}

export default contact
