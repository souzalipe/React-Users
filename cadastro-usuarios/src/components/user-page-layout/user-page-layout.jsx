import { Information } from "../infromation-page/information-page"
import { Form } from "../Form-page.jsx/Form-page"
import "./LayoutComponent.css"

export const LayoutComponent = () =>{
    return(
        <main>

            <section className="info_section">
                <h1>informações do site</h1>
                <Information></Information>
            </section>

            <section className="form_section">
                <h1>formulário</h1>
                <Form></Form>
            </section>

        </main>
    )
}